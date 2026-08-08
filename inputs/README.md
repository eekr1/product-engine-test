# Inputs Katmanı (Project Intake & Truth Management)

## 1. Amacı ve Sistem İçindeki Yeri

`inputs/` klasörü, Product Engine'in projeler hakkında kullanıcı tarafından sağlanan, normalize edilen, doğrulanan ve onaylanan proje gerçeği (Project Truth) giriş katmanıdır.

Product Engine mimarisinde sorumluluklar kesin sınırlarla ayrılmıştır:

```text
inputs/
→ Proje hakkında kullanıcı tarafından sağlanan ve normalize edilen truth (Ne biliyoruz?)

engine/PROJECT_INTAKE.md
→ Hangi bilgilerin alınması gerektiğinin sözleşmesi (Hangi bilgileri toplamalıyız?)

engine/ASSUMPTION_RULES.md
→ Eksik bilgiyle nasıl davranılacağının kuralları (Eksik alanları nasıl yönetiriz?)

engine/CONFLICT_RESOLUTION.md
→ Çelişkili bilgilerin nasıl çözüleceğinin kuralları (Çelişkileri nasıl çözeriz?)

packages/
→ Input'a göre hangi package/document setinin seçileceği (Kapsam nedir?)

templates/
→ Seçilen document'ın nasıl üretileceği (Dokümanlar nasıl formatlanır?)

runs/
→ Belirli bir execution sırasında kullanılan input snapshot'ının kaydı (Çalışmada ne oldu?)

outputs/
→ Approved input'tan üretilmiş final deliverable (Temiz çıktı nerede?)
```

`inputs/` katmanı diğer katmanların sorumluluklarını (package seçimi, doküman seçimi, kural koyma veya run kaydı tutma) üstlenmez.

---

## 2. Klasör Yapısı ve Naming Kuralları

Product Engine V0 için approved fiziksel klasör yapısı şudur:

```text
inputs/
├── README.md
├── PROJECT_INPUT_TEMPLATE.md
├── pending/
│   └── README.md
└── approved/
    └── README.md
```

### Proje Klasör ve Dosya Yapılanması

Bir projenin girdileri klasör bazlı tutulur:

```text
inputs/pending/<project-slug>/
├── PROJECT_INPUT.md
├── sources/          [opsiyonel]
└── attachments/      [opsiyonel]

inputs/approved/<project-slug>/
├── PROJECT_INPUT.md  (veya v1/PROJECT_INPUT.md, v2/PROJECT_INPUT.md)
├── sources/          [opsiyonel]
└── attachments/      [opsiyonel]
```

Daha hafif projelerde tek dosya kullanımı mümkündür:
- `inputs/pending/<project-slug>.md`
- `inputs/approved/<project-slug>-v1.md`

### Project Slug Standardı
- Küçük harfli (`lowercase`)
- URL-safe, tire ile ayrılmış (`hyphen-separated`)
- Türkçe özel karakter içermeyen (`no turkish special chars`)
- Stable (Approved olduktan sonra sessizce değiştirilemez)
- Örnekler: `io-makina`, `vibehall`, `talkx`, `example-project`

Aynı proje için farklı slug'lar altında duplicate kayıt oluşturulması yasaktır.

---

## 3. Input Lifecycle (Yaşam Döngüsü)

Authoritative input lifecycle şu mantıkla işler:

```text
Raw Project Information (Kullanıcı Brief'i / Dokümanlar)
       │
       ▼
Normalization (Yapılandırma & Sınıflandırma)
       │
       ▼
Pending Input (inputs/pending/<project-slug>/)
       │
       ▼
Clarification / Conflict Resolution / Assumption Verification
       │
       ▼
Explicit User Approval (Açık Kullanıcı Onayı)
       │
       ▼
Approved Input (inputs/approved/<project-slug>/)
       │
       ▼
Run Snapshot (runs/active/<run-id>/INPUT_SNAPSHOT.md)
```

---

## 4. Pending vs Approved Sözleşmesi

