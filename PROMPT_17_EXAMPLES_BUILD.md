~~~md
# PROMPT_17_EXAMPLES_BUILD

Product Engine’in `examples/` build aşamasıdır.

`engine/`, `packages/`, `templates/`, `inputs/`, `runs/`, `outputs/` ve `logs/` Approved ve Closed durumdadır.

Bu görevde yalnızca `examples/` klasörünü Product Engine’in kontrollü eğitim, demonstration ve test-fixture katmanı olarak inşa et.

Amaç rastgele örnek dosyalar doldurmak değildir.

`examples/` şu sorulara somut cevap verebilmelidir:

- Geçerli bir project input nasıl görünür?
- Pending ve approved input farkı nasıl gösterilir?
- Bir Product Engine run’ı hangi temel kayıtları üretir?
- Temiz final output nasıl görünür?
- Positive / negative / edge-case davranış nasıl gösterilir?
- Minimal ve comprehensive senaryolar nasıl ayrılır?
- Example’lar engine contract’larından nasıl ayrılır?
- Gerçek müşteri/project verisi kullanılmadan nasıl test fixture hazırlanır?

Yeni runtime architecture tasarlama.

Examples hiçbir zaman Approved engine contract’ın yerine geçmez.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/EXAMPLES_FOLDER_SPEC.md`

Ardından Approved katmanlardan:

3. `engine/README.md`
4. `engine/PROJECT_INTAKE.md`
5. `engine/PACKAGE_RULES.md`
6. `engine/DOCUMENT_CATALOG.md`
7. `engine/RUN_PROTOCOL.md`
8. `engine/VALIDATION_RULES.md`
9. `engine/OUTPUT_STRUCTURE.md`

Ardından:

10. `inputs/README.md`
11. `inputs/PROJECT_INPUT_TEMPLATE.md`
12. `runs/README.md`
13. `outputs/README.md`
14. `templates/README.md`
15. `packages/README.md`
16. `logs/README.md`

Son olarak mevcut:

17. `examples/README.md`

ve `examples/` altındaki mevcut içerikleri incele.

Approved runtime contracts authoritative kaynaktır.

Examples yalnız onları gösterir; override etmez.

---

# 2. Examples Katmanının Rolü

Canonical ayrım:

```text
engine/
→ ne yapılacağını tanımlar

templates/
→ belgenin nasıl üretileceğini tanımlar

inputs/
→ gerçek approved project truth

runs/
→ gerçek execution evidence

outputs/
→ gerçek clean final deliverables

examples/
→ kontrollü demonstrasyon ve test senaryoları
~~~

------

# 3. Examples Authoritative Değildir

Bir example:

```text
MUST NOT
```

şunlardan biri gibi davranmamalıdır:

- engine rule
- package authority
- template authority
- current project truth
- real run history
- real final output

Bir example yalnızca approved davranışın nasıl görünebileceğini gösterir.

------

# 4. Canonical Folder Structure

V0 canonical structure:

```text
examples/
├── README.md
├── inputs/
├── runs/
└── outputs/
```

Bu build sırasında yeni top-level folder oluşturma.

Özellikle:

```text
examples/scenarios/
examples/fixtures/
examples/invalid/
examples/archive/
```

oluşturma.

Bunlar gelecekte değerlendirilebilir ancak V0 canonical yapı değildir.

------

# 5. README Responsibility

`examples/README.md` authoritative usage guide olmalıdır.

Minimum olarak şunları açıklamalıdır:

- examples amacı
- non-authoritative konumu
- engine/template/example ayrımı
- inputs/runs/outputs example ayrımı
- sentetik example tercihi
- anonymization rules
- positive / negative / edge case / minimal / comprehensive types
- scenario_id ilişkisi
- engine/template compatibility
- stale/deprecated example behavior
- test-fixture usage
- yeni example ekleme kriterleri

------

# 6. Example Types

Examples sistemi aşağıdaki controlled example türlerini destekleyebilir:

```text
positive
negative
edge-case
minimal
comprehensive
```

Bunlar lifecycle status değildir.

------

# 7. Positive Example

Positive example:

- approved contracts’a uyar,
- expected quality’yi gösterir,
- validation açısından temizdir,
- eğitim/test amacıyla kullanılabilir.

------

# 8. Negative Example

Negative example bilinçli olarak hatalıdır.

Ancak hata açıkça işaretlenmelidir.

Örnek hata türleri:

```text
missing-required-input
wrong-package-selection
template-instruction-leakage
cross-project-content-leakage
unresolved-placeholder
invalid-status
```

