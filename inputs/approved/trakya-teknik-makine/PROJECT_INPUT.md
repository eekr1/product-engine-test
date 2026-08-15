---
input_id: "INPUT-TRAKYA_TEKNIK_MAKINE-V1"
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
created_at: "2026-08-15T03:22:27+03:00"
updated_at: "2026-08-15T03:23:09+03:00"
approved_at: "2026-08-15T03:23:09+03:00"
approved_by: "user"
supersedes: ""
source_type: "user-provided"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `approved` durumundadır ve kullanıcının açık mesajı ile onaylanmıştır.

---

## 1. Original Brief

```text
Trakya Teknik Makine kurumsal web sitesi satış demosu projesi.

Firma Bilgileri (Approved Project Facts):
- Firma adı: Trakya Teknik Makine
- Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
- Ana Hizmet 1: Yedek Parça Temini
- Ana Hizmet 2: Yerinde Teknik Destek
- Ana Hizmet 3: Makine Bakım ve Onarım
- Faaliyet/servis bağlamı: Trakya bölgesi, endüstriyel/makine teknik servis bağlamı.

Proje Amacı ve Şartları:
- Proaktif satış görüşmesinde gösterilmek üzere modern, profesyonel frontend demo.
- Delivery Profile: Prototype
- Implementation Planning: standard
- Design Planning: light
- Source-Closed Truth: TRAKYA_TEKNIK_MAKINE_PROJECT.md belgesinde açıkça bulunmayan hiçbir firma gerçeği, stok, mobil filo, acil müdahale, SLA, makine türü, çalışma saati, sertifika, referans veya adres uydurulamaz.
- Temiz frontend service/data access boundary korunmalıdır.
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

- **Implementation:** `standard` — Fresh capable agent'ın aktif wave'i ikinci planning pass olmadan uygulayabileceği açıklıkta standart execution/implementation planlama derinliği. Prototype delivery profile'ı kod veya mimari kalite tabanını düşürmez.
- **Design:** `light` — Projeye özgü modern, temiz ve profesyonel endüstriyel/teknik kurumsal görsel sunum planlaması. Light design planning generic template veya düşük kalite izni değildir; non-generic design quality floor korunur.

> `design_planning` için `none` profile yoktur. UI/UX taşıyan bu proje için `light` profile seçilmiştir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ve 3 approved hizmet) profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamak.

### Problem

Trakya Teknik Makine için firmanın ne yaptığını hızlı anlatan, hizmetlerini güçlü biçimde sunan ve satış görüşmesinde gösterilebilecek modern bir kurumsal frontend demoya ihtiyaç vardır.

### Purpose

Proaktif satış görüşmesinde gösterilmek üzere firmanın kimliğini ve 3 temel hizmetini güçlü bir görsel sunumla ortaya koyan responsive kurumsal frontend demo hazırlamak.

### Success Criteria

- Demo ilk bakışta modern ve profesyonel görünmeli.
- Generic kurumsal template hissi veya lacivert hero + 3 kart klişesi vermemeli.
- Firma kimliği, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ve 3 approved hizmet hızlıca anlaşılmalı.
- Ziyaretçi approved iletişim noktalarına (telefon/e-posta CTA) kolayca ulaşabilmeli.
- Masaüstü ve mobil görünüm satış görüşmesinde gösterilecek kalitede olmalı.
- Source-backed olmayan hiçbir firma/hizmet gerçeği veya iddiası üretilmemeli.
- Frontend yapısı gelecekte gerçek data/backend adapter'ına geçişi gereksiz yeniden yazım olmadan desteklemeli (clean service/data boundary).
- `implementation_planning: standard` çıktısı fresh capable agent'ın ikinci bir planning pass yapmadan uygulayabileceği açıklıkta olmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

#### Birincil Kullanıcılar
- Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler.
- Yedek parça temini arayan makine ve ekipman kullanıcıları.
- Yerinde teknik destek arayan potansiyel müşteriler.

#### İkincil Kullanıcılar
- Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.
- Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

### Core Flows

1. **Farkındalık ve Tanıma:** Ziyaretçi firmanın ne yaptığını ve endüstriyel makine servis bağlamını hızlıca anlar.
2. **Yetkili Servis Statüsü:** Ziyaretçi firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğunu açıkça görür.
3. **Hizmet İnceleme:** Ziyaretçi üç temel hizmeti (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel hiyerarşi ile inceler.
4. **Kurumsal Güven:** Ziyaretçi firma hakkında temel kurumsal bilgiyi edinir.
5. **İletişim CTA:** Ziyaretçi telefon/e-posta direct-contact CTA'larına kolayca erişir.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo.
- Ana kurumsal tanıtım yüzeyi.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
- Üç temel hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) güçlü görsel sunumu.
- Telefon/e-posta direct-contact CTA yüzeyleri.
- Mock/local içerik için temiz frontend service/data-access boundary.
- Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim.

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API uygulaması.
- Authentication / Yetkilendirme.
- E-ticaret / online ödeme.
- Canlı harita.
- WhatsApp entegrasyonu.
- Gerçek form submit backend'i.
- Production deployment / domain / hosting geçişi.
- Source dosyada bulunmayan yeni firma iddiaları, hizmet alt kapsamları (stok, orijinal parça, mobil filo, acil müdahale, SLA, belirli makine türü vb.), sertifikalar, referanslar veya teknik yetkinlikler.

### Future Possibilities

- Satış demosu sonrasında müşteri tarafından talep edilirse backend, veritabanı, gerçek form submit backend'i, admin/CMS, harita veya WhatsApp entegrasyonları ayrı bir gelecek kapsamı olarak ele alınabilir.

> Future scope bugünkü committed scope gibi yazılamaz.

---

## 6. Existing Project Context

### Current Reality

N/A (`project_state: new`. Bu Product Engine çalışması için yeni frontend demo kod tabanı henüz oluşturulmamıştır; mevcut codebase veya web sitesi bağımlılığı yoktur.)

### Target State

N/A

### Transition Scope

N/A

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama kurumsal frontend demo olacaktır. Stack Engine technical resolution aşamasında belirlenir.
- Demo kolay çalıştırılabilir ve satış görüşmesinde güvenilir gösterilebilir olmalıdır.
- Mock/local project data kullanılacaktır.
- UI ile data source arasında temiz service/data-access boundary olmalıdır.
- Exact stack unresolved iken stack-specific execution assumption yapılamaz (stack-neutral pending kuralı).

### Current Data Source Reality

Mock/local static project data. Gerçek veritabanı veya dış API bulunmamaktadır.

### Service / Data-Access Boundary Expectation

Data-access/service katmanı presentation component'lerinden soyutlanmalı, local mock data adapter deseni ile sunulmalıdır.

### Future Backend / Integration Context

Gelecekte gerçek backend veya CMS entegrasyonu yapılması durumunda presentation component'leri değiştirilmeden adapter seviyesinde geçiş desteklenmelidir.

### Unresolved Technical Decisions

- Frontend framework / toolchain seçimi (Engine package and technical resolution adımlarında netleşecektir).

> Backend/API henüz approved scope değildir; sahte endpoint veya database schema uydurulamaz.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
- Hizmetler: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım
- Bölge/Bağlam: Trakya bölgesi, endüstriyel makine teknik servisi.

### Desired Character / Perception

- Modern, temiz, profesyonel endüstriyel/teknik kurumsal dil.
- Güven, teknik uzmanlık, hızlı çözüm algısı ve profesyonellik.
- Algısal tasarım hedefi olarak "hızlı çözüm" sunumu (SLA veya operasyonel süre taahhüdü anlamına gelmez).

### Explicit Preferences / Constraints

- Generic "lacivert hero + üç kart + standart footer" sektör klişesi varsayılan tasarım olarak kullanılmamalıdır.
- Light design planning düşük kalite veya generic template izni değildir.
- Masaüstü ve mobil deneyim birlikte ele alınmalıdır.

### Differentiation Notes

- Projeye özgü tipografi, kompozisyon, spacing, imagery ve yüzey sistemi ile modern endüstriyel karakter yaratılmalıdır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-source-file | High | Canonical factual source truth material |

- `source_count`: 1
- Machine-dependent absolute path kullanılmamıştır.
- Credential saklanmamaktadır.

---

## 10. Known Decisions

- Proje ilk çıktısı proaktif satış görüşmesi amaçlı kurumsal frontend demo olacaktır.
- Delivery profile `Prototype`, implementation planning `standard`, design planning `light` olarak belirlenmiştir.
- Source dosyada yer almayan firma/domain gerçekleri uydurulmayacaktır.
- Backend kapsam dışındadır; sahte API veya DB şeması üretilmeyecektir.
- UI bileşenleri ile mock veri arasında temiz service boundary korunacaktır.

---

## 11. Assumptions

| Assumption ID | Alan | Yapılan | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-001 | `primary_language` | `tr` (Türkçe) | safe | Trakya bölgesinde faaliyet gösteren kurumsal firma için Türkçe içerik sunumu varsayılmıştır. | proje bağlamı | `pending_review` |
| ASM-002 | `frontend_stack` | Standard web frontend tech stack | bounded | Standart web demo üretimi için uygun frontend araç seti Engine adımlarında çözümlenecektir. | proje bağlamı | `pending_review` |

---

## 12. Conflicts

- Kritik çelişki bulunmamaktadır.

---

## 13. Open Questions / Unresolved Items

- **Q-001:** Resmi logo / brand asset'lerinin yüksek kaliteli kaynak dosyaları mevcut mu, yoksa demo için vektörel/tipografik kurumsal marka kimliği mi sentezlenecek?
- **Q-002:** Exact telefon/e-posta/adres bilgileri final demo için source truth olarak verilecek mi, yoksa direct-contact CTA şeması (tel: / mailto:) placeholder olarak mı yapılandırılacak?
- **Q-003:** Hizmetler için ileride doğrulanmış ek görsel veya teknik açıklamalar sağlanacak mı?
- **Q-004:** Müşteri referansları veya başarı hikayeleri ileride eklenecek mi?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-15T03:23:09+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti (`light`).
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı (`project_state: new` için N/A olarak işaretlendi).
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru (`pending_review`).
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (1).
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` için doğrudan approval kanıtı var (kullanıcının "onaylıyorum" yanıtı).
