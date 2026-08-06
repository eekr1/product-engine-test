# PACKAGES_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `packages/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- Package kavramının Product Engine içerisindeki anlamını,
- `packages/` klasörünün sistemdeki görevini,
- paket dosyalarının sorumluluklarını,
- paketlerin nasıl seçileceğini, genişletileceğini ve birleştirileceğini,
- paketlerin template, engine ve output katmanlarıyla ilişkisini,
- paketlerin tamamlanma ve kabul kriterlerini

belirler.

Bu belge Product Engine çalışırken doğrudan uygulanacak bir paket tanımı değildir.

`planning/PACKAGES_FOLDER_SPEC.md`, Product Engine içerisinde kullanılacak gerçek paket belgelerini hazırlayan ajan için bağlayıcı bir inşa rehberidir.

Gerçek paket tanımları `packages/` klasörü içerisinde yer alacaktır.

---

# 2. Kaynak ve Üst Bağlam

`packages/` klasörü hazırlanırken aşağıdaki belgeler temel kaynak olarak kabul edilmelidir:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/ENGINE_FOLDER_SPEC.md`
3. `planning/PACKAGES_FOLDER_SPEC.md`
4. `engine/DOCUMENT_CATALOG.md`
5. `engine/PACKAGE_RULES.md`
6. `engine/PROJECT_INTAKE.md`
7. `engine/OUTPUT_STRUCTURE.md`
8. İlgili `ref/` belgeleri
9. Mevcut kök klasör yapısı

`PRODUCT_ENGINE_BRAIN.md`, Product Engine’in yapılandırılmış proje bilgilerini almasını, uygun doküman paketini seçmesini, bilgileri ilgili belgelere dağıtmasını ve doğrudan kullanılabilir bir dokümantasyon paketi üretmesini hedefler.

Paket sistemi bu hedefin seçim ve kapsam katmanıdır.

---

# 3. Package Kavramı

Bir package, belirli bir proje bağlamı için:

- hangi dokümanların üretileceğini,
- hangi dokümanların zorunlu olduğunu,
- hangi dokümanların koşullu olduğunu,
- hangi template’lerin kullanılacağını,
- hangi intake bilgilerinin gerekli olduğunu,
- üretimin hangi derinlikte yapılacağını,
- hangi validation kontrollerinin uygulanacağını,
- hangi output artefaktlarının teslim edileceğini

tanımlayan bağlayıcı bir üretim profilidir.

Package tek başına doküman üretmez.

Package, Product Engine’e ne üretmesi gerektiğini ve üretimin kapsamını söyler.

```text
Package
=
Doküman seçimi
+
Kapsam seviyesi
+
Gerekli girdiler
+
Template ilişkileri
+
Output beklentileri
+
Validation gereksinimleri
```
------

# 4. `packages/` Klasörünün Sistem İçindeki Görevi

`packages/` klasörü şu soruların sahibidir:

- Bu proje için hangi doküman grubu gereklidir?
- Hangi dokümanlar zorunludur?
- Hangi dokümanlar koşulludur?
- Dokümanlar hangi ayrıntı seviyesinde üretilmelidir?
- Hangi template’ler kullanılmalıdır?
- Hangi proje girdileri bu paket için zorunludur?
- Hangi ek özellikler paketi genişletir?
- Hangi koşullarda paket daraltılabilir?
- Bir proje birden fazla package kullanabilir mi?
- Paket hangi outputları üretmelidir?
- Paket hangi validation kontrollerinden geçmelidir?
- İlk aşamada sınırlı üretilen bir proje nasıl genişletilebilir?

`packages/` klasörü Product Engine’in kapsam ve üretim profili katmanıdır.

------

# 5. Kapsam Dışı

`packages/` klasörü aşağıdaki içeriklerin sahibi değildir:

- Package seçme karar sisteminin tamamı
- Proje intake alanlarının ana tanımları
- Dokümanların tam içerik şablonları
- Bilginin belgeler arasında nasıl dağıtılacağı
- Product Engine’in genel üretim pipeline’ı
- Run kayıtları
- Gerçek proje bilgileri
- Nihai çıktı dosyaları
- Genel conflict resolution kuralları
- Genel assumption kuralları
- Model veya ajan özelinde çalışma talimatları
- Kaynak kod implementasyonu

Bu sorumluluklar diğer klasör ve belgelerde bulunmalıdır.

```text
engine/PACKAGE_RULES.md
→ Hangi package’ın seçileceğini belirler.

