~~~md
# PROMPT_20_ARCHIVE_BUILD

Product Engine’in `archive/` build aşamasıdır.

`engine/`, `packages/`, `templates/`, `inputs/`, `runs/`, `outputs/`, `logs/` ve `examples/` Approved ve Closed durumdadır.

Bu görevde yalnızca `archive/` klasörünü Product Engine’in tarihsel saklama ve aktif sistemden izolasyon katmanı olarak inşa et.

Amaç eski her şeyi kopyalamak değildir.

Archive yalnızca:

- artık aktif kullanılmayan,
- ancak tarihsel / teknik / audit değeri taşıyan,
- eski referansları koruması gereken

içerikler için kullanılmalıdır.

Archive bir backup değildir.

Archive bir trash folder değildir.

Archive güncel Product Engine truth değildir.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/ARCHIVE_FOLDER_SPEC.md`
3. `engine/README.md`
4. `templates/README.md`
5. `packages/README.md`
6. `runs/README.md`
7. `outputs/README.md`
8. `logs/README.md`
9. `logs/ENGINE_CHANGELOG.md`
10. `examples/README.md`

Son olarak mevcut:

11. `archive/README.md`

ve `archive/` altındaki mevcut fiziksel yapıyı incele.

Approved runtime contracts planning önerilerine göre daha yüksek otoritededir.

Planning içinde eski runtime davranışlarıyla çelişen öneri varsa güncel Approved contract’ları koru.

---

# 2. Archive Katmanının Rolü

Canonical ayrım:

```text
active folders
→ current authoritative/runtime system

archive/
→ inactive historical material kept for traceability
~~~

Archive:

```text
inactive content
+
historical context
+
reference preservation
+
active-system isolation
```

olmalıdır.

------

# 3. Archive Authoritative Değildir

Archive içeriği:

- aktif engine rule değildir,
- aktif template değildir,
- aktif package değildir,
- current input truth değildir,
- active run source değildir,
- current final output değildir,
- active example değildir.

Bir archived belge yalnız tarihsel/migration/audit ihtiyacında okunabilir.

------

# 4. Canonical V0 Structure

V0 başlangıç yapısı:

```text
archive/
├── README.md
├── deprecated-engine-docs/
├── deprecated-templates/
└── old-runs/
```

Bu build sırasında yalnız bu canonical top-level yapıyı oluştur.

Şimdilik oluşturma:

```text
deprecated-packages/
deprecated-examples/
superseded-outputs/
old-planning-specs/
removed-structures/
ARCHIVE_INDEX.md
```

Bunlar gelecekte gerçek ihtiyaç oluşursa değerlendirilebilir.

------

# 5. Empty Archive Is Valid

Bu build sırasında gerçek archived content bulunmak zorunda değildir.

Eğer doğrulanmış deprecated/superseded/historical içerik yoksa:

```text
archive/
├── README.md
├── deprecated-engine-docs/
│   └── README.md
├── deprecated-templates/
│   └── README.md
└── old-runs/
    └── README.md
```

gibi boş ama contract-aware yapı kabul edilir.

Fake archive record üretme.

------

# 6. Do Not Archive Current Active Files

Bu build sırasında mevcut aktif:

```text
engine/
packages/
templates/
inputs/
runs/
outputs/
logs/
examples/
```

dosyalarını archive’a kopyalama veya taşıma.

Sadece archive sistemi kuruluyor.

------

# 7. README Responsibility

`archive/README.md` şu sorunun authoritative usage guide’ı olmalıdır:

```text
Archive sistemi ne zaman ve nasıl kullanılır?
```

Minimum olarak açıklamalıdır:

- archive amacı
- archive ≠ backup
- archive ≠ trash
- active vs archived boundary
- canonical V0 structure
- archive criteria
- delete criteria
- metadata rules
- isolation rules
- reference preservation
- replacement links
- restore behavior
- retention / cleanup
- security
- private CoT ban
- no silent archive
- no silent delete

