# Package Selection: RUN-20260815-001

## 1. Selected Base Package
- **Package ID:** `demo-frontend` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Package Type:** base
- **Rationale:** Proje bir kurumsal frontend demo (landing page) olup satış görüşmesinde sergilemeye yönelik `delivery_profile: Prototype` olgunluğundadır.

## 2. Planning Profile Overlay Application
- **Overlay:** `packages/PLANNING_PROFILE_OVERLAY.md`
- **Implementation Planning Profile:** `standard`
  - Canonical Minimum Set: `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `STATUS`, `TASKS`, `DECISIONS`, `AGENT-INST`, `PROJ-PLAN`, `WAVE-MAP`, `WAVE-PLAN` instances.
- **Design Planning Profile:** `light`
  - Minimum Set: `DESIGN` (`DESIGN_RULES.md`).

## 3. Contextual Conditions & Extensions
- **Conditional Documents Evaluation:**
  - `DATA`: Skipped (gerçek kalıcı data model kısıtı yok, pure frontend mock adapter).
  - `API`: Skipped (gerçek backend/API yüzeyi onaylı scope dışında).
  - `TEST`: Skipped (ayrı test stratejisi belgesi yerine WAVE_PLAN içinde implementation-ready testing verilecek).
  - `DEPLOY`: Skipped (production deployment scope dışı).
  - `OPS`: Skipped (operations scope dışı).
  - `PROD-STRAT`: Skipped (ürün stratejisi scope dışı).

## 4. Resolved Canonical Documents & Paths

```text
README-DOC     → working-output/README.md
PROJECT-BRAIN  → working-output/ai/PROJECT_BRAIN.md
PRODUCT-RULES  → working-output/ai/PRODUCT_RULES.md
TECH-CTX       → working-output/ai/TECH_CONTEXT.md
STATUS         → working-output/ai/CURRENT_STATUS.md
TASKS          → working-output/ai/NEXT_TASKS.md
AGENT-INST     → working-output/ai/AGENT_INSTRUCTIONS.md
DECISIONS      → working-output/ai/DECISIONS.md
PROJ-PLAN      → working-output/project/PROJECT_PLAN.md
DESIGN         → working-output/design/DESIGN_RULES.md
WAVE-MAP       → working-output/waves/WAVE_MAP.md
WAVE-PLAN (00) → working-output/waves/plans/WAVE_00.md
WAVE-PLAN (01) → working-output/waves/plans/WAVE_01.md
WAVE-PLAN (02) → working-output/waves/plans/WAVE_02.md
WAVE-PLAN (03) → working-output/waves/plans/WAVE_03.md
WAVE-PLAN (04) → working-output/waves/plans/WAVE_04.md
```
