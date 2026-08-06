# INPUTS_FOLDER_SPEC

~~~md
# INPUTS_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `inputs/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- Input kavramının Product Engine içerisindeki anlamını,
- `inputs/` klasörünün sistemdeki görevini,
- proje bilgilerinin nasıl toplanacağını,
- serbest metin ile yapılandırılmış girdilerin nasıl ayrılacağını,
- eksik ve çelişkili bilgilerin nasıl yönetileceğini,
- girdilerin nasıl doğrulanıp onaylanacağını,
- run başlamadan önce input’un nasıl dondurulacağını,
- input dosyalarının isimlendirme, durum ve sürümleme kurallarını,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge gerçek bir proje input dosyası değildir.

`planning/INPUTS_FOLDER_SPEC.md`, Product Engine içerisinde kullanılacak gerçek input yapısını ve input belgelerini hazırlayan ajan için bağlayıcı bir inşa rehberidir.

Gerçek proje girdileri `inputs/` klasörü içerisinde tutulacaktır.

---

# 2. Kaynak ve Üst Bağlam

`inputs/` klasörü hazırlanırken aşağıdaki belgeler temel kaynak olarak kabul edilmelidir:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/ENGINE_FOLDER_SPEC.md`
3. `planning/PACKAGES_FOLDER_SPEC.md`
4. `planning/TEMPLATES_FOLDER_SPEC.md`
5. `planning/INPUTS_FOLDER_SPEC.md`
6. `engine/PROJECT_INTAKE.md`
7. `engine/PACKAGE_RULES.md`
8. `engine/ASSUMPTION_RULES.md`
9. `engine/CONFLICT_RESOLUTION.md`
10. `engine/RUN_PROTOCOL.md`
11. `engine/VALIDATION_RULES.md`
12. Tamamlanmış `packages/` belgeleri
13. Mevcut kök klasör yapısı

`PRODUCT_ENGINE_BRAIN.md`, Product Engine’in yapılandırılmış proje bilgilerini almasını, uygun doküman paketini seçmesini ve bu bilgileri doğrudan kullanılabilir proje belgelerine dönüştürmesini hedefler.

Input sistemi bu hedefin proje gerçeğini toplama, doğrulama ve çalışma başlangıcına hazırlama katmanıdır.

---

# 3. Input Kavramı

Bir input, Product Engine’in belirli bir proje için çalışabilmesini sağlayan onaylanmış bilgi paketidir.

Input yalnızca proje fikrini anlatan kısa bir metin değildir.

Bir input:

- proje kimliğini,
- ürün veya hizmet amacını,
- hedef kullanıcıları,
- kapsamı,
- teslim beklentisini,
- teknik ve tasarım tercihlerini,
- mevcut kaynakları,
- bilinen kısıtları,
- kapsam dışı alanları,
- gelecekte planlanan gelişimleri,
- açık soruları,
- onaylanmış varsayımları

taşıyabilmelidir.

```text
Input
=
Proje gerçeği
+
Teslim hedefi
+
Kapsam
+
Kısıtlar
+
Kaynaklar
+
Açık kararlar
+
Onay durumu
~~~

Input, Product Engine’in proje hakkında kullanacağı ana gerçeklik kaynağıdır.

------

# 4. `inputs/` Klasörünün Sistem İçindeki Görevi

`inputs/` klasörü şu soruların sahibidir:

- Product Engine’e hangi proje bilgileri verildi?
- Bu bilgiler hangi kaynaktan geldi?
- Hangi bilgiler henüz eksik?
- Hangi bilgiler çelişkili?
- Hangi bilgiler kullanıcı tarafından açıkça onaylandı?
- Hangi varsayımlar kabul edildi?
- Projenin mevcut kapsamı nedir?
- Neler kapsam dışıdır?
- Hangi özellikler gelecekte planlanmaktadır?
- Hangi kaynaklar ve referanslar kullanılabilir?
- Input, engine çalışması için yeterince hazır mı?
- Run başlatılırken hangi input sürümü kullanılacak?

`inputs/` klasörü Product Engine’in proje bilgi kabul ve onay katmanıdır.

------

# 5. Kapsam Dışı

`inputs/` klasörü aşağıdaki içeriklerin sahibi değildir:

- Nihai proje dokümanları
- Üretilmiş AI belgeleri
- Package seçim kararının ayrıntılı mantığı
- Template içerikleri
- Genel engine kuralları
- Run sırasında oluşan kronolojik loglar
- Validation raporları
- Nihai output paketleri
- Engine geliştirme notları
- Ref belgelerinin kopyaları
- Uygulama sırasında alınan teknik kararların kalıcı geçmişi
- Model veya ajan özelinde çalışma promptları

Bu sorumluluklar ilgili diğer klasörlerde bulunmalıdır.

```text
inputs/
→ Proje hakkında ne biliyoruz?

engine/
→ Bu bilgilerle nasıl davranılır?

packages/
→ Bu bilgiler için hangi üretim kapsamı seçilir?

templates/
→ Seçilen belgeler nasıl üretilir?

runs/
→ Bu input kullanılarak yapılan çalışmada ne oldu?

outputs/
→ Bu çalışmanın temiz sonucu nedir?
```

------

# 6. Klasör Yapısı

Başlangıçta `inputs/` klasörü aşağıdaki yapıya sahip olacaktır:

```text
inputs/
├── README.md
├── pending/
└── approved/
```

Gerekli görülürse ileride şu yapılar eklenebilir:

```text
inputs/
├── drafts/
├── rejected/
└── archived/
```

Ancak başlangıç sürümünde gereksiz durum klasörleri oluşturulmamalıdır.

V0 için temel ayrım:

```text
pending/
→ Eksik, doğrulanmamış veya onay bekleyen girdiler.

approved/
→ Product Engine run’ında kullanılmaya hazır girdiler.
```

------

# 7. Input Durumları

Input sistemi en az aşağıdaki durumları desteklemelidir.

