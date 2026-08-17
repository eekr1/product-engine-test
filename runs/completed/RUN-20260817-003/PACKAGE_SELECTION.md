# Package Selection — RUN-20260817-003

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend`
- **Delivery Profile**: `Prototype`
- **Proje Türü**: `landing-page`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`

## 2. Seçim Gerekçesi

Approved project input (`inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`) uyarınca Trakya Teknik Makine için proaktif satış görüşmelerinde kullanılmak üzere modern bir kurumsal web sitesi demosu üretilecektir. Projenin teslim olgunluğu `Prototype`, planlama profilleri ise `implementation_planning: standard` ve `design_planning: light` olarak onaylanmıştır.

`engine/PACKAGE_RULES.md` ve `packages/PLANNING_PROFILE_OVERLAY.md` uyarınca:
1. `demo-frontend` base package'ı seçilmiştir.
2. `implementation_planning: standard` overlay'i ajanın ek mimari planlama yapmadan execution wave'lerini başlatabilmesi için 11 canonical belge ve dynamic wave plan instance'larını zorunlu kılar.
3. `design_planning: light` overlay'i özgün visual direction ve endüstriyel kimlik kurallarını tanımlayan `DESIGN_RULES.md` belgesini zorunlu kılar.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Owner Category | Filename / Instance Path | Requirement | Rationale |
|---|---|---|---|---|
| README-DOC | project | `README.md` | Required | Proje başlangıç ve read-order rehberi |
| PROJECT-BRAIN | ai | `ai/PROJECT_BRAIN.md` | Required | Proje amacı, kapsamı ve karar özeti |
| PRODUCT-RULES | ai | `ai/PRODUCT_RULES.md` | Required | Ürün ve davranış kuralı sınırları |
| TECH-CTX | ai | `ai/TECH_CONTEXT.md` | Required | Frontend stack, continuation gate ve data boundary |
| STATUS | ai | `ai/CURRENT_STATUS.md` | Required | Mevcut phase/wave durumu |
| TASKS | ai | `ai/NEXT_TASKS.md` | Required | Sıradaki uygulanabilir görevler |
| AGENT-INST | ai | `ai/AGENT_INSTRUCTIONS.md` | Required | Ajan çalışma ve wave yürütme kuralları |
| DECISIONS | ai | `ai/DECISIONS.md` | Required | Proje mimari ve ürün kararları |
| PROJ-PLAN | project | `project/PROJECT_PLAN.md` | Required | Proje teslim planı ve dalga sıralaması |
| DESIGN | design | `design/DESIGN_RULES.md` | Required | Visual language, tipografi, renk ve UX yönü |
| WAVE-MAP | waves | `waves/WAVE_MAP.md` | Required | Uçtan uca delivery wave haritası |
| WAVE-PLAN | waves | `waves/plans/WAVE_00.md` | Required (Dynamic) | Wave 00 Foundation & Design System Infrastructure |
| WAVE-PLAN | waves | `waves/plans/WAVE_01.md` | Required (Dynamic) | Wave 01 Global Shell & Corporate Header Presentation |
| WAVE-PLAN | waves | `waves/plans/WAVE_02.md` | Required (Dynamic) | Wave 02 Verified Services & Direct-Contact Capabilities |
| WAVE-PLAN | waves | `waves/plans/WAVE_03.md` | Required (Dynamic) | Wave 03 Responsive Polish & Sales Demo Readiness |

## 4. Hariç Bırakılan Dokümanlar

- **DATA, API, TEST, DEPLOY, OPS, PROD-STRAT**: `implementation_planning: standard` ve frontend demo landing page kapsamı gereği conditional belgeler elenmiştir. Gerçek backend/API/database/deployment scope onaylanmadığı için sahte kontrat üretilmemiştir.
- **DESIGN-SYSTEM, GLOBAL-SHELL, PAGE-DESIGN, SYSTEM-STATES, FEATURE-DESIGN, ADMIN-DESIGN**: Approved `design_planning: light` profili gereği elenmiştir. Görsel dil ve arayüz yönlendirmesi `DESIGN_RULES.md` altında toplanmıştır.
