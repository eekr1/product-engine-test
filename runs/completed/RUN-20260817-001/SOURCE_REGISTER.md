# Source Register — RUN-20260817-001

## 1. Project Factual Sources

| Source ID | Path / Identity | Source Role | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| SRC-01 | `project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md` | factual-project-source | consumed | Canonical project identity, person name, professional title, location context, outbound Instagram URL, scope boundaries | Section 1, 6, 9 |

`SOURCE_REGISTER_SOURCE_SET`: `{"SRC-01"}`

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE (SRC-01: FIZYOTERAPIST_EDA_PALA_PROJECT.md)
→ APPROVED_PROJECT_INPUT (inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md)
→ INPUT_SNAPSHOT (runs/active/RUN-20260817-001/INPUT_SNAPSHOT.md)
→ FCL (Section 6)
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Path | Role | Usage Purpose |
|---|---|---|
| `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` | approved derivative authority | Frozen project truth & approved scope filter boundary |
| `runs/active/RUN-20260817-001/INPUT_SNAPSHOT.md` | frozen derivative registry | Run operational input snapshot and SCP registry |
| `engine/RUN_PROTOCOL.md` | runtime authority | Run lifecycle, operational records, and closure protocol |
| `engine/GENERATION_PIPELINE.md` | runtime authority | Point-of-use generation workflow & checkpoint rules |
| `engine/OUTPUT_STRUCTURE.md` | runtime authority | Physical output directory rules and owner category mappings |
| `engine/VALIDATION_RULES.md` | runtime authority | Canonical validation gate rules (VAL-01..VAL-19) |
| `packages/PLANNING_PROFILE_OVERLAY.md` | package authority | Implementation standard & design light document overlay |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Template ID | Template Path | Version | Usage |
|---|---|---|---|
| run-manifest-template | `templates/runs/RUN_MANIFEST_TEMPLATE.md` | 1.1.0 | RUN_MANIFEST.md |
| input-snapshot-template | `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md` | 1.2.0 | INPUT_SNAPSHOT.md |
| package-selection-template | `templates/runs/PACKAGE_SELECTION_TEMPLATE.md` | 1.0.0 | PACKAGE_SELECTION.md |
| source-register-template | `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | 1.6.0 | SOURCE_REGISTER.md |
| assumptions-template | `templates/runs/ASSUMPTIONS_TEMPLATE.md` | 1.0.0 | ASSUMPTIONS.md |
| conflicts-template | `templates/runs/CONFLICTS_TEMPLATE.md` | 1.0.0 | CONFLICTS.md |
| decisions-template | `templates/runs/DECISIONS_TEMPLATE.md` | 1.0.0 | DECISIONS.md |
| run-log-template | `templates/runs/RUN_LOG_TEMPLATE.md` | 1.0.0 | RUN_LOG.md |
| progress-template | `templates/runs/PROGRESS_TEMPLATE.md` | 1.0.0 | PROGRESS.md |
| wave-map-template | `templates/waves/WAVE_MAP_TEMPLATE.md` | 1.0.0 | WAVE_MAP.md |
| wave-plan-template | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 1.0.0 | WAVE_00.md..WAVE_03.md |
| validation-report-template | `templates/runs/VALIDATION_REPORT_TEMPLATE.md` | 1.0.0 | VALIDATION_REPORT.md |
| completion-report-template | `templates/runs/COMPLETION_REPORT_TEMPLATE.md` | 1.0.0 | COMPLETION_REPORT.md |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference ID | Path | Calibration Role | Point-of-Use Wave |
|---|---|---|---|
| REF-WAVE-MAP | `ref/waves/WAVE_MAP_REFERENCE.md` | Wave Map decomposition depth calibration | WAVE_MAP.md |
| REF-WAVE-HOME | `ref/waves/WAVE_07_HOME_REFERENCE.md` | UI/Landing/Feature wave plan depth calibration | WAVE_01.md, WAVE_02.md, WAVE_03.md |
| REF-WAVE-RUNTIME | `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Runtime/Foundation/State wave plan depth calibration | WAVE_00.md |

## 6. Factual Claim Allowlist

| Claim ID | Factual Claim Semantic Content | Exact Source ID | Exact Evidence Location | Allowed Usage | Constraints & Exclusions |
|---|---|---|---|---|---|
| FCL-001 | Kişi ismi: Eda Pala | SRC-01 | Section 9 (Line 103) | Name display in hero, header, title, footer, presentation copy | Must not add titles not in SRC-01 |
| FCL-002 | Mesleki unvan: Fizyoterapist | SRC-01 | Section 9 (Line 104) | Professional title presentation | Must not upgrade to "uzman fizyoterapist", "doktor", or specific sub-specialties |
| FCL-003 | Konum bağlamı: Tekirdağ | SRC-01 | Section 9 (Line 105) | General city/region context display | Must not convert to exact clinic address, district, service radius, or home visits |
| FCL-004 | Outbound Instagram URL: `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv` | SRC-01 | Section 9 (Line 106) | Outbound CTA / social link button (`target="_blank" rel="noopener noreferrer"`) | Must not claim official appointment channel, procedure, or scraped profile content |
