# Package Selection — RUN-20260815-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

Proje `landing-page` türünde, proaktif satış görüşmelerinde kullanılmak üzere hazırlanan bir kurumsal frontend demo projesidir. Gerçek backend, veritabanı veya CMS kapsam dışındadır. `DEMO_FRONTEND_PACKAGE` domain çekirdeğini sunar, `PLANNING_PROFILE_OVERLAY.md` ise `implementation_planning: standard` ve `design_planning: light` profillerinin gerektirdiği agent-ready doküman minimumlarını ekler.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Owner Category / Target Path | Status / Scope | Seçim Gerekçesi |
|---|---|---|---|
| README-DOC | `README.md` | Required | Root entry point ve agent read-order rehberi. |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | Required | Projenin genel vizyonu, amacını ve sınırlarını tanımlar. |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | Required | Ürün kuralları ve source-closed kısıtlamalarını tanımlar. |
| TECH-CTX | `ai/TECH_CONTEXT.md` | Required | Teknik mimari, mock static adapter ve service boundary kısıtlarını tanımlar. |
| STATUS | `ai/CURRENT_STATUS.md` | Required | Projenin güncel durumunu ve aktif wave'ini gösterir. |
| TASKS | `ai/NEXT_TASKS.md` | Required | Sıradaki görev ve adımları listeler. |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | Required | Kod üreten ajan için execution talimatlarını içerir. |
| DECISIONS | `ai/DECISIONS.md` | Required | Alınan teknik ve mimari kararları belgeler. |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | Required | Projenin uçtan uca teslimat planını sunar. |
| DESIGN | `design/DESIGN_RULES.md` | Required | Endüstriyel kurumsal görsel kimlik ve UI kurallarını tanımlar (`design: light`). |
| WAVE-MAP | `waves/WAVE_MAP.md` | Required | Dalga bazlı execution haritasını ve capability freeze sınırlarını tanımlar. |
| WAVE-PLAN (Instance) | `waves/plans/WAVE_00.md` | Required | Foundation & Data Access Boundary Setup planı. |
| WAVE-PLAN (Instance) | `waves/plans/WAVE_01.md` | Required | Brand Identity & Primary Hero Presentation planı. |
| WAVE-PLAN (Instance) | `waves/plans/WAVE_02.md` | Required | Corporate Background & Regional Context Presentation planı. |
| WAVE-PLAN (Instance) | `waves/plans/WAVE_03.md` | Required | Services Showcase Presentation planı. |
| WAVE-PLAN (Instance) | `waves/plans/WAVE_04.md` | Required | Direct Contact Surface & CTA Presentation planı. |
| WAVE-PLAN (Instance) | `waves/plans/WAVE_05.md` | Required | Cross-Surface Integration, Responsive & QA planı. |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md`: Backend/veritabanı approved scope dışında olduğu için üretilmeyecektir.
- `API_CONTRACTS.md`: Gerçek API approved scope dışında olduğu için üretilmeyecektir.
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE_DESIGN_PACKAGE.md`: `design_planning: light` profili kapsamında tek odaklı `DESIGN_RULES.md` yeterlidir.
- `TEST_STRATEGY.md`, `DEPLOYMENT.md`, `OPERATIONS.md`, `PRODUCT_STRATEGY.md`: `implementation_planning: standard` ve `Prototype` profili için conditional/non-applicable belgelerdir.
