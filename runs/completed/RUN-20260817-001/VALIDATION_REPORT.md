# Validation Report — RUN-20260817-001

- **Validation Result**: CONDITIONAL PASS
- **Validation Target**: `runs/active/RUN-20260817-001/working-output/`
- **Validation Date**: 2026-08-17T00:35:16+03:00

## 1. Canonical Gate Coverage

- **Expected Gates**: `VAL-01` .. `VAL-19` (19 canonical gates)
- **Executed Gates**: 19
- **Missing Gates**: 0
- **Overall Gate Coverage**: 100%

## 2. Evidence Priority / Observable Trace Status

- **Observable Trace Status**: `UNAVAILABLE`
- **Trace Evidence Origin**: External IDE/tool execution trace is not independently inspectable outside the execution model; self-report log metadata is treated as evidence metadata, not ground truth.
- **Highest Evidence Level Used**: `E2` (Filesystem & produced artifact state) + `E3` (Approved contracts, SCP, FCL, SOURCE_REGISTER).
- **Evidence Contradictions**: None detected. All filesystem artifacts match operational contracts.

## 3. Dynamic Instance Coverage

- **Expected Wave IDs**: `{WAVE_00, WAVE_01, WAVE_02, WAVE_03}`
- **Actual Wave Plans**: `{WAVE_00.md, WAVE_01.md, WAVE_02.md, WAVE_03.md}`
- **Coverage Status**: `EXPECTED == ACTUAL` — PASS (`VAL-03`)

## 4. WAVE_MAP Capability Diff

### Wave Map Atom Diff Table

| Wave ID | Map Capability Atom | Exact Approved Support ID | Support Status | Support Executable Flag | Exact Approved Support Meaning | Eligibility Result | Semantic Subset Result | Result |
|---|---|---|---|---|---|---|---|---|
| `WAVE_00` | Local static configuration data adapter | `SCP-005` | `IN_SCOPE` | `YES` | Local static configuration data adapter | `PASS` | `PASS` | `PASS` |
| `WAVE_00` | Responsive layout & CSS token foundation | `SCP-006` | `IN_SCOPE` | `YES` | Modern tipografi, whitespace & responsive layout | `PASS` | `PASS` | `PASS` |
| `WAVE_01` | Landing page demosu sunumu | `SCP-001` | `IN_SCOPE` | `YES` | Kişisel marka landing page demosu sunumu | `PASS` | `PASS` | `PASS` |
| `WAVE_01` | Eda Pala adı ve Fizyoterapist unvanı sergilenmesi | `SCP-002` | `IN_SCOPE` | `YES` | Eda Pala adı ve Fizyoterapist unvanı sergilenmesi | `PASS` | `PASS` | `PASS` |
| `WAVE_01` | Tekirdağ konum bağlamı sunumu | `SCP-003` | `IN_SCOPE` | `YES` | Tekirdağ konum bağlamı sunumu | `PASS` | `PASS` | `PASS` |
| `WAVE_02` | Onaylı Instagram profiline outbound link / CTA | `SCP-004` | `IN_SCOPE` | `YES` | Instagram profiline outbound link / CTA | `PASS` | `PASS` | `PASS` |
| `WAVE_03` | Cross-cutting responsive layout & visual alignment QA | `SCP-006` | `IN_SCOPE` | `YES` | Modern tipografi, whitespace & responsive layout | `PASS` | `PASS` | `PASS` |

### Capability Atom Sets Summary
- `MAP_CAPABILITY_ATOMS`: `{CAP-00-01, CAP-00-02, CAP-01-01, CAP-01-02, CAP-01-03, CAP-02-01, CAP-03-01}`
- `COMMITTED_CAPABILITY_ATOMS`: `{CAP-00-01, CAP-00-02, CAP-01-01, CAP-01-02, CAP-01-03, CAP-02-01, CAP-03-01}`
- `HIDDEN_MAP_CAPABILITIES`: `[]` (Empty)
- `SUPPORTED_MAP_CAPABILITIES`: `{CAP-00-01, CAP-00-02, CAP-01-01, CAP-01-02, CAP-01-03, CAP-02-01, CAP-03-01}`
- `UNSUPPORTED_MAP_CAPABILITIES`: `[]` (Empty) — PASS (`VAL-04 Stage A`)

## 5. WAVE_PLAN Parent Capability Diff

### Plan Capability Diff Table

