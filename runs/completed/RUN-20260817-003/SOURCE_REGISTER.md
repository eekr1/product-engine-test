# Source Register — RUN-20260817-003

## 1. Project Factual Sources

| Source ID | Identity / Path | Source Role | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | factual-project-source | Consumed | Primary self-contained project source truth | Sections 1, 4, 5, 6, 8, 9 |

> `SOURCE_REGISTER_SOURCE_SET` = `{SRC-01}`

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE (SRC-01: TRAKYA_TEKNIK_MAKINE_PROJECT.md)
→ APPROVED_PROJECT_INPUT (inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md)
→ INPUT_SNAPSHOT (runs/active/RUN-20260817-003/INPUT_SNAPSHOT.md)
→ FCL (SOURCE_REGISTER Section 6)
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Name | Path | Category | Role |
|---|---|---|---|
| APPROVED_PROJECT_INPUT | `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` | Approved Derivative | Canonical approved input & filter boundary |
| INPUT_SNAPSHOT | `runs/active/RUN-20260817-003/INPUT_SNAPSHOT.md` | Frozen Derivative | Operational frozen input & SCP registry |
| ENGINE_BOOT | `engine/BOOT.md` | Engine Authority | Canonical boot order |
| ENGINE_RUN_PROTOCOL | `engine/RUN_PROTOCOL.md` | Engine Authority | Lifecycle and operational rules |
| ENGINE_GENERATION_PIPELINE | `engine/GENERATION_PIPELINE.md` | Engine Authority | Checkpoint and point-of-use pipeline |
| ENGINE_OUTPUT_STRUCTURE | `engine/OUTPUT_STRUCTURE.md` | Engine Authority | Final publication structure |
| ENGINE_VALIDATION_RULES | `engine/VALIDATION_RULES.md` | Engine Authority | VAL-01..VAL-19 validation rules |
| ENGINE_DOCUMENT_CATALOG | `engine/DOCUMENT_CATALOG.md` | Engine Authority | Canonical Document ID definitions |
| ENGINE_PLANNING_PROFILES | `engine/PLANNING_PROFILES.md` | Engine Authority | Implementation and design planning rules |
| ENGINE_PACKAGE_RULES | `engine/PACKAGE_RULES.md` | Engine Authority | Base package resolution rules |
| PLANNING_PROFILE_OVERLAY | `packages/PLANNING_PROFILE_OVERLAY.md` | Package Authority | Mandatory document overlays |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Template ID | Target File | Template Location | Version | Read Event |
|---|---|---|---|---|
| run-manifest-template | `RUN_MANIFEST.md` | `templates/runs/RUN_MANIFEST_TEMPLATE.md` | 1.1.0 | Point-of-use fresh read |
| input-snapshot-template | `INPUT_SNAPSHOT.md` | `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md` | 1.2.0 | Point-of-use fresh read |
| package-selection-template | `PACKAGE_SELECTION.md` | `templates/runs/PACKAGE_SELECTION_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| source-register-template | `SOURCE_REGISTER.md` | `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | 1.6.0 | Point-of-use fresh read |
| assumptions-template | `ASSUMPTIONS.md` | `templates/runs/ASSUMPTIONS_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| conflicts-template | `CONFLICTS.md` | `templates/runs/CONFLICTS_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| run-decisions-template | `DECISIONS.md` | `templates/runs/DECISIONS_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| run-log-template | `RUN_LOG.md` | `templates/runs/RUN_LOG_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| progress-template | `PROGRESS.md` | `templates/runs/PROGRESS_TEMPLATE.md` | 1.1.0 | Point-of-use fresh read |
| readme-template | `README.md` | `templates/project/README_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| project-brain-template | `ai/PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| product-rules-template | `ai/PRODUCT_RULES.md` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| tech-context-template | `ai/TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | 2.2.0 | Point-of-use fresh read |
| status-template | `ai/CURRENT_STATUS.md` | `templates/ai/CURRENT_STATUS_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| tasks-template | `ai/NEXT_TASKS.md` | `templates/ai/NEXT_TASKS_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| agent-instructions-template | `ai/AGENT_INSTRUCTIONS.md` | `templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| decisions-template | `ai/DECISIONS.md` | `templates/ai/DECISIONS_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| project-plan-template | `project/PROJECT_PLAN.md` | `templates/project/PROJECT_PLAN_TEMPLATE.md` | 1.0.0 | Point-of-use fresh read |
| design-rules-template | `design/DESIGN_RULES.md` | `templates/design/DESIGN_RULES_TEMPLATE.md` | 2.0.0 | Point-of-use fresh read |
| wave-map-template | `waves/WAVE_MAP.md` | `templates/waves/WAVE_MAP_TEMPLATE.md` | 3.0.0 | Point-of-use fresh read |
| wave-plan-template | `waves/plans/WAVE_00.md` | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 3.5.0 | Point-of-use fresh read |
| wave-plan-template | `waves/plans/WAVE_01.md` | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 3.5.0 | Point-of-use fresh read |
| wave-plan-template | `waves/plans/WAVE_02.md` | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 3.5.0 | Point-of-use fresh read |
| wave-plan-template | `waves/plans/WAVE_03.md` | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 3.5.0 | Point-of-use fresh read |
| validation-report-template | `VALIDATION_REPORT.md` | `templates/runs/VALIDATION_REPORT_TEMPLATE.md` | 3.0.0 | Point-of-use fresh read |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference Location | Target Wave / Artifact | Purpose | Read Event |
|---|---|---|---|
| `ref/waves/README.md` | `waves/WAVE_MAP.md` | Decomposition reference guide | Point-of-use read |
| `ref/waves/WAVE_MAP_REFERENCE.md` | `waves/WAVE_MAP.md` | Wave map quality calibration | Point-of-use read |
| `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | `waves/plans/WAVE_00.md` | Service/data boundary depth reference | Point-of-use read |
| `ref/waves/WAVE_07_HOME_REFERENCE.md` | `waves/plans/WAVE_01.md` | Presentation/hero depth reference | Point-of-use read |
| `ref/waves/WAVE_07_HOME_REFERENCE.md` | `waves/plans/WAVE_02.md` | Feature/service cards depth reference | Point-of-use read |
| `ref/waves/WAVE_07_HOME_REFERENCE.md` | `waves/plans/WAVE_03.md` | Responsive/polish QA depth reference | Point-of-use read |

