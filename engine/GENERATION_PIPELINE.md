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
7. Run exact boundary diff
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

```text
APPROVED INPUT
→ INPUT_SNAPSHOT / SCP REGISTRY
→ WAVE_MAP EXECUTION SCOPE
→ freeze WAVE_MAP
→ WAVE_PLAN instances
```

Canonical invariants:

```text
WAVE_MAP committed capability atoms ⊆ approved executable capability atoms
WAVE_PLAN capability atoms ⊆ exact parent WAVE_MAP capability atoms
```

WAVE_PLAN task'ları SCP ID taşımak zorunda değildir. SCP registry upstream map resolution içindir.

## Capability Atom Rule

Scope comparison broad summary veya wave adı üzerinden yapılamaz.

Executable içerik şu alanlardan capability atomlarına ayrılır:

```text
WAVE_MAP:
- Committed Capabilities
- In Scope
- Primary Deliverables
- executable parts of Exit Boundary

WAVE_PLAN:
- In Scope
- Expected Result / Target Structure
- Implementation Checklist
- executable state/responsive behavior
- verification/acceptance only when they imply product capability
```

Her atom ayrı semantic capability olarak değerlendirilir.

Örnek:

```text
phone CTA != address card != static map != contact form != WhatsApp
contact section != footer quick links
responsive site != arbitrary new responsive widget
```

Relatedness authorization değildir.

## Wave Quality Reference Layer

`ref/waves/` canonical authority değildir; wave artifact'lerinin **quality/depth calibration** katmanıdır.

Canonical boundary:

```text
engine/ + templates/ + approved current project authorities = WHAT IS ALLOWED / REQUIRED
ref/waves/ = HOW DEEP / CLEAR / IMPLEMENTATION-READY GOOD PLANNING CAN LOOK
```

Wave planning phase'ine girildiğinde:

```text
1. Read ref/waves/README.md boundary.
2. For WAVE_MAP quality calibration, consult Design_Wave_Plan.md decomposition/index/sequencing patterns.
3. Before generating WAVE_PLAN instances, read both isolated depth references once:
   - WAVE_07_HOME_REFERENCE.md
   - WAVE_12_RUNTIME_REFERENCE.md
4. For every actual WAVE_PLAN write, still perform the normal fresh WAVE_PLAN_TEMPLATE read + exact parent map refresh.
```

Reference layer MUST NOT authorize project scope or architecture.

Forbidden reference leakage:

```text
Vibehall facts/capabilities -> current project
Vibehall wave count/names -> current wave map
Vibehall filenames/components/routes/stack -> invented current architecture
reference [x] / QA-closed / test results -> current pre-execution state
```

Reference read is not a canonical template read token and is not VAL-15 pairing evidence.

Depth expectation:

A generated WAVE_PLAN is not implementation-ready if a fresh capable agent must perform another planning pass to decide applicable responsibility location, dependency/data/state behavior, preserved boundaries, edge-state handling or verification strategy.

This rule does not require unnecessary complexity. Only details applicable to the exact parent wave and current project architecture are generated.

## Factual Claim Allowlist Boundary

