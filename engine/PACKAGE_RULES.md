# Package Rules

## Amaç

Bu belge, verilen proje bilgilerine göre hangi doküman paketinin seçileceğini tanımlar.

Paket seçimi, gereksiz doküman üretimini engeller. Her proje yalnızca kendi bağlamına, delivery maturity seviyesine ve planning depth kararlarına uygun dokümanları alır.

## Kapsam Dışı

- Paket dosyalarının gerçek içerikleri → `packages/`
- Planning profile tanımları ve kalite tabanı → `PLANNING_PROFILES.md`
- Dokümanların şablon içerikleri → `templates/`
- Intake alanlarının tam listesi → `PROJECT_INTAKE.md`
- Output klasör yapısının ayrıntıları → `OUTPUT_STRUCTURE.md`

---

## Temel Kavramlar

### Delivery Profile

Projenin hedef teslim olgunluk düzeyidir. Proje türünden ve planning depth'ten bağımsız bir kavramdır.

```text
Foundation           → Temel bağlam ve amaç belgelenmiş
Prototype            → Deneme/demo hedefli teslim olgunluğu; kalite tabanı düşmez
Implementation Ready → Ajana üretime başlatacak yeterlilikte belge
Production Ready     → Operasyon ve sürdürülebilirlik kapsamı güçlendirilmiş paket
```

### Implementation Planning

Projenin nasıl inşa edileceğine ilişkin execution planning derinliğidir.

```text
standard | full
```

Tam anlamı `PLANNING_PROFILES.md` tarafından yönetilir.

### Design Planning

UI/UX taşıyan projelerde tasarım planlama derinliğidir.

```text
light | standard | full
```

UI/UX taşımayan projelerde profile seçilmez; `none` adlı bir design profile yoktur.

### Project Type

Projenin işlevsel kategorisidir. Delivery profile ve planning profile'lardan bağımsızdır. Tanınan türler için bkz: `PROJECT_INTAKE.md`.

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

## Seçim Modeli

Product Engine document resolution dört ayrı girdiyi birlikte değerlendirir:

```text
project_type
+
delivery_profile
+
implementation_planning
+
design_planning (applicable ise)
```

Hiçbir eksen diğerinin yerine geçemez.

Özellikle:

```text
Prototype ≠ planning azaltma talimatı
light design ≠ düşük tasarım kalitesi
standard implementation ≠ eksik implementation planı
full ≠ gereksiz doküman üretme izni
```

---

## Paket Seçim Mantığı

Paket seçimi aşağıdaki sırayla yapılır:

### Adım 1 — Delivery Profile'ı Belirle

Onaylı intake (`inputs/approved/`) içindeki `delivery_profile` alanı doğrudan tüketilir.

`delivery_profile` approved intake katmanında zorunlu (MUST) bir alandır.

Onaylı girdi içerisinde `delivery_profile` bulunmuyorsa:
- Input geçersizdir (invalid input).
- Paket seçimi başlatılamaz.
- Intake düzeltmesi veya yeni onaylı girdi gerekir (`intake correction / new approved input`).
- Paket seçimi aşamasında `delivery_profile` tahmini veya varsayımı yapılmaz.

### Adım 2 — Project Type'ı Belirle

Onaylı intake içindeki `project_type` alanı kullanılır.

Belirsiz ise intake adımına geri dönülür. Bu alan assumption yapılamaz.

### Adım 3 — Planning Profile'ları Belirle

Onaylı intake içindeki `implementation_planning` zorunlu olarak okunur.

UI/UX taşıyan projelerde `design_planning` da zorunlu olarak okunur.

```text
implementation_planning: standard | full

design_planning (applicable): light | standard | full
```

Planning profile eksik veya canonical enum dışında ise package/document resolution başlatılamaz; intake düzeltmesine dönülür.

Paket seçim aşamasında profile tahmini yapılmaz. Profile önerisi pending intake aşamasında yapılmış ve explicit approval ile kesinleşmiş olmalıdır.

### Adım 4 — Temel Paketi Seç

Delivery profile + project type kombinasyonuna göre `packages/` klasöründeki karşılık gelen temel paket dosyası belirlenir.

Paket dosyaları `packages/` altında düz yapıda konumlanmaktadır:

```text
packages/<PACKAGE_NAME>.md
Örnek: packages/SAAS_PACKAGE.md
```

### Adım 5 — Implementation Planning Genişliğini Uygula

Temel paket seçildikten sonra `implementation_planning`, execution-oriented document scope'un minimum derinliğini belirler.

```text
standard
→ Product Engine'in agent-ready minimum execution planning kapsamı uygulanır.
→ Prototype/demo olması planning katmanlarını otomatik olarak kaldıramaz.

full
→ standard kapsamı korunur.
→ Projenin gerçek karmaşıklığına göre daha derin data/API/test/deployment/operations veya cross-system planning belgeleri değerlendirilir.
```

Exact document ID çözümlemesi `DOCUMENT_CATALOG.md` ve ilgili package contract'ları üzerinden yapılır.

### Adım 6 — Design Planning Genişliğini Uygula

UI/UX taşıyan projelerde `design_planning` design artifact scope'unu belirler.

```text
light
→ Güçlü, projeye özgü ve uygulanabilir DESIGN_RULES tabanı.
→ Generic/template tasarım veya sektör klişesi kullanma izni değildir.

standard
→ light tabanı + design system, global shell, page/screen ve system-state planning gibi applicable design katmanları değerlendirilir.

full
→ standard tabanı + feature-level, complex flow, auth/gate, admin/operational ve ileri state planning gibi yalnızca gerçek ihtiyacın gerektirdiği design katmanları değerlendirilir.
```

