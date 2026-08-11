# Package Selection Record

```yaml
run_id: "RUN-20260811-002"
base_package: "demo-frontend"
package_extensions:
  - "corporate-website"
  - "existing-project"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
```

---

## 1. Selected Base Package & Extensions

- **Base Package:** `demo-frontend` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Domain Extension:** `corporate-website` (`packages/CORPORATE_WEBSITE_PACKAGE.md`)
- **State Extension:** `existing-project` (`packages/EXISTING_PROJECT_PACKAGE.md`)

---

## 2. Planning Profile Overlay Application

`packages/PLANNING_PROFILE_OVERLAY.md` uyarınca:

- **Implementation `standard` Minimum Set:**
  - `README-DOC` (`README.md`)
  - `PROJECT-BRAIN` (`ai/PROJECT_BRAIN.md`)
  - `PRODUCT-RULES` (`ai/PRODUCT_RULES.md`)
  - `TECH-CTX` (`ai/TECH_CONTEXT.md`)
  - `STATUS` (`ai/CURRENT_STATUS.md`)
  - `TASKS` (`ai/NEXT_TASKS.md`)
  - `DECISIONS` (`ai/DECISIONS.md`)
  - `AGENT-INST` (`ai/AGENT_INSTRUCTIONS.md`)
  - `PROJ-PLAN` (`planning/PROJECT_PLAN.md`)
  - `WAVE-MAP` (`planning/WAVE_MAP.md`)
  - `WAVE-PLAN` instances (`planning/waves/plans/WAVE_00.md`, `WAVE_01.md`, `WAVE_02.md`)

- **Design `light` Minimum Set:**
  - `DESIGN` (`ai/DESIGN_RULES.md`)

---

## 3. Dynamic Instances Resolution

- `WAVE-PLAN` (3 Instance):
  - `planning/waves/plans/WAVE_00.md`: Foundation, Config, Mock Data Adapter Boundary & Design Tokens setup
  - `planning/waves/plans/WAVE_01.md`: Modern Hero, Service Showcase & Company Identity UI Component Development
  - `planning/waves/plans/WAVE_02.md`: Responsive Polish, Contact Channels & Sales Pitch Demo Readiness

---

## 4. Excluded Conditional Documents

- `DATA_MODEL.md` (Gerekçe: `implementation_planning: standard` + Prototype scope + backend bulunmaması)
- `API_CONTRACTS.md` (Gerekçe: `implementation_planning: standard` + onaylanmış backend API bulunmaması)
- `TEST_STRATEGY.md` (Gerekçe: `implementation_planning: standard` + prototype scope)
- `DEPLOYMENT.md` (Gerekçe: `delivery_profile: Prototype` + production deployment kapsam dışı)
- `OPERATIONS.md` (Gerekçe: `delivery_profile: Prototype` + production operasyon kapsam dışı)
- `PRODUCT_STRATEGY.md` (Gerekçe: `implementation_planning: standard`)
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE-DESIGN` instances (Gerekçe: `design_planning: light` seviyesinde `DESIGN_RULES.md` yetkilidir).
