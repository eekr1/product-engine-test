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
- Planning profile alanlarının intake/approval durumu

## Kapsam Dışı

Bu belge şunların sahibi değildir:

- Planning profile değerlerinin tam anlamı → `PLANNING_PROFILES.md`
- Doküman paketinin seçim mantığı → `PACKAGE_RULES.md`
- Bilginin hangi dokümana yazılacağı → `INFORMATION_MAP.md`
- Varsayım yapma izinlerinin tamamı → `ASSUMPTION_RULES.md`
- Nihai çıktı klasör yapısı → `OUTPUT_STRUCTURE.md`
- Template içerikleri → `templates/`

---

## Girdi Alanları

### Zorunlu Alanlar (MUST)

Aşağıdaki bilgiler olmadan Product Engine çalışmayı başlatamaz.

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

implementation_planning
  Projenin execution/implementation planning derinliği.
  Değerler: standard | full
  Ayrıntılar: PLANNING_PROFILES.md

primary_language
  Projenin birincil dili. Ajanlar bunu çıktı dilini belirlemek için kullanır.
```

### UI/UX Taşıyan Projeler İçin Zorunlu Alan (MUST when applicable)

```text
design_planning
  UI/UX design planning derinliği.
  Değerler: light | standard | full
  Applicable örnek türler: web-app, mobile-app, landing-page, content-platform,
  UI taşıyan internal-tool veya diğer UI kapsamlı projeler.
```

UI/UX taşımayan projelerde `design_planning` için `none` adlı bir değer kullanılmaz; alan applicable değildir ve canonical profile seçimi yapılmaz.

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

integration_readiness_context
  Özellikle frontend/demo projelerinde bugünkü data source, mock/local veri sınırı,
  gelecekteki backend/API entegrasyon beklentisi ve bilinen integration boundary bilgisi.
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

## Planning Profile Intake Kuralı

`delivery_profile`, `implementation_planning` ve applicable ise `design_planning` farklı eksenlerdir.

Ajan pending intake sırasında planning profile önerisi yapabilir; ancak package/document generation öncesinde değerler approved input içinde kesinleşmiş olmalıdır.

Örnek geçerli kombinasyon:

```yaml
delivery_profile: Prototype
implementation_planning: standard
design_planning: light
```

Bu kombinasyon çelişkili değildir. Prototype delivery profile, implementation planning seviyesini otomatik olarak düşürmez.

### Profile Approval

Planning profile değerleri, diğer canonical intake kararlarıyla aynı explicit approval kuralına tabidir.

- Ajan profile önerebilir.
- Kullanıcı pending intake'i açıkça onayladığında profile değeri approved input gerçeği olur.
- IDE/tool/plan auto-approval profile onayı değildir.
- Approved input oluşturulduktan sonra planning profile değiştirilmek istenirse yeni input snapshot gerekir.

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
  Hızlı deneme veya PoC amaçlı. Teslim olgunluğu sınırlıdır ancak kalite tabanı düşmez.
  Prototype olması throwaway mimari veya eksik execution planning anlamına gelmez.

Implementation Ready
  Bir ajanın koda başlayabileceği yeterlilikte dokümantasyon.
  Teknik kararlar, mimari, akışlar ve gereksinimler netleştirilmiştir.

Production Ready
  Operasyon, deployment, güvenlik ve sürdürülebilirlik konularının kapsandığı,
  daha olgun bir dokümantasyon profilidir. Gereksiz doküman üretme ilkesi devam
  eder; ancak production için gerekli belgeler atlanmaz.
```

Planning profile ayrıntıları için bkz: `PLANNING_PROFILES.md`.

---

## Sıfırdan Proje ile Mevcut Proje Ayrımı

### Sıfırdan Proje (new)

- Mevcut ürün/site/codebase/doküman/önceki implementation bağlamı yoktur.
- Girdi olarak fikir, amaç, kapsam ve tercihler beklenir.
- Tüm dokümanlar yeni olarak üretilir.

### Mevcut Proje (existing)

Aşağıdaki gerçekliklerden biri bile yeni çalışmanın source/transition context'i ise proje `existing` kabul edilir:

```text
mevcut website veya ürün
mevcut codebase
mevcut proje dokümantasyonu
önceki implementation / çalışan sistem
korunacak mevcut firma/ürün gerçekleri ve bunların bağlı olduğu mevcut sistem
```

Yeni hedef implementation'ın veya yeni codebase'in sıfırdan yazılması `project_state: new` yapmak için yeterli değildir.

```text
existing product/site + rewrite from scratch → existing
existing system + new frontend implementation → existing
idea with no existing project reality → new
```

Existing projede ayrıca şunlar beklenir:

- Mevcut kaynakların listesi veya bağlantısı
- Mevcut dokümanların durumu (güncel mi, geçerliliğini yitirmiş mi?)
- Üretilecek dokümanların mevcut olanlarla ilişkisi
- Current Reality / Target State / Transition Scope ayrımı

Çıktı, mevcut gerçeklikle çelişmemelidir. Mevcut projenin kabul edilen gerçekleri assumption olarak değil, onaylı girdi olarak işlenir.

---

## Girdi Onay Süreci

### Pending Durumu

Girdi alınmış ancak henüz onaylanmamıştır.

Pending girdide:

- Eksik zorunlu alanlar kaydedilmiştir.
- Belirsiz alanlar işaretlenmiştir.
- Planning profile önerileri ve gerekçeleri görünürdür.
- Kullanıcıya sorulması gereken sorular hazırlanmıştır.

Pending girdiyle üretim başlatılamaz.

### Approved Durumu

Kullanıcı girdinin içeriğini onaylamıştır.

Approved girdide:

- Tüm zorunlu alanlar doldurulmuştur veya kabul edilmiş assumption'larla tamamlanmıştır.
- `implementation_planning` kesinleşmiştir.
- UI/UX taşıyan projelerde `design_planning` kesinleşmiştir.
- Açık çelişkiler çözülmüştür.
- Ajan üretimi başlatabilir.

Onay geriye dönük olarak değiştirilemez. Girdi değişirse yeni bir snapshot oluşturulmalıdır. Bkz: `RUN_PROTOCOL.md`.

### Canonical Explicit Approval Kaynağı

Product Engine intake approval'ı yalnızca kullanıcının Product Engine tarafından sunulan pending girdi veya açık intake kararlarını doğrudan ve bilinçli biçimde onaylayan mesajından doğabilir.

```text
Geçerli explicit approval örnekleri:
- "Onaylıyorum, devam et."
- "Bu pending input doğru, approved yap."
- Sunulan intake kararlarını açıkça kabul eden eşdeğer doğrudan kullanıcı mesajı.

Geçerli approval SAYILMAYAN olaylar:
- IDE plan approval / auto-approve
- Tool permission veya execution approval
- Dosya yazma / terminal / patch / commit izni
- Agent'ın kendi planını tamamlaması
- Sessiz, implicit veya inferred approval
- Kullanıcının yalnızca başka bir operasyonu onaylaması
```

IDE/tool/plan approval ile Product Engine intake approval aynı kavram değildir ve MUST NOT birbirinin yerine kullanılır.

Canonical explicit approval kanıtı yoksa:

- input `status: pending` kalır,
- `approved_at` ve `approved_by` boş kalır,
- `approved_by: user` yazılamaz,
- `inputs/approved/` snapshot'ı oluşturulamaz,
- generation run başlatılamaz.

---

## Eksik Bilgi Sınıflandırması

| Durum | Tanım | Davranış |
|---|---|---|
| Kritik Eksiklik | Paket seçimi, proje türü veya kapsamı belirlenemiyor | Üretim durdurulur, kullanıcıya soru sorulur |
| Planning Profile Eksikliği | `implementation_planning` veya applicable `design_planning` kesin değil | Pending intake'te öneri/clarification üretilir; approval öncesi kesinleşir |
| Tamamlanabilir Eksiklik | Paket varsayılanıyla güvenli biçimde doldurulabilir | Assumption yapılır, kaydedilir |
| Gelecekte Belirlenecek | Şu an için zorunlu değil, sonradan tamamlanacak | Unresolved item olarak işaretlenir |

Ayrıntılı assumption kuralları için bkz: `ASSUMPTION_RULES.md`.

### Stack-Neutral Pending Kuralı

Exact frontend/backend stack, runtime veya package manager unresolved ise pending intake ve assumption kayıtları stack-neutral kalmalıdır.

```text
Allowed:
- local development/preview environment
- suitable build/runtime after technical resolution

Not allowed while unresolved:
- npm run dev
- pnpm/yarn command
- Vite-specific command
- React/Next/Vue-specific execution assumption
- framework-specific file/runtime gerçeği
```

Bu kural safe assumption üretimini engellemez; yalnız henüz verilmemiş teknik kararı assumption üzerinden gizlice kesinleştirmeyi engeller.

---

## Clarification Gerektiren Durumlar

Aşağıdaki durumlarda ajan MUST kullanıcıya soru sormalıdır:

- `project_type` belirsiz veya çelişkili ise
- `delivery_profile` belirtilmemişse (pending intake aşamasında netleştirilmeli veya safe inference ile belirlenip onay için kullanıcının onayına sunulmalıdır; approved input öncesi kesinleşmek zorundadır)
- `implementation_planning` için `standard` ve `full` arasında proje kapsamını ciddi biçimde değiştiren bir belirsizlik varsa
- UI/UX taşıyan projede `design_planning` için birden fazla makul derinlik varsa ve seçim document scope'u anlamlı biçimde değiştiriyorsa
- `project_state` belirsiz ise (yani ne kadar mevcut materyal olduğu anlaşılamıyorsa)
- Birden fazla kapsam yorumu mümkün ve bunlar farklı paket seçimine yol açıyorsa
- Kullanıcı iki farklı proje hakkında bilgi vermiş gibi görünüyorsa (proje karışıklığı riski)

Ajan açık bağlamdan makul planning profile önerisi yapabilir; ancak approved input öncesi bu öneri kullanıcıya görünür olmalıdır.

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

Backend/integration readiness, henüz kararlaştırılmamış API endpoint'i, database veya backend stack'i uydurma izni vermez. Exact stack unresolved iken stack-specific execution assumption da yapılamaz. Bkz: `PLANNING_PROFILES.md`.

---

## Intake'in Hazır Sayılma Koşulları

Bir girdi aşağıdaki koşulların tamamını karşıladığında approved olarak kabul edilir:

1. Tüm zorunlu alanlar doldurulmuştur.
2. `project_type` ve `delivery_profile` netleştirilmiştir.
3. `implementation_planning` `standard | full` olarak netleştirilmiştir.
4. UI/UX taşıyan projelerde `design_planning` `light | standard | full` olarak netleştirilmiştir.
5. `project_state` mevcut proje gerçekliğiyle doğru sınıflandırılmış; existing ise kaynaklar ve transition context listelenmiştir.
6. Kritik çelişkiler çözülmüştür.
7. Assumption yapılan alanlar açıkça kaydedilmiştir ve unresolved stack hakkında stack-specific gerçeklik uydurulmamıştır.
8. Kullanıcının canonical explicit approval mesajı alınmıştır; IDE/tool/plan/auto-approval bu koşulu karşılamaz.
9. `approved_by: user` yalnızca 8. koşul için doğrudan kanıt varsa yazılmıştır.
