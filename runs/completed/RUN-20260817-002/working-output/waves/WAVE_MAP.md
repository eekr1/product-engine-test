# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Principle 1 (Modular Delivery Boundaries)**: Proje 6 bağımsız, doğrulanabilir delivery dalgasına ayrılmıştır. Her dalga tamamlandığında bağımsız bir çalışma katmanı teslim eder.
- **Principle 2 (Strict Capability Alignment)**: Her wave'deki committed capabilities yalnız ve kesin olarak `IN_SCOPE + Executable YES` olan Approved Scope Registry (`SCP-001..SCP-006`) öğeleriyle eşleştirilmiştir.
- **Principle 3 (Factual Allowlist Discipline)**: Factual iddialar yalnız `SRC-01` tabanlı FCL allowlist (`FCL-001..FCL-006`) ile desteklenir; hiçbir wave uydurma firma gerçeği veya kapsam dışı capability içermez.
- **Principle 4 (Clean Data Boundary)**: UI bileşenleri mock/local data adapter (`siteData.js`) üzerinden beslenir; sunum katmanı ile veri katmanı ayrıştırılır.
- **Principle 5 (Prototype Delivery Profile)**: Tüm dalgalar onaylı `Prototype` teslim olgunluğuna uygun ifadeler taşır; `production-ready` veya `launch-ready` gibi olgunluk yükseltici ifadeler kullanılmaz.

## 2. Wave Map Summary

| Wave ID | Wave Name | Goal | Primary Deliverable | Dependencies | Target Output |
|---|---|---|---|---|---|
| WAVE_00 | Foundation & Core Configuration Layer | Proje kod tabanı, modern CSS design token'ları ve mock data boundary altyapısını kurmak. | `src/config/siteData.js`, `src/styles/main.css`, `index.html` shell | None | Foundation Ready |
| WAVE_01 | Global Shell & Corporate Navigation Header | Kurumsal header, responsive navigasyon menüsü ve footer shell bileşenini inşa etmek. | `src/components/shell/Header.js`, `src/components/shell/Footer.js` | WAVE_00 | Navigation Shell Complete |
| WAVE_02 | Hero & Brand Positioning Section | Firma adı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ve birincil CTA'ları sunan hero alanını üretmek. | `src/components/hero/HeroSection.js` | WAVE_01 | Hero & Brand Section Complete |
| WAVE_03 | Core Services Showcase Section | Üç onaylı hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel vitrin kartlarını inşa etmek. | `src/components/services/ServicesSection.js` | WAVE_02 | Services Showcase Complete |
| WAVE_04 | Corporate Overview & Direct Contact Surface | Kurumsal tanıtım metni, Trakya bölgesi bağlamı ve direct-contact (telefon/e-posta) aksiyon yüzeyini tamamlamak. | `src/components/about/AboutSection.js`, `src/components/contact/ContactBar.js` | WAVE_03 | Corporate & Contact Surface Complete |
| WAVE_05 | Whole-Project Integration, Responsive & Quality QA | Çapraz cihaz responsive görünüm, WCAG AA erişilebilirlik, animasyon ve satış demosu doğrulamasını tamamlamak. | Integrated Frontend Package (`index.html`, dynamic JS modules) | WAVE_04 | Integrated Prototype Ready |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Data Boundary)
  └── WAVE_01 (Global Shell & Navigation Header)
        └── WAVE_02 (Hero & Brand Positioning Section)
              └── WAVE_03 (Core Services Showcase Section)
                    └── WAVE_04 (Corporate Overview & Direct Contact Surface)
                          └── WAVE_05 (Whole-Project Integration, Responsive & Quality QA)
