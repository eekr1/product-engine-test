~~~md
# PROMPT_03_PACKAGES_BUILD

Product Engine’in `packages/` build aşamasıdır.

`engine/` klasörü Approved durumdadır.

Bu görevde yalnızca `packages/` klasörünü gerçek, kullanılabilir package sözleşmeleriyle doldur.

Yeni package mimarisi tasarlama.
Approved engine sözleşmelerini yeniden yorumlama.
Başka klasörleri doldurmaya başlama.

---

# Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/PACKAGES_FOLDER_SPEC.md`
5. `planning/ENGINE_FOLDER_SPEC.md`

Ardından Approved engine sözleşmelerinden özellikle:

6. `engine/README.md`
7. `engine/PROJECT_INTAKE.md`
8. `engine/DOCUMENT_CATALOG.md`
9. `engine/PACKAGE_RULES.md`
10. `engine/INFORMATION_MAP.md`
11. `engine/OUTPUT_STRUCTURE.md`
12. `engine/VALIDATION_RULES.md`

Gerekliyse diğer `engine/` belgelerine yalnızca referans amacıyla başvur.

`ref/` authoritative değildir.
Yalnızca yapı, kalite veya kapsam referansı olarak kullanılabilir.

---

# Ana Görev

Aşağıdaki `packages/` klasörünü doldur:

```text
packages/
├── README.md
├── DEMO_FRONTEND_PACKAGE.md
├── CORPORATE_WEBSITE_PACKAGE.md
├── SAAS_PACKAGE.md
├── EXISTING_PROJECT_PACKAGE.md
└── API_SERVICE_PACKAGE.md
~~~

Bu dosyalar placeholder veya planning özeti olmamalıdır.

Bunlar Product Engine’in gerçek package tanımlarıdır.

Ana amaç:

> Product Engine bir projeyi sınıflandırdıktan sonra hangi dokümanların üretileceğini, hangilerinin zorunlu/koşullu/opsiyonel olduğunu, hangi delivery profile seviyesinde ne kadar derinlik gerektiğini ve hangi validation beklentilerinin uygulanacağını bu package belgelerinden anlayabilmelidir.

------

# Temel Sorumluluk Ayrımı

`engine/PACKAGE_RULES.md`
→ Hangi package’ın seçileceğini belirler.

`packages/`
→ Seçilen package’ın ne içerdiğini tanımlar.

`engine/DOCUMENT_CATALOG.md`
→ Kullanılabilecek document kimliklerinin authoritative kaynağıdır.

`templates/`
→ Seçilen document’ların nasıl üretileceğini tanımlar.

`engine/INFORMATION_MAP.md`
→ Bilginin hangi document’a ait olduğunu tanımlar.

`outputs/`
→ Üretilen final sonucu saklar.

Bu sınırları koru.

------

# Kritik Kural — Yeni Belge veya Kimlik İcat Etme

Package dosyalarında yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlanmış document ID ve document isimlerini kullan.

Yeni document ID oluşturma.

Yeni document ailesi oluşturma.

Yeni template yolu oluşturma.

Özellikle aşağıdaki eski veya planning dışı isimleri geri getirme:

```text
PRODUCT_REQUIREMENTS.md
ARCHITECTURE.md
API_REFERENCE.md
TESTING_STRATEGY.md

