# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_00: Project Setup & Local Preview Foundation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Projenin dosya yapısını, semantik HTML5 iskeletini, CSS Custom Properties tasarım token'larını ve temiz veri soyutlamasını sağlayan `siteConfig` lokal konfigürasyon modülünü kurmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_00
Name: Project Setup & Local Preview Foundation
Committed Capabilities:
- CAP-00-01: Local static configuration data adapter (clean content boundary) | SCP-005 | IN_SCOPE | YES
- CAP-00-02: Modern tipografi, whitespace, sakin renk paleti ve responsive layout foundation | SCP-006 | IN_SCOPE | YES
Upstream Consumed: None
Downstream Handoff: WAVE_01 & WAVE_02 HTML/CSS layout shell and siteConfig module
Exit Boundary: siteConfig module readable, CSS Custom Properties defined, semantic HTML5 shell loads cleanly
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| `siteConfig` static data adapter module setup | `CAP-00-01` (Local static config adapter) | `implementation-of` | `PASS` |
| Semantik HTML5 layout container (`index.html`) | `CAP-00-02` (Responsive layout foundation) | `implementation-of` | `PASS` |
| CSS Custom Properties & Design Tokens setup | `CAP-00-02` (Modern tipografi & renk paleti) | `implementation-of` | `PASS` |
| Responsive layout container & reset rules | `CAP-00-02` (Responsive layout foundation) | `implementation-of` | `PASS` |
| Foundation verification & local preview test | `CAP-00-01`, `CAP-00-02` | `verification-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

`WAVE_00` ilk hazırlık ve altyapı adımıdır. `WAVE_01` (Profile Hero) ve `WAVE_02` (Instagram CTA) görsel bileşenlerinin veriyi doğrudan kod içine hardcode etmesini önlemek için `siteConfig` veri modülünün ve CSS Custom Properties token altyapısının her şeyden önce kurulması mimari zorunluluktur.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (`PR-04`, `PR-01`)
- `ai/TECH_CONTEXT.md` (`TC-01`, `TC-02`)
- `design/DESIGN_RULES.md` (Design tokens, HSL palette, typography scale)
- `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md`

## 5. Dependencies

- None (Projenin ilk adımıdır).

## 6. Scope

### In Scope
- Statik lokal konfigürasyon veri modülünün (`src/config/siteConfig.js` veya `data/siteConfig.js`) oluşturulması ve 4 onaylı factual bilginin (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) tanımlanması.
- Semantik HTML5 ana dosyasının (`index.html`) `<head>`, `<header>`, `<main>`, `<footer>` yapılarıyla kurulması.
- CSS Custom Properties (`styles.css`) renk rolleri (`color-bg-primary`, `color-brand-primary`, `color-text-primary`), tipografi ölçeği ve container kurallarının dondurulması.
- Lokal preview dev server başlatma ve yükleme testi.

### Out of Scope
- Profile Hero bileşeninin görsel tasarımı veya metin içerikleri (`WAVE_01`).
- Instagram CTA butonu ve dış bağlantı kartı yerleşimi (`WAVE_02`).
- Veritabanı, backend API, router veya harici paket kurulumu.

## 7. Expected Result / Target Structure

```text
working-output / prototype preview structure:
├── index.html                  # Semantik HTML5 kabuğu
├── css/
│   └── styles.css              # CSS Custom Properties, reset, container layout
└── js/
    ├── siteConfig.js           # Clean content data adapter (onaylı 4 fact)
    └── main.js                 # Data adapter reader & app initialization
