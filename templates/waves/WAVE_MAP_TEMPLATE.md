# WAVE_MAP_TEMPLATE

## Template Metadata

```yaml
template_id: wave-map-template
template_name: Canonical Wave Map Template
document_id: WAVE-MAP
version: 2.3.0
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

Projenin implementation yolunu baştan sona anlamlı delivery wave'lerine bölen; her wave'in amacı, scope boundary'si, dependency'si, ana deliverable'ı ve exit kriterini üst seviyede tanımlayan canonical haritadır.

## Kullanım Koşulları

`implementation_planning: standard | full` olan implementation-bearing projelerde zorunludur. Delivery profile'ın Prototype olması bu belgeyi kapsam dışı bırakmaz.

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
- Wave 00, projenin ilk uygulanabilir foundation/bootstrapping adımını temsil etmelidir; boş formalite wave'i olmamalıdır.
- Foundation sonrasında distinct user-facing surface, feature, flow veya coherent delivery unit'leri ayrı wave adayı olarak değerlendirilmelidir.
- Bir surface kendi başına anlamlı biçimde tamamlanıp doğrulanabiliyorsa, başka bağımsız surface'lerle aynı wave'e yalnız teknik benzerlik veya aynı sayfada yer alma nedeniyle sıkıştırılmamalıdır.
- Aynı page içinde `Home/Hero`, `Corporate/Trust`, `Services`, `Contact` gibi farklı kullanıcı sorumlulukları taşıyan büyük surface'ler küçük ve gerçekten tek-deliverable bir sayfa olmadığı sürece tek `Core Frontend` wave'ine yığılmamalıdır.
- Bir wave'in scope'u başka bir wave'e ayrılabilecek birden fazla bağımsız anlamlı teslim içeriyorsa wave fazla büyüktür; split edilmelidir.
- Bir wave sonunda tek başına anlamlı ve doğrulanabilir bir sonuç oluşmuyorsa wave fazla küçüktür; coherent komşu scope ile merge edilmelidir.
- Aynı surface içinde birbirine sıkı bağlı section'lar tek wave'de kalabilir; her section yapay biçimde ayrı wave yapılmaz.
- Her wave tek bir anlamlı goal ve net bir completion boundary taşır.
- Wave entry, o wave sonunda hangi kullanıcı yüzeyi/feature/foundation alanının **tamamlanmış** sayılacağını açıkça belirtmelidir.
- Bir feature/surface wave'i yalnız kendi deliverable'ının responsive/state/QA sorumluluğunu taşır.
- Tüm proje yüzeylerini yeniden doğrulayan cross-cutting final integration, cross-browser, regression veya full responsive QA işi varsa bu iş son feature/contact wave'ine gömülmemeli; ayrı final integration/QA wave adayı olarak değerlendirilmelidir.
- Dependency zinciri açık olmalı; circular dependency olamaz.
- Design/data/API/test belgeleri applicable ise wave scope bunlarla hizalanmalıdır.
- `full` planning daha granüler dependency/risk planning getirebilir; yapay wave çoğaltamaz.
- Bütün approved scope en az bir wave'e map edilmeli, hiçbir wave approved scope dışı iş icat etmemelidir.

## Decomposition Heuristic

Wave map hazırlanırken her candidate scope için şu sorular cevaplanır:

```text
1. Bu scope tek başına anlamlı bir deliverable mı?
2. Wave sonunda bu deliverable complete ve bağımsız doğrulanabilir olacak mı?
3. İçinde başka bağımsız surface/feature/flow'lar gizleniyor mu?
4. Bunları ayırmak coherence'i artırır mı, yoksa yapay mikro-wave mi üretir?
5. Son surface wave'i aynı zamanda bütün projeyi test eden cross-cutting QA yükünü taşıyor mu?
```

Kural:

```text
multiple independent deliverables inside one wave → SPLIT
no meaningful standalone result → MERGE
one coherent complete deliverable → KEEP
cross-cutting whole-project QA hidden in final feature wave → SPLIT QA
```

Domain/package bağlamı decomposition'a yardımcı olabilir; ancak sabit bir wave reçetesi değildir. Gerçek approved scope'a göre split/merge yapılır.

## Granularity Reference Example

Aşağıdaki örnek **zorunlu wave listesi değildir**. Corporate / landing UI projelerinde beklenen decomposition granülerliğini göstermek içindir:

```text
WAVE_00 — Foundation
WAVE_01 — Home / Hero + Primary Value Proposition
WAVE_02 — Corporate / Trust / Authorized Service
WAVE_03 — Services
WAVE_04 — Contact
WAVE_05 — Final Integration / Responsive / QA
```

Bu örneğin anlattığı kurallar:

- Foundation, user-facing surface'lerden ayrılır.
- Birbirinden ayrı kullanıcı sorumlulukları tek broad `Core Frontend` wave'ine yığılmaz.
- `Header + Hero + About + Services + Contact` bütününün tek wave olması, yalnız kapsam gerçekten küçük ve tek coherent deliverable ise kabul edilebilir.
- Contact wave kendi contact deliverable'ını responsive/state/QA ile tamamlar; bütün proje regression/cross-browser/final responsive QA bundan ayrı bir cross-cutting sorumluluktur.
- Final integration/QA gerçekten cross-cutting ise son feature/contact wave'inden ayrılır.
- Gerçek proje kapsamı daha küçükse wave'ler merge; daha karmaşıksa split edilebilir.

Örnek bir reçete değil, **granularity calibration reference** olarak kullanılır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{WAVE_ARCHITECTURE_PRINCIPLES}}`
- `{{WAVES_SUMMARY_TABLE}}`
- `{{DEPENDENCY_CHAIN}}`
- `{{WAVE_ENTRIES_LIST}}`
- `{{CROSS_WAVE_INVARIANTS}}`
- `{{GLOBAL_EXIT_HANDOFF_RULES}}`

## Validation Beklentileri

- Approved scope coverage tam olmalı.
- Wave dependency chain acyclic ve uygulanabilir olmalı.
- Her wave meaningful, independently verifiable ve completion boundary'si net bir deliverable tanımlamalı.
- Broad technical mega-wave içinde birden fazla bağımsız product surface/feature saklanmamalı.
- Cross-cutting whole-project QA son feature/surface wave'ine gizlenmemeli.
- Granularity, yukarıdaki reference example'ın anlattığı separation seviyesine makul biçimde yakın olmalı; örneğin birebir kopyalanması gerekmez.
- Her wave için WAVE-PLAN dynamic instance üretilebilmelidir.
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
