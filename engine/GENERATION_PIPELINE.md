# Generation Pipeline

## Amaç

Product Engine'in approved project truth'u agent-ready, validated ve versioned dokümantasyon paketine dönüştüren canonical runtime akışıdır.

## Authority Boundaries

- Intake → `PROJECT_INTAKE.md`
- Planning profiles → `PLANNING_PROFILES.md`
- Package selection → `PACKAGE_RULES.md`
- Documents → `DOCUMENT_CATALOG.md`
- Information ownership → `INFORMATION_MAP.md`
- Validation → `VALIDATION_RULES.md`
- Run lifecycle → `RUN_PROTOCOL.md`
- Output paths → `OUTPUT_STRUCTURE.md`

---

# Point-of-Use Authority Refresh

Boot read action-time refresh yerine geçmez.

> Authority must be close to the action it governs.

Her canonical artifact ve her dynamic instance ayrı checkpoint'tir.

```text
CHECKPOINT START
1. Resolve exactly one artifact / instance
2. Re-open canonical template
3. Re-open primary authorities/dependencies
4. Re-open SCP registry if scope may be introduced
5. Re-open FCL registry if factual claims may be introduced
6. Generate only this artifact / instance
7. Compare against template + authority + SCP + FCL
8. Repair immediately
9. Record audit metadata
10. Close checkpoint
CHECKPOINT END
```

Batch-read + batch-generate dynamic instance üretimi yasaktır.

## Canonical Evidence Priority

```text
E1 — Observable IDE/tool trace
E2 — Filesystem / artifact state
E3 — Approved/canonical registries/contracts
E4 — PROGRESS / RUN_LOG / manifest / self-report
```

Higher evidence always wins.

---

# Approved Scope Registry Boundary

Run başında approved scope `INPUT_SNAPSHOT.md` içinde `SCP-XXX` registry'ye normalize edilir.

```text
IN_SCOPE / KNOWN_DECISION → executable olabilir
VERIFIED_CURRENT_TRUTH    → factual/reference only
OPEN_QUESTION / FUTURE / OUT_OF_SCOPE → executable NO
```

Her committed deliverable/task executable SCP ref taşır.

---

# Factual Claim Allowlist Boundary

`SOURCE_REGISTER.md` FCL registry factual truth authority'sidir.

Canonical invariant:

```text
Generated factual claim ⊆ Referenced FCL semantic content
```

> FCL reference is not a license to enrich.

FCL ID mevcut olsa bile generated claim daha genişse invalid'dir.

Örnek:

```text
FCL: Yerinde Teknik Destek
Allowed: Yerinde Teknik Destek kartı
Invalid without separate FCL: arıza tespiti, sahada müdahale, 7/24
```

```text
FCL: Makine Bakım ve Onarım
Invalid without separate FCL: periyodik bakım, revizyon, hidrolik/mekanik alt kapsam
```

---

# Project Run Write Boundary

Protected:

```text
PRODUCT_ENGINE_BRAIN.md
root README engine authority
engine/
packages/
templates/
logs/ENGINE_CHANGELOG.md
```

Writable operational:

```text
inputs/
runs/
outputs/
logs/RUN_INDEX.md
```

---

# Pipeline

## 1. Intake / Normalization

Ham brief canonical pending input'a normalize edilir.

## 2. Explicit Approval Gate

Explicit user approval olmadan approved snapshot/run yoktur.

## 3. Package + Planning Resolution

`PACKAGE_RULES.md`, selected package/context ve `PLANNING_PROFILE_OVERLAY.md` yeniden okunur.

## 4. Canonical Document Resolution

`DOCUMENT_CATALOG.md` canonical document setini çözer.

## 5. Input Snapshot + SCP Registry

Approved input `INPUT_SNAPSHOT.md` içine dondurulur; SCP registry approved truth'tan geniş olamaz.

## 6. Source Register + FCL Registry

Verified factual truth `SOURCE_REGISTER.md` FCL registry'ye normalize edilir. FCL source'tan geniş olamaz.

## 7. Dependency-Ordered Generation

Genel sıra:

```text
Approved Input
→ INPUT_SNAPSHOT + SCP
→ SOURCE_REGISTER + FCL
→ PROJECT-BRAIN
→ PRODUCT-RULES
→ TECH-CTX
→ DESIGN
→ WAVE-MAP
→ resolve expected dynamic instance registry
→ WAVE-PLAN instances
→ PROJECT_PLAN
→ STATUS
→ TASKS
→ AGENT-INST
→ DECISIONS
→ README-DOC
→ conditional docs
```

