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

Canonical semantic invariant:
```text
SCP semantic scope ⊆ approved input semantic support
task/deliverable semantic scope ⊆ referenced executable SCP semantic scope
```

SCP ID'nin yalnız mevcut olması PASS için yeterli değildir. Telefon/e-posta CTA scope'u adres kartı, harita, WhatsApp veya form capability'sini ayrıca approval yoksa authorize etmez.

Semantic overreach → VAL-04 FAIL.

## VAL-05 — Wave Decomposition + Execution Depth
Meaningful independent deliverable'lar ayrı wave'lere bölünür; whole-project final QA gerektiğinde ayrı final QA wave olur. Pre-execution state başarı iddia etmez.

## VAL-06 — Execution-Critical Decision Completeness
Critical unresolved karar varken active wave executable gösterilemez.

## VAL-07 — Cross-Document Execution Consistency
README, TECH_CONTEXT, CURRENT_STATUS, NEXT_TASKS, WAVE_MAP, all WAVE_PLAN ve DECISIONS aynı execution reality'yi anlatır.

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
İki aşamalı blocking invariant:
```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

Bir FCL source evidence'tan genişletilmişse downstream generated claim FCL'ye uysa bile VAL-13 FAIL.

Örnek:
```text
Source: Yedek Parça Temini
FCL: Makine ve hidrolik yedek parça temini → FAIL

Source/FCL: Yerinde Teknik Destek
Generated: arıza tespiti ve sahada müdahale → FAIL
```

## VAL-14 — Template / Placeholder / Project Leakage
Unresolved placeholder, duplicate skeleton veya başka proje leakage → FAIL.

## VAL-15 — Point-of-Use Trace Integrity
E1 yalnız validator dışındaki independent observable IDE/tool execution trace'tir.

```text
VALIDATION_REPORT / PROGRESS / RUN_LOG / manifest / agent statement ≠ E1 proof
```

`Observable Trace Status: AVAILABLE` yalnız external trace gerçekten inspect edilmişse yazılabilir. Aksi halde `UNAVAILABLE`.

Dynamic pairing:
```text
read WAVE_PLAN_TEMPLATE #1 → write WAVE_00 consumes #1
read WAVE_PLAN_TEMPLATE #2 → write WAVE_01 consumes #2
```
Her read single-use'dur.

Trace AVAILABLE:
```text
READ_COUNT < WRITE_COUNT → FAIL
UNPAIRED_WRITES != empty → FAIL
all writes uniquely paired in order → PASS
```
Trace UNAVAILABLE → VAL-15 UNVERIFIED.

## VAL-16 — Validation Timeline Integrity
Target yalnız `runs/active/<run-id>/working-output/`; validation < publication < completion.

## VAL-17 — Engine Boundary Integrity
Normal project run protected engine/package/template surfaces'i mutate edemez.

## VAL-18 — Output + Operational Path Integrity
Output paths OUTPUT_STRUCTURE ile uyumlu olmalıdır.

## VAL-19 — Traceability + Lifecycle
Manifest, progress, run log, completion report ve lifecycle location aynı terminal gerçekliği göstermelidir.

## Validation Report Minimumu
```text
Expected/Executed/Missing VAL IDs
Observable Trace Status
Trace Evidence Origin
Highest Evidence Level Used
Evidence Contradictions
Validation Target
Expected/Actual/Missing/Unexpected Wave IDs
SCP semantic checks
FCL→Source checks
Generated→FCL checks
Dynamic template read/write pairs
Unpaired writes
overall result
```

Canonical results:
```text
EXPECTED != ACTUAL → VAL-03 FAIL
SCP semantic overreach → VAL-04 FAIL
FCL not subset of source → VAL-13 FAIL
generated claim not subset of FCL → VAL-13 FAIL
trace origin not independent → Trace UNAVAILABLE
trace AVAILABLE + unpaired write → VAL-15 FAIL
trace UNAVAILABLE → VAL-15 UNVERIFIED
published output target → VAL-16 FAIL
critical FAIL → overall FAIL
```
