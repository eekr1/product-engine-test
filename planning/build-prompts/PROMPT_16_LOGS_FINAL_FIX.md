~~~md
# PROMPT_16_LOGS_FINAL_FIX

Product Engine `logs/` klasörü için final consistency fix turudur.

`engine/`, `packages/`, `templates/`, `inputs/`, `runs/` ve `outputs/` Approved ve Closed durumdadır.

`logs/` ana build tamamlanmıştır; bu görev yalnızca audit sırasında bulunan küçük semantic driftleri düzeltir.

Amaç `logs/` mimarisini yeniden tasarlamak değildir.

Yalnızca aşağıdaki dört konuyu düzelt:

1. `ISSUES.md` schema içinde owner + engine version + change ID + validation run ayrımı
2. `ISSUES.md` lifecycle içinde `Implemented — Awaiting Validation` ara durumu
3. `IMPROVEMENTS.md` schema içinde version + change ID + validation run ayrımı
4. `RUN_INDEX.md` validation ve package vocabulary hizalaması

Yalnızca `logs/` klasöründe çalış.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/LOGS_FOLDER_SPEC.md`
3. `engine/RUN_PROTOCOL.md`
4. `engine/VALIDATION_RULES.md`
5. `engine/PACKAGE_RULES.md`
6. `logs/README.md`
7. `logs/ENGINE_CHANGELOG.md`
8. `logs/RUN_INDEX.md`
9. `logs/ISSUES.md`
10. `logs/IMPROVEMENTS.md`

Approved runtime contracts authoritative kaynaktır.

Planning minimum schema ve lifecycle beklentilerini koru.

---

# 2. ISSUES Schema Ayrımı

Mevcut `ISSUES.md` içinde engine version ile changelog Change ID aynı alan içinde tutulmamalıdır.

Şu tip alan yanlış/ambiguous kabul edilir:

```text
Resolved in Version: <PE-CHANGE-XXX | Pending>
~~~

Çünkü:

```text
engine version
!=
PE-CHANGE ID
```

------

# 3. Canonical ISSUES Fields

Issue schema minimum olarak şu ayrımı taşımalıdır:

```text
Issue ID
Status
Severity
Category
Owner
First Seen
Last Seen
Related Runs
Resolved in Version
Related Change
Validation Run
```

Örnek semantics:

```text
Resolved in Version
→ 0.2 / 1.0 / not_assigned

Related Change
→ PE-CHANGE-003

Validation Run
→ RUN-20260101-001 | None
```

------

# 4. Owner Field

Planning spec’te yer alan:

```text
owner
```

alanını issue schema’ya geri ekle.

Owner model-specific olmamalıdır.

Örnek:

```text
Owner: unassigned
Owner: engine maintainer
Owner: review agent
```

Belirli model adı hardcode etme.

------

# 5. Issue Version Semantics

`Resolved in Version` yalnız engine version bilgisini taşımalıdır.

Örnek:

```text
Resolved in Version: not_assigned
```

veya gerçek version authority oluşturulduktan sonra:

```text
Resolved in Version: 0.2
```

Buraya:

```text
PE-CHANGE-003
```

yazma.

------

# 6. Issue Change Reference

Issue çözümünün changelog bağlantısı ayrı alanda tutulmalıdır:

```text
Related Change: PE-CHANGE-003
```

Henüz yoksa:

```text
Related Change: Pending
```

veya planning contract’a uygun nötr değer kullan.

------

# 7. Issue Validation Run

Issue gerçekten doğrulanarak kapanıyorsa validation evidence ayrı tutulmalıdır:

```text
Validation Run: RUN-20260101-001
```

Doğrulama run’ı yoksa:

```text
Validation Run: None
```

Run detaylarını issue içine kopyalama.

Sadece reference ver.

------

# 8. Implemented — Awaiting Validation

Planning lifecycle şu ara state’e izin verir:

```text
Implemented — Awaiting Validation
```

Bu state şu durumda kullanılır:

```text
fix applied
but
verification not completed
```

Issue henüz `Resolved` değildir.

------

# 9. Issue Status Vocabulary

Canonical issue status seti aşağıdaki değerleri desteklemelidir:

```text
Open
Investigating
Planned
In Progress
Blocked
Implemented — Awaiting Validation
Resolved
Won't Fix
Duplicate
Invalid
```

