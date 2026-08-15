# Validation Report — RUN-20260815-001

- **Validation Result**: CONDITIONAL PASS (All structural gates PASS; VAL-15 UNVERIFIED due to external trace unavailability)
- **Validation Target**: `runs/active/RUN-20260815-001/working-output/`
- **Validation Date**: 2026-08-15T03:26:10+03:00

## 1. Canonical Gate Coverage

- **Expected Gates**: VAL-01 through VAL-19 (19/19)
- **Evaluated Gates**: VAL-01 through VAL-19 (19/19)
- **Missing Gates**: None (0)

## 2. Evidence Priority / Observable Trace Status

- **Observable Trace Status**: `UNAVAILABLE`
- **Trace Evidence Origin**: Internal agent execution logs / workspace filesystem.
- **Highest Evidence Level Used**: `E2 (Filesystem / Produced Artifact State)` & `E3 (Approved Input, SCP, FCL)`
- **Evidence Contradictions**: None detected.

## 3. Dynamic Instance Coverage

- **Expected Wave IDs**: `{'WAVE_00', 'WAVE_01', 'WAVE_02', 'WAVE_03', 'WAVE_04', 'WAVE_05'}`
- **Actual Generated Wave IDs**: `{'WAVE_00', 'WAVE_01', 'WAVE_02', 'WAVE_03', 'WAVE_04', 'WAVE_05'}`
- **Coverage Status**: PASS (`EXPECTED == ACTUAL`)

## 4. WAVE_MAP Capability Diff

| Wave ID | Map Capability Atom | Exact Approved Support ID | Exact Approved Support Meaning | Relation | Result |
|---|---|---|---|---|---|
| WAVE_00 | clean presentation-data access boundary | SCP-005 | Mock static adapter interface | detail-of | PASS |
| WAVE_00 | local mock static data adapter | SCP-005 | Modüler JS mock data provider | implementation-of | PASS |
| WAVE_01 | Trakya Teknik Makine kurumsal adı sunumu | SCP-001, SCP-006 | Firma adı başlık/logo alanı | implementation-of | PASS |
| WAVE_01 | Disan Hidrolik Yetkili Servis statüsü | SCP-002 | Yetkili servis badge'i | implementation-of | PASS |
| WAVE_01 | Hero seviyesi direct contact CTA | SCP-004 | `tel:` ve `mailto:` direct CTA | implementation-of | PASS |
| WAVE_02 | Trakya bölgesi makine servis bağlamı | SCP-006 | Bölgesel teknik servis tanıtımı | implementation-of | PASS |
| WAVE_03 | Yedek Parça Temini hizmet sunumu | SCP-003, FCL-003 | 1. Approved Hizmet Kartı | implementation-of | PASS |
| WAVE_03 | Yerinde Teknik Destek hizmet sunumu | SCP-003, FCL-004 | 2. Approved Hizmet Kartı | implementation-of | PASS |
| WAVE_03 | Makine Bakım ve Onarım hizmet sunumu | SCP-003, FCL-005 | 3. Approved Hizmet Kartı | implementation-of | PASS |
| WAVE_04 | Telefon direct contact CTA | SCP-004, FCL-007 | `tel:` bağlantılı buton | implementation-of | PASS |
| WAVE_04 | E-posta direct contact CTA | SCP-004, FCL-007 | `mailto:` bağlantılı buton | implementation-of | PASS |
| WAVE_04 | Kurumsal Footer yapısı | SCP-001 | Telif hakkı ve kurumsal footer | implementation-of | PASS |
| WAVE_05 | Bütüncül responsive demo uyumu | SCP-001 | Responsive breakpoint kontrolleri | implementation-of | PASS |
| WAVE_05 | Satış demosu kabul ve visual QA | SCP-001 | Demo kabul ve görsel QA | implementation-of | PASS |

- `MAP_CAPABILITY_ATOMS`: 14
- `SUPPORTED_MAP_CAPABILITIES`: 14
- `UNSUPPORTED_MAP_CAPABILITIES`: `[]` (Empty — PASS)
- `HIDDEN_MAP_CAPABILITIES`: `[]` (Empty — PASS)

## 5. WAVE_PLAN Parent Capability Diff

| Wave Plan | Plan Capability Atom | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|---|
| WAVE_00 | Clean presentation-data access boundary setup | clean presentation-data access boundary | implementation-of | PASS |
| WAVE_00 | Local mock static data adapter setup | local mock static data adapter | implementation-of | PASS |
| WAVE_01 | Header Shell brand name presentation | Trakya Teknik Makine kurumsal adı sunumu | implementation-of | PASS |
| WAVE_01 | Hero Authorized Service Badge presentation | Disan Hidrolik Yetkili Servis statüsü | implementation-of | PASS |
| WAVE_01 | Hero direct contact CTA implementation | Hero seviyesi direct contact CTA | implementation-of | PASS |
| WAVE_02 | Corporate Background & Regional Context Card | Trakya bölgesi makine servis bağlamı | implementation-of | PASS |
| WAVE_03 | Service Card 1 (Yedek Parça Temini) | Yedek Parça Temini hizmet sunumu | implementation-of | PASS |
| WAVE_03 | Service Card 2 (Yerinde Teknik Destek) | Yerinde Teknik Destek hizmet sunumu | implementation-of | PASS |
| WAVE_03 | Service Card 3 (Makine Bakım ve Onarım) | Makine Bakım ve Onarım hizmet sunumu | implementation-of | PASS |
| WAVE_04 | Contact Section Phone CTA (`tel:`) | Telefon direct contact CTA | implementation-of | PASS |
| WAVE_04 | Contact Section Email CTA (`mailto:`) | E-posta direct contact CTA | implementation-of | PASS |
| WAVE_04 | Footer Surface Markup & Copy | Kurumsal Footer yapısı | implementation-of | PASS |
| WAVE_05 | Responsive Breakpoint CSS Rules | Bütüncül responsive demo uyumu | implementation-of | PASS |
| WAVE_05 | Full Package Quality & Boundary Audit | Satış demosu kabul ve visual QA | implementation-of | PASS |

