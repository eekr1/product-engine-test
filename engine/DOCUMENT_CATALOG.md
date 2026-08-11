# Document Catalog

## Amaç

Bu belge, Product Engine'in tanıdığı tüm canonical doküman türlerinin kayıt merkezidir.

Her doküman türü burada tek bir kimlikle kayıtlıdır. Aynı sorumluluk için iki farklı Document ID üretilemez.

Bu katalog `packages/`, `templates/`, planning profile sistemi ve validation katmanının ortak referansıdır.

---

## Katalog Kaydı Standart Biçimi

```text
Document ID            : Benzersiz canonical kimlik
Document Name          : Dosyanın adı veya dynamic instance pattern'i
Owner Category         : ai | project | design | waves | operational
Purpose                : Tek cümlelik sorumluluk
Required               : required | conditional | optional
Applicable Types       : Geçerli proje türleri
Applicable Profiles    : Geçerli delivery profile'lar
Implementation Planning: standard | full | N/A
Design Planning        : light | standard | full | N/A
Primary Info Owner     : Birincil bilgi alanları
Template Location      : Canonical template
Dependencies           : Önce çözülmesi gereken canonical belgeler
Validation Notes       : Özel doğrulama kuralları
```

`Applicable Profiles` teslim olgunluğunu; planning alanları ise planning depth'i ifade eder. Bu eksenler birbirinin yerine geçmez.

---

## Dependency Resolution Rule

Bir document dependency ilişkisi şu sırayla çözülür:

1. Target document aktif `project_type` için applicable mı?
2. Aktif `delivery_profile` için applicable mı?
3. Applicable bir implementation/design planning koşulu varsa approved profile bunu karşılıyor mu?
4. Target document'ın dependency listesi okunur.
5. Her dependency aynı type/profile/planning filtresinden geçirilir.
6. Applicable dependency zorunludur; non-applicable dependency skip edilir.
7. Skip edilen dependency'nin primary bilgisi başka belgeye taşınmaz.
8. Planning profile minimumu package daraltmasıyla aşılamaz.

---

# Core / AI Documents

## PROJECT-BRAIN — Project Brain

```text
Document ID            : PROJECT-BRAIN
Document Name          : PROJECT_BRAIN.md
Owner Category         : ai
Purpose                : Projenin amaç, kapsam, ana bağlam ve kritik karar özetinin birincil ajan başvuru belgesi.
Required               : required
Applicable Types       : Tüm türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : project_purpose, project_summary, scope_summary, key_decisions_summary, current_phase_summary
Template Location      : templates/ai/PROJECT_BRAIN_TEMPLATE.md
Dependencies           : Approved project intake
Validation Notes       : Diğer canonical belgelerle çelişmemeli.
```

## PRODUCT-RULES — Product Rules

```text
Document ID            : PRODUCT-RULES
Document Name          : PRODUCT_RULES.md
Owner Category         : ai
Purpose                : Ürünün davranış, kapsam, UX ve iş kuralı sınırlarını tanımlar.
Required               : required (applicable ürün türlerinde)
Applicable Types       : web-app, mobile-app, api-service, content-platform, landing-page, internal-tool, prototype, other
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : product_rules, behavior_constraints, scope_rules, ux_rules
Template Location      : templates/ai/PRODUCT_RULES_TEMPLATE.md
Dependencies           : PROJECT-BRAIN
Validation Notes       : Teknik stack veya design token sahibi yapılmamalıdır.
```

## TECH-CTX — Tech Context

```text
Document ID            : TECH-CTX
Document Name          : TECH_CONTEXT.md
Owner Category         : ai
Purpose                : Teknik stack, mimari boundary'ler ve integration readiness gerçekliğini tanımlar.
Required               : required
Applicable Types       : Tüm implementation-bearing türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : technical_stack, architecture_decisions, system_components, integration_points, integration_readiness, technical_constraints
Template Location      : templates/ai/TECH_CONTEXT_TEMPLATE.md
Dependencies           : PROJECT-BRAIN
Validation Notes       : Demo/prototype dahi olsa temiz boundary gerekir; onaylanmamış backend/API uydurulamaz.
```

## PROD-STRAT — Product Strategy

