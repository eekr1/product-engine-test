# PROJECT_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: project-plan-template
template_name: Project Plan Template
document_id: PROJ-PLAN
version: 1.1.0
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
dependencies:
  - PROJECT-BRAIN
  - WAVE-MAP
output_filename: PROJECT_PLAN.md
```

## Amaç

Projenin approved scope'unu üst seviyede teslim aşamalarına, milestone'lara ve wave sistemine bağlayan execution roadmap belgesidir.

## Kullanım Koşulları

`implementation_planning: standard | full` olan implementation-bearing projelerde zorunludur. Delivery profile Prototype olsa bile kaldırılmaz.

## Zorunlu Bölümler

- Delivery Strategy
- Phases / Milestones
- Wave Relationship
- Dependency Overview
- Deliverables
- Acceptance Conditions
- Scope Growth / Upgrade Boundaries

## İçerik Üretim Kuralları

- `WAVE_MAP.md` detayını tekrar etmez; üst seviye roadmap ve milestone ilişkisini açıklar.
- Plan approved scope dışına yeni feature ekleyemez.
- Demo/prototype için gelecekte production'a büyüme ihtimali varsa bunu roadmap boundary olarak gösterebilir; future scope bugünkü committed scope gibi yazılamaz.
- Implementation planning full ise daha ayrıntılı cross-system dependency/risk notları eklenebilir.
- Yapay takvim/deadline uydurulmaz. Tarih verilmemişse dependency/order temelli plan kullanılır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{DELIVERY_STRATEGY}}`
- `{{PHASES_MILESTONES}}`
- `{{WAVE_RELATIONSHIP}}`
- `{{DEPENDENCY_OVERVIEW}}`
- `{{DELIVERABLES}}`
- `{{ACCEPTANCE_CONDITIONS}}`
- `{{UPGRADE_BOUNDARIES}}`

## Validation Beklentileri

- WAVE_MAP ile aynı uygulama sırasını anlatmalı.
- Approved intake kapsamı dışına çıkmamalı.
- Future scope ile current scope ayrılmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Project Plan

## 1. Delivery Strategy

{{DELIVERY_STRATEGY}}

## 2. Phases / Milestones

{{PHASES_MILESTONES}}

## 3. Wave Relationship

{{WAVE_RELATIONSHIP}}

## 4. Dependency Overview

{{DEPENDENCY_OVERVIEW}}

## 5. Deliverables

{{DELIVERABLES}}

## 6. Acceptance Conditions

{{ACCEPTANCE_CONDITIONS}}

## 7. Scope Growth / Upgrade Boundaries

{{UPGRADE_BOUNDARIES}}

# OUTPUT DOCUMENT END
