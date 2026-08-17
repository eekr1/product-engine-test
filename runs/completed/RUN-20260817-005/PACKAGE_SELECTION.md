# Package Selection — RUN-20260817-005

## 1. Selected Domain / Package / Profiles

- **Project Type**: `corporate-website`
- **Base Package**: `corporate-website`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `standard`

## 2. Selection Rationale

- **Base Package**: Approved `project_type: corporate-website` uyarınca `engine/PACKAGE_RULES.md` gereğince base package `corporate-website` seçilmiştir. Proaktif satış demosu wording'i (`sales demo`) `demo-frontend` override'ı yapamaz.
- **Implementation Planning**: `standard` planning profile 7 onaylı sayfadan oluşan kurumsal web sitesi için gerekli tüm mimari ve dalga sınırlarını eksiksiz tanımlar.
- **Design Planning**: `standard` design planning profile 7 onaylı sayfanın her biri için bağımsız `PAGE-DESIGN` kontratı, `GLOBAL_SHELL`, `DESIGN_SYSTEM` ve `DESIGN_RULES` sağlayarak responsive ve görsel tutarlılığı güvenceye alır.

## 3. Site Architecture Precondition

- **Status**: `PASS`
- **Approved Site Architecture Registry**:
  - `PAGE-001`: Ana Sayfa (`/`)
  - `PAGE-002`: Kurumsal (`/kurumsal`)
  - `PAGE-003`: Hizmetler (`/hizmetler`)
  - `PAGE-004`: Yedek Parça Temini — Hizmet Detayı (`/hizmetler/yedek-parca-temini`)
  - `PAGE-005`: Yerinde Teknik Destek — Hizmet Detayı (`/hizmetler/yerinde-teknik-destek`)
  - `PAGE-006`: Makine Bakım ve Onarım — Hizmet Detayı (`/hizmetler/makine-bakim-onarim`)
  - `PAGE-007`: İletişim (`/iletisim`)

`APPROVED_PAGE_SET` size = 7, missing/unresolved page yoktur.

## 4. Included Documents / Dynamic Instances

| Category | Document ID / Instance Pattern | Target Path | Reason |
|---|---|---|---|
| `project` | `README-DOC` | `README.md` | Required entry point |
| `ai` | `PROJECT-BRAIN` | `ai/PROJECT_BRAIN.md` | Required primary AI authority |
| `ai` | `PRODUCT-RULES` | `ai/PRODUCT_RULES.md` | Required product behavior boundaries |
| `ai` | `TECH-CTX` | `ai/TECH_CONTEXT.md` | Required technical stack & routing context |
| `ai` | `STATUS` | `ai/CURRENT_STATUS.md` | Required execution status tracker |
| `ai` | `TASKS` | `ai/NEXT_TASKS.md` | Required immediate tasks queue |
| `ai` | `AGENT-INST` | `ai/AGENT_INSTRUCTIONS.md` | Required agent execution rules |
| `ai` | `DECISIONS` | `ai/DECISIONS.md` | Required decision register |
| `project` | `PROJ-PLAN` | `project/PROJECT_PLAN.md` | Required delivery plan |
| `design` | `DESIGN` | `design/DESIGN_RULES.md` | Required design rules |
| `design` | `DESIGN-SYSTEM` | `design/DESIGN_SYSTEM.md` | Required design system tokens |
| `design` | `GLOBAL-SHELL` | `design/GLOBAL_SHELL.md` | Required layout shell & nav registry |
| `design` | `SYSTEM-STATES` | `design/SYSTEM_STATES.md` | Required global system states |
| `design` | `PAGE-DESIGN` (7 instances) | `design/pages/*_DESIGN_PACKAGE.md` | Required per-page design packages |
| `waves` | `WAVE-MAP` | `waves/WAVE_MAP.md` | Required wave map authority |
| `waves` | `WAVE-PLAN` (6 instances) | `waves/plans/WAVE_*.md` | Required wave plan execution packages |

## 5. Excluded Documents

| Document ID | Target Document Name | Exclusion Reason |
|---|---|---|
| `PROD-STRAT` | `PRODUCT_STRATEGY.md` | `implementation_planning: standard` + commercial strategy out of scope |
| `DATA` | `DATA_MODEL.md` | No approved persistent backend DB schema in current frontend demo scope |
| `API` | `API_CONTRACTS.md` | No approved external REST/GraphQL API implementation in current scope |
| `TEST` | `TEST_STRATEGY.md` | `implementation_planning: standard` (test strategy is full profile) |
| `DEPLOY` | `DEPLOYMENT.md` | Production deployment out of current demo scope |
| `OPS` | `OPERATIONS.md` | Operations out of current demo scope |
| `ADMIN-DESIGN` | `ADMIN_OPERATIONAL_DESIGN.md` | Admin panel out of current scope |
| `FEATURE-DESIGN` | `features/*` | Single page-based UI with standard flows; no complex feature packages required |
