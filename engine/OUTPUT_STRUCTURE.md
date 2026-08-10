# Output Structure

## Amaç

Bu belge, Product Engine'in ürettiği final proje dokümantasyon paketinin nasıl yapılandırılacağını ve nereye yerleştirileceğini tanımlar.

`VALIDATION_RULES` working-output'u publication öncesinde doğrular. `OUTPUT_STRUCTURE` ise successful validation sonrasında published output fiziksel yapısını yönetir.

## Kapsam Dışı

- Dokümanların tam metin içerikleri → `templates/`
- Run'ın kronolojik çalışma kaydı → `RUN_PROTOCOL.md`
- Paket seçme karar ağacı → `PACKAGE_RULES.md`
- Validation maddelerinin tamamı → `VALIDATION_RULES.md`
- Intake alanları → `PROJECT_INTAKE.md`

---

## Temel Ayrım: Final Output ile Run Kayıtları

```text
Final Output
  → Teslim edilebilir, temiz proje doküman paketi.
  → outputs/ klasöründe tutulur.
  → Başka bir ajan doğrudan bu paket üzerinden çalışabilir.

Run Kayıtları
  → Üretim sürecinin operasyonel izi.
  → runs/ klasöründe tutulur.
  → Final output içine sızmaz.
```

Run kayıtları final output klasörüne MUST NOT taşınır.

---

## Onaylanan Klasör Yapısı

```text
outputs/<category>/<project-slug>/
├── latest/
│   ├── README.md
│   ├── PROJECT_BRAIN.md
│   ├── PRODUCT_RULES.md
│   ├── TECH_CONTEXT.md
│   ├── PRODUCT_STRATEGY.md   (koşullu)
│   ├── DESIGN_RULES.md        (koşullu)
│   ├── CURRENT_STATUS.md      (koşullu)
│   ├── NEXT_TASKS.md          (koşullu)
│   ├── DECISIONS.md           (koşullu)
│   ├── AGENT_INSTRUCTIONS.md  (koşullu)
│   ├── PROJECT_PLAN.md        (koşullu)
│   ├── DATA_MODEL.md          (koşullu)
│   ├── API_CONTRACTS.md       (koşullu)
│   ├── DEPLOYMENT.md          (koşullu)
│   ├── OPERATIONS.md          (koşullu)
│   ├── TEST_STRATEGY.md       (koşullu)
│   ├── WAVE_MAP.md            (koşullu)
│   └── WAVE_PLAN.md           (koşullu)
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── v1.0/
```

Outputs için üst seviye kategori yapısı:

```text
outputs/
├── README.md
├── demos/
└── products/
```

`demos/` → Sunulabilir, test edilebilir veya erken aşama teslimler

`products/` → Implementation Ready veya Production Ready kapsamındaki teslimler

---

## Klasör Kuralları

### `latest/`

- En son geçerli, validation'dan geçmiş ve yayınlanmış çıktının türetilmiş görünümüdür (derived view of current valid published output).
- En son üretilen değil, en son doğrulanan ve yayınlanan çıktıyı gösterir.
- Validation'dan geçmeyen output MUST NOT `latest/` olarak işaretlenir.
- Invalidated output `latest/` konumunda tutulamaz.
- `latest/` her zaman tek bir geçerli sürüme işaret eder.

### `versions/`

- Her başarılı yayınlama kapısını (publication gate) geçen çalışmadan sonra o run'ın çıktısı `versions/` altında saklanır.
- Eski sürümler silinmez; `versions/` altında korunur.
- Sürüm numarası numerik majör ve minör numaralandırmayı takip eder (`v0.1`, `v0.2`... `v0.10`... `v1.0`...).
- Sürüm numaraları run manifest'inde izlenebilir olmalıdır.

---

## Kategori ve Project Slug Kuralları

### `<category>`

Projenin genel türünü tanımlayan kısa klasör adı. Seçilen paket ve delivery profile'a göre `demos/` veya `products/` olarak belirlenir.

### `<project-slug>`

Projenin benzersiz, kısa, URL-uyumlu tanımlayıcısı.

Kurallar:

```text
- Küçük harf
- Kelimeler tire ile ayrılır
- Özel karakter içermez
- Proje adından türetilir (ör. "My App" → "my-app")
- Slug bir kez belirlendikten sonra değiştirilmez
```

---

## Zorunlu Output Artefaktları

Her run'da, seçilen paketten bağımsız olarak aşağıdakiler final output'ta yer almalıdır:

```text
README.md
  → Projenin başlangıç noktası; diğer belgelere yönlendirir.

PROJECT_BRAIN.md
  → Projenin tüm bağlamını özetler; ajanın birincil başvuru belgesidir.
```

Seçilen pakete göre `PRODUCT_RULES.md` ve `TECH_CONTEXT.md` de zorunlu hale gelebilir.

Bkz: `DOCUMENT_CATALOG.md` ve `PACKAGE_RULES.md`

---

## Koşullu Output Artefaktları

Koşullu dokümanlar yalnızca paket seçimi veya proje bağlamı gerektirdiğinde oluşturulur.

