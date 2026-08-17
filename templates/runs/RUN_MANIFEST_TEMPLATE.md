# RUN_MANIFEST_TEMPLATE

## Template Metadata

```yaml
template_id: run-manifest-template
template_name: Run Manifest Template
document_id: RUN-MANIFEST
version: 1.2.0
status: active
template_type: operational
category: operational
supported_packages: [all]
supported_delivery_profiles: [foundation, prototype, implementation-ready, production-ready]
required_inputs: [approved_intake]
conditional_inputs: [approved_site_architecture]
dependencies: []
output_filename: RUN_MANIFEST.md
```

## Amaç
Tek run'ın identity/lifecycle, approved input, domain package, planning profiles, approved page-set summary, dynamic instances, validation ve published output bilgisini izlenebilir tutmak.

## Zorunlu Metadata

```text
run_id
project_name / project_slug / project_type
engine_version
status / timestamps
input_id / input_version
selected_package
selection_rationale_ref
implementation_planning
design_planning
delivery_profile
approved_page_set (corporate-website ise)
documents_produced
dynamic_instances_produced
validation_result
output_version / output_ref
```

## Kurallar
- Values approved input snapshot ile birebir eşleşir.
- Corporate website'te `approved_page_set` exact PAGE-XXX identities taşır; run manifest yeni page icat etmez.
- `dynamic_instances_produced` PAGE-DESIGN/WAVE paths'ini izlenebilir tutar.
- Status yalnız RUN_PROTOCOL vocabulary'sinden gelir.
- Manifest self-report evidence'tır; independent trace değildir.

---

# OUTPUT DOCUMENT START

# Run Manifest — {{RUN_ID}}

```yaml
run_id: {{RUN_ID}}
project_name: {{PROJECT_NAME}}
project_slug: {{PROJECT_SLUG}}
project_type: {{PROJECT_TYPE}}
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
selection_rationale_ref: {{PACKAGE_SELECTION_REF}}
delivery_profile: {{DELIVERY_PROFILE}}
implementation_planning: {{IMPLEMENTATION_PLANNING}}
design_planning: {{DESIGN_PLANNING}}
approved_page_set: {{APPROVED_PAGE_SET}}
documents_produced: {{DOCUMENTS_PRODUCED}}
dynamic_instances_produced: {{DYNAMIC_INSTANCES_PRODUCED}}
validation_result: {{VALIDATION_RESULT}}
output_version: {{OUTPUT_VERSION}}
output_ref: {{OUTPUT_REF}}
```

## 1. Run Identity
- **Run ID**: {{RUN_ID}}
- **Project**: {{PROJECT_NAME}} (`{{PROJECT_SLUG}}`)
- **Project Type**: {{PROJECT_TYPE}}
- **Package**: {{PACKAGE_ID}}
- **Delivery Profile**: {{DELIVERY_PROFILE}}
- **Implementation Planning**: {{IMPLEMENTATION_PLANNING}}
- **Design Planning**: {{DESIGN_PLANNING}}
- **Engine Version**: {{ENGINE_VERSION}}

## 2. Approved Site Architecture Snapshot
{{APPROVED_PAGE_SET_BLOCK}}

## 3. Lifecycle
- **Status**: {{RUN_STATUS}}
- **Stage**: {{CURRENT_STAGE}}
- **Validation**: {{VALIDATION_RESULT}}

## 4. Produced Documents / Instances
- **Canonical Documents**: {{DOCUMENTS_PRODUCED}}
- **Dynamic Instances**: {{DYNAMIC_INSTANCES_PRODUCED}}

## 5. Output
- **Version**: {{OUTPUT_VERSION}}
- **Ref**: `{{OUTPUT_REF}}`

# OUTPUT DOCUMENT END
