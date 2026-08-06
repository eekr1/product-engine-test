# Create Room Design Package

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Create Room Design Package** görseli, Vibehall’ın oda oluşturma ekranının onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Oda oluşturma deneyiminin sadeliğini, YouTube bağlantısının ana başlangıç noktası olmasını, form alanlarının görsel hiyerarşisini, public/private seçiminin açıklığını, validation yaklaşımını ve başarılı oluşturma sonrasında Room’a doğal geçişi bağlayıcı biçimde temsil eder.

Ancak görselde bulunan tüm form alanları, optional ifadeleri, loading adımları, video metadata bilgileri ve başarı ekranları mevcut ürün kabiliyeti olarak yorumlanamaz. Uygulama öncesinde gerçek `CreateRoomPage`, frontend API kontratı, backend room creation route’u ve Prisma modeli incelenmelidir.

Vibehall’da oda, oluşturulduğu anda `live` durumuna geçer; taslak oda sistemi yoktur. Her odanın tek ve değişmeyen bir host’u bulunur.

---

## 1. Ekranın Ana Amacı

Create Room ekranının tek temel amacı şudur:

> Kullanıcının bir YouTube bağlantısını mümkün olan en az zihinsel yükle canlı bir Vibehall odasına dönüştürmesi.

Kullanıcı bu ekranda:

- Nereden başlayacağını düşünmemeli
- YouTube bağlantısını ana giriş noktası olarak hemen görmeli
- Odanın temel bilgilerini kolayca tamamlamalı
- Public/private farkını açık biçimde anlamalı
- Hataları alanın yanında görebilmeli
- Oda oluşturulurken sistemin çalıştığını hissedebilmeli
- Başarıdan sonra ekstra navigasyon aramadan yeni Room’a geçebilmelidir

Create Room, karmaşık bir içerik yayınlama paneli veya çok adımlı wizard gibi hissettirmemelidir.

Ana ilke:

> Linki yapıştır, gerekli birkaç kararı ver, odayı aç ve içeri gir.

---

## 2. Görsel Odağı

Kullanıcının gözünün takip etmesi gereken sıra:

1. `Create a room` başlığı
2. YouTube link alanı
3. Gerekli oda bilgileri
4. Public/private seçimi
5. `Create Room` ana CTA’sı
6. Yardımcı açıklamalar ve platform kuralları
7. Geçerli link varsa video önizlemesi

Ana görsel odak YouTube link alanıdır.

Dekoratif görsel, video preview veya yardımcı açıklama formun önüne geçemez.

Görseldeki sol atmosferik panel:

- Ürünün ruhunu taşır
- Formu destekler
- Formdan daha güçlü bir odak oluşturamaz
- Küçük ekranlarda kaldırılabilir veya ciddi biçimde sadeleştirilebilir

---

## 3. Kilitli Kompozisyon

### 3.1 Desktop ana yapı

Desktop görünüm kontrollü iki parçalı bir kompozisyon kullanabilir:

- Sol tarafta kısa ürün bağlamı ve atmosfer
- Sağ tarafta ana Create Room formu

Sol alan:

- `Create a room` başlığı
- Kısa açıklama
- Sakin, oda/portal hissi taşıyan görsel
- Gereksiz özellik listesi olmadan atmosfer

Sağ alan:

- YouTube URL
- Mevcut gerçek oda alanları
- Visibility seçimi
- Private oda için gereken ek alanlar
- Ana CTA
- Gerekli legal/community bağlantısı

Form kartı ekranın asıl çalışma alanıdır.

#### Alternatif teknik uygulama

Mevcut ekran veya responsive yapı için daha sağlıklıysa form tek kolonlu merkezi bir kompozisyona dönüşebilir.

Ancak şu hiyerarşi değişemez:

> YouTube link → oda bilgileri → erişim seçimi → Create Room

---

### 3.2 Mobil ana yapı

Mobil görünüm masaüstünün daraltılmış iki kolonlu hâli değildir.

Doğal sıra:

1. Minimal geri/header alanı
2. `Create a room`
3. Çok kısa açıklama
4. YouTube link alanı
5. Gerekli oda alanları
6. Public/private seçimi
7. Private ise ilgili güvenlik alanı
8. Create Room CTA
9. Kısa legal/community metni

Mobilde büyük dekoratif görsel zorunlu değildir.

Kullanıcı formu görmek için gereksiz scroll yapmak zorunda kalmamalıdır.

---

## 4. Gerçek Form Kontratının Korunması

Görsel, formun görsel sadeliğini temsil eder; gerçek veri kontratını yeniden tanımlamaz.

Mevcut teknik bağlamda `Room` modeli en azından title, category, source video, visibility ve state gibi alanlar taşır. Oda oluşturma akışı mevcut room route’ları üzerinden yürür.

Codex implementation öncesinde şunları çıkarmalıdır:

- Mevcut frontend form alanları
- Backend’in zorunlu alanları
- Min/max karakter sınırları
- Visibility enum değerleri
- Private room password kuralları
- Category gereksinimi
- Capacity seçeneği varsa mevcut sınırlar
- YouTube URL validation kontratı
- Backend error response yapısı

Görselde gösterilmemiş olması nedeniyle mevcut bir zorunlu alan kaldırılamaz.

Görselde bulunması nedeniyle yeni bir alan da otomatik olarak eklenemez.

---

## 5. YouTube Link Alanı

YouTube link alanı ekranın ana başlangıç noktasıdır.

### Görsel davranış

- Diğer alanlardan daha erken ve belirgin görünür
- Açık label taşır
- YouTube ikonu destekleyici olarak kullanılabilir
- Focus sırasında nar çiçeği focus halkası gösterir
- Paste davranışı doğal çalışır
- Geçerli link sonrası sakin doğrulama işareti kullanılabilir

### Validation

Sistem yalnız mevcut backend’in desteklediği YouTube URL biçimlerini kabul eder.

URL:

- Parse edilir
- Normalize edilir
- Video ID güvenli biçimde çıkarılır
- Desteklenmeyen provider reddedilir
- Ham kullanıcı URL’si authoritative veri olarak saklanmaz

Vibehall şu anda yalnız YouTube media source’unu destekler.

### Hata örnekleri

> Enter a valid YouTube link.

> This YouTube link is not supported.

> We couldn’t read this video. Check the link and try again.

Ham parser veya backend hata mesajı kullanıcıya gösterilmez.

---

## 6. Video Preview ve Metadata

Geçerli link doğrulandıktan sonra video önizlemesi gösterilebilir.

Preview şunları içerebilir:

- Thumbnail
- Normalize edilmiş video başlığı
- Provider bilgisi
- Geçerlilik durumu
- Mevcut backend gerçekten sağlıyorsa ek güvenli metadata

Preview:

- Formun altında veya link alanının yakınında görünür
- Büyük bir medya yönetim paneline dönüşmez
- Form alanlarını ekrandan itmez
- Link değiştiğinde güvenilir biçimde resetlenir
- Loading sırasında önceki yanlış preview’ı göstermez

Görseldeki kanal adı, izlenme sayısı veya benzeri platform verileri temsilîdir. Mevcut metadata servisi sağlamıyorsa yeni YouTube scraping veya ekstra API entegrasyonu eklenmez.

---

## 7. Oda Adı ve Metin Alanları

Oda adı alanının zorunlu veya optional oluşu mevcut backend kontratına göre korunur.

Görselde `Room name (optional)` yazması bağlayıcı ürün kararı değildir.

Codex:

- Mevcut zorunluluk durumunu değiştiremez
- Mevcut min/max sınırları korur
- Sayaç gösteriyorsa gerçek limite bağlar
- Limit değerini hard-code etmek yerine ortak contract’tan almayı tercih eder

Uzunluk sayacı örneği:

> 17 / 60

yalnız gerçek limit 60 ise kullanılır.

Alan hataları input altında lokal olarak gösterilir.

---

## 8. Category ve Diğer Mevcut Alanlar

Görsel sadelik amacıyla bazı mevcut form alanlarını göstermiyor olabilir.

Mevcut Create Room formunda category, capacity veya başka onaylı alanlar bulunuyorsa:

