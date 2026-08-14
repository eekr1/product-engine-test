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
4. Re-open exact WAVE_MAP parent entry if generating a WAVE_PLAN
5. Re-open relevant wave quality reference if wave artifact
6. Re-open SOURCE_REGISTER/FCL if factual claims may be introduced
7. Generate only this artifact/instance
8. Run exact boundary diff
9. Repair immediately
10. Record audit metadata
11. CLOSE checkpoint before resolving next artifact/instance
```

`CLOSE checkpoint` semantic olarak önemlidir: aynı template/reference context'i bir sonraki dynamic instance için reusable token değildir.

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

### WAVE_MAP point-of-use routing

WAVE_MAP checkpoint required order:

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh WAVE_MAP_TEMPLATE.md
→ current approved executable scope + current authorities
→ generate ONLY WAVE_MAP
→ validate decomposition + capability boundaries
→ CLOSE
```

`Design_Wave_Plan.md` full/master reference'tır. Runtime agent'ın 400KB+ full dosyayı bütünüyle consume etmesi zorunlu değildir; compact `WAVE_MAP_REFERENCE.md` decomposition calibration için canonical ref route'tur.

### WAVE_PLAN point-of-use routing

Phase-level calibration kaldırılmıştır. **İki isolated ref'i bir kez okuyup bütün WAVE_PLAN instance'larını batch üretmek geçersizdir.**

Her exact `WAVE_NN` ayrı checkpoint'tir:

```text
fresh WAVE_PLAN_TEMPLATE.md
→ exact WAVE_NN parent entry
→ relevant isolated reference(s)
→ current project authorities / FCL as applicable
→ generate ONLY WAVE_NN
→ atomize + NEW_PLAN_CAPABILITIES diff
→ depth check
→ repair
→ CLOSE
```

Relevant reference route:

```text
UI / page / feature wave
→ WAVE_07_HOME_REFERENCE.md

runtime / lifecycle / state-heavy wave
→ WAVE_12_RUNTIME_REFERENCE.md

hybrid wave
→ applicable parts of both
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

A generated WAVE_PLAN is not implementation-ready if a fresh capable agent must perform another planning pass to decide applicable responsibility location, dependency/data/state behavior, preserved boundaries, edge-state handling, verification strategy or exact wave handoff.

Bu rule unnecessary complexity gerektirmez; yalnız exact parent wave ve current architecture için applicable detaylar yazılır.

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
→ WAVE-MAP checkpoint
→ freeze WAVE-MAP execution boundaries
→ expected dynamic instance registry
→ WAVE-PLAN instance checkpoints (one by one)
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
Why Separate / Sequencing Rationale
Committed Capabilities
In Scope
Out of Scope
Primary Deliverables
Dependencies
Upstream Boundary Consumed
Downstream Handoff
Exit Boundary
```

taşır.

Map generation algorithm:

```text
1. Read ref/waves/README.md.
2. Read compact ref/waves/WAVE_MAP_REFERENCE.md at point-of-use.
3. Fresh-read WAVE_MAP_TEMPLATE.md.
4. Re-open current approved executable scope and current authorities.
5. Identify meaningful standalone delivery boundaries; do not target a reference wave count.
6. For every wave explain WHY SEPARATE, UPSTREAM boundary and HANDOFF boundary.
7. Extract every candidate committed capability atom.
8. Resolve exact executable approved support for each atom.
9. Build UNSUPPORTED_MAP_CAPABILITIES.
10. If non-empty: repair/remove; do not freeze.
11. Confirm In Scope / Deliverables / Exit Boundary introduce no hidden atom.
12. Confirm shared foundations precede consumers and horizontal closure is not hidden inside feature waves when independently meaningful.
13. Freeze map only when scope and decomposition depth are both sufficient.
14. CLOSE map checkpoint.
```

`VERIFIED_CURRENT_TRUTH` factual context olabilir ama capability authorize etmez.

### Dynamic WAVE_PLAN Checkpoint Loop

No phase-level reusable calibration exists.

For each expected WAVE ID in order:

```text
START WAVE_NN CHECKPOINT
1. Fresh-read WAVE_PLAN_TEMPLATE.md.
2. Re-open exact parent WAVE_NN map entry.
3. Select and re-open relevant isolated depth reference(s) for THIS wave.
4. Re-open current tech/design/product/source authorities as applicable.
5. Resolve parent Committed Capabilities.
6. Generate candidate implementation details at implementation-ready depth.
7. Every task must make applicable location/responsibility, dependencies/contracts, behavior, states/edges, preserve/must-not, verification and concrete done result explicit.
8. Atomize all candidate executable plan capabilities from every executable section.
9. Map every atom to exact parent capability relation: detail-of | implementation-of | verification-of.
10. Build NEW_PLAN_CAPABILITIES.
11. If non-empty: remove or repair upstream map only if genuinely approved.
12. Run implementation-readiness question: would a fresh capable agent still need a planning pass? If yes, deepen applicable task contracts.
13. Write ONLY WAVE_NN.
14. Validate/repair WAVE_NN.
15. CLOSE checkpoint.
END
```

Only after CLOSE may the next WAVE ID be resolved, and the next checkpoint **must begin with a new fresh WAVE_PLAN_TEMPLATE read**.

Invalid pattern:

```text
read template once
read refs once
write WAVE_00
write WAVE_01
write WAVE_02
...
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

Trace AVAILABLE ise ayrıca sequence şu checkpoint pattern'ini göstermelidir:

```text
fresh template read
→ exact parent/ref reads
→ one WAVE write
→ next fresh template read
```

Bir fresh template read sonrasında birden fazla WAVE write görülürse sonraki writes unpaired sayılır.

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
- WAVE_MAP decomposition depth: WHY SEPARATE + UPSTREAM + HANDOFF clear per wave
- WAVE_PLAN implementation-readiness: fresh agent needs no second planning pass for applicable details
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

VAL-05:
```text
map has meaningful delivery boundaries + explicit why/upstream/handoff
AND every wave plan is implementation-ready without second planning pass
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
