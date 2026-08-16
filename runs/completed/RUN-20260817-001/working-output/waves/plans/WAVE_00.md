# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_00: Foundation, Stack Setup & Local Content Config Schema

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Vanilla HTML5/CSS3/JS modüler dosya yapısını, semantic HTML5 skeleton'ı ve presentation component'lerini hardcode metinlerden ayıran `src/config/content.config.js` ile `src/adapters/contentAdapter.js` mimarisini kurmak.

## 1. Parent Wave Map Entry

```yaml
wave_id: WAVE_00
wave_name: Foundation, Stack Setup & Local Content Config Schema
primary_goal: Vanilla HTML5/CSS3/JS modüler altyapısını ve content.config.js local adapter katmanını kurmak
delivery_maturity_target: Validated Prototype Foundation
dependencies: []
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Project directory structure & HTML5 semantic entry point | Vanilla HTML5/CSS3/JS Modüler Frontend Altyapısı | implementation-of | PASS |
| Local content configuration schema (`content.config.js`) | Presentation Local Content Config & Adapter Boundaries | implementation-of | PASS |
| Local content adapter service (`contentAdapter.js`) | Presentation Local Content Config & Adapter Boundaries | implementation-of | PASS |
| Clean presentation data boundary initialization (`app.js`) | Frontend Proaktif Satış Demosu Temeli | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Presentation bileşenleri hardcode string barındırmadan önce factual verileri (`FCL-001`..`FCL-004`) ve presentation copy şemasını tutan mimari katmanın kurulması şarttır. Bu wave, diğer tüm UI wave'lerinin tüketebileceği veri adaptör sınırını teslim eder.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `SOURCE_REGISTER.md` (`SRC-01` ve `FCL-001`..`FCL-004`)
- `waves/WAVE_MAP.md` (`WAVE_00` parent entry)

## 5. Dependencies

- None (Root Foundation Wave).

## 6. Scope

### In Scope
- Dizin yapısı kurulumu (`index.html`, `styles/`, `src/config/`, `src/adapters/`, `src/app.js`).
- `index.html` temel semantic HTML5 skeleton (head, meta tags, UTF-8, viewport, title, `<header>`, `<main>`, `<footer>` landmark'ları).
- `src/config/content.config.js` local static configuration nesnesi (`FCL-001`..`FCL-004` allowlist factual verileri).
- `src/adapters/contentAdapter.js` veriyi sunan Javascript adaptör modülü (`getContent()`, `getFactualData()`).
- `src/app.js` modüler script yükleyici ve DOM init logiği.

### Out of Scope
- CSS tasarım token'ları ve stil sayfaları (`WAVE_01` kapsamındadır).
- Hero, profil veya konum görsel bölümlerinin tasarımı (`WAVE_02` ve `WAVE_03` kapsamındadır).
- Herhangi bir dış API, veritabanı veya backend entegrasyonu.

## 7. Expected Result / Target Structure

```text
working-output/ (veya proje kök dizini)
├── index.html
├── styles/
│   ├── tokens.css (placeholder empty file)
│   └── main.css (placeholder empty file)
└── src/
    ├── config/
    │   └── content.config.js
    ├── adapters/
    │   └── contentAdapter.js
    └── app.js
```

## 8. Implementation Checklist

- [ ] **Task 1: Project Directory Structure & Semantic HTML5 Setup**
  - **Location / Responsibility**: `index.html` root file.
  - **Parent Capability Relation**: `implementation-of` (Vanilla HTML5/CSS3/JS Modüler Frontend Altyapısı).
  - **Inputs / Contracts**: `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, Title: "Fizyoterapist Eda Pala — Tekirdağ".
  - **Implementation Behavior**: `<header id="site-header">`, `<main id="main-content">`, `<footer id="site-footer">` semantic elemanlarını oluşturmak. `src/app.js` modülünü `<script type="module" src="./src/app.js"></script>` ile çağırmak.
  - **Preserve / Must Not**: Görsel styling veya hardcode metin ekleme; yalnız semantic skeleton oluştur.
  - **FCL / Source Boundary**: Title ve header `FCL-001` (Eda Pala), `FCL-002` (Fizyoterapist), `FCL-003` (Tekirdağ) ile sınırlıdır.
  - **Verification**: Tarayıcıda `index.html` açıldığında DOM tree hatasız yüklenir.
  - **Done Result**: Temiz semantic HTML5 kök dosyası hazır.