Negative example gerçek failed run gibi sunulmamalıdır.

------

# 9. Edge Case Example

Edge case:

- unusual olabilir,
- ama contract açısından geçerli olabilir.

Örnek:

```text
existing project with weak documentation
conditional-pass scenario
prototype → implementation-ready transition
critical non-blocking uncertainty
```

Approved contracts ile uyumlu kal.

------

# 10. Minimal Example

Minimal example:

```text
small valid scenario
→ minimum necessary input
→ minimum applicable document scope
```

Amaç engine’in gereksiz bürokrasi üretmediğini göstermek.

------

# 11. Comprehensive Example

Comprehensive example:

```text
larger valid scenario
→ broader applicable docs
→ richer scope
```

Ancak gereksiz yapay complexity üretme.

------

# 12. Scenario ID

Aynı senaryoya ait input/run/output materyalleri ortak `scenario_id` ile ilişkilendirilmelidir.

Canonical format:

```text
<project-type>-<descriptor>-<sequence>
```

Örnek:

```text
web-app-minimal-001
api-service-validation-001
landing-page-negative-001
```

------

# 13. Project Type Vocabulary

Scenario ID veya metadata içinde canonical project types kullan.

Canonical types:

```text
web-app
api-service
mobile-app
internal-tool
landing-page
content-platform
integration
infrastructure
prototype
other
```

`corporate-website` bir project type değildir; package ID olabilir.

------

# 14. Package IDs

Canonical package IDs:

```text
demo-frontend
corporate-website
saas
existing-project
api-service
```

Display name yerine canonical ID kullan.

------

# 15. Delivery Profiles

Canonical delivery profiles:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

Lowercase veya yeni profile üretme.

------

# 16. Example Metadata

Example scenario metadata mümkün olduğunca şu bilgileri taşımalıdır:

```text
scenario_id
title
example_type
project_type
package_id
delivery_profile
engine_version
status
created_at
updated_at
source
anonymized
```

Template version bilgisi gerekiyorsa approved template contract’tan alınmalıdır.

Fake template version uydurma.

------

# 17. Engine Version

Root README’de authoritative engine version henüz atanmadıysa:

```text
engine_version: not_assigned
```

kullan.

Fake version üretme.

------

# 18. Example Status

Example lifecycle için küçük kontrollü vocabulary kullan:

```text
active
deprecated
invalid
```

Bu değerler run lifecycle status değildir.

Yeni karmaşık workflow tasarlama.

------

# 19. Synthetic First Policy

Mümkün olduğunca sentetik project scenario kullan.

Sentetik example:

- gerçek müşteri değildir,
- gerçek şirket değildir,
- private repo değildir,
- test amacıyla üretilmiştir.

------

# 20. No Real Project Leakage

Şunları example’a taşıma:

```text
real company names
real person names
phone numbers
emails
addresses
private URLs
commercial prices
client secrets
real user data
private repository paths
```

Mevcut real projects’ten içerik kopyalama.

------

# 21. Anonymization

Bir real-world pattern’den esinlenilse bile yalnız isim değiştirmek yeterli değildir.

Şunları da temizle:

- distinctive business facts
- identifiable product details
- private commercial info
- unique contact/location data

------

# 22. Input Examples

`examples/inputs/` içinde V0 için kontrollü example setleri oluştur.

Ama klasörü onlarca scenario ile doldurma.

Minimum useful set yeterlidir.

Önerilen başlangıç:

```text
examples/inputs/
├── README.md
├── web-app-minimal-001/
│   └── PROJECT_INPUT.md
└── web-app-pending-001/
    └── PROJECT_INPUT.md
```

Eğer approved planning spec başka physical naming convention gerektiriyorsa onu uygula.

------

# 23. Approved Input Example

Positive approved input example:

- `inputs/PROJECT_INPUT_TEMPLATE.md` yapısına uymalı,
- canonical project type kullanmalı,
- canonical delivery profile kullanmalı,
- `status: approved` olabilir,
- synthetic content taşımalı,
- unresolved required truth bırakmamalı.

Bu example gerçek approved input değildir.

------

# 24. Pending Input Example

Pending example:

- `status: pending`
- kritik eksik bilgi taşıyabilir,
- generation source olarak kullanılmaması gerektiğini göstermeli.

Pending’i valid generation input gibi sunma.

------

# 25. Input Version Semantics

Input example versioning canonical:

```text
v1
v2
```

Metadata:

```text
input_version: "1"
input_version: "2"
```

`v1.0`, `1.0` gibi semantic input version kullanma.

------

# 26. Run Examples

