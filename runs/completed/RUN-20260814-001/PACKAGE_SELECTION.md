# Package Selection — RUN-20260814-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` + `corporate-website`
- **Delivery Profile**: Prototype
- **Proje Türü**: landing-page
- **Implementation Planning**: standard
- **Design Planning**: light

## 2. Seçim Gerekçesi

Proje birincil olarak potansiyel müşteriye sunulacak proaktif bir kurumsal frontend demosu olduğu için `demo-frontend` temel paketinin domain kuralları seçilmiştir. Aynı zamanda firma bilgileri ve hizmet sunumu odaklı olduğundan `corporate-website` temel paketiyle birleştirilmiştir. Mevcut yayında site bulunması sebebiyle `existing-project` paketi eklenti olarak uygulanmıştır. Planning minimumları `PLANNING_PROFILE_OVERLAY.md` üzerinden `implementation_planning: standard` ve `design_planning: light` profillerine göre çözülmüştür.

## 3. Üretilecek Doküman Listesi

| Document ID | Canonical File Path | Sorumlu Katman / Paket | Durum |
|---|---|---|---|
| README-DOC | `README.md` | Core / Overlay | Required |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | AI / Overlay | Required |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | AI / Overlay | Required |
| TECH-CTX | `ai/TECH_CONTEXT.md` | AI / Overlay | Required |
| STATUS | `ai/CURRENT_STATUS.md` | AI / Overlay | Required |
| TASKS | `ai/NEXT_TASKS.md` | AI / Overlay | Required |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | AI / Overlay | Required |
| DECISIONS | `ai/DECISIONS.md` | AI / Overlay | Required |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | Project / Overlay | Required |
| DESIGN | `design/DESIGN_RULES.md` | Design / Overlay (`design: light`) | Required |
| WAVE-MAP | `waves/WAVE_MAP.md` | Waves / Overlay | Required |
| WAVE-PLAN (00) | `waves/plans/WAVE_00.md` | Waves / Dynamic Instance | Required |
| WAVE-PLAN (01) | `waves/plans/WAVE_01.md` | Waves / Dynamic Instance | Required |
| WAVE-PLAN (02) | `waves/plans/WAVE_02.md` | Waves / Dynamic Instance | Required |
| WAVE-PLAN (03) | `waves/plans/WAVE_03.md` | Waves / Dynamic Instance | Required |
| WAVE-PLAN (04) | `waves/plans/WAVE_04.md` | Waves / Dynamic Instance | Required |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md` (DATA): Gerçek veritabanı scope dışındadır; yalnız local mock data boundary kullanılmaktadır.
- `API_CONTRACTS.md` (API): Onaylı gerçek backend/API surface yoktur; sahte API kontratı uydurulmaz.
- `TEST_STRATEGY.md` (TEST): Profil `implementation_planning: standard` olup özel karmaşık test stratejisi koşulunu tetikleyecek backend/business risk bulunmamaktadır.
- `DEPLOYMENT.md` (DEPLOY): Production deployment scope dışındadır.
- `OPERATIONS.md` (OPS): Production operasyonu scope dışındadır.
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE_DESIGN_PACKAGE.md`: `design_planning: light` profili gereği bu genişletilmiş tasarım belgeleri hariç tutulmuş, görsel yön ve kurallar `DESIGN_RULES.md` altında toplanmıştır.

## 5. Uygulanan Paket Eklentileri (Extensions)

- `EXISTING_PROJECT_PACKAGE`: Mevcut site (`trakyateknikmakine.com`) ve SITE123 altyapısından geçiş bağlamı, korunacak firma bilgileri ve dönüşüm kapsamı belgelenmiştir.