```

## 4. Wave Entries

### WAVE_00: Foundation & Core Configuration Layer

- **Goal**: Projenin HTML5/CSS3/ES6 altyapısını, `DESIGN_RULES` ile tanımlı renk ve tipografi token'larını ve `siteData.js` local content boundary katmanını kurmak.
- **Why Separate / Sequencing Rationale**: Tüm UI bileşenleri veri erişim adapter'ı ve CSS design token'ları üzerinden besleneceği için foundation katmanı UI sunum bileşenlerinden önce bağımsız olarak teslim edilmelidir.
- **Committed Capabilities**:
  - `SCP-001 (Modular Frontend Setup)` | Support ID: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Modern ve responsive kurumsal frontend demo temeli | Result: PASS
  - `SCP-005 (Data Access Boundary)` | Support ID: `SCP-005` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Clean frontend service/data-access boundary | Result: PASS
- **In Scope**:
  - `index.html` temel yapısı ve font/meta yüklemeleri (`Outfit` & `Inter` Google Fonts).
  - `src/styles/main.css` design tokens, CSS custom properties, grid ve utility tanımları.
  - `src/config/siteData.js` FCL allowlist ile sınırlı firma ve hizmet verilerini tutan local adapter katmanı.
- **Out of Scope**: Real backend, CMS, veritabanı veya harici CSS framework yüklemesi.
- **Primary Deliverables**: `index.html`, `src/styles/main.css`, `src/config/siteData.js`.
- **Dependencies**: None (Root foundation).
- **Upstream Boundary Consumed**: Approved Input & Design Rules (`DESIGN`).
- **Downstream Handoff**: `WAVE_01` için hazır CSS token'ları, HTML iskeleti ve `getSiteData()` adapter'ı.
- **Exit Boundary**: Local data boundary ve CSS theme token'ları çalışır durumda, tarayıcıda hatasız yükleniyor.

---

### WAVE_01: Global Shell & Corporate Navigation Header

- **Goal**: Mobil ve masaüstü uyumlu kurumsal header, navigasyon menüsü, marka logosu alanı ve footer shell yapısını inşa etmek.
- **Why Separate / Sequencing Rationale**: Ziyaretçinin sayfada gezinmesini sağlayan ana görünüm kabuğu (shell) içerik alanlarından önce tamamlanmalıdır.
- **Committed Capabilities**:
  - `SCP-001 (Global Shell Navigation)` | Support ID: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Responsive kurumsal frontend shell ve navigasyon | Result: PASS
  - `SCP-002 (Brand Logo & Name Header Presenter)` | Support ID: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Trakya Teknik Makine firma kimliği sunumu | Result: PASS
- **In Scope**:
  - `src/components/shell/Header.js` (Marka adı, yetkili servis vurgusu, masaüstü menü ve mobil hamburger tetikleyici).
  - `src/components/shell/NavigationDrawer.js` (Mobil ekranlar için slide-over navigasyon paneli).
  - `src/components/shell/Footer.js` (Kurumsal telif hakkı, hızlı navigasyon linkleri ve yetkili servis beyanı).
- **Out of Scope**: Dynamic CMS menüsü, kullanıcı giriş butonları veya e-ticaret sepeti.
- **Primary Deliverables**: `Header.js`, `NavigationDrawer.js`, `Footer.js`.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` CSS design token'ları ve HTML shell.
- **Downstream Handoff**: `WAVE_02` hero ve içerik bölümü için üst navigasyon kabuğu.
- **Exit Boundary**: Header ve Footer görünümü masaüstü ve mobil ekranlarda sorunsuz çalışıyor.

---

### WAVE_02: Hero & Brand Positioning Section

- **Goal**: Trakya Teknik Makine firma adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü badge'ini ve birincil aksiyon CTA'larını sunan hero alanını inşa etmek.
- **Why Separate / Sequencing Rationale**: Ziyaretçinin ilk gördüğü hero alanı, firmanın kimliğini ve yetkili servis statüsünü belirlediği için bağımsız bir görsel/işlevsel delivery birimidir.
- **Committed Capabilities**:
  - `SCP-002 (Authorized Service Status Banner)` | Support ID: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü sunumu | Result: PASS
  - `SCP-004 (Hero Direct Contact CTA)` | Support ID: `SCP-004` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Direct-contact telefon/e-posta CTA yüzeyi | Result: PASS