- [ ] **Task 2: Local Content Configuration Schema Definition**
  - **Location / Responsibility**: `src/config/content.config.js`.
  - **Parent Capability Relation**: `implementation-of` (Presentation Local Content Config & Adapter Boundaries).
  - **Inputs / Contracts**: `FCL-001`..`FCL-004` exact factual data values.
  - **Implementation Behavior**: Export default JavaScript nesnesi tanımlamak:
    ```javascript
    export const contentConfig = {
      profile: {
        name: "Eda Pala", // FCL-001
        title: "Fizyoterapist", // FCL-002
        location: "Tekirdağ", // FCL-003
        instagramUrl: "https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv" // FCL-004
      },
      hero: {
        heading: "Fizyoterapist Eda Pala",
        subheading: "Tekirdağ'da profesyonel ve güven veren kişisel dijital profil.",
        ctaText: "Instagram Profilini İncele"
      },
      trust: {
        title: "Konum & İletişim Bağlamı",
        city: "Tekirdağ",
        note: "Doğrulanmış kişisel dijital tanıtım profili."
      }
    };
    ```
  - **Preserve / Must Not**: FCL dışı tedavi, hastalık, deneyim yılı, adres veya telefon ekleme.
  - **Verification**: Modül JS syntax kontrolünden hatasız geçer.
  - **Done Result**: `content.config.js` verisi hazır.

- [ ] **Task 3: Local Content Adapter Service Implementation**
  - **Location / Responsibility**: `src/adapters/contentAdapter.js`.
  - **Parent Capability Relation**: `implementation-of` (Presentation Local Content Config & Adapter Boundaries).
  - **Inputs / Contracts**: `import { contentConfig } from '../config/content.config.js';`.
  - **Implementation Behavior**: UI bileşenlerine içerik sağlayan adaptör fonksiyonlarını tanımlamak (`getContent(section)`, `getProfileData()`).
  - **Preserve / Must Not**: Doğrudan DOM manipülasyonu yapma; sadece veri nesnesi döndür.
  - **Verification**: `contentAdapter.getProfileData()` çağrıldığında `profile` objesi döner.
  - **Done Result**: Modüler içerik adaptör servisi hazır.

- [ ] **Task 4: App Initialization & DOM Binding Core**
  - **Location / Responsibility**: `src/app.js`.
  - **Parent Capability Relation**: `implementation-of` (Frontend Proaktif Satış Demosu Temeli).
  - **Inputs / Contracts**: `import { contentAdapter } from './adapters/contentAdapter.js';`.
  - **Implementation Behavior**: `document.addEventListener('DOMContentLoaded', ...)` dinleyicisini bağlamak, adaptörden alınan veriyi loglamak ve bootstrap döngüsünü başlatmak.
  - **Verification**: Konsolda `"App initialized with local content adapter"` mesajı ve profil objesi görünür.
  - **Done Result**: Uygulama ana giriş modülü hazır.

## 9. State / Role / Responsive Coverage

- **Loading State**: HTML static yüklendiği için hydration spinner'a gerek yoktur.
- **Error State**: Adaptör verisine erişilemezse fallback olarak konsol uyarısı ve varsayılan presentation objesi döner.
- **Responsive Coverage**: HTML viewport meta tag'i ile responsive temeli atılır.

## 10. Automated Verification

- Static file syntax verification: HTML5 validator & JS module syntax check.

## 11. Manual QA / Debug Verification

- `index.html` dosyası bir static sunucuda açılır.
- Tarayıcı Developer Tools (F12) Console sekmesi kontrol edilir; `contentAdapter` tarafından dönen veriler doğrulanır.

## 12. Acceptance / Exit Criteria

- [ ] Dizin şeması (`index.html`, `src/config/`, `src/adapters/`, `src/app.js`) eksiksiz oluşturuldu.
- [ ] `content.config.js` dosyası `FCL-001`..`FCL-004` factual verilerini içeriyor ve source allowlist dışı claim içermiyor.
- [ ] `contentAdapter.js` bileşen katmanına veri sağlayan temiz adaptör interface'i sunuyor.
- [ ] `index.html` semantic HTML5 yapısına uygun ve `<script type="module">` entegrasyonu hatasız çalışıyor.

## 13. Handoff / Stop Rule

- `WAVE_00` tamamlandığında `WAVE_01` (Design System, Typography & Layout Shell) aşamasına geçilebilir.
- Sunulacak teslim olgunluğu: Validated Prototype Foundation.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