packages/
→ Seçilen package’ın ne içerdiğini tanımlar.

templates/
→ Package tarafından seçilen belgelerin yapısını tanımlar.

engine/INFORMATION_MAP.md
→ Bilgilerin seçilen belgelere nasıl dağıtılacağını belirler.

engine/GENERATION_PIPELINE.md
→ Package’ın üretim sürecinde ne zaman kullanılacağını belirler.

outputs/
→ Package sonucunda teslim edilen nihai dosyaları içerir.
```

------

# 6. Klasör Yapısı

Başlangıçta `packages/` klasörü aşağıdaki yapıya sahip olacaktır:

```text
packages/
├── README.md
├── DEMO_FRONTEND_PACKAGE.md
├── CORPORATE_WEBSITE_PACKAGE.md
├── SAAS_PACKAGE.md
├── EXISTING_PROJECT_PACKAGE.md
└── API_SERVICE_PACKAGE.md
```

Bu dosya adları başlangıç kapsamını temsil eder.

Engine ve package sistemi geliştikçe aşağıdaki gibi yeni paketler eklenebilir:

```text
MOBILE_APPLICATION_PACKAGE.md
E_COMMERCE_PACKAGE.md
ADMIN_PANEL_PACKAGE.md
MARKETPLACE_PACKAGE.md
AI_PRODUCT_PACKAGE.md
INTERNAL_TOOL_PACKAGE.md
CONTENT_PLATFORM_PACKAGE.md
DESIGN_ONLY_PACKAGE.md
DOCUMENTATION_ONLY_PACKAGE.md
```

Yeni package yalnızca mevcut paketlerin genişletme veya birleşim kurallarıyla karşılanamayan bağımsız bir üretim profili bulunduğunda eklenmelidir.

Benzer sorumluluk taşıyan küçük varyasyonlar için yeni package oluşturulmamalıdır.

------

# 7. Package Türleri

Package sistemi üç temel kullanım biçimini desteklemelidir.

## 7.1 Base Package

Projenin ana türünü tanımlar.

Örnek:

- Corporate Website
- SaaS
- API Service
- Existing Project
- Frontend Product

Bir çalışmada varsayılan olarak bir adet ana package bulunmalıdır.

------

## 7.2 Extension Package

Ana package’a ek kapsam kazandırır.

Örnek:

- Admin Panel
- Authentication
- Payment
- AI Integration
- E-commerce
- Multi-language
- Blog
- Analytics
- Deployment
- Mobile Support

Extension package yaklaşımı başlangıçta ayrı dosyalar olarak uygulanmak zorunda değildir.

Ancak package mimarisi ileride bu ayrımı destekleyebilmelidir.

------

## 7.3 Delivery Profile

Aynı proje türünün hangi derinlikte hazırlanacağını belirler.

Örnek seviyeler:

```text
Foundation
→ Temel ürün ve dokümantasyon iskeleti.

Prototype
→ Görülebilir ve test edilebilir ilk deneyim.

Implementation Ready
→ Ajanın doğrudan geliştirmeye başlayabileceği ayrıntılı paket.

Production Ready
→ Operasyon, deployment, validation ve sürdürülebilirlik kapsamı güçlü paket.
```

Delivery Profile, package türünden ayrıdır.

Örneğin aynı Corporate Website package:

- Foundation,
- Prototype,
- Implementation Ready,
- Production Ready

seviyelerinde üretilebilir.

Bu ayrım, küçük başlayan bir projenin yeniden baştan kurulmadan aşamalı biçimde büyütülmesini sağlar.

------

# 8. Temel Package İlkesi

Package sistemi projeleri yalnızca “demo” veya “gerçek ürün” olarak ikiye ayırmamalıdır.

Bir proje başlangıçta sınırlı kapsamda hazırlanabilir ancak üretilen yapı:

- genişletilebilir,
- sürdürülebilir,
- yeni özelliklere açık,
- gerçek implementasyona uygun,
- mevcut belgeler üzerine devam edilebilir

olmalıdır.

Sınırlı kapsam, düşük kalite veya geçici mimari anlamına gelmemelidir.

```text
Dar kapsam
≠
Atılacak çalışma

Hızlı üretim
≠
Düzensiz üretim

İlk aşama
≠
Çıkmaz mimari
```

Package belgeleri, ilk teslimin sonraki aşamalara doğal biçimde dönüşebilmesini desteklemelidir.

------

# 9. Package Dosyalarının Ortak Yapısı

Her gerçek package belgesi mümkün olduğunca aşağıdaki yapıyı kullanmalıdır:

```md
# PACKAGE_NAME

