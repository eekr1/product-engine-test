# Package Selection — RUN-20260811-002

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

Proje potansiyel müşteriye gösterilecek bir kurumsal frontend demo çalışmasıdır. `demo-frontend` temel paketi seçilmiş, `PLANNING_PROFILE_OVERLAY.md` uyarınca `implementation_planning: standard` gereği agent-ready baseline belgeleri (README, PROJECT_BRAIN, PRODUCT_RULES, TECH_CONTEXT, STATUS, TASKS, DECISIONS, AGENT_INSTRUCTIONS, PROJECT_PLAN, WAVE_MAP, WAVE_PLAN instances) ve `design_planning: light` gereği `DESIGN_RULES.md` dahil edilmiştir.

## 3. Üretilecek Doküman Listesi

| Document ID | Dosya Yolu | Sorumluluk / Gerekçe |
|---|---|---|
| README-DOC | `README.md` | Read-order ve başlangıç rehberi |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | Proje amaca, bağlama ve kararlara genel bakış |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | Ürün davranış ve kapsam sınırları |
| TECH-CTX | `ai/TECH_CONTEXT.md` | Teknik stack, service boundary ve integration readiness |
| STATUS | `ai/CURRENT_STATUS.md` | Mevcut durum ve wave takibi |
| TASKS | `ai/NEXT_TASKS.md` | Sıradaki uygulanabilir görevler |
| DECISIONS | `ai/DECISIONS.md` | Teknik, ürün ve tasarım kararları |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | Ajan çalışma yönergeleri |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | Proje planı ve teslim stratejisi |
| DESIGN | `design/DESIGN_RULES.md` | Visual language ve UI/UX tabanı |
| WAVE-MAP | `waves/WAVE_MAP.md` | Üst seviye wave haritası |
| WAVE-PLAN (W00) | `waves/plans/WAVE_00.md` | Foundation & setup planı |
| WAVE-PLAN (W01) | `waves/plans/WAVE_01.md` | Core frontend demo & design assembly planı |

## 4. Hariç Bırakılan Dokümanlar

- `DESIGN-SYSTEM`, `GLOBAL-SHELL`, `PAGE-DESIGN`, `SYSTEM-STATES`: `design_planning: light` seviyesi uyarınca ayrı dokümanlar yerine `DESIGN_RULES.md` altında hafif ve yeterli biçimde kapsanmıştır.
- `DATA_MODEL`, `API_CONTRACTS`, `TEST_STRATEGY`, `DEPLOYMENT`, `OPERATIONS`: `implementation_planning: standard` ve frontend-only demo kapsamı nedeniyle koşullu/full belgeler hariç tutulmuştur.

## 5. Uygulanan Paket Eklentileri (Extensions)

- `existing-project`: Mevcut SITE123 sitesindeki doğrulanmış firma bilgileri ve hizmet yapısı kaynak olarak dondurulmuştur.
