# NEXT_TASKS_TEMPLATE

## Template Metadata

```yaml
template_id: next-tasks-template
template_name: Next Tasks Template
document_id: TASKS
version: 1.0.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - current_status
  - wave_plan
conditional_inputs: []
dependencies:
  - STATUS
output_filename: NEXT_TASKS.md
```

## Amaç

Ajanın veya ekibin sıradaki somut, ölçülebilir, sıralı ve bağımlılıkları net görevlerini listelemek.

## Kullanım Koşulları

Implementation Ready ve Production Ready profillerinde zorunludur.

## Girdi Kaynakları

- `CURRENT_STATUS.md`
- `WAVE_PLAN.md` (varsa)

## Zorunlu Bölümler

- Sıradaki Somut Görevler (Immediate Tasks)
- Öncelik Sıralaması ve Karmaşıklık (Task Priorities & Complexity)
- Görev Bağımlılıkları (Task Dependencies)
- Kabul Kriterleri (Acceptance Criteria per Task)

## Koşullu Bölümler

- `[CONDITIONAL: include only if wave architecture is used]` İlgili Dalga Bağlantıları

## İçerik Üretim Kuralları

- Görevler belirsiz veya soyut backlog maddeleri olmamalı; doğrudan uygulanabilir somut adımlardan oluşmalıdır.
- Her görevin açık bir kabul kriteri ve çıktısı belirtilmelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{IMMEDIATE_TASKS_LIST}}`: Numaralandırılmış somut görevler listesi.
- `{{TASK_DEPENDENCIES_TABLE}}`: Görev bağımlılıkları ve önkoşul tablosu.
- `{{ACCEPTANCE_CRITERIA_BLOCK}}`: Her görev için kabul kriterleri.

## Kapsam Dışı

- Uzun vadeli stratejik yol haritası (bkz: `PROJECT_PLAN.md`)
- Tamamlanmış geçmiş görevler (bkz: `CURRENT_STATUS.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `immediate_tasks`, `task_priority`, `task_dependencies`.
- Referenced By: `WAVE_PLAN.md`.

## Delivery Profile Davranışı

- **Implementation Ready**: Tam bağımlılıkları ve kabul kriterleriyle hazırlanmış kısa vadeli uygulanabilir görev seti.
- **Production Ready**: Güvenlik, test ve CI/CD adımlarını içeren görev kı kırılımları.

## Validation Beklentileri

- Görevler `CURRENT_STATUS.md` belgesindeki engellerle çelişmemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Next Tasks

## 1. Sıradaki Somut Görevler

{{IMMEDIATE_TASKS_LIST}}

## 2. Görev Bağımlılıkları Tablosu

{{TASK_DEPENDENCIES_TABLE}}

## 3. Görev Bazlı Kabul Kriterleri

{{ACCEPTANCE_CRITERIA_BLOCK}}

[CONDITIONAL: include only if wave architecture is used]
## 4. İlgili Dalga Bağlantıları

- Görevlerin ait olduğu Wave ID ve Wave Plan referansları.

# OUTPUT DOCUMENT END
