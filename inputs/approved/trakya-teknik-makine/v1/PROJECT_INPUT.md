---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "approved"
project_type: "corporate-website"
project_state: "new"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "standard"
primary_language: "tr"
created_at: "2026-08-17T04:28:05+03:00"
updated_at: "2026-08-17T04:28:49+03:00"
approved_at: "2026-08-17T04:28:49+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start-scenario"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `approved` durumu canonical explicit user approval ile kesinleşmiştir.

---

## 1. Original Brief

```text
Trakya Teknik Makine için firmanın ne yaptığını hızlı anlatan, hizmetlerini ayrı keşif/detay yüzeyleriyle güçlü biçimde sunan, kurumsal güven hissi oluşturan ve satış görüşmesinde "gerçek siteniz böyle olabilir" etkisi veren modern bir kurumsal frontend demo hazırlanması. Proje kaynağı `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` self-contained project truth olarak esas alınmıştır. Doğrulanmış factual bilgiler: Firma Adı (Trakya Teknik Makine), Statü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi), Hizmet 1 (Yedek Parça Temini), Hizmet 2 (Yerinde Teknik Destek), Hizmet 3 (Makine Bakım ve Onarım), Hizmet Bölgesi (Trakya Bölgesi).
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `corporate-website`
- **Project State:** `new`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `standard`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (standard):** Multi-page corporate architecture, wave sequencing, component/service boundaries and agent-ready execution guidance to allow an agent to build the codebase without an extra planning pass.
- **Design (standard):** Approved 7-page site architecture requires global shell/navigation design, visual system, distinct page-design contracts, and cross-page responsive consistency.

> `design_planning` için `none` profile yoktur. UI/UX taşıyan corporate website projelerinde `standard` varsayılan kanonik tasarım profildir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren çok sayfalı kurumsal web sitesi satış demosu olarak sunmak.

### Problem

Trakya Teknik Makine için proaktif satış görüşmelerinde gösterilebilecek, firmanın kurumsal kimliğini ve yetkili servis statüsünü yansıtan modern çok sayfalı bir web varlığının bulunmaması.

### Purpose

Trakya Teknik Makine kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini modern multi-page kurumsal web sitesi demosuyla sunarak "gerçek siteniz böyle olabilir" etkisini oluşturmak.

### Success Criteria

- Demo ilk bakışta modern, premium ve profesyonel kurumsal web sitesi hissi vermeli.
- Tek-page landing page veya generic sektör şablonu hissi vermemeli.
- Global navigation 7 ayrı approved sayfa arasında gerçek routable/navigable erişim sağlamalı.
- Home, Corporate, Services, 3 Service Detail (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve Contact sorumlulukları net ayrılmalı.
- Firma adı (Trakya Teknik Makine) ve yetkili servis statüsü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi) net anlaşılmalı.
- Hizmetler overview -> detail keşif akışı sorunsuz çalışmalı.
- Source-backed olmayan firma iddiası (stok, garanti, acil müdahale, SLA, periyodik bakım, revizyon, spesifik makine uzmanlığı vb.) üretilmemeli.
- Masaüstü ve mobil deneyim satış görüşmesinde gösterilebilir kalitede olmalı.
- Frontend yapısı gelecekte backend/CMS/ek entegrasyonlar geldiğinde aynı codebase üzerinde yeniden yazım olmadan devam edebilmeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:**
  - Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler.
  - Yedek parça temini arayan makine ve ekipman kullanıcıları.
  - Yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar:**
  - Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.
  - Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

### Core Flows

1. Ziyaretçi Ana Sayfa üzerinden firmanın kim olduğunu (Trakya Teknik Makine), yetkili servis statüsünü ve ne yaptığını hızlıca anlar.
2. Ziyaretçi Kurumsal yüzeyi üzerinden firma/yetkili servis kimliğini değerlendirir (source-backed olmayan tarihçe/ekip/kapasite eklenmez).
3. Ziyaretçi Hizmetler overview yüzeyinde 3 approved hizmeti görür.
4. Ziyaretçi her approved hizmet için (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ayrı detail surface üzerinden odaklı detayları inceler.
5. Ziyaretçi İletişim yüzeyinden approved direct-contact kanallarına ulaşabilir.
6. Global navigation desktop ve mobile boyunca aynı information architecture'ı korur.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive multi-page corporate website frontend demo.
- Ana Sayfa (`PAGE-001`).
- Kurumsal sayfa (`PAGE-002`).
- Hizmetler overview sayfası (`PAGE-003`).
- Yedek Parça Temini hizmet detay sayfası (`PAGE-004`).
- Yerinde Teknik Destek hizmet detay sayfası (`PAGE-005`).
- Makine Bakım ve Onarım hizmet detay sayfası (`PAGE-006`).
- İletişim sayfası (`PAGE-007`).
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin approved yüzeylerde sunumu.
- Üç temel hizmetin güçlü görsel hiyerarşiyle sunumu.
- Telefon/e-posta direct-contact capability (exact values yalnız approved source varsa render edilir, uydurulmaz).
- Gerçek route/navigation davranışı (distinct approved pages same-page anchor section'lara collapse edilmez).
- Clean service/data-access boundary.
- Sales-demo presentation quality ve cross-page responsive consistency.

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API implementation.
- Authentication / Kullanıcı girişi.
- E-ticaret / Online ödeme.
- Canlı harita.
- WhatsApp entegrasyonu.
- Gerçek form submit backend'i.
- Production deployment / domain / hosting geçişi.
- Source-backed olmayan referans / proje / müşteri / tarihçe / sertifika / kapasite sayfaları veya company claims.
- Source dosyada bulunmayan hizmet qualifier'ları / teknik alt kapsamlar.

### Future Possibilities

- Gerçek backend ve API adaptörü entegrasyonu.
- CMS / Admin paneli entegrasyonu.
- Production hosting, domain ve canlıya alma.
- Müşteri tarafından sağlandığında doğrulanmış adres/harita, WhatsApp ve iletişim formu backend entegrasyonu.
- Doğrulanmış müşteri referansları, projeler ve sertifikalar sayfası.

> Future scope bugünkü committed scope gibi yazılamaz.

---

## 6. Site Architecture

### Architecture Status

- **Status:** approved
- **Architecture Rationale:** Corporate website project type requires standard multi-page information architecture. Source material explicit desired surfaces (Home, Corporate, Services Overview, 3 distinct Service Detail pages, Contact) define the routable page registry. Distinct approved pages MUST NOT be collapsed into single-page section anchors. Explicit user approval granted.

### Page / Surface Registry

| Page ID | Page Name | Purpose | Route / Navigation Identity | Scope Status | Primary Content / Capability Boundaries | Parent / Detail Relation |
|---|---|---|---|---|---|---|
| PAGE-001 | Ana Sayfa | Firma kimliğini, yetkili servis statüsünü, approved hizmet overview'ını ve site içi keşif yollarını sunmak. | `/` / `home` | IN_SCOPE | Firma unvanı (Trakya Teknik Makine), Disan Hidrolik Makine Trakya Bölge Yetkili Servisi vurgusu, 3 approved hizmet tanıtımı, iletişim yönlendirmeleri. | Root |
| PAGE-002 | Kurumsal | Trakya Teknik Makine kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü sunmak. | `/kurumsal` / `corporate` | IN_SCOPE | Kurumsal tanımsal sunum, yetkili servis kimliği. (Tarihçe, ekip, kapasite, sertifika, referans uydurulamaz). | Child of Root |
| PAGE-003 | Hizmetler | Üç approved hizmeti overview/discovery architecture içinde sunmak ve detail sayfalarına yönlendirmek. | `/hizmetler` / `services` | IN_SCOPE | 3 approved hizmet kartları/özetleri, hizmet detay sayfalarına navigasyon bağlantıları. | Child of Root |
| PAGE-004 | Yedek Parça Temini — Hizmet Detayı | Approved `Yedek Parça Temini` hizmetini ayrı detail presentation yüzeyinde sunmak. | `/hizmetler/yedek-parca-temini` / `service-detail-spare-parts` | IN_SCOPE | Yedek parça temini hizmet kapsamı sunumu. (Stok, orijinal parça garantisi, marka listesi uydurulamaz). | Detail of PAGE-003 |
| PAGE-005 | Yerinde Teknik Destek — Hizmet Detayı | Approved `Yerinde Teknik Destek` hizmetini ayrı detail presentation yüzeyinde sunmak. | `/hizmetler/yerinde-teknik-destek` / `service-detail-onsite-support` | IN_SCOPE | Yerinde teknik destek hizmet kapsamı sunumu. (Mobil filo, acil müdahale, SLA/müdahale süresi uydurulamaz). | Detail of PAGE-003 |
| PAGE-006 | Makine Bakım ve Onarım — Hizmet Detayı | Approved `Makine Bakım ve Onarım` hizmetini ayrı detail presentation yüzeyinde sunmak. | `/hizmetler/makine-bakim-onarim` / `service-detail-maintenance-repair` | IN_SCOPE | Makine bakım ve onarım hizmet kapsamı sunumu. (Periyodik bakım, revizyon, spesifik makine türü uzmanlığı uydurulamaz). | Detail of PAGE-003 |
| PAGE-007 | İletişim | Direct-contact capability'lerini ayrı iletişim yüzeyinde sunmak. | `/iletisim` / `contact` | IN_SCOPE | Kurumsal iletişim kanalları sunum yüzeyi. (Exact tel/eposta source truth yoksa placeholder/unknown olarak yönetilir; harita/form/WhatsApp eklenmez). | Child of Root |

### Corporate Website Architecture Rules

- `corporate-website` için approved inputta bu registry boş olamaz.
- Her executable distinct page `PAGE-XXX` identity taşır.
- Approved distinct pages single-page anchor section'lara collapse edilemez.
- Future/unresolved pages approved current set içinde gösterilemez.
- Exact semantics: `engine/SITE_ARCHITECTURE_RULES.md`.

---

## 7. Existing Project Context

### Current Reality

N/A

### Target State

N/A

### Transition Scope

N/A

`project_state: new` ise bu bölüm `N/A` olarak açıkça işaretlenebilir.

---

## 8. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Current scope frontend corporate sales demo'dur.
- Exact frontend framework/build/routing tooling Product Engine technical resolution aşamasında belirlenir.
- Continuation expected: YES — müşteri kabulü sonrası aynı codebase üzerinde devam edebilmelidir.
- Approved zero-build constraint yoktur.
- Package-managed, component/module-oriented ve repeatable dev/build/preview workflow beklenir.
- Multi-page architecture gerçek routable/navigable surfaces üretmelidir.
- Clean service/data-access boundary korunmalıdır.
- Backend current scope değilse sahte endpoint/database schema/production integration contract uydurulmamalıdır.

### Current Data Source Reality

Mock / local structured content data.

### Service / Data-Access Boundary Expectation

Service/adapter interface layer between UI components and local mock data, allowing seamless swap to real API/backend in the future.

### Future Backend / Integration Context

Future backend/CMS/API integration will replace the local mock adapter without refactoring UI component structure.

### Unresolved Technical Decisions

Exact frontend framework (React+Vite, Vanilla JS, etc.) to be resolved during technical architecture phase.

---

## 9. Design Context

### Known Brand / Design Inputs

Firma adı: Trakya Teknik Makine. Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi.

### Desired Character / Perception

Modern, temiz, profesyonel endüstriyel/teknik kurumsal dil. Güven, teknik uzmanlık ve hassasiyet (precision).

### Explicit Preferences / Constraints

Generic `lacivert hero + 3 kart + standart footer` klişesi kullanılmamalı. Multi-page site boyunca visual system tutarlı ancak sayfa kompozisyonları görevlerine göre özgünleşmeli. Hizmet detay sayfaları kart büyütmesi gibi görünmemeli.

### Differentiation Notes

Antrasit/koyu teknik yüzey + amber/turuncu precision accent yönü tercih edilen ve önceki demoda beğenilen bir creative direction'dır (resmi brand fact değil, creative decision).

---

## 10. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-scenario | High / Primary | Self-contained factual project universe & desired architecture |

- `source_count`: 1

---

## 11. Known Decisions

- Project type: `corporate-website`
- Delivery profile: `Prototype`
- Implementation planning: `standard`
- Design planning: `standard`
- Approved Site Architecture: 7 distinct pages (`PAGE-001` .. `PAGE-007`).
- Single-page landing page reduction is prohibited.
- Same-codebase continuation + clean service/data boundary required.

---

## 12. Assumptions

| Assumption ID | Alan | Yapılan | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-001 | primary_language | Türkçe (`tr`) | safe | Firma adı, hizmet bölgesi (Trakya) ve hedef kitle Türkiye/Trakya odaklıdır. | proje bağlamı | confirmed |
| ASM-002 | design_direction | Antrasit/koyu teknik yüzeyler + amber/turuncu accent | bounded | Source dosyasında tercih edilen creative direction olarak belirtilmiştir; resmi brand fact değildir. | proje bağlamı (source section 13) | confirmed |

---

## 13. Conflicts

Critical conflict bulunmamaktadır.

---

## 14. Open Questions / Unresolved Items

1. Resmi logo/brand grafik varlıkları yüksek kaliteli dosya olarak sağlanacak mı?
2. Exact telefon, e-posta ve adres bilgileri final demoda kullanılmak üzere sağlanacak mı?
3. Hizmetler için detay sayfalarında kullanılacak ek teknik görsel/bilgi dokümanı var mı?
4. Müşteri referansları, tamamlanan projeler veya sertifika bilgileri gelecekte eklenecek mi?

---

## 15. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-17T04:28:49+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `standard` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] `project_type: corporate-website` ise Site Architecture registry PAGE identities ile tamamlandı ve explicit approval kapsamına girdi.
- [x] Corporate website distinct approved pages single-page section seti gibi meodellenmedi.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı (`new` olarak N/A işaretlendi).
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru.
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` için doğrudan approval kanıtı var.