`examples/runs/` gerçek runtime run değildir.

Run examples yalnız lifecycle behavior demonstrasyonu/test fixture’dır.

Minimum useful set:

```text
examples/runs/
├── README.md
├── web-app-minimal-001/
└── web-app-blocked-001/
```

Scenario yapısı approved `runs/` contract’ıyla uyumlu olmalıdır.

------

# 27. Run Example Structure

Bir run example gerektiğinde canonical per-run belgelerden yalnız senaryonun davranışını göstermek için gerekenleri içerebilir.

Ancak mümkünse gerçek run shape’i koru:

```text
RUN_MANIFEST.md
INPUT_SNAPSHOT.md
PACKAGE_SELECTION.md
SOURCE_REGISTER.md
ASSUMPTIONS.md
CONFLICTS.md
DECISIONS.md
RUN_LOG.md
PROGRESS.md
VALIDATION_REPORT.md
COMPLETION_REPORT.md
working-output/
```

Negative/minimal fixture için intentionally omitted file varsa bunun intentional olduğu README/fixture note içinde belirtilmelidir.

------

# 28. Canonical Run ID

Example run ID de canonical format kullanmalıdır:

```text
RUN-<YYYYMMDD>-<sequence>
```

Örnek:

```text
RUN-20260101-001
```

Bunun synthetic fixture olduğu açık olmalıdır.

------

# 29. Run Status Vocabulary

Run examples canonical status vocabulary kullanmalıdır:

```text
Created
Initialized
Running
Validation
Completed
Blocked
Paused
Resumed
Failed
Cancelled
Invalidated
```

`Active`, `Done`, `Success` kullanma.

------

# 30. No Fake Detailed Chronology

Run examples gereksiz 40-event sahte `RUN_LOG` üretmemelidir.

Yalnız test edilen behavior için gereken minimum chronological evidence’i göster.

------

# 31. Completed Example

Completed positive run:

- approved input snapshot kullanmalı,
- canonical package/profile göstermeli,
- validation `PASS` veya accepted `CONDITIONAL PASS`,
- exact `output_version`,
- exact `output_ref`,
- clean publication relationship göstermeli.

------

# 32. Blocked Example

Blocked example:

- `runs/active` semantics’i öğretmeli,
- unresolved critical conflict veya clarification ihtiyacı gösterebilir,
- status `Blocked` olmalı,
- final output publish etmemeli.

Blocked ≠ Failed.

------

# 33. Failed Example

Eğer failed fixture eklenirse:

- only engine-defined terminal failure sebebi kullan,
- unresolved conflict’i otomatik Failed yapma,
- output publish etme,
- latest update etme.

------

# 34. Output Examples

`examples/outputs/` controlled clean deliverable fixture katmanıdır.

Minimum başlangıç seti:

```text
examples/outputs/
├── README.md
└── web-app-minimal-001/
```

Buradaki output gerçek `outputs/` runtime history değildir.

------

# 35. Output Example Structure

Example output package approved output cleanliness rules’ına uymalıdır.

Positive output:

```text
- no unresolved placeholders
- no run artefacts
- no template metadata
- no private/internal notes
- no secrets
- no machine-local paths
```

------

# 36. Output Version Semantics

Output example versioning Approved output contract ile uyumlu olabilir:

```text
v0.1
v0.2
v1.0
```

Input versioning ile karıştırma.

------

# 37. No RUN_MANIFEST Leakage

Positive example output içine:

```text
RUN_MANIFEST.md
RUN_LOG.md
VALIDATION_REPORT.md
INPUT_SNAPSHOT.md
```

kopyalama.

Run/output boundary gerçek runtime ile aynı kalmalı.

------

# 38. Negative Output Example

Negative output fixture eklenirse bunun intentionally invalid olduğu açıkça belirtilmelidir.

Invalid example gerçek “good output” klasörüyle karışmamalıdır.

V0’da ayrı `examples/invalid/` top-level folder oluşturma.

Invalidity metadata/README ile ifade edilebilir.

------

# 39. Ref ≠ Example

Canonical ayrım:

```text
ref/
→ external/reference quality source

examples/
→ controlled Product Engine-compatible test scenario
```

Ref içeriğini doğrudan example diye kopyalama.

------

# 40. Example ≠ Template

Example içeriği yeni template authority yaratmaz.

Ajan:

```text
example says X
```

diye template/engine contract’ı override edemez.

Conflict varsa:

```text
engine/templates authoritative
example stale
```

kabul edilir.

------

# 41. Compatibility

Her example mümkün olduğunca hangi contract state ile uyumlu olduğunu göstermelidir.

