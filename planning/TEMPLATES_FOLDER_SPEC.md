# TEMPLATES_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `templates/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- Template kavramının Product Engine içerisindeki anlamını,
- `templates/` klasörünün sistemdeki görevini,
- template türlerini,
- template dosyalarının ortak yapısını,
- placeholder ve üretim talimatı sistemini,
- template’lerin package, engine, ref ve output katmanlarıyla ilişkisini,
- template’lerin ölçeklenme, doğrulanma ve sürümlenme kurallarını,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge gerçek bir proje dokümanı template’i değildir.

`planning/TEMPLATES_FOLDER_SPEC.md`, Product Engine içerisinde kullanılacak gerçek template belgelerini hazırlayan ajan için bağlayıcı bir inşa rehberidir.

Gerçek template dosyaları `templates/` klasörü içerisinde yer alacaktır.

---

# 2. Kaynak ve Üst Bağlam

`templates/` klasörü hazırlanırken aşağıdaki belgeler temel kaynak olarak kabul edilmelidir:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/ENGINE_FOLDER_SPEC.md`
3. `planning/PACKAGES_FOLDER_SPEC.md`
4. `planning/TEMPLATES_FOLDER_SPEC.md`
5. `engine/DOCUMENT_CATALOG.md`
6. `engine/INFORMATION_MAP.md`
7. `engine/OUTPUT_STRUCTURE.md`
8. `engine/VALIDATION_RULES.md`
9. `engine/ASSUMPTION_RULES.md`
10. `packages/` içerisindeki tamamlanmış package belgeleri
11. İlgili `ref/` belgeleri
12. Mevcut kök klasör yapısı

`PRODUCT_ENGINE_BRAIN.md`, Product Engine’in hazır şablonları proje bilgileriyle doldurmasını, bilgileri doğru belgeler arasında dağıtmasını ve doğrudan kullanılabilir bir dokümantasyon paketi üretmesini hedefler.

Template sistemi bu hedefin üretim biçimi ve belge iskeleti katmanıdır.

---

# 3. Template Kavramı

Bir template, belirli bir dokümanın:

- yapısını,
- zorunlu bölümlerini,
- koşullu bölümlerini,
- beklenen bilgi türlerini,
- üretim kurallarını,
- içerik sınırlarını,
- kalite beklentilerini,
- placeholder alanlarını,
- diğer belgelerle ilişkisini

tanımlayan proje bağımsız üretim sözleşmesidir.

Template yalnızca boş başlıklardan oluşan bir Markdown dosyası değildir.

Template, bir ajanın ilgili dokümanı doğru biçimde üretebilmesi için yeterli yapısal ve anlamsal yönlendirmeyi sağlamalıdır.

```text
Template
=
Belge iskeleti
+
Bilgi alanları
+
Üretim talimatları
+
Koşullu bölümler
+
Kalite sınırları
+
Çıktı beklentisi

------

# 4. `templates/` Klasörünün Sistem İçindeki Görevi

`templates/` klasörü şu soruların sahibidir:

- Seçilen doküman hangi yapıyla oluşturulmalıdır?
- Hangi bölümler zorunludur?
- Hangi bölümler koşulludur?
- Her bölüme hangi bilgi türü yazılmalıdır?
- Hangi bilgi başka bir belgeden alınmalıdır?
- Hangi bölüm ne kadar ayrıntılı olmalıdır?
- Ajan hangi alanlarda yorum yapabilir?
- Hangi alanlarda yalnızca verilen bilgi kullanılmalıdır?
- Eksik bilgi nasıl gösterilmelidir?
- Placeholder’lar nasıl kullanılmalıdır?
- Dokümanın farklı proje ve delivery profile seviyelerinde nasıl ölçekleneceği nedir?
- Nihai doküman hangi kalite kriterlerini karşılamalıdır?

`templates/` klasörü Product Engine’in belge üretim biçimi katmanıdır.

------

# 5. Kapsam Dışı

`templates/` klasörü aşağıdaki içeriklerin sahibi değildir:

- Hangi package’ın seçileceği
- Hangi dokümanın hangi projede zorunlu olduğu
- Proje intake alanlarının ana tanımları
- Product Engine’in genel üretim pipeline’ı
- Bilginin belgeler arasındaki ana sahiplik haritası
- Genel assumption kuralları
- Genel conflict resolution kuralları
- Run kayıtları
- Gerçek proje bilgileri
- Gerçek müşteri içerikleri
- Nihai output paketleri
- Kalıcı loglar
- Claude, Gemini, GPT veya Codex’e özel prompt yapıları
- Tek bir projeye ait teknik veya tasarım kararları

Bu sorumluluklar ilgili diğer klasörlerde bulunmalıdır.

```text
packages/
→ Hangi template’lerin seçileceğini belirler.

templates/
→ Seçilen dokümanların nasıl oluşturulacağını tanımlar.

engine/INFORMATION_MAP.md
→ Bilgilerin hangi dokümanlara dağıtılacağını belirler.

engine/ASSUMPTION_RULES.md
→ Eksik bilgiyle nasıl davranılacağını belirler.

engine/OUTPUT_STRUCTURE.md
→ Üretilen belgelerin nihai konumunu belirler.

ref/
→ Kaliteli örnek, yapı ve ayrıntı referansı sağlar.
```

------

# 6. Klasör Yapısı

Başlangıçta `templates/` klasörü aşağıdaki yapıya sahip olacaktır:

```text
templates/
├── README.md
│
├── ai/
│   ├── PROJECT_BRAIN_TEMPLATE.md
│   ├── PRODUCT_RULES_TEMPLATE.md
│   ├── TECH_CONTEXT_TEMPLATE.md
│   ├── PRODUCT_STRATEGY_TEMPLATE.md
│   ├── CURRENT_STATUS_TEMPLATE.md
│   ├── NEXT_TASKS_TEMPLATE.md
│   ├── DECISIONS_TEMPLATE.md
│   └── AGENT_INSTRUCTIONS_TEMPLATE.md
│
├── project/
│   ├── README_TEMPLATE.md
│   ├── PROJECT_PLAN_TEMPLATE.md
│   ├── DATA_MODEL_TEMPLATE.md
│   ├── API_CONTRACTS_TEMPLATE.md
│   ├── DEPLOYMENT_TEMPLATE.md
│   ├── OPERATIONS_TEMPLATE.md
│   ├── TEST_STRATEGY_TEMPLATE.md
│   └── ENV_EXAMPLE_TEMPLATE.md
│
├── design/
│   ├── DESIGN_RULES_TEMPLATE.md
│   ├── DESIGN_SYSTEM_TEMPLATE.md
│   ├── DESIGN_PACKAGE_TEMPLATE.md
│   ├── GLOBAL_SHELL_TEMPLATE.md
│   ├── PAGE_SPEC_TEMPLATE.md
│   ├── COMPONENT_SPEC_TEMPLATE.md
│   └── SYSTEM_STATES_TEMPLATE.md
│
├── waves/
│   ├── WAVE_MAP_TEMPLATE.md
│   ├── WAVE_PLAN_TEMPLATE.md
│   └── STANDARD_WAVE_TEMPLATE.md
│
├── prompts/
│   ├── START_PROJECT_PROMPT.md
│   ├── START_WAVE_PROMPT.md
│   ├── CONTINUE_WAVE_PROMPT.md
│   ├── UPDATE_DOCS_PROMPT.md
│   └── VALIDATE_PROJECT_PROMPT.md
│
└── runs/
    (Run operasyon belgelerinin şablonları burada tutulur.)
```

`DESIGN_RULES_TEMPLATE.md` yalnızca `templates/design/` altında bulunur; `templates/ai/` altında ayrı bir kopyası yoktur.

`templates/runs/` alt klasörü run operasyon belgelerinin şablonlarının authoritative konumudur.

Bu ağaç başlangıç hedefidir.

Gerçek template listesi, tamamlanmış `DOCUMENT_CATALOG.md` ve package belgeleriyle doğrulanmalıdır.

Katalogda karşılığı bulunmayan template sessizce oluşturulmamalıdır.

Gerekli yeni template’ler yalnızca bağımsız bir doküman sorumluluğu bulunması hâlinde eklenmelidir.

------

# 7. Template ile Ref Arasındaki Ayrım

Template ve ref aynı şey değildir.

## Ref

Ref belgesi:

- gerçek veya örnek bir proje bağlamı içerebilir,
- yüksek kaliteli bir çıktı örneği olabilir,
- bölümleme ve ayrıntı seviyesi gösterebilir,
- belirli bir projeye ait kararlar barındırabilir,
- doğrudan yeni projeye kopyalanmamalıdır.

## Template

Template:

- proje bağımsız olmalıdır,
- başka proje adı veya içeriği içermemelidir,
- üretim sırasında doğrudan kullanılmalıdır,
- zorunlu ve koşullu alanları tanımlamalıdır,
- bilgi beklenen yerleri açıkça göstermelidir,
- üretim kurallarını taşımalıdır.

```text
Ref
→ Nasıl iyi göründüğünü gösterir.

Template
→ Nasıl üretileceğini tanımlar.
```

Ref belgeleri template hazırlanırken kaynak olabilir.

Ancak template, ref belgesinin temizlenmiş kopyası olmamalıdır.

------

# 8. Template Türleri

Template sistemi en az dört ana türü desteklemelidir.

## 8.1 Document Template

Nihai proje dokümanlarının üretim iskeletidir.

Örnek:

- `PROJECT_BRAIN_TEMPLATE.md`
- `TECH_CONTEXT_TEMPLATE.md`
- `PROJECT_PLAN_TEMPLATE.md`

------

## 8.2 Structural Template

Bir dokümanın içinde tekrar eden yapısal birimlerin şablonudur.

Örnek:

- Standart karar kaydı
- Standart Wave bölümü
- Standart kullanıcı akışı
- Standart API endpoint tanımı
- Standart page specification

Bu yapılar ayrı dosya veya ana template içinde alt sözleşme olarak tutulabilir.

------

## 8.3 Prompt Template

Üretilen dokümantasyonu kullanacak ajana verilecek başlangıç veya çalışma promptlarının iskeletidir.

Örnek:

- Projeyi başlatma promptu
- Wave başlatma promptu
- Doküman güncelleme promptu
- Validation promptu

Prompt template’leri doküman template’lerinden açık biçimde ayrılmalıdır.

------

## 8.4 Output Fragment Template

Birden fazla dokümanda kullanılan küçük fakat standartlaştırılmış çıktı parçalarıdır.

Örnek:

- Metadata bloğu
- Durum tablosu
- Decision entry
- Assumption entry
- Validation sonucu

Bu tür parçalar ilk sürümde ayrı dosya olmak zorunda değildir.

Ancak template sistemi tekrar eden yapıları ortaklaştırabilecek biçimde hazırlanmalıdır.

------

# 9. Template Dosyalarının Ortak Yapısı

Her template mümkün olduğunca aşağıdaki üst yapıyı kullanmalıdır:

