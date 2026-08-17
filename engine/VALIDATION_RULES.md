# Validation Rules

## Amaç
Product Engine working output'unun agent-ready, source-safe, scope-safe, page-architecture-safe ve evidence-consistent olup olmadığını doğrular.

> Self-report is evidence metadata, not ground truth.

## Canonical Evidence Priority
```text
E1 — Independent observable IDE/tool execution trace
E2 — Filesystem / produced artifact state
E3 — Approved input, SCP, approved page registry, FCL, canonical contracts
E4 — PROGRESS / RUN_LOG / manifest / agent self-report
```
Higher-priority evidence wins.

## Canonical Gates
`VAL-01` .. `VAL-19` eksiksiz uygulanır; missing gate overall FAIL'dir.

Executable capability semantic authorization için canonical owner `engine/CAPABILITY_SCOPE_RULES.md`'dir. VAL-04 bu contract'ı blocking biçimde uygular.

---

## VAL-01 — Canonical Read Order

Generated/run evidence Product Engine boot/read order, point-of-use template refresh ve authority precedence ile çelişmemelidir.

## VAL-02 — Package / Document Resolution

- selected base package approved `project_type` ile uyumlu olmalıdır,
- delivery purpose project type'ı override edemez,
- `project_type: corporate-website` → base package `corporate-website`,
- corporate sales demo → `demo-frontend` base package seçilemez,
- planning overlay ve catalog applicability eksiksiz uygulanmalıdır.

Package selection mismatch → FAIL.

---

## VAL-03 — Dynamic Instance Coverage

Wave instances:

```text
EXPECTED_WAVES = set(WAVE_MAP Wave IDs)
ACTUAL_WAVES = set(actual waves/plans/WAVE_*.md)
PASS iff EXPECTED_WAVES == ACTUAL_WAVES
```

Corporate website + `design_planning: standard | full` için page-design instances:

```text
EXPECTED_PAGE_DESIGNS = APPROVED_PAGE_SET
ACTUAL_PAGE_DESIGNS = set(PAGE IDs represented by design/pages/*)
PASS iff EXPECTED_PAGE_DESIGNS == ACTUAL_PAGE_DESIGNS
```

Missing/unexpected dynamic instance → FAIL.

---

## VAL-04 — Approved Scope + Page Architecture Integrity

VAL-04 capability scope ve applicable corporate page architecture'ı birlikte doğrular.

### Stage 0 — All Generated Executable Artifact Capability Integrity

Validator yalnız WAVE_MAP/WAVE_PLAN'a bakamaz. Implementation-bearing generated artifacts içindeki independently meaningful product behavior/action/state'ler de approved executable scope'a karşı atomize edilir.

Minimum inspect surface:

```text
PRODUCT_RULES executable behaviors
TECH_CONTEXT only when it introduces product-visible capability rather than technical implementation
GLOBAL_SHELL executable navigation/actions
PAGE-DESIGN instances
FEATURE-DESIGN instances (applicable)
SYSTEM_STATES when a state implies new product behavior
PROJECT_PLAN when it introduces concrete executable capability
WAVE_MAP
WAVE_PLAN instances
other generated prose only when it introduces a concrete user action / interaction / state / deliverable
```

Canonical rule:

```text
GENERATED_CAPABILITY semantic meaning
⊆ exact approved executable support semantic meaning
```

Support eligibility:

```text
support_status ∈ {IN_SCOPE, KNOWN_DECISION}
AND
Executable = YES
```

Minimum global sets:

```text
GENERATED_EXECUTABLE_CAPABILITY_ATOMS
GENERATED_CAPABILITY_SUPPORT_RELATIONS
UNSUPPORTED_GENERATED_CAPABILITIES
```

Each support relation must identify:

```text
Generated Capability
Source Artifact
Exact Approved Support ID(s)
Exact Approved Support Meaning
Support Status
Support Executable Flag
Semantic Subset Result
```

#### Surface Existence Guard

Approved page/screen/surface existence child interaction authorization değildir.

```text
approved Contact page
≠ contact form

approved phone/email direct contact
≠ message form / input fields / submit / success state

approved Services page
≠ search/filter

approved detail page
≠ accordion/modal/request flow
```