Exact design document selection ilerleyen design catalog/package contract'ları tarafından çözülür; bu belge profile semantiğinin alt sınırını tanımlar.

### Adım 7 — Bağlamsal Uzantı Gereksinimlerini Değerlendir

Temel paket ve planning profile'lar her projeye tek başına yeterli gelmeyebilir. Aşağıdaki durumlarda uygun canonical belgeler eklenir:

```text
Mevcut proje (existing):
→ CURRENT_STATUS (STATUS) belgesi zorunlu hale gelir.

Gerçek API yüzeyi kapsamdaysa:
→ API_CONTRACTS (API) belgesi değerlendirilir.

Karmaşık veya kalıcı veri modeli kapsamdaysa:
→ DATA_MODEL (DATA) belgesi değerlendirilir.

Production Ready + dış erişim varsa:
→ DEPLOYMENT ve OPERATIONS belgeleri değerlendirilir.

Test planlaması implementation scope tarafından gerektiriliyorsa:
→ TEST_STRATEGY değerlendirilir.
```

### Adım 8 — Demo / Frontend Integration Readiness Kontrolü

Sadece frontend demo olması, teknik planlama veya mimari kaliteyi düşürme gerekçesi değildir.

Backend henüz gerçek kapsamda değilse:

- sahte API endpoint'i veya database contract'ı üretilmez,
- ancak mock/local data'nın presentation katmanına kontrolsüz gömülmediği,
- service/data-access boundary'nin tanımlı olduğu,
- gerçek backend geldiğinde entegrasyon noktasının belli olduğu,
- environment/config sınırlarının korunduğu

bir teknik planlama beklenir.

Bu davranış `PLANNING_PROFILES.md` içindeki Backend / Integration Readiness Baseline'a tabidir.

### Adım 9 — Daraltma Gereksinimlerini Değerlendir

Daraltma yalnızca ilgili profile'ın minimum kapsamını ihlal etmiyorsa yapılabilir.

Aşağıdaki eski tip yorumlar geçersizdir:

```text
Prototype + hızlı teslim → wave/project planning'i otomatik çıkar
Demo → teknik context veya integration readiness'i otomatik çıkar
Light design → generic/minimal design yeterli
```

Daraltma kararı:

- `implementation_planning: standard` için agent-ready minimumu bozamaz,
- `design_planning: light` için güçlü `DESIGN_RULES` tabanını kaldıramaz,
- package/catalog tarafından required olan applicable belgeyi kaldıramaz,
- yalnızca gerçekten applicable olmayan veya kullanıcı kapsamı dışında kalan conditional belgeleri eleyebilir.

Daraltma kararı assumption/decision kaydında gerekçelendirilir.

### Adım 10 — Seçimi Gerekçelendir

Seçilen paket, planning profile'lar ve yapılan genişleme/daraltmalar run kaydına yazılır. Bkz: `RUN_PROTOCOL.md`.

---

## Paket Öncelik Kuralları

Birden fazla paket geçerliyse (ör. birleşik sistem):

1. Onaylı intake'teki delivery profile ve planning profile'lar korunur.
2. En kapsamlı gerçek proje gereksinimini karşılayan package/extension kombinasyonu seçilir.
3. Çakışan dokümanlar tek sefer üretilir; aynı doküman iki farklı kimlikle oluşturulamaz.
4. `DOCUMENT_CATALOG.md` doküman kimliklerinin ortak referansıdır.
5. Planning profile derinliği package default'u tarafından sessizce düşürülemez.

---

## Belirsiz Sınıflandırma Durumları

Aşağıdaki durumlarda ajan sessize çekilmeden önce şunları yapmalıdır:

```text
Çelişkili proje türü veya onaylı girdide eksik delivery_profile:
→ Paket seçimi başlamaz. Intake düzeltmesi istenir. Tahmin yapılmaz.

Eksik/invalid implementation_planning veya applicable design_planning:
→ Paket seçimi başlamaz. Intake düzeltmesi istenir.

Proje büyüklüğü paket sınırında ise:
→ Approved input'taki delivery_profile + planning profile kombinasyonu temel alınır.
→ Paketin daraltma/genişletme adımları bu minimum sınırları ihlal etmeden uygulanır.
```

---

## Varsayılan Paket Davranışı

Paket seçimi tamamlanamadığında:

- Üretim başlatılamaz.
- Kullanıcıya hangi bilginin eksik veya belirsiz olduğu raporlanır.
- Assumption/proposal listesi mevcut bilgiye dayanarak hazırlanır ve onay için sunulur.

---

## Paket Genişletme ve Daraltma Kuralları

```text
MUST: Seçilen paketteki tüm required dokümanlar üretilmelidir.
MUST: Approved planning profile minimumları korunmalıdır.
MUST NOT: Prototype/demo etiketi kalite veya planning minimumunu düşürmek için kullanılmamalıdır.
MUST NOT: Pakette olmayan ve gereklilik koşulunu karşılamayan dokümanlar keyfi olarak üretilmemelidir.
SHOULD: Koşullu dokümanlar için uygunluk değerlendirmesi yapılmalıdır.
MAY: İsteğe bağlı dokümanlar kullanıcı talebi veya açık gereksinim varsa eklenebilir.
```

---

## Paket ile Package Dosyası İlişkisi

Bu belge paket **seçim mantığını** tanımlar.

Seçilen paketin gerçek doküman listesi ve bu dokümanlar için özel kurallar `packages/<PACKAGE_NAME>.md` dosyasında bulunur.

`PLANNING_PROFILES.md` planning depth'in kalite ve kapsam alt sınırını; package dosyaları ise bu sınırın gerçek belge matrisiyle nasıl karşılanacağını tanımlar.

Bu sorumluluklar birbirine karıştırılmamalıdır.
