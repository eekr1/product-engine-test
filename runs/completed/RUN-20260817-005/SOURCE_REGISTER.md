# Source Register — RUN-20260817-005

## 1. Project Factual Sources

| Source ID | Source Path / Identity | Source Role | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| `SRC-001` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | `factual-project-source` | `consumed` | Canonical company facts, approved services, scope boundaries, desired architecture | Lines 1-287 |

- `SOURCE_REGISTER_SOURCE_SET` = { `SRC-001` }
- Count = 1

## 2. Canonical Truth Chain

```text
SRC-001 (PROJECT_SOURCE factual truth)
→ APPROVED_PROJECT_INPUT (inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md approval boundary)
→ INPUT_SNAPSHOT (runs/active/RUN-20260817-005/INPUT_SNAPSHOT.md frozen derivative)
→ FCL (SOURCE_REGISTER Factual Claim Allowlist)
→ Generated Documents (working-output/*)
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Path | Role | Status | Source Classification |
|---|---|---|---|
| `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` | Approved Project Truth Input | Active Approved | Approved derivative authority (NOT SRC) |
| `engine/CAPABILITY_SCOPE_RULES.md` | Capability Scope Authority | Active Rule | Engine runtime authority (NOT SRC) |
| `engine/SITE_ARCHITECTURE_RULES.md` | Site Architecture Semantics | Active Rule | Engine runtime authority (NOT SRC) |
| `engine/PLANNING_PROFILES.md` | Planning Profiles Authority | Active Rule | Engine runtime authority (NOT SRC) |
| `engine/RUN_PROTOCOL.md` | Lifecycle Authority | Active Rule | Engine runtime authority (NOT SRC) |
| `engine/GENERATION_PIPELINE.md` | Generation Pipeline | Active Rule | Engine runtime authority (NOT SRC) |
| `engine/VALIDATION_RULES.md` | Validation Rules | Active Rule | Engine runtime authority (NOT SRC) |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Template File | Document ID / Type | Version | Checkpoint Read Status |
|---|---|---|---|
| `templates/runs/RUN_MANIFEST_TEMPLATE.md` | Operational | 1.2.0 | Read at point-of-use |
| `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md` | Operational | 1.2.0 | Read at point-of-use |
| `templates/runs/PACKAGE_SELECTION_TEMPLATE.md` | Operational | 1.1.0 | Read at point-of-use |
| `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | Operational | 1.6.0 | Read at point-of-use |
| `templates/runs/ASSUMPTIONS_TEMPLATE.md` | Operational | 1.0.0 | Read at point-of-use |
| `templates/runs/CONFLICTS_TEMPLATE.md` | Operational | 1.0.0 | Read at point-of-use |
| `templates/runs/DECISIONS_TEMPLATE.md` | Operational | 1.0.0 | Read at point-of-use |
| `templates/runs/RUN_LOG_TEMPLATE.md` | Operational | 1.0.0 | Read at point-of-use |
| `templates/runs/PROGRESS_TEMPLATE.md` | Operational | 1.1.0 | Read at point-of-use |
| `templates/runs/VALIDATION_REPORT_TEMPLATE.md` | Operational | 2.0.0 | Read at point-of-use |
| `templates/runs/COMPLETION_REPORT_TEMPLATE.md` | Operational | 1.0.0 | Read at point-of-use |
| `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | `PROJECT-BRAIN` | 1.1.0 | Read at point-of-use |
| `templates/ai/PRODUCT_RULES_TEMPLATE.md` | `PRODUCT-RULES` | 1.1.0 | Read at point-of-use |
| `templates/ai/TECH_CONTEXT_TEMPLATE.md` | `TECH-CTX` | 1.2.0 | Read at point-of-use |
| `templates/ai/CURRENT_STATUS_TEMPLATE.md` | `STATUS` | 1.1.1 | Read at point-of-use |
| `templates/ai/NEXT_TASKS_TEMPLATE.md` | `TASKS` | 1.1.0 | Read at point-of-use |
| `templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md` | `AGENT-INST` | 1.1.0 | Read at point-of-use |
| `templates/ai/DECISIONS_TEMPLATE.md` | `DECISIONS` | 1.3.0 | Read at point-of-use |
| `templates/project/README_TEMPLATE.md` | `README-DOC` | 1.0.0 | Read at point-of-use |
| `templates/project/PROJECT_PLAN_TEMPLATE.md` | `PROJ-PLAN` | 1.2.0 | Read at point-of-use |
| `templates/design/DESIGN_RULES_TEMPLATE.md` | `DESIGN` | 1.1.0 | Read at point-of-use |
| `templates/design/DESIGN_SYSTEM_TEMPLATE.md` | `DESIGN-SYSTEM` | 1.1.0 | Read at point-of-use |
| `templates/design/GLOBAL_SHELL_TEMPLATE.md` | `GLOBAL-SHELL` | 1.2.0 | Read at point-of-use |
| `templates/design/SYSTEM_STATES_TEMPLATE.md` | `SYSTEM-STATES` | 1.1.0 | Read at point-of-use |
| `templates/design/PAGE_DESIGN_PACKAGE_TEMPLATE.md` | `PAGE-DESIGN` | 1.2.0 | Read at point-of-use per instance |
| `templates/waves/WAVE_MAP_TEMPLATE.md` | `WAVE-MAP` | 3.2.0 | Read at point-of-use |
| `templates/waves/WAVE_PLAN_TEMPLATE.md` | `WAVE-PLAN` | 3.6.0 | Read at point-of-use per instance |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference File | Purpose | Read Status | Applied In |
|---|---|---|---|
| `ref/waves/WAVE_MAP_REFERENCE.md` | Wave Map decomposition quality calibration | Read at point-of-use | `waves/WAVE_MAP.md` |
| `ref/waves/WAVE_07_HOME_REFERENCE.md` | UI / page wave quality depth calibration | Read at point-of-use | `WAVE_01`, `WAVE_02`, `WAVE_03`, `WAVE_04`, `WAVE_05` |
| `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Foundation / technical setup quality calibration | Read at point-of-use | `WAVE_00` |

