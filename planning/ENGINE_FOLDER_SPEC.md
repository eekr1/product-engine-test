# ENGINE_FOLDER_SPEC

# ENGINE_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `engine/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- `engine/` klasörünün sistemdeki görevini,
- klasör içerisindeki her dosyanın tekil sorumluluğunu,
- dosyalar arasındaki sınırları,
- kullanılacak yazım ve sözleşme standardını,
- zorunlu çalışma davranışlarını,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge Product Engine'in çalışma zamanında uygulanacak nihai sözleşmelerden biri değildir.

`planning/ENGINE_FOLDER_SPEC.md`, Product Engine'in çalışma sözleşmelerini hazırlayan ajan tarafından kullanılacak bir inşa rehberidir.

Nihai çalışma sözleşmeleri `engine/` klasörü içerisinde yer alacaktır.

---

# 2. Kaynak ve Üst Bağlam

`engine/` klasörü hazırlanırken aşağıdaki belgeler temel kaynak olarak kabul edilmelidir:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/ENGINE_FOLDER_SPEC.md`
3. İlgili `ref/` belgeleri
4. Mevcut kök klasör yapısı

`PRODUCT_ENGINE_BRAIN.md`, Product Engine'in amacını ve sınırlarını tanımlar.

Product Engine'in ilk sürümü:

- yapılandırılmış proje bilgilerini alır,
- oluşturulacak doküman paketini seçer,
- hazır şablonları proje bilgileriyle doldurur,
- bilgileri doğru belgeler arasında dağıtır,
- belgeler arasındaki temel çelişkileri kontrol eder,
- kullanıma hazır proje dokümantasyon paketi üretir.

İlk sürümün kod üretmesi zorunlu değildir. Başarı ölçütü, yeni bir proje tanımından ajanların doğrudan çalışmaya başlayabileceği eksiksiz ve tutarlı bir dokümantasyon paketi üretebilmesidir.

---

# 3. `engine/` Klasörünün Sistem İçindeki Görevi

`engine/` klasörü, Product Engine'i çalıştıran ajanın nasıl davranacağını tanımlayan bağlayıcı çalışma sözleşmelerini içerir.

Bu klasör şu soruların sahibidir:

- Product Engine hangi bilgileri kabul eder?
- Bir çalışma hangi koşullarda başlatılır?
- Proje nasıl sınıflandırılır?
- Hangi durumda paket seçilir?
- Bilgiler belgeler arasında nasıl yönlendirilir?
- Dokümanlar hangi sırayla üretilir?
- Eksik bilgi bulunduğunda ne yapılır?
- Çelişkili bilgi bulunduğunda ne yapılır?
- Hangi durumda kullanıcıya soru sorulur?
- Hangi durumda varsayım yapılabilir?
- Çıktının geçerli olduğu nasıl doğrulanır?
- Bir Product Engine çalışması nasıl başlatılır, kaydedilir ve kapatılır?

`engine/` klasörü Product Engine'in davranış katmanıdır.

---

# 4. Kapsam Dışı

`engine/` klasörü aşağıdaki içeriklerin sahibi değildir:

- Projeye özel gerçek bilgiler
- Müşteriye özel içerikler
- Nihai doküman şablonlarının tam metinleri
- Proje türlerine ait gerçek paket listeleri
- Örnek proje çıktıları
- Gerçek run kayıtları
- Nihai output dosyaları
- Engine değişiklik geçmişi
- Claude, Gemini, GPT veya Codex'e özel komutlar
- Kaynak kod veya uygulama implementasyonu
- Belirli bir frontend ya da backend stack'ine ait sabit tercihler

Bu içerikler ilgili diğer klasörlerde tutulmalıdır.

```text
engine/
→ Product Engine nasıl çalışır?

packages/
→ Hangi proje için hangi doküman grubu seçilir?

templates/
→ Üretilecek belgelerin yapısı ve içerik iskeleti nedir?

inputs/
→ Proje bilgileri hangi yapıda alınır ve saklanır?

runs/
→ Tek bir Product Engine çalışmasında ne oldu?

outputs/
→ Kullanıcıya veya projeye teslim edilen temiz sonuç nedir?

logs/
→ Product Engine zaman içinde nasıl gelişti?

