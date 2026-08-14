# Generation Pipeline

## Amaç
Approved project truth'u agent-ready, validated ve versioned dokümantasyon paketine dönüştüren canonical runtime akışı.

## Point-of-Use Authority Refresh
Her canonical artifact ve dynamic instance ayrı checkpoint'tir. Batch-read + batch-generate yasaktır.

```text
CHECKPOINT START
1. Resolve exactly one artifact/instance
2. Re-open canonical template
3. Re-open primary authorities/dependencies
4. Re-open WAVE_MAP parent entry if generating a WAVE_PLAN
5. Re-open SOURCE_REGISTER/FCL if factual claims may be introduced
6. Generate only this artifact/instance
7. Compare against parent boundary + exact source-backed FCL + template
8. Repair immediately
9. Record audit metadata
10. Close checkpoint
```

## Evidence Priority
```text
E1 — Independent observable IDE/tool trace
E2 — Filesystem/artifact state
E3 — Approved/canonical registries/contracts
E4 — PROGRESS/RUN_LOG/manifest/self-report
```
E4 kendi kendine E1'e yükseltilemez.

## Approved Scope Resolution
SCP registry approved project truth'un operational scope registry'sidir. Execution scope önce WAVE_MAP'te çözülür ve freeze edilir.

Canonical chain:

```text
APPROVED INPUT
→ INPUT_SNAPSHOT / SCP REGISTRY
→ WAVE_MAP EXECUTION SCOPE
→ freeze WAVE_MAP
→ WAVE_PLAN instances
```

Canonical invariants:

```text
WAVE_MAP committed scope ⊆ approved executable project scope
WAVE_PLAN task/deliverable scope ⊆ exact parent WAVE_MAP entry
```

WAVE_PLAN task'ları SCP ID taşımak zorunda değildir. Scope enforcement upstream WAVE_MAP'te yapılır; downstream plan yalnız parent map entry'yi detaylandırır.

## Factual Claim Allowlist Boundary
Canonical chain:
```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

FCL source'tan genişse registry repair edilir; downstream generation başlamaz.

## Observable Trace Boundary
```text
VALIDATION_REPORT / PROGRESS / RUN_LOG / manifest / agent statement ≠ E1 proof
```

Independent IDE/tool trace dışarıdan inspect edilemiyorsa trace status `UNAVAILABLE` kalır.

## Pipeline

### 1. Intake / Approval
Ham brief pending input'a normalize edilir; explicit user approval olmadan approved snapshot/run yoktur.

### 2. Package + Document Resolution
PACKAGE_RULES + PLANNING_PROFILE_OVERLAY + DOCUMENT_CATALOG uygulanır.

### 3. Input Snapshot + SCP Registry
Approved input dondurulur. SCP registry approved truth'tan geniş olamaz.

### 4. Source Register + FCL Registry
Verified sources yeniden okunur. Her FCL exact supporting source/evidence ile kaydedilir.

Pre-generation check:
```text
for each FCL:
  FCL semantic content ⊆ exact source evidence
```
False ise FCL daraltılır/silinir.

### 5. Dependency-Ordered Generation
```text
Approved Input
→ INPUT_SNAPSHOT + SCP
→ SOURCE_REGISTER + source-bounded FCL
→ PROJECT-BRAIN
→ PRODUCT-RULES
→ TECH-CTX
→ DESIGN
→ WAVE-MAP
→ freeze WAVE-MAP execution boundaries
→ expected dynamic instance registry
→ WAVE-PLAN instances
→ PROJECT_PLAN
→ STATUS
→ TASKS
→ AGENT-INST
→ DECISIONS
→ README-DOC
```

### WAVE_MAP Checkpoint
WAVE_MAP project execution decomposition authority'sidir.

Her wave entry için:

```text
Goal
In Scope
Out of Scope
Primary Deliverables
Dependencies
Exit Boundary
```

zorunlu olarak çözülür.

Map-level scope check:

```text
wave committed scope ⊆ approved executable scope
Future/Open/Out-of-Scope current wave'e map edilemez
VERIFIED_CURRENT_TRUTH tek başına capability authorize etmez
```

Map valid olduktan sonra freeze edilir.

```text
EXPECTED_DYNAMIC_INSTANCES = set(WAVE_MAP Wave IDs)
```

### Dynamic WAVE_PLAN Checkpoint
Her expected instance için ayrı template refresh + generation checkpoint uygulanır.

Her plan exact parent WAVE_MAP entry'yi yeniden okur ve yalnız onu detaylandırır.

Her task/deliverable:

```text
scope ⊆ exact parent WAVE_MAP entry
```

Parent map entry'de olmayan capability plan içinde eklenemez. Gerekirse upstream WAVE_MAP approved scope'a göre repair edilir; aksi halde task silinir.

Her factual claim:

```text
FCL exists
FCL ⊆ exact source support
generated claim ⊆ FCL
```

### Dynamic Instance Completion
```text
EXPECTED = expected instance registry
ACTUAL = set(working-output/waves/plans/WAVE_*.md)
EXPECTED == ACTUAL required
```

## Observable Dynamic Read/Write Pairing
Trace AVAILABLE ise her dynamic write benzersiz preceding template read ile eşleşir. Her read single-use'dur.

```text
READ_COUNT < WRITE_COUNT → invalid
UNPAIRED_WRITES != empty → invalid
```

Trace UNAVAILABLE ise pairing UNVERIFIED kalır.

## Pre-Validation Consistency Check
Validation öncesi şunlar birlikte kontrol edilir:
- README / TECH_CONTEXT / STATUS / TASKS / WAVE_MAP / all WAVE_PLAN / DECISIONS
- expected vs actual dynamic instances
- WAVE_MAP → approved scope checks
- each WAVE_PLAN → exact parent WAVE_MAP boundary checks
- FCL→source checks
- generated→FCL checks
- package guards

Blocking ihlal varsa repair edilir.

## Validation
Canonical target:
```text
runs/active/<run-id>/working-output/
```

VAL-04:
```text
A. WAVE_MAP scope ⊆ approved executable scope
B. each WAVE_PLAN task/deliverable ⊆ exact parent WAVE_MAP entry
```

VAL-13:
```text
FCL ⊆ exact source evidence
AND generated claim ⊆ FCL
```

VAL-15:
```text
independent trace unavailable → UNVERIFIED
independent trace available → unique read/write pairing
```

Validation publication'dan önce tamamlanır.

## Publication / Completion
PASS veya policy'nin izin verdiği accepted CONDITIONAL PASS sonrası publish edilir; ardından run terminal state'e kapatılır.
