# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 2.6.0
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
  - input_snapshot_scope_registry
  - source_register_fcl
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

Tek bir implementation wave'ini başka bir mimari/teknik planlama turu gerektirmeden uygulanabilir hâle getiren canonical execution contract'ıdır.

> A wave is not a task summary. It is an execution contract.

Her wave için aynı template kullanılır. Yeni wave yeni Document ID değildir.

## Wave Boyutu İlkesi

Bir wave:

- WAVE_MAP tarafından atanmış tek coherent deliverable'ı tamamlar,
- bağımsız doğrulanabilir,
- dependency zinciri açıktır,
- gereksiz mikro-wave veya mega-wave değildir.

WAVE_PLAN kötü decomposition'ı task numaralarıyla gizleyemez. Whole-project regression/final responsive/cross-browser QA ayrı cross-cutting responsibility ise ayrı final QA wave'ine aittir.

---

# Approved Scope Boundary

Binding scope authority `INPUT_SNAPSHOT.md` içindeki Approved Scope Registry (`SCP-XXX`) kayıtlarıdır.

```text
IN_SCOPE / KNOWN_DECISION → executable task authorize edebilir
VERIFIED_CURRENT_TRUTH    → factual/reference use; yeni feature scope authorize etmez
OPEN_QUESTION / FUTURE / OUT_OF_SCOPE → executable task authorize EDEMEZ
```

Canonical kural:

> Every committed implementation task must carry one or more executable Scope Ref (`SCP-XXX`) values.

```text
TASK: Telefon CTA ekle
Scope Ref: SCP-003 (IN_SCOPE) → VALID

TASK: Teklif formu ekle
Scope Ref: SCP-101 (OPEN_QUESTION) → INVALID
```

Scope ref bulunamıyorsa task yazılmaz; WAVE_MAP/approved input'a dönülür veya clarification gerekir.

---

# Content Truth Boundary

Execution planning approved fact'i implementation task'a dönüştürebilir; yeni business gerçeği üretemez.

Factual truth authority `SOURCE_REGISTER.md` içindeki Factual Claim Allowlist (`FCL-XXX`) kayıtlarıdır.

Canonical kural:

> Referencing an FCL ID does not authorize enrichment beyond that FCL's semantic boundary.

Her generated factual claim için iki test zorunludur:

```text
1. Referenced FCL exists?
2. Generated factual claim ⊆ Referenced FCL semantic content?
```

İkinci test false ise FCL ID mevcut olsa bile claim INVALID'dir.

Allowed:

```text
FCL: "Yerinde Teknik Destek"
→ "Yerinde Teknik Destek hizmet kartını oluştur"
```

Not allowed without separate exact source support + separate FCL:

```text
arıza tespiti
sahada müdahale
mobil servis ekibi
7/24 destek
```

Allowed:

```text
FCL: "Makine Bakım ve Onarım"
→ "Makine Bakım ve Onarım bölümünü oluştur"
```

Not allowed without separate FCL:

```text
periyodik bakım
revizyon
hidrolik/mekanik alt kapsam
sertifikalı uzmanlık
```

Aynı şekilde `orijinal`, `garantili`, `hızlı`, süre/performance, yeni coğrafi kapsam veya süreç iddiaları üst-seviye service claim'den türetilemez.

Factual provenance yetersizse:

```text
remove factual enrichment
or use neutral wording tied exactly to approved claim
or stop for clarification if execution-critical
```

Design treatment, layout, interaction ve visual direction factual claim değildir.

---

# Pre-Execution State Semantics

Generation aşamasında wave henüz uygulanmamıştır:

```text
Status = Ready for Execution | Pending Execution | Blocked
Implementation Checklist = [ ]
Acceptance / Exit Criteria = [ ]
Wave Result = pending / not executed
```

Pre-execution `[x]` veya başarı sonucu yazılamaz.

## Zorunlu Bölümler

