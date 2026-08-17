# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 2.0.0
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
  - validation_rules
  - capability_scope_rules
conditional_inputs:
  - approved_site_architecture
dependencies: []
output_filename: VALIDATION_REPORT.md
```

## Amaç
`engine/VALIDATION_RULES.md` uyarınca working-output ve available evidence üzerinde fail-closed canonical validation kaydı üretmek.

## Canonical Target
`runs/active/{{RUN_ID}}/working-output/`

## Zorunlu Evidence Blocks

```text
Canonical Gate Coverage
Evidence Priority / Trace Status
Dynamic Instance Coverage
Generated Artifact Capability Integrity
Corporate Page Architecture Coverage (applicable)
WAVE_MAP Capability Diff
WAVE_PLAN Parent Capability + Page Diff
Source Registry Consistency
Source → FCL → Generated Claim Checks
Continuation / Routing Evidence
Point-of-Use Dynamic Template Evidence
Validation Timing
VAL-01..VAL-19 Table
Violations / Repairs
```

## Generated Artifact Capability Integrity

Canonical semantic owner: `engine/CAPABILITY_SCOPE_RULES.md`.

Minimum global sets:

```text
GENERATED_EXECUTABLE_CAPABILITY_ATOMS
GENERATED_CAPABILITY_SUPPORT_RELATIONS
UNSUPPORTED_GENERATED_CAPABILITIES
```

Validator minimum implementation-bearing artifacts içinde executable behavior atomları arar:

```text
PRODUCT_RULES
GLOBAL_SHELL
PAGE-DESIGN instances
FEATURE-DESIGN instances (applicable)
SYSTEM_STATES when product behavior is implied
PROJECT_PLAN concrete executable deliverables
WAVE_MAP
WAVE_PLAN instances
other generated prose that introduces concrete user action/interaction/state
```

Minimum relation table:

```text
Generated Capability
Source Artifact
Exact Approved Support ID(s)
Exact Approved Support Meaning
Support Status
Executable Flag
Semantic Subset Result
Result
```

Page/surface existence child interaction support değildir.

Explicit negative test:

```text
Approved: Contact page + phone/email direct contact
Generated: form + fields + submit + success state
→ unsupported generated capabilities
→ VAL-04 FAIL
```

PAGE-DESIGN applicable ise ayrıca per-instance:

```text
PAGE_DESIGN_CAPABILITY_ATOMS
PAGE_DESIGN_SUPPORT_RELATIONS
UNSUPPORTED_PAGE_DESIGN_CAPABILITIES
```

## Corporate Page Architecture Evidence

`project_type: corporate-website` ise minimum:

```text
APPROVED_PAGE_SET
PLANNED_PAGE_SET
NAVIGATION_PAGE_SET
PAGE_DESIGN_INSTANCE_SET (design standard/full)
MISSING_MAP_PAGES
UNAPPROVED_MAP_PAGES
COLLAPSED_APPROVED_PAGES
```

Blocking rules current `engine/VALIDATION_RULES.md` sahibidir. Bu template yalnız evidence structure sağlar.

Minimum per-page table:

```text
Page ID
Approved Name / Route Identity
WAVE_MAP Coverage
Navigation Coverage
PAGE-DESIGN Instance (applicable)
Collapse Check
Result
```

## WAVE_MAP Capability Diff

Per wave:

```text
Wave ID
Map Capability Atom
Exact Approved Support ID
Support Status
Support Executable Flag
Exact Approved Support Meaning
Eligibility Result
Semantic Subset Result
Result
```

Sets:

```text
MAP_CAPABILITY_ATOMS
COMMITTED_CAPABILITY_ATOMS
HIDDEN_MAP_CAPABILITIES
SUPPORTED_MAP_CAPABILITIES
UNSUPPORTED_MAP_CAPABILITIES
```

Upstream generated design/project artifact support ID yerine kullanılamaz.

## WAVE_PLAN Parent Diff

Per plan:

```text
Plan Capability Atom → Parent Capability → Relation → Result
Plan PAGE ID → Parent Covered PAGE ID → Route/Surface Responsibility → Result
```

Sets:

```text
PLAN_CAPABILITY_ATOMS
PARENT_CAPABILITY_ATOMS
NEW_PLAN_CAPABILITIES
PLAN_PAGE_SET
PARENT_COVERED_PAGE_SET
NEW_PLAN_PAGES
```

Parent capability'nin approved semantic support'u yoksa parent relation child planı geçerli yapmaz.

## Source / FCL Evidence

```text
SOURCE_REGISTER_SOURCE_SET == VALIDATION_SOURCE_SET
FCL semantic content ⊆ exact source evidence
generated factual claim ⊆ referenced FCL
```

Page architecture factual enrichment izni değildir.

## Continuation / Routing Evidence

Frontend continuation applicable ise:

```text
CONTINUATION_EXPECTED
APPROVED_ZERO_BUILD_CONSTRAINT
SELECTED_FRONTEND_BASELINE
PACKAGE_MANIFEST
DEV_COMMAND
BUILD_COMMAND
PREVIEW_COMMAND
SAME_CODEBASE_CONTINUATION
ROUTING_PAGE_EXPANSION_PATH
```

Corporate multi-page project'te routing/page expansion approved PAGE setini distinct surfaces olarak desteklemelidir.

## Trace Evidence

```text
Observable Trace Status: AVAILABLE | UNAVAILABLE
Trace Evidence Origin
Highest Evidence Level Used
Evidence Contradictions
```

AVAILABLE yalnız validator dışındaki independent observable tool/IDE trace inspect edilmişse kullanılabilir.

Trace AVAILABLE ise PAGE-DESIGN ve WAVE_PLAN dynamic writes single-use fresh template read-token ile eşleştirilir.

```text
UNPAIRED_WRITES
REUSED_READ_TOKENS
MISSING_MAP_REFERENCE_READS
WAVES_WITH_ZERO_QUALITY_REF_READS
```

non-empty ise VAL-15 FAIL. Trace unavailable ise VAL-15 UNVERIFIED.

## Timing

```text
last required generation checkpoint
< validation_started_at
<= validation_report_created_at
< publication_at
< completion_at
```

---

# OUTPUT DOCUMENT START

# Validation Report — {{RUN_ID}}

- **Validation Result**: {{OVERALL_VALIDATION_RESULT}}
- **Validation Target**: `runs/active/{{RUN_ID}}/working-output/`
- **Validation Date**: {{VALIDATION_DATE}}

## 1. Canonical Gate Coverage
{{CANONICAL_GATE_COVERAGE}}

## 2. Evidence Priority / Observable Trace Status
{{EVIDENCE_PRIORITY_BLOCK}}

## 3. Dynamic Instance Coverage
{{DYNAMIC_INSTANCE_COVERAGE}}

## 4. Generated Artifact Capability Integrity
{{GENERATED_CAPABILITY_INTEGRITY_BLOCK}}

## 5. Corporate Page Architecture Coverage
{{PAGE_ARCHITECTURE_EVIDENCE_BLOCK}}

## 6. WAVE_MAP Capability Diff
{{WAVE_MAP_CAPABILITY_DIFF}}

## 7. WAVE_PLAN Parent Capability / Page Diff
{{WAVE_PLAN_PARENT_CAPABILITY_DIFF}}

## 8. Source Registry Consistency + Classification
{{SOURCE_REGISTRY_CONSISTENCY}}

## 9. Source → FCL → Generated Claim Checks
{{FCL_SEMANTIC_CHECKS}}

## 10. Continuation / Routing Evidence
{{CONTINUATION_ROUTING_EVIDENCE}}

## 11. External Source Consumption Checks
{{EXTERNAL_SOURCE_CHECKS}}

## 12. Point-of-Use Template + Quality-Reference Evidence
{{TRACE_TOKEN_PAIRING_BLOCK}}

## 13. Validation Timing / Chronology
{{VALIDATION_TIMING_BLOCK}}

## 14. Blocking Validation Checks
{{VALIDATION_CHECKS_TABLE}}

## 15. Violations & Evidence
{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 16. Repair Actions
{{REPAIR_ACTIONS}}

# OUTPUT DOCUMENT END
