~~~md
# PROMPT_11_RUNS_BUILD

Product Engine’in `runs/` build aşamasıdır.

`engine/`, `packages/`, `templates/` ve `inputs/` Approved ve Closed durumdadır.

Bu görevde yalnızca `runs/` klasörünü gerçek, kullanılabilir ve model-bağımsız runtime execution katmanı olarak inşa et.

Amaç yalnızca:

```text
runs/
├── active/
├── completed/
└── failed/
~~~

klasörlerini oluşturmak değildir.

`runs/` katmanı tek bir Product Engine çalışmasının operasyonel hafızasıdır.

Bu katman şu sorulara deterministik cevap verebilmelidir:

- Bir run nasıl oluşturulur?
- Hangi approved input version kullanılmıştır?
- Hangi package ve delivery profile seçilmiştir?
- Run hangi kaynakları kullanmıştır?
- Hangi assumption ve conflict’ler oluşmuştur?
- Hangi kararlar run sırasında alınmıştır?
- Run hangi aşamadadır?
- Hangi belgeler üretildi?
- Working output nerede tutulur?
- Validation sonucu nedir?
- Run başarılı mı, başarısız mı, iptal mi edildi?
- Run tamamlandığında hangi klasöre taşınır?
- Failed ve Cancelled nasıl ayrılır?
- Paused / Resumed / Invalidated nasıl izlenir?
- Aynı proje için paralel run güvenliği nasıl korunur?

Yeni Product Engine mimarisi tasarlama.

Approved engine, packages, templates veya inputs sözleşmelerini değiştirme.

------

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/RUNS_FOLDER_SPEC.md`

Ardından Approved engine sözleşmelerinden:

1. `engine/README.md`
2. `engine/RUN_PROTOCOL.md`
3. `engine/GENERATION_PIPELINE.md`
4. `engine/PROJECT_INTAKE.md`
5. `engine/PACKAGE_RULES.md`
6. `engine/DOCUMENT_CATALOG.md`
7. `engine/ASSUMPTION_RULES.md`
8. `engine/CONFLICT_RESOLUTION.md`
9. `engine/VALIDATION_RULES.md`
10. `engine/OUTPUT_STRUCTURE.md`

Ardından Approved inputs belgelerinden:

1. `inputs/README.md`
2. `inputs/PROJECT_INPUT_TEMPLATE.md`
3. `inputs/approved/README.md`

Ardından Approved run templates:

1. `templates/runs/RUN_MANIFEST_TEMPLATE.md`
2. `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md`
3. `templates/runs/PACKAGE_SELECTION_TEMPLATE.md`
4. `templates/runs/SOURCE_REGISTER_TEMPLATE.md`
5. `templates/runs/ASSUMPTIONS_TEMPLATE.md`
6. `templates/runs/CONFLICTS_TEMPLATE.md`
7. `templates/runs/DECISIONS_TEMPLATE.md`
8. `templates/runs/RUN_LOG_TEMPLATE.md`
9. `templates/runs/PROGRESS_TEMPLATE.md`
10. `templates/runs/VALIDATION_REPORT_TEMPLATE.md`
11. `templates/runs/COMPLETION_REPORT_TEMPLATE.md`

Gerekli olduğunda ilgili package/template belgelerine yalnız dependency veya scope doğrulaması için bak.

------

# 2. Runs Katmanının Sorumluluğu

`runs/` tek bir Product Engine execution’ın operasyonel kaydıdır.

Ownership ayrımı:

```text
inputs/
→ reusable approved project truth

runs/
→ belirli bir execution sırasında ne oldu?

templates/runs/
→ run belgelerinin nasıl yapılandırılacağını tanımlar

engine/RUN_PROTOCOL.md
→ run lifecycle ve state transition kurallarını tanımlar

engine/GENERATION_PIPELINE.md
→ generation aşamalarının mantığını tanımlar

outputs/
→ validation'dan geçmiş temiz final deliverable

logs/
→ engine seviyesindeki persistent değişiklik geçmişi
```

`runs/`:

- project truth owner değildir,
- final output owner değildir,
- engine changelog değildir,
- private chain-of-thought deposu değildir.