## Package Kimliği

## Amaç

## Uygun Olduğu Projeler

## Uygun Olmadığı Projeler

## Desteklenen Delivery Profile’ları

## Zorunlu Intake Bilgileri

## Koşullu Intake Bilgileri

## Varsayılanlar

## Zorunlu Dokümanlar

## Koşullu Dokümanlar

## Hariç Tutulan Dokümanlar

## Kullanılan Template Grupları

## Package Genişletme Kuralları

## Package Daraltma Kuralları

## Diğer Package’larla Birleşim

## Üretim Yoğunluğu

## Output Gereksinimleri

## Validation Gereksinimleri

## Tamamlanma Kriterleri

## Geçiş ve Büyüme Yolu
```

Her package dosyasına anlamsız veya boş bölümler eklenmemelidir.

Package’ın yapısına göre gerekli olmayan başlıklar çıkarılabilir.

Ancak package kimliği, zorunlu dokümanlar, koşullu dokümanlar, intake gereksinimleri, output gereksinimleri ve tamamlanma kriterleri mutlaka bulunmalıdır.

------

# 10. Package Kimliği

Her package aşağıdaki temel metadata alanlarına sahip olmalıdır:

```text
Package ID
Package Name
Package Type
Version
Status
Default Delivery Profile
Compatible Project Types
Compatible Extensions
Incompatible Packages
```

Örnek:

```yaml
package_id: corporate-website
package_name: Corporate Website Package
package_type: base
version: 0.1
status: active
default_delivery_profile: implementation-ready
```

Metadata formatı Markdown tablosu, liste veya YAML benzeri blok olarak tutulabilir.

Bütün package belgelerinde aynı metadata biçimi kullanılmalıdır.

------

# 11. Zorunlu Intake Bilgileri

Her package, çalışabilmek için ihtiyaç duyduğu minimum bilgileri açıkça tanımlamalıdır.

Ancak package dosyası intake alanlarının ana açıklamalarını tekrar etmemelidir.

Ana alan tanımları `engine/PROJECT_INTAKE.md` içerisinde bulunur.

Package yalnızca:

- hangi alanların zorunlu olduğunu,
- hangi alanların koşullu olduğunu,
- hangi alanların isteğe bağlı olduğunu,
- hangi alanların bu package için önemsiz olduğunu

belirtmelidir.

Örnek:

```text
Zorunlu:
- Project name
- Product summary
- Target users
- Primary goal
- Page or feature scope
- Delivery target

Koşullu:
- Authentication requirements
- Admin panel requirements
- Existing system information
- API dependencies

İsteğe bağlı:
- Visual references
- Preferred technologies
- Future roadmap
```

------

# 12. Doküman Seçimi

Her package, `engine/DOCUMENT_CATALOG.md` içerisinde tanımlanan doküman kimliklerini kullanmalıdır.

Package belgeleri katalogda bulunmayan dokümanları sessizce tanımlamamalıdır.

Her doküman aşağıdaki sınıflardan birine yerleştirilmelidir:

## Zorunlu Doküman

Package çalıştığında her durumda üretilir.

## Koşullu Doküman

Belirli bir intake cevabı, extension veya delivery profile nedeniyle üretilir.

## İsteğe Bağlı Doküman

Kullanıcı talebi veya özel ihtiyaçla eklenebilir.

## Hariç Tutulan Doküman

Bu package kapsamında normalde üretilmez.

Package içerisinde yalnızca dosya isimleri listelenmemelidir.

Her seçim kısa bir gerekçeye sahip olmalıdır.

Örnek:

```text
TECH_CONTEXT.md
Durum: Zorunlu
Gerekçe: Uygulama ajanının stack, mimari ve teknik sınırları anlaması gerekir.

API_CONTRACTS.md
Durum: Koşullu
Koşul: Projede frontend ve backend arasında tanımlı veri iletişimi varsa.
```

------

# 13. Template İlişkisi

Package belgeleri gerçek template metinlerini içermez.

Her seçilen doküman için ilgili template veya template grubuna referans verir.

Örnek:

```text
PROJECT_BRAIN
→ templates/ai/PROJECT_BRAIN_TEMPLATE.md

PROJECT_PLAN
→ templates/project/PROJECT_PLAN_TEMPLATE.md

