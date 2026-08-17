# TECH_CONTEXT_TEMPLATE

## Template Metadata

```yaml
template_id: tech-context-template
template_name: Tech Context Template
document_id: TECH-CTX
version: 1.2.0
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
conditional_inputs:
  - approved_site_architecture
dependencies:
  - PROJECT-BRAIN
```

## Amaç

Sistemin teknoloji yığınını, mimari kararlarını, routing/page expansion yaklaşımını, bileşen yapısını, entegrasyon noktalarını ve teknik kısıtlamalarını tanımlamak; gerçek backend henüz kapsamda değilse dahi gelecekteki entegrasyonu ve ürün continuation path'ini gereksiz yeniden yazım olmadan destekleyecek boundary'leri görünür kılmak.

## Kullanım Koşulları

Implementation planning uygulanan tüm teknik projelerde zorunludur. `Prototype` veya demo olması bu belgeyi kapsam dışı bırakmaz.

## Girdi Kaynakları

- Approved Project Intake
- Approved Site Architecture (applicable ise)
- `engine/PLANNING_PROFILES.md`
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- Teknoloji Yığını
- Stack Selection & Continuation Gate
- Routing / Page Expansion Path (page-based UI applicable ise)
- Mimari Kararlar ve Yaklaşım
- Sistem Bileşenleri ve Boundary'ler
- Data / Service / Integration Readiness
- Teknik Kısıtlamalar ve Sınırlar

## İçerik Üretim Kuralları

- Teknoloji/mimari kararlar net gerekçeleriyle sunulmalıdır.
- İş mantığı veya page truth'u sahiplenmemelidir.
- Onaylanmamış backend stack/API/database/hosting uydurulmamalıdır.
- Frontend framework/tooling kararı approved constraints yoksa Engine technical synthesis olarak resolve edilebilir; `PLANNING_PROFILES` continuation gate'ine uymalıdır.
- Demo/prototype throwaway architecture değildir.
- Mock/local data ile future real data source arasında replaceable service/data boundary olmalıdır.
- Continuation beklenen sales/client frontend'de zero-build yalnız approved user/project/environment constraint ile seçilebilir.
- Agent'ın “low migration”, “modüler ES6”, “ileride framework'e geçilir” rationale'ı approved constraint değildir.
- Corporate multi-page UI'da approved PAGE identities teknik stack tarafından **distinct routable/navigable surfaces** olarak desteklenmelidir; exact router library Engine-resolved technical decision olabilir.
- TECH_CONTEXT approved page setini değiştiremez, yeni page icat edemez veya page'leri anchor-only structure'a collapse edemez.

## Stack Selection & Continuation Gate Minimumu

Frontend TECH_CONTEXT şu alanları explicit üretmelidir:

```text
Continuation Expected: YES | NO
Continuation Evidence: <approved source/input evidence>
Approved Zero-Build Constraint: <exact approved evidence | NONE>
Selected Frontend Baseline: <stack/tooling>
Package Manifest: <path | N/A with approved reason>
Dev Command: <command | N/A with approved reason>
Build Command: <command | N/A with approved reason>
Preview Command: <command | N/A with approved reason>
Same-Codebase Continuation: PASS | FAIL
Routing / Page Expansion Path: <approach | N/A>
```

Deterministic rule:

```text
Continuation Expected = YES
AND Approved Zero-Build Constraint = NONE
→ package-managed/component-oriented baseline REQUIRED
→ package manifest REQUIRED
→ repeatable dev/build/preview workflow REQUIRED
```

Multi-page corporate website için ayrıca:

```text
APPROVED_PAGE_SET size > 1
→ routing/page expansion path REQUIRED
→ distinct routable/navigable page foundation REQUIRED
→ anchor-only collapse INVALID
```

Framework/router adı global zorunlu değildir. React/Vite + suitable router, Vue/Vite, SvelteKit veya başka uygun modern baseline project-specific synthesis ile seçilebilir.

## Routing / Page Expansion Minimumu

Page-based UI'da şu sorular cevaplanmalıdır:

1. Approved PAGE identities runtime'da nasıl distinct surface olarak temsil edilir?
2. Navigation hangi routing/page mechanism üzerinden çalışır?
3. Yeni approved page sonradan eklendiğinde structural rewrite gerekir mi?
4. Shared shell/layout page'lerden nasıl ayrılır?
5. Direct URL / browser navigation behavior applicable ise nasıl korunur?
6. Approved detail page'ler overview page'in local section/state'ine dönüşmeden nasıl distinct kalır?

Routing implementation page truth sahibi değildir; approved Site Architecture registry'yi uygular.

## Integration Readiness Minimumu

1. Veri bugün nereden geliyor?
2. Mock/local data hangi katmanda tutuluyor?
3. UI data/service boundary üzerinden nasıl tüketiyor?
4. Gerçek backend eklendiğinde hangi adapter/service katmanı değişecek?
5. Environment/config değerleri nasıl ayrılıyor?
6. Hangi backend/API kararları unresolved?

Conceptual boundary:

```text
UI / Presentation
      ↓
Service / Data Access Boundary
      ↓
Mock / Local Adapter (today)
      ↓ replaceable by
Real API Adapter (future, when approved)
```

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{TECH_STACK_BLOCK}}`
- `{{STACK_CONTINUATION_GATE}}`
- `{{ROUTING_PAGE_EXPANSION_BLOCK}}`
- `{{ARCHITECTURE_OVERVIEW}}`
- `{{SYSTEM_COMPONENTS_LIST}}`
- `{{INTEGRATION_READINESS_BLOCK}}`
- `{{TECHNICAL_CONSTRAINTS_LIST}}`

## Kapsam Dışı

- Product/page business truth
- Approved page registry ownership
- Detailed DB/API contracts when not approved
- Deployment steps when not applicable

## Diğer Dokümanlarla İlişki

- Primary Owner: `technical_stack`, `stack_continuation_gate`, `routing_implementation_approach`, `architecture_decisions`, `system_components`, `integration_points`, `technical_constraints`, `integration_readiness`.
- Page Identity Truth Owner: Approved PROJECT_INPUT.
- Referenced By: PROJECT_BRAIN, PROJECT_PLAN, GLOBAL_SHELL, PAGE-DESIGN, WAVE_MAP, WAVE_PLAN, README and applicable technical docs.

## Validation Beklentileri

- PROJECT_BRAIN/approved scope ile stack tutarlı olmalı.
- Frontend continuation gate alanları eksiksiz olmalı.
- Continuation YES + zero-build constraint NONE → package-managed/component-oriented baseline.
- Dev/build/preview repeatable olmalı.
- Future framework migration same-codebase continuation sayılmaz.
- Corporate multi-page ise routing/page expansion path approved PAGE setini distinct surfaces olarak desteklemeli.
- No approved page may be collapsed into same-document anchor-only implementation by TECH_CONTEXT decision.
- Onaylanmamış backend/API/database gerçekmiş gibi yazılmamalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

{{TECH_STACK_BLOCK}}

## 2. Stack Selection & Continuation Gate

{{STACK_CONTINUATION_GATE}}

## 3. Routing / Page Expansion Path

{{ROUTING_PAGE_EXPANSION_BLOCK}}

## 4. Mimari Kararlar ve Yaklaşım

{{ARCHITECTURE_OVERVIEW}}

## 5. Sistem Bileşenleri ve Boundary'ler

{{SYSTEM_COMPONENTS_LIST}}

## 6. Data / Service / Integration Readiness

{{INTEGRATION_READINESS_BLOCK}}

## 7. Teknik Kısıtlamalar ve Sınırlar

{{TECHNICAL_CONSTRAINTS_LIST}}

[CONDITIONAL: include only if third-party integrations exist]
## 8. Dış Entegrasyon Noktaları

- Dış servisler, API'ler ve entegrasyon protokolleri.

[CONDITIONAL: include only if real-time functionality exists]
## 9. Real-time / WebSocket Mimarisi

- Real-time veri akışı ve bağlantı yönetimi mimarisi.

[CONDITIONAL: include only if actual backend/API is approved scope]
## 10. Backend / API Mimarisi

- Yalnız approved scope içinde gerçekten kararlaştırılmış backend/API bileşenleri.

# OUTPUT DOCUMENT END
