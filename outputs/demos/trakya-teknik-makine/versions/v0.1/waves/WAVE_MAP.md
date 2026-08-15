# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Deterministic Decomposition**: `demo-frontend` package ve `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` uyarınca altyapı, marka kimliği/hero, kurumsal bağlam, 3 approved hizmet, direct contact yüzeyleri ve bütüncül QA sorumlulukları izole ve bağımsız doğrulanabilir teslim dalgalarına ayrılmıştır.
- **Strict Scope Boundary**: Dalgalar yalnızca `INPUT_SNAPSHOT.md` Approved Scope Registry (`SCP-001` - `SCP-006`) tarafından yetkilendirilen capability atomlarını taşır.
- **Point-of-Use Template Refresh & FCL Boundary**: Tüm dalgalar `SOURCE_REGISTER.md` içinde dondurulan FCL-001 - FCL-007 kayıtlarına kesin uyum sağlar.
- **Delivery Wording**: Proje `Prototype` teslim olgunluğundadır. Üretilen wording `demo-ready`, `prototype frontend ready` sınırları içindedir.

## 2. Wave Map Summary

| Wave ID | Name | Goal | Primary Deliverable | Dependency |
|---|---|---|---|---|
| WAVE_00 | Foundation & Data Access Boundary Setup | Modüler HTML/CSS mimarisi ve local mock static adapter altyapısının kurulması | Base HTML layout, design tokens CSS, `companyService.js` adapter | None |
| WAVE_01 | Brand Identity & Primary Hero Presentation | Trakya Teknik Makine kimliği ve Disan Hidrolik Yetkili Servis statüsünün hero sunumu | Header shell, Hero section, yetkili servis badge, hero CTA | WAVE_00 |
| WAVE_02 | Corporate Background & Regional Context Presentation | Trakya bölgesi endüstriyel makine teknik servis bağlamı ve kurumsal güven sunumu | Kurumsal tanıtım bölümü, bölgesel hizmet bağlamı bileşeni | WAVE_01 |
| WAVE_03 | Services Showcase Presentation | 3 approved hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) veri odaklı dinamik sunumu | Services showcase grid section, 3 hizmet spesifikasyon kartı | WAVE_02 |
| WAVE_04 | Direct Contact Surface & CTA Presentation | Approved direct-contact CTA'ların (`tel:`, `mailto:`) ve kurumsal footer yapısının sunumu | Direct contact section, tel/mailto CTA butonları, kurumsal footer | WAVE_03 |
| WAVE_05 | Cross-Surface Integration, Responsive & QA | Ekranlar arası bütünleşme, mobil/masaüstü uyumu ve satış demosu kabul doğrulaması | Bütüncül responsive frontend demo paketi, QA doğrulama raporu | WAVE_04 |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Mock Data Adapter)
  └─► WAVE_01 (Header & Primary Hero Presentation)
        └─► WAVE_02 (Corporate Background & Regional Context)
              └─► WAVE_03 (3 Approved Services Showcase)
                    └─► WAVE_04 (Direct Contact & Footer CTA Surface)
                          └─► WAVE_05 (Cross-Surface Integration & Demo QA)