```md
# TEMPLATE_NAME

## Template Metadata

## Amaç

## Kullanım Koşulları

## Girdi Kaynakları

## Zorunlu Bölümler

## Koşullu Bölümler

## İçerik Üretim Kuralları

## Kapsam Dışı

## Diğer Dokümanlarla İlişki

## Delivery Profile Davranışı

## Validation Beklentileri

---

# OUTPUT DOCUMENT START

... nihai doküman iskeleti ...

# OUTPUT DOCUMENT END
```

Template metadata ve üretim kuralları nihai output dokümanına taşınmamalıdır.

Template içerisinde hangi bölümlerin üretim talimatı, hangilerinin gerçek output iskeleti olduğu açık biçimde ayrılmalıdır.

------

# 10. Template Metadata

Her template aşağıdaki metadata alanlarını taşımalıdır:

```text
template_id
template_name
document_id
version
status
template_type
category
supported_packages
supported_delivery_profiles
required_inputs
conditional_inputs
dependencies
output_filename
```

Örnek:

```yaml
template_id: project-brain
template_name: Project Brain Template
document_id: PROJECT_BRAIN
version: 0.1
status: active
template_type: document
category: ai
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
output_filename: PROJECT_BRAIN.md
```

Bütün template dosyalarında aynı metadata formatı kullanılmalıdır.

Metadata biçimi bir kez belirlendikten sonra diğer template’lerde değiştirilmemelidir.

------

# 11. Placeholder Sistemi

Template’lerde proje bilgileri için standart placeholder biçimi kullanılmalıdır.

Varsayılan biçim:

```text
{{PLACEHOLDER_NAME}}
```

Örnek:

```text
{{PROJECT_NAME}}
{{PRODUCT_SUMMARY}}
{{TARGET_USERS}}
{{TECH_STACK}}
{{PRIMARY_GOAL}}
```

Placeholder isimleri:

- İngilizce,
- büyük harfli,
- boşluksuz,
- alt çizgiyle ayrılmış,
- anlamı açık

olmalıdır.

Aynı bilgi için farklı template’lerde farklı placeholder isimleri kullanılmamalıdır.

Örneğin aşağıdaki kullanım hatalıdır:

```text
{{TARGET_USER}}
{{USER_AUDIENCE}}
{{PRIMARY_PERSONA}}
```

Aynı kavramı temsil ediyorlarsa tek bir standart isim seçilmelidir.

------

# 12. Placeholder Türleri

Placeholder’lar yalnızca düz metin alanları olarak ele alınmamalıdır.

Aşağıdaki türler desteklenmelidir.

## 12.1 Scalar Placeholder

Tek değer alır.

```text
{{PROJECT_NAME}}
{{PRIMARY_PLATFORM}}
```

## 12.2 List Placeholder

Birden fazla madde içerir.

```text
{{TARGET_USERS_LIST}}
{{CORE_FEATURES_LIST}}
```

## 12.3 Structured Placeholder

Belirli alt alanlardan oluşur.

```text
{{TECH_STACK_BLOCK}}
{{USER_FLOW_BLOCK}}
{{API_ENDPOINT_BLOCK}}
```

## 12.4 Generated Narrative Placeholder

Verilen bilgilerden anlamlı bir açıklama üretilmesini gerektirir.

```text
{{PRODUCT_VISION_NARRATIVE}}
{{PROBLEM_STATEMENT_NARRATIVE}}
```

## 12.5 Conditional Placeholder

Yalnızca belirli koşullarda kullanılır.

```text
{{AUTHENTICATION_SECTION_IF_REQUIRED}}
{{ADMIN_PANEL_SECTION_IF_REQUIRED}}
```

Placeholder türleri template dokümanında açıkça belirtilmelidir.

------

# 13. Placeholder Kullanım Kuralları

Template üretiminde aşağıdaki kurallar uygulanmalıdır:

1. Nihai output içerisinde çözülmemiş zorunlu placeholder kalmamalıdır.
2. Koşullu placeholder’ın koşulu oluşmadıysa ilgili bölüm tamamen kaldırılmalıdır.
3. Placeholder yerine bilinmeyen bilgi uydurulmamalıdır.
4. Kritik olmayan eksikliklerde `ASSUMPTION_RULES.md` uygulanmalıdır.
5. Gelecekte belirlenecek bilgi açık unresolved item olarak gösterilebilir.
6. Aynı bilgi birden fazla dokümana farklı anlamlarla dağıtılmamalıdır.
7. Placeholder açıklamaları nihai output’a taşınmamalıdır.
8. Placeholder değerleri Markdown yapısını bozmamalıdır.
9. Empty, N/A veya TBD kullanımı kurallı olmalıdır.
10. Boş kalan başlıklar nihai dokümanda bırakılmamalıdır.

------

# 14. Üretim Talimatları

Template yalnızca placeholder içermemelidir.

Ajanın bir bölümü nasıl yazacağını belirleyen üretim talimatları da bulunmalıdır.

Üretim talimatları aşağıdaki biçimlerden biriyle gösterilebilir:

```md
<!-- GENERATION_RULE:
Bu bölümde ürünün çözdüğü problemi 2–4 paragrafta açıkla.
Teknik çözüm ayrıntısına girme.
Yalnızca onaylanmış intake bilgilerini ve kayıtlı varsayımları kullan.
-->
```

veya:

```text
[GENERATION RULE]
- Amaç: Ürünün temel problemini açıklamak
- Uzunluk: 150–300 kelime
- Kaynaklar: PROJECT_SUMMARY, TARGET_USERS, PRIMARY_GOAL
- Yasak: Teknik stack anlatımı
```

