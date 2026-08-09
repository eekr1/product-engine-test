~~~md
# PROMPT_18_EXAMPLES_FINAL_FIX

Product Engine `examples/` klasörü için final consistency fix turudur.

`engine/`, `packages/`, `templates/`, `inputs/`, `runs/`, `outputs/` ve `logs/` Approved ve Closed durumdadır.

`examples/` ana build tamamlanmıştır; bu görev yalnızca audit sırasında bulunan contract driftlerini düzeltir.

Amaç `examples/` mimarisini yeniden tasarlamak değildir.

Yalnızca aşağıdaki dört konuyu düzelt:

1. Example `RUN_MANIFEST.md` field isimlerini Approved runtime template ile hizala
2. Example input `input_id` değerlerini canonical slug-derived formatına geçir
3. `web-app-blocked-001` run fixture için eksik approved input fixture’ı oluştur ve broken cross-link’i kapat
4. Completed example `output_ref` alanını canonical runtime output path semantiğiyle hizala; fixture location ile runtime output_ref’i birbirinden ayır

Yalnızca `examples/` klasöründe çalış.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/EXAMPLES_FOLDER_SPEC.md`
3. `inputs/README.md`
4. `inputs/PROJECT_INPUT_TEMPLATE.md`
5. `runs/README.md`
6. `engine/RUN_PROTOCOL.md`
7. `engine/OUTPUT_STRUCTURE.md`
8. `templates/runs/RUN_MANIFEST_TEMPLATE.md`
9. `outputs/README.md`
10. `examples/README.md`

Ardından mevcut example fixture’ları tamamen incele:

11. `examples/inputs/web-app-minimal-001/PROJECT_INPUT.md`
12. `examples/inputs/web-app-pending-001/PROJECT_INPUT.md`
13. `examples/runs/web-app-minimal-001/RUN_MANIFEST.md`
14. `examples/runs/web-app-minimal-001/INPUT_SNAPSHOT.md`
15. `examples/runs/web-app-blocked-001/RUN_MANIFEST.md`
16. `examples/runs/web-app-blocked-001/INPUT_SNAPSHOT.md`
17. `examples/outputs/web-app-minimal-001/SCENARIO.md`

Approved runtime contracts authoritative kaynaktır.

Examples yalnız onları demonstrative olarak göstermelidir.

---

# 2. Canonical RUN_MANIFEST Fields

Approved `templates/runs/RUN_MANIFEST_TEMPLATE.md` primary field seti korunmalıdır.

Canonical alanlar:

```text
run_id
status
created_at
completed_at
agent_id
project_slug
selected_package
delivery_profile
documents_produced
validation_result
output_version
output_ref
~~~

Example manifest’lerde farklı alias isimleri kullanma.

------

# 3. `package_id` → `selected_package`

Example RUN_MANIFEST içinde:

```text
package_id
```

kullanılmışsa düzelt.

Canonical runtime field:

```text
selected_package
```

olmalıdır.

Örnek:

```yaml
selected_package: demo-frontend
```

------

# 4. `overall_validation` → `validation_result`

Example RUN_MANIFEST içinde:

```text
overall_validation
```

kullanılmışsa kaldır.

Canonical field:

```text
validation_result
```

olmalıdır.

Completed example:

```yaml
validation_result: PASS
```

olabilir.

------

# 5. `documents_produced`

Completed example RUN_MANIFEST içinde canonical:

```text
documents_produced
```

alanını ekle.

Örnek:

```yaml
documents_produced:
  - README.md
  - PROJECT_BRAIN.md
  - PRODUCT_RULES.md
```

Exact format için approved template/runtime contract ne diyorsa onu uygula.

Yeni manifest schema icat etme.

------

# 6. Blocked Run Validation Semantics

Blocked run henüz Validation aşamasına girmemişse:

```text
validation_result
```

alanına canonical result olmayan yeni bir status icat etme.

Approved runtime template yalnız:

```text
PASS
CONDITIONAL PASS
FAIL
```

validation result vocabulary’sini tanımlar.

Blocked fixture’da validation henüz yapılmadıysa bunu:

- run status,
- SCENARIO.md,
- VALIDATION_REPORT.md

üzerinden açıkça anlat.