DESIGN_RULES
→ templates/design/DESIGN_RULES_TEMPLATE.md
```

Bir package doğrudan ref belgesini template olarak kullanmamalıdır.

Ref belgeleri yalnızca kalite ve yapı referansıdır.

Package’ın kullandığı her dokümanın mümkünse tanımlı bir template karşılığı bulunmalıdır.

Template bulunmuyorsa package tamamlanmış kabul edilmemeli veya eksiklik açıkça raporlanmalıdır.

------

# 14. Delivery Profile Sistemi

Package sistemi en az aşağıdaki delivery profile’ları destekleyecek şekilde hazırlanmalıdır.

## 14.1 Foundation

Amaç:

- Ürün kimliğini netleştirmek
- Temel kapsamı belirlemek
- İlk teknik ve ürün kararlarını kaydetmek
- Sonraki planlamaya temel oluşturmak

Dokümantasyon yoğunluğu düşüktür.

Ancak çekirdek bağlam eksik bırakılmamalıdır.

------

## 14.2 Prototype

Amaç:

- Görsel veya işlevsel bir ilk deneyim oluşturmak
- Ana kullanıcı akışlarını göstermek
- Ürün fikrini doğrulamak
- Sunulabilir veya test edilebilir bir çıktı üretmek

Bu profil hızlı hazırlanabilir.

Ancak gelecekte genişletilemeyecek geçici kararlar üretmemelidir.

Prototype çıktıları mümkün olduğunda Implementation Ready profile’a yükseltilebilir olmalıdır.

------

## 14.3 Implementation Ready

Amaç:

- Geliştirme ajanının doğrudan üretime başlayabilmesi
- Kapsam, mimari, tasarım, görev ve wave sisteminin netleşmesi
- Önemli belirsizliklerin çözülmesi
- Uygulanabilir bir proje planı oluşturulması

Product Engine’in temel hedef profili budur.

------

## 14.4 Production Ready

Amaç:

- Gerçek kullanıcıya açılacak sistemin hazırlığını tamamlamak
- Deployment, security, environment, monitoring, test ve operations ihtiyaçlarını tanımlamak
- Üretim sonrası sürdürülebilirliği desteklemek

Bu profil bütün projelerde varsayılan olarak kullanılmamalıdır.

Yalnızca gerçek ihtiyaca göre seçilmelidir.

------

# 15. Package Genişletme Kuralları

Bir package aşağıdaki durumlarda genişletilebilir:

- Yeni kullanıcı rolü eklenmesi
- Authentication gereksinimi
- Admin panel ihtiyacı
- Backend gereksinimi
- Veritabanı gereksinimi
- API entegrasyonu
- Ödeme sistemi
- Çoklu dil
- Yapay zekâ entegrasyonu
- Deployment gereksinimi
- Production operasyonları
- Mobil uygulama kapsamı
- E-ticaret işlevleri
- Çok kiracılı mimari
- Gerçek zamanlı iletişim
- Gelişmiş güvenlik gereksinimi

Genişletme sırasında:

1. Yeni doküman ihtiyacı belirlenmelidir.
2. Gerekli intake alanları kontrol edilmelidir.
3. İlgili template’ler eklenmelidir.
4. Output yapısı güncellenmelidir.
5. Validation kapsamı artırılmalıdır.
6. Run içerisinde genişletme gerekçesi kaydedilmelidir.

Package genişletmesi, ana package’ın mevcut kurallarını sessizce bozmamalıdır.

------

# 16. Package Daraltma Kuralları

Bir package aşağıdaki durumlarda daraltılabilir:

- Teslim yalnızca belirli bir aşamayı kapsıyorsa
- Bazı özellikler açıkça kapsam dışıysa
- Teknik implementasyon henüz hedeflenmiyorsa
- Kullanıcı yalnızca ürün veya tasarım planı istiyorsa
- Belirli belgeler mevcut ve güncelse
- Proje riski ve karmaşıklığı düşükse

Daraltma sırasında:

- Çekirdek bağlam belgeleri korunmalıdır.
- Agent’in projeyi anlaması için gerekli minimum bilgiler çıkarılmamalıdır.
- Hariç bırakılan dokümanlar açıkça kaydedilmelidir.
- Daraltmanın nedeni belirtilmelidir.
- Gelecekte genişletme yolu korunmalıdır.

Package daraltma, yalnızca dosya sayısını azaltmak amacıyla yapılmamalıdır.

------

# 17. Package Birleşim Kuralları

Bir proje bir ana package ve sıfır veya daha fazla extension package kullanabilir.

Birden fazla ana package yalnızca proje gerçekten birden fazla bağımsız ürün tipi içeriyorsa kullanılmalıdır.

Örnek:

```text
Corporate Website
+
E-commerce Extension
+
Admin Panel Extension
```

veya:

```text
SaaS
+
AI Integration Extension
+
API Service Extension
```

Birleşim sırasında:

- Aynı doküman iki kez üretilmemelidir.
- Aynı doküman için en kapsamlı gerekli sürüm seçilmelidir.
- Çelişen package kuralları çözülmelidir.
- Zorunlu intake alanları birleştirilmelidir.
- Validation kuralları birleştirilmelidir.
- Output tek bir tutarlı proje paketi olarak üretilmelidir.

Birleşim sonucu birbirinden kopuk doküman setleri oluşmamalıdır.

------

# 18. Package Önceliği

Package önceliği aşağıdaki genel mantıkla ele alınmalıdır:

```text
Projenin ana ürün tipi
>
Teslim profili
>
Zorunlu extension’lar
>
İsteğe bağlı extension’lar
>
Template varsayılanları
```

Package önceliğinin ayrıntılı seçim ve çatışma davranışı `engine/PACKAGE_RULES.md` ve `engine/CONFLICT_RESOLUTION.md` içerisinde tanımlanmalıdır.

Package dosyaları kendi otoritesini engine sözleşmelerinin üstüne çıkarmamalıdır.

------

# 19. Package’ların Büyüme Yolu

Her ana package, projenin bir sonraki olası aşamasını tanımlamalıdır.

Örnek:

```text
Prototype
→ Implementation Ready
→ Production Ready
```

veya:

```text
Corporate Website
→ Corporate Website + CMS
→ Corporate Website + Customer Portal
```

Geçiş sırasında mümkün olduğunca:

- mevcut intake korunmalı,
- mevcut dokümanlar güncellenmeli,
- yalnızca gerekli yeni belgeler eklenmeli,
- önceki kararların geçmişi kaybolmamalı,
- proje sıfırdan tekrar üretilmemelidir.

Package belgelerinde “Geçiş ve Büyüme Yolu” bölümü bulunmalıdır.

------

# 20. Package Dosyalarının Sorumlulukları

## 20.1 `README.md`

### Sahip Olduğu Soru

Package sistemi nasıl kullanılır?

### İçermelidir

- Package kavramı
- Base package, extension ve delivery profile ayrımı
- Mevcut package listesi
- Package belgelerinin okuma sırası
- Yeni package ekleme kuralları
- Package ile engine ve template ilişkisi
- Package seçiminin nerede yapıldığı
- Terminoloji

### İçermemelidir

- Bütün package içeriklerinin tekrarı
- Package seçim karar ağacının tamamı
- Template içerikleri
- Proje özelinde seçim

------

## 20.2 `DEMO_FRONTEND_PACKAGE.md`

Dosya adı mevcut yapıda korunabilir.

Ancak package yalnızca geçici veya atıl bir demo üretimi olarak tanımlanmamalıdır.

Bu package’ın amacı:

- hızlı biçimde sunulabilir bir frontend deneyimi üretmek,
- ürünün veya sitenin ana görsel ve kullanıcı akışlarını göstermek,
- gerçek implementasyona dönüşebilecek temiz bir temel oluşturmak,
- ileride backend, panel, CMS veya tam ürün kapsamına genişletilebilmek

olmalıdır.

Package’ın adı ileride daha genel bir adla değiştirilebilir:

```text
FRONTEND_PROTOTYPE_PACKAGE.md
PRESENTATION_READY_FRONTEND_PACKAGE.md
FRONTEND_FOUNDATION_PACKAGE.md
```

Ancak dosya adı değişikliği ayrıca kararlaştırılmadan yapılmamalıdır.

Bu package:

- yalnızca sahte ekran görüntüsü üretmemeli,
- yapısal olarak gelişime kapalı kararlar vermemeli,
- başka projeden içerik taşımamalı,
- kapsam dışı backend işlevlerini çalışıyor gibi sunmamalıdır.

------

## 20.3 `CORPORATE_WEBSITE_PACKAGE.md`

Amaç:

- kurumsal kimliği doğru yansıtan,
- hizmet ve ürünleri anlatan,
- iletişim veya dönüşüm hedefini destekleyen,
- ileride CMS, panel, çoklu dil veya müşteri alanına genişleyebilen

web sitesi projeleri için dokümantasyon paketi tanımlamaktır.

Bu package yalnızca statik tanıtım sayfası olarak düşünülmemelidir.

Projenin ihtiyacına göre:

- katalog,
- ürün detayları,
- hizmetler,
- referanslar,
- projeler,
- blog,
- iletişim,
- teklif talebi,
- yönetim paneli

gibi kapsamları destekleyebilmelidir.

------

## 20.4 `SAAS_PACKAGE.md`

Amaç:

- kullanıcı hesabı,
- ürün içi akışlar,
- dashboard,
- veri modeli,
- backend,
- yetkilendirme,
- abonelik veya kullanım sınırları,
- operasyonel ihtiyaçlar

içeren yazılım ürünleri için kapsamlı dokümantasyon profili tanımlamaktır.

SaaS package tek bir sabit stack dayatmamalıdır.

Küçük MVP’den production-ready ürüne kadar farklı delivery profile’ları desteklemelidir.

------

## 20.5 `EXISTING_PROJECT_PACKAGE.md`

Amaç:

- mevcut bir kod tabanı,
- mevcut dokümantasyon,
- mevcut ürün kararları,
- tamamlanmış veya yarım özellikler

üzerinden Product Engine çalıştırılmasını sağlamaktır.

Bu package:

- sıfırdan proje varsaymamalı,
- mevcut durumu analiz etmeli,
- doğru ve eski bilgileri ayırmalı,
- doküman eksiklerini belirlemeli,
- yeniden yazılması gerekmeyen belgeleri korumalı,
- mevcut sistemi yeni standarda dönüştürmelidir.

Bu package gerektiğinde başka bir ana package ile birlikte kullanılabilir.

Örnek:

```text
Existing Project
+
SaaS
```

------

## 20.6 `API_SERVICE_PACKAGE.md`

Amaç:

- bağımsız API,
- backend service,
- entegrasyon servisi,
- internal service,
- AI service,
- veri servisi

gibi projeler için teknik dokümantasyon profili tanımlamaktır.

Bu package:

- API contract,
- data model,
- authentication,
- error model,
- rate limits,
- environment,
- deployment,
- operations,
- test stratejisi

gibi ihtiyaçları koşula göre desteklemelidir.

Her API projesi için gereksiz frontend veya tasarım belgesi üretmemelidir.

------

# 21. Minimum Yeterlilik İlkesi

Her package mümkün olan en fazla belgeyi değil, gerekli olan en az ama yeterli belge setini üretmelidir.

Package kalitesi:

- dosya sayısıyla,
- metin uzunluğuyla,
- bürokratik ayrıntıyla

ölçülmemelidir.

Package başarılı sayılmalıdır, eğer:

- proje doğru anlaşılabiliyorsa,
- agent üretime başlayabiliyorsa,
- temel kararlar bulunabiliyorsa,
- kapsam ve kapsam dışı alanlar netse,
- proje ilerledikçe belgeler genişletilebiliyorsa.

------

# 22. Geleceğe Hazırlık İlkesi

Package belgeleri bugün üretilmeyen ancak yakın gelecekte eklenebilecek kapsamları ayırt etmelidir.

Örneğin:

```text
Şu an kapsam dışı:
- Authentication
- Admin panel
- Payment

