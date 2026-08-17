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
created_at: "2026-08-17T04:56:47+03:00"
updated_at: "2026-08-17T04:57:35+03:00"
approved_at: "2026-08-17T04:57:35+03:00"
approved_by: "user"
supersedes: ""
source_type: "source_file"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `approved` durumundadır ve kullanıcının açık onayı (`approved_by: user`) ile kesinleşmiştir.

---

## 1. Original Brief

```text
# Trakya Teknik Makine — Project Start Scenario

Bu dosya Trakya Teknik Makine projesi için Product Engine'in self-contained project source material'idir.

## 1. Proje Kimliği
- Proje adı: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- Proje slug'ı: `trakya-teknik-makine`
- Proje türü: `corporate-website`
- Proje modu: yeni
- Delivery profile: Prototype
- Implementation planning: standard
- Design planning: standard
- Tek cümlelik açıklama: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren çok sayfalı kurumsal web sitesi satış demosu olarak sunmak.
- Sahip / müşteri: Trakya Teknik Makine; çalışma potansiyel satış görüşmesi amacıyla hazırlanacaktır.

## 2. Problem / Amaç
Trakya Teknik Makine için yalnız tek sayfalık bir tanıtım yüzeyi değil; firmanın ne yaptığını hızlı anlatan, hizmetlerini ayrı keşif/detay yüzeyleriyle güçlü biçimde sunan, kurumsal güven hissi oluşturan ve satış görüşmesinde “gerçek siteniz böyle olabilir” etkisi veren modern bir kurumsal frontend demo hazırlanacaktır.

## 3. Ürün / İş Bağlamı
- Bu çalışma proaktif satış demosudur.
- İlk hedef production sistem değil, görsel ve işlevsel olarak güçlü bir frontend kurumsal site demosudur.
- Prototype yalnız delivery maturity'yi sınırlar; page breadth, design quality, code quality veya architecture quality'yi düşürmez.
- Demo müşteri tarafından olumlu karşılanırsa aynı frontend foundation üzerinde backend, CMS/admin, production deployment ve ek entegrasyonlar ayrı approved scope olarak devam edebilmelidir.
- Basit hero + üç hizmet kartı + iletişim section'ından oluşan tek-page landing yapı hedef değildir.

## 4. Hedef Kullanıcılar
### Birincil Kullanıcılar
- Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler.
- Yedek parça temini arayan makine ve ekipman kullanıcıları.
- Yerinde teknik destek arayan potansiyel müşteriler.
### İkincil Kullanıcılar
- Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.
- Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 5. Temel Kullanıcı Akışları
- Ziyaretçi Ana Sayfa üzerinden firmanın kim olduğunu ve ne yaptığını hızlıca anlayabilmeli.
- Ziyaretçi ayrı Kurumsal yüzey üzerinden firma/yetkili servis kimliğini değerlendirebilmeli; source-backed olmayan tarihçe/kapasite/iddia eklenmemeli.
- Ziyaretçi Hizmetler overview yüzeyinde üç approved hizmeti görebilmeli.
- Ziyaretçi her approved hizmeti ayrı detail surface üzerinden daha odaklı biçimde inceleyebilmeli; detail copy factual allowlist'i aşmamalı.
- Ziyaretçi ayrı İletişim yüzeyinden approved direct-contact kanallarına ulaşabilmeli.
- Global navigation desktop/mobile boyunca aynı approved information architecture'ı korumalı.

## 6. Kapsam
### Kapsam Dahili
- Modern, responsive, multi-page corporate website frontend demo.
- Ana Sayfa.
- Kurumsal sayfa.
- Hizmetler overview sayfası.
- Yedek Parça Temini için ayrı service-detail page.
- Yerinde Teknik Destek için ayrı service-detail page.
- Makine Bakım ve Onarım için ayrı service-detail page.
- İletişim sayfası.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin uygun approved yüzeylerde sunumu.
- Üç temel hizmetin güçlü görsel hiyerarşiyle sunumu.
- Telefon/e-posta direct-contact capability; exact values yalnız approved factual source mevcutsa render edilir, uydurulmaz.
- Gerçek route/navigation davranışı; distinct approved pages same-page anchor section'lara indirgenmez.
- Mock/local içerik için clean frontend service/data-access boundary.
- Sales-demo presentation quality ve cross-page responsive consistency.

### Kapsam Dışı
- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API implementation.
- Authentication.
- E-ticaret / online ödeme.
- Canlı harita.
- WhatsApp entegrasyonu.
- İletişim formu / demo form / mesaj submit interaction'ı.
- Form input alanları, submit/send behavior ve form success/error state'leri.
- Gerçek form submit backend'i.
- Production deployment/domain/hosting geçişi.
- Source-backed olmayan referans/proje/müşteri/tarihçe/sertifika/kapasite sayfaları veya company claims.
- Source dosyada bulunmayan hizmet qualifier'ları/teknik alt kapsamlar.

## 7. Site / Surface Architecture
1. Ana Sayfa
2. Kurumsal
3. Hizmetler
4. Yedek Parça Temini — Hizmet Detayı
5. Yerinde Teknik Destek — Hizmet Detayı
6. Makine Bakım ve Onarım — Hizmet Detayı
7. İletişim

## 8. Fonksiyonel Gereksinimler
- Responsive desktop/tablet/mobile kullanım.
- Çalışan global multi-page navigation.
- Direct URL / route-based page access suitable frontend architecture ile desteklenmeli.
- Firma kimliği ve yetkili servis statüsü güçlü sunulmalı.
- Üç approved hizmet overview + approved detail surfaces üzerinden açıkça keşfedilebilmeli.
- Approved telefon/e-posta contact capability'lerine kolay erişim planlanmalı; exact değer yoksa uydurma/işlevsiz fake değer render edilmemeli.
- Current scope'ta kullanıcıdan mesaj/form verisi toplanmamalı veya demo submit behavior oluşturulmamalı.
- Shared header/footer/shell cross-page consistent olmalı.
- Mock/local content presentation component'lerine kontrolsüz hardcode edilmemeli; service/data boundary korunmalı.
- Same-codebase continuation future page/CMS/API growth için structural rewrite gerektirmemeli.

## 9. Mevcut Durum / Current Reality
- Trakya Teknik Makine gerçek bir firmadır.
- Firma Disan Hidrolik Makine'nin Trakya Bölge Yetkili Servisi olarak konumlandırılır.
- Bu v0.3.1 fresh Product Engine çalışması için current implementation/generated state temizlenerek sıfırdan planlanacaktır.
- Mevcut dış web sitesi/CMS/old codebase bilgisi bu run için gerekli source truth değildir.

## 10. Approved Project Facts / Content Truth
- Firma adı: Trakya Teknik Makine.
- Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi.
- Ana Hizmet 1: Yedek Parça Temini.
- Ana Hizmet 2: Yerinde Teknik Destek.
- Ana Hizmet 3: Makine Bakım ve Onarım.
- Faaliyet/servis bağlamı: Trakya bölgesi, endüstriyel/makine teknik servis bağlamı.

## 11. Teknik Bağlam / Tercihler
- Current scope frontend corporate sales demo'dur.
- Continuation expected: YES.
- Approved zero-build constraint yoktur.
- Package-managed, component/module-oriented ve repeatable dev/build/preview workflow beklenir.
- Multi-page architecture gerçek routable/navigable surfaces üretmelidir.
- Clean service/data-access boundary korunmalıdır.

## 12. Veri / Entegrasyonlar
- İlk demo için database veya external API gereksinimi yoktur.
- Mock/local project data kullanılabilir.
- Current scope'ta form submission payload/endpoint veya fake send-flow yoktur.

## 13. Tasarım Yönü
- Modern, temiz, profesyonel endüstriyel/teknik corporate language.
- Antrasit/koyu teknik yüzey + amber/turuncu precision accent yönü tercih edilen ve önceki demo görselinde beğenilen bir creative direction'dır; resmi brand color/fact değildir.

## 14. Deployment / Operasyonlar
- Production deployment current scope değildir.

## 15. Daha Önce Alınmış Önemli Kararlar
- Project type: corporate-website.
- Delivery profile: Prototype.
- Implementation planning: standard.
- Design planning: standard.
- Desired site architecture: Home + Corporate + Services + 3 service-detail pages + Contact.
- Single-page landing reduction hedef değildir.
- Unknown company facts uydurulmayacaktır.
- Current contact capability yalnız source-safe phone/e-mail direct-contact boundary'sidir; form/submit behavior current scope değildir.
- Same-codebase continuation + clean service/data boundary korunacaktır.
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

- **Implementation:** `standard` planning profile, 7 ayrı approved sayfaya sahip çok sayfalı kurumsal web sitesi için gerekli olan wave yapısını, mimari sınırları, navigation/shell gereksinimlerini ve agent-ready execution detaylarını eksiksiz sağlar.
- **Design:** `standard` design planning profile, multi-page `corporate-website` projesi için global shell, navigation, tasarım sistemi ve sayfalara özel PAGE-DESIGN kontratlarını tanımlayarak görsel ve responsive bütünlüğü temin eder.

> `design_planning` için `none` profile yoktur. UI/UX applicable değilse metadata değeri yalnız operasyonel temsil amacıyla `N/A` olabilir; bu yeni bir profile değildir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren çok sayfalı kurumsal web sitesi satış demosu (`corporate-website`) olarak sunmak.

### Problem

Trakya Teknik Makine için tek sayfalık jenerik bir tanıtım yüzeyi yetersizdir. Firmanın uzmanlığını, yetkili servis statüsünü ve hizmetlerini ayrı keşif/detay sayfalarıyla sunan, satış görüşmelerinde kurumsal güven oluşturan modern bir multi-page web sitesi demosuna ihtiyaç duyulmaktadır.

### Purpose

Trakya Teknik Makine'nin yetkili servis kimliğini ve 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) temiz, modern ve çok sayfalı bir mimari ile sergileyerek potansiyel müşterilere ve satın alma sorumlularına nitelikli bir kurumsal frontend deneyimi sunmak.

### Success Criteria

- Proje ilk bakışta modern, premium ve profesyonel kurumsal web sitesi hissi vermeli.
- Tek sayfaya collapse edilmiş landing page veya jenerik şablon hissi oluşturmamalı.
- Global navigation 7 onaylı sayfa arasında gerçek rotalama sağlamalı.
- Ana Sayfa, Kurumsal, Hizmetler Overview, 3 Hizmet Detayı ve İletişim sayfaları kendi sorumluluk alanlarını net bir şekilde taşımalı.
- İletişim sayfası yalnız doğrudan telefon/e-posta iletişim sınırını korumalı; form, submit veya başarı mesajı gibi yetkisiz etkileşimler içermemeli.
- Source dosyada bulunmayan firma iddiası, stok/garanti/SLA/revizyon bilgisi eklenmemeli.
- Kod tabanı aynı yapı üzerinde gelecekteki backend, CMS veya sayfa genişlemelerine uyumlu olmalı (same-codebase continuation).

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine kullanıcıları, yerinde teknik destek arayan müşteriler.
- **İkincil Kullanıcılar:** Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, direct contact ile firma yetkililerine ulaşmak isteyen ziyaretçiler.

### Core Flows

1. **Ana Sayfa Keşfi:** Ziyaretçi Ana Sayfa üzerinden firma kimliğini, Disan yetkili servis statüsünü ve hizmet özetlerini inceler.
2. **Kurumsal Değerlendirme:** Ziyaretçi ayrı Kurumsal sayfası üzerinden firma ve yetkili servis kimliğini doğrular.
3. **Hizmetler Overview & Detay Keşfi:** Ziyaretçi Hizmetler sayfasından 3 temel hizmeti görür ve ilgilendiği hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) özel detay sayfasına geçer.
4. **Doğrudan İletişim:** Ziyaretçi İletişim sayfası üzerinden doğrudan telefon veya e-posta bağlantılarına (direct-contact) ulaşır.
5. **Masaüstü ve Mobil Navigasyon:** Ziyaretçi global navigation shell üzerinden tüm sayfalar arasında kesintisiz gezinebilir.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive, çok sayfalı kurumsal web sitesi (`corporate-website`) frontend demosu.
- 7 adet onaylı routable sayfa yüzeyi (`PAGE-001` - `PAGE-007`).
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin kurumsal sunumu.
- 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) overview ve ayrı detay sayfaları.
- Telefon ve e-posta doğrudan iletişim (direct-contact capability) sınırı.
- Çalışan multi-page navigasyon ve rotalama (distinct routable pages).
- Local/mock içerik için temiz frontend service/data-access adapter sınırı.
- Gelecekte aynı kod tabanı üzerinde büyüme hazırlığı (same-codebase continuation).

### Out of Scope

- Gerçek admin paneli / CMS implementation.
- Backend veritabanı, gerçek API endpoint'leri veya server-side form işleme.
- Kullanıcı kimlik doğrulama (auth) ve oturum yönetimi.
- E-ticaret / online ödeme / fiyatlandırma altyapısı.
- Canlı/interaktif harita entegrasyonu.
- WhatsApp entegrasyonu veya mesajlaşma butonu.
- İletişim formu, demo form, mesaj yazma/gönderme etkileşimleri, form input alanları ve form başarı/hata durumları.
- Production canlıya alma, hosting, domain veya DNS yapılandırmaları.
- Source dosyada bulunmayan referans, proje listesi, müşteri logosu, şirket tarihçesi, sertifika, ekip veya kapasite iddiaları.
- Source dosyada açıkça bulunmayan hizmet alt nitelikleri (stok merkezi, orijinal parça garantisi, mobil filo, acil müdahale, SLA süresi, periyodik bakım takvimi, spesifik pres/makine uzmanlığı vb.).

### Future Possibilities

- İleride müşteri onayına bağlı olarak eklenebilecek CMS/Admin yönetim paneli.
- Gerçek backend ve API entegrasyonları.
- İletişim veya teklif alma formu backend entegrasyonu.
- Harita ve WhatsApp canlı iletişim kanalları.
- Doğrulanmış müşteri referansları ve tamamlanan proje kataloğu.

> Future scope bugünkü committed scope gibi yazılamaz.

---

## 6. Site Architecture

### Architecture Status

- **Status:** `approved`
- **Architecture Rationale:** Trakya Teknik Makine source brief'indeki kurumsal site hedefine uygun olarak 7 adet bağımsız routable sayfa belirlenmiş ve kullanıcı tarafından açıkça onaylanmıştır.

### Page / Surface Registry

| Page ID | Page Name | Purpose | Route / Navigation Identity | Scope Status | Primary Content / Capability Boundaries | Parent / Detail Relation |
|---|---|---|---|---|---|---|
| `PAGE-001` | Ana Sayfa | Firma kimliğini, yetkili servis statüsünü, 3 hizmet özetini ve site içi keşif yollarını ana giriş yüzeyinde sunmak. | `/` | `IN_SCOPE` | Hero tanıtımı, Disan yetkili servis rozeti/açıklaması, 3 hizmet özet kartı, detay sayfalarına ve iletişime yönlendirme. | Root Surface |
| `PAGE-002` | Kurumsal | Trakya Teknik Makine kurumsal kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ayrı sayfada sunmak. | `/kurumsal` | `IN_SCOPE` | Kurumsal yetkili servis tanıtımı, faaliyet alanı bağlamı. Kısıt: Tarihçe, ekip, kapasite, sertifika veya referans uydurulamaz. | Standalone surface under Home |
| `PAGE-003` | Hizmetler | 3 onaylı hizmeti overview/discovery mimarisi içinde sunmak ve detay sayfalarına yönlendirmek. | `/hizmetler` | `IN_SCOPE` | Hizmetler genel bakış sunumu, detay sayfalarına (PAGE-004, PAGE-005, PAGE-006) navigasyon kartları. Kısıt: Arama/filtre/teklif formu eklenemez. | Standalone surface under Home |
| `PAGE-004` | Yedek Parça Temini — Hizmet Detayı | Approved Yedek Parça Temini hizmetini ayrı detay yüzeyinde odaklı biçimde sunmak. | `/hizmetler/yedek-parca-temini` | `IN_SCOPE` | Yedek Parça Temini hizmet tanıtımı. Kısıt: Stok, orijinal parça garantisi veya marka taahhüdü eklenemez. | Detail of PAGE-003 (Hizmetler) |
| `PAGE-005` | Yerinde Teknik Destek — Hizmet Detayı | Approved Yerinde Teknik Destek hizmetini ayrı detay yüzeyinde odaklı biçimde sunmak. | `/hizmetler/yerinde-teknik-destek` | `IN_SCOPE` | Yerinde Teknik Destek hizmet tanıtımı. Kısıt: Mobil filo, acil müdahale, SLA veya yanıt süresi iddiaları eklenemez. | Detail of PAGE-003 (Hizmetler) |
| `PAGE-006` | Makine Bakım ve Onarım — Hizmet Detayı | Approved Makine Bakım ve Onarım hizmetini ayrı detay yüzeyinde odaklı biçimde sunmak. | `/hizmetler/makine-bakim-onarim` | `IN_SCOPE` | Makine Bakım ve Onarım hizmet tanıtımı. Kısıt: Periyodik bakım, revizyon, spesifik makine/pres uzmanlığı eklenemez. | Detail of PAGE-003 (Hizmetler) |
| `PAGE-007` | İletişim | Direct-contact iletişim kanallarını ayrı sayfada sunmak. | `/iletisim` | `IN_SCOPE` | Telefon ve e-posta doğrudan iletişim (direct-contact) bilgileri ve bağlantıları. Kısıt: Form, submit, WhatsApp, harita veya randevu etkileşimi eklenemez. | Standalone surface under Home |

### Corporate Website Architecture Rules

- `corporate-website` için approved inputta bu registry boş olamaz.
- Her executable distinct page `PAGE-XXX` identity taşır.
- Approved site architecture kesinleşmiştir.
- Approved distinct pages single-page anchor section'lara collapse edilemez.
- Future/unresolved pages approved current set içinde gösterilemez.
- Exact semantics: `engine/SITE_ARCHITECTURE_RULES.md`.

---

## 7. Existing Project Context

### Current Reality

`N/A` (`project_state: new`)

### Target State

`N/A` (`project_state: new`)

### Transition Scope

`N/A` (`project_state: new`)

---

## 8. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Proje bir frontend kurumsal satış demosudur (`Prototype` delivery profile).
- Sıfırdan paket yönetimli (package-managed), bileşen odaklı (component-oriented), modüler ve tekrarlanabilir dev/build/preview iş akışına sahip modern bir frontend mimarisi kullanılacaktır.
- Gelecekte aynı kod tabanı üzerinde backend, CMS ve sayfa genişlemelerine imkan tanıyan same-codebase continuation yapısı korunacaktır.
- Onaylı bir zero-build kısıtı yoktur.

### Current Data Source Reality

- Proje local mock/fixture verisi ile çalışacaktır.
- Harici veritabanı veya canlı REST/GraphQL API bağlantısı yoktur.

### Service / Data-Access Boundary Expectation

- Kullanıcı arayüzü bileşenleri mock veriye doğrudan hardcode edilmeyecek; soyutlanmış bir service/adapter katmanı (data-access boundary) üzerinden erişecektir.

### Future Backend / Integration Context

- İleride backend API veya CMS entegrasyonu istendiğinde presentation katmanı değiştirilmeden adapter katmanı değiştirilerek entegrasyon sağlanabilecektir.

### Unresolved Technical Decisions

- Kesin JS/TS framework'ü (React/Vite vb.), router kütüphanesi ve paket yöneticisi Engine runtime technical resolution aşamasında kararlaştırılacaktır.

---

## 9. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi

### Desired Character / Perception

- Modern, temiz, güven veren endüstriyel ve teknik kurumsal dil.
- Teknik hassasiyet (precision), uzmanlık, dayanıklılık ve kurumsal profesyonellik hissi.

### Explicit Preferences / Constraints

- Koyu antrasit teknik yüzeyler ve amber/turuncu vurucu vurgular (precision accent) tercih edilen kreatif tasarım yönüdür (resmi marka tescili veya fakta dönüştürülmeden tasarım kararı olarak uygulanabilir).
- Masaüstü ve mobil ekranlarda yüksek responsive uyum.
- Jenerik "lacivert hero + 3 kart + standart footer" kalıplarından kaçınılmalıdır.
- Tasarım kreatifliği, yetkisiz form/modal/search/request etkileşimleri ekleme izni vermez.

### Differentiation Notes

- Sektör klişelerinden uzak; tipografi, grid yapısı ve teknik çizim/şema esintili modern yüzeylerle ayrışan özel tasarım sistemi.

---

## 10. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| `SRC-001` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project_source | source_truth | Tüm firma, hizmet, kapsam, mimari ve tasarım gereksinimlerinin canonical kaynağı. |

- `source_count` yukarıdaki gerçek kayıt sayısıyla aynı olmalıdır (`1`).
- Secret/token/password saklanmaz.
- Machine-dependent absolute path kullanılmaz.

---

## 11. Known Decisions

- `project_type`: `corporate-website`
- `delivery_profile`: `Prototype`
- `implementation_planning`: `standard`
- `design_planning`: `standard`
- `site_architecture`: 7 onaylı sayfa (`PAGE-001` - `PAGE-007`)
- `capability_scope`: Doğrudan telefon/e-posta iletişimi (direct-contact) dışında form, submit, harita veya WhatsApp etkileşimi kapsama dahil değildir.
- `stack_baseline`: Continuation-ready, package-managed, component-oriented frontend baseline.

---

## 12. Assumptions

| Assumption ID | Alan | Yapılan | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| `ASM-001` | `primary_language` | Türkçe (`tr`) | safe | Proje source metni Türkçe hazırlanmıştır ve hedef kitle Trakya bölgesindeki işletmelerdir. | proje bağlamı | `confirmed` |
| `ASM-002` | `design_direction` | Koyu antrasit yüzey + amber/turuncu hassasiyet vurgusu | bounded | Source brief'te tercih edilen visual direction olarak belirtilmiştir; resmi marka gerçeği değil visual decision olarak değerlendirilir. | proje bağlamı | `confirmed` |

---

## 13. Conflicts

*Henüz tanımlanmış bir çelişki bulunmamaktadır.*

---

## 14. Open Questions / Unresolved Items

- Exact telefon, e-posta ve adres bilgileri (Source dosyada açık metin olarak verilmemiştir; direct-contact kanalları güvenli iletişim sınırı olarak planlanacak, exact değerler sağlandığında render edilecektir).
- Yüksek çözünürlüklü marka ve logo görselleri.
- İleride form, harita veya WhatsApp kanallarının kapsama dahil edilip edilmeyeceği.

---

## 15. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-17T04:57:35+03:00
- **Approved By:** `user`

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `standard` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] `project_type: corporate-website` ise Site Architecture registry PAGE identities ile tamamlandı ve explicit approval kapsamına girdi.
- [x] Corporate website distinct approved pages single-page section seti gibi meodellenmedi.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı (`N/A` for `new`).
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (`1`).
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` için doğrudan approval kanıtı var.