Eğer template field fiziksel olarak zorunluysa Approved runtime contract’ın izin verdiği nötr çözümü kullan; kendi başına `overall_validation: N/A` gibi alias üretme.

------

# 7. Canonical Input ID Rule

Approved input ID formatı:

```text
INPUT-<PROJECT-SLUG-UPPER>-V<NUMBER>
```

olmalıdır.

Project slug içindeki tireler uppercase ID içinde tire olarak korunabilir.

------

# 8. Minimal Input ID Fix

Mevcut:

```text
project_slug: task-tracker-demo
input_id: INPUT-WEB-APP-MINIMAL-001-V1
```

uyumsuzdur.

Canonical ID:

```text
INPUT-TASK-TRACKER-DEMO-V1
```

olmalıdır.

Bu ID’yi scenario içindeki tüm cross-reference’larda güncelle.

------

# 9. Pending Input ID Fix

Mevcut:

```text
project_slug: analytics-dashboard-demo
input_id: INPUT-WEB-APP-PENDING-001-V1
```

uyumsuzdur.

Canonical ID:

```text
INPUT-ANALYTICS-DASHBOARD-DEMO-V1
```

olmalıdır.

Tüm ilgili cross-reference’ları güncelle.

------

# 10. Snapshot Consistency

Input ID değiştirildiğinde ilgili:

```text
INPUT_SNAPSHOT.md
RUN_MANIFEST.md
SCENARIO.md
PACKAGE_SELECTION.md
SOURCE_REGISTER.md
```

dosyalarında geçen eski ID’leri kontrol et.

Stale ID bırakma.

------

# 11. Blocked Scenario Missing Input Fixture

Mevcut blocked run snapshot şu path’i referanslıyor olabilir:

```text
examples/inputs/web-app-blocked-001/PROJECT_INPUT.md
```

ancak bu fixture fiziksel olarak yoksa broken cross-link oluşur.

Bu fix sırasında eksik fixture oluştur.

------

# 12. Canonical Blocked Input Fixture

Oluştur:

```text
examples/inputs/web-app-blocked-001/
├── SCENARIO.md
└── PROJECT_INPUT.md
```

Bu input:

- synthetic olmalı,
- `status: approved` olmalı,
- canonical `project_type: web-app`,
- canonical `delivery_profile: Prototype`,
- project slug ile uyumlu input ID taşımalı,
- run’ı başlatmaya yetecek kadar approved truth içermeli,
- run sırasında ortaya çıkan veya çözülmemiş kritik architectural conflict’i gösterebilmeli.

------

# 13. Blocked Project Identity

Blocked scenario mevcut run fixture ile uyumluysa canonical project identity şu şekilde korunabilir:

```text
project_name: Realtime Sync App Demo
project_slug: realtime-sync-app
```

Bu durumda canonical input ID:

```text
INPUT-REALTIME-SYNC-APP-V1
```

olmalıdır.

------

# 14. Approved Input ≠ Conflict-Free Input

Blocked scenario için input approved olabilir ama yine de execution sırasında kritik conflict tespit edilebilir.

Bu distinction korunmalıdır:

```text
approved input
!=
guaranteed successful run
```

Approved yalnız:

```text
user-approved reusable project truth
```

anlamına gelir.

Run, engine rules’a göre conflict nedeniyle `Blocked` olabilir.

------

# 15. Blocked Input Cross-Link

Blocked run snapshot:

```text
source_input_path
```

alanında fiziksel olarak mevcut fixture’ı göstermelidir:

```text
examples/inputs/web-app-blocked-001/PROJECT_INPUT.md
```

Input ID de exact eşleşmelidir.

------

# 16. Pending Scenario Run Yaratmamalı

`web-app-pending-001` yalnız input fixture olarak kalabilir.

Pending input için runtime run fixture oluşturma.

Run creation gate:

```text
status: pending
→ no run
```

olarak korunmalıdır.

------

# 17. Canonical output_ref Semantics

Approved runtime `RUN_MANIFEST.output_ref` her zaman canonical runtime output path semantiğini göstermelidir:

```text
outputs/<category>/<project-slug>/versions/<output-version>/
```

Example fixture fiziksel olarak `examples/` altında olsa bile manifest semantiği değişmez.

------