Existing wording’de curly apostrophe gibi farklı karakter varsa sade:

```text
Won't Fix
```

kullan.

------

# 10. Resolved Gate

Issue yalnız şu şartlar sağlandığında `Resolved` yapılmalıdır:

```text
fix implemented
+
relevant docs/contracts updated
+
related changelog entry created
+
validation performed where applicable
+
issue no longer reproduces
```

Validation henüz yoksa:

```text
Implemented — Awaiting Validation
```

kullan.

------

# 11. ISSUES Initial State

Initial neutral state’i bozma.

Fake issue oluşturma.

Mevcut sayaçlar 0 ise 0 kalabilir.

Schema correction historical data üretme gerektirmez.

------

# 12. IMPROVEMENTS Schema Ayrımı

Mevcut improvement schema içinde şu tip ambiguous alan varsa düzelt:

```text
Implemented in Version: <PE-CHANGE-XXX | Pending>
```

Engine version ile Change ID aynı kavram değildir.

------

# 13. Canonical IMPROVEMENT Fields

Minimum alanlar şu ayrımı taşımalıdır:

```text
Improvement ID
Status
Priority
Category
Cost / Complexity
Dependencies
Related Issues
Implemented in Version
Related Change
Validation Run
```

------

# 14. Implemented in Version

Bu alan yalnız engine version taşır:

```text
Implemented in Version: not_assigned
```

veya:

```text
Implemented in Version: 0.3
```

Buraya `PE-CHANGE-...` yazma.

------

# 15. Related Change

Implemented improvement changelog kaydına ayrı bağlanmalıdır:

```text
Related Change: PE-CHANGE-005
```

Henüz uygulanmadıysa:

```text
Related Change: Pending
```

------

# 16. Validation Run

Improvement uygulanıp validation run ile doğrulandıysa:

```text
Validation Run: RUN-20260101-002
```

kullan.

Validation gerekmiyorsa:

```text
Validation Run: None
```

------

# 17. Related Issues Plural

Improvement birden fazla issue ile ilişkili olabilir.

Bu nedenle:

```text
Related Issue
```

yerine:

```text
Related Issues
```

kullan.

Örnek:

```text
Related Issues: ISSUE-002, ISSUE-005
```

veya:

```text
Related Issues: None
```

------

# 18. Improvement Status Vocabulary

Existing improvement status vocabulary korunmalıdır:

```text
Idea
Backlog
Evaluating
Planned
In Progress
Implemented
Rejected
Deferred
```

Yeni status icat etme.

------

# 19. Improvement Implemented Gate

Bir improvement `Implemented` olduğunda mümkünse:

```text
Implemented in Version
Related Change
Validation Run
```

alanları doldurulmalıdır.

Historical record silinmez.

------

# 20. RUN_INDEX Validation Vocabulary

Canonical validation result vocabulary:

```text
PASS
CONDITIONAL PASS
FAIL
```

şeklindedir.

`Pending` canonical validation result değildir.

------

# 21. Not-Yet-Validated State

Validation henüz gerçekleşmediyse `Validation` kolonunda result olmayan nötr state kullan.

Tercihen:

```text
N/A
```

veya planning/runtime contract’ın izin verdiği eşdeğer ifade.

Şunu kullanma:

```text
Pending
```

çünkü result vocabulary ile karışır.

------

# 22. RUN_INDEX Validation Column Semantics

Validation kolonunun anlamı:

```text
PASS
CONDITIONAL PASS
FAIL
N/A
```

olarak tanımlanabilir.

Burada:

```text
N/A
```

validation henüz sonuçlanmadığını / applicable result bulunmadığını ifade eden nötr index değeridir.

Canonical validation result setini genişletmiş sayılmaz.

------

# 23. Package Column Canonical IDs

RUN_INDEX `Package` kolonunda display-name yerine canonical package ID kullan.

Canonical package IDs:

```text
demo-frontend
corporate-website
saas
existing-project
api-service
```

Örnek olarak:

```text
corporate-website
```

kullan.

Şunları canonical value gibi kullanma:

```text
Corporate Website
SaaS Product
```

------

# 24. Profile Vocabulary

Delivery Profile değerlerini değiştirme:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

------

# 25. Run Status Vocabulary

Şunları değiştirme:

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

Yeni run status üretme.

------

# 26. RUN_INDEX Authority

`RUN_INDEX.md` secondary index olarak kalmalıdır.