- `PLAN_CAPABILITY_ATOMS`: 14
- `PARENT_CAPABILITY_ATOMS`: 14
- `NEW_PLAN_CAPABILITIES`: `[]` (Empty — PASS)

## 6. Source Registry Consistency

| Source ID | SOURCE_REGISTER Identity | Validation Identity | SOURCE_REGISTER State | Validation State | Exact Match |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | consumed | YES |

- `SOURCE_SET_EQUAL`: YES

## 7. Source → FCL → Generated Claim Checks

| FCL ID | Factual Claim | Supporting Source ID | Exact Source Evidence | FCL ⊆ Source | Generated ⊆ FCL |
|---|---|---|---|---|---|
| FCL-001 | Firma Adı: Trakya Teknik Makine | SRC-001 | Line 18 | PASS | PASS |
| FCL-002 | Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | SRC-001 | Line 19 | PASS | PASS |
| FCL-003 | Ana Hizmet 1: Yedek Parça Temini | SRC-001 | Line 20 | PASS | PASS |
| FCL-004 | Ana Hizmet 2: Yerinde Teknik Destek | SRC-001 | Line 21 | PASS | PASS |
| FCL-005 | Ana Hizmet 3: Makine Bakım ve Onarım | SRC-001 | Line 22 | PASS | PASS |
| FCL-006 | Faaliyet Bağlamı: Trakya bölgesi makine servis bağlamı | SRC-001 | Line 23 | PASS | PASS |
| FCL-007 | İletişim CTA: Telefon (`tel:`) ve E-posta (`mailto:`) CTA | SRC-001 | Line 27 | PASS | PASS |

- `GENERATED_FACTUAL_CLAIMS`: All prose verified strictly bounded by FCL-001 - FCL-007.

## 8. External Source Consumption Checks

- External sources consumed: None (0)

## 9. Point-of-Use Read/Write Token Pairing

- **Observable Trace Status**: `UNAVAILABLE`
- **Pairing Result**: `UNVERIFIED` (Standard canonical behavior when automated trace inspector is not attached).

## 10. Validation Timing / Chronology

- `last_artifact_closed`: 2026-08-15T03:26:00+03:00
- `validation_started_at`: 2026-08-15T03:26:05+03:00
- `validation_report_created_at`: 2026-08-15T03:26:10+03:00
- `Chronology Status`: PASS (`last_artifact < validation_started_at <= validation_report_created_at`)

## 11. Blocking Validation Checks

| Gate ID | Gate Description | Status | Evidence / Note |
|---|---|---|---|
| VAL-01 | Intake & Input Snapshot | PASS | Approved snapshot frozen & immutable. |
| VAL-02 | Package & Document Catalog | PASS | `demo-frontend` + `PLANNING_PROFILE_OVERLAY` correctly resolved. |
| VAL-03 | Dynamic Instance Coverage | PASS | All 6 expected WAVE instances generated (`EXPECTED == ACTUAL`). |
| VAL-04 | Approved Scope Integrity | PASS | `UNSUPPORTED_MAP_CAPABILITIES` and `NEW_PLAN_CAPABILITIES` are empty. |
| VAL-05 | Wave Decomposition & Execution Depth | PASS | Map why/upstream/handoff explicit; all Wave Plans implementation-ready. |
| VAL-06 | Execution-Critical Decision Completeness | PASS | No unresolved blocking decisions. |
| VAL-07 | Cross-Document Execution Consistency | PASS | Delivery profile `Prototype` maintained across all artifacts. |
| VAL-08 | Decision Provenance & Coverage | PASS | Decision record vocabulary correctly applied (`User Approved`, `Engine Resolved`). |
| VAL-09 | Technical Context & Integration Readiness | PASS | Clean presentation-data boundary; no invented backend/API. |
| VAL-10 | Design Profile & Quality Baseline | PASS | `light` profile design floor maintained with non-generic industrial theme. |
| VAL-11 | Project Plan & State Alignment | PASS | `PROJECT_PLAN`, `WAVE_MAP`, `CURRENT_STATUS` and `NEXT_TASKS` aligned. |
| VAL-12 | Information Ownership & Assumptions | PASS | Canonical ownership and assumptions integrity maintained. |
| VAL-13 | Source & FCL Claim Integrity | PASS | FCL strictly subset of `SRC-001`; generated claims strictly subset of FCL. |
| VAL-14 | Template / Placeholder Cleanliness | PASS | No unresolved `[TBD]` or template placeholders. |
| VAL-15 | Point-of-Use Trace Integrity | UNVERIFIED | Trace UNAVAILABLE (Canonical conditional pass). |
| VAL-16 | Validation Target & Chronology | PASS | Target: `runs/active/RUN-20260815-001/working-output/`. |
| VAL-17 | Engine Protection Integrity | PASS | Protected engine/package/template surfaces read-only during run. |
| VAL-18 | Output & Operational Path Integrity | PASS | Paths strictly conform to `OUTPUT_STRUCTURE.md`. |
| VAL-19 | Traceability & Lifecycle | PASS | Manifest, progress, run log, and status records consistent. |

## 12. Violations & Evidence

- No blocking violations found.

## 13. Repair Actions

- No repairs required.

## 14. Publication Gate Authorization

- **Status**: Authorized for Publication under Conditional Pass (VAL-15 UNVERIFIED).
