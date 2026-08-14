# Package Selection — RUN-20260815-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend`
- **Uygulanan Extension Context**: `existing-project`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

- **Temel Paket (`demo-frontend`)**: Proje bir kurumsal satış demosu olup, birincil teslimat çalışır ve sunulabilir frontend arayüzüdür. Sahte backend icat edilmeksizin temiz local mock adapter katmanı gerektirir.
- **Extension Context (`existing-project`)**: Mevcut `https://www.trakyateknikmakine.com/` SITE123 web sitesinden doğrulanmış firma bilgileri ve hizmet verileri devralındığı için `existing-project` transition kuralları uygulanmıştır.
- **Implementation Planning (`standard`)**: Agent-ready minimum execution planlaması, dalga yapısı (wave map/plans) ve mimari sınırlar sağlar.
- **Design Planning (`light`)**: UI/UX sunum ve kurumsal kimlik demosu için gerekli tipografi, renk, yüzey ve anti-template kurallarını içeren `DESIGN_RULES` dokümanını zorunlu kılar.

## 3. Üretilecek Doküman Listesi

| Document ID | Owner Category / Path | Requirement | Selection Rationale |
|---|---|---|---|
| README-DOC | `README.md` | Required | Output giriş noktası ve agent read-order rehberi |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | Required | Merkezi proje özeti, amaç ve bağlam |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | Required | Ürün kuralları, kapsam sınırları ve ilkeler |
| TECH-CTX | `ai/TECH_CONTEXT.md` | Required | Frontend mimarisi, mock data boundary ve entegrasyon sınırı |
| STATUS | `ai/CURRENT_STATUS.md` | Required | Projenin mevcut durumu ve aktif wave takibi |
| TASKS | `ai/NEXT_TASKS.md` | Required | Sıradaki görevler ve uygulama listesi |
| DECISIONS | `ai/DECISIONS.md` | Required | Mimari ve ürün kararları kaydı |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | Required | Ajanlar için geliştirme ve uygulama talimatları |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | Required | Proje aşamaları ve yönetim planı |
| DESIGN | `design/DESIGN_RULES.md` | Required (`light`) | Tipografi, renk paleti, yüzey sistemi ve anti-template kuralları |
| WAVE-MAP | `waves/WAVE_MAP.md` | Required | Wave decomposition ve execution sınırı haritası |
| WAVE-PLAN | `waves/plans/WAVE_00.md` | Required | Wave 00: Foundation & Scaffolding |
| WAVE-PLAN | `waves/plans/WAVE_01.md` | Required | Wave 01: Primary Entry & Hero Surface |
| WAVE-PLAN | `waves/plans/WAVE_02.md` | Required | Wave 02: Corporate Identity & Technical Trust |
| WAVE-PLAN | `waves/plans/WAVE_03.md` | Required | Wave 03: Core Services Presentation |
| WAVE-PLAN | `waves/plans/WAVE_04.md` | Required | Wave 04: Direct Contact & Communication Access |
| WAVE-PLAN | `waves/plans/WAVE_05.md` | Required | Wave 05: Final Cross-Cutting QA & Presentation Readiness |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md`: Approved scope'ta gerçek veritabanı veya karmaşık veritabanı şeması bulunmadığı için.
- `API_CONTRACTS.md`: Approved scope'ta gerçek backend veya API sunucusu bulunmadığı için (sahte backend uydurmak yasaktır).
- `TEST_STRATEGY.md`, `DEPLOYMENT.md`, `OPERATIONS.md`: Delivery profile `Prototype` ve implementation planning `standard` olduğundan, karmaşık production/ops dokümanları bu aşamada hariç tutulmuştur.
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE_DESIGN_PACKAGE.md`: `design_planning` `light` seçildiği için hariç bırakılmış; tasarım kuralları `DESIGN_RULES.md` içinde toplanmıştır.

## 5. Uygulanan Paket Eklentileri (Extensions)

- **`existing-project` Extension Context**:
  - Current Reality (SITE123 platformundaki mevcut veriler)
  - Target State (SITE123'ten bağımsız modern frontend kurumsal demo)
  - Transition Scope (Görsel ve teknik yapının tamamen yenilenmesi, doğrulanmış metin ve firma verilerinin korunması)
