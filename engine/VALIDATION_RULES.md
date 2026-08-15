# Validation Rules

## Amaç
Product Engine working output'unun agent-ready, source-safe, scope-safe ve evidence-consistent olup olmadığını doğrular.

> Self-report is evidence metadata, not ground truth.

## Canonical Evidence Priority
```text
E1 — Independent observable IDE/tool execution trace
E2 — Filesystem / produced artifact state
E3 — Approved input, SCP, FCL, canonical contracts
E4 — PROGRESS / RUN_LOG / manifest / agent self-report
```
Higher-priority evidence wins.

## Canonical Gates
`VAL-01` .. `VAL-19` eksiksiz uygulanır; missing gate overall FAIL'dir.

## VAL-03 — Dynamic Instance Coverage
```text
EXPECTED = set(WAVE_MAP Wave IDs)
ACTUAL = set(actual waves/plans/WAVE_*.md)
PASS iff EXPECTED == ACTUAL
```

## VAL-04 — Approved Scope Integrity
Scope iki aşamada ve capability atomları üzerinden doğrulanır.

### Stage A — WAVE_MAP → Approved Scope

```text
WAVE_MAP committed capability atoms subset-of approved executable capability atoms
```

Validator yalnız `Committed Capabilities` satırlarını okuyup PASS veremez. Her wave için **bütün executable-bearing alanları** atomize etmelidir:

```text
Wave Map Summary / Deliverables
Goal
Committed Capabilities
In Scope
Primary Deliverables
Downstream Handoff
executable parts of Exit Boundary
other prose only when it introduces a concrete surface / behavior / deliverable
```

Validator her wave için şunları ayrı ayrı çıkarmalıdır:

```text
MAP_CAPABILITY_ATOMS
COMMITTED_CAPABILITY_ATOMS
HIDDEN_MAP_CAPABILITIES
SUPPORTED_MAP_CAPABILITIES
UNSUPPORTED_MAP_CAPABILITIES
```

Her atom için exact support identity + exact support meaning gösterilir.

Status semantics:

```text
IN_SCOPE / KNOWN_DECISION -> executable support olabilir
VERIFIED_CURRENT_TRUTH -> reference/factual context only
OPEN_QUESTION / FUTURE / OUT_OF_SCOPE -> non-executable
```

Rules:
- related/generic capability exact support değildir.
- phone/email CTA, address/map/form/WhatsApp capability'sini authorize etmez.
- generic corporate/contact/responsive scope arbitrary adjacent feature authorize etmez.
- Footer, sticky action bar, technical details overlay, search/filter, modal, badge, map, form veya ayrı interaction surface gibi concrete deliverable'lar yalnız başka broad capability'nin “detayı” denilerek gizlenemez; gerçekten aynı approved behavior'ın implementation detail'i olduğu kanıtlanmalı, aksi halde ayrı atomdur.
- `MAP_CAPABILITY_ATOMS - COMMITTED_CAPABILITY_ATOMS != empty` ve fark gerçek executable capability içeriyorsa `HIDDEN_MAP_CAPABILITIES != empty` → FAIL.
- Bir hidden atom approved scope'ta destekli olsa bile Committed Capabilities altında görünmüyorsa map contract ihlalidir; önce atomize edilip committed listesine alınmalı veya kaldırılmalıdır.
- `UNSUPPORTED_MAP_CAPABILITIES != empty` → VAL-04 FAIL.

### Stage B — WAVE_PLAN → Parent WAVE_MAP Entry

```text
WAVE_PLAN capability atoms subset-of exact parent WAVE_MAP capability atoms
```

Validator yalnız capability coverage tablosunu veya checklist başlıklarını okuyamaz. Her plan için executable atomlar şu alanların tamamından çıkarılır:

```text
Goal
Parent Capability Coverage
In Scope
Expected Result / Target Structure
Implementation Checklist
State / Role / Responsive Coverage
Automated Verification when it implies product behavior
Manual QA when it implies product behavior
Acceptance / Exit Criteria
Handoff when it implies a new deliverable
other prose only when it introduces a concrete surface / behavior / deliverable
```

Validator her plan için şunları üretir:

```text
PLAN_CAPABILITY_ATOMS
PARENT_CAPABILITY_ATOMS
PLAN_TO_PARENT_RELATIONS
NEW_PLAN_CAPABILITIES
```

