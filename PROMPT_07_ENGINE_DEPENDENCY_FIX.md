~~~md
# PROMPT_07_ENGINE_DEPENDENCY_FIX

Product Engine `engine/` klasörü için dar kapsamlı dependency semantics fixidir.

Amaç engine mimarisini yeniden tasarlamak değildir.

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde document dependency ilişkilerinin
`project_type + delivery_profile` applicability ile nasıl birlikte çalıştığını netleştir.

Mevcut engine Approved durumdadır.
Bu görev yalnızca templates audit sırasında ortaya çıkan dependency ambiguity'yi kapatacaktır.

---

# Önce Oku

1. `PRODUCT_ENGINE_BRAIN.md`
2. `engine/DOCUMENT_CATALOG.md`
3. `engine/PROJECT_INTAKE.md`
4. `engine/PACKAGE_RULES.md`
5. `engine/INFORMATION_MAP.md`
6. `engine/GENERATION_PIPELINE.md`
7. `engine/VALIDATION_RULES.md`

Gerekirse mevcut approved `packages/` belgelerine yalnızca applicability doğrulaması için bak.

---

# Sorun

`engine/DOCUMENT_CATALOG.md` içindeki bazı document kayıtlarında dependency olarak
başka document'lar tanımlanmıştır.

Ancak dependency document her `project_type + delivery_profile` kombinasyonunda
applicable olmayabilir.

Örnek durumlar:

```text
DESIGN
Dependencies:
PROJECT-BRAIN, PRODUCT-RULES

Ancak:
landing-page için PRODUCT-RULES applicable değildir.
DATA
Dependencies:
PROJECT-BRAIN, TECH-CTX

Ancak:
content-platform için TECH-CTX applicable değildir.
API
Dependencies:
TECH-CTX, DATA

Ancak:
integration için DATA applicable değildir.
AGENT-INST
Dependencies:
PROJECT-BRAIN, PRODUCT-RULES

Ancak:
PRODUCT-RULES tüm project type'larda applicable değildir.
~~~

Bu durum dependency'nin yanlışlıkla catalog applicability kurallarını override etmesine yol açmamalıdır.

------

# Ana Kural

Document dependency çözümlemesine aşağıdaki authoritative kuralı ekle:

```text
A dependency is required only if the dependency document itself is applicable
to the active project_type + delivery_profile combination.

If the dependency document is not applicable,
the dependency is skipped.

A dependency MUST NOT force creation of a document that is excluded by
Applicable Types or Applicable Profiles.
```

Türkçe açıklaması:

```text
Bir document'ın dependency'si ancak dependency document'ın kendisi aktif
project_type + delivery_profile kombinasyonunda applicable ise zorunludur.

Dependency document applicable değilse dependency uygulanmaz.

Dependency ilişkisi hiçbir zaman DOCUMENT_CATALOG.md içindeki
Applicable Types veya Applicable Profiles sınırlarını aşamaz.
```

------

# Uygulama

Tercihen `engine/DOCUMENT_CATALOG.md` içinde:

- Catalog standardına ortak bir `Dependency Resolution Rule` bölümü ekle.
- Mevcut document kayıtlarındaki dependency listelerini mümkün olduğunca koru.
- Her kayda ayrı ayrı uzun açıklama ekleyerek gereksiz tekrar oluşturma.
- Dependency semantics tek merkezi kural üzerinden çözülmelidir.

Gerekliyse yalnız gerçekten yanlış/ambiguous bir dependency kaydını düzelt.

Ama ilk tercih:
mevcut graph'ı koruyup semantics'i applicability-aware hale getirmektir.

------

# Dependency Resolution Sırası

Document üretiminde dependency çözümleme sırası şu şekilde olmalıdır:

```text
1. Target document active project_type için applicable mı?
2. Target document active delivery_profile için applicable mı?
3. Target document'ın dependencies listesi okunur.
4. Her dependency için:
   a. Dependency project_type için applicable mı?
   b. Dependency delivery_profile için applicable mı?