```text
Document ID            : PROD-STRAT
Document Name          : PRODUCT_STRATEGY.md
Owner Category         : ai
Purpose                : Uzun vadeli ürün konumlanması, rekabet ve büyüme yönünü tanımlar.
Required               : conditional
Applicable Types       : web-app, mobile-app, content-platform
Applicable Profiles    : Implementation Ready, Production Ready
Implementation Planning: full
Design Planning        : N/A
Primary Info Owner     : market_positioning, competitive_context, growth_targets, monetization_approach
Template Location      : templates/ai/PRODUCT_STRATEGY_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, PRODUCT-RULES
Validation Notes       : Kullanıcı tarafından doğrulanmamış ticari strateji uydurulamaz.
```

## STATUS — Current Status

```text
Document ID            : STATUS
Document Name          : CURRENT_STATUS.md
Owner Category         : ai
Purpose                : Projenin mevcut phase/wave durumunu, tamamlanan işleri ve blocker'ları gösterir.
Required               : required
Applicable Types       : Tüm türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : current_phase, current_wave, completed_items, known_blockers
Template Location      : templates/ai/CURRENT_STATUS_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, WAVE-MAP
Validation Notes       : New projede başlangıç durumu açıkça gösterilmeli; existing projede mevcut gerçekliği yansıtmalı.
```

## TASKS — Next Tasks

```text
Document ID            : TASKS
Document Name          : NEXT_TASKS.md
Owner Category         : ai
Purpose                : Sıradaki uygulanabilir görevleri aktif wave ile uyumlu biçimde listeler.
Required               : required
Applicable Types       : Tüm türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : immediate_tasks, task_priority, task_dependencies
Template Location      : templates/ai/NEXT_TASKS_TEMPLATE.md
Dependencies           : STATUS, WAVE-PLAN
Validation Notes       : Primary görevler aktif wave scope'unu aşmamalıdır.
```

## DECISIONS — Decisions

```text
Document ID            : DECISIONS
Document Name          : DECISIONS.md
Owner Category         : ai
Purpose                : Önemli teknik, ürün ve tasarım kararlarını kısa gerekçeleriyle kaydeder.
Required               : required
Applicable Types       : Tüm türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : architectural_decisions, product_decisions, design_decisions, decision_rationale
Template Location      : templates/ai/DECISIONS_TEMPLATE.md
Dependencies           : PROJECT-BRAIN
Validation Notes       : Karar ile assumption birbirine karıştırılmamalıdır.
```

## AGENT-INST — Agent Instructions

```text
Document ID            : AGENT-INST
Document Name          : AGENT_INSTRUCTIONS.md
Owner Category         : ai
Purpose                : Yeni ajanın projede çalışma, okuma, wave yürütme ve doküman güncelleme kurallarını tanımlar.
Required               : required
Applicable Types       : Tüm türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : agent_behavior_rules, working_priorities, coding_conventions, documentation_update_rules
Template Location      : templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, PRODUCT-RULES, WAVE-MAP
Validation Notes       : Product Engine authority ile çelişmemelidir; aktif wave dışına sessizce çıkamaz.
```

---

# Project Documents

## README-DOC — Project README

```text
Document ID            : README-DOC
Document Name          : README.md
Owner Category         : project
Purpose                : Projeye yeni katılan kişi/ajan için read-order ve başlangıç rehberi.
Required               : required
Applicable Types       : Tüm türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : project_summary, how_to_start, key_documents, read_order, project_links
Template Location      : templates/project/README_TEMPLATE.md
Dependencies           : PROJECT-BRAIN
Validation Notes       : İçerik tekrarından kaçınmalı; canonical belgeleri yönlendirmelidir.
```

## PROJ-PLAN — Project Plan

```text
Document ID            : PROJ-PLAN
Document Name          : PROJECT_PLAN.md
Owner Category         : project
Purpose                : Teslim yaklaşımı, milestone'lar, phase'ler ve execution mantığını tanımlar.
Required               : required
Applicable Types       : Tüm implementation-bearing türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : project_phases, milestones, delivery_sequence, resource_assumptions
Template Location      : templates/project/PROJECT_PLAN_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, WAVE-MAP
Validation Notes       : Onaylı scope ve wave map ile tutarlı olmalıdır.
```

## DATA — Data Model

```text
Document ID            : DATA
Document Name          : DATA_MODEL.md
Owner Category         : project
Purpose                : Kalıcı/önemli veri varlıklarını, ilişkilerini ve veri akışlarını tanımlar.
Required               : conditional
Applicable Types       : web-app, api-service, mobile-app, content-platform, internal-tool
Applicable Profiles    : Tüm profiller
Implementation Planning: full veya gerçek data scope zorunluluğu
Design Planning        : N/A
Primary Info Owner     : entities, relationships, data_flows, storage_decisions
Template Location      : templates/project/DATA_MODEL_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, TECH-CTX
Validation Notes       : Demo için sırf future backend ihtimali var diye sahte model üretilmez.
```

