# Package Selection — RUN-20260817-004

## 1. Selected Domain / Package / Profiles
- **Project Type**: `corporate-website`
- **Base Package**: `corporate-website`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `standard`

## 2. Selection Rationale
Project domain is explicitly `corporate-website`. Under `engine/PACKAGE_RULES.md`, the base package is determined deterministically by domain (`corporate-website`). Delivery profile wording (`Prototype`, `sales demo`) MUST NOT override the base package to `demo-frontend`.

## 3. Site Architecture Precondition
Approved Site Architecture is present and non-empty in approved `PROJECT_INPUT.md`. `APPROVED_PAGE_SET` contains 7 distinct pages:
- `PAGE-001`: Ana Sayfa (`/` / `home`)
- `PAGE-002`: Kurumsal (`/kurumsal` / `corporate`)
- `PAGE-003`: Hizmetler (`/hizmetler` / `services`)
- `PAGE-004`: Yedek Parça Temini — Hizmet Detayı (`/hizmetler/yedek-parca-temini` / `service-detail-spare-parts`)
- `PAGE-005`: Yerinde Teknik Destek — Hizmet Detayı (`/hizmetler/yerinde-teknik-destek` / `service-detail-onsite-support`)
- `PAGE-006`: Makine Bakım ve Onarım — Hizmet Detayı (`/hizmetler/makine-bakim-onarim` / `service-detail-maintenance-repair`)
- `PAGE-007`: İletişim (`/iletisim` / `contact`)

Single-page anchor section reduction is strictly prohibited.

## 4. Included Documents / Dynamic Instances

| Document ID | Canonical Owner Path | Reason for Inclusion |
|---|---|---|
| README-DOC | `README.md` | Required read-order entry point |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | Required core context document |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | Required product boundaries and rules |
| TECH-CTX | `ai/TECH_CONTEXT.md` | Required technical context and continuation gate |
| STATUS | `ai/CURRENT_STATUS.md` | Required current status tracker |
| TASKS | `ai/NEXT_TASKS.md` | Required next tasks tracker |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | Required agent guidelines |
| DECISIONS | `ai/DECISIONS.md` | Required architectural decisions |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | Required implementation project plan |
| DESIGN | `design/DESIGN_RULES.md` | Required design rules for UI |
| DESIGN-SYSTEM | `design/DESIGN_SYSTEM.md` | Required tokens & visual primitives for design standard |
| GLOBAL-SHELL | `design/GLOBAL_SHELL.md` | Required shell & navigation specification for 7 pages |
| SYSTEM-STATES | `design/SYSTEM_STATES.md` | Required UI system states specification |
| PAGE-DESIGN | `design/pages/*_DESIGN_PACKAGE.md` | 7 dynamic instances (one for each approved PAGE-XXX) |
| WAVE-MAP | `waves/WAVE_MAP.md` | Required wave map decomposition |
| WAVE-PLAN | `waves/plans/WAVE_*.md` | 5 dynamic instances (`WAVE_00` .. `WAVE_04`) |

## 5. Excluded Documents

| Document ID | Reason for Exclusion |
|---|---|
| PROD-STRAT | Conditional (requires commercial product strategy context not present in prototype sales demo) |
| DATA | Conditional (no persistent DB model required in current prototype scope) |
| API | Conditional (no real API endpoints required in current prototype scope) |
| TEST | Conditional (dedicated test strategy optional for standard implementation planning) |
| DEPLOY | Conditional (no production deployment target in current prototype scope) |
| OPS | Conditional (no production operations in current prototype scope) |
| ADMIN-DESIGN | Conditional (no admin UI in current prototype scope) |
| FEATURE-DESIGN | Conditional (requires complex cross-screen feature flow, not applicable to standard corporate pages) |
