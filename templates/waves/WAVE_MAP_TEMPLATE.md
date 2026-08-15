# WAVE_MAP_TEMPLATE

## Template Metadata

```yaml
template_id: wave-map-template
template_name: Canonical Wave Map Template
document_id: WAVE-MAP
version: 3.0.0
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

## Required Point-of-Use Decomposition Calibration

WAVE_MAP write öncesinde compact quality reference **zorunlu checkpoint read**'idir:

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh templates/waves/WAVE_MAP_TEMPLATE.md
→ current approved scope + authorities
→ generate only WAVE_MAP
```

`ref/waves/Design_Wave_Plan.md` master/full reference olarak tutulur; runtime agent'ın 400KB+ full dosyayı bütünüyle okuması zorunlu değildir. Compact `WAVE_MAP_REFERENCE.md` full planın decomposition/sequencing düşüncesini point-of-use için taşır.

Reference layer yalnız şunları öğretir:

```text
meaningful wave separation
sequencing rationale
dependency reasoning
foundation / shared primitive / feature / runtime / cross-cutting boundary clarity
consolidation / regression / readiness / final-QA separation
handoff quality
```

Reference artifact current project authority değildir.

MUST NOT:

- Vibehall wave count veya isimlerini kopyalamak,
- reference capability'lerini current scope'a eklemek,
- reference filenames/stack/architecture'i varsaymak,
- reference completion state veya test sonuçlarını taşımak,
- küçük projeyi sırf reference uzun diye yapay micro-wave'lere bölmek.

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

## Executable Support Eligibility

Bir SCP/approved-scope atomu WAVE_MAP capability support adayı olabilmek için:

```text
Status ∈ {IN_SCOPE, KNOWN_DECISION}
AND
Executable = YES
```

olmalıdır.

Canonical support candidate set:

```text
EXECUTABLE_SUPPORT_CANDIDATES
= approved scope atoms where allowed executable status AND Executable=YES
```

Aşağıdakiler capability authorize edemez:

```text
VERIFIED_CURRENT_TRUTH
OPEN_QUESTION
FUTURE
OUT_OF_SCOPE
Executable = NO
```

`VERIFIED_CURRENT_TRUTH` yalnız factual/reference context'tir. Bir truth atomu approved başka bir surface içinde copy/context olarak kullanılabilir; kendi başına yeni About, Footer, Regional Context, badge, modal, map, form, widget, wave veya başka executable deliverable oluşturamaz.

Örnek:

```text
SCP-006: Trakya bölgesi makine servis bağlamı
Status: VERIFIED_CURRENT_TRUTH
Executable: NO

allowed:
- already approved hero/contact surface içinde FCL-bounded Trakya context copy

not allowed:
- WAVE: Corporate Background & Regional Context Presentation
- About.js capability
- regional context card capability
```

## Exact Semantic Support

Eligible support adayı bulunması tek başına yeterli değildir.

```text
map capability semantic meaning ⊆ exact executable support meaning
```

olmalıdır.

Broad/generic capability adjacent surface authorize etmez.

```text
approved: modern responsive corporate frontend
NOT automatically approved:
- corporate footer
- independent About section
- sticky action bar
- modal
- search/filter
- map/form

approved: phone/email direct-contact CTA
NOT automatically approved:
- WhatsApp
- contact form
- map
- independently meaningful sticky contact surface
```

Bir generated item yalnız şu koşulların tümü sağlanıyorsa aynı approved capability'nin implementation detail'i sayılabilir:

```text
same approved behavior
no new user-facing capability
no new interaction contract
no new factual/business meaning
no independently meaningful deliverable surface
```

Aksi halde ayrı executable capability atomudur ve exact support gerekir.

## Her Wave Entry İçin Zorunlu Boundary

Her wave entry aşağıdaki alanları açıkça taşımalıdır:

```text
Wave ID
Name
Goal
Why Separate / Sequencing Rationale
Committed Capabilities
In Scope
Out of Scope
Primary Deliverables
Dependencies
Upstream Boundary Consumed
Downstream Handoff
Exit Boundary
```

### Committed Capabilities

`Committed Capabilities` prose summary değildir. Wave'in gerçekten yapmayı taahhüt ettiği capability'ler **atomik** olarak ayrı satırlarda yazılır.

Her atom için:

```text
Capability
Approved Support ID(s)
Support Status
Support Executable Flag
Support Meaning
Eligibility Result
Semantic Subset Result
Map Subset Result
```

zorunludur.

Örnek:

```text
- phone CTA | SCP-006 | IN_SCOPE | YES | phone direct-contact CTA | PASS | PASS | PASS
- email CTA | SCP-006 | IN_SCOPE | YES | email direct-contact CTA | PASS | PASS | PASS
```