```

## 4. Wave Entries

### WAVE_00: Foundation & Data Access Boundary Setup

- **Goal**: Proje için modüler HTML layout yapısını, CSS varsayılanlarını (design tokens), ikon setini ve mock static data adapter katmanını (`companyService.js` & `mockCompanyData.js`) sıfır dış bağımlılıkla kurmaktır.
- **Why Separate / Sequencing Rationale**: UI sunum bileşenleri veriyi doğrudan HTML/JS içinde hardcode etmeyip servis katmanından çekeceğinden, temiz service/data access boundary tüm UI dalgalarından önce bağımsız bir altyapı teslimatı olarak kurulmalıdır.
- **Committed Capabilities**:
  - `clean presentation-data access boundary` | SCP-005 | Mock static adapter interface | PASS
  - `local mock static data adapter` | SCP-005 | Modüler JS mock data provider | PASS
- **In Scope**: Modüler HTML skeleton, `index.css` (variables, typography, reset, grid), `mockCompanyData.js`, `companyService.js` arayüzü.
- **Out of Scope**: Gerçek backend, veritabanı, API route'ları, CMS, external npm bağımlılıkları.
- **Primary Deliverables**: `index.html` temel yapısı, `src/styles/index.css`, `src/services/mockCompanyData.js`, `src/services/companyService.js`.
- **Dependencies**: None.
- **Upstream Boundary Consumed**: `INPUT_SNAPSHOT.md` & `TECH_CONTEXT.md`.
- **Downstream Handoff**: `WAVE_01` için hazır ve doğrulanmış `companyService` arayüzü ile stil tabanı (`index.css`).
- **Exit Boundary**: `companyService.getCompanyInfo()` ve `companyService.getServices()` metodları local mock veriyi asenkron promise ile döndürmeli ve browser konsolunda hata vermemelidir.

---

### WAVE_01: Brand Identity & Primary Hero Presentation

- **Goal**: Trakya Teknik Makine kurumsal adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve birincil direct-contact CTA alanını taşıyan Header Shell ve Hero bölümünü inşa etmektir.
- **Why Separate / Sequencing Rationale**: Hero bölümü ziyaretçinin ilk karşılaştığı ana tanıtım ve yetkili servis güven katmanıdır. Diğer detay hizmet ve iletişim bölümlerinden önce birincil marka kimliği sunumu olarak tamamlanmalıdır.
- **Committed Capabilities**:
  - `Trakya Teknik Makine kurumsal adı sunumu` | SCP-001, SCP-006 | Firma adı başlık/logo alanı | PASS
  - `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü sunumu` | SCP-002 | Servis statüsü yetkili servis rozeti | PASS
  - `Hero seviyesi direct contact CTA` | SCP-004 | Hero içi telefon/e-posta CTA butonları | PASS
- **In Scope**: Header/Navigation shell, Hero başlığı, yetkili servis badge'i, Hero alt metni (FCL-001 - FCL-006 bounded), birincil `tel:` ve `mailto:` CTA butonları.
- **Out of Scope**: WhatsApp butonu, canlı sohbet, interaktif harita, stok veya SLA iddiaları.
- **Primary Deliverables**: `src/components/Header.js`, `src/components/Hero.js`, `src/styles/hero.css`.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` servis katmanı (`companyService.js`) ve temel stiller.
- **Downstream Handoff**: `WAVE_02` için hazır Header ve Hero bölümü ile tamamlanmış üst alan düzeni.
- **Exit Boundary**: Hero alanında firma adı ve yetkili servis statüsü FCL kurallarına uygun biçimde görüntülenmeli, CTA butonları tıklanabilir `tel:` ve `mailto:` bağlantıları taşımalıdır.

---

### WAVE_02: Corporate Background & Regional Context Presentation

- **Goal**: Trakya bölgesi endüstriyel ve makine teknik servis bağlamını ve kurumsal güven unsurlarını sunan Kurumsal Tanıtım bölümünü inşa etmektir.
- **Why Separate / Sequencing Rationale**: Hero katmanından hemen sonra ziyaretçiye firmanın faaliyet bölgesini ve teknik servis bağlamını açıklayan kurumsal güven alanı bağımsız bir sunum modülüdür.
- **Committed Capabilities**:
  - `Trakya bölgesi endüstriyel makine servis bağlamı sunumu` | SCP-006 | Bölgesel teknik servis tanıtım alanı | PASS