Pakette olmayan dokümanlar output klasörüne MUST NOT eklenir.

Pakette olmayan bir doküman için placeholder veya boş dosya MUST NOT oluşturulur.

---

## Output Temizliği Kuralları

Final output aşağıdakileri MUST NOT içerir:

```text
- Doldurulmamış placeholder alanlar (ör. [BURAYA YAZ], TBD)
- Template metadata satırları veya notları
- Run operasyon dosyaları (run manifest, run log, working output dosyaları)
- Başka bir projeye ait içerik
- Onaylanmamış assumption'lar (tüm assumption'lar kayıtlı ve onaylı olmalı)
- Çözülmemiş çelişkiler
```

---

## Sürümleşme ve publication Kanonik Sırası

```text
Başarılı doğrulama (PASS veya kabul edilmiş CONDITIONAL PASS) sonrasında publication gate geçildiğinde:
  1. output_version tahsis edilir (v<major>.<minor>).
  2. Temiz çıktı versions/<output_version>/ altına yazılır.
  3. latest/ klasörünün içeriği yeni sürümün temiz kopyası ile güncellenir.
  4. RUN_MANIFEST.md içerisindeki output_ref ve output_version alanları dondurulur.
  5. Run durumu Completed olarak güncellenir ve run klasörü runs/completed/<run-id>/ konumuna taşınır.

Validation'dan geçemeyen (FAIL) veya yayınlama hakkı kazanmayan (iptal edilen / duraklatılan / engellenen) çalışmalar:
  → latest/ güncellenmez.
  → versions/ altına eklenmez.
```

---

## Sürüm Tahsis ve Sıralama Kuralları (Output Version Allocation & Ordering)

- **Format**: `v<major>.<minor>` (ör. `v0.1`, `v0.2`, `v1.0`). Major ve minor tamsayılardır.
- **Sıralama (Comparison)**: Karşılaştırma alfabetik değil, numeriktir (önce numerik major, sonra numerik minor). Örnek: `v0.2` < `v0.9` < `v0.10` < `v1.0`.
- **İlk Sürüm**: Proje için daha önce yayınlanmış çıktı yoksa varsayılan ilk sürüm `v0.1`'dir.
- **Normal Yeniden Üretim (Regeneration)**: Aynı major sürüm korunur, minor sürüm +1 artırılır (`v0.1` → `v0.2`). `v0.9` → `v0.10` normal ilerlemedir.
- **Major Artışı**: Major sürüm artışı (`v0.x` → `v1.0`) otomatik değildir; yalnızca açık engine/operatör migrasyon kararı ile gerçekleşir.
- **Değişmezlik (No Overwrite)**: Yayınlanmış bir sürüm klasörü (`versions/vX.Y/`) silinemez, üzerine yazılamaz veya tekrar kullanılamaz.
- **Tahsis Yetkisi**: Sürüm numarasını tahsis etme kuralı `engine/OUTPUT_STRUCTURE.md`'ye aittir; gerçekleşen sürüm `RUN_MANIFEST.md` belgesine dondurulur.

---

## Invalidation Fallback ve No Valid Version Davranışı

`latest/` klasörüne kaynaklık eden run `Completed → Invalidated` durumuna geçtiğinde:
1. `versions/` altındaki tarihsel sürümler taranır.
2. Kaynak run status değeri `Completed` olan geçerli tarihsel sürümler filtrelenir.
3. Numerik olarak en yüksek sürüm numarasına sahip geçerli sürüm seçilir.
4. `latest/` içeriği bu seçilen sürümün kopyasıyla güncellenir.

Eğer projenin geçmişinde hiç geçerli tarihsel sürüm bulunmuyorsa (`status: Completed` olan kaynak run kalmamışsa):
- `latest/` klasörü silinmez; ancak içeriği tamamen boş tutulur.
- Geçerli çıktı bulunmadığı durumu, `runs/` katmanında `status: Completed` olan kaynak run bulunamaması üzerinden türetilir.
- `outputs/` katmanı içinde ek bir durum dosyası (`INVALIDATED.txt`), durum manifesti veya türetilmiş bir status nesnesi oluşturulmaz.

---

## İzlenebilirlik Gereksinimleri

Final output içindeki her sürüm için aşağıdaki bilgiler izlenebilir olmalıdır:

```text
- Kaynak run ID
- Kullanılan input sürümü
- Seçilen paket
- Delivery profile
- Validation sonucu
- Üretim tarihi
```

Bu bilgiler `RUN_MANIFEST.md`'de tutulur. Bkz: `RUN_PROTOCOL.md`.

---

## Working Output ile Final Output Ayrımı

```text
Working Output
  → Üretim sürecindeki geçici dokümanlar.
  → Validation tamamlanmadan final output klasörüne taşınmaz.
  → runs/active/<run-id>/working-output/ altında tutulur.

Final Output
  → Validation'dan geçmiş, temiz doküman paketi.
  → outputs/<category>/<project-slug>/latest/ altında yer alır.
```
