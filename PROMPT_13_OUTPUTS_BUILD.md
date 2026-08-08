~~~md
# PROMPT_13_OUTPUTS_BUILD

Product Engine’in `outputs/` build aşamasıdır.

`engine/`, `packages/`, `templates/`, `inputs/` ve `runs/` Approved ve Closed durumdadır.

Bu görevde yalnızca `outputs/` klasörünü gerçek, kullanılabilir, deterministic ve model-bağımsız final deliverable katmanı olarak inşa et.

Amaç yalnızca birkaç boş klasör oluşturmak değildir.

`outputs/` katmanı şu sorulara deterministik cevap verebilmelidir:

- Final output ne zaman oluşturulabilir?
- Working output ile final output arasındaki sınır nedir?
- Bir output hangi run’dan geldi?
- Output category nasıl belirlenir?
- Versioning nasıl çalışır?
- `latest/` neyi temsil eder?
- Historical versions immutable mı?
- Yeni version oluştuğunda eski version ne olur?
- Failed veya Cancelled run output publish edebilir mi?
- Invalidated run sonrası `latest/` nasıl davranır?
- Run operational files output’a sızabilir mi?
- Output içine template/internal metadata sızabilir mi?
- Aynı proje için version geçmişi nasıl korunur?

Yeni Product Engine mimarisi tasarlama.

Approved engine, package, template, input veya run sözleşmelerini değiştirme veya override etme.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/OUTPUTS_FOLDER_SPEC.md`

Ardından Approved engine sözleşmelerinden:

5. `engine/README.md`
6. `engine/OUTPUT_STRUCTURE.md`
7. `engine/GENERATION_PIPELINE.md`
8. `engine/RUN_PROTOCOL.md`
9. `engine/VALIDATION_RULES.md`
10. `engine/DOCUMENT_CATALOG.md`
11. `engine/PACKAGE_RULES.md`

Ardından Approved runtime/input belgelerinden:

12. `inputs/README.md`
13. `runs/README.md`
14. `runs/completed/README.md`
15. `runs/failed/README.md`

Ardından gerekli template belgelerinden:

16. `templates/README.md`
17. `templates/runs/RUN_MANIFEST_TEMPLATE.md`
18. `templates/runs/VALIDATION_REPORT_TEMPLATE.md`
19. `templates/runs/COMPLETION_REPORT_TEMPLATE.md`

Gerekli olduğunda package ve document template’lerine yalnız output davranışını doğrulamak için bakabilirsin.

---

# 2. Outputs Katmanının Sorumluluğu

`outputs/` Product Engine’in temiz, doğrulanmış ve teslim edilebilir final document katmanıdır.

Ownership ayrımı:

```text
inputs/
→ reusable approved project truth

runs/
→ execution evidence + working-output

outputs/
→ clean validated final deliverables

templates/
→ output document structure

engine/
→ generation / validation / output rules

logs/
→ persistent engine-level memory
~~~

`outputs/`:

- working area değildir,
- run history değildir,
- validation report deposu değildir,
- template deposu değildir,
- project truth owner değildir.

------

# 3. Canonical Output Structure

Approved engine output structure temel alınmalıdır.

Canonical yapı:

```text
outputs/
├── README.md
├── demos/
└── products/
```

Project-level output:

```text
outputs/<category>/<project-slug>/
├── latest/
└── versions/
```

Versioned output:

```text
outputs/<category>/<project-slug>/versions/<output-version>/
```

Bu yapıyı değiştirme.

Yeni top-level category oluşturma.

------

# 4. Canonical Categories

V0 canonical output category değerleri:

```text
demos
products
```

Yeni category icat etme.

Örneğin şunları oluşturma:

```text
saas/
websites/
apps/
production/
prototype/
clients/
```

Package/profile/category kavramlarını birbirine karıştırma.

------

# 5. Category Resolution

Output category run sırasında seçilen package/profile context’e göre Approved engine/package kuralları tarafından çözülmelidir.