Bütün template’lerde tek bir üretim talimatı formatı kullanılmalıdır.

Üretim talimatları nihai output dokümanına taşınmamalıdır.

------

# 15. Üretim Talimatlarının İçeriği

Bir üretim talimatı gerektiğinde şunları tanımlamalıdır:

- Bölümün amacı
- Kullanılacak bilgi kaynakları
- Beklenen ayrıntı seviyesi
- Beklenen biçim
- Uzunluk veya yoğunluk sınırı
- Kullanılmaması gereken bilgiler
- Başka belgeye bırakılması gereken ayrıntılar
- Koşullu davranış
- Validation beklentisi

Örnek:

```text
Amaç:
Projenin hedef kullanıcılarını tanımlamak.

Kaynak:
Approved intake içerisindeki target users ve user roles alanları.

Beklenen çıktı:
Her kullanıcı türü için kısa ihtiyaç ve kullanım amacı.

İçermez:
Persona hikâyesi, pazarlama dili veya varsayımsal demografi.

Koşul:
Tek bir kullanıcı türü varsa gereksiz alt başlık üretme.
```

------

# 16. Sabit İçerik ile Üretilen İçeriğin Ayrımı

Template içerisinde üç içerik türü açıkça ayrılmalıdır.

## 16.1 Sabit İçerik

Her projede değişmeden kalan belge yapısı veya açıklamadır.

Örnek:

- Ana başlık biçimi
- Standart durum değerleri
- Standart karar kayıt alanları

## 16.2 Proje Verisi

Intake veya proje kaynaklarından doğrudan gelen bilgidir.

Örnek:

- Proje adı
- Hedef kullanıcı
- Kullanılan stack

## 16.3 Üretilen İçerik

Verilen bilgilerden ajan tarafından sentezlenen açıklamadır.

Örnek:

- Ürün vizyonu anlatımı
- Mimari yaklaşım özeti
- Wave amacı

Template, bu üç türü birbirine karıştırmamalıdır.

------

# 17. Zorunlu ve Koşullu Bölümler

Her template bölümleri aşağıdaki sınıflardan biriyle tanımlamalıdır:

## Zorunlu Bölüm

Doküman üretildiğinde her durumda bulunur.

## Koşullu Bölüm

Belirli intake bilgisi, package, extension veya delivery profile nedeniyle eklenir.

## İsteğe Bağlı Bölüm

Kullanıcı talebi veya özel proje ihtiyacıyla eklenebilir.

## Yasak Bölüm

Bu dokümanın sorumluluğunda olmadığı için bulunmamalıdır.

Örnek:

```text
TECH_CONTEXT.md

Zorunlu:
- Stack
- Architecture Overview
- Technical Constraints

Koşullu:
- External Integrations
- Real-time Architecture
- Mobile Packaging

Yasak:
- Aktif görev listesi
- Uzun ürün vizyonu
- Pazarlama metinleri
```

------

# 18. Doküman Sorumluluğu ve Tekrar Kontrolü

Her template yalnızca ilgili dokümanın sahip olduğu bilgileri ayrıntılı biçimde üretmelidir.

Başka bir dokümanın sahibi olduğu bilgi gerekiyorsa:

- kısa referans verilebilir,
- kısa özet kullanılabilir,
- ana dokümana yönlendirme yapılabilir.

Ancak ana bilgi ikinci kez ayrıntılı olarak yeniden yazılmamalıdır.

Örnek:

```text
PROJECT_BRAIN
→ Ürünün amacı ve vizyonunun ana sahibidir.

README
→ Bunların kısa ve dışarıdan okunabilir özetini taşır.

PROJECT_PLAN
→ Aynı vizyonu tekrar anlatmak yerine uygulanacak kapsamı tanımlar.
```

Template’ler `engine/INFORMATION_MAP.md` ile uyumlu olmalıdır.

------

# 19. Delivery Profile Davranışı

Aynı template farklı delivery profile seviyelerinde farklı yoğunlukta kullanılabilmelidir.

## Foundation

- Temel bağlam
- Minimum ama yeterli bölüm
- Düşük ayrıntı
- Gelecek kararların açık kaydı

## Prototype

- Görsel ve kullanıcı akışlarına odak
- Uygulama için yeterli temel
- Genişletilebilirlik notları
- Gösterim kapsamı ile gerçek kapsam ayrımı

## Implementation Ready

- Ajanın doğrudan çalışabileceği ayrıntı
- Net kapsam ve kurallar
- Bağımlılıklar ve kabul kriterleri
- Wave ve görev uyumu

## Production Ready

- Operasyonel detay
- Deployment, test, security ve monitoring
- Daha sıkı validation
- Üretim sonrası sürdürülebilirlik

Template’ler her profil için tamamen ayrı kopyalar üretmemelidir.

Varsayılan yaklaşım:

```text
Tek temel template
+
Delivery profile’a bağlı bölüm ve yoğunluk kuralları
```

Ayrı template yalnızca yapı gerçekten değişiyorsa oluşturulmalıdır.

------

# 20. Template Kalıtımı ve Ortak Yapılar

Template sistemi gereksiz kopyaları azaltmalıdır.

Birden fazla template aynı metadata, karar kaydı veya durum tablosunu kullanıyorsa ortak bir yapı tanımlanabilir.

Ancak ilk sürümde karmaşık teknik template inheritance sistemi kurmak zorunlu değildir.

V0 için yeterli yaklaşım:

