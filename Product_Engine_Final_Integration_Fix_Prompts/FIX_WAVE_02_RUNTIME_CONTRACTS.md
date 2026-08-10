# Product Engine — Final Integration Fix
# Wave 02 — Runtime Contract Harmonization

Repo: `eekr1/product-engine-test`

Wave 01 tamamlanmış olmalıdır.

## Amaç

Runtime contract'lar arasındaki gerçek çelişkileri kapatmak.

Bu wave sonunda aşağıdaki konular tek anlamlı ve deterministic olmalı:

- output publication sırası,
- run completion sırası,
- CONDITIONAL PASS davranışı,
- delivery profile lifecycle,
- output version allocation/order,
- output validity terminology,
- no-valid-latest davranışı.

Yeni mimari tasarlama.

---

# Önce Oku

1. `README.md`
2. `PRODUCT_ENGINE_BRAIN.md`
3. `engine/README.md`
4. `engine/PROJECT_INTAKE.md`
5. `engine/PACKAGE_RULES.md`
6. `engine/GENERATION_PIPELINE.md`
7. `engine/OUTPUT_STRUCTURE.md`
8. `engine/VALIDATION_RULES.md`
9. `engine/RUN_PROTOCOL.md`
10. `inputs/README.md`
11. `runs/README.md`
12. `outputs/README.md`

Gerekirse:
- `templates/runs/RUN_MANIFEST_TEMPLATE.md`
- `templates/runs/VALIDATION_REPORT_TEMPLATE.md`
- package README ve package files

---

# Görev 1 — Publication / Completion Sırasını Tek Contract Yap

Canonical sıra şu olmalı:

```text
working-output complete
→ Validation
→ PASS veya accepted CONDITIONAL PASS
→ output_version allocate
→ versions/<output_version>/ publish
→ latest/ derived view update
→ RUN_MANIFEST output_ref/output_version finalize
→ run status Completed
→ run folder move to runs/completed/
```

Bütün ilgili runtime belgeleri bu sırayla uyumlu hale getir.

Özellikle `engine/OUTPUT_STRUCTURE.md` içindeki:

```text
Her başarılı run tamamlandığında...
```

gibi circular/ters okunabilecek ifadeleri düzelt.

Run `Completed` publication'dan önce prerequisite değildir.

Completed, publication gate tamamlandıktan sonraki terminal status'tür.

---

# Görev 2 — CONDITIONAL PASS Semantiğini Tekleştir

Canonical davranış:

```text
CONDITIONAL PASS
→ non-blocking validation findings
→ user/operator informed
→ two valid paths:

A) accepted CONDITIONAL PASS
   → publication gate'e devam

B) repair requested / chosen
   → repair
   → re-validation
```

Yani repair CONDITIONAL PASS için zorunlu değildir.

FAIL için repair zorunlu akıştır.

Bunu:

- `VALIDATION_RULES.md`
- `GENERATION_PIPELINE.md`
- gerekiyorsa `RUN_PROTOCOL.md`

arasında tek anlamlı hale getir.

Yeni validation status ekleme.

---

# Görev 3 — Delivery Profile Lifecycle'ı Düzelt

Canonical truth:

- `delivery_profile` PROJECT_INTAKE'da MUST field.
- Approved input içine girmeden önce belirlenmiş olmalı.
- Approved input immutable truth'tur.
- Package selection aşaması approved input'taki profile'ı tüketir.
- Package selection sırasında profile tahmini yapılmaz.

Dolayısıyla `engine/PACKAGE_RULES.md` içindeki:

```text
delivery_profile belirtilmemişse tahmin et / assumption yap / kullanıcı onayı al
```

davranışını intake/pending lifecycle ile uyumlu hale getir.

Doğru davranış:

```text
Approved input'ta delivery_profile yoksa
→ input invalid
→ package selection başlamaz
→ intake correction/new approved input gerekir
```