Aşağıdaki class'lar related surface içinde mantıklı görünseler bile ayrı capability atomu sayılır ve exact approved support ister:

```text
form
input/data collection
submit/send action
success/error/retry state caused by a new action
modal/dialog
accordion/tab product interaction
search/filter/sort
upload/download action
map interaction
WhatsApp/external-channel action
booking/request flow
auth action
new CTA type
new externally observable product state
```

Page ID, page purpose, visual design decision veya generated upstream artifact tek başına bunları authorize edemez.

Generated upstream artifact scope authority değildir:

```text
PAGE-DESIGN says form
→ form approved değildir

WAVE_MAP copies form
→ unsupported scope downstream'da aklanmış olmaz
```

Implementation detail yalnız şu koşulların tamamı sağlanıyorsa ayrı capability değildir:

```text
same approved behavior
+ no new user-facing capability
+ no new interaction contract
+ no new data collection/submission
+ no new externally observable product state
+ no new factual/business meaning
+ no independently meaningful deliverable surface
```

`UNSUPPORTED_GENERATED_CAPABILITIES != empty` → VAL-04 FAIL.

### Stage A — WAVE_MAP → Approved Executable Scope

```text
WAVE_MAP committed capability atoms subset-of approved executable capability atoms
```

Validator yalnız `Committed Capabilities` satırlarını okuyup PASS veremez. Her wave için bütün executable-bearing alanları atomize eder:

```text
Wave Map Summary / Deliverables
Goal
Committed Capabilities
Covered Page IDs
In Scope
Primary Deliverables
Downstream Handoff
executable parts of Exit Boundary
other prose only when it introduces a concrete surface / behavior / deliverable
```

Per wave minimum sets:

```text
MAP_CAPABILITY_ATOMS
COMMITTED_CAPABILITY_ATOMS
HIDDEN_MAP_CAPABILITIES
SUPPORTED_MAP_CAPABILITIES
UNSUPPORTED_MAP_CAPABILITIES
```

Support eligibility:

```text
support_status ∈ {IN_SCOPE, KNOWN_DECISION}
AND
Executable = YES
```

`VERIFIED_CURRENT_TRUTH`, `OPEN_QUESTION`, `FUTURE`, `OUT_OF_SCOPE` veya `Executable=NO` capability authorize edemez.

Exact semantic support zorunludur:

```text
map capability semantic meaning ⊆ exact executable support meaning
```

Broad/generic scope adjacent surface authorize etmez. WAVE_MAP upstream PAGE-DESIGN/PROJECT_PLAN artifact'ını scope support olarak kullanamaz; exact approved executable support'a trace etmelidir.

Implementation detail yalnız `CAPABILITY_SCOPE_RULES.md` exception testini karşılıyorsa ayrı capability değildir.

`HIDDEN_MAP_CAPABILITIES != empty` → FAIL.
`UNSUPPORTED_MAP_CAPABILITIES != empty` → FAIL.

### Stage A2 — Corporate Page Set Integrity

`project_type: corporate-website` ise validator approved input Site Architecture registry'sinden exact page seti çıkarır:

```text
APPROVED_PAGE_SET = set(IN_SCOPE PAGE-XXX identities)
PLANNED_PAGE_SET = union(WAVE_MAP Covered Page IDs)
```

Blocking invariant:

```text
APPROVED_PAGE_SET == PLANNED_PAGE_SET
```

Ayrıca:

```text
UNAPPROVED_MAP_PAGES = PLANNED_PAGE_SET - APPROVED_PAGE_SET
MISSING_MAP_PAGES = APPROVED_PAGE_SET - PLANNED_PAGE_SET
```

İkisinden biri non-empty → FAIL.

### Distinct Page Collapse Detection

Validator yalnız PAGE ID string equality'ye bakamaz; implementation semantics'i de kontrol eder.

Geçersiz:

```text
Approved:
PAGE-001 Home
PAGE-002 Corporate
PAGE-003 Services
PAGE-004 Contact

Planned/implemented:
/
#corporate
#services
#contact
```

