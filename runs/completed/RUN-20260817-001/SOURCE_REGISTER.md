# Source Register — RUN-20260817-001

## 1. Project Factual Sources

| Source ID | Identity / Path | Source Role | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| `SRC-01` | `project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md` | `factual-project-source` | `consumed` | Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL | `FIZYOTERAPIST_EDA_PALA_PROJECT.md` L1-35 |

SOURCE_REGISTER_SOURCE_SET = { `SRC-01` }

## 2. Canonical Truth Chain

```text
SRC-01 (project-start source file evidence)
→ APPROVED_PROJECT_INPUT (inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md)
→ INPUT_SNAPSHOT (runs/active/RUN-20260817-001/INPUT_SNAPSHOT.md)
→ FCL (Factual Claim Allowlist)
→ Generated Documents (working-output/)
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Identity | Role | Notes |
|---|---|---|
| `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` | `approved-derivative-authority` | Approved truth boundary, NOT factual source |
| `engine/RUN_PROTOCOL.md` | `runtime-contract` | Operational protocol, NOT factual source |
| `engine/GENERATION_PIPELINE.md` | `runtime-contract` | Pipeline protocol, NOT factual source |
| `engine/VALIDATION_RULES.md` | `runtime-contract` | Validation rules, NOT factual source |
| `packages/DEMO_FRONTEND_PACKAGE.md` | `base-package` | Base domain rules, NOT factual source |
| `packages/PLANNING_PROFILE_OVERLAY.md` | `shared-overlay` | Document set overlay, NOT factual source |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Template File | Document ID | Version |
|---|---|---|
| `templates/runs/RUN_MANIFEST_TEMPLATE.md` | `RUN-MANIFEST` | 1.1.0 |
| `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md` | `not_applicable` | 1.2.0 |
| `templates/runs/PACKAGE_SELECTION_TEMPLATE.md` | `not_applicable` | 1.0.0 |
| `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | `not_applicable` | 1.6.0 |
| `templates/runs/ASSUMPTIONS_TEMPLATE.md` | `not_applicable` | 1.1.0 |
| `templates/runs/CONFLICTS_TEMPLATE.md` | `not_applicable` | 1.1.0 |
| `templates/runs/DECISIONS_TEMPLATE.md` | `not_applicable` | 1.1.0 |
| `templates/runs/RUN_LOG_TEMPLATE.md` | `not_applicable` | 1.1.0 |
| `templates/runs/PROGRESS_TEMPLATE.md` | `not_applicable` | 1.1.0 |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference File | Role | Usage Purpose |
|---|---|---|
| `ref/waves/README.md` | Quality Reference | Wave map decomposition guidance |
| `ref/waves/WAVE_MAP_REFERENCE.md` | Quality Reference | Wave map structure calibration |
| `ref/waves/WAVE_07_HOME_REFERENCE.md` | Quality Reference | Presentation wave implementation depth calibration |
| `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Quality Reference | Foundation/runtime wave implementation depth calibration |

## 6. Factual Claim Allowlist

| FCL ID | Claim Content | Source Ref | Exact Source Evidence | Approved Semantic Scope |
|---|---|---|---|---|
| `FCL-01` | İsim: Eda Pala | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md` Line 27 | Kişinin resmi adı Eda Pala'dır. |
| `FCL-02` | Mesleki Unvan: Fizyoterapist | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md` Line 28 | Kişinin mesleki unvanı Fizyoterapist'tir. |
| `FCL-03` | Konum Bağlamı: Tekirdağ | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md` Line 29 | Hizmet/faaliyet konum bağlamı Tekirdağ'dır. |
| `FCL-04` | Outbound Instagram URL | `SRC-01` | `FIZYOTERAPIST_EDA_PALA_PROJECT.md` Line 30 | `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv` outbound CTA bağlantısıdır. Profil içeriği factual source değildir. |
