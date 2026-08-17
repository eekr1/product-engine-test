# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Foundation & Setup
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **Task 0.1: Project Environment & Tooling Setup**
   - Initialize package-managed Vite + React + TypeScript baseline (`package.json`, `tsconfig.json`, `vite.config.ts`).
   - Create project structure under `src/` (`components/`, `pages/`, `services/`, `styles/`, `router/`).

2. **Task 0.2: Design Tokens & CSS Foundation**
   - Create `src/styles/tokens.css` with CSS Custom Properties for anthracite backgrounds (`#0F141C`, `#161D2A`), amber accents (`#FF9500`), typography hierarchy, and spacing tokens.
   - Create `src/styles/global.css` with CSS resets and utility classes.

3. **Task 0.3: Mock Data Store & Service Adapter Boundary**
   - Implement `src/services/mockData.ts` with source-backed facts (Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi, 3 approved services, unknown/placeholder contact values).
   - Implement `src/services/dataAdapter.ts` interface layer allowing future backend replacement without UI changes.

## 3. Dependencies / Preconditions

- Node.js runtime and npm package manager available.
- `WAVE_00` plan contracts in `waves/plans/WAVE_00.md`.

## 4. Per-Task Done Criteria

- **Task 0.1 Done**: Baseline files initialized, `npm run dev` and `npm run build` execute without errors.
- **Task 0.2 Done**: `tokens.css` and `global.css` created and imported into root application layout.
- **Task 0.3 Done**: Data adapter interfaces declared, mock data populated with exact FCL claims, zero unbacked claims introduced.

## 5. Stop / Clarification Conditions

- Do NOT invent unbacked contact information or fake company claims during mock data initialization.
- Do NOT skip `package.json` setup or attempt a zero-build setup without explicit approval.