------

# 8. Archive vs Delete

Archive için en az bir tarihsel değer gerekçesi bulunmalıdır:

```text
old run references it
historical decision value
migration value
audit value
replacement history
legacy compatibility
```

Permanent delete ise ancak içerik:

```text
accidental
empty
exact duplicate
unreferenced
historically worthless
prohibited sensitive material
```

gibi durumda değerlendirilebilir.

Şüpheli içerik sessizce silinmez.

------

# 9. Archive Reasons

Canonical archive reasons:

```text
Deprecated
Superseded
Invalidated
Historical
Replaced
Legacy
```

Bu değerler run lifecycle status değildir.

------

# 10. Metadata Method

V0 canonical archive metadata yöntemi:

```text
YAML frontmatter
```

olmalıdır.

Markdown archived content kendi dosyasının başında metadata taşır.

Ayrı:

```text
ARCHIVE_METADATA.md
```

oluşturma.

------

# 11. Required Archive Metadata

Her archived Markdown content minimum şu alanları taşımalıdır:

```yaml
---
archive_id: ARC-...
status: ...
archive_reason: ...
archived_at: ...
replacement: ...
---
```

Planning spec’in istediği minimum alanları koru.

------

# 12. Recommended Metadata

Uygun olduğu durumda:

```yaml
---
archive_id: ARC-TEMPLATE-001
content_type: template
original_path: templates/ai/PROJECT_BRAIN_TEMPLATE.md
archived_path: archive/deprecated-templates/...
original_version: not_assigned
status: deprecated
archive_reason: ...
archived_at: 2026-01-01
archived_by: operator
replacement: templates/ai/PROJECT_BRAIN_TEMPLATE.md
related_runs: []
related_outputs: []
notes: ""
---
```

kullanılabilir.

Ancak bu build sırasında fake entry oluşturma.

------

# 13. Archive ID

Stable archive ID formatı kullanılmalıdır.

Controlled examples:

```text
ARC-ENGINE-001
ARC-TEMPLATE-001
ARC-RUN-001
```

Yeni content type gerekirse açık ve kısa prefix kullanılabilir.

ID oluşturulduktan sonra değiştirilmez.

------

# 14. Status vs Archive Reason

Şunları karıştırma:

```text
status
→ archived content current archival state

archive_reason
→ neden archive’a alındı
```

Örnek:

```yaml
status: deprecated
archive_reason: Active template replaced by newer contract.
```

------

# 15. `deprecated-engine-docs/`

Bu klasör artık authoritative olmayan eski engine belgeleri içindir.

README açıklamalıdır:

- hangi içerik buraya girer,
- archived engine docs active read order’a dahil değildir,
- replacement açıkça belirtilir,
- eski adı mümkün olduğunca korunur,
- tarihsel referanslar korunur.

Bu build sırasında gerçek active engine doc taşıma.

------

# 16. Deprecated Engine Docs Isolation

Archived engine doc:

```text
MUST NOT
```

- engine read order’a eklenmemeli,
- agent tarafından current rule olarak kullanılmamalı,
- package/template selection authority sayılmamalıdır.

------

# 17. `deprecated-templates/`

Bu klasör artık aktif generation’da seçilmeyen eski template’ler içindir.

README açıklamalıdır:

- deprecated template selection dışıdır,
- old run compatibility için korunabilir,
- replacement link gerekir,
- original version korunmalıdır,
- active package’lar archive template seçemez.

------

# 18. Deprecated Template Structure

Bu build sırasında iç yapı zorla oluşturma.

Şimdilik:

```text
archive/deprecated-templates/README.md
```

yeterlidir.

Gerçek template archive edildiğinde version/category subfolders gerektiği kadar oluşturulabilir.

Premature:

```text
ai/
project/
design/
waves/
prompts/
v0.1/
```

oluşturma.

------

# 19. `old-runs/`