Engine version yoksa:

```text
engine_version: not_assigned
```

kullan.

Fake template version icat etme.

------

# 42. Stale Example

Engine contract değiştiğinde example artık uyumsuzsa:

```text
status: deprecated
```

veya:

```text
status: invalid
```

olarak işaretlenebilir.

Sessizce eski örneği authoritative gibi bırakma.

------

# 43. Deprecated Example Retention

Deprecated example test/history değeri taşıyorsa korunabilir.

Ama README açıkça bunun current contract için reference olmadığını belirtmelidir.

------

# 44. Test Fixture Use

Examples:

- manual validation
- regression comparison
- package behavior check
- template generation comparison
- agent onboarding

için kullanılabilir.

Ancak test framework implementasyonu tasarlama.

------

# 45. Determinism

Bir scenario aynı approved contract ve aynı input varsayımları altında mümkün olduğunca aynı expected behavior’ı göstermelidir.

Random content üretme.

------

# 46. Example Density

V0 build sırasında dozens of examples oluşturma.

Ama sadece boş README’lerle de bırakma.

Hedef:

```text
small but representative fixture set
```

------

# 47. Recommended V0 Scenario Set

Başlangıç için üç scenario yeterlidir:

```text
web-app-minimal-001
→ positive/minimal/approved flow

web-app-pending-001
→ pending input / generation gate

web-app-blocked-001
→ blocked run lifecycle
```

Ayrıca tek bir clean output fixture:

```text
web-app-minimal-001
```

positive scenario ile ilişkilendirilebilir.

------

# 48. Scenario Cross-Linking

Aynı scenario ID şu katmanlarda eşleşebilir:

```text
examples/inputs/web-app-minimal-001/
examples/runs/web-app-minimal-001/
examples/outputs/web-app-minimal-001/
```

Bu fiziksel naming seçimi planning contract ile uyumluysa kullan.

Scenario ilişkisini dosya adı yerine yalnız path’e güvenmeden metadata’da da göster.

------

# 49. Scenario Documentation

Her scenario klasöründe gerekirse kısa:

```text
SCENARIO.md
```

kullanılabilir.

Ancak yeni top-level `examples/scenarios/` oluşturma.

`SCENARIO.md` yalnız o scenario’nun:

- amacı
- example type
- tested behavior
- expected result
- success criteria

bilgisini taşımalıdır.

Engine contract’ı tekrar etmemelidir.

------

# 50. SCENARIO.md Ownership

Scenario document:

```text
describes the fixture
```

ama:

```text
does not define runtime behavior
```

README’de bunu açıkça belirt.

------

# 51. Date Values

Synthetic fixtures için sabit deterministic tarih kullanılabilir.

Örnek:

```text
2026-01-01
```

Bunun test fixture olduğu anlaşılmalıdır.

Current date dependency yaratma.

------

# 52. Source Metadata

Synthetic example:

```text
source: synthetic
anonymized: true
```

gibi metadata kullanabilir.

Gerçek source URL koyma.

------

# 53. Security

Examples içine:

```text
password
live API key
token
private key
credential
real personal data
```

koyma.

Secrets test edilecekse safe dummy notation kullan:

```text
EXAMPLE_API_KEY
```

ama gerçek secret formatına benzeyen active credential üretme.

------

# 54. Local Path Safety

Şunları kullanma:

```text
file:///
C:\Users\
/Users/name/
```

Repo-relative paths kullan.

------

# 55. Model Independence

Examples model-specific davranış göstermemelidir.

Şunlara bağlama:

```text
Gemini
Claude
GPT
Codex
```

Generic:

```text
execution agent
review agent
```

kullan.

------

# 56. Private Chain-of-Thought

Example run logs veya scenario docs private reasoning içermemelidir.

Yalnız:

```text
observation
decision
status
result
evidence
short rationale
```

gibi audit-safe information kullanılabilir.

------

# 57. Example Naming

File/folder isimleri:

- lowercase kebab-case
- predictable
- scenario_id ile ilişkili

olmalıdır.

Canonical runtime filenames ise değiştirilmemelidir:

```text
PROJECT_INPUT.md
RUN_MANIFEST.md
PROJECT_BRAIN.md
README.md
```

------

# 58. No Real Runtime Mutation

Examples build sırasında:

- `inputs/approved/`
- `runs/active/`
- `runs/completed/`
- `outputs/`

altına gerçek fixture kopyalama.

Tüm test material yalnız:

```text
examples/
```

altında kalmalı.

------

# 59. No Logs Pollution

