~~~md
# PROMPT_21_ARCHIVE_FINAL_FIX

Product Engine `archive/` klasörü için final consistency fix turudur.

`engine/`, `packages/`, `templates/`, `inputs/`, `runs/`, `outputs/`, `logs/` ve `examples/` Approved ve Closed durumdadır.

`archive/` ana build tamamlanmıştır.

Bu görevde yalnızca aşağıdaki contract drift düzeltilecektir:

```text
Archived run directory
→ historical runtime evidence remains immutable

Archive metadata
→ must be stored by archive-owned metadata record

Therefore:

archive move
MUST NOT
modify canonical run evidence merely to inject archive metadata
~~~

Amaç archive mimarisini yeniden tasarlamak değildir.

Yalnızca immutable run evidence ile archive metadata ownership sınırını düzelt.

------

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `runs/README.md`
3. `engine/RUN_PROTOCOL.md`
4. `logs/RUN_INDEX.md`
5. `planning/ARCHIVE_FOLDER_SPEC.md`
6. `archive/README.md`
7. `archive/old-runs/README.md`
8. `archive/deprecated-engine-docs/README.md`
9. `archive/deprecated-templates/README.md`

Approved runtime contracts authoritative kaynaktır.

Planning önerisi immutable runtime evidence ile çelişirse Approved run contract korunmalıdır.

------

# 2. Core Rule

Şu ayrım authoritative olmalıdır:

```text
Archived ordinary Markdown content
→ archive metadata may live in the archived document frontmatter

Archived runtime run directory
→ canonical run evidence remains unchanged
→ archive metadata lives in archive-owned sidecar record
```

------

# 3. Immutable Runtime Evidence

Bir run terminal state’e ulaştıktan sonra historical evidence olarak korunmalıdır.

Özellikle şu dosyalar archive move nedeniyle yeniden yazılmamalıdır:

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

Archive move yeni runtime event üretmek için bu evidence içeriğini mutate etmemelidir.

------

# 4. RUN_MANIFEST Immutability

Şu davranış yanlıştır:

```text
archive move
→ open RUN_MANIFEST.md
→ inject archive YAML frontmatter
→ save modified manifest
```

Bunu yasakla.

`RUN_MANIFEST.md`:

- Run ID
- lifecycle status
- selected package
- validation result
- output reference
- run evidence

için runtime authority olmaya devam eder.

Archive metadata owner değildir.

------

# 5. Archive-Owned Sidecar Record

Archived run metadata ayrı archive-owned dosyada tutulmalıdır.

Canonical V0 approach:

```text
archive/old-runs/<run-id>/
├── ARCHIVE_RECORD.md
├── RUN_MANIFEST.md
├── INPUT_SNAPSHOT.md
├── PACKAGE_SELECTION.md
├── SOURCE_REGISTER.md
├── ASSUMPTIONS.md
├── CONFLICTS.md
├── DECISIONS.md
├── RUN_LOG.md
├── PROGRESS.md
├── VALIDATION_REPORT.md
├── COMPLETION_REPORT.md
└── working-output/
```

Buradaki tek archive-specific metadata owner:

```text
ARCHIVE_RECORD.md
```

olmalıdır.

------

# 6. ARCHIVE_RECORD Ownership

`ARCHIVE_RECORD.md` yalnız şu soruların sahibidir:

- Bu run ne zaman archive edildi?
- Neden archive edildi?
- Original path neydi?
- Archived path nedir?
- Archive ID nedir?
- Related outputs nelerdir?
- Replacement / historical relation var mı?
- Kim archive kararını uyguladı?

Run’ın kendi runtime state’ini yeniden tanımlamaz.

------

# 7. ARCHIVE_RECORD Metadata

Archived run için örnek sidecar formatı:

```yaml
---
archive_id: ARC-RUN-001
content_type: run
run_id: RUN-20260801-001
original_path: runs/completed/RUN-20260801-001/
archived_path: archive/old-runs/RUN-20260801-001/
archive_status: historical
archive_reason: Historical retention after operational review period.
archived_at: 2026-08-10
archived_by: operator
replacement: not_applicable
related_outputs:
  - outputs/products/example-project/versions/v1.0/
notes: ""
---
```

Bu yalnız format örneğidir.

Fake archive record oluşturma.

------

# 8. `status` Collision Avoidance

Archive sidecar metadata içinde run lifecycle `status` ile archive metadata status’u karışmamalıdır.

Tercihen:

```text
archive_status
```

kullan.

Çünkü:

```text
RUN_MANIFEST.status
→ runtime lifecycle status