### WAVE_MAP Checkpoint

WAVE_MAP üretildikten sonra **expected dynamic instance registry** hemen dondurulur.

```text
EXPECTED_DYNAMIC_INSTANCES = set(WAVE_MAP Wave IDs)
```

Örneğin map `WAVE_00..WAVE_03` tanımlıyorsa registry tam olarak:

```text
{WAVE_00, WAVE_01, WAVE_02, WAVE_03}
```

olur.

WAVE_PLAN generation bu registry tamamlanmadan başlamaz.

### Dynamic WAVE_PLAN Checkpoint

Her expected instance için ayrı checkpoint:

```text
re-open WAVE_PLAN_TEMPLATE
re-open exact WAVE_MAP entry
re-open TECH_CONTEXT / PRODUCT_RULES / DESIGN
re-open INPUT_SNAPSHOT SCP
re-open SOURCE_REGISTER FCL
generate exactly one WAVE_<NN>
close checkpoint
```

Her executable task SCP ref taşır.
Her factual claim existing FCL'ye referans verir VE o FCL'nin semantic boundary'si içinde kalır.

### Dynamic Instance Completion Invariant

WAVE_PLAN generation bittikten sonra validation'a geçmeden önce filesystem set karşılaştırılır:

```text
EXPECTED = expected dynamic instance registry
ACTUAL   = set(runs/active/<run-id>/working-output/waves/plans/WAVE_*.md)

MISSING    = EXPECTED - ACTUAL
UNEXPECTED = ACTUAL - EXPECTED
```

`EXPECTED != ACTUAL` ise generation incomplete'tir; validation'a PASS beklentisiyle geçilemez. Missing instance repair edilir.

---

# Observable Dynamic Read/Write Pairing

Trace mevcutsa her dynamic write benzersiz bir preceding template read ile eşleşmelidir.

Her qualifying template read **single-use token** gibi davranır:

```text
read #1 WAVE_PLAN_TEMPLATE → write WAVE_00  consumes #1
read #2 WAVE_PLAN_TEMPLATE → write WAVE_01  consumes #2
```

Geçersiz:

```text
read #1 WAVE_PLAN_TEMPLATE
write WAVE_00 consumes #1
write WAVE_01 has no unconsumed preceding read
```

Mechanical invariant:

```text
READ_COUNT  = qualifying dynamic template reads
WRITE_COUNT = dynamic instance writes
UNPAIRED_WRITES = writes without unique preceding unconsumed read

READ_COUNT < WRITE_COUNT → invalid
UNPAIRED_WRITES != empty → invalid
```

Count equality tek başına yeterli değildir; ordering/pairing geçerli olmalıdır.

---

# Pre-Validation Consistency Check

Validation'a geçmeden önce birlikte kontrol edilir:

```text
README
TECH_CONTEXT
CURRENT_STATUS
NEXT_TASKS
WAVE_MAP
expected dynamic instance registry
actual WAVE_PLAN file set
all WAVE_PLAN instances
DECISIONS
SCP registry
FCL registry
package guards
```

Blocking ihlal varsa repair yapılır.

Özel blocking checks:

```text
EXPECTED dynamic instances == ACTUAL dynamic instances
all factual claims ⊆ referenced FCL boundaries
trace available ise all dynamic writes uniquely paired
```

---

# Validation / Repair

Canonical target:

```text
runs/active/<run-id>/working-output/
```

Canonical gates `VAL-01..VAL-19`.

VAL-03:

```text
Expected Instance IDs
Actual Instance IDs
Missing Instance IDs
Unexpected Instance IDs
```

set equality ile doğrulanır.

VAL-13:

```text
Generated claim
Referenced FCL
Semantic subset result
```

ile doğrulanır.

VAL-15:

```text
Trace UNAVAILABLE → UNVERIFIED
Trace AVAILABLE:
  pair each dynamic write with unique preceding unconsumed template read
  any unpaired write → FAIL
  all paired → PASS
```

Validation publication'dan önce tamamlanır.

---

# Publication

PASS veya policy'nin izin verdiği açık CONDITIONAL PASS sonrası version publish edilir; `latest/` derived görünüm olur.

# Completion

Run records terminal state'e kapatılır, ardından doğru lifecycle konumuna taşınır.

---

# Agent-Ready Completion Invariant

Projeyi hiç görmemiş yetkin yeni bir agent, final output paketini okuyup yeni mimari/teknik planlama yapmadan active WAVE planını uygulamaya başlayabilmelidir.
