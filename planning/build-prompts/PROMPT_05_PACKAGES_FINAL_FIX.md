~~~md
# PROMPT_05_PACKAGES_FINAL_FIX

Product Engine `packages/` klasörü için son consistency fix turudur.

Amaç mevcut package mimarisini değiştirmek değil; yalnızca `project_type + delivery_profile` kombinasyonlarında `engine/DOCUMENT_CATALOG.md` ile tam uyum sağlamaktır.

Yalnızca `packages/` klasöründe çalış.

---

# Önce Oku

1. `engine/PROJECT_INTAKE.md`
2. `engine/DOCUMENT_CATALOG.md`
3. `engine/PACKAGE_RULES.md`
4. `engine/INFORMATION_MAP.md`
5. `planning/PACKAGES_FOLDER_SPEC.md`

Ardından `packages/` altındaki 6 dosyanın tamamını oku.

Authoritative kaynak:
`engine/DOCUMENT_CATALOG.md`

---

# Ana Problem

Mevcut package dosyalarında delivery profile uyumu büyük ölçüde düzeltildi.

Ancak bazı package’larda bir doküman belirli bir profile için doğru olsa bile ilgili `project_type` için `Applicable Types` kapsamı dışında kalabiliyor.

Bu nedenle her package için document selection mantığı:

```text
project_type
+
delivery_profile
+
document Applicable Types
+
document Applicable Profiles
~~~

birlikte değerlendirilmelidir.

Bir document yalnızca şu iki koşulu birlikte sağlıyorsa Required veya Conditional olabilir:

1. Seçilen `project_type`, document’ın `Applicable Types` listesinde geçerli.
2. Seçilen `delivery_profile`, document’ın `Applicable Profiles` listesinde geçerli.

Bu iki koşuldan biri sağlanmıyorsa document o kombinasyonda Required yapılamaz.

Yeni project type oluşturma.
Yeni document ID oluşturma.
`engine/DOCUMENT_CATALOG.md` değiştirme.

------

# 1. SAAS_PACKAGE

Desteklenen mevcut project type’ları koru:

```text
web-app
api-service
mobile-app
content-platform
```

Ancak her biri için aynı Required document setini otomatik uygulama.

Özellikle kontrol et:

- `TECH-CTX`
- `DATA`
- `API`
- `OPS`
- `WAVE-MAP`
- `WAVE-PLAN`
- `TEST`
- `DESIGN`

Her document için hem type hem profile applicability kontrolü yap.

Örneğin bir document `content-platform` için catalog’da applicable değilse, SaaS package o document’ı content-platform bağlamında Required yapmamalıdır.

SaaS package yine tek package olarak kalmalıdır.

Project type başına ayrı package oluşturma.

Gerekirse package içinde kısa bir type-aware applicability tablosu veya açık conditional kurallar kullan.

------

# 2. CORPORATE_WEBSITE_PACKAGE

Desteklenen type’lar:

```text
landing-page
web-app
content-platform
```

Şu document’ları özellikle kontrol et:

```text
PRODUCT-RULES
TECH-CTX
DESIGN
DATA
API
DEPLOY
TEST
```

Örneğin:

- document catalog’da `landing-page` için geçerli değilse landing-page bağlamında Required olamaz,
- document Prototype profile için applicable değilse Prototype’ta Required olamaz.

Corporate Website package gereksiz SaaS veya backend kapsamına zorlanmamalıdır.

------

# 3. DEMO_FRONTEND_PACKAGE

Desteklenen type’lar:

```text
web-app
landing-page
prototype
mobile-app
```

Özellikle:

```text
PRODUCT-RULES
DESIGN
TECH-CTX
```

document’larının type + profile applicability’sini kontrol et.

`prototype` project type için catalog’da applicable olmayan document’ları Required yapma.

`landing-page` için de aynı kontrolü yap.

Demo package’ın temel ilkeleri korunmalıdır:

- throwaway değildir,
- gereksiz backend üretmez,
- design ownership DESIGN_RULES.md’de kalır.

------

# 4. API_SERVICE_PACKAGE

Desteklenen type’lar:

```text
api-service
integration
infrastructure
```

Şu document’ları type-aware hale getir:

```text
PRODUCT-RULES
TECH-CTX
DATA
API
DEPLOY
OPS
TEST
WAVE-MAP
WAVE-PLAN
```

Örneğin `integration` veya `infrastructure` için catalog’da applicable olmayan bir document, sadece `api-service` için gerekli diye tüm package’a Required yapılamaz.

Information ownership kuralları korunmalıdır:

```text
PRODUCT_RULES
→ ürün ve davranış kuralları