ref/
→ Kalite, yapı ve kapsam için hangi kaynaklardan yararlanılır?
```

------

# 5. Klasör Yapısı

`engine/` klasörü aşağıdaki dosyalardan oluşur:

```text
engine/
├── README.md
├── PROJECT_INTAKE.md
├── DOCUMENT_CATALOG.md
├── PACKAGE_RULES.md
├── INFORMATION_MAP.md
├── GENERATION_PIPELINE.md
├── OUTPUT_STRUCTURE.md
├── VALIDATION_RULES.md
├── ASSUMPTION_RULES.md
├── CONFLICT_RESOLUTION.md
└── RUN_PROTOCOL.md
```

```
Yeni bir dosya yalnızca mevcut dosyalardan hiçbirinin sahiplenemediği bağımsız bir sorumluluk bulunması hâlinde eklenmelidir.

Mevcut bir sorumluluğu yeniden ifade etmek için yeni dosya oluşturulmamalıdır.
```



------

# 6. Dosya Sorumlulukları

## 6.1 `README.md`

### Sahip Olduğu Soru

Bir ajan `engine/` klasörünü hangi sırayla ve nasıl kullanır?

### İçermelidir

- `engine/` klasörünün amacı
- Dosyaların kısa görev tanımları
- Zorunlu okuma sırası
- Belge otorite sırası
- Belgeler arası ilişki haritası
- Temel Product Engine terimleri
- Çalışmaya başlama yönlendirmesi
- İlgili diğer klasörlere referanslar

### İçermemelidir

- Ayrıntılı intake alanları
- Bütün üretim pipeline'ı
- Tüm doğrulama maddeleri
- Paket seçiminin ayrıntılı karar ağacı
- Varsayım ve çatışma kurallarının tam tekrarı

### Rolü

`README.md`, `engine/` klasörünün navigasyon ve başlangıç belgesidir.

------

## 6.2 `PROJECT_INTAKE.md`

### Sahip Olduğu Soru

Product Engine'in çalışabilmesi için hangi proje bilgileri gereklidir?

### İçermelidir

- Kabul edilen girdi kategorileri
- Her alanın amacı
- Zorunlu alanlar
- Koşullu alanlar
- İsteğe bağlı alanlar
- Beklenen bilgi formatları
- Sıfırdan proje ve mevcut proje ayrımı
- Demo, kurumsal site, SaaS, API ve benzeri proje bağlamlarının giriş farkları
- Eksik bilgi sınıflandırması
- Intake'in hazır sayılma koşulları
- Girdi doğrulamasının ilk seviyesi

### İçermemelidir

- Doküman paketinin tam seçim mantığı
- Bilginin hangi output belgesine yazılacağı
- Varsayım yapma izinleri
- Nihai çıktı klasör ağacı
- Template içerikleri

### Rolü

`PROJECT_INTAKE.md`, Product Engine'in giriş sözleşmesidir.

------

## 6.3 `DOCUMENT_CATALOG.md`

### Sahip Olduğu Soru

Product Engine hangi doküman türlerini tanır ve her dokümanın sistem içindeki görevi nedir?

### İçermelidir

Her doküman için en az:

- Doküman adı
- Doküman kimliği
- Temel amacı
- Sahip olduğu bilgi alanı
- Zorunlu, koşullu veya isteğe bağlı oluşu
- Bağımlı olduğu bilgiler
- Bağlı olduğu diğer dokümanlar
- Güncellenme karakteri
- Kullanılabileceği proje türleri
- İlgili template konumu
- İlgili paket türleri

### İçermemelidir

- Dokümanın tam metin şablonu
- Uzun örnek içerikler
- Paketlerin gerçek doküman listelerinin tekrarı
- Üretim promptları
- Projeye özel bilgiler

### Rolü

`DOCUMENT_CATALOG.md`, Product Engine'in tanıdığı doküman türlerinin kayıt merkezidir.

------

## 6.4 `PACKAGE_RULES.md`

### Sahip Olduğu Soru

Verilen proje için hangi doküman paketi veya paket birleşimi seçilir?

### İçermelidir

- Proje sınıflandırma kriterleri
- Ana proje türleri
- Paket seçim mantığı
- Paket genişletme kuralları
- Paket daraltma kuralları
- Birden fazla paketin birleşme kuralları
- Paket öncelik kuralları
- Varsayılan paket davranışı
- Belirsiz sınıflandırma durumları
- Paket seçiminin nasıl gerekçelendirileceği
- `packages/` klasörüyle ilişki

### İçermemelidir

- Paket dosyalarının tam içerikleri
- Nihai doküman şablonları
- Intake alanlarının tam listesi
- Output klasör yapısının ayrıntıları
- Genel validation kontrol listeleri

### Rolü

`PACKAGE_RULES.md`, Product Engine'in paket seçme karar sözleşmesidir.

Gerçek paket tanımları `packages/` klasöründe bulunmalıdır.

------

## 6.5 `INFORMATION_MAP.md`

### Sahip Olduğu Soru

Proje kaynaklarındaki her bilgi hangi dokümanın sorumluluğundadır?

### İçermelidir

- Bilgi türleri
- Birincil bilgi sahibi doküman
- İkincil kullanım alanları
- Özetlenebilecek alanlar
- Tekrar edilmemesi gereken bilgiler
- Bilginin ayrıntı seviyesi
- Bilgi kaynağı önceliği
- Bir değişikliğin hangi belgelere yayılacağı
- Aynı bilginin farklı belgelerde nasıl farklı seviyede temsil edileceği

### İçermemelidir

- Doküman üretim sırası
- Paket seçim mantığı
- Tam template bölümleri
- Genel run operasyonları
- Validation kurallarının tamamı

### Rolü

`INFORMATION_MAP.md`, bilginin belgeler arasında kontrolsüz biçimde çoğalmasını ve çelişmesini engeller.

------

## 6.6 `GENERATION_PIPELINE.md`

### Sahip Olduğu Soru

Bir Product Engine çalışması baştan sona hangi aşamalarla yürütülür?

### İçermelidir

- Pipeline aşamaları
- Aşamaların zorunlu sırası
- Her aşamanın girdisi
- Her aşamanın çıktısı
- Aşamalar arası geçiş koşulları
- Durma koşulları
- Geri dönüş noktaları
- Paket seçim aşaması
- Template seçim aşaması
- Doküman üretim bağımlılıkları
- Validation aşamaları
- Output hazırlama aşaması
- Run kapatma aşaması

### İçermemelidir

- Her intake alanının ayrıntılı açıklaması
- Her validation maddesinin tam listesi
- Varsayım sınıflarının tamamı
- Output ağacının tüm ayrıntıları
- Template içerikleri

### Rolü

`GENERATION_PIPELINE.md`, Product Engine çalışma akışının ana orkestrasyon sözleşmesidir.

------

## 6.7 `OUTPUT_STRUCTURE.md`

### Sahip Olduğu Soru

Başarılı bir Product Engine çalışmasının nihai çıktısı hangi yapıda teslim edilir?

### İçermelidir

- Nihai output klasör yapısı
- Temiz output ile run kayıtlarının ayrımı
- Dosya adlandırma kuralları
- Proje slug kuralları
- Zorunlu output artefaktları
- Koşullu output artefaktları
- Output sürümleme yaklaşımı
- Geçici dosyaların nihai output'a taşınmama kuralları
- Teslime hazır olma koşulları
- Üretilmiş başlangıç promptlarının konumu

### İçermemelidir

- Dokümanların tam metin içeriği
- Run'ın kronolojik çalışma kaydı
- Paket seçme karar ağacı
- Validation maddelerinin tamamı
- Intake alanları

### Rolü

`OUTPUT_STRUCTURE.md`, Product Engine çıktısının teslim sözleşmesidir.

------

## 6.8 `VALIDATION_RULES.md`

### Sahip Olduğu Soru

Üretilen dokümantasyon paketinin eksiksiz, tutarlı ve kullanılabilir olduğu nasıl doğrulanır?

### İçermelidir

- Yapısal doğrulama
- Dosya varlığı kontrolü
- Paket uyumluluğu
- İçerik bütünlüğü
- Belgeler arası tutarlılık
- Proje adı ve kimlik tutarlılığı
- Teknik stack tutarlılığı
- Kapsam tutarlılığı
- Wave ve görev tutarlılığı
- Referans projelerden içerik sızıntısı kontrolü
- Placeholder ve unresolved item kontrolü
- Ajanın doğrudan çalışmaya başlayabilirlik kontrolü
- Hata önem seviyeleri
- Uyarı ve kritik hata ayrımı
- Pass, conditional pass ve fail koşulları
- Validation raporu gereksinimleri

### İçermemelidir

- Çelişkilerin hangi otoriteye göre çözüleceğinin tam mantığı
- Eksik bilgilerde varsayım yapma izinlerinin tamamı
- Pipeline'ın yeniden anlatımı
- Template yapılarının tam içeriği

### Rolü

`VALIDATION_RULES.md`, Product Engine'in kalite güvence sözleşmesidir.

------

## 6.9 `ASSUMPTION_RULES.md`

### Sahip Olduğu Soru

Eksik bilgi bulunduğunda ajan hangi koşullarda varsayım yapabilir?

### İçermelidir

- Kritik eksiklik tanımı
- Kritik olmayan eksiklik tanımı
- Varsayım yapılabilecek alanlar
- Varsayım yapılamayacak alanlar
- Kullanıcıya sorulması gereken durumlar
- Paket varsayılanlarının kullanım koşulları
- Ref belgelerinden çıkarım yapma sınırları
- Varsayımların açık biçimde kaydedilmesi
- Varsayımların geçici veya kalıcı olarak sınıflandırılması
- Varsayımların validation sırasında kontrol edilmesi

### İçermemelidir

- Genel çatışma çözüm sistemi
- Intake alanlarının tamamı
- Genel validation checklist
- Pipeline'ın tamamı

### Rolü

`ASSUMPTION_RULES.md`, Product Engine'in kontrollü belirsizlik yönetimi sözleşmesidir.

------

## 6.10 `CONFLICT_RESOLUTION.md`

### Sahip Olduğu Soru

İki bilgi, belge veya kural çeliştiğinde hangisi üstün kabul edilir ve çatışma nasıl çözülür?

### İçermelidir

- Kaynak otorite sırası
- Kullanıcının son açık talebinin konumu
- Onaylanmış intake'in konumu
- Product Engine Brain'in otoritesi
- Engine sözleşmelerinin otoritesi
- Paket kurallarının otoritesi
- Template varsayılanlarının otoritesi
- Ref belgelerinin otorite sınırı
- Güncel bilgi ile eski bilgi ilişkisi
- Çözülebilir ve çözülemeyen çatışma ayrımı
- Kullanıcıya taşınması gereken çatışmalar
- Çatışmaların kayıt biçimi

### İçermemelidir

- Eksik bilgi varsayım kuralları
- Genel validation listesinin tamamı
- Pipeline'ın tam akışı
- Intake alanları

### Rolü

`CONFLICT_RESOLUTION.md`, Product Engine'in otorite ve çatışma çözüm sözleşmesidir.

------

## 6.11 `RUN_PROTOCOL.md`

### Sahip Olduğu Soru

Bir ajan tek bir Product Engine çalışmasını operasyonel olarak nasıl başlatır, sürdürür ve kapatır?

### İçermelidir

- Run başlatma koşulları
- Run kimliği oluşturma
- Run durumları
- Input snapshot oluşturma
- Seçilen paketin kaydı
- Kullanılan template ve ref kaynaklarının kaydı
- Varsayımların kaydı
- Çatışmaların kaydı
- Validation raporu oluşturma
- Başarılı kapanış
- Başarısız kapanış
- Yarım kalan run davranışı
- Run klasörünün doğru konuma taşınması
- Nihai output aktarımı
- Run özet raporu

### İçermemelidir

- Engine'in bütün üretim mantığının tekrarı
- Kalıcı Engine Changelog
- Template içerikleri
- Paketlerin gerçek içerik listeleri

### Rolü

`RUN_PROTOCOL.md`, tek bir Product Engine çalışmasının operasyonel yaşam döngüsünü yönetir.

`GENERATION_PIPELINE.md` üretim sürecinin mantığını tanımlar.

`RUN_PROTOCOL.md` ise gerçek bir çalışmanın kayıt ve durum yönetimini tanımlar.

Bu iki dosyanın sorumlulukları birbirine karıştırılmamalıdır.

------

# 7. Okuma Sırası

Product Engine'i çalıştıran ajan için varsayılan okuma sırası aşağıdaki gibi olmalıdır:

1. `PRODUCT_ENGINE_BRAIN.md`
2. Kök `README.md`
3. `engine/README.md`
4. `engine/PROJECT_INTAKE.md`
5. `engine/DOCUMENT_CATALOG.md`
6. `engine/PACKAGE_RULES.md`
7. `engine/ASSUMPTION_RULES.md`
8. `engine/CONFLICT_RESOLUTION.md`
9. `engine/INFORMATION_MAP.md`
10. `engine/GENERATION_PIPELINE.md`
11. `engine/OUTPUT_STRUCTURE.md`
12. `engine/VALIDATION_RULES.md`
13. `engine/RUN_PROTOCOL.md`
14. Seçilen `packages/` belgeleri
15. İlgili `templates/` belgeleri
16. İlgili `ref/` belgeleri
17. Aktif proje girdisi

Bu sıra `engine/README.md` hazırlanırken doğrulanmalı ve gerekiyorsa daha uygulanabilir bir sıraya dönüştürülmelidir.

Nihai sıra tek bir yerde authoritative olarak tanımlanmalıdır.

------

# 8. Otorite İlkeleri

Engine sözleşmeleri hazırlanırken açık bir otorite sistemi kurulmalıdır.

Varsayılan üst seviye otorite sırası:

1. Kullanıcının güncel ve açık talebi
2. `PRODUCT_ENGINE_BRAIN.md`
3. Onaylanmış proje girdisi
4. `engine/` sözleşmeleri
5. Seçilen `packages/` tanımları
6. `templates/` kuralları
7. Projeye özel ek kaynaklar
8. `ref/` belgeleri
9. Örnekler
10. Ajanın varsayımları

Bu sıra doğrudan nihai kabul edilmemelidir.

`CONFLICT_RESOLUTION.md` hazırlanırken ayrıntılandırılmalı ve istisnaları tanımlanmalıdır.

Hiçbir ref veya örnek belge, proje girdisinin ya da bağlayıcı engine sözleşmesinin önüne geçmemelidir.

------

# 9. Sözleşme Dili

Engine belgelerinde bağlayıcılık seviyeleri açık olmalıdır.

Aşağıdaki anlamlar kullanılmalıdır:

```text
MUST
→ Zorunludur.