## 6. Factual Claim Allowlist

| FCL ID | Fact / Claim | Supported Semantic Meaning | Exact Supporting Evidence Location | Allowed Wording Boundary |
|---|---|---|---|---|
| FCL-001 | Firma Adı: Trakya Teknik Makine | Firmanın resmi ticari adı Trakya Teknik Makine'dir | SRC-01 Sections 1, 9 | "Trakya Teknik Makine" |
| FCL-002 | Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | Firmanın Disan Hidrolik Makine markasının Trakya Bölge Yetkili Servisi olması | SRC-01 Sections 1, 5, 6, 9 | "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" |
| FCL-003 | Hizmet 1: Yedek Parça Temini | Temel hizmet alanı olarak yedek parça temini sunulması | SRC-01 Sections 1, 4, 9 | "Yedek Parça Temini" (stok, orijinal parça, belirli marka uydurulamaz) |
| FCL-004 | Hizmet 2: Yerinde Teknik Destek | Temel hizmet alanı olarak yerinde teknik destek sunulması | SRC-01 Sections 1, 4, 9 | "Yerinde Teknik Destek" (mobil filo, acil müdahale, SLA uydurulamaz) |
| FCL-005 | Hizmet 3: Makine Bakım ve Onarım | Temel hizmet alanı olarak makine bakım ve onarım sunulması | SRC-01 Sections 1, 4, 9 | "Makine Bakım ve Onarım" (periyodik bakım, revizyon, hidrolik pres uydurulamaz) |
| FCL-006 | Faaliyet/Bölge Bağlamı: Trakya bölgesi, endüstriyel/makine teknik servis bağlamı | Firmanın Trakya bölgesinde endüstriyel ve makine teknik servisi bağlamında faaliyet göstermesi | SRC-01 Sections 1, 4, 9 | "Trakya Bölgesi" endüstriyel/makine teknik servis bağlamı (spesifik adres/şehir iddiasına dönüştürülemez) |
