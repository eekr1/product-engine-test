# EXAMPLES_FOLDER_SPEC

# EXAMPLES_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `examples/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- example kavramının Product Engine içerisindeki anlamını,
- `examples/` klasörünün görevini,
- input, run ve output örneklerinin nasıl hazırlanacağını,
- örneklerin engine sözleşmeleri, template’ler ve ref belgeleriyle ilişkisini,
- gerçek proje bilgilerinin nasıl anonimleştirileceğini,
- örneklerin test ve eğitim amacıyla nasıl kullanılacağını,
- eski veya geçersiz örneklerin nasıl yönetileceğini,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge gerçek bir örnek input, run veya output değildir.

Gerçek örnek setleri `examples/` klasörü içerisinde tutulacaktır.

---

# 2. Kaynak ve Üst Bağlam

`examples/` klasörü hazırlanırken aşağıdaki kaynaklar dikkate alınmalıdır:

1. `PRODUCT_ENGINE_BRAIN.md`
2. İlgili planning spec belgeleri
3. Tamamlanmış `engine/` sözleşmeleri
4. Tamamlanmış `packages/` belgeleri
5. Tamamlanmış `templates/` belgeleri
6. Tamamlanmış `inputs/`, `runs/` ve `outputs/` yapıları
7. İlgili `ref/` belgeleri
8. Mevcut kök klasör ağacı

Product Engine’in ilk sürümü; yapılandırılmış proje girdisinden doğru doküman paketini seçmeli, bilgiyi doğru belgelere dağıtmalı, temel çelişkileri kontrol etmeli ve ajanların doğrudan kullanabileceği çıktı üretmelidir.

Examples sistemi bu sürecin somut olarak nasıl görünmesi gerektiğini gösteren eğitim ve test katmanıdır.

---

# 3. Example Kavramı

Bir example, Product Engine’in belirli bir kullanım senaryosunu doğru ve anlaşılır biçimde gösteren kontrollü örnek materyaldir.

Example:

- bağlayıcı engine kuralı değildir,
- gerçek template değildir,
- güncel proje gerçeği değildir,
- package seçiminin authoritative kaynağı değildir,
- ref belgelerinin yerine geçmez.

Example’ın görevi:

- sistemin nasıl kullanılacağını göstermek,
- beklenen kalite seviyesini somutlaştırmak,
- yeni ajanların sistemi daha hızlı anlamasını sağlamak,
- manuel veya otomatik testlerde fixture olarak kullanılmak,
- iyi ve hatalı davranışları karşılaştırılabilir hâle getirmektir.

```text
Engine sözleşmesi
→ Ne yapılması gerektiğini tanımlar.

Template
→ Belgenin nasıl üretileceğini tanımlar.

Example
→ Doğru uygulamanın nasıl görünebileceğini gösterir.
~~~

------

# 4. `examples/` Klasörünün Görevi

`examples/` klasörü şu soruların sahibidir:

- Geçerli bir project input nasıl görünür?
- Pending ve approved input arasındaki fark nedir?
- Bir Product Engine run’ı hangi kayıtları üretir?
- Temiz ve kullanılabilir output paketi nasıl görünür?
- Farklı package ve delivery profile sonuçları nasıl değişir?
- Küçük ve büyük projelerde dokümantasyon yoğunluğu nasıl ölçeklenir?
- Hatalı bir çıktı neden hatalı kabul edilir?
- Yeni bir ajan sistemi hangi örnek üzerinden deneyebilir?
- Engine değişikliklerinden sonra mevcut davranış nasıl yeniden test edilir?

`examples/` klasörü Product Engine’in öğretici örnek ve test senaryosu katmanıdır.

------

# 5. Kapsam Dışı

`examples/` klasörü aşağıdaki içeriklerin ana sahibi değildir:

- Genel engine kuralları
- Package tanımları
- Aktif template’ler
- Gerçek müşteri input’ları
- Aktif veya tarihsel gerçek run kayıtları
- Nihai müşteri output’ları
- Engine changelog
- Issue ve improvement kayıtları
- Ham ref belgeleri
- Gizli veya kişisel bilgiler
- Ajanın özel düşünce zinciri

Gerçek projeler kendi `inputs/`, `runs/` ve `outputs/` alanlarında tutulmalıdır.

------

# 6. Klasör Yapısı

Başlangıç yapısı:

```text
examples/
├── README.md
├── inputs/
├── outputs/
└── runs/
```

İhtiyaç oluşursa ileride şu alt klasörler önerilebilir:

```text
examples/
├── scenarios/
├── invalid/
└── fixtures/
```

Ancak V0 aşamasında gereksiz ayrıntı oluşturulmamalıdır.

Temel yapı yeterli olmalıdır:

```text
inputs/
→ Örnek proje girdileri

