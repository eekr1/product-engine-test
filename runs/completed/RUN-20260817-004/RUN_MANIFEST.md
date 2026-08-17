# Run Manifest — RUN-20260817-004

```yaml
run_id: RUN-20260817-004
project_name: Trakya Teknik Makine Kurumsal Web Sitesi Demo
project_slug: trakya-teknik-makine
project_type: corporate-website
engine_version: v0.3.0
run_type: generation
status: Completed
created_at: 2026-08-17T04:30:00+03:00
updated_at: 2026-08-17T04:34:30+03:00
completed_at: 2026-08-17T04:34:30+03:00
agent_id: antigravity-ai
input_id: INPUT-TRAKYA-TEKNIK-MAKINE-V1
input_version: 1
selected_package: corporate-website
selection_rationale_ref: runs/completed/RUN-20260817-004/PACKAGE_SELECTION.md
delivery_profile: Prototype
implementation_planning: standard
design_planning: standard
approved_page_set: ["PAGE-001", "PAGE-002", "PAGE-003", "PAGE-004", "PAGE-005", "PAGE-006", "PAGE-007"]
documents_produced: ["README-DOC", "PROJECT-BRAIN", "PRODUCT-RULES", "TECH-CTX", "STATUS", "TASKS", "AGENT-INST", "DECISIONS", "PROJ-PLAN", "DESIGN", "DESIGN-SYSTEM", "GLOBAL-SHELL", "SYSTEM-STATES", "PAGE-DESIGN", "WAVE-MAP", "WAVE-PLAN"]
dynamic_instances_produced: ["HOME_DESIGN_PACKAGE", "CORPORATE_DESIGN_PACKAGE", "SERVICES_DESIGN_PACKAGE", "SERVICE_DETAIL_SPARE_PARTS_DESIGN_PACKAGE", "SERVICE_DETAIL_ONSITE_SUPPORT_DESIGN_PACKAGE", "SERVICE_DETAIL_MAINTENANCE_REPAIR_DESIGN_PACKAGE", "CONTACT_DESIGN_PACKAGE", "WAVE_00", "WAVE_01", "WAVE_02", "WAVE_03", "WAVE_04"]
validation_result: PASS
output_version: v0.1
output_ref: outputs/demos/trakya-teknik-makine/latest/
```

## 1. Run Identity
- **Run ID**: RUN-20260817-004
- **Project**: Trakya Teknik Makine Kurumsal Web Sitesi Demo (`trakya-teknik-makine`)
- **Project Type**: `corporate-website`
- **Package**: `corporate-website`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `standard`
- **Engine Version**: v0.3.0

## 2. Approved Site Architecture Snapshot
| Page ID | Page Name | Route / Navigation Identity | Scope Status | Parent / Detail Relation |
|---|---|---|---|---|
| PAGE-001 | Ana Sayfa | `/` / `home` | IN_SCOPE | Root |
| PAGE-002 | Kurumsal | `/kurumsal` / `corporate` | IN_SCOPE | Child of Root |
| PAGE-003 | Hizmetler | `/hizmetler` / `services` | IN_SCOPE | Child of Root |
| PAGE-004 | Yedek Parça Temini — Hizmet Detayı | `/hizmetler/yedek-parca-temini` / `service-detail-spare-parts` | IN_SCOPE | Detail of PAGE-003 |
| PAGE-005 | Yerinde Teknik Destek — Hizmet Detayı | `/hizmetler/yerinde-teknik-destek` / `service-detail-onsite-support` | IN_SCOPE | Detail of PAGE-003 |
| PAGE-006 | Makine Bakım ve Onarım — Hizmet Detayı | `/hizmetler/makine-bakim-onarim` / `service-detail-maintenance-repair` | IN_SCOPE | Detail of PAGE-003 |
| PAGE-007 | İletişim | `/iletisim` / `contact` | IN_SCOPE | Child of Root |

## 3. Lifecycle
- **Status**: Completed
- **Stage**: Run Completed & Published
- **Validation**: PASS

## 4. Produced Documents / Instances
- **Canonical Documents**: README-DOC, PROJECT-BRAIN, PRODUCT-RULES, TECH-CTX, STATUS, TASKS, AGENT-INST, DECISIONS, PROJ-PLAN, DESIGN, DESIGN-SYSTEM, GLOBAL-SHELL, SYSTEM-STATES, PAGE-DESIGN, WAVE-MAP, WAVE-PLAN
- **Dynamic Instances**: 7 PAGE-DESIGN instances, 5 WAVE-PLAN instances

## 5. Output
- **Version**: v0.1
- **Ref**: `outputs/demos/trakya-teknik-makine/latest/`
