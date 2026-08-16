---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "approved"
project_type: "landing-page"
project_state: "new"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-17T02:17:01+03:00"
updated_at: "2026-08-17T02:17:37+03:00"
approved_at: "2026-08-17T02:17:37+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start-scenario"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `approved` durumu kullanıcının explicit onayı ile kesinleşmiştir ve immutable'dır.

---

## 1. Original Brief

```text
Trakya Teknik Makine için satış görüşmelerinde kullanılmak üzere modern, güven veren ve profesyonel bir kurumsal frontend web sitesi demosu (landing page) hazırlanması. Proje kaynağı `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` self-contained project truth olarak esas alınmıştır. Doğrulanmış factual bilgiler: Firma adı (Trakya Teknik Makine), Statü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi), Hizmet 1 (Yedek Parça Temini), Hizmet 2 (Yerinde Teknik Destek), Hizmet 3 (Makine Bakım ve Onarım), Bölge bağlamı (Trakya bölgesi, endüstriyel/makine teknik servis bağlamı).
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page`
- **Project State:** `new`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (standard):** Fresh capable agent'ların ek mimari/planning pass yapmadan wave plan adımlarını doğrudan uygulayabilmesi, mock content boundary'sini ve frontend mimarisini kurabilmesi için yeterli agent-ready planlama derinliğidir.
- **Design (light):** Endüstriyel/teknik kurumsal marka kimliği için modern tipografi, kompozisyon ritmi, renk paleti, kontrollü motion ve responsive layout kurallarını tanımlar. Sektör klişelerinden (ör. generic lacivert hero + 3 kart + standart footer) uzak, özgün ve yüksek kaliteli visual direction sağlar.

> `design_planning` için `none` profile yoktur. UI/UX taşıyan kurumsal web sitesi/landing page projelerinde `light` minimum geçerli kanonik tasarım profildir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine için firmanın ne yaptığını, yetkili servis statüsünü ve üç temel hizmetini profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamak.

### Problem

Trakya Teknik Makine'nin potansiyel satış görüşmelerinde gösterilebilecek, firma uzmanlığını ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü güçlü şekilde yansıtan modern bir kurumsal web varlığının/demosunun bulunmaması.

### Purpose

Trakya Teknik Makine firmasını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve üç onaylı hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) modern ve güven veren bir kurumsal frontend demoya dönüştürmek.

### Success Criteria

- Demo ilk bakışta modern, profesyonel ve teknik güven veren bir kurumsal kimlik sunmalı.
- Generic kurumsal lacivert template hissi veya sektör klişesi vermemeli.
- Firma adı, `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` statüsü ve üç onaylı hizmet hızlıca anlaşılmalı.
- Ziyaretçi telefon/e-posta gibi direct-contact CTA yüzeylerine kolayca ulaşabilmeli (exact değerler code/config seviyesinde kalmalı, uydurma firma bilgisi üretilmemeli).
- Mobil ve masaüstü görünüm satış görüşmesinde sunulabilecek kalitede olmalı.
- Source-backed olmayan firma gerçeği (stok/orijinal parça garantisi, mobil filo/SLA, periyodik bakım/pres revizyonu, sertifika, referans, çalışma saati) üretilmemeli.
- Frontend yapısı gelecekte gerçek backend/data adapter'ına geçişi destekleyen temiz service/data boundary sunmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Müşteriler:** Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine ve ekipman kullanıcıları, yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Müşteriler:** Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

### Core Flows