Pending aşamasında safe inference/clarification kuralları mevcut intake/assumption contract'a göre uygulanabilir.

Package selection approved truth'u değiştirmez.

---

# Görev 4 — Output Versioning'i Deterministic Yap

Mevcut:

```text
v0.1
v0.2
v1.0
```

formatını koruyabilirsin.

Ama kesin bir ordering/allocation contract tanımla.

V0 için gereksiz semantic-version anlamı yükleme.

Önerilen sade contract:

```text
Format: v<major>.<minor>

Comparison:
numeric major, then numeric minor

Default initial version:
v0.1

Normal successful regeneration:
same major, minor + 1

Major increment:
yalnız explicit engine/operator migration kararı ile
ör. v0.9 → v0.10 normaldir
v0.10 → v1.0 otomatik değildir

No overwrite:
existing version tekrar kullanılamaz
```

Bir sonraki version allocation owner'ını açıkça belirle.

Tercih:
`engine/OUTPUT_STRUCTURE.md`

Run manifest yalnız gerçekleşen version'u kaydetsin.

`latest` fallback için numeric comparison açık olmalı.

---

# Görev 5 — `Active output` Terminolojisini Düzelt

Output lifecycle için yeni `Active` status yaratma.

Canonical tanım:

```text
latest/
→ highest/current valid published output derived view
```

Output validity source:
source run status.

Kullan:

```text
valid published output
current valid output
latest valid published version
```

gibi ifadeler.

Tanımsız `Active output` kavramını kaldır veya açıkça sadece descriptive, non-status kelime olarak sınırla.

---

# Görev 6 — No Valid Version Davranışını Deterministic Yap

`latest/` kaynağı invalidated olduğunda fallback:

1. valid historical versions bul,
2. numeric highest version'u seç,
3. latest'i bununla güncelle.

Hiç valid version yoksa tek fiziksel davranış tanımla.

Önerilen V0 davranış:

```text
latest/ klasörü mevcut kalır ancak boş tutulur.
Valid current output yokluğu, valid source run bulunamaması üzerinden türetilir.
Ek status file veya manifest oluşturulmaz.
```

Eğer mevcut folder contract klasörün tamamen kaldırılmasını daha temiz kılıyorsa bunu seçebilirsin; ancak tek bir yöntem seç ve tüm belgelerde aynı olsun.

`current-unavailable` adlı yeni lifecycle status yaratma.

---

# Görev 7 — Cross-Contract Terminology Check

Aşağıdaki canonical vocabularies'i doğrula:

Run statuses:

```text
Created
Initialized
Running
Blocked
Paused
Resumed
Validation
Completed
Failed
Cancelled
Invalidated
```

Validation:

```text
PASS
CONDITIONAL PASS
FAIL
```

Delivery profiles:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

Yeni alias veya yeni status ekleme.

---

# Scope Sınırı

Bu wave'de:

- examples düzeltme,
- root prompt cleanup,
- README duplication cleanup,
- archive redesign,
- package document matrices redesign

yapma.

Yalnız runtime contract harmonization.

---

# Validation

Wave sonunda cross-check:

1. `GENERATION_PIPELINE` publication sırası
2. `OUTPUT_STRUCTURE` publication sırası
3. `RUN_PROTOCOL` completion sırası
4. `outputs/README` aynı sırayı anlatıyor mu?
5. CONDITIONAL PASS tek anlamlı mı?
6. Approved input sonrası delivery profile assumption tamamen kalktı mı?
7. Output version ordering deterministic mi?
8. Invalidation fallback deterministic mi?
9. Yeni vocabulary oluşmadı mı?
10. `git diff --check` temiz mi?

---

# Çalışma Sonu Raporu

- Değiştirilen dosyalar
- Her contract conflict için before/after özet
- Canonical publication sequence
- Canonical CONDITIONAL PASS flow
- Canonical output version rule
- Wave 03'e geçmeye engel var mı?

Bu wave dışına çıkma.