## 7.1 Draft

Henüz ilk toplama aşamasındaki girdidir.

- Eksik olabilir.
- Serbest notlar içerebilir.
- Engine çalışmasına uygun değildir.
- Başka kaynaklardan veri eklenebilir.

V0’da ayrı `drafts/` klasörü yoksa bu durum `pending/` altında tutulabilir.

------

## 7.2 Pending

Girdi önemli ölçüde hazırlanmıştır ancak:

- zorunlu alanları eksik olabilir,
- çelişkiler içerebilir,
- kullanıcı onayı bekliyor olabilir,
- package seçimi için yetersiz olabilir,
- kaynak doğrulaması gerekebilir.

Pending input ile nihai Product Engine run’ı başlatılmamalıdır.

Yalnızca intake tamamlama veya analiz çalışması yapılabilir.

------

## 7.3 Approved

Input:

- zorunlu alanları karşılıyorsa,
- kritik çelişkileri çözülmüşse,
- kapsamı yeterince netse,
- package seçimi yapılabilecek durumdaysa,
- kullanıcı veya yetkili karar kaynağı tarafından onaylanmışsa

approved kabul edilir.

Product Engine’in üretim run’ı yalnızca approved input üzerinden başlatılmalıdır.

------

## 7.4 Superseded

Daha yeni ve onaylı bir input sürümü tarafından geçersiz kılınmış eski girdidir.

Superseded input silinmemelidir.

Aktif run başlatmak için kullanılmamalıdır.

Eski run’ların izlenebilirliği için korunmalıdır.

------

## 7.5 Rejected

Yanlış proje, geçersiz veri, tekrarlı kayıt veya kullanılamayacak kaynak nedeniyle reddedilen input’tur.

V0’da ayrı klasör bulunmak zorunda değildir.

Ancak reddedilme durumu metadata ve log üzerinden izlenebilmelidir.

------

# 8. Input Dosya Yapısı

Her proje input’u mümkün olduğunca tek ana dosyada tutulmalıdır.

Önerilen yapı:

```text
inputs/pending/<project-slug>/
├── PROJECT_INPUT.md
├── sources/
└── attachments/
```

Onaylandığında:

```text
inputs/approved/<project-slug>/
├── PROJECT_INPUT.md
├── sources/
└── attachments/
```

Daha hafif projelerde tek dosya yaklaşımı kullanılabilir:

```text
inputs/pending/<project-slug>.md
inputs/approved/<project-slug>.md
```

Klasör veya tek dosya kullanım kararı projenin kaynak yoğunluğuna göre verilmelidir.

Çok sayıda kaynak, ekran görüntüsü, mevcut doküman veya bağlantı varsa klasör yapısı tercih edilmelidir.

------

# 9. `README.md`

## Sahip Olduğu Soru

Input sistemi nasıl kullanılır?

## İçermelidir

- `inputs/` klasörünün amacı
- Pending ve approved ayrımı
- Input yaşam döngüsü
- Dosya isimlendirme kuralları
- Minimum input içeriği
- Onay süreci
- Input snapshot ilişkisi
- Mevcut proje ve yeni proje farkı
- Kaynakların nasıl tutulacağı
- Hassas bilgi kuralları
- İlgili engine sözleşmelerine yönlendirme

## İçermemelidir

- Bütün intake alanlarının ayrıntılı tekrarı
- Package seçim karar ağacı
- Run protokolünün tamamı
- Gerçek proje girdileri
- Template içerikleri

------

# 10. Ana Input Belgesi

Her proje input’unun ana belgesi varsayılan olarak aşağıdaki adı taşımalıdır:

```text
PROJECT_INPUT.md
```

Daha hafif tek dosya kullanımında şu adlandırma kullanılabilir:

```text
<project-slug>_INPUT.md
```

Ancak repository genelinde tek bir yöntem seçilmeli ve tutarlı uygulanmalıdır.

Ana input belgesi Product Engine’in proje hakkında okuyacağı temel kaynaktır.

------

# 11. Input Metadata

Her input aşağıdaki metadata alanlarını taşımalıdır:

```text
input_id
project_name
project_slug
input_version
status
created_at
updated_at
approved_at
approved_by
project_type
delivery_target
source_count
supersedes
```

Örnek:

```yaml
input_id: io-makina-001
project_name: IO Makina
project_slug: io-makina
input_version: 0.2
status: pending
created_at: 2026-08-06
updated_at: 2026-08-06
approved_at:
approved_by:
project_type: corporate-website
delivery_target: prototype
supersedes:
```

Metadata formatı bütün input belgelerinde aynı olmalıdır.

Tarih biçimi repository genelinde standartlaştırılmalıdır.

Önerilen biçim:

```text
YYYY-MM-DD
```

Gerekli durumlarda saat:

```text
YYYY-MM-DDTHH:mm:ssZ
```

------

# 12. Input Belgesinin Ortak Yapısı

Her `PROJECT_INPUT.md` mümkün olduğunca aşağıdaki yapıyı kullanmalıdır:

```md
# Project Input

## Input Metadata

## Proje Kimliği

## Proje Özeti

## Problem ve Amaç

## Hedef Kullanıcılar

## Temel Kapsam

## Kapsam Dışı

## Gelecekte Planlanan Gelişim

## Kullanıcı Akışları

## Sayfalar veya Özellikler

## İçerik Kaynakları

## Tasarım Bağlamı

## Teknik Bağlam

## Mevcut Sistem Bilgisi

## Teslim Hedefi

## Kısıtlar

## Entegrasyonlar

## Kaynaklar ve Referanslar

## Bilinen Kararlar

## Açık Sorular

## Varsayımlar

## Çelişkiler

## Onay Durumu

## Input Tamamlanma Kontrolü
```

Bütün projelerde boş başlıklar zorunlu olarak bırakılmamalıdır.

İlgisiz bölümler kaldırılabilir veya açıkça “uygulanmıyor” olarak işaretlenebilir.

