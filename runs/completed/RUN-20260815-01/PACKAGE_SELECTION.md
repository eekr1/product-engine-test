# Package Selection — RUN-20260815-01

## 1. Seçilen Paket ve Profil

- **Temel Paket**: demo-frontend (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Delivery Profile**: Prototype
- **Implementation Planning**: standard
- **Design Planning**: light
- **Proje Türü**: landing-page

## 2. Seçim Gerekçesi

- **Intake Sinyalleri**: Proje bir kurumsal satış demosu prototipidir (`delivery_profile: Prototype`). Satış görüşmesinde kullanılmak üzere frontend ağırlıklı web tanıtım yüzeyi hedeflenmektedir.
- **Planning Profile Overlay**: `implementation_planning: standard` ve `design_planning: light` approved input snapshot ile tanımlanmıştır. Standard implementation seviyesi agent-ready minimum doküman setini (`TECH_CONTEXT`, `PROJECT_PLAN`, `WAVE_MAP`, `WAVE_PLAN` vb.) zorunlu kılar. Light design seviyesi projeye özgü visual concept rules (`DESIGN_RULES`) ekler.
- **Integration Readiness**: Frontend UI ile mock/local static data arasında temiz service/data-access boundary yerleştirilecek; sahte backend veya veritabanı uydurulmayacaktır.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Target Path | Rule / Overlay Reason | Required Status |
|---|---|---|---|
| README-DOC | `README.md` | Base + Overlay Standard | Required |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | Base + Overlay Standard | Required |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | Base + Overlay Standard | Required |
| TECH-CTX | `ai/TECH_CONTEXT.md` | Overlay Standard | Required |
| STATUS | `ai/CURRENT_STATUS.md` | Overlay Standard | Required |
| TASKS | `ai/NEXT_TASKS.md` | Overlay Standard | Required |
| DECISIONS | `ai/DECISIONS.md` | Overlay Standard | Required |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | Overlay Standard | Required |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | Overlay Standard | Required |
| DESIGN | `design/DESIGN_RULES.md` | Overlay Light | Required |
| WAVE-MAP | `waves/WAVE_MAP.md` | Overlay Standard | Required |
| WAVE-PLAN | `waves/plans/WAVE_00.md` | Overlay Standard (Dynamic Instance) | Required |
| WAVE-PLAN | `waves/plans/WAVE_01.md` | Overlay Standard (Dynamic Instance) | Required |
| WAVE-PLAN | `waves/plans/WAVE_02.md` | Overlay Standard (Dynamic Instance) | Required |
| WAVE-PLAN | `waves/plans/WAVE_03.md` | Overlay Standard (Dynamic Instance) | Required |
| WAVE-PLAN | `waves/plans/WAVE_04.md` | Overlay Standard (Dynamic Instance) | Required |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md` (DATA): Kalıcı veritabanı / backend bu scope'ta onaylanmamıştır; mock/local static data kullanılmaktadır.
- `API_CONTRACTS.md` (API): Gerçek API / endpoint scope dışındadır.
- `TEST_STRATEGY.md` (TEST): Proje prototype seviyesindedir; dedicated test strategy belgesi hariç bırakılmıştır.
- `DEPLOYMENT.md` (DEPLOY): Production deployment scope dışındadır.
- `OPERATIONS.md` (OPS): Production operasyon scope dışındadır.
- `PRODUCT_STRATEGY.md` (PROD-STRAT): Ticari ürün stratejisi belgelendirmesi talep edilmemiştir.
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE_DESIGN_PACKAGE.md`: `design_planning: light` profile uyarınca visual rules `DESIGN_RULES.md` altında toplanmış, ayrı design system/page instance'ları üretilmemiştir.

## 5. Uygulanan Paket Eklentileri (Extensions)

- `PLANNING_PROFILE_OVERLAY.md`: Base package `demo-frontend` üzerine `standard` implementation planning ve `light` design planning overlay'i uygulanmıştır.
