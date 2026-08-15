# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 3.5.0
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
Tek bir WAVE_MAP entry'sini başka bir planlama turu gerektirmeden uygulanabilir execution contract haline getirir.

## Required Point-of-Use Quality Calibration

**Her gerçek WAVE_PLAN ayrı generation checkpoint'tir.** Bir kez reference/template okuyup birden fazla planı batch yazmak geçersizdir.

Her exact `WAVE_NN` için required order:

```text
fresh templates/waves/WAVE_PLAN_TEMPLATE.md
→ exact WAVE_NN parent entry in current WAVE_MAP
→ AT LEAST ONE isolated depth reference re-opened for THIS wave
→ current project authorities / source-FCL as applicable
→ generate ONLY WAVE_NN
→ atomize + validate + repair
→ close checkpoint
```

### Zero-Reference Is Invalid

Bir wave checkpoint'i **0 quality-reference read ile kapatılamaz**.

```text
QUALITY_REF_READ_COUNT(WAVE_NN) >= 1
```

Aynı reference önceki wave'de okunmuş olsa bile current wave için yeniden açılmalıdır. Önceki wave'in reference read'i reuse edilemez.

Relevant isolated depth references:

```text
UI / page / feature / content surface / responsive / cross-surface QA delivery
→ ref/waves/WAVE_07_HOME_REFERENCE.md

runtime / lifecycle / state-heavy / data-service-foundation delivery
→ ref/waves/WAVE_12_RUNTIME_REFERENCE.md

hybrid wave
→ applicable parts of both references
```

Wave yukarıdaki kategorilerden birine kusursuz oturmuyorsa **en yakın depth pattern'i seçmek zorunludur; reference read'i atlamak seçenek değildir**.

Reference seçimi current wave'in karakterine göre yapılır:

```text
foundation/service/data contract -> runtime reference preferred
UI/content/contact/services/hero/about -> home/UI reference preferred
responsive/integration/presentation QA -> home/UI reference preferred
hybrid UI + runtime/state -> both allowed
```

Reference read canonical fresh `WAVE_PLAN_TEMPLATE.md` read-token yerine geçmez.

Reference'ten alınabilecek şeyler:

```text
why-this-wave depth
dependency clarity
implementation task granularity
file/area responsibility clarity
data/state flow reasoning
role/state/responsive/edge coverage
verification depth
exit/handoff precision
```

MUST NOT:

- Vibehall scope, filename, component, route, technology veya architecture'i kopyalamak,
- Vibehall wave count/name sırasını current projeye taşımak,
- reference'teki `[x]`, QA-closed, test result, tarih veya completion claim'ini kopyalamak,
- parent WAVE_MAP'te olmayan reference capability'yi current plan'a eklemek.

## Parent Wave Boundary

WAVE_PLAN scope keşfetmez; WAVE_MAP'te freeze edilmiş exact parent wave entry'yi detaylandırır.

Canonical invariant:

```text
WAVE_PLAN capability atoms ⊆ exact parent WAVE_MAP Committed Capabilities
```

Plan component/file/task/verification seviyesinde detaylandırabilir fakat yeni capability ekleyemez.

## Parent Capability Coverage

Her plan parent WAVE_MAP entry'deki `Committed Capabilities` listesini aynen yeniden resolve eder ve kendi executable capability'lerini atomik biçimde karşılaştırır.

Zorunlu tablo:

```text
Plan Capability | Parent Capability | Relation | Result
```

Allowed relation yalnız:

```text
detail-of
implementation-of
verification-of
```

`new-capability`, `adjacent-capability`, `inferred-capability` sonucu FAIL'dir.

Örnek:

```text
ContactSection markup | phone/email contact presentation | implementation-of | PASS
Footer quick links | <no parent capability> | new-capability | FAIL
Static map card | <no parent capability> | inferred-capability | FAIL
```

Bir capability parent Goal'ın genel anlamından türetilemez; exact parent `Committed Capabilities`, `In Scope` veya `Primary Deliverables` içinde açık semantik support gerekir.

## Content Truth Boundary

Her factual claim için:

```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

### Factual Modifier Guard

Planning depth gerçek-dünya/firma/domain bilgisini genişletme izni değildir.

Aşağıdakiler teknik implementation detail değildir; factual claim/modifier olarak kabul edilir ve exact FCL support gerektirir:

```text
hizmet adına yeni qualifier eklemek
hizmetin nasıl/nerede/ne hızda verildiğini açıklamak
stok/orijinallik/garanti iddiası
acil müdahale / mobil filo / SLA / yanıt süresi
periyodik bakım / revizyon / spesifik makine-alt sistem uzmanlığı
çalışma saatleri / şube / servis ağı / coğrafi garanti
müşteri / sertifika / başarı / partnerlik / referans iddiası
```

Örnek:

```text
FCL: Yerinde Teknik Destek
Allowed: "Yerinde Teknik Destek" başlığının presentation/layout kararı
Not allowed without exact support: "arıza müdahalesi", "mobil servis", "acil teknik destek"

FCL: Makine Bakım ve Onarım
Allowed: kart/component/layout/CTA implementation detail
Not allowed without exact support: "periyodik bakım", "revizyon", "hidrolik pres", "güç ünitesi"
```

“marketing copy”, “technical detail”, “regional context”, “kısa açıklama” veya “card description” etiketi bu sınırı gevşetmez.

Teknik implementation kararları FCL gerektirmez; grid, component boundary, CSS transition, responsive behavior, adapter/file structure gibi kararlar current authorities içinde Engine tarafından resolve edilebilir.

## Delivery Profile Wording Guard

Plan approved delivery profile'dan daha yüksek maturity iddia edemez.

```text
Prototype -> demo-ready / validated prototype / sales-demo ready allowed
Prototype -> implementation-ready / production-ready / launch-ready forbidden
Implementation Ready -> production-ready forbidden unless profile changes through approval
Production Ready -> production-ready allowed
```

Bu guard yalnız wording değil, Handoff / Exit / Expected Result / Acceptance alanlarındaki maturity iddialarına da uygulanır.

## Pre-Execution State

```text
Status = Ready for Execution | Pending Execution | Blocked
Implementation Checklist = [ ]
Acceptance / Exit Criteria = [ ]
Wave Result = pending / not executed
```

Reference artifact'lerdeki tamamlanmış state bu semantic'i değiştiremez.

## Zorunlu Bölümler

- Wave Identity & Status
- Parent Wave Map Entry
- Parent Capability Coverage
- Goal
- Why This Wave / Dependency Rationale
- Canonical Sources to Read
- Dependencies
- In Scope / Out of Scope
- Expected Result / Target Structure
- Implementation Checklist
- State / Role / Responsive Coverage
- Automated Verification
- Manual QA / Debug Verification
- Acceptance / Exit Criteria
- Handoff / Stop Rule
- Wave Result

## Implementation-Ready Depth Standardı

Bir WAVE_PLAN, fresh capable agent'ın wave'i uygulamaya başlamadan önce **ikinci bir implementation-planning turu yapmak zorunda kalmadığı** kadar açık olmalıdır.

Plan yalnız “component oluştur”, “responsive yap”, “test et” gibi broad görev listesi olamaz.

Fresh agent aşağıdaki soruları yeniden icat etmek zorunda kalıyorsa task yetersizdir:

```text
Değişiklik hangi exact file/area/responsibility içinde yapılacak?
Bu unit neyin sahibi olacak, neyin sahibi olmayacak?
Hangi mevcut dependency/contract tüketilecek?
Data/state/interaction bu görevde nasıl akacak?
Normal state dışında hangi applicable loading/empty/error/role/responsive/edge davranışları var?
Hangi existing behavior korunmalı?
Bu task'ın yapmaması gereken adjacent işler neler?
Completion hangi otomatik/manual/debug kanıtıyla doğrulanacak?
Wave kapanınca sonraki wave'e hangi somut boundary bırakılacak?
```

Her proje her kategoriye sahip olmak zorunda değildir; yalnız **applicable** detaylar yazılır. Derinlik gereksiz complexity veya uydurma architecture üretme izni değildir.

## Task Derinlik Standardı

Her task yalnız tek satırlık imperative olamaz. Applicable olduğu ölçüde task şu mini-contract'ı taşımalıdır:

```text
Task / Result
Location / Responsibility
Parent Capability Relation
Inputs / Dependencies / Contracts
Implementation Behavior
Applicable States / Responsive / Edge Cases
Preserve / Must Not
FCL / Source Boundary if factual
Verification
Concrete Done Result
```

Task aynı coherent responsibility altında birkaç alt-adımı birleştirebilir; amaç yapay satır sayısı değil, execution ambiguity'yi kaldırmaktır.

Task yazıldıktan sonra iki ayrı diff zorunludur:

```text
CAPABILITY DIFF: task parent map'e yeni surface/behavior/deliverable ekliyor mu?
FACT DIFF: task/prose exact FCL'den daha geniş gerçek-dünya anlamı taşıyor mu?
```

İkisinden biri genişliyorsa write öncesi repair/remove edilir.

### Insufficient task example

```text
- Hero component oluştur ve responsive yap.
```

### Implementation-ready direction example

```text
- Hero presentation responsibility:
  - location: current project architecture'deki exact hero/presentation area
  - consumes: approved company identity + exact contact CTA data through current service/data boundary
  - owns: hero hierarchy, primary copy presentation, CTA layout/states
  - does not own: service cards, form/map/WhatsApp, global footer
  - responsive: current design rules altında mobile stacking + CTA touch target behavior
  - verification: render/link protocol/responsive manual checks
  - done: fresh agent'ın layout/data/CTA responsibility kararı vermeden implement edebileceği net result