Ancak temel kimlik, amaç, kapsam, teslim hedefi ve onay durumu her input’ta bulunmalıdır.

------

# 13. Proje Kimliği

Input en az aşağıdaki kimlik bilgilerini taşımalıdır:

- Proje adı
- Proje slug’ı
- Projenin kısa tanımı
- Proje türü
- Yeni proje veya mevcut proje durumu
- Müşteri veya proje sahibi
- Ana hedef
- Teslim türü

Proje adı bilinmiyorsa geçici bir çalışma adı kullanılabilir.

Geçici isim açıkça işaretlenmelidir.

Başka bir projeye ait isim placeholder olarak bırakılmamalıdır.

------

# 14. Proje Özeti

Proje özeti:

- kısa,
- açık,
- proje amacını anlatan,
- pazarlama metni olmayan,
- teknik ayrıntıya boğulmayan

bir tanım olmalıdır.

Önerilen uzunluk:

```text
1–4 paragraf
```

Proje özeti, Product Engine’in bütün projeyi ilk bakışta anlamasına yetecek seviyede olmalıdır.

------

# 15. Problem ve Amaç

Bu bölüm en az şu sorulara cevap vermelidir:

- Proje hangi problemi çözüyor?
- Kimin için çözüyor?
- İlk teslimin amacı nedir?
- Başarı nasıl anlaşılacak?
- Bu proje neden yapılmalı?

Problem, çözüm ve teslim hedefi birbirine karıştırılmamalıdır.

------

# 16. Hedef Kullanıcılar

Hedef kullanıcılar mümkün olduğunca rol bazlı tanımlanmalıdır.

Örnek:

```text
- Potansiyel müşteri
- Mevcut müşteri
- Site yöneticisi
- İç ekip
- Satış temsilcisi
```

Kullanıcı hakkında bilinmeyen demografik ayrıntılar uydurulmamalıdır.

Her kullanıcı türü için mümkünse:

- temel ihtiyacı,
- projeyi neden kullanacağı,
- ana akışı

kısa biçimde belirtilmelidir.

------

# 17. Temel Kapsam

Temel kapsam mevcut teslim içerisinde yapılması beklenen unsurları tanımlar.

Kapsam mümkün olduğunca gözlemlenebilir maddeler hâlinde yazılmalıdır.

Örnek:

```text
- Ana sayfa
- Ürün listeleme
- Ürün detay
- Kurumsal sayfa
- İletişim formu
- Mobil uyumlu arayüz
```

“Modern site”, “güzel panel” veya “iyi kullanıcı deneyimi” tek başına kapsam maddesi değildir.

Bu ifadeler somut beklentilerle açıklanmalıdır.

------

# 18. Kapsam Dışı

Kapsam dışı alanlar açıkça tanımlanmalıdır.

Örnek:

```text
- Gerçek ödeme entegrasyonu
- Kullanıcı hesabı
- Yönetim paneli
- Canlı veritabanı
- Üretim deployment’ı
```

Kapsam dışı olan bir özellik output belgelerinde tamamlanmış veya aktifmiş gibi gösterilmemelidir.

------

# 19. Gelecekte Planlanan Gelişim

“Kapsam dışı” ve “gelecekte planlanan” aynı kavram değildir.

Bu bölüm:

- ilk teslimde yapılmayacak,
- ancak sonraki aşamalarda eklenmesi muhtemel

unsurları belirtir.

Örnek:

```text
İlk aşamada kapsam dışı:
- Yönetim paneli

Gelecekte planlanan:
- Ürün içeriklerinin panelden yönetilmesi
```

Bu ayrım package’ın büyüme yolunu belirlemesine yardımcı olur.

------

# 20. Teslim Hedefi

Input, Product Engine’in hangi tür çıktı hazırlayacağını açıkça belirtmelidir.

Örnek teslim hedefleri:

```text
Foundation
Prototype
Implementation Ready
Production Ready
Documentation Only
Design Only
Audit and Migration
```

Teslim hedefi yalnızca “demo” gibi belirsiz bir kelimeyle bırakılmamalıdır.

Örneğin:

```text
Teslim hedefi:
Sunulabilir, çalışan ve daha sonra gerçek implementasyona genişletilebilecek frontend prototype.
```

Bu ifade hız ile geleceğe hazır olma beklentisini birlikte taşır.

------

# 21. Sayfalar veya Özellikler

Projenin türüne göre aşağıdakilerden biri veya birkaçı kullanılabilir:

- Sayfa listesi
- Özellik listesi
- Modül listesi
- Endpoint listesi
- Kullanıcı akışı listesi
- Yönetim yetenekleri
- Entegrasyon listesi

Her madde mümkünse:

- amacı,
- ana kullanıcıyı,
- kapsamını,
- koşullu durumlarını

belirtmelidir.

Ancak input dosyası ayrıntılı proje planına dönüşmemelidir.

------

# 22. Kullanıcı Akışları

Input’ta yalnızca bilinen ana akışlar tanımlanmalıdır.

Örnek:

```text
Ziyaretçi
→ Ana sayfayı açar
→ Ürün kategorisini seçer
→ Ürün detayını inceler
→ İletişim talebi gönderir
```

Henüz kesinleşmemiş mikro etkileşimler veya teknik uygulama ayrıntıları input’a zorla eklenmemelidir.

------

# 23. İçerik Kaynakları

Input, içeriklerin nereden geleceğini açıkça tanımlamalıdır.

Olası kaynaklar:

- Mevcut web sitesi
- Sosyal medya hesabı
- Müşteri tarafından gönderilen doküman
- Ürün kataloğu
- Görseller
- Kamuya açık firma bilgileri
- Geçici mock içerik
- Ajan tarafından üretilecek taslak içerik

Her kaynak için mümkünse:

```text
Kaynak adı
Kaynak türü
Kullanım amacı
Güven seviyesi
Kullanım izni veya sınırı
```

