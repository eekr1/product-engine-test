# RUN_MANIFEST_TEMPLATE

## Template Metadata

```yaml
template_id: run-manifest-template
template_name: Run Manifest Template
document_id: RUN-MANIFEST
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
dependencies: []
output_filename: RUN_MANIFEST.md
```

## Amaç

Tek bir Product Engine run'ının kimliğini, yaşam döngüsünü, base package'ını, planning profile'larını, input snapshot'ını, seçilen document setini ve yayınlanan output'u izlenebilir biçimde kaydetmek.

## Kullanım Koşulları

Her run için zorunludur.

## Zorunlu Metadata

- run_id
- project_name / project_slug
- engine_version
- status
- timestamps
- input_id / input_version
- selected_package
- implementation_planning
- design_planning (applicable ise)
- delivery_profile
- documents_produced
- dynamic_instances_produced
- validation_result
- output_version / output_ref

## İçerik Üretim Kuralları

- Planning profile değerleri approved input snapshot ile birebir aynı olmalıdır.
- UI/UX applicable olmayan projede `design_planning` `N/A` olarak kaydedilebilir; `none` profile icat edilmez.
- Dynamic instance listesinde page/feature/wave instance path'leri izlenebilir tutulmalıdır.
- Status yalnız RUN_PROTOCOL canonical vocabulary'sinden seçilir.

## Placeholder Tanımları

- `{{RUN_ID}}`
- `{{PROJECT_NAME}}`
- `{{PROJECT_SLUG}}`
- `{{ENGINE_VERSION}}`
- `{{RUN_STATUS}}`
- `{{CREATED_AT}}`
- `{{UPDATED_AT}}`
- `{{COMPLETED_AT}}`
- `{{AGENT_ID}}`
- `{{INPUT_ID}}`
- `{{INPUT_VERSION}}`
- `{{PACKAGE_ID}}`
- `{{DELIVERY_PROFILE}}`
- `{{IMPLEMENTATION_PLANNING}}`
- `{{DESIGN_PLANNING}}`
- `{{DOCUMENTS_PRODUCED}}`
- `{{DYNAMIC_INSTANCES_PRODUCED}}`
- `{{VALIDATION_RESULT}}`
- `{{OUTPUT_VERSION}}`
- `{{OUTPUT_REF}}`

## Validation Beklentileri

- Approved input profile değerleriyle tam eşleşme.
- Produced document listesi package + planning overlay resolution ile uyumlu olmalı.
- Completed run active/ altında kalmamalı.

---

# OUTPUT DOCUMENT START

# Run Manifest — {{RUN_ID}}

```yaml
run_id: {{RUN_ID}}
project_name: {{PROJECT_NAME}}
project_slug: {{PROJECT_SLUG}}
engine_version: {{ENGINE_VERSION}}
run_type: generation
status: {{RUN_STATUS}}
created_at: {{CREATED_AT}}
updated_at: {{UPDATED_AT}}
completed_at: {{COMPLETED_AT}}
agent_id: {{AGENT_ID}}
input_id: {{INPUT_ID}}
input_version: {{INPUT_VERSION}}
selected_package: {{PACKAGE_ID}}
delivery_profile: {{DELIVERY_PROFILE}}
implementation_planning: {{IMPLEMENTATION_PLANNING}}
design_planning: {{DESIGN_PLANNING}}
documents_produced: {{DOCUMENTS_PRODUCED}}
dynamic_instances_produced: {{DYNAMIC_INSTANCES_PRODUCED}}
validation_result: {{VALIDATION_RESULT}}
output_version: {{OUTPUT_VERSION}}
output_ref: {{OUTPUT_REF}}
```

## 1. Run Identity

- **Run ID**: {{RUN_ID}}
- **Project**: {{PROJECT_NAME}} (`{{PROJECT_SLUG}}`)
- **Package**: {{PACKAGE_ID}}
- **Delivery Profile**: {{DELIVERY_PROFILE}}
- **Implementation Planning**: {{IMPLEMENTATION_PLANNING}}
- **Design Planning**: {{DESIGN_PLANNING}}
- **Engine Version**: {{ENGINE_VERSION}}

## 2. Lifecycle

- **Status**: {{RUN_STATUS}}
- **Stage**: {{CURRENT_STAGE}}
- **Validation**: {{VALIDATION_RESULT}}

## 3. Produced Documents / Instances

- **Canonical Documents**: {{DOCUMENTS_PRODUCED}}
- **Dynamic Instances**: {{DYNAMIC_INSTANCES_PRODUCED}}

## 4. Output

- **Version**: {{OUTPUT_VERSION}}
- **Ref**: `{{OUTPUT_REF}}`

# OUTPUT DOCUMENT END