## API — API Contracts

```text
Document ID            : API
Document Name          : API_CONTRACTS.md
Owner Category         : project
Purpose                : Onaylı gerçek API yüzeyini tanımlar.
Required               : conditional
Applicable Types       : api-service, web-app, integration, mobile-app, internal-tool
Applicable Profiles    : Tüm profiller
Implementation Planning: full veya gerçek API scope zorunluluğu
Design Planning        : N/A
Primary Info Owner     : endpoints, request_formats, response_formats, auth_method, error_codes
Template Location      : templates/project/API_CONTRACTS_TEMPLATE.md
Dependencies           : TECH-CTX, DATA (applicable ise)
Validation Notes       : Integration readiness tek başına API belgesi üretmek için yeterli değildir.
```

## TEST — Test Strategy

```text
Document ID            : TEST
Document Name          : TEST_STRATEGY.md
Owner Category         : project
Purpose                : Kritik akışların nasıl doğrulanacağını ve test katmanlarını tanımlar.
Required               : conditional
Applicable Types       : web-app, api-service, mobile-app, content-platform, internal-tool
Applicable Profiles    : Tüm profiller
Implementation Planning: full veya risk/karmaşıklık gerektiriyorsa standard
Design Planning        : N/A
Primary Info Owner     : test_levels, test_scope, critical_flows, test_tools
Template Location      : templates/project/TEST_STRATEGY_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, TECH-CTX
Validation Notes       : Test kapsamı gerçek risk ve scope ile orantılı olmalıdır.
```

## DEPLOY — Deployment

```text
Document ID            : DEPLOY
Document Name          : DEPLOYMENT.md
Owner Category         : project
Purpose                : Onaylı deployment hedefini, release ve rollback yaklaşımını tanımlar.
Required               : conditional
Applicable Types       : web-app, api-service, mobile-app, infrastructure, internal-tool
Applicable Profiles    : Production Ready veya açık deployment scope
Implementation Planning: full
Design Planning        : N/A
Primary Info Owner     : deployment_target, deployment_steps, env_variables, rollback_strategy
Template Location      : templates/project/DEPLOYMENT_TEMPLATE.md
Dependencies           : TECH-CTX
Validation Notes       : Production target sessizce uydurulamaz.
```

## OPS — Operations

```text
Document ID            : OPS
Document Name          : OPERATIONS.md
Owner Category         : project
Purpose                : Production işletim, monitoring, backup ve incident yaklaşımını tanımlar.
Required               : conditional
Applicable Types       : web-app, api-service, infrastructure, internal-tool
Applicable Profiles    : Production Ready veya açık operations scope
Implementation Planning: full
Design Planning        : N/A
Primary Info Owner     : monitoring, alerting, backup, incident_response, maintenance_procedures
Template Location      : templates/project/OPERATIONS_TEMPLATE.md
Dependencies           : DEPLOY
Validation Notes       : Gerçek production scope yoksa üretilmez.
```

---

# Design Documents

## DESIGN — Design Rules

```text
Document ID            : DESIGN
Document Name          : DESIGN_RULES.md
Owner Category         : design
Purpose                : Projeye özgü visual language, UX ilkeleri, interaction ve accessibility tabanını tanımlar.
Required               : required (UI/UX applicable ise)
Applicable Types       : web-app, mobile-app, landing-page, content-platform, internal-tool, prototype, other(UI)
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : light, standard, full
Primary Info Owner     : visual_language, design_direction, interaction_principles, accessibility_rules
Template Location      : templates/design/DESIGN_RULES_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, PRODUCT-RULES
Validation Notes       : Generic template/sektör klişesi drift'i yasaktır; light kaliteyi düşürmez.
```

## DESIGN-SYSTEM — Design System

```text
Document ID            : DESIGN-SYSTEM
Document Name          : DESIGN_SYSTEM.md
Owner Category         : design
Purpose                : Token, typography, spacing, color role, component foundation ve UI primitive sistemini tanımlar.
Required               : required
Applicable Types       : UI/UX applicable türler
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : standard, full
Primary Info Owner     : design_tokens, typography_system, spacing_system, color_roles, foundational_components
Template Location      : templates/design/DESIGN_SYSTEM_TEMPLATE.md
Dependencies           : DESIGN
Validation Notes       : DESIGN_RULES visual direction ile tutarlı; page/feature belgelerinde tekrar icat edilmemeli.
```

