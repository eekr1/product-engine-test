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
4. Re-open exact parent identity/entry if generating a dynamic child
5. Re-open relevant quality reference if applicable
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

---

## Approved Scope Resolution

```text
APPROVED INPUT
→ INPUT_SNAPSHOT / SCP REGISTRY
→ approved SITE ARCHITECTURE (corporate-website ise)
→ WAVE_MAP EXECUTION SCOPE
→ freeze WAVE_MAP
→ WAVE_PLAN instances
```

Canonical invariants:

```text
WAVE_MAP committed capability atoms ⊆ approved executable capability atoms
WAVE_PLAN capability atoms ⊆ exact parent WAVE_MAP capability atoms

corporate-website ise:
APPROVED_PAGE_SET == PLANNED_PAGE_SET
APPROVED_PAGE_SET == NAVIGATION_PAGE_SET
```

Exact site architecture semantics: `engine/SITE_ARCHITECTURE_RULES.md`.

WAVE_PLAN task'ları SCP ID taşımak zorunda değildir. SCP registry upstream map resolution içindir.

---

## Corporate Website Page-Set Freeze

`project_type: corporate-website` için generation'ın hiçbir adımı site architecture'ı yeniden icat edemez.

Run başında approved input'tan şu set çıkarılır:

```text
APPROVED_PAGE_SET = set(IN_SCOPE PAGE-XXX identities)
```

Precondition:

```text
APPROVED_PAGE_SET != empty
```

Bu set run boyunca immutable execution boundary'dir.

Aşağıdakiler yasaktır:

- page eklemek,
- approved page'i silmek,
- iki distinct page'i tek page/section'a collapse etmek,
- page identity'yi değiştirmek,
- future/unresolved page'i current scope'a almak.

Page relation değişikliği gerekiyorsa yeni approved input gerekir.

---

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

```text
phone CTA != address card != static map != contact form != WhatsApp
approved Corporate page != Home page #corporate section
approved Service Detail page != accordion/card expansion
```

Relatedness authorization değildir.

---

## Page Architecture Coverage Rule

Corporate website generated artifacts page identities üzerinden izlenebilir olmalıdır.

Minimum downstream relation:

```text
APPROVED PAGE-XXX
→ PROJECT_BRAIN / PRODUCT_RULES summary reference
→ GLOBAL_SHELL navigation identity (design standard/full ise)
→ PAGE-DESIGN instance (design standard/full ise)
→ WAVE_MAP implementation coverage
→ one or more WAVE_PLAN tasks
```

Wave count page count'a eşit olmak zorunda değildir. Coherent page'ler aynı wave içinde gruplanabilir; grouping page omission/collapse anlamına gelemez.

`design_planning: light` seçilmiş corporate website'te PAGE-DESIGN instance üretilmeyebilir; buna rağmen approved page set WAVE_MAP + navigation implementation planında eksiksiz korunur.

---

## Wave Quality Reference Layer

`ref/waves/` canonical authority değildir; wave artifact'lerinin **quality/depth calibration** katmanıdır.

Canonical boundary:

```text
engine/ + templates/ + approved current project authorities = WHAT IS ALLOWED / REQUIRED
ref/waves/ = HOW DEEP / CLEAR / IMPLEMENTATION-READY GOOD PLANNING CAN LOOK
```

### WAVE_MAP point-of-use routing

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh WAVE_MAP_TEMPLATE.md
→ current approved executable scope + current authorities + APPROVED_PAGE_SET if applicable
→ generate ONLY WAVE_MAP
→ validate decomposition + capability + page boundaries
→ CLOSE
```

Reference layer MUST NOT authorize project scope, page identities veya architecture.

### WAVE_PLAN point-of-use routing

Her exact `WAVE_NN` ayrı checkpoint'tir:

```text
fresh WAVE_PLAN_TEMPLATE.md
→ exact WAVE_NN parent entry
→ relevant isolated reference(s)
→ current project authorities / FCL / approved page identities as applicable
→ generate ONLY WAVE_NN
→ atomize + NEW_PLAN_CAPABILITIES diff
→ page coverage check
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

Reference MUST NOT leak another project's facts, filenames, routes, stack, page set veya completion state.

---

## Factual Claim Allowlist Boundary