templates/product/
templates/technical/
templates/operational/
templates/planning/
```

Approved Product Engine document ailesini kullan.

------

# Delivery Profile Mantığı

Delivery profile’lar:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

Project type ile delivery profile aynı şey değildir.

Bir package farklı delivery profile seviyelerinde farklı derinlikte uygulanabilir.

Temel ilke:

> Gereken kadar belge, gereken kadar ayrıntı.

Production Ready daha olgun bir dokümantasyon seviyesi anlamına gelir ancak gereksiz doküman üretme zorunluluğu değildir.

Prototype minimum olabilir ancak throwaway olmak zorunda değildir.

------

# Package Belgelerinin Ortak Yapısı

Beş package dosyası mümkün olduğunca ortak bir sözleşme biçimi kullanmalıdır.

Her package en az şu bölümleri içermelidir:

```text
Package ID
Package Name
Purpose
Primary Project Contexts
Supported Delivery Profiles
Required Intake Conditions
Required Documents
Conditional Documents
Optional Documents
Extension Rules
Reduction Rules
Depth Expectations
Validation Expectations
Output Expectations
Upgrade Path
Package Boundaries
```

İsimler Markdown başlığı olarak uyarlanabilir ancak anlam korunmalıdır.

Her package aynı bilgileri farklı sırayla ve farklı terminolojiyle anlatmamalıdır.

------

# `packages/README.md`

Package sisteminin giriş noktasıdır.

Şunları kısa ve net açıkla:

- package nedir,
- package ne değildir,
- klasördeki 5 package’ın görevi,
- package seçiminin `engine/PACKAGE_RULES.md` tarafından yapıldığı,
- document ID’lerin `engine/DOCUMENT_CATALOG.md` tarafından sahiplenildiği,
- base package + extension mantığı,
- delivery profile’ın package ile ilişkisi,
- aynı projede birden fazla package’ın nasıl birleşebileceği,
- package merge sırasında document duplication’ın engellenmesi,
- önerilen okuma sırası.

README package dosyalarının tüm içeriklerini tekrar etmemelidir.

------

# `DEMO_FRONTEND_PACKAGE.md`

Frontend ağırlıklı demo veya satış demosu için kullanılmalıdır.

Amaç:

- görsel olarak çalışır,
- sunulabilir,
- hızlı hazırlanabilir,
- ileride geliştirilmeye devam edilebilir

bir proje dokümantasyon kapsamı tanımlamaktır.

Bu package’ı otomatik olarak throwaway kabul etme.

Özellikle:

- backend,
- database,
- auth,
- production operations

gerçekten kapsamda değilse gereksiz doküman üretme.

Ancak proje ileride gerçek ürüne dönüşebilecekse bunu engelleyecek kadar zayıf dokümantasyon oluşturma.

------

# `CORPORATE_WEBSITE_PACKAGE.md`

Kurumsal web sitesi bağlamı içindir.

Şunları desteklemelidir:

- şirket/site amacı,
- sayfa ve içerik yapısı,
- kullanıcı akışları,
- tasarım sistemi veya kuralları,
- teknik bağlam,
- gerektiğinde panel veya CMS,
- gerektiğinde iletişim/form entegrasyonları,
- deployment/test ihtiyaçları.

Her kurumsal siteyi SaaS veya büyük web application gibi ele alma.

Basit bir kurumsal site gereksiz API/data model/operations belgelerine zorlanmamalıdır.

------

# `SAAS_PACKAGE.md`

SaaS bağlamında kullanılmalıdır.

Kritik nokta:

`SAAS_PACKAGE.md` bir package’tır.

`saas` yeni bir project type değildir.

Project type authoritative listesi `engine/PROJECT_INTAKE.md` içindedir.

SaaS package gerektiğinde mevcut project type’larla eşleşir:

örneğin web-app + api-service bağlamı gibi.

SaaS package tipik olarak şunları değerlendirmelidir:

- ürün kuralları,
- teknik bağlam,
- veri modeli,
- API contracts,
- kullanıcı/auth akışları,
- project plan,
- waves,
- deployment,
- operations,
- testing,
- agent instructions,
- product strategy (gerekiyorsa).

Ancak delivery profile’a göre kapsam daralabilir.

Foundation seviyesinde production operasyon belgeleri zorunlu hale getirilmemelidir.

------

# `EXISTING_PROJECT_PACKAGE.md`

Mevcut proje bağlamında kullanılmalıdır.

Bu package’ın amacı yeni proje üretmek değil, mevcut gerçekliği anlayıp güvenli biçimde dokümante etmektir.

Özellikle şu konulara dikkat et:

- existing resources,
- mevcut kod ve dokümanlar,
- current state,
- current technical stack,
- eski kararlar,
- geçerli/geçersiz dokümanlar,
- açık blocker’lar,
- next tasks,
- mevcut proje ile hedef durum ayrımı.

`CURRENT_STATUS.md` mevcut projelerde önemli rol oynar.

Mevcut gerçekliği sessizce yeniden tasarlama.

Kullanıcı açıkça migration/redesign istemediyse mevcut state ile desired state’i birbirine karıştırma.

Bu package gerektiğinde başka package’lara extension olarak da kullanılabilmelidir.

------

# `API_SERVICE_PACKAGE.md`

API ağırlıklı servis projeleri içindir.

Şunları değerlendirmelidir:

- teknik bağlam,
- API contracts,
- data model,
- integrations,
- auth gereksinimleri,
- test stratejisi,
- deployment,
- operations,
- project plan/waves.

Frontend veya design belgeleri API servisinde otomatik required olmamalıdır.

Ancak yönetim paneli veya kullanıcı yüzeyi gerçekten scope içindeyse ilgili extension uygulanabilir.

------

# Required / Conditional / Optional Mantığı

Package dosyaları document’ları üç seviyede ayırmalıdır:

```text
Required
Conditional
Optional
```

Required:
→ Package’ın minimum işlevini sağlayabilmesi için zorunlu.

Conditional:
→ Belirli proje bağlamı veya delivery profile koşulu oluşursa zorunlu hale gelir.

Optional:
→ Kullanıcı isteği veya açık değer sağlıyorsa eklenebilir.

Bir document’ı sadece “iyi olur” diye Required yapma.

------

# Base + Extension Mantığı

Package’lar birbirinden tamamen izole değildir.

Örneğin:

```text
Existing project
+
SAAS_PACKAGE
```

veya:

```text
Corporate website
+
API extension
```

gibi birleşimler mümkün olabilir.

Kurallar:

- Aynı document iki kez üretilmez.
- `DOCUMENT_CATALOG.md` ID’si tek referanstır.
- Daha yüksek olgunluk gerekliyse delivery profile yükseltilebilir.
- Extension package temel package’ın ownership sınırlarını bozmaz.
- Merge sonucu gereksiz document üretimine yol açmamalıdır.

------

# Depth Expectations

Aynı document farklı delivery profile’larda farklı derinlikte üretilebilir.

Örnek mantık:

```text
Foundation
→ temel bağlam, amaç, kritik kararlar

