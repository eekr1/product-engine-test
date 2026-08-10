~~~md
# PROMPT_15_LOGS_BUILD

Product Engine’in `logs/` build aşamasıdır.

`engine/`, `packages/`, `templates/`, `inputs/`, `runs/` ve `outputs/` Approved ve Closed durumdadır.

Bu görevde yalnızca `logs/` klasörünü Product Engine’in kalıcı sistem hafızası, değişiklik geçmişi ve engine-level öğrenme katmanı olarak inşa et.

Amaç yalnızca birkaç markdown dosyası oluşturmak değildir.

`logs/` şu sorulara deterministik cevap verebilmelidir:

- Product Engine’de hangi kalıcı değişiklikler yapıldı?
- Değişiklik neden yapıldı?
- Hangi alanları etkiledi?
- Hangi run’lar gerçekleştirildi?
- Run’ların üst seviye sonuçları neydi?
- Hangi sistemsel problemler tespit edildi?
- Hangi problemler çözüldü?
- Hangi geliştirme fikirleri henüz uygulanmadı?
- Hangi engine-level öğrenmeler kalıcı hale geldi?
- Run geçmişi ile engine hafızası nasıl ayrılıyor?

Yeni Product Engine mimarisi tasarlama.

Approved runtime contract’ları değiştirme.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/LOGS_FOLDER_SPEC.md`

Ardından:

5. `engine/README.md`
6. `engine/RUN_PROTOCOL.md`
7. `engine/VALIDATION_RULES.md`
8. `engine/CONFLICT_RESOLUTION.md`
9. `engine/GENERATION_PIPELINE.md`

Ardından:

10. `runs/README.md`
11. `runs/completed/README.md`
12. `runs/failed/README.md`
13. `outputs/README.md`

Son olarak mevcut:

14. `logs/README.md`

ve `logs/` altında var olan diğer dosyaları incele.

Approved runtime belgeleri ile planning önerileri çelişirse Approved runtime davranışını koru.

---

# 2. Logs Katmanının Temel Rolü

Canonical ayrım:

```text
runs/
→ Belirli bir execution sırasında ne oldu?

logs/
→ Bu execution’lardan ve engine değişikliklerinden kalıcı olarak ne öğrendik?
~~~

`logs/` persistent engine-level memory katmanıdır.

------

# 3. Kapsam Dışı

`logs/` aşağıdakilerin ana sahibi değildir:

```text
- tek run'ın kronolojik ayrıntılı geçmişi
- INPUT_SNAPSHOT
- PACKAGE_SELECTION
- SOURCE_REGISTER
- ASSUMPTIONS run kayıtları
- CONFLICTS run kayıtları
- RUN_LOG
- PROGRESS
- VALIDATION_REPORT
- working-output
- final project outputs
- project-specific architecture decisions
- template içerikleri
- private chain-of-thought
```

Bunları logs içine kopyalama.

------

# 4. Canonical Folder Structure

V0 canonical structure:

```text
logs/
├── README.md
├── ENGINE_CHANGELOG.md
├── RUN_INDEX.md
├── ISSUES.md
└── IMPROVEMENTS.md
```

Bu build sırasında yeni top-level log file oluşturma.

Özellikle şunları oluşturma:

```text
RELEASE_NOTES.md
KNOWN_LIMITATIONS.md
METRICS.md
LESSONS.md
MEMORY.md
DAILY_LOG.md
```

Planning gelecekte bunları değerlendirebilir ancak V0’da gerekmez.

------

# 5. README Responsibility

`logs/README.md` logs katmanının authoritative kullanım rehberi olmalıdır.

Minimum olarak açıklamalıdır:

- logs amacı
- runs/logs ayrımı
- ENGINE_CHANGELOG görevi
- RUN_INDEX görevi
- ISSUES görevi
- IMPROVEMENTS görevi
- kayıt ekleme kriterleri
- çözülmüş kayıtların nasıl korunacağı
- duplication yasağı
- run detail leakage yasağı
- project-specific content yasağı
- private CoT yasağı

------

# 6. ENGINE_CHANGELOG Responsibility

`ENGINE_CHANGELOG.md` şu sorunun sahibidir:

```text
Product Engine'in kendisinde hangi kalıcı değişiklikler yapıldı?
```

Kaydedilecek alanlar örneğin:

```text
engine/
packages/
templates/
inputs/
runs/
outputs/
logs/
folder architecture
naming
versioning
validation behavior
authority rules
```

------

# 7. Changelog'a Girmesi Gereken Değişiklikler

Şunlar changelog-worthy olabilir:

```text
- yeni engine contract
- contract responsibility değişikliği
- package davranışı değişikliği
- template standardı değişikliği
- placeholder standardı değişikliği
- input lifecycle değişikliği
- run lifecycle değişikliği
- output structure değişikliği
- validation semantics değişikliği
- authority/read-order değişikliği
- naming/versioning rule değişikliği
- deprecated/removed behavior
- backward compatibility etkileyen değişiklik
```

------

# 8. Changelog'a Girmemesi Gerekenler

Normalde şunları kaydetme:

```text
- typo fix
- whitespace / formatting
- küçük wording düzenlemesi
- tek projeye özgü karar
- run-specific assumption
- temporary conflict
- her commit
- her prompt dosyası
```

Logs git history'nin kopyası değildir.

------

# 9. Changelog Entry Structure

Her changelog kaydı mümkün olduğunca şu alanları taşımalıdır:

```text
change_id
date
version
change_type
affected_area
summary
reason
impact
breaking_change
related_issue
related_run
```

------

# 10. Change ID

Canonical stable ID format:

```text
PE-CHANGE-<NNN>
```

Örnek:

```text
PE-CHANGE-001
PE-CHANGE-002
```

ID bir kez verildiğinde değiştirilmez.

------

# 11. Change Types

Canonical changelog type vocabulary:

```text
Added
Changed
Fixed
Deprecated
Removed
Security
Documentation
```

Yeni type icat etme.

Bir değişiklik birden fazla tipe uyuyorsa baskın type kullan.

------

# 12. Engine Version Authority

Planning spec şu authority modelini tanımlar:

```text
Root README
→ current active Product Engine version authority

logs/ENGINE_CHANGELOG.md
→ version history authority
```

Ancak mevcut root `README.md` içinde henüz kullanılabilir bir engine version değeri bulunmuyorsa logs build sırasında engine version uydurma.

Root README bu görev scope’u dışındadır.

Bu durumda:

```text
version: not_assigned
```

veya planning contract’ın izin verdiği nötr ifade kullanılabilir.

Yeni authoritative version değeri invent etme.

------

# 13. No Fake Historical Changelog

Build sırasında geçmiş commitlerden geriye dönük 20 adet changelog entry uydurma.

`ENGINE_CHANGELOG.md` reusable structure ve başlangıç durumu sağlamalıdır.

Eğer existing history authoritative şekilde çıkarılabiliyorsa yalnız açık ve doğrulanmış engine-level milestone kayıtları kullanılabilir.

Şüpheli geçmiş detayları ekleme.

------

# 14. RUN_INDEX Responsibility

`RUN_INDEX.md` şu sorunun sahibidir:

```text
Hangi Product Engine run'ları gerçekleşti ve üst seviye sonuçları neydi?
```

Run Index:

- hızlı görünüm sağlar,
- run klasörlerinin yerine geçmez,
- detailed history değildir.

------

# 15. Run Index Recommended Fields

Canonical üst seviye alanlar:

```text
Run ID
Project Slug
Package
Profile
Status
Validation
Date
Output Ref
Note
```

Planning’de farklı eski alan/örnek varsa Approved run contract ile hizala.

------

# 16. Canonical Run Status Vocabulary

Run Index status değerleri `RUN_PROTOCOL.md` ile uyumlu olmalıdır:

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

`Active`, `Success`, `Done`, `Error` gibi yeni lifecycle status’ları canonical status yerine kullanma.

------

# 17. RUN_INDEX Source of Truth

Run Index bir secondary index’tir.

Authoritative source:

```text
runs/<location>/<run-id>/RUN_MANIFEST.md
```

olmalıdır.

RUN_INDEX:

- manifest’i override etmez,
- status authority değildir,
- output authority değildir.

------

# 18. Run Index Update Rules

Run index entry:

```text
run created
→ optional initial index entry

run state changes
→ index summary may update

run terminal state
→ final summary update
```

Ama detailed event history RUN_LOG’da kalmalıdır.

------

# 19. Invalidated Run Index

Run invalidated olursa:

- index kaydı silinmez,
- status `Invalidated` olarak güncellenebilir,
- historical record korunur.

Invalidated run görünmez hale getirilmemelidir.

------

# 20. Failed / Cancelled Runs

Run Index yalnız successful run listesi değildir.

Şunlar da görünür kalmalıdır:

```text
Failed
Cancelled
Invalidated
```

Ancak failure detail birkaç kelimelik kısa summary olmalıdır.

Detay `runs/failed/<run-id>/` altında kalır.

------

# 21. No Real Run Example Leakage

