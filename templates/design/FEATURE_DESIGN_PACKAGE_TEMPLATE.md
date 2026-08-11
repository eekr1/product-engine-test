# FEATURE_DESIGN_PACKAGE_TEMPLATE

## Template Metadata

```yaml
template_id: feature-design-package-template
template_name: Feature Design Package Template
document_id: FEATURE-DESIGN
version: 1.0.0
status: active
template_type: dynamic-document
category: design
supported_packages:
  - all-ui
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_design_planning:
  - full
required_inputs:
  - product_rules
  - design_rules
  - design_system
conditional_inputs:
  - page_design_instances
  - system_states
dependencies:
  - DESIGN
  - DESIGN-SYSTEM
  - PRODUCT-RULES
output_filename_pattern: <FEATURE_SLUG>_DESIGN_PACKAGE.md
```

## Amaç

Tek bir karmaşık veya cross-screen feature'ın uçtan uca UX akışını, interaction modelini, state machine benzeri durumlarını, page/screen ilişkilerini ve edge-case davranışlarını tanımlamak.

## Instance Kuralı

Bu template yalnız `design_planning: full` projelerde ve gerçek feature karmaşıklığı bunu gerektiriyorsa kullanılır.

Basit bir page section veya tek button interaction'ı feature package'a dönüştürülmez.

Örnek instance'lar:

```text
ROOM_LIFECYCLE_DESIGN_PACKAGE.md
MATCHING_FLOW_DESIGN_PACKAGE.md
CHECKOUT_FLOW_DESIGN_PACKAGE.md
```

## Zorunlu Bölümler

- Feature Identity & Goal
- Entry / Exit Points
- End-to-End Flow
- Participating Pages / Screens
- Interaction & State Model
- Loading / Error / Recovery
- Responsive / Cross-Device Behavior
- Accessibility
- Data / Service Touchpoints
- Edge Cases
- Acceptance Criteria

## İçerik Üretim Kuralları

- Page package'ların layout ownership'ini tekrar etmez.
- Feature'ın cross-screen davranışını ve state transitions'ını sahiplenir.
- SYSTEM_STATES varsa ortak state standardını kullanır.
- Backend/API henüz approved değilse endpoint uydurmaz; yalnız service boundary/touchpoint belirtir.
- UX flow gerçek product rules kapsamını aşamaz.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{FEATURE_NAME}}`
- `{{FEATURE_SLUG}}`
- `{{FEATURE_GOAL}}`
- `{{ENTRY_EXIT_POINTS}}`
- `{{END_TO_END_FLOW}}`
- `{{PARTICIPATING_SURFACES}}`
- `{{INTERACTION_STATE_MODEL}}`
- `{{RECOVERY_BEHAVIOR}}`
- `{{RESPONSIVE_BEHAVIOR}}`
- `{{ACCESSIBILITY_NOTES}}`
- `{{DATA_SERVICE_TOUCHPOINTS}}`
- `{{EDGE_CASES}}`
- `{{ACCEPTANCE_CRITERIA}}`

## Validation Beklentileri

- Page design instance'ları ve product rules ile çelişmemeli.
- Feature package'ın varlığı gerçek cross-screen/complex behavior ile gerekçelendirilmiş olmalı.
- State transition'lar ölçülebilir ve uygulanabilir olmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{FEATURE_NAME}} Design Package

- **Feature**: {{FEATURE_NAME}}
- **Slug**: `{{FEATURE_SLUG}}`
- **Amaç**: {{FEATURE_GOAL}}

## 1. Entry / Exit Points

{{ENTRY_EXIT_POINTS}}

## 2. End-to-End Flow

{{END_TO_END_FLOW}}

## 3. Participating Pages / Screens

{{PARTICIPATING_SURFACES}}

## 4. Interaction & State Model

{{INTERACTION_STATE_MODEL}}

## 5. Loading / Error / Recovery

{{RECOVERY_BEHAVIOR}}

## 6. Responsive / Cross-Device Behavior

{{RESPONSIVE_BEHAVIOR}}

## 7. Accessibility

{{ACCESSIBILITY_NOTES}}

## 8. Data / Service Touchpoints

{{DATA_SERVICE_TOUCHPOINTS}}

## 9. Edge Cases

{{EDGE_CASES}}

## 10. Acceptance Criteria

{{ACCEPTANCE_CRITERIA}}

# OUTPUT DOCUMENT END