------

# 3. Hedef Klasör Yapısı

Approved temel yapı:

```text
runs/
├── README.md
├── active/
├── completed/
└── failed/
```

Bu yapıyı koru.

Yeni top-level run status klasörleri oluşturma.

Özellikle V0’da şunları oluşturma:

```text
paused/
cancelled/
invalidated/
archived/
history/
```

Lifecycle status ile fiziksel folder state aynı şey değildir.

------

# 4. Canonical Per-Run Structure

Her run kendi klasöründe aşağıdaki canonical yapıya sahip olmalıdır:

```text
runs/active/<run-id>/
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

Bu seti değiştirme.

Yeni run document icat etme.

Run operational template authority:

```text
templates/runs/
```

olarak kalır.

------

# 5. Run ID Standardı

Canonical Run ID:

```text
RUN-<YYYYMMDD>-<sequence>
```

Örnek:

```text
RUN-20260808-001
```

Kurallar:

- benzersiz,
- stable,
- oluşturulduktan sonra değişmez,
- aynı gün sequence artabilir,
- project slug Run ID içine gömülmek zorunda değildir.

Run klasör adı exact Run ID olmalıdır.

Örnek:

```text
runs/active/RUN-20260808-001/
```

------

# 6. Run Creation Gate

Yeni run yalnız şu şartlarla açılabilir:

```text
1. Valid approved input mevcut.
2. Exact approved input version seçilmiş.
3. Aynı project + aynı active scope için conflicting active run yok.
4. Run ID benzersiz.
5. Initial run documents oluşturulabilir durumda.
```

Pending input ile run açılamaz.

Superseded historical approved version teknik olarak traceability için korunur; aktif yeni run için current approved version seçilmelidir, kullanıcı özellikle historical version istemedikçe.

------

# 7. Parallel Run Safety

Approved engine kuralını koru:

```text
Aynı project + aynı active scope
→ birden fazla conflicting active run olamaz.
```

Ancak:

```text
different project
→ parallel run olabilir
```

ve gerçekten bağımsız scope varsa engine contract izin verdiği ölçüde ayrı run olabilir.

V0’da karmaşık lock manager tasarlama.

README’de deterministic preflight rule tanımla.

------

# 8. Run Lifecycle

Canonical lifecycle:

```text
Created
→ Initialized
→ Running
→ Validation
→ Completed
```

Alternative states:

```text
Blocked
Paused
Resumed
Failed
Cancelled
Invalidated
```

Approved `engine/RUN_PROTOCOL.md` ile birebir uyumlu ol.

Yeni status oluşturma.

------

# 9. Lifecycle Transition Semantics

Minimum transition mantığını açıkla:

```text
Created
→ run identity created

Initialized
→ approved input snapshot alındı
→ package/profile kaydedildi
→ operational files hazırlandı

Running
→ generation aktif

Blocked
→ kritik unresolved issue nedeniyle ilerleyemiyor

Paused
→ kullanıcı kararı / clarification bekleniyor

Resumed
→ paused durumundan devam edildi

Validation
→ working-output validation altında

Completed
→ validation başarılı ve final output hazır

Failed
→ teknik/kritik failure veya validation failure

Cancelled
→ kullanıcı/operatör bilinçli şekilde iptal etti

Invalidated
→ geçmiş run artık geçerli gerçekliği temsil etmiyor
```

------

# 10. Physical Folder Movement

Physical folder state deterministic olmalıdır.

Active run:

```text
runs/active/<run-id>/
```

Successful completion:

```text
runs/completed/<run-id>/
```

Failed run:

```text
runs/failed/<run-id>/
```

Cancelled run için ayrı folder oluşturma.

Cancelled run:

```text
runs/failed/<run-id>/
```

altında tutulabilir ancak:

```text
RUN_MANIFEST.md
status: Cancelled
```

olarak kalmalıdır.

Cancelled hiçbir zaman `Failed` status’una dönüştürülmemelidir.

------

# 11. Invalidated Run

Invalidated run ayrı top-level folder’a taşınmaz.

Completed bir run sonradan invalidated edilirse historical record korunur.

Engine contract hangi fiziksel konumu izin veriyorsa onu koru.

Önemli olan:

```text
status: Invalidated
```

ve final `latest/` referansının artık bu run’a işaret etmemesidir.

Runs build sırasında outputs logic’i yeniden tasarlama.

------

# 12. RUN_MANIFEST Role

`RUN_MANIFEST.md` run’ın identity/state özetidir.

Primary responsibilities:

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
```