- Kaldırılmaz
- İkincil fakat anlaşılır biçimde yerleştirilir
- Formu dashboard’a çevirmeden tasarım sistemine uyarlanır

Category:

- Mevcut aktif kategoriler API’den alınır
- Hard-coded kategori listesi kullanılmaz
- Loading ve error durumu lokal ele alınır
- Category zorunluysa açıkça belirtilir

Alan sayısı arttığında wizard oluşturmak yerine mantıklı gruplama kullanılmalıdır.

---

## 9. Public ve Private Seçimi

Visibility seçimi görseldeki gibi açık ve karşılaştırılabilir olmalıdır.

### Public

Kısa açıklama:

> Anyone can discover and join this room.

Gerçek ürün davranışına göre metin gerekirse düzeltilir. Kullanıcının yine hesapla odaya girdiği unutulmamalıdır.

### Private

Kısa açıklama:

> Only people with the link and required access can join.

Private oda:

- Discover’da görünmez
- Direct link gerektirir
- Giriş yapmış kullanıcı gerektirir
- Normal akışta doğru şifre gerektirir
- Geçerli friend invite grant varsa mevcut password bypass kontratı uygulanabilir
- Ban, capacity ve room-ended kontrollerini bypass edemez

### Görsel davranış

- İki seçenek aynı grup içinde gösterilir
- Seçili durum açıkça görünür
- Yalnız renkle anlatılmaz
- İkon ve metinle desteklenir
- Radio semantics veya eşdeğer erişilebilir kontrol kullanılır
- Klavyeyle değiştirilebilir

Private seçildiğinde gerekli password alanı sakin biçimde açılır.

Layout büyük ölçüde zıplamamalıdır.

---

## 10. Private Room Password Alanı

Private room password mevcut kontratta gerekiyorsa görünür hâle gelir.

Alan:

- Görünür label taşır
- Show/hide davranışı destekleyebilir
- Minimum ve maksimum kuralları backend ile uyumlu olur
- Yardımcı metin erişim mantığını açıklar
- Password URL’ye, log’a veya analytics’e yazılmaz

Public seçildiğinde password:

- Form submission’dan temizlenir
- Görsel olarak kaldırılır
- Eski değer yanlışlıkla gönderilmez

Görselde password alanının bulunmaması, private room güvenlik davranışını kaldırmaz.

---

## 11. Ana CTA

Ana CTA metni:

> Create Room

CTA:

- Dolgulu nar çiçeği kullanır
- Formun ana genişliğini kullanabilir
- Diğer tüm form aksiyonlarından daha güçlüdür
- Form geçersizse erişilebilir disabled davranışı gösterir
- Geçerli formda Enter/submit ile çalışabilir
- Double-submit engeller
- İşlem sırasında lokal loading gösterir

CTA üzerindeki dekoratif yıldız ikonları zorunlu değildir.

İkon kullanılacaksa sade ve Phosphor ailesinden olmalıdır.

---

## 12. Oda Oluşturma Loading Davranışı

Görselde oda oluşturma için ayrı bir progress yüzeyi gösterilmiştir.

Bu yaklaşım yalnız gerçek işlem süresi bunu gerektiriyorsa kullanılmalıdır.

### Kısa işlem

Oluşturma hızlı tamamlanıyorsa:

- CTA loading olur
- Form yerinde kalır
- Küçük durum metni gösterilebilir
- Oda hazır olunca doğrudan Room’a geçilir

### Uzun işlem

Gerçekten birkaç teknik aşama varsa sakin bir progress yüzeyi kullanılabilir.

Örnek adımlar yalnız gerçek sistem davranışıyla uyumluysa gösterilir:

- Validating video
- Creating room
- Connecting to room

Görseldeki:

- Checking video
- Preparing room
- Connecting

ifadeleri temsilîdir.

Gerçekte takip edilmeyen sahte aşamalar gösterilemez.

### Değişmez loading ilkeleri

- Tam sayfa spinner yok
- Layout zıplamaz
- Form verisi kaybolmaz
- Aynı oda iki kez oluşturulmaz
- İşlem hata verirse form geri gelir
- Kullanıcının düzeltilebilir alanları korunur