Allowed relation:
```text
detail-of | implementation-of | verification-of
```

Aşağıdakiler FAIL'dir:
```text
new-capability
adjacent-capability
inferred-capability
```

Parent Goal'ın broad wording'i tek başına support sayılmaz. Parent map entry'de açık semantic support yoksa plan capability'si unsupported'dur.

`NEW_PLAN_CAPABILITIES != empty` → VAL-04 FAIL.

WAVE_PLAN task'larında SCP ref zorunlu değildir.

## VAL-05 — Wave Decomposition + Execution Depth

VAL-05 iki ayrı kalite katmanını birlikte doğrular.

### A. WAVE_MAP decomposition depth

Acyclic dependency ve distinct wave count tek başına PASS için yeterli değildir.

Her wave artifact üzerinden şu üç boundary açıkça çıkarılabilmelidir:

```text
WHY_SEPARATE
UPSTREAM_BOUNDARY_CONSUMED
DOWNSTREAM_HANDOFF
```

PASS beklentisi:
- wave gerçek, bağımsız doğrulanabilir delivery sonucu taşır,
- shared prerequisite downstream consumer'lardan önce konumlanır,
- runtime/state/shared behavior birden fazla surface tarafından tüketiliyorsa uygun foundation boundary olarak ayrılır,
- whole-project consolidation/responsive/accessibility/regression/performance/readiness/final QA gerçekten standalone ise feature checklist'ine gizlenmez,
- küçük projede reference taklidi için yapay micro-wave üretilmez,
- her wave neden o sırada geldiğini ve ne teslim ettiğini açıklar.

Generic `Foundation → UI → QA` zinciri yalnız başına decomposition depth kanıtı değildir.

### B. WAVE_PLAN implementation-ready depth

Her plan fresh capable agent'ın **ikinci bir implementation-planning pass yapmadan** doğrudan execution'a geçebileceği açıklıkta olmalıdır.

Validator yalnız section/checklist sayısına bakamaz. Task'lar artifact üzerinden applicable ölçüde şu execution contract'ı sağlamalıdır:

```text
location / responsibility
parent capability relation
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
"component oluştur"
"responsive yap"
"service'e bağla"
"test et"
```

Fresh capable agent bu görevlerden sonra hâlâ component responsibility, data/state flow, responsive behavior, preserved boundary veya verification strategy icat etmek zorundaysa VAL-05 FAIL'dir.

Depth gereksiz complexity veya yeni architecture/capability üretme izni değildir. Applicable olmayan alanlar zorla eklenmez.

Pre-execution state başarı iddia etmez.

## VAL-06 — Execution-Critical Decision Completeness
Critical unresolved karar varken active wave executable gösterilemez.

## VAL-07 — Cross-Document Execution Consistency
README, TECH_CONTEXT, CURRENT_STATUS, NEXT_TASKS, WAVE_MAP, all WAVE_PLAN, DECISIONS ve source/FCL identities aynı execution reality'yi anlatır.

Aşağıdakiler VAL-07 FAIL'dir:
- WAVE_PLAN parent map'ten yeni capability üretir.
- validation source identity/state SOURCE_REGISTER'dan farklıdır.
- validator source setine SOURCE_REGISTER'da olmayan identity ekler.
- same source ID farklı anlam/state ile raporlanır.
- approved delivery profile'dan daha yüksek maturity ima eden output wording'i execution reality'yi yanlış anlatır.

## VAL-08 — Decision Provenance + Coverage
Allowed statuses: User Approved, Engine Resolved, Pending Review, Superseded.

## VAL-09 — Tech Context / Integration Readiness
Unapproved backend/API/database uydurulamaz; current data/service boundary açık olmalıdır.

## VAL-10 — Design Profile + Quality
Light profile düşük kalite izni değildir.

## VAL-11 — Project Plan / Wave / State Alignment
PROJECT_PLAN, WAVE_MAP, CURRENT_STATUS ve NEXT_TASKS aynı wave gerçekliğini taşır.

## VAL-12 — Information Ownership / Assumption / Conflict Integrity
Canonical ownership, assumptions ve conflicts doğru yönetilir.

## VAL-13 — Source Claim Integrity
Blocking invariants:
```text
FCL semantic content subset-of exact supporting source evidence
generated factual claim subset-of referenced FCL semantic content
VALIDATION source identity/state exactly mirrors SOURCE_REGISTER
```

