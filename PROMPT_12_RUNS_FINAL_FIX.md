~~~md
# PROMPT_12_RUNS_FINAL_FIX

Product Engine `runs/` klasörü için final consistency fix turudur.

`engine/`, `packages/`, `templates/` ve `inputs/` Approved ve Closed durumdadır.

`runs/` ana build tamamlanmıştır; bu görev yalnızca audit sırasında bulunan küçük semantic driftleri düzeltir.

Amaç `runs/` mimarisini yeniden tasarlamak değildir.

Yalnızca aşağıdaki konuları düzelt:

1. Input version standardının `inputs/` contract ile çelişmesi
2. Completed run immutability ile `Invalidated` lifecycle transition çelişkisi
3. Unresolved critical conflict’in doğrudan `Failed` sebebi gibi tanımlanması

Yalnızca `runs/` klasöründe çalış.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `engine/RUN_PROTOCOL.md`
3. `engine/GENERATION_PIPELINE.md`
4. `engine/CONFLICT_RESOLUTION.md`
5. `engine/VALIDATION_RULES.md`
6. `inputs/README.md`
7. `inputs/approved/README.md`
8. `templates/runs/RUN_MANIFEST_TEMPLATE.md`
9. `templates/runs/RUN_LOG_TEMPLATE.md`

Ardından mevcut:

10. `runs/README.md`
11. `runs/active/README.md`
12. `runs/completed/README.md`
13. `runs/failed/README.md`

dosyalarını tamamen incele.

Approved contracts authoritative kaynaktır.

---

# 2. Input Version Drift Fix

`inputs/` katmanında Approved canonical versioning standardı:

```text
v1
v2
v3
...
~~~

şeklindedir.

Metadata:

```yaml
input_version: "1"
input_version: "2"
input_version: "3"
```

şeklindedir.

Runs belgelerinde:

```text
v1.0
v1.1
v2.0
```

gibi semantic-version benzeri input version örnekleri kullanılmamalıdır.

------

# 3. Exact Approved Input Version

Run creation sırasında exact approved input şu biçimde çözülmelidir:

```text
inputs/approved/<project-slug>/vN/PROJECT_INPUT.md
```

Örnek:

```text
inputs/approved/example-project/v2/PROJECT_INPUT.md
```

Metadata:

```yaml
input_id: INPUT-EXAMPLE-PROJECT-V2
input_version: "2"
```

ile uyumlu olmalıdır.

------

# 4. Runs README Version Cleanup

`runs/README.md` içinde input version ile ilgili tüm örnekleri tara.

Şunları kaldır:

```text
v1.0
v1.1
v2.0
```

ve benzeri decimal/semantic version örnekleri.

Yerine:

```text
v1
v2
vN
```

kullan.

Output versioning ile input versioning’i birbirine karıştırma.

`output_version` kendi contract’ına göre ayrı kalabilir.

------

# 5. Completed Run Immutability Semantics

Mevcut `runs/completed/README.md` completed run için aşırı mutlak bir immutability kuralı tanımlıyor:

```text
hiçbir belge sonradan değiştirilemez
```

Ancak Approved Run Protocol:

```text
Completed → Invalidated
```

transition’ını destekler.

Ayrıca lifecycle status:

```text
RUN_MANIFEST.md
```

içinde tutulur.

Bu nedenle semantics şu şekilde düzeltilmelidir:

```text
Completed run execution evidence is immutable,
except for controlled engine-defined lifecycle annotations.
```

------

# 6. Immutable Execution Evidence

Completed run’ın generation sırasında oluşmuş historical evidence’ı yeniden yazılamaz.

Örneğin sonradan:

- INPUT_SNAPSHOT değiştirilemez
- PACKAGE_SELECTION değiştirilemez
- ASSUMPTIONS geçmişi yeniden yazılamaz
- CONFLICTS geçmişi silinemez
- DECISIONS yeniden oluşturulamaz
- VALIDATION_REPORT sonucu geçmişe dönük değiştirilemez
- working-output geçmişi yeni gerçeklik gibi rewrite edilemez
- COMPLETION_REPORT başarılı geçmişi yeniden uydurularak değiştirilemez

Historical generation evidence korunmalıdır.

------

# 7. Controlled Lifecycle Annotation

Ancak engine-defined lifecycle event’i oluşursa kontrollü metadata annotation yapılabilir.

Özellikle:

```text
Completed
→ Invalidated
```

durumunda:

```text
RUN_MANIFEST.md
```

üzerinde:

```yaml
status: Invalidated
```

gibi lifecycle metadata güncellemesi yapılabilir.

Ayrıca:

```text
RUN_LOG.md
```

içine append-only biçimde invalidation event’i eklenebilir.

Bu istisna historical generation evidence’ın rewrite edilmesi anlamına gelmez.

------

# 8. Append-Only Invalidation Record

Invalidation sırasında tercih edilen davranış:

```text
RUN_MANIFEST
→ lifecycle status annotation

