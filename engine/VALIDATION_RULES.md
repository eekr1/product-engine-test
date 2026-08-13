# Validation Rules

## Amaç

Product Engine working output'unun gerçekten **agent-ready, source-safe, scope-safe ve evidence-consistent** olup olmadığını doğrular.

> Self-report is evidence metadata, not ground truth.

## Sonuçlar

```text
PASS             → publication yapılabilir
CONDITIONAL PASS → yalnız non-blocking/evidence limitation
FAIL             → blocking contract ihlali; publication yapılamaz
```

## Canonical Evidence Priority Ladder

```text
E1 — Observable IDE/tool execution trace
E2 — Filesystem / produced artifact state
E3 — Approved input, SCP, FCL, canonical contracts
E4 — PROGRESS / RUN_LOG / manifest / agent self-report
```

> Higher-priority evidence always wins when evidence conflicts.

## Canonical Gate IDs

```text
VAL-01 Approval Integrity
VAL-02 Package + Planning Compliance
VAL-03 Canonical Document / Dynamic Instance Coverage
VAL-04 Approved Scope Integrity
VAL-05 Wave Decomposition + Execution Depth
VAL-06 Execution-Critical Decision Completeness
VAL-07 Cross-Document Execution Consistency
VAL-08 Decision Provenance + Coverage
VAL-09 Tech Context / Integration Readiness
VAL-10 Design Profile + Quality
VAL-11 Project Plan / Wave / State Alignment
VAL-12 Information Ownership / Assumption / Conflict Integrity
VAL-13 Source Claim Integrity
VAL-14 Template / Placeholder / Project Leakage
VAL-15 Point-of-Use Trace Integrity
VAL-16 Validation Timeline Integrity
VAL-17 Engine Boundary Integrity
VAL-18 Output + Operational Path Integrity
VAL-19 Traceability + Lifecycle
```

Missing canonical gate → overall FAIL.

---

# Blocking Validation Set

## VAL-01 — Approval Integrity

Approved input, planning fields, explicit user approval ve correct project_state doğrulanır. Auto/tool approval geçersizdir.

## VAL-02 — Package + Planning Compliance

Base package + planning overlay + contextual conditions uyumlu olmalıdır. Applicable package guard ihlali → FAIL.

## VAL-03 — Canonical Document / Dynamic Instance Coverage

Required canonical documents bulunmalıdır.

### Dynamic Instance Set Equality — Blocking Invariant

Expected dynamic instance set WAVE_MAP'teki canonical Wave ID'lerden türetilir.
Actual dynamic instance set working-output filesystem'deki `waves/plans/WAVE_*.md` dosyalarından türetilir.

```text
EXPECTED = set(WAVE_MAP Wave IDs)
ACTUAL   = set(actual WAVE_PLAN filenames)

MISSING    = EXPECTED - ACTUAL
UNEXPECTED = ACTUAL - EXPECTED

PASS iff EXPECTED == ACTUAL
```

Örnek:

```text
EXPECTED = {WAVE_00, WAVE_01, WAVE_02, WAVE_03}
ACTUAL   = {WAVE_00, WAVE_01, WAVE_02}
MISSING  = {WAVE_03}
→ VAL-03 FAIL
```

Sadece instance count eşitliği yeterli değildir; **ID set equality** zorunludur.

Package selection, run manifest veya self-report actual filesystem setinin yerine geçemez.

## VAL-04 — Approved Scope Integrity

Committed WAVE_MAP/WAVE_PLAN/PROJECT_PLAN/NEXT_TASKS item'ları `INPUT_SNAPSHOT.md` Approved Scope Registry (`SCP-XXX`) ile mekanik membership check'ten geçer.

```text
IN_SCOPE / KNOWN_DECISION → executable olabilir
VERIFIED_CURRENT_TRUTH    → factual/reference only
OPEN_QUESTION / FUTURE / OUT_OF_SCOPE → executable NO
```

Missing/non-executable Scope Ref → FAIL.

## VAL-05 — Wave Decomposition + Execution Depth

Meaningful independent deliverable'lar doğru ayrılmalıdır. Applicable package split guard'ları blocking'dir. Whole-project QA feature wave içine saklanamaz. Pre-execution checkbox/state semantics korunur.

## VAL-06 — Execution-Critical Decision Completeness

Execution-critical unresolved karar varken active wave executable olamaz. Exact stack unresolved ise exact stack command/fact yazılamaz.

## VAL-07 — Cross-Document Execution Consistency

README, TECH_CONTEXT, CURRENT_STATUS, NEXT_TASKS, WAVE_MAP, all WAVE_PLAN instances ve DECISIONS aynı execution reality'yi anlatmalıdır.

WAVE_MAP bir instance tanımlayıp plan dosyası yoksa cross-document consistency de FAIL'dir.

## VAL-08 — Decision Provenance + Coverage

Allowed statuses: `User Approved`, `Engine Resolved`, `Pending Review`, `Superseded`.
Generic approval Engine-selected exact choice'ı User Approved yapmaz.

## VAL-09 — Tech Context / Integration Readiness

Current data source, service/data boundary ve future adapter noktası açık olmalıdır. Unapproved backend/API/database uydurulamaz.

## VAL-10 — Design Profile + Quality

`light` project-specific strong DESIGN_RULES; `standard/full` ilgili minimumları taşır. Light düşük kalite anlamına gelmez.

## VAL-11 — Project Plan / Wave / State Alignment

