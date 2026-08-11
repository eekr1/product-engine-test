# Package Selection — RUN-20260812-001

## 1. Selected Package & Overlays

- **Base Package**: `demo-frontend` (also matching `corporate-website`)
- **Shared Planning Overlay**: `packages/PLANNING_PROFILE_OVERLAY.md`
  - Implementation Planning: `standard`
  - Design Planning: `light`
  - Contextual Condition: `existing-project` transition context

## 2. Document Set Resolution

### Canonical Document IDs

1. `README-DOC` -> `/README.md`
2. `PROJECT-BRAIN` -> `/ai/PROJECT_BRAIN.md`
3. `PRODUCT-RULES` -> `/ai/PRODUCT_RULES.md`
4. `TECH-CTX` -> `/ai/TECH_CONTEXT.md`
5. `DESIGN` -> `/design/DESIGN_RULES.md`
6. `PROJ-PLAN` -> `/project/PROJECT_PLAN.md`
7. `WAVE-MAP` -> `/waves/WAVE_MAP.md`
8. `WAVE-PLAN` (Dynamic Instances):
   - `WAVE_00` -> `/waves/plans/WAVE_00.md`
   - `WAVE_01` -> `/waves/plans/WAVE_01.md`
   - `WAVE_02` -> `/waves/plans/WAVE_02.md`
9. `STATUS` -> `/ai/CURRENT_STATUS.md`
10. `TASKS` -> `/ai/NEXT_TASKS.md`
11. `AGENT-INST` -> `/ai/AGENT_INSTRUCTIONS.md`
12. `DECISIONS` -> `/ai/DECISIONS.md`

### Contextual Exclusions

- `DATA`: Excluded (no persistent database/ORM required in Prototype frontend scope; mock/local static data used)
- `API`: Excluded (no approved external API surface; mock service boundary used)
- `TEST`: Excluded (standard inline verification; dedicated test strategy not required for light prototype)
- `DEPLOY`: Excluded (no production deployment target in current scope)
- `OPS`: Excluded (no production operations scope in current scope)
- `PROD-STRAT`: Excluded (covered within PROJECT_BRAIN / PRODUCT_RULES for prototype)
