# AGENT_INSTRUCTIONS_TEMPLATE

## Template Metadata

```yaml
template_id: agent-instructions-template
template_name: Agent Instructions Template
document_id: AGENT-INST
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
  - approved_intake
  - project_brain
  - product_rules
  - tech_context
  - wave_map
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
  - TECH-CTX
  - WAVE-MAP
output_filename: AGENT_INSTRUCTIONS.md
```

## Amaç

Projede çalışacak herhangi bir yetkin AI agent için model-bağımsız çalışma, read-order, active-wave execution, code quality, verification ve documentation handoff kurallarını tanımlamak.

## Kullanım Koşulları

`implementation_planning: standard | full` projelerde zorunludur.

## Zorunlu Bölümler

- Canonical Read Order
- Agent Behavior Rules
- Active Wave Execution Rule
- Coding / Architecture Conventions
- Verification Mandates
- Documentation Update / Handoff Rule
- Stop / Clarification Rules

## İçerik Üretim Kuralları

- Claude/Gemini/GPT/Codex gibi modele özel çalışma kuralı yazılmaz.
- Product Engine runtime authority ile çelişemez.
- Agent aktif WAVE_PLAN scope'u dışına sessizce çıkamaz.
- Yeni mimari karar gerektiğinde DECISIONS/clarification mekanizması kullanılmalıdır.
- Demo/prototype gerekçesiyle quality floor düşürülemez.
- Wave sonunda gerçek ilerleme CURRENT_STATUS ve NEXT_TASKS'a yansıtılmalıdır.
- Alınan önemli kalıcı kararlar DECISIONS'a kaydedilmelidir.
- Tamamlanmamış iş completed gösterilemez.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{CANONICAL_READ_ORDER}}`
- `{{BEHAVIOR_RULES}}`
- `{{ACTIVE_WAVE_RULES}}`
- `{{CODING_ARCHITECTURE_CONVENTIONS}}`
- `{{VERIFICATION_MANDATES}}`
- `{{DOCUMENTATION_HANDOFF_RULES}}`
- `{{STOP_CLARIFICATION_RULES}}`

## Validation Beklentileri

- Model-specific private reasoning/prompt talebi bulunmamalı.
- Active wave ve documentation update kuralları açık olmalı.
- TECH_CONTEXT architecture boundary'leriyle çelişmemeli.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Agent Instructions

## 1. Canonical Read Order

{{CANONICAL_READ_ORDER}}

## 2. Agent Behavior Rules

{{BEHAVIOR_RULES}}

## 3. Active Wave Execution Rule

{{ACTIVE_WAVE_RULES}}

## 4. Coding / Architecture Conventions

{{CODING_ARCHITECTURE_CONVENTIONS}}

## 5. Verification Mandates

{{VERIFICATION_MANDATES}}

## 6. Documentation Update / Handoff Rule

{{DOCUMENTATION_HANDOFF_RULES}}

## 7. Stop / Clarification Rules

{{STOP_CLARIFICATION_RULES}}

# OUTPUT DOCUMENT END