| Wave Plan | Plan Capability Atom | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|---|
| `WAVE_00.md` | `siteConfig` static data adapter module setup | `CAP-00-01` | `implementation-of` | `PASS` |
| `WAVE_00.md` | Semantik HTML5 layout container (`index.html`) | `CAP-00-02` | `implementation-of` | `PASS` |
| `WAVE_00.md` | CSS Custom Properties & Design Tokens setup | `CAP-00-02` | `implementation-of` | `PASS` |
| `WAVE_01.md` | Eda Pala H1 header & `Fizyoterapist` title presentation | `CAP-01-02` | `implementation-of` | `PASS` |
| `WAVE_01.md` | `Tekirdağ` location context badge & presentation | `CAP-01-03` | `implementation-of` | `PASS` |
| `WAVE_01.md` | Serene personal brand introduction layout | `CAP-01-01` | `implementation-of` | `PASS` |
| `WAVE_02.md` | Instagram Outbound CTA button component | `CAP-02-01` | `implementation-of` | `PASS` |
| `WAVE_02.md` | Secure outbound link protocol (`target="_blank"` `rel="noopener noreferrer"`) | `CAP-02-01` | `implementation-of` | `PASS` |
| `WAVE_03.md` | Whole-project responsive breakpoint QA | `CAP-03-01` | `verification-of` | `PASS` |
| `WAVE_03.md` | WCAG AA color contrast & accessibility audit | `CAP-03-01` | `verification-of` | `PASS` |
| `WAVE_03.md` | Source-closed content & claim integrity scan | `CAP-03-01` | `verification-of` | `PASS` |

### Plan Capability Sets Summary
- `PLAN_CAPABILITY_ATOMS`: All tasks map to parent capabilities.
- `PARENT_CAPABILITY_ATOMS`: `{CAP-00-01, CAP-00-02, CAP-01-01, CAP-01-02, CAP-01-03, CAP-02-01, CAP-03-01}`
- `NEW_PLAN_CAPABILITIES`: `[]` (Empty) — PASS (`VAL-04 Stage B`)

## 6. Source Registry Consistency + Classification

- `SOURCE_REGISTER_SOURCE_SET`: `{SRC-01}`
- `VALIDATION_SOURCE_SET`: `{SRC-01}`
- **Source Set Equality**: `YES`
- **Source Classification Errors**: `[]` (Empty)

| Source ID | Identity | Declared Source Role | Actual Artifact Role | Usage State | Classification Valid |
|---|---|---|---|---|---|
| `SRC-01` | `project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md` | factual-project-source | Primary Factual Evidence Source | consumed | `YES` |

- Approved Input (`inputs/approved/...`), Input Snapshot (`runs/.../INPUT_SNAPSHOT.md`), Engine contracts (`engine/*`), Package overlay (`packages/*`), Templates (`templates/*`), and References (`ref/*`) are correctly classified as derived/runtime authorities/schemas and are NOT included in `SRC-*` factual source set — PASS (`VAL-12`, `VAL-13`).

## 7. Source → FCL → Generated Claim Checks

| FCL ID | FCL Claim | Exact Supporting Factual Source ID | Source Usage State | Exact Source Evidence Location | FCL ⊆ Source Result | Generated Claim | Generated ⊆ FCL Result |
|---|---|---|---|---|---|---|---|
| `FCL-001` | Kişi Adı: Eda Pala | `SRC-01` | consumed | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L6` | `PASS` | "Eda Pala", "Fizyoterapist Eda Pala" | `PASS` |
| `FCL-002` | Mesleki Unvan: Fizyoterapist | `SRC-01` | consumed | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L7` | `PASS` | "Fizyoterapist" | `PASS` |
| `FCL-003` | Konum Bağlamı: Tekirdağ | `SRC-01` | consumed | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L8` | `PASS` | "Tekirdağ" | `PASS` |
| `FCL-004` | Instagram URL: `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv` | `SRC-01` | consumed | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L9` | `PASS` | Outbound Instagram link / CTA | `PASS` |

- All generated factual prose items strictly match `FCL-001` .. `FCL-004`. Zero invented medical/clinic/address claims — PASS (`VAL-13`).

## 8. External Source Consumption Checks

- External factual sources explicitly requested: `None`
- External sources registered: `None`
- Unverified external consumption claims: `None` — PASS (`VAL-13`)

## 9. Point-of-Use Template + Quality-Reference Evidence