1. Ziyaretçi firmanın ne yaptığını ve endüstriyel/teknik servis bağlamını hızla anlar.
2. Ziyaretçi firmanın `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` olduğunu görür.
3. Ziyaretçi üç onaylı hizmeti (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel hiyerarşi ile inceler.
4. Ziyaretçi telefon/e-posta direct-contact CTA'larına uygun cihazlarda erişir.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo (landing page).
- Trakya Teknik Makine firma kimliği ve `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` statüsünün sunumu.
- Üç onaylı hizmetin görsel sunumu (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`).
- Direct-contact telefon/e-posta CTA yüzeyleri.
- Clean frontend service/data-access boundary (mock/local content configuration).

### Out of Scope

- `Yedek Parça Temini` ifadesini stok, orijinal parça, belirli marka/parça kapsamı gibi qualifier'larla genişletmek.
- `Yerinde Teknik Destek` ifadesini mobil filo, acil müdahale, SLA veya müdahale süresi iddialarıyla genişletmek.
- `Makine Bakım ve Onarım` ifadesini hidrolik pres, güç ünitesi, periyodik bakım, revizyon gibi alt hizmetlerle genişletmek.
- Çalışma saatleri, sertifika, müşteri, referans, adres, telefon/e-posta exact factual değerlerini uydurmak.
- Gerçek admin paneli / CMS, backend, veritabanı, gerçek API.
- Authentication, e-ticaret / online ödeme, canlı harita, WhatsApp entegrasyonu, gerçek form submit backend'i.
- Production deployment / domain / hosting geçişi.

### Future Possibilities

- Müşteri onayından sonra eklenecek doğrulanmış firma iletişim bilgileri, adres, çalışma saatleri, referanslar, ek hizmet detayları, form/harita/WhatsApp entegrasyonu, CMS/admin paneli ve production backend/deployment.

> Future scope bugünkü committed scope gibi koda/tasarıma dahil edilemez.

---

## 6. Existing Project Context

### Current Reality

N/A (`project_state: new`). Trakya Teknik Makine gerçek bir firmadır ancak bu Product Engine çalışması için sıfırdan yeni frontend demo kod tabanı geliştirilecektir.

### Target State

N/A (`project_state: new`).

### Transition Scope

N/A (`project_state: new`).

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Kurumsal frontend demo. Kesin frontend stack Product Engine package/technical resolution aşamasında belirlenir.
- Mock/local content presentation data boundary kullanılacaktır.
- Sahte backend, API endpoint, veritabanı şeması veya production integration contract uydurulmayacaktır.

### Current Data Source Reality

- Local static mock/local project data configuration layer.

### Service / Data-Access Boundary Expectation

- Presentation component'lerinden izole edilmiş, konfigürasyon/adapter bazlı veri erişim sınırı.

### Future Backend / Integration Context

- Gelecekte gerçek backend veya CMS bağlandığında UI component'leri değiştirilmeden adapter seviyesinde entegrasyon imkanı.

### Unresolved Technical Decisions

- Exact frontend framework ve build tooling (Engine planning aşamasında stack-neutral safe resolution yapılacaktır).

---

## 8. Design Context

### Known Brand / Design Inputs

- Factual Allowlist: Trakya Teknik Makine (Firma adı), Disan Hidrolik Makine Trakya Bölge Yetkili Servisi (Statü), Yedek Parça Temini (Hizmet 1), Yerinde Teknik Destek (Hizmet 2), Makine Bakım ve Onarım (Hizmet 3), Trakya Bölgesi (Bölge).

### Desired Character / Perception

- Modern, temiz, profesyonel endüstriyel/teknik kurumsal dil. Güven, teknik uzmanlık, hızlı çözüm algısı (algısal tasarım hedefi, operasyonel claim değil).

### Explicit Preferences / Constraints

- Generic "lacivert hero + üç kart + standart footer" kurumsal sektör klişesi KULLANILMAYACAKTIR.
- Source-backed olmayan görsel iddia veya asılsız sertifika/referans rozetleri gösterilmeyecektir.

### Differentiation Notes

- Tipografi, kompozisyon, whitespace, görsel hiyerarşi ve kontrollü motion ile özgün endüstriyel kurumsal kimlik.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-scenario | High (Canonical Source Truth) | Primary Project Source Material |

- `source_count`: 1

---

## 10. Known Decisions

- Satış görüşmesinde kullanılmak üzere proaktif kurumsal frontend demo üretilecek.
- Delivery Profile: `Prototype`, Implementation Planning: `standard`, Design Planning: `light`.
- Source allowlist dışındaki firma, hizmet alt detayları, sertifika, referans, adres veya iletişim bilgileri uydurulmayacak.
- Clean frontend service/data boundary korunacak.

---

## 11. Assumptions

- **ASM-01:** Projenin Türkçe (`tr`) dilinde kurumsal bir frontend demo olarak sunulması. (Status: Validated / Safe)
- **ASM-02:** Trakya bölgesi bağlamının genel bölge/endüstri bağlamında sunulması, uydurma spesifik ilçe/adres bilgisine dönüştürülmemesi. (Status: Validated / Safe)
- **ASM-03:** Gelecekte eklenecek doğrulanmış iletişim ve hizmet detayları için modüler frontend data configuration mimarisinin hazırlanması. (Status: Validated / Safe)

---

## 12. Conflicts

- Herhangi bir çelişki bulunmamaktadır.

---

## 13. Open Questions / Unresolved Items

- **OQ-01:** Exact telefon, e-posta, fiziksel adres ve çalışma saatleri doğrulanmış firma bilgileri olarak verilecek mi?
- **OQ-02:** Hizmetler için müşteri tarafından doğrulanmış ek teknik detay, parça/ekipman kataloğu veya özel görseller sağlanacak mı?
- **OQ-03:** Firma logosu, kurumsal renk paleti ve marka materyalleri sağlanacak mı?
- **OQ-04:** Müşteri referansları, sertifikalar veya çalışma geçmişi doğrulanarak demoya dahil edilecek mi?
- **OQ-05:** Gelecek kapsamda form, canlı harita, WhatsApp entegrasyonu veya CMS/admin paneli istenecek mi?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-17T02:17:37+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru.
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` yalnızca 10. koşul için doğrudan kanıt varsa yazılmıştır.