5. İki koşulu da sağlayan dependency zorunlu kabul edilir.
6. Uygun olmayan dependency skip edilir.
7. Skip edilen dependency'nin primary bilgisi başka document'a taşınmaz.
8. Target document yalnız kendi authoritative information ownership sınırında üretilir.
```

------

# Information Ownership Koruması

Dependency skip edilmesi ownership taşıma anlamına gelmez.

Örnek:

```text
landing-page
+
DESIGN
+
PRODUCT-RULES not applicable
```

durumunda DESIGN üretilebilir.

Ancak PRODUCT_RULES'ın sahip olduğu bilgi DESIGN içine taşınmaz.

DESIGN yalnız kendi primary ownership alanını üretir.

Aynı kural DATA / TECH-CTX ve API / DATA örneklerinde de geçerlidir.

`engine/INFORMATION_MAP.md` owner olarak kalmalıdır.

------

# Generation Pipeline Uyumu

`engine/GENERATION_PIPELINE.md` içinde dependency sırasını anlatan bölüm,
yeni applicability-aware dependency kuralıyla çelişmemelidir.

Eğer mevcut ifade dependency'leri unconditional gibi gösteriyorsa,
yalnızca gerekli minimum açıklamayı ekle.

Pipeline mantığını yeniden yazma.

------

# Validation Uyumu

Validation sırasında şu durum FAIL sayılmamalıdır:

```text
Bir dependency document,
active project_type + delivery_profile için catalog tarafından applicable değildir
ve bu nedenle üretilmemiştir.
```

Ancak şu durum hata olmaya devam eder:

```text
Dependency document applicable olduğu halde required dependency eksiktir.
```

Gerekirse `engine/VALIDATION_RULES.md` içinde bunu minimum değişiklikle netleştir.

------

# Yasaklar

- Project type listesini değiştirme.
- Delivery Profile sistemini değiştirme.
- Document ID oluşturma veya silme.
- Package selection mantığını değiştirme.
- Information ownership'i değiştirme.
- Template dosyalarını değiştirme.
- Run Protocol'u değiştirme.
- Output Structure'ı değiştirme.
- Engine'in diğer approved kararlarını yeniden tasarlama.

Yalnızca dependency semantics için gerçekten gereken engine dosyalarını değiştir.

------

# Son Kontrol

Şunları doğrula:

1. Dependency artık Applicable Types sınırını aşabiliyor mu? Aşamamalı.
2. Dependency artık Applicable Profiles sınırını aşabiliyor mu? Aşamamalı.
3. DESIGN + landing-page kombinasyonu PRODUCT-RULES üretmeye zorlanıyor mu? Zorlanmamalı.
4. DATA + content-platform kombinasyonu TECH-CTX üretmeye zorlanıyor mu? Zorlanmamalı.
5. API + integration kombinasyonu DATA üretmeye zorlanıyor mu? Zorlanmamalı.
6. AGENT-INST, PRODUCT-RULES applicable olmayan type'larda PRODUCT-RULES üretmeye zorlanıyor mu? Zorlanmamalı.
7. Applicable dependency eksikse validation hâlâ hata veriyor mu? Vermeli.
8. Dependency skip edildiğinde information ownership başka document'a taşınıyor mu? Taşınmamalı.
9. Yeni Document ID veya project type oluşturuldu mu? Oluşturulmamalı.
10. Yalnızca gerekli `engine/` dosyaları değiştirildi mi?

------

# Rapor

## Değiştirilen Engine Dosyaları

## Yeni Dependency Semantics

## Çözülen Örnek Çakışmalar

- DESIGN / landing-page
- DATA / content-platform
- API / integration
- AGENT-INST / non-product-rule types

## Korunan Engine Kararları

## Sonuç

Şunlardan biriyle bitir:

```text
ENGINE_DEPENDENCY_FIX_COMPLETE
```

veya

```text
ENGINE_DEPENDENCY_FIX_BLOCKED
```