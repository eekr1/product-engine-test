# WAVE_MAP_TEMPLATE

## Template Metadata

```yaml
template_id: wave-map-template
template_name: Canonical Wave Map Template
document_id: WAVE-MAP
version: 2.0.0
status: active
template_type: document
category: waves
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
  - product_rules
  - tech_context
conditional_inputs:
  - design_documents
  - data_model
  - api_contracts
  - test_strategy
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
  - TECH-CTX
output_filename: WAVE_MAP.md
```

## Amaç

Projenin implementation yolunu baştan sona anlamlı delivery wave'lerine bölen; her wave'in amacı, scope boundary'si, dependency'si, ana deliverable'ı ve exit kriterini üst seviyede tanımlayan canonical haritadır.

## Kullanım Koşulları

`implementation_planning: standard | full` olan implementation-bearing projelerde zorunludur. Delivery profile'ın Prototype olması bu belgeyi kapsam dışı bırakmaz.

## Zorunlu Bölümler

- Wave Architecture Principles
- Wave Map Summary
- Dependency Chain
- Wave Entries
- Cross-Wave Invariants
- Global Exit / Handoff Rules

## İçerik Üretim Kuralları

- Wave'ler repository folder'larına göre değil anlamlı teslim sonuçlarına göre bölünmelidir.
- Wave 00, projenin ilk uygulanabilir foundation/bootstrapping adımını temsil etmelidir; boş formalite wave'i olmamalıdır.
- Her wave tek bir anlamlı goal taşır.
- Dependency zinciri açık olmalı; circular dependency olamaz.
- Design/data/API/test belgeleri applicable ise wave scope bunlarla hizalanmalıdır.
- `full` planning daha granüler dependency/risk planning getirebilir; yapay wave çoğaltamaz.
- Bütün approved scope en az bir wave'e map edilmeli, hiçbir wave approved scope dışı iş icat etmemelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{WAVE_ARCHITECTURE_PRINCIPLES}}`
- `{{WAVES_SUMMARY_TABLE}}`
- `{{DEPENDENCY_CHAIN}}`
- `{{WAVE_ENTRIES_LIST}}`
- `{{CROSS_WAVE_INVARIANTS}}`
- `{{GLOBAL_EXIT_HANDOFF_RULES}}`

## Validation Beklentileri

- Approved scope coverage tam olmalı.
- Wave dependency chain acyclic ve uygulanabilir olmalı.
- Her wave için WAVE-PLAN dynamic instance üretilebilmelidir.
- WAVE_MAP ile PROJECT_PLAN aynı teslim sırasını anlatmalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Wave Map

## 1. Wave Architecture Principles

{{WAVE_ARCHITECTURE_PRINCIPLES}}

## 2. Wave Map Summary

{{WAVES_SUMMARY_TABLE}}

## 3. Dependency Chain

{{DEPENDENCY_CHAIN}}

## 4. Wave Entries

{{WAVE_ENTRIES_LIST}}

## 5. Cross-Wave Invariants

{{CROSS_WAVE_INVARIANTS}}

## 6. Global Exit / Handoff Rules

{{GLOBAL_EXIT_HANDOFF_RULES}}

# OUTPUT DOCUMENT END
