# Fizyoterapist Eda Pala Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Single Execution Authority**: Bu harita projenin tüm uygulama dalgalarını (`WAVE_00` .. `WAVE_03`) donduran birincil otoritendir.
- **Source-Closed & Scope-Bounded**: Dalga kapsamları yalnız dondurulmuş approved input (`INPUT-FIZYOTERAPIST-EDA-PALA-V1`) ve Approved Scope Registry (`SCP-001` .. `SCP-017`) ile sınırlıdır.
- **Deterministic Granularity**: `DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği, Foundation, Profile Hero, Digital Contact Surface ve Cross-Cutting QA bağımsız teslim adımları olarak ayrıştırılmıştır.
- **Clean Content Boundary**: Statik konfigürasyon veri soyutlaması (`siteConfig` / local data module) ilk aşamada kurulur ve tüm yüzeyler tarafından tüketilir.

## 2. Wave Map Summary

| Wave ID | Wave Name | Target Deliverable | Dependencies | Status |
|---|---|---|---|---|
| `WAVE_00` | Project Setup & Local Preview Foundation | Statik veri modülü (`siteConfig`), klasör mimarisi, HTML/CSS layout container ve responsive shell | None | Ready for Execution |
| `WAVE_01` | Profile Hero & Personal Brand Presentation | Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamı görsel tanıtım kartı/yüzeyi | `WAVE_00` | Ready for Execution |
| `WAVE_02` | Instagram Outbound Integration & Digital Contact Surface | Onaylı Instagram profiline outbound link / CTA ikonu ve temiz sosyal medya temas alanı | `WAVE_00`, `WAVE_01` | Ready for Execution |
| `WAVE_03` | Cross-Cutting Responsive, Accessibility & Presentation QA | Tüm ekran boyutlarında responsive düzen, WCAG AA renk kontrastı, erişilebilirlik ve sunum doğrulama QA | `WAVE_00`, `WAVE_01`, `WAVE_02` | Ready for Execution |

## 3. Dependency Chain

```text
WAVE_00 (Foundation: Local Data Module & Layout Shell)
  │
  ├─► WAVE_01 (Profile Hero & Personal Brand Presentation)
  │     │
  │     └─► WAVE_02 (Instagram Outbound CTA & Digital Contact Surface)
  │           │
  └───────────┴─► WAVE_03 (Cross-Cutting Responsive, Accessibility & Presentation QA)
