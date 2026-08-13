# Package Selection — RUN-20260813-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` (Frontend Demo Package v2.1.0)
- **Paket Eklentisi**: `existing-project` (Existing Project Extension v2.0.0)
- **Shared Planning Overlay**: `PLANNING_PROFILE_OVERLAY.md` (v1.1.0)
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

Projenin birincil hedefi Trakya Teknik Makine'nin mevcut kurumsal web sitesini modernleştiren ve satış görüşmesinde sunulabilecek çalışır bir frontend demo ortaya koymaktır. Proje türü `landing-page` ve teslim hedefi `Prototype` olduğu için `demo-frontend` temel paketi seçilmiştir. 

Mevcut site (`trakyateknikmakine.com`) birincil firma ve hizmet bilgi kaynağı olduğu için `existing-project` eklentisi uygulanmış; current reality vs target state ayrımı korunmuştur. 

Approved planning profile `implementation_planning: standard` ve `design_planning: light` olduğu için `PLANNING_PROFILE_OVERLAY` uyarınca agent-ready planlama minimum seti (11 canonical belge + 5 wave plan instance) çözülmüştür.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Dosya Adı / Path | Kategori | Zorunluluk | Gerekçe / Bağlam |
|---|---|---|---|---|
| `README-DOC` | `README.md` | project | Required | Proje giriş noktası ve canonical read-order |
| `PROJECT-BRAIN` | `ai/PROJECT_BRAIN.md` | ai | Required | Projenin amaç, kapsam ve bağlam özeti |
| `PRODUCT-RULES` | `ai/PRODUCT_RULES.md` | ai | Required | Ürün davranış, UX ve kapsam kuralları |
| `TECH-CTX` | `ai/TECH_CONTEXT.md` | ai | Required | Frontend mimarisi, mock adapter ve integration readiness |
| `STATUS` | `ai/CURRENT_STATUS.md` | ai | Required | Mevcut faz ve wave durum göstergesi |
| `TASKS` | `ai/NEXT_TASKS.md` | ai | Required | Aktif wave'e ait sıralı uygulanabilir görevler |
| `DECISIONS` | `ai/DECISIONS.md` | ai | Required | Mimari, tasarım ve ürün kararları |
| `AGENT-INST` | `ai/AGENT_INSTRUCTIONS.md` | ai | Required | Ajan çalışma, okuma ve wave yürütme talimatları |
| `PROJ-PLAN` | `project/PROJECT_PLAN.md` | project | Required | Fazlar, milestone'lar ve teslimat yaklaşımı |
| `DESIGN` | `design/DESIGN_RULES.md` | design | Required | Visual language, tipografi, kompozisyon ve responsive taban |
| `WAVE-MAP` | `waves/WAVE_MAP.md` | waves | Required | 5 dalgalı delivery roadmap ve dependency haritası |
| `WAVE-PLAN` (00) | `waves/plans/WAVE_00.md` | waves | Dynamic Instance | Foundation & Setup Wave Planı |
| `WAVE-PLAN` (01) | `waves/plans/WAVE_01.md` | waves | Dynamic Instance | Hero & Corporate Identity Surface Wave Planı |
| `WAVE-PLAN` (02) | `waves/plans/WAVE_02.md` | waves | Dynamic Instance | Services Presentation Surface Wave Planı |
| `WAVE-PLAN` (03) | `waves/plans/WAVE_03.md` | waves | Dynamic Instance | Contact & Conversion Surface Wave Planı |
| `WAVE-PLAN` (04) | `waves/plans/WAVE_04.md` | waves | Dynamic Instance | Cross-Cutting Quality Assurance Wave Planı |

## 4. Hariç Bırakılan Dokümanlar

- `DATA`: Gerçek veritabanı veya karmaşık kalıcı veri modeli approved scope dışındadır (sahte DB şeması uydurulmaz).
- `API`: Gerçek backend API surface approved scope dışındadır (sahte API contract uydurulmaz; mock adapter interface `TECH_CONTEXT` içinde tanımlanır).
- `TEST`: Sadece unit/integration test stratejisi conditional belgedir; frontend demo scope'unda `WAVE_04` QA dalgası yeterlidir.
- `DEPLOY` / `OPS`: Production canlıya alma ve operasyon kapsam dışıdır.
- `DESIGN-SYSTEM` / `GLOBAL-SHELL` / `PAGE-DESIGN` / `SYSTEM-STATES`: `design_planning: light` profili gereği `DESIGN_RULES.md` tek canonical tasarım otoritesi olarak seçilmiştir.

## 5. Uygulanan Paket Eklentileri (Extensions)

- **`existing-project` Extension**: Mevcut sitenin doğrulanmış marka, hizmet ve yetkili servis bilgilerini current reality olarak korur; transition scope'u yönetir.
- **`PLANNING_PROFILE_OVERLAY`**: `standard` implementation minimumunu ve `light` design tabanını projeye uygular.