## 6. Factual Claim Allowlist

| FCL ID | Fact / Claim | Source Ref | Exact Supporting Evidence | Allowed Semantic Scope | Forbidden Unbacked Expansion |
|---|---|---|---|---|---|
| `FCL-001` | Firma Adı: Trakya Teknik Makine | `SRC-001` | Line 7, 165 | Trakya Teknik Makine kurumsal firma ismi | Farklı şirket ismi, unvan genişletmesi |
| `FCL-002` | Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | `SRC-001` | Line 66, 156, 166 | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü | Distribütör, tek yetkili satıcı, fabrika sahibi |
| `FCL-003` | Hizmet 1: Yedek Parça Temini | `SRC-001` | Line 62, 108, 167 | Yedek Parça Temini hizmeti | Orijinal parça garantisi, stok merkezi, stok teslimi, marka taahhüdü |
| `FCL-004` | Hizmet 2: Yerinde Teknik Destek | `SRC-001` | Line 63, 111, 168 | Yerinde Teknik Destek hizmeti | Mobil gezici filo, 7/24 acil müdahale, SLA süresi, yanıt garantisi |
| `FCL-005` | Hizmet 3: Makine Bakım ve Onarım | `SRC-001` | Line 64, 116, 169 | Makine Bakım ve Onarım hizmeti | Periyodik bakım takvimi, revizyon garantisi, hidrolik pres uzmanlığı, marka spesifikasyonu |
| `FCL-006` | Faaliyet Alanı & Bölge: Trakya Bölgesi, endüstriyel/makine teknik servis bağlamı | `SRC-001` | Line 36, 170 | Trakya bölgesindeki işletmeler ve makine kullanıcıları | Türkiye geneli şube, uluslararası servis ağı |
