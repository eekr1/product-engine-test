# Package Selection — RUN-20260815-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Shared Planning Overlay**: `packages/PLANNING_PROFILE_OVERLAY.md`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

Approved project input (`inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`) uyarınca proje, Trakya Teknik Makine firmasının kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 temel hizmetini proaktif satış görüşmelerinde sunacak bir kurumsal frontend demo niteliğindedir.

- Proje frontend ağırlıklı ve demo hedefli olduğu için base package olarak `demo-frontend` seçilmiştir.
- Approved `implementation_planning: standard` ve `design_planning: light` profilleri uyarınca `packages/PLANNING_PROFILE_OVERLAY.md` katmanı uygulanmıştır.
- `standard` implementation planning agent-ready minimumunu (`TECH-CTX`, `PROJECT_PLAN`, `WAVE-MAP`, `WAVE-PLAN` instances, `STATUS`, `TASKS`, `AGENT-INST`, `DECISIONS`) eklemiştir.
- `light` design planning profili uyarınca güçlü, projeye özgü, anti-template ve responsive `DESIGN_RULES.md` seçilmiştir.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Output Path | Scope Category | Requirement Status | Selection Rationale |
|---|---|---|---|---|
| `README-DOC` | `README.md` | project | Required | Proje giriş noktası ve read order |
| `PROJECT-BRAIN` | `ai/PROJECT_BRAIN.md` | ai | Required | Proje amacının ve canonical bağlamın sahibi |
| `PRODUCT-RULES` | `ai/PRODUCT_RULES.md` | ai | Required | Ürün ve scope sınırları kuralları |
| `TECH-CTX` | `ai/TECH_CONTEXT.md` | ai | Required | Technical stack, mock adapter ve integration readiness |
| `DESIGN` | `design/DESIGN_RULES.md` | design | Required (UI) | Visual direction, composition, typography, anti-template rules |
| `WAVE-MAP` | `waves/WAVE_MAP.md` | waves | Required | Uçtan uca delivery waves ve dependency map |
| `WAVE-PLAN` | `waves/plans/WAVE_00.md` | waves | Required (dynamic) | Wave 00 Foundation Plan |
| `WAVE-PLAN` | `waves/plans/WAVE_01.md` | waves | Required (dynamic) | Wave 01 Hero & Brand Plan |
| `WAVE-PLAN` | `waves/plans/WAVE_02.md` | waves | Required (dynamic) | Wave 02 Services Presentation Plan |
| `WAVE-PLAN` | `waves/plans/WAVE_03.md` | waves | Required (dynamic) | Wave 03 Contact & CTA Plan |
| `WAVE-PLAN` | `waves/plans/WAVE_04.md` | waves | Required (dynamic) | Wave 04 Final Integration & QA Plan |
| `PROJ-PLAN` | `project/PROJECT_PLAN.md` | project | Required | Milestone ve execution plan |
| `STATUS` | `ai/CURRENT_STATUS.md` | ai | Required | Current phase ve active wave durumu |
| `TASKS` | `ai/NEXT_TASKS.md` | ai | Required | Sıradaki task listesi |
| `AGENT-INST` | `ai/AGENT_INSTRUCTIONS.md` | ai | Required | Ajan çalışma yönergeleri |
| `DECISIONS` | `ai/DECISIONS.md` | ai | Required | Proje seviyesi teknik ve mimari kararlar |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md` (`DATA`): Approved scope'ta gerçek kalıcı veritabanı veya backend data modeli yoktur (`integration readiness` sahte backend uydurma izni vermez).
- `API_CONTRACTS.md` (`API`): Approved scope'ta gerçek backend API surface yoktur.
- `TEST_STRATEGY.md` (`TEST`): Karmaşık dedicated automated test strategy gerektiren scope yoktur (Wave level verification yeterlidir).
- `DEPLOYMENT.md` (`DEPLOY`): Production deployment scope dışındadır.
- `OPERATIONS.md` (`OPS`): Production operations scope dışındadır.
- `PRODUCT_STRATEGY.md` (`PROD-STRAT`): Ticari monetization/market strategy context scope dışındadır.
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE_DESIGN_PACKAGE.md`: `design_planning: light` profili uyarınca ayrı artifact olarak üretilmeyip `DESIGN_RULES.md` içinde birleşik sunulacaktır.
