# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Separation of Concerns & Delivery Boundaries**: Proje, bağımsız doğrulanabilir ve birbiri üzerine inşa edilen 5 delivery dalgasına bölünmüştür (`WAVE_00` .. `WAVE_04`).
- **Strict Package Granularity Guard**: `DEMO_FRONTEND_PACKAGE.md` kuralları uyarınca Hizmetler (`WAVE_02`) ile İletişim (`WAVE_03`) bağımsız dalgalar olarak ayrılmış; projenin bütünü kapsayan son QA/Responsive doğrulaması (`WAVE_04`) ayrı bir kapanış dalgası olarak konumlandırılmıştır.
- **Fail-Closed Capability Boundary**: Her dalganın `Committed Capabilities` listesi doğrudan approved project input (`SCP-01` .. `SCP-05`) ve `FCL-01` .. `FCL-06` atomları ile desteklenmiştir. Approved scope'ta olmayan harita, WhatsApp, form backend'i, modal popup veya yeni iddialar dalga sınırlarına sızamaz.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Goal | Delivery Maturity | Dependencies |
|---|---|---|---|---|
| `WAVE_00` | Project Foundation & Service/Data Architecture | Temiz frontend projesi, CSS design system token'ları ve mock data-access boundary kurulumu | Prototype | Baseline |
| `WAVE_01` | Corporate Identity & Disan Authorized Service Surface | Hero alanı, kurumsal kimlik ve Disan Trakya Bölge Yetkili Servisi statü sunumu | Prototype | `WAVE_00` |
| `WAVE_02` | Approved Services Presentation Module | 3 approved hizmetin (Yedek Parça, Yerinde Destek, Bakım/Onarım) kart/modül sunumu | Prototype | `WAVE_01` |
| `WAVE_03` | Direct Contact & Action Surface | Telefon ve e-posta direct-contact CTA arayüz yüzeyi | Prototype | `WAVE_02` |
| `WAVE_04` | Whole-Project Responsive, Performance & Presentation QA | Tüm sayfalar arası responsive uyum, cross-browser kontrolü ve satış demosu sunum doğrulaması | Prototype | `WAVE_03` |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary)
    ↓
WAVE_01 (Corporate Identity & Disan Authorized Service Status)
    ↓
WAVE_02 (3 Approved Services Presentation Module)
    ↓
WAVE_03 (Direct Contact Phone & Email CTA Surface)
    ↓
