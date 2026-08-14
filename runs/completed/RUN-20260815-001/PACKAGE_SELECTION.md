# Package Selection: RUN-20260815-001

## 1. Selected Base Package & Extensions
- **Base Package:** `demo-frontend` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Extensions:** `existing-project` (`packages/EXISTING_PROJECT_PACKAGE.md`)
- **Shared Overlay:** `packages/PLANNING_PROFILE_OVERLAY.md`

## 2. Planning Profile Resolution
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`

## 3. Resolved Canonical Document IDs
- `README-DOC` -> `README.md`
- `PROJECT-BRAIN` -> `ai/PROJECT_BRAIN.md`
- `PRODUCT-RULES` -> `ai/PRODUCT_RULES.md`
- `TECH-CTX` -> `ai/TECH_CONTEXT.md`
- `DESIGN` -> `design/DESIGN_RULES.md`
- `WAVE-MAP` -> `waves/WAVE_MAP.md`
- `WAVE-PLAN` -> `waves/plans/WAVE_<NN>.md`
- `PROJ-PLAN` -> `project/PROJECT_PLAN.md`
- `STATUS` -> `ai/CURRENT_STATUS.md`
- `TASKS` -> `ai/NEXT_TASKS.md`
- `AGENT-INST` -> `ai/AGENT_INSTRUCTIONS.md`
- `DECISIONS` -> `ai/DECISIONS.md`

## 4. Conditional Exclude Decisions
- `DATA`, `API`: Backend/Database approved scope dışında olduğu için filtrelendi. Integration readiness `TECH_CONTEXT` ve local service boundary üzerinden sağlanıyor.
- `TEST`, `DEPLOY`, `OPS`, `PROD-STRAT`: Scope kısıtları nedeniyle filtrelendi.
- `DESIGN-SYSTEM`, `GLOBAL-SHELL`, `SYSTEM-STATES`, `PAGE-DESIGN`, `FEATURE-DESIGN`: `design_planning: light` olduğu için `DESIGN_RULES.md` altında konsolide edildi.

## 5. Dynamic Instance Registry
- `WAVE_00.md`: Foundation & Service Boundary Setup
- `WAVE_01.md`: Hero & Corporate Trust Surface
- `WAVE_02.md`: Services Presentation Surface
- `WAVE_03.md`: Contact & Direct CTA Surface
- `WAVE_04.md`: Final Cross-Surface QA & Presentation Verification
