# Document Catalog

## Amaç

Bu belge, Product Engine'in tanıdığı tüm doküman türlerinin kayıt merkezidir.

Her doküman türü burada tek bir kimlikle kayıtlıdır. Aynı dokümanın iki farklı kimlikle üretilmesi bu katalog sayesinde engellenir.

Bu katalog, `packages/` ve `templates/` sistemlerinin ortak referansıdır. Bir paket hangi dokümanları gerektirdiğini bu kataloğdaki kimliklerle belirtir. Template'ler bu kimliğe göre eşleştirilir.

## Kapsam Dışı

- Dokümanların tam metin içerikleri → `templates/`
- Gerçek paket listeleri → `packages/`
- Üretim promptları veya talimatlar
- Projeye özgü içerikler

---

## Katalog Kaydı Standart Biçimi

Her doküman aşağıdaki alanlarla kayıtlıdır:

```text
Document ID        : Benzersiz kısa kimlik (ör. PROJECT-BRAIN, TECH-CTX)
Document Name      : Dosyanın tam adı (ör. PROJECT_BRAIN.md)
Owner Category     : ai | project | design | waves | prompts | operational
Purpose            : Dokümanın tek cümlelik amacı
Required           : required | conditional | optional
Applicable Types   : Hangi proje türlerinde geçerli?
Applicable Profiles: Hangi delivery profile'larda geçerli?
Primary Info Owner : Bu dokümana birincil olarak ait olan bilgi türleri
Template Location  : templates/<alt-klasör>/<dosya-adı>.md
Dependencies       : Üretilmeden önce tamamlanması gereken diğer dokümanlar
Validation Notes   : Validation sırasında kontrol edilmesi gereken özel durumlar
```

---

## Dependency Resolution Rule

Document dependency ilişkileri aşağıdaki authoritative kural uyarınca çözümlenir:

1. Bir document'ın dependency'si ancak dependency document'ın kendisi aktif `project_type + delivery_profile` kombinasyonunda applicable ise zorunludur.
2. Dependency document aktif `project_type + delivery_profile` için applicable değilse dependency uygulanmaz (skip edilir).
3. Dependency ilişkisi hiçbir zaman `DOCUMENT_CATALOG.md` içindeki `Applicable Types` veya `Applicable Profiles` sınırlarını aşamaz veya document üretilmesini zorlayamaz.
4. Dependency document'ın skip edilmesi, bilgi sahipliğinin başka bir dokümana taşınması anlamına gelmez. Her doküman yalnızca `engine/INFORMATION_MAP.md` tarafından belirlenen kendi primary info owner alanını üretir.

### Dependency Çözümleme Sırası

1. Target document aktif `project_type` için applicable mı?
2. Target document aktif `delivery_profile` için applicable mı?
3. Target document'ın `Dependencies` listesi okunur.
4. Her dependency için:
   a. Dependency document `project_type` için applicable mı?
   b. Dependency document `delivery_profile` için applicable mı?
5. İki koşulu da sağlayan dependency zorunlu bağımlılık kabul edilir.
6. Uygun olmayan (non-applicable) dependency skip edilir.
7. Skip edilen dependency'nin birincil bilgisi başka dokümana taşınmaz.
8. Target document yalnızca kendi authoritative information ownership sınırında üretilir.

---

## Doküman Kayıtları

---

### PROJECT-BRAIN — Project Brain

```text
Document ID        : PROJECT-BRAIN
Document Name      : PROJECT_BRAIN.md
Owner Category     : ai
Purpose            : Projenin tüm bağlamını özetler; ajanın birincil başvuru belgesidir.
Required           : required
Applicable Types   : Tüm türler
Applicable Profiles: Tüm profiller
Primary Info Owner : project_purpose, project_summary, tech_overview, scope_summary,
                     key_decisions_summary, current_phase_summary
Template Location  : templates/ai/PROJECT_BRAIN_TEMPLATE.md
Dependencies       : Approved project intake
Validation Notes   : Bağlam tutarlı olmalı; PRODUCT_RULES ve TECH_CONTEXT ile çelişmemeli.
```

---

### PRODUCT-RULES — Product Rules

```text
Document ID        : PRODUCT-RULES
Document Name      : PRODUCT_RULES.md
Owner Category     : ai
Purpose            : Ürünün değişmez davranış, kural ve kısıtlamalarını tanımlar.
Required           : required
Applicable Types   : web-app, mobile-app, api-service, content-platform
Applicable Profiles: Foundation, Prototype, Implementation Ready, Production Ready
Primary Info Owner : product_rules, behavior_constraints, scope_rules, ux_rules
Template Location  : templates/ai/PRODUCT_RULES_TEMPLATE.md
Dependencies       : PROJECT-BRAIN
Validation Notes   : Kurallar proje kapsamıyla tutarlı olmalı. Teknik detay burada bulunmamalı.
```

---

### TECH-CTX — Tech Context

```text
Document ID        : TECH-CTX
Document Name      : TECH_CONTEXT.md
Owner Category     : ai
Purpose            : Teknik stack, mimari kararlar ve teknik sınırları tanımlar.
Required           : required
Applicable Types   : web-app, mobile-app, api-service, integration, infrastructure
Applicable Profiles: Foundation, Implementation Ready, Production Ready
Primary Info Owner : technical_stack, architecture_decisions, system_components,
                     integration_points, technical_constraints
Template Location  : templates/ai/TECH_CONTEXT_TEMPLATE.md
Dependencies       : PROJECT-BRAIN
Validation Notes   : Stack kararları proje intake ile tutarlı olmalı. Gerekçeler belirtilmeli.
```

---

### PROD-STRAT — Product Strategy

```text
Document ID        : PROD-STRAT
Document Name      : PRODUCT_STRATEGY.md
Owner Category     : ai
Purpose            : Ürünün uzun vadeli konumlanmasını, rekabet bağlamını ve büyüme hedeflerini tanımlar.
Required           : conditional
Applicable Types   : web-app, mobile-app, content-platform
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : market_positioning, competitive_context, growth_targets, monetization_approach
Template Location  : templates/ai/PRODUCT_STRATEGY_TEMPLATE.md
Dependencies       : PROJECT-BRAIN, PRODUCT-RULES
Validation Notes   : Yalnızca üretim hedefli projelerde gereklidir. Varsayım olarak üretilmemelidir.
```

---

### DESIGN — Design Rules

```text
Document ID        : DESIGN
Document Name      : DESIGN_RULES.md
Owner Category     : design
Purpose            : Projenin görsel dil, bileşen ve UX kurallarını tanımlar.
Required           : conditional
Applicable Types   : web-app, mobile-app, landing-page, content-platform
Applicable Profiles: Prototype, Implementation Ready, Production Ready
Primary Info Owner : visual_language, component_rules, interaction_patterns, accessibility_rules
Template Location  : templates/design/DESIGN_RULES_TEMPLATE.md
Dependencies       : PROJECT-BRAIN, PRODUCT-RULES
Validation Notes   : Tasarım kararları kullanıcı tarafından onaylanmalı; sessizce uydurulmamalı.
```

---

### STATUS — Current Status

```text
Document ID        : STATUS
Document Name      : CURRENT_STATUS.md
Owner Category     : ai
Purpose            : Projenin mevcut durumunu, son tamamlanan işleri ve kısa vadeli öncelikleri gösterir.
Required           : conditional
Applicable Types   : Tüm türler
Applicable Profiles: Tüm profiller (mevcut projeler için zorunlu)
Primary Info Owner : current_phase, completed_items, next_priorities, known_blockers
Template Location  : templates/ai/CURRENT_STATUS_TEMPLATE.md
Dependencies       : PROJECT-BRAIN
Validation Notes   : Mevcut proje (existing) için required'dır. Sıfırdan projeler için optional.
```

---

### TASKS — Next Tasks

```text
Document ID        : TASKS
Document Name      : NEXT_TASKS.md
Owner Category     : ai
Purpose            : Ajanın veya ekibin sıradaki somut görevlerini listeler.
Required           : conditional
Applicable Types   : Tüm türler
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : immediate_tasks, task_priority, task_dependencies
Template Location  : templates/ai/NEXT_TASKS_TEMPLATE.md
Dependencies       : STATUS (varsa), WAVE-PLAN (varsa)
Validation Notes   : Görevler ölçülebilir ve atanabilir olmalı.
```

---

### DECISIONS — Decisions

```text
Document ID        : DECISIONS
Document Name      : DECISIONS.md
Owner Category     : ai
Purpose            : Proje süresince alınan önemli kararları ve gerekçelerini kayıt altına alır.
Required           : conditional
Applicable Types   : Tüm türler
Applicable Profiles: Foundation, Implementation Ready, Production Ready
Primary Info Owner : architectural_decisions, product_decisions, design_decisions, decision_rationale
Template Location  : templates/ai/DECISIONS_TEMPLATE.md
Dependencies       : PROJECT-BRAIN
Validation Notes   : Kararlar gerekçesiyle birlikte kaydedilmeli. Kararlar çelişmemeli.
```

---

### AGENT-INST — Agent Instructions

```text
Document ID        : AGENT-INST
Document Name      : AGENT_INSTRUCTIONS.md
Owner Category     : ai
Purpose            : Projeye özel ajan çalışma kurallarını ve önceliklerini tanımlar.
Required           : conditional
Applicable Types   : Tüm türler
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : agent_behavior_rules, working_priorities, coding_conventions, communication_style
Template Location  : templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md
Dependencies       : PROJECT-BRAIN, PRODUCT-RULES
Validation Notes   : Ajan talimatları Product Engine sözleşmeleriyle çelişmemeli.
```

---

### README-DOC — Project README

```text
Document ID        : README-DOC
Document Name      : README.md
Owner Category     : project
Purpose            : Projeye yeni katılan ajan veya kişinin başlangıç noktası.
Required           : required
Applicable Types   : Tüm türler
Applicable Profiles: Tüm profiller
Primary Info Owner : project_summary, how_to_start, key_documents, project_links
Template Location  : templates/project/README_TEMPLATE.md
Dependencies       : PROJECT-BRAIN
Validation Notes   : README diğer belgelerin içeriğini tekrar etmemeli; yönlendirici olmalı.
```

---

### PROJ-PLAN — Project Plan

```text
Document ID        : PROJ-PLAN
Document Name      : PROJECT_PLAN.md
Owner Category     : project
Purpose            : Projenin teslim planını, aşamalarını ve zaman çizelgesini tanımlar.
Required           : conditional
Applicable Types   : Tüm türler
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : project_phases, milestones, timeline, resource_plan
Template Location  : templates/project/PROJECT_PLAN_TEMPLATE.md
Dependencies       : PROJECT-BRAIN, WAVE-MAP (varsa)
Validation Notes   : Plan, onaylı kapsam ile tutarlı olmalı.
```

---

### DATA — Data Model

```text
Document ID        : DATA
Document Name      : DATA_MODEL.md
Owner Category     : project
Purpose            : Sistemdeki varlıkları, ilişkilerini ve veri akışını tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, content-platform
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : entities, relationships, data_flows, storage_decisions
Template Location  : templates/project/DATA_MODEL_TEMPLATE.md
Dependencies       : PROJECT-BRAIN, TECH-CTX
Validation Notes   : Varlıklar proje kapsamıyla tutarlı olmalı.
```

---

### API — API Contracts

```text
Document ID        : API
Document Name      : API_CONTRACTS.md
Owner Category     : project
Purpose            : Sistemin dışa açık veya iç API yüzeyini tanımlar.
Required           : conditional
Applicable Types   : api-service, web-app, integration, mobile-app
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : endpoints, request_formats, response_formats, auth_method, error_codes
Template Location  : templates/project/API_CONTRACTS_TEMPLATE.md
Dependencies       : TECH-CTX, DATA
Validation Notes   : Auth yöntemi TECH_CONTEXT ile tutarlı olmalı.
```

---

### DEPLOY — Deployment

```text
Document ID        : DEPLOY
Document Name      : DEPLOYMENT.md
Owner Category     : project
Purpose            : Sistemin production ortamına nasıl dağıtılacağını tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, infrastructure
Applicable Profiles: Production Ready
Primary Info Owner : deployment_target, deployment_steps, env_variables, rollback_strategy
Template Location  : templates/project/DEPLOYMENT_TEMPLATE.md
Dependencies       : TECH-CTX
Validation Notes   : Deployment detayları kullanıcı tarafından onaylanmalı. Sessizce uydurulmamalı.
```

---

### OPS — Operations

```text
Document ID        : OPS
Document Name      : OPERATIONS.md
Owner Category     : project
Purpose            : Sistemin production'da nasıl işletileceğini, izleneceğini ve bakımının yapılacağını tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service
Applicable Profiles: Production Ready
Primary Info Owner : monitoring, alerting, backup, incident_response, maintenance_procedures
Template Location  : templates/project/OPERATIONS_TEMPLATE.md
Dependencies       : DEPLOY
Validation Notes   : Sadece Production Ready projelerde gereklidir. Gereksiz bürokrasi eklenmemeli.
```

---

### TEST — Test Strategy

```text
Document ID        : TEST
Document Name      : TEST_STRATEGY.md
Owner Category     : project
Purpose            : Projenin nasıl test edileceğini, hangi test katmanlarının kullanılacağını tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : test_levels, test_scope, coverage_targets, test_tools
Template Location  : templates/project/TEST_STRATEGY_TEMPLATE.md
Dependencies       : PROJECT-BRAIN, TECH-CTX
Validation Notes   : Test stratejisi, projenin kritik akışlarını kapsamalı.
```

---

### WAVE-MAP — Wave Map

```text
Document ID        : WAVE-MAP
Document Name      : WAVE_MAP.md
Owner Category     : waves
Purpose            : Projenin teslim dalgalarını ve her dalganın kapsamını üst seviyede gösterir.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, content-platform
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : wave_structure, wave_goals, wave_scope_boundaries
Template Location  : templates/waves/WAVE_MAP_TEMPLATE.md
Dependencies       : PROJECT-BRAIN, PRODUCT-RULES
Validation Notes   : Dalgalar onaylı kapsam ile tutarlı olmalı. Dalga sayısı gerçekçi olmalı.
```

---

### WAVE-PLAN — Wave Plan

```text
Document ID        : WAVE-PLAN
Document Name      : WAVE_PLAN.md
Owner Category     : waves
Purpose            : Belirli bir dalganın görevlerini, bağımlılıklarını ve kriterleri ayrıntılı tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, content-platform
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : wave_tasks, task_breakdown, acceptance_criteria, wave_timeline
Template Location  : templates/waves/WAVE_PLAN_TEMPLATE.md
Dependencies       : WAVE-MAP
Validation Notes   : Her dalga için ayrı WAVE_PLAN oluşturulabilir. WAVE-MAP olmadan üretilemez.
```

---

### RUN-MANIFEST — Run Manifest (Operasyonel)

```text
Document ID        : RUN-MANIFEST
Document Name      : RUN_MANIFEST.md
Owner Category     : operational
Purpose            : Tek bir Product Engine çalışmasının kimliğini, durumunu ve önemli kararları kayıt altına alır.
Required           : required (her run için)
Applicable Types   : Tüm türler
Applicable Profiles: Tüm profiller
Primary Info Owner : run_id, run_status, selected_package, delivery_profile,
                     documents_produced, validation_result, output_version
Template Location  : templates/runs/RUN_MANIFEST_TEMPLATE.md
Dependencies       : Approved project intake
Validation Notes   : Run kayıtları final output içine taşınmaz. Bkz: RUN_PROTOCOL.md.
```

---

## Katalog Notları

### Koşullu Dokümanlar

`Required: conditional` olan dokümanlar, proje türü ve delivery profile kombinasyonuna göre seçilir. Paket seçim mantığı için bkz: `PACKAGE_RULES.md`.

### Template Klasör Yapısı

Template'ler aşağıdaki klasör yapısında tutulur:

```text
templates/
├── ai/       → PROJECT_BRAIN, PRODUCT_RULES, TECH_CONTEXT, PRODUCT_STRATEGY,
               CURRENT_STATUS, NEXT_TASKS, DECISIONS, AGENT_INSTRUCTIONS
├── project/  → README, PROJECT_PLAN, DATA_MODEL, API_CONTRACTS,
               DEPLOYMENT, OPERATIONS, TEST_STRATEGY
├── design/   → DESIGN_RULES ve tasarım bileşen template'leri
├── waves/    → WAVE_MAP, WAVE_PLAN
├── prompts/  → Ajan çalışma başlatma ve devam prompt'ları
└── runs/     → Run operasyon belgelerinin template'leri
```

### Yeni Doküman Ekleme

Mevcut doküman türlerine girmeyen bağımsız bir sorumluluk bulunduğunda kataloga yeni bir kayıt eklenebilir.

Mevcut bir dokümanın görevini yeniden ifade etmek için yeni kayıt oluşturulmamalıdır.

Yeni bir kayıt eklenirse `PACKAGE_RULES.md` ve ilgili templates güncellenmeli; `RUN_PROTOCOL.md` içindeki run mantığı etkilenip etkilenmediği kontrol edilmelidir.