# 18. Completed Example output_ref Fix

Minimal completed scenario için runtime canonical output ref:

```text
outputs/demos/task-tracker-demo/versions/v0.1/
```

olmalıdır.

Şu kullanım yanlış öğretici davranış üretir:

```text
output_ref: examples/outputs/web-app-minimal-001/
```

Bunu düzelt.

------

# 19. Fixture Location ≠ Runtime output_ref

Bu iki kavram açıkça ayrılmalıdır:

```text
Canonical runtime output_ref
→ outputs/demos/task-tracker-demo/versions/v0.1/

Example fixture location
→ examples/outputs/web-app-minimal-001/
```

RUN_MANIFEST canonical runtime davranışı göstermelidir.

SCENARIO.md fixture’ın repo içindeki physical location’ını açıklayabilir.

------

# 20. Output Scenario Wording

`examples/outputs/web-app-minimal-001/SCENARIO.md` içinde:

```text
bu fixture runtime'da şu canonical path'e publish edilmiş olurdu
```

anlamı açık olmalıdır.

Example physical path’i gerçek runtime publish path’i gibi sunma.

------

# 21. Completed Example Cross-Link

Completed run fixture ile output fixture arasındaki ilişki:

```text
scenario_id: web-app-minimal-001
```

üzerinden kurulmalıdır.

RUN_MANIFEST `output_ref` ise runtime semantics’i korur.

SCENARIO.md fiziksel example location’ı ayrıca açıklayabilir.

------

# 22. Blocked Run output_ref

Blocked run final output publish etmemelidir.

Canonical davranış:

```text
status: Blocked
completed_at: null
output_version: not_published
```

ve final output bulunmadığı açık olmalıdır.

`output_ref` için Approved runtime schema’nın izin verdiği nötr değer kullanılabilir.

Ama fake final runtime path üretme.

------

# 23. Completion Report for Blocked Fixture

Blocked fixture’da `COMPLETION_REPORT.md` fiziksel olarak bulunuyorsa bunun:

```text
final completion report
```

gibi algılanmaması gerekir.

Açıkça:

```text
run is not completed
report is fixture/status closure summary only
```

gibi semantics taşımalı veya approved completion template behavior ile uyumlu hale getirilmeli.

Blocked ≠ Completed.

------

# 24. Validation Report for Blocked Fixture

Blocked run validation aşamasına hiç girmediyse:

```text
PASS
CONDITIONAL PASS
FAIL
```

sonucu üretme.

Report yalnız:

```text
validation not executed because run is Blocked
```

bilgisini taşıyabilir.

Yeni canonical validation result icat etme.

------

# 25. Example RUN_MANIFEST Canonical Naming

Example manifests Approved template isimlerini korumalıdır:

```text
selected_package
validation_result
documents_produced
output_version
output_ref
```

Şunları canonical field gibi kullanma:

```text
package_id
overall_validation
published_path
final_output
```

------

# 26. Agent ID

Example agent_id generic kalmalıdır.

Örnek:

```text
execution-agent-01
```

uygundur.

Model adı kullanma.

------

# 27. Example Output Cleanliness

Existing positive output fixture şu kuralları korumalıdır:

```text
no unresolved placeholders
no run artefacts
no template metadata
no secrets
no local paths
no private CoT
```

Bu fix sırasında positive output docs’u gereksiz yere değiştirme.

------

# 28. Scenario Metadata

Mevcut scenario metadata:

```text
scenario_id
example_type
project_type
package_id
delivery_profile
engine_version
status
source
anonymized
```

korunabilir.

Buradaki:

```text
package_id
```

scenario metadata alanıdır ve RUN_MANIFEST field’iyle karıştırılmamalıdır.

Scenario metadata’da `package_id` kalabilir.

RUN_MANIFEST’te canonical `selected_package` kullanılmalıdır.

------

# 29. Input Versioning

Input metadata:

```text
input_version: "1"
```

olarak kalmalıdır.

Folder/semantic anlatım:

```text
v1
```

olabilir.

`v1.0` kullanma.

------

# 30. Output Versioning

Output example:

```text
v0.1
v0.2
v1.0
```

semantics’ini koruyabilir.

Input versioning ile karıştırma.

------

# 31. No Fake Runtime Mutation