`outputs/` layer kendi package-selection logic’ini icat etmez.

Output layer yalnız resolved category’yi uygular.

Örnek:

```text
category: demos
```

veya:

```text
category: products
```

------

# 6. Final Output Creation Gate

Bir output version yalnızca run başarılı finalization gate’ini geçtiğinde oluşturulabilir.

Minimum şartlar:

```text
- run active durumda finalization aşamasında
- required/applicable documents generated
- validation result PASS veya approved CONDITIONAL PASS
- finalization allowed
- output category resolved
- output version assigned
```

Validation öncesi final output oluşturma.

------

# 7. Working Output ≠ Final Output

Bu ayrım kesin korunmalıdır:

```text
runs/active/<run-id>/working-output/
→ generation workspace
outputs/<category>/<project-slug>/versions/<output-version>/
→ clean final deliverable
```

Working output:

- incomplete olabilir,
- placeholder içerebilir,
- repair görebilir,
- validation bekleyebilir.

Final output:

- validated olmalıdır,
- temiz olmalıdır,
- unresolved placeholder içermemelidir,
- run operational files içermemelidir.

------

# 8. Finalization Pipeline

Canonical akış:

```text
working-output
↓
validation
↓
repair if required
↓
PASS / approved CONDITIONAL PASS
↓
final output assembly
↓
versioned output publication
↓
latest update
↓
run completion
```

`outputs/` layer bu pipeline’ı bypass etmemelidir.

------

# 9. Output Versioning

Output versioning, input versioning’den bağımsızdır.

Input:

```text
v1
v2
v3
```

standardına sahip olabilir.

Output version formatı Approved engine contract’ta tanımlandığı şekilde korunmalıdır.

Örneğin Run Protocol:

```text
output_version
```

alanını kullanır.

Planning/output spec hangi canonical formatı belirtiyorsa onu uygula.

Yeni version standardı icat etme.

------

# 10. Versioned Historical Outputs

Her final output version:

```text
outputs/<category>/<project-slug>/versions/<output-version>/
```

altında saklanmalıdır.

Historical version:

- silinmemelidir,
- inplace overwrite edilmemelidir,
- yeni output üretildi diye mutate edilmemelidir.

Yeni output yeni version oluşturur.

------

# 11. Historical Output Immutability

Bir output version publish edildikten sonra:

```text
immutable historical deliverable
```

olarak kabul edilmelidir.

Örneğin:

```text
versions/v1/
versions/v2/
```

varsa `v1` içeriği `v2` üretildi diye değiştirilmez.

Output history rewrite edilmez.

------

# 12. `latest/` Semantics

`latest/` historical source değildir.

`latest/`:

```text
current valid published output view
```

olarak davranmalıdır.

Historical source:

```text
versions/<output-version>/
```

altındadır.

------

# 13. `latest/` Nasıl Güncellenir?

Yeni valid version publish edildiğinde:

```text
versions/<new-version>/
```

oluşturulur.

Ardından:

```text
latest/
```

yeni valid version’ın temiz içeriğini temsil edecek şekilde güncellenir.

Pointer/symlink teknolojisine mecbur bırakma.

Repository/file-system bağımsız conceptual contract tanımla.

------

# 14. latest Is Not History

`latest/`:

- ayrı historical version sayılmaz,
- version lineage owner değildir,
- eski latest içeriği historical record olarak tutulmaz.

History:

```text
versions/
```

altında tutulur.

------

# 15. Completed Run Relationship

Output yalnız başarılı run’dan publish edilmelidir.

Completed run manifest:

```text
output_version
output_ref
```

alanlarıyla exact output version’ı referanslamalıdır.

Canonical output ref:

```text
outputs/<category>/<project-slug>/versions/<output-version>/
```

olmalıdır.

------

# 16. Failed Run Output Rule

Failed run:

```text
MUST NOT publish final output
```