- **In Scope**:
  - `src/components/hero/HeroSection.js` (Asimetrik 2-column mizanpaj, hero başlığı, alt açıklama, yetkili servis badge'i).
  - Hero CTA butonları (Hizmetlerimizi İnceleyin scroll CTA + İletişim direct-contact trigger).
- **Out of Scope**: Uydurma sertifika rozetleri, 7/24 hizmet iddiası veya stok garantisi beyanları.
- **Primary Deliverables**: `src/components/hero/HeroSection.js`.
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` Header shell.
- **Downstream Handoff**: `WAVE_03` Hizmetler bölümüne geçiş sağlayan görsel hero alanı.
- **Exit Boundary**: Hero bölümü marka kimliğini ve yetkili servis statüsünü net biçimde sunuyor.

---

### WAVE_03: Core Services Showcase Section

- **Goal**: Üç onaylı hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel vitrin kartlarını ve detay overlay katmanını inşa etmek.
- **Why Separate / Sequencing Rationale**: Firmanın üç temel hizmet sunumu ana değer önermesini oluşturduğu için bağımsız ve detaylı bir wave olarak ele alınmalıdır.
- **Committed Capabilities**:
  - `SCP-003 (Core Services Showcase)` | Support ID: `SCP-003` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Üç onaylı hizmetin görsel sunumu | Result: PASS
- **In Scope**:
  - `src/components/services/ServicesSection.js` (3-column grid/card mizanpajı).
  - `src/components/services/ServiceCard.js` (Hizmet 1: Yedek Parça Temini, Hizmet 2: Yerinde Teknik Destek, Hizmet 3: Makine Bakım ve Onarım).
  - `src/components/services/ServiceDetailModal.js` (Hizmet detay bilgisi ve direct-contact CTA tetikleyici katmanı).
- **Out of Scope**: Hizmet 1 için orijinal parça/stok garantisi, Hizmet 2 için mobil filo/SLA, Hizmet 3 için pres revizyonu/periyodik bakım paketi gibi uydurma iddialar.
- **Primary Deliverables**: `ServicesSection.js`, `ServiceCard.js`, `ServiceDetailModal.js`.
- **Dependencies**: `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_02` Hero alanı.
- **Downstream Handoff**: `WAVE_04` kurumsal tanıtım ve direct-contact alanına hizmet verisi akışı.
- **Exit Boundary**: Üç onaylı hizmet kartı ve detay overlay'leri tarayıcıda akıcı biçimde incelenebiliyor.

---

### WAVE_04: Corporate Overview & Direct Contact Surface

- **Goal**: Trakya Teknik Makine kurumsal tanıtımını, Trakya bölgesi teknik servis bağlamını ve direct-contact (telefon/e-posta) aksiyon yüzeyini inşa etmek.
- **Why Separate / Sequencing Rationale**: Ziyaretçinin firmayı tanımasını ve doğrudan iletişime geçmesini sağlayan aksiyon alanı, hizmet vitrininden sonra gelen bağımsız bir dönüşüm katmanıdır.
- **Committed Capabilities**:
  - `SCP-002 (Corporate Identity Presentation)` | Support ID: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Trakya Teknik Makine kurumsal bilgisi sunumu | Result: PASS
  - `SCP-004 (Direct Contact Telephone/Email Surface)` | Support ID: `SCP-004` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Telefon/e-posta direct-contact CTA yüzeyi | Result: PASS
- **In Scope**:
  - `src/components/about/AboutSection.js` (Kurumsal tanıtım ve Trakya bölgesi teknik servis bağlamı sunumu).
  - `src/components/contact/ContactBar.js` (Telefon `tel:` ve E-posta `mailto:` direct-contact butonları; fallback değerler config'ten okunur).
- **Out of Scope**: Uydurma fiziksel adres, harita entegrasyonu, WhatsApp yönlendirmesi veya iletişim formu submit backend'i.
- **Primary Deliverables**: `AboutSection.js`, `ContactBar.js`.
- **Dependencies**: `WAVE_03`.
- **Upstream Boundary Consumed**: `WAVE_03` Hizmetler bölümü.
- **Downstream Handoff**: `WAVE_05` bütünsel entegrasyon ve kalite doğrulaması için tamamlanmış UI yüzeyleri.
- **Exit Boundary**: Kurumsal bilgi ve direct-contact telefon/e-posta butonları sorunsuz çalışıyor.

---

### WAVE_05: Whole-Project Integration, Responsive & Quality QA

- **Goal**: Tüm UI bileşenlerini `index.html` üzerinde entegre etmek, mobil/masaüstü responsive uyumunu kontrol etmek, WCAG AA erişilebilirlik ve satış demosu kalitesini doğrulamak.
- **Why Separate / Sequencing Rationale**: Tüm bağımsız UI bileşenleri tamamlandıktan sonra bütünsel tarayıcı entegrasyonu, responsive cihaz testi ve kalite doğrulaması ayrı bir kapanış dalgası gerektirir.
- **Committed Capabilities**:
  - `SCP-001 (Responsive Frontend Experience Integration)` | Support ID: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Responsive masaüstü ve mobil kullanım entegrasyonu | Result: PASS
  - `SCP-006 (Sales Demo Verification)` | Support ID: `SCP-006` | Status: `IN_SCOPE` | Executable: `YES` | Meaning: Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim | Result: PASS
- **In Scope**:
  - `index.html` modül montajı ve JavaScript event initialization.
  - Cross-browser ve responsive breakpoint doğrulaması (Mobile < 768px, Desktop > 1200px).
  - FCL dürüstlük kontrolü ve `siteData.js` mock boundary doğrulaması.
- **Out of Scope**: Production deployment, domain/hosting yapılandırması veya harici backend entegrasyonu.
- **Primary Deliverables**: Integrated Prototype Package (`index.html`, `src/**/*.js`, `src/**/*.css`).
- **Dependencies**: `WAVE_04`.
- **Upstream Boundary Consumed**: `WAVE_00..04` tüm UI ve config bileşenleri.
- **Downstream Handoff**: Satış görüşmelerinde kullanılabilir tamamlanmış frontend demo paketi.
- **Exit Boundary**: Kod hatasız çalışıyor, tüm akışlar dürüstçe sunuluyor ve satış demosu hazır.

## 5. Cross-Wave Invariants

1. **No Invented Facts**: `SRC-01` allowlist dışındaki hiçbir iddia veya kurgusal firma verisi dalgalar arasında kodlanamaz.
2. **No Invented Backend**: Hiçbir wave sahte API endpoint'i veya veritabanı şeması içeremez.
3. **Responsive Quality**: Tüm wave çıktıları mobil ve masaüstü görünümünü destekleyecek biçimde CSS token'larını kullanmalıdır.
4. **Clean Boundary**: Presentation bileşenleri doğrudan `siteData.js` adapter'ından veri okumalıdır.

## 6. Global Exit / Handoff Rules

- Her wave planı tamamlandığında ilgili checklist ve kabul kriterleri doğrulanır.
- Son dalga (WAVE_05) bittiğinde proje `outputs/demos/trakya-teknik-makine/latest/` altında yayınlanmaya hazır validated prototype durumuna gelir.
