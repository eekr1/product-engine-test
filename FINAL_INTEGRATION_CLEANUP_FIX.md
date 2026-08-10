# Product Engine — Final Integration Cleanup Fix

Repo: `eekr1/product-engine-test`

Bu çalışma, `final audit` commit'i sonrasında yapılan son entegrasyon düzeltmesidir.

## Amaç

Final integration re-check sırasında kalan son sorunları kapatmak.

Bu çalışma yeni mimari tasarlamaz.
Yalnızca aşağıdaki açık kalan noktaları düzeltir:

1. Validation ile publication arasındaki kalan circular contract problemi
2. Geçici final-integration fix prompt klasörünün repository runtime yüzeyinden kaldırılması
3. `planning/BUILD_STATUS.md` durumunun gerçek repo durumuyla senkronizasyonu
4. İki küçük typo/cosmetic hata
5. Değişikliklerden sonra kısa final consistency check

---

# Önce Oku

Sırayla:

1. `README.md`
2. `PRODUCT_ENGINE_BRAIN.md`
3. `engine/GENERATION_PIPELINE.md`
4. `engine/VALIDATION_RULES.md`
5. `engine/OUTPUT_STRUCTURE.md`
6. `engine/RUN_PROTOCOL.md`
7. `runs/README.md`
8. `outputs/README.md`
9. `planning/BUILD_STATUS.md`
10. `planning/README.md`

Ardından mevcut repository root tree'yi incele.

---

# Görev 1 — Validation / Publication Circularity'yi Kapat

Mevcut canonical runtime flow:

```text
working-output complete
→ Validation
→ PASS veya accepted CONDITIONAL PASS
→ output_version allocation
→ versions/<output_version>/ publication
→ latest/ update
→ RUN_MANIFEST output_ref/output_version finalize
→ status: Completed
→ runs/completed/
```

Bu sıra korunacaktır.

## Problem

`engine/VALIDATION_RULES.md` validation input'unu `working output` olarak tanımlamasına rağmen Structure Validation içinde şunları kontrol ediyor:

```text
latest/ klasörü mevcut mu?
versions/ klasörü mevcut mu?
```

Bu yanlıştır.

Çünkü `latest/` ve `versions/` publication aşamasında, validation başarılı olduktan sonra oluşturulur/güncellenir.

## Yapılacak Düzeltme

`engine/VALIDATION_RULES.md` içindeki Structure Validation'ı **pre-publication working-output validation** olarak düzelt.

Validation aşamasında kontrol edilmesi gerekenler:

```text
- working-output doküman seti seçilen package ile uyumlu mu?
- gerekli/applicable dokümanlar mevcut mu?
- fazladan veya package dışı doküman var mı?
- dosya adları DOCUMENT_CATALOG.md / package contract ile uyumlu mu?
- working-output içinde final output'a sızmaması gereken runtime/temp dosyaları var mı?
```

Şunlar validation pre-publication kontrolünden çıkarılmalı:

```text
latest/ mevcut mu?
versions/ mevcut mu?
published version klasörü mevcut mu?
```

Bunlar publication/traceability sonrasında doğrulanabilecek operasyonel output kontrolleridir.

Yeni validation status oluşturma.

Yeni publication stage oluşturma.

Pipeline stage numaralarını değiştirme.

---

# Görev 2 — Publication Sonrası Kontrol Sınırını Netleştir

`engine/OUTPUT_STRUCTURE.md`, `engine/GENERATION_PIPELINE.md` ve gerekiyorsa `outputs/README.md` içinde mevcut doğru sequence'i koru.

Gerekirse küçük açıklama ekle:

```text
VALIDATION_RULES working-output'u publication öncesinde doğrular.

OUTPUT_STRUCTURE ise successful validation sonrasında published output fiziksel yapısını yönetir.
```

Ama aynı kuralları tekrar tekrar kopyalama.

Primary ownership:

```text
Pre-publication validation
→ engine/VALIDATION_RULES.md

Runtime stage order
→ engine/GENERATION_PIPELINE.md

Published output physical/version rules
→ engine/OUTPUT_STRUCTURE.md
```

---

# Görev 3 — Geçici Fix Prompt Klasörünü Repository'den Çıkar

Repository root'ta mevcut:

```text
Product_Engine_Final_Integration_Fix_Prompts/
```

klasörü final Product Engine runtime/build architecture'ının kalıcı parçası değildir.

Bu klasör yalnız integration fixlerini uygulamak için kullanılan geçici orchestration materyalidir.

## Yap

