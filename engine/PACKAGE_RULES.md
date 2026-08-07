# Package Rules

## Amaç

Bu belge, verilen proje bilgilerine göre hangi doküman paketinin seçileceğini tanımlar.

Paket seçimi, gereksiz doküman üretimini engeller. Her proje yalnızca kendi bağlamına uygun dokümanları alır.

## Kapsam Dışı

- Paket dosyalarının gerçek içerikleri → `packages/`
- Dokümanların şablon içerikleri → `templates/`
- Intake alanlarının tam listesi → `PROJECT_INTAKE.md`
- Output klasör yapısının ayrıntıları → `OUTPUT_STRUCTURE.md`

---

## Temel Kavramlar

### Delivery Profile

Projenin hedef teslim olgunluk düzeyidir. Proje türünden bağımsız bir kavramdır.

```text
Foundation           → Temel bağlam ve amaç belgelenmiş
Prototype            → Hızlı deneme, minimum belge yükü
Implementation Ready → Ajana üretime başlatacak yeterlilikte belge
Production Ready     → Operasyon ve sürdürülebilirlik kapsamı güçlendirilmiş paket
```

### Project Type

Projenin işlevsel kategorisidir. Delivery profile'dan bağımsızdır. Tanınan türler için bkz: `PROJECT_INTAKE.md`.

### Package

Belirli bir proje bağlamı için önerilen doküman kümesidir. Gerçek paket tanımları `packages/` klasöründe bulunur. Bu belge yalnızca seçim mantığını tanımlar.

Başlangıç paket dosyaları:

```text
packages/
├── README.md
├── DEMO_FRONTEND_PACKAGE.md
├── CORPORATE_WEBSITE_PACKAGE.md
├── SAAS_PACKAGE.md
├── EXISTING_PROJECT_PACKAGE.md
└── API_SERVICE_PACKAGE.md
```

---

## Paket Seçim Mantığı

Paket seçimi aşağıdaki sırayla yapılır:

### Adım 1 — Delivery Profile'ı Belirle

Onaylı intake içindeki `delivery_profile` alanı kullanılır.

Belirtilmemişse:

- Proje kapsamı ve teknik gereksinim yoğunluğuna göre tahmin edilir.
- Tahmin yapılıyorsa assumption olarak kaydedilir.
- Ajan sessizce seçim yapmamalı; kullanıcı onayı almalıdır.

### Adım 2 — Project Type'ı Belirle

Onaylı intake içindeki `project_type` alanı kullanılır.

Belirsiz ise intake adımına geri dönülür. Bu alan assumption yapılamaz.

### Adım 3 — Temel Paketi Seç

Delivery profile + project type kombinasyonuna göre `packages/` klasöründeki karşılık gelen paket dosyası belirlenir.

Paket dosyaları `packages/` altında düz yapıda konumlanmaktadır:

```text
packages/<PACKAGE_NAME>.md
Örnek: packages/SAAS_PACKAGE.md
```

### Adım 4 — Uzantı Gereksinimlerini Değerlendir

Temel paket her projeye yeterli gelmeyebilir. Aşağıdaki durumlarda ek dokümanlar eklenir:

```text
Mevcut proje (existing):
→ CURRENT_STATUS (STATUS) belgesi zorunlu hale gelir.

API yüzeyi olan projeler:
→ API_CONTRACTS (API) belgesi eklenir.

Dalga bazlı planlamaya ihtiyaç varsa:
→ WAVE_MAP ve WAVE_PLAN eklenir.

Production Ready + dış erişim varsa:
→ DEPLOYMENT ve OPERATIONS belgeleri eklenir.

Karmaşık veri modeli olan projeler:
→ DATA_MODEL (DATA) belgesi eklenir.

Tasarım kararları belgelenmesi gereken projeler:
→ DESIGN_RULES (DESIGN) belgesi eklenir.

Ajan çalışma kuralları tanımlanacaksa:
→ AGENT_INSTRUCTIONS (AGENT-INST) belgesi eklenir.
```

### Adım 5 — Daraltma Gereksinimlerini Değerlendir

Küçük veya tek amaçlı projeler için bazı belgeler gereksiz olabilir.

```text
Prototype + hızlı teslim:
→ WAVE_MAP, WAVE_PLAN, PROJECT_PLAN çıkarılabilir.

Sadece frontend demo veya landing-page:
→ DATA_MODEL, API_CONTRACTS, OPERATIONS çıkarılabilir.

Tek kullanıcılı internal-tool:
→ PRODUCT_STRATEGY, DESIGN_RULES çıkarılabilir.
```

Daraltma kararı assumption olarak kaydedilir.

### Adım 6 — Seçimi Gerekçelendir

Seçilen paket ve yapılan genişleme veya daraltmalar run kaydına yazılır. Bkz: `RUN_PROTOCOL.md`.

---

## Paket Öncelik Kuralları

Birden fazla paket geçerliyse (ör. birleşik sistem):

1. En kapsamlı delivery profile esas alınır.
2. Çakışan dokümanlar tek sefer üretilir; aynı doküman iki farklı kimlikle oluşturulamaz.
3. `DOCUMENT_CATALOG.md` doküman kimliklerinin ortak referansıdır.

---

## Belirsiz Sınıflandırma Durumları

Aşağıdaki durumlarda ajan sessize çekilmeden önce şunları yapmalıdır:

```text
Çelişkili proje türü:
→ Kullanıcıya sorulur. Tahmin yapılmaz.

Birden fazla delivery profile uygun görünüyorsa:
→ Daha dar profil seçilir, assumption kaydedilir, kullanıcı onayı istenir.

Proje büyüklüğü paket sınırında ise:
→ Daha küçük profil seçilir. Büyük profil kullanıcı onayı gerektirir.
```

---

## Varsayılan Paket Davranışı

Paket seçimi tamamlanamadığında:

- Üretim başlatılamaz.
- Kullanıcıya hangi bilginin eksik veya belirsiz olduğu raporlanır.
- Assumption listesi mevcut bilgiye dayanarak hazırlanır ve onay için sunulur.

---

## Paket Genişletme ve Daraltma Kuralları

```text
MUST: Seçilen paketteki tüm required dokümanlar üretilmelidir.
MUST NOT: Pakette olmayan ve gereklilik koşulunu karşılamayan dokümanlar üretilmemelidir.
SHOULD: Koşullu dokümanlar için uygunluk değerlendirmesi yapılmalıdır.
MAY: İsteğe bağlı dokümanlar kullanıcı talebi veya açık gereksinim varsa eklenebilir.
```

---

## Paket ile Package Dosyası İlişkisi

Bu belge paket **seçim mantığını** tanımlar.

Seçilen paketin gerçek doküman listesi ve bu dokümanlar için özel kurallar `packages/<PACKAGE_NAME>.md` dosyasında bulunur.

Bu iki sorumluluk birbirine karıştırılmamalıdır.