WAVE_04 (Whole-Project Responsive, Performance & Presentation QA)
```

## 4. Wave Entries

### WAVE_00: Project Foundation & Service/Data Architecture

- **Goal**: Proje geliştirme ortamını, HTML5/CSS3/JS yapısını, HSL design token'larını ve frontend `CompanyDataService` / `MockCompanyAdapter` veri katmanını kurmak.
- **Why Separate / Sequencing Rationale**: UI bileşenleri geliştirilmeden önce temiz bir service/data-access boundary ve CSS tasarım temeli kurularak presentation katmanının veriye hardcode bağımlı olması önlenir.
- **Committed Capabilities**:
  - `clean presentation service/data-access boundary` | `SCP-05` | `IN_SCOPE` | `YES` | Mock/local içerik için temiz frontend service/data-access boundary | PASS | PASS | PASS
  - `mock data adapter` | `SCP-05` | `IN_SCOPE` | `YES` | Mock/local içerik için temiz frontend service/data-access boundary | PASS | PASS | PASS
- **In Scope**: Dosya ve klasör mimarisi, CSS variables design token'ları (`DESIGN_RULES.md` uyarınca), `CompanyDataService` arayüzü, `companyData` mock JS/TS modülü.
- **Out of Scope**: UI bileşenlerinin ve sayfaların tamamlanması, backend/API entegrasyonu.
- **Primary Deliverables**: Proje iskeleti, `src/styles/design-tokens.css`, `src/services/CompanyDataService.js`, `src/data/companyData.js`.
- **Dependencies**: None (Baseline).
- **Upstream Boundary Consumed**: Approved PROJECT_INPUT ve TECH_CONTEXT mimari kararları.
- **Downstream Handoff**: `CompanyDataService` ve tasarım token'ları downstream UI dalgalarının kullanımı için hazır.
- **Exit Boundary**: Servis mock veriyi döner ve CSS token'ları hatasız yüklenir.

---

### WAVE_01: Corporate Identity & Disan Authorized Service Surface

- **Goal**: Trakya Teknik Makine kurumsal adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü sunan modern Hero ve Kurumsal Tanıtım bölümünü inşa etmek.
- **Why Separate / Sequencing Rationale**: Ziyaretçinin ilk 3 saniyede firma kimliğini ve yetkili servis güvencesini görmesi satış demosu başarısının temel şartıdır; ana giriş yüzeyi bağımsız doğrulanır.
- **Committed Capabilities**:
  - `corporate identity presentation` | `SCP-01`, `SCP-02` | `IN_SCOPE` | `YES` | Modern kurumsal frontend demo ve Disan yetkili servis kimliği sunumu | PASS | PASS | PASS
  - `Disan Authorized Service status presentation` | `SCP-02` | `IN_SCOPE` | `YES` | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu | PASS | PASS | PASS
- **In Scope**: Hero başlık, Disan Yetkili Servisi statü rozeti/vurgusu, kurumsal özet metni (`FCL-01`, `FCL-02` zinciri ile).
- **Out of Scope**: Hizmet detay kartları, İletişim eylem alanı, WhatsApp, Harita.
- **Primary Deliverables**: `src/components/HeroSection.js` / HTML yapısı, Hero CSS stilleri.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` tarafından sağlanan CSS token'ları ve `CompanyDataService`.
- **Downstream Handoff**: Tamamlanmış Hero ve kurumsal üst başlık yüzeyi.
- **Exit Boundary**: Hero alanı masaüstü ve mobilde doğru unvan ve statü ile sorunsuz görüntülenir.

---

### WAVE_02: Approved Services Presentation Module

- **Goal**: Üç approved hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel ve metinsel sunum modülünü inşa etmek.
- **Why Separate / Sequencing Rationale**: `DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği Hizmet sunumu İletişim alanından bağımsız bir dalga olarak geliştirilip doğrulanmalıdır.
- **Committed Capabilities**:
  - `approved service 1 presentation (Yedek Parça Temini)` | `SCP-03` | `IN_SCOPE` | `YES` | 3 approved hizmetin sunumu | PASS | PASS | PASS
  - `approved service 2 presentation (Yerinde Teknik Destek)` | `SCP-03` | `IN_SCOPE` | `YES` | 3 approved hizmetin sunumu | PASS | PASS | PASS
  - `approved service 3 presentation (Makine Bakım ve Onarım)` | `SCP-03` | `IN_SCOPE` | `YES` | 3 approved hizmetin sunumu | PASS | PASS | PASS
- **In Scope**: 3 approved hizmet kartı, endüstriyel ikonografi, hizmet özet metinleri (`FCL-03`, `FCL-04`, `FCL-05` zinciri ile).
- **Out of Scope**: Kaynakta bulunmayan ek hizmetler, stok bilgisi, mobil filo adedi, SLA süreleri, İletişim formu.
- **Primary Deliverables**: `src/components/ServicesModule.js` / HTML yapısı, Services CSS stilleri.
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` ile kurulan kurumsal sayfa düzeni ve `WAVE_00` data servisi.
- **Downstream Handoff**: 3 approved hizmetin sergilendiği eksiksiz modül yüzeyi.
- **Exit Boundary**: 3 hizmet kartı endüstriyel görsel dille ve doğru metinlerle hatasız listelenir.

---

### WAVE_03: Direct Contact & Action Surface

