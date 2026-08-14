# Package Selection — RUN-20260814-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `web-app`

## 2. Seçim Gerekçesi

Approved input snapshot uyarınca birincil hedef potansiyel müşteri görüşmesinde sunulacak kurumsal frontend demosu hazırlamaktır. `demo-frontend` paketi frontend ağırlıklı projeler için ideal domain tabanıdır. `PLANNING_PROFILE_OVERLAY.md` uygulanarak `implementation_planning: standard` ve `design_planning: light` gerektirdiği tüm agent-ready dokümanlar eklenmiştir.

## 3. Üretilecek Doküman Listesi

| Document ID | Canonical File Path | Owner Category | Zorunluluk | Gerekçe |
|---|---|---|---|---|
| README-DOC | `README.md` | project | Required | Proje giriş noktası ve agent read-order |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | ai | Required | Proje amacı, kapsam ve temel kurallar |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | ai | Required | Ürün davranış ve kapsam kuralları |
| TECH-CTX | `ai/TECH_CONTEXT.md` | ai | Required | Frontend mimarisi ve integration readiness |
| STATUS | `ai/CURRENT_STATUS.md` | ai | Required | Mevcut faz ve wave durumu |
| TASKS | `ai/NEXT_TASKS.md` | ai | Required | Aktif wave görevleri |
| DECISIONS | `ai/DECISIONS.md` | ai | Required | Ürün/mimari kararlar dökümü |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | ai | Required | Ajan çalışma talimatları |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | project | Required | Proje planı ve milestone'lar |
| DESIGN | `design/DESIGN_RULES.md` | design | Required | Visual concept, tipografi, renk ve UX kuralları |
| WAVE-MAP | `waves/WAVE_MAP.md` | waves | Required | Wave haritası ve bağımlılıklar |
| WAVE-PLAN | `waves/plans/WAVE_00.md` | waves | Required (Dynamic Instance) | Wave 00: Foundation & Core Service Boundary |
| WAVE-PLAN | `waves/plans/WAVE_01.md` | waves | Required (Dynamic Instance) | Wave 01: Primary Entry & Brand Hero |
| WAVE-PLAN | `waves/plans/WAVE_02.md` | waves | Required (Dynamic Instance) | Wave 02: Corporate Trust & Services Detail |
| WAVE-PLAN | `waves/plans/WAVE_03.md` | waves | Required (Dynamic Instance) | Wave 03: Contact & Conversion Touchpoints |
| WAVE-PLAN | `waves/plans/WAVE_04.md` | waves | Required (Dynamic Instance) | Wave 04: Cross-Cutting Responsive, Regression & QA |

## 4. Hariç Bırakılan Dokümanlar

- `DATA`: Gerçek veritabanı veya karmaşık data model approved scope dışındadır; frontend mock adapter kullanılacaktır.
- `API`: Gerçek backend veya API sunucusu approved scope dışındadır.
- `TEST`, `DEPLOY`, `OPS`: Production deployment ve operasyonel bakım ilk demo kapsamında değildir.
- `DESIGN-SYSTEM`, `GLOBAL-SHELL`, `PAGE-DESIGN`: `design_planning: light` profili kapsamında `DESIGN_RULES.md` yeterlidir; ayrı design system paketleri üretilmez.

## 5. Uygulanan Paket Eklentileri (Extensions)

- `PLANNING_PROFILE_OVERLAY.md` (Implementation `standard` + Design `light` minimum seti dâhil edilmiştir).
- `existing-project` extension (Mevcut site gerçeklerinin korunması ve transition scope ayrımı uygulanmıştır).