- **Observable Trace Status**: `UNAVAILABLE` (External trace cannot be independently verified outside the execution environment).
- **Canonical Semantics**: When trace status is `UNAVAILABLE`, `VAL-15` evaluates to `UNVERIFIED`.
- **Read-Token Pairing Summary**:
  - `READ_TOKEN_COUNT`: `UNAVAILABLE`
  - `WRITE_EVENT_COUNT`: 15
  - `UNPAIRED_WRITES`: `UNVERIFIED`
  - `REUSED_READ_TOKENS`: `UNVERIFIED`
  - `VAL-15 Result`: `UNVERIFIED` (Leads to overall `CONDITIONAL PASS`)

## 10. Validation Timing / Chronology

- **Working Output Completion**: 2026-08-17T00:35:16+03:00
- **Validation Execution**: 2026-08-17T00:35:16+03:00
- **Validation Report Created**: 2026-08-17T00:35:16+03:00
- **Publication Target Date**: Pending Validation Acceptance
- **Chronology Valid**: `YES` — PASS (`VAL-16`)

## 11. Blocking Validation Checks (VAL-01 .. VAL-19)

| Gate ID | Gate Name | Status | Evidence Summary |
|---|---|---|---|
| `VAL-01` | Input Integrity | `PASS` | Approved `INPUT-FIZYOTERAPIST-EDA-PALA-V1` frozen & untouched. |
| `VAL-02` | Catalog Applicability | `PASS` | Document set complies with Catalog for `demo-frontend`/`standard`/`light`. |
| `VAL-03` | Dynamic Instance Coverage | `PASS` | Expected wave plans `{00, 01, 02, 03}` match actual plans 1:1. |
| `VAL-04` | Approved Scope Integrity | `PASS` | `UNSUPPORTED_MAP_CAPABILITIES == []`, `NEW_PLAN_CAPABILITIES == []`. |
| `VAL-05` | Wave Decomposition + Depth | `PASS` | `WHY_SEPARATE`, `UPSTREAM`, `HANDOFF` clear per wave; tasks implementation-ready. |
| `VAL-06` | Execution-Critical Completeness | `PASS` | Zero unresolved blocking decisions. |
| `VAL-07` | Cross-Doc Consistency | `PASS` | Consistent scope, delivery profile wording & source identity across all docs. |
| `VAL-08` | Decision Provenance & Coverage | `PASS` | `User Approved` vs `Engine Resolved` provenance justified. |
| `VAL-09` | Tech Context / Integration Readiness | `PASS` | Static data adapter (`siteConfig`), zero invented backend/database. |
| `VAL-10` | Design Profile & Quality | `PASS` | `design_planning: light` satisfied by comprehensive `DESIGN_RULES.md`. |
| `VAL-11` | Roadmap / State Alignment | `PASS` | `PROJECT_PLAN`, `WAVE_MAP`, `STATUS`, `TASKS` tell same wave reality. |
| `VAL-12` | Information Ownership & Conflicts | `PASS` | Canonical owners respected; `SRC-01` sole factual source in registry. |
| `VAL-13` | Source Claim Integrity | `PASS` | FCL ⊆ `SRC-01`; generated claims ⊆ FCL; source set equal. |
| `VAL-14` | Template & Leakage Integrity | `PASS` | Zero placeholders `[TBD]`, zero cross-project leakage. |
| `VAL-15` | Point-of-Use Trace Integrity | `UNVERIFIED` | Trace `UNAVAILABLE` externally -> canonical `UNVERIFIED` semantics. |
| `VAL-16` | Validation Timeline | `PASS` | Validation executed on active working output before publication. |
| `VAL-17` | Engine Boundary Integrity | `PASS` | Protected surfaces (`engine/*`, `templates/*`, `packages/*`) untouched. |
| `VAL-18` | Path & File Structure | `PASS` | Working output path mapping complies with `OUTPUT_STRUCTURE.md`. |
| `VAL-19` | Traceability & Lifecycle | `PASS` | Manifest, progress, run log & validation report tell same state. |

## 12. Violations & Evidence

- **Blocking Failures**: None.
- **Trace Limitations**: `VAL-15` is `UNVERIFIED` due to `Observable Trace Status: UNAVAILABLE`. Under Product Engine `VAL-15` rules, an unverified trace in the absence of any blocking failures yields a `CONDITIONAL PASS`.

## 13. Repair Actions

- No repairs required. The working output package is valid, source-closed, scope-compliant, and ready for publication upon operator acceptance.
