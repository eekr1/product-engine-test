# WAVE_MAP_TEMPLATE

## Template Metadata

```yaml
template_id: wave-map-template
template_name: Canonical Wave Map Template
document_id: WAVE-MAP
version: 3.2.0
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
  - approved_site_architecture
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

Approved execution scope'u anlamlı delivery wave'lerine bölen canonical **execution decomposition authority** belgesidir.

WAVE_PLAN yalnız burada dondurulan exact parent wave entry'yi implementation seviyesinde detaylandırır; yeni product capability, page/surface veya factual scope icat edemez.

Executable capability authorization semantiği `engine/CAPABILITY_SCOPE_RULES.md` sahibidir.

---

## Required Point-of-Use Calibration

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh templates/waves/WAVE_MAP_TEMPLATE.md
→ current approved scope + authorities + approved page registry if applicable
→ generate only WAVE_MAP
```

Reference layer yalnız decomposition/sequencing kalite kalibrasyonudur. Başka projenin wave count, filenames, routes, stack, capabilities veya completion state'i current projeye taşınamaz.

---

## Scope Resolution Model

```text
APPROVED INPUT
→ INPUT_SNAPSHOT / SCP REGISTRY
→ APPROVED_PAGE_SET (corporate-website ise)
→ WAVE_MAP EXECUTION SCOPE
→ freeze WAVE_MAP
→ WAVE_PLAN instances
```

Canonical invariants:

```text
WAVE_MAP committed capability atoms ⊆ approved executable capability atoms
WAVE_PLAN capability atoms ⊆ exact parent WAVE_MAP capability atoms
```

Corporate website için ayrıca:

```text
APPROVED_PAGE_SET == PLANNED_PAGE_SET
```

Page semantics `engine/SITE_ARCHITECTURE_RULES.md` authority'sidir.

---

## Executable Support Eligibility

Bir support atomu WAVE_MAP capability desteği olabilmek için:

```text
Status ∈ {IN_SCOPE, KNOWN_DECISION}
AND
Executable = YES
```

olmalıdır.

Aşağıdakiler capability authorize edemez:

```text
VERIFIED_CURRENT_TRUTH
OPEN_QUESTION
FUTURE
OUT_OF_SCOPE
Executable = NO
```

Broad/generic support adjacent capability authorize etmez. Exact semantic subset zorunludur.

### Direct Approved Support Requirement

WAVE_MAP generated upstream artifact'tan capability authorization miras alamaz.

```text
PAGE-DESIGN says form
≠ form support

PROJECT_PLAN mentions modal
≠ modal support
```

Her Committed Capability doğrudan exact approved executable support ID(s)'ye trace edilmelidir.

Page/surface existence child interaction authorize etmez:

```text
Contact page + phone/email
≠ contact form / submit / success state
```

Form, data collection, submit, modal, search/filter, map, WhatsApp, booking/request flow, upload/download veya new CTA independently meaningful capability atomudur.

---

## Corporate Page Coverage

`project_type: corporate-website` ise WAVE_MAP freeze edilmeden önce approved page registry tamamen okunur.

Her approved page en az bir wave entry'de `Covered Page IDs` altında görünmelidir.

```text
APPROVED_PAGE_SET = set(approved IN_SCOPE PAGE-XXX identities)
PLANNED_PAGE_SET = union(all Wave Covered Page IDs)

PASS iff APPROVED_PAGE_SET == PLANNED_PAGE_SET
```

Rules:

- New/unapproved PAGE ID üretilemez.
- Approved PAGE ID atlanamaz.
- Distinct approved page başka page'in section'ına/anchor'ına collapse edilemez.
- Wave grouping allowed; page omission forbidden.
- Foundation/technical-only wave `Covered Page IDs: N/A` taşıyabilir.
- Cross-page QA wave yeni page identity üretmez.

---

## Her Wave Entry İçin Zorunlu Boundary

Her wave entry aşağıdaki alanları açıkça taşımalıdır:

```text
Wave ID
Name
Goal
Why Separate / Sequencing Rationale
Committed Capabilities
Covered Page IDs (applicable ise)
In Scope
Out of Scope
Primary Deliverables
Dependencies
Upstream Boundary Consumed
Downstream Handoff
Exit Boundary
```

### Committed Capabilities

Her executable capability atomik olarak listelenir ve exact support taşır:

```text
Capability
Approved Support ID(s)
Support Status
Support Executable Flag
Exact Approved Support Meaning
Eligibility Result
Semantic Subset Result
Map Subset Result
```

`Support Meaning` capability'nin broad parent page/purpose'unu değil, generated behavior'ı gerçekten authorize eden exact executable meaning'i göstermelidir.

### Covered Page IDs

Corporate/page-based scope için örnek:

```text
Covered Page IDs:
- PAGE-001 — Home
- PAGE-002 — Corporate
```

Bu alan yalnız registry identity mapping'idir; page-specific factual content veya child interaction üretmez.

---

## Hidden Capability / Hidden Page Self-Diff

Freeze öncesi bütün executable-bearing alanlar atomize edilir:

```text
Goal
Committed Capabilities
Covered Page IDs
In Scope
Primary Deliverables
Downstream Handoff
executable parts of Exit Boundary
```

Sonra:

```text
HIDDEN_MAP_CAPABILITIES = executable atoms not covered by Committed Capabilities
UNSUPPORTED_MAP_CAPABILITIES = map atoms without exact approved executable semantic support
UNAPPROVED_MAP_PAGES = PLANNED_PAGE_SET - APPROVED_PAGE_SET
MISSING_MAP_PAGES = APPROVED_PAGE_SET - PLANNED_PAGE_SET
```

Herhangi biri non-empty ise map freeze edilemez.

---

## Factual Modifier Guard

Map decomposition gerçek dünya/firma/domain gerçeğini genişletemez.

```text
approved fact: Yedek Parça Temini
allowed: approved service overview/detail presentation
not allowed: orijinal parça, stok, marka garantisi
```

Page title/purpose da FCL veya approved product scope dışı factual meaning ekleyemez.

---

## Delivery Profile Wording Guard

Approved delivery profile'dan yüksek maturity claim'i yasaktır.

```text
Prototype → demo-ready / sales-demo ready allowed
Prototype → implementation-ready / production-ready forbidden
```

Prototype page breadth'i azaltmaz.

---

## Decomposition Heuristic

Wave'ler folder veya broad teknik fazlara göre değil, coherent doğrulanabilir delivery boundary'lerine göre ayrılır.

Kontrol soruları:

1. Bu wave tek başına anlamlı tamamlanabilir deliverable mı?
2. Shared prerequisite downstream consumer'lardan önce mi?
3. Distinct page/surface responsibilities görünür mü?
4. Corporate approved page'lerin tamamı coverage alıyor mu?
5. Page grouping coherence sağlıyor mu, yoksa page'i görünmez mi yapıyor?
6. Whole-project QA bağımsız horizontal boundary ise feature wave'e gizlenmiş mi?
7. Her capability direct exact executable support taşıyor mu?
8. Her child interaction ayrı atomize edilmiş mi?
9. Her factual modifier FCL sınırında mı?
10. Why Separate / Upstream / Handoff net mi?

Rules:

```text
multiple independent deliverables → SPLIT
shared prerequisite → CONSIDER FOUNDATION SPLIT
no standalone result → MERGE
approved pages omitted/collapsed → FAIL
unapproved page → FAIL
page existence used as child interaction authorization → FAIL
unsupported capability → FAIL
hidden capability → FAIL
factual expansion → FAIL
```

---

## Validation Beklentileri

- Required map calibration checkpoint uygulanmış olmalı.
- Capability support yalnız executable-eligible approved scope'tan gelmeli.
- Generated design/planning artifact scope support authority olarak kullanılmamalı.
- `HIDDEN_MAP_CAPABILITIES == empty`.
- `UNSUPPORTED_MAP_CAPABILITIES == empty`.
- Corporate website ise `APPROVED_PAGE_SET == PLANNED_PAGE_SET`.
- `UNAPPROVED_MAP_PAGES == empty` ve `MISSING_MAP_PAGES == empty`.
- Distinct approved page section anchor'a collapse edilmemeli.
- Her wave WHY SEPARATE / UPSTREAM / HANDOFF depth taşımalı.
- Dependency chain acyclic olmalı.
- Delivery wording approved profile'ı aşmamalı.
- Factual claims FCL sınırında kalmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Wave Map

## 1. Wave Architecture Principles

{{WAVE_ARCHITECTURE_PRINCIPLES}}

## 2. Approved Page Coverage Registry

[CONDITIONAL: corporate/page-based scope applicable ise]

{{APPROVED_PAGE_COVERAGE_REGISTRY}}

## 3. Wave Map Summary

{{WAVE_MAP_SUMMARY}}

## 4. Dependency Chain

{{DEPENDENCY_CHAIN}}

## 5. Wave Entries

{{WAVE_ENTRIES}}

## 6. Cross-Wave Invariants

{{CROSS_WAVE_INVARIANTS}}

## 7. Global Exit / Handoff Rules

{{GLOBAL_EXIT_HANDOFF_RULES}}

# OUTPUT DOCUMENT END
