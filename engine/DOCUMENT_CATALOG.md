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
Document ID        : Benzersiz kısa kimlik (ör. PRD, ARCH, WAVE-MAP)
Document Name      : Dosyanın tam adı (ör. PRODUCT_REQUIREMENTS.md)
Owner Category     : product | technical | planning | operational | design
Purpose            : Dokümanın tek cümlelik amacı
Required           : required | conditional | optional
Applicable Types   : Hangi proje türlerinde geçerli?
Applicable Profiles: Hangi delivery profile'larda geçerli?
Primary Info Owner : Bu dokümana birincil olarak ait olan bilgi türleri
Template Location  : templates/<kategori>/<dosya-adı>.md
Output Location    : outputs/<kategori>/<project-slug>/latest/<dosya-adı>.md
Dependencies       : Üretilmeden önce tamamlanması gereken diğer dokümanlar
Validation Notes   : Validation sırasında kontrol edilmesi gereken özel durumlar
```

---

## Doküman Kayıtları

---

### PRD — Product Requirements

```text
Document ID        : PRD
Document Name      : PRODUCT_REQUIREMENTS.md
Owner Category     : product
Purpose            : Ürünün ne yapacağını, kimler için olduğunu ve başarı kriterlerini tanımlar.
Required           : required
Applicable Types   : web-app, mobile-app, api-service, content-platform, integration
Applicable Profiles: Foundation, Prototype, Implementation Ready, Production Ready
Primary Info Owner : project_purpose, target_users, core_flows, success_criteria, scope_boundaries
Template Location  : templates/product/PRODUCT_REQUIREMENTS.md
Output Location    : outputs/<category>/<project-slug>/latest/PRODUCT_REQUIREMENTS.md
Dependencies       : Approved project intake
Validation Notes   : Scope, proje intake ile tutarlı olmalı. Teknik kararlar bu belgede bulunmamalı.
```

---

### ARCH — Architecture Overview

```text
Document ID        : ARCH
Document Name      : ARCHITECTURE.md
Owner Category     : technical
Purpose            : Sistemin teknik mimarisini, bileşenlerini ve bunlar arasındaki ilişkileri tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, integration, infrastructure
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : technical_stack, system_components, data_flow, integration_points, hosting
Template Location  : templates/technical/ARCHITECTURE.md
Output Location    : outputs/<category>/<project-slug>/latest/ARCHITECTURE.md
Dependencies       : PRD
Validation Notes   : Seçilen stack, intake ile tutarlı olmalı. Mimari kararlar gerekçelendirilmiş olmalı.
```

---

### DATA — Data Model

```text
Document ID        : DATA
Document Name      : DATA_MODEL.md
Owner Category     : technical
Purpose            : Sistemdeki varlıkları, ilişkilerini ve veri akışını tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, content-platform
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : entities, relationships, data_flows, storage_decisions
Template Location  : templates/technical/DATA_MODEL.md
Output Location    : outputs/<category>/<project-slug>/latest/DATA_MODEL.md
Dependencies       : PRD, ARCH
Validation Notes   : Varlıklar PRD'deki akışlarla tutarlı olmalı.
```

---

### API — API Reference

```text
Document ID        : API
Document Name      : API_REFERENCE.md
Owner Category     : technical
Purpose            : Sistemin dışa açık veya iç API yüzeyini tanımlar.
Required           : conditional
Applicable Types   : api-service, web-app, integration, mobile-app
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : endpoints, request_formats, response_formats, auth_method, error_codes
Template Location  : templates/technical/API_REFERENCE.md
Output Location    : outputs/<category>/<project-slug>/latest/API_REFERENCE.md
Dependencies       : ARCH, DATA
Validation Notes   : Auth yöntemi ARCH ile tutarlı olmalı.
```

---

### PROD-STRAT — Product Strategy

```text
Document ID        : PROD-STRAT
Document Name      : PRODUCT_STRATEGY.md
Owner Category     : product
Purpose            : Ürünün uzun vadeli konumlanmasını, rekabet bağlamını ve büyüme hedeflerini tanımlar.
Required           : conditional
Applicable Types   : web-app, mobile-app, content-platform
Applicable Profiles: Production Ready
Primary Info Owner : market_positioning, competitive_context, growth_targets, monetization_approach
Template Location  : templates/product/PRODUCT_STRATEGY.md
Output Location    : outputs/<category>/<project-slug>/latest/PRODUCT_STRATEGY.md
Dependencies       : PRD
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
Template Location  : templates/design/DESIGN_RULES.md
Output Location    : outputs/<category>/<project-slug>/latest/DESIGN_RULES.md
Dependencies       : PRD
Validation Notes   : Tasarım kararları kullanıcı tarafından onaylanmalı; sessizce uydurulmamalı.
```

---

### STATUS — Current Status

```text
Document ID        : STATUS
Document Name      : CURRENT_STATUS.md
Owner Category     : operational
Purpose            : Projenin mevcut durumunu, son tamamlanan işleri ve kısa vadeli öncelikleri gösterir.
Required           : conditional
Applicable Types   : Tüm türler
Applicable Profiles: Tüm profiller (mevcut projeler için zorunlu)
Primary Info Owner : current_phase, completed_items, next_priorities, known_blockers
Template Location  : templates/operational/CURRENT_STATUS.md
Output Location    : outputs/<category>/<project-slug>/latest/CURRENT_STATUS.md
Dependencies       : PRD (mevcut proje için ek kaynak girdisi)
Validation Notes   : Mevcut proje (existing) için required'dır. Sıfırdan projeler için optional.
```

---

### TASKS — Next Tasks

```text
Document ID        : TASKS
Document Name      : NEXT_TASKS.md
Owner Category     : operational
Purpose            : Ajanın veya ekibin sıradaki somut görevlerini listeler.
Required           : conditional
Applicable Types   : Tüm türler
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : immediate_tasks, task_priority, task_dependencies, assignees
Template Location  : templates/operational/NEXT_TASKS.md
Output Location    : outputs/<category>/<project-slug>/latest/NEXT_TASKS.md
Dependencies       : STATUS, WAVE-PLAN (varsa)
Validation Notes   : Görevler ölçülebilir ve atanabilir olmalı.
```

---

### WAVE-MAP — Wave Map

```text
Document ID        : WAVE-MAP
Document Name      : WAVE_MAP.md
Owner Category     : planning
Purpose            : Projenin teslim dalgalarını ve her dalganın kapsamını üst seviyede gösterir.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, content-platform, integration
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : wave_structure, wave_goals, wave_scope_boundaries
Template Location  : templates/planning/WAVE_MAP.md
Output Location    : outputs/<category>/<project-slug>/latest/WAVE_MAP.md
Dependencies       : PRD
Validation Notes   : Dalgalar PRD kapsamıyla tutarlı olmalı. Dalga sayısı gerçekçi olmalı.
```

---

### WAVE-PLAN — Wave Plan

```text
Document ID        : WAVE-PLAN
Document Name      : WAVE_PLAN.md
Owner Category     : planning
Purpose            : Belirli bir dalganın görevlerini, bağımlılıklarını ve kriterleri ayrıntılı tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, content-platform, integration
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : wave_tasks, task_breakdown, acceptance_criteria, wave_timeline
Template Location  : templates/planning/WAVE_PLAN.md
Output Location    : outputs/<category>/<project-slug>/latest/WAVE_PLAN.md
Dependencies       : WAVE-MAP
Validation Notes   : Her dalga için ayrı WAVE_PLAN oluşturulabilir. WAVE-MAP olmadan üretilemez.
```

---

### DEPLOY — Deployment

```text
Document ID        : DEPLOY
Document Name      : DEPLOYMENT.md
Owner Category     : technical
Purpose            : Sistemin production ortamına nasıl dağıtılacağını tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app, infrastructure
Applicable Profiles: Production Ready
Primary Info Owner : deployment_target, deployment_steps, env_variables, rollback_strategy
Template Location  : templates/technical/DEPLOYMENT.md
Output Location    : outputs/<category>/<project-slug>/latest/DEPLOYMENT.md
Dependencies       : ARCH
Validation Notes   : Deployment detayları kullanıcı tarafından onaylanmalı. Sessizce uydurulmamalı.
```

---

### TEST — Testing Strategy

```text
Document ID        : TEST
Document Name      : TESTING_STRATEGY.md
Owner Category     : technical
Purpose            : Projenin nasıl test edileceğini, hangi test katmanlarının kullanılacağını tanımlar.
Required           : conditional
Applicable Types   : web-app, api-service, mobile-app
Applicable Profiles: Implementation Ready, Production Ready
Primary Info Owner : test_levels, test_scope, coverage_targets, test_tools
Template Location  : templates/technical/TESTING_STRATEGY.md
Output Location    : outputs/<category>/<project-slug>/latest/TESTING_STRATEGY.md
Dependencies       : PRD, ARCH
Validation Notes   : Test stratejisi, PRD'deki kritik akışları kapsamalı.
```

---

### README — Project README

```text
Document ID        : README
Document Name      : README.md
Owner Category     : operational
Purpose            : Projeye yeni katılan ajan veya kişinin başlangıç noktası.
Required           : required
Applicable Types   : Tüm türler
Applicable Profiles: Tüm profiller
Primary Info Owner : project_summary, how_to_start, key_documents, project_links
Template Location  : templates/operational/README.md
Output Location    : outputs/<category>/<project-slug>/latest/README.md
Dependencies       : PRD
Validation Notes   : README, diğer belgelerin içeriğini tekrar etmemeli; yönlendirici olmalı.
```

---

### RUN-LOG — Run Log (Operasyonel)

```text
Document ID        : RUN-LOG
Document Name      : RUN_LOG.md
Owner Category     : operational
Purpose            : Tek bir Product Engine çalışmasının kayıt belgesi.
Required           : required (her run için)
Applicable Types   : Tüm türler
Applicable Profiles: Tüm profiller
Primary Info Owner : run_id, run_status, decisions, assumptions, conflicts, validation_result
Template Location  : templates/runs/RUN_LOG.md
Output Location    : runs/<run-id>/RUN_LOG.md
Dependencies       : Approved project intake
Validation Notes   : Run kayıtları final output içine taşınmaz. Bkz: RUN_PROTOCOL.md.
```

---

## Katalog Notları

### Koşullu Dokümanlar

`Required: conditional` olan dokümanlar, proje türü ve delivery profile kombinasyonuna göre seçilir. Paket seçim mantığı için bkz: `PACKAGE_RULES.md`.

### Yeni Doküman Ekleme

Mevcut doküman türlerine girmeyen bağımsız bir sorumluluk bulunduğunda kataloga yeni bir kayıt eklenebilir.

Mevcut bir dokümanın görevini yeniden ifade etmek için yeni kayıt oluşturulmamalıdır.

Yeni bir kayıt eklenirse `PACKAGE_RULES.md` ve ilgili templates güncellenmeli; `RUN_PROTOCOL.md` içindeki run mantığı etkilenip etkilenmediği kontrol edilmelidir.