| Özellik | Pending Input (`inputs/pending/`) | Approved Input (`inputs/approved/`) |
|---|---|---|
| **Durumu** | Taslak, eksik, doğrulanmamış, conflict içeren veya onay bekleyen | Doğrulanmış, eksiksiz/varsayımlı, conflict'siz ve açıkça onaylanmış |
| **Rolü** | Intake tamamlama ve analiz çalışma alanı | Generation Source of Truth (Üretim Gerçeklik Kaynağı) |
| **Generation İzni** | **HAYIR** (Doğrudan run başlatılamaz) | **EVET** (Product Engine run'ı başlatılabilir) |
| **Project Truth Niteliği** | authoritative değildir | Reusable canonical project truth |
| **Değişebilirlik** | Düzenlenebilir / Revize edilebilir | **Immutable Logical Version** (Doğrudan overwrite edilemez) |

---

## 5. Explicit Approval (Açık Onay) Kuralı

Bir `pending` input sessizce veya otomatik olarak `approved` hale getirilemez.

1. **Açık Kullanıcı Eylemi Şarttır:** Kullanıcının `"approved"`, `"onaylıyorum"`, `"devam edebiliriz"`, `"bu bilgiler doğru"`, `"bu inputu kullan"` gibi net ve tereddütsüz bir ifadesi bulunmalıdır.
2. **Agent Kendi Kendine Onay Veremez:** Agent `"Bilgiler yeterli görünüyor, approved sayıyorum"` diyerek `status: approved` atayamaz.
3. **Approval Metadata:** Approved input içerisinde onay kaydı bulunmalıdır:
   ```yaml
   approved: true
   approved_at: 2026-08-08T04:30:00Z
   approved_by: user
   ```

---

## 6. Approved Input Immutability & Versioning

Approved duruma gelmiş bir input dosyası **asla yerinde (in-place) overwrite edilmez**.

### Sürümleme Mantığı
- İlk onaylanan sürüm: `v1` (veya `1.0`)
- Sürüm değiştirme adımları:
  1. Mevcut `approved` sürüm korunur.
  2. Eski approved sürümün status değeri `superseded` olarak güncellenebilir/işaretlenebilir (`supersedes` zinciri kurulur).
  3. Değişiklik talebi üzerine `inputs/pending/<project-slug>/` altında yeni bir pending revision (`v2` adayı) oluşturulur.
  4. Kullanıcıdan yeniden **explicit user approval** alınır.
  5. Onay alındığında yeni approved version (`v2`) oluşturulur.

### Canonical Version Metadata
Her approved input şu metadata alanlarını taşır:
```yaml
input_id: INPUT-EXAMPLE-PROJECT-V1
project_name: Example Project
project_slug: example-project
input_version: "1.0"
status: approved # pending | approved | superseded
created_at: 2026-08-08T04:30:00Z
updated_at: 2026-08-08T04:30:00Z
approved_at: 2026-08-08T04:30:00Z
approved_by: user
supersedes: "" # İlk versiyon için boş, sonraki versiyonlarda e.g. INPUT-EXAMPLE-PROJECT-V1
source_type: user-provided # user-provided | existing-project | provided-document | repository | explicit-assumption
```

### Current Active Approved Version Kuralı
Bir projenin aktif kullanımda olan onaylı girdisi, o proje slug'ına ait **status'ü approved olan en yüksek sürüm numaralı** dosyadır. Gereksiz pointer veya sembolik link sistemleri kullanılmaz.

---

## 7. Approved Input ile Run Snapshot Ayrımı

Çok önemli operasyonel sınır:

- `inputs/approved/<project-slug>/`: Projenin güncel, yeniden kullanılabilir onaylı gerçeğidir (**Reusable Current Truth**).
- `runs/active/<run-id>/INPUT_SNAPSHOT.md`: Run başlatıldığı andaki approved input sürümünün dondurulmuş, değişmez operasyonel kopyasıdır (**Immutable Operational Snapshot**).

Run başladıktan sonra `inputs/approved/` altındaki veri değişse dahi aktif çalışmanın `INPUT_SNAPSHOT.md` kopyası **değişmez**. Yeni input sürümüyle çalışmak için **yeni bir run** başlatılması gerekir.

---

## 8. Canonical Input Document Structure

Her proje için tek bir canonical input belgesi (`PROJECT_INPUT.md`) tutulur. Aynı bilgilerin JSON, YAML, Markdown gibi farklı formatlarda kopyalanarak saklanması (duplication) yasaktır.

`PROJECT_INPUT.md` standardı:
1. **Metadata** (YAML Frontmatter / Table)
2. **Original Brief** (Kullanıcının ham anlatımı - yorumlanmadan saklanır)
3. **Project Identity** (Proje Adı, Slug, Türü, Durumu)
4. **Problem & Purpose** (Ana amaç, çözülen problem)
5. **Target Audience** (Kullanıcı rolleri ve ihtiyaçları)
6. **Scope Boundaries** (In Scope / Out of Scope / Future Expansion)
7. **Delivery Target** (Canonical Delivery Profile)
8. **Technical Context & Preferences** (Stack tercihleri, kısıtlar)
9. **Design Context** (Görsel ve UX yönü)
10. **Existing Project Context** (Mevcut proje ise: Current Reality, Target State, Transition Scope)
11. **Content & Data Sources** (Kaynaklar, belgeler, güven seviyeleri)
12. **Known Decisions** (Onaylanmış kararlar)
13. **Open Questions** (Açık sorular - kritikler çözülmüş olmalıdır)
14. **Assumptions** (Onaylanmış/açık varsayımlar)
15. **Conflicts** (Çözülmüş/kalan çelişkiler)
16. **Approval & Verification** (Onay durumu ve kontroller)

---

## 9. Canonical Intake Değerleri ve Kuralları

`engine/PROJECT_INTAKE.md` intake sözleşmesinin ana sahibidir. `inputs/` katmanı bu değerlere birebir uyar.

### Project Type (Proje Türleri)
Yalnızca `engine/PROJECT_INTAKE.md` içinde tanımlı 10 canonical değerden biri olabilir:
- `web-app`
- `api-service`
- `mobile-app`
- `internal-tool`
- `landing-page`
- `content-platform`
- `integration`
- `infrastructure`
- `prototype`
- `other`

*(Önemli: `saas` bir project type değildir; SaaS bir iş modeli veya package kapsamıdır. `project_type: saas` yazılamaz!)*

### Delivery Profile
Yalnızca 4 canonical değerden biri olabilir (casing ve yazım korunmalıdır):
- `Foundation`
- `Prototype`
- `Implementation Ready`
- `Production Ready`

*(Önemli: `prod`, `implementation-ready`, `demo` gibi türetilmiş veya küçük harfli ifadeler canonical truth kabul edilmez.)*

### Project State
- `new`: Sıfırdan başlanan projeler (Greenfield).
- `existing`: Mevcut kod veya dokümanı olan projeler (Brownfield).

---

## 10. Existing vs Greenfield Approach

### Greenfield (`new`)
- Bilinenler, Onaylanan tercihler, Açık sorular, Varsayımlar, Kapsam dışı ve Gelecek planları ayrılır.
- "Belki sonra ekleriz" ifadesi mevcut kapsam yapılamaz.

### Existing Project (`existing`)
Üç katman net biçimde ayrılmalıdır:
1. **Current Reality:** Şu an sistemde ne var? (Mevcut stack, mevcut kod, bilinen borçlar).
2. **Target State:** Ne olması isteniyor? (Hedef mimari/özellikler).
3. **Transition Scope:** Bu çalışmada/run'da ne kadarı yapılacak?

Desired target state, current reality gibi yazılamaz.

---

## 11. Raw Input vs Normalization

Kullanıcı serbest metinle talep verebilir (Örn: *"React olsun, mobil de olabilir, şimdilik demomsu yapalım"*).

- **Normalization:** Bu metni deterministic alanlara (`technical_preferences`, `delivery_profile`, `scope_boundaries`) dönüştürme ve sınıflandırma işidir.
- **Sınır:** Normalization yaparken agent sessizce mimari karar veya varsayım uyduramaz.
- **Original Brief:** Kullanıcının ilk ham ifadeleri `## Original Brief` bölümünde aynen korunur.

---

## 12. Eksik Bilgi, Varsayım ve Çelişki Yönetimi

### Eksik Bilgi (`engine/ASSUMPTION_RULES.md` & `engine/PROJECT_INTAKE.md`)
- **Zorunlu Alan Eksikse:** Input `pending` kalmak zorundadır. Agent zorunlu alanı kendi uydurarak `approved` yapamaz.
- **Kritik Olmayan Eksiklik:** Assumption yapılabilir. Yapılan varsayım `PROJECT_INPUT.md` içerisindeki `Assumptions` bölümünde açıkça listelenmeli ve onaylanmalıdır.
- **Operasyonel Run Varsayımları:** Run sırasında ortaya çıkan varsayımlar `runs/<run-id>/ASSUMPTIONS.md` dosyasında tutulur; input katmanında tutulmaz.

### Çelişkiler (`engine/CONFLICT_RESOLUTION.md`)
- Bilgiler veya kaynaklar arasında çelişki varsa `Conflicts` bölümünde listelenir.
- **Kritik Çelişki (Critical Conflict)** çözülmeden input `approved` yapılamaz.

---

## 13. Security, Provenance & Portability

1. **Secret & Sensitive Data Safety:**
   - Şifreler, API secret'ları, private key'ler, auth token'lar asla `inputs/` dosyalarına yazılmaz.
   - Yalnızca değişken ismi referansı verilebilir (Örn: `STRIPE_API_KEY: required`).
2. **Portable References:**
   - Yerel bilgisayar yolları (`file:///C:/Users/...` veya `C:\...`) kullanılmaz.
   - Repo içi bağıl yollar (`docs/spec.md`) veya generic referanslar kullanılır.
3. **Source / Provenance Tracking:**
   - Bilgilerin kaynağı sınıflandırılır: `user-provided`, `existing-project`, `provided-document`, `repository`, `explicit-assumption`.
   - Güven seviyeleri: `Authoritative`, `Trusted`, `Reference Only`, `Unverified`.

---

## 14. Input Validation Checklist (Pending → Approved Geçiş Kontrolü)

Bir input `approved` yapılmadan önce şu kontrollerin tümü doğrulanmalıdır:

- [ ] **Structure Validation:** Canonical format ve `PROJECT_INPUT.md` yapısına uygun mu?
- [ ] **Required Intake Validation:** `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `primary_language` dolu mu?
- [ ] **Allowed Values Validation:** `project_type` 10 canonical değerden biri mi? `delivery_profile` 4 canonical değerden biri mi? `project_state` new/existing mi?
- [ ] **No SaaS Drift:** `project_type` alanına `saas` yazılmamış mı?
- [ ] **Existing Separation:** Existing proje ise Current Reality / Target State / Transition Scope ayrılmış mı?
- [ ] **Conflict Validation:** Çözülmemiş kritik çelişki kalmamış mı?
- [ ] **Assumption Validation:** Yapılan varsayımlar net ve kabul edilebilir mi?
- [ ] **Secret Safety Validation:** Şifre, secret veya token içeriyor mu? (İçermemeli!)
- [ ] **Portable Path Validation:** Yerel `file:///` veya makineye özel path var mı? (Olmamalı!)
- [ ] **Explicit Approval Validation:** Kullanıcı açıkça onay vermiş mi? (`approved: true`, `approved_by: user`)
- [ ] **Version & Identity Validation:** `input_id` ve `input_version` tanımlı ve deterministic mi?

---

## 15. Cancellation, Stale & Delete Policy

- **Approved Version Retention:** Approved durumdaki eski input sürümleri asla silinmez. Geçersizleşen sürümler `status: superseded` olarak saklanır.
- **Pending Cleanup / Cancellation:** Terk edilen veya iptal edilen pending çalışmaları silinebilir veya `pending` altında pasif kayıt olarak kalabilir. Ayrı bir top-level klasör (`rejected`, `cancelled`) V0'da açılmaz.

---

## 16. Model Independence & Transparency

- Input kuralları ve şablonları Claude, Gemini, GPT veya diğer tüm LLM agent'ları için tamamen eşdeğer ve tarafsızdır.
- Private chain-of-thought, gizli prompt veya modele özel mantık depolanmaz. Yalnızca açık, yapılandırılmış metinler ve kararlar saklanır.
