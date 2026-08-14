# WAVE_MAP_TEMPLATE

## Template Metadata

```yaml
template_id: wave-map-template
template_name: Canonical Wave Map Template
document_id: WAVE-MAP
version: 2.5.0
status: active
template_type: document
category: waves
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
  - input_snapshot_scope_registry
  - project_brain
  - product_rules
  - tech_context
conditional_inputs:
  - design_documents
  - data_model
  - api_contracts
  - test_strategy
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
  - TECH-CTX
output_filename: WAVE_MAP.md
```

## Amaç

Projenin approved execution scope'unu baştan sona anlamlı delivery wave'lerine bölen canonical **execution decomposition authority** belgesidir.

WAVE_MAP şu soruyu cevaplar:

```text
Bu proje hangi ana uygulama dalgalarına ayrılır ve her dalganın kesin execution boundary'si nedir?
```

WAVE_PLAN ise yalnızca burada dondurulan exact parent wave entry'yi implementation seviyesinde detaylandırır; yeni product capability veya yeni scope icat edemez.

## Scope Resolution Model

Approved scope enforcement WAVE_PLAN task seviyesinde tekrar kurulmaz. Scope önce burada çözülür ve freeze edilir.

Canonical chain:

```text
APPROVED INPUT
→ INPUT_SNAPSHOT / SCP REGISTRY
→ WAVE_MAP EXECUTION SCOPE
→ freeze WAVE_MAP
→ WAVE_PLAN instances
```

Canonical invariants:

```text
WAVE_MAP committed scope ⊆ approved executable project scope
WAVE_PLAN scope ⊆ exact parent WAVE_MAP entry
```

`VERIFIED_CURRENT_TRUTH` factual/reference context sağlayabilir fakat tek başına execution capability oluşturmaz.
`Future Possibilities`, `Open Questions` ve `Out of Scope` current wave scope'una map edilemez.

## Kullanım Koşulları

`implementation_planning: standard | full` olan implementation-bearing projelerde zorunludur. Delivery profile'ın Prototype olması bu belgeyi kapsam dışı bırakmaz.

## Her Wave Entry İçin Zorunlu Boundary

Her wave entry aşağıdaki üst-seviye alanları açıkça taşımalıdır:

```text
Wave ID
Name
Goal
In Scope
Out of Scope
Primary Deliverables
Dependencies
Exit Boundary
```

WAVE_MAP implementation checklist, component-level task listesi veya ayrıntılı verification command üretmez. Bunlar WAVE_PLAN sorumluluğudur.

## Zorunlu Bölümler

- Wave Architecture Principles
- Wave Map Summary
- Dependency Chain
- Wave Entries
- Cross-Wave Invariants
- Global Exit / Handoff Rules

## İçerik Üretim Kuralları

- Wave'ler repository folder'larına veya broad teknik fazlara göre değil, anlamlı ve bağımsız doğrulanabilir teslim sonuçlarına göre bölünmelidir.
- `Frontend Implementation`, `Build UI`, `Backend Work`, `Polish Everything` gibi birden fazla distinct teslimi tek torbaya atan mega-wave adları/scope'ları kullanılmamalıdır.
- Wave 00 ilk uygulanabilir foundation/bootstrapping adımıdır; boş formalite wave'i değildir.
- Foundation sonrasında distinct user-facing surface, feature, flow veya coherent delivery unit'leri ayrı wave adayıdır.
- Bir surface kendi başına anlamlı biçimde tamamlanıp doğrulanabiliyorsa başka bağımsız surface'lerle yalnız teknik benzerlik nedeniyle birleştirilmez.
- Aynı surface içinde birbirine sıkı bağlı section'lar tek wave'de kalabilir; yapay mikro-wave üretilmez.
- Her wave tek anlamlı goal ve net completion boundary taşır.
- Whole-project responsive sweep, regression, cross-browser verification, final integration veya sales-demo presentation QA birden fazla önceki surface'i yeniden doğruluyorsa ayrı final QA wave'i olur.
- Dependency zinciri açık ve acyclic olmalıdır.
- Design/data/API/test belgeleri applicable ise wave scope bunlarla hizalanmalıdır.
- Bütün approved executable scope en az bir wave'e map edilmeli; hiçbir wave approved scope dışı capability icat etmemelidir.
- WAVE_MAP freeze edildikten sonra downstream WAVE_PLAN yalnız parent entry'yi detaylandırabilir.

## Decomposition Heuristic

```text
1. Bu scope tek başına anlamlı bir deliverable mı?
2. Wave sonunda complete ve bağımsız doğrulanabilir olacak mı?
3. İçinde başka bağımsız surface/feature/flow var mı?
4. Ayırmak coherence'i artırır mı, yoksa mikro-wave mi üretir?
5. Whole-project QA feature wave'ine gizlenmiş mi?
6. Candidate scope gerçekten approved executable scope mu?
7. In Scope / Out of Scope boundary downstream planı yeterince sınırlar mı?
```

Kural:

```text
multiple independent deliverables → SPLIT
no meaningful standalone result → MERGE
one coherent complete deliverable → KEEP
whole-project QA hidden in surface wave → SPLIT QA
Future/Open/Out-of-Scope as current deliverable → REMOVE / FAIL
```

## Granularity Reference Example

Aşağıdaki örnek zorunlu wave listesi değildir:

```text
WAVE_00 — Foundation
WAVE_01 — Home / Hero + Primary Value Proposition
WAVE_02 — Corporate / Trust / Authorized Service
WAVE_03 — Services
WAVE_04 — Contact
WAVE_05 — Final Integration / Responsive / QA
```

Örnek yalnız granularity calibration içindir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{WAVE_ARCHITECTURE_PRINCIPLES}}`
- `{{WAVES_SUMMARY_TABLE}}`
- `{{DEPENDENCY_CHAIN}}`
- `{{WAVE_ENTRIES_LIST}}`
- `{{CROSS_WAVE_INVARIANTS}}`
- `{{GLOBAL_EXIT_HANDOFF_RULES}}`

## Validation Beklentileri

- WAVE_MAP committed scope approved executable scope içinde olmalı.
- Future/Open/Out-of-Scope leakage olmamalı.
- Her wave entry Goal + In Scope + Out of Scope + Primary Deliverables + Dependencies + Exit Boundary taşımalı.
- Wave dependency chain acyclic ve uygulanabilir olmalı.
- Her wave meaningful, independently verifiable ve completion boundary'si net olmalı.
- Whole-project cross-cutting QA gerekiyorsa ayrı wave olmalı.
- Her wave için tek WAVE-PLAN dynamic instance üretilebilmelidir.
- WAVE_MAP ile PROJECT_PLAN aynı teslim sırasını anlatmalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Wave Map

## 1. Wave Architecture Principles

{{WAVE_ARCHITECTURE_PRINCIPLES}}

## 2. Wave Map Summary

{{WAVES_SUMMARY_TABLE}}

## 3. Dependency Chain

{{DEPENDENCY_CHAIN}}

## 4. Wave Entries

{{WAVE_ENTRIES_LIST}}

## 5. Cross-Wave Invariants

{{CROSS_WAVE_INVARIANTS}}

## 6. Global Exit / Handoff Rules

{{GLOBAL_EXIT_HANDOFF_RULES}}

# OUTPUT DOCUMENT END