- **In Scope**: Kurumsal tanıtım metni, endüstriyel teknik servis yetkinlik bağlamı sunum kartları (FCL-006 ile sınırlı).
- **Out of Scope**: Uydurma şube adresleri, fiziksel tesis alanı, çalışma saatleri, sertifika numaraları.
- **Primary Deliverables**: `src/components/About.js`, `src/styles/about.css`.
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` Header/Hero yerleşimi ve `companyService.js` verisi.
- **Downstream Handoff**: `WAVE_03` için hazır Kurumsal Tanıtım bölümü.
- **Exit Boundary**: Kurumsal bölümde Trakya bölgesi ve endüstriyel makine teknik servis bağlamı FCL sınırları içinde sunulmalı, uydurma iddia içermemelidir.

---

### WAVE_03: Services Showcase Presentation

- **Goal**: Firmanın 3 approved hizmetini (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) veri odaklı dinamik spesifikasyon kartları ile sunan Hizmetler bölümünü inşa etmektir.
- **Why Separate / Sequencing Rationale**: 3 approved hizmet projenin en kritik ürün sunum değeridir. DEMO_FRONTEND_PACKAGE guard'ı gereği hizmetler iletişim alanından ayrı bağımsız bir dalga olarak detaylandırılmalıdır.
- **Committed Capabilities**:
  - `Yedek Parça Temini hizmet sunumu` | SCP-003, FCL-003 | Hizmet Spesifikasyon Kartı 1 | PASS
  - `Yerinde Teknik Destek hizmet sunumu` | SCP-003, FCL-004 | Hizmet Spesifikasyon Kartı 2 | PASS
  - `Makine Bakım ve Onarım hizmet sunumu` | SCP-003, FCL-005 | Hizmet Spesifikasyon Kartı 3 | PASS
- **In Scope**: Services Grid container, 3 Hizmet Kartı bileşeni, SVG teknik ikonlar, `companyService.getServices()` veri bağlamı.
- **Out of Scope**: 4. bir hizmet eklemek, stok durumu, orijinal parça garantisi, mobil araç filosu sayısı, acil servis SLA süresi taahhütleri.
- **Primary Deliverables**: `src/components/Services.js`, `src/components/ServiceCard.js`, `src/styles/services.css`.
- **Dependencies**: `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_02` kurumsal alan teslimatı ve `companyService.js` verisi.
- **Downstream Handoff**: `WAVE_04` için 3 approved hizmet kartıyla tamamlanmış Hizmetler bölümü.
- **Exit Boundary**: Hizmetler alanında tam olarak 3 approved hizmet kartı görünmeli ve veriler `companyService` üzerinden dinamik render edilmelidir.

---

### WAVE_04: Direct Contact Surface & CTA Presentation

- **Goal**: Ziyaretçinin firma ile kolayca iletişime geçmesini sağlayan direct-contact CTA yüzeyini (`tel:`, `mailto:`) ve kurumsal Footer bölümünü inşa etmektir.
- **Why Separate / Sequencing Rationale**: DEMO_FRONTEND_PACKAGE guard'ı uyarınca İletişim bölümü Hizmetler bölümünden ve QA aşamasından ayrı bağımsız bir teslimat dalgası olarak kurgulanmalıdır.
- **Committed Capabilities**:
  - `Telefon direct contact CTA` | SCP-004, FCL-007 | `tel:` bağlantılı iletişim butonu/yüzeyi | PASS
  - `E-posta direct contact CTA` | SCP-004, FCL-007 | `mailto:` bağlantılı iletişim butonu/yüzeyi | PASS
  - `Kurumsal Footer yapısı` | SCP-001 | Telif hakkı, marka adı ve direct CTA footer paneli | PASS
- **In Scope**: İletişim kartı/paneli, telefon ve e-posta direct CTA butonları, Footer telif ve yetkili servis bilgisi.
- **Out of Scope**: Gerçek form backend'i, harita entegrasyonu, WhatsApp sohbet butonu, uydurma adres/telefon numaraları.
- **Primary Deliverables**: `src/components/Contact.js`, `src/components/Footer.js`, `src/styles/contact.css`.
- **Dependencies**: `WAVE_03`.
- **Upstream Boundary Consumed**: `WAVE_03` hizmetler bölümü ve `companyService.js` verileri.
- **Downstream Handoff**: `WAVE_05` için tamamlanmış UI yüzeyleri.
- **Exit Boundary**: İletişim bölümündeki CTA'lar doğru `tel:` ve `mailto:` linklerini taşımalı, form backend veya harita gibi yetkisiz bileşenler bulunmamalıdır.

---

### WAVE_05: Cross-Surface Integration, Responsive & QA

- **Goal**: Tüm tamamlanan UI yüzeylerinin (Header, Hero, About, Services, Contact, Footer) bütüncül entegrasyonunu sağlamak, masaüstü/mobil responsive uyumunu doğrulamak ve satış demosu kabul QA işlemlerini tamamlamaktır.
- **Why Separate / Sequencing Rationale**: DEMO_FRONTEND_PACKAGE guard'ı gereği whole-project responsive, cross-surface uyum ve demo readiness QA işlemleri bir feature wave'inin içine gömülemez; bağımsız kapanış dalgası olmak zorundadır.
- **Committed Capabilities**:
  - `Bütüncül responsive frontend demo uyumu` | SCP-001 | Masaüstü ve mobil ekran uyumu doğrulaması | PASS
  - `Satış demosu kabul ve visual QA` | SCP-001 | Demo readiness ve görsel kalite doğrulaması | PASS
- **In Scope**: Responsive CSS breakpoint kontrolleri (1024px, 768px, 480px), cross-browser görünüm doğrulaması, clean service boundary denetimi.
- **Out of Scope**: Yeni feature ekleme, yetkisiz backend entegrasyonu.
- **Primary Deliverables**: `src/styles/responsive.css`, `working-output/` bütüncül test ve doğrulama kiti.
- **Dependencies**: `WAVE_04`.
- **Upstream Boundary Consumed**: `WAVE_00` - `WAVE_04` arası tüm üretilmiş bileşenler.
- **Downstream Handoff**: Validation and Final Publication (`outputs/demos/trakya-teknik-makine/versions/v0.1`).
- **Exit Boundary**: Mobil ve masaüstü görünümler kusursuz çalışmalı, hiçbir konsol hatası kalmamalı, demo satış görüşmesine hazır `Prototype` seviyesinde tamamlanmalıdır.

## 5. Cross-Wave Invariants

- **INV-01 (Scope Limit)**: Hiçbir dalga Approved Scope Registry (`SCP-001` - `SCP-006`) dışındaki bir capability'yi ekleyemez.
- **INV-02 (Source Closed)**: Hiçbir dalga `SOURCE_REGISTER.md` / FCL dışındaki bir firma iddiasını taşıyamaz.
- **INV-03 (Service Boundary)**: Hiçbir UI bileşeni verileri kendi içinde hardcode etmez; `companyService.js` üzerinden tüketir.

## 6. Global Exit / Handoff Rules

- Her dalga kendi Exit Boundary kriterini geçmeden sonraki dalgaya geçilemez.
- `WAVE_05` başarıyla tamamlandığında `working-output/` paketi Validation gate'ine sunulur.
