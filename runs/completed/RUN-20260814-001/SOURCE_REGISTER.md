# Source Register — RUN-20260814-001

## 1. Girdi ve Sözleşme Kaynakları

- **Engine Specs**: `engine/` (Binding)
- **Input Snapshot**: `INPUT_SNAPSHOT.md` (Binding)
- **Approved Input**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Binding)

## 2. Template Sürüm Kayıtları

| Template ID | Target Document | Sürüm |
|---|---|---|
| `readme-template` | `README.md` | 1.0.0 |
| `project-brain-template` | `ai/PROJECT_BRAIN.md` | 1.0.0 |
| `product-rules-template` | `ai/PRODUCT_RULES.md` | 1.0.0 |
| `tech-context-template` | `ai/TECH_CONTEXT.md` | 1.0.0 |
| `current-status-template` | `ai/CURRENT_STATUS.md` | 1.0.0 |
| `next-tasks-template` | `ai/NEXT_TASKS.md` | 1.0.0 |
| `ai-decisions-template` | `ai/DECISIONS.md` | 1.0.0 |
| `agent-instructions-template` | `ai/AGENT_INSTRUCTIONS.md` | 1.0.0 |
| `project-plan-template` | `project/PROJECT_PLAN.md` | 1.0.0 |
| `design-rules-template` | `design/DESIGN_RULES.md` | 1.0.0 |
| `wave-map-template` | `waves/WAVE_MAP.md` | 1.0.0 |
| `wave-plan-template` | `waves/plans/WAVE_<NN>.md` | 1.0.0 |

## 3. Referans Belgeleri Kullanım Kaydı (Ref Usage)

| Source ID | Kaynak Yolu / URL | Tür | Kullanım Durumu | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Brief | consumed | Proje hedefleri, kapsamı ve kısıtları |
| SRC-02 | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` | Approved Input | consumed | Canonical approved project truth |

## 4. Factual Claim Allowlist

| FCL ID | Factual Claim | Kaynak ID | Kaynak Kanıt Konumu |
|---|---|---|---|
| FCL-001 | Firma adı Trakya Teknik Makine'dir. | SRC-01 | Section 1 (Proje Kimliği) |
| FCL-002 | Firma Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisidir. | SRC-01 | Section 5 (Temel Kullanıcı Akışları) / Section 8 |
| FCL-003 | Firmanın sunulan 3 temel hizmeti: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım'dır. | SRC-01 | Section 8 (Mevcut Durum) |
| FCL-004 | Mevcut web sitesi https://www.trakyateknikmakine.com/ adresindedir ve SITE123 altyapısını kullanmaktadır. | SRC-01 | Section 8 / Section 9 |