```

## 4. Wave Entries

---

### WAVE_00: Project Setup & Local Preview Foundation

- **Wave ID**: `WAVE_00`
- **Name**: Project Setup & Local Preview Foundation
- **Goal**: Projenin dosya yapısını, semantik HTML5 iskeletini, CSS Custom Properties tasarım token'larını ve temiz veri soyutlamasını sağlayan `siteConfig` lokal konfigürasyon modülünü kurmak.
- **Why Separate / Sequencing Rationale**: Kullanıcı yüzeyleri (Hero, Instagram CTA) kurulmadan önce tüm bileşenlerin veri okuyacağı `siteConfig` modülünün ve görsel CSS altyapısının eksiksiz hazır olması mimari zorunluluktur.

- **Committed Capabilities**:
  - `CAP-00-01` | Local static configuration data adapter (clean content boundary) | Support ID: `SCP-005` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Local static configuration data adapter | Eligibility: `PASS` | Semantic Subset: `PASS` | Map Subset: `PASS`
  - `CAP-00-02` | Modern tipografi, whitespace, sakin renk paleti ve responsive layout foundation | Support ID: `SCP-006` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Modern tipografi, whitespace, sakin renk altyapısı | Eligibility: `PASS` | Semantic Subset: `PASS` | Map Subset: `PASS`

- **In Scope**:
  - Proje klasör organizasyonu ve HTML5 semantik giriş dosyası (`index.html`).
  - CSS Custom Properties (renk rolleri, tipografi ölçeği, spacing, container genişlikleri).
  - Lokal veri modülü (`siteConfig.js` / JSON) üzerinden approved factual verilerin (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) tanımlanması.
  - Responsive container layout kabuğu (`.container`, `.site-header`, `.main-content`, `.site-footer`).

- **Out of Scope**:
  - Hero görsel bileşeni veya Instagram CTA butonunun zenginleştirilmiş yerleşimi (sonraki wave'lerin sorumluluğudur).
  - Veritabanı, backend API, router veya build-time harici kütüphane kurulumu.

- **Primary Deliverables**:
  - Statik HTML5 ana şablon ve responsive CSS mimarisi (`styles.css` / token tanımları).
  - Statik lokal konfigürasyon modülü (`siteConfig.js`).

- **Dependencies**: None.

- **Upstream Boundary Consumed**: Yoktur (İlk dalga).

- **Downstream Handoff**: `WAVE_01` ve `WAVE_02` için hazır `siteConfig` veri modülü, semantik HTML5 kabuğu ve CSS token sistemi teslim edilir.

- **Exit Boundary**: `siteConfig` modülünden veriler okunabilir durumda, CSS Custom Properties tanımlı ve lokal dev server ortamında temiz HTML5 iskeleti sorunsuz yükleniyor.

---

### WAVE_01: Profile Hero & Personal Brand Presentation

- **Wave ID**: `WAVE_01`
- **Name**: Profile Hero & Personal Brand Presentation
- **Goal**: Fizyoterapist Eda Pala adını, `Fizyoterapist` mesleki unvanını ve `Tekirdağ` konum bağlamını sakin, modern ve güven veren bir görsel kompozisyon ile sergilemek.
- **Why Separate / Sequencing Rationale**: Kişisel markanın birincil tanıtım yüzeyidir. `WAVE_00`'da kurulan layout shell ve `siteConfig` modülü üzerine inşa edilir. Sosyal medya CTA entegrasyonundan (`WAVE_02`) bağımsız olarak kişisel marka kimliğini doğrular.

- **Committed Capabilities**:
  - `CAP-01-01` | Fizyoterapist Eda Pala kişisel marka landing page demosu sunumu | Support ID: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Kişisel marka landing page demosu sunumu | Eligibility: `PASS` | Semantic Subset: `PASS` | Map Subset: `PASS`
  - `CAP-01-02` | Fizyoterapist Eda Pala adı ve unvanının belirgin sergilenmesi | Support ID: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Eda Pala adı ve Fizyoterapist unvanının sergilenmesi | Eligibility: `PASS` | Semantic Subset: `PASS` | Map Subset: `PASS`
  - `CAP-01-03` | Tekirdağ konum bağlamının sunumu | Support ID: `SCP-003` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Tekirdağ konum bağlamının sunumu | Eligibility: `PASS` | Semantic Subset: `PASS` | Map Subset: `PASS`

- **In Scope**:
  - `Fizyoterapist Eda Pala` ana başlık (H1) ve mesleki unvan bileşeni.
  - `Tekirdağ` konum rozeti / bağlam metni.
  - Duru biyografik tanıtım düzeni (doğrulanmamış eğitim/deneyim iddiaları içermeyen, duru kişisel marka sunumu).
  - Tipografik hiyerarşi ve ferah whitespace düzenleşimi.

- **Out of Scope**:
  - Tedavi yöntemleri, hastalık listeleri veya uzmanlık alanları.
  - Eğitim, sertifika veya klinik sahipliği iddiaları.
  - Stok tıbbi görseller veya anatomik illüstrasyonlar.

- **Primary Deliverables**:
  - Profile Hero bileşeni ve kişisel marka tanıtım alanı (`.hero-section`, `.profile-card`).

- **Dependencies**: `WAVE_00`.

- **Upstream Boundary Consumed**: `WAVE_00` tarafından sağlanan semantik HTML5 kabuğu, `siteConfig` verisi ve CSS altyapısı.

- **Downstream Handoff**: `WAVE_02` için tamamlanmış Profile Hero yüzeyi ve sosyal medya entegrasyonuna hazır kart düzeni bırakılır.

- **Exit Boundary**: Fizyoterapist Eda Pala adı, unvanı ve Tekirdağ konumu `siteConfig` üzerinden okunarak ekranda eksiksiz, yüksek tipografik kalitede ve responsive olarak görüntülenmektedir.

---

### WAVE_02: Instagram Outbound Integration & Digital Contact Surface

- **Wave ID**: `WAVE_02`
- **Name**: Instagram Outbound Integration & Digital Contact Surface
- **Goal**: Ziyaretçilerin Fizyoterapist Eda Pala'nın onaylı Instagram profiline (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`) güvenli ve belirgin bir şekilde yönlenmesini sağlayan sosyal medya temas alanını inşa etmek.
- **Why Separate / Sequencing Rationale**: Profil tanıtımından (`WAVE_01`) ayrı bir etkileşim ve iletişim sorumluluğudur. Onaylanmamış form/harita/WhatsApp entegrasyonları yerine onaylı tek iletişim kanalı olan Instagram outbound bağlantısını odak noktasına alır.