PROJECT_PLAN ↔ WAVE_MAP ↔ CURRENT_STATUS ↔ NEXT_TASKS aynı sıra, scope ve active-wave gerçekliğini göstermelidir.

Expected WAVE set ile plan/state belgelerindeki wave set/sequence uyuşmazsa FAIL.

## VAL-12 — Information Ownership / Assumption / Conflict Integrity

Canonical ownership, assumption statuses ve conflict resolution doğru olmalıdır.

## VAL-13 — Source Claim Integrity

Factual truth authority `SOURCE_REGISTER.md` Factual Claim Allowlist (`FCL-XXX`) kayıtlarıdır.

### FCL Semantic Subset — Blocking Invariant

Her generated factual business/product/service claim için:

```text
1. Referenced FCL exists?
2. Generated factual claim ⊆ Referenced FCL semantic content?
```

PASS yalnız iki koşul da true ise mümkündür.

> FCL ID existence alone is not authorization.

Örnek:

```text
FCL: "Yerinde Teknik Destek"
Generated: "Yerinde Teknik Destek"
→ valid

Generated: "arıza tespiti ve sahada müdahale"
→ NOT subset
→ FAIL unless separate exact-support FCL exists
```

```text
FCL: "Makine Bakım ve Onarım"
Generated: "periyodik bakım ve revizyon"
→ NOT subset
→ FAIL unless separately supported
```

`orijinal`, `garantili`, `hızlı`, süre/performance, süreç, alt hizmet, teknik alt kapsam, yeni coğrafi kapsam gibi enrichment'lar ayrı support olmadan FAIL'dir.

Validator yalnız `[FCL-XXX]` etiketi var diye PASS veremez.

## VAL-14 — Template / Placeholder / Project Leakage

Unresolved placeholder, duplicate skeleton veya başka proje leakage → FAIL.

## VAL-15 — Point-of-Use Trace Integrity

Actual IDE/tool read event yalnız E1 observable trace ile doğrulanır.

### Dynamic Read/Write Pairing — Blocking Invariant

Trace AVAILABLE ise dynamic template için event pairing yapılır.

Her generated dynamic instance write, kendisinden önce gerçekleşmiş ve başka dynamic write tarafından henüz **consume edilmemiş** benzersiz bir qualifying template read ile eşleşmelidir.

```text
read WAVE_PLAN_TEMPLATE #1 → write WAVE_00  consumes read #1
read WAVE_PLAN_TEMPLATE #2 → write WAVE_01  consumes read #2
```

Geçersiz:

```text
read WAVE_PLAN_TEMPLATE #1
write WAVE_00  consumes #1
write WAVE_01  → no unconsumed preceding read
→ FAIL
```

Mechanical checks:

```text
READ_COUNT  = qualifying WAVE_PLAN_TEMPLATE reads
WRITE_COUNT = generated WAVE_PLAN instance writes
UNPAIRED_WRITES = writes without unique preceding unconsumed read

Trace AVAILABLE:
- READ_COUNT < WRITE_COUNT → FAIL
- UNPAIRED_WRITES != empty → FAIL
- all writes paired in order → PASS

Trace UNAVAILABLE → UNVERIFIED
```

Count equality tek başına yeterli değildir; ordering/pairing de geçerli olmalıdır.

E1 contradicts E4 → E1 wins.

## VAL-16 — Validation Timeline Integrity

Canonical target:

```text
runs/active/<run-id>/working-output/
```

Chronology:

```text
last required artifact/checkpoint
< validation start
<= report timestamp
< publication
< completion
```

Published output validation target olursa FAIL.

## VAL-17 — Engine Boundary Integrity

Normal project run şu surfaces'i mutate edemez:

```text
PRODUCT_ENGINE_BRAIN.md
root README engine authority
engine/
packages/
templates/
logs/ENGINE_CHANGELOG.md
```

## VAL-18 — Output + Operational Path Integrity

Output path'leri OUTPUT_STRUCTURE ile uyumlu olmalı; validation target ile published path karıştırılmamalıdır.

## VAL-19 — Traceability + Lifecycle

Manifest, progress, run log, completion report ve lifecycle location aynı terminal gerçekliği göstermelidir.

---

# Validation Report Minimumu

Rapor zorunlu olarak şunları taşır:

```text
Expected Gate IDs: VAL-01..VAL-19
Executed Gate IDs
Missing Gate IDs
Observable Trace Status
Highest Evidence Level Used
Evidence Contradictions
Validation Target

Dynamic Instance Coverage:
- Expected Instance IDs
- Actual Instance IDs
- Missing Instance IDs
- Unexpected Instance IDs

Point-of-Use Pairing:
- Dynamic Template Read Count
- Dynamic Instance Write Count
- Read/Write Pairs
- Unpaired Writes

Source Claim Integrity:
- Generated claim
- Referenced FCL
- Semantic subset result

overall result
```

Canonical result rules:

```text
EXPECTED instances != ACTUAL instances → VAL-03 FAIL
non-executable SCP task → VAL-04 FAIL
generated claim not subset of FCL → VAL-13 FAIL
trace AVAILABLE + unpaired dynamic write → VAL-15 FAIL
trace UNAVAILABLE → VAL-15 UNVERIFIED
published output validation target → VAL-16 FAIL
critical FAIL → overall FAIL
```

Publication yalnız PASS veya policy'nin izin verdiği açık CONDITIONAL PASS sonrası yapılabilir.