Şu kullanım geçersizdir:

```text
- phone/email/contact/map area | SCP-006 | PASS
```

çünkü bir approved capability birbiriyle ilişkili fakat ayrı capability'leri otomatik authorize etmez.

Canonical comparison:

```text
for each committed capability atom:
  resolve candidate support
  require candidate status IN_SCOPE/KNOWN_DECISION
  require candidate Executable=YES
  compare exact semantic meaning
  if eligibility fails -> FAIL / REMOVE
  if semantic subset fails -> FAIL / REMOVE
```

Adres, harita, form, WhatsApp, footer, sticky action bar, search, filter, modal, technical-detail overlay, CMS, backend gibi ayrı kullanıcı/ürün capability'leri generic `contact`, `responsive site`, `corporate surface`, `regional context` veya benzer geniş başlıklar altında gizlenemez.

## Hidden Capability Self-Diff

WAVE_MAP freeze edilmeden önce yalnız Committed Capabilities listesi değil **bütün executable-bearing alanlar** atomize edilir:

```text
Wave Map Summary / Deliverables
Goal
Committed Capabilities
In Scope
Primary Deliverables
Downstream Handoff
executable parts of Exit Boundary
other prose when it introduces a concrete surface / behavior / deliverable
```

Sonra:

```text
MAP_CAPABILITY_ATOMS = union(all executable-bearing fields)
COMMITTED_CAPABILITY_ATOMS = atoms explicitly listed under Committed Capabilities
HIDDEN_MAP_CAPABILITIES = MAP_CAPABILITY_ATOMS - semantically-covered(COMMITTED_CAPABILITY_ATOMS)
```

`HIDDEN_MAP_CAPABILITIES` gerçek executable surface/behavior/deliverable içeriyorsa map freeze edilemez.

Örnek:

```text
Committed: phone CTA + email CTA
In Scope: phone CTA + email CTA + mobile sticky CTA + footer
→ sticky CTA ve footer ayrı executable atoms ise HIDDEN_MAP_CAPABILITIES
→ commit atomu ekle + exact approved support çöz veya kaldır
```

Approved scope'ta destekli olması hidden kalmasına izin vermez; executable contract görünür olmalıdır.

## Factual Modifier Guard

Map decomposition gerçek dünya/firma/domain gerçeğini genişletemez.

```text
source/FCL: Yedek Parça Temini
map allowed: hizmet sunum wave'i / kart presentation boundary
map not allowed without exact FCL: orijinal parça, stok, belirli marka/ürün kapsamı

source/FCL: Yerinde Teknik Destek
map allowed: approved hizmetin presentation boundary'si
map not allowed without exact FCL: arıza müdahalesi, mobil filo, acil servis, SLA
```

“technical details”, “regional context”, “marketing copy”, “service detail” gibi presentation wording'i factual modifier üretme lisansı değildir.

Teknik implementation/decomposition kararı FCL gerektirmez; component/file/layout/adapter/responsive/QA kararları Engine tarafından resolve edilebilir, fakat yeni real-world fact veya product capability üretemez.

## Delivery Profile Wording Guard

Map approved delivery profile'dan daha yüksek maturity iddia edemez.

```text
Prototype -> demo-ready / validated prototype / sales-demo ready allowed
Prototype -> implementation-ready / production-ready / launch-ready forbidden
Implementation Ready -> production-ready forbidden unless approved profile changes
Production Ready -> production-ready allowed
```

Summary, Goal, Deliverables, Handoff ve Exit Boundary bu guard'a tabidir.

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
- Shared primitive/foundation birden fazla downstream surface tarafından tüketilecekse consuming feature'lardan önce ayrı boundary olarak düşünülür.
- Runtime/state/reconcile/lifecycle davranışları birden fazla specialized surface tarafından tüketiliyorsa tek UI wave'ine gizlenmez.
- Whole-project responsive/accessibility/consolidation/regression/performance/readiness/final QA işleri gerçekten bağımsız horizontal boundary oluşturuyorsa feature wave checklist'ine tek satır olarak sıkıştırılmaz.
- Her wave tek anlamlı goal ve net completion boundary taşır.
- Dependency zinciri açık ve acyclic olmalıdır.
- Bütün approved executable scope uygun wave'lere map edilmeli; hiçbir wave approved scope dışı capability icat etmemelidir.
- WAVE_MAP freeze edildikten sonra downstream WAVE_PLAN yalnız parent entry'yi detaylandırabilir.
- Summary, Goal, In Scope, Deliverables, Handoff ve Exit Boundary içinde geçen her executable capability Committed Capabilities listesinde görünür olmalıdır. Gizli capability yasaktır.
- Her wave'in **neden ayrı olduğu**, hangi exact upstream deliverable/boundary'ye dayandığı ve sonraki wave'e hangi tamamlanmış boundary'yi bıraktığı açık olmalıdır.
- Her committed capability support adayı executable-eligible olmalıdır; truth/reference status capability support yerine kullanılamaz.
- Broad scope atomu adjacent surface authorize edemez; exact semantic subset zorunludur.
- Factual copy/decomposition detail exact FCL semantic boundary'sini aşamaz.
- Delivery maturity wording approved profile ile aynı veya daha düşük olmalıdır.