RUN_LOG
→ new invalidation event append

existing execution evidence
→ unchanged
```

RUN_LOG eski event’leri rewrite etmemelidir.

Yeni event append edilir.

------

# 9. Invalidation Reason

Invalidation event minimum olarak kısa ve denetlenebilir biçimde şunları taşıyabilir:

```text
timestamp
event: Invalidated
reason
replacement_run_id [if known]
```

Yeni özel `INVALIDATION_REPORT.md` oluşturma.

------

# 10. Invalidated Physical Location

Invalidated completed run için yeni:

```text
runs/invalidated/
```

klasörü oluşturma.

Physical record:

```text
runs/completed/<run-id>/
```

altında kalabilir.

Manifest status:

```text
Invalidated
```

olarak authoritative lifecycle state’i gösterir.

------

# 11. Invalidated Output Boundary

Invalidated run’ın eski output artefact’ı historical version olarak varlığını sürdürebilir.

Ancak:

```text
outputs/.../latest/
```

invalidated run’a işaret etmemelidir.

Runs layer output structure’ı yeniden tasarlamasın.

Bu davranışı yalnız `engine/RUN_PROTOCOL.md` ve `engine/OUTPUT_STRUCTURE.md` ile uyumlu biçimde referans et.

------

# 12. Failed Semantics Fix

`runs/failed/README.md` içinde unresolved critical conflict doğrudan `Failed` sebebi gibi tanımlanmamalıdır.

Approved lifecycle davranışı:

```text
critical unresolved conflict
→ Blocked
```

durumudur.

------

# 13. Blocked ≠ Failed

`Blocked`:

```text
recoverable / waiting state
```

olabilir.

Örnek:

```text
critical conflict
missing required clarification
unresolved required information
```

Run:

```text
runs/active/<run-id>/
```

altında kalır.

Manifest:

```yaml
status: Blocked
```

olarak tutulur.

------

# 14. Failed Ne Zaman Kullanılır?

`Failed` yalnız engine-defined terminal failure durumlarında kullanılmalıdır.

Örnek:

```text
- unrecoverable technical failure
- unrecoverable generation failure
- validation retry limit sonrası FAIL
```

Approved `engine/RUN_PROTOCOL.md` hangi failure sebeplerini tanımlıyorsa onları kullan.

Yeni failure cause icat etme.

------

# 15. Conflict Sonrası Terminal Davranış

Bir critical conflict uzun süre çözülemiyorsa bile otomatik olarak `Failed` yapma.

Mümkün davranışlar engine contract’a göre:

```text
Blocked
→ resolved
→ Running
```

veya kullanıcı/operatör bilinçli biçimde sonlandırırsa:

```text
Blocked
→ Cancelled
```

olabilir.

`Cancelled` yine `Failed` değildir.

------

# 16. Failed README Cleanup

`runs/failed/README.md` içinde şu tür ifade varsa kaldır veya düzelt:

```text
Çözülemeyen kritik çelişki nedeniyle Failed
```

Yerine:

```text
Critical unresolved conflicts normally place the run in Blocked state.
A run becomes Failed only under engine-defined terminal failure conditions.
```

anlamını koruyan kısa açıklama kullan.

------

# 17. Cancelled Semantics'i Koru

Şu davranış değişmemelidir:

```text
Cancelled
!= Failed
```

Physical folder:

```text
runs/failed/<run-id>/
```

olabilir.

Ama Manifest:

```yaml
status: Cancelled
```

olarak kalmalıdır.

------

# 18. Active States'i Koru

Şu status’lar:

```text
Created
Initialized
Running
Blocked
Paused
Resumed
Validation
```

fiziksel olarak:

```text
runs/active/<run-id>/
```

altında kalmalıdır.

`Blocked` veya `Paused` için yeni top-level folder oluşturma.

------

# 19. Lifecycle Vocabulary'yi Değiştirme

Canonical status vocabulary:

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

korunmalıdır.

Yeni status oluşturma.

Mevcut status isimlerini rename etme.

------

# 20. RUN_MANIFEST / RUN_LOG Boundary

Fix sırasında şu ayrımı bozma:

```text
RUN_MANIFEST
→ current identity/state summary

RUN_LOG
→ chronological operational events
```

Invalidation için manifest status update yapılabilir.

Invalidation event RUN_LOG’a append edilir.

RUN_LOG manifest özeti haline getirilmemelidir.

------

# 21. Snapshot Immutability

Bu fix:

```text
INPUT_SNAPSHOT.md
```

immutability kuralını değiştirmemelidir.

Snapshot:

```text
always immutable after initialization
```

olarak kalır.

Invalidation bile snapshot’ı değiştirmez.

------

# 22. Completed Evidence vs Lifecycle Metadata

README’de bu ayrımı açıkça tanımla:

```text
Historical execution evidence
→ immutable

