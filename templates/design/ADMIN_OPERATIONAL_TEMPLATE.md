# ADMIN_OPERATIONAL_TEMPLATE

## Template Metadata

```yaml
template_id: admin-operational-template
template_name: Admin / Operational Design Template
document_id: ADMIN-DESIGN
version: 1.0.0
status: active
template_type: document
category: design
supported_packages:
  - saas
  - content-platform
  - internal-tool
  - existing-project
  - other-ui
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_design_planning:
  - full
required_inputs:
  - product_rules
  - design_rules
  - design_system
  - system_states
dependencies:
  - DESIGN
  - DESIGN-SYSTEM
  - SYSTEM-STATES
output_filename: ADMIN_OPERATIONAL_DESIGN.md
```

## Amaç

Admin, moderation ve operational UI'ların dense-data, permission, destructive action, review/approval ve recovery davranışlarını tek canonical tasarım sözleşmesinde tanımlamak.

## Kullanım Koşulları

Yalnız gerçek admin/moderation/operational surface approved scope içinde olduğunda ve `design_planning: full` seçildiğinde üretilir.

## Zorunlu Bölümler

- Operational Information Architecture
- Roles / Permissions UX
- Dense Data & Table Patterns
- Search / Filter / Bulk Actions
- Destructive Actions & Confirmations
- Review / Approval Workflows
- Error / Recovery / Audit Feedback
- Responsive Constraints
- Accessibility / Keyboard Navigation

## İçerik Üretim Kuralları

- Permission modelini uyduramaz; approved product/auth scope'a dayanır.
- Destructive action'larda confirmation, reversibility ve audit feedback açık olmalıdır.
- Admin UI yalnız "dashboard cards" estetiğine indirgenemez; gerçek operasyon görevlerine göre tasarlanır.
- Dense-data ekranlarında okunabilirlik ve keyboard efficiency görsel gösterişten üstündür.
- Global design system korunur ancak operational density için gerekçeli varyasyonlar tanımlanabilir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{OPERATIONAL_IA}}`
- `{{ROLE_PERMISSION_UX}}`
- `{{DENSE_DATA_PATTERNS}}`
- `{{SEARCH_FILTER_BULK_PATTERNS}}`
- `{{DESTRUCTIVE_ACTION_RULES}}`
- `{{REVIEW_APPROVAL_FLOWS}}`
- `{{RECOVERY_AUDIT_FEEDBACK}}`
- `{{RESPONSIVE_CONSTRAINTS}}`
- `{{ACCESSIBILITY_KEYBOARD_RULES}}`

## Validation Beklentileri

- Product/auth rules ile çelişmemeli.
- Gerçek operational scope yoksa bu belge üretilmemelidir.
- Destructive ve permission-sensitive eylemler açıkça güvenli davranış taşımalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Admin / Operational Design

## 1. Operational Information Architecture

{{OPERATIONAL_IA}}

## 2. Roles / Permissions UX

{{ROLE_PERMISSION_UX}}

## 3. Dense Data & Table Patterns

{{DENSE_DATA_PATTERNS}}

## 4. Search / Filter / Bulk Actions

{{SEARCH_FILTER_BULK_PATTERNS}}

## 5. Destructive Actions & Confirmations

{{DESTRUCTIVE_ACTION_RULES}}

## 6. Review / Approval Workflows

{{REVIEW_APPROVAL_FLOWS}}

## 7. Error / Recovery / Audit Feedback

{{RECOVERY_AUDIT_FEEDBACK}}

## 8. Responsive Constraints

{{RESPONSIVE_CONSTRAINTS}}

## 9. Accessibility / Keyboard Navigation

{{ACCESSIBILITY_KEYBOARD_RULES}}

# OUTPUT DOCUMENT END
