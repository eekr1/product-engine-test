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
Downstream Handoff: WAVE_01 (Profile Hero) & WAVE_02 (Instagram Outbound CTA)
Exit Boundary: siteConfig readable, CSS tokens initialized, clean HTML5 shell loading in local dev server
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| `siteConfig` static data adapter module setup | `CAP-00-01` (Local static configuration adapter) | `implementation-of` | `PASS` |
| Semantik HTML5 layout container (`index.html`) | `CAP-00-02` (Responsive layout foundation) | `implementation-of` | `PASS` |
| CSS Custom Properties & Design Tokens setup | `CAP-00-02` (Modern tipografi & renk altyapısı) | `implementation-of` | `PASS` |
| Foundation verification | `CAP-00-01`, `CAP-00-02` | `verification-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

`WAVE_00` projenin teknik ve veri altyapısı temelidir. `DEMO_FRONTEND_PACKAGE.md` kurallarına uygun olarak kullanıcı yüzeyleri kurulmadan önce tüm bileşenlerin tüketebileceği `siteConfig` veri adaptörünün ve CSS token sisteminin tanımlanması mimari bir ön koşuldur.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (`PR-01`, `PR-04`)
- `ai/TECH_CONTEXT.md` (`TC-01`, `TC-02`)
- `design/DESIGN_RULES.md` (Color Direction, Typography Scale)
- `runs/active/RUN-20260817-001/SOURCE_REGISTER.md` (`FCL-001` .. `FCL-004`)

## 5. Dependencies

- Yoktur (İlk uygulama dalgası).

## 6. Scope

### In Scope
- Proje kök dosya organizasyonu (`index.html`, `css/styles.css`, `js/siteConfig.js`, `js/main.js`).
- Statik konfigürasyon veri adaptörü (`js/siteConfig.js`) içinde 4 onaylı factual verinin tanımlanması.
- `css/styles.css` içinde `DESIGN_RULES.md` renk paleti, tipografi ve spacing CSS Custom Properties tanımları.
- Semantik HTML5 layout kabuğu (`<header>`, `<main class="container">`, `<footer>`).

### Out of Scope
- Profile Hero bileşeninin nihai görsel kompozisyonu (`WAVE_01`).
- Instagram Outbound CTA buton kartının detaylı stilleri (`WAVE_02`).
- Harici UI kütüphaneleri, TailwindCSS veya veritabanı/API kurulumu.

## 7. Expected Result / Target Structure

```text
working-output / preview foundation files:
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── siteConfig.js
    └── main.js
```

## 8. Implementation Checklist

- [ ] **Task 00-1: Local Static Configuration Adapter (`js/siteConfig.js`)**
  - **Location/Responsibility**: `js/siteConfig.js`
  - **Parent Capability Relation**: `implementation-of` `CAP-00-01`
  - **Inputs/Dependencies**: `SOURCE_REGISTER.md` (`FCL-001` .. `FCL-004`).
  - **Implementation Behavior**: `siteConfig` dondurulmuş JS nesnesini oluştur. `profile.name` ("Eda Pala"), `profile.title` ("Fizyoterapist"), `profile.location` ("Tekirdağ") ve `social.instagramUrl` ("https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv") alanlarını tanımla.
  - **Preserve/Must Not**: Doğrulanmamış adres, e-posta, telefon veya sağlık iddiası ekleme.
  - **Verification**: JS konsolunda `window.siteConfig` nesnesini oku.
  - **Done Result**: Veri adaptörü modülü hazır.

- [ ] **Task 00-2: CSS Custom Properties & Design Tokens (`css/styles.css`)**
  - **Location/Responsibility**: `css/styles.css`
  - **Parent Capability Relation**: `implementation-of` `CAP-00-02`
  - **Inputs/Dependencies**: `design/DESIGN_RULES.md` (Color Direction, Typography Scale).
  - **Implementation Behavior**: `:root` altında `--color-bg-primary` (`#FAF9F5`), `--color-brand-primary` (`#2D5545`), tipografi ölçekleri ve container max-width (`1120px`) Custom Properties'lerini tanımla.
  - **Preserve/Must Not**: Jenerik turkuaz veya koyu gradient renkler kullanma.
  - **Verification**: CSS Custom Properties geçerliliğini denetle.
  - **Done Result**: Tasarım token altyapısı hazır.

- [ ] **Task 00-3: HTML5 Semantic Layout Shell (`index.html` & `js/main.js`)**
  - **Location/Responsibility**: `index.html` & `js/main.js`
  - **Parent Capability Relation**: `implementation-of` `CAP-00-02`
  - **Inputs/Dependencies**: HTML5 Semantik standartlar.
  - **Implementation Behavior**: Temiz `index.html` kabuğunu oluştur. `header`, `main.container`, `footer` bölümlerini koy. `siteConfig.js` ve `main.js` script'lerini bağla.
  - **Preserve/Must Not**: Div kalabalığı veya harici CDN kütüphaneleri ekleme.
  - **Verification**: Tarayıcıda açıp console hatası olmadığını teyit et.
  - **Done Result**: Semantik HTML kabuğu hazır.

## 9. State / Role / Responsive Coverage

- **Normal State**: Lokal preview sunucusunda sayfa hatasız açılır, CSS Custom Properties sorunsuz yüklenir.
- **Responsive Coverage**: Container esnek marjinler (`width: 100%`, `max-width: 1120px`, `padding: 0 1.5rem`) ile mobil ekranlara uyum sağlar.

## 10. Automated Verification

- W3C HTML5 Sentaks Doğrulaması.
- `siteConfig.js` Javascript parser doğrulama kontrolü.

## 11. Manual QA / Debug Verification

- Tarayıcı geliştirici konsolunda `siteConfig` nesnesinin 4 factual veriyi hatasız sunduğunu doğrula.
- CSS Custom Properties renk değerlerini incele.

## 12. Acceptance / Exit Criteria

- [ ] `js/siteConfig.js` modülü 4 onaylı veriyi hatasız sunuyor.
- [ ] `css/styles.css` tasarım token'larını eksiksiz içeriyor.
- [ ] `index.html` konsol hatası vermeden lokal dev server'da açılıyor.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında `WAVE_01` (Profile Hero) için hazır veri adaptörü ve semantik HTML5 kabuğu devredilir.

---
## Wave Result

- **Execution State**: Pending Execution (Ready for `WAVE_00` implementation pass).