runs/
→ Örnek Product Engine çalışma kayıtları

outputs/
→ Örnek temiz teslim paketleri
```

------

# 7. `README.md`

## Sahip Olduğu Soru

Examples sistemi nasıl kullanılır?

## İçermelidir

- `examples/` klasörünün amacı
- Example’ın bağlayıcı olmayan konumu
- Input, run ve output örneklerinin farkı
- Örneklerin nasıl seçileceği
- Anonimleştirme kuralları
- Engine ve template sürüm uyumluluğu
- Örneklerin test amacıyla kullanımı
- Geçersiz veya deprecated örnek davranışı
- Yeni örnek ekleme kriterleri

## İçermemelidir

- Bütün örnek içeriklerinin tekrarı
- Engine sözleşmelerinin uzun açıklaması
- Gerçek müşteri bilgileri
- Aktif proje kararları

------

# 8. Example Türleri

Examples sistemi en az aşağıdaki türleri desteklemelidir.

## 8.1 Positive Example

Kurallara uygun ve beklenen kaliteyi gösteren örnektir.

Kullanım amacı:

- Ajan eğitimi
- Kalite karşılaştırması
- Test fixture
- Yeni package veya template doğrulaması

------

## 8.2 Negative Example

Bilinçli olarak hatalı veya eksik hazırlanmış örnektir.

Hata türü açıkça belirtilmelidir.

Örnek:

- Zorunlu input alanı eksik
- Package yanlış seçilmiş
- Template talimatı output’a sızmış
- Başka projeden isim taşınmış
- Çözülmemiş placeholder bulunuyor

Negative example, gerçek hatalı run gibi sunulmamalıdır.

Öğretici amaçla oluşturulduğu açıkça işaretlenmelidir.

------

## 8.3 Edge Case Example

Normal akıştan farklı ancak geçerli bir durumu gösterir.

Örnek:

- Mevcut fakat dokümantasyonsuz proje
- Birden fazla package birleşimi
- Kritik olmayan eksik bilgi
- Conditional Pass ile tamamlanan output
- Prototype’tan Implementation Ready profile geçişi

------

## 8.4 Minimal Example

Küçük bir proje için gerekli minimum bilgi ve doküman setini gösterir.

Amaç, Product Engine’in gereksiz bürokrasi üretmediğini doğrulamaktır.

------

## 8.5 Comprehensive Example

Daha karmaşık projelerde engine’in geniş kapsamı nasıl yönettiğini gösterir.

Amaç, sistemin ölçeklenebilirliğini test etmektir.

------

# 9. Example Set Kavramı

Bir example mümkünse tek başına kopuk dosya olarak değil, ilişkili bir scenario seti olarak hazırlanmalıdır.

V0 için authoritative yapı mevcut ayrı alt klasör yapısıdır:

```text
examples/
├── inputs/
├── runs/
└── outputs/
```

Aynı senaryoya ait dosyalar ortak `scenario_id` ile ilişkilendirilir.

Örnek:

```text
examples/inputs/corporate-site-minimal-001-input.md
examples/runs/corporate-site-minimal-001-run/
examples/outputs/corporate-site-minimal-001-output/
```

`scenario_id` formatı: `<project-type>-<descriptor>-<sequence>`

`examples/scenarios/<scenario-id>/` yapısı gelecekte değerlendirilebilecek bir seçenektir; V0 build yapısı değildir.

Aynı senaryoya ait input, run ve output'un ilişkisi ortak `scenario_id` üzerinden açıkça anlaşılabilmelidir.

------

# 10. Scenario Metadata

Her example seti mümkünse aşağıdaki metadata alanlarını taşımalıdır:

```text
scenario_id
title
example_type
project_type
package_id
delivery_profile
engine_version
template_versions
status
created_at
updated_at
source
anonymized
```

Örnek:

```yaml
scenario_id: corporate-site-minimal-001
title: Minimal Corporate Website
example_type: positive
project_type: corporate-website
package_id: corporate-website
delivery_profile: prototype
engine_version: 0.1
status: active
anonymized: true
```

Metadata biçimi bütün example setlerinde tutarlı olmalıdır.

------

# 11. `SCENARIO.md`

Bir scenario belgesi aşağıdakileri açıklamalıdır:

- Senaryonun amacı
- Test edilen davranış
- Kullanılan package
- Delivery profile
- Beklenen output kapsamı
- Bilinçli olarak eklenen özel koşullar
- Başarı kriterleri
- Negative example ise beklenen hatalar
- Engine ve template sürüm uyumluluğu

Scenario belgesi engine kurallarını tekrar etmemelidir.

Yalnızca o örneğin neden var olduğunu açıklamalıdır.

------

# 12. Input Örnekleri

`examples/inputs/` içerisinde en az şu türler bulunabilir:

```text
minimal-approved-input
pending-input-with-critical-gaps
existing-project-input
multi-package-input
prototype-input
implementation-ready-input
```

Her input örneği:

- gerçek input yapısına uymalı,
- açık status taşımalı,
- package seçimini test edebilecek bilgi içermeli,
- gerçek kişisel veya müşteri verisi içermemeli,
- kullanılmayan gereksiz alanlarla şişirilmemelidir.

Pending input, yanlışlıkla approved örnek gibi gösterilmemelidir.

------

# 13. Run Örnekleri

`examples/runs/` içerisinde farklı run yaşam döngüleri gösterilebilir:

```text
completed-generation-run
blocked-run
failed-validation-run
paused-and-resumed-run
expansion-run
repair-run
```

Run örnekleri gerçek run yapısıyla uyumlu olmalıdır.

Ancak gereksiz ayrıntılı sahte log üretmemelidir.

Her örnek yalnızca test ettiği davranışı gösterecek kadar kayıt içermelidir.

------

# 14. Output Örnekleri

`examples/outputs/` içerisinde en az şu farklılıklar gösterilebilir:

- Minimal temiz output
- Prototype output
- Implementation Ready output
- Existing Project migration output
- API Service output
- Invalid output example

Positive output örneklerinde:

- çözülmemiş zorunlu placeholder bulunmamalı,
- template metadata bulunmamalı,
- run logları output’a sızmamalı,
- başka projeden içerik bulunmamalı,
- belge okuma sırası anlaşılır olmalıdır.

------

# 15. Anonimleştirme İlkesi

Gerçek projelerden example oluşturulabilir ancak doğrudan kopyalanmamalıdır.

Aşağıdaki bilgiler kaldırılmalı veya değiştirilmelidir:

- Firma adı
- Kişi adı
- Telefon
- E-posta
- Adres
- Gerçek fiyat ve teklif bilgileri
- Private repository yolları
- API anahtarları
- Müşteriye özel gizli içerikler
- Ticari olarak hassas bilgiler
- Gerçek kullanıcı verileri

Anonimleştirme yalnızca isim değiştirmekten ibaret değildir.

Projenin kimliğini dolaylı biçimde açığa çıkarabilecek içerikler de değerlendirilmelidir.

------

# 16. Sentetik Example Tercihi

Mümkün olduğunda example setleri sentetik projeler üzerinden hazırlanmalıdır.

Sentetik proje:

- gerçek bir müşteriye ait olmayan,
- test amacıyla tasarlanmış,
- belirli engine davranışını açıkça gösteren

proje senaryosudur.

Sentetik example avantajları:

- Gizlilik riski düşüktür.
- İstenilen edge case kontrollü biçimde oluşturulabilir.
- Proje özel kararların yanlış genellenmesi engellenir.
- Test sonuçları daha anlaşılır olur.

------

# 17. Ref ile Example Ayrımı

```text
ref/
→ Kaliteli veya gerçek dokümanları incelemek için kaynak