- **Committed Capabilities**:
  - `CAP-02-01` | Onaylı Instagram profiline outbound link / CTA (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`) | Support ID: `SCP-004` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Instagram profiline outbound link / CTA | Eligibility: `PASS` | Semantic Subset: `PASS` | Map Subset: `PASS`

- **In Scope**:
  - Belirgin Outbound Instagram CTA butonu ve bağlantı kartı (`.instagram-cta-card`).
  - Güvenli dış bağlantı öznitelikleri (`target="_blank"` `rel="noopener noreferrer"`).
  - Minimalist SVG Instagram ikonu ve açık yönlendirme etiketi.
  - Temiz dijital temas alanı kompozisyonu.

- **Out of Scope**:
  - İletişim formu backend'i veya input alanları.
  - Canlı harita, klinik adresi veya yol tarifi bileşenleri.
  - WhatsApp entegrasyonu veya telefon/e-posta formları.
  - Instagram API entegrasyonu veya profil içeriklerinin dinamik çekilmesi.

- **Primary Deliverables**:
  - Outbound Instagram CTA bileşeni ve dijital temas alanı (`.contact-section`, `.instagram-btn`).

- **Dependencies**: `WAVE_00`, `WAVE_01`.

- **Upstream Boundary Consumed**: `WAVE_00` layout kabuğu, `siteConfig` Instagram URL verisi ve `WAVE_01` Profile Hero düzeni.

- **Downstream Handoff**: `WAVE_03` cross-cutting QA için tüm kullanıcı yüzeyleri (Hero + Instagram CTA) tamamlanmış olarak devredilir.

- **Exit Boundary**: Instagram CTA butonu tıklandığında onaylı URL yeni sekmede güvenle açılıyor, hover/focus durumları düzgün çalışıyor ve onaylanmamış hiçbir ek form/harita bulunmuyor.

---

### WAVE_03: Cross-Cutting Responsive, Accessibility & Presentation QA

- **Wave ID**: `WAVE_03`
- **Name**: Cross-Cutting Responsive, Accessibility & Presentation QA
- **Goal**: Tüm landing page yüzeylerinin mobil, tablet ve masaüstü ekranlarda kusursuz duyarlılıkta çalıştığını, WCAG AA erişilebilirlik standartlarını karşıladığını ve doğrulanmamış içerik sızıntısı içermediğini doğrulamak.
- **Why Separate / Sequencing Rationale**: `DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği, tüm yüzeylerin bir arada bütüncül responsive, erişilebilirlik ve sunum doğrulamasını içeren horizontal QA işi tekil feature wave'lerine gizlenemez; bağımsız kapanış wave'idir.

- **Committed Capabilities**:
  - `CAP-03-01` | Modern tipografi, whitespace, sakin renk paleti ve responsive layout doğrulaması | Support ID: `SCP-006` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Responsive layout ve görsel bütünlük doğrulaması | Eligibility: `PASS` | Semantic Subset: `PASS` | Map Subset: `PASS`

- **In Scope**:
  - Breakpoint bazlı responsive düzen denetimi (Mobile `<640px`, Tablet `640-1024px`, Desktop `>1024px`).
  - WCAG AA renk kontrastı ve klavye erişilebilirliği (`:focus-visible`) doğrulaması.
  - Clean content boundary ve source-closed sızıntı denetimi (uydurma tıbbi iddia, adres, telefon veya sahte form kontrolü).
  - Müşteri sunumu ve satış demosu için hazır ortam doğrulaması.

- **Out of Scope**:
  - Yeni ürün yeteneği veya yeni sayfa eklenmesi.
  - Production deployment veya hosting kurulumu.

- **Primary Deliverables**:
  - Responsive, erişilebilir ve doğrulanmış nihai satış demosu presentation paketi.

- **Dependencies**: `WAVE_00`, `WAVE_01`, `WAVE_02`.

- **Upstream Boundary Consumed**: `WAVE_00`, `WAVE_01` ve `WAVE_02` tarafından tamamlanan tüm frontend kod ve düzen bileşenleri.

- **Downstream Handoff**: Product Engine kapanış ve yayınlama aşamasına teslim edilir.

- **Exit Boundary**: Sayfa tüm hedef çözünürlüklerde hatasız görüntüleniyor, erişilebilirlik testlerinden geçiyor ve uydurma sağlık iddiası içermiyor.

---

## 5. Cross-Wave Invariants

- `INV-01` | **No Invented Health Claims**: Hiçbir wave (WAVE_00 .. WAVE_03) onaylanmamış tedavi, hastalık veya uzmanlık iddiası barındıramaz.
- `INV-02` | **Executable SCP Traceability**: Tüm wave committed capability'leri yalnız `IN_SCOPE` + `Executable: YES` statüsündeki SCP kayıtlarına dayanır.
- `INV-03` | **Strict Content Boundary**: İçerik metinleri `siteConfig` konfigürasyon katmanından okunur; bileşenler içine hardcode edilmez.

## 6. Global Exit / Handoff Rules

- Her wave ancak kendi Exit Boundary kriterlerini tam sağladığında tamamlanmış sayılır.
- Bir sonraki wave, önceki wave'in Downstream Handoff çıktısını doğrudan tüketir.
- `WAVE_03` tamamlandığında tüm proje `outputs/demos/fizyoterapist-eda-pala/` altına yayınlanabilir agent-ready prototip durumuna gelir.