TECH_CONTEXT
→ teknik bağlam

API_CONTRACTS
→ API yüzeyi
```

------

# 5. EXISTING_PROJECT_PACKAGE

Bu package çok sayıda project type destekler.

Bu nedenle tüm type’lara aynı teknik Required set uygulanmamalıdır.

Özellikle:

```text
TECH-CTX
PRODUCT-RULES
DATA
API
DEPLOY
OPS
DESIGN
```

document’larını mevcut `project_type` ve `delivery_profile` kombinasyonuna göre değerlendir.

`STATUS` mevcut projeler için temel authoritative document olarak korunmalıdır.

Current State ile Desired State ayrımı korunmalıdır.

------

# Uygulama Biçimi

Amaç package belgelerini devasa karar tablolarına çevirmek değildir.

Mümkün olduğunca sade çözüm kullan.

Tercih edilen yaklaşım:

```text
Profile minimum set
+
Project type applicability filter
+
Conditional extensions
```

Yani:

1. Delivery profile için aday document seti belirlenir.
2. `DOCUMENT_CATALOG.md` içindeki `Applicable Types` filtresi uygulanır.
3. Uygun olmayan document kaldırılır.
4. Conditional ihtiyaca göre uygun document eklenir.
5. Required document yalnızca type + profile birlikte uygunsa Required kalır.

Bu mantığı package belgelerinde açıkça ifade et.

------

# Kritik Kural

Package belgeleri `DOCUMENT_CATALOG.md` kurallarını override edemez.

Şu prensibi mümkün olduğunca ortak biçimde package dosyalarına ekle:

```text
Bir document’ın package içinde Required veya Conditional olması,
engine/DOCUMENT_CATALOG.md içindeki Applicable Types ve Applicable Profiles
sınırlarını aşamaz.

Package document seçimi her zaman project_type + delivery_profile
kombinasyonuna göre filtrelenir.
```

------

# Korunacaklar

Şunları bozma:

- mevcut package ID’leri
- mevcut dosya adları
- base + extension sistemi
- Delivery Profile sistemi
- SaaS’ın package olup project type olmaması
- Existing Project current vs desired ayrımı
- API Service information ownership düzeltmesi
- Demo DESIGN ownership düzeltmesi
- Completion Criteria bölümleri
- minimum yeterlilik ilkesi
- model bağımsızlığı

------

# Yasaklar

- `engine/` değiştirme
- `planning/` değiştirme
- `templates/` değiştirme
- yeni package oluşturma
- yeni project type oluşturma
- yeni document ID oluşturma
- catalog’daki Applicable Types değerlerini package içinden yeniden tanımlama
- package sistemini yeniden tasarlama

Yalnızca gerekli `packages/` dosyalarını değiştir.

------

# Son Kontrol

Build bittikten sonra her package için şunları doğrula:

1. Required document seçimi hem project type hem delivery profile açısından catalog ile uyumlu mu?
2. Conditional document’lar da aynı applicability kurallarına uyuyor mu?
3. SaaS content-platform/mobile-app kombinasyonlarında catalog dışı document zorlaması kaldı mı?
4. Corporate landing-page/content-platform kombinasyonlarında catalog dışı document zorlaması kaldı mı?
5. Demo prototype/landing-page kombinasyonlarında catalog dışı document zorlaması kaldı mı?
6. API Service integration/infrastructure kombinasyonlarında catalog dışı document zorlaması kaldı mı?
7. Existing Project tüm type’lara aynı TECH-CTX setini zorlamaya devam ediyor mu? Etmemeli.
8. Information ownership sınırları korunuyor mu?
9. Completion Criteria bölümleri korunuyor mu?
10. Yalnızca `packages/` değiştirildi mi?

------

# Rapor

Kısa rapor ver:

## Düzeltilen Dosyalar

## Type + Profile Applicability

Her package için yapılan temel düzeltmeyi bir cümleyle açıkla.

## Korunan Kararlar

## Açık Noktalar

Yalnızca gerçek açık nokta varsa yaz.

## Sonuç

Şunlardan biriyle bitir:

```text
PACKAGES_FINAL_FIX_COMPLETE
```

veya

```text
PACKAGES_FINAL_FIX_BLOCKED
```