```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

## Observable Trace Boundary

```text
VALIDATION_REPORT / PROGRESS / RUN_LOG / manifest / agent statement ≠ E1 proof
```

Independent IDE/tool trace dışarıdan inspect edilemiyorsa trace status `UNAVAILABLE` kalır.

## Pipeline

### 1. Intake / Approval
Explicit user approval olmadan approved snapshot/run yoktur.

### 2. Package + Document Resolution
PACKAGE_RULES + PLANNING_PROFILE_OVERLAY + DOCUMENT_CATALOG uygulanır.

### 3. Input Snapshot + SCP Registry
Approved input dondurulur. SCP registry approved truth'tan geniş olamaz.

### 4. Source Register + FCL Registry
Her FCL exact supporting source/evidence ile kaydedilir.

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

Her wave entry:

```text
Goal
Committed Capabilities
In Scope
Out of Scope
Primary Deliverables
Dependencies
Exit Boundary
```

taşır.

Map generation algorithm:

```text
1. Read wave reference boundary and calibrate decomposition quality without importing reference scope.
2. Extract every candidate committed capability atom.
3. Resolve exact executable approved support for each atom.
4. Record support ID + support meaning.
5. Build UNSUPPORTED_MAP_CAPABILITIES.
6. If UNSUPPORTED_MAP_CAPABILITIES != empty: repair/remove; do not freeze.
7. Confirm In Scope / Deliverables / Exit Boundary introduce no hidden atom.
8. Confirm sequencing/dependencies explain why each wave is separate and what it hands off.
9. Freeze map only when unsupported set is empty.
```

`VERIFIED_CURRENT_TRUTH` factual context olabilir ama capability authorize etmez.

### Dynamic WAVEPLAN Phase Calibration

WAVE_PLAN instance loop'una girmeden önce iki isolated reference wave bir kez okunur.

Amaç:

```text
calibrate task depth
calibrate state/role/edge coverage
calibrate dependency and handoff clarity
calibrate automated/manual/debug verification depth
```

Bu phase calibration current project scope veya filenames üretmez ve per-instance canonical refresh yerine geçmez.

### Dynamic WAVE_PLAN Checkpoint

Her expected instance için ayrı template refresh + generation checkpoint uygulanır.

Plan generation algorithm:

```text
1. Re-open fresh WAVE_PLAN_TEMPLATE.
2. Re-open exact parent WAVE_MAP entry.
3. Resolve parent Committed Capabilities.
4. Generate candidate implementation details at implementation-ready depth.
5. For each applicable task, make responsibility location, dependency/data/state behavior, preserved boundary and verification explicit enough to avoid a second planning pass.
6. Atomize all candidate executable plan capabilities from every executable section.
7. Map every plan atom to exact parent capability with relation:
   detail-of | implementation-of | verification-of
8. Build NEW_PLAN_CAPABILITIES for anything without exact parent support.
9. If NEW_PLAN_CAPABILITIES != empty: remove or repair upstream map if approved.
10. Write plan only after unsupported set is empty.
```

Parent Goal'ın broad wording'i tek başına support sayılmaz.
Reference depth example'i parent capability desteği yerine geçmez.

### Dynamic Instance Completion

```text
EXPECTED = set(WAVE_MAP Wave IDs)
ACTUAL = set(working-output/waves/plans/WAVE_*.md)
EXPECTED == ACTUAL required
```

## Observable Dynamic Read/Write Pairing

Her dynamic write benzersiz preceding template read ile eşleşir. Read token single-use'dur.

```text
WAVE_PLAN_TEMPLATE_READ_TOKENS = ordered actual observable reads
WAVE_PLAN_WRITE_EVENTS = ordered actual writes

consume one unused preceding read token per write
reused token -> invalid
missing token -> invalid
```

Summary/self-report pair list gerçek event üretmez.
Reference reads `WAVE_PLAN_TEMPLATE_READ_TOKENS` oluşturmaz.

Trace UNAVAILABLE ise pairing UNVERIFIED kalır.

## Source Registry Consistency

Validation source identity/state yalnız SOURCE_REGISTER'dan alınır.

```text
VALIDATION_SOURCE_SET == SOURCE_REGISTER_SOURCE_SET
validation usage_state == SOURCE_REGISTER usage_state
```

Validator yeni source ID, yeni consumption state veya dolaylı consumption kanıtı icat edemez.
Bir source'un başka source tarafından özetlenmesi o source'un `consumed` olduğu anlamına gelmez.

## Pre-Validation Consistency Check

- expected vs actual dynamic instances
- UNSUPPORTED_MAP_CAPABILITIES == empty
- NEW_PLAN_CAPABILITIES == empty for every plan
- FCL→exact source checks
- generated→FCL checks
- validation source set/state mirrors SOURCE_REGISTER
- package guards

Blocking ihlal varsa repair edilir.

## Validation
Canonical target:
```text
runs/active/<run-id>/working-output/
```

VAL-04:
```text
A. unsupported map capability atoms == empty
B. new plan capability atoms == empty
```

VAL-13:
```text
FCL ⊆ exact source evidence
AND generated claim ⊆ FCL
AND validation source identity/state == SOURCE_REGISTER
```

VAL-15:
```text
independent trace unavailable → UNVERIFIED
independent trace available → consume unique single-use read token per dynamic write
```

Validation publication'dan önce tamamlanır.

## Publication / Completion
PASS veya policy'nin izin verdiği accepted CONDITIONAL PASS sonrası publish edilir; ardından run terminal state'e kapatılır.
