# Source Register — RUN-20260815-01

## 1. Project Factual Source

| Source ID | Source Path | Type | Trust Level | Usage State | Claim Scope / Usage Purpose |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-file | Source Truth Authority | consumed | Canonical project description, company identity, approved 3 services, scope boundaries and constraints |

- **source_count**: 1

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE (SRC-001)
→ APPROVED_PROJECT_INPUT (INPUT-TRAKYA-TEKNIK-MAKINE-V1)
→ INPUT_SNAPSHOT (RUN-20260815-01)
→ FCL (FCL-001..FCL-006)
```

## 3. Template Sürüm Kayıtları

| Template ID | Target File / Artifact | Version |
|---|---|---|
| README_TEMPLATE.md | `README.md` | 1.1.0 |
| PROJECT_BRAIN_TEMPLATE.md | `ai/PROJECT_BRAIN.md` | 1.0.0 |
| PRODUCT_RULES_TEMPLATE.md | `ai/PRODUCT_RULES.md` | 1.0.0 |
| TECH_CONTEXT_TEMPLATE.md | `ai/TECH_CONTEXT.md` | 1.1.0 |
| CURRENT_STATUS_TEMPLATE.md | `ai/CURRENT_STATUS.md` | 1.0.0 |
| NEXT_TASKS_TEMPLATE.md | `ai/NEXT_TASKS.md` | 1.0.0 |
| DECISIONS_TEMPLATE.md (ai) | `ai/DECISIONS.md` | 1.0.0 |
| AGENT_INSTRUCTIONS_TEMPLATE.md | `ai/AGENT_INSTRUCTIONS.md` | 1.0.0 |
| PROJECT_PLAN_TEMPLATE.md | `project/PROJECT_PLAN.md` | 1.0.0 |
| DESIGN_RULES_TEMPLATE.md | `design/DESIGN_RULES.md` | 1.0.0 |
| WAVE_MAP_TEMPLATE.md | `waves/WAVE_MAP.md` | 1.2.0 |
| WAVE_PLAN_TEMPLATE.md | `waves/plans/WAVE_<NN>.md` | 1.3.0 |

## 4. Referans Belgeleri Kullanım Kaydı (Ref Usage)

| Ref ID | Ref File Path | Purpose | Consumption Mode |
|---|---|---|---|
| REF-001 | `ref/waves/README.md` | Wave Quality System overview | Calibration point-of-use |
| REF-002 | `ref/waves/WAVE_MAP_REFERENCE.md` | WAVE_MAP decomposition depth reference | Calibration point-of-use |
| REF-003 | `ref/waves/WAVE_07_HOME_REFERENCE.md` | Landing/page/UI WAVE_PLAN depth reference | Calibration point-of-use |
| REF-004 | `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Data boundary & state WAVE_PLAN depth reference | Calibration point-of-use |

## 5. Factual Claim Allowlist

| FCL ID | Approved Factual Claim | Supporting Source ID | Supporting Source Evidence Location | Allowed Semantic Meaning | Forbidden Modifiers / Claims |
|---|---|---|---|---|---|
| FCL-001 | Firma Adı: Trakya Teknik Makine | SRC-001 | Section 9 | Exact company name | Alternative names, legal suffixes without source |
| FCL-002 | Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | SRC-001 | Section 9 | Authorized service status for Disan Hidrolik Makine in Trakya region | Exclusive dealership, sole distributor, manufacturer claims |
| FCL-003 | Hizmet 1: Yedek Parça Temini | SRC-001 | Section 9 | Supply of machine spare parts | Stock availability, original part guarantee, specific brand/part coverage |
| FCL-004 | Hizmet 2: Yerinde Teknik Destek | SRC-001 | Section 9 | On-site technical support | Mobile fleet, emergency intervention, SLA / specific response time guarantees |
| FCL-005 | Hizmet 3: Makine Bakım ve Onarım | SRC-001 | Section 9 | Machine maintenance and repair | Periodic maintenance packages, overhaul, hydraulic press/power unit specifics |
| FCL-006 | Faaliyet Bağlamı: Trakya bölgesi, endüstriyel makine teknik servis bağlamı | SRC-001 | Section 9 | Technical service focus for industrial machinery in Trakya region | National/international service network, unverified operating hours or branch claims |