Gelecekte planlanan:
- Admin panel
- CMS

Kesinlikle planlanmayan:
- User marketplace
```

“Kapsam dışı” ile “ileride eklenebilir” aynı anlamda kullanılmamalıdır.

Bu ayrım gelecekteki package genişletmelerini kolaylaştırır.

------

# 23. Validation İlişkisi

Her package kendi kapsamına özel validation beklentilerini tanımlamalıdır.

Ancak genel validation kurallarını tekrar etmemelidir.

Örnek:

```text
Corporate Website Package özel kontrolleri:
- Sayfa kapsamı ile navigation uyumlu mu?
- Ürün veya hizmet kategorileri tutarlı mı?
- İletişim akışı tanımlı mı?

SaaS Package özel kontrolleri:
- Kullanıcı rolleri ile yetkiler uyumlu mu?
- Veri modeli ana akışları destekliyor mu?
- Feature scope ile wave plan tutarlı mı?
```

Genel doğrulama davranışı `engine/VALIDATION_RULES.md` içerisinde bulunmalıdır.

------

# 24. Output İlişkisi

Her package üretim sonunda beklenen output bileşenlerini tanımlamalıdır.

Örnek kategoriler:

```text
Core AI Docs
Product Docs
Technical Docs
Design Docs
Wave Docs
Operational Docs
Agent Prompts
Configuration Docs
```

Package yalnızca hangi çıktı kategorilerinin gerekli olduğunu tanımlar.

Nihai dosya yerleşimi `engine/OUTPUT_STRUCTURE.md` içerisinde belirlenir.

------

# 25. Ref Kullanımı

Package belgeleri hazırlanırken `ref/` klasörü:

- kaliteli doküman setlerini,
- proje türlerine uygun kapsamı,
- bölüm yapılarını,
- ayrıntı yoğunluğunu

anlamak için kullanılabilir.

Ref belgelerindeki proje özel bilgiler package kuralına dönüştürülmemelidir.

Örneğin tek bir ref projede admin panel bulunması, bütün Corporate Website package çalışmalarında admin paneli zorunlu hâle getirmez.

Ref örnekleri genellenirken birden fazla proje türüne uygulanabilir gerçek bir kural bulunmalıdır.

------

# 26. Package Üretim Ajanının Görevi

`packages/` klasörünü hazırlayan ajan:

1. `PRODUCT_ENGINE_BRAIN.md` dosyasını okumalıdır.
2. `planning/ENGINE_FOLDER_SPEC.md` dosyasını okumalıdır.
3. `planning/PACKAGES_FOLDER_SPEC.md` dosyasını tamamen okumalıdır.
4. Tamamlanmış engine sözleşmelerini incelemelidir.
5. İlgili ref belgelerini taramalıdır.
6. Mevcut package dosyalarını kendi sorumluluklarına göre doldurmalıdır.
7. Package seçimi ile package tanımını birbirine karıştırmamalıdır.
8. Template içeriklerini package belgelerine kopyalamamalıdır.
9. Küçük başlangıçların büyüyebilir olmasını desteklemelidir.
10. Gereksiz dokümantasyon zorunlulukları üretmemelidir.
11. Başka klasörleri değiştirmemelidir.
12. Açık kalan kararları raporlamalıdır.

Ajan yalnızca `packages/` klasöründe çalışmalıdır.

Aşağıdaki klasörlerin içeriğini değiştirmemelidir:

- `engine/`
- `templates/`
- `inputs/`
- `runs/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- `planning/`

