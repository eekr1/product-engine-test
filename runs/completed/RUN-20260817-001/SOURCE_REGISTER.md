# Source Register — RUN-20260817-001

## 1. Project Factual Sources

| Source ID | Source Path / Identity | Source Role | Usage State | Claim Scope | Exact Supporting Evidence Location |
|---|---|---|---|---|---|
| `SRC-01` | `project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md` | factual-project-source | consumed | İsim (Eda Pala), unvan (Fizyoterapist), konum bağlamı (Tekirdağ), Instagram URL | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L5-L9` |

- **SOURCE_REGISTER_SOURCE_SET**: `{SRC-01}`

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE (SRC-01)
→ APPROVED_PROJECT_INPUT (INPUT-FIZYOTERAPIST-EDA-PALA-V1)
→ INPUT_SNAPSHOT (RUN-20260817-001)
→ FCL (FCL-001 .. FCL-004)
→ generated output documentation
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Path / ID | Authority Role | Usage | Factual Source Identity? |
|---|---|---|---|
| `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` | Approved Input Authority | Approved boundary & filtering | NO |
| `runs/active/RUN-20260817-001/INPUT_SNAPSHOT.md` | Frozen Snapshot Authority | Frozen scope registry | NO |
| `engine/*` | Runtime Engine Contracts | Behavioral contracts | NO |
| `packages/DEMO_FRONTEND_PACKAGE.md` | Base Package Authority | Domain rules | NO |
| `packages/PLANNING_PROFILE_OVERLAY.md` | Shared Planning Overlay Authority | Planning minimums | NO |
| `templates/*` | Canonical Generation Schemas | Skeleton structures | NO |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Template File Path | Template ID | Version | Point-of-Use Target |
|---|---|---|---|
| `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | `source-register-template` | 1.6.0 | `runs/active/RUN-20260817-001/SOURCE_REGISTER.md` |
| `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | `project-brain-template` | 1.0.0 | `working-output/ai/PROJECT_BRAIN.md` |
| `templates/ai/PRODUCT_RULES_TEMPLATE.md` | `product-rules-template` | 1.0.0 | `working-output/ai/PRODUCT_RULES.md` |
| `templates/ai/TECH_CONTEXT_TEMPLATE.md` | `tech-context-template` | 1.0.0 | `working-output/ai/TECH_CONTEXT.md` |
| `templates/ai/CURRENT_STATUS_TEMPLATE.md` | `current-status-template` | 1.0.0 | `working-output/ai/CURRENT_STATUS.md` |
| `templates/ai/NEXT_TASKS_TEMPLATE.md` | `next-tasks-template` | 1.0.0 | `working-output/ai/NEXT_TASKS.md` |
| `templates/ai/DECISIONS_TEMPLATE.md` | `decisions-template` | 1.0.0 | `working-output/ai/DECISIONS.md` |
| `templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md` | `agent-instructions-template` | 1.0.0 | `working-output/ai/AGENT_INSTRUCTIONS.md` |
| `templates/project/PROJECT_PLAN_TEMPLATE.md` | `project-plan-template` | 1.0.0 | `working-output/project/PROJECT_PLAN.md` |
| `templates/project/README_TEMPLATE.md` | `readme-template` | 1.0.0 | `working-output/README.md` |
| `templates/design/DESIGN_RULES_TEMPLATE.md` | `design-rules-template` | 1.0.0 | `working-output/design/DESIGN_RULES.md` |
| `templates/waves/WAVE_MAP_TEMPLATE.md` | `wave-map-template` | 1.1.0 | `working-output/waves/WAVE_MAP.md` |
| `templates/waves/WAVE_PLAN_TEMPLATE.md` | `wave-plan-template` | 1.2.0 | `working-output/waves/plans/WAVE_*.md` |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference File Path | Purpose | Point-of-Use Target | Factual Source Identity? |
|---|---|---|---|
| `ref/waves/README.md` | Wave reference index & guidelines | `working-output/waves/WAVE_MAP.md` | NO |
| `ref/waves/WAVE_MAP_REFERENCE.md` | Compact wave map calibration | `working-output/waves/WAVE_MAP.md` | NO |
| `ref/waves/WAVE_07_HOME_REFERENCE.md` | Surface wave depth calibration | `working-output/waves/plans/WAVE_00.md`, `WAVE_01.md`, `WAVE_02.md` | NO |
| `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Cross-cutting QA depth calibration | `working-output/waves/plans/WAVE_03.md` | NO |

## 6. Factual Claim Allowlist

| FCL ID | Semantic Content | Supporting Source | Exact Evidence Location | Allowed Generated Wording | Forbidden Expansions |
|---|---|---|---|---|---|
| `FCL-001` | Kişi Adı: Eda Pala | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L6` | "Eda Pala", "Fizyoterapist Eda Pala" | Doktor, Uzman Fizyoterapist, Prof. Dr. |
| `FCL-002` | Mesleki Unvan: Fizyoterapist | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L7` | "Fizyoterapist" | Doktor, Ortopedist, Klinik Sahibi, Başfizyoterapist |
| `FCL-003` | Konum Bağlamı: Tekirdağ | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L8` | "Tekirdağ" | Exact adres, ilçe, klinik konumu, şube ağı |
| `FCL-004` | Instagram URL: `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv` | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md: L9` | Outbound Instagram link / CTA button | Profil içeriği factual claim'e dönüştürülemez |
