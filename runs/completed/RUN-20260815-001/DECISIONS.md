# Decisions (Run Operational Record) — RUN-20260815-001

## 1. Operasyonel Run Kararları

| Decision ID | Domain | Alınan Karar | Status | Provenance / Authority |
|---|---|---|---|---|
| RUN-DEC-001 | Package Selection | Base package olarak `demo-frontend` seçilmiştir. | Engine Resolved | `engine/PACKAGE_RULES.md` & `packages/DEMO_FRONTEND_PACKAGE.md` |
| RUN-DEC-002 | Planning Profile | `implementation_planning: standard` ve `design_planning: light` dondurulmuştur. | User Approved | Approved `PROJECT_INPUT.md` (Section 2 & 10) |
| RUN-DEC-003 | Architecture Boundary | Frontend demo projesi local data adapter (`companyService` / `contentAdapter`) ile inşa edilecek; sahte backend API sunucusu uydurulmayacaktır. | User Approved | Approved `PROJECT_INPUT.md` (Section 7) & `engine/PLANNING_PROFILES.md` |
| RUN-DEC-004 | Scope Freeze | Form, map, WhatsApp, modal veya approved scope'ta olmayan yeni capability eklenmeyecektir. | Engine Resolved | `packages/DEMO_FRONTEND_PACKAGE.md` & `engine/GENERATION_PIPELINE.md` |
| RUN-DEC-005 | Wave Decomposition | 6 dalga (`WAVE_00` - `WAVE_05`) tanımlanarak, Services ve Contact sorumlulukları ayrılmış, en sona bağımsız Cross-Cutting QA wave'i konulmuştur. | Engine Resolved | `packages/DEMO_FRONTEND_PACKAGE.md` Deterministic Granularity Guard |
