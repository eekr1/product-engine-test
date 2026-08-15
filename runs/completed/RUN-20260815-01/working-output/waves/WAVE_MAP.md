# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Deterministic Decomposition**: Proje scope'u 5 bağımsız, sıralı ve doğrulanabilir teslimat dalgasına bölünmüştür.
- **Foundation Before Consuming Surfaces**: `WAVE_00` temel UI architecture ve data access boundary'yi kurar; sonraki dalgalar bu temeli tüketir.
- **Granularity Guard Strict Compliance**: `DEMO_FRONTEND_PACKAGE` kuralı uyarınca Hizmetler (`WAVE_02`), İletişim (`WAVE_03`) ve Final Cross-Cutting Integration QA (`WAVE_04`) ayrı wave'ler olarak yapılandırılmıştır.
- **Strict Scope & FCL Alignment**: Her wave committed capability atomlarında yalnız exact executable approved support (`SCP-001` .. `SCP-009`, `SCP-011`) taşır. Kapsam dışı (`SCP-012` .. `SCP-015`) ve açık sorular (`SCP-016` .. `SCP-019`) wave scope'larına sızdırılamaz.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Goal | Dependencies | Deliverables |
|---|---|---|---|---|
| WAVE_00 | Foundation & Data Access Boundary | Proje dizin yapısı, CSS custom properties, responsive layout shell ve mock data access boundary (`companyService.js`) katmanının kurulması | None | Project scaffolding, Design tokens CSS, `companyData.js`, `companyService.js` |
| WAVE_01 | Brand Identity & Hero Surface | Trakya Teknik Makine marka kimliği, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü rozeti ve ana hero yüzeyinin inşa edilmesi | WAVE_00 | Header Navigation, Hero Section, Authorized Service Badge |
| WAVE_02 | Core Services Presentation | Approved 3 temel hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım me Onarım`) görsel ve metinsel hiyerarşi ile sunulması | WAVE_01 | Services Section, Service Cards, Technical Details Overlay |
| WAVE_03 | Direct Contact CTA & Regional Context | Telefon/e-posta direct-contact CTA yüzeyleri, Trakya bölgesi kurumsal servis bağlamı ve footer alanının inşa edilmesi | WAVE_02 | Contact Section, Action Bar (`tel:`, `mailto:`), Regional Context Showcase, Footer |
| WAVE_04 | Final Integration & Presentation QA | Tüm yüzeylerin bütünsel responsive uyumunun, cross-browser görünürlüğünün, veri erişim sınırlarının ve satış demosu kalitesinin doğrulanması | WAVE_03 | Verified Demo Package, Production-ready static output, QA validation evidence |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Data Boundary)
  └──> WAVE_01 (Brand Identity & Hero Surface)
        └──> WAVE_02 (Core Services Presentation)
              └──> WAVE_03 (Direct Contact CTA & Regional Context)
                    └──> WAVE_04 (Final Integration & Presentation QA)
```

## 4. Wave Entries

### WAVE_00 — Foundation & Data Access Boundary

- **Goal**: Proje dosya yapısını, CSS design token altyapısını, responsive global shell'i ve UI'ı mock veriden yalıtan clean `companyService.js` data access katmanını oluşturmak.
- **Why Separate / Sequencing Rationale**: Kullanıcı yüzeyleri inşa edilmeden önce tasarım token'larının ve UI ile veri arasındaki soyutlama katmanının hazır olması, component seviyesinde hardcoded veri karmaşasını önler.
- **Committed Capabilities**:
  - `Modern ve responsive kurumsal frontend demo temel mimarisi` | `SCP-001` | Modern frontend demo scaffolding and design tokens | PASS
  - `Mock/local içerik için temiz frontend service/data-access boundary` | `SCP-007` | Clean data access boundary abstraction | PASS
- **In Scope**:
  - Modern HTML5/CSS/JS proje yapısının kurulması.
  - CSS custom properties (design tokens: renk, tipografi, spacing, radii, transitions).
  - Clean `companyData.js` static data store (onaylı metin ve 3 hizmet verisi).
  - `companyService.js` data access adapter katmanı (`getCompanyInfo()`, `getServices()`).
