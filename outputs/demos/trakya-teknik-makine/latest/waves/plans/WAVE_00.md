# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Foundation & Core Configuration Layer

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje kod tabanı, modern CSS design token'ları ve mock data boundary altyapısını (`src/config/siteData.js`, `src/styles/main.css`, `index.html`) kurmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_00
Name: Foundation & Core Configuration Layer
Goal: Proje kod tabanı, modern CSS design token'ları ve mock data boundary altyapısını kurmak.
Why Separate: Tüm UI bileşenleri veri erişim adapter'ı ve CSS design token'ları üzerinden besleneceği için foundation katmanı UI sunum bileşenlerinden önce bağımsız olarak teslim edilmelidir.
Committed Capabilities:
- SCP-001 (Modular Frontend Setup)
- SCP-005 (Data Access Boundary)
In Scope: index.html shell, src/styles/main.css tokens & utilities, src/config/siteData.js local adapter
Out of Scope: Real backend, CMS, veritabanı veya harici CSS framework'leri
Primary Deliverables: index.html, src/styles/main.css, src/config/siteData.js
Dependencies: None
Upstream Boundary Consumed: Approved Input & Design Rules (DESIGN)
Downstream Handoff: WAVE_01 için hazır CSS token'ları, HTML iskeleti ve getSiteData() adapter'ı
Exit Boundary: Local data boundary ve CSS theme token'ları çalışır durumda, hatasız yükleniyor
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Modern HTML5 & CSS design token setup | `SCP-001 (Modular Frontend Setup)` | implementation-of | PASS |
| Local content data access adapter (`siteData.js`) | `SCP-005 (Data Access Boundary)` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_00`, projenin tasarım ve veri temelini belirleyen kısımdır. UI bileşenleri (Header, Hero, Services, About, Contact Bar) stil ve metin verilerini doğrudan hardcode etmek yerine CSS custom properties ve `siteData.js` adapter'ından okuyacaktır. Bu nedenle `WAVE_01` navigasyon kabuğundan önce tamamlanmalıdır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `SOURCE_REGISTER.md` (`FCL-001..FCL-006`)

## 5. Dependencies

- None (Initial project foundation wave).

## 6. Scope

### In Scope
- HTML5 semantic root (`index.html`) setup, `Outfit` & `Inter` Google Fonts bağlama, responsive meta tag'leri.
- Vanilla CSS design tokens (`src/styles/main.css`): Renk değişkenleri (`#0F141C`, `#18202C`, `#F97316`, `#0EA5E9`), tipografi boyutları, spacing ritmi, glassmorphism ve CSS reset.
- Local static mock content adapter (`src/config/siteData.js`): FCL allowlist (`FCL-001..006`) verilerini sunan `getSiteData()` ve `getServices()` metotları.

### Out of Scope
- Gerçek veritabanı veya REST API uygulaması.
- FCL dışı uydurma firma bilgisi veya iletişim detayları.
- Tailwind CSS veya harici UI kütüphane bağımlılıkları.

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260817-002/working-output/
├── index.html
└── src/
    ├── config/
    │   └── siteData.js
    └── styles/
        └── main.css
```

## 8. Implementation Checklist

- [ ] **Task 0.1 (HTML5 Shell Baseline)**:
  - **Location**: `index.html`
  - **Responsibility**: HTML5 semantic root, Google Fonts (`Outfit` & `Inter`), UTF-8, responsive viewport ve module script loader (`src/app.js`).
  - **Parent Capability Relation**: `implementation-of` (`SCP-001`)
  - **Inputs / Contracts**: HTML5 standard.
  - **Behavior**: HTML iskeleti konsolda hata vermeden yüklenir.
  - **Preserve**: Clean head structure.
  - **Verification**: Browser inspector test.
  - **Done**: Root HTML file ready.

- [ ] **Task 0.2 (CSS Design Tokens & Theme Foundation)**:
  - **Location**: `src/styles/main.css`
  - **Responsibility**: Design Rules (`DESIGN_RULES.md`) ile uyumlu CSS Custom Properties (`:root`), Flexbox/Grid utility sınıfları, glassmorphism overlay ve responsive media query temelleri.
  - **Parent Capability Relation**: `implementation-of` (`SCP-001`)
  - **Inputs / Contracts**: `DESIGN_RULES.md` color & typography tokens.
  - **Behavior**: CSS değişkenleri UI bileşenleri tarafından tüketilebilir.
  - **Preserve**: Vanilla CSS approach.
  - **Verification**: CSS variable validation in browser.
  - **Done**: CSS token system complete.

- [ ] **Task 0.3 (Local Data Access Boundary & FCL Adapter)**:
  - **Location**: `src/config/siteData.js`
  - **Responsibility**: FCL allowlist (`FCL-001..FCL-006`) verilerini tutan ve UI katmanına `getSiteData()`, `getServices()`, `getBrandIdentity()` metotları sunan soyutlama katmanı.
  - **Parent Capability Relation**: `implementation-of` (`SCP-005`)
  - **Inputs / Contracts**: `SOURCE_REGISTER.md` FCL list.
  - **Behavior**: `FCL-001` (Trakya Teknik Makine), `FCL-002` (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi), `FCL-003` (Yedek Parça Temini), `FCL-004` (Yerinde Teknik Destek), `FCL-005` (Makine Bakım ve Onarım), `FCL-006` (Trakya bölgesi bağlamı) verilerini döner.
  - **Preserve**: No speculative factual expansion.
  - **Verification**: JS module test in console.
  - **Done**: Data boundary ready.

## 9. State / Role / Responsive Coverage

- **Normal State**: CSS değişkenleri ve `siteData.js` modülü eksiksiz yüklenir.
- **Error Handling**: `siteData.js` eksik veri çağrısında konsol uyarısı döner ve varsayılan FCL verisini korur.
- **Responsive Baseline**: CSS token'ları mobil (<768px) ve masaüstü (>1200px) için fluid typography ve spacing değişkenleri içerir.

## 10. Automated Verification

```bash
# Check syntax & file presence
ls -la index.html src/styles/main.css src/config/siteData.js
```

## 11. Manual QA / Debug Verification

- `index.html` tarayıcıda açıldığında font yüklemelerinin başarımını doğrula.
- Tarayıcı geliştirici konsolundan `import { getSiteData } from './src/config/siteData.js'; getSiteData();` çağrısı yaparak FCL verilerinin eksiksiz döküldüğünü denetle.

## 12. Acceptance / Exit Criteria

- [ ] `index.html`, `src/styles/main.css` ve `src/config/siteData.js` dosyaları hatasız oluşturulmuştur.
- [ ] CSS değişkenleri `DESIGN_RULES.md` renk ve font paletini tam yansıtmaktadır.
- [ ] `siteData.js` strictly `FCL-001..006` sınırında veri döner; hiçbir kurgusal iddia barındırmaz.
- [ ] `WAVE_01` navigasyon shell'i için gerekli altyapı hazırdır.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında `WAVE_01` checkpoint'ine geçilir. `WAVE_00` kapsamında UI component'leri üretilmez.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
