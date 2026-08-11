# CURRENT_STATUS_TEMPLATE

## Template Metadata

```yaml
template_id: current-status-template
template_name: Current Status Template
document_id: STATUS
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
  - project_brain
  - wave_map
dependencies:
  - PROJECT-BRAIN
  - WAVE-MAP
output_filename: CURRENT_STATUS.md
```

## Amaç

Projenin anlık gerçeğini; aktif phase/wave'i, tamamlanan işleri, devam eden çalışmaları, blocker'ları ve sıradaki yönü tek yerde tutmak.

## Kullanım Koşulları

`implementation_planning: standard | full` projelerde zorunludur. New projede başlangıç state'i; existing projede mevcut gerçeklik state'i yazılır.

## Zorunlu Bölümler

- Current Phase / Active Wave
- Completed
- In Progress
- Known Blockers
- Immediate Priorities
- Last Verified State

## İçerik Üretim Kuralları

- Current truth ile desired state karıştırılmaz.
- New projede henüz uygulanmamış wave'ler tamamlanmış gösterilmez.
- Aktif wave WAVE_MAP ve ilgili WAVE_PLAN ile tutarlı olmalıdır.
- Bir agent çalışma sonunda yaptığı gerçek ilerlemeye göre bu belgeyi güncellemelidir.
- NEXT_TASKS sıradaki iş listesi; CURRENT_STATUS mevcut gerçeklik sahibidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{CURRENT_PHASE}}`
- `{{ACTIVE_WAVE}}`
- `{{COMPLETED_ITEMS}}`
- `{{IN_PROGRESS_ITEMS}}`
- `{{KNOWN_BLOCKERS}}`
- `{{IMMEDIATE_PRIORITIES}}`
- `{{LAST_VERIFIED_STATE}}`
- `{{LAST_UPDATED_DATE}}`

## Validation Beklentileri

- WAVE_MAP/WAVE_PLAN ile aktif wave çelişkisi olmamalı.
- NEXT_TASKS tamamlanmış işleri primary next task gibi göstermemeli.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Current Status

## 1. Current Phase / Active Wave

- **Phase**: {{CURRENT_PHASE}}
- **Active Wave**: {{ACTIVE_WAVE}}
- **Last Updated**: {{LAST_UPDATED_DATE}}

## 2. Completed

{{COMPLETED_ITEMS}}

## 3. In Progress

{{IN_PROGRESS_ITEMS}}

## 4. Known Blockers

{{KNOWN_BLOCKERS}}

## 5. Immediate Priorities

{{IMMEDIATE_PRIORITIES}}

## 6. Last Verified State

{{LAST_VERIFIED_STATE}}

# OUTPUT DOCUMENT END
