# README

 Bu dosya planning klasörünün giriş noktası olacak; spec belgelerinin neden var olduğunu, hangi sırayla kullanılacağını ve üretim–audit–onay döngüsünü yönetecek.

~~~md
# Product Engine Planning

## 1. Amaç

`planning/` klasörü, Product Engine’in ana klasörlerini geliştirmeden önce kullanılan yapım şartnamelerini içerir.

Bu klasördeki belgeler:

- Product Engine’in çalışma zamanındaki nihai sözleşmeleri değildir.
- Gerçek proje çıktıları değildir.
- Template, package, input veya run kayıtları değildir.
- İlgili klasörleri hazırlayacak ajanlar için bağlayıcı inşa rehberleridir.

Her planning spec belgesi, karşılık geldiği klasörün:

- sistemdeki görevini,
- kapsamını,
- kapsam dışı alanlarını,
- dosya sorumluluklarını,
- diğer klasörlerle ilişkisini,
- üretim kurallarını,
- audit gereksinimlerini,
- tamamlanma ve başarısızlık kriterlerini

tanımlar.

Planning sistemi sayesinde Product Engine klasörleri tek bir genel prompt ile kontrolsüz biçimde üretilmez. Her klasör ayrı ayrı tasarlanır, hazırlanır, denetlenir ve onaylanır.

---

## 2. Planning Klasörünün Konumu

Product Engine’in genel yapısı içinde planning katmanı şu görevi üstlenir:

```text
PRODUCT_ENGINE_BRAIN.md
→ Product Engine nedir ve ne üretir?

planning/
→ Product Engine’in klasörleri nasıl inşa edilmelidir?

engine/
→ Product Engine nasıl davranır?

packages/
→ Hangi proje için hangi üretim kapsamı seçilir?

templates/
→ Seçilen belgeler nasıl üretilir?

inputs/
→ Proje bilgileri nasıl alınır ve onaylanır?

runs/
→ Tek bir Product Engine çalışmasında ne oldu?

outputs/
→ Başarılı çalışmanın temiz sonucu nedir?

logs/
→ Product Engine zaman içinde ne öğrendi ve nasıl değişti?

examples/
→ Doğru ve yanlış çalışma biçimleri nasıl görünür?

archive/
→ Aktif kullanımdan kaldırılan içerikler nasıl korunur?
~~~

Planning belgeleri yalnızca yapım sürecini yönetir.

Product Engine aktif olarak çalıştırılırken bütün planning belgelerinin varsayılan olarak okunması gerekmez.

------

## 3. Temel İlke

Product Engine’in ilk sürümü özel bir uygulama veya CLI olmak zorunda değildir.

Yetkin bir ajan:

- Product Engine Brain’i,
- engine sözleşmelerini,
- seçilen package belgelerini,
- ilgili template’leri,
- onaylanmış proje input’unu

okuyarak Product Engine rolünü yerine getirebilmelidir.

Planning belgelerinin amacı, bu çalışma modelini mümkün kılacak klasörleri sağlam ve ajan bağımsız biçimde inşa etmektir.

```text
Yetkin ajan
+
Product Engine belgeleri
+
Onaylanmış proje girdisi
=
Çalışan Product Engine V0
```

------

## 4. Klasör Yapısı

```text
planning/
├── README.md
├── BUILD_STATUS.md
├── ENGINE_FOLDER_SPEC.md
├── PACKAGES_FOLDER_SPEC.md
├── TEMPLATES_FOLDER_SPEC.md
├── INPUTS_FOLDER_SPEC.md
├── RUNS_FOLDER_SPEC.md
├── OUTPUTS_FOLDER_SPEC.md
├── LOGS_FOLDER_SPEC.md
├── EXAMPLES_FOLDER_SPEC.md
└── ARCHIVE_FOLDER_SPEC.md
```

------

## 5. Planning Belgelerinin Görevleri

### `README.md`

Planning sisteminin giriş belgesidir.

Şunları açıklar:

- Planning klasörünün amacı
- Spec belgelerinin kullanım biçimi
- Üretim sırası
- Audit ve onay süreci
- Değişiklik ve kilitleme yaklaşımı

------

### `BUILD_STATUS.md`

Product Engine’in yapım ilerlemesini takip eder.

Her klasör için şu durumları göstermelidir:

- Spec hazırlık durumu
- Klasör üretim durumu
- Audit durumu
- Düzeltme durumu
- Onaylanan sürüm
- Sıradaki çalışma

Bu dosya proje durum belgesi veya run logu değildir.

Yalnızca Product Engine’in kendi inşa sürecini takip eder.

------

### `ENGINE_FOLDER_SPEC.md`

`engine/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Product Engine nasıl davranmalıdır?