- **Out of Scope**:
  - Gerçek backend API veya veritabanı.
  - Gerçek kullanıcı arayüzü görsel bileşenleri (WAVE_01'de başlar).
- **Primary Deliverables**:
  - `index.html` (scaffold)
  - `styles/main.css` (design tokens & base reset)
  - `src/data/companyData.js`
  - `src/services/companyService.js`
- **Dependencies**: None.
- **Upstream Boundary Consumed**: None (Initial Wave).
- **Downstream Handoff**: `WAVE_01` için hazır CSS token'ları, temel responsive container ve `companyService` veri okuma kanalı.
- **Exit Boundary**: `companyService.js` fonksiyonlarının mock veriyi asenkron promise ile eksiksiz dönmesi ve CSS token'larının tanımlanmış olması.

---

### WAVE_01 — Brand Identity & Hero Surface

- **Goal**: Trakya Teknik Makine marka kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü rozetini ve görsel hero tanıtım alanını inşa etmek.
- **Why Separate / Sequencing Rationale**: Ziyaretçi ve müşterinin ilk gördüğü güven verici marka kimliği ve yetkili servis statüsü, hizmet detaylarından önce sunulmalıdır.
- **Committed Capabilities**:
  - `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu` | `SCP-002` | Authorized Service status presentation | PASS
  - `Trakya Teknik Makine gerçek firma kimliği sunum temeli` | `SCP-009`, `SCP-010` | Company identity presentation | PASS
- **In Scope**:
  - Header / Navigation Bar (Logo metni, Yetkili Servis statü rozeti, hızlı gezinme).
  - Hero Section (Manşet, yetkili servis vurgusu, görsel teknik zemin ve ikincil eylem butonları).
  - Disan Hidrolik Makine Trakya Bölge Yetkili Servisi özel vurgu paftası.
- **Out of Scope**:
  - 3 Hizmetin detay kartları (WAVE_02).
  - İletişim formu / harita / WhatsApp (Kapsam dışı).
- **Primary Deliverables**:
  - `src/ui/components/Navbar.js` (veya ilgili HTML/CSS modülü)
  - `src/ui/components/Hero.js`
  - `src/ui/components/AuthorizedServiceBadge.js`
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` CSS token'ları ve `companyService` marka bilgileri.
- **Downstream Handoff**: `WAVE_02` için üst marka ve yetkili servis kimliği tamamlanmış ana sayfa üst düzeni.
- **Exit Boundary**: Ana sayfa üst alanında marka adı ve Yetkili Servis statüsünün sorunsuz görünmesi ve responsive uyumu.

---

### WAVE_02 — Core Services Presentation

- **Goal**: Approved 3 temel hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) endüstriyel görsel ve metinsel hiyerarşi ile sunulmasını sağlamak.
- **Why Separate / Sequencing Rationale**: Hizmet sunumu projenin ana değer önermesidir; `DEMO_FRONTEND_PACKAGE` kuralı uyarınca iletişim yüzeylerinden ayrı bağımsız bir dalga olarak geliştirilmelidir.
- **Committed Capabilities**:
  - `Ana Hizmet 1: Yedek Parça Temini görsel ve metinsel sunumu` | `SCP-003` | Service 1 presentation | PASS
  - `Ana Hizmet 2: Yerinde Teknik Destek görsel ve metinsel sunumu` | `SCP-004` | Service 2 presentation | PASS
  - `Ana Hizmet 3: Makine Bakım ve Onarım görsel ve metinsel sunumu` | `SCP-005` | Service 3 presentation | PASS
  - `Hizmet qualifier'ları yokluğu kuralının uygulanması` | `SCP-011` | Strict factual service boundary | PASS
- **In Scope**:
  - Services Section Grid yapısı (3 approved hizmet için responsive kartlar).
  - Her hizmet kartı için ikon, başlık, kısa açıklama ve teknik servis detay paftası.
  - `companyService.getServices()` ile dinamik veri bağlama.
  - Sadece source-backed 3 hizmet isminin ve açıklamalarının kullanılması.
- **Out of Scope**:
  - Hizmet isimlerine stok, orijinal parça, mobil filo, acil müdahale, SLA, periyodik bakım veya revizyon eklenmesi (YASAK).
  - İletişim detayları ve tel/e-posta CTA'ları (WAVE_03).
- **Primary Deliverables**:
  - `src/ui/components/ServicesSection.js`
  - `src/ui/components/ServiceCard.js`
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` ana sayfa düzeni ve `companyService` hizmet verisi.
- **Downstream Handoff**: `WAVE_03` için 3 hizmeti eksiksiz sergileyen görsel sunum katmanı.
- **Exit Boundary**: 3 approved hizmet kartının `companyService` üzerinden okunup WCAG AA standartlarında kusursuz sergilenmesi.

---

### WAVE_03 — Direct Contact CTA & Regional Context

- **Goal**: Telefon (`tel:`) ve e-posta (`mailto:`) direct-contact CTA yüzeylerini, Trakya bölgesi kurumsal servis bağlamını ve footer alanını inşa etmek.
- **Why Separate / Sequencing Rationale**: Hizmetleri inceleyen ziyaretçinin doğrudan iletişime geçebileceği CTA yüzeyleri ve bölgesel bağlam ayrı bir dönüşüm adımıdır.
- **Committed Capabilities**:
  - `Telefon ve e-posta direct-contact CTA yüzeyleri` | `SCP-006` | Direct-contact phone & email CTAs | PASS
  - `Trakya bölgesi endüstriyel/teknik servis bağlamının sunumu` | `SCP-009` | Regional industrial service context | PASS
- **In Scope**:
  - Direct Contact CTA Bloğu (Telefon tetikleyici `tel:` linki, e-posta tetikleyici `mailto:` linki).
  - Trakya Bölgesi kurumsal teknik servis bağlamı vurgu alanı.
  - Mobil cihazlar için alt dikey sabit iletişim eylem çubuğu (Sticky Contact Bar).
  - Kurumsal Footer (Telif hakkı, yetkili servis özeti, hızlı erişim).
- **Out of Scope**:
  - Form submit backend'i, WhatsApp sohbet widget'ı, canlı Google Maps iframe'i (Kapsam dışı).
  - Doğrulanmamış telefon numarası, e-posta adresi veya açık adres metni uydurmak (Placeholder/approved format korunur).
- **Primary Deliverables**:
  - `src/ui/components/ContactSection.js`
  - `src/ui/components/MobileStickyCTA.js`
  - `src/ui/components/Footer.js`
- **Dependencies**: `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_02` hizmetler bölümü ve markanın kurumsal yapısı.
- **Downstream Handoff**: `WAVE_04` için tüm görsel bölümleri tamamlanmış sayfa yapısı.
- **Exit Boundary**: Telefon ve e-posta CTA butonlarının masaüstü ve mobilde doğru protokolleri (`tel:`, `mailto:`) tetiklemesi.

---

### WAVE_04 — Final Integration & Presentation QA

- **Goal**: Tüm yüzeylerin bütünsel responsive uyumunu, cross-browser görünürlüğünü, veri erişim sınırlarını ve satış demosu kalitesini doğrulamak.
- **Why Separate / Sequencing Rationale**: `DEMO_FRONTEND_PACKAGE` Granularity Guard uyarınca bütüncül QA ve satış demosu sunum olgunluğu ayrı bir kapanış dalgası gerektirir.
- **Committed Capabilities**:
  - `Satış görüşmesinde gösterilebilir nitelikte tamamlanmış görsel deneyim` | `SCP-008` | Sales demo presentation readiness & QA | PASS
  - `Modern ve responsive kurumsal frontend demo nihai doğrulaması` | `SCP-001` | Final responsive & quality verification | PASS
- **In Scope**:
  - Tüm sayfanın uçtan uca responsive testi (360px, 768px, 1024px, 1440px+).
  - Veri erişim sınırlarının (service boundary leak-check) denetlenmesi.
  - Sektör klişesi / generic template drift denetimi.
  - Satış görüşmesi gösterim olgunluğu kontrolü.
  - Final clean static package derlemesi.
- **Out of Scope**:
  - Yeni bir UI bileşeni veya kapsam dışı özellik eklemek.
- **Primary Deliverables**:
  - Complete validated output package (`outputs/demos/trakya-teknik-makine/latest/`)
  - Verification & QA presentation checklist output.
- **Dependencies**: `WAVE_03`.
- **Upstream Boundary Consumed**: `WAVE_03` tamamlanmış tüm frontend yüzeyleri.
- **Downstream Handoff**: Müşteri satış görüşmesinde sunulmaya hazır, doğrulanmış nihai prototip paketi.
- **Exit Boundary**: Sıfır konsol hatası, sıfır kırık düzen, tam WCAG AA erişilebilirlik ve kusursuz satış demosu görünümü.

## 5. Cross-Wave Invariants

- **Invariant 1**: Hiçbir wave kaynak dosyada bulunmayan firma gerçeği, sertifika, referans veya hizmet qualifier'ı üretemez.
- **Invariant 2**: Hiçbir wave UI bileşenlerine mock veri hardcode edemez; `companyService.js` katmanı zorunludur.
- **Invariant 3**: Hiçbir wave backend, veritabanı, form submit backend'i, WhatsApp veya harita ekleyemez.

## 6. Global Exit / Handoff Rules

- Her wave tamamlandığında kendi `WAVE_<NN>.md` planındaki tüm kabul kriterlerini karşılamalıdır.
- Sonraki wave ancak bir önceki wave `Exit Boundary` şartlarını sağladığında başlayabilir.