Gerekli durumlarda bu klasörlere referans verebilir.

------

# 27. Üretim Sonu Raporu

Package klasörünü hazırlayan ajan çalışma sonunda aşağıdaki başlıklarla kısa bir rapor sunmalıdır:

## Doldurulan Package Belgeleri

Her package’ın adı ve ana amacı.

## Package Sınıflandırması

Hangilerinin base package olduğu ve gelecekte hangi extension’ların gerekebileceği.

## Doküman Seçim Özeti

Her package’ın zorunlu ve koşullu doküman kategorileri.

## Delivery Profile Desteği

Her package’ın hangi delivery profile’ları desteklediği.

## Package Birleşimleri

Desteklenen veya riskli birleşimler.

## Yapılan Varsayımlar

Spec dışında gerekli görülen varsayımlar.

## Açık Kararlar

Kullanıcı tarafından kararlaştırılması gereken konular.

## Eksik Template veya Catalog Kayıtları

Package’ın ihtiyaç duyduğu ancak henüz bulunmayan doküman veya template’ler.

## Riskler

İleride sistemde sorun çıkarabilecek package yapıları.

Bu rapor package dosyalarının içine rastgele eklenmemelidir.

------

# 28. Audit Gereksinimi

İlk package üretimi tamamlandıktan sonra `packages/` klasörü temiz bir ajan veya ayrı sohbet tarafından denetlenmelidir.