Lifecycle metadata / later annotations explicitly allowed by Run Protocol
→ controlled mutation / append-only event
```

Bu istisnayı genişletme.

Completed run’ı tekrar editable workspace’e dönüştürme.

------

# 23. Real Project Leakage

Tüm `runs/` klasörünü tara.

Reusable belgelerde gerçek proje veya şirket isimleri bulunmamalıdır.

Generic örnekler kullan:

```text
example-project
sample-app
RUN-20260101-001
```

------

# 24. Local Path Safety

Hiçbir reusable runs belgesinde:

```text
file:///
C:\Users\
/Users/name/
```

gibi local path olmamalıdır.

Repo-relative path kullan.

------

# 25. Model Independence

Fix sırasında model-specific instruction ekleme.

Şu isimler runtime behavior’a bağlanmamalıdır:

```text
Claude
Gemini
GPT
Codex
```

Private chain-of-thought kaydı isteme.

------

# 26. Scope Discipline

Bu görevde yalnızca gerekli `runs/` dosyalarını değiştir.

Beklenen değişiklikler çoğunlukla:

```text
runs/README.md
runs/completed/README.md
runs/failed/README.md
```

olmalıdır.

Gerekmedikçe `runs/active/README.md` değiştirme.

Şunları değiştirme:

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

# 27. Final Audit

Fix tamamlandıktan sonra şunları tek tek doğrula:

1. Runs belgelerinde `v1.0`, `v1.1`, `v2.0` gibi input version örnekleri kaldı mı? Kalmamalı.
2. Approved input path `vN/PROJECT_INPUT.md` standardıyla uyumlu mu?
3. `input_version` integer-like standardıyla uyumlu mu?
4. Output versioning yanlışlıkla değiştirilmiş mi? Değişmemeli.
5. Completed execution evidence immutable mı?
6. Completed run tamamen mutate edilemez gibi yanlış mutlak kural kaldı mı?
7. `Completed → Invalidated` transition destekleniyor mu?
8. Invalidation sırasında yalnız controlled lifecycle annotation yapılıyor mu?
9. RUN_LOG invalidation event’i append-only mı?
10. INPUT_SNAPSHOT invalidation sırasında değişiyor mu? Değişmemeli.
11. Invalidated run `runs/completed/` altında kalabiliyor mu?
12. Yeni `runs/invalidated/` klasörü oluşturuldu mu? Oluşturulmamalı.
13. Invalidated run `latest/` source olamıyor mu?
14. Critical unresolved conflict doğrudan Failed yapılıyor mu? Yapılmamalı.
15. Critical unresolved conflict normalde Blocked yapıyor mu?
16. Failed yalnız terminal engine-defined failure durumları için mi?
17. Blocked → Running recovery mümkün mü?
18. Blocked → Cancelled intentional closure semantics korunuyor mu?
19. Cancelled ≠ Failed kuralı korunuyor mu?
20. RUN_MANIFEST ≠ RUN_LOG ayrımı korunuyor mu?
21. Snapshot immutability korunuyor mu?
22. Real project leakage var mı?
23. Local machine path var mı?
24. Model-specific behavior var mı?
25. Yalnızca `runs/` değiştirildi mi?

------

# 28. Çalışma Sonu Raporu

## Değiştirilen Dosyalar

Gerçekten değiştirilen `runs/` dosyalarını listele.

## Input Version Alignment

Şunların artık canonical olduğunu doğrula:

```text
v1
v2
vN
```

ve:

```yaml
input_version: "1"
```

## Completed Immutability

Historical execution evidence’ın immutable kaldığını doğrula.

## Invalidation Semantics

Şunları doğrula:

```text
Completed → Invalidated
RUN_MANIFEST lifecycle annotation
RUN_LOG append-only invalidation event
historical evidence unchanged
```

## Failed / Blocked Ayrımı

Şunları doğrula:

```text
critical unresolved conflict → Blocked
terminal unrecoverable failure → Failed
intentional stop → Cancelled
```

## Korunan Kararlar

Şunları doğrula:

- active/completed/failed folder model
- canonical Run ID
- INPUT_SNAPSHOT immutability
- RUN_MANIFEST ≠ RUN_LOG
- Cancelled ≠ Failed
- working-output / outputs boundary
- canonical validation vocabulary
- no private CoT

## Sonuç

Şunlardan biriyle bitir:

```text
RUNS_FINAL_FIX_COMPLETE
```

veya:

```text
RUNS_FINAL_FIX_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.