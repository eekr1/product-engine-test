~~~md
# PROMPT_14_OUTPUTS_FINAL_FIX

Product Engine `outputs/` klasörü için final consistency fix turudur.

`engine/`, `packages/`, `templates/`, `inputs/` ve `runs/` Approved ve Closed durumdadır.

`outputs/` ana build tamamlanmıştır; bu görev yalnızca audit sırasında bulunan küçük semantic driftleri düzeltir.

Amaç `outputs/` mimarisini yeniden tasarlamak değildir.

Yalnızca aşağıdaki üç konuyu düzelt:

1. Publication sırasında `Completed` status wording circularity
2. `planning/OUTPUTS_FOLDER_SPEC.md` içindeki `OUTPUT_MANIFEST.md` yaklaşımı ile Approved engine runtime contract arasındaki authority conflict
3. Invalidated historical output sonrası fallback için validity source’un deterministik tanımlanması

Yalnızca `outputs/` klasöründe çalış.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `engine/OUTPUT_STRUCTURE.md`
3. `engine/RUN_PROTOCOL.md`
4. `engine/GENERATION_PIPELINE.md`
5. `engine/VALIDATION_RULES.md`
6. `engine/PACKAGE_RULES.md`
7. `planning/OUTPUTS_FOLDER_SPEC.md`
8. `runs/README.md`
9. `runs/completed/README.md`

Ardından mevcut:

10. `outputs/README.md`
11. `outputs/demos/README.md`
12. `outputs/products/README.md`

dosyalarını tamamen incele.

Approved engine/runtime contracts, planning önerileriyle çeliştiğinde runtime authority’dir.

---

# 2. Publication Circularity Fix

Mevcut `outputs/README.md` içinde:

```text
Final output yalnız başarılı Completed run tarafından publish edilir.
~~~

gibi wording varsa düzelt.

Bu ifade lifecycle açısından circularity yaratır.

Approved lifecycle:

```text
Validation
→ final publication
→ latest update
→ manifest finalization
→ Completed
```

şeklindedir.

Dolayısıyla publication anında run henüz terminal `Completed` durumuna geçmiş olmak zorunda değildir.

------

# 3. Canonical Publication Gate

Doğru semantics:

```text
Only runs that satisfy the successful completion gate may publish final output.
```

Yani run:

- required/applicable documents üretmiş,
- validation `PASS` veya approved `CONDITIONAL PASS` almış,
- output category resolve edilmiş,
- output version atanmış,
- finalization için uygun durumda

olmalıdır.

Publication başarılı olduktan ve run metadata tamamlandıktan sonra:

```text
status: Completed
```

olarak kapatılır.

------

# 4. Correct Lifecycle Wording

README içinde lifecycle şu anlamı taşımalıdır:

```text
Running
→ Validation
→ successful finalization eligibility
→ publish versioned output
→ update latest
→ finalize RUN_MANIFEST / COMPLETION_REPORT
→ Completed
```

Outputs layer lifecycle authority değildir.

Yalnız approved engine/run davranışını doğru şekilde referans eder.

------

# 5. Failed / Cancelled / Blocked / Paused Kuralını Koru

Aşağıdaki kurallar değişmemelidir:

```text
Failed
→ cannot publish

Cancelled
→ cannot publish

Blocked
→ cannot publish

Paused
→ cannot publish
```

Bunları publication circularity fix sırasında gevşetme.

------

# 6. OUTPUT_MANIFEST Authority Conflict

`planning/OUTPUTS_FOLDER_SPEC.md` eski/recommended yaklaşım olarak:

```text
OUTPUT_MANIFEST.md
```

öneriyor.

Ayrıca bazı planning bölümlerinde:

```text
Output manifest hazırlanmalıdır.
```

ifadesi bulunabilir.

Ancak Approved runtime engine contract:

```text
engine/OUTPUT_STRUCTURE.md
engine/RUN_PROTOCOL.md
```

traceability için:

```text
RUN_MANIFEST.md
output_version
output_ref
source run
```

mekanizmasını kullanır.

Approved runtime contract bu build için authoritative’dir.

------

# 7. Runtime Decision

V0 runtime outputs layer için:

```text
OUTPUT_MANIFEST.md
VERSION_MANIFEST.md
OUTPUT_METADATA.json
```

oluşturma.

Yeni output-level metadata authority sistemi ekleme.

Canonical traceability:

```text
RUN_MANIFEST.md
→ output_version
→ output_ref
```

üzerinden sağlanır.

------

# 8. Planning Conflict'i Açıkça Belgele

`outputs/README.md` içinde kısa bir authority clarification ekle.

Anlamı şu olmalıdır:

```text
planning/OUTPUTS_FOLDER_SPEC.md içindeki OUTPUT_MANIFEST yaklaşımı
build-time planning önerisidir.