Gerekli existing template alanları korunabilir.

RUN_MANIFEST:

- chronological event log değildir,
- assumption register değildir,
- conflict register değildir,
- detailed decision log değildir.

------

# 13. RUN_LOG ≠ RUN_MANIFEST

Bu ayrımı README’de açıkça koru.

```text
RUN_MANIFEST
→ run'ın current summary / identity / state

RUN_LOG
→ run sırasında oluşan önemli olayların chronological record'u
```

RUN_LOG manifest’i tekrar etmemelidir.

RUN_LOG:

- stage transition,
- important event,
- repair attempt,
- pause/resume,
- validation start/result,
- failure/cancellation

gibi operasyonel olayları kısa ve açık kaydedebilir.

Private reasoning kaydetmez.

------

# 14. Input Snapshot

Run initialization sırasında:

```text
inputs/approved/<project-slug>/vN/PROJECT_INPUT.md
```

kaynağından:

```text
runs/active/<run-id>/INPUT_SNAPSHOT.md
```

oluşturulur.

Snapshot:

- exact input_id,
- exact input_version,
- source path/reference,
- approval metadata,
- normalized input content

ile traceable olmalıdır.

Snapshot run başladıktan sonra immutable’dır.

Approved input sonradan değişse bile snapshot değişmez.

------

# 15. Input Snapshot Copy Semantics

`INPUT_SNAPSHOT.md` yalnız live link olmamalıdır.

Run'ın exact input truth’unu kendi operational record’unda korumalıdır.

Ancak gereksiz binary attachment duplication yapma.

Source/attachment references portable şekilde tutulabilir.

Yeni approved input version oluşursa mevcut run snapshot otomatik güncellenmez.

------

# 16. Package Selection

`PACKAGE_SELECTION.md`:

- selected package,
- selected delivery profile,
- project type,
- applicability resolution,
- extension/downgrade/override varsa gerekçe

bilgisini kaydeder.

Package selection authority:

```text
engine/PACKAGE_RULES.md
```

olarak kalır.

Run record yalnız gerçekleşen seçimi ve kısa gerekçeyi saklar.

------

# 17. SOURCE_REGISTER

`SOURCE_REGISTER.md` run sırasında kullanılan authoritative/reference kaynakları kaydeder.

Örnek source categories:

```text
approved-input
engine-contract
package
template
repository
provided-document
reference
```

Ama source register yeni authority hierarchy icat etmemelidir.

Her entry mümkün olduğunca:

```text
source_id
source_type
reference
role
status
```

gibi izlenebilir alanlara sahip olabilir.

Local `file:///` path kullanma.

------

# 18. Assumptions

`ASSUMPTIONS.md` run sırasında yapılan operational assumptions kayıtlarıdır.

Input-level approved assumptions ile run-time assumptions ayrılmalıdır.

Run assumption:

```text
assumption_id
topic
assumption
reason
impact
status
```

gibi kısa ve denetlenebilir formatta olabilir.

Private chain-of-thought yazma.

------

# 19. Conflicts

`CONFLICTS.md` run sırasında tespit edilen veya taşınan conflict kayıtlarıdır.

Conflict status engine contract ile uyumlu olmalıdır.

Critical unresolved conflict:

```text
→ run Blocked
```

durumuna yol açabilir.

Silent overwrite yasaktır.

Conflict çözümü kısa evidence + resolution ile kaydedilir.

------

# 20. Run Decisions

`DECISIONS.md` yalnız run execution-level decisions içindir.

Örnek:

```text
- generation order değişikliği
- package narrowing
- retry strategy
- repair decision
```

Kalıcı product/architecture decisions burada owner değildir.

Onlar final project documents / project decisions katmanına gider.