Bu klasör aktif `runs/completed/` veya `runs/failed/` alanında tutulmasına gerek kalmayan tarihsel run’lar içindir.

README açıklamalıdır:

- archive move run status’u değiştirmez,
- Run ID değişmez,
- RUN_MANIFEST korunur,
- output reference korunur,
- RUN_INDEX reference güncellenmelidir,
- archive move ≠ Invalidated.

------

# 20. Current Runs Contract Takes Precedence

Important:

Current approved `runs/` contract V0’da:

```text
runs/active/
runs/completed/
runs/failed/
```

authoritative operational locations’dır.

Archive build sırasında mevcut completed/failed run’ları taşımaya başlama.

`old-runs/` yalnız gelecekte açık archival decision verilirse kullanılır.

------

# 21. Output Contract Compatibility

Planning archive spec eski outputs davranışları için:

```text
superseded output archive
invalidated output archive
```

gibi fikirler içerebilir.

Ancak Approved V0 output contract’ında:

```text
outputs/<category>/<project>/versions/
```

historical version authority’dir.

Invalidated historical output fiziksel olarak korunabilir ve `latest/` tarafından seçilmez.

Bu nedenle V0 archive build sırasında output versions’ı archive’a taşıma.

------

# 22. No `superseded-outputs/` in V0

Approved output contract varken:

```text
archive/superseded-outputs/
```

oluşturma.

Historical outputs şu anda kendi:

```text
outputs/.../versions/
```

yapısında kalmalıdır.

Archive README bunu açıkça belirtmelidir.

------

# 23. No Duplicate Historical Output

Aynı output:

```text
outputs/.../versions/
+
archive/
```

içinde duplicate full copy olarak tutulmamalıdır.

Single authoritative physical location korunmalıdır.

------

# 24. Examples Compatibility

Deprecated example gelecekte archive edilebilir.

Ancak V0’da:

```text
examples/
```

kendi `deprecated` / `invalid` scenario semantics’ine sahiptir.

Şu an aktif example fixture’larını archive’a taşıma.

------

# 25. Logs Compatibility

Archive:

```text
logs/ENGINE_CHANGELOG.md
```

yerine geçmez.

Engine change history logs’ta kalır.

Archive yalnız archived content’in fiziksel historical copy’sini taşır.

------

# 26. Archive and Changelog

Significant archival event:

```text
engine/template behavior changed
+
old material archived
```

ise changelog entry gerekebilir.

Ama archive build commitinin kendisi otomatik changelog entry değildir.

Bu görev sırasında `logs/` değiştirme.

------

# 27. Reference Integrity

İçerik archive edilmeden önce references kontrol edilmelidir:

```text
RUN_MANIFEST
SOURCE_REGISTER
outputs
ENGINE_CHANGELOG
ISSUES
IMPROVEMENTS
examples
planning
package dependencies
template dependencies
```

Arşivleme broken reference üretmemelidir.

------

# 28. Redirect Files

Eski path’e çok sayıda historical reference varsa kısa redirect/tombstone file bırakılabilir.

Ama:

```text
every archive move
→ redirect file
```

zorunlu değildir.

Gereksiz wrapper file üretme.

------

# 29. Archive Move Procedure

Gelecekte bir content archive edilirken canonical process:

```text
1. dependency/reference check
2. archive reason
3. replacement resolution
4. archive destination
5. metadata
6. move
7. references update
8. changelog if needed
9. index updates if applicable
10. active read path removal
11. reference validation
```

Bu sequence README’de tanımlanmalıdır.

------

# 30. No Silent Removal

Active content archive’a taşınmadan önce:

- replacement varsa doğrulanmalı,
- active consumers kontrol edilmeli,
- references incelenmeli.

Agent kendi kararıyla sessizce active contract archive edemez.

------

# 31. Restore Semantics

Archived content doğrudan active path’e kopyalanıp current truth yapılamaz.

Restore flow:

```text
reason
→ current contract compatibility
→ new active version if required
→ validation
→ changelog
→ dependency update
```

şeklinde olmalıdır.

Archive restore:

```text
old file becomes current again
```

anlamına gelmez.

------

# 32. Archive Versioning

Archived content original version bilgisini korumalıdır.

Ama mevcut engine version authority `not_assigned` ise fake version üretme.

Şunları uydurma:

```text
v0.1 engine
v1 archive
```

Eğer original version bilinmiyorsa nötr value kullan.

------

# 33. ARCHIVE_INDEX

V0’da:

```text
archive/ARCHIVE_INDEX.md
```

oluşturma.

Gerçek archive kayıt sayısı büyür ve navigation ihtiyacı ortaya çıkarsa gelecekte eklenebilir.

------

# 34. Archive Security

Archive hiçbir zaman:

```text
API keys
passwords
private keys
production tokens
database passwords
real user data
deleted personal data
private chain-of-thought
```

saklamamalıdır.

Historical value security prohibition’ı override etmez.

------

# 35. Secret Handling

Archive edilecek content secret içeriyorsa:

```text
archive
```

etmek yerine security policy’ye göre remove/redact/delete değerlendirilmelidir.

Secret’ın kendisini historical context diye saklama.

------

# 36. Privacy

Gerçek müşteri veya kullanıcı verileri archive içinde sırf “history” diye tutulmamalıdır.

Retention gerekçesi açık ve geçerli olmalıdır.

------

# 37. Private CoT

Archive private chain-of-thought deposu değildir.

Saklanabilecek:

```text
decision
reason
result
historical context
replacement info
audit-safe evidence
```

Saklanamayacak:

```text
hidden reasoning
scratchpad
private chain-of-thought
```

------

# 38. Archive ≠ Backup

README açıkça belirtmelidir:

```text
Archive
→ selected inactive historical content

Backup
→ disaster/data-loss recovery
```

Archive repository backup yerine geçmez.

------

# 39. Archive ≠ Git History

Git history eski file revisions gösterebilir.

Archive ise yalnız şu durumlarda değer katar:

```text
historical status
replacement
legacy dependency
audit/migration context
```

Her typo veya wording change için archive copy üretme.

------

# 40. Minimum Retention

Archive sınırsız büyüyen bir klasör olmamalıdır.

Regular cleanup criteria:

```text
duplicate copy?
missing metadata?
broken replacement?
no historical value?
sensitive data?
still selected by active package?
broken old-run references?
```

README içinde tanımlanmalıdır.

------

# 41. Permanent Delete Gate

Archive content permanent delete edilmeden önce:

```text
references checked
historical value checked
replacement checked
audit value checked
deletion reason known
restore need absent
```

olmalıdır.

Security-prohibited material için direct deletion/redaction öncelikli olabilir.

------

# 42. Category README Requirements

Her canonical child folder:

```text
deprecated-engine-docs/
deprecated-templates/
old-runs/
```

kendi kısa README’sini taşımalıdır.

README’ler:

- category purpose
- entry criteria
- exclusion criteria
- metadata requirement
- active-system isolation
- replacement/reference behavior

açıklamalıdır.

------

# 43. No Fake Archive Records

Bu build sırasında:

```text
ARC-ENGINE-001
ARC-TEMPLATE-001
ARC-RUN-001
```

gibi gerçek kayıt oluşturma.

Bunları yalnız format example olarak code block içinde kullanabilirsin.

Fake archived document, fake old run veya fake deprecated template üretme.

------

# 44. No Existing Active File Copy

Özellikle şunları archive’a kopyalama:

```text
engine/README.md
templates/ai/PROJECT_BRAIN_TEMPLATE.md
examples/... fixtures
PROMPT_XX files
planning specs
current run READMEs
```

------

# 45. Prompt Files

Root:

```text
PROMPT_XX_*.md
```

build orchestration artefact’larıdır.