belirtilmelidir.

------

# 24. Kaynak Güven Seviyesi

Input kaynakları aşağıdaki gibi sınıflandırılabilir:

## Authoritative

Kullanıcı, müşteri veya mevcut sistem tarafından doğrulanmış bilgidir.

## Trusted

Güvenilir ancak doğrudan onaylanmamış kaynaktır.

## Reference Only

Yalnızca fikir, yapı veya görsel yön için kullanılır.

## Unverified

Doğrulanmamış ve üretimde gerçek bilgi gibi kullanılmaması gereken kaynaktır.

Kaynak güven seviyesi, `CONFLICT_RESOLUTION.md` ile uyumlu olmalıdır.

------

# 25. Tasarım Bağlamı

Tasarım gerekli olduğunda input en az şunları desteklemelidir:

- Marka karakteri
- Görsel yön
- Beğenilen veya kaçınılan stiller
- Renk tercihleri
- Tipografi tercihleri
- Referans siteler veya görseller
- Mobil öncelik
- İçerik yoğunluğu
- Kurumsal veya deneysel yön
- Mevcut logo ve marka varlıkları

Referans tasarım, kopyalanacak tasarım anlamına gelmemelidir.

Input’ta hangi yönün referans alındığı açıklanmalıdır:

```text
- Kompozisyon
- Renk yaklaşımı
- Navigasyon
- Kart yapısı
- Genel atmosfer
```

------

# 26. Teknik Bağlam

Teknik bilgi mevcutsa input en az şunları desteklemelidir:

- Tercih edilen stack
- Yasak veya kullanılmaması gereken teknolojiler
- Mevcut hosting
- Mevcut veritabanı
- Mevcut repo
- Backend gereksinimi
- API gereksinimleri
- Authentication
- Deployment beklentisi
- Platform hedefleri
- Teknik kısıtlar

Teknik tercih verilmemişse ajan uygun stack’i sessizce kesin karar olarak yazmamalıdır.

İlgili assumption veya package varsayılanı uygulanmalıdır.

------

# 27. Mevcut Sistem Bilgisi

Mevcut proje input’larında aşağıdaki bilgiler mümkün olduğunca bulunmalıdır:

- Repository konumu
- Mevcut stack
- Çalışan özellikler
- Yarım kalan özellikler
- Bilinen hatalar
- Mevcut dokümantasyon
- Mevcut deployment
- Veritabanı durumu
- Teknik borçlar
- Korunması gereken kararlar
- Değiştirilebilecek alanlar
- Eski veya güvenilmez belgeler

Mevcut sistem hakkında bilinmeyen bilgiler yapılmış gibi gösterilmemelidir.

------

# 28. Kısıtlar

Kısıtlar açıkça tanımlanmalıdır.

Örnek:

- Zaman
- Bütçe
- Hosting
- Lisans
- Teknoloji
- İçerik eksikliği
- Görsel eksikliği
- Erişim eksikliği
- Müşteri onayı
- API sınırı
- Mobil cihaz desteği
- Tarayıcı desteği

Kısıtlar ile tercihler birbirine karıştırılmamalıdır.

------

# 29. Kaynaklar ve Referanslar

Ana input’a doğrudan gömülmesi gerekmeyen materyaller ayrı tutulabilir.

Önerilen yapı:

```text
sources/
├── SOURCE_INDEX.md
├── website-notes.md
├── social-media-notes.md
├── competitor-notes.md
└── existing-system-notes.md
```

`SOURCE_INDEX.md` her kaynak için şunları taşımalıdır:

```text
source_id
source_name
source_type
location
trust_level
usage_scope
notes
```

Raw kaynaklar input ana belgesine kontrolsüz biçimde kopyalanmamalıdır.

Ana input yalnızca doğrulanmış ve ilgili bilgilerin özetini taşımalıdır.

------

# 30. Bağlantılar

URL veya dış bağlantılar kaynak olarak tutulabilir.

Ancak bağlantı tek başına proje gerçeği sayılmamalıdır.

Her bağlantı için kısa bir kullanım notu bulunmalıdır:

```text
Bağlantı:
Mevcut kurumsal site

Kullanım:
Mevcut sayfa kapsamını ve firma bilgilerini anlamak.

Otorite:
İçerik için trusted, tasarım için reference only.
```

Erişilemeyen veya doğrulanamayan linkler açıkça işaretlenmelidir.

------

# 31. Ek Dosyalar

Input klasöründe gerektiğinde şu dosya türleri bulunabilir:

- Görseller
- Logo
- PDF katalog
- Metin belgesi
- Ekran görüntüsü
- Mevcut sitemap
- Kod veya config örneği
- Veri tablosu

Ek dosyalar doğrudan input gerçeği olarak kabul edilmemelidir.

Ana `PROJECT_INPUT.md` veya `SOURCE_INDEX.md` içerisinde rolleri açıklanmalıdır.

------

# 32. Serbest Metin ile Yapılandırılmış Input Ayrımı

Kullanıcı proje fikrini serbest metin olarak verebilir.

Bu serbest metin doğrudan approved input sayılmamalıdır.

Süreç:

```text
Serbest kullanıcı anlatımı
→ Yapılandırılmış intake çıkarımı
→ Eksik ve çelişkili alan kontrolü
→ Kullanıcı doğrulaması
→ Approved input
```

Serbest metin korunabilir ancak yapılandırılmış alanların yerine geçmemelidir.

Önerilen bölüm:

```md
## Original Brief

Kullanıcının veya müşterinin verdiği ham anlatım.
```

Ham brief değişmeden saklanabilir.

Ancak üretimde authoritative kaynak olarak yapılandırılmış ve onaylanmış bölümler kullanılmalıdır.

------

# 33. Original Brief

`Original Brief` bölümü:

- kullanıcının kendi kelimelerini,
- ilk proje anlatımını,
- müşteri mesajlarını,
- toplantı notlarını

