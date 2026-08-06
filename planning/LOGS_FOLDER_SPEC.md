# LOGS_FOLDER_SPEC

~~~md
# LOGS_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `logs/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- sistem logu kavramını,
- `logs/` klasörünün Product Engine içerisindeki görevini,
- engine değişikliklerinin nasıl kaydedileceğini,
- run özetlerinin nasıl indeksleneceğini,
- sistemsel sorunların nasıl takip edileceğini,
- geliştirme fikirlerinin nasıl yönetileceğini,
- run kayıtları ile kalıcı engine hafızasının nasıl ayrılacağını,
- log dosyalarının güncel, sade ve kullanılabilir tutulma kurallarını,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge gerçek bir engine changelog’u, issue kaydı veya run index değildir.

`planning/LOGS_FOLDER_SPEC.md`, `logs/` klasöründeki gerçek belgeleri hazırlayan ajan için bağlayıcı bir inşa rehberidir.

Gerçek sistem kayıtları `logs/` klasörü içerisinde tutulacaktır.

---

# 2. Kaynak ve Üst Bağlam

`logs/` klasörü hazırlanırken aşağıdaki belgeler dikkate alınmalıdır:

1. `PRODUCT_ENGINE_BRAIN.md`
2. İlgili planning spec belgeleri
3. `engine/RUN_PROTOCOL.md`
4. `engine/VALIDATION_RULES.md`
5. `engine/CONFLICT_RESOLUTION.md`
6. Tamamlanmış `runs/` yapısı
7. Tamamlanmış `outputs/` yapısı
8. Mevcut kök klasör ağacı

Product Engine’in yalnızca doküman üretmesi değil, belgeler arasındaki tutarlılığı koruması ve proje ilerledikçe dokümantasyonun güncel kalmasını sağlaması hedeflenmektedir. :contentReference[oaicite:0]{index=0}

`logs/` klasörü bu sistemin zaman içerisinde nasıl değiştiğini ve hangi kalıcı sorunlardan ders çıkardığını kaydeden hafıza katmanıdır.

---

# 3. Sistem Logu Kavramı

Bir sistem logu, tek bir run’ın ayrıntılı çalışma kaydı değildir.

Sistem logu:

- Product Engine’in kendisinde yapılan kalıcı değişiklikleri,
- farklı run’larda görülen ortak sorunları,
- engine genelinde takip edilmesi gereken açık maddeleri,
- tamamlanan ve başarısız run’ların üst seviye indeksini,
- gelecekte uygulanabilecek iyileştirme fikirlerini

taşıyan kalıcı kayıt katmanıdır.

```text
Run kaydı
→ Belirli bir çalışmada ne oldu?

System log
→ Bu çalışmalardan Product Engine hakkında ne öğrendik?
~~~

------

# 4. `logs/` Klasörünün Görevi

`logs/` klasörü şu soruların sahibidir:

- Product Engine’de hangi kalıcı değişiklikler yapıldı?
- Değişiklik neden yapıldı?
- Değişiklik hangi klasörleri veya sözleşmeleri etkiledi?
- Hangi Product Engine run’ları gerçekleştirildi?
- Bu run’ların genel sonuçları neydi?
- Hangi sistemsel sorunlar tekrar ediyor?
- Hangi sorunlar çözüldü?
- Hangi geliştirme fikirleri henüz uygulanmadı?
- Hangi iyileştirmeler önceliklendirilmeli?
- Engine’in hangi sürümünde hangi davranış değişti?

`logs/` klasörü Product Engine’in kalıcı değişiklik ve öğrenme hafızasıdır.

------

# 5. Kapsam Dışı

`logs/` klasörü aşağıdaki içeriklerin ana sahibi değildir:

- Tek bir run’ın kronolojik ayrıntılı kaydı
- Input snapshot
- Package selection raporu
- Working output
- Nihai proje dokümanları
- Projeye özel ürün veya teknik kararlar
- Template içerikleri
- Ref belgeleri
- Ajanın özel düşünce zinciri
- Her küçük metin değişikliği
- Günlük kişisel çalışma notları
- Aynı sorunun farklı ifadelerle tekrar tekrar yazılması

Bu sorumluluklar ilgili klasörlerde kalmalıdır.

```text
runs/
→ Tek çalışmanın operasyonel geçmişi

logs/
→ Bütün çalışmaların engine seviyesindeki kalıcı özeti
```

------

# 6. Klasör Yapısı

Başlangıç yapısı:

```text
logs/
├── README.md
├── ENGINE_CHANGELOG.md
├── RUN_INDEX.md
├── ISSUES.md
└── IMPROVEMENTS.md
```

Yeni bir log dosyası yalnızca mevcut dosyalardan hiçbirinin taşıyamadığı bağımsız ve kalıcı bir sorumluluk bulunduğunda eklenmelidir.

Örneğin ileride gerekirse:

```text
RELEASE_NOTES.md
KNOWN_LIMITATIONS.md
METRICS.md
```

önerilebilir.

Ancak V0 aşamasında gereksiz log dosyaları oluşturulmamalıdır.

------

# 7. `README.md`

## Sahip Olduğu Soru

`logs/` klasörü nasıl kullanılır?

## İçermelidir

- `logs/` klasörünün amacı
- Her log dosyasının kısa görevi
- Run kayıtlarıyla sistem loglarının farkı
- Log ekleme ve güncelleme kuralları
- Issue ve improvement ayrımı
- Changelog kayıt standardı
- Run Index güncelleme koşulları
- Çözülmüş kayıtların nasıl ele alınacağı
- İlgili diğer klasörlere yönlendirmeler

## İçermemelidir

- Bütün log kayıtlarının tekrarı
- Engine’in genel çalışma sözleşmeleri
- Gerçek proje veya müşteri bilgileri
- Uzun run özetleri

------

# 8. `ENGINE_CHANGELOG.md`

## Sahip Olduğu Soru

Product Engine’in kendisinde hangi kalıcı değişiklikler yapıldı?

Bu belge Product Engine’in:

- engine sözleşmelerinde,
- package sisteminde,
- template sisteminde,
- input, run ve output yapısında,
- klasör ağacında,
- naming veya versioning kurallarında,
- validation davranışında

yapılan kalıcı değişiklikleri kaydeder.

------

# 9. Changelog’a Kaydedilecek Değişiklikler

Aşağıdaki değişiklikler changelog’a eklenmelidir:

- Yeni engine sözleşmesi eklenmesi
- Mevcut sözleşmenin sorumluluğunun değişmesi
- Yeni package eklenmesi
- Package seçim davranışının değişmesi
- Yeni template veya template sürümü
- Placeholder standardının değişmesi
- Output klasör yapısının değişmesi
- Run yaşam döngüsü değişikliği
- Validation seviyelerinin değişmesi
- Dosya veya klasör adının değiştirilmesi
- Deprecated belge veya template
- Otorite veya okuma sırasının değişmesi
- Geriye dönük uyumluluğu etkileyen kararlar

Aşağıdakiler normalde changelog’a eklenmemelidir:

- Basit yazım düzeltmeleri
- Önemsiz biçim değişiklikleri
- Tek bir projeye ait kararlar
- Run’a özel geçici varsayımlar
- Her küçük açıklama netleştirmesi

Küçük değişiklik engine davranışını etkiliyorsa changelog’a eklenebilir.

------

# 10. Changelog Kayıt Yapısı

Her kayıt en az aşağıdaki bilgileri taşımalıdır:

```text
change_id
date
version
change_type
affected_area
summary
reason
impact
breaking_change
related_issue
related_run
```

Örnek:

```md
## PE-CHANGE-001 — 2026-08-06

**Version:** 0.2  
**Type:** Changed  
**Affected area:** templates/  
**Breaking change:** No  

### Değişiklik

Template placeholder isimlendirmesi büyük harfli ve alt çizgili standart yapıya geçirildi.

### Gerekçe

Aynı bilgi için farklı template’lerde farklı placeholder isimleri kullanılması tutarsızlık oluşturuyordu.

### Etki

Aktif template’ler yeni standarda göre güncellenecek. Eski completed run’lar değiştirilmeden korunacak.

### İlgili kayıtlar

- Issue: ISSUE-004
- Run: product-engine-validation_2026-08-06_001
```

------

# 11. Değişiklik Türleri

Changelog kayıtları mümkün olduğunca aşağıdaki sınıflardan biriyle işaretlenmelidir:

```text
Added
Changed
Fixed
Deprecated
Removed
Security
Documentation
```

Bu sınıflandırma zorunlu olarak İngilizce tutulabilir ancak açıklamalar Türkçe olmalıdır.

Aynı değişiklik birden fazla türe uyuyorsa baskın tür seçilmelidir.

------

# 12. Engine Sürümü

Product Engine’in genel sürümü bulunmalıdır.

Önerilen sürüm biçimi:

```text
0.1
0.2
0.3
1.0
```

## Minor Değişiklik

- Yeni bağımsız özellik
- Yeni package
- Yeni koşullu template
- Geriye dönük uyumlu süreç değişikliği

## Major Değişiklik

- Ana sözleşme yapısının değişmesi
- Package ve template uyumluluğunun kırılması
- Klasör mimarisinin temel biçimde değişmesi
- Eski run veya output davranışının geçersiz hâle gelmesi

Bütün küçük metin düzenlemelerinde engine sürümü artırılmamalıdır.

------

# 13. `RUN_INDEX.md`

## Sahip Olduğu Soru

Hangi Product Engine run’ları gerçekleştirildi ve genel sonuçları neydi?

`RUN_INDEX.md`, bütün run’ların üst seviye kayıt tablosudur.

Bu belge run dosyalarının yerine geçmez.

Yalnızca hızlı erişim, izleme ve karşılaştırma sağlar.

------

# 14. Run Index Kayıt Yapısı

Önerilen tablo:

```md
| Run ID | Proje | Run Türü | Package | Profile | Durum | Tarih | Output | Not |
|---|---|---|---|---|---|---|---|---|
```

Örnek:

```md
| io-makina_2026-08-06_001 | IO Makina | Generation | Corporate Website | Prototype | Completed | 2026-08-06 | outputs/demos/io-makina/v0.1 | İlk başarılı üretim |
```

Her kayıt mümkünse ilgili run klasörüne ve output’a yönlendirmelidir.

------

# 15. Run Index’e Ekleme Koşulları

Bir run aşağıdaki aşamalardan birinde index’e eklenebilir:

## Run Başladığında

Durum:

```text
Active
```

olarak eklenebilir.

## Run Tamamlandığında

Kayıt:

- nihai durum,
- validation sonucu,
- output yolu,
- kısa not

ile güncellenmelidir.

## Run Başarısız Olduğunda

Başarısızlık kısa ve gerçek bir ifadeyle belirtilmelidir.

## Run Invalidated Olduğunda

Kayıt silinmemeli, durumu güncellenmelidir.

Run Index, yalnızca başarılı çalışmaların listesi olmamalıdır.

Başarısız ve geçersiz çalışmalar da engine gelişimi için görünür kalmalıdır.

------

# 16. Run Index Yoğunluğu

Run Index içerisine aşağıdakiler yazılmamalıdır:

- Uzun validation bulguları
- Bütün assumptions
- Bütün conflicts
- Ayrıntılı kronolojik log
- Doküman listelerinin tamamı

Bu bilgiler ilgili run klasöründe bulunmalıdır.

Run Index yalnızca hızlı görünüm sağlamalıdır.

------

# 17. `ISSUES.md`

## Sahip Olduğu Soru

Product Engine’de çözülmesi gereken hangi somut sorunlar bulunuyor?

Issue:

- gözlemlenmiş,
- tekrar üretilebilir veya doğrulanabilir,
- sistem kalitesini etkileyen,
- çözüm gerektiren

bir problemi temsil eder.

Örnek:

- Template’ler farklı placeholder isimleri kullanıyor.
- Package birleşiminde aynı belge iki kez seçiliyor.
- Output’ta generation rule yorumları kalıyor.
- Run kapanışında template sürümleri kaydedilmiyor.
- Küçük projeler gereksiz doküman üretimine zorlanıyor.

------

# 18. Issue Olmayan Durumlar

Aşağıdakiler tek başına issue değildir:

- Genel fikir
- Henüz denenmemiş geliştirme önerisi
- Kişisel tercih
- Belirsiz “daha iyi olabilir” yorumu
- Tek bir projeye özel içerik problemi
- Kanıtı olmayan ihtimal
- Gelecekte düşünülebilecek özellik

Bunlar gerekiyorsa `IMPROVEMENTS.md` içerisinde tutulmalıdır.

------

# 19. Issue Kayıt Yapısı

Her issue en az aşağıdaki bilgileri taşımalıdır:

```text
issue_id
title
status
severity
category
first_seen
last_seen
related_runs
description
impact
reproduction_or_evidence
proposed_resolution
owner
resolved_in_version
```

Örnek:

```md
## ISSUE-003 — Template talimatları output’a sızıyor

**Status:** Open  
**Severity:** Major  
**Category:** Templates / Output  
**First seen:** 2026-08-06  
**Related run:** io-makina_2026-08-06_001  

### Problem

Bazı template dosyalarındaki `GENERATION_RULE` açıklamaları nihai output içerisinde kalıyor.

### Etki

Output doğrudan kullanılabilirliğini kaybediyor ve manuel temizlik gerektiriyor.

### Kanıt

Validation report içerisinde üç belgede generation comment bulundu.

### Önerilen çözüm

Output transfer aşamasına template instruction cleanup kontrolü eklenmeli.
```

------

# 20. Issue Durumları

Issue en az şu durumları desteklemelidir:

```text
Open
Investigating
Planned
In Progress
Blocked
Resolved
Won’t Fix
Duplicate
Invalid
```

Resolved issue silinmemelidir.

Şunlar belirtilmelidir:

- nasıl çözüldüğü,
- hangi engine sürümünde çözüldüğü,
- hangi değişiklik kaydına bağlı olduğu,
- gerekiyorsa hangi run ile doğrulandığı.

------

# 21. Issue Önem Seviyeleri

## Critical

Engine’in güvenilir output üretmesini engeller.

Örnek:

- Başka projeden içerik sızıntısı
- Yanlış package seçimi
- Approved input kullanılmadan üretim yapılması
- Kritik belgelerin eksik çıkması

## Major

Kaliteyi veya kullanılabilirliği ciddi biçimde etkiler.

## Minor

Kullanımı engellemeyen ancak düzeltilmesi gereken sorun.

## Low

Küçük iyileştirme gerektiren gözlem.

Issue severity ile improvement priority aynı kavram değildir.

------

# 22. Duplicate Issue Davranışı

Aynı sorun birden fazla run’da görülürse yeni issue açılmamalıdır.

Mevcut issue:

- yeni run referansıyla,
- tekrar sayısıyla,
- yeni kanıtla,
- son görülme tarihiyle

güncellenmelidir.

Benzer görünen fakat farklı kök nedene sahip sorunlar ayrı issue olarak tutulabilir.

------

# 23. Issue Kapatma Koşulları

Bir issue yalnızca çözüm metni yazıldığı için resolved yapılmamalıdır.

Resolved olmak için mümkünse:

1. Düzeltme uygulanmış olmalıdır.
2. İlgili belgeler güncellenmiş olmalıdır.
3. Engine changelog kaydı oluşturulmalıdır.
4. Yeni veya repair run ile doğrulama yapılmalıdır.
5. Sorunun tekrar etmediği gösterilmelidir.

Doğrulama yapılamadıysa durum:

```text
Implemented — Awaiting Validation
```

gibi ara bir durumla tutulabilir.

------

# 24. `IMPROVEMENTS.md`

## Sahip Olduğu Soru

Product Engine’i gelecekte geliştirebilecek hangi fikirler henüz uygulanmadı?

Improvement:

- mevcut sistemi daha hızlı,
- daha sade,
- daha güvenilir,
- daha otomatik,
- daha ölçeklenebilir

hâle getirebilecek geliştirme fikridir.

Improvement, mevcut bir hatanın kaydı olmak zorunda değildir.

------

# 25. Improvement Örnekleri

- Package seçim kararını yarı otomatik hâle getirmek
- Input’tan otomatik soru listesi çıkarmak
- Template placeholder sözlüğünü merkezi dosyada toplamak
- Bir CLI ile run klasörünü otomatik oluşturmak
- Validation raporunu otomatik üretmek
- Output manifest üretimini otomatikleştirmek
- Existing Project audit modülü eklemek
- Belge farklarını gösteren update sistemi geliştirmek

------

# 26. Improvement Kayıt Yapısı

Her kayıt en az şu bilgileri taşımalıdır:

```text
improvement_id
title
status
priority
category
description
expected_value
cost_or_complexity
dependencies
risks
suggested_next_step
related_issues
```

Örnek:

```md
## IMP-005 — Otomatik placeholder validation

**Status:** Backlog  
**Priority:** Medium  
**Category:** Validation  

### Fikir

Output içerisindeki çözülmemiş `{{PLACEHOLDER}}` değerlerini otomatik tarayan küçük bir kontrol katmanı eklemek.

### Beklenen değer

Manuel validation yükünü azaltır ve eksik placeholder sızıntısını engeller.

### Karmaşıklık

Düşük.

### Bağımlılık

Placeholder standardının bütün template’lerde sabitlenmesi.
```

------

# 27. Improvement Durumları

Improvement en az şu durumları desteklemelidir:

```text
Idea
Backlog
Evaluating
Planned
In Progress
Implemented
Rejected
Deferred
```

Implemented improvement:

- ilgili changelog kaydına,
- engine sürümüne,
- gerekiyorsa doğrulama run’ına

bağlanmalıdır.

------

# 28. Improvement Önceliği

Önerilen öncelik seviyeleri:

```text
Critical
High
Medium
Low
Someday
```

Öncelik yalnızca fikrin ne kadar ilginç olduğuna göre verilmemelidir.

Şunlar dikkate alınmalıdır:

- Tekrarlanan sorunları çözüyor mu?
- Seri proje üretimini hızlandırıyor mu?
- Output kalitesini artırıyor mu?
- Manuel iş yükünü azaltıyor mu?
- Engine’in temel sözleşmelerini etkiliyor mu?
- Uygulama maliyeti nedir?
- Başka işlere bağımlı mı?

------

# 29. Issue ile Improvement Ayrımı

```text
Issue
→ Şu anda yanlış veya problemli olan nedir?

Improvement
→ Sistemi gelecekte daha iyi hâle getirecek ne yapılabilir?
```

Bir issue’nun çözümü improvement içerebilir.

Örnek:

```text
Issue:
Placeholder’lar output’ta kalıyor.

Improvement:
Otomatik placeholder tarama sistemi eklemek.
```

Bu durumda iki kayıt birbirine referans vermelidir.

Aynı içeriğin iki dosyada tam metin olarak tekrar edilmesi gerekmez.

------

# 30. Run’dan Log’a Bilgi Aktarımı

Her run sonrasında bütün run içeriği `logs/` klasörüne taşınmamalıdır.

Yalnızca engine seviyesinde kalıcı değeri olan bilgiler aktarılmalıdır.

## Run Index’e Aktarılır

- Run kimliği
- Proje
- Run türü
- Package
- Delivery profile
- Son durum
- Output yolu
- Kısa sonuç

## Issues’a Aktarılır

- Tekrarlanabilir sistem hataları
- Engine sözleşmesi boşlukları
- Package veya template çelişkileri
- Output kalite sorunları
- Run protokolü problemleri

## Improvements’a Aktarılır

- Süreci hızlandıracak fikirler
- Otomasyon fırsatları
- Yeni package veya template önerileri
- Kullanışlı ama zorunlu olmayan geliştirmeler

## Changelog’a Aktarılır

Yalnızca gerçek ve uygulanmış kalıcı değişiklikler.

------

# 31. Log Güncelleme Zamanları

`logs/` klasörü şu olaylarda güncellenmelidir:

- Run başladığında veya kapandığında
- Yeni engine issue tespit edildiğinde
- Mevcut issue tekrar görüldüğünde
- Issue çözüldüğünde
- Yeni improvement fikri onaylandığında
- Improvement uygulandığında
- Engine sözleşmesi değiştiğinde
- Package veya template sürümü değiştiğinde
- Klasör yapısı değiştiğinde
- Output veya validation davranışı değiştiğinde

Her küçük çalışma adımında log güncellenmemelidir.

------

# 32. Gürültü Önleme İlkesi

Log sistemi bir not çöplüğüne dönüşmemelidir.

Her yeni kayıt açılmadan önce şu sorular sorulmalıdır:

- Bu bilgi Product Engine genelinde kalıcı değere sahip mi?
- Aynı kayıt zaten var mı?
- Bu bilgi yalnızca tek run’a mı ait?
- Sorun doğrulanmış mı?
- Improvement gerçekten ayrı bir fikir mi?
- Bu değişiklik engine davranışını etkiliyor mu?

Kalıcı değeri olmayan bilgi ilgili run içerisinde kalmalıdır.

------

# 33. Kayıt Kimlikleri

Önerilen kimlik sistemleri:

```text
PE-CHANGE-001
ISSUE-001
IMP-001
```

Kimlikler:

- benzersiz,
- değişmez,
- artan sıra numaralı

olmalıdır.

Başlık değişse bile kimlik değiştirilmemelidir.

Silinen veya reddedilen kayıtların kimliği yeniden kullanılmamalıdır.

------

# 34. Tarih Standardı

Log belgelerinde varsayılan tarih biçimi:

```text
YYYY-MM-DD
```

Saat gerektiğinde:

```text
YYYY-MM-DDTHH:mm:ssZ
```

veya repository’nin belirlediği timezone içeren standart kullanılabilir.

Aynı dosyada farklı tarih biçimleri kullanılmamalıdır.

------

# 35. Link ve Referans İlkesi

Log kayıtları gerektiğinde aşağıdakilere referans verebilmelidir:

- Run ID
- Output ID
- Input ID
- Package ID
- Template ID
- Engine version
- Issue ID
- Improvement ID
- Change ID

Uzun içerikler log dosyasına kopyalanmamalıdır.

Ana kaynağa yönlendirme yapılmalıdır.

------

# 36. Çözülmüş Kayıtların Saklanması

Resolved, rejected veya deprecated kayıtlar doğrudan silinmemelidir.

Çünkü bunlar:

- geçmiş kararları,
- tekrar eden sorunları,
- neden belirli bir yaklaşımın terk edildiğini,
- engine’in nasıl geliştiğini

gösterir.

Ancak aktif dosyaların okunabilirliğini bozacak kadar büyürlerse archive politikasına göre taşınabilirler.

Aktif dosyada kısa bir indeks veya yönlendirme korunmalıdır.

------

# 37. Arşivleme Eşiği

Aşağıdaki durumlarda eski kayıtlar archive’a taşınabilir:

- Dosya okunamayacak kadar büyüdüyse
- Eski engine major sürümüne aitse
- Uzun süredir closed durumdaysa
- Aktif sistemle doğrudan ilgisi kalmadıysa
- Yeni bir özet kayıtla temsil edilebiliyorsa

Arşivleme sırasında:

- kayıt kimlikleri korunmalı,
- aktif referanslar kırılmamalı,
- archive konumu belirtilmeli,
- geçmiş silinmemelidir.

Ayrıntılı arşiv davranışı `ARCHIVE_FOLDER_SPEC.md` içerisinde tanımlanmalıdır.

------

# 38. Güvenlik ve Gizlilik

Log dosyaları aşağıdaki bilgileri içermemelidir:

- API secret değerleri
- Şifreler
- Private key’ler
- Production token’ları
- Gereksiz müşteri kişisel verileri
- Gizli proje içeriğinin uzun kopyaları
- Ajanın özel chain-of-thought metni

Gerekli olduğunda yalnızca kaynak kimliği veya dosya yolu kullanılmalıdır.

------

# 39. Chain-of-Thought Saklamama İlkesi

Log kayıtları:

- gözlemlenen problemi,
- alınan kararı,
- gerekçeyi,
- sonucu,
- uygulanan düzeltmeyi

taşımalıdır.

Ajanın uzun özel düşünce akışı veya gizli muhakemesi kaydedilmemelidir.

```text
Kaydedilir:
“Package birleşiminde duplicate document oluştu.”

Kaydedilmez:
Ajanın bu sonuca ulaşırken yaptığı uzun içsel düşünce akışı.
```

------

# 40. Log Kalite İlkeleri

## Kalıcılık

Yalnızca Product Engine genelinde değerli bilgiler kaydedilmelidir.

## Tek Sorumluluk

Her log dosyası kendi bilgi türünün sahibi olmalıdır.

## İzlenebilirlik

Değişiklik, issue ve improvement ilgili run veya sürüme bağlanabilmelidir.

## Tekrarsızlık

Aynı kayıt farklı ifadelerle çoğaltılmamalıdır.

## Güncellik

Durumu değişen kayıtlar güncellenmelidir.

## Gerçeklik

Planlanan iş uygulanmış gibi gösterilmemelidir.

## Okunabilirlik

Loglar hızlı taranabilir biçimde tutulmalıdır.

## Minimum Yeterlilik

Her küçük olay için kayıt açılmamalıdır.

------

# 41. Log Hazırlama Ajanının Görevi

`logs/` sistemini hazırlayan ajan:

1. Product Engine Brain’i okumalıdır.
2. İlgili planning spec belgelerini okumalıdır.
3. Tamamlanmış run ve output yapısını incelemelidir.
4. Run kayıtları ile sistem loglarını ayırmalıdır.
5. Her log dosyasının tekil sorumluluğunu korumalıdır.
6. Ortak kayıt formatlarını tanımlamalıdır.
7. Issue ve improvement ayrımını netleştirmelidir.
8. Changelog kayıt koşullarını ölçülebilir hâle getirmelidir.
9. Run Index’i sade tutmalıdır.
10. Duplicate kayıt davranışını tanımlamalıdır.
11. Başka klasörleri değiştirmemelidir.
12. Yeni dosya ihtiyacını raporlamalıdır.

Ajan yalnızca `logs/` klasöründe çalışmalıdır.

------

# 42. Üretim Sonu Raporu

Log sistemini hazırlayan ajan çalışma sonunda şunları raporlamalıdır:

## Doldurulan Dosyalar

## Her Dosyanın Sorumluluğu

## Run–Log Ayrımı

## Changelog Standardı

## Issue Yaşam Döngüsü

## Improvement Yaşam Döngüsü

## Run Index Yapısı

## Duplicate Kayıt Davranışı

## Arşivleme İhtiyaçları

## Yapılan Varsayımlar

## Açık Kararlar

## Önerilen Yeni Dosyalar

Bu rapor log dosyalarının içerisine rastgele eklenmemelidir.

------

# 43. Audit Gereksinimi

`logs/` sistemi hazırlandıktan sonra ayrı bir ajan tarafından şu konular denetlenmelidir:

- Run loglarının sistem loglarına kopyalanması
- Changelog’un gereksiz ayrıntıyla şişmesi
- Issue ve improvement ayrımının belirsizliği
- Duplicate kayıtlar
- Çözülmüş kayıtların silinmesi
- Kayıt kimliği tutarsızlığı
- Engine sürüm ilişkisinin eksikliği
- Run Index’in fazla ayrıntılı olması
- Issue’ların kanıtsız veya soyut olması
- Improvement backlog’unun sınırsız fikir listesine dönüşmesi
- Secret veya kişisel veri riski
- Chain-of-thought saklanması
- Arşiv bağlantılarının kopması
- Logların aktif engine durumunu yanlış göstermesi

Audit ilk aşamada dosyaları değiştirmemeli, yalnızca bulguları raporlamalıdır.

------

# 44. Tamamlanma Kriterleri

`logs/` klasörü aşağıdaki koşullarda tamamlanmış kabul edilir:

1. Sistem logu kavramı açıkça tanımlanmıştır.
2. Run kayıtları ile sistem kayıtları ayrılmıştır.
3. `ENGINE_CHANGELOG.md` sorumluluğu nettir.
4. `RUN_INDEX.md` yalnızca üst seviye özet taşır.
5. `ISSUES.md` doğrulanmış sorunları takip eder.
6. `IMPROVEMENTS.md` gelecekteki geliştirmeleri takip eder.
7. Issue ve improvement ayrımı nettir.
8. Kayıt kimliği standardı belirlenmiştir.
9. Değişiklik türleri tanımlanmıştır.
10. Issue durum ve severity seviyeleri tanımlanmıştır.
11. Improvement durum ve priority seviyeleri tanımlanmıştır.
12. Duplicate kayıt davranışı tanımlıdır.
13. Çözülmüş kayıtlar izlenebilir biçimde korunmaktadır.
14. Run’lardan loglara yalnızca kalıcı bilgi aktarılmaktadır.
15. Engine sürümleri changelog ile ilişkilendirilmektedir.
16. Secret ve kişisel veri kuralları tanımlıdır.
17. Chain-of-thought saklanmamaktadır.
18. Loglar gereksiz günlük hâline gelmemektedir.
19. Audit sonucunda kritik sorun bulunmamaktadır.
20. Manuel run sonrasında ilgili log belgeleri doğru biçimde güncellenebilmektedir.

------

# 45. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `logs/` klasörü tamamlanmış kabul edilmemelidir:

- Her run’ın bütün ayrıntıları loglara kopyalanıyorsa
- Changelog her küçük yazım değişikliğinde güncelleniyorsa
- Issue ve improvement aynı amaçla kullanılıyorsa
- Aynı sorun birden fazla kez açılabiliyorsa
- Issue’ların kanıtı veya etkisi belirtilmiyorsa
- Resolved kayıtlar siliniyorsa
- Değişikliklerin hangi engine sürümünde yapıldığı bilinmiyorsa
- Run Index run loguna dönüşüyorsa
- Improvement dosyası kontrolsüz fikir çöplüğüne dönüşüyorsa
- Uygulanmamış değişiklik changelog’da yapılmış gibi gösteriliyorsa
- Secret veya gereksiz kişisel veri tutuluyorsa
- Ajanın özel düşünce zinciri kaydediliyorsa
- Arşivlenen kayıtların referansları kayboluyorsa
- Log dosyaları engine’in gerçek durumunu yansıtmıyorsa

------

# 46. Değişiklik İlkesi

Bu spec onaylandıktan sonra `logs/` klasörü hazırlanmalıdır.

Yeni log belgesi ihtiyacı ortaya çıkarsa ajan:

1. İhtiyacı raporlamalıdır.
2. Mevcut belgelerden birinin bu sorumluluğu taşıyıp taşıyamayacağını değerlendirmelidir.
3. Yeni belgenin kalıcı ve bağımsız sorumluluğunu açıklamalıdır.
4. Gereksiz log parçalanmasına yol açmamalıdır.
5. Onay almadan kök klasör ağacını değiştirmemelidir.

------

# 47. Nihai Hedef

`logs/` klasörü tamamlandığında Product Engine:

- kendi kalıcı değişiklik geçmişini tutabilmeli,
- bütün run’ları üst seviyede indeksleyebilmeli,
- sistemsel sorunları tekilleştirerek takip edebilmeli,
- çözülmüş sorunların geçmişini koruyabilmeli,
- gelecekte uygulanabilecek iyileştirmeleri düzenli biçimde yönetebilmeli,
- run’lardan çıkan kalıcı dersleri engine hafızasına dönüştürebilmelidir.

Çalışma modeli:

```text
Completed veya Failed Runs
+
Validation Bulguları
+
Engine Değişiklikleri
+
Tekrarlanan Sorunlar
+
Geliştirme Fikirleri
=
Product Engine Kalıcı Hafızası
```

Log sisteminin başarısı çok fazla kayıt tutmasıyla değil; Product Engine’in neden değiştiğini, hangi sorunların tekrar ettiğini ve sıradaki anlamlı iyileştirmelerin ne olduğunu sade ve güvenilir biçimde gösterebilmesiyle ölçülmelidir.