- ortak formatları README içinde tanımlamak,
- template’lerde ortak format kimliğine referans vermek,
- tekrar eden büyük yapıları ayrı fragment template’e dönüştürmek.

Template kalıtımı ajanın anlayamayacağı kadar soyut hâle getirilmemelidir.

------

# 21. Template ile Package İlişkisi

Package:

- hangi dokümanın üretileceğini,
- hangi delivery profile’ın uygulanacağını,
- hangi koşullu belgelerin ekleneceğini

belirler.

Template:

- seçilen dokümanın nasıl üretileceğini

belirler.

```text
Package
→ PROJECT_BRAIN gerekli.

Template
→ PROJECT_BRAIN nasıl yazılır?
```

Package dosyaları template metnini tekrar etmemelidir.

Template dosyaları da hangi projede seçileceğine dair kapsamlı package mantığı üretmemelidir.

------

# 22. Template ile Document Catalog İlişkisi

Her document template’in `engine/DOCUMENT_CATALOG.md` içerisinde karşılığı bulunmalıdır.

Template metadata içerisindeki `document_id`, katalogdaki doküman kimliğiyle birebir eşleşmelidir.

Aşağıdaki ilişkiler korunmalıdır:

```text
Document Catalog
→ Doküman nedir?

Package
→ Bu doküman gerekli mi?

Template
→ Bu doküman nasıl üretilir?

Output Structure
→ Bu doküman nereye yerleştirilir?
```

Katalogda bulunmayan doküman için template oluşturulursa bu durum raporlanmalıdır.

------

# 23. Template ile Information Map İlişkisi

Template’ler kendi bilgi kaynaklarını `engine/INFORMATION_MAP.md` ile uyumlu tanımlamalıdır.

Örneğin:

```text
PROJECT_BRAIN_TEMPLATE
Kaynaklar:
- Product purpose
- Problem statement
- Target users
- Product vision

TECH_CONTEXT_TEMPLATE
Kaynaklar:
- Stack
- Architecture
- Technical constraints
- Integrations
```

Bir template, bilgi haritasında başka dokümana ait olan veriyi ana içerik olarak sahiplenmemelidir.

------

# 24. Template ile Assumption Rules İlişkisi

Template’ler bilinmeyen bilgilerin rastgele tamamlanmasına izin vermemelidir.

Eksik alanlarda davranış:

- Kritik eksiklik → dur ve sor
- Kritik olmayan eksiklik → kayıtlı varsayım kullanılabilir
- Gelecekte belirlenecek bilgi → unresolved item
- İlgisiz bilgi → bölüm kaldırılır

Template, kendi içinde genel assumption sistemi kurmamalıdır.

`engine/ASSUMPTION_RULES.md` authoritative kaynak olmalıdır.

------

# 25. Template ile Validation İlişkisi

Her template kendi dokümanına özel validation beklentileri tanımlamalıdır.

Örnek:

```text
PROJECT_BRAIN_TEMPLATE
- Proje amacı açık mı?
- Hedef kullanıcı tanımlı mı?
- Teknik detaylar gereksiz yere baskın mı?
- Başka projeden içerik sızıntısı var mı?

TECH_CONTEXT_TEMPLATE
- Stack alanları birbiriyle uyumlu mu?
- Bilinmeyen teknolojiler yapılmış gibi gösterilmiş mi?
- Mimari kararların gerekçesi bulunuyor mu?
```

Genel validation sistemi tekrar edilmemelidir.

Genel validation kuralları `engine/VALIDATION_RULES.md` içerisinde kalmalıdır.

------

# 26. Prompt Template’leri

`templates/prompts/` içerisindeki belgeler doküman üretmek yerine ajan çalışmasını başlatmak için kullanılır.

Prompt template’leri en az şu bileşenleri desteklemelidir:

- Proje bağlamının okunması
- Authoritative dosya sırası
- Aktif iş veya wave
- Kapsam sınırı
- Yapılmaması gerekenler
- Çalışma sonu doküman güncellemesi
- Validation ve rapor beklentisi

Prompt template’leri:

- belirli bir modele özel olmamalıdır,
- gereksiz uzun bağlamı tekrar etmemelidir,
- ilgili proje dokümanlarına referans vermelidir,
- ajanın yalnızca aktif göreve odaklanmasını sağlamalıdır.

------

# 27. `START_PROJECT_PROMPT.md`

### Amaç

Yeni bir projenin ilk uygulama çalışmasını başlatan prompt yapısını tanımlar.

### İçermelidir

- Okuma sırası
- Projenin mevcut durumu
- İlk aktif görev veya Wave
- Kapsam sınırı
- Output beklentisi
- Doküman güncelleme sorumluluğu

### İçermemelidir

- Belirli bir model adı
- Proje özelinde sabit içerik
- Bütün engine kurallarının tekrarı

------

# 28. `START_WAVE_PROMPT.md`

### Amaç

Onaylanmış bir Wave’in uygulanmasını başlatan prompt yapısını tanımlar.

### İçermelidir

- Authoritative belgeler
- Aktif Wave
- Yalnızca aktif Wave’e çalışma kuralı
- Acceptance criteria
- Test ve doğrulama beklentisi
- Wave sonu doküman güncellemesi

------

# 29. `CONTINUE_WAVE_PROMPT.md`

### Amaç

Yarım kalan veya doğrulama sonrası devam eden Wave çalışmasını başlatır.

### İçermelidir

- Önceki çalışma durumu
- Tamamlanan işler
- Açık kalan işler
- Bilinen sorunlar
- Devam sınırı
- Yeniden yapılmaması gerekenler