korumak için kullanılabilir.

Bu bölümdeki ifadeler yorumlanmadan saklanmalıdır.

Engine, buradan çıkardığı sonuçları yapılandırılmış alanlara dönüştürmelidir.

Original Brief ile yapılandırılmış bilgi çelişirse çelişki çözülmeden input approved yapılmamalıdır.

------

# 34. Zorunlu, Koşullu ve İsteğe Bağlı Alanlar

Alan gereksinimlerinin ana sahibi `engine/PROJECT_INTAKE.md` olmalıdır.

Input sistemi bu sınıfları uygulamalıdır:

## Zorunlu Alan

Run başlamadan önce bulunmalıdır.

## Koşullu Alan

Proje türü, package veya özellik nedeniyle gerekli olur.

## İsteğe Bağlı Alan

Kaliteyi artırabilir ancak run için zorunlu değildir.

## Uygulanmayan Alan

Proje bağlamında ilgili değildir.

Bir alan boş bırakıldığında neden boş olduğu anlaşılmalıdır.

------

# 35. Minimum Approved Input

Her approved input en az aşağıdakileri taşımalıdır:

1. Proje adı veya geçici çalışma adı
2. Kısa proje özeti
3. Temel amaç
4. Hedef kullanıcı
5. Ana kapsam
6. Kapsam dışı alanlar
7. Teslim hedefi
8. Yeni veya mevcut proje durumu
9. Bilinen temel kısıtlar
10. Kritik açık soruların çözülmüş olması
11. Input onayı
12. Kullanılacak kaynakların belirtilmesi

Projeye göre aşağıdaki alanlar koşullu olabilir:

- Teknik stack
- Tasarım yönü
- Sayfa listesi
- Özellik listesi
- Backend kapsamı
- Veri modeli
- Authentication
- Admin panel
- Deployment
- Mevcut repo
- API kaynakları

------

# 36. Eksik Bilgi Davranışı

Input hazırlanırken eksik bilgi bulunduğunda `engine/ASSUMPTION_RULES.md` uygulanmalıdır.

## Kritik Eksiklik

Örnek:

- Projenin ne olduğu belli değil
- Ana teslim hedefi belli değil
- Hangi ürün veya hizmetlerin gösterileceği belli değil
- Mevcut proje mi yeni proje mi olduğu bilinmiyor
- Gerçek kullanıcı akışı ile gösterim akışı ayrılmamış

Davranış:

- Input pending kalmalıdır.
- Kullanıcıya soru sorulmalıdır.
- Approved yapılmamalıdır.

## Kritik Olmayan Eksiklik

Örnek:

- Kesin font seçimi
- İkincil renk
- Küçük responsive detay
- Gelecekteki opsiyonel sayfa

Davranış:

- Package varsayılanı veya kayıtlı assumption kullanılabilir.
- Varsayım input’ta görünür olmalıdır.

------

# 37. Çelişkili Bilgi Davranışı

Input kaynakları çeliştiğinde:

1. Çelişki açıkça kaydedilmelidir.
2. Kaynak güven seviyeleri kontrol edilmelidir.
3. `engine/CONFLICT_RESOLUTION.md` uygulanmalıdır.
4. Güvenli çözülemiyorsa kullanıcıya sorulmalıdır.
5. Çelişki çözülmeden input approved yapılmamalıdır.

Örnek:

```text
Mevcut site:
7 sayfa gösteriyor.

Müşteri brief’i:
Yalnızca 4 sayfa istiyor.

Durum:
Çelişki.

Gerekli karar:
Yeni kapsam 4 sayfa mı, mevcut yapı korunacak mı?
```

Ajan sessizce birini seçmemelidir.

------

# 38. Varsayımlar

Input’a eklenen varsayımlar aşağıdaki bilgileri taşımalıdır:

```text
assumption_id
assumption
reason
impact
source
status
approved
```

Örnek:

```text
Assumption:
İlk aşamada ürün içerikleri mock data ile gösterilecek.

Reason:
Müşteriden veri kaynağı henüz alınmadı.

Impact:
İçerik yapısı gösterilebilir, gerçek veri entegrasyonu kapsam dışı kalır.

Status:
Temporary

Approved:
Yes
```

Onaylanmamış kritik varsayımlar approved input’un parçası olmamalıdır.

------

# 39. Bilinen Kararlar

Kullanıcı veya proje sahibi tarafından onaylanmış temel kararlar input’ta kısa biçimde tutulabilir.

Örnek:

- React + Vite kullanılacak.
- İlk aşamada yalnızca frontend hazırlanacak.
- Panel ileriki aşamada eklenecek.
- Mevcut marka renkleri korunacak.

Ancak proje ilerledikçe alınan kalıcı teknik kararların ana sahibi `DECISIONS.md` olmalıdır.

Input yalnızca başlangıç kararlarını taşır.

------

# 40. Açık Sorular

Input’ta çözülmemiş sorular açıkça listelenmelidir.

Her soru için:

```text
question_id
question
importance
blocks_approval
owner
status
```

belirtilmelidir.

Örnek:

```text
Question:
Ürün detay sayfası ilk teslimde bulunacak mı?

Importance:
High

Blocks approval:
Yes

Owner:
Project owner

Status:
Open
```

Approved input içerisinde yalnızca run’ı engellemeyen düşük öncelikli açık sorular kalabilir.

------

# 41. Onay Süreci

Input onayı yalnızca dosyanın `pending/` klasöründen `approved/` klasörüne taşınması değildir.

Onay öncesinde şu kontroller yapılmalıdır:

1. Zorunlu alanlar dolu mu?
2. Kritik çelişkiler çözüldü mü?
3. Teslim hedefi net mi?
4. Kapsam ve kapsam dışı ayrıldı mı?
5. Kaynaklar tanımlandı mı?
6. Kritik varsayımlar onaylandı mı?
7. Package seçimi yapılabilecek kadar bilgi var mı?
8. Mevcut proje ise mevcut durum yeterince açık mı?
9. Ref ve gerçek proje bilgileri ayrılmış mı?
10. Hassas bilgi riski var mı?