```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

Page architecture factual enrichment değildir. Approved hizmet/fact farklı page'lerde organize edilebilir; semantic meaning genişletilemez.

---

## Observable Trace Boundary

```text
VALIDATION_REPORT / PROGRESS / RUN_LOG / manifest / agent statement ≠ E1 proof
```

Independent IDE/tool trace dışarıdan inspect edilemiyorsa trace status `UNAVAILABLE` kalır.

---

# Pipeline

## 1. Intake / Approval
Explicit user approval olmadan approved snapshot/run yoktur.

Corporate website ise approved `site_architecture` olmadan approved intake hazır sayılamaz.

## 2. Package + Document Resolution
`PACKAGE_RULES + PLANNING_PROFILE_OVERLAY + DOCUMENT_CATALOG` uygulanır.

Corporate website sales demo, delivery wording nedeniyle `demo-frontend` package'a indirgenemez.

## 3. Input Snapshot + SCP + Page Registry
Approved input dondurulur. SCP registry approved truth'tan geniş olamaz.

Corporate website ise run record içinde immutable page registry özetlenir:

```text
APPROVED_PAGE_SET
PAGE identity → purpose → route/navigation identity → scope status
```

## 4. Source Register + FCL Registry
Her FCL exact supporting source/evidence ile kaydedilir.

## 5. Dependency-Ordered Generation

```text
Approved Input
→ INPUT_SNAPSHOT + SCP + APPROVED_PAGE_SET(if applicable)
→ SOURCE_REGISTER + source-bounded FCL
→ PROJECT-BRAIN
→ PRODUCT-RULES
→ TECH-CTX
→ DESIGN
→ DESIGN-SYSTEM (if applicable)
→ GLOBAL-SHELL (if applicable)
→ PAGE-DESIGN instance checkpoints (if applicable, one per approved page)
→ SYSTEM-STATES (if applicable)
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

### PAGE-DESIGN Dynamic Checkpoint Loop

`design_planning: standard | full` ve page/screen-based UI için her approved distinct page ayrı checkpoint'tir.

```text
START PAGE-XXX CHECKPOINT
1. Fresh-read PAGE_DESIGN_PACKAGE_TEMPLATE.
2. Re-open exact approved PAGE-XXX registry row.
3. Re-open DESIGN / DESIGN_SYSTEM / GLOBAL_SHELL and product/source authorities as applicable.
4. Generate only PAGE-XXX design package.
5. Confirm no new page/capability/factual claim introduced.
6. Confirm route/navigation identity matches approved architecture.
7. CLOSE.
END
```

Corporate website için:

```text
EXPECTED_PAGE_DESIGN_INSTANCES = APPROVED_PAGE_SET
ACTUAL_PAGE_DESIGN_INSTANCES = generated PAGE-DESIGN identities
EXPECTED == ACTUAL required when design standard/full
```

---

## WAVE_MAP Checkpoint

Her wave entry:

```text
Goal
Why Separate / Sequencing Rationale
Committed Capabilities
Covered Page IDs (corporate/page-based scope applicable ise)
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
5. Corporate website ise APPROVED_PAGE_SET'i freeze edilmiş authority olarak re-open et.
6. Identify meaningful standalone delivery boundaries; do not target a reference wave count.
7. Corporate website'te foundation + routing/global shell consumers'tan önce planlanır.
8. Her approved PAGE-XXX'i en az bir implementation wave'e map et.
9. Distinct page'leri anchor section'a collapse etme.
10. For every wave explain WHY SEPARATE, UPSTREAM boundary and HANDOFF boundary.
11. Extract every candidate committed capability atom.
12. Resolve exact executable approved support for each atom.
13. Build UNSUPPORTED_MAP_CAPABILITIES.
14. Build PLANNED_PAGE_SET from map coverage.
15. If unsupported capabilities exist OR PLANNED_PAGE_SET != APPROVED_PAGE_SET: repair; do not freeze.
16. Confirm In Scope / Deliverables / Exit Boundary introduce no hidden atom/page.
17. Confirm shared foundations precede consumers and final cross-page QA is standalone when meaningful.
18. Freeze map only when scope, page coverage and decomposition depth are sufficient.
19. CLOSE map checkpoint.
```