Approved runtime contract traceability authority'si RUN_MANIFEST.md'dir.

Bu nedenle V0 outputs layer duplicate OUTPUT_MANIFEST oluşturmaz.
```

Bu açıklama kısa olsun.

Planning belgesini bu tur değiştirme.

------

# 9. Planning'i Override Etme Biçimi

Planning dosyasını “yanlış” ilan etme.

Doğru ifade:

```text
Planning recommendation exists,
but Approved engine/runtime contract takes precedence for V0 execution.
```

Bu authority modelini koru.

------

# 10. No Duplicate Metadata System

Outputs katmanı aşağıdakileri oluşturmasın:

```text
OUTPUT_MANIFEST.md
VERSION_MANIFEST.md
OUTPUT_METADATA.json
output-status.json
latest-manifest.json
```

ve benzeri yeni metadata owner dosyaları.

------

# 11. Historical Output Validity Problem

`outputs/README.md` şu davranışı tanımlar:

```text
latest invalidated olursa
→ previous valid historical version'a fallback
```

Bu davranış doğrudur.

Ancak V0 outputs içinde ayrı status manifest olmadığı için:

```text
hangi historical version valid?
```

sorusu deterministik cevaplanmalıdır.

------

# 12. Validity Source

Historical output version validity’nin authority’si source run olmalıdır.

Canonical mapping:

```text
historical output path
→ source RUN_MANIFEST output_ref
→ source run lifecycle status
```

Örnek:

```text
outputs/products/example-project/versions/v0.2/
```

ile:

```text
runs/completed/<run-id>/RUN_MANIFEST.md
output_ref: outputs/products/example-project/versions/v0.2/
```

eşleşiyorsa bu run output’un source authority’sidir.

------

# 13. Valid Historical Output

Bir historical output version current-valid fallback adayı olabilir eğer source run:

```text
status: Completed
```

durumunda ve invalidated değilse.

------

# 14. Invalidated Historical Output

Source run:

```text
status: Invalidated
```

ise ilgili output version:

- history’de korunur,
- silinmez,
- mutate edilmez,
- `latest/` adayı olamaz.

Output version içine ayrıca:

```text
status: invalidated
```

yazmak zorunda değilsin.

Source run lifecycle authority yeterlidir.

------

# 15. Fallback Resolution

`latest/` source output invalidated olursa:

1. Current latest artık invalidated version’ı temsil etmeyi bırakır.
2. Aynı project/category altındaki historical version’lar değerlendirilir.
3. Her version’ın source run’ı `output_ref` üzerinden resolve edilir.
4. Source run status’u `Completed` olan ve `Invalidated` olmayan en yüksek geçerli version seçilir.
5. `latest/` bu version’ın clean view’ına güncellenir.
6. Hiç valid version yoksa `latest/` current-unavailable state’e geçer.

------

# 16. No New Validity Database

Bu çözüm sırasında:

```text
output-validity.json
version-index.json
OUTPUT_MANIFEST.md
status registry
```

gibi yeni state sistemi oluşturma.

Existing run traceability yeterlidir.

------

# 17. output_ref Exactness

`RUN_MANIFEST.md` içindeki:

```text
output_ref
```

exact repo-relative historical version path göstermelidir.

Örnek:

```text
outputs/products/example-project/versions/v0.3/
```

`latest/` path’ini canonical output_ref olarak kullanma.

History authority `versions/` path’tir.

------

# 18. latest Is Derived View

Bu fix sonrası `latest/` semantics açık olmalıdır:

```text
latest/
→ derived current valid view
```

History:

```text
versions/
→ immutable source deliverables
```

Validity:

```text
source run lifecycle status
→ authoritative validity evidence
```

------

# 19. Historical Immutability

Validity resolution sırasında historical output version mutate edilmemelidir.

Örneğin source run Invalidated olduğunda:

```text
versions/v0.2/
```

içine:

```text
INVALIDATED.txt
status.md
manifest update
```

ekleme.

Historical deliverable aynen korunur.

------

# 20. Controlled Run Annotation Boundary

Invalidation state runs layer’da tutulur.

Outputs layer:

```text
source run status
```

okur ve `latest/` davranışını buna göre değiştirir.

Outputs layer run status’u yazmaz.

------

# 21. Category README Wording Check

`outputs/demos/README.md` ve `outputs/products/README.md` içinde publication ile ilgili:

```text
only Completed runs publish
```

gibi circular wording varsa aynı semantics ile düzelt.

Ama gereksiz değişiklik yapma.

------

# 22. Category ≠ Delivery Profile

Fix sırasında şu karar değişmemelidir:

```text
demos ≠ Prototype only
products ≠ Production Ready only
```

Category resolution package/runtime contract’a aittir.

------

# 23. Output Versioning'i Değiştirme

Output version examples:

```text
v0.1
v0.2
v1.0
```

Approved engine/planning contract ile uyumludur.

Input versioning ile karıştırma.

Bu tur output version formatını yeniden tasarlama.

------

# 24. Working Output Boundary

Şu sınır değişmemelidir:

```text
runs/active/<run-id>/working-output/
→ draft / repair / validation workspace