```

Bu örnek current project filename/stack icat etme izni değildir; actual location ve contract current authorities'den resolve edilir.

## Per-Instance Stop Rule

Bir `WAVE_NN` planı yazıldıktan sonra aynı checkpoint içinde `WAVE_NN+1` yazılamaz.

```text
WRITE WAVE_NN
→ boundary diff
→ factual diff
→ profile wording diff
→ repair
→ checkpoint CLOSE
→ NEXT checkpoint starts with NEW fresh WAVE_PLAN_TEMPLATE read
```

Checkpoint CLOSE öncesi ayrıca:

```text
current wave quality-reference read count >= 1
```

olmalıdır. Aksi halde checkpoint invalid'dir ve write yeniden point-of-use calibration ile repair edilmelidir.

Aşağıdaki event pattern invalid'dir:

```text
read WAVE_PLAN_TEMPLATE once
read refs once
write WAVE_00
write WAVE_01
write WAVE_02
...
```

Aşağıdaki pattern de invalid'dir:

```text
read fresh WAVE_PLAN_TEMPLATE
read parent
write WAVE_NN
# no quality reference read for this wave
```

Doğru pattern:

```text
read fresh template
read exact parent
read relevant ref
write WAVE_00
CLOSE

read fresh template
read exact parent
read relevant ref
write WAVE_01
CLOSE
```

## Parent Boundary Stop Rule

Bir task/deliverable parent capability atomundan açıkça türetilemiyorsa:

```text
DO NOT ADD TO PLAN
→ mark candidate as unsupported
→ return to WAVE_MAP / approved scope
→ repair upstream map only if genuinely approved
→ otherwise remove candidate
```

Plan kendi parent map'ini sessizce genişletemez.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{WAVE_ID}}: {{WAVE_NAME}}

- **Status**: {{WAVE_STATUS}}
- **Parent Wave**: `{{WAVE_ID}}` in `waves/WAVE_MAP.md`
- **Goal**: {{WAVE_GOAL}}

## 1. Parent Wave Map Entry
{{PARENT_WAVE_MAP_ENTRY}}

## 2. Parent Capability Coverage
{{PARENT_CAPABILITY_COVERAGE}}

## 3. Why This Wave / Dependency Rationale
{{WHY_THIS_WAVE}}

## 4. Canonical Sources to Read
{{CANONICAL_SOURCES}}

## 5. Dependencies
{{DEPENDENCIES}}

## 6. Scope
### In Scope
{{IN_SCOPE}}
### Out of Scope
{{OUT_OF_SCOPE}}

## 7. Expected Result / Target Structure
{{EXPECTED_RESULT}}

## 8. Implementation Checklist
> Every task must resolve to an exact parent capability atom. New/adjacent/inferred capability introduced only here is invalid.
>
> Tasks must be implementation-ready: applicable responsibility location, dependency/data/state behavior, preserved boundaries and verification must be explicit enough that a fresh capable agent does not need another planning pass.
>
> Factual prose/modifiers must remain exact-FCL bounded; planning depth cannot enrich company/domain truth.
{{IMPLEMENTATION_CHECKLIST}}

## 9. State / Role / Responsive Coverage
{{STATE_ROLE_COVERAGE}}

## 10. Automated Verification
{{AUTOMATED_VERIFICATION}}

## 11. Manual QA / Debug Verification
{{MANUAL_QA}}

## 12. Acceptance / Exit Criteria
{{ACCEPTANCE_CRITERIA}}

## 13. Handoff / Stop Rule
{{HANDOFF_STOP_RULE}}

---
## Wave Result
{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
