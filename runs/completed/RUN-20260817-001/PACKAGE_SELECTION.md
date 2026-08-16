# Package Selection — RUN-20260817-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Delivery Profile**: Prototype
- **Implementation Planning**: standard
- **Design Planning**: light
- **Proje Türü**: landing-page

## 2. Seçim Gerekçesi

Approved project input (`inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md`) uyarınca proje, Fizyoterapist Eda Pala için Tekirdağ konum bağlamında hazırlanacak bir kişisel tanıtım ve satış demosu frontend uygulamasıdır (`project_type: landing-page`, `delivery_profile: Prototype`).

`engine/PACKAGE_RULES.md` ve `packages/DEMO_FRONTEND_PACKAGE.md` kurallarına göre `landing-page` + `Prototype` bileşimi için `demo-frontend` base package seçilmiştir.

Projenin `implementation_planning: standard` ve `design_planning: light` profilleri uyarınca zorunlu `packages/PLANNING_PROFILE_OVERLAY.md` uygulanmış ve agent-ready dokümantasyon seti dondurulmuştur.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Output File Path | Status | Selection Reason |
|---|---|---|---|
| `README-DOC` | `README.md` | Required | Root entry point & agent read order |
| `PROJECT-BRAIN` | `ai/PROJECT_BRAIN.md` | Required | Core project vision, identity & boundaries |
| `PRODUCT-RULES` | `ai/PRODUCT_RULES.md` | Required | Scope boundaries & health-domain rules |
| `TECH-CTX` | `ai/TECH_CONTEXT.md` | Required | Technical stack & static adapter architecture |
| `STATUS` | `ai/CURRENT_STATUS.md` | Required | Initial project state & wave tracking |
| `TASKS` | `ai/NEXT_TASKS.md` | Required | Active wave tasks & priorities |
| `DECISIONS` | `ai/DECISIONS.md` | Required | Architectural & design decision log |
| `AGENT-INST` | `ai/AGENT_INSTRUCTIONS.md` | Required | Agent operation instructions & guardrails |
| `PROJ-PLAN` | `project/PROJECT_PLAN.md` | Required | Phase & milestone delivery sequence |
| `DESIGN` | `design/DESIGN_RULES.md` | Required | Modern, serene visual design language (`design: light`) |
| `WAVE-MAP` | `waves/WAVE_MAP.md` | Required | End-to-end implementation wave map |
| `WAVE-PLAN` (x5) | `waves/plans/WAVE_00.md` .. `WAVE_04.md` | Required | Dynamic wave plan instances |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md` (`DATA`): Gerçek kalıcı veritabanı/veri modeli bulunmamaktadır (`project_state: new`, static content adapter).
- `API_CONTRACTS.md` (`API`): Gerçek backend API surface bulunmamaktadır.
- `TEST_STRATEGY.md` (`TEST`): `standard` implementation planning ve `Prototype` profile için conditional/non-applicable.
- `DEPLOYMENT.md` (`DEPLOY`): Approved production deployment target dondurulmamıştır.
- `OPERATIONS.md` (`OPS`): Production operations scope bulunmamaktadır.
- `PRODUCT_STRATEGY.md` (`PROD-STRAT`): MonEtization veya ticari ürün stratejisi bulunmamaktadır.
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE-DESIGN` instances: `design_planning: light` profili yalnız `DESIGN_RULES.md` gerektirir.