## GLOBAL-SHELL — Global Shell

```text
Document ID            : GLOBAL-SHELL
Document Name          : GLOBAL_SHELL.md
Owner Category         : design
Purpose                : Global layout shell, navigation, common chrome ve responsive shell davranışını tanımlar.
Required               : required (shell/navigation applicable ise)
Applicable Types       : web-app, mobile-app, landing-page, content-platform, internal-tool, prototype, other(UI)
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : standard, full
Primary Info Owner     : global_layout, navigation_structure, shell_responsive_behavior, global_overlays
Template Location      : templates/design/GLOBAL_SHELL_TEMPLATE.md
Dependencies           : DESIGN, DESIGN-SYSTEM
Validation Notes       : Page-level içerik sahibi yapılmamalıdır.
```

## PAGE-DESIGN — Page / Screen Design Package

```text
Document ID            : PAGE-DESIGN
Document Name          : <PAGE_OR_SCREEN_SLUG>_DESIGN_PACKAGE.md (dynamic instances)
Owner Category         : design
Purpose                : Tek bir page/screen'in amaç, layout, section, action, state ve responsive sözleşmesini tanımlar.
Required               : required (page/screen-based UI'da her distinct implementation surface için)
Applicable Types       : web-app, mobile-app, landing-page, content-platform, internal-tool, prototype, other(UI)
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : standard, full
Primary Info Owner     : page_purpose, page_layout, page_sections, page_actions, page_responsive_behavior
Template Location      : templates/design/PAGE_DESIGN_PACKAGE_TEMPLATE.md
Dependencies           : DESIGN, DESIGN-SYSTEM, GLOBAL-SHELL (applicable ise), PRODUCT-RULES
Validation Notes       : Engine yalnız distinct implementation surface'ler için instance üretir; yapay dosya çoğaltılmaz.
```

## FEATURE-DESIGN — Feature Design Package

```text
Document ID            : FEATURE-DESIGN
Document Name          : <FEATURE_SLUG>_DESIGN_PACKAGE.md (dynamic instances)
Owner Category         : design
Purpose                : Tek bir karmaşık feature'ın cross-screen flow, interaction, state ve component ilişkilerini tanımlar.
Required               : conditional
Applicable Types       : UI/UX applicable türler
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : full
Primary Info Owner     : feature_flow, feature_interactions, feature_states, cross_screen_behavior
Template Location      : templates/design/FEATURE_DESIGN_PACKAGE_TEMPLATE.md
Dependencies           : DESIGN, DESIGN-SYSTEM, PRODUCT-RULES, PAGE-DESIGN (applicable instance'lar)
Validation Notes       : Basit page içeriği feature package'a dönüştürülmemeli; yalnız gerçek cross-screen/complex feature için üretilir.
```

## SYSTEM-STATES — System States

```text
Document ID            : SYSTEM-STATES
Document Name          : SYSTEM_STATES.md
Owner Category         : design
Purpose                : Loading, empty, error, success, disabled, permission ve ortak sistem state davranışlarını standardize eder.
Required               : required (interactive UI'da)
Applicable Types       : UI/UX applicable türler
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : standard, full
Primary Info Owner     : loading_states, empty_states, error_states, success_states, shared_feedback_patterns
Template Location      : templates/design/SYSTEM_STATES_TEMPLATE.md
Dependencies           : DESIGN, DESIGN-SYSTEM, PRODUCT-RULES
Validation Notes       : Page/feature state'leri bu global standardı tekrar icat etmemeli; yalnız override gerekçelendirilir.
```

## ADMIN-DESIGN — Admin / Operational Design

```text
Document ID            : ADMIN-DESIGN
Document Name          : ADMIN_OPERATIONAL_DESIGN.md
Owner Category         : design
Purpose                : Admin, moderation veya operational UI'ın dense-data, permission, destructive action ve workflow tasarımını tanımlar.
Required               : conditional
Applicable Types       : web-app, internal-tool, content-platform, other(UI)
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : full
Primary Info Owner     : admin_information_architecture, operational_flows, destructive_actions, permission_ui
Template Location      : templates/design/ADMIN_OPERATIONAL_TEMPLATE.md
Dependencies           : DESIGN, DESIGN-SYSTEM, GLOBAL-SHELL, SYSTEM-STATES, PRODUCT-RULES
Validation Notes       : Admin/operational surface gerçek scope'ta değilse üretilmez.
```