outputs/<category>/<project-slug>/versions/<output-version>/
→ validated clean deliverable
```

------

# 25. Run Artefact Leakage

Şunlar final output’a hâlâ sızmamalıdır:

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
```

Traceability var diye RUN_MANIFEST’i output içine kopyalama.

------

# 26. Cleanliness Rules

Şunlar korunmalıdır:

- unresolved placeholder yok
- template instruction leakage yok
- secret yok
- machine-local path yok
- private CoT yok
- real project leakage yok

------

# 27. Scope Discipline

Bu görev sırasında yalnız gerekli:

```text
outputs/README.md
outputs/demos/README.md
outputs/products/README.md
```

dosyalarını değiştir.

Gerek yoksa category README’lerine dokunma.

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

# 28. Final Audit

Fix bittikten sonra tek tek doğrula:

1. Publication için run’ın önceden `Completed` olması gerektiğini söyleyen circular ifade kaldı mı? Kalmamalı.
2. Publication successful-completion gate’e bağlı mı?
3. Publication sonrası run `Completed` olarak kapanıyor mu?
4. Failed publish yapabiliyor mu? Yapamamalı.
5. Cancelled publish yapabiliyor mu? Yapamamalı.
6. Blocked publish yapabiliyor mu? Yapamamalı.
7. Paused publish yapabiliyor mu? Yapamamalı.
8. `OUTPUT_MANIFEST.md` runtime requirement olarak kaldı mı? Kalmamalı.
9. Duplicate output metadata system oluştu mu? Oluşmamalı.
10. Planning vs runtime authority farkı README’de açık mı?
11. RUN_MANIFEST traceability authority olarak tanımlı mı?
12. `output_ref` historical `versions/` path’e mi işaret ediyor?
13. Historical output validity source run status üzerinden çözülebiliyor mu?
14. Invalidated source run’ın output’u history’de kalıyor mu?
15. Invalidated output `latest/` adayı olabiliyor mu? Olamamalı.
16. Fallback valid historical version’ı deterministic bulabiliyor mu?
17. Hiç valid version yoksa current-unavailable davranışı açık mı?
18. Historical output mutate ediliyor mu? Edilmemeli.
19. `latest/` derived view olarak mı tanımlı?
20. Version history `versions/` owner mı?
21. Outputs layer run status yazıyor mu? Yazmamalı.
22. Output versioning standardı yanlışlıkla değişti mi? Değişmemeli.
23. Working-output/final-output sınırı korunuyor mu?
24. Run artefacts final output’a sızıyor mu? Sızmamalı.
25. Yalnızca `outputs/` değiştirildi mi?

------

# 29. Çalışma Sonu Raporu

## Değiştirilen Dosyalar

Gerçekten değiştirilen `outputs/` dosyalarını listele.

## Publication Lifecycle

Şu akışı doğrula:

```text
Validation success
→ publication eligibility
→ versioned output publish
→ latest update
→ run finalization
→ Completed
```

## Traceability Authority

Şunu doğrula:

```text
RUN_MANIFEST
→ output_version
→ output_ref
```

ve V0’da duplicate `OUTPUT_MANIFEST.md` oluşturulmadığını belirt.

## Planning Conflict Resolution

Planning’deki manifest önerisinin neden runtime authority olmadığını kısa açıkla.

## Historical Validity

Şunu doğrula:

```text
historical version
→ source run via output_ref
→ source run status
→ valid / invalidated determination
```

## Invalidation Fallback

Şunları doğrula:

```text
invalidated version preserved
latest no longer represents it
highest remaining valid version may become latest
no valid version → current unavailable
```

## Korunan Kararlar

Şunları doğrula:

- demos/products only
- latest/ vs versions/
- historical immutability
- Failed/Cancelled publish ban
- working-output boundary
- category ≠ delivery profile
- no run artefact leakage
- no duplicate metadata system

## Sonuç

Şunlardan biriyle bitir:

```text
OUTPUTS_FINAL_FIX_COMPLETE
```

veya:

```text
OUTPUTS_FINAL_FIX_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.