---

## 13. Başarı ve Room’a Geçiş

Oda oluşturma başarılı olduğunda ana hedef Room’a geçmektir.

Temel akış:

> Submit → Room backend’de commit edilir → Oluşturulan room kimliği/slug alınır → Kullanıcı host olarak Room’a yönlendirilir

Oda oluşturulduğu anda `live` state’e geçer; draft veya publish adımı eklenmez.

### Başarı ekranı

Görselde ayrı:

> Room is ready!

ekranı bulunmaktadır.

Bu ekran zorunlu değildir.

Yalnız şu durumlarda kısa biçimde kullanılabilir:

- Room’a bağlanmak için gerçek hazırlık sürüyorsa
- Kullanıcıya paylaşılabilir link vermek faydalıysa
- Geçiş süresi boş ekran hissi yaratıyorsa

Başarı ekranı gösterilirse:

- Çok kısa sürmeli
- Asıl CTA `Enter Room` olmalı
- Kullanıcı gereksiz karar vermek zorunda kalmamalı
- Otomatik geçiş veya açık tek CTA bulunmalı

En hızlı ve doğal davranış mümkünse doğrudan Room’a geçmektir.

---

## 14. Oda Linki ve Paylaşım

Görselde başarı ekranında room link ve Copy butonu bulunuyor.

Bu, mevcut oda oluşturma response’u ve ürün akışı destekliyorsa kullanılabilir.

Link:

- Gerçek room slug’dan üretilir
- Frontend base URL ile güvenli biçimde oluşturulur
- Private/public davranışını değiştirmez
- Private password’ü içermez
- Invite grant token’ını genel copy link içine istemeden koymaz

Copy feedback lokal toast ile gösterilebilir:

> Room link copied.

Paylaşım özellikleri yeni sosyal entegrasyonlara genişletilmez.

---

## 15. Validation Sistemi

Validation hem frontend hem backend ile uyumlu olmalıdır.

Frontend hızlı kullanıcı geri bildirimi sağlar.

Backend authoritative doğrulamayı korur.

### Alan hataları

Örnekler:

- Invalid YouTube link
- Required field
- Title too short
- Title too long
- Category required
- Visibility required
- Private password invalid

Alan hataları:

- İlgili input altında
- Sakin fakat net
- Screen reader ile ilişkili
- Yalnız kırmızı sınırdan ibaret olmayan
- Kullanıcıya neyi düzelteceğini söyleyen

bir yapıda gösterilir.

### Form seviyesi hata

Backend oda oluşturmayı reddederse:

> We couldn’t create the room. Check the details and try again.

Conflict veya politika hataları gerçek sebebe göre kullanıcı dostu metne dönüştürülür.

---

## 16. Hata ve Retry Davranışı

### Video validation başarısızlığı

Link alanının yanında gösterilir.

Preview temizlenir.

Diğer form bilgileri korunur.

### Category yüklenemedi

Yalnız category alanı hata gösterir.

Tüm ekran kullanılamaz hâle getirilmez.

Retry sunulur.

### Room creation başarısızlığı

- Form ekranda kalır
- Girilen değerler korunur
- CTA tekrar kullanılabilir hâle gelir
- Double-created room kontrol edilir
- Backend sonucu belirsizse körlemesine tekrar oluşturmadan önce durum doğrulanır

### Session expired

Kullanıcı auth’a yönlendirilirse Create Room return intent korunmalıdır.

Auth sonrası kullanıcı mümkünse form bağlamına veya Create Room’a döner. Hassas password alanının nasıl korunacağı güvenlik açısından ayrıca değerlendirilmelidir.

---

## 17. Formun Görsel Karakteri

Create Room ekranı:

- Temiz
- Sakin
- Tek odaklı
- Ferah
- Kısa
- Atmosferik
- Kullanıcıyı acele ettirmeyen

olmalıdır.

Form:

- Büyük bir dashboard paneli gibi görünmez
- Her alanı ayrı kart içine koymaz
- Gereksiz açıklama kutuları taşımaz
- Her adımı progress navigation’a dönüştürmez
- Çok sayıda border ve divider kullanmaz

