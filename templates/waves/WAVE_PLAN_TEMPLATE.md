# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 2.0.0
status: active
template_type: dynamic-document
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
  - wave_map
  - tech_context
conditional_inputs:
  - product_rules
  - design_documents
  - test_strategy
dependencies:
  - WAVE-MAP
  - TECH-CTX
output_filename_pattern: waves/plans/WAVE_<NN>.md
```

## Amaç

Tek bir implementation wave'ini başka bir mimari planlama turu gerektirmeden uygulanabilir hâle getiren canonical execution contract'ıdır.

Her wave için aynı template kullanılır. Yeni wave yeni Document ID değildir.

## Wave Boyutu İlkesi

Bir wave:

- tek anlamlı teslim üretmeli,
- bağımsız doğrulanabilmeli,
- dependency zinciri açık olmalı,
- makul bir çalışma oturumunda ilerletilebilir olmalı,
- gereksiz mikro-wave veya dev mega-wave olmamalıdır.

Görev sayısı kota değildir; scope coherence esastır.

## Zorunlu Bölümler

- Wave Identity & Status
- Goal
- Why This Wave / Dependency Rationale
- Canonical Sources to Read
- Dependencies
- In Scope / Out of Scope
- Implementation Checklist
- State / Role / Responsive Coverage
- Automated Verification
- Manual QA
- Acceptance / Exit Criteria
- Handoff / Stop Rule
- Wave Result (completion sonrası)

## İçerik Üretim Kuralları

- WAVE_MAP scope'unu aşamaz.
- Her task atomic ve doğrulanabilir olmalıdır.
- TECH_CONTEXT boundary'lerini değiştirecek iş varsa bunun explicit decision/clarification gerektirip gerektirmediği belirtilmelidir.
- Design scope varsa ilgili canonical design docs listelenmelidir.
- Her wave'in dependency chain'i açıkça yazılmalıdır; okuyucuya tahmin ettirilmez.
- Test/QA komutları gerçek stack biliniyorsa yazılır; bilinmeyen komut uydurulmaz.
- Kullanıcı onayı gereken checkpoint varsa açık stop rule belirtilir.
- Wave tamamlanmadan sonuç bölümü başarıyla doldurulmuş gibi gösterilmez.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{WAVE_ID}}`
- `{{WAVE_NAME}}`
- `{{WAVE_STATUS}}`
- `{{WAVE_GOAL}}`
- `{{WHY_THIS_WAVE}}`
- `{{CANONICAL_SOURCES}}`
- `{{DEPENDENCIES}}`
- `{{IN_SCOPE}}`
- `{{OUT_OF_SCOPE}}`
- `{{IMPLEMENTATION_CHECKLIST}}`
- `{{STATE_ROLE_COVERAGE}}`
- `{{AUTOMATED_VERIFICATION}}`
- `{{MANUAL_QA}}`
- `{{ACCEPTANCE_CRITERIA}}`
- `{{HANDOFF_STOP_RULE}}`
- `{{WAVE_RESULT_PLACEHOLDER}}`

## Validation Beklentileri

- Wave map'teki scope ve dependency ile birebir uyumlu olmalı.
- Acceptance criteria task listesinin gerçek sonucunu ölçmeli.
- NEXT_TASKS aktif wave'in ilk uygulanabilir görevleriyle uyumlu olmalı.
- Kapsam dışı maddeler açık olmalı.
- Kanıt olmadan tamamlanmış state yazılmamalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{WAVE_ID}}: {{WAVE_NAME}}

- **Status**: {{WAVE_STATUS}}
- **Goal**: {{WAVE_GOAL}}

## 1. Why This Wave / Dependency Rationale

{{WHY_THIS_WAVE}}

## 2. Canonical Sources to Read

{{CANONICAL_SOURCES}}

## 3. Dependencies

{{DEPENDENCIES}}

## 4. Scope

### In Scope

{{IN_SCOPE}}

### Out of Scope

{{OUT_OF_SCOPE}}

## 5. Implementation Checklist

{{IMPLEMENTATION_CHECKLIST}}

## 6. State / Role / Responsive Coverage

{{STATE_ROLE_COVERAGE}}

## 7. Automated Verification

{{AUTOMATED_VERIFICATION}}

## 8. Manual QA

{{MANUAL_QA}}

## 9. Acceptance / Exit Criteria

{{ACCEPTANCE_CRITERIA}}

## 10. Handoff / Stop Rule

{{HANDOFF_STOP_RULE}}

---

## Wave Result

> Bu bölüm wave tamamlandıktan sonra gerçek sonuç, değişen önemli alanlar, validation sonucu ve varsa kullanıcı approval bilgisiyle doldurulur. Wave başlamadan başarı sonucu uydurulmaz.

{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
