# Package Selection — RUN-20260813-001

```yaml
run_id: RUN-20260813-001
project_slug: trakya-teknik-makine
base_package: demo-frontend
extensions:
  - corporate-website
  - existing-project
planning_overlay: packages/PLANNING_PROFILE_OVERLAY.md
delivery_profile: Prototype
implementation_planning: standard
design_planning: light
```

## Resolved Canonical Documents

1. `README-DOC` $\rightarrow$ `README.md`
2. `PROJECT-BRAIN` $\rightarrow$ `ai/PROJECT_BRAIN.md`
3. `PRODUCT-RULES` $\rightarrow$ `ai/PRODUCT_RULES.md`
4. `TECH-CTX` $\rightarrow$ `ai/TECH_CONTEXT.md`
5. `STATUS` $\rightarrow$ `ai/CURRENT_STATUS.md`
6. `TASKS` $\rightarrow$ `ai/NEXT_TASKS.md`
7. `AGENT-INST` $\rightarrow$ `ai/AGENT_INSTRUCTIONS.md`
8. `DECISIONS` $\rightarrow$ `ai/DECISIONS.md`
9. `PROJ-PLAN` $\rightarrow$ `project/PROJECT_PLAN.md`
10. `WAVE-MAP` $\rightarrow$ `waves/WAVE_MAP.md`
11. `DESIGN` $\rightarrow$ `design/DESIGN_RULES.md`

## Resolved Dynamic Instances

- `WAVE-PLAN` instances (3 waves resolved):
  * `waves/plans/WAVE_00.md` (Foundation & Design System Setup)
  * `waves/plans/WAVE_01.md` (Core Corporate & Service Presentation Components)
  * `waves/plans/WAVE_02.md` (Contact, Map & Demo Assembly)

## Contextual Exclusions

- `DATA`, `API`, `TEST`, `DEPLOY`, `OPS`: Unresolved/out-of-scope for initial frontend prototype run. Sahte API/backend üretilmeme ilkesi uyarınca dahil edilmemiştir.