---

# Wave Documents

## WAVE-MAP — Wave Map

```text
Document ID            : WAVE-MAP
Document Name          : WAVE_MAP.md
Owner Category         : waves
Purpose                : Projenin uçtan uca delivery wave'lerini, scope boundary ve dependency'lerini üst seviyede haritalandırır.
Required               : required
Applicable Types       : Tüm implementation-bearing türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : wave_structure, wave_goals, wave_scope_boundaries, wave_dependencies
Template Location      : templates/waves/WAVE_MAP_TEMPLATE.md
Dependencies           : PROJECT-BRAIN, PRODUCT-RULES, TECH-CTX
Validation Notes       : Dalga sayısı gerçek scope ile orantılı olmalı; Wave 00 uygulanabilir başlangıç foundation'ı sağlamalıdır.
```

## WAVE-PLAN — Wave Plan

```text
Document ID            : WAVE-PLAN
Document Name          : WAVE_<NN>.md (dynamic instances under waves/plans/)
Owner Category         : waves
Purpose                : Her wave'in görev, dependency, acceptance criteria, validation ve out-of-scope sözleşmesini tanımlar.
Required               : required
Applicable Types       : Tüm implementation-bearing türler
Applicable Profiles    : Tüm profiller
Implementation Planning: standard, full
Design Planning        : N/A
Primary Info Owner     : wave_tasks, task_breakdown, acceptance_criteria, validation_steps, wave_scope
Template Location      : templates/waves/WAVE_PLAN_TEMPLATE.md
Dependencies           : WAVE-MAP, TECH-CTX
Validation Notes       : WAVE_MAP içindeki her implementation wave için bir plan instance'ı olmalı; aktif wave tek başına uygulanabilir olmalıdır.
```

---

# Operational Documents

## RUN-MANIFEST — Run Manifest

```text
Document ID            : RUN-MANIFEST
Document Name          : RUN_MANIFEST.md
Owner Category         : operational
Purpose                : Tek bir Product Engine run'ının kimliğini, profile/package seçimlerini ve sonucunu kaydeder.
Required               : required (her run)
Applicable Types       : Tüm türler
Applicable Profiles    : Tüm profiller
Implementation Planning: N/A
Design Planning        : N/A
Primary Info Owner     : run_id, run_status, selected_package, delivery_profile, implementation_planning, design_planning, documents_produced, validation_result, output_version
Template Location      : templates/runs/RUN_MANIFEST_TEMPLATE.md
Dependencies           : Approved project intake
Validation Notes       : Run kayıtları final project output içine sızmaz.
```

---

## Dynamic Instance Rule

`PAGE-DESIGN`, `FEATURE-DESIGN` ve `WAVE-PLAN` tek canonical Document ID'ye sahip olup proje ihtiyacına göre birden fazla instance üretebilir.

```text
PAGE-DESIGN
→ HOME_DESIGN_PACKAGE.md
→ SERVICES_DESIGN_PACKAGE.md
→ ROOM_DESIGN_PACKAGE.md

FEATURE-DESIGN
→ MATCHING_FLOW_DESIGN_PACKAGE.md
→ ROOM_LIFECYCLE_DESIGN_PACKAGE.md

WAVE-PLAN
→ waves/plans/WAVE_00.md
→ waves/plans/WAVE_01.md
→ ...
```

Yeni instance yeni Document ID değildir. Aynı canonical template korunur.

---

## Katalog Notları

### Profile-Driven Required

`Required: required` planning belgeleri, ancak kendi `Implementation Planning` veya `Design Planning` alanı approved profile ile applicable olduğunda zorunludur.

Örnek:

```text
design_planning: light
→ DESIGN required
→ DESIGN-SYSTEM / GLOBAL-SHELL / PAGE-DESIGN / SYSTEM-STATES applicable değil

implementation_planning: standard
→ TECH-CTX / STATUS / TASKS / DECISIONS / AGENT-INST / PROJ-PLAN / WAVE-MAP / WAVE-PLAN required
```

### Structural Support Artifacts

Catalog Document ID almayan `.env.example`, asset packaging veya diğer structural template'ler destek artifact'i olarak kalabilir. Bunlar canonical document selection yerine geçemez.

### Yeni Doküman Ekleme

Yeni Document ID yalnız mevcut owner sınırlarından bağımsız, tekrar etmeyen gerçek bir bilgi sorumluluğu varsa eklenir. Sırf yeni bir page/feature/wave instance'ı için yeni ID üretilemez.