------

# 30. `UPDATE_DOCS_PROMPT.md`

### Amaç

Bir uygulama çalışması sonrasında proje belgelerinin güncellenmesini sağlar.

### İçermelidir

- Hangi belgelerin kontrol edileceği
- Gerçek değişikliklerin yazılması
- Yapılmamış işlerin tamamlanmış gösterilmemesi
- Karar kayıtlarının güncellenmesi
- CURRENT_STATUS ve NEXT_TASKS uyumu
- Run veya çalışma notlarının eklenmesi

------

# 31. `VALIDATE_PROJECT_PROMPT.md`

### Amaç

Üretilen dokümantasyon paketini veya uygulama sonucunu bağımsız biçimde denetler.

### İçermelidir

- Kontrol edilecek belgeler
- Authoritative sıralama
- Çelişki arama
- Eksik kapsam kontrolü
- Başka projeden içerik sızıntısı kontrolü
- Kritik, orta ve düşük bulgu sınıfları
- Önce raporlama, sonra düzeltme ilkesi

------

# 32. AI Template Grubu

`templates/ai/` klasörü ajanların projeyi anlaması ve devam ettirmesi için gerekli çekirdek belgeleri üretir.

Bu grup en az şu sorumlulukları desteklemelidir:

```text
PROJECT_BRAIN
→ Ürün kimliği ve vizyonu

PRODUCT_RULES
→ Ürün davranışı ve değişmez kurallar

TECH_CONTEXT
→ Teknik gerçeklik ve mimari bağlam

PRODUCT_STRATEGY
→ Ürün yönü, öncelikler ve konumlandırma

DESIGN_RULES
→ Görsel ve deneyimsel kurallar

CURRENT_STATUS
→ Şu an gerçek durumda ne var?

NEXT_TASKS
→ Sırada ne yapılmalı?

DECISIONS
→ Kalıcı kararlar ve gerekçeleri

AGENT_INSTRUCTIONS
→ Ajan nasıl çalışmalı?
```

Template’ler bu sorumlulukları birbirine karıştırmamalıdır.

------

# 33. Project Template Grubu

`templates/project/` klasörü genel proje, teknik planlama ve operasyon belgelerini üretir.

Bu grup gerektiğinde şunları desteklemelidir:

- Proje README
- Proje planı
- Veri modeli
- API sözleşmeleri
- Deployment
- Operasyon
- Test stratejisi
- Environment örneği

Her proje için bütün bu belgeler zorunlu olmamalıdır.

Seçim package tarafından yapılmalıdır.

------

# 34. Design Template Grubu

`templates/design/` klasörü ürünün veya sitenin görsel ve deneyimsel uygulama bağlamını üretir.

Bu grup:

- tasarım ilkeleri,
- tasarım sistemi,
- ortak shell,
- sayfa yapıları,
- bileşen kuralları,
- sistem durumları,
- responsive davranış,
- erişilebilirlik,
- içerik yoğunluğu

gibi konuları desteklemelidir.

Design template’leri yalnızca renk ve font listesi üretmemelidir.

Ajanın tasarımı tutarlı biçimde uygulayabilmesi için davranış ve kompozisyon kuralları da taşımalıdır.

------

# 35. Wave Template Grubu

`templates/waves/` klasörü projenin uygulanabilir çalışma parçalarına bölünmesini sağlar.

## `WAVE_MAP_TEMPLATE.md`

- Tüm Wave’lerin üst seviye sırasını
- Bağımlılıklarını
- Amaçlarını
- Genel tamamlanma durumunu

tanımlar.

## `WAVE_PLAN_TEMPLATE.md`

- Her Wave’in ayrıntılı uygulama planını
- Görevlerini
- Acceptance criteria’larını
- Test beklentilerini
- Doküman güncelleme gereksinimlerini

tanımlar.

## `STANDARD_WAVE_TEMPLATE.md`

Tek bir Wave için standart yapı tanımlar.

Wave template’leri birbirini gereksiz yere tekrar etmemelidir.

------

# 36. Template İsimlendirme Kuralları

Template dosyaları aşağıdaki biçimi kullanmalıdır:

```text
DOCUMENT_NAME_TEMPLATE.md
```

Örnek:

```text
PROJECT_BRAIN_TEMPLATE.md
API_CONTRACTS_TEMPLATE.md
WAVE_MAP_TEMPLATE.md
```

Dosya isimleri:

- büyük harfli,
- alt çizgili,
- açıklayıcı,
- belge kimliğiyle uyumlu

olmalıdır.

Prompt dosyaları mevcut adlandırma biçimini koruyabilir:

```text
START_PROJECT_PROMPT.md
START_WAVE_PROMPT.md
```

------

# 37. Nihai Output Temizliği

Template’ten üretilen nihai dokümanda aşağıdakiler bulunmamalıdır:

- Template metadata
- Generation rule yorumları
- Çözülmemiş zorunlu placeholder
- Template kullanım açıklamaları
- Ref proje isimleri
- Başka projeye ait marka veya içerik
- Örnek metin olduğu belli olan içerikler
- Kullanılmayan boş başlıklar
- “Buraya yazılacak” tarzı notlar
- Modelin kendi çalışma açıklamaları

Nihai doküman, doğrudan proje repository’sinde kullanılabilir durumda olmalıdır.

------

# 38. Template Kalite İlkeleri

## 38.1 Proje Bağımsızlığı

Template belirli bir projeye ait isim, marka, sektör veya karar içermemelidir.

## 38.2 Uygulanabilirlik