- **Goal**: Ziyaretçilerin doğrudan iletişim kurmasını sağlayan Telefon ve E-posta direct-contact CTA bölümünü inşa etmek.
- **Why Separate / Sequencing Rationale**: Dönüşüm ve iletişim eylemleri hizmet sunumundan bağımsız, clean `tel:` ve `mailto:` bağlantıları taşıyan ayrı bir dönüştürücü yüzeydir.
- **Committed Capabilities**:
  - `phone direct-contact CTA` | `SCP-04` | `IN_SCOPE` | `YES` | Telefon direct-contact CTA alanı | PASS | PASS | PASS
  - `email direct-contact CTA` | `SCP-04` | `IN_SCOPE` | `YES` | E-posta direct-contact CTA alanı | PASS | PASS | PASS
- **In Scope**: Telefon arama butonu (`tel:`), E-posta gönderme adresi/linki (`mailto:`), kurumsal iletişim alt paneli.
- **Out of Scope**: Canlı Google Harita, WhatsApp widget'ı, sunucu taraflı form submit backend'i, fiziksel adres uydurma.
- **Primary Deliverables**: `src/components/ContactSurface.js` / HTML yapısı, Contact CSS stilleri.
- **Dependencies**: `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_01` ve `WAVE_02` sunum yüzeyleri.
- **Downstream Handoff**: Doğrudan iletişim kurulabilen eksiksiz frontend demo arayüzü.
- **Exit Boundary**: CTA butonları ilgili telefon ve e-posta protokollerini tetikler.

---

### WAVE_04: Whole-Project Responsive, Performance & Presentation QA

- **Goal**: Tüm frontend demoyu kapsayan cross-browser, mobil/tablet responsive uyum, performans, erişilebilirlik (WCAG AA) ve satış demosu sunum kalitesi doğrulamasını gerçekleştirmek.
- **Why Separate / Sequencing Rationale**: `DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği projenin bütününü kapsayan yatay QA işleri tekil feature dalgalarının içine gömülemez; bağımsız kapanış dalgası olarak yürütülür.
- **Committed Capabilities**:
  - `whole-project responsive verification` | `SCP-01` | `IN_SCOPE` | `YES` | Masaüstü ve mobil responsive uyumluluk | PASS | PASS | PASS
  - `presentation quality assurance` | `SCP-01` | `IN_SCOPE` | `YES` | Satış demosu sunum kalitesi kontrolü | PASS | PASS | PASS
- **In Scope**: Tüm kesme noktalarında (Mobile/Tablet/Desktop) arayüz testi, WCAG 2.1 AA kontras kontrolü, klavye gezintisi, görsel hiyerarşi ve sunum kontrolü.
- **Out of Scope**: Yeni kod/feature geliştirmesi.
- **Primary Deliverables**: QA doğrulama checklist'i, son rötuşlanmış ve sunuma hazır frontend kod paketi.
- **Dependencies**: `WAVE_03`.
- **Upstream Boundary Consumed**: `WAVE_00` .. `WAVE_03` çıktılarının tamamı.
- **Downstream Handoff**: Müşteriye/potansiyel alıcıya sunulmaya hazır validated prototype çıktısı.
- **Exit Boundary**: Tüm responsive breakpoint'lerde ve doğrudan iletişim aksiyonlarında sıfır görsel/işlevsel hata.

## 5. Cross-Wave Invariants

- **INVAR-01**: Hiçbir dalga approved project input'ta bulunmayan yeni firma iddiaları, WhatsApp, Harita veya Form backend'i ekleyemez.
- **INVAR-02**: Tüm dalgalar `DESIGN_RULES.md` içindeki *"Endüstriyel Hassasiyet & Yetkili Servis Güveni"* görsel diline uymak zorundadır.
- **INVAR-03**: Data access işlemi presentation bileşenlerinin içine hardcode edilemez; `CompanyDataService` katmanı üzerinden yürütülür.

## 6. Global Exit / Handoff Rules

- Her dalga kendi `WAVE_PLAN` dokümanındaki acceptance criteria ve validation adımlarını tamamlamadan bir sonraki dalgaya geçilemez.
- `WAVE_04` tamamlandığında nihai kod paketi satış demosu için hazır (sales-demo ready validated prototype) kabul edilir.
