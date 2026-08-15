# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Foundation & Data Access Boundary

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje dosya yapısını, CSS design token altyapısını, responsive global shell'i ve UI'ı mock veriden yalıtan clean `companyService.js` data access katmanını oluşturmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_00
Name: Foundation & Data Access Boundary
Goal: Proje dosya yapısını, CSS design token altyapısını, responsive global shell'i ve UI'ı mock veriden yalıtan clean companyService.js data access katmanını oluşturmak.
Why Separate: Kullanıcı yüzeyleri inşa edilmeden önce tasarım token'larının ve UI ile veri arasındaki soyutlama katmanının hazır olması, component seviyesinde hardcoded veri karmaşasını önler.
Committed Capabilities:
  - Modern ve responsive kurumsal frontend demo temel mimarisi | SCP-001 | Modern frontend demo scaffolding and design tokens | PASS
  - Mock/local içerik için temiz frontend service/data-access boundary | SCP-007 | Clean data access boundary abstraction | PASS
In Scope: Modern HTML5/CSS/JS proje yapısı, CSS design tokens, companyData.js static store, companyService.js data access adapter.
Out of Scope: Gerçek backend API, DB, UI görselleri.
Primary Deliverables: index.html (scaffold), styles/main.css, src/data/companyData.js, src/services/companyService.js
Dependencies: None.
Upstream Boundary Consumed: None.
Downstream Handoff: WAVE_01 için hazır CSS token'ları, temel responsive container ve companyService veri okuma kanalı.
Exit Boundary: companyService.js fonksiyonlarının mock veriyi asenkron promise ile eksiksiz dönmesi ve CSS token'larının tanımlanmış olması.
```

## 2. Parent Capability Coverage

| Plan Capability | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Modern HTML5/CSS/JS scaffolding & design token setup | Modern ve responsive kurumsal frontend demo temel mimarisi (`SCP-001`) | implementation-of | PASS |
| Static mock data store `companyData.js` | Mock/local içerik için temiz frontend service/data-access boundary (`SCP-007`) | implementation-of | PASS |
| Data access adapter `companyService.js` | Mock/local içerik için temiz frontend service/data-access boundary (`SCP-007`) | implementation-of | PASS |
| Scaffolding responsive container & reset CSS | Modern ve responsive kurumsal frontend demo temel mimarisi (`SCP-001`) | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Kullanıcı arayüzü görsel bileşenleri inşa edilmeden önce, CSS design token altyapısının (renk rolleri, tipografi, grid) ve veri erişim soyutlamasının (`companyService.js`) hazırlanması gerekir. Bu sayede sonraki dalgalarda UI bileşenlerine ham metin veya veri nesneleri hardcode edilmez; temiz bir mimari ayrım sağlanır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- **Upstream Dependencies**: None (Initial Foundation Wave).

## 6. Scope

### In Scope
- Project Scaffolding & Directory Setup (`index.html`, `styles/`, `src/data/`, `src/services/`, `src/ui/`).
- Design Tokens Architecture in `styles/main.css` (Colors: Steel Blue `#1E2D42`, Amber `#F59E0B`, Light `#F8FAFC`, Dark `#0F172A`; Typography: Outfit/Inter; Spacing; Shadows; Transitions).
- Local Static Data Store `src/data/companyData.js` (Approved company facts & 3 approved services only).
- Asynchronous Data Access Service `src/services/companyService.js` (`getCompanyInfo()`, `getServices()`).
- HTML Scaffold `<div id="app">` & Base Reset CSS.

