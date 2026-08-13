# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Design Rules Setup

- **Status**: Ready for Execution
- **Goal**: Projenin HTML5 kabuğunu, `DESIGN_RULES.md` doğrultusunda CSS custom properties (design tokens) yapısını ve Local Mock Data Adapter katmanını kurmak.

## 1. Why This Wave / Dependency Rationale

Bu wave projenin ilk uygulanabilir başlangıç adımıdır. Görsel bileşenlerin ve içerik bölümlerinin kodlanmasından önce renk, tipografi, grid ve veri erişim altyapısının kurulması zorunludur.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- None (Initial Foundation Wave)

## 4. Scope

### Scope References

- `SCP-001` — Modern ve responsive kurumsal frontend demo tasarımı (IN_SCOPE)
- `SCP-005` — Presentation / Service katmanı ayrımı (`UI -> Service Interface -> Local Mock Adapter`) (KNOWN_DECISION)
- `SCP-006` — Statik mock/local data module kullanımı (KNOWN_DECISION)
- `SCP-007` — Sektör klişelerinden uzak projeye özgü endüstriyel görsel dil (`DESIGN_RULES`) (KNOWN_DECISION)

### In Scope

- Proje dosya yapısının oluşturulması (`index.html`, `src/styles/`, `src/data/`, `src/services/`, `src/components/`).
- Design tokens: CSS custom properties (`--color-surface`, `--color-accent`, `--font-primary`, `--spacing-*`).
- Local Mock Data Module (`companyData.js`) ve Data Service Provider (`dataService.js`).
- Base HTML layout shell (Head, Meta tags, Responsive viewport, Google Fonts import).

### Out of Scope

- Kompleks UI component'lerin tamamlanması (WAVE_01 ve WAVE_02'de).
- Gerçek backend veya API çağrıları [SCP-010].

## 5. Expected Result / Target Structure

```text
├── index.html
└── src/
    ├── styles/
    │   ├── tokens.css
    │   ├── reset.css
    │   └── main.css
    ├── data/
    │   └── companyData.js
    └── services/
        └── dataService.js
```

## 6. Implementation Checklist

- [ ] **TASK-001 (Proje Dizini & Base HTML Setup)**: `index.html` dosyasını oluştur, UTF-8, viewport meta, Google Fonts (`Inter` / `Outfit`) import et. `Scope Ref: SCP-001`
- [ ] **TASK-002 (Design Tokens & CSS Variables)**: `src/styles/tokens.css` içinde `DESIGN_RULES.md` paletini (`#12161A`, `#F4F6F8`, `#E65D00`) ve typography token'larını tanımla. `Scope Ref: SCP-007`
- [ ] **TASK-003 (Reset & Base Styles)**: Box-sizing, font-family reset ve responsive container kurallarını `src/styles/reset.css` ve `main.css` içine yaz. `Scope Ref: SCP-001`
- [ ] **TASK-004 (Local Mock Data Provider)**: `src/data/companyData.js` dosyasını oluştur. Doğrulanmış firma bilgileri, Disan yetkili servis tanımı ve 3 ana hizmet detayını veri objesi olarak dondur. `Scope Ref: SCP-006`
- [ ] **TASK-005 (Data Service Interface)**: `src/services/dataService.js` dosyasında `getCompanyInfo()` ve `getServices()` metotlarını yaz. UI'ın veriye doğrudan değil bu servis üzerinden erişmesini sağla. `Scope Ref: SCP-005`

## 7. State / Role / Responsive Coverage

- Screen Widths: Desktop (1200px+), Tablet (768px), Mobile (375px).
- Theme: Dark Industrial Graphite surface base with high-contrast text.

## 8. Automated Verification

- Static syntax check (HTML/CSS/JS syntax validation).

## 9. Manual QA / Debug Verification

- Tarayıcıda `index.html` açıldığında konsolda `dataService.getCompanyInfo()` çağrısının doğru objeyi döndürdüğü doğrulanmalı.
- Global CSS variable'larının tarayıcı inspect modunda çalıştığı görülmeli.

## 10. Acceptance / Exit Criteria

- `index.html` ve CSS/JS altyapısı hatasız yükleniyor.
- `DataService` mock verileri UI katmanına sağlamaya hazır.
- Design tokens `DESIGN_RULES.md` ile tam uyumlu.

## 11. Handoff / Stop Rule

- Foundation tamamlandıktan sonra `WAVE_01` (Core Shell, Hero & Trust Surface) uygulamasına geç.

---

## Wave Result

> Status: Pending Execution. WAVE_00 is ready for execution by an agent.