------

### `PACKAGES_FOLDER_SPEC.md`

`packages/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Farklı proje ve teslim bağlamları için hangi dokümantasyon kapsamı seçilmelidir?

------

### `TEMPLATES_FOLDER_SPEC.md`

`templates/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Seçilen her doküman hangi yapı ve üretim kurallarıyla oluşturulmalıdır?

------

### `INPUTS_FOLDER_SPEC.md`

`inputs/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Proje bilgileri nasıl toplanmalı, yapılandırılmalı, doğrulanmalı ve onaylanmalıdır?

------

### `RUNS_FOLDER_SPEC.md`

`runs/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Tek bir Product Engine çalışması nasıl başlatılmalı, izlenmeli ve kapatılmalıdır?

------

### `OUTPUTS_FOLDER_SPEC.md`

`outputs/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Başarılı bir Product Engine çalışmasının temiz ve kullanılabilir sonucu nasıl teslim edilmelidir?

------

### `LOGS_FOLDER_SPEC.md`

`logs/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Product Engine’in kalıcı değişiklikleri, sorunları ve geliştirme fikirleri nasıl takip edilmelidir?

------

### `EXAMPLES_FOLDER_SPEC.md`

`examples/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Product Engine’in doğru ve hatalı davranışları kontrollü örneklerle nasıl gösterilmeli ve test edilmelidir?

------

### `ARCHIVE_FOLDER_SPEC.md`

`archive/` klasörünün nasıl hazırlanacağını tanımlar.

Ana sorusu:

> Aktif kullanımdan kaldırılan ancak tarihsel değeri bulunan içerikler nasıl korunmalıdır?

------

## 6. İnşa Sırası

Product Engine klasörleri aşağıdaki sırayla hazırlanmalıdır:

```text
1. engine/
2. packages/
3. templates/
4. inputs/
5. runs/
6. outputs/
7. logs/
8. examples/
9. archive/
10. Kök README ve son entegrasyon
```

Bu sıra bağımlılıklara göre belirlenmiştir.

### Neden `engine/` ilk?

Çünkü bütün sistemin davranışı, otoritesi, üretim akışı ve validation mantığı burada tanımlanır.

### Neden `packages/`, `templates/` öncesinde?

Önce hangi dokümanların hangi proje bağlamlarında gerekli olduğu bilinmelidir. Böylece gereksiz template üretimi engellenir.

### Neden operasyon klasörleri daha sonra?

`inputs/`, `runs/`, `outputs/` ve `logs/`, engine sözleşmelerine ve package sistemine hizmet eder. Çekirdek davranış tanımlanmadan hazırlanırlarsa yanlış varsayımlara dayanabilirler.

------

## 7. Her Klasör İçin Çalışma Döngüsü

Her ana klasör aşağıdaki döngüyle hazırlanmalıdır:

```text
Spec’i oku
→ İlgili üst belgeleri oku
→ Yalnızca hedef klasörü üret
→ Üretim raporu al
→ Ayrı ajanla audit yap
→ Bulguları değerlendir
→ Gerekli düzeltmeleri uygula
→ Tekrar doğrula
→ Klasörü onayla
→ BUILD_STATUS güncelle
→ Sonraki klasöre geç
```

Bir klasör onaylanmadan bağımlı sonraki klasöre geçilmemelidir.

------

## 8. Üretim ve Audit Ayrımı

Üretim ile audit aynı çalışma değildir.

### Üretim Ajanı

- İlgili spec’e göre hedef klasörü doldurur.
- Yalnızca kendisine verilen klasörde çalışır.
- Çalışma sonunda build raporu verir.
- Açık kararları ve yaptığı varsayımları bildirir.

### Audit Ajanı

- Tercihen temiz bir sohbet veya farklı ajan olmalıdır.
- İlk aşamada dosyaları değiştirmez.
- Tekrar, çelişki, boşluk ve uygulanabilirlik sorunlarını raporlar.
- Spec ile üretilen klasörü karşılaştırır.
- Kritik, önemli ve küçük bulguları ayırır.

### Düzeltme Aşaması

Audit bulguları otomatik olarak uygulanmamalıdır.

Önce:

- bulgunun geçerli olup olmadığı,
- spec ile uyumu,
- diğer klasörlere etkisi,
- gerçekten gerekli olup olmadığı

değerlendirilmelidir.

Onaylanan bulgular ayrı bir düzeltme görevinde uygulanmalıdır.

------

## 9. Ajan Çalışma Sınırı

Bir klasörü hazırlayan ajan:

- yalnızca hedef klasörün içeriğini değiştirmelidir,
- planning belgelerini değiştirmemelidir,
- başka klasörlerdeki boş dosyaları doldurmamalıdır,
- kök klasör ağacını sessizce değiştirmemelidir,
- yeni dosya ihtiyacını önce raporlamalıdır,
- başka klasörlerin sorumluluklarını hedef klasöre taşımamalıdır.

Örnek:

```text
Görev:
engine/ klasörünü hazırla.

İzin verilen:
engine/ altındaki mevcut dosyaları doldurmak.

İzin verilmeyen:
packages/, templates/, inputs/ veya planning/ belgelerini değiştirmek.
```

------

## 10. Üretim Ajanı İçin Genel Okuma Düzeni

Bir klasör hazırlanırken ajan en az şu kaynakları okumalıdır:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. Hedef klasöre ait planning spec
4. Daha önce onaylanmış ve hedef klasörün bağımlı olduğu klasörler
5. İlgili ref belgeleri
6. Mevcut kök klasör ağacı

Bütün planning belgelerinin her üretim görevinde okunması zorunlu değildir.

Yalnızca hedef klasörle doğrudan ilişkili belgeler seçilmelidir.

Gereksiz bağlam yükü oluşturulmamalıdır.

------

## 11. Spec Belgelerinin Otoritesi

Planning aşamasında varsayılan otorite sırası:

```text
Kullanıcının güncel ve açık talebi
>
PRODUCT_ENGINE_BRAIN.md
>
İlgili planning spec
>
Daha önce onaylanmış klasör sözleşmeleri
>
İlgili ref belgeleri
>
Örnekler
>
Ajan varsayımları
```

Ref ve example belgeleri hiçbir zaman ilgili planning spec’in önüne geçmemelidir.

Bir spec ile Product Engine Brain arasında gerçek bir çelişki bulunursa ajan sessizce seçim yapmamalı ve durumu raporlamalıdır.

------

## 12. Spec Belgelerinin Değiştirilmesi

Bir planning spec onaylandıktan sonra rastgele güncellenmemelidir.

Değişiklik yalnızca şu durumlarda yapılmalıdır:

- Üretim sırasında uygulanamaz bir kural bulunması
- İki spec arasında gerçek çelişki tespit edilmesi
- Audit sonucunda kritik bir eksiklik bulunması
- Kök klasör mimarisinin değişmesi
- Product Engine’in hedef veya sınırlarının değişmesi
- Sonraki klasörlerin hazırlanmasını engelleyen bağımlılık sorunu oluşması

Küçük ifade tercihleri veya teorik mükemmelleştirme isteği nedeniyle sürekli spec revizyonu yapılmamalıdır.

------

## 13. Spec Kilitleme

Bir planning spec:

- içeriği onaylandığında,
- hedef klasör üretiminde başarıyla kullanıldığında,
- audit sırasında kritik eksiklik göstermediğinde

kilitlenmiş kabul edilebilir.

Kilitlenmiş spec tamamen değiştirilemez değildir.

Ancak sonraki değişiklikler:

- gerekçeli,
- sürümlü,
- etkisi değerlendirilmiş,
- changelog’a bağlı

olmalıdır.

------

## 14. Minimum Yeterlilik İlkesi

Planning belgelerinin amacı mümkün olan en uzun dokümantasyonu üretmek değildir.

Her klasör:

- görevini yerine getirecek,
- diğer klasörlerle sınırlarını koruyacak,
- farklı ajanlar tarafından anlaşılacak,
- uygulanabilecek,
- denetlenebilecek

kadar ayrıntılı olmalıdır.

Gereksiz tekrar, uzunluk ve bürokrasi kalite olarak kabul edilmemelidir.

```text
Ayrıntı
→ Karar vermeyi veya hatayı önlüyorsa değerlidir.

Tekrar
→ Yeni bir sorumluluk veya netlik sağlamıyorsa kaldırılmalıdır.
```

------

## 15. Çapraz Tutarlılık Kontrolü

Bütün planning spec belgeleri tamamlandıktan sonra, klasör üretimine başlamadan önce planning seti çapraz olarak denetlenmelidir.

Kontrol edilmesi gerekenler:

- Aynı terim farklı belgelerde farklı anlamda mı kullanılıyor?
- Bir klasör sorumluluğu iki spec tarafından sahipleniliyor mu?
- Klasör ağaçları birbiriyle uyumlu mu?
- Bir spec var olmayan dosyaya zorunlu referans veriyor mu?
- Package, template ve document catalog ilişkisi tutarlı mı?
- Input, run ve output sınırları korunuyor mu?
- Run template’lerinin konumu kararlaştırılmış mı?
- Demo, prototype ve delivery profile terimleri tutarlı mı?
- Active, approved, completed, deprecated ve invalidated durumları uyumlu mu?
- Planning belgeleri gereksiz tekrar içeriyor mu?
- Üretim sırası gerçek bağımlılıklarla uyumlu mu?

Audit önce yalnızca rapor üretmelidir.

Planning dosyalarını doğrudan değiştirmemelidir.

------

## 16. Planning Audit Sonucu

Planning audit sonucu aşağıdaki biçimde sınıflandırılabilir:

### PASS

Kritik çelişki veya üretimi engelleyen boşluk yoktur.

### CONDITIONAL PASS

Üretimi engellemeyen küçük netleştirmeler bulunmaktadır.

### FAIL

Aşağıdakilerden biri bulunur:

- Çelişkili klasör sorumlulukları
- Eksik temel spec
- Uygulanamaz üretim sırası
- Birbiriyle uyuşmayan klasör ağaçları
- Engine’in çalışmasını engelleyecek karar boşlukları
- Agent bağımsızlığını bozan kurallar

`FAIL` durumunda klasör üretimine başlanmamalıdır.

------

## 17. Build Status Kullanımı

`BUILD_STATUS.md`, Product Engine yapım sürecinin tek üst seviye durum kaynağı olmalıdır.

Her klasör için en az şu bilgiler tutulmalıdır:

```text
Spec Status
Build Status
Audit Status
Fix Status
Approved Version
Last Updated
Next Action
```

Önerilen durumlar:

### Spec Status

```text
Not Started
Draft
Ready
Approved
Needs Revision
```

### Build Status

```text
Not Started
In Progress
Built
Blocked
```

### Audit Status

```text
Not Started
In Review
Pass
Conditional Pass
Fail
```

### Final Status

```text
Pending
Approved
Locked
Deprecated
```

------

## 18. Bir Klasörün Tamamlanması

Bir ana klasör şu koşullarda tamamlanmış kabul edilir:

1. İlgili planning spec hazır ve onaylıdır.
2. Klasördeki gerekli belgeler doldurulmuştur.
3. Üretim ajanı build raporu vermiştir.
4. Ayrı audit tamamlanmıştır.
5. Kritik bulgular çözülmüştür.
6. Belgeler arası tekrar ve çelişki kontrol edilmiştir.
7. Başka klasörlerin sorumlulukları ihlal edilmemiştir.
8. Klasör ajan bağımsızdır.
9. Manuel kullanım veya test mümkündür.
10. `BUILD_STATUS.md` güncellenmiştir.

------

## 19. Başarısızlık İşaretleri

Aşağıdaki durumlardan biri varsa ilgili klasör onaylanmamalıdır:

- Ajan başka konuşma bağlamına ihtiyaç duyuyorsa
- Dosyalar görevlerini birbirinden ayıramıyorsa
- Aynı bağlayıcı kural birden fazla yerde bağımsız biçimde yazılmışsa
- Ref belgelerinden proje içeriği taşınmışsa
- Küçük projeler gereksiz bürokrasiye zorlanıyorsa
- Klasör belirli bir modele bağımlıysa
- Audit kritik boşluk bulmuşsa
- Spec ile üretilen belgeler uyuşmuyorsa
- Başka klasörler izinsiz değiştirilmişse
- Yeni dosyalar gerekçesiz eklenmişse
- Tamamlanmamış yapı onaylanmış gibi gösteriliyorsa

------

## 20. Planning Belgelerinin Aktif Engine’den Ayrımı

Planning spec belgeleri, Product Engine’in yapım süreci tamamlandıktan sonra da geçmiş ve bakım amacıyla korunabilir.

Ancak aktif Product Engine run’ında varsayılan okuma akışına dahil edilmemelidir.

Bir run sırasında:

- engine sözleşmeleri,
- package belgeleri,
- template’ler,
- approved input

kullanılmalıdır.

Planning belgeleri yalnızca:

- engine’i değiştirmek,
- yeni klasör veya dosya eklemek,
- mevcut sistemi yeniden inşa etmek,
- audit veya migration yapmak

gerektiğinde okunmalıdır.

------

## 21. Planning Sisteminin Değişiklik Kaydı

Planning spec’lerinde yapılan kalıcı değişiklikler, Product Engine’in aktif yapısını etkiliyorsa:

```text
logs/ENGINE_CHANGELOG.md
```

içerisinde kaydedilmelidir.

Değişiklik kaydı en az şunları açıklamalıdır:

- Hangi spec değişti?
- Neden değişti?
- Hangi klasörleri etkiliyor?
- Yeniden build veya audit gerekiyor mu?
- Geriye dönük uyumluluk etkileniyor mu?

------

## 22. Nihai Üretim Protokolü

Planning seti tamamlandıktan sonra ana üretim protokolü şu şekilde uygulanmalıdır:

```text
1. Planning setini audit et
2. Gerekli planning düzeltmelerini yap
3. ENGINE_FOLDER_SPEC’e göre engine/ klasörünü üret
4. engine/ klasörünü audit et
5. engine/ klasörünü düzelt ve onayla
6. PACKAGES_FOLDER_SPEC’e göre packages/ klasörünü üret
7. packages/ klasörünü audit et ve onayla
8. TEMPLATES_FOLDER_SPEC’e göre templates/ klasörünü üret
9. Template gruplarını ayrı ayrı audit et
10. INPUTS_FOLDER_SPEC’e göre inputs/ yapısını üret
11. RUNS_FOLDER_SPEC’e göre runs/ yapısını üret
12. OUTPUTS_FOLDER_SPEC’e göre outputs/ yapısını üret
13. LOGS_FOLDER_SPEC’e göre logs/ yapısını üret
14. EXAMPLES_FOLDER_SPEC’e göre minimum test senaryolarını oluştur
15. ARCHIVE_FOLDER_SPEC’e göre archive/ yapısını üret
16. Kök README ve Product Engine kullanım protokolünü tamamla
17. Sıfır bağlamlı bir ajanla manuel Product Engine testi yap
18. Test sonuçlarına göre gerekli kontrollü düzeltmeleri uygula
```

------

## 23. Manuel Test Gereksinimi

Bütün klasörler tamamlandığında Product Engine en az bir sentetik proje üzerinde test edilmelidir.

Test akışı:

```text
Serbest proje anlatımı
→ Pending input
→ Approved input
→ Package seçimi
→ Template seçimi
→ Generation run
→ Validation
→ Clean output
```

Test sırasında şu sorulara cevap aranmalıdır:

- Ajan başka konuşma bağlamına ihtiyaç duyuyor mu?
- Gerekli soruları doğru yerde soruyor mu?
- Kritik olmayan alanlarda kontrollü varsayım yapabiliyor mu?
- Doğru package ve delivery profile seçiliyor mu?
- Gereksiz belge üretiliyor mu?
- Bilgiler doğru dokümanlara dağıtılıyor mu?
- Başka proje içeriği sızıyor mu?
- Nihai output doğrudan başka bir ajana verilebilir mi?
- Run ve output izlenebilir mi?

Test başarısızsa yalnızca semptom düzeltilmemelidir.

Sorunun sahibi olan spec, engine sözleşmesi, package veya template bulunmalıdır.

------

## 24. Nihai Hedef

Planning sistemi tamamlandığında Product Engine’in bütün ana klasörleri rastgele veya modele bağlı tercihlerle değil, önceden tanımlanmış ve denetlenebilir yapım sözleşmeleriyle inşa edilebilmelidir.

Planning sisteminin çalışma modeli:

```text
Product Engine Brain
+
Planning Specifications
+
Klasör Bazlı Üretim
+
Bağımsız Audit
+
Kontrollü Düzeltme
+
Onay ve Kilitleme
=
Sağlam Product Engine Temeli
```

Planning sisteminin başarısı belge sayısıyla veya uzunluğuyla ölçülmez.

Başarı ölçütü:

- klasör sorumluluklarının net olması,
- farklı ajanların aynı sistemi benzer biçimde kurabilmesi,
- hataların erken yakalanması,
- gereksiz tekrar ve bürokrasinin önlenmesi,
- Product Engine’in ileride güvenli biçimde geliştirilebilmesidir.

```
Bu README, Product Engine Brain’deki ajan bağımsız çalışma ve yapılandırılmış girdiden doğrudan kullanılabilir dokümantasyon üretme hedefini, inşa sürecinin yönetim protokolüne dönüştürüyor. 
```
