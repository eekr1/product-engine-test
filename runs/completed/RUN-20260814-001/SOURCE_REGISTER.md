# Source Register — RUN-20260814-001

## 1. Girdi ve Sözleşme Kaynakları

- **Engine Specs**: `engine/` (Binding)
- **Input Snapshot**: `INPUT_SNAPSHOT.md` (Binding)
- **Approved Input**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Binding)

## 2. Template Sürüm Kayıtları

| Template ID | Template Path | Sürüm | Kullanım Amacı |
|---|---|---|---|
| run-manifest-template | `templates/runs/RUN_MANIFEST_TEMPLATE.md` | 1.1.0 | Operational run manifest |
| input-snapshot-template | `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md` | 1.2.0 | Operational snapshot & SCP registry |
| package-selection-template | `templates/runs/PACKAGE_SELECTION_TEMPLATE.md` | 1.0.0 | Operational package selection record |
| source-register-template | `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | 1.4.0 | Operational source & FCL register |
| project-brain-template | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | 1.2.0 | Canonical PROJECT_BRAIN |
| product-rules-template | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | 1.1.0 | Canonical PRODUCT_RULES |
| tech-context-template | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | 1.3.0 | Canonical TECH_CONTEXT |
| design-rules-template | `templates/design/DESIGN_RULES_TEMPLATE.md` | 1.1.0 | Canonical DESIGN_RULES |
| wave-map-template | `templates/waves/WAVE_MAP_TEMPLATE.md` | 1.2.0 | Canonical WAVE_MAP |
| wave-plan-template | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 1.1.0 | Canonical WAVE_PLAN dynamic instances |
| project-plan-template | `templates/project/PROJECT_PLAN_TEMPLATE.md` | 1.1.0 | Canonical PROJECT_PLAN |
| current-status-template | `templates/ai/CURRENT_STATUS_TEMPLATE.md` | 1.1.0 | Canonical CURRENT_STATUS |
| next-tasks-template | `templates/ai/NEXT_TASKS_TEMPLATE.md` | 1.1.0 | Canonical NEXT_TASKS |
| agent-instructions-template | `templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md` | 1.1.0 | Canonical AGENT_INSTRUCTIONS |
| decisions-template | `templates/ai/DECISIONS_TEMPLATE.md` | 1.1.0 | Canonical DECISIONS |
| readme-template | `templates/project/README_TEMPLATE.md` | 1.1.0 | Canonical published README |

## 3. Referans Belgeleri Kullanım Kaydı (Ref Usage)

| Ref ID | Referans Dosyası | Durum | Kullanım Seviyesi |
|---|---|---|---|
| REF-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Consumed | User-provided project start scenario brief |
| REF-02 | `https://www.trakyateknikmakine.com/` | Registered | Live site company reference |

## 4. Factual Claim Allowlist

| FCL ID | Factual Claim | Supporting Source | Exact Evidence Location |
|---|---|---|---|
| FCL-001 | Firma adı: Trakya Teknik Makine | `trakyateknikmakine.com` / `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Section 1 (Proje Kimliği) |
| FCL-002 | Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisliği | `trakyateknikmakine.com` / `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Section 8 (Mevcut Durum) |
| FCL-003 | Hizmet 1: Yedek Parça Temini | `trakyateknikmakine.com` / `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Section 8 (Mevcut Durum) |
| FCL-004 | Hizmet 2: Yerinde Teknik Destek | `trakyateknikmakine.com` / `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Section 8 (Mevcut Durum) |
| FCL-005 | Hizmet 3: Makine Bakım ve Onarım | `trakyateknikmakine.com` / `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Section 8 (Mevcut Durum) |
| FCL-006 | Mevcut web sitesi SITE123 altyapısındadır | `trakyateknikmakine.com` / `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Section 8 (Mevcut Durum) |