## Decomposition Heuristic

```text
1. Bu scope tek başına anlamlı bir deliverable mı?
2. Wave sonunda complete ve bağımsız doğrulanabilir olacak mı?
3. İçinde başka bağımsız capability/delivery boundary var mı?
4. Ayırmak coherence'i artırır mı, yoksa mikro-wave mi üretir?
5. Shared foundation onu kullanan feature'ların içine gömülmüş mü?
6. Runtime/state foundation specialized surface içine gömülmüş mü?
7. Whole-project horizontal QA/readiness işi feature wave'ine gizlenmiş mi?
8. Her committed capability support status'u executable-eligible mı?
9. Her committed capability support atomunda Executable=YES mi?
10. Her committed capability exact executable support meaning'in semantic subset'i mi?
11. Summary / Goal / In Scope / Deliverables / Handoff / Exit aynı committed capability setini mi anlatıyor?
12. Her factual modifier exact FCL içinde mi?
13. Delivery wording approved profile'ı aşmıyor mu?
14. Bu wave neden tam bu sırada geliyor?
15. Hangi upstream boundary tamamlanmadan başlayamaz?
16. Wave kapanınca sonraki agent'a hangi somut boundary teslim edilmiş olacak?
```

Kural:

```text
multiple independent deliverables → SPLIT
shared prerequisite consumed by multiple later waves → CONSIDER FOUNDATION SPLIT
no meaningful standalone result → MERGE
one coherent complete deliverable → KEEP
whole-project horizontal closure hidden in feature wave → SPLIT IF STANDALONE
non-executable/truth-only support candidate → REMOVE / FAIL
broad support without semantic subset → REMOVE / FAIL
unsupported capability atom → REMOVE / FAIL
hidden capability outside Committed Capabilities → FAIL
factual modifier outside FCL → REMOVE / FAIL
profile-upgrading wording → REWRITE / FAIL
```

## Decomposition Quality Exit Test

Map yalnız `N wave + acyclic dependency` olduğu için yeterli değildir.

WAVE_MAP implementation decomposition olarak PASS sayılabilmesi için fresh capable agent şu üç şeyi her wave için yeniden planlamadan anlayabilmelidir:

```text
WHY SEPARATE — neden bu wave bağımsız boundary?
UPSTREAM — hangi tamamlanmış boundary'yi tüketiyor?
HANDOFF — sonraki wave'e hangi somut tamamlanmış sonucu bırakıyor?
```

Bu üçünden biri generic/belirsiz ise map depth yetersizdir.

## Validation Beklentileri

- Required point-of-use compact map reference calibration uygulanmış olmalı; independent trace unavailable ise read event ayrıca kanıtlanamaz fakat generated map depth yine artifact üzerinden değerlendirilir.
- Her committed capability support adayı `IN_SCOPE|KNOWN_DECISION` + `Executable=YES` olmalı.
- `VERIFIED_CURRENT_TRUTH` yalnız factual/reference context olarak kullanılmalı; capability support olmamalı.
- Her committed capability atom exact executable approved support taşımalı ve semantic subset olmalı.
- Broad/generic SCP başlığı unrelated adjacent capability authorize edemez.
- Future/Open/Out-of-Scope leakage olmamalı.
- `HIDDEN_MAP_CAPABILITIES == empty` olmalı.
- Summary / Goal / In Scope / Deliverables / Handoff / Exit capability seti Committed Capabilities ile aynı sınırda kalmalı.
- Factual modifiers exact FCL semantic boundary'sini aşmamalı.
- Delivery wording approved profile'dan yüksek maturity ima etmemeli.
- Her wave entry Goal + Why Separate + Committed Capabilities + In Scope + Out of Scope + Primary Deliverables + Dependencies + Upstream Boundary + Downstream Handoff + Exit Boundary taşımalı.
- Dependency chain acyclic olmalı.
- Whole-project QA gerekiyorsa uygun ayrı wave olmalı.
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