Capability support identity yalnız `IN_SCOPE | KNOWN_DECISION` + `Executable=YES` SCP atomlarından gelebilir. Site architecture page identity capability fact üretmez; page içeriği ayrıca approved scope/FCL sınırında kalır.

---

## Dynamic WAVE_PLAN Checkpoint Loop

For each expected WAVE ID in order:

```text
START WAVE_NN CHECKPOINT
1. Fresh-read WAVE_PLAN_TEMPLATE.md.
2. Re-open exact parent WAVE_NN map entry.
3. Select and re-open relevant isolated depth reference(s) for THIS wave.
4. Re-open current tech/design/product/source authorities as applicable.
5. Re-open exact Covered Page IDs when applicable.
6. Resolve parent Committed Capabilities.
7. Generate candidate implementation details at implementation-ready depth.
8. Every task must make applicable location/responsibility, dependencies/contracts, behavior, states/edges, preserve/must-not, verification and concrete done result explicit.
9. Page task ise route/navigation identity and page responsibility explicit olmalıdır.
10. Atomize candidate executable capabilities and map them to exact parent relations.
11. Build NEW_PLAN_CAPABILITIES.
12. Build plan page identity set; it must be subset of parent Covered Page IDs.
13. If invalid: repair upstream only if genuinely approved; otherwise remove.
14. Run implementation-readiness question: would a fresh capable agent still need a planning pass? If yes, deepen applicable task contracts.
15. Write ONLY WAVE_NN.
16. Validate/repair WAVE_NN.
17. CLOSE checkpoint.
END
```

Only after CLOSE may the next WAVE ID be resolved.

---

## Dynamic Instance Completion

```text
EXPECTED_WAVES = set(WAVE_MAP Wave IDs)
ACTUAL_WAVES = set(working-output/waves/plans/WAVE_*.md)
EXPECTED_WAVES == ACTUAL_WAVES required
```

Corporate design standard/full:

```text
EXPECTED_PAGES = APPROVED_PAGE_SET
ACTUAL_PAGE_DESIGNS = set(PAGE-DESIGN instance PAGE IDs)
EXPECTED_PAGES == ACTUAL_PAGE_DESIGNS required
```

---

## Observable Dynamic Read/Write Pairing

Her dynamic write benzersiz preceding template read ile eşleşir. Read token single-use'dur.

WAVE_PLAN ve PAGE-DESIGN dynamic instance'larında aynı principle uygulanır. Summary/self-report pair list gerçek event üretmez.

Trace UNAVAILABLE ise pairing UNVERIFIED kalır.

---

## Source Registry Consistency

Validation source identity/state yalnız SOURCE_REGISTER'dan alınır.

```text
VALIDATION_SOURCE_SET == SOURCE_REGISTER_SOURCE_SET
validation usage_state == SOURCE_REGISTER usage_state
```

Validator yeni source ID veya consumption state icat edemez.

---

## Pre-Validation Consistency Check

- expected vs actual dynamic instances
- corporate website ise APPROVED_PAGE_SET == PLANNED_PAGE_SET == NAVIGATION_PAGE_SET
- design standard/full corporate website ise PAGE-DESIGN set equality
- no distinct approved page collapsed into anchor-only section
- UNSUPPORTED_MAP_CAPABILITIES == empty
- NEW_PLAN_CAPABILITIES == empty for every plan
- WAVE_MAP decomposition depth sufficient
- WAVE_PLAN implementation-readiness sufficient
- FCL→exact source checks
- generated→FCL checks
- validation source set/state mirrors SOURCE_REGISTER
- package guards

Blocking ihlal varsa repair edilir.

---

## Validation
Canonical target:

```text
runs/active/<run-id>/working-output/
```

VAL-04 scope/page integrity, VAL-05 planning depth, VAL-09 tech/continuation, VAL-13 factual claims ve VAL-15 trace integrity current `VALIDATION_RULES.md` üzerinden uygulanır.

Validation publication'dan önce tamamlanır.

---

## Publication / Completion
PASS sonrası doğrudan publish edilebilir. CONDITIONAL PASS yalnız validation sonrasında explicit user/operator acceptance event'i kaydedildikten sonra publish edilir; önceki intake/plan approval acceptance sayılmaz. Ardından run terminal state'e kapatılır.
