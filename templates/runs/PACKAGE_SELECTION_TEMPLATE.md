# PACKAGE_SELECTION_TEMPLATE

## Template Metadata

```yaml
template_id: package-selection-template
template_name: Package Selection Operational Template
document_id: not_applicable
version: 1.1.0
status: active
template_type: operational
category: operational
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
  - package_rules
conditional_inputs:
  - approved_site_architecture
dependencies: []
output_filename: PACKAGE_SELECTION.md
```

## Amaç
Run için seçilen base package, planning profiles, selection rationale, applicable site-architecture precondition ve resolved document/dynamic instance setini kaydetmek.

## Kurallar
- General package logic `engine/PACKAGE_RULES.md` sahibidir; bu dosya run-specific evidence tutar.
- Base package approved project type/domain ile uyumlu olmalıdır.
- `project_type: corporate-website` ise base package `corporate-website` olmalıdır.
- Corporate website'te approved PAGE registry mevcut olmalı ve exact page-set summary kaydedilmelidir.
- Demo/Prototype wording corporate domain'i override edemez.
- Included/excluded docs catalog + planning overlay ile uyumlu olmalıdır.

---

# OUTPUT DOCUMENT START

# Package Selection — {{RUN_ID}}

## 1. Selected Domain / Package / Profiles
- **Project Type**: {{PROJECT_TYPE}}
- **Base Package**: {{BASE_PACKAGE_ID}}
- **Delivery Profile**: {{DELIVERY_PROFILE}}
- **Implementation Planning**: {{IMPLEMENTATION_PLANNING}}
- **Design Planning**: {{DESIGN_PLANNING}}

## 2. Selection Rationale
{{SELECTION_RATIONALE}}

## 3. Site Architecture Precondition
{{SITE_ARCHITECTURE_SELECTION_BLOCK}}

## 4. Included Documents / Dynamic Instances
{{INCLUDED_DOCS_TABLE}}

## 5. Excluded Documents
{{EXCLUDED_DOCS_TABLE}}

[CONDITIONAL: include only if package extensions are applied]
## 6. Extensions
{{EXTENSIONS_BLOCK}}

# OUTPUT DOCUMENT END
