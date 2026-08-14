# Source Register — RUN-20260815-001

## 1. Girdi ve Sözleşme Kaynakları

- **Engine Specs**: `engine/` (Binding)
- **Input Snapshot**: `INPUT_SNAPSHOT.md` (Binding)

## 2. Template Sürüm Kayıtları

| Template Name | Template Location | Version | Status |
|---|---|---|---|
| Run Manifest Template | `templates/runs/RUN_MANIFEST_TEMPLATE.md` | 1.1.0 | active |
| Input Snapshot Template | `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md` | 1.2.0 | active |
| Package Selection Template | `templates/runs/PACKAGE_SELECTION_TEMPLATE.md` | 1.0.0 | active |
| Source Register Template | `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | 1.4.0 | active |
| Project Brain Template | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | 1.0.0 | active |
| Product Rules Template | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | 1.0.0 | active |
| Tech Context Template | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | 1.0.0 | active |
| Design Rules Template | `templates/design/DESIGN_RULES_TEMPLATE.md` | 1.0.0 | active |
| Wave Map Template | `templates/waves/WAVE_MAP_TEMPLATE.md` | 1.0.0 | active |
| Wave Plan Template | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 1.0.0 | active |
| Project Plan Template | `templates/project/PROJECT_PLAN_TEMPLATE.md` | 1.0.0 | active |
| README Template | `templates/project/README_TEMPLATE.md` | 1.0.0 | active |

## 3. Referans Belgeleri Kullanım Kaydı (Ref Usage)

| Source ID | Kaynak Path / URL | Tür | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | local brief | consumed | Proje hedefleri, scope, kullanıcılar, planning profile hint'leri | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` L1-201 |
| SRC-02 | `https://www.trakyateknikmakine.com/` | external website | registered | Mevcut firma bilgileri, yetkili servislik ve hizmet listesi | Existing site homepage |

## 4. Factual Claim Allowlist

| FCL ID | FCL Claim | Supporting Source ID | Source Identity | Usage State | Exact Source Evidence |
|---|---|---|---|---|---|
| FCL-001 | Firma adı Trakya Teknik Makine'dir | SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` L7 |
| FCL-002 | Trakya Teknik Makine, Disan Hidrolik Makine'nin Trakya Bölge Yetkili Servisidir | SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` L50, L91 |
| FCL-003 | Temel hizmetler: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım | SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` L92 |
| FCL-004 | Mevcut web altyapısı SITE123 tarafından desteklenmektedir | SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` L89 |
| FCL-005 | Demo potansiyel müşteri satış görüşmesi amacıyla hazırlanacaktır | SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` L15, L27 |
