# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Service Boundary Setup

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Projenin HTML/CSS/JS dosya yapısını, `DESIGN_RULES` renk ve tipografi token'larını ve `MachineService` local static data adapter katmanını kurmak.

## 1. Parent Wave Map Entry

- **Goal**: Projenin HTML/CSS/JS dosya yapısını, `DESIGN_RULES` renk ve tipografi token'larını ve `MachineService` local static data adapter katmanını kurmak.
- **Why Separate**: UI presentation katmanı yazılmadan önce clean data boundary ve CSS variable token'larının hazır olması gerekir; aksi takdirde component'ler içine veri/stil gömülerek spagetti mimari oluşur.
- **Committed Capabilities**:
  - HTML5/CSS3/JS projesi temel dosya yapısı | SCP-001 | Single Page Landing Page baseline | PASS
  - Design Token CSS Değişkenleri | SCP-003 | `#0F141C` antrasit, `#FF6B00` amber accent, Inter tipografi token'ları | PASS
  - `MachineService` Local Data Adapter | SCP-004 | Local JSON veri kaynağını async promise-ready interface üzerinden sunan adapter | PASS
- **In Scope**: Dosya yapısı (`index.html`, `src/styles/tokens.css`, `src/services/machineService.js`, `src/data/companyData.json`), font yüklemeleri, reset CSS.
- **Out of Scope**: Somut UI içerik bölümlerinin görsel tasarımı, sayfa içi zengin animasyonlar.
- **Primary Deliverables**: `index.html` iskeleti, `tokens.css`, `machineService.js`, `companyData.json`.
- **Exit Boundary**: UI bileşenleri `MachineService.getCompanyInfo()` çağrısını sorunsuz yapabilmeli, CSS variables yüklenmiş olmalı.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Index HTML skeleton & module setup | HTML5/CSS3/JS projesi temel dosya yapısı | implementation-of | PASS |
| Design Tokens CSS variables (`tokens.css`) | Design Token CSS Değişkenleri | implementation-of | PASS |
| Static JSON data file (`companyData.json`) | `MachineService` Local Data Adapter | implementation-of | PASS |
| Service Interface Adapter (`machineService.js`) | `MachineService` Local Data Adapter | implementation-of | PASS |
| Foundation verification & test setup | HTML5/CSS3/JS projesi temel dosya yapısı | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

- UI geliştirilmeden önce verinin soyut bir adapter katmanından okunması ve renk/tipografi kurallarının global CSS değişkenleri halinde sunulması şarttır. Bu wave sonraki tüm UI surface wave'lerine (`WAVE_01` .. `WAVE_03`) bağımlılık sağlar.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- None (Projenin ilk foundation wave'idir).

## 6. Scope

### In Scope
- Baseline HTML5 shell structure (`index.html`).
- Global CSS Design Tokens (`src/styles/tokens.css` — `#0F141C`, `#1E2530`, `#FF6B00`, Inter font).
- Statik veri kümesi (`src/data/companyData.json`).
- Async promise-ready `MachineService` adapter (`src/services/machineService.js`).

### Out of Scope
- Spesifik UI kart ve bölüm tasarımları.
- Gerçek backend veya API istekleri.
- Harici kütüphane bağımlılıkları.

## 7. Expected Result / Target Structure

