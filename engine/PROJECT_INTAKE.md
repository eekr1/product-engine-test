# Project Intake

## Amaç

Bu belge, Product Engine'in proje bilgisini nasıl kabul edeceğini, hangi bilgilerin zorunlu olduğunu, hangi durumda kullanıcıya soru sorulacağını ve intake'in onaylı sayılma koşullarını tanımlar.

Gerçek proje girdileri bu belgede saklanmaz. Gerçek girdiler `inputs/` klasöründe tutulur.

---

## Kapsam

Bu belge şunların sahibidir:

- Minimum gerekli girdi alanları
- Önerilen girdi alanları
- Sıfırdan proje ile mevcut proje ayrımı
- Girdi onay süreci (pending → approved)
- Eksik bilgi sınıflandırması
- Clarification (netleştirme) gerektiren durumlar
- Assumption yapılamayacak bilgi türleri

## Kapsam Dışı

Bu belge şunların sahibi değildir:

- Doküman paketinin seçim mantığı → `PACKAGE_RULES.md`
- Bilginin hangi dokümana yazılacağı → `INFORMATION_MAP.md`
- Varsayım yapma izinlerinin tamamı → `ASSUMPTION_RULES.md`
- Nihai çıktı klasör yapısı → `OUTPUT_STRUCTURE.md`
- Template içerikleri → `templates/`

---

## Girdi Alanları

### Zorunlu Alanlar (MUST)

Aşağıdaki bilgiler olmadan Product Engine çalışmayı başlatamaز.

```text
project_name
  Projenin kısa, tekil adı.

project_purpose
  Projenin neden var olduğu. Tek bir cümle yeterlidir.

project_type
  Projenin türü. Bkz: Proje Türleri bölümü.

project_state
  Sıfırdan mı başlanıyor yoksa mevcut proje mi var?
  Değerler: new | existing

delivery_profile
  Projenin hedef teslim olgunluk düzeyi.
  Değerler: Foundation | Prototype | Implementation Ready | Production Ready

primary_language
  Projenin birincil dili. Ajanlar bunu çıktı dilini belirlemek için kullanır.
```

### Önerilen Alanlar (SHOULD)

Bu alanlar eksik olduğunda assumption yapılabilir veya daha sonra tamamlanabilir. Ancak girişte sağlanmaları üretim kalitesini artırır.

```text
target_users
  Projenin kim için üretildiği.

core_flows
  Ürünün 3–5 temel kullanıcı akışı.

technical_stack
  Kullanılacak ya da kullanılmakta olan teknoloji tercihleri.

design_preferences
  Varsa görsel veya UX tercihleri.

existing_resources
  Mevcut proje ise: varolan kod, doküman veya referans bağlantıları.

goals
  Projenin başarı kriterleri veya hedef çıktıları.

scope_boundaries
  Kesin olarak kapsam dışı olan alanlar.

known_constraints
  Bilinen teknik, yasal veya ticari kısıtlamalar.
```

### İsteğe Bağlı Alanlar (MAY)

```text
open_decisions
  Henüz karara bağlanmamış konular.

approved_facts
  Kullanıcının açıkça onayladığı ve varsayım yapılmaması gereken gerçekler.

additional_context
  Yukarıdaki kategorilere girmeyen bağlam bilgileri.
```

---

## Proje Türleri

Product Engine aşağıdaki proje türlerini tanır:

```text
web-app
  Kullanıcıya açık tarayıcı tabanlı uygulama.

api-service
  Ağırlıklı olarak API yüzeyi olan arka uç servis.

mobile-app
  iOS veya Android uygulaması.

internal-tool
  Şirket içi kullanım için araç veya pano.

landing-page
  Ürün veya kampanya tanıtım sayfası.

content-platform
  İçerik üretimi veya tüketimine odaklanan platform.

integration
  İki veya daha fazla sistem arasında köprü kuran yapı.

infrastructure
  Altyapı, CI/CD veya DevOps odaklı çalışma.

prototype
  Fikri kanıtlamaya yönelik, production hedefli olmayan yapı.

other
  Yukarıdakilere girmeyen proje türleri. Kısa açıklama gerektirir.
```

---

## Delivery Profile Tanımları

```text
Foundation
  Proje hakkında temel bilgiler belgelenmiştir.
  Ajan projeyi anlayabilir; ancak belirli teknik kararlar henüz verilmemiştir.

Prototype
  Hızlı deneme veya PoC amaçlı. Belge yoğunluğu minimumdur.
  Kritik kararlar kaydedilir; ancak tam implementation detayları beklenmez.

Implementation Ready
  Bir ajanın koda başlayabileceği yeterlilikte dokümantasyon.
  Teknik kararlar, mimari, akışlar ve gereksinimler netleştirilmiştir.

Production Ready
  Deployment, izleme, güvenlik ve bakım belgelerini de kapsar.
  Ekip büyüklüğünden bağımsız olarak tam kurumsal dokümantasyon gerektirir.
```