### Generated factual claim extraction

Validator yalnız açık “fact” tablolarını tarayamaz. Gerçek dünya / firma / domain gerçeği ima eden modifier ve açıklamalar **claim'dir** ve generated output'un tüm prose alanlarından çıkarılmalıdır.

Örnek factual expansion'lar:

```text
"Yedek Parça Temini" -> "orijinal yedek parça", "stoktan parça", belirli marka kapsamı
"Yerinde Teknik Destek" -> "acil arıza müdahalesi", "mobil filo", belirli SLA/yanıt süresi
"Makine Bakım ve Onarım" -> "periyodik bakım paketi", "revizyon", belirli makine/alt sistem uzmanlığı
"Trakya bölgesi teknik servis" -> çalışma saatleri, şube/ağ, kapsama garantisi
```

Bunlar source-backed FCL içinde exact semantic support yoksa FAIL'dir; “marketing copy”, “kısa açıklama”, “kart detayı”, “technical detail”, “regional context” veya benzer presentation etiketi factual genişlemeyi meşrulaştırmaz.

Teknik implementation kararları factual claim değildir ve FCL gerektirmez; örneğin grid, component boundary, CSS transition, responsive breakpoint, adapter veya file structure Engine tarafından resolve edilebilir. Ancak bu teknik kararlar yeni product capability veya real-world fact üretemez.

Validator generated factual claims'i minimum şu alanlardan taramalıdır:

```text
WAVE_MAP Summary / Goal / In Scope / Deliverables / Handoff / Exit
all WAVE_PLAN prose
Implementation Checklist behavior/copy/details
State / Responsive sections when real-world claims appear
Acceptance Criteria
PROJECT_BRAIN / PRODUCT_RULES / TECH_CONTEXT / DESIGN / PROJECT_PLAN / README when factual claims appear
```

Exact source evidence inference/classification izni değildir.

External source `consumed` iddiası independent observable open/read/fetch evidence gerektirir. Böyle evidence yoksa source `registered` kalmalıdır.

Validator:
- SOURCE_REGISTER'da olmayan source ID ekleyemez,
- source usage_state değiştiremez,
- `via another source summary`, snapshot, self-report veya derived mention ile external consumption kanıtlayamaz.

`VALIDATION_SOURCE_SET != SOURCE_REGISTER_SOURCE_SET` → VAL-07 + VAL-13 FAIL.
Usage-state mismatch → VAL-07 + VAL-13 FAIL.

## Delivery Profile Wording Integrity

Generated artifacts approved delivery profile'dan daha yüksek maturity iddia edemez.

```text
Foundation -> Implementation Ready / Production Ready claim yasak
Prototype -> Implementation Ready / Production Ready claim yasak
Implementation Ready -> Production Ready claim yasak
Production Ready -> Production Ready allowed
```

`production-ready`, `launch-ready`, `production-grade release`, `deployment-ready production package` gibi maturity claim'leri ancak approved profile semantically destekliyorsa kullanılabilir.

Prototype içinde `clean static package`, `demo-ready`, `sales-demo ready`, `validated prototype output` gibi profile-consistent wording kullanılabilir.

Profile yükselten wording → VAL-07 FAIL; claim ayrıca source/decision uyduruyorsa ilgili diğer gate'ler de FAIL olabilir.

## VAL-14 — Template / Placeholder / Project Leakage
Unresolved placeholder, duplicate skeleton veya başka proje leakage → FAIL.

## VAL-15 — Point-of-Use Trace Integrity
E1 yalnız validator dışındaki independent observable IDE/tool execution trace'tir.

```text
VALIDATION_REPORT / PROGRESS / RUN_LOG / manifest / agent statement != E1 proof
```

`Observable Trace Status: AVAILABLE` yalnız external trace gerçekten inspect edilmişse yazılır; aksi halde `UNAVAILABLE`.

### Single-use token model

Trace AVAILABLE ise dynamic read/write pairing gerçek ordered event sequence üzerinden yapılır.

```text
READ_TOKENS = each observable template read event, each initially UNUSED
WRITE_EVENTS = each observable dynamic write event

for each WRITE_EVENT in order:
  choose exactly one preceding UNUSED matching READ_TOKEN
  mark token USED
  if none exists -> UNPAIRED WRITE -> FAIL
```