------

# 21. Progress

`PROGRESS.md` run’ın pipeline stage ilerlemesini gösterir.

Canonical generation aşamalarını mümkün olduğunca:

```text
Intake Snapshot
Package Selection
Document Selection
Template Resolution
Information Distribution
Assumption/Conflict Handling
Generation
Validation
Repair
Finalization
Completion
```

gibi engine pipeline ile hizalı takip et.

README pipeline’ı yeniden tanımlamasın; referans versin.

------

# 22. Working Output

Working documents yalnız:

```text
runs/active/<run-id>/working-output/
```

altında tutulmalıdır.

Validation öncesi:

```text
outputs/
```

altına final document yazma.

Working output:

- incomplete olabilir,
- placeholder içerebilir,
- validation bekleyebilir,
- repair görebilir.

Final output değildir.

------

# 23. Validation

Validation:

```text
working-output/
```

üzerinde uygulanır.

Sonuç vocabulary:

```text
PASS
CONDITIONAL PASS
FAIL
```

olmalıdır.

`VALIDATION_REPORT.md` canonical template’e göre oluşturulur.

`PASSED`, `FAILED`, `SUCCESS` gibi alternate overall vocabulary kullanma.

------

# 24. Repair

Validation `FAIL` veya gerekli durumda `CONDITIONAL PASS` sonucu verirse:

```text
working-output
→ repair
→ validation retry
```

akışı izlenir.

Repair event RUN_LOG ve VALIDATION_REPORT’ta izlenebilir olmalıdır.

Engine’in retry limitini değiştirme.

------

# 25. Completion

Run yalnız şu şartlarda `Completed` olabilir:

```text
- all required/applicable documents generated
- validation PASS veya approved CONDITIONAL PASS
- final output created
- output version assigned
- output_ref recorded
- RUN_MANIFEST complete
- COMPLETION_REPORT complete
```

Ardından run klasörü:

```text
runs/active/<run-id>/
```

konumundan:

```text
runs/completed/<run-id>/
```

konumuna taşınır.

------

# 26. Failed Run

Failed:

```text
technical failure
critical unrecoverable generation failure
validation retry failure
```

gibi engine-defined durumlarda kullanılır.

Failed run:

- final output olarak publish edilmez,
- `latest/` güncellemez,
- operational evidence korunur,
- `runs/failed/<run-id>/` altına taşınır.

------

# 27. Cancelled Run

Cancelled intentional user/operator stop’tur.

Cancelled:

```text
!= Failed
```

Manifest:

```text
status: Cancelled
```

olarak kalır.

Physical storage:

```text
runs/failed/<run-id>/
```

olabilir.

README bunu açıkça anlatmalıdır.

------

# 28. Paused / Resumed

Paused run fiziksel olarak:

```text
runs/active/<run-id>/
```

altında kalır.

Manifest:

```text
status: Paused
```

olur.

Resume sırasında:

```text
Paused
→ Resumed
→ Running
```

transition’ı RUN_LOG’da izlenebilir olmalıdır.

Snapshot değiştirilmez.

------

# 29. Blocked

Blocked da active folder içinde kalır.

Critical unresolved:

- conflict,
- missing required information,
- required clarification

nedeniyle oluşabilir.

Blocked run sessizce continue etmemelidir.

Block reason operational record’da açık olmalıdır.

------

# 30. Run Timestamps

Portable timestamp formatı:

```text
ISO 8601
```

Örnek format:

```text
YYYY-MM-DDTHH:mm:ssZ
```

Reusable README/starter dosyalarında gerçek çalışma timestamp’i uydurma.

Placeholder kullan.

------

# 31. Agent ID

`agent_id` traceability için kullanılabilir.

Ancak agent identity model lock-in yaratmamalıdır.

Örnek generic değerler:

```text
agent-01
execution-agent
```

veya runtime-provided value.

Claude/Gemini/GPT/Codex hardcode etme.

------

# 32. Private Chain-of-Thought

Run records private chain-of-thought içermemelidir.

Saklanabilecekler:

```text
decision
short rationale
result
evidence
status
event
```

Saklanmaması gereken:

```text
hidden reasoning
internal thought process
private scratchpad
```

------

# 33. Run README

`runs/README.md` bu runtime layer’ın authoritative kullanım rehberi olmalıdır.

Minimum olarak şunları açıklamalıdır:

- runs amacı
- active/completed/failed ayrımı
- per-run canonical structure
- Run ID
- creation preflight
- lifecycle
- folder movement
- manifest/log distinction
- snapshot behavior
- package selection
- source register
- assumptions/conflicts
- decisions
- progress
- working-output
- validation/repair
- completion
- failed/cancelled
- paused/resumed/blocked
- invalidation
- parallel run safety
- output boundary
- no CoT rule

RUN_PROTOCOL’ü birebir tekrar etme.

README operational kullanım rehberi olmalı.

------

# 34. active/ README

`runs/active/README.md` oluşturabilirsin.

Şunları kısa ve net anlatabilir:

- aktif run burada yaşar
- Paused/Blocked/Resumed burada kalır
- working-output burada tutulur
- run kapanınca folder taşınır
- manual orphan run bırakılmamalıdır

------

# 35. completed/ README

`runs/completed/README.md` oluşturabilirsin.

Şunları açıkla:

- yalnız başarılı tamamlanmış run’lar
- historical immutable operational evidence
- final outputs burada tutulmaz
- final deliverable outputs/ içindedir
- completed run sonradan Invalidated işaretlenebilir
- silinmez

------

# 36. failed/ README

`runs/failed/README.md` oluşturabilirsin.

Şunları açıkla:

- Failed ve Cancelled run’lar fiziksel olarak burada olabilir
- manifest status authoritative’dir
- Cancelled status Failed’a çevrilmez
- operational evidence korunur
- final latest output’a promote edilmez

------

# 37. Starter / Structural Files

Gerçek run örneği oluşturma.

Generic example run data oluşturma.

Ancak V0 runtime ergonomisi için gerekli ise:

```text
runs/README.md
runs/active/README.md
runs/completed/README.md
runs/failed/README.md
```

oluştur.

Per-run belge starter’larını burada tekrar oluşturma.

Onların authority’si:

```text
templates/runs/
```

altındadır.

------

# 38. Run Initialization Procedure

README’de sade procedure tanımla:

```text
1. Approved input resolve et
2. Active conflict preflight yap
3. Run ID oluştur
4. runs/active/<run-id>/ oluştur
5. templates/runs/ üzerinden operational docs initialize et
6. INPUT_SNAPSHOT oluştur
7. PACKAGE_SELECTION kaydet
8. RUN_MANIFEST status Initialized yap
9. Generation pipeline'a geç
```

Detaylı pipeline logic’i engine’den tekrar etme.

------

# 39. Run Closure Procedure

Successful:

```text
Validation PASS / approved CONDITIONAL PASS
→ final output oluştur
→ manifest/completion report tamamla
→ active → completed
```

Failed:

```text
terminal failure
→ manifest status Failed
→ failure evidence kaydet
→ active → failed
```

Cancelled:

```text
intentional cancel
→ manifest status Cancelled
→ active → failed physical folder
```

------

# 40. Folder Move Atomicity

Run folder move sırasında operational documents kaybolmamalıdır.

README’de kavramsal olarak:

```text
run closure tamamlanmadan folder terminal location’a taşınmaz
```

kuralını belirt.

Karmaşık filesystem transaction sistemi tasarlama.

------

# 41. Output Boundary

Run directory ile final output kesin ayrılmalıdır.

```text
runs/
→ operational evidence + working-output

outputs/
→ clean validated deliverables
```

Final project docs tamamlandıktan sonra working-output’un kopyası/temiz versiyonu output structure’a göre publish edilir.

Run operational files final output içine sızmaz.

------

# 42. Validation Report and Completion Report

`VALIDATION_REPORT.md` run validation evidence’ıdır.

`COMPLETION_REPORT.md` run kapanış özetidir.

Completion Report:

- validation report’un alternatifi değildir,
- manifest’in alternatifi değildir.

Üçünün responsibility ayrımını README’de koru.

------