Distinct approved page yalnız same-document anchor section olarak uygulanmışsa:

```text
COLLAPSED_APPROVED_PAGES != empty
→ VAL-04 FAIL
```

Approved route/navigation identity single-surface relation olarak açıkça tanımlanmadıkça page collapse yapılamaz.

### Stage B — WAVE_PLAN → Parent WAVE_MAP Entry

```text
WAVE_PLAN capability atoms subset-of exact parent WAVE_MAP capability atoms
WAVE_PLAN page IDs subset-of exact parent Covered Page IDs
```

Validator her plan için executable-bearing alanları atomize eder:

```text
Goal
Parent Capability Coverage
Parent Page Coverage
In Scope
Expected Result / Target Structure
Implementation Checklist
State / Role / Responsive Coverage
Verification when it implies behavior
Acceptance / Exit Criteria
Handoff when it implies deliverable
```

Minimum sets:

```text
PLAN_CAPABILITY_ATOMS
PARENT_CAPABILITY_ATOMS
PLAN_TO_PARENT_RELATIONS
NEW_PLAN_CAPABILITIES
PLAN_PAGE_SET
PARENT_COVERED_PAGE_SET
NEW_PLAN_PAGES
```

Allowed capability relation:

```text
detail-of | implementation-of | verification-of
```

`NEW_PLAN_CAPABILITIES != empty` → FAIL.
`NEW_PLAN_PAGES != empty` → FAIL.

Plan bir parent PAGE identity'yi başka parent page'in section'ına collapse ediyorsa FAIL.

Parent WAVE_MAP capability'si Stage A/Stage 0'da unsupported ise parent'ta bulunması WAVE_PLAN capability'sini geçerli yapmaz.

---

## VAL-05 — Wave Decomposition + Page-Aware Execution Depth

VAL-05 iki kalite katmanını doğrular.

### A. WAVE_MAP decomposition depth

Her wave artifact üzerinden şu sınırlar açıkça çıkarılabilmelidir:

```text
WHY_SEPARATE
UPSTREAM_BOUNDARY_CONSUMED
DOWNSTREAM_HANDOFF
```

PASS expectations:

- wave bağımsız doğrulanabilir delivery sonucu taşır,
- shared prerequisite downstream consumer'lardan önce gelir,
- runtime/state/shared behavior applicable ise doğru foundation boundary'de ayrılır,
- whole-project cross-page responsive/accessibility/regression/readiness QA gerçekten standalone ise feature page checklist'ine gizlenmez,
- reference wave count taklit edilmez,
- corporate website'te approved page responsibilities görünür coverage alır,
- page grouping coherence için yapılır; page identity'yi görünmez yapmaz.

### B. WAVE_PLAN implementation-ready depth

Fresh capable agent ikinci implementation-planning pass yapmadan execution'a başlayabilmelidir.

Applicable task contract:

```text
location / responsibility
parent capability relation
parent PAGE identity when page-specific
route/navigation responsibility when page-specific
inputs / dependencies / contracts
implementation behavior
data/state/interaction flow when applicable
normal + relevant edge/responsive/role states
preserve / must-not boundary
source/FCL boundary when factual
verification
concrete done result / handoff
```

Şunlar tek başına yetersizdir:

```text
"Kurumsal sayfayı yap"
"Services ekle"
"responsive yap"
"service'e bağla"
"test et"
```

Fresh capable agent page responsibility, route relation, component/data boundary veya verification strategy icat etmek zorundaysa FAIL.

---

## VAL-06 — Execution-Critical Decision Completeness

Critical unresolved karar varken active wave executable gösterilemez.

Corporate website'te approved page architecture yoksa generation-ready state gösterilemez.

---

## VAL-07 — Cross-Document Execution + Page Identity Consistency

README, PROJECT_BRAIN, PRODUCT_RULES, TECH_CONTEXT, DESIGN documents, PROJECT_PLAN, WAVE_MAP, WAVE_PLAN, CURRENT_STATUS, NEXT_TASKS ve DECISIONS aynı execution reality'yi anlatmalıdır.

Corporate website için validator minimum şu setleri çıkarır:

```text
APPROVED_PAGE_SET
BRAIN_PAGE_SET_OR_SUMMARY
NAVIGATION_PAGE_SET
PAGE_DESIGN_INSTANCE_SET (applicable ise)
PLANNED_PAGE_SET
PLAN_REFERENCED_PAGE_SET
```

Blocking invariants:

```text
APPROVED_PAGE_SET == NAVIGATION_PAGE_SET
APPROVED_PAGE_SET == PLANNED_PAGE_SET
```

`design_planning: standard | full` ise:

```text
APPROVED_PAGE_SET == PAGE_DESIGN_INSTANCE_SET
```

`PLAN_REFERENCED_PAGE_SET` planned seti aşamaz.

Aşağıdakiler FAIL'dir:

- page ID/name/route identity drift,
- nav'da unapproved page,
- approved page nav'da missing,
- PAGE-DESIGN instance missing/unexpected,
- WAVE_PLAN parent map'ten yeni page/capability üretir,
- generated output single-page derken approved input multi-page corporate architecture taşır,
- generated artifacts arasında capability reality drift'i,
- source identity/state mismatch,
- approved delivery profile'dan daha yüksek maturity wording.

---

## VAL-08 — Decision Provenance + Coverage

Allowed decision statuses:

```text
User Approved
Engine Resolved
Pending Review
Superseded
```

Site Architecture approved page seti `Engine Resolved` olarak masquerade edemez; canonical approval provenance input lifecycle'dan gelmelidir.

Engine Resolved technical/design choice yeni product capability authorize edemez.

---

## VAL-09 — Tech Context / Integration + Continuation Readiness

Unapproved backend/API/database uydurulamaz; current data/service boundary açık olmalıdır.

Frontend/client/sales continuation expected ise validator TECH_CONTEXT'ten minimum şunları çıkarır:

```text
CONTINUATION_EXPECTED
APPROVED_ZERO_BUILD_CONSTRAINT
SELECTED_FRONTEND_BASELINE
PACKAGE_MANIFEST
DEV_COMMAND
BUILD_COMMAND
PREVIEW_COMMAND
SAME_CODEBASE_CONTINUATION
```

Continuation expected + approved zero-build constraint yoksa:

```text
package-managed baseline REQUIRED
component/module-oriented source structure REQUIRED
repeatable dev/build/preview workflow REQUIRED
same-codebase continuation REQUIRED
```

Agent'ın kendi şu rationale'ları istisna değildir:

```text
"küçük site"
"dependency olmasın"
"daha hızlı"
"ileride React/Vite'a migrate ederiz"
"migration kolay olur"
```

Zero-build ancak approved user/project/environment constraint ile mümkündür.

Corporate website multi-page ise TECH_CONTEXT routing/navigation implementation path'ini structural rewrite gerektirmeden desteklemelidir. Exact router library hard-code edilmez.

Gate evidence eksik/çelişkili → VAL-09 FAIL.

---

## VAL-10 — Design Profile + Quality

Light profile düşük kalite izni değildir.

Corporate multi-page website için approved `design_planning: standard | full` ise design system, global shell ve every approved page için page-design instance coverage zorunludur.

Generic template drift veya approved site architecture'ı görsel kolaylık uğruna collapse etme → FAIL.

Design creativity yeni product capability üretme izni değildir. PAGE-DESIGN capability diff'i VAL-04 Stage 0'da PASS etmek zorundadır.

---

## VAL-11 — Project Plan / Wave / State Alignment

PROJECT_PLAN, WAVE_MAP, CURRENT_STATUS ve NEXT_TASKS aynı wave/page gerçekliğini taşımalıdır.

Pre-execution state success/completion iddia edemez.

---

## VAL-12 — Information Ownership / Assumption / Conflict Integrity

Canonical ownership, assumptions ve conflicts doğru yönetilir.

Capability scope:

- approved executable truth → approved input / SCP registry,
- executable capability semantics → `CAPABILITY_SCOPE_RULES.md`,
- generated docs yalnız reference/implementation yapar; yeni capability authority olamaz.

Site architecture:

- field/approval → PROJECT_INTAKE + approved input,
- semantics → SITE_ARCHITECTURE_RULES,
- domain guard → CORPORATE_WEBSITE_PACKAGE,
- downstream docs only reference/enforce.

Downstream document site architecture veya capability authority'yi yeniden icat edemez.

---

## VAL-13 — Source Claim Integrity

Blocking invariants:

```text
FCL semantic content subset-of exact supporting source evidence
generated factual claim subset-of referenced FCL semantic content
VALIDATION source identity/state exactly mirrors SOURCE_REGISTER
```

Generated factual claims bütün prose alanlarından çıkarılır.

Page architecture factual enrichment izni değildir.

Örnek:

```text
approved: Yedek Parça Temini
allowed page: Yedek Parça Temini detail presentation
not allowed claim: Orijinal Yedek Parça / stok / garanti
```

External source `consumed` iddiası independent observable read/fetch evidence gerektirir.

```text
VALIDATION_SOURCE_SET != SOURCE_REGISTER_SOURCE_SET
→ VAL-07 + VAL-13 FAIL
```

---

## Delivery Profile Wording Integrity

Generated artifacts approved delivery profile'dan daha yüksek maturity iddia edemez.

```text
Foundation -> Implementation Ready / Production Ready claim yasak
Prototype -> Implementation Ready / Production Ready claim yasak
Implementation Ready -> Production Ready claim yasak
Production Ready -> Production Ready allowed
```

Prototype wording site/page breadth'i azaltamaz.

---

## VAL-14 — Template / Placeholder / Project Leakage

Unresolved placeholder, duplicate skeleton veya başka proje leakage → FAIL.

Corporate templates'te unresolved `PAGE_ID`, route identity veya Site Architecture placeholder → FAIL.

PAGE-DESIGN `Approved Capability Support` block'u applicable instance'ta unresolved/empty kalamaz; explicit `N/A — no executable page-specific action beyond approved surface presentation` gibi doğrulanabilir representation kullanılabilir.

---

## VAL-15 — Point-of-Use Trace Integrity

E1 yalnız validator dışındaki independent observable IDE/tool execution trace'tir.

```text
VALIDATION_REPORT / PROGRESS / RUN_LOG / manifest / agent statement != E1 proof
```

Trace AVAILABLE ise dynamic read/write pairing ordered event sequence üzerinden yapılır.

### Single-use token model

```text
READ_TOKENS = each observable fresh template read event, initially UNUSED
WRITE_EVENTS = each observable corresponding dynamic write event

for each WRITE_EVENT in order:
  choose exactly one preceding UNUSED matching READ_TOKEN
  mark token USED
  if none exists -> UNPAIRED WRITE -> FAIL
```

Bir read event'i iki write'a pair edilemez.

WAVE_PLAN ve PAGE-DESIGN dynamic instance'ları bu modele tabidir.

Expected pattern:

```text
fresh template read
→ exact parent/page identity/reference/current-authority reads
→ exactly one dynamic write
→ CLOSE
→ next instance starts with another fresh template read
```

Trace UNAVAILABLE → VAL-15 UNVERIFIED.

```text
VAL-15 UNVERIFIED + no other FAIL -> Overall CONDITIONAL PASS
Publication -> BLOCKED until explicit post-validation user/operator acceptance
```

---

## VAL-16 — Validation Timeline Integrity

Target yalnız:

```text
runs/active/<run-id>/working-output/
```

Validation < publication < completion.

---

## VAL-17 — Engine Boundary Integrity

Normal project run protected `engine/`, `packages/`, canonical `templates/` surfaces'i mutate edemez.

---

## VAL-18 — Output + Operational Path Integrity

Output paths `OUTPUT_STRUCTURE.md` ile uyumlu olmalıdır.

Run operational files final published project package içine sızamaz.

---

## VAL-19 — Traceability + Lifecycle

Manifest, progress, run log, completion report, approved input identity, selected package, planning profiles, page architecture summary, validation result ve lifecycle location aynı terminal gerçekliği göstermelidir.

---

# Validation Report Minimumu

Aşağıdaki evidence blokları applicable olduğu ölçüde zorunludur:

```text
Expected/Executed/Missing VAL IDs
Observable Trace Status
Trace Evidence Origin
Highest Evidence Level Used
Evidence Contradictions
Validation Target
Expected/Actual/Missing/Unexpected Wave IDs
Expected/Actual Page Design instances (applicable)
APPROVED_PAGE_SET (corporate website)
PLANNED_PAGE_SET
NAVIGATION_PAGE_SET
PAGE_DESIGN_INSTANCE_SET (applicable)
MISSING_MAP_PAGES
UNAPPROVED_MAP_PAGES
COLLAPSED_APPROVED_PAGES
GENERATED_EXECUTABLE_CAPABILITY_ATOMS
GENERATED_CAPABILITY_SUPPORT_RELATIONS
UNSUPPORTED_GENERATED_CAPABILITIES
PAGE_DESIGN_CAPABILITY_ATOMS per page-design instance (applicable)
UNSUPPORTED_PAGE_DESIGN_CAPABILITIES per page-design instance (applicable)
MAP_CAPABILITY_ATOMS per wave
COMMITTED_CAPABILITY_ATOMS per wave
HIDDEN_MAP_CAPABILITIES per wave
MAP_SUPPORT_ELIGIBILITY per map atom
UNSUPPORTED_MAP_CAPABILITIES per wave
WAVE_MAP WHY_SEPARATE / UPSTREAM / HANDOFF depth check per wave
PLAN_CAPABILITY_ATOMS per plan
PARENT_CAPABILITY_ATOMS per plan
PLAN_TO_PARENT_RELATIONS
PLAN_PAGE_SET / PARENT_COVERED_PAGE_SET
NEW_PLAN_CAPABILITIES
NEW_PLAN_PAGES
WAVE_PLAN implementation-readiness depth check per plan
CONTINUATION_EXPECTED / zero-build constraint / tooling evidence
FCL-to-Source checks
GENERATED_FACTUAL_CLAIMS
Generated-to-FCL checks
DELIVERY_PROFILE_WORDING_CHECKS
SOURCE_REGISTER vs VALIDATION source-set/state equality
Actual ordered dynamic read/write events when observable
Consumed read-token pairing
Unpaired writes
overall result
```

Required blocking evidence block missing → corresponding gate cannot PASS; overall FAIL unless gate semantics explicitly define UNVERIFIED (VAL-15).

---

# Canonical Failure Summary

```text
missing/incorrect base package -> VAL-02 FAIL
EXPECTED_WAVES != ACTUAL_WAVES -> VAL-03 FAIL
expected page-design set mismatch -> VAL-03 FAIL
support not executable-eligible -> VAL-04 FAIL
UNSUPPORTED_GENERATED_CAPABILITIES non-empty -> VAL-04 FAIL
UNSUPPORTED_PAGE_DESIGN_CAPABILITIES non-empty -> VAL-04 FAIL
page/surface existence used to authorize unsupported child interaction -> VAL-04 FAIL
hidden/unsupported map capability -> VAL-04 FAIL
APPROVED_PAGE_SET != PLANNED_PAGE_SET -> VAL-04 FAIL
MISSING_MAP_PAGES / UNAPPROVED_MAP_PAGES non-empty -> VAL-04 FAIL
COLLAPSED_APPROVED_PAGES non-empty -> VAL-04 FAIL
NEW_PLAN_CAPABILITIES / NEW_PLAN_PAGES non-empty -> VAL-04 FAIL
map why/upstream/handoff ambiguous -> VAL-05 FAIL
fresh agent still needs page/implementation planning -> VAL-05 FAIL
page/nav/design identity drift -> VAL-07 FAIL
continuation stack/tooling gate fails -> VAL-09 FAIL
profile/design coverage invalid -> VAL-10 FAIL
FCL/source claim expansion -> VAL-13 FAIL
unresolved placeholder/leakage -> VAL-14 FAIL
trace unavailable -> VAL-15 UNVERIFIED
reused/unpaired template read token when trace available -> VAL-15 FAIL
published output used as validation target -> VAL-16 FAIL
critical gate FAIL -> overall FAIL
```