- Wave Identity & Status
- Goal
- Why This Wave / Dependency Rationale
- Canonical Sources to Read
- Dependencies
- Scope + Scope References
- In Scope / Out of Scope
- Expected Result / Target Structure
- Implementation Checklist with Scope Ref(s)
- State / Role / Responsive Coverage
- Automated Verification
- Manual QA / Debug Verification
- Acceptance / Exit Criteria
- Handoff / Stop Rule
- Wave Result

## İçerik Üretim Kuralları

- WAVE_MAP scope'unu aşamaz.
- Her executable task en az bir executable `SCP-XXX` Scope Ref taşır.
- Non-executable SCP task authorize edemez.
- Her factual business/service claim referenced FCL'nin exact semantic boundary'si içinde kalır.
- FCL ID mevcut olması tek başına yeterli provenance değildir.
- Checklist atomic, doğrulanabilir ve agent-ready olmalıdır.
- Teknik/data/service/design boundary'leri korunur.
- Başka wave deliverable'ı task içine saklanmaz.
- Test/QA komutları yalnız gerçek execution stack kesinleşmişse yazılır.
- Wave başlamadan success state yazılmaz.

## Task Derinlik Standardı

Her anlamlı task şu sorulara cevap verir:

```text
Ne yapılacak?
Hangi Scope Ref bunu authorize ediyor?
Factual claim varsa hangi FCL authorize ediyor?
Generated factual wording FCL semantic boundary içinde mi?
Beklenen sonuç nedir?
Done olduğu nasıl doğrulanacak?
```

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{WAVE_ID}}`
- `{{WAVE_NAME}}`
- `{{WAVE_STATUS}}`
- `{{WAVE_GOAL}}`
- `{{WHY_THIS_WAVE}}`
- `{{CANONICAL_SOURCES}}`
- `{{DEPENDENCIES}}`
- `{{SCOPE_REFERENCES}}`
- `{{IN_SCOPE}}`
- `{{OUT_OF_SCOPE}}`
- `{{EXPECTED_RESULT}}`
- `{{IMPLEMENTATION_CHECKLIST}}`
- `{{STATE_ROLE_COVERAGE}}`
- `{{AUTOMATED_VERIFICATION}}`
- `{{MANUAL_QA}}`
- `{{ACCEPTANCE_CRITERIA}}`
- `{{HANDOFF_STOP_RULE}}`
- `{{WAVE_RESULT_PLACEHOLDER}}`

## Validation Beklentileri

- WAVE_MAP scope/dependency ile uyumlu olmalı.
- Her committed task executable SCP ile traceable olmalı.
- Future/Open/Out-of-Scope task olmamalı.
- Her factual claim existing FCL'ye referans vermeli VE FCL semantic boundary içinde kalmalı.
- FCL'den geniş subclaim/modifier → FAIL.
- NEXT_TASKS aktif wave ile uyumlu olmalı.
- Pre-execution checkbox'lar `[ ]` olmalı.

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

### Scope References

{{SCOPE_REFERENCES}}

### In Scope

{{IN_SCOPE}}

### Out of Scope

{{OUT_OF_SCOPE}}

## 5. Expected Result / Target Structure

{{EXPECTED_RESULT}}

## 6. Implementation Checklist

> Her task `Scope Ref: SCP-XXX` taşır. Factual claim varsa yalnız referenced FCL semantic boundary içinde kalır.

{{IMPLEMENTATION_CHECKLIST}}

## 7. State / Role / Responsive Coverage

{{STATE_ROLE_COVERAGE}}

## 8. Automated Verification

{{AUTOMATED_VERIFICATION}}

## 9. Manual QA / Debug Verification

{{MANUAL_QA}}

## 10. Acceptance / Exit Criteria

{{ACCEPTANCE_CRITERIA}}

## 11. Handoff / Stop Rule

{{HANDOFF_STOP_RULE}}

---

## Wave Result

{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