# 43. Source of Truth Priority

Run sırasında authority resolution gereken durumda:

```text
approved input
engine contracts
package rules
templates
explicit current user clarification
```

gibi existing approved authority sistemine uy.

Runs layer kendi authority priority sistemi icat etmesin.

------

# 44. Existing Project Safety

Existing project run sırasında:

- repository current reality
- approved input current reality
- target state
- transition scope

birbirine karışmamalıdır.

Run snapshot approved input’taki ayrımı korumalıdır.

Repository’den gözlenen yeni conflict varsa run CONFLICTS kaydına alınır.

------

# 45. New Input During Active Run

Active run sırasında kullanıcı project truth’u değiştiren yeni bilgi verirse:

Mevcut INPUT_SNAPSHOT sessizce değiştirilmemelidir.

Eğer değişiklik run scope/truth’u etkiliyorsa:

```text
current run
→ pause / invalidate / cancel as engine rules require

new input
→ pending revision
→ explicit approval
→ new approved version
→ new run
```

Run katmanı inputs immutability kuralını bypass etmemelidir.

------

# 46. Same Input, New Run

Aynı approved input version birden fazla farklı zamanda yeni run başlatmak için kullanılabilir.

Her run:

- unique Run ID,
- kendi snapshot,
- kendi package selection record,
- kendi logs,
- kendi validation

taşır.

Approved input run’a bağlı tek-use artefact değildir.

------

# 47. Failure Evidence

Failed run silinmemelidir.

Minimum olarak şunlar korunmalıdır:

```text
RUN_MANIFEST
RUN_LOG
PROGRESS
VALIDATION_REPORT (varsa)
COMPLETION_REPORT veya closure summary
working-output (uygun ve güvenliyse)
```

Ancak yeni özel FAILURE_REPORT dosyası icat etme.

------

# 48. Completion Report for Non-Completed Terminal Runs

`COMPLETION_REPORT.md` template semantics’ini kontrol et.

Eğer template yalnız başarılı Completed run için tasarlanmışsa Failed/Cancelled durumlarında onu başarılı completion gibi doldurma.

Terminal closure bilgisini mevcut approved operational belgeler içinde doğru şekilde tut.

Yeni run document oluşturma.

------

# 49. Invalidated Historical Run

Historical run invalidated olduğunda:

- silinmez,
- original evidence korunur,
- manifest status değişikliğinin immutability modelini RUN_PROTOCOL’e göre uygula,
- outputs latest artık invalidated run’a işaret etmez.

Runs build engine authority’yi override etmemelidir.

------

# 50. Validation Vocabulary

Tüm runs belgelerinde overall validation sonucu:

```text
PASS
CONDITIONAL PASS
FAIL
```

olmalıdır.

Şunları overall result olarak kullanma:

```text
PASSED
FAILED
SUCCESS
SUCCESSFUL
```

------

# 51. Real Project Leakage

Hiçbir reusable runs README’sinde gerçek project/company isimleri kullanma.

Generic örnekler:

```text
example-project
sample-app
RUN-20260101-001
```

kullanılabilir.

Gerçek repository geçmişinden proje adı taşıma.

------

# 52. Local Path Safety

Hiçbir reusable run rehberinde:

```text
file:///
C:\Users\
/Users/name/
```

gibi machine-specific path kullanma.

Repo-relative paths kullan.

------

# 53. Secret Safety

Run records:

- password,
- API secret,
- token,
- private key

saklamamalıdır.

Secret’ın gerektiği bilgisi tutulabilir.

Gerçek secret değerleri kaydedilmez.

------

# 54. Scope Discipline

Bu görev sırasında yalnızca:

```text
runs/
```

altında çalış.

Değiştirme:

- `engine/`
- `packages/`
- `templates/`
- `inputs/`
- `planning/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- root README
- Product Engine Brain

Kök task prompt dosyasının committe bulunması normal çalışma artefact’ıdır.

------

# 55. Expected Physical Result

Minimum beklenen yapı:

```text
runs/
├── README.md
├── active/
│   └── README.md
├── completed/
│   └── README.md
└── failed/
    └── README.md
