# Source Register — RUN-20260813-001

## 1. Girdi ve Sözleşme Kaynakları

| Source ID | Kaynak / Path | Tür | Sürüm / Tarih | Otorite | Kullanım Amacı |
|---|---|---|---|---|---|
| `SRC-001` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Source Brief | 2026-08-13 | High | Proje başlangıç senaryosu ve kısıtları |
| `SRC-002` | `https://www.trakyateknikmakine.com/` | Existing Site | Current | High | Mevcut firma bilgileri, yetkili servis unvanı ve hizmetler |
| `SRC-003` | `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` | Approved Input | V1 (2026-08-13) | Binding | Canonical approved project truth |
| `SRC-004` | `engine/` | Engine Specs | v0.2.0 | Binding | Product Engine çalışma zamanı sözleşmeleri |

## 2. Template Sürüm Kayıtları

| Template ID | Dosya Konumu | Versiyon | Kullanım Amacı |
|---|---|---|---|
| `project-brain-template` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | 1.1.0 | `PROJECT_BRAIN.md` üretimi |
| `product-rules-template` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | 1.1.0 | `PRODUCT_RULES.md` üretimi |
| `tech-context-template` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | 1.1.0 | `TECH_CONTEXT.md` üretimi |
| `current-status-template` | `templates/ai/CURRENT_STATUS_TEMPLATE.md` | 1.1.0 | `CURRENT_STATUS.md` üretimi |
| `next-tasks-template` | `templates/ai/NEXT_TASKS_TEMPLATE.md` | 1.1.0 | `NEXT_TASKS.md` üretimi |
| `decisions-template` | `templates/ai/DECISIONS_TEMPLATE.md` | 1.1.0 | `DECISIONS.md` üretimi |
| `agent-instructions-template` | `templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md` | 1.1.0 | `AGENT_INSTRUCTIONS.md` üretimi |
| `readme-template` | `templates/project/README_TEMPLATE.md` | 1.1.0 | `README.md` üretimi |
| `project-plan-template` | `templates/project/PROJECT_PLAN_TEMPLATE.md` | 1.1.0 | `PROJECT_PLAN.md` üretimi |
| `design-rules-template` | `templates/design/DESIGN_RULES_TEMPLATE.md` | 1.1.0 | `DESIGN_RULES.md` üretimi |
| `wave-map-template` | `templates/waves/WAVE_MAP_TEMPLATE.md` | 1.1.0 | `WAVE_MAP.md` üretimi |
| `wave-plan-template` | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 1.1.0 | `WAVE_<NN>.md` plan instance üretimi |

## 3. Referans Belgeleri Kullanım Kaydı (Ref Usage)

- `packages/DEMO_FRONTEND_PACKAGE.md` (v2.1.0): Domain scope ve wave granularity guard referansı.
- `packages/EXISTING_PROJECT_PACKAGE.md` (v2.0.0): Existing project transition kural referansı.
- `packages/PLANNING_PROFILE_OVERLAY.md` (v1.1.0): Implementation `standard` & design `light` overlay referansı.

## 4. Factual Claim Allowlist (FCL)

```text
FCL-001
Claim: Firma Unvanı "Trakya Teknik Makine"'dir.
Source ID: SRC-001, SRC-002
Source Location: Mevcut web sitesi başlığı ve brief kimliği
Status: Verified
Allowed Use: Branding, header, footer, corporate text

FCL-002
Claim: Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisidir.
Source ID: SRC-001, SRC-002
Source Location: Mevcut web sitesi duyuru ve hakkımızda bölümü
Status: Verified
Allowed Use: Authorized service badge, trust presentation, hero section

FCL-003
Claim: Firma "Yedek Parça Temini" hizmeti sunmaktadır.
Source ID: SRC-001, SRC-002
Source Location: Mevcut web sitesi hizmetler bölümü
Status: Verified
Allowed Use: Service cards, service detail presentation, CTA link

FCL-004
Claim: Firma "Yerinde Teknik Destek" hizmeti sunmaktadır.
Source ID: SRC-001, SRC-002
Source Location: Mevcut web sitesi hizmetler bölümü
Status: Verified
Allowed Use: Service cards, service detail presentation, CTA link

FCL-005
Claim: Firma "Makine Bakım ve Onarım" hizmeti sunmaktadır.
Source ID: SRC-001, SRC-002
Source Location: Mevcut web sitesi hizmetler bölümü
Status: Verified
Allowed Use: Service cards, service detail presentation, CTA link

FCL-006
Claim: Firma Trakya bölgesinde makine teknik servis ve destek sunmaktadır.
Source ID: SRC-001, SRC-002
Source Location: Brief ve mevcut site bölgesel tanım
Status: Verified
Allowed Use: Geographic scope presentation, hero subtitle, contact copy
```

Canonical Rule: Generated factual copy in project documentation must map to one of the above FCL claim IDs. Non-verified claims or invented factual modifiers are prohibited.