Bir read event'i iki write'a pair edilemez.
Aynı filename'i raporda beş kez yazmak beş read event üretmez.
Self-reported pair table observable event sequence yerine geçmez.

Özellikle:
```text
1 observed WAVE_PLAN_TEMPLATE read + 5 observed WAVE_PLAN writes
→ 1 paired write + 4 unpaired writes
→ VAL-15 FAIL
```

Trace AVAILABLE ise expected point-of-use sequence ayrıca şudur:

```text
fresh WAVE_PLAN_TEMPLATE read
→ exact parent/reference/current-authority reads
→ exactly one WAVE_NN write
→ next WAVE begins with another fresh WAVE_PLAN_TEMPLATE read
```

Reference read template read-token değildir.

Trace UNAVAILABLE → VAL-15 UNVERIFIED.

### UNVERIFIED overall semantics
```text
VAL-15 UNVERIFIED + no other FAIL -> Overall CONDITIONAL PASS
Publication -> BLOCKED until explicit user/operator acceptance
Any other blocking FAIL -> Overall FAIL
```

Agent/tool kendi kendine evidence limitation kabulü veremez.

## VAL-16 — Validation Timeline Integrity
Target yalnız `runs/active/<run-id>/working-output/`; validation < publication < completion.

## VAL-17 — Engine Boundary Integrity
Normal project run protected engine/package/template surfaces'i mutate edemez.

## VAL-18 — Output + Operational Path Integrity
Output paths OUTPUT_STRUCTURE ile uyumlu olmalıdır.

## VAL-19 — Traceability + Lifecycle
Manifest, progress, run log, completion report ve lifecycle location aynı terminal gerçekliği göstermelidir.

## Validation Report Minimumu
Aşağıdaki evidence bloklarının her biri zorunludur:

```text
Expected/Executed/Missing VAL IDs
Observable Trace Status
Trace Evidence Origin
Highest Evidence Level Used
Evidence Contradictions
Validation Target
Expected/Actual/Missing/Unexpected Wave IDs
MAP_CAPABILITY_ATOMS per wave
COMMITTED_CAPABILITY_ATOMS per wave
HIDDEN_MAP_CAPABILITIES per wave
exact approved support meaning per map atom
UNSUPPORTED_MAP_CAPABILITIES per wave
WAVE_MAP WHY_SEPARATE / UPSTREAM / HANDOFF depth check per wave
PLAN_CAPABILITY_ATOMS per plan
PARENT_CAPABILITY_ATOMS per plan
PLAN_TO_PARENT_RELATIONS
NEW_PLAN_CAPABILITIES per plan
WAVE_PLAN implementation-readiness depth check per plan
FCL-to-Source checks with exact SOURCE_REGISTER identity/state
GENERATED_FACTUAL_CLAIMS
Generated-to-FCL checks per extracted factual claim
DELIVERY_PROFILE_WORDING_CHECKS
SOURCE_REGISTER vs VALIDATION source-set/state equality
External source consumption checks
Actual ordered dynamic read events
Actual ordered dynamic write events
Consumed read-token pairing
Unpaired writes
overall result
```

Required evidence block missing → corresponding gate cannot PASS. Blocking gate evidence block missing → Overall FAIL.

Canonical results:
```text
EXPECTED != ACTUAL -> VAL-03 FAIL
HIDDEN_MAP_CAPABILITIES != empty -> VAL-04 FAIL
UNSUPPORTED_MAP_CAPABILITIES != empty -> VAL-04 FAIL
NEW_PLAN_CAPABILITIES != empty -> VAL-04 FAIL
map why/upstream/handoff ambiguous -> VAL-05 FAIL
fresh capable agent still needs implementation planning -> VAL-05 FAIL
validation source-set/state mismatch -> VAL-07 + VAL-13 FAIL
profile-upgrading wording -> VAL-07 FAIL
FCL not subset of exact source -> VAL-13 FAIL
generated factual claim not subset of FCL -> VAL-13 FAIL
external consumed without independent read evidence -> VAL-13 FAIL
trace origin not independent -> Trace UNAVAILABLE
reused read token -> VAL-15 FAIL
unpaired dynamic write -> VAL-15 FAIL
trace UNAVAILABLE -> VAL-15 UNVERIFIED -> Overall cannot PASS
published output target -> VAL-16 FAIL
critical FAIL -> overall FAIL
```