```

Gerçek run klasörü oluşturma.

Gerçek operational document instance oluşturma.

Per-run files runtime sırasında `templates/runs/` üzerinden oluşturulacaktır.

------

# 56. Final Audit

Build tamamlandıktan sonra tüm `runs/` klasörünü çapraz kontrol et.

Şunları tek tek doğrula:

1. active/completed/failed fiziksel ayrımı açık mı?
2. Yeni top-level status klasörü oluşturuldu mu? Oluşturulmamalı.
3. Canonical per-run structure doğru mu?
4. Run ID standardı doğru mu?
5. Pending input ile run açılabiliyor mu? Açılamamalı.
6. Exact approved input version resolve ediliyor mu?
7. Snapshot immutable mı?
8. Approved input değişince snapshot değişiyor mu? Değişmemeli.
9. Same project + same scope conflicting active run engelleniyor mu?
10. Different projects parallel çalışabiliyor mu?
11. Created → Initialized → Running → Validation → Completed ana lifecycle korunuyor mu?
12. Blocked/Paused/Resumed/Failed/Cancelled/Invalidated korunuyor mu?
13. Cancelled status Failed’a dönüştürülüyor mu? Dönüştürülmemeli.
14. Cancelled fiziksel olarak failed folder’da tutulabiliyor mu?
15. Paused/Blocked active folder’da kalıyor mu?
16. RUN_MANIFEST ve RUN_LOG ayrımı açık mı?
17. Private CoT kaydı isteniyor mu? İstenmemeli.
18. Package selection authority engine’de mi?
19. Source register authority sistemi icat ediyor mu? Etmemeli.
20. Assumptions engine rule’larına bağlı mı?
21. Conflicts silent overwrite yapıyor mu? Yapmamalı.
22. Run decisions project decisions owner’ını çalıyor mu? Çalmamalı.
23. Progress pipeline ile uyumlu mu?
24. working-output final output’tan ayrı mı?
25. Validation working-output üzerinde mi?
26. Validation vocabulary canonical mı?
27. Repair traceable mı?
28. Completed gate yeterince sıkı mı?
29. Failed run evidence korunuyor mu?
30. Final outputs run folder içinde mi tutuluyor? Tutulmamalı.
31. Completion report / Validation report / Manifest ayrımı açık mı?
32. New approved input version için gerektiğinde new run kuralı açık mı?
33. Real project leakage var mı?
34. Local machine path var mı?
35. Secret/credential örneği var mı?
36. Yalnızca `runs/` değiştirildi mi?

------

# 57. Çalışma Sonu Raporu

Kısa ama somut rapor ver.

## Oluşturulan Runs Yapısı

Fiziksel `runs/` ağacını göster.

## Run Lifecycle

Ana ve alternatif status’ları özetle.

## Run Creation

Preflight ve initialization sürecini açıkla.

## Input Snapshot

Approved input ile snapshot ayrımını doğrula.

## Per-Run Records

Şunların sorumluluğunu kısa açıkla:

```text
RUN_MANIFEST
INPUT_SNAPSHOT
PACKAGE_SELECTION
SOURCE_REGISTER
ASSUMPTIONS
CONFLICTS
DECISIONS
RUN_LOG
PROGRESS
VALIDATION_REPORT
COMPLETION_REPORT
working-output
```

## Folder Movement

Şunları açıkla:

```text
active → completed
active → failed
Cancelled → failed folder but status Cancelled
```

## Working Output / Final Output

Sınırın korunduğunu doğrula.

## Parallel Safety

Same project + same scope conflict kuralını doğrula.

## Security / Portability

Şunları doğrula:

- private CoT yok,
- secret yok,
- local path yok,
- real-project leakage yok.

## Değiştirilen Dosyalar

Yalnızca `runs/` altında değişiklik yapıldığını doğrula.

## Açık Noktalar

Yalnız gerçekten `outputs/`, `logs/`, `examples/` veya sonraki build aşamasına bırakılması gereken konuları yaz.

## Sonuç

Şunlardan biriyle bitir:

```text
RUNS_BUILD_COMPLETE
```

veya:

```text
RUNS_BUILD_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.