Examples build sırasında:

```text
logs/RUN_INDEX.md
logs/ENGINE_CHANGELOG.md
logs/ISSUES.md
logs/IMPROVEMENTS.md
```

güncelleme.

Example fixture creation runtime run değildir.

------

# 60. Scope Discipline

Bu görev sırasında yalnızca:

```text
examples/
```

altında çalış.

Değiştirme:

- `engine/`
- `packages/`
- `templates/`
- `inputs/`
- `runs/`
- `outputs/`
- `logs/`
- `planning/`
- `archive/`
- `ref/`
- root README
- Product Engine Brain

Kök `PROMPT_17_EXAMPLES_BUILD.md` task artefact’ının committe bulunması normaldir.

------

# 61. Expected Physical Result

Minimum kabul edilebilir sonuç:

```text
examples/
├── README.md
├── inputs/
│   ├── README.md
│   ├── web-app-minimal-001/
│   │   ├── SCENARIO.md
│   │   └── PROJECT_INPUT.md
│   └── web-app-pending-001/
│       ├── SCENARIO.md
│       └── PROJECT_INPUT.md
├── runs/
│   ├── README.md
│   ├── web-app-minimal-001/
│   │   ├── SCENARIO.md
│   │   └── <controlled run fixture files>
│   └── web-app-blocked-001/
│       ├── SCENARIO.md
│       └── <controlled run fixture files>
└── outputs/
    ├── README.md
    └── web-app-minimal-001/
        ├── SCENARIO.md
        └── <clean final project docs>
```

Fixture seti minimal tutulabilir.

Ama meaningful olmalıdır.

------

# 62. Final Audit

Build bittikten sonra tüm `examples/` klasörünü kontrol et.

Şunları doğrula:

1. Top-level yalnız README + inputs/runs/outputs mı?
2. Yeni scenarios/fixtures/invalid folder oluşturuldu mu? Oluşturulmamalı.
3. Example non-authoritative olarak açık mı?
4. Engine/template/example ayrımı açık mı?
5. Positive/negative/edge/minimal/comprehensive semantics tanımlı mı?
6. Synthetic-first policy var mı?
7. Real project/company leakage var mı?
8. Scenario IDs deterministic mi?
9. Canonical project types kullanılıyor mu?
10. Canonical package IDs kullanılıyor mu?
11. Canonical delivery profiles kullanılıyor mu?
12. Fake engine version uydurulmuş mu?
13. Input versioning v1/v2 standardıyla uyumlu mu?
14. Pending input generation source gibi sunuluyor mu? Sunulmamalı.
15. Run examples canonical Run ID kullanıyor mu?
16. Run statuses canonical mı?
17. Blocked ≠ Failed korunuyor mu?
18. Failed fixture unresolved conflict’i terminal failure yapıyor mu? Yapmamalı.
19. Positive output clean mi?
20. Run artefacts output’a sızıyor mu? Sızmamalı.
21. Template metadata output’a sızıyor mu? Sızmamalı.
22. Unresolved placeholders positive output’ta var mı? Olmamalı.
23. Private CoT var mı? Olmamalı.
24. Secret/local path var mı? Olmamalı.
25. Model lock-in var mı? Olmamalı.
26. Example runtime foldersa kopyalanmış mı? Kopyalanmamalı.
27. Logs güncellenmiş mi? Güncellenmemeli.
28. Example density aşırı mı?
29. Scenario cross-linking anlaşılır mı?
30. Yalnız examples/ değiştirildi mi?

------

# 63. Çalışma Sonu Raporu

## Oluşturulan Examples Yapısı

Fiziksel ağacı göster.

## Scenario Set

Her scenario için:

```text
scenario_id
example_type
tested behavior
expected result
```

kısa yaz.

## Input Examples

Approved ve pending farkını açıkla.

## Run Examples

Completed/Blocked fixture davranışını açıkla.

## Output Example

Clean positive output fixture’ın hangi kuralları gösterdiğini açıkla.

## Authority Boundary

Şunu doğrula:

```text
engine/templates
→ authoritative

examples
→ demonstrative / test fixtures
```

## Safety

Şunları doğrula:

- synthetic data
- no real project leakage
- no secrets
- no local paths
- no private CoT
- model-independent

## Scope

Yalnızca `examples/` değiştirildiğini doğrula.

## Sonuç

Şunlardan biriyle bitir:

```text
EXAMPLES_BUILD_COMPLETE
```

veya:

```text
EXAMPLES_BUILD_BLOCKED
```

Blocked ise yalnız gerçek engeli açıkla.