Build sırasında gerçek proje/run verisini reusable logs belgelerine başlangıç verisi olarak doldurma.

Generic örnek gerekirse:

```text
RUN-20260101-001
example-project
demo-frontend
Prototype
```

kullan.

Gerçek company/project isimlerini taşıma.

------

# 22. ISSUES Responsibility

`ISSUES.md` şu sorunun sahibidir:

```text
Product Engine'de çözülmesi gereken hangi somut ve doğrulanabilir problemler var?
```

Issue:

- observed,
- reproducible veya verifiably real,
- engine quality’yi etkileyen,
- çözüm gerektiren

somut problem olmalıdır.

------

# 23. Issue ≠ Improvement

Ayrım:

```text
ISSUE
→ mevcut davranışta problem / defect / inconsistency

IMPROVEMENT
→ sistem çalışıyor ama daha iyi hale getirilebilir
```

Bu ayrımı kesin koru.

------

# 24. Issue Entry Structure

Her issue mümkün olduğunca şunları taşımalıdır:

```text
issue_id
status
severity
area
summary
evidence
impact
resolution
related_change
related_run
```

Planning spec farklı exact field set veriyorsa onu koru.

------

# 25. Issue ID

Stable format:

```text
ISSUE-<NNN>
```

Örnek:

```text
ISSUE-001
```

Bir ID yeniden kullanılmamalıdır.

------

# 26. Issue Status

Planning/approved contracts açık vocabulary veriyorsa onu kullan.

Açık vocabulary yoksa küçük ve kontrollü bir set kullan:

```text
Open
In Progress
Resolved
Accepted
```

Yeni karmaşık ticket workflow tasarlama.

------

# 27. Resolved Issues

Issue çözüldüğünde silinmemelidir.

Historical evidence korunmalıdır.

Örnek:

```text
status: Resolved
resolution: ...
related_change: PE-CHANGE-...
```

Bu sayede engine neden değişti geriye dönük görülebilir.

------

# 28. Issue Evidence

Issue entry:

- kısa evidence,
- ilgili repo/run reference,
- observed behavior

taşıyabilir.

Ancak RUN_LOG veya validation report’u logs içine kopyalama.

Repo-relative reference yeterlidir.

------

# 29. IMPROVEMENTS Responsibility

`IMPROVEMENTS.md` şu sorunun sahibidir:

```text
Product Engine gelecekte nasıl daha iyi hale getirilebilir?
```

Improvement bir bug olmak zorunda değildir.

Örnek alanlar:

```text
ergonomics
automation
clarity
performance
maintainability
new capability
developer experience
```

------

# 30. Improvement Entry Structure

Her improvement mümkün olduğunca:

```text
improvement_id
status
priority
area
summary
reason
expected_benefit
dependencies
related_issue
related_change
```

taşıyabilir.

Planning exact field set tanımlıyorsa ona uy.

------

# 31. Improvement ID

Stable format:

```text
IMPROVEMENT-<NNN>
```

Örnek:

```text
IMPROVEMENT-001
```

------

# 32. Improvement ≠ Commitment

IMPROVEMENTS backlog’dur.

Bir improvement kaydı:

```text
will definitely be implemented
```

anlamına gelmez.

Future possibility / candidate enhancement olabilir.

------

# 33. Implemented Improvement

Bir improvement uygulanırsa:

- kayıt silinmez,
- status güncellenir,
- ilgili changelog entry referanslanır.

History korunur.

------

# 34. Cross-References

Logs dosyaları birbirine reference verebilir:

```text
ISSUE-004
→ PE-CHANGE-012

IMPROVEMENT-003
→ PE-CHANGE-015

RUN-...
→ ISSUE-...
```

Ancak circular ownership oluşturma.

Authority:

```text
run truth
→ runs/

engine change history
→ ENGINE_CHANGELOG

problem lifecycle
→ ISSUES

future enhancement backlog
→ IMPROVEMENTS
```

------

# 35. No Duplicate Run History

`RUN_INDEX.md` içinde şunları tutma:

```text
all RUN_LOG events
all validation checks
all assumptions
all conflicts
all generated document details
```

Index compact kalmalıdır.

------

# 36. No Duplicate Changelog

Aynı engine-level değişikliği:

```text
ENGINE_CHANGELOG
ISSUES
IMPROVEMENTS
RUN_INDEX
```

içinde dört kez uzun uzun açıklama.

Her dosya kendi responsibility’sini taşır, diğerine reference verir.

------

# 37. Append-Oriented History

Historical log kayıtları mümkün olduğunca append-oriented olmalıdır.

Eski kayıt:

- sessizce silinmez,
- history rewrite edilmez,
- yeni bilgi gerektiğinde status/resolution gibi kontrollü alanlar güncellenebilir.

------

# 38. Current State vs History

Logs belgeleri hem current state hem history sunabilir ancak ayrım açık olmalıdır.

Örnek:

```text
Open Issues
Resolved Issues
```

veya status alanı.

Aynı problemi duplicate entry olarak yeniden açma.

------

# 39. Deduplication

Yeni issue/improvement eklenmeden önce existing kayıtlar kontrol edilmelidir.

Aynı konu zaten varsa:

```text
existing record update/reference
```

tercih edilir.

Yeni duplicate ID oluşturma.

------

# 40. Security / Sensitive Data

Logs içine şunları yazma:

```text
password
API secret
token
private key
credential
private user data
```

Secret-related incident varsa secret değeri değil olayın kendisi kaydedilir.

------

# 41. Local Path Safety

Logs içinde:

```text
file:///
C:\Users\
/Users/name/
```

gibi machine-specific path kullanma.

Repo-relative references kullan.

------

# 42. Private Chain-of-Thought

Logs private CoT içermez.

Saklanabilecekler:

```text
decision
observation
issue
resolution
impact
short rationale
evidence
```

Hidden reasoning / scratchpad kaydetme.

------

# 43. Agent Neutrality

Logs model bağımsız olmalıdır.

Runtime behavior’ı:

```text
Gemini
Claude
GPT
Codex
```

gibi belirli modele bağlama.

Gerekirse generic:

```text
execution agent
review agent
```

kullan.

------

# 44. No Real Project Leakage

Reusable logs build sırasında gerçek müşteri/proje isimleri kullanma.

Planning spec içinde geçmişten kalmış gerçek proje örnekleri varsa runtime log başlangıç verisine taşıma.

Generic examples kullan.

------

# 45. Existing Historical Engine Build

Bu repo’nun kendisini oluştururken yaptığımız folder build/fix commitlerini otomatik olarak RUN_INDEX’e Product Engine generation run’ı gibi ekleme.

Git commit:

```text
!= Product Engine runtime run
```

RUN_INDEX yalnız gerçek `runs/` execution’larını indeksler.

------

# 46. Prompt Files

Root’taki:

```text
PROMPT_XX_*.md
```

build orchestration artefact’larıdır.

Bunları ayrı changelog entry veya run entry olarak otomatik kaydetme.

Sadece engine behavior’da kalıcı değişikliğe yol açan approved sonuç önemlidir.

------

# 47. Initial File State

Bu build sonrası fiziksel yapı:

```text
logs/
├── README.md
├── ENGINE_CHANGELOG.md
├── RUN_INDEX.md
├── ISSUES.md
└── IMPROVEMENTS.md
```

olmalıdır.

Dosyalar boş tek başlık olarak bırakılmamalıdır.

Her biri reusable contract + boş başlangıç state’i içermelidir.

------

# 48. Initial RUN_INDEX

Gerçek Product Engine runtime run henüz kayıtlı değilse:

```text
No indexed runtime runs yet.
```

gibi nötr başlangıç state’i kullan.

Fake run oluşturma.

------

# 49. Initial ISSUES

Build sırasında doğrulanmamış issue uydurma.

Eğer active issue listesi authoritative biçimde mevcut değilse:

```text
No open engine issues recorded yet.
```

benzeri nötr state kullan.

Planning conflictlerini otomatik issue olarak kaydetme.

------

# 50. Initial IMPROVEMENTS

Build sırasında rastgele backlog doldurma.

Authoritative approved improvement yoksa nötr state kullan.

Bu klasörü "fikir çöplüğü" haline getirme.

------

# 51. Initial ENGINE_CHANGELOG

Engine history henüz resmi olarak versioned değilse fake semantic version veya fake history oluşturma.

Belge:

- format contract,
- entry rules,
- current neutral state

ile başlayabilir.

Version authority root README’de gerçek değer oluşana kadar bekleyebilir.

------

# 52. README Update Procedure

`logs/README.md` sade update procedure tanımlamalıdır:

```text
Engine-level change occurred
→ evaluate changelog-worthiness
→ update ENGINE_CHANGELOG if needed

Runtime run state changed
→ update RUN_INDEX summary

Verified engine defect discovered
→ create/update ISSUES

Enhancement candidate identified
→ create/update IMPROVEMENTS
```

------

# 53. Run Completion and Logs

Bir run tamamlandığında logs layer:

```text
RUN_INDEX summary update
```

yapabilir.

Ama run completion belgeleri:

```text
RUN_MANIFEST
COMPLETION_REPORT
VALIDATION_REPORT
```

runs altında kalır.

------

# 54. Failed Run and Logs

Failed run:

- RUN_INDEX’te görünür kalabilir,
- recurring/systemic engine issue tespit edildiyse ayrı ISSUE oluşturulabilir.

Her failed run otomatik ISSUE değildir.

------

# 55. Repeated Issue Promotion

Bir run-specific problem farklı run’larda tekrarlanıyorsa ve engine davranışına ait olduğu doğrulanıyorsa:

```text
run evidence
→ engine-level ISSUE
```

olarak promote edilebilir.

Bu promotion otomatik değildir; evidence gerekir.

------

# 56. Improvement Promotion

Bir run sırasında fark edilen enhancement:

```text
run observation
→ IMPROVEMENT candidate
```

olabilir.

Ancak her öneri otomatik improvement değildir.

Kalıcı engine-level relevance aranmalıdır.

------

# 57. Logs and Outputs Boundary

Logs final project output içine kopyalanmaz.

Final output:

```text
outputs/
```

yalnız temiz project deliverables taşır.

`ENGINE_CHANGELOG.md`, `RUN_INDEX.md`, `ISSUES.md`, `IMPROVEMENTS.md` project output değildir.

------

# 58. Scope Discipline

Bu görev sırasında yalnızca:

```text
logs/
```

altında çalış.

Değiştirme:

- `engine/`
- `packages/`
- `templates/`
- `inputs/`
- `runs/`
- `outputs/`
- `planning/`
- `examples/`
- `archive/`
- root README
- Product Engine Brain

Kök `PROMPT_15_LOGS_BUILD.md` task artefact’ının committe bulunması normaldir.

------

# 59. Final Audit

Build tamamlandıktan sonra tüm `logs/` klasörünü kontrol et.

Şunları doğrula:

1. Canonical 5 file var mı?
2. Yeni gereksiz log file oluşturuldu mu?
3. runs/logs ownership ayrımı açık mı?
4. ENGINE_CHANGELOG yalnız engine-level changes için mi?
5. Changelog git history kopyasına dönmüş mü?
6. Change ID stable mı?
7. Change type vocabulary kontrollü mü?
8. Fake engine version uydurulmuş mu?
9. Root README version authority korunuyor mu?
10. RUN_INDEX secondary index olarak mı tanımlı?
11. RUN_MANIFEST authority korunuyor mu?
12. Canonical run statuses kullanılıyor mu?
13. Failed/Cancelled/Invalidated run görünürlüğü korunuyor mu?
14. RUN_INDEX detailed RUN_LOG’a dönüşmüş mü?
15. ISSUES yalnız verified problem mi?
16. IMPROVEMENTS issue ile karışıyor mu?
17. Resolved issue history korunuyor mu?
18. Implemented improvement history korunuyor mu?
19. Duplicate issue/improvement önleniyor mu?
20. Cross-reference ownership açık mı?
21. Private CoT kaydı isteniyor mu?
22. Secret leakage engelleniyor mu?
23. Local paths engelleniyor mu?
24. Model independence korunuyor mu?
25. Real project/company leakage var mı?
26. Fake runtime run oluşturulmuş mu?
27. Git commits yanlışlıkla RUN_INDEX’e run olarak yazılmış mı?
28. Root prompt dosyaları log history’ye dönüştürülmüş mü?
29. Empty placeholder-only files var mı?
30. Yalnız `logs/` değiştirilmiş mi?

------

# 60. Çalışma Sonu Raporu

## Oluşturulan Logs Yapısı

Fiziksel ağacı göster.

## Ownership

Şunu doğrula:

```text
runs/
→ execution history

logs/
→ persistent engine memory
```

## ENGINE_CHANGELOG

Entry formatını ve changelog-worthiness kuralını özetle.

## RUN_INDEX

Secondary index olduğunu ve RUN_MANIFEST authority’sini doğrula.

## ISSUES

Verified defect lifecycle’ını açıkla.

## IMPROVEMENTS

Enhancement backlog sorumluluğunu açıkla.

## Initial State

Fake historical data/run/version oluşturulmadığını doğrula.

## Security / Portability

Şunları doğrula:

- no private CoT
- no secrets
- no local paths
- no model lock-in
- no real project leakage

## Scope

Yalnızca `logs/` değiştirildiğini doğrula.

## Sonuç

Şunlardan biriyle bitir:

```text
LOGS_BUILD_COMPLETE
```

veya:

```text
LOGS_BUILD_BLOCKED
```

Blocked ise yalnız gerçek engeli açıkla.