```text
working-output/ (or project root)
├── index.html
└── src/
    ├── data/
    │   └── companyData.json
    ├── services/
    │   └── machineService.js
    └── styles/
        ├── reset.css
        └── tokens.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Baseline Project Shell Setup**
  - **Location / Responsibility**: `index.html`, `src/styles/reset.css`.
  - **Parent Capability Relation**: implementation-of `HTML5/CSS3/JS projesi temel dosya yapısı`.
  - **Inputs / Contracts**: HTML5 utf-8, viewport meta tag, Google Fonts (`Inter`).
  - **Implementation Behavior**: Temiz, semantik HTML shell oluşturulur (`<header>`, `<main>`, `<footer>`).
  - **Preserve / Must Not**: Harici ağır framework (Bootstrap/Tailwind) yükleme.
  - **Verification**: Tarayıcıda temiz yüklenme kontrolü.
  - **Concrete Done Result**: `index.html` ve `reset.css` kullanıma hazır.

- [ ] **Task 2: Design Tokens & Global CSS Setup**
  - **Location / Responsibility**: `src/styles/tokens.css`.
  - **Parent Capability Relation**: implementation-of `Design Token CSS Değişkenleri`.
  - **Inputs / Contracts**: `design/DESIGN_RULES.md` renk ve tipografi spesifikasyonu.
  - **Implementation Behavior**: `:root` altında `--bg-primary: #0F141C`, `--bg-secondary: #1E2530`, `--accent-primary: #FF6B00`, `--text-primary: #F4F6F9`, `--font-main: 'Inter', sans-serif` tanımlanır.
  - **Verification**: CSS değişkenlerinin stilde uygulanabilirliği kontrol edilir.
  - **Concrete Done Result**: `tokens.css` eksiksiz renk ve tipografi token'larını taşır.

- [ ] **Task 3: Static Data Source Setup**
  - **Location / Responsibility**: `src/data/companyData.json`.
  - **Parent Capability Relation**: implementation-of `MachineService Local Data Adapter`.
  - **Inputs / Contracts**: Doğrulanmış firma bilgileri (FCL-01 .. FCL-06).
  - **Implementation Behavior**: Firma unvanı, Disan Hidrolik yetkili servisliği, 3 ana hizmet ve iletişim verileri JSON formatında yazılır.
  - **Verification**: JSON syntax geçerliliği.
  - **Concrete Done Result**: `companyData.json` doğrulanmış verileri içerir.

- [ ] **Task 4: MachineService Adapter Implementation**
  - **Location / Responsibility**: `src/services/machineService.js`.
  - **Parent Capability Relation**: implementation-of `MachineService Local Data Adapter`.
  - **Inputs / Contracts**: `companyData.json`.
  - **Implementation Behavior**: `getCompanyInfo()`, `getServices()`, `getContactInfo()` async metodları promise döndürecek şekilde yazılır.
  - **Verification**: Konsolda `MachineService.getServices()` çağrısının 3 hizmeti döndürdüğü doğrulanır.
  - **Concrete Done Result**: UI bileşenlerinin tüketebileceği soyut service adapter hazır.

## 9. State / Role / Responsive Coverage

- **Normal State**: `tokens.css` yüklenmiş, `MachineService` veri döndürüyor.
- **Loading State**: `MachineService` metodları async Promise yapısında olduğu için UI tarafında loading desteği sağlar.
- **Error State**: Veri okunamazsa fallback statik obje döndürme yapısı.

## 10. Automated Verification

- `node -e "require('./src/services/machineService.js')"` veya temel JS syntax kontrolü.
- JSON validator ile `companyData.json` geçerliliği.

## 11. Manual QA / Debug Verification

- `index.html` tarayıcıda açıldığında konsolda hata olmaması.
- CSS değişkenlerinin `:root` üzerinde tanımlı olduğunun tespiti.

## 12. Acceptance / Exit Criteria

- [ ] `index.html`, `reset.css`, `tokens.css`, `companyData.json`, `machineService.js` dosyaları oluşturulmuş olmalı.
- [ ] CSS token'ları `DESIGN_RULES.md` spesifikasyonuyla birebir örtüşmeli.
- [ ] `MachineService` 3 doğrulanmış hizmet alanını döndürebilmeli.
- [ ] Konsolda JavaScript syntax hatası olmamalı.

## 13. Handoff / Stop Rule

- Foundation & Service boundary tamamlandıktan sonra `WAVE_01` (Hero & Corporate Trust Surface) başlatılabilir.

---

## Wave Result

- **Result**: Pending Execution