```

## 8. Implementation Checklist

- [ ] **Task 00-1: Local Static Configuration Adapter Setup**
  - **Location/Responsibility**: `js/siteConfig.js` (veya `src/config/siteConfig.js`)
  - **Parent Capability Relation**: `implementation-of` `CAP-00-01`
  - **Inputs/Dependencies**: Approved Allowlist facts (`FCL-001` .. `FCL-004`).
  - **Implementation Behavior**: Onaylı 4 factual veriyi (`name: "Eda Pala"`, `title: "Fizyoterapist"`, `location: "Tekirdağ"`, `instagramUrl: "https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv"`) içeren immutable `siteConfig` modülünü tanımla.
  - **Preserve/Must Not**: Doğrulanmamış adres, telefon, e-posta, hastalık/tedavi metinleri ekleme.
  - **Verification**: `siteConfig` nesnesinin konsolda veya script'te eksiksiz okunabilirliğini kontrol et.
  - **Done Result**: Veri soyutlama modülü hazır.

- [ ] **Task 00-2: Design Tokens & CSS Custom Properties Setup**
  - **Location/Responsibility**: `css/styles.css`
  - **Parent Capability Relation**: `implementation-of` `CAP-00-02`
  - **Inputs/Dependencies**: `design/DESIGN_RULES.md` renk ve tipografi kararları.
  - **Implementation Behavior**: `:root` altında `--color-bg-primary` (`#FAF9F5`), `--color-brand-primary` (`#2D5545`), `--color-text-primary` (`#16231E`), tipografi clamp ölçekleri ve container max-width (`1120px`) kurallarını tanımla.
  - **Preserve/Must Not**: Turkuaz/mavi stok sağlık renkleri kullanma.
  - **Verification**: CSS Custom Properties geçerliliğini denetle.
  - **Done Result**: CSS token ve tema altyapısı hazır.

- [ ] **Task 00-3: Semantic HTML5 Shell & Main Layout Container**
  - **Location/Responsibility**: `index.html` & `js/main.js`
  - **Parent Capability Relation**: `implementation-of` `CAP-00-02`
  - **Inputs/Dependencies**: `WAVE_00` CSS ve `siteConfig` modülü.
  - **Implementation Behavior**: Semantik HTML5 yapısını (`<header>`, `<main class="container">`, `<footer>`) oluştur; `main.js` ile `siteConfig` verilerini dinleyecek montaj noktalarını tanımla.
  - **Preserve/Must Not**: Sahte form, harita, WhatsApp widget'ı koyma.
  - **Verification**: Tarayıcıda temiz boş container düzenini gör.
  - **Done Result**: HTML5 & JS altyapı kabuğu hazır.

## 9. State / Role / Responsive Coverage

- **Normal State**: `index.html` yüklendiğinde `siteConfig` verileri hatasız okunur ve CSS Custom Properties uygulanır.
- **Responsive Coverage**: Container esnek marjinler (`clamp(1.25rem, 4vw, 3rem)`) ve max-width (`1120px`) ile her viewport'a uyum sağlar.

## 10. Automated Verification

- `WAVE_00` dosyalarının sentaks geçerliliği (HTML5 validasyon, CSS validasyon).
- `siteConfig` nesnesinin JavaScript parser tarafından hatasız yüklenmesi.

## 11. Manual QA / Debug Verification

- `index.html` dosyası tıklandığında veya lokal dev server'da açıldığında konsolda herhangi bir JS/CSS hatası verilmediğini doğrula.
- CSS değişkenlerinin `:root` seviyesinde doğru atandığını incele.

## 12. Acceptance / Exit Criteria

- [ ] `siteConfig.js` dondurulmuş 4 factual bilgiyi eksiksiz taşıyor ve JS modülü olarak okunabiliyor.
- [ ] `styles.css` `DESIGN_RULES.md` renk ve tipografi token'larını eksiksiz tanımlıyor.
- [ ] `index.html` temiz semantik HTML5 kabuğu sunuyor.
- [ ] Hiçbir uydurma sağlık, adres veya iletişim claim'i bulunmuyor.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında `WAVE_01` (Profile Hero) için hazır `siteConfig` veri modülü ve CSS layout container teslim edilir.

---
## Wave Result

- **Execution State**: Pending Execution (Ready for `WAVE_00` implementation pass).