Audit aşağıdaki konuları kontrol etmelidir:

- Package ile engine sorumluluklarının karışması
- Package ile template sorumluluklarının karışması
- Gereksiz doküman zorunlulukları
- Eksik doküman ihtiyaçları
- Delivery profile ayrımının uygulanabilirliği
- Package genişletme yollarının açıklığı
- Küçük başlangıçların büyüyebilir olması
- Package birleşim çakışmaları
- Aynı dokümanın birden fazla kez üretilme riski
- Mevcut package isimlerinin kapsamı doğru temsil etmesi
- Existing Project package’ın diğer package’larla uyumu
- Ref belgelerinden yanlış genelleme yapılması
- Model bağımlı ifadeler
- Ölçülemeyen tamamlanma kriterleri

Audit ajanı ilk aşamada package dosyalarını değiştirmemelidir.

Önce bulgularını raporlamalıdır.

Düzeltmeler ayrı bir uygulama adımında yapılmalıdır.

------

# 29. Tamamlanma Kriterleri

`packages/` klasörü aşağıdaki koşulların tamamı sağlandığında tamamlanmış kabul edilir:

1. Bütün mevcut package dosyaları doludur.
2. Her package’ın amacı açıktır.
3. Her package’ın uygun olduğu ve olmadığı proje türleri bellidir.
4. Her package’ın zorunlu intake alanları tanımlıdır.
5. Her package’ın zorunlu ve koşullu dokümanları tanımlıdır.
6. Dokümanlar `DOCUMENT_CATALOG` kimlikleriyle eşleşir.
7. Template ilişkileri tanımlıdır.
8. Delivery profile desteği tanımlıdır.
9. Package genişletme kuralları tanımlıdır.
10. Package daraltma kuralları tanımlıdır.
11. Package birleşim davranışları tanımlıdır.
12. Nihai output beklentileri tanımlıdır.
13. Package’a özel validation beklentileri tanımlıdır.
14. Package seçim mantığı engine katmanında bırakılmıştır.
15. Template metinleri package dosyalarına kopyalanmamıştır.
16. Küçük kapsamlı bir başlangıç ileride genişletilebilir durumdadır.
17. Gereksiz dokümantasyon zorunlulukları bulunmamaktadır.
18. Package belgeleri hiçbir ajana özel değildir.
19. Audit sonucunda kritik çelişki bulunmamaktadır.
20. Manuel testte doğru package seçilip tutarlı doküman seti üretilebilmektedir.

