# Package Selection — RUN-20260814-001

## 1. Selected Base Package

- **Base Package**: `demo-frontend` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Package Type**: Base Domain Package
- **Version**: 2.1.0
- **Rationale**: Satış demosu ve frontend ağırlıklı kurumsal tanıtım sunumu için en uygun domain paketidir.

## 2. Shared Planning Overlay Application

- **Overlay**: `packages/PLANNING_PROFILE_OVERLAY.md`
- **Implementation Planning**: `standard`
  - Applied Documents: README-DOC, PROJECT-BRAIN, PRODUCT-RULES, TECH-CTX, STATUS, TASKS, DECISIONS, AGENT-INST, PROJ-PLAN, WAVE-MAP, WAVE-PLAN instances
- **Design Planning**: `light`
  - Applied Documents: DESIGN (DESIGN_RULES.md)

## 3. Extension & Contextual Rules

- **Extension Package**: `EXISTING_PROJECT_PACKAGE` (mimaride mevcut web sitesi ve doğrulanmış firma bilgilerinin kaynak alınması nedeniyle uygulandı).

## 4. Resolved Canonical Document IDs

1. `README-DOC` -> `/README.md`
2. `PROJECT-BRAIN` -> `/ai/PROJECT_BRAIN.md`
3. `PRODUCT-RULES` -> `/ai/PRODUCT_RULES.md`
4. `TECH-CTX` -> `/ai/TECH_CONTEXT.md`
5. `STATUS` -> `/ai/CURRENT_STATUS.md`
6. `TASKS` -> `/ai/NEXT_TASKS.md`
7. `AGENT-INST` -> `/ai/AGENT_INSTRUCTIONS.md`
8. `DECISIONS` -> `/ai/DECISIONS.md`
9. `DESIGN` -> `/design/DESIGN_RULES.md`
10. `PROJ-PLAN` -> `/project/PROJECT_PLAN.md`
11. `WAVE-MAP` -> `/waves/WAVE_MAP.md`

## 5. Excluded Conditional Documents

- `DATA` (DATA_MODEL.md): Gerçek veritabanı / persistent data scope dışında olduğundan hariç tutuldu.
- `API` (API_CONTRACTS.md): Backend API scope dışında olduğundan hariç tutuldu.
- `TEST` (TEST_STRATEGY.md): Sınırlı demo scope için varsayılan minimum testing yeterli görüldüğünden hariç tutuldu.
- `PROD-STRAT` / `DEPLOY` / `OPS`: Production operasyonu scope dışı olduğundan hariç tutuldu.
- `DESIGN-SYSTEM` / `GLOBAL-SHELL` / `SYSTEM-STATES` / `PAGE-DESIGN`: `design_planning: light` profili yalnız `DESIGN_RULES` belirttiğinden hariç tutuldu.

## 6. Resolved Dynamic Instances

- `WAVE-PLAN` instances (5 wave):
  - `waves/plans/WAVE_00.md` (Foundation & Design System Setup)
  - `waves/plans/WAVE_01.md` (Primary Entry & Corporate Trust)
  - `waves/plans/WAVE_02.md` (Services Presentation)
  - `waves/plans/WAVE_03.md` (Contact & Conversion)
  - `waves/plans/WAVE_04.md` (Final Integration, Responsive & Presentation QA)

## 7. Package Granularity Guard Compliance

- Foundation, Hero/Trust, Services, Contact ve Final QA sorumlulukları ayrıştırılmış; `DEMO_FRONTEND_PACKAGE.md` wave granularity guard kuralı tam olarak karşılanmıştır.