---

## Sıfırdan Proje ile Mevcut Proje Ayrımı

### Sıfırdan Proje (new)

- Mevcut kod veya belge yoktur.
- Girdi olarak fikir, amaç, kapsam ve tercihler beklenir.
- Tüm dokümanlar yeni olarak üretilir.

### Mevcut Proje (existing)

- Kod, doküman veya önceki çalışmalar mevcuttur.
- Ek olarak şunlar beklenir:
  - Mevcut kaynakların listesi veya bağlantısı
  - Mevcut dokümanların durumu (güncel mi, geçerliliğini yitirmiş mi?)
  - Üretilecek dokümanların mevcut olanlarla ilişkisi
- Çıktı, mevcut gerçeklikle çelişmemelidir.
- Mevcut projenin kabul edilen gerçekleri assumption olarak değil, onaylı girdi olarak işlenir.

---

## Girdi Onay Süreci

### Pending Durumu

Girdi alınmış ancak henüz onaylanmamıştır.

Pending girdide:

- Eksik zorunlu alanlar kaydedilmiştir.
- Belirsiz alanlar işaretlenmiştir.
- Kullanıcıya sorulması gereken sorular hazırlanmıştır.

Pending girdiyle üretim başlatılamaz.

### Approved Durumu

Kullanıcı girdinin içeriğini onaylamıştır.

Approved girdide:

- Tüm zorunlu alanlar doldurulmuştur veya kabul edilmiş assumption'larla tamamlanmıştır.
- Açık çelişkiler çözülmüştür.
- Ajan üretimi başlatabilir.

Onay geriye dönük olarak değiştirilemez. Girdi değişirse yeni bir snapshot oluşturulmalıdır. Bkz: `RUN_PROTOCOL.md`.

---

## Eksik Bilgi Sınıflandırması

| Durum | Tanım | Davranış |
|---|---|---|
| Kritik Eksiklik | Paket seçimi, proje türü veya kapsamı belirlenemiyor | Üretim durdurulur, kullanıcıya soru sorulur |
| Tamamlanabilir Eksiklik | Paket varsayılanıyla güvenli biçimde doldurulabilir | Assumption yapılır, kaydedilir |
| Gelecekte Belirlenecek | Şu an için zorunlu değil, sonradan tamamlanacak | Unresolved item olarak işaretlenir |

Ayrıntılı assumption kuralları için bkz: `ASSUMPTION_RULES.md`.

---

## Clarification Gerektiren Durumlar

Aşağıdaki durumlarda ajan MUST kullanıcıya soru sormalıdır:

- `project_type` belirsiz veya çelişkili ise
- `delivery_profile` belirtilmemişse ve proje kapsamından tahmin edilemiyorsa
- `project_state` belirsiz ise (yani ne kadar mevcut materyal olduğu anlaşılamıyorsa)
- Birden fazla kapsam yorumu mümkün ve bunlar farklı paket seçimine yol açıyorsa
- Kullanıcı iki farklı proje hakkında bilgi vermiş gibi görünüyorsa (proje karışıklığı riski)

---

## Assumption Yapılamayacak Bilgi Türleri

Aşağıdaki bilgiler hiçbir koşulda sessizce uydurulmamalıdır (MUST NOT):

```text
- Projenin ticari amacı veya iş modeli
- Gerçek müşteri veya kullanıcı kitlesi (özellikle B2B bağlamlarda)
- Yasal veya uyumluluk gereksinimleri
- Finansal bilgiler ve fiyatlandırma kararları
- Kimlik doğrulama ve erişim kontrolü tasarımı
- Credentials, API anahtarları veya sırlar
- Production ortam ve deployment hedefleri
- Kullanıcının açıkça karar vermesi gereken ürün tercihleri
- Mevcut sistemle entegrasyon gereksinimleri (teknik detayları)
```

Bu bilgiler eksikse, üretim durdurulur ve kullanıcıya netleştirme sorusu yönlendirilir.

---

## Intake'in Hazır Sayılma Koşulları

Bir girdi aşağıdaki koşulların tamamını karşıladığında approved olarak kabul edilir:

1. Tüm zorunlu alanlar doldurulmuştur.
2. `project_type` ve `delivery_profile` netleştirilmiştir.
3. `project_state` belirlenmiş; mevcut proje ise kaynaklar listelenmiştir.
4. Kritik çelişkiler çözülmüştür.
5. Assumption yapılan alanlar açıkça kaydedilmiştir.
6. Kullanıcı onayı alınmıştır (sessiz onay değil, açık onay).
