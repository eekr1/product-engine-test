# Planning Profiles

## Amaç

Bu belge, Product Engine içinde **implementation planning** ve **design planning** derinliğinin nasıl belirleneceğini tanımlar.

Planning profile'ları kalite seviyesi değildir. Bir profil yalnızca hangi planlama katmanlarının ve ne kadar ayrıntının gerekli olduğunu belirler.

```text
PROFILE DEPTH ≠ QUALITY LEVEL
```

Product Engine tarafından üretilen her uygulanabilir proje çıktısı; profil seviyesi ne olursa olsun temiz, sürdürülebilir, genişletilebilir, model-bağımsız ve ajan tarafından uygulanabilir olmalıdır.

---

## Kapsam

Bu belge şunların authoritative sahibidir:

- `implementation_planning` değerleri ve anlamları
- `design_planning` değerleri ve anlamları
- planning profile seçiminin kalite tabanı
- demo/prototype projelerde mimari kalite beklentisi
- frontend projelerde backend/integration readiness tabanı
- design planning derinliği ile tasarım kalitesinin birbirinden ayrılması
- generic/template drift'e karşı design diversity kuralları

Bu belge şunların sahibi değildir:

- Exact document ID seçimi → `PACKAGE_RULES.md`, `DOCUMENT_CATALOG.md`, `packages/`
- Doküman içerik şemaları → `templates/`
- Proje bilgisi kabulü ve explicit approval → `PROJECT_INTAKE.md`
- Assumption sınıfları → `ASSUMPTION_RULES.md`
- Validation'ın tam kontrol listesi → `VALIDATION_RULES.md`

---

## 1. Implementation Planning

Canonical değerler yalnızca şunlardır:

```text
standard
full
```

`light`, `none`, `minimal` veya eşdeğer üçüncü bir implementation planning profili tanımlı değildir.

### `standard`

Product Engine'in gerçek minimum implementation planning seviyesidir.

Amaç, yeni bir yetkin ajanın ek mimari planlama yapmak zorunda kalmadan projeyi anlayabilmesi, sıradaki işi görebilmesi ve tanımlı execution/wave akışına başlayabilmesidir.

Standard planning aşağıdaki bilgi kapsamını sağlamalıdır:

- teknik bağlam ve ana mimari sınırlar
- proje teslim aşamaları
- wave/dalga yapısı ve uygulama sırası
- mevcut durum ve sıradaki görevler
- ajan çalışma talimatları
- önemli kararlar ve gerekçeleri
- acceptance kriterleri için yeterli bağlam
- frontend/backend/data/integration sınırlarının bugünkü gerçekliğe göre açık tanımı
- henüz uygulanmayan katmanlar için gelecekteki entegrasyonu engellemeyecek temiz sınırlar

Standard, "az belge" veya "hızlıca geç" modu değildir. Product Engine için **agent-ready minimum** seviyedir.

### `full`

`standard` kapsamının tamamını içerir ve proje karmaşıklığının gerektirdiği daha derin execution planning'i ekler.

Full planning; uygun olduğunda şu tür derinlikleri kapsar:

- ayrıntılı wave dependency graph'ları
- daha granüler acceptance criteria
- cross-system veya cross-feature bağımlılıkları
- karmaşık data/API contract planlaması
- test stratejisi ve kritik test katmanları
- production/deployment/operations planlaması (yalnızca gerçekten kapsamdaysa)
- migration veya mevcut sistem geçiş planları
- teknik riskler ve uygulanma sırası kararları

`full`, gereksiz doküman üretme izni değildir. Yalnızca gerçek karmaşıklık tarafından gerekçelendirilen derinlik üretilir.

---

## 2. Design Planning

UI/UX taşıyan projelerde canonical değerler yalnızca şunlardır:

```text
light
standard
full
```

`none` design planning profili yoktur.

UI/UX taşımayan bir proje türünde (`api-service`, salt `infrastructure` vb.) `design_planning` profili seçilmez; alan applicable değildir. Bu durum `none` adlı bir profile dönüştürülmez.

### `light`

Light, belge sayısının hafif olmasıdır; tasarım kalitesinin düşük olması değildir.

En azından projenin uygulanabilir ve ayırt edilebilir görsel/UX yönünü tanımlayan güçlü bir `DESIGN_RULES` kapsamı gerekir.

Light seviyede dahi tasarım:

- projeye özgü bir visual concept taşımalı,
- modern ve güncel composition/typography/spacing kararları üretmeli,
- generic hazır tema görünümünden kaçınmalı,
- sektör klişelerini otomatik tasarım kararı olarak kullanmamalı,
- responsive ve erişilebilir kullanımın temelini tanımlamalı,
- uygulama sırasında farklı ajanların aynı tasarım dilini sürdürebilmesini sağlamalıdır.

Light özellikle satış demosu, kurumsal frontend demo veya sınırlı ekran sayısına sahip UI işleri için uygundur.

### `standard`

Light kapsamının tamamını içerir ve tasarımı bir sistem olarak modellemek için gereken orta derinliği ekler.

Uygun olduğunda şu katmanları kapsar:

- design rules
- design system / token ve component ilkeleri
- global shell / navigation yapısı
- page/screen design package'ları
- ortak system state'leri
- responsive davranışların sayfa seviyesinde netleşmesi

Standard, gerçek ürün veya birden çok ekran/sayfa içeren ciddi UI projeleri için varsayılan güçlü seviyedir.

### `full`

Standard kapsamının tamamını içerir ve karmaşık ürün davranışlarının tasarım düzeyinde ayrıntılı modellenmesini sağlar.

Uygun olduğunda şu derinlikleri ekler:

- feature-level design package'ları
- karmaşık multi-step flow'lar
- auth/gate/permission deneyimleri
- cross-screen interaction state'leri
- admin/operational arayüzler
- yoğun responsive varyasyonlar
- kompleks empty/loading/error/success/edge state matrisi

Full design planning, dosya sayısını yapay biçimde artırmaz. Yalnızca projenin gerçek UX karmaşıklığının gerektirdiği design artifact'leri seçilir.

---

## 3. Evrensel Kalite Tabanı

Planning profile ne olursa olsun aşağıdaki kalite tabanı değişmez:

```text
clean
maintainable
extensible
coherent
non-generic
current
agent-ready
```

Aşağıdaki yorumlar MUST NOT yapılır:

```text
"Prototype olduğu için geçici/dağınık olabilir."
"Demo olduğu için mimari önemli değil."
"Light design olduğu için generic template yeterli."
"Backend henüz yok, veri erişimi component içine gömülebilir."
```

Delivery profile, implementation planning ve design planning yalnızca **kapsam/derinlik** belirler; kalite tabanını düşürmez.

---

## 4. Design Diversity ve Anti-Template Kuralı

Product Engine, tasarım kararı verirken sektör veya proje türünden tek başına hazır bir görsel tema türetemez.

Örnek yasak otomatik eşlemeler:

```text
sanayi/makine → otomatik lacivert ağırlıklı klasik kurumsal tema
SaaS → otomatik mor/mavi gradient + üç feature kartı
AI ürünü → otomatik neon mor/cyan koyu arayüz
kurumsal site → otomatik hero + üç kart + logo bandı + CTA şablonu
```

Bunlar referans olabilir; default tasarım sonucu olamaz.

Her UI projesinde tasarım kararı verirken en az şu bağlamlar birlikte değerlendirilmelidir:

- ürünün/markanın karakteri ve hedef algısı
- kullanıcı kitlesi ve kullanım bağlamı
- içerik yoğunluğu ve ana görevler
- mevcut marka varlıkları ve doğrulanmış kısıtlar
- projenin diğer benzer çıktılardan nasıl ayrışacağı
- güncel ama kullanılabilir interaction/composition yaklaşımları

### Design Novelty Sınırı

Farklılaşma kullanılabilirliğin önüne geçemez.

```text
non-generic ≠ rastgele
modern ≠ trend kopyası
novel ≠ erişilemez veya anlaşılmaz
```

Amaç, template hissi vermeyen; projeye ait, tutarlı ve uygulanabilir bir design direction üretmektir.

---

## 5. Demo / Prototype Mimari Kalite Kuralı

Demo veya Prototype scope geçici olabilir; mimari kalite geçici değildir.

```text
Temporary scope ≠ throwaway architecture
```

Bir demo bugün yalnızca frontend içeriyor olsa bile, kapsam sonradan gerçek backend/data/service katmanına büyüyebilecekse bugünkü yapı bu geçişi gereksiz yeniden yazım olmadan desteklemelidir.

Product Engine, "demo" ifadesini şu davranışlar için gerekçe olarak kullanamaz:

- iş mantığını presentation component'lerine gömmek
- mock veriyi kontrolsüz biçimde farklı component'lere dağıtmak
- environment/config sınırını yok saymak
- backend entegrasyon noktalarını belirsiz bırakmak
- gerçek API geldiğinde UI'ın geniş ölçüde yeniden yazılmasını gerektirecek coupling oluşturmak
- kısa ömürlü hack'leri kalıcı mimari karar gibi belgelemek

---

## 6. Backend / Integration Readiness Baseline

Frontend ağırlıklı veya demo projelerde gerçek backend henüz kapsamda olmayabilir. Bu durumda Product Engine sahte API, endpoint veya database contract'ı üretmez.

Ancak teknik planlama aşağıdaki sınırları korumalıdır:

```text
UI / presentation
      ↓
service veya data-access boundary
      ↓
mock/local adapter bugün
real API adapter gelecekte
```

Proje bağlamına uygun biçimde en az şu soruların cevabı net olmalıdır:

- Veri bugün nereden geliyor?
- Mock/local data hangi katmanda tutuluyor?
- UI hangi interface/service boundary üzerinden veri tüketiyor?
- Gerçek backend eklendiğinde hangi katman değişecek?
- Environment/config değerleri uygulama kodundan nasıl ayrılacak?
- Backend henüz yokken hangi contract'lar yalnızca unresolved olarak kalmalı?

### Yasak Davranış

Backend readiness sağlamak, henüz kararlaştırılmamış bir backend stack'i veya API yüzeyini uydurmak anlamına gelmez.

```text
integration-ready → YES
invented backend → NO
```

Gerçek backend/API/database kapsamı onaylanırsa ilgili canonical package/document selection kuralları ayrıca uygulanır.

---

## 7. Profile Seçim İlkeleri

Planning profile'ları approved intake gerçeğinin parçasıdır.

Ajan intake sırasında uygun profile'ı önerebilir; ancak approved input öncesinde profile değerleri kullanıcı tarafından canonical explicit approval ile kesinleşmelidir.

Öneri için genel yönlendirme:

```text
Satış frontend demosu / sınırlı UI işi
→ implementation_planning: standard
→ design_planning: light

Orta ölçekli gerçek UI ürünü
→ implementation_planning: standard
→ design_planning: standard

Büyük, çok özellikli veya teknik olarak karmaşık ürün
→ implementation_planning: full
→ design_planning: full (UI/UX kapsamı varsa)
```

Bu örnekler zorunlu mapping değildir. Projenin gerçek kapsamı ve kullanıcı kararı üstündür.

---

## 8. Delivery Profile ile İlişki

`delivery_profile`, `implementation_planning` ve `design_planning` farklı eksenlerdir.

Örneğin şu kombinasyon tamamen geçerlidir:

```yaml
delivery_profile: Prototype
implementation_planning: standard
design_planning: light
```

Bu kombinasyon, ürünün teslim olgunluğunun Prototype olduğunu; buna rağmen implementation planlamasının agent-ready minimumda ve tasarım dokümantasyonunun güçlü fakat hafif artifact setiyle tutulacağını ifade eder.

Benzer şekilde:

```yaml
delivery_profile: Implementation Ready
implementation_planning: full
design_planning: full
```

karmaşık bir gerçek ürün için geçerlidir.

Delivery profile tek başına planning depth'i düşüremez veya yükseltemez.
