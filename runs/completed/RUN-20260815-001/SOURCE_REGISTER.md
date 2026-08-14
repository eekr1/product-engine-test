# Source Register — RUN-20260815-001

## 1. Girdi ve Sözleşme Kaynakları

- **Engine Specs**: `engine/` (Binding)
- **Input Snapshot**: `INPUT_SNAPSHOT.md` (Binding)

## 2. Template Sürüm Kayıtları

| Template ID | Template Name | Document ID | Version | Status |
|---|---|---|---|---|
| run-manifest-template | Run Manifest Template | RUN-MANIFEST | 1.1.0 | active |
| input-snapshot-template | Input Snapshot Template | N/A | 1.2.0 | active |
| package-selection-template | Package Selection Template | N/A | 1.0.0 | active |
| source-register-template | Source Register Template | N/A | 1.4.0 | active |
| assumptions-template | Assumptions Template | N/A | 1.0.0 | active |
| conflicts-template | Conflicts Template | N/A | 1.0.0 | active |
| decisions-template | Decisions Operational Template | N/A | 1.0.0 | active |
| run-log-template | Run Log Template | N/A | 1.0.0 | active |
| progress-template | Progress Template | N/A | 1.0.0 | active |
| validation-report-template | Validation Report Template | N/A | 1.7.0 | active |
| completion-report-template | Completion Report Template | N/A | 1.0.0 | active |
| project-brain-template | Project Brain Template | PROJECT-BRAIN | 1.0.0 | active |
| product-rules-template | Product Rules Template | PRODUCT-RULES | 1.0.0 | active |
| tech-context-template | Tech Context Template | TECH-CTX | 1.0.0 | active |
| design-rules-template | Design Rules Template | DESIGN | 1.0.0 | active |
| wave-map-template | Wave Map Template | WAVE-MAP | 1.0.0 | active |
| wave-plan-template | Wave Plan Template | WAVE-PLAN | 1.0.0 | active |
| project-plan-template | Project Plan Template | PROJ-PLAN | 1.0.0 | active |
| current-status-template | Current Status Template | STATUS | 1.0.0 | active |
| next-tasks-template | Next Tasks Template | TASKS | 1.0.0 | active |
| agent-instructions-template | Agent Instructions Template | AGENT-INST | 1.0.0 | active |
| decisions-template | Decisions Template | DECISIONS | 1.0.0 | active |
| readme-template | Readme Template | README-DOC | 1.0.0 | active |

## 3. Referans Belgeleri Kullanım Kaydı (Ref Usage)

| Source ID | Source Path / URL | Source Type | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | local project-start brief | consumed | Proje başlangıç hedefleri, firma yetkili servis statüsü, öne çıkan 3 hizmet ve iletişim verileri | Section 1-3 |
| SRC-002 | `https://www.trakyateknikmakine.com/` | live external site | registered | Doğrulanmış firma verileri, hizmet metinleri ve iletişim bilgileri | External URL (No independent live fetch performed in session) |

## 4. Factual Claim Allowlist

| FCL ID | FCL Semantic Content | Supporting Source ID | Exact Source Identity | Usage State | Exact Evidence Location |
|---|---|---|---|---|---|
| FCL-001 | Firma resmi adı: Trakya Teknik Makine | SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | Section 1 ("Trakya Teknik Makine'nin mevcut kurumsal web sitesini...") |
| FCL-002 | Bölge Yetkili Servis Statüsü: Disan Hidrolik Trakya Bölge Yetkili Servisi | SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | Section 1 ("Disan Hidrolik Trakya Bölge Yetkili Servisi") |
| FCL-003 | Hizmet 1: Yedek Parça Temini | SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | Section 1 ("Yedek Parça Temini") |
| FCL-004 | Hizmet 2: Yerinde Teknik Destek | SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | Section 1 ("Yerinde Teknik Destek") |
| FCL-005 | Hizmet 3: Makine Bakım ve Onarım | SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | Section 1 ("Makine Bakım ve Onarım") |
| FCL-006 | Hizmet Bölgesi: Trakya Bölgesi | SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | Section 1 ("Trakya Bölgesi") |
