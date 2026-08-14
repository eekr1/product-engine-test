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
Her committed deliverable/task executable SCP ref taşır.

Canonical invariants:
```text
SCP semantic scope subset-of approved input semantic support
task/deliverable semantic scope subset-of referenced executable SCP semantic scope
```

SCP ref doğrulaması ID existence kontrolü değildir. Referenced SCP için ID + Item + Status + Executable değerleri INPUT_SNAPSHOT registry ile exact resolve edilmelidir.

```text
IN_SCOPE / KNOWN_DECISION -> Executable YES
VERIFIED_CURRENT_TRUTH -> Executable NO, reference only
OPEN_QUESTION / FUTURE / OUT_OF_SCOPE -> Executable NO
```

Reference-only SCP executable task/deliverable authorize edemez. Telefon/e-posta CTA scope'u adres kartı, harita, WhatsApp veya form capability'sini ayrıca approval yoksa authorize etmez. SCP ID başka belge içinde registry'den farklı anlam/name ile kullanılırsa VAL-04 ve VAL-07 FAIL.

## VAL-05 — Wave Decomposition + Execution Depth
Meaningful independent deliverable'lar ayrı wave'lere bölünür; whole-project final QA gerektiğinde ayrı final QA wave olur. Pre-execution state başarı iddia etmez.

## VAL-06 — Execution-Critical Decision Completeness
Critical unresolved karar varken active wave executable gösterilemez.

## VAL-07 — Cross-Document Execution Consistency
README, TECH_CONTEXT, CURRENT_STATUS, NEXT_TASKS, WAVE_MAP, all WAVE_PLAN, DECISIONS ve referenced SCP/FCL identities aynı execution reality'yi anlatır.

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
```

Exact source evidence inference/classification izni değildir. Source'ta açıkça bulunmayan faaliyet alanı, capability, alt hizmet, teknik kapsam, süreç veya modifier FCL'ye eklenemez.

External source `consumed` iddiası independent observable open/read/fetch evidence gerektirir. Böyle evidence yoksa source `registered` kalmalıdır. `consumed` yazılmış fakat bağımsız evidence yoksa VAL-13 FAIL.

## VAL-14 — Template / Placeholder / Project Leakage
Unresolved placeholder, duplicate skeleton veya başka proje leakage → FAIL.

## VAL-15 — Point-of-Use Trace Integrity
E1 yalnız validator dışındaki independent observable IDE/tool execution trace'tir.

```text
VALIDATION_REPORT / PROGRESS / RUN_LOG / manifest / agent statement != E1 proof
```

`Observable Trace Status: AVAILABLE` yalnız external trace gerçekten inspect edilmişse yazılır; aksi halde `UNAVAILABLE`.

Trace AVAILABLE:
```text
READ_COUNT < WRITE_COUNT -> FAIL
UNPAIRED_WRITES != empty -> FAIL
all writes uniquely paired in order -> PASS
```

Trace UNAVAILABLE → VAL-15 UNVERIFIED.

### UNVERIFIED overall semantics
VAL-15 blocking gate olduğu için `UNVERIFIED` varken Overall `PASS` yasaktır.

```text
VAL-15 UNVERIFIED + no other FAIL -> Overall CONDITIONAL PASS
Publication -> BLOCKED until explicit user/operator acceptance of the evidence limitation
No explicit acceptance -> do not publish; keep run active/paused
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
SCP semantic checks: task -> SCP ID/Item/Status/Executable -> subset result
FCL-to-Source checks: FCL -> exact source evidence -> subset result
Generated-to-FCL checks: generated claim -> FCL -> subset result
External source consumption checks
Dynamic template read/write pairs or explicit UNAVAILABLE reason
Unpaired writes
overall result
```

Required evidence block missing → corresponding gate cannot PASS. Blocking gate evidence block missing → Overall FAIL.

Canonical results:
```text
EXPECTED != ACTUAL -> VAL-03 FAIL
reference-only/non-executable SCP task -> VAL-04 FAIL
SCP identity mismatch -> VAL-04 + VAL-07 FAIL
FCL not subset of source -> VAL-13 FAIL
generated claim not subset of FCL -> VAL-13 FAIL
external consumed without independent read evidence -> VAL-13 FAIL
trace origin not independent -> Trace UNAVAILABLE
trace AVAILABLE + unpaired write -> VAL-15 FAIL
trace UNAVAILABLE -> VAL-15 UNVERIFIED -> Overall cannot PASS
published output target -> VAL-16 FAIL
critical FAIL -> overall FAIL
```
