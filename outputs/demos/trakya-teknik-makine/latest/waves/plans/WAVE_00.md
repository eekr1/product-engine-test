# Trakya Teknik Makine — WAVE_00: Foundation & Engineering Baseline

- **Status**: Completed
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Package-managed Vite + React + TypeScript projesini kurmak, CSS variables tasarım token'larını yerleştirmek ve soyutlanmış data-access adapter katmanını oluşturmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_00
Name: Foundation & Engineering Baseline
Goal: Establish package-managed Vite React TS project, design tokens CSS, and data access adapter boundary
Dependencies: None
Upstream Consumed: Approved input, TECH_CONTEXT, DESIGN_SYSTEM
Downstream Handoff: WAVE_01 (Global Shell & Navigation)
Exit Boundary: npm run dev starts cleanly, service adapter returns mock data
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Package-managed Vite React TS workspace setup | `CAP-001` (Multi-page corporate website frontend foundation baseline) | `implementation-of` | PASS |
| Design token system & global CSS setup | `CAP-001` (Multi-page corporate website frontend foundation baseline) | `implementation-of` | PASS |
| Mock data fixture & service access adapter setup | `CAP-002` (Clean data-access adapter layer for local mock fixtures) | `implementation-of` | PASS |
| Route stubs & App router configuration setup | `CAP-001` (Multi-page corporate website frontend foundation baseline) | `implementation-of` | PASS |

- `NEW_PLAN_CAPABILITIES` = `[]` (empty)

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| N/A | N/A | Technical engineering baseline (no page-specific UI) | PASS |

- `NEW_PLAN_PAGES` = `[]` (empty)

## 4. Why This Wave / Dependency Rationale

- UI ve sayfa geliştirmelerine geçilmeden önce paket yönetimi, tip tanımları, tasarım token'ları ve mock veri soyutlama katmanının kurulması gereklidir.

## 5. Canonical Sources to Read

- `engine/PLANNING_PROFILES.md` (Section 6 & 6A)
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_SYSTEM.md`
- `ref/waves/WAVE_12_RUNTIME_REFERENCE.md`

## 6. Dependencies

- Yok (Başlangıç dalgası).

## 7. Scope

### In Scope

- `package.json`, `tsconfig.json`, `vite.config.ts` yapılandırması.
- `src/styles/tokens.css` ve `src/styles/global.css` tasarımı.
- `src/data/mockData.ts` (Trakya Teknik Makine, Disan yetkili servis bilgileri, 3 onaylı hizmet fixture'ı).
- `src/services/companyService.ts` ve `src/services/servicesService.ts` adapter bileşenleri.

### Out of Scope

- Sayfa UI geliştirmeleri.
- Harici backend veya veritabanı bağlantısı.

## 8. Expected Result / Target Structure

```text
trakya-teknik-makine/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── src/
    ├── data/
    │   └── mockData.ts
    ├── services/
    │   ├── companyService.ts
    │   └── servicesService.ts
    ├── styles/
    │   ├── tokens.css
    │   └── global.css
    ├── App.tsx
    └── main.tsx
```

## 9. Implementation Checklist

- [x] **Task 00.1 — Tooling & Workspace Setup**:
  - Location: `./package.json`, `./tsconfig.json`, `./vite.config.ts`.
  - Action: Vite React TS projesini ilklendirin, `react-router-dom` bağımlılığını ekleyin.
  - Parent Relation: `CAP-001`.
  - Done Criteria: `npm install` hatasız tamamlanır.
- [x] **Task 00.2 — Design System Token CSS**:
  - Location: `src/styles/tokens.css`, `src/styles/global.css`.
  - Action: Antrasit (`#0B0F17`), amber (`#F59E0B`), tipografi ve spacing CSS değişkenlerini yerleştirin.
  - Parent Relation: `CAP-001`.
  - Done Criteria: Global CSS değişkenleri projede erişilebilir olur.
- [x] **Task 00.3 — Mock Data Fixture & Service Adapters**:
  - Location: `src/data/mockData.ts`, `src/services/companyService.ts`, `src/services/servicesService.ts`.
  - Action: Şirket bilgilerini ve 3 onaylı hizmetin fixture verilerini typed service adapter metodları arkasına koyun (`getCompanyInfo()`, `getAllServices()`, `getServiceBySlug()`).
  - Parent Relation: `CAP-002`.
  - Done Criteria: Servis metodları TypeScript arayüzü ile typed mock veri döndürür.
- [x] **Task 00.4 — Router Stubs Baseline**:
  - Location: `src/App.tsx`.
  - Action: 7 onaylı sayfa için geçici stub route yapılandırmasını kurun.
  - Parent Relation: `CAP-001`.
  - Done Criteria: 7 rotaya istek atıldığında boş sayfa stbları render edilir.

## 10. State / Role / Responsive Coverage

- Service katmanı `LoadingState` ve `ErrorState` simülasyonlarını typed Promise olarak destekler.

## 11. Automated Verification

```bash
npm run dev
npm run build
```

## 12. Manual QA / Debug Verification

- `src/services/servicesService.ts` metodunu çağırıp 3 hizmetin geldiğini kontrol edin.

## 13. Acceptance / Exit Criteria

- [x] `npm run dev` hatasız başlar.
- [x] TypeScript tip kontrolü temizdir.
- [x] Service katmanı soyutlanmıştır.

## 14. Handoff / Stop Rule

- `WAVE_00` tamamlandığında `WAVE_01` için hazırdır. Sayfa UI kodlamasına geçilmez.

---
## Wave Result

- **Result**: PASSED