Source of truth:

```text
runs/<location>/<run-id>/RUN_MANIFEST.md
```

olmalıdır.

Bu fix sırasında index’i authority haline getirme.

------

# 27. No Fake Entries

Bu fix sırasında:

- fake issue
- fake improvement
- fake run
- fake changelog
- fake engine version

oluşturma.

Sadece schema ve rules düzelt.

------

# 28. ENGINE_CHANGELOG

`ENGINE_CHANGELOG.md` ana build doğruysa gereksiz yere değiştirme.

Sadece ISSUES/IMPROVEMENTS referans semantics’i açıklamak için gerçekten ihtiyaç varsa dokun.

Yeni changelog entry oluşturma.

Bu fix commitinin kendisini changelog’a otomatik ekleme.

------

# 29. README Alignment

`logs/README.md` içinde:

- issue resolution
- improvement implementation
- RUN_INDEX vocabulary

hakkında yeni schema ile çelişen ifade varsa minimum düzeyde hizala.

README’yi yeniden yazma.

------

# 30. Security / Neutrality

Şunları koru:

```text
no private chain-of-thought
no secrets
no credentials
no local machine paths
no real project/customer data
no model lock-in
```

------

# 31. Scope Discipline

Bu görev sırasında yalnız gerekli:

```text
logs/README.md
logs/RUN_INDEX.md
logs/ISSUES.md
logs/IMPROVEMENTS.md
```

dosyalarını değiştir.

`logs/ENGINE_CHANGELOG.md` yalnız gerçekten consistency ihtiyacı varsa değiştirilebilir.

Şunlara dokunma:

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

Kök `PROMPT_16_LOGS_FINAL_FIX.md` task artefact’ının committe bulunması normaldir.

------

# 32. Final Audit

Fix bittikten sonra şunları tek tek doğrula:

1. ISSUE schema’da `Owner` var mı?
2. `Resolved in Version` yalnız engine version mı taşıyor?
3. `Related Change` ayrı mı?
4. `Validation Run` ayrı mı?
5. `Implemented — Awaiting Validation` status’u var mı?
6. Issue erken `Resolved` yapılabiliyor mu? Yapılmamalı.
7. Improvement `Implemented in Version` yalnız engine version mı?
8. Improvement `Related Change` ayrı mı?
9. Improvement `Validation Run` ayrı mı?
10. `Related Issues` plural mı?
11. RUN_INDEX validation canonical results PASS/CONDITIONAL PASS/FAIL olarak korunuyor mu?
12. Not-yet-validated state `Pending` yerine nötr index value mı?
13. Package kolonunda canonical package ID kullanılıyor mu?
14. Profile vocabulary değişmedi mi?
15. Run status vocabulary değişmedi mi?
16. RUN_INDEX secondary index kalıyor mu?
17. Fake records oluşturuldu mu? Oluşturulmamalı.
18. ENGINE_CHANGELOG'a bu fix için sahte entry eklendi mi? Eklenmemeli.
19. Private CoT / secret / local path / real-project leakage var mı? Olmamalı.
20. Yalnız `logs/` değiştirildi mi?

------

# 33. Çalışma Sonu Raporu

## Değiştirilen Dosyalar

Gerçekten değiştirilen `logs/` dosyalarını listele.

## ISSUES Schema

Şunları doğrula:

```text
Owner
Resolved in Version
Related Change
Validation Run
```

ve:

```text
Implemented — Awaiting Validation
```

lifecycle state’ini açıkla.

## IMPROVEMENTS Schema

Şunları doğrula:

```text
Related Issues
Implemented in Version
Related Change
Validation Run
```

## RUN_INDEX Vocabulary

Şunları doğrula:

```text
Validation:
PASS
CONDITIONAL PASS
FAIL
N/A
```

ve Package kolonunun canonical package ID kullandığını belirt.

## Korunan Kararlar

Şunları doğrula:

- runs ≠ logs
- RUN_INDEX secondary index
- RUN_MANIFEST authority
- issue ≠ improvement
- append-oriented history
- no fake history/version/run
- no private CoT
- no secrets/local paths
- model-independent

## Sonuç

Şunlardan biriyle bitir:

```text
LOGS_FINAL_FIX_COMPLETE
```

veya:

```text
LOGS_FINAL_FIX_BLOCKED
```

Blocked ise yalnız gerçek engeli açıkla.