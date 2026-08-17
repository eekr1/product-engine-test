# Project Intake

## Amaç

Bu belge, Product Engine'in proje bilgisini nasıl kabul edeceğini, hangi bilgilerin zorunlu olduğunu, hangi durumda kullanıcıya soru sorulacağını ve intake'in onaylı sayılma koşullarını tanımlar.

Gerçek proje girdileri bu belgede saklanmaz. Gerçek girdiler `inputs/` klasöründe tutulur.

---

## Kapsam

Bu belge şunların sahibidir:

- Minimum gerekli girdi alanları
- Önerilen girdi alanları
- Canonical `project_type` vocabulary
- Corporate website için `site_architecture` alanının intake/approval gerekliliği
- Sıfırdan proje ile mevcut proje ayrımı
- Girdi onay süreci (pending → approved)
- Eksik bilgi sınıflandırması
- Clarification (netleştirme) gerektiren durumlar
- Assumption yapılamayacak bilgi türleri
- Planning profile alanlarının intake/approval durumu

## Kapsam Dışı

Bu belge şunların sahibi değildir:

- Corporate website page/surface architecture semantiği → `SITE_ARCHITECTURE_RULES.md`
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
  Applicable örnek türler: web-app, mobile-app, corporate-website, content-platform,
  UI taşıyan internal-tool veya diğer UI kapsamlı projeler.
```

UI/UX taşımayan projelerde `design_planning` için `none` adlı bir değer kullanılmaz; alan applicable değildir ve canonical profile seçimi yapılmaz.

### Corporate Website İçin Zorunlu Alan (MUST when `project_type: corporate-website`)

```text
site_architecture
  Approved distinct page/surface seti.
  Her executable surface PAGE-XXX kimliği, adı, amacı, navigation/route identity'si,
  scope status'u ve ana capability/content boundary'si ile kaydedilir.
```

Kurallar:

- Exact page listesi source'ta varsa intake bunu normalize eder.
- Exact page listesi eksik fakat corporate website intent açıksa agent pending intake'te güvenli bir **Proposed Site Architecture** sunar.
- Proposal approval değildir; executable truth yalnız canonical explicit user approval sonrasında oluşur.
- `Prototype`, `demo` veya `sales demo` page breadth'i otomatik azaltamaz.
- Approved distinct pages tek sayfadaki anchor section'lara sessizce collapse edilemez.
- Site architecture semantiği ve coverage kuralları `engine/SITE_ARCHITECTURE_RULES.md` authority'sidir.

Multi-page corporate website için default intake recommendation `design_planning: standard` olmalıdır. Bu otomatik approval değildir; başka profile seçimi kullanıcıya rationale ile görünür sunulmalıdır.

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
project_type: corporate-website
delivery_profile: Prototype
implementation_planning: standard
design_planning: standard
```

Bu kombinasyon çelişkili değildir. Prototype delivery profile, implementation planning seviyesini veya approved site architecture breadth'ini otomatik olarak düşürmez.

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

corporate-website
  Bir firma/marka/kurumun kurumsal kimliğini, hizmet/ürün keşfini, güven içeriğini
  ve iletişim yüzeylerini approved multi-page information architecture üzerinden
  sunan web sitesi.

api-service
  Ağırlıklı olarak API yüzeyi olan arka uç servis.

mobile-app
  iOS veya Android uygulaması.

internal-tool
  Şirket içi kullanım için araç veya pano.

content-platform
  İçerik üretimi veya tüketimine odaklanan platform.

integration
  İki veya daha fazla sistem arasında köprü kuran yapı.

infrastructure
  Altyapı, CI/CD veya DevOps odaklı çalışma.

prototype
  Fikri kanıtlamaya yönelik özel proje türü; delivery maturity için Prototype profile ile karıştırılmaz.

other
  Yukarıdakilere girmeyen proje türleri. Kısa açıklama gerektirir.
```

### Corporate Website Classification Guard

Source/brief şu niyeti taşıyorsa `landing-page` benzeri daraltıcı bir type'a normalize edilemez:

```text
kurumsal web sitesi
firma web sitesi
müşteriye gerçek site olarak devam etmesi beklenen kurumsal sales demo
hizmet/ürün + kurumsal bilgi + iletişim information architecture'ı
```

Bu context `project_type: corporate-website` olarak pending intake'e taşınır. `sales demo`, `demo` veya `prototype` ifadesi project type'ı değiştirmez; delivery context/profile olarak değerlendirilir.

---

## Delivery Profile Tanımları

```text
Foundation
  Proje hakkında temel bilgiler belgelenmiştir.
  Ajan projeyi anlayabilir; ancak belirli teknik kararlar henüz verilmemiştir.

