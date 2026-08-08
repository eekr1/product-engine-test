# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Wave Plan Template
document_id: WAVE-PLAN
version: 1.0.0
status: active
template_type: document
category: waves
supported_packages:
  - saas
  - api-service
  - demo-frontend
  - corporate-website
  - existing-project
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - wave_map
conditional_inputs: []
dependencies:
  - WAVE-MAP
output_filename: WAVE_PLAN.md
```

## Amaç

Belirli bir dalganın (wave) ayrıntılı uygulama planını, görevlerini, bağımlılıklarını, kabul kriterlerini (acceptance criteria), doğrulama adımlarını ve kapsam dışı maddelerini tanımlamak.

## Kullanım Koşulları

`WAVE_MAP.md` üretilmiş projelerde her aktif dalga için ayrı ayrı üretilebilir (`Required: conditional`).

## Girdi Kaynakları

- `WAVE_MAP.md`
- `PRODUCT_RULES.md`, `TECH_CONTEXT.md`

## Zorunlu Bölümler

- Dalga Kimliği ve Amacı (Wave Identity & Goal)
- Dalga Kapsamı ve Sınırlar (Wave Scope Boundaries)
- Görev Kırılımı ve Sıralama (Task Breakdown & Sequence)
- Kabul Kriterleri (Acceptance Criteria)
- Doğrulama ve Test Adımları (Validation & Testing)
- Kapsam Dışı Maddeler (Out of Scope for this Wave)

## Koşullu Bölümler

- `[CONDITIONAL: include only if wave has specific risk]` Riskler ve Azaltma Planı

## İçerik Üretim Kuralları

- `WAVE_MAP.md` olmadan bağımsız olarak üretilemez.
- Dalganın tüm somut çıktıları ve tamamlanma koşulları açıkça ölçülebilir olmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{WAVE_ID}}`: Dalga kimliği (örn: `WAVE-01`).
- `{{WAVE_NAME}}`: Dalga adı.
- `{{WAVE_GOAL}}`: Dalganın temel hedefi.
- `{{WAVE_TASKS_LIST}}`: Dalga içi görevlerin detaylı listesi.
- `{{ACCEPTANCE_CRITERIA_LIST}}`: Kabul kriterleri listesi.
- `{{OUT_OF_SCOPE_LIST}}`: Bu dalgada yapılmayacak işler.

## Kapsam Dışı

- Diğer dalgaların detaylı görevleri (bkz: ilgili `WAVE_PLAN.md`)
- Projenin genel vizyonu (bkz: `PROJECT_BRAIN.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `wave_tasks`, `task_breakdown`, `acceptance_criteria`, `wave_timeline`.
- Referenced By: `NEXT_TASKS.md`.

## Delivery Profile Davranışı

- Geliştiricinin ilgili dalgayı başka hiçbir yere bakmadan tamamlayabilmesi için gereken detay düzeyini sağlar.

## Validation Beklentileri

- Görevler `WAVE_MAP.md` içinde tanımlanan dalga kapsamını aşmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Wave Plan: {{WAVE_ID}} ({{WAVE_NAME}})

- **Wave ID**: {{WAVE_ID}}
- **Wave Name**: {{WAVE_NAME}}
- **Amaç**: {{WAVE_GOAL}}

## 1. Dalga Kapsamı

- **Kapsam İçi**: {{WAVE_IN_SCOPE_SUMMARY}}
- **Kapsam Dışı**: {{OUT_OF_SCOPE_LIST}}

## 2. Görev Kırılımı ve Sıralama

{{WAVE_TASKS_LIST}}

## 3. Kabul Kriterleri (Acceptance Criteria)

{{ACCEPTANCE_CRITERIA_LIST}}

## 4. Doğrulama ve Test Adımları

- Dalga tamamlandığında çalıştırılacak doğrulama testleri ve kontroller.

[CONDITIONAL: include only if wave has specific risk]
## 5. Riskler ve Azaltma Planı

- Bu dalgaya özel teknik/operasyonel riskler ve çözüm planı.

# OUTPUT DOCUMENT END