Ajan template’i okuyarak ek konuşma bağlamı olmadan belgeyi üretebilmelidir.

## 38.3 Minimum Yeterlilik

Template yalnızca gerekli bölümleri üretmelidir.

## 38.4 Ölçeklenebilirlik

Aynı template farklı proje yoğunluklarında çalışabilmelidir.

## 38.5 Tek Sorumluluk

Template yalnızca ilgili dokümanın bilgi alanını sahiplenmelidir.

## 38.6 İzlenebilirlik

Üretilen içerik intake, package, assumption veya karar kaynağına bağlanabilmelidir.

## 38.7 Ref İzolasyonu

Ref içeriği yeni projeye taşınmamalıdır.

## 38.8 Model Bağımsızlığı

Template herhangi bir modelin özel özelliğine dayanmamalıdır.

## 38.9 Temiz Output

Üretilen belge ek temizlik gerektirmeden kullanılabilmelidir.

## 38.10 Geleceğe Açıklık

İlk sürümde kullanılmayan koşullu bölümler ileride eklenebilir olmalıdır.

------

# 39. Template Sürümleme

Her template bir sürüm numarası taşımalıdır.

Başlangıç biçimi:

```text
0.1
0.2
0.3
1.0
```

## Patch Benzeri Değişiklik

- Yazım düzeltmesi
- Açıklama iyileştirmesi
- Küçük validation netleştirmesi

## Minor Değişiklik

- Yeni koşullu bölüm
- Yeni placeholder
- Yeni delivery profile davranışı

## Major Değişiklik

- Doküman sorumluluğunun değişmesi
- Ana bölüm yapısının değişmesi
- Package uyumluluğunun bozulması
- Placeholder sisteminin değişmesi

Template sürüm değişiklikleri `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

Run kayıtları kullanılan template sürümünü saklamalıdır.

------

# 40. Deprecated Template Davranışı

Artık kullanılmayan template’ler doğrudan silinmemelidir.

Deprecated template:

- `status: deprecated` olarak işaretlenmeli,
- yerine geçen template belirtilmeli,
- aktif package’lardan çıkarılmalı,
- `archive/deprecated-templates/` altına taşınmalıdır.

Eski run’ların hangi template’i kullandığı bilgisi korunmalıdır.

------

# 41. Template Üretim Ajanının Görevi

`templates/` klasörünü hazırlayan ajan:

1. `PRODUCT_ENGINE_BRAIN.md` dosyasını okumalıdır.
2. `planning/ENGINE_FOLDER_SPEC.md` dosyasını okumalıdır.
3. `planning/PACKAGES_FOLDER_SPEC.md` dosyasını okumalıdır.
4. `planning/TEMPLATES_FOLDER_SPEC.md` dosyasını tamamen okumalıdır.
5. Tamamlanmış engine sözleşmelerini incelemelidir.
6. Tamamlanmış package belgelerini incelemelidir.
7. `DOCUMENT_CATALOG.md` kayıtlarını doğrulamalıdır.
8. İlgili ref belgelerini analiz etmelidir.
9. Ref belgelerinden proje özel içerik taşımamalıdır.
10. Her template’i proje bağımsız biçimde hazırlamalıdır.
11. Template metadata standardını korumalıdır.
12. Placeholder terminolojisini tutarlı kullanmalıdır.
13. Generation rule formatını tek tip kullanmalıdır.
14. Başka klasörleri değiştirmemelidir.
15. Eksik katalog veya package bağımlılıklarını raporlamalıdır.

Ajan yalnızca `templates/` klasöründe çalışmalıdır.

Aşağıdaki klasörlerin içeriğini değiştirmemelidir:

- `engine/`
- `packages/`
- `inputs/`
- `runs/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- `planning/`

------

# 42. Template Üretim Sırası

Template klasörü tek seferde kontrolsüz biçimde doldurulmamalıdır.

Önerilen üretim sırası:

```text
1. templates/README.md
2. templates/ai/
3. templates/project/
4. templates/design/
5. templates/waves/
6. templates/prompts/
```

Her grup üretildikten sonra kısa bir ara audit yapılmalıdır.

Özellikle `ai/` template’leri tamamlanmadan project ve wave template’lerine geçilmemesi önerilir.

Çünkü diğer dokümanların büyük kısmı çekirdek AI bağlamına dayanır.

------

# 43. Üretim Sonu Raporu

Template klasörünü hazırlayan ajan çalışma sonunda aşağıdaki başlıklarla kısa bir rapor sunmalıdır:

## Doldurulan Template’ler

Her template’in adı ve ürettiği doküman.

## Template–Document Catalog Eşleşmesi

Her template’in document ID karşılığı.

## Placeholder Sözlüğü

Kullanılan ana placeholder’lar ve anlamları.

## Koşullu Bölümler

Hangi template’lerde hangi koşullu bölümlerin bulunduğu.

## Delivery Profile Desteği

Template’lerin farklı yoğunluklarda nasıl davrandığı.

## Ref Kaynakları

Hangi ref belgelerinden yapısal olarak yararlanıldığı.

## Eksik Template’ler

Package veya katalog tarafından ihtiyaç duyulan ancak oluşturulamayan template’ler.

## Yapılan Varsayımlar

Spec dışında gerekli görülen varsayımlar.

## Açık Kararlar

Kullanıcı tarafından ayrıca kararlaştırılması gereken konular.

## Tekrar ve Çatışma Riskleri

Template’ler arasında sorumluluk çakışması bulunup bulunmadığı.

Bu rapor template dosyalarının içine eklenmemelidir.

------