ARCHIVE_RECORD.archive_status
→ archival classification/state
```

farklı kavramlardır.

------

# 9. Run Lifecycle Status Must Not Change

Archive’a taşımak:

```text
Completed
Failed
Cancelled
Invalidated
```

durumlarından hiçbirini başka lifecycle state’e çevirmemelidir.

Örnek:

```text
Completed
→ archive move
→ still Completed
```

------

# 10. Archive Move ≠ Invalidated

Şu kural açık olmalıdır:

```text
archive move
!=
run invalidation
```

`Invalidated` yalnız runtime/business validity kararıdır.

Historical storage move değildir.

------

# 11. RUN_LOG Must Not Be Appended Merely for Archive Move

Bir run archive edilirken sırf fiziksel taşıma gerçekleşti diye historical `RUN_LOG.md` içine yeni event ekleme.

Archive operation evidence gerekiyorsa:

```text
ARCHIVE_RECORD.md
logs/ENGINE_CHANGELOG.md if truly warranted
logs/RUN_INDEX.md path/reference update if applicable
```

katmanlarında tutulmalıdır.

Historical run log değişmeden kalır.

------

# 12. INPUT_SNAPSHOT Must Remain Immutable

`INPUT_SNAPSHOT.md` zaten run initialization anındaki approved truth snapshot’ıdır.

Archive move:

```text
MUST NOT
```

- metadata inject etmemeli,
- archive date eklememeli,
- source path rewrite etmemeli,
- current archive location bilgisini içine yazmamalıdır.

------

# 13. Validation / Completion Evidence

Şunlar da archive move nedeniyle değiştirilmemelidir:

```text
VALIDATION_REPORT.md
COMPLETION_REPORT.md
```

Çünkü bunlar run’ın execution-time evidence’ıdır.

Archive storage fact onların execution result’ı değildir.

------

# 14. Working Output

Archived run içindeki `working-output/` historical evidence olarak gerekiyorsa olduğu gibi korunabilir.

Archive-specific marker dosyalarını `working-output/` içine koyma.

------

# 15. `archive/README.md` General Metadata Rule

Mevcut genel kural:

```text
archived Markdown content
→ YAML frontmatter
```

korunabilir.

Ama explicit exception ekle:

```text
Immutable runtime evidence exception:

Canonical run evidence files are not modified merely to attach archive metadata.

When a complete run directory is archived,
archive metadata is stored in archive-owned `ARCHIVE_RECORD.md`.
```

------

# 16. `old-runs/README.md` Fix

Mevcut wording’de:

```text
RUN_MANIFEST.md başına
veya klasör seviyesine archive metadata eklenir
```

gibi ifade varsa kaldır veya düzelt.

Canonical wording:

```text
Run evidence files remain immutable.

Archive metadata is stored in:
archive/old-runs/<run-id>/ARCHIVE_RECORD.md
```

------

# 17. Directory-Level Metadata

“Folder-level metadata” belirsiz bir kavram olarak bırakma.

V0’da old run archive metadata için explicit file:

```text
ARCHIVE_RECORD.md
```

kullan.

Central archive manifest oluşturma.

------

# 18. ARCHIVE_RECORD Is Not Runtime Contract

`ARCHIVE_RECORD.md`:

- runs template setine eklenmez,
- `templates/runs/` document type olmaz,
- runtime run creation sırasında üretilmez,
- run canonical structure’ın parçası değildir.

Yalnız archive katmanı tarafından archived run için oluşturulur.

------

# 19. No Change to Active Runs Structure

Approved V0 runtime structure aynı kalmalıdır:

```text
runs/
├── active/
├── completed/
└── failed/
```

Archive fix sırasında runtime klasör yapısını değiştirme.

------

# 20. RUN_INDEX Compatibility

Bir run gelecekte archive edilirse:

```text
logs/RUN_INDEX.md
```

secondary index olarak yeni physical archive location’ı gösterebilir.

Ancak bu fix sırasında gerçek run archive etme veya RUN_INDEX güncelleme.

Sadece procedure semantics’i tanımla.

------

# 21. Output Reference Preservation

Archived run’ın:

```text
RUN_MANIFEST.output_ref
```

alanı değişmeden kalmalıdır.

Archive move:

```text
output_ref
→ must remain canonical historical output reference
```

Archive path yazmak için output_ref’i değiştirme.

------

# 22. Archive Record Can Reference Output

Archive metadata gerekiyorsa:

```yaml
related_outputs:
  - outputs/<category>/<project>/versions/<version>/