Failed run:

- new version oluşturamaz,
- `latest/` değiştiremez,
- partial working docs’u output’a taşıyamaz.

Evidence `runs/failed/` altında kalır.

------

# 17. Cancelled Run Output Rule

Cancelled run:

```text
!= Failed
```

ancak output publication bakımından:

```text
MUST NOT publish final output
```

Cancelled run:

- new version oluşturamaz,
- `latest/` güncellemez.

------

# 18. Blocked / Paused Output Rule

Blocked veya Paused run final output publish edemez.

Working output active run içinde kalır.

Run yeniden devam edip validation/finalization gate’i geçerse output oluşturulabilir.

------

# 19. Invalidated Run Semantics

Approved Run Protocol:

```text
Completed → Invalidated
```

transition’ını destekler.

Invalidated run’ın historical output version’ı silinmemelidir.

Örneğin:

```text
outputs/products/example-project/versions/v2/
```

historical artefact olarak kalabilir.

Ancak:

```text
latest/
```

invalidated output version’a işaret etmemelidir.

------

# 20. Invalidation ≠ Delete

Invalidation:

```text
delete historical output
```

anlamına gelmez.

Historical output:

- auditability için korunur,
- version history içinde kalır.

Ancak current valid output olarak sunulmamalıdır.

------

# 21. latest After Invalidation

Bir latest output version invalidated olursa deterministic davranış tanımla.

Approved output/run contracts farklı bir yöntem belirlemiyorsa:

1. Invalidated version history’de kalır.
2. `latest/` invalidated content’i temsil etmeyi bırakır.
3. Daha eski hâlâ valid version varsa `latest/` ona dönebilir.
4. Hiç valid historical version yoksa `latest/` boş/current-unavailable state’i temsil etmelidir.

Yeni state-management sistemi kurma.

Bu davranışı README’de açıkça tanımla.

------

# 22. Output Version Source

Her published output version’ın hangi run’dan geldiği traceable olmalıdır.

Ancak run operational files output içine koyulmaz.

Traceability minimum olarak:

```text
run_id
output_version
project_slug
category
```

gibi metadata ile veya existing document metadata mechanism ile sağlanabilir.

Yeni özel internal manifest icat etmeden önce planning spec’i kontrol et.

------

# 23. Internal Metadata Leakage

Final project documents içine gereksiz Product Engine internal metadata sızmamalıdır.

Örneğin final deliverable içinde şunlar görünmemelidir:

```text
template_id
template_type
required_inputs
conditional_inputs
run stage debug data
internal validation notes
agent scratch notes
private rationale
```

Ancak final document contract tarafından gereken document metadata varsa korunabilir.

------

# 24. Run Artifact Leakage

Final output klasörüne şunları kopyalama:

```text
RUN_MANIFEST.md
INPUT_SNAPSHOT.md
PACKAGE_SELECTION.md
SOURCE_REGISTER.md
ASSUMPTIONS.md
CONFLICTS.md
RUN_LOG.md
PROGRESS.md
VALIDATION_REPORT.md
COMPLETION_REPORT.md
```

Bunlar `runs/` katmanına aittir.

------

# 25. Template Source Leakage

Final output içinde:

```text
templates/
```

source path’leri veya template instructions görünmemelidir.

Örneğin:

```text
Generated from templates/project/README_TEMPLATE.md
```

gibi internal implementation detail final deliverable’a sızmamalıdır.

------

# 26. Placeholder Cleanup

Final output içinde unresolved placeholder bulunmamalıdır.

Örnek yasaklar:

```text
{{PROJECT_NAME}}
{{PLACEHOLDER}}
{{TODO}}
<TBD>
```

Ancak document contract bilinçli şekilde unresolved/open item göstermeyi gerektiriyorsa bunu placeholder olarak değil açık semantic state olarak ifade et.

------

# 27. Local Path Safety

Final outputs hiçbir machine-specific local path taşımamalıdır.

Şunlar yasaktır:

```text
file:///
C:\Users\
/Users/name/
```

Repo/output-relative portable references kullan.

------

# 28. Secrets

Final outputs:

- password,
- API secret,
- auth token,
- private key,
- live credential

içermemelidir.

Secret variable name gerekliyse document contract kapsamında gösterilebilir:

```text
DATABASE_URL
API_KEY
```

ama gerçek değer gösterilemez.

------

# 29. Output Document Set

Versioned output klasörü yalnız selected/required/applicable final project documents’ı taşımalıdır.

Package/document applicability engine tarafından çözülür.

Outputs layer:

```text
DOCUMENT_CATALOG
PACKAGE_RULES
```

yerine kendi document selection logic’ini yazmamalıdır.

------

# 30. Conditional Documents

Conditional document applicable değilse final output’ta placeholder empty file bırakma.

Örneğin:

```text
DESIGN_RULES.md
```

seçilmemişse boş dosya oluşturma.

Final output yalnız gerçekten selected document setini taşımalıdır.

------

# 31. Output Filename

Final output filenames canonical Document Catalog / template output filename standardına uymalıdır.

Yeni alias isimleri üretme.

Örnek:

```text
PROJECT_BRAIN.md
README.md
DATA_MODEL.md
API_CONTRACTS.md
```

gibi exact canonical output naming korunmalıdır.

------

# 32. `.env.example`

Eğer selected document set `.env.example` üretmeyi gerektiriyorsa:

- sadece example variable names,
- placeholder/sample-safe values,
- real secrets yok.

`.env.example` output document olarak değerlendirilebilir ancak gerçek `.env` değildir.

------

# 33. README Output

Project-level generated `README.md` clean project document olmalıdır.

Product Engine operation instructions’ı README içine sızmamalıdır.

------

# 34. Folder Naming

Project slug canonical approved input slug’ıyla aynı olmalıdır.

Output layer farklı project slug oluşturamaz.

Örnek:

```text
inputs/approved/example-project/...
```

ise output:

```text
outputs/<category>/example-project/
```

olmalıdır.

------

# 35. Project Identity Stability

Approved input project slug değişmedikçe output project path değişmemelidir.

Slug migration outputs build sırasında tasarlama.

------

# 36. Category Migration

Bir projenin output category’si zamanla değişebilir mi sorusunu planning/engine/package contract’tan çöz.

Kendi başına:

```text
demos → products
```

otomatik migration kuralı icat etme.

Eğer farklı run farklı resolved category üretirse her category kendi history’sini koruyabilir.

README’de bunun authority’sini package/run selection katmanına bırak.

------

# 37. Atomic Publication

Final output version tamamen hazır olmadan partially published version oluşmamalıdır.

Conceptual rule:

```text
assemble
validate finalization prerequisites
publish complete version
update latest
```

Karmaşık filesystem transaction implementation tasarlama.

------

# 38. latest Update Order

Sağlam publication order:

```text
1. versioned output complete
2. output integrity confirmed
3. latest updated
4. run manifest output_ref finalized
5. run completion closure
```

Approved pipeline farklı exact order belirtiyorsa onu uygula.

Ama `latest/` hiçbir zaman yarım version’a işaret etmemelidir.

------

# 39. Partial Publish Failure

Version publication sırasında hata oluşursa:

- yarım output `latest/` yapılamaz,
- run Completed yapılamaz,
- incomplete publish clean final output olarak kabul edilemez.

Bu durum engine/run failure semantics’e göre ele alınmalıdır.

Outputs layer yeni failure state icat etmez.

------

# 40. Duplicate Output Version

Aynı project/category altında aynı output version ikinci kez overwrite edilmemelidir.

Örneğin:

```text
versions/v3/
```

zaten varsa yeni run aynı version’a overwrite etmemelidir.

Yeni valid version allocate edilmelidir.

Version assignment authority approved contracts’a bağlıdır.

------

# 41. Same Run Double Publish

Aynı run yanlışlıkla iki farklı final version publish etmemelidir.

Normal contract:

```text
one completed run
→ one canonical output_version
→ one output_ref
```

Retry/repair working-output seviyesinde kalmalıdır.

------

# 42. Output Traceability

Historical version ile run ilişkisi geriye dönük bulunabilir olmalıdır.

Minimum traceability:

```text
run_id → output_ref
output_ref → version path
```

Output içerisine bütün run records’u gömme.

------

# 43. Human Usability

Output structure insan tarafından açıldığında anlaşılır olmalıdır.

Kullanıcı:

```text
latest/
```

açıp mevcut geçerli project docs’u görebilmelidir.

`versions/` açıp geçmiş valid/invalidated versions’ı inceleyebilmelidir.

Gereksiz internal complexity ekleme.

------

# 44. Outputs README

`outputs/README.md` bu katmanın authoritative kullanım rehberi olmalıdır.

Minimum olarak şunları açıkla:

- outputs amacı
- demos/products ayrımı
- project path
- versions/latest ayrımı
- publication gate
- working-output/final-output boundary
- version immutability
- latest semantics
- Failed/Cancelled publish yasağı
- Invalidated behavior
- traceability
- document cleanliness
- operational artefact leakage yasağı
- secret/local path safety
- atomic publication
- no overwrite rule

------

# 45. demos/ README

`outputs/demos/README.md` oluşturabilirsin.

Kısa şekilde:

- demo-category outputs burada
- version/latest standardı ana README ile aynıdır
- category selection burada yapılmaz
- yalnız validated final deliverable tutulur

açıklanabilir.

------

# 46. products/ README

`outputs/products/README.md` oluşturabilirsin.

Kısa şekilde:

- product-category outputs burada
- version/latest standardı ana README ile aynıdır
- category selection burada yapılmaz
- production-ready anlamına gelmek zorunda değildir
- delivery profile ile category’yi eşitleme

------

# 47. Category ≠ Delivery Profile

Çok önemli:

```text
products
```

category’si:

```text
Production Ready
```

ile aynı kavram değildir.

Aynı şekilde:

```text
demos
```

category’si yalnız:

```text
Prototype
```

profile anlamına gelmez.

Category resolution package/output semantics’e aittir.

Delivery Profile ayrı dimension’dır.

------

# 48. No Real Project Output

Build sırasında gerçek project output oluşturma.

Örneğin şunları oluşturma:

```text
outputs/products/<real-project>/
outputs/demos/<real-company>/
```

Sadece reusable README/infrastructure oluştur.

------

# 49. No Example Version Folder Required

Gerçek example version klasörü oluşturmak zorunda değilsin.

Şunu fiziksel olarak üretme:

```text
outputs/demos/example-project/versions/v1/
```

README içindeki örnek yeterlidir.

------

# 50. No Duplicate Template System

Outputs folder altında:

```text
templates/
schemas/
blueprints/
```

oluşturma.

Final output structure template responsibility’sini çalmamalıdır.

------

# 51. Output Metadata File

Yeni:

```text
OUTPUT_MANIFEST.md
VERSION_MANIFEST.md
OUTPUT_METADATA.json
```

gibi belge oluşturma zorunluluğu yoktur.

Planning/engine spec açıkça gerektirmiyorsa yeni metadata document icat etme.

Traceability existing Run Manifest/output_ref sistemiyle sağlanmalıdır.

------

# 52. Version Validity

Historical versions fiziksel olarak tutulabilir ancak “current valid” olmak zorunda değildir.

Örneğin:

```text
v1 valid
v2 invalidated
v3 valid
```

olabilir.

`latest/` yalnız current valid version’ı temsil etmelidir.

------

# 53. No Automatic Delete

Yeni version geldiğinde eski version silinmez.

Invalidated version da silinmez.

Outputs history auditability için korunur.

------

# 54. Manual Edits

Published historical output version üzerinde manuel edit yapılmamalıdır.

Bir değişiklik gerekiyorsa:

```text
new approved input / same input as appropriate
→ new run
→ new output version
```

akışı tercih edilmelidir.

Historical deliverable rewrite edilmez.

------

# 55. User Corrections

User final output üzerinde project truth’u etkileyen düzeltme isterse:

Outputs layer dosyayı doğrudan “source truth” gibi değiştirip bırakmamalıdır.

Truth değişikliği:

```text
inputs revision
→ new approved version
→ new run
→ new output version
```

gerektirebilir.

Sadece typo/presentation-only düzeltmeler için engine contract ne diyorsa onu uygula; burada yeni exception sistemi tasarlama.

------

# 56. Output Validation vs Run Validation

Final publication öncesi validation run layer’da tamamlanır.

Outputs layer yeni ikinci validation engine oluşturmaz.

Ancak publication sırasında:

```text
integrity / cleanliness
```

kontrolleri yapılabilir:

- required files exist
- no unresolved placeholders
- no run artifacts
- no local paths
- no secret leakage
- version destination available

Bunu full Validation Rules replacement haline getirme.

------

# 57. Cleanup Boundary

Working-output içindeki:

- debug notes,
- temporary files,
- drafts,
- alternate attempts

final version’a taşınmamalıdır.

Sadece selected clean final documents publish edilmelidir.

------

# 58. Internal Comments

Template instruction comments veya internal generation directives final documents’ta kalmamalıdır.

Örneğin:

```text
[CONDITIONAL: include only if ...]
OUTPUT DOCUMENT START
OUTPUT DOCUMENT END
```

gibi template-control syntax final output’a sızmamalıdır.

------

# 59. Validation Result

Output publication yalnız:

```text
PASS
```

veya kullanıcı/engine tarafından kabul edilmiş:

```text
CONDITIONAL PASS
```

ile yapılabilir.

Raw:

```text
FAIL
```

ile output publish edilemez.

------

# 60. CONDITIONAL PASS

`CONDITIONAL PASS` output publish edilecekse accepted conditions traceability run records’da tutulmalıdır.

Final deliverable içine internal approval process’i dump etme.

------

# 61. Output Reference Portability

`output_ref` repo-relative path olmalıdır.

Örnek:

```text
outputs/products/example-project/versions/v3/
```

Şunları kullanma:

```text
file:///...
C:\...
absolute OS paths
```

------

# 62. Output Category Folder README Leakage

`outputs/demos/README.md` ve `outputs/products/README.md` runtime project output değildir.

Project output generation sırasında category-level README’ler version klasörüne kopyalanmamalıdır.

------

# 63. Output Project README vs Category README

Şu iki şeyi ayır:

```text
outputs/products/README.md
→ outputs category operational guidance
outputs/products/example-project/versions/vN/README.md
→ generated project deliverable
```

Bunlar aynı belge değildir.

------

# 64. Latest Content Cleanliness

`latest/` yalnız current project deliverables göstermelidir.

Şunları içermez:

```text
README category guidance
run records
validation reports
internal manifests
template source files
```

------

# 65. Version Directory Cleanliness

`versions/<output-version>/` da aynı cleanliness standardına uymalıdır.

Historical olması internal debug artefact’lara izin vermez.

------

# 66. Scope Discipline

Bu görev sırasında yalnızca:

```text
outputs/
```

altında çalış.

Değiştirme:

- `engine/`
- `packages/`
- `templates/`
- `inputs/`
- `runs/`
- `planning/`
- `logs/`
- `examples/`
- `archive/`
- root README
- Product Engine Brain

Kök task prompt dosyasının committe bulunması normal çalışma artefact’ıdır.

------

# 67. Expected Physical Result

Minimum beklenen build:

```text
outputs/
├── README.md
├── demos/
│   └── README.md
└── products/
    └── README.md
```

Gerçek project output oluşturma.

Gerçek version folder oluşturma.

------

# 68. Final Audit

Build tamamlandıktan sonra tüm `outputs/` klasörünü çapraz kontrol et.

Şunları tek tek doğrula:

1. Canonical top-level categories yalnız demos/products mı?
2. Yeni category icat edilmiş mi? Edilmemeli.
3. Project structure latest/ + versions/ olarak tanımlı mı?
4. Working-output ile final output ayrımı açık mı?
5. Validation öncesi publish mümkün mü? Olmamalı.
6. FAIL sonucu publish mümkün mü? Olmamalı.
7. Failed run publish yapabiliyor mu? Yapamamalı.
8. Cancelled run publish yapabiliyor mu? Yapamamalı.
9. Blocked/Paused run publish yapabiliyor mu? Yapamamalı.
10. Historical versions immutable mı?
11. Aynı output version overwrite edilebiliyor mu? Edilmemeli.
12. latest historical source gibi kullanılıyor mu? Kullanılmamalı.
13. latest yalnız current valid output’u mu temsil ediyor?
14. Invalidated historical version korunuyor mu?
15. latest invalidated output’a işaret edebiliyor mu? Edememeli.
16. Valid prior version fallback semantics açık mı?
17. Run artefacts output’a sızabiliyor mu? Sızmamalı.
18. Template instructions output’a sızabiliyor mu? Sızmamalı.
19. Unresolved placeholders final output’ta kalabiliyor mu? Kalmamalı.
20. Document selection outputs layer’a taşınmış mı? Taşınmamalı.
21. Package selection outputs layer’a taşınmış mı? Taşınmamalı.
22. Category ile Delivery Profile karıştırılmış mı? Karıştırılmamalı.
23. Project slug inputs contract’ıyla uyumlu mu?
24. Output filenames canonical template/Catalog names’e uyuyor mu?
25. Secret/credential leakage engelleniyor mu?
26. Local machine path engelleniyor mu?
27. output_ref repo-relative mı?
28. Same run double-publish engelleniyor mu?
29. Publication order latest’i yarım output’a yönlendirebiliyor mu? Yönlendirmemeli.
30. Real project/company output oluşturulmuş mu? Oluşturulmamalı.
31. Duplicate template/manifest system oluşturulmuş mu? Oluşturulmamalı.
32. Yalnızca `outputs/` değiştirilmiş mi?

------

# 69. Çalışma Sonu Raporu

Kısa ama somut rapor ver.

## Oluşturulan Outputs Yapısı

Fiziksel `outputs/` ağacını göster.

## Output Categories

Şunları açıkla:

```text
demos
products
```

ve category ≠ delivery profile ayrımını doğrula.

## Publication Gate

Final output’un hangi şartlarda publish edildiğini açıkla.

## Versioning

Şunları açıkla:

```text
versions/<output-version>/
latest/
```

ve historical immutability davranışını belirt.

## Run Relationship

Şunları doğrula:

```text
run_id
output_version
output_ref
```

traceability’si korunuyor.

## Failed / Cancelled

Bu run’ların publish yapamadığını doğrula.

## Invalidation

Historical version’ın korunduğunu ve latest’in invalidated output’u temsil edemediğini açıkla.

## Cleanliness

Şunların final output’a sızmadığını doğrula:

- run artefacts
- template instructions
- unresolved placeholders
- internal metadata
- secrets
- local paths

## Scope

Yalnızca `outputs/` altında değişiklik yapıldığını doğrula.

## Açık Noktalar

Yalnız gerçekten `logs/`, `examples/`, `archive/` veya final integration aşamasına bırakılması gereken noktaları yaz.

## Sonuç

Şunlardan biriyle bitir:

```text
OUTPUTS_BUILD_COMPLETE
```

veya:

```text
OUTPUTS_BUILD_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.