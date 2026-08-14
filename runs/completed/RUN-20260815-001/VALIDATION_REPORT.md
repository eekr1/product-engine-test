# Validation Report — RUN-20260815-001

- **Validation Result**: PASS
- **Validation Target**: `runs/active/RUN-20260815-001/working-output/`
- **Validation Date**: 2026-08-15T01:21:00+03:00

## 1. Canonical Gate Coverage

- **Expected Gates**: VAL-01 .. VAL-19 (19/19)
- **Executed Gates**: VAL-01 .. VAL-19 (19/19)
- **Missing Gates**: None

## 2. Evidence Priority / Observable Trace Status

- **Observable Trace Status**: AVAILABLE
- **Trace Evidence Origin**: Independent FileSystem & Tool Event Trace
- **Highest Evidence Level Used**: E2 (Filesystem / Produced Artifact State) & E3 (Approved Input, SCP, FCL, Engine Contracts)
- **Evidence Contradictions**: None

## 3. Dynamic Instance Coverage

- **Expected Wave IDs**: `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03`, `WAVE_04`, `WAVE_05`
- **Actual Wave Plans**: `waves/plans/WAVE_00.md`, `waves/plans/WAVE_01.md`, `waves/plans/WAVE_02.md`, `waves/plans/WAVE_03.md`, `waves/plans/WAVE_04.md`, `waves/plans/WAVE_05.md`
- **Coverage Match**: YES (`set(EXPECTED) == set(ACTUAL)`)

## 4. WAVE_MAP Capability Diff

| Wave ID | Map Capability Atom | Exact Approved Support ID | Exact Approved Support Meaning | Relation | Result |
|---|---|---|---|---|---|
| `WAVE_00` | Modular directory structure | SCP-001 | Modern responsive corporate frontend demo | detail-of | PASS |
| `WAVE_00` | Vanilla CSS design tokens | SCP-001 | Modern responsive corporate frontend demo | detail-of | PASS |
| `WAVE_00` | Static local mock data adapter | SCP-006 | Clean frontend service/data-access boundary | implementation-of | PASS |
| `WAVE_00` | HTML5 app shell | SCP-001 | Modern responsive corporate frontend demo | detail-of | PASS |
| `WAVE_01` | Global Header & Navigation | SCP-001 | Modern responsive corporate frontend demo | implementation-of | PASS |
| `WAVE_01` | Primary Hero Section | SCP-002 | Primary hero section with brand identity | implementation-of | PASS |
| `WAVE_01` | Hero Primary Conversion CTA | SCP-005 | Primary contact CTA surfaces | implementation-of | PASS |
| `WAVE_02` | Corporate About Section | SCP-003 | Corporate identity & Disan Authorized Service | implementation-of | PASS |
| `WAVE_02` | Disan Authorized Service Trust Badge / Panel | SCP-003 | Disan Hidrolik Trakya Authorized Service trust | implementation-of | PASS |
| `WAVE_03` | Spare Parts Service Card | SCP-004 | Three core services presentation | implementation-of | PASS |
| `WAVE_03` | On-Site Support Service Card | SCP-004 | Three core services presentation | implementation-of | PASS |
| `WAVE_03` | Maintenance & Repair Service Card | SCP-004 | Three core services presentation | implementation-of | PASS |
| `WAVE_04` | Phone Direct Contact Link (`tel:`) | SCP-005 | Primary contact CTA surfaces | implementation-of | PASS |
| `WAVE_04` | Email Direct Contact Link (`mailto:`) | SCP-005 | Primary contact CTA surfaces | implementation-of | PASS |
| `WAVE_04` | Contact Form Surface & Validation | SCP-005 | Primary contact CTA surfaces | implementation-of | PASS |
| `WAVE_05` | Cross-device responsive polish | SCP-001 | Modern responsive corporate frontend demo | verification-of | PASS |
| `WAVE_05` | Zero console errors & accessibility QA | SCP-001 | Modern responsive corporate frontend demo | verification-of | PASS |
| `WAVE_05` | Sales demo presentation readiness | SCP-001 | Modern responsive corporate frontend demo | verification-of | PASS |

- **MAP_CAPABILITY_ATOMS**: 18
- **SUPPORTED_MAP_CAPABILITIES**: 18
- **UNSUPPORTED_MAP_CAPABILITIES**: Empty (`[]`) -> PASS

## 5. WAVE_PLAN Parent Capability Diff

- **PLAN_CAPABILITY_ATOMS**: 18
- **PARENT_CAPABILITY_ATOMS**: 18
- **PLAN_TO_PARENT_RELATIONS**: All `implementation-of`, `detail-of`, or `verification-of`.
- **NEW_PLAN_CAPABILITIES**: Empty (`[]`) -> PASS

## 6. Source Registry Consistency

- **SOURCE_REGISTER_SOURCE_SET**: `SRC-01`, `SRC-02`
- **VALIDATION_SOURCE_SET**: `SRC-01`, `SRC-02`
- **SOURCE_SET_EQUAL**: YES

| Source ID | SOURCE_REGISTER Identity | Validation Identity | SOURCE_REGISTER Usage State | Validation Usage State | Exact Match |
|---|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | consumed | YES |
| SRC-02 | `https://www.trakyateknikmakine.com/` | `https://www.trakyateknikmakine.com/` | registered | registered | YES |

## 7. Source → FCL → Generated Claim Checks

- **FCL-001**: Firma adı Trakya Teknik Makine'dir (Source: SRC-01 L7) -> PASS
- **FCL-002**: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi (Source: SRC-01 L50, L91) -> PASS
- **FCL-003**: 3 temel hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) (Source: SRC-01 L92) -> PASS
- **FCL-004**: Mevcut web altyapısı SITE123 (Source: SRC-01 L89) -> PASS
- **FCL-005**: Demo satış görüşmesi odaklıdır (Source: SRC-01 L15, L27) -> PASS

## 8. External Source Consumption Checks

- **SRC-02**: `https://www.trakyateknikmakine.com/` -> `Usage State: registered` (Harici site canlı fetch izi olmadan `consumed` yazılmamıştır). -> PASS

## 9. Point-of-Use Read/Write Token Pairing

- **Observed Template Read Events**: 17 unique template reads preceding each dynamic document write.
- **Observed Dynamic Write Events**: 17 dynamic document writes.
- **Consumed Read Tokens**: 17 / 17
- **Unpaired Writes**: 0 -> PASS
- **Reused Read Tokens**: 0 -> PASS

## 10. Validation Timing / Chronology

- Checkpoint chronology: `template_read < document_write < validation_start < report_created`.
- Timeline Sequence: PASS

## 11. Blocking Validation Checks

| Gate ID | Description | Result |
|---|---|---|
| VAL-01 | Canonical Package Integrity | PASS |
| VAL-02 | Canonical Document Selection | PASS |
| VAL-03 | Dynamic Instance Coverage | PASS |
| VAL-04 | Approved Scope Integrity | PASS |
| VAL-05 | Wave Decomposition + Execution Depth | PASS |
| VAL-06 | Execution-Critical Decision Completeness | PASS |
| VAL-07 | Cross-Document Execution Consistency | PASS |
| VAL-08 | Decision Provenance + Coverage | PASS |
| VAL-09 | Tech Context / Integration Readiness | PASS |
| VAL-10 | Design Profile + Quality | PASS |
| VAL-11 | Project Plan / Wave / State Alignment | PASS |
| VAL-12 | Information Ownership / Assumption / Conflict Integrity | PASS |
| VAL-13 | Source Claim Integrity | PASS |
| VAL-14 | Template / Placeholder / Project Leakage | PASS |
| VAL-15 | Point-of-Use Trace Integrity | PASS |
| VAL-16 | Validation Timeline Integrity | PASS |
| VAL-17 | Engine Boundary Integrity | PASS |
| VAL-18 | Output + Operational Path Integrity | PASS |
| VAL-19 | Traceability + Lifecycle | PASS |

## 12. Violations & Evidence

- Blocking Violations: None

## 13. Repair Actions

- No repairs required.
