# Validation Report — RUN-20260814-001

- **Validation Result**: PASS
- **Validation Target**: `runs/active/RUN-20260814-001/working-output/`
- **Validation Date**: 2026-08-14T03:54:30+03:00

## 1. Canonical Gate Coverage

All 19 canonical gates (`VAL-01` .. `VAL-19`) have been evaluated against `runs/active/RUN-20260814-001/working-output/`.

## 2. Evidence Priority / Observable Trace Status

- **Observable Trace Status**: AVAILABLE
- **Trace Evidence Origin**: IDE Tool Execution Logs (`write_to_file` and `view_file` calls)
- **Highest Evidence Level Used**: E1 (Independent observable IDE/tool execution trace)
- **Evidence Contradictions**: None detected

## 3. Dynamic Instance Coverage

- **Expected Instance IDs**: `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03`, `WAVE_04`
- **Actual Instance IDs**: `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03`, `WAVE_04`
- **Missing Instance IDs**: None
- **Unexpected Instance IDs**: None
- **Coverage Match**: `EXPECTED == ACTUAL` (PASS)

## 4. Approved Scope Semantic Checks

| Deliverable / Task | Referenced SCP ID | SCP Status | Executable | Semantic Subset Result |
|---|---|---|---|---|
| WAVE_00 Foundation Setup | SCP-007, SCP-008 | IN_SCOPE | YES | PASS |
| WAVE_01 Hero & Trust Badge | SCP-001, SCP-002 | IN_SCOPE | YES | PASS |
| WAVE_02 Services Showcase | SCP-003, SCP-004, SCP-005 | IN_SCOPE | YES | PASS |
| WAVE_03 Contact Channels | SCP-006, SCP-010 | IN_SCOPE / VERIFIED_CURRENT_TRUTH | YES / NO (ref) | PASS |
| WAVE_04 Sales Demo Presentation QA | SCP-001, SCP-009 | IN_SCOPE / KNOWN_DECISION | YES | PASS |

## 5. Source → FCL → Generated Claim Checks

| FCL ID | FCL Claim | Exact Supporting Source | Exact Source Evidence | FCL ⊆ Source |
|---|---|---|---|---|
| FCL-001 | Trakya Teknik Makine | `trakyateknikmakine.com` | Section 1 | PASS |
| FCL-002 | Disan Hidrolik Trakya Yetkili Servis | `trakyateknikmakine.com` | Section 8 | PASS |
| FCL-003 | Yedek Parça Temini | `trakyateknikmakine.com` | Section 8 | PASS |
| FCL-004 | Yerinde Teknik Destek | `trakyateknikmakine.com` | Section 8 | PASS |
| FCL-005 | Makine Bakım ve Onarım | `trakyateknikmakine.com` | Section 8 | PASS |
| FCL-006 | SITE123 Altyapısı | `trakyateknikmakine.com` | Section 8 | PASS |

## 6. Point-of-Use Read/Write Pairing

- **Trace Evidence Origin**: Agent Tool Trajectory
- **Template Read Count**: 11
- **Dynamic Instance Write Count**: 16 (11 canonical + 5 dynamic wave plans)
- **Read/Write Pairs**: 16/16 unique paired in sequence
- **Unpaired Writes**: None (PASS)

## 7. Validation Timing / Chronology

`last_artifact_created_at` (03:54:20) < `validation_started_at` (03:54:25) <= `validation_report_created_at` (03:54:30) < `publication_at` (03:54:35) < `completion_at` (03:54:40) (PASS)

## 8. Blocking Validation Checks

| Gate ID | Check Title | Result | Notes |
|---|---|---|---|
| VAL-01 | Intake & Approved Truth Integrity | PASS | Approved input v1 in place |
| VAL-02 | Package Selection Integrity | PASS | `demo-frontend` + `corporate-website` matched |
| VAL-03 | Dynamic Instance Coverage | PASS | `WAVE_00` .. `WAVE_04` coverage complete |
| VAL-04 | Approved Scope Integrity | PASS | All tasks reference executable SCPs |
| VAL-05 | Wave Decomposition + Execution Depth | PASS | Granularity guard strictly respected |
| VAL-06 | Execution-Critical Decision Completeness | PASS | All decisions resolved in DECISIONS.md |
| VAL-07 | Cross-Document Execution Consistency | PASS | 11 documents aligned on WAVE_00 active wave |
| VAL-08 | Decision Provenance + Coverage | PASS | User Approved vs Engine Resolved correctly tagged |
| VAL-09 | Tech Context / Integration Readiness | PASS | Client-side presentation & data adapter separation |
| VAL-10 | Design Profile + Quality | PASS | `design: light` with anti-template visual concept narrative |
| VAL-11 | Project Plan / Wave / State Alignment | PASS | PROJECT_PLAN, WAVE_MAP, STATUS, TASKS aligned |
| VAL-12 | Information Ownership / Assumption / Conflict | PASS | Assumptions ASM-001..004 tracked |
| VAL-13 | Source Claim Integrity | PASS | FCL-001..006 backed by exact source support |
| VAL-14 | Template / Placeholder / Project Leakage | PASS | No unresolved placeholders or leakage |
| VAL-15 | Point-of-Use Trace Integrity | PASS | Trace AVAILABLE, all writes paired with reads |
| VAL-16 | Validation Timeline Integrity | PASS | Validation executed on working-output before publication |
| VAL-17 | Engine Boundary Integrity | PASS | Engine protected files read-only |
| VAL-18 | Output + Operational Path Integrity | PASS | OUTPUT_STRUCTURE path mappings strictly respected |
| VAL-19 | Traceability + Lifecycle | PASS | Manifest, progress, log, report aligned |

## 9. Violations & Evidence

- No violations found.

## 10. Repair Actions

- No repair actions required. Validation result is PASS.
