# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Foundation & Engineering Baseline
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **[Task 00.1] Package & Tooling Setup**: Initialize package-managed Vite + React + TypeScript baseline, install `react-router-dom`, configure `tsconfig.json` and `vite.config.ts`.
2. **[Task 00.2] Design System Tokens & Base CSS**: Implement CSS variables for color palette (dark anthracite background `#0B0F17`, surface `#151C28`, primary amber `#F59E0B`, secondary amber `#D97706`), typography (Inter/Roboto font stack), spacing scale, and radius system in `src/styles/tokens.css` and `src/styles/global.css`.
3. **[Task 00.3] Folder Architecture & Data Access Boundary**: Create `src/components/`, `src/pages/`, `src/services/`, `src/data/` structure. Implement `src/data/mockData.ts` and data access adapters (`src/services/companyService.ts`, `src/services/servicesService.ts`).
4. **[Task 00.4] Routing Setup Baseline**: Define React Router DOM configuration in `src/App.tsx` for all 7 approved pages with clean page component stubs.

## 3. Dependencies / Preconditions

- Approved input and design documentation available in context.
- Node.js & npm runtime environment available.

## 4. Per-Task Done Criteria

- `npm run dev` starts dev server without errors.
- `npm run build` generates clean production bundle without TypeScript or ESLint errors.
- Design tokens and global CSS loaded properly.
- Service layer returns typed mock data for company and services.
- All 7 routes (`/`, `/kurumsal`, `/hizmetler`, `/hizmetler/yedek-parca-temini`, `/hizmetler/yerinde-teknik-destek`, `/hizmetler/makine-bakim-onarim`, `/iletisim`) are defined and render corresponding stubs.

## 5. Stop / Clarification Conditions

- Do NOT attempt to add contact form fields, submit buttons, map APIs, or WhatsApp widgets during execution.
- Stop if any unapproved page identity is requested.