examples/
→ Product Engine’in kurallarına göre hazırlanmış kontrollü senaryo
```

Ref belgeleri:

- farklı standartlardan gelebilir,
- Product Engine formatına uymak zorunda değildir,
- gerçek proje içeriği taşıyabilir.

Example belgeleri:

- güncel engine sözleşmeleriyle uyumlu olmalı,
- belirli bir davranışı test etmeli,
- kontrollü ve açıklanmış olmalıdır.

Ref belgesi doğrudan example olarak kopyalanmamalıdır.

------

# 18. Template ile Example Ayrımı

Template üretim sözleşmesidir.

Example ise template’in uygulanmış sonucunu gösterebilir.

Example içerisinde template placeholder’ları veya generation rule’ları bulunmamalıdır; yalnızca bilinçli negative example bunu test ediyorsa istisna yapılabilir.

Bir example, template’in yerini almamalıdır.

Ajan example metnini yeni projeye kopyalamamalıdır.

------

# 19. Otorite Sınırı

Example belgeleri hiçbir zaman şu kaynakların önüne geçmemelidir:

1. Kullanıcının güncel açık talebi
2. `PRODUCT_ENGINE_BRAIN.md`
3. Onaylanmış input
4. Engine sözleşmeleri
5. Package belgeleri
6. Template belgeleri

Example ile authoritative belge çelişirse authoritative belge uygulanmalıdır.

Example’ın uyumsuz olduğu tespit edilirse example güncellenmeli veya deprecated yapılmalıdır.

------

# 20. Example Seçim İlkesi

Her olası proje türü için çok sayıda example oluşturmak zorunlu değildir.

Yeni example yalnızca şu durumlarda eklenmelidir:

- Yeni package veya delivery profile davranışını gösteriyorsa
- Mevcut örneklerin karşılamadığı bir edge case varsa
- Tekrarlanan bir issue için regression testi gerekiyorsa
- Küçük veya büyük proje ölçeğini doğruluyorsa
- Yeni ajanların sistemi anlamasını belirgin biçimde kolaylaştırıyorsa

Yalnızca “başka bir örnek daha olsun” amacıyla example eklenmemelidir.

------

# 21. Minimum Example Seti

V0 için minimum example seti şu olabilir:

## Example 1 — Minimal Yeni Proje

- Approved input
- Basit generation run
- Temiz prototype output

## Example 2 — Mevcut Proje

- Current reality
- Target state
- Transition scope
- Existing Project package
- Implementation Ready output

## Example 3 — Hatalı Input

- Kritik eksiklik
- Pending status
- Run başlatmama davranışı

## Example 4 — Validation Hatası

- Placeholder sızıntısı
- Başka proje adı
- FAIL sonucu

Bu dört senaryo Product Engine’in temel davranışlarını göstermek için yeterli olabilir.

------

# 22. Good ve Bad Example Ayrımı

Positive ve negative örnekler açıkça ayrılmalıdır.

Önerilen işaretler:

```text
example_type: positive
```

veya:

```text
example_type: negative
```

Negative example’ın yanında mutlaka:

- Beklenen hatalar
- Hangi validation kurallarının ihlal edildiği
- Doğru davranışın ne olduğu

belirtilmelidir.

Hatalı içerik açıklamasız biçimde bırakılmamalıdır.

------

# 23. Example ve Test Fixture İlişkisi

Example setleri manuel test fixture olarak kullanılabilmelidir.

Bir test senaryosu şu yapıyı destekleyebilir:

```text
Given
→ Example input

