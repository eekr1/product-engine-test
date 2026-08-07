# Output Structure

## Amaç

Bu belge, Product Engine'in ürettiği final proje dokümantasyon paketinin nasıl yapılandırılacağını ve nereye yerleştirileceğini tanımlar.

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

- En son geçerli, validation'dan geçmiş Active output'tur.
- En son üretilen değil, en son doğrulanan çıktıyı gösterir.
- Validation'dan geçmeyen output MUST NOT `latest/` olarak işaretlenir.
- Invalidated output `latest/` konumunda tutulamaz.
- `latest/` her zaman tek bir sürüme işaret eder.

### `versions/`

- Her başarılı run'dan sonra o run'ın çıktısı `versions/` altında saklanır.
- Eski sürümler silinmez; `versions/` altında korunur.
- Sürüm numarası semantik olmayan basit artan numaralandırmayı takip edebilir (v0.1, v0.2... v1.0...).
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

## Sürümleme ve latest/ Güncellemesi

```text
Her başarılı run tamamlandığında:
  1. Output, versions/<yeni-sürüm>/ altına yazılır.
  2. latest/ içeriği yeni sürümle değiştirilir.
  3. Önceki latest/ içeriği, ilgili versions/ klasörünü gösterir (silinmez).

Bir run validation'dan geçemezse:
  → latest/ güncellenmez.
  → versions/ altına da eklenmez.
```

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