# 44. Audit Gereksinimi

İlk template üretimi tamamlandıktan sonra `templates/` klasörü temiz bir ajan veya ayrı sohbet tarafından denetlenmelidir.

Audit aşağıdaki konuları kontrol etmelidir:

- Template ve ref ayrımının korunması
- Proje özel içerik sızıntısı
- Placeholder isim tutarlılığı
- Çözülmesi mümkün olmayan placeholder’lar
- Gereksiz zorunlu bölümler
- Eksik zorunlu bölümler
- Document Catalog uyumu
- Package uyumu
- Information Map uyumu
- Aynı bilginin farklı template’lerde kontrolsüz tekrar edilmesi
- Generation rule format tutarlılığı
- Delivery profile ölçeklenebilirliği
- Template metadata standardı
- Prompt template’lerinin model bağımsızlığı
- Nihai output’a template talimatlarının sızma riski
- Ref örneklerinden yanlış genelleme yapılması
- Küçük projelerde gereksiz dokümantasyon üretimi

Audit ajanı ilk aşamada dosyaları değiştirmemelidir.

Önce bulgularını raporlamalıdır.

Düzeltmeler ayrı bir uygulama adımında yapılmalıdır.

------

# 45. Tamamlanma Kriterleri

`templates/` klasörü aşağıdaki koşulların tamamı sağlandığında tamamlanmış kabul edilir:

1. Package’ların ihtiyaç duyduğu bütün aktif template’ler bulunmaktadır.
2. Her template’in metadata alanları eksiksizdir.
3. Her template’in document ID karşılığı bulunmaktadır.
4. Placeholder isimleri tutarlıdır.
5. Placeholder türleri tanımlıdır.
6. Zorunlu ve koşullu bölümler ayrılmıştır.
7. Generation rule biçimi standarttır.
8. Template ve nihai output bölümleri ayrılmıştır.
9. Template’ler proje bağımsızdır.
10. Ref proje içeriği template’e taşınmamıştır.
11. Template’ler Information Map ile uyumludur.
12. Template’ler package sistemiyle uyumludur.
13. Delivery profile davranışları tanımlıdır.
14. Template’ler küçük ve büyük projelerde ölçeklenebilir.
15. Çözülmemiş zorunlu placeholder nihai output’a geçmez.
16. Prompt template’leri model bağımsızdır.
17. Nihai belgeler ek temizlik gerektirmeden kullanılabilir.
18. Template sürümleri kayıtlıdır.
19. Audit sonucunda kritik çelişki bulunmamaktadır.
20. Manuel test run’ında seçilen template’lerden tutarlı doküman üretilebilmektedir.

------

# 46. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `templates/` klasörü tamamlanmış kabul edilmemelidir:

- Template’ler yalnızca boş başlıklardan oluşuyorsa
- Template’lerde başka proje isimleri bulunuyorsa
- Ref belgeleri doğrudan template olarak kullanılıyorsa
- Aynı bilgi için farklı placeholder isimleri kullanılıyorsa
- Placeholder’ların hangi kaynaktan geldiği belli değilse
- Koşullu bölümler her projede zorunlu üretiliyorsa
- Template talimatları nihai output’a sızıyorsa
- Document Catalog ile template kimlikleri eşleşmiyorsa
- Package’ların ihtiyaç duyduğu template’ler yoksa
- Template’ler bütün delivery profile’larda aynı yoğunlukta çalışıyorsa
- Küçük projeler gereksiz uzun belgeler üretmeye zorlanıyorsa
- Template’ler model özelinde talimat içeriyorsa
- Prompt template’leri engine kurallarını gereksiz yere tekrar ediyorsa
- Aynı bağlayıcı bilgi farklı template’lerde bağımsız biçimde sahipleniliyorsa
- Nihai output temiz ve doğrudan kullanılabilir değilse
- Template sürümleri izlenemiyorsa

------

# 47. Değişiklik İlkesi

Bu spec onaylandıktan sonra `templates/` klasörü hazırlanmalıdır.

Template üretimi sırasında mevcut yapı ile karşılanamayan bir ihtiyaç ortaya çıkarsa ajan:

1. Sessizce yeni template oluşturmamalıdır.
2. İhtiyacı açık biçimde raporlamalıdır.
3. Mevcut template’in koşullu bölümüyle çözülüp çözülemeyeceğini değerlendirmelidir.
4. Yeni template önerisini gerekçelendirmelidir.
5. İlgili Document Catalog kaydını belirtmelidir.
6. Onay almadan klasör yapısını değiştirmemelidir.

Kalıcı template değişiklikleri `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

------

# 48. Nihai Hedef

`templates/` klasörü tamamlandığında Product Engine:

- seçilen dokümanın yapısını,
- kullanılacak bilgi kaynaklarını,
- zorunlu ve koşullu bölümleri,
- üretim yoğunluğunu,
- placeholder alanlarını,
- içerik sınırlarını,
- validation beklentilerini

tek ve tutarlı bir template üzerinden belirleyebilmelidir.

Template sisteminin çalışma modeli şu olmalıdır:

```text
Onaylanmış proje bilgisi
+
Seçilen package
+
Document Catalog
+
Information Map
+
İlgili template
+
Delivery profile
=
Temiz ve projeye özel nihai doküman
```

Template sisteminin başarısı, çok sayıda şablon üretmesiyle değil; farklı ajanların aynı girdilerden aynı sorumluluk sınırlarına sahip, tutarlı, genişletilebilir ve doğrudan kullanılabilir dokümanlar üretebilmesiyle ölçülmelidir.