Sol atmosfer alanı varsa formun ruhunu destekler.

Vibehall’ın özü linki bir odaya dönüştürmektir; Create Room bu davranışın en temiz ifadesi olmalıdır. Project Brain’de oda, yalnız teknik yapı değil, geçici bir dijital yer olarak tanımlanır.

---

## 18. Atmosfer ve Işık

Create Room genel tasarım sistemini kullanır:

- Ana zemin: `#090A0F`
- Normal yüzey: `#10121A`
- Odak yüzeyi: `#171A24`
- Accent: `#FF625A`
- Ana metin: `#F5F7FA`
- İkincil metin: `#A8AFBF`

Geçerli video preview oluştuğunda thumbnail’den kontrollü aura üretilebilir.

Aura:

- Form okunabilirliğini bozamaz
- Sayfayı neon gösterisine çeviremez
- Yalnızca video içeriğinin atmosferini hissettirir
- Preview kaldırıldığında nötr hâle döner

Görseldeki mor accent, onaylanmış kesin paletteki nar çiçeği accent ile değiştirilmelidir.

Görselin renkleri kompozisyon referansıdır; kesin renk tokenı değildir.

---

## 19. Tipografi ve Boşluk Yorumu

### Tipografi

- Ekran başlığı: Manrope `600–700`
- Alan label’ları: Inter `500`
- Input metni: Inter `400–500`
- Yardımcı metin: Inter `400`
- CTA: Inter `600`
- Hata metni: Inter `400–500`

### Boşluk

- Label–input: `8px`
- Form alanları: `16–20px`
- Bölüm grupları: `24px`
- Form panel iç boşluğu: desktop `28–32px`
- Mobil iç boşluk: `16–20px`
- CTA üstü: `24px`
- CTA altı legal metin: `12–16px`

Form genişliği, okunabilirliği azaltacak kadar büyütülmez.

---

## 20. Header ve Global Shell

Create Room normal uygulama shell’ini kullanır.

Desktop:

- Global header veya onaylanmış app shell
- Home
- Discover
- Create Room aktif durumu
- Gerekli kullanıcı kontrolleri

Mobil:

- Minimal header
- Geri veya menü
- `Create a room` bağlamı

Room ekranına geçildiğinde global shell kaybolur ve Room’un minimal bağlam yapısı devreye girer.

Create Room’dan Room’a geçiş, normal sayfa değişiminden hafifçe daha derin hissedebilir.

---

## 21. Responsive Davranış

Mobilde:

- Tek kolon
- Form alanları tam genişlik
- CTA minimum `48px`
- Visibility seçenekleri ekran uygunsa yan yana, değilse alt alta
- Keyboard açıldığında aktif input ve hata görünür
- CTA’ya erişim korunur
- Safe area dikkate alınır
- Yatay scroll oluşmaz
- Preview formu aşırı uzatmaz

Mobil görseldeki büyük dekoratif simge zorunlu değildir.

Desktop ana yaratıcı referanstır; ancak mobil ekran da sorunsuz ve atmosferik olmalıdır.

---

## 22. Erişilebilirlik

Aşağıdakiler zorunludur:

- Tüm input’ların görünür label’ı vardır
- Error metinleri input’larla programatik ilişki kurar
- Visibility seçimi gerçek radio semantics veya erişilebilir eşdeğer kullanır
- Focus sırası doğaldır
- Focus halkası görünürdür
- Error summary gerekiyorsa ilk hataya bağlantı sağlar
- CTA loading durumu screen reader’a bildirilir
- Preview thumbnail uygun alt text kullanır
- Character counter screen reader’ı her tuşta gereksiz rahatsız etmez
- Dokunma alanları minimum yaklaşık `44×44px`
- Kontrast WCAG AA hedefini karşılar
- Reduced motion desteklenir

---

## 23. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Oda adı ve optional ifadesi
- 60 karakter limiti
- Thumbnail
- Video başlığı
- Kanal adı
- İzlenme sayısı
- Public/private açıklama metinleri
- Loading adımları
- Success screen
- Copy link
- Kullanıcı isimleri
- Participant count
- Room chat görünümü
- Dekoratif portal/gezegen illüstrasyonu
- Mobil cihaz çerçevesi
- Mor CTA rengi

Gerçek kod, ürün kuralları ve kesin tasarım tokenları kullanılmalıdır.

---

## 24. Görselde Bulunmayan Fakat Korunması Gereken Mevcut Alanlar

Görsel sadelik uğruna gerçek formun bazı parçalarını göstermeyebilir.

Codex mevcut kodda varsa şunları korumalıdır:

- Category
- Capacity
- Private password
- Room title zorunluluğu
- Mevcut validation sınırları
- Gerekli community/policy acknowledgement
- Mevcut server-side safety kontrolleri

Bu alanlar görsel sisteme uygun biçimde yerleştirilir; sessizce kaldırılmaz.

---

## 25. Otomatik Uygulanmayacak Görsel Unsurlar

### Room name optional

Gerçek contract zorunluysa optional hâle getirilmez.

### Video metadata

Yeni YouTube metadata servisi veya scraping sistemi sırf görsel için eklenmez.

### İzlenme sayısı

Mevcut veri kaynağı yoksa gösterilmez.

### Ayrı success page

Oda hızlı oluşturuluyorsa doğrudan Room’a geçilir.

### Loading stepper

Gerçek teknik aşamalar izlenemiyorsa sahte stepper yapılmaz.

### Copy link

Mevcut response güvenli room URL üretebiliyorsa uygulanabilir; aksi hâlde kapsam genişletilmez.

### Dekoratif gezegen ve portal

Birebir asset olarak uygulanmak zorunda değildir. Görsel atmosfer farklı, daha hafif yöntemle sağlanabilir.

---

## 26. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Oda oluşturmayı çok adımlı wizard’a çevirmek
- Draft room sistemi eklemek
- Schedule room eklemek
- Recurring room eklemek
- Yeni media provider eklemek
- YouTube dışı URL kabul etmek
- Yeni metadata/scraping altyapısı eklemek
- Room title veya category kontratını değiştirmek
- Capacity davranışını değiştirmek
- Public/private dışında yeni visibility eklemek
- Private password davranışını kaldırmak
- Invite grant mantığını değiştirmek
- Host authority modelini değiştirmek
- Oda oluşturulduktan sonra host el değiştirme eklemek
- Form alanlarını görselde yok diye kaldırmak
- Görselde var diye yeni alan eklemek
- Hard-coded kategori kullanmak
- Sahte preview veya sahte sayaç göstermek
- Oda oluşturulduktan sonra kullanıcıyı Home’a yönlendirmek
- Tailwind, React Router veya yeni form framework’ü eklemek

Tek host otoritesi ve odanın oluşturulur oluşturulmaz live olması mevcut kesin ürün kararlarıdır.

---

## 27. Teknik Uyarlama Alanları

Codex sınırlı olarak şu alanlarda uyarlama yapabilir:

- Mevcut CreateRoomPage component yapısı
- Gerçek backend request payload’ı
- Alanların gerçek sırası
- Category ve capacity alanlarının yerleşimi
- Private password’un conditional görünümü
- Video preview için mevcut media parser/presenter kullanımı
- Form state ve validation mimarisi
- Error enumlarının kullanıcı dostu metne çevrilmesi
- Custom router ile Room’a yönlendirme
- Responsive breakpoint
- Reusable form component’leri
- Accessibility gerektiren ölçü ve kontrast düzeltmeleri

Bu uyarlamalar tek odaklı deneyimi, ana hiyerarşiyi veya ekranın sadeliğini değiştiremez.

---

## 28. Mevcut Teknik Yapıyla Uyum

Implementation şu gerçekleri korumalıdır:

- Frontend React 19 + Vite + TypeScript kullanır
- Custom router korunur
- React Router eklenmez
- Tailwind eklenmez
- Vanilla CSS design system geliştirilir
- HTTP işlemleri mevcut API client üzerinden yürür
- Mutation isteklerinde CSRF davranışı korunur
- Backend Room authority olmaya devam eder
- YouTube parsing backend/media contract ile uyumlu kalır
- Room oluşturma route’u mevcut rooms API altında kalır
- Oda başarılı oluşturulunca gerçek returned slug/id kullanılır

Create Room mevcut frontend sayfalarından biridir ve room API/backend route yapısı hâlihazırda mevcuttur.

---

## 29. Güvenlik ve Ürün Sınırları

- URL server-side tekrar doğrulanır
- Private password log’lanmaz
- Kullanıcı yalnız kendi session’ı adına room oluşturabilir
- Host identity request body’den körlemesine alınmaz
- Category aktifliği backend’de doğrulanır
- Capacity backend’de enforce edilir
- Input safety ve uzunluk sınırları uygulanır
- CSRF korunur
- Rate limit varsa korunur veya launch readiness kapsamında doğrulanır
- Block/ban/access politikaları Room girişinde authoritative kalır
- Room creation yalnız frontend validation’a güvenmez

---

## 30. Wave Kapsamı Önerisi

Bu görsel aşağıdaki capability bütününe dönüştürülebilir:

### Create Room Visual Foundation

- Sayfa kompozisyonu
- Form bileşenleri
- Visibility cards
- Mevcut category/capacity/password alanlarının tasarımı
- Desktop görünüm

### Media Validation and Preview Polish

- YouTube URL state’leri
- Validation
- Mevcut metadata preview
- Loading/error davranışı

### Creation and Transition Experience

- Submit state
- Double-submit koruması
- Başarı davranışı
- Room’a doğal geçiş
- Failure recovery

### Responsive and Accessibility Pass

- Mobil form
- Keyboard davranışı
- Focus/error announcements
- Touch targets
- Responsive QA

Codex bunları kod yapısına göre wave veya capability pair olarak bölebilir. Ancak form validation, create request ve Room’a yönlendirme birlikte uçtan uca test edilmelidir.

---

## 31. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Create Room ekranı görsel referansla yan yana karşılaştırılmıştır
- YouTube link alanı ilk ve en güçlü form odağıdır
- Form tek odaklı ve sade kalmıştır
- Mevcut gerçek alanların hiçbiri kaybolmamıştır
- Görseldeki temsilî alanlar yeni ürün özelliği olarak eklenmemiştir
- Public/private farkı açık biçimde anlaşılır
- Private password davranışı korunur
- Category ve diğer mevcut zorunlu alanlar çalışır
- Geçerli ve geçersiz YouTube URL senaryoları test edilmiştir
- Character limit ve validation gerçek backend ile uyumludur
- CTA double-submit üretmez
- Oda yalnız bir kez oluşturulur
- Oda oluşturulunca live state’e geçer
- Kullanıcı host olarak oluşturulan Room’a yönlendirilir
- Hata sonrasında form değerleri uygun biçimde korunur
- Loading tüm ekranı blink ettirmez
- Sahte loading adımları yoktur
- Preview yalnız gerçek veriyi gösterir
- Desktop ve mobil düzen test edilmiştir
- Keyboard ve focus davranışı tamamlanmıştır
- Screen reader validation davranışı test edilmiştir
- WCAG AA kontrast hedefi korunmuştur
- Typecheck ve build geçmiştir
- İlgili frontend/backend testleri geçmiştir
- Staging üzerinde manuel create-room → room testi tamamlanmıştır
- Kullanıcı staging ekranını onaylamıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 32. Son Tasarım Hükmü

Create Room ekranı bir yayın yönetim paneli değildir.

Bir bağlantıyı canlı bir yere dönüştüren kısa bir geçiştir.

Doğru deneyim:

- Kullanıcı linki yapıştırır
- Gerekli birkaç oda kararını verir
- Sistemin onu yormadığını hisseder
- Create Room’a basar
- Oda açılır
- Kullanıcı doğrudan kendi açtığı atmosfere girer

Bu tasarım paketinin başarı ölçütü yalnızca güzel bir form yapmak değildir.

Başarı ölçütü:

> Kullanıcının bir YouTube bağlantısını düşünmeden, güvenle ve birkaç doğal adım içinde canlı bir Vibehall odasına dönüştürebilmesidir.