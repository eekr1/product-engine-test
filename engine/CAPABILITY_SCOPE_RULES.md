# Capability Scope Rules

## Amaç

Bu belge Product Engine içinde **executable capability semantic authorization** kurallarının tek canonical sahibidir.

Temel soru:

> Generated bir davranış, interaction, state transition, action veya independently meaningful deliverable gerçekten approved executable scope tarafından authorize edilmiş mi?

Bu belge page architecture, factual claims veya technical stack sahibi değildir.

- page identity/architecture → `SITE_ARCHITECTURE_RULES.md` + approved input
- factual truth → SOURCE_REGISTER / FCL
- technical implementation detail → TECH_CONTEXT
- validation gate sonucu → `VALIDATION_RULES.md`

---

## 1. Exact Semantic Subset Invariant

Her generated executable capability atomu exact approved executable support'a semantic subset olmak zorundadır.

```text
GENERATED_CAPABILITY semantic meaning
⊆
EXACT_APPROVED_EXECUTABLE_SUPPORT semantic meaning
```

Support eligibility:

```text
Status ∈ {IN_SCOPE, KNOWN_DECISION}
AND
Executable = YES
```

Aşağıdakiler capability authorize edemez:

```text
VERIFIED_CURRENT_TRUTH
OPEN_QUESTION
FUTURE
OUT_OF_SCOPE
Executable = NO
```

Broad relatedness authorization değildir.

---

## 2. Surface Existence ≠ Child Capability Authorization

Bir page/screen/surface'in approved olması yalnız o surface'in varlığını, approved purpose/boundary'sini ve approved navigation identity'sini authorize eder.

```text
approved page existence
≠
all plausible interactions on that page
```

Örnek:

```text
Approved:
- Contact page
- phone direct-contact action
- email direct-contact action

NOT automatically approved:
- contact form
- form fields
- submit action
- success message/state
- validation behavior
- map
- WhatsApp
- appointment booking
```

Canonical example:

```text
phone CTA != contact form
email CTA != contact form
contact page != form
services page != filter/search
service detail page != accordion interaction
approved page != modal
```

Page purpose veya Page ID child capability support ID olarak tek başına kullanılamaz.

---

## 3. Child Interaction Atomization

Aşağıdaki sınıflar, mevcut surface ile ilişkili olsalar bile ayrı executable capability atomu olarak değerlendirilmelidir:

```text
form
input collection
submit/send behavior
success/error/retry state caused by user action
modal/dialog
accordion/tabs with product interaction semantics
search
filter/sort
upload/download action
map interaction
WhatsApp/external channel action
booking/request flow
authentication action
notification/toast caused by product behavior
persistent state
new CTA type
new external navigation/action
```

Liste exhaustive değildir. Test:

> Kullanıcı yeni bir şey yapabiliyor mu, yeni bir product response/state oluşuyor mu veya independently meaningful behavior ekleniyor mu?

YES ise ayrı capability atomudur ve exact approved support ister.

---

## 4. Implementation Detail Exception

Bir generated detail yalnız aşağıdakilerin **tamamı** sağlanıyorsa yeni capability sayılmaz:

```text
same approved behavior
+ no new user-facing action
+ no new interaction contract
+ no new data collection/submission
+ no new externally observable product state
+ no new factual/business meaning
+ no independently meaningful deliverable surface
```

Allowed implementation-detail örnekleri:

```text
approved navigation → router wiring
approved responsive UI → CSS breakpoint implementation
approved phone CTA → accessible <a href="tel:"> wiring when exact value exists
approved service card navigation → internal component composition
```

Not allowed as mere implementation detail:

```text
approved Contact page → demo form
approved phone/email → message submit flow
approved Services page → searchable/filterable service catalog
approved detail page → interactive request modal
```

---

## 5. Upstream Generated Artifact Rule

Generated artifact başka generated artifact için independent scope authority değildir.

```text
PAGE-DESIGN says "form"
≠ form approved

WAVE_MAP says "form"
≠ form approved
```

Every executable capability must trace back to exact approved executable support.

Downstream inheritance cannot launder unsupported scope:

```text
unsupported PAGE-DESIGN capability
→ copied into WAVE_MAP
→ copied into WAVE_PLAN
→ still UNSUPPORTED
```

---

## 6. PAGE-DESIGN Requirement

Her PAGE-DESIGN instance executable actions/states/components üretmeden önce capability diff yapmalıdır.

Minimum sets:

```text
PAGE_DESIGN_CAPABILITY_ATOMS
PAGE_DESIGN_SUPPORT_RELATIONS
UNSUPPORTED_PAGE_DESIGN_CAPABILITIES
```

Her capability relation minimum:

```text
Generated Capability
Exact Approved Support ID(s)
Exact Support Meaning
Semantic Subset Result
```

`UNSUPPORTED_PAGE_DESIGN_CAPABILITIES != empty` ise instance repair edilmeden checkpoint CLOSE edilemez.

---

## 7. WAVE_MAP / WAVE_PLAN Requirement

WAVE_MAP capability atomları doğrudan approved executable support'a trace edilmelidir.

Bir upstream design doc capability support authority değildir; yalnız implementation/design context olabilir.

WAVE_PLAN parent WAVE_MAP boundary'sini aşamaz. Ancak parent capability kendisi approved support'a semantic subset değilse parent'ta yazılmış olması child planı geçerli yapmaz.

---

## 8. Validation Requirement

VAL-04 minimum iki ayrı scope kontrolü yapmalıdır:

```text
A) GENERATED ARTIFACT CAPABILITY INTEGRITY
   all implementation-bearing generated artifacts
   → exact approved executable support

B) EXECUTION PLAN INTEGRITY
   WAVE_MAP → approved scope
   WAVE_PLAN → exact parent WAVE_MAP
```

Minimum global set:

```text
GENERATED_EXECUTABLE_CAPABILITY_ATOMS
GENERATED_CAPABILITY_SUPPORT_RELATIONS
UNSUPPORTED_GENERATED_CAPABILITIES
```

`UNSUPPORTED_GENERATED_CAPABILITIES != empty` → `VAL-04 FAIL`.

Validator broad page/scope relationship üzerinden PASS veremez.

Explicit failure example:

```text
Approved support:
SCP-008 = Contact page
SCP-011 = phone/email direct contact

Generated:
Interactive contact form + fields + submit + success state

Result:
UNSUPPORTED_GENERATED_CAPABILITIES includes form/submit/success-state
→ VAL-04 FAIL
```

---

## 9. Factual vs Capability Boundary

Capability approval factual claim approval değildir; factual claim de capability approval değildir.

```text
approved email address fact
≠ contact form capability

approved service fact
≠ booking/request capability
```

Both dimensions independently satisfy their own authorities.

---

# Core Invariants

```text
relatedness ≠ authorization
page existence ≠ child capability authorization
page purpose ≠ interaction approval
upstream generated artifact ≠ approved scope authority
design creativity ≠ new product behavior permission
implementation detail ≠ new interaction contract
exact executable support required for every independently meaningful behavior
unsupported scope cannot be laundered downstream
```
