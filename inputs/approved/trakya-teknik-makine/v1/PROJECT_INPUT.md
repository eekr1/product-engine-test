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
created_at: "2026-08-15T04:25:21+03:00"
updated_at: "2026-08-15T04:26:00+03:00"
approved_at: "2026-08-15T04:26:00+03:00"
approved_by: "user"
supersedes: ""
source_type: "user-provided"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. Bu sürüm kullanıcı tarafından açıkça onaylanmış `approved` durumdadır.

---

## 1. Original Brief

```text
Trakya Teknik Makine için firmanın ne yaptığını hızlı anlatan, hizmetlerini güçlü biçimde sunan ve satış görüşmesinde gösterilebilecek modern bir kurumsal frontend demo hazırlanacaktır.

Firma Bilgileri ve Gerçekleri:
- Firma Adı: Trakya Teknik Makine
- Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
- Ana Hizmet 1: Yedek Parça Temini
- Ana Hizmet 2: Yerinde Teknik Destek
- Ana Hizmet 3: Makine Bakım ve Onarım
- Bölge: Trakya Bölgesi, endüstriyel/makine teknik servis bağlamı

Proje Hedefleri ve Kısıtlar:
- Proje Türü: Kurumsal web sitesi / satış demosu (landing-page / frontend demo)
- Proje Modu: new
- Delivery Profile: Prototype
- Implementation Planning: standard
- Design Planning: light
- Satış görüşmesi amaçlı modern, responsive frontend demo.
- CMS, backend, veritabanı, auth, e-ticaret, canlı harita, WhatsApp, form backend kapsam dışıdır.
- Source dosyada bulunmayan firma iddiası, çalışma saati, adres, sertifika veya alt hizmet qualifier'ları uydurulmayacaktır.
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

- **Implementation:** `standard` — Proje bir frontend demo/kurumsal web sitesi olup, fresh capable bir ajanın ek bir mimari planlama yapmadan execution ve wave adımlarını doğrudan uygulayabilmesi için gereken agent-ready minimum planlama derinliğini sağlar.
- **Design:** `light` — Kurumsal frontend demo için güçlü görsel yön, modern tipografi/layout ve non-generic endüstriyel görsel kimlik sağlayacak, fakat hafif dokümantasyon seti (DESIGN_RULES) içeren profil seçilmiştir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamaktır.

### Problem

Trakya Teknik Makine için firmanın ne yaptığını hızlı anlatan, yetkili servis statüsünü ve hizmetlerini güçlü biçimde sunan ve potansiyel müşteri/satış görüşmelerinde gösterilebilecek modern bir kurumsal web sitesi demosuna ihtiyaç vardır.

### Purpose

Potansiyel satış görüşmelerinde kullanılmak üzere Trakya Teknik Makine'nin kurumsal kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini görsel ve işlevsel olarak etkileyici bir şekilde sergilemektir.

### Success Criteria

- Demo ilk bakışta modern ve profesyonel görünmeli.
- Generic kurumsal template hissi vermemeli.
- Firma, yetkili servis statüsü ve 3 approved hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) hızlıca anlaşılmalı.
- Mobil ve masaüstü görünüm satış görüşmesinde gösterilecek kalitede ve responsive olmalı.
- Source-backed olmayan hiçbir firma gerçeği (stok, acil mobil filo, periyodik bakım detayları, adres, çalışma saatleri vb.) uydurulmamalı.
- Clean frontend service/data-access boundary kurulmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine ve ekipman kullanıcıları, yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar:** Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

### Core Flows

- Ziyaretçinin firmanın ne yaptığını hızlıca anlaması.
- Ziyaretçinin firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğunu görmesi.
- Ziyaretçinin üç temel hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) açık biçimde inceleyebilmesi.
- Ziyaretçinin firma hakkında temel kurumsal bilgiyi görebilmesi.
- Ziyaretçinin telefon/e-posta direct-contact CTA yüzeylerine kolayca ulaşabilmesi.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo.
- Ana kurumsal tanıtım yüzeyi.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
- Üç temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) güçlü görsel hiyerarşi ile sunulması.
- Telefon/e-posta direct-contact CTA yüzeyleri (approved değerler sağlandığında kullanılmak üzere).
- Mock/local içerik için temiz frontend service/data-access boundary.
- Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim.

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API uygulaması.
- Authentication (Kullanıcı girişi/yetkilendirme).
- E-ticaret / online ödeme.
- Canlı harita.
- WhatsApp entegrasyonu.
- Gerçek form submit backend'i.
- Production deployment / domain / hosting geçişi.
- Source dosyada bulunmayan yeni firma iddiaları, hizmet alt kapsamları, sertifikalar, referanslar veya teknik yetkinlikler.

### Future Possibilities

- Gerçek backend ve veritabanı entegrasyonu.
- Yönetim paneli / CMS entegrasyonu.
- Harita ve WhatsApp canlı iletişim kanalları.
- Form submit backend'i.
- Production hosting & domain kurulumu.

---

## 6. Existing Project Context

### Current Reality

Trakya Teknik Makine gerçek bir firmadır; Disan Hidrolik Makine Trakya Bölge Yetkili Servisidir. Ancak bu çalışmada yeni frontend demo kod tabanı henüz oluşturulmamıştır (`project_state: new`).

### Target State

Modern, responsive, modüler ve temiz data-boundary mimarisine sahip frontend demo.

### Transition Scope

`N/A` (`project_state: new` olduğu için mevcut kod migrasyonu veya geçiş kapsamı yoktur).

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama frontend demo olacaktır.
- Kesin teknoloji yığını Product Engine package/technical resolution aşamasında belirlenecektir.
- Demo kolay çalıştırılabilir ve satış görüşmesinde güvenilir gösterilebilir olmalıdır.
- Mock/local static data kullanılacaktır.

### Current Data Source Reality

Mock / local static project data.

### Service / Data-Access Boundary Expectation

UI bileşenleri doğrudan hardcoded mock veri taşımamalı; veriye soyutlanmış bir frontend service/adapter interface'i üzerinden erişmelidir.

### Future Backend / Integration Context

Gelecekte gerçek bir backend/API eklendiğinde presentation katmanı değişmeden yalnız adapter implementation değiştirilebilir olmalıdır.

### Unresolved Technical Decisions

- Exact build tool / frontend library stack (Product Engine package resolution adımlarında netleşecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- **Firma Adı:** Trakya Teknik Makine
- **Statü:** Disan Hidrolik Makine Trakya Bölge Yetkili Servisi

### Desired Character / Perception

Modern, temiz, profesyonel endüstriyel/teknik kurumsal dil. Güven, teknik uzmanlık, hızlı çözüm algısı ve profesyonellik.

### Explicit Preferences / Constraints

- Generic "lacivert hero + üç kart + standart footer" sektör klişesi varsayılan tasarım olarak kullanılmamalıdır.
- Modern tipografi, kompozisyon, spacing, imagery ve kontrollü motion uygulanmalıdır.

### Differentiation Notes

Sanayi/makine sektöründeki hazır klişe şablonlar yerine, Trakya Teknik Makine'ye özel güçlü tipografi, temiz yüzey sistemi ve özgün endüstriyel görsel dil oluşturulacaktır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Source Material | Yüksek (Primary Truth) | Proje factual bağlamı ve kısıtları |

---

## 10. Known Decisions

- İlk çıktı satış amaçlı frontend demo olacaktır.
- Proje modu `new`, delivery profile `Prototype`, implementation planning `standard`, design planning `light` seçilmiştir.
- Source dosyada bulunmayan firma bilgisi (çalışma saatleri, adres, sertifika, stok, mobil filo vb.) uydurulmayacaktır.
- Sahte backend, database schema veya API endpoint uydurulmayacaktır.
- Temiz frontend service/data-access boundary korunacaktır.

---

## 11. Assumptions

- `ASM-01` (Class: Default / Functional Scope): Frontend demo için mock/local static data adapter kullanılması yeterlidir ve Engine kuralları gereği safe assumption'dır. Status: Active.
- `ASM-02` (Class: Design Scope): Tasarımda endüstriyel ve güven veren visual concept uygulanacak, ancak jenerik lacivert tema klişesine düşülmeyecektir. Status: Active.

---

## 12. Conflicts

- Kritik çelişki bulunmamaktadır (`None`).

---

## 13. Open Questions / Unresolved Items

- **OQ-01:** Resmi logo ve kurumsal görsel materyalleri sağlanacak mı yoksa demoda ikonografik/vektörel kurumsal logo çözümü mü kullanılacak?
- **OQ-02:** Telefon ve e-posta için exact iletişim bilgileri teslim edilecek mi, yoksa placeholder direct-contact formatı mı kullanılacak?
- **OQ-03:** Gelecekte (Future scope) form backend, canlı harita veya WhatsApp entegrasyonu talep edilecek mi?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-15T04:26:00+03:00
- **Approved By:** `user`

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı (`N/A` / `new`).
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (1).
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` için doğrudan approval kanıtı var.
