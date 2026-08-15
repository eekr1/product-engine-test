# Validation Report — RUN-20260815-01

- **Validation Result**: PASS
- **Validation Target**: `runs/active/RUN-20260815-01/working-output/`
- **Validation Date**: 2026-08-15T03:11:00+03:00

## 1. Canonical Gate Coverage

Expected Gates: `VAL-01` .. `VAL-19` (Eksiksiz 19 Kapı Uygulandı).
Executed Gates: 19 / 19.
Missing Gates: None.

## 2. Evidence Priority / Observable Trace Status

- **Observable Trace Status**: AVAILABLE
- **Trace Evidence Origin**: IDE Tool-Call Execution Log (`view_file` & `write_to_file` tool call history)
- **Highest Evidence Level Used**: E1 (Independent observable tool execution trace)
- **Evidence Contradictions**: None.

## 3. Dynamic Instance Coverage

- **EXPECTED WAVE IDs**: `{'WAVE_00', 'WAVE_01', 'WAVE_02', 'WAVE_03', 'WAVE_04'}`
- **ACTUAL WAVE PLANS**: `{'WAVE_00', 'WAVE_01', 'WAVE_02', 'WAVE_03', 'WAVE_04'}`
- **EXPECTED == ACTUAL**: YES (PASS)

## 4. WAVE_MAP Capability Diff

| Wave ID | Map Capability Atom | Exact Approved Support ID | Exact Approved Support Meaning | Relation | Result |
|---|---|---|---|---|---|
| WAVE_00 | Modern ve responsive kurumsal frontend demo temel mimarisi | SCP-001 | Modern frontend demo scaffolding and design tokens | subset-of | PASS |
| WAVE_00 | Mock/local içerik için temiz frontend service/data-access boundary | SCP-007 | Clean data access boundary abstraction | subset-of | PASS |
| WAVE_01 | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu | SCP-002 | Authorized Service status presentation | subset-of | PASS |
| WAVE_01 | Trakya Teknik Makine gerçek firma kimliği sunum temeli | SCP-009, SCP-010 | Company identity presentation | subset-of | PASS |
| WAVE_02 | Ana Hizmet 1: Yedek Parça Temini görsel ve metinsel sunumu | SCP-003 | Service 1 presentation | subset-of | PASS |
| WAVE_02 | Ana Hizmet 2: Yerinde Teknik Destek görsel ve metinsel sunumu | SCP-004 | Service 2 presentation | subset-of | PASS |
| WAVE_02 | Ana Hizmet 3: Makine Bakım ve Onarım görsel ve metinsel sunumu | SCP-005 | Service 3 presentation | subset-of | PASS |
| WAVE_02 | Hizmet qualifier'ları yokluğu kuralının uygulanması | SCP-011 | Strict factual service boundary | subset-of | PASS |
| WAVE_03 | Telefon ve e-posta direct-contact CTA yüzeyleri | SCP-006 | Direct-contact phone & email CTAs | subset-of | PASS |
| WAVE_03 | Trakya bölgesi endüstriyel/teknik servis bağlamının sunumu | SCP-009 | Regional industrial service context | subset-of | PASS |
| WAVE_04 | Satış görüşmesinde gösterilebilir nitelikte tamamlanmış görsel deneyim | SCP-008 | Sales demo presentation readiness & QA | subset-of | PASS |
| WAVE_04 | Modern ve responsive kurumsal frontend demo nihai doğrulaması | SCP-001 | Final responsive & quality verification | subset-of | PASS |

- `MAP_CAPABILITY_ATOMS` = 12 items
- `SUPPORTED_MAP_CAPABILITIES` = 12 items
- `UNSUPPORTED_MAP_CAPABILITIES` = `[]` (EMPTY — PASS)

## 5. WAVE_PLAN Parent Capability Diff