Bu fix sırasında gerçek:

```text
inputs/
runs/
outputs/
logs/
```

runtime klasörlerine fixture taşıma.

Tüm example materyal:

```text
examples/
```

altında kalmalıdır.

------

# 32. No Logs Update

Bu fix runtime execution değildir.

Şunlara dokunma:

```text
logs/RUN_INDEX.md
logs/ENGINE_CHANGELOG.md
logs/ISSUES.md
logs/IMPROVEMENTS.md
```

------

# 33. Scope Discipline

Bu görev sırasında yalnız gerekli `examples/` dosyalarını değiştir.

Beklenen değişiklik alanları:

```text
examples/inputs/
examples/runs/
examples/outputs/
examples/README.md
```

Gerek yoksa root examples README’yi değiştirme.

Şunlara dokunma:

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

Kök `PROMPT_18_EXAMPLES_FINAL_FIX.md` task artefact’ının committe bulunması normaldir.

------

# 34. Final Audit

Fix bittikten sonra şunları tek tek doğrula:

1. Example RUN_MANIFEST’lerde `selected_package` kullanılıyor mu?
2. `validation_result` canonical field olarak kullanılıyor mu?
3. `documents_produced` Completed manifestte var mı?
4. `package_id` RUN_MANIFEST içinde kaldı mı? Kalmamalı.
5. `overall_validation` RUN_MANIFEST içinde kaldı mı? Kalmamalı.
6. Minimal input ID slug-derived mı?
7. Pending input ID slug-derived mı?
8. Blocked input ID slug-derived mı?
9. Tüm snapshot/reference ID’ler yeni ID’lerle eşleşiyor mu?
10. `examples/inputs/web-app-blocked-001/PROJECT_INPUT.md` fiziksel olarak var mı?
11. Blocked run source_input_path gerçek fixture’a mı işaret ediyor?
12. Pending input için yanlışlıkla run fixture oluşturuldu mu? Oluşturulmamalı.
13. Completed manifest `output_ref` canonical runtime path mi?
14. `output_ref` example physical path’i gösteriyor mu? Göstermemeli.
15. Fixture location SCENARIO.md ile ayrıca açıklanıyor mu?
16. Blocked run final output publish ediyor mu? Etmemeli.
17. Blocked ≠ Failed korunuyor mu?
18. Blocked validation sonucu uydurulmuş mu? Uydurulmamalı.
19. Positive output cleanliness bozuldu mu? Bozulmamalı.
20. Scenario metadata canonical mı?
21. Fake engine version oluşturuldu mu? Oluşturulmamalı.
22. No real project leakage korunuyor mu?
23. No secrets/local paths/private CoT korunuyor mu?
24. Model independence korunuyor mu?
25. Yalnız `examples/` değiştirildi mi?

------

# 35. Çalışma Sonu Raporu

## Değiştirilen Dosyalar

Gerçekten değiştirilen `examples/` dosyalarını listele.

## RUN_MANIFEST Alignment

Şunları doğrula:

```text
selected_package
validation_result
documents_produced
output_version
output_ref
```

## Input ID Alignment

Şunları doğrula:

```text
task-tracker-demo
→ INPUT-TASK-TRACKER-DEMO-V1

analytics-dashboard-demo
→ INPUT-ANALYTICS-DASHBOARD-DEMO-V1

realtime-sync-app
→ INPUT-REALTIME-SYNC-APP-V1
```

## Blocked Fixture

Şunları doğrula:

```text
approved synthetic input exists
snapshot path resolves
critical conflict causes Blocked
no final output published
```

## Output Ref Separation

Şunu açıkça doğrula:

```text
runtime output_ref
→ outputs/demos/task-tracker-demo/versions/v0.1/

fixture location
→ examples/outputs/web-app-minimal-001/
```

## Korunan Kararlar

Şunları doğrula:

- examples non-authoritative
- synthetic-first
- pending cannot start run
- Blocked ≠ Failed
- no runtime folder mutation
- no logs pollution
- no private CoT
- no secrets/local paths
- model-independent

## Sonuç

Şunlardan biriyle bitir:

```text
EXAMPLES_FINAL_FIX_COMPLETE
```

veya:

```text
EXAMPLES_FINAL_FIX_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.