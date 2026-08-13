# Generation Pipeline

## Amaç

Product Engine'in approved project truth'u, model/tool bağımsız biçimde agent-ready, validated ve versioned dokümantasyon paketine dönüştüren canonical runtime akışıdır.

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

Boot sırasında bir authority/template okunmuş olması, daha sonra memory'den uygulanması için yeterli değildir.

> Authority must be close to the action it governs.

Bir artifact üretilmeden veya lifecycle transition yapılmadan hemen önce, o işi yöneten canonical authority/template yeniden açılır.

## Observable Refresh Semantics

```text
self-reported refresh record ≠ proof of refresh
observable read/open event      = primary evidence when available
```

### Evidence Boundary

Product Engine markdown/runtime records actual IDE/tool read event'ini kendi başına kanıtlayamaz.

```text
Generation Contract Compliance
→ agent refresh eylemini yapmak zorundadır
→ PROGRESS/RUN_LOG audit metadata tutar

Observable Trace Audit
→ yalnız IDE/tool execution trace actual read-before-write sırasını kanıtlar
```

Trace yoksa:

```text
Point-of-Use observable verdict = UNVERIFIED
```

Trace varsa E1 observable trace birincil otoritedir.

## Canonical Evidence Priority

Validation/generation evidence önceliği:

```text
E1 — Observable IDE/tool execution trace
E2 — Filesystem / produced artifact state
E3 — Approved input, INPUT_SNAPSHOT/SCP, SOURCE_REGISTER/FCL, canonical contracts
E4 — PROGRESS / RUN_LOG / manifest / agent self-report
```

> Higher-priority evidence always wins when evidence conflicts.

Agent veya validator E1 contradiction varken E4 self-report'a dayanarak PASS veremez.

## Artifact Checkpoint Protocol

Her canonical document ve her dynamic instance ayrı checkpoint'tir.

```text
CHECKPOINT START
1. Resolve exactly one artifact / dynamic instance
2. Re-open its canonical template
3. Re-open its primary authority/dependencies
4. Re-open INPUT_SNAPSHOT Approved Scope Registry when artifact can introduce scope
5. Re-open SOURCE_REGISTER FCL registry when artifact can introduce factual claims
6. Generate only this artifact
7. Re-open template validation expectations
8. Compare artifact against template + authority + SCP + FCL
9. Repair immediately if needed
10. Record audit metadata in PROGRESS/RUN_LOG
11. Mark checkpoint locally complete
CHECKPOINT END
→ only now resolve the next artifact
```

Dynamic instances için batch-read + batch-generate yasaktır.

---

# Approved Scope Registry Boundary

Approved input current scope'u run başında `INPUT_SNAPSHOT.md` içinde `SCP-XXX` kayıtlarına normalize edilir.

Allowed statuses:

```text
IN_SCOPE
KNOWN_DECISION
VERIFIED_CURRENT_TRUTH
OPEN_QUESTION
FUTURE
OUT_OF_SCOPE
```

Executable semantics:

```text
IN_SCOPE / KNOWN_DECISION → executable scope authorize edebilir
VERIFIED_CURRENT_TRUTH    → factual/reference use; yeni feature scope'u tek başına authorize etmez
OPEN_QUESTION             → executable NO
FUTURE                    → executable NO
OUT_OF_SCOPE              → executable NO
```

Canonical rule:

> Every committed deliverable/task must map to an executable SCP record.

Scope ref bulunamıyorsa task üretilmez. Non-executable SCP item committed scope'a dönüştürülemez.

Approved scope genişletilecekse yeni explicit approval / yeni input version gerekir.

---

# Factual Claim Allowlist Boundary

Run'ın `SOURCE_REGISTER.md` belgesi verified factual truth için Factual Claim Allowlist (`FCL-XXX`) tutar.

> Generated factual business claim must map to an existing FCL claim ID.

Üst-seviye hizmet başlığı yeni modifier/alt kapsamı authorize etmez.

FCL yoksa:

```text
remove factual enrichment
or use neutral/non-factual wording
or stop for clarification if execution-critical
```

---

# Project Run Write Boundary

Normal project generation run Product Engine authority/history yüzeylerini read-only kullanır.

Protected:

```text
PRODUCT_ENGINE_BRAIN.md
root README engine-version authority
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

# Transition Authority Refresh

```text
pending → approved        → PROJECT_INTAKE
resolution → generation   → PACKAGE_RULES / DOCUMENT_CATALOG
validation entry          → VALIDATION_RULES
validation → publication  → OUTPUT_STRUCTURE
active → completed/failed → RUN_PROTOCOL
```

Transition authority refresh yapılmadan state değiştirilmez.

---

# Pipeline

## 1. Intake / Normalization

Ham brief ve kaynaklar canonical pending input'a normalize edilir.

Output:

```text
inputs/pending/<slug>/PROJECT_INPUT.md
```

Critical missing/conflict/decision varsa stop.

## 2. Explicit Approval Gate

Approval transition öncesinde `PROJECT_INTAKE.md` yeniden okunur.

```text
IDE/tool/plan/auto-approval ≠ canonical approval
```

Approved input olmadan generation run başlayamaz.

## 3. Package + Planning Resolution

Resolution anında:

```text
PACKAGE_RULES.md
selected base package
applicable contextual package(s)
PLANNING_PROFILE_OVERLAY.md
```

yeniden okunur.

Package-specific deterministic guards binding contract'tır.

## 4. Document + Dynamic Instance Resolution

`DOCUMENT_CATALOG.md` yeniden okunur ve canonical Document ID seti + dynamic instance registry çözülür.

## 5. Input Snapshot + Approved Scope Registry

Artifact generation başlamadan önce `INPUT_SNAPSHOT_TEMPLATE.md` ve approved input yeniden okunur.

`INPUT_SNAPSHOT.md` içinde:

```text
approved intake snapshot
+
Approved Scope Registry (SCP)
```

oluşturulur.

Registry approved input'tan daha geniş olamaz.

Generation bundan sonra committed scope için SCP membership kullanır.

## 6. Source Register + Factual Claim Resolution

`SOURCE_REGISTER_TEMPLATE.md`, approved input ve verified project sources yeniden okunur.

`SOURCE_REGISTER.md` içinde source registry + Factual Claim Allowlist (FCL) oluşturulur.

FCL source'tan daha geniş olamaz.

## 7. Template Resolution

Template resolution yalnız canonical template'i belirler. İçerik artifact checkpoint sırasında yeniden okunur.

Missing/duplicate/conflicting skeleton → generation başlamaz.

## 8. Information Distribution

Approved truth `INFORMATION_MAP.md` owner kurallarıyla dağıtılır.

Bu aşamada:

```text
scope capability → SCP registry
factual claim    → FCL registry
persistent exact decision → DECISIONS
```

ayrımı korunur.

## 9. Missing / Assumption / Conflict / Decision Handling

`ASSUMPTION_RULES.md` ve `CONFLICT_RESOLUTION.md` uygulanır.

Provenance:

```text
explicitly present in approved input → User Approved
chosen by Engine after approval       → Engine Resolved
unresolved and user-critical          → Pending Review
```

Execution-critical unresolved karar varken active wave executable gösterilemez.

## 10. Dependency-Ordered Generation

Genel sıra:

```text
Approved Input
→ INPUT_SNAPSHOT + SCP registry
→ SOURCE_REGISTER + FCL registry
→ PROJECT-BRAIN
→ PRODUCT-RULES
→ TECH-CTX
→ DESIGN (UI)
→ WAVE-MAP
→ WAVE-PLAN instances
→ PROJECT_PLAN
→ STATUS
→ TASKS
→ AGENT-INST
→ DECISIONS
→ README-DOC
→ conditional DATA/API/TEST/DEPLOY/OPS
```

Her artifact ayrı Artifact Checkpoint Protocol'den geçer.

### WAVE-MAP Checkpoint

WAVE_MAP öncesi yeniden oku:

```text
WAVE_MAP_TEMPLATE
selected package/context + granularity guards
PROJECT_BRAIN
PRODUCT_RULES
TECH_CONTEXT
applicable DESIGN
INPUT_SNAPSHOT SCP registry
SOURCE_REGISTER FCL registry
```

Map'teki her committed deliverable executable SCP kaydıyla traceable olmalıdır.

### Dynamic WAVE_PLAN Checkpoint

Her `WAVE_<NN>` için yeniden oku:

```text
WAVE_PLAN_TEMPLATE
WAVE_MAP exact entry
TECH_CONTEXT
PRODUCT_RULES
applicable DESIGN
INPUT_SNAPSHOT SCP registry
SOURCE_REGISTER FCL registry
```

Her executable task:

```text
Scope Ref: SCP-XXX
```

taşır.

Task için executable SCP ref yoksa task yazılmaz. `OPEN_QUESTION`, `FUTURE`, `OUT_OF_SCOPE` ref executable task'ta kullanılamaz.

Factual business claim varsa FCL mapping'i aranır.

## 11. Pre-Validation Consistency + Provenance Check

Validation'a geçmeden önce birlikte karşılaştırılır:

```text
TECH_CONTEXT
README
CURRENT_STATUS
NEXT_TASKS
WAVE_MAP
all WAVE_PLAN instances
DECISIONS
INPUT_SNAPSHOT SCP registry
SOURCE_REGISTER FCL registry
applicable package guards
```

Blocking ihlal varsa Validation stage'e geçmeden repair yapılır.

## 12. Validation / Repair

Validation transition öncesinde `VALIDATION_RULES.md` yeniden açılır.

Canonical validation target:

```text
runs/active/<run-id>/working-output/
```

Published outputs validation target değildir.

Validation report ancak:

```text
all required artifacts generated
all artifact checkpoints closed
pre-validation consistency check completed
validation stage started
```

sonrasında oluşturulabilir.

Canonical gate seti `VAL-01..VAL-19`'dur.

VAL-04:

```text
committed item → SCP membership/status check
non-executable SCP → FAIL
missing SCP ref → FAIL
```

VAL-15:

```text
trace AVAILABLE + valid sequence   → PASS
trace AVAILABLE + invalid sequence → FAIL
trace UNAVAILABLE                  → UNVERIFIED
```

Evidence conflict durumunda E1 > E2 > E3 > E4 uygulanır.

VAL-16:

```text
validation target must be active working-output
validation < publication < completion
```

Published output target gösterilmişse FAIL.

## 13. Publication

Publication transition öncesinde `OUTPUT_STRUCTURE.md` yeniden açılır.

PASS veya policy'nin izin verdiği açık CONDITIONAL PASS sonrası:

1. output version tahsis edilir.
2. `versions/<version>/` yayınlanır.
3. `latest/` aynı sürümün derived görünümü olur.
4. run records gerçek path'leri kaydeder.

## 14. Completion

Completion transition öncesinde `RUN_PROTOCOL.md` yeniden açılır.

Run terminal gerçekliğe kapatılır, sonra doğru lifecycle konumuna move edilir.

---

# Agent-Ready Completion Invariant

> Projeyi hiç görmemiş yetkin yeni bir ajan, output paketini okuyup yeni bir mimari/teknik planlama turu yapmadan aktif `WAVE_<NN>.md` planını uygulamaya başlayabilmelidir.

Bu koşul sağlanmıyorsa output biçimsel olarak eksiksiz olsa bile generation başarılı sayılmaz.