### Out of Scope
- Backend API, Database, Server integration.
- Full UI components (WAVE_01'de başlar).
- Unapproved company facts, extra services, certifications or stock/SLA qualifiers (YASAK).

## 7. Expected Result / Target Structure

```text
root/
├── index.html
├── styles/
│   └── main.css
└── src/
    ├── data/
    │   └── companyData.js
    └── services/
        └── companyService.js
```

## 8. Implementation Checklist

- [ ] **Task 0.1 — Project Scaffolding & Design Tokens Setup**
  - **Location / Responsibility**: `index.html` & `styles/main.css`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-001`.
  - **Inputs / Dependencies**: `design/DESIGN_RULES.md` & `ai/TECH_CONTEXT.md`.
  - **Implementation Behavior**: HTML5 boilerplate oluşturulur (`<!DOCTYPE html>`, UTF-8, viewport meta). `styles/main.css` içine `:root` design token değişkenleri (Hassas endüstriyel renk paleti, font aileleri, CSS grid layout ayarları) ve modern CSS reset yazılır.
  - **Applicable States / Responsive**: Base font sizes (16px base, responsive fluid scale), system fallback fonts.
  - **Preserve / Must Not**: Heavy external framework (Tailwind vb.) kullanılmaz; pure Vanilla CSS yazılır.
  - **Verification**: Tarayıcıda `index.html` açıldığında CSS değişkenlerinin doğru yüklendiği ve konsol hatası olmadığı doğrulanır.
  - **Done Result**: Temel scaffolding ve CSS token sistemi hazır.

- [ ] **Task 0.2 — Static Data Store (`companyData.js`)**
  - **Location / Responsibility**: `src/data/companyData.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-007`.
  - **Inputs / Dependencies**: `ai/PRODUCT_RULES.md` & `SOURCE_REGISTER.md` (FCL-001..FCL-006).
  - **Implementation Behavior**: Yalnız approved firma adı ("Trakya Teknik Makine"), yetkili servis statüsü ("Disan Hidrolik Makine Trakya Bölge Yetkili Servisi") ve 3 approved hizmet (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) dondurulmuş JS objesi olarak tanımlanır.
  - **Preserve / Must Not**: FCL dışı hiçbir qualifier (`stok`, `orijinal parça`, `mobil filo`, `SLA`, `periyodik bakım`, `revizyon`) eklenemez.
  - **Verification**: Data store nesnesinin `Object.freeze` ile dondurulduğu ve yalnız approved facts içerdiği denetlenir.
  - **Done Result**: Temiz mock data store hazır.

- [ ] **Task 0.3 — Asynchronous Service Adapter (`companyService.js`)**
  - **Location / Responsibility**: `src/services/companyService.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-007`.
  - **Inputs / Dependencies**: `src/data/companyData.js`.
  - **Implementation Behavior**: `getCompanyInfo()` ve `getServices()` metodları export edilir. Metodlar veriyi gelecekteki gerçek API çağrısını simüle edecek şekilde `Promise.resolve()` ile döner. Error handling wrapper'ı içerir.
  - **Preserve / Must Not**: Backend/database schema uydurulamaz; doğrudan `companyData.js` nesnesine erişim sağlar.
  - **Verification**: `companyService.getCompanyInfo().then(data => console.log(data))` testi yapılır.
  - **Done Result**: Data access boundary hazır.

## 9. State / Role / Responsive Coverage

- **Data Loading State**: `companyService` asenkron Promise döner; gelecekteki spinner/skeleton yükleme durumlarını destekler.
- **Responsive Reset**: `main.css` `box-sizing: border-box`, `max-width: 100%`, `margin: 0` ile tüm mobil/masaüstü cihazlarda overflow'u engeller.

## 10. Automated Verification

- Tarayıcı ES module import denetimi.
- `companyService.js` Promise dönüş testi.

## 11. Manual QA / Debug Verification

- `index.html` dosyası tarayıcıda açılır, Geliştirici Araçları Konsolunda `import { companyService } from './src/services/companyService.js'; companyService.getServices().then(console.log);` komutu çalıştırılır ve 3 approved hizmetin geldiği teyit edilir.

## 12. Acceptance / Exit Criteria

- [ ] `index.html` ve `styles/main.css` dosyaları eksiksiz oluşturuldu.
- [ ] Design token değişkenleri ( Steel Blue, Amber, Surface, Typography ) tanımlandı.
- [ ] `companyData.js` yalnız approved 3 hizmet ve firma bilgisini barındırıyor.
- [ ] `companyService.js` asenkron Promise API sunuyor.
- [ ] Konsolda hiçbir JavaScript veya CSS hatası yok.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında `WAVE_01` (Brand Identity & Hero Surface) başlayabilir.

---
## Wave Result

- **Status**: Pending Execution (Generation Phase Completed).
