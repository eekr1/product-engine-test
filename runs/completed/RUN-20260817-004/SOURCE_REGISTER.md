# Source Register — RUN-20260817-004

## 1. Project Factual Sources

| Source ID | Kaynak Yol / Kimlik | Tür / Rol | Usage State | Claim Kapsamı / İzin Verilen Gerçekler | Supporting Evidence Location |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-scenario / factual-project-source | consumed | Firma adı (Trakya Teknik Makine), Statü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi), Hizmet 1 (Yedek Parça Temini), Hizmet 2 (Yerinde Teknik Destek), Hizmet 3 (Makine Bakım ve Onarım), Faaliyet Bölgesi (Trakya Bölgesi). | Sections 1, 10 |

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE (SRC-001)
→ APPROVED_PROJECT_INPUT (v1)
→ INPUT_SNAPSHOT (RUN-20260817-004)
→ FCL (Factual Claim Allowlist)
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Name | File Path | Role | Usage State | Note |
|---|---|---|---|---|
| Approved Project Input | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` | Approved derivative project truth | consumed | Canonical input approval authority |
| Site Architecture Rules | `engine/SITE_ARCHITECTURE_RULES.md` | Engine architecture semantics authority | consumed | Corporate site rules |
| Package Rules | `engine/PACKAGE_RULES.md` | Engine package resolution authority | consumed | Package rules |
| Planning Profiles | `engine/PLANNING_PROFILES.md` | Engine planning depth authority | consumed | Profile rules |
| Document Catalog | `engine/DOCUMENT_CATALOG.md` | Engine catalog authority | consumed | Document definitions |
| Generation Pipeline | `engine/GENERATION_PIPELINE.md` | Engine runtime flow authority | consumed | Runtime pipeline |
| Validation Rules | `engine/VALIDATION_RULES.md` | Engine validation gate authority | consumed | Validation rules |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Template ID | File Path | Version | Checkpoint Usage |
|---|---|---|---|
| project-readme-template | `templates/project/README_TEMPLATE.md` | 1.1.0 | README-DOC generation |
| project-brain-template | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | 1.2.0 | PROJECT-BRAIN generation |
| product-rules-template | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | 1.2.0 | PRODUCT-RULES generation |
| tech-context-template | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | 1.2.0 | TECH-CTX generation |
| current-status-template | `templates/ai/CURRENT_STATUS_TEMPLATE.md` | 1.1.0 | STATUS generation |
| next-tasks-template | `templates/ai/NEXT_TASKS_TEMPLATE.md` | 1.1.0 | TASKS generation |
| agent-instructions-template | `templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md` | 1.2.0 | AGENT-INST generation |
| decisions-template | `templates/ai/DECISIONS_TEMPLATE.md` | 1.1.0 | DECISIONS generation |
| project-plan-template | `templates/project/PROJECT_PLAN_TEMPLATE.md` | 1.1.0 | PROJ-PLAN generation |
| design-rules-template | `templates/design/DESIGN_RULES_TEMPLATE.md` | 1.2.0 | DESIGN generation |
| design-system-template | `templates/design/DESIGN_SYSTEM_TEMPLATE.md` | 1.1.0 | DESIGN-SYSTEM generation |
| global-shell-template | `templates/design/GLOBAL_SHELL_TEMPLATE.md` | 1.2.0 | GLOBAL-SHELL generation |
| system-states-template | `templates/design/SYSTEM_STATES_TEMPLATE.md` | 1.1.0 | SYSTEM-STATES generation |
| page-design-package-template | `templates/design/PAGE_DESIGN_PACKAGE_TEMPLATE.md` | 1.2.0 | PAGE-DESIGN generation (7 instances) |
| wave-map-template | `templates/waves/WAVE_MAP_TEMPLATE.md` | 1.3.0 | WAVE-MAP generation |
| wave-plan-template | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 1.4.0 | WAVE-PLAN generation (5 instances) |
| source-register-template | `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | 1.6.0 | SOURCE_REGISTER operational write |
| validation-report-template | `templates/runs/VALIDATION_REPORT_TEMPLATE.md` | 1.4.0 | VALIDATION_REPORT operational write |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference ID | File Path | Usage Category | Purpose |
|---|---|---|---|
| REF-WAVE-MAP | `ref/waves/WAVE_MAP_REFERENCE.md` | Quality calibration | WAVE_MAP depth & structure reference |
| REF-WAVE-HOME | `ref/waves/WAVE_07_HOME_REFERENCE.md` | Quality calibration | UI wave depth reference |
| REF-WAVE-RUNTIME | `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Quality calibration | Technical runtime wave depth reference |

## 6. Factual Claim Allowlist

| FCL ID | Subject / Topic | Source-Backed Factual Content | Supporting Source Evidence | Prohibited Claim Expansions |
|---|---|---|---|---|
| FCL-001 | Firma Unvanı | Trakya Teknik Makine | `SRC-001` Section 1, 10 | Ek resmi unvanlar, ortaklar, şirket türü uydurması |
| FCL-002 | Servis Statüsü | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | `SRC-001` Section 1, 10 | Distribütörlük, ana üretici statüsü, başka markaların yetkili servisi iddiası |
| FCL-003 | Hizmet 1 | Yedek Parça Temini | `SRC-001` Section 1, 6, 10 | Stok garantisi, orijinal parça sertifikası, marka bazlı parça listesi |
| FCL-004 | Hizmet 2 | Yerinde Teknik Destek | `SRC-001` Section 1, 6, 10 | Mobil araç filosu, 7/24 acil müdahale, garanti edilen müdahale süresi (SLA) |
| FCL-005 | Hizmet 3 | Makine Bakım ve Onarım | `SRC-001` Section 1, 6, 10 | Periyodik bakım paketleri, revizyon garantisi, hidrolik pres/güç ünitesi veya spesifik makine uzmanlık iddiaları |
| FCL-006 | Faaliyet Bölgesi | Trakya Bölgesi | `SRC-001` Section 1, 10 | Türkiye geneli, uluslararası servis ağı, belirli şehir/adres harita iddiaları |
| FCL-007 | İletişim | Direct contact kanalları (telefon/e-posta) | `SRC-001` Section 6, 10 | Exact telefon numarası, e-posta adresi, fiziksel adres uydurulması (unknown/placeholder yönetilir) |
