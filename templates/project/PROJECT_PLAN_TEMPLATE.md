# PROJECT_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: project-plan-template
template_name: Project Plan Template
document_id: PROJ-PLAN
version: 1.2.0
status: active
template_type: document
category: project
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_implementation_planning:
  - standard
  - full
required_inputs:
  - approved_intake
  - project_brain
  - wave_map
conditional_inputs:
  - approved_site_architecture
dependencies:
  - PROJECT-BRAIN
  - WAVE-MAP
output_filename: PROJECT_PLAN.md
```

## Amaç
Approved scope'u ve applicable approved site architecture'ı üst seviye delivery phases/milestones ile WAVE_MAP execution modeline bağlayan roadmap belgesidir.

## Kurallar
- `WAVE_MAP.md` detayını tekrar etmez.
- Approved scope veya PAGE registry dışına yeni feature/page ekleyemez.
- Corporate website'te milestone/deliverable özetleri approved PAGE-XXX setinin tamamını kapsamalıdır.
- Distinct approved page'leri tek landing milestone/surface altında görünmez kılamaz.
- Wave grouping allowed; page omission/collapse forbidden.
- Prototype/demo future growth boundary gösterebilir; current page breadth'i düşüremez.
- Yapay tarih/deadline uydurulmaz.

## Validation
- WAVE_MAP ile aynı implementation order/coverage reality'yi anlatmalı.
- Corporate website ise `PROJECT_PLAN_PAGE_SET == APPROVED_PAGE_SET` olmalı.
- Future vs current scope ayrılmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Project Plan

## 1. Delivery Strategy
{{DELIVERY_STRATEGY}}

## 2. Approved Site / Surface Delivery Scope
{{SITE_ARCHITECTURE_DELIVERY_SCOPE}}

## 3. Phases / Milestones
{{PHASES_MILESTONES}}

## 4. Wave Relationship
{{WAVE_RELATIONSHIP}}

## 5. Dependency Overview
{{DEPENDENCY_OVERVIEW}}

## 6. Deliverables
{{DELIVERABLES}}

## 7. Acceptance Conditions
{{ACCEPTANCE_CONDITIONS}}

## 8. Scope Growth / Upgrade Boundaries
{{UPGRADE_BOUNDARIES}}

# OUTPUT DOCUMENT END