------

# 30. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `packages/` klasörü tamamlanmış kabul edilmemelidir:

- Package seçim mantığı package dosyalarında dağınık biçimde tekrar ediliyorsa
- Package belgeleri template metinlerini içeriyorsa
- Bütün projeler aynı doküman setine zorlanıyorsa
- İlk aşama projeleri atıl veya genişletilemez yapıda tanımlanıyorsa
- Prototype düşük kaliteyle eş anlamlı kullanılıyorsa
- Delivery profile ayrımı bulunmuyorsa
- Aynı doküman package birleşiminde iki kez üretilebiliyorsa
- Package dosyaları katalogda bulunmayan dokümanları kullanıyorsa
- Zorunlu ve koşullu dokümanlar ayrılmamışsa
- Package daraltma temel proje bağlamını kaldırabiliyorsa
- Existing Project package sıfırdan proje gibi davranıyorsa
- Package tamamlanma kriterleri ölçülemiyorsa
- Package sistemi yalnızca mevcut beş proje tipine kilitlenmişse
- Ref örneklerindeki özel kararlar genel package kuralına dönüşmüşse

------

# 31. Değişiklik İlkesi

Bu spec onaylandıktan sonra `packages/` klasörü hazırlanmalıdır.

Package üretimi sırasında mevcut yapı ile karşılanamayan bir ihtiyaç ortaya çıkarsa ajan:

1. Sessizce yeni package oluşturmamalıdır.
2. İhtiyacı açık biçimde raporlamalıdır.
3. Mevcut package’ın genişletilip genişletilemeyeceğini değerlendirmelidir.
4. Yeni package önerisini gerekçelendirmelidir.
5. Onay almadan klasör yapısını değiştirmemelidir.

İleride package sisteminde yapılacak kalıcı değişiklikler `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

------

# 32. Nihai Hedef

`packages/` klasörü tamamlandığında Product Engine:

- projenin türünü,
- teslim hedefini,
- kapsam yoğunluğunu,
- ihtiyaç duyulan dokümanları,
- gerekli template gruplarını,
- gerekli validation seviyesini,
- gelecekteki büyüme yolunu

tek ve tutarlı bir package profili üzerinden belirleyebilmelidir.

Package sisteminin çalışma modeli şu olmalıdır:

```text
Onaylanmış proje girdisi
+
Engine package selection kuralları
+
Seçilen base package
+
Gerekli extension’lar
+
Delivery profile
=
Üretilecek dokümantasyon kapsamı
```

Package sisteminin başarısı, çok sayıda sabit paket üretmesiyle değil; farklı büyüklükteki projelere doğru yoğunlukta, genişletilebilir ve doğrudan uygulanabilir dokümantasyon kapsamı seçebilmesiyle ölçülmelidir.