Onaylayan kişi veya kaynak metadata içerisinde kaydedilmelidir.

------

# 42. Approved Input Değişmezliği

Approved input run başladıktan sonra sessizce değiştirilmemelidir.

Run başlatıldığında:

- approved input’un snapshot’ı alınmalı,
- run klasörüne kopyalanmalı,
- kullanılan input version kaydedilmelidir.

Sonradan bilgi değişirse:

1. Approved input’un yeni sürümü oluşturulmalıdır.
2. Eski sürüm korunmalıdır.
3. Yeni run veya controlled update başlatılmalıdır.
4. Değişiklik run kayıtlarında görünür olmalıdır.

Bu yaklaşım hangi çıktının hangi bilgiyle üretildiğini izlemeyi sağlar.

------

# 43. Input Snapshot

Run başlatılırken input’un değişmez kopyası oluşturulmalıdır.

Önerilen dosya:

```text
runs/active/<run-id>/INPUT_SNAPSHOT.md
```

Snapshot:

- kullanılan input sürümünü,
- onay durumunu,
- kaynak listesini,
- aktif varsayımları,
- çözülmüş çatışmaları

korumalıdır.

Snapshot, ana input dosyasının yerine geçmez.

Run’ın tarihsel kanıtıdır.

------

# 44. Input Sürümleme

Input sürümleri aşağıdaki durumlarda artırılmalıdır:

- Kapsam değiştiğinde
- Teslim hedefi değiştiğinde
- Yeni kullanıcı rolü eklendiğinde
- Teknik yaklaşım değiştiğinde
- Kritik varsayım onaylandığında
- Çelişkili bilgi çözüldüğünde
- Yeni authoritative kaynak eklendiğinde
- Mevcut proje hakkında önemli yeni bilgi bulunduğunda

Önerilen sürüm biçimi:

```text
0.1
0.2
0.3
1.0
```

## Minor Değişiklik

- Açıklama netleştirmesi
- Yeni kaynak
- Kritik olmayan alan güncellemesi

## Major Değişiklik

- Proje türünün değişmesi
- Ana kapsamın değişmesi
- Teslim profilinin değişmesi
- Temel mimari veya ürün yönünün değişmesi

Eski input sürümleri silinmemelidir.

------

# 45. Dosya İsimlendirme

Project slug aşağıdaki özelliklere sahip olmalıdır:

- küçük harfli,
- boşluksuz,
- kelimeler tireyle ayrılmış,
- Türkçe özel karakter içermeyen,
- mümkün olduğunca kısa,
- proje genelinde tutarlı.

Örnek:

```text
io-makina
fanas
vibehall
talkx
```

Run ve output dosyalarında aynı slug kullanılmalıdır.

------

# 46. Hassas Bilgi Kuralları

Input klasörü gereksiz hassas bilgi depolamamalıdır.

Aşağıdaki bilgilerin tam değerleri mümkünse input’a yazılmamalıdır:

- Şifreler
- API secret’ları
- Private key’ler
- Kredi kartı bilgileri
- Kimlik numaraları
- Gerçek kullanıcı kişisel verileri
- Production erişim token’ları
- Veritabanı bağlantı şifreleri

Bu tür bilgiler gerektiğinde yalnızca:

- environment variable adı,
- secret manager referansı,
- erişim gereksinimi

olarak belirtilmelidir.

Örnek:

```text
BREVO_API_KEY
→ Gerekli
→ Değer repository veya input içerisinde tutulmaz.
```

------

# 47. Gereksiz Bilgi İlkesi

Product Engine’e yardımcı olmayan bilgiler input’a yığılmamalıdır.

Her bilgi şu sorulardan en az birine cevap vermelidir:

- Projenin ne olduğunu anlamaya yardım ediyor mu?
- Kapsamı etkiliyor mu?
- Package seçimini etkiliyor mu?
- Template içeriğini etkiliyor mu?
- Teknik veya tasarım kararını etkiliyor mu?
- Validation için gerekli mi?
- Gelecekteki büyüme yolunu etkiliyor mu?

Hiçbirini etkilemiyorsa ana input’a eklenmemelidir.

------

# 48. Mevcut Proje Input’u

Mevcut proje için input yalnızca hedeflenen yeni özellikleri anlatmamalıdır.

En az şu üç katmanı ayırmalıdır:

```text
Current Reality
→ Şu an gerçekten ne var?

Target State
→ Ne olmasını istiyoruz?

Transition Scope
→ Bu run’da mevcut durumdan hedefe doğru ne yapılacak?
```

Bu ayrım olmadan Existing Project package doğru çalışamaz.

------

# 49. Yeni Proje Input’u

Sıfırdan projede aşağıdaki alanlar daha önemlidir:

- Ürün fikri
- Problem
- Hedef kullanıcı
- İlk teslim kapsamı
- Kapsam dışı
- Teknik ve tasarım tercihleri
- Başarı ölçütü
- Gelecekteki büyüme yolu

Henüz bilinmeyen mimari detaylar kesin proje gerçeği olarak yazılmamalıdır.

------

# 50. Kurumsal Web Sitesi Input’u

Kurumsal web sitesi bağlamında koşula göre şu bilgiler desteklenmelidir:

- Firma adı
- Sektör
- Hizmetler
- Ürünler
- Hedef müşteriler
- Mevcut web sitesi
- Sayfa kapsamı
- İletişim yöntemi
- Teklif veya dönüşüm hedefi
- Marka varlıkları
- Referanslar
- Ürün veya proje kategorileri
- Çoklu dil ihtiyacı
- CMS veya panel ihtiyacı
- Mevcut içerik kaynakları

Bu alanların tamamı her projede zorunlu değildir.

------

# 51. SaaS Input’u

SaaS bağlamında koşula göre şu bilgiler desteklenmelidir:

- Kullanıcı rolleri
- Ana problem
- Core value proposition
- Temel ürün akışları
- Authentication
- Dashboard kapsamı
- Veri modeli
- Plan veya abonelik sistemi
- Kullanım limitleri
- Admin ihtiyaçları
- Entegrasyonlar
- Deployment
- Güvenlik gereksinimleri
- MVP kapsamı
- Production hedefi

------

# 52. API Service Input’u

API veya backend service bağlamında koşula göre:

- Servisin amacı
- Tüketiciler
- Endpoint kapsamı
- Authentication
- Veri kaynakları
- Request ve response beklentileri
- Error model
- Rate limits
- Entegrasyonlar
- Deployment
- Monitoring
- Test kapsamı

desteklenmelidir.

Frontend veya tasarım alanları ilgili değilse zorunlu tutulmamalıdır.

------

# 53. Frontend Prototype Input’u

Sunulabilir ve genişletilebilir frontend çalışması için input en az şu ayrımları desteklemelidir:

- Gösterilecek gerçek kapsam
- Çalışıyormuş gibi gösterilmemesi gereken özellikler
- Mock data kullanılacak alanlar
- Gelecekte backend’e bağlanacak alanlar
- Sayfa veya ekran kapsamı
- Tasarım yönü
- Responsive hedef
- Sunum amacı
- Gelecekteki implementasyon yolu

Hızlı hazırlanması, kapsamın belirsiz bırakılmasına izin vermemelidir.

------

# 54. Input Kalite İlkeleri

## 54.1 Gerçeklik

Input yalnızca bilinen, doğrulanmış veya açıkça varsayım olarak işaretlenmiş bilgileri taşımalıdır.

## 54.2 Açıklık

Kapsam, kapsam dışı ve gelecek planı ayrılmalıdır.

## 54.3 Minimum Yeterlilik

Run başlatmaya yetecek bilgi bulunmalı, gereksiz veri yükü oluşmamalıdır.

## 54.4 Kaynak İzlenebilirliği

Önemli bilgilerin kaynağı bulunabilmelidir.

## 54.5 Onaylanabilirlik

Kullanıcı input’u okuyup doğru veya yanlış olduğunu anlayabilmelidir.

## 54.6 Proje Bağımsızlığı

Input template’i belirli bir sektöre veya projeye kilitlenmemelidir.

## 54.7 Ölçeklenebilirlik

Küçük bir site ile karmaşık SaaS aynı yoğunlukta input doldurmaya zorlanmamalıdır.

## 54.8 Güvenlik

Secret veya gereksiz kişisel veri depolanmamalıdır.

## 54.9 Değişmezlik

Approved input değişiklikleri sürümlenmelidir.

## 54.10 Engine Uyumu

Input alanları engine, package ve template sistemleriyle eşleşmelidir.

------

# 55. Input Hazırlama Ajanının Görevi

`inputs/` sistemini hazırlayan ajan:

1. `PRODUCT_ENGINE_BRAIN.md` dosyasını okumalıdır.
2. İlgili planning spec belgelerini okumalıdır.
3. Tamamlanmış engine sözleşmelerini incelemelidir.
4. Tamamlanmış package belgelerini incelemelidir.
5. `engine/PROJECT_INTAKE.md` ile input yapısını eşleştirmelidir.
6. Input README ve gerekiyorsa boş input template’lerini hazırlamalıdır.
7. Pending ve approved ayrımını net kurmalıdır.
8. Onay kriterlerini ölçülebilir hâle getirmelidir.
9. Input ile run snapshot’ını birbirine karıştırmamalıdır.
10. Secret veya kişisel veri depolama yönlendirmesi yapmamalıdır.
11. Başka klasörleri değiştirmemelidir.
12. Açık kararları raporlamalıdır.

Ajan yalnızca `inputs/` klasöründe çalışmalıdır.

Aşağıdaki klasörleri değiştirmemelidir:

- `engine/`
- `packages/`
- `templates/`
- `runs/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- `planning/`

------

# 56. Oluşturulabilecek Yardımcı Dosyalar

Mevcut ağaçta yer almıyorsa aşağıdaki dosyalar ihtiyaç olarak önerilebilir:

```text
inputs/PROJECT_INPUT_TEMPLATE.md
inputs/SOURCE_INDEX_TEMPLATE.md
inputs/APPROVAL_CHECKLIST.md
```

Ancak ajan bu dosyaları onay almadan sessizce eklememelidir.

Önce mevcut `templates/` veya `engine/PROJECT_INTAKE.md` içerisinde karşılıklarının olup olmadığını değerlendirmelidir.

Aynı sorumluluğu taşıyan ikinci bir template oluşturulmamalıdır.

------

# 57. Üretim Sonu Raporu

Input klasörünü hazırlayan ajan çalışma sonunda aşağıdaki başlıklarla kısa bir rapor sunmalıdır:

## Doldurulan Dosyalar

Hazırlanan README ve diğer belgeler.

## Input Yaşam Döngüsü

Draft, pending, approved ve superseded durumlarının özeti.

## Minimum Approved Input

Run başlatmak için gerekli minimum bilgi seti.

## Package Uyumu

Input alanlarının package gereksinimleriyle ilişkisi.

## Input–Run Ayrımı

Approved input ve input snapshot sorumluluklarının ayrımı.

## Hassas Bilgi Önlemleri

Secret ve kişisel veri davranışı.

## Yapılan Varsayımlar

Spec dışında gerekli görülen varsayımlar.

## Açık Kararlar

Kullanıcı tarafından ayrıca belirlenmesi gereken konular.

## Önerilen Yeni Dosyalar

Mevcut yapıda bulunmayan ancak gerekli görülen dosyalar.

Bu rapor input dosyalarının içine rastgele eklenmemelidir.

------

# 58. Audit Gereksinimi

İlk input sistemi hazırlandıktan sonra `inputs/` klasörü temiz bir ajan veya ayrı sohbet tarafından denetlenmelidir.

Audit aşağıdaki konuları kontrol etmelidir:

- Pending ve approved ayrımının netliği
- Input ile run snapshot’ının karışması
- Zorunlu alanların ölçülebilirliği
- Aşırı geniş ve bürokratik input yapısı
- Küçük projelerde gereksiz bilgi yükü
- Package gereksinimleriyle uyum
- Serbest brief ile yapılandırılmış input ayrımı
- Kapsam dışı ile gelecek planının ayrımı
- Kaynak güven seviyeleri
- Eksik bilgi davranışı
- Çelişki davranışı
- Varsayım kayıtları
- Approved input değişmezliği
- Sürümleme sistemi
- Hassas veri riski
- Mevcut proje input’unun current/target/transition ayrımı
- Ajan veya model bağımlı kurallar
- Başka projeden veri sızıntısı

Audit ajanı ilk aşamada dosyaları değiştirmemelidir.

Önce bulgularını raporlamalıdır.

Düzeltmeler ayrı bir uygulama adımında yapılmalıdır.

------

# 59. Tamamlanma Kriterleri

`inputs/` klasörü aşağıdaki koşulların tamamı sağlandığında tamamlanmış kabul edilir:

1. Input sisteminin amacı açıkça tanımlanmıştır.
2. Pending ve approved durumları ayrılmıştır.
3. Minimum approved input tanımlıdır.
4. Input metadata standardı belirlenmiştir.
5. Proje kimliği ve teslim hedefi zorunludur.
6. Kapsam, kapsam dışı ve gelecek planı ayrılmıştır.
7. Serbest brief ile yapılandırılmış bilgi ayrılmıştır.
8. Eksik bilgi davranışı tanımlıdır.
9. Çelişkili bilgi davranışı tanımlıdır.
10. Varsayımlar görünür ve izlenebilirdir.
11. Kaynak güven seviyeleri tanımlıdır.
12. Onay süreci ölçülebilirdir.
13. Approved input değişiklikleri sürümlenmektedir.
14. Run başlangıcında snapshot alınmaktadır.
15. Input ve run kayıtları birbirine karışmamaktadır.
16. Mevcut proje ve yeni proje farklılıkları desteklenmektedir.
17. Farklı proje türleri koşullu alanlarla desteklenmektedir.
18. Küçük projeler gereksiz input yüküne zorlanmamaktadır.
19. Hassas bilgi kuralları tanımlıdır.
20. Manuel testte approved input üzerinden package seçimi yapılabilmektedir.

------

# 60. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `inputs/` klasörü tamamlanmış kabul edilmemelidir:

- Pending input ile üretim run’ı başlatılabiliyorsa
- Approved kavramı yalnızca klasör taşımaktan ibaretse
- Minimum gerekli bilgi tanımlı değilse
- Serbest brief doğrudan proje gerçeği kabul ediliyorsa
- Kritik eksiklikler varsayımla kapatılabiliyorsa
- Kapsam dışı ile gelecekte planlanan özellikler karışıyorsa
- Kaynakların güven seviyesi belli değilse
- Çelişkili bilgi sessizce seçilebiliyorsa
- Approved input run başladıktan sonra iz bırakmadan değiştirilebiliyorsa
- Eski input sürümleri kayboluyorsa
- Input ile nihai proje dokümanı aynı işlevi görüyorsa
- Input klasörü run loglarıyla dolduruluyorsa
- Her proje aynı uzun intake’i doldurmak zorundaysa
- Secret veya kişisel veri depolanması teşvik ediliyorsa
- Mevcut projede current state ile target state ayrılmıyorsa
- Package seçimine yetecek bilgi bulunmuyorsa

------

# 61. Değişiklik İlkesi

Bu spec onaylandıktan sonra `inputs/` klasörü hazırlanmalıdır.

Input sistemi hazırlanırken mevcut ağaçta bulunmayan bir dosya gereksinimi ortaya çıkarsa ajan:

1. Sessizce dosya oluşturmamalıdır.
2. İhtiyacı açık biçimde raporlamalıdır.
3. Mevcut engine veya template belgeleriyle çözülebilirliğini değerlendirmelidir.
4. Yeni dosyanın tekil sorumluluğunu açıklamalıdır.
5. Onay almadan klasör ağacını değiştirmemelidir.

Input sisteminde yapılacak kalıcı değişiklikler `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

------

# 62. Nihai Hedef

`inputs/` klasörü tamamlandığında Product Engine:

- serbest proje anlatımını yapılandırılmış bilgiye dönüştürebilmeli,
- zorunlu ve koşullu bilgileri ayırt edebilmeli,
- eksik ve çelişkili alanları görünür hâle getirebilmeli,
- proje kapsamını ve teslim hedefini netleştirebilmeli,
- kaynakların güven seviyesini değerlendirebilmeli,
- yalnızca onaylanmış input üzerinden üretim run’ı başlatabilmeli,
- kullanılan input sürümünü run boyunca izleyebilmelidir.

Input sisteminin çalışma modeli şu olmalıdır:

```text
Serbest proje anlatımı
+
Kaynaklar
+
Yapılandırılmış intake
+
Çözülen kritik sorular
+
Onaylanmış varsayımlar
+
Açık kapsam ve teslim hedefi
=
Approved Project Input
```

Approved Project Input:

```text
Approved Project Input
+
Engine sözleşmeleri
+
Package seçimi
+
Template sistemi
=
Product Engine üretim run’ı
```

Input sisteminin başarısı çok fazla bilgi toplamasıyla değil; Product Engine’in projeyi yanlış anlamadan, gereksiz soru ve varsayım üretmeden, doğru kapsamda çalışmasını sağlayacak kadar temiz, onaylı ve izlenebilir proje gerçeği sunmasıyla ölçülmelidir.