- `Product_Engine_Final_Integration_Fix_Prompts/` klasörünü repository'den kaldır.
- Bu klasöre verilen aktif/current repository navigation referanslarını kaldır.
- Root `README.md` Repository Map içinden kaldır.
- Root README Quick Navigation içindeki bu klasöre bağlı referansları kaldır.
- `planning/BUILD_STATUS.md` içindeki `FINAL_REAUDIT.md` path referansını bu geçici klasöre bağımlı olmayacak şekilde düzelt.

Bu promptları `archive/` veya `planning/` içine tekrar taşıma.

Git history zaten historical record'dur.

Mevcut `planning/build-prompts/` klasörünü değiştirme; o klasör Product Engine'in gerçek build-history katmanıdır.

---

# Görev 4 — BUILD_STATUS Senkronizasyonu

Validation circularity düzeltildikten ve geçici prompt klasörü kaldırıldıktan sonra `planning/BUILD_STATUS.md` güncellensin.

Final re-audit henüz bu çalışma sırasında yapılmıyorsa:

```text
Planning Phase               : Completed
Folder Builds                : Completed
Final Integration Audit      : Completed
Integration Fixes            : Completed
Final Re-Audit               : Pending
Overall Repository Status    : Ready for Final Re-Audit
```

kalabilir.

Ancak artık şunlar olmamalı:

```text
Product_Engine_Final_Integration_Fix_Prompts/FINAL_REAUDIT.md
```

gibi silinmiş geçici klasöre referans.

`BUILD_STATUS.md` runtime authority değildir; mevcut boundary korunmalı.

---

# Görev 5 — Cosmetic Fixler

## PRODUCT_ENGINE_BRAIN.md

Şunları düzelt:

```text
## Girdi Sebagai Ne Alır?
```

→

```text
## Girdi Olarak Ne Alır?
```

ve:

```text
## Çıktı Sebagai Ne Verir?
```

→

```text
## Çıktı Olarak Ne Verir?
```

## README.md

Repository Map içinde:

```text
Çalıma zamanı
```

varsa:

```text
Çalışma zamanı
```

olarak düzelt.

Başka agresif language rewrite yapma.

---

# Görev 6 — Son Consistency Search

Değişikliklerden sonra repo-wide ara:

```text
Product_Engine_Final_Integration_Fix_Prompts
Girdi Sebagai
Çıktı Sebagai
Çalıma zamanı
latest/ klasörü mevcut mu?
versions/ klasörü mevcut mu?
```

Her eşleşmeyi bağlamına göre değerlendir.

Beklenti:

- geçici fix prompt klasörüne active/current referans kalmaması
- Brain typosunun kalmaması
- README typo kalmaması
- VALIDATION_RULES pre-publication aşamasında `latest/` / `versions/` existence istememesi

Ayrıca:

```text
git diff --check
```

çalıştır.

Broken repo-relative link bırakma.

---

# Scope Dışı

Bu çalışmada:

- package matrices değiştirme
- templates değiştirme
- examples değiştirme
- input lifecycle değiştirme
- run status vocabulary değiştirme
- output version algorithm değiştirme
- archive yapısını değiştirme
- planning/build-prompts klasörünü değiştirme
- yeni top-level klasör oluşturma
- yeni registry/manifest/status sistemi ekleme

YAPMA.

---

# Başarı Kriteri

Bu çalışma başarılıdır yalnızca:

1. Validation artık working-output'u pre-publication doğruluyorsa
2. Validation publication öncesinde `latest/` / `versions/` existence istemiyorsa
3. Canonical pipeline sırası bozulmadıysa
4. `Product_Engine_Final_Integration_Fix_Prompts/` repo'dan kaldırıldıysa
5. Silinen klasöre active reference kalmadıysa
6. BUILD_STATUS mevcut gerçekle uyumluysa
7. İki typo düzeltildiyse
8. `git diff --check` temizse

---

# Çalışma Sonu Raporu

İş bitince yalnız şu formatta rapor ver:

## Değiştirilen Dosyalar

- ...

## Validation Fix

Önce:
`...`

Sonra:
`...`

## Repository Cleanup

- Kaldırılan geçici klasör:
- Temizlenen referanslar:

## Cosmetic Fixes

- ...

## Consistency Check

- Broken references:
- Stale fix-prompt references:
- git diff --check:

## Final Durum

```text
Ready for Final Re-Audit: YES | NO
Remaining BLOCKER: N
Remaining MAJOR: N
```

Commit veya push yapma.
Bu scope dışına çıkma.