| Wave Plan | Plan Capability Atom | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|---|
| WAVE_00 | Modern HTML5/CSS/JS scaffolding & design token setup | Modern ve responsive kurumsal frontend demo temel mimarisi | implementation-of | PASS |
| WAVE_00 | Static mock data store `companyData.js` | Mock/local içerik için temiz frontend service/data-access boundary | implementation-of | PASS |
| WAVE_00 | Data access adapter `companyService.js` | Mock/local içerik için temiz frontend service/data-access boundary | implementation-of | PASS |
| WAVE_01 | Navbar & Brand Header Presentation | Trakya Teknik Makine gerçek firma kimliği sunum temeli | implementation-of | PASS |
| WAVE_01 | Disan Hidrolik Trakya Bölge Yetkili Servis Badge Component | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu | implementation-of | PASS |
| WAVE_01 | Industrial Hero Surface & Headline Composition | Trakya Teknik Makine gerçek firma kimliği sunum temeli | implementation-of | PASS |
| WAVE_02 | Services Section Grid Container | Ana Hizmet 1, 2, 3 sunum temeli | implementation-of | PASS |
| WAVE_02 | Service Card 1: Yedek Parça Temini Presentation | Ana Hizmet 1: Yedek Parça Temini görsel ve metinsel sunumu | implementation-of | PASS |
| WAVE_02 | Service Card 2: Yerinde Teknik Destek Presentation | Ana Hizmet 2: Yerinde Teknik Destek görsel ve metinsel sunumu | implementation-of | PASS |
| WAVE_02 | Service Card 3: Makine Bakım ve Onarım Presentation | Ana Hizmet 3: Makine Bakım ve Onarım görsel ve metinsel sunumu | implementation-of | PASS |
| WAVE_03 | Direct Contact CTA Block (`tel:` & `mailto:`) | Telefon ve e-posta direct-contact CTA yüzeyleri | implementation-of | PASS |
| WAVE_03 | Regional Service Context & Trust Block | Trakya bölgesi endüstriyel/teknik servis bağlamının sunumu | implementation-of | PASS |
| WAVE_04 | Comprehensive Responsive & Layout Shift Verification | Modern ve responsive kurumsal frontend demo nihai doğrulaması | verification-of | PASS |
| WAVE_04 | Sales Demo Presentation Quality Audit | Satış görüşmesinde gösterilebilir nitelikte tamamlanmış görsel deneyim | implementation-of | PASS |

- `PLAN_CAPABILITY_ATOMS` = 14 items
- `PARENT_CAPABILITY_ATOMS` = 12 items
- `NEW_PLAN_CAPABILITIES` = `[]` (EMPTY — PASS)

## 6. Source Registry Consistency

- `SOURCE_REGISTER_SOURCE_SET` = `{'SRC-001'}`
- `VALIDATION_SOURCE_SET` = `{'SRC-001'}`
- `SOURCE_SET_EQUAL`: YES (PASS)

| Source ID | SOURCE_REGISTER Identity | Validation Identity | SOURCE_REGISTER Usage State | Validation Usage State | Exact Match |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | consumed | YES (PASS) |

## 7. Source → FCL → Generated Claim Checks

| FCL ID | FCL Claim | Exact Supporting Source ID | Source Evidence Location | FCL ⊆ Source Result | Generated Claim ⊆ FCL Result |
|---|---|---|---|---|---|
| FCL-001 | Firma Adı: Trakya Teknik Makine | SRC-001 | Section 9 | PASS | PASS |
| FCL-002 | Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | SRC-001 | Section 9 | PASS | PASS |
| FCL-003 | Hizmet 1: Yedek Parça Temini | SRC-001 | Section 9 | PASS | PASS |
| FCL-004 | Hizmet 2: Yerinde Teknik Destek | SRC-001 | Section 9 | PASS | PASS |
| FCL-005 | Hizmet 3: Makine Bakım ve Onarım | SRC-001 | Section 9 | PASS | PASS |
| FCL-006 | Faaliyet Bağlamı: Trakya bölgesi endüstriyel makine servis bağlamı | SRC-001 | Section 9 | PASS | PASS |

## 8. External Source Consumption Checks

- External URL / third-party source: None (Source closed project run).

## 9. Point-of-Use Read/Write Token Pairing

Observed Dynamic Template Read Events:
- `R1`: `templates/waves/WAVE_MAP_TEMPLATE.md` (for WAVE_MAP)
- `R2`: `templates/waves/WAVE_PLAN_TEMPLATE.md` (for WAVE_00)
- `R3`: `templates/waves/WAVE_PLAN_TEMPLATE.md` (for WAVE_01)
- `R4`: `templates/waves/WAVE_PLAN_TEMPLATE.md` (for WAVE_02)
- `R5`: `templates/waves/WAVE_PLAN_TEMPLATE.md` (for WAVE_03)
- `R6`: `templates/waves/WAVE_PLAN_TEMPLATE.md` (for WAVE_04)

Observed Dynamic Write Events:
- `W1`: `working-output/waves/WAVE_MAP.md` (paired with R1)
- `W2`: `working-output/waves/plans/WAVE_00.md` (paired with R2)
- `W3`: `working-output/waves/plans/WAVE_01.md` (paired with R3)
- `W4`: `working-output/waves/plans/WAVE_02.md` (paired with R4)
- `W5`: `working-output/waves/plans/WAVE_03.md` (paired with R5)
- `W6`: `working-output/waves/plans/WAVE_04.md` (paired with R6)

Token Consumption Summary:
- `READ_TOKEN_COUNT`: 6
- `WRITE_EVENT_COUNT`: 6
- `CONSUMED_READ_TOKENS`: 6
- `UNPAIRED_WRITES`: 0 (PASS)
- `REUSED_READ_TOKENS`: 0 (PASS)

## 10. Validation Timing / Chronology

`last_artifact_checkpoint_closed_at` (2026-08-15T03:10:31) < `validation_started_at` (2026-08-15T03:11:00) <= `validation_report_created_at` (2026-08-15T03:11:05) < `publication_at`

## 11. Blocking Validation Checks

| Gate ID | Gate Name | Condition | Result |
|---|---|---|---|
| VAL-01 | Read Order Integrity | Boot order & README map clean | PASS |
| VAL-02 | Package Selection | Base package & overlay resolved | PASS |
| VAL-03 | Dynamic Instance Coverage | EXPECTED == ACTUAL | PASS |
| VAL-04 | Approved Scope Integrity | Stage A & Stage B capability diffs clean | PASS |
| VAL-05 | Decomposition & Depth | Boundaries explicit, depth implementation-ready | PASS |
| VAL-06 | Decision Completeness | No blocking unresolved decisions | PASS |
| VAL-07 | Execution Consistency | All documents tell same reality | PASS |
| VAL-08 | Decision Provenance | User Approved vs Engine Resolved correct | PASS |
| VAL-09 | Tech Context Boundary | Clean companyService boundary | PASS |
| VAL-10 | Design Quality | Light design rules non-generic & custom | PASS |
| VAL-11 | Project Plan Alignment | Roadmap mirrors WAVE_MAP | PASS |
| VAL-12 | Information Ownership | Canonical owners preserved | PASS |
| VAL-13 | Source Claim Integrity | FCL ⊆ Source, Generated ⊆ FCL | PASS |
| VAL-14 | Template Leakage | Zero TBD, zero unhandled placeholders | PASS |
| VAL-15 | Trace & Token Pairing | Read-tokens single-use, 0 unpaired writes | PASS |
| VAL-16 | Timeline & Target | Working output target valid | PASS |
| VAL-17 | Engine Boundary | No protected engine surfaces mutated | PASS |
| VAL-18 | Output Structure | Paths match OUTPUT_STRUCTURE | PASS |
| VAL-19 | Traceability & Lifecycle | Operational records consistent | PASS |

## 12. Violations & Evidence

- No violations detected.

## 13. Repair Actions

- No repairs required.
