# Package Selection — RUN-20260817-002

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

Trakya Teknik Makine projesi, satış görüşmelerinde gösterilmek üzere hazırlanan bir kurumsal frontend landing page demosudur (`project_type: landing-page`, `delivery_profile: Prototype`).
`PACKAGE_RULES.md` ve `PLANNING_PROFILE_OVERLAY.md` uyarınca:
1. Base Package: `demo-frontend` (kurumsal frontend presentation, mock data boundary).
2. `implementation_planning: standard` overlay seti uygulanmıştır (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `STATUS`, `TASKS`, `DECISIONS`, `AGENT-INST`, `PROJ-PLAN`, `WAVE-MAP`, `WAVE-PLAN` instances).
3. `design_planning: light` overlay seti uygulanmıştır (`DESIGN`).

## 3. Üretilecek Doküman Listesi

| Document ID | Canonical Path | Owner Category | Required / Overlay | Purpose |
|---|---|---|---|---|
| README-DOC | `README.md` | project | Required | Project read-order & navigation guide |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | ai | Required | Primary project brain document |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | ai | Required | Product behavior & scope rules |
| TECH-CTX | `ai/TECH_CONTEXT.md` | ai | Required | Technical architecture & mock boundary |
| STATUS | `ai/CURRENT_STATUS.md` | ai | Required | Current run & phase status |
| TASKS | `ai/NEXT_TASKS.md` | ai | Required | Immediate actionable task list |
| DECISIONS | `ai/DECISIONS.md` | ai | Required | Architecture & product decisions record |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | ai | Required | Agent guidelines for project execution |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | project | Required | Delivery milestones & phase execution |
| DESIGN | `design/DESIGN_RULES.md` | design | Required (`design light`) | Visual direction & UX rules |
| WAVE-MAP | `waves/WAVE_MAP.md` | waves | Required | End-to-end wave map & scope boundary |
| WAVE-PLAN | `waves/plans/WAVE_00.md` | waves | Dynamic Instance | Foundation & Core Config |
| WAVE-PLAN | `waves/plans/WAVE_01.md` | waves | Dynamic Instance | Global Shell & Navigation |
| WAVE-PLAN | `waves/plans/WAVE_02.md` | waves | Dynamic Instance | Hero & Brand Positioning |
| WAVE-PLAN | `waves/plans/WAVE_03.md` | waves | Dynamic Instance | Core Services Showcase |
| WAVE-PLAN | `waves/plans/WAVE_04.md` | waves | Dynamic Instance | Corporate Overview & Direct Contact |
| WAVE-PLAN | `waves/plans/WAVE_05.md` | waves | Dynamic Instance | Integration, Responsive & QA |

## 4. Hariç Bırakılan Dokümanlar

- **DESIGN-SYSTEM**, **GLOBAL-SHELL**, **PAGE-DESIGN**, **SYSTEM-STATES**: `design_planning: light` profilinde bu dokümanlar yerine `DESIGN_RULES.md` yetkilidir; bu belgeler `design standard | full` gerektirir.
- **DATA**, **API**: Gerçek backend, API veya veritabanı kapsam dışında tutulduğu ve `implementation_planning: standard` olduğu için üretilmemektedir (`implementation full` veya gerçek API scope zorunluluğu gerektirir).
- **TEST**, **DEPLOY**, **OPS**, **PROD-STRAT**: Conditional / production-only dokümanlar bu demo kapsamına dahil değildir.