Prototype
→ hızlı implementasyon için yeterli minimum ayrıntı

Implementation Ready
→ başka bir ajan doğrudan implementasyona başlayabilmeli

Production Ready
→ deployment, operations, test ve sürdürülebilirlik gereksinimleri yeterince tanımlı
```

Ancak package belgeleri template içeriğinin tamamını tanımlamamalıdır.

Derinlik beklentisi tanımlanır; gerçek yapı `templates/` owner’ıdır.

------

# Validation Expectations

Her package:

- required document completeness,
- conditional document applicability,
- project-type consistency,
- delivery-profile consistency,
- package extension/reduction justification,
- document catalog compliance,
- output cleanliness,
- project leakage

gibi ilgili validation beklentilerini tanımlamalıdır.

Genel validation kurallarını tekrar yazma.

`engine/VALIDATION_RULES.md` authoritative kaynaktır.

Package yalnızca kendine özgü ek beklentileri tanımlar.

------

# Output Expectations

Package:

- hangi document’ların final output’ta bulunması gerektiğini,
- hangi document’ların bulunmaması gerektiğini,
- hangi delivery profile’da hangi teslim kapsamının beklendiğini

tanımlayabilir.

Ancak output klasör ağacını yeniden tanımlama.

Authoritative output structure:

```
engine/OUTPUT_STRUCTURE.md
```

------

# Reduction Rules

Package gereksiz büyümemelidir.

Daraltma yapılabilir ancak:

- Required document kaldırılmaz.
- Critical project truth kaybolmaz.
- Başka ajanın projeyi anlayamayacağı kadar zayıflatılmaz.
- Daraltma gerekçesi run kayıtlarında izlenebilir olmalıdır.

------

# Upgrade Path

Package’lar ileride daha yüksek delivery profile’a yükseltilebilmelidir.

Örnek:

```text
Prototype
→ Implementation Ready
→ Production Ready
```

Upgrade sırasında:

- mevcut geçerli document’lar korunur,
- sadece eksik kapsam tamamlanır,
- aynı document sıfırdan gereksiz tekrar üretilmez,
- yeni requirement’lar catalog ve package kurallarına göre eklenir.

------

# Yasaklar

Bu görev sırasında:

- `engine/` değiştirme.
- `planning/` değiştirme.
- `templates/` doldurma.
- `inputs/` doldurma.
- `runs/` doldurma.
- `outputs/` doldurma.
- `logs/` doldurma.
- `examples/` doldurma.
- `archive/` doldurma.
- kök README’yi değiştirme.
- yeni package klasör yapısı oluşturma.
- `packages/<profile>/<type>.md` gibi eski mimariye dönme.
- yeni project type oluşturma.
- yeni document ID oluşturma.
- yeni template klasörü oluşturma.
- package selection logic’i `PACKAGE_RULES.md` yerine taşımaya çalışma.
- template içeriklerini package dosyalarına kopyalama.
- belirli AI modeline özel package davranışı yazma.

Yalnızca `packages/` klasöründe çalış.

------

# Çalışma Sonu Kontrol

Build tamamlandıktan sonra doğrula:

1. 6 package dosyasının tamamı gerçek içerikle dolu mu?
2. Tüm document ID’ler `engine/DOCUMENT_CATALOG.md` içinde mevcut mu?
3. Planning dışı document adı üretildi mi?
4. Planning dışı template yolu üretildi mi?
5. `saas` yanlışlıkla project type olarak kullanıldı mı?
6. Package’lar gereksiz document üretmeye zorluyor mu?
7. Foundation / Prototype / Implementation Ready / Production Ready farkları net mi?
8. Existing Project package mevcut state ile desired state’i karıştırıyor mu?
9. Demo Frontend package gereksiz backend/production kapsamı dayatıyor mu?
10. API Service package gereksiz frontend/design kapsamı dayatıyor mu?
11. Corporate Website package gereksiz SaaS bürokrasisi taşıyor mu?
12. Base + extension merge mantığı duplicate document üretimini engelliyor mu?
13. Validation beklentileri genel engine validation’ını kopyalamadan tanımlanmış mı?
14. Output structure yeniden tanımlanmış mı? Tanımlanmamalı.
15. Yalnızca `packages/` değiştirildi mi?

------

# Çalışma Sonu Raporu

Kısa ama somut rapor ver.

## Doldurulan Dosyalar

Her package dosyasının görevini tek cümleyle açıkla.

## Package Sistemi

Base package + extension + delivery profile mantığını kısa özetle.

## Document Kullanımı

Her package’ın başlıca Required ve Conditional document ID’lerini özetle.

## Korunan Sınırlar

Şunları doğrula:

- Document Catalog owner kaldı
- Package Rules seçim owner’ı kaldı
- Templates structure owner’ı kaldı
- Output Structure output owner’ı kaldı

## Açık Noktalar

Yalnızca sonraki klasörlere bırakılması gereken gerçek noktaları yaz.

## Değiştirilen Dosyalar

Yalnızca `packages/` altında değişiklik yapıldığını doğrula.

## Sonuç

Şunlardan biriyle bitir:

```text
PACKAGES_BUILD_COMPLETE
```

veya

```text
PACKAGES_BUILD_BLOCKED
```

Blocked ise yalnızca gerçek engeli belirt.