MUST NOT
→ Yasaktır.

SHOULD
→ Güçlü varsayılandır. Sapma gerekçelendirilmelidir.

SHOULD NOT
→ Güçlü biçimde kaçınılmalıdır. Sapma gerekçelendirilmelidir.

MAY
→ İsteğe bağlıdır.
```

Belgeler Türkçe yazılmalıdır.

Gerekli durumlarda `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT` ve `MAY` terimleri parantez içinde veya kural etiketi olarak kullanılabilir.

Belgelerin tamamı yapay ve mekanik RFC diline çevrilmemelidir.

Açıklamalar doğal, net ve uygulanabilir olmalıdır.

Bağlayıcılık etiketleri özellikle karar noktalarında kullanılmalıdır.

------

# 10. Yazım Standardı

Her dosya kendi ihtiyacına göre yapılandırılmalıdır.

Uygun olduğu durumlarda aşağıdaki bölümler kullanılabilir:

```md
# Belge Adı

## Amaç

## Kapsam

## Kapsam Dışı

## Temel Kavramlar

## Girdiler

## Bağlayıcı Kurallar

## Karar Süreci

## Diğer Belgelerle İlişki

## Hata ve Belirsizlik Durumları

## Çıktılar

## Tamamlanma Kriterleri
```

Her dosyaya zorla aynı başlıklar eklenmemelidir.

Boş, anlamsız veya yalnızca biçim tamamlamak için oluşturulmuş bölümler bulunmamalıdır.

Her bölüm engine'in uygulanabilirliğine doğrudan katkı sağlamalıdır.

------

# 11. Temel Tasarım İlkeleri

## 11.1 Tek Sorumluluk

Her dosya yalnızca kendi ana sorusunun sahibi olmalıdır.

Bir karar türü iki dosya tarafından bağımsız biçimde sahiplenilmemelidir.

------

## 11.2 Tek Otorite

Her kuralın birincil sahibi bulunmalıdır.

Başka bir belge aynı kurala ihtiyaç duyuyorsa kuralı yeniden tanımlamak yerine ana belgeye yönlendirme yapmalıdır.

------

## 11.3 Tekrarı Azaltma

Belgeler arasında gerekli bağlam tekrarları yapılabilir.

Ancak bağlayıcı kurallar birden fazla yerde bağımsız biçimde yazılmamalıdır.

Kopyalanmış kurallar zamanla çelişki üreteceği için engellenmelidir.

------

## 11.4 Ajan Bağımsızlığı

Engine belgeleri:

- Claude,
- Gemini,
- GPT,
- Codex,
- veya başka bir ajan

için ayrı davranış tanımlamamalıdır.

Sistem, Markdown okuyabilen, dosya oluşturabilen ve kuralları uygulayabilen herhangi bir yetkin ajan tarafından çalıştırılabilmelidir.

------

## 11.5 Koddan Bağımsızlık

Product Engine V0, özel bir uygulama veya CLI olmadan çalışabilmelidir.

Engine belgelerini okuyabilen bir ajan, Product Engine rolünü yerine getirebilmelidir.

Gelecekte yazılacak uygulama, engine sözleşmelerini otomatikleştiren bir çalışma katmanı olarak ele alınmalıdır.

------

## 11.6 Uygulanabilirlik

Bağlayıcı her kural:

- açık,
- gözlemlenebilir,
- uygulanabilir,
- doğrulanabilir

olmalıdır.

“Kaliteli içerik üret”, “iyi bir plan oluştur” gibi ölçülemeyen genel ifadeler tek başına kural olarak kullanılmamalıdır.

Bu tür ifadeler somut kontrol noktalarıyla desteklenmelidir.

------

## 11.7 Ölçeklenebilirlik

Engine, küçük bir frontend demo ile tam kapsamlı bir SaaS projesini aynı dokümantasyon yoğunluğuna zorlamamalıdır.

Projenin:

- türü,
- kapsamı,
- riski,
- teknik karmaşıklığı,
- teslim hedefi

üretilen paket yoğunluğunu etkileyebilmelidir.

------

## 11.8 Minimum Yeterlilik

Daha fazla dosya üretmek otomatik olarak daha yüksek kalite anlamına gelmez.

Engine yalnızca projenin ihtiyacı olan dokümanları üretmelidir.

Gereksiz doküman, tekrar ve süreç adımı hata olarak değerlendirilmelidir.

------

## 11.9 İzlenebilirlik

Aşağıdaki kararlar run içerisinde iz bırakmalıdır:

- Paket seçimi
- Paket genişletme veya daraltma
- Yapılan varsayımlar
- Çözülen çatışmalar
- Açık kalan belirsizlikler
- Validation sonuçları
- Kullanılan template ve referanslar

------

## 11.10 Referans İzolasyonu

`ref/` belgeleri:

- kalite,
- yapı,
- kapsam,
- bölümleme,
- ayrıntı seviyesi

için kaynak olarak kullanılabilir.

Ref belgelerindeki:

- proje isimleri,
- müşteri bilgileri,
- marka dili,
- sektör bilgileri,
- teknik kararlar,
- tasarım kararları,
- içerik metinleri

yeni projeye taşınmamalıdır.

Ref belgeleri bağlayıcı proje gerçeği değildir.

------

## 11.11 Tutarlı Terminoloji

Aynı kavram bütün engine belgelerinde aynı adla kullanılmalıdır.

Örneğin aşağıdaki terimler açıkça tanımlanmalı ve karıştırılmamalıdır:

- Project Intake
- Package
- Template
- Ref
- Run
- Output
- Assumption
- Conflict
- Validation
- Document Catalog
- Information Owner
- Input Snapshot
- Run Manifest

Terimlerin nihai tanımı `engine/README.md` veya uygun ana sözleşmede yer almalıdır.

------

# 12. Belirsizlik Davranışı

Engine sözleşmeleri aşağıdaki davranışları birbirinden ayırmalıdır:

## Kritik Eksiklik

Projenin doğru sınıflandırılmasını, ticari kapsamını veya temel mimarisini etkileyen eksikliktir.

Davranış:

- Üretim durdurulmalıdır.
- Kullanıcıya net soru sorulmalıdır.
- Cevap alınmadan ilgili aşamaya devam edilmemelidir.

## Kritik Olmayan Eksiklik

Ana kapsamı bozmayacak, paket varsayılanıyla güvenli biçimde tamamlanabilecek eksikliktir.

Davranış:

- Kontrollü varsayım yapılabilir.
- Varsayım açıkça kaydedilmelidir.
- Validation sırasında görünür olmalıdır.

## Gelecekte Belirlenecek Bilgi

İlk çalışma için zorunlu olmayan ancak daha sonra tamamlanması gereken bilgidir.

Davranış:

- Unresolved item veya açık placeholder olarak kaydedilebilir.
- Yapılmış bilgi gibi sunulmamalıdır.

## Çelişkili Bilgi

İki authoritative kaynak arasında uyumsuzluk bulunmasıdır.

Davranış:

- `CONFLICT_RESOLUTION.md` uygulanmalıdır.
- Güvenli biçimde çözülemiyorsa kullanıcıya taşınmalıdır.
- Sessizce tercih yapılmamalıdır.

Bu davranışların ayrıntılı sahipliği ilgili engine belgelerinde bulunmalıdır.

------

# 13. Dosyalar Arası İlişki İlkeleri

Engine belgeleri birbirleriyle şu şekilde ilişki kurmalıdır:

```text
PROJECT_INTAKE
→ Hangi bilgilerin gerekli olduğunu tanımlar.

PACKAGE_RULES
→ Bu bilgilere göre hangi paketin seçileceğini belirler.

DOCUMENT_CATALOG
→ Seçilebilecek doküman türlerini tanımlar.

INFORMATION_MAP
→ Bilginin seçilen dokümanlara nasıl dağıtılacağını belirler.

ASSUMPTION_RULES
→ Eksik bilgide ne yapılacağını belirler.

CONFLICT_RESOLUTION
→ Çelişkili bilgide ne yapılacağını belirler.

GENERATION_PIPELINE
→ Bütün bu sözleşmelerin hangi sırayla uygulanacağını belirler.

OUTPUT_STRUCTURE
→ Nihai teslim yapısını belirler.

VALIDATION_RULES
→ Üretilen sonucun geçerli olup olmadığını belirler.

RUN_PROTOCOL
→ Gerçek çalışmanın kayıt ve durum yaşam döngüsünü yönetir.
```

Bu ilişkiler korunmalı ve dosyalar birbirlerinin sorumluluklarını devralmamalıdır.

------

# 14. Üretim Ajanının Görevi

`engine/` klasörünü hazırlayan ajan:

1. `PRODUCT_ENGINE_BRAIN.md` dosyasını okumalıdır.
2. Bu spec belgesini tamamen okumalıdır.
3. Mevcut klasör ağacını incelemelidir.
4. İlgili ref belgelerini taramalıdır.
5. Her engine dosyasını kendi tekil sorumluluğuna göre doldurmalıdır.
6. Belgeler arasında tekrar ve çatışma oluşturmamalıdır.
7. Başka klasörlere müdahale etmemelidir.
8. Eksik stratejik kararları sessizce uydurmamalıdır.
9. Gerekiyorsa açık karar noktalarını raporlamalıdır.
10. Çalışma sonunda kısa bir build raporu vermelidir.

Ajan yalnızca `engine/` klasörü üzerinde çalışmalıdır.

Aşağıdaki klasörlerin içeriğini doldurmamalı veya değiştirmemelidir:

- `packages/`
- `templates/`
- `inputs/`
- `runs/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- diğer `planning/` belgeleri

Gerekli olduğunda bu klasörlere referans verebilir ancak içeriklerini üretmemelidir.

------

# 15. Üretim Sonu Raporu

Engine klasörünü hazırlayan ajan, dosyaları tamamladıktan sonra aşağıdaki başlıklarla kısa bir rapor sunmalıdır:

## Oluşturulan veya Doldurulan Dosyalar

Her dosyanın adı ve kısa görevi.

## Dosya Sorumluluk Haritası

Her dosyanın sahip olduğu ana soru.

## Belgeler Arası Bağımlılıklar

Bir dosyanın hangi diğer sözleşmelere başvurduğu.

## Yapılan Varsayımlar

Spec içerisinde açıkça belirlenmemiş ve ajan tarafından gerekli görülen varsayımlar.

## Açık Kararlar

Kullanıcı tarafından ayrıca kararlaştırılması gereken konular.

## Tekrar ve Çatışma Kontrolü

Aynı kuralın birden fazla dosyada sahiplenilip sahiplenilmediğine dair değerlendirme.

## Riskler

İleride `packages/`, `templates/` veya operasyon klasörleri hazırlanırken dikkat edilmesi gereken noktalar.

Bu rapor engine dosyalarının içine rastgele eklenmemelidir.

------

# 16. Audit Gereksinimi

İlk üretim tamamlandıktan sonra `engine/` klasörü ayrı bir ajan veya temiz bir sohbet tarafından denetlenmelidir.

Audit aşağıdaki konuları kontrol etmelidir:

- Tek sorumluluk ihlalleri
- Belgeler arası tekrarlar
- Çelişkili kurallar
- Eksik karar alanları
- Belirsiz bağlayıcılık
- Uygulanamayan kurallar
- Model bağımlı ifadeler
- Ref içerik sızıntısı
- Gereksiz bürokrasi
- Küçük ve büyük proje ölçeklerinin desteklenmesi
- Okuma sırasının uygulanabilirliği
- Otorite sırasının tutarlılığı
- Pipeline ile Run Protocol ayrımının korunması
- Assumption ile Conflict davranışlarının ayrılması
- Validation sonucunun ölçülebilirliği

Audit ajanı ilk aşamada dosyaları değiştirmemelidir.

Önce yalnızca bulgularını ve önerilerini raporlamalıdır.

Düzeltmeler ayrı bir uygulama adımında yapılmalıdır.

------

# 17. Tamamlanma Kriterleri

`engine/` klasörü aşağıdaki koşulların tamamı sağlandığında tamamlanmış kabul edilir:

1. Bütün engine dosyaları doludur.
2. Her dosyanın amacı açıkça tanımlanmıştır.
3. Her dosyanın kapsam dışı alanları belirtilmiştir.
4. Her karar türünün tek bir ana sahibi vardır.
5. Bağlayıcı kurallar kontrolsüz biçimde tekrarlanmamaktadır.
6. Okuma sırası tek ve nettir.
7. Otorite sırası tanımlanmıştır.
8. Eksik bilgi davranışı tanımlanmıştır.
9. Varsayım davranışı tanımlanmıştır.
10. Çatışma çözüm davranışı tanımlanmıştır.
11. Paket seçimi ile paket içeriği birbirinden ayrılmıştır.
12. Pipeline ile run operasyonu birbirinden ayrılmıştır.
13. Output ile run kayıtları birbirinden ayrılmıştır.
14. Ref belgelerinin otorite sınırı tanımlanmıştır.
15. Sözleşmeler hiçbir belirli ajana bağımlı değildir.
16. Küçük demo ve büyük ürün farklı yoğunluklarda desteklenebilir.
17. Kurallar uygulanabilir ve doğrulanabilir durumdadır.
18. Bir ajan başka konuşma bağlamına ihtiyaç duymadan sistemi anlayabilir.
19. Audit sonucunda kritik boşluk veya çelişki bulunmamaktadır.
20. Manuel bir Product Engine test run'ı sözleşmeler kullanılarak tamamlanabilmektedir.

------

# 18. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `engine/` klasörü tamamlanmış kabul edilmemelidir:

- Aynı bağlayıcı kural birden fazla dosyada farklı biçimde tanımlanıyorsa
- Belgelerin otorite sırası belirsizse
- Ajanın hangi durumda duracağı belli değilse
- Kritik eksikliklerde sessiz varsayım yapılmasına izin veriliyorsa
- Ref belgeleri proje gerçeği olarak kullanılabiliyorsa
- Küçük projeler gereksiz doküman üretimine zorlanıyorsa
- Pipeline ve Run Protocol aynı içeriği tekrar ediyorsa
- Package Rules gerçek paket tanımlarını kendi içinde tekrar ediyorsa
- Document Catalog template görevini üstleniyorsa
- Information Map yalnızca genel tavsiyeler içeriyorsa
- Validation ölçülemeyen soyut ifadelerden oluşuyorsa
- Sistem yalnızca belirli bir modelle çalışabiliyorsa
- Ajan başka konuşma bağlamına ihtiyaç duyuyorsa
- Nihai output ve operasyon kayıtları birbirine karışıyorsa

------

# 19. Değişiklik İlkesi

Bu spec onaylandıktan sonra `engine/` klasörü hazırlanmalıdır.

Engine klasörünün hazırlanması sırasında spec ile çelişen bir ihtiyaç ortaya çıkarsa ajan:

1. Sessizce spec dışına çıkmamalıdır.
2. İhtiyacı açık biçimde raporlamalıdır.
3. Önerilen değişikliği gerekçelendirmelidir.
4. Onay almadan klasör yapısını değiştirmemelidir.

İleride bu spec üzerinde yapılacak kalıcı değişiklikler `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

------

# 20. Nihai Hedef

`engine/` klasörü tamamlandığında Claude, Gemini, GPT, Codex veya başka bir yetkin ajan:

- Product Engine'in ne olduğunu,
- hangi girdileri beklediğini,
- hangi sırayla hareket edeceğini,
- ne zaman soru soracağını,
- ne zaman varsayım yapabileceğini,
- paketi nasıl seçeceğini,
- bilgiyi nasıl dağıtacağını,
- çıktıyı nasıl doğrulayacağını,
- run'ı nasıl kapatacağını

yalnızca repository içerisindeki belgeleri okuyarak anlayabilmelidir.

Product Engine'in V0 çalışma modeli şu olmalıdır:

```text
Yetkin ajan
+
PRODUCT_ENGINE_BRAIN
+
engine sözleşmeleri
+
packages
+
templates
+
proje girdisi
=
çalışan Product Engine
```

Engine klasörünün başarısı, belge sayısıyla değil; farklı ajanların aynı girdiden tutarlı, izlenebilir ve doğrudan kullanılabilir proje dokümantasyon paketleri üretebilmesiyle ölçülmelidir.

