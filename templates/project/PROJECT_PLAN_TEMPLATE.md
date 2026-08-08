# PROJECT_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: project-plan-template
template_name: Project Plan Template
document_id: PROJ-PLAN
version: 1.0.0
status: active
template_type: document
category: project
supported_packages:
  - saas
  - corporate-website
  - demo-frontend
  - api-service
  - existing-project
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
output_filename: PROJECT_PLAN.md
```

## Amaç

Projenin teslim aşamalarını (phases), kilometre taşlarını (milestones), zaman çizelgesini, teslimatlarını ve kabul koşullarını tanımlamak.

## Kullanım Koşulları

Implementation Ready ve Production Ready projelerde zorunludur/koşulludur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `PROJECT_BRAIN.md`, `WAVE_MAP.md` (varsa)

## Zorunlu Bölümler

- Proje Aşamaları ve Kilometre Taşları (Phases & Milestones)
- Bağımlılık Haritası (Dependencies Map)
- Teslimatlar ve Çıktılar (Deliverables)
- Aşamalı Kabul Koşulları (Acceptance Conditions)

## Koşullu Bölümler

- `[CONDITIONAL: include only if wave system is not used]` Zaman Çizelgesi ve Sıralama

## İçerik Üretim Kuralları

- Wave sistemi (`WAVE_MAP.md`) kullanılıyorsa, `PROJECT_PLAN.md` onun yerine geçmemeli; üst seviye teslimat aşamalarını özetlemelidir.
- Plan onaylı kapsam ile tamamen tutarlı olmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{PHASES_LIST}}`: Proje aşamaları ve kilit kilometre taşları.
- `{{DEPENDENCIES_MAP}}`: Aşamalar arası bağımlılıklar.
- `{{DELIVERABLES_LIST}}`: Her aşamada teslim edilecek somut çıktılar.
- `{{ACCEPTANCE_CONDITIONS_BLOCK}}`: Teslimat kabul koşulları.

## Kapsam Dışı

- Anlık görev listesi (bkz: `NEXT_TASKS.md`)
- Detaylı wave görev kırılımı (bkz: `WAVE_PLAN.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `project_phases`, `milestones`, `timeline`, `resource_plan`.
- Referenced By: `WAVE_MAP.md`, `README.md`.

## Delivery Profile Davranışı

- **Implementation Ready**: Net aşama hedefleri ve bağımlılık haritası.
- **Production Ready**: Canlıya geçiş risk yönetimi ve kabul kriterleri eklentisi.

## Validation Beklentileri

- Onaylı intake kapsamı dışına çıkan aşama icat edilmemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Project Plan

## 1. Proje Aşamaları ve Kilometre Taşları

{{PHASES_LIST}}

## 2. Bağımlılık Haritası

{{DEPENDENCIES_MAP}}

## 3. Teslimatlar ve Çıktılar

{{DELIVERABLES_LIST}}

## 4. Aşamalı Kabul Koşulları

{{ACCEPTANCE_CONDITIONS_BLOCK}}

[CONDITIONAL: include only if wave system is not used]
## 5. Zaman Çizelgesi ve Sıralama

- Dalga mimarisi kullanılmadığında geçerli üst seviye zaman planı.

# OUTPUT DOCUMENT END