```

gibi reference taşıyabilir.

Ama canonical runtime `output_ref` yine manifestte olduğu gibi kalır.

------

# 23. Ordinary Archived Documents

`deprecated-engine-docs/` ve `deprecated-templates/` için mevcut YAML-frontmatter yöntemi korunabilir.

Bu fix onların modelini değiştirmez.

Exception yalnız:

```text
complete archived runtime run directories
```

içindir.

------

# 24. No ARCHIVE_METADATA.md

Bu fix sırasında:

```text
ARCHIVE_METADATA.md
```

oluşturma.

Old-run sidecar exact name:

```text
ARCHIVE_RECORD.md
```

olmalıdır.

------

# 25. No ARCHIVE_INDEX

V0’da yine:

```text
archive/ARCHIVE_INDEX.md
```

oluşturma.

------

# 26. No Fake Archived Run

Bu fix sırasında:

```text
archive/old-runs/RUN-...
```

fixture oluşturma.

Yalnız README contract’larını düzelt.

------

# 27. No Real Run Move

Şunlardan hiçbir şeyi archive’a taşıma:

```text
runs/active/
runs/completed/
runs/failed/
```

Bu görev documentation consistency fixidir.

------

# 28. Preserve Current Archive Structure

Top-level structure değişmemelidir:

```text
archive/
├── README.md
├── deprecated-engine-docs/
├── deprecated-templates/
└── old-runs/
```

Yeni category oluşturma.

------

# 29. Scope Discipline

Bu görevde beklenen değişiklikler yalnız:

```text
archive/README.md
archive/old-runs/README.md
```

dosyalarında olmalıdır.

`deprecated-engine-docs/README.md` veya `deprecated-templates/README.md` yalnız açık consistency ihtiyacı varsa minimum düzeyde değiştirilebilir.

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

Kök `PROMPT_21_ARCHIVE_FINAL_FIX.md` task artefact’ının committe bulunması normaldir.

------

# 30. Security

Mevcut security kurallarını koru:

```text
no secrets
no credentials
no real user data
no private chain-of-thought
no machine-local sensitive paths
```

------

# 31. Final Audit

Fix tamamlandıktan sonra şunları tek tek doğrula:

1. Old run archive sırasında `RUN_MANIFEST.md` mutate ediliyor mu? Edilmemeli.
2. `INPUT_SNAPSHOT.md` değiştiriliyor mu? Değiştirilmemeli.
3. `RUN_LOG.md` archive event için append ediliyor mu? Edilmemeli.
4. `VALIDATION_REPORT.md` değiştiriliyor mu? Değiştirilmemeli.
5. `COMPLETION_REPORT.md` değiştiriliyor mu? Değiştirilmemeli.
6. `output_ref` archive path’e çevriliyor mu? Çevrilmemeli.
7. Run lifecycle `status` değişiyor mu? Değişmemeli.
8. Archive move Invalidated anlamına geliyor mu? Gelmemeli.
9. Archive metadata `ARCHIVE_RECORD.md` içinde mi?
10. `ARCHIVE_RECORD.md` archive-owned mı?
11. `ARCHIVE_RECORD.md` runtime run template setine dahil mi? Dahil olmamalı.
12. Archive sidecar `archive_status` ile runtime status ayrılıyor mu?
13. General YAML frontmatter rule için immutable-runtime-evidence exception tanımlı mı?
14. deprecated engine/template metadata yöntemi bozuldu mu? Bozulmamalı.
15. Fake archived run oluşturuldu mu? Oluşturulmamalı.
16. Real run taşındı mı? Taşınmamalı.
17. ARCHIVE_INDEX oluşturuldu mu? Oluşturulmamalı.
18. ARCHIVE_METADATA.md oluşturuldu mu? Oluşturulmamalı.
19. Top-level archive structure değişti mi? Değişmemeli.
20. Yalnız archive/ değiştirildi mi?

------

# 32. Çalışma Sonu Raporu

## Immutable Run Evidence

Şunu doğrula:

```text
archive move
→ does not modify canonical run evidence
```

## Archive Metadata Ownership

Şunu doğrula:

```text
ARCHIVE_RECORD.md
→ archive-owned historical metadata

RUN_MANIFEST.md
→ runtime lifecycle authority
```

## Lifecycle Preservation

Şunu doğrula:

```text
archive move
!=
status change
!=
Invalidated
```

## Output Preservation

Şunu doğrula:

```text
RUN_MANIFEST.output_ref
→ unchanged
```

## Structure

Şunu doğrula:

```text
archive/old-runs/<run-id>/
├── ARCHIVE_RECORD.md
├── RUN_MANIFEST.md
├── ...
```

yalnız gelecekte real archive move sırasında oluşur.

Bu fix sırasında fake run oluşturulmadığını belirt.

## Korunan Kararlar

Şunları doğrula:

- archive non-authoritative
- archive ≠ backup
- archive ≠ trash
- no active files moved
- no fake archive records
- no ARCHIVE_INDEX
- no private CoT
- no secrets
- no runtime mutation

## Sonuç

Şunlardan biriyle bitir:

```text
ARCHIVE_FINAL_FIX_COMPLETE
```

veya:

```text
ARCHIVE_FINAL_FIX_BLOCKED
```

Blocked ise yalnız gerçek engeli açıkla.