# WAVE_MAP_TEMPLATE

## Template Metadata

```yaml
template_id: wave-map-template
template_name: Canonical Wave Map Template
document_id: WAVE-MAP
version: 2.7.0
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

WAVE_PLAN yalnız burada dondurulan exact parent wave entry'yi implementation seviyesinde detaylandırır; yeni product capability veya yeni scope icat edemez.

## Non-Authoritative Decomposition Reference

Wave decomposition kalite/derinlik kalibrasyonu için `ref/waves/README.md` ve `ref/waves/Design_Wave_Plan.md` kullanılabilir.

Reference layer yalnız şunları öğretir:

```text
meaningful wave separation
sequencing
dependency reasoning
foundation / feature / runtime / cross-cutting boundary clarity
handoff quality
```

Reference artifact current project authority değildir.

MUST NOT:

- Vibehall wave count veya isimlerini kopyalamak,
- reference capability'lerini current scope'a eklemek,
- reference filenames/stack/architecture'i varsaymak,
- reference completion state veya test sonuçlarını taşımak.

Current WAVE_MAP yalnız approved executable project scope ve current canonical authorities tarafından belirlenir.

## Scope Resolution Model

```text
APPROVED INPUT
→ INPUT_SNAPSHOT / SCP REGISTRY
→ WAVE_MAP EXECUTION SCOPE
→ freeze WAVE_MAP
→ WAVE_PLAN instances
```

Canonical invariants:

```text
WAVE_MAP committed capability atoms ⊆ approved executable capability atoms
WAVE_PLAN capability atoms ⊆ exact parent WAVE_MAP capability atoms
```

`VERIFIED_CURRENT_TRUTH` factual/reference context sağlayabilir fakat tek başına execution capability oluşturmaz.
`Future Possibilities`, `Open Questions` ve `Out of Scope` current wave scope'una map edilemez.

## Her Wave Entry İçin Zorunlu Boundary

Her wave entry aşağıdaki alanları açıkça taşımalıdır:

```text
Wave ID
Name
Goal
Committed Capabilities
In Scope
Out of Scope
Primary Deliverables
Dependencies
Exit Boundary
```

### Committed Capabilities

`Committed Capabilities` prose summary değildir. Wave'in gerçekten yapmayı taahhüt ettiği capability'ler **atomik** olarak ayrı satırlarda yazılır.

Her atom için:

```text
Capability
Approved Support ID(s)
Support Meaning
Map Subset Result
```

zorunludur.

Örnek:

```text
- phone CTA | SCP-006 | phone direct-contact CTA | PASS
- email CTA | SCP-006 | email direct-contact CTA | PASS
```

Şu kullanım geçersizdir:

```text
- phone/email/contact/map area | SCP-006 | PASS
```

çünkü bir approved capability birbiriyle ilişkili fakat ayrı capability'leri otomatik authorize etmez.

Canonical comparison:

```text
for each committed capability atom:
  identify exact supporting executable approved scope atom(s)
  compare semantic meaning
  if no exact semantic support -> FAIL / REMOVE
```

Adres, harita, form, WhatsApp, footer, search, filter, CMS, backend gibi ayrı kullanıcı/ürün capability'leri generic `contact`, `responsive site`, `corporate surface` veya benzer geniş başlıklar altında gizlenemez.

## Kullanım Koşulları

`implementation_planning: standard | full` olan implementation-bearing projelerde zorunludur. Prototype olması belgeyi kapsam dışı bırakmaz.

## Zorunlu Bölümler

- Wave Architecture Principles
- Wave Map Summary
- Dependency Chain
- Wave Entries
- Cross-Wave Invariants
- Global Exit / Handoff Rules

## İçerik Üretim Kuralları

- Wave'ler folder veya broad teknik fazlara göre değil, anlamlı ve bağımsız doğrulanabilir teslim sonuçlarına göre bölünür.
- Mega-wave kullanılmaz.
- Wave 00 uygulanabilir foundation/bootstrapping adımıdır.
- Distinct user-facing surface, feature, flow veya coherent delivery unit'leri ayrı wave adayıdır.
- Aynı surface içindeki sıkı bağlı section'lar tek wave'de kalabilir; yapay mikro-wave üretilmez.
- Her wave tek anlamlı goal ve net completion boundary taşır.
- Whole-project responsive/regression/cross-browser/final integration/presentation QA cross-cutting ise ayrı final QA wave olur.
- Dependency zinciri açık ve acyclic olmalıdır.
- Bütün approved executable scope uygun wave'lere map edilmeli; hiçbir wave approved scope dışı capability icat etmemelidir.
- WAVE_MAP freeze edildikten sonra downstream WAVE_PLAN yalnız parent entry'yi detaylandırabilir.
- In Scope, Deliverables ve Exit Boundary içinde geçen her executable capability Committed Capabilities listesinde görünür olmalıdır. Gizli capability yasaktır.
- Decomposition yalnız wave başlıkları üretmekle bitmez; her wave'in **neden ayrı olduğu**, hangi exact upstream deliverable'a dayandığı ve sonraki wave'e hangi tamamlanmış boundary'yi bıraktığı anlaşılır olmalıdır.

## Decomposition Heuristic

```text
1. Bu scope tek başına anlamlı bir deliverable mı?
2. Wave sonunda complete ve bağımsız doğrulanabilir olacak mı?
3. İçinde başka bağımsız capability var mı?
4. Ayırmak coherence'i artırır mı, yoksa mikro-wave mi üretir?
5. Whole-project QA feature wave'ine gizlenmiş mi?
6. Her committed capability exact approved executable support taşıyor mu?
7. In Scope / Deliverables / Exit Boundary aynı capability setini mi anlatıyor?
8. Bu wave neden tam bu sırada geliyor?
9. Hangi dependency tamamlanmadan bu wave güvenli biçimde başlayamaz?
10. Wave kapanınca sonraki agent'a hangi somut boundary teslim edilmiş olacak?
```

Kural:

```text
multiple independent deliverables → SPLIT
no meaningful standalone result → MERGE
one coherent complete deliverable → KEEP
whole-project QA hidden in surface wave → SPLIT QA
unsupported capability atom → REMOVE / FAIL
hidden capability outside Committed Capabilities → FAIL
```

## Validation Beklentileri

- Her committed capability atom exact executable approved support taşımalı.
- Broad/generic SCP başlığı unrelated adjacent capability authorize edemez.
- Future/Open/Out-of-Scope leakage olmamalı.
- In Scope / Deliverables / Exit Boundary capability seti Committed Capabilities ile aynı sınırda kalmalı.
- Her wave entry Goal + Committed Capabilities + In Scope + Out of Scope + Primary Deliverables + Dependencies + Exit Boundary taşımalı.
- Dependency chain acyclic olmalı.
- Whole-project QA gerekiyorsa ayrı wave olmalı.
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
