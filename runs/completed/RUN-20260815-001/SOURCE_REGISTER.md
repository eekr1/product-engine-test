# Source Register — RUN-20260815-001

## 1. Project Factual Sources

| Source ID | Source Path / Identity | Source Role | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | factual-project-source | consumed | Project identity, approved facts, scope & constraints | Lines 1–199 |

`SOURCE_REGISTER_SOURCE_SET = {SRC-001}`

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE (SRC-001)
→ APPROVED_PROJECT_INPUT (inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md)
→ INPUT_SNAPSHOT (runs/active/RUN-20260815-001/INPUT_SNAPSHOT.md)
→ FCL (Factual Claim Allowlist)
→ Generated Documents
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Path / Identity | Classification | Purpose / Role | Factual Source? |
|---|---|---|---|
| `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` | approved-derivative-authority | Canonical input approval boundary | NO |
| `runs/active/RUN-20260815-001/INPUT_SNAPSHOT.md` | frozen-derivative-registry | Frozen input snapshot & Approved Scope Registry | NO |
| `engine/*` | runtime-contract | Engine pipeline, validation & run rules | NO |
| `packages/DEMO_FRONTEND_PACKAGE.md` | base-package-contract | Demo frontend package domain scope | NO |
| `packages/PLANNING_PROFILE_OVERLAY.md` | overlay-contract | Planning depth overlay rules | NO |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Document Target | Template Path | Template Version | Status | Read Time |
|---|---|---|---|---|
| `RUN_MANIFEST.md` | `templates/runs/RUN_MANIFEST_TEMPLATE.md` | 1.1.0 | active | 2026-08-15 |
| `INPUT_SNAPSHOT.md` | `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md` | 1.2.0 | active | 2026-08-15 |
| `PACKAGE_SELECTION.md` | `templates/runs/PACKAGE_SELECTION_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `SOURCE_REGISTER.md` | `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | 1.6.0 | active | 2026-08-15 |
| `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `PRODUCT_RULES.md` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `DESIGN_RULES.md` | `templates/design/DESIGN_RULES_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `WAVE_MAP.md` | `templates/waves/WAVE_MAP_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `WAVE_PLAN` | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `PROJECT_PLAN.md` | `templates/project/PROJECT_PLAN_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `CURRENT_STATUS.md` | `templates/ai/CURRENT_STATUS_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `NEXT_TASKS.md` | `templates/ai/NEXT_TASKS_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `AGENT_INSTRUCTIONS.md` | `templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `DECISIONS.md` | `templates/ai/DECISIONS_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `README.md` | `templates/project/README_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |
| `VALIDATION_REPORT.md` | `templates/runs/VALIDATION_REPORT_TEMPLATE.md` | 1.0.0 | active | 2026-08-15 |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference Path | Role / Calibration Purpose | Usage Scope | Factual Source? |
|---|---|---|---|
| `ref/waves/README.md` | Wave structure & calibration entry | WAVE_MAP generation calibration | NO |
| `ref/waves/WAVE_MAP_REFERENCE.md` | Compact wave map reference | WAVE_MAP generation calibration | NO |
| `ref/waves/WAVE_07_HOME_REFERENCE.md` | UI/surface wave depth reference | WAVE_01, WAVE_02, WAVE_03 depth calibration | NO |
| `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Runtime/QA wave depth reference | WAVE_00, WAVE_04 depth calibration | NO |

## 6. Factual Claim Allowlist

| FCL ID | Approved Fact / Claim | Supporting Source ID | Supporting Evidence Location | Claim Boundary / Constraints |
|---|---|---|---|---|
| FCL-001 | Firma Adı: Trakya Teknik Makine | SRC-001 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md#L96` | Exact name only; no invented legal extensions |
| FCL-002 | Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | SRC-001 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md#L97` | Exact authorized service status only |
| FCL-003 | Ana Hizmet 1: Yedek Parça Temini | SRC-001 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md#L98` | Service name only; no stock/OEM/warranty claims |
| FCL-004 | Ana Hizmet 2: Yerinde Teknik Destek | SRC-001 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md#L99` | Service name only; no mobile fleet/SLA/emergency claims |
| FCL-005 | Ana Hizmet 3: Makine Bakım ve Onarım | SRC-001 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md#L100` | Service name only; no periodic/revision/machinery type claims |
| FCL-006 | Faaliyet Bağlamı: Trakya bölgesi endüstriyel/makine teknik servis | SRC-001 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md#L101` | Context only; no specific branch/coverage claims |
| FCL-007 | İletişim Kanalları: Telefon ve e-posta direct contact CTA | SRC-001 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md#L59` | Direct contact capability; no invented exact values |