Prototype
  Hızlı doğrulama/demo amaçlı teslim olgunluğudur. Kalite veya approved page/scope breadth'i düşmez.
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
- Corporate website ise proposed/known site architecture görünürdür.
- Kullanıcıya sorulması gereken sorular hazırlanmıştır.

Pending girdideki proposed page seti generation authority değildir.
Pending girdiyle üretim başlatılamaz.

### Approved Durumu

Kullanıcı girdinin içeriğini onaylamıştır.

Approved girdide:

- Tüm zorunlu alanlar doldurulmuştur veya kabul edilmiş assumption'larla tamamlanmıştır.
- `implementation_planning` kesinleşmiştir.
- UI/UX taşıyan projelerde `design_planning` kesinleşmiştir.
- Corporate website ise `site_architecture` kesinleşmiştir.
- Açık çelişkiler çözülmüştür.
- Ajan üretimi başlatabilir.

Onay geriye dönük olarak değiştirilemez. Girdi değişirse yeni bir snapshot oluşturulmalıdır. Bkz: `RUN_PROTOCOL.md`.

### Canonical Explicit Approval Kaynağı

Product Engine intake approval'ı yalnızca kullanıcının Product Engine tarafından sunulan pending girdi veya açık intake kararlarını doğrudan ve bilinçli biçimde onaylayan mesajından doğabilir.

```text
Geçerli explicit approval örnekleri:
- "Onaylıyorum, devam et."
- "Bu pending input doğru, approved yap."
- Sunulan intake kararlarını ve applicable site architecture'ı açıkça kabul eden eşdeğer doğrudan kullanıcı mesajı.

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
| Site Architecture Eksikliği | Corporate website exact page seti kesin değil | Pending intake'te proposal/clarification üretilir; approval öncesi kesinleşir |
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

Aşağıdaki durumlarda ajan MUST kullanıcıya soru sormalı veya pending proposal'ı explicit approval için görünür kılmalıdır:

- `project_type` belirsiz veya çelişkili ise
- `project_type: corporate-website` fakat exact site architecture source'tan kesinleşmiyorsa
- Corporate source intent ile pending project type arasında single-page/corporate-site çelişkisi varsa
- `delivery_profile` belirtilmemişse
- `implementation_planning` için `standard` ve `full` arasında proje kapsamını ciddi biçimde değiştiren bir belirsizlik varsa
- UI/UX taşıyan projede `design_planning` için birden fazla makul derinlik varsa ve seçim document scope'u anlamlı biçimde değiştiriyorsa
- `project_state` belirsiz ise
- Birden fazla kapsam yorumu mümkün ve bunlar farklı paket seçimine yol açıyorsa
- Kullanıcı iki farklı proje hakkında bilgi vermiş gibi görünüyorsa

Ajan açık bağlamdan makul planning profile ve site architecture önerisi yapabilir; ancak approved input öncesi bu öneriler kullanıcıya görünür olmalıdır.

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
- Corporate website'te approved page seti (agent pending proposal üretebilir; sessizce approved sayamaz)
```

Bu bilgiler eksikse uygun pending clarification/proposal davranışı uygulanır.

Backend/integration readiness, henüz kararlaştırılmamış API endpoint'i, database veya backend stack'i uydurma izni vermez. Exact stack unresolved iken stack-specific execution assumption da yapılamaz. Bkz: `PLANNING_PROFILES.md`.

---

## Intake'in Hazır Sayılma Koşulları

Bir girdi aşağıdaki koşulların tamamını karşıladığında approved olarak kabul edilir:

1. Tüm zorunlu alanlar doldurulmuştur.
2. `project_type` ve `delivery_profile` netleştirilmiştir.
3. `implementation_planning` `standard | full` olarak netleştirilmiştir.
4. UI/UX taşıyan projelerde `design_planning` `light | standard | full` olarak netleştirilmiştir.
5. `project_type: corporate-website` ise `site_architecture` PAGE identities ile kesinleşmiş ve kullanıcıya görünür biçimde onaylanmıştır.
6. `project_state` mevcut proje gerçekliğiyle doğru sınıflandırılmış; existing ise kaynaklar ve transition context listelenmiştir.
7. Kritik çelişkiler çözülmüştür.
8. Assumption yapılan alanlar açıkça kaydedilmiştir ve unresolved stack hakkında stack-specific gerçeklik uydurulmamıştır.
9. Kullanıcının canonical explicit approval mesajı alınmıştır; IDE/tool/plan/auto-approval bu koşulu karşılamaz.
10. `approved_by: user` yalnızca 9. koşul için doğrudan kanıt varsa yazılmıştır.
