# NEXT_TASKS_TEMPLATE

## Template Metadata

```yaml
template_id: next-tasks-template
template_name: Next Tasks Template
document_id: TASKS
version: 1.1.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_implementation_planning:
  - standard
  - full
required_inputs:
  - current_status
  - active_wave_plan
dependencies:
  - STATUS
  - WAVE-PLAN
output_filename: NEXT_TASKS.md
```

## Amaç

Aktif wave içinde sıradaki somut, ölçülebilir ve uygulanabilir görevleri kısa execution queue olarak tutmak.

## Kullanım Koşulları

`implementation_planning: standard | full` projelerde zorunludur.

## Zorunlu Bölümler

- Active Wave Reference
- Immediate Tasks
- Dependencies / Preconditions
- Per-Task Done Criteria
- Stop / Clarification Conditions

## İçerik Üretim Kuralları

- NEXT_TASKS yalnız aktif WAVE-PLAN scope'undan türetilir.
- Uzun vadeli backlog veya gelecekteki wave işleri primary next task olarak yazılmaz.
- Her görev atomic, uygulanabilir ve done kriteri olan bir eylemdir.
- Blocked/clarification gerektiren görev sessiz varsayımla devam ettirilmez.
- Aktif wave tamamlanınca NEXT_TASKS bir sonraki wave'e göre güncellenir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{ACTIVE_WAVE_ID}}`
- `{{ACTIVE_WAVE_PLAN_PATH}}`
- `{{IMMEDIATE_TASKS}}`
- `{{DEPENDENCIES_PRECONDITIONS}}`
- `{{TASK_DONE_CRITERIA}}`
- `{{STOP_CLARIFICATION_CONDITIONS}}`

## Validation Beklentileri

- Tüm primary tasks aktif wave scope'unda olmalı.
- CURRENT_STATUS blocker'larıyla çelişmemeli.
- Tamamlanmış task sıradaki iş gibi kalmamalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Next Tasks

## 1. Active Wave

- **Wave**: {{ACTIVE_WAVE_ID}}
- **Plan**: `{{ACTIVE_WAVE_PLAN_PATH}}`

## 2. Immediate Tasks

{{IMMEDIATE_TASKS}}

## 3. Dependencies / Preconditions

{{DEPENDENCIES_PRECONDITIONS}}

## 4. Per-Task Done Criteria

{{TASK_DONE_CRITERIA}}

## 5. Stop / Clarification Conditions

{{STOP_CLARIFICATION_CONDITIONS}}

# OUTPUT DOCUMENT END