When
→ Product Engine sözleşmeleri uygulanır

Then
→ Beklenen package, run ve output davranışı
```

Örnek:

```text
Given:
Kritik teslim hedefi eksik pending input

Expected:
- Production run başlatılmaz
- Kullanıcıya soru hazırlanır
- Input approved yapılmaz
```

Bu yaklaşım gelecekte otomatik test sistemine dönüştürülebilir.

------

# 24. Expected Result

Her test amaçlı example, beklenen sonucu açıkça tanımlamalıdır.

Beklenen sonuç şunları içerebilir:

- Seçilmesi gereken package
- Delivery profile
- Üretilmesi gereken zorunlu belgeler
- Üretilmemesi gereken belgeler
- Beklenen run durumu
- Beklenen validation sonucu
- Beklenen output yapısı

Beklenen sonuç olmadan example yalnızca okunacak bir dosya olur; test senaryosu olmaz.

------

# 25. Engine Sürümü Uyumluluğu

Her example hangi Product Engine sürümüyle uyumlu olduğunu belirtmelidir.

Engine sözleşmeleri önemli ölçüde değiştiğinde:

- Example yeniden test edilmeli,
- uyumluysa sürüm bilgisi güncellenmeli,
- uyumsuzsa düzeltilmeli,
- artık anlamlı değilse deprecated yapılmalıdır.

Eski example yeni engine davranışının kanıtı olarak kullanılmamalıdır.

------

# 26. Template Sürümü Uyumluluğu

Output örnekleri mümkünse kullanılan template sürümlerini kaydetmelidir.

Örnek:

```md
| Document ID | Template Version |
|---|---|
| PROJECT_BRAIN | 0.2 |
| TECH_CONTEXT | 0.1 |
| WAVE_PLAN | 0.3 |
```

Template değiştiğinde example output’un hâlâ geçerli olup olmadığı kontrol edilmelidir.

------

# 27. Example Durumları

Example setleri en az şu durumları destekleyebilir:

```text
draft
active
deprecated
invalid
archived
```

## Draft

Henüz doğrulanmamış örnek.

## Active

Güncel engine sürümüyle uyumlu ve kullanılabilir örnek.

## Deprecated

Daha yeni bir example veya engine davranışı tarafından değiştirilmiş örnek.

## Invalid

Hatalı olduğu tespit edilmiş ve kullanılmaması gereken örnek.

## Archived

Aktif kullanımdan kaldırılmış ancak geçmiş için saklanan örnek.

------

# 28. Deprecated Example Davranışı

Deprecated example:

- doğrudan silinmemeli,
- neden deprecated olduğu açıklanmalı,
- yerine geçen example belirtilmeli,
- aktif eğitim veya test kaynağı olarak kullanılmamalı,
- gerekirse `archive/` altına taşınmalıdır.

Aktif klasörde eski example ile yeni example birbirine karıştırılmamalıdır.

------

# 29. Example Kalite İlkeleri

## Amaçlılık

Her example belirli bir davranışı göstermelidir.

## Minimum Yeterlilik

Example yalnızca senaryoyu anlatmaya yetecek kadar ayrıntı içermelidir.

## Gerçekçilik

Sentetik olsa bile engine’in karşılaşabileceği gerçekçi bir durum göstermelidir.

## Anonimlik

Gerçek kişi veya müşteri bilgisi taşımamalıdır.

## Güncellik

Aktif engine sözleşmeleriyle uyumlu olmalıdır.

## İzlenebilirlik

Hangi engine ve template sürümüyle hazırlandığı belli olmalıdır.

## Açıklık

Positive, negative veya edge case oluşu anlaşılmalıdır.

## Tekrarsızlık

Aynı davranışı gösteren çok sayıda benzer örnek bulunmamalıdır.

## Model Bağımsızlığı

Example yalnızca belirli bir ajan tarafından anlaşılabilir olmamalıdır.

------

# 30. Güvenlik ve Gizlilik

Example klasöründe aşağıdakiler bulunmamalıdır:

- Secret değerleri
- API key’leri
- Şifreler
- Private key’ler
- Gerçek kullanıcı verileri
- Müşteri iletişim bilgileri
- Gizli repository bağlantıları
- Ticari olarak hassas bilgiler
- Ajanın özel chain-of-thought metni

Gerekli değerler sentetik placeholder veya güvenli örnek değer olarak kullanılabilir.

Örnek:

```text
DATABASE_URL=<example-value>
```

Gerçek secret benzeri görünen rastgele değerler bile kullanılmamalıdır.

------

# 31. Example Hazırlama Ajanının Görevi

`examples/` sistemini hazırlayan ajan:

1. Product Engine Brain’i okumalıdır.
2. İlgili planning spec belgelerini okumalıdır.
3. Tamamlanmış engine, package ve template belgelerini incelemelidir.
4. Input, run ve output yapılarıyla uyum sağlamalıdır.
5. Example’ların authoritative olmadığını açıkça belirtmelidir.
6. Gerçek proje bilgilerini anonimleştirmelidir.
7. Mümkün olduğunda sentetik senaryolar kullanmalıdır.
8. Her example için amaç ve beklenen sonuç tanımlamalıdır.
9. Gereksiz sayıda benzer example oluşturmamalıdır.
10. Başka klasörleri değiştirmemelidir.
11. Yeni klasör ihtiyacını raporlamalıdır.

Ajan yalnızca `examples/` klasöründe çalışmalıdır.

------

# 32. Üretim Sonu Raporu

Examples sistemini hazırlayan ajan çalışma sonunda şunları raporlamalıdır:

## Doldurulan Dosyalar

## Example Türleri

## Minimum Example Seti

## Scenario İlişkilendirme Yöntemi

## Anonimleştirme Yaklaşımı

## Engine ve Template Sürüm Uyumu

## Test Fixture Kullanımı

## Yapılan Varsayımlar

## Açık Kararlar

## Önerilen Yeni Senaryolar

Bu rapor example dosyalarının içine rastgele eklenmemelidir.

------

# 33. Audit Gereksinimi

`examples/` sistemi hazırlandıktan sonra ayrı bir ajan tarafından şu konular denetlenmelidir:

- Gerçek müşteri veya kişi bilgisi sızıntısı
- Example ile ref ayrımının bozulması
- Example ile template ayrımının bozulması
- Example’ın authoritative kaynak gibi sunulması
- Engine sürümü uyumsuzluğu
- Template sürümü uyumsuzluğu
- Beklenen sonucu olmayan senaryolar
- Aynı davranışı tekrar eden örnekler
- Gereksiz uzun veya gerçek dışı örnekler
- Negative example hatalarının açıklanmaması
- Küçük proje örneğinin gereksiz dokümantasyon üretmesi
- Test fixture olarak kullanılamayan belirsiz senaryolar
- Secret veya kişisel veri riski
- Model bağımlı anlatımlar

Audit ilk aşamada dosyaları değiştirmemeli, yalnızca bulguları raporlamalıdır.

------

# 34. Tamamlanma Kriterleri

`examples/` klasörü aşağıdaki koşullarda tamamlanmış kabul edilir:

1. Example kavramı açıkça tanımlanmıştır.
2. Input, run ve output örnekleri ayrılmıştır.
3. Example’ların authoritative olmadığı belirtilmiştir.
4. Positive, negative ve edge case davranışları desteklenmektedir.
5. En az bir minimal positive scenario bulunmaktadır.
6. En az bir existing project scenario bulunmaktadır.
7. En az bir kritik eksiklik scenario’su bulunmaktadır.
8. En az bir validation failure scenario’su bulunmaktadır.
9. Her scenario’nun amacı bellidir.
10. Her test scenario’sunun beklenen sonucu tanımlıdır.
11. Gerçek proje bilgileri anonimleştirilmiştir.
12. Sentetik example kullanımı desteklenmektedir.
13. Engine ve template sürüm uyumu kaydedilmektedir.
14. Deprecated example davranışı tanımlıdır.
15. Aynı davranışı tekrar eden gereksiz örnekler bulunmamaktadır.
16. Example’lar manuel test fixture olarak kullanılabilmektedir.
17. Secret ve kişisel veri bulunmamaktadır.
18. Audit sonucunda kritik sorun bulunmamaktadır.

------

# 35. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `examples/` klasörü tamamlanmış kabul edilmemelidir:

- Example belgeleri engine kuralı gibi kullanılıyorsa
- Gerçek müşteri bilgileri bulunuyorsa
- Ref belgeleri doğrudan example olarak kopyalanıyorsa
- Template placeholder’ları positive output örneklerinde kalıyorsa
- Example’ın test ettiği davranış belli değilse
- Beklenen sonuç tanımlanmamışsa
- Engine sürümü uyumluluğu bilinmiyorsa
- Eski ve yeni example’lar ayrılmıyorsa
- Negative example hataları açıklanmıyorsa
- Çok sayıda birbirine yakın ve gereksiz example bulunuyorsa
- Example’lar yalnızca uzun metin gösterimi olup test amacı taşımıyorsa
- Secret veya kişisel bilgi içeriyorsa
- Example yalnızca belirli bir model tarafından anlaşılabiliyorsa

------

# 36. Değişiklik İlkesi

Bu spec onaylandıktan sonra `examples/` klasörü hazırlanmalıdır.

Yeni example veya klasör ihtiyacı ortaya çıkarsa ajan:

1. Gösterilecek bağımsız davranışı açıklamalıdır.
2. Mevcut example’lardan biriyle karşılanıp karşılanmadığını değerlendirmelidir.
3. Example türünü belirtmelidir.
4. Beklenen sonucu tanımlamalıdır.
5. Onay almadan kök klasör ağacını değiştirmemelidir.

Engine davranışını etkileyen değişiklikler `logs/ENGINE_CHANGELOG.md` içerisinde; example’a özel değişiklikler ise ilgili scenario metadata’sında kaydedilmelidir.

------

# 37. Nihai Hedef

`examples/` klasörü tamamlandığında Product Engine:

- geçerli input’un nasıl görünmesi gerektiğini gösterebilmeli,
- farklı run yaşam döngülerini örnekleyebilmeli,
- temiz output kalitesini somutlaştırabilmeli,
- hatalı davranışları açıklamalı örneklerle gösterebilmeli,
- yeni ajanların sistemi daha hızlı anlamasını sağlayabilmeli,
- engine değişikliklerini kontrollü senaryolarla yeniden test edebilmelidir.

Çalışma modeli:

```text
Kontrollü Scenario
+
Example Input
+
Beklenen Engine Davranışı
+
Example Run
+
Beklenen Output
=
Öğretilebilir ve Test Edilebilir Product Engine Davranışı
```

Examples sisteminin başarısı çok sayıda örnek üretmesiyle değil; az sayıda, amaçlı, güncel ve yeniden kullanılabilir senaryoyla Product Engine’in doğru ve yanlış davranışlarını açıkça gösterebilmesiyle ölçülmelidir.