Sırf eski prompt oldukları için archive’a taşıma.

Final cleanup turunda bunların nasıl ele alınacağı ayrıca değerlendirilir.

------

# 46. Current Archive Initial State

Bu build sonunda fiziksel yapı minimum:

```text
archive/
├── README.md
├── deprecated-engine-docs/
│   └── README.md
├── deprecated-templates/
│   └── README.md
└── old-runs/
    └── README.md
```

olmalıdır.

Başka archive category oluşturma.

------

# 47. Scope Discipline

Bu görev sırasında yalnız:

```text
archive/
```

altında çalış.

Şunlara dokunma:

- `engine/`
- `packages/`
- `templates/`
- `inputs/`
- `runs/`
- `outputs/`
- `logs/`
- `examples/`
- `planning/`
- `ref/`
- root README
- Product Engine Brain

Kök `PROMPT_20_ARCHIVE_BUILD.md` task artefact’ının committe bulunması normaldir.

------

# 48. Final Audit

Build bittikten sonra kontrol et:

1. `archive/README.md` var mı?
2. `deprecated-engine-docs/README.md` var mı?
3. `deprecated-templates/README.md` var mı?
4. `old-runs/README.md` var mı?
5. Ekstra V0 category oluşturuldu mu? Oluşturulmamalı.
6. Archive non-authoritative mı?
7. Archive ≠ trash açık mı?
8. Archive ≠ backup açık mı?
9. Archive ≠ Git history ayrımı açık mı?
10. Archive criteria tanımlı mı?
11. Delete criteria tanımlı mı?
12. YAML frontmatter canonical metadata yöntemi mi?
13. Required metadata fields açık mı?
14. Fake archive records oluşturuldu mu? Oluşturulmamalı.
15. Active engine docs archive’a taşındı mı? Taşınmamalı.
16. Active templates archive’a taşındı mı? Taşınmamalı.
17. Existing runs archive’a taşındı mı? Taşınmamalı.
18. Outputs archive’a taşındı mı? Taşınmamalı.
19. `superseded-outputs/` oluşturuldu mu? Oluşturulmamalı.
20. `ARCHIVE_INDEX.md` oluşturuldu mu? Oluşturulmamalı.
21. Archive read-path isolation açık mı?
22. Restore semantics güvenli mi?
23. Reference integrity procedure var mı?
24. No silent archive/delete kuralı var mı?
25. Security / privacy kuralları var mı?
26. Private CoT ban var mı?
27. Model lock-in oluşmuş mu? Oluşmamalı.
28. Prompt files archive’a taşınmış mı? Taşınmamalı.
29. Category README’leri meaningful mı?
30. Yalnız `archive/` değiştirildi mi?

------

# 49. Çalışma Sonu Raporu

## Oluşturulan Archive Yapısı

Fiziksel tree’yi göster.

## Core Boundary

Şunu doğrula:

```text
active system
→ current authority/runtime

archive
→ inactive historical material
```

## Categories

Şunları kısa açıkla:

```text
deprecated-engine-docs
deprecated-templates
old-runs
```

## Metadata

YAML frontmatter yöntemini ve minimum fields’i doğrula.

## Historical Safety

Şunları doğrula:

- no fake archive records
- no active content moved
- no duplicate outputs
- no prompt archive
- no ARCHIVE_INDEX in V0

## Isolation

Archived content’in:

- default read order’a girmediğini,
- package selection’da kullanılmadığını,
- active generation source olmadığını

doğrula.

## Security

Şunları doğrula:

- no secrets
- no real user data
- no private CoT
- no local sensitive paths

## Scope

Yalnız `archive/` değiştirildiğini doğrula.

## Sonuç

Şunlardan biriyle bitir:

```text
ARCHIVE_BUILD_COMPLETE
```

veya:

```text
ARCHIVE_BUILD_BLOCKED
```

Blocked ise yalnız gerçek engeli açıkla.