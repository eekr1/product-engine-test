# Global Shell ve Navigasyon Board

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Global Shell ve Navigasyon Board** görseli, Vibehall’ın ortak navigasyon sistemi, desktop ve mobil uygulama kabuğu, Social Rail davranışı ve kullanıcı/profil menüsü için onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Aşağıdaki kararları bağlayıcı biçimde temsil eder:

- Home ile normal uygulama ekranlarının farklı header yoğunluğu
- Desktop global navigasyonun temel yapısı
- Mobilde minimal üst header kullanılması
- Mobilde alt navigasyon bulunmaması
- Social Rail’in kapalı ve açık davranışı
- Tablet ve dar ekranlarda social yüzeyinin drawer’a dönüşmesi
- Kullanıcı/profil menüsünün ikincil ve kontrollü yapısı
- Room ekranında global shell’in tamamen kaybolması

Ancak görselde bulunan bütün menü öğeleri, sayaçlar, bildirim ikonları, logo biçimi ve mobil akışlar mevcut ürün özelliği olarak yorumlanamaz. Uygulama mevcut route’ları, auth durumunu, social capability sınırlarını ve gerçek backend verilerini kullanmalıdır.

Ana ilke:

> Global shell kullanıcıyı yönlendirir; ürün deneyiminin önüne geçmez.

---

## 1. Shell Sisteminin Ana Amacı

Global shell’in temel görevi şudur:

> Kullanıcının Vibehall içinde nerede olduğunu anlamasını, temel alanlara hızlıca ulaşmasını ve ihtiyaç duyduğunda sosyal veya hesap yüzeylerini açmasını sağlamak.

Shell:

- Ürünün ana alanlarını anlaşılır biçimde bağlamalı
- Home ve Discover arasında doğal geçiş sağlamalı
- Create Room’u kolay ulaşılır tutmalı
- Social, Messages, Profile ve Settings gibi ikincil alanları erişilebilir kılmalı
- Mobilde alanı boğmamalı
- Room ekranına girildiğinde tamamen geri çekilmelidir

Global shell kendi başına bir özellik değildir.

Ana görevi:

- Yön göstermek
- Bağlamı korumak
- Kullanıcının kaybolmasını önlemek
- Ana deneyime alan açmak

olmalıdır.

---

## 2. Shell Aileleri

Global shell dört ana varyanttan oluşur:

1. Home desktop header
2. Normal application desktop header
3. Mobile minimal header ve menu
4. Social Rail / Social drawer

Bunlara ek olarak:

- Kullanıcı/profil menüsü
- Bildirim veya yardımcı ikon alanı
- Room’da shell’in kaldırılması

aynı sistem içinde değerlendirilir.

Her sayfa kendi yeni navigasyon biçimini üretemez.

---

## 3. Home Desktop Header

Home header normal uygulama header’ından daha ferah ve davetkâr davranır.

### 3.1 Ana amaç

Home’a giren kullanıcıya:

- Vibehall markasını
- Ana ürün alanlarını
- Giriş yapmışsa hesap durumunu
- Discover ve Create Room erişimini

sakin biçimde göstermektir.

Home header, bir dashboard üst barı gibi sıkışık görünmemelidir.

### 3.2 İçerik sırası

Önerilen yapı:

#### Sol

- Geçici wordmark veya gelecekteki logo alanı
- Markanın sade kimliği

#### Orta

- Home
- Discover
- Create Room

#### Sağ

- Gerekliyse lokal veya global arama
- Bildirim
- Kullanıcı avatarı
- Profil menüsü tetikleyicisi

Ancak mevcut ürün yapısında global arama gerekmiyorsa header search eklenmez.

Özellikle genel user/people search çağrışımı yapan arama kullanılmaz.

### 3.3 Yükseklik

Home header başlangıç hedefi:

- Yaklaşık `72px`

Bu değer görsel QA ile birkaç piksel uyarlanabilir.

Home header:

- Daha geniş dikey nefes
- Daha yumuşak yüzey
- Daha sakin hizalama

taşımalıdır.

### 3.4 Aktif durum

Home aktifken:

- Nar çiçeği accent
- Küçük underline
- Hafif yüzey veya metin vurgusu

kullanılabilir.

Aktif sekme yalnız renkle anlatılmaz.

---

## 4. Normal Application Desktop Header

Normal uygulama header’ı Home’dan daha kontrollü ve işlevsel davranır.

Kullanım alanları:

- Discover
- Create Room
- Social
- Messages
- Profile
- Settings
- Utility olmayan diğer uygulama ekranları

### 4.1 Yükseklik

Başlangıç hedefi:

- Yaklaşık `64px`

### 4.2 Karakter

Normal header:

- Daha kompakt
- Daha işlevsel
- Daha az dekoratif
- Sayfa içeriğine daha fazla alan bırakan

bir yapıdadır.

### 4.3 Ana navigasyon

Ana erişimde kalacak temel yollar:

- Home
- Discover
- Create Room

Social, Messages, Profile ve Settings global navigasyonun ana merkezinde sürekli bağırmak zorunda değildir.

Bunlar:

- Social Rail
- Profil menüsü
- Uygun yardımcı menü

üzerinden erişilebilir.

### 4.4 Aktif route

Aktif route:

- Nar çiçeği vurgu
- İnce underline
- Metin ağırlığı
- Yüzey desteği

ile gösterilebilir.

Aşırı parlak glow kullanılmaz.

---

## 5. Logo ve Wordmark Alanı

Görselde yıldız sembolü ve `Vibehall` wordmark bulunur.

Bu alan kesin logo tasarımı değildir.

Logo tasarımı ayrı çalışmada tamamlanacaktır.

Bu wave kapsamında:

- Sade wordmark alanı korunur
- Gelecekte logo + wordmark kombinasyonuna uygun alan ayrılır
- Geçici sembol ürünün kalıcı logosu gibi kodlanmaz
- Header ölçüleri gelecekteki logoyu kabul edecek esneklikte olur
- Room ekranında logo gösterilmez

Logo bileşeni merkezi ve kolay değiştirilebilir olmalıdır.

---

## 6. Desktop Social Rail

Social Rail, desktop’ta kullanılabilen yardımcı sosyal navigasyon yüzeyidir.

Ana ürün navigasyonunun yerine geçmez.

Ana ilke:

> Social Rail odalardan doğan bağlara erişim sağlar; Vibehall’ı sosyal medya uygulamasına dönüştürmez.

### 6.1 Kapalı durum

Kapalı durumda:

- Yalnız ikonlar görünür
- Rail dar genişlikte kalır
- İçerik alanını gereksiz daraltmaz
- Aktif bölüm anlaşılır
- İkon hover veya focus sırasında label gösterilebilir

Kapalı genişlik, mevcut layout’a göre belirlenir.

Yaklaşık hedef:

- `56–72px`

### 6.2 Açık durum

Açıldığında:

- İkonlar
- Metin label’ları
- Gerekli sayaçlar
- Aktif bölüm
- Alt ayarlar veya kapatma kontrolü

görünür.

Yaklaşık açık genişlik:

- `220–260px`

Kesin değer ekran ve mevcut component yapısına göre ayarlanabilir.

### 6.3 Rail içinde bulunabilecek gerçek alanlar

- Friends
- Messages
- Invites
- People You Watched With
- Blocked Accounts
- Settings

Görselde bulunan her menü otomatik olarak uygulanmaz.

Mevcut route ve social capability listesi authoritative kaynaktır.

### 6.4 Sayaçlar

Sayaçlar yalnız gerçek veriden gelir.

Örnek:

- Bekleyen friend request
- Okunmamış message
- Bekleyen invite

Hard-coded veya tahminî sayı kullanılmaz.

Sayaç:

- Küçük
- Sessiz
- Kolay taranabilir

olmalıdır.

### 6.5 Social Rail yasakları

Social Rail:

- Feed içeremez
- Global kullanıcı dizini açamaz
- Follower sayısı gösteremez
- Like veya skor gösteremez
- Trending people oluşturamaz
- Oda grid’inin yerine geçemez
- Ana içerikten daha güçlü görünemez

---

## 7. Social Rail Açma ve Kapama Davranışı

Rail açma/kapatma hareketi:

- Sakin
- `200–260ms`
- İçeriği ani biçimde zıplatmayan
- Focus’u kaybetmeyen

bir davranış taşımalıdır.

Açılırken:

- Metinler yumuşakça görünür
- Ana içerik kontrollü biçimde yeniden ölçülür
- Horizontal overflow oluşmaz

Kapanırken:

- Aktif route ikonu korunur
- Tooltip erişimi devam eder

Kullanıcının rail tercihi local UI preference olarak korunabilir; ancak yeni kalıcı preference backend’i yalnız bunun için eklenmez.

---

## 8. Tablet Social Drawer

Tablet ve dar ekranlarda kalıcı Social Rail kullanılmaz.

Bunun yerine drawer kullanılır.

### 8.1 Drawer davranışı

- Sağdan veya soldan açılabilir
- Görselde sağdan açılmıştır
- Ana ekran hafif karartılır
- Focus drawer içine alınır
- Escape veya close ile kapanır
- Kapanınca focus tetikleyiciye döner
- Arka plan scroll’u kontrol edilir

### 8.2 İçerik

Drawer içinde:

- Friends
- Messages
- Invites
- People You Watched With
- Blocked
- Settings

gibi mevcut social yollar gösterilebilir.

Drawer ayrı bir sosyal uygulama gibi görünmemelidir.

### 8.3 Tablet davranışı

Tablet:

- Masaüstü rail ile mobil full-screen social arasında ara çözüm kullanır
- İçerik alanını kalıcı daraltmaz
- Touch target’ları minimum `44×44px` tutar

---

## 9. Mobil Minimal Header

Mobilde alt navigasyon kullanılmaz.

Ana yaklaşım:

> Minimal üst header + açılır tam ekran veya geniş menü.

### 9.1 Header içeriği

Mobil minimal header:

#### Sol

- Hamburger veya geri

#### Orta

- Sade logo/wordmark işareti veya sayfa başlığı

#### Sağ

- Gerekirse search
- Gerekirse notification
- Çok sınırlı birincil aksiyon

Her mobil ekranda aynı ikonların tamamı görünmek zorunda değildir.

### 9.2 Yükseklik

Yaklaşık hedef:

- `56–64px`

Safe area dikkate alınır.

### 9.3 Mobil header ilkeleri

- Sıkışık görünmez
- Üçten fazla ana ikonu aynı anda göstermez
- Sayfa başlığını kesmez
- Touch target’ları yeterlidir
- Sticky kullanılacaksa içerik zıplamaz
- Blur ve glass abartılmaz

---

## 10. Mobil Menü Açık Durumu

Mobil menu açıldığında tam ekran veya geniş overlay surface kullanılır.

### 10.1 İçerik sırası

Önerilen sıra:

1. Close
2. Minimal marka alanı
3. Kullanıcı kimliği
4. Home
5. Discover
6. Create Room
7. Friends
8. Messages
9. Invites
10. People You Watched With
11. Blocked
12. Settings
13. Log out

Gerçek route bulunmayan öğeler eklenmez.

### 10.2 Görsel karakter

Mobil menu:

- Büyük kurumsal drawer gibi görünmez
- Sade ve rahat taranır
- Aktif route’u gösterir
- Sayaçları küçük tutar
- Log out’u diğer ana route’lardan ayırır
- Gereksiz açıklama metni taşımaz

### 10.3 Davranış

- Açıldığında focus menu içine alınır
- Arka sayfa scroll olmaz
- Route seçilince menu kapanır
- Logout ayrı güvenli işlem olarak çalışır
- Gesture ile kapanma varsa erişilebilir close butonu yine bulunur

---

## 11. Kullanıcı ve Profil Menüsü

Avatar veya kullanıcı alanına tıklanınca açılan menü ikincil hesap işlemlerini taşır.

### 11.1 İçerik

Gerçek mevcut route’lara göre:

- Profile
- Settings
- Help & Support
- Log out

kullanılabilir.

Görselde olmayan fakat gerçekten mevcut başka güvenli alanlar eklenebilir.

### 11.2 Görsel davranış

- Küçük dropdown veya popover
- Kullanıcı bağlamına yakın
- Mat koyu yüzey
- İnce border
- Kontrollü cam etkisi
- Log out ayrı hata/destructive rengi

### 11.3 Davranış

- Avatarla toggle edilir
- Dışarı tıklamayla kapanır
- Escape ile kapanır
- Klavyeyle gezilebilir
- Focus geri döner
- Viewport dışına taşmaz

### 11.4 Yasaklar

Profil menüsü:

- Hesap state reason göstermemeli
- Role internalleri sızdırmamalı
- Admin route’u normal member’a göstermemeli
- Gereksiz account metrics göstermemeli
- Follower veya profile score göstermemeli

Admin kullanıcı için `/admin` erişimi mevcut ürün kararlarına göre ayrı ve güvenli biçimde eklenebilir.

---

## 12. Notification Alanı

Görselde notification bell ve badge bulunur.

Bu alan yalnız gerçek notification sistemi ile kullanılmalıdır.

### 12.1 Gerçek notification türleri

Mevcut ürüne göre örnekler:

- Friend request
- Room invite
- Message
- Social action

### 12.2 Badge

- Gerçek unread count
- Maksimum gösterim örneğin `9+` veya `99+`
- Screen reader label
- Sadece kırmızı nokta değil, anlamlı isim

### 12.3 Otomatik uygulanmayacak durum

Mevcut header notification sistemi yoksa sırf görsel için yeni notification center oluşturulmaz.

Yalnız mevcut capability bu shell’e bağlanır.

---

## 13. Search Alanı

Görselde header üzerinde search ikonu bulunur.

Bu search:

- Discover room search’e bağlanabilir
- Mevcut genel search kontratı varsa kullanılabilir
- Yalnız icon olarak uygun route’a yönlendirebilir

Ancak:

- Global people search eklenemez
- General user directory açılamaz
- Header search ile Discover search aynı anda tekrar edemez
- Search ürün içinde gerçek bir capability değilse eklenmez

Search ikonu dekoratif olarak gösterilemez.

---

## 14. Room Ekranında Shell’in Kaldırılması

Bu board’un en önemli kilitli kararlarından biridir.

Room ekranında:

- Global header yok
- Logo yok
- Social Rail yok
- Mobil global menu yok
- Global search yok
- Notification alanı yok
- Profil menüsü yok

Room kendi minimal context yapısını kullanır.

Room içinde yalnız:

- Geri
- Oda adı
- Host bilgisi
- İnsan sayısı, gerekliyse
- Küçük seçenek menüsü

bulunabilir.

Ana ilke:

> Kullanıcı Room’a girdiğinde site kabuğu geri çekilir, video ve chat kalır.

### 14.1 Geçiş

Home veya Discover’dan Room’a geçerken:

- Global shell sakin biçimde kaybolur
- Room aura’sı oluşur
- Video ve chat yerleşir
- Kullanıcı başka bir katmana geçtiğini hisseder

Bu geçiş işlevi geciktirmemelidir.

### 14.2 Room’dan çıkış

Room’dan çıkınca:

- Önceki route’a veya Hall’a dönülür
- Global shell geri gelir
- Kullanıcının mümkünse önceki scroll/query durumu korunur

---

## 15. Navigasyon Hiyerarşisi

Global navigasyon üç seviyeye ayrılır.

### Seviye 1 — Ana ürün yolları

- Home
- Discover
- Create Room

### Seviye 2 — Social continuity

- Friends
- Messages
- Invites
- People You Watched With
- Blocked

### Seviye 3 — Hesap ve destek

- Profile
- Settings
- Help & Support
- Log out

Bu hiyerarşi desktop ve mobilde korunur.

Her route eşit görsel öncelik taşımaz.

---

## 16. Route ve Aktif Durum Davranışı

Shell custom router ile uyumlu çalışmalıdır.

Aktif route:

- Doğru sekmeyi gösterir
- Nested route’larda parent alanı aktif tutabilir
- Refresh sonrası kaybolmaz
- Auth redirect sonrası doğru bağlamı gösterir

Örnek:

- `/discover` → Discover aktif
- `/messages/...` → Messages aktif
- `/settings/...` → Settings aktif
- `/room/...` → Global shell yok

Route logic CSS veya click state üzerinden sahte biçimde tutulmaz.

---

## 17. Misafir Kullanıcı Shell’i

Misafir kullanıcı için shell daha sade olabilir.

### Misafir erişimi

Mevcut ürün kararlarına göre misafir:

- Home
- Discover
- Public profile

görebilir.

Odaya giriş, social, messages veya create room gibi hesap gerektiren alanlarda auth gate devreye girer.

### Misafir header

Sağ alanda:

- Sign in
- Create account

veya mevcut auth kararına uygun aksiyonlar bulunabilir.

Giriş yapmamış kullanıcı için sahte avatar veya notification gösterilmez.

### Misafir davranış

Create Room seçilirse:

- Auth’a yönlendirilir
- Return intent korunur

Room kartına basılırsa:

- Room Context Auth Gate açılır

---

## 18. Giriş Yapmış Kullanıcı Shell’i

Giriş yapmış kullanıcı için:

- Avatar
- Notification, mevcutsa
- Social Rail
- Profile menu
- Create Room

erişilebilir olabilir.

Auth state yüklenirken:

- Header blink etmez
- Misafir/giriş yapmış görünüm hızlıca zıplamaz
- Küçük skeleton veya nötr placeholder kullanılabilir
- Session doğrulandığında doğru shell gösterilir

---

## 19. Admin Kullanıcı Shell’i

Admin normal kullanıcı shell’ini kullanabilir.

Ancak:

- Admin route yalnız role kontrolüyle görünür
- Admin için ayrı kullanıcı-facing nav sistemi oluşturulmaz
- `/admin` bağlantısı profil menüsünde veya güvenli ayrı bir erişimde bulunabilir
- Normal member bu bağlantıyı görmez

Admin paneline girildiğinde Admin Operational Template shell’i devreye girer.

---

## 20. Renk ve Yüzeyler

Görselde nar çiçeği ve mor/pembe vurgular birlikte görülmektedir.

Kesin sistem:

- Ana accent: `#FF625A`
- Hover: `#FF766F`
- Pressed: `#E9544D`
- Surface: kesin koyu tokenlar
- Phosphor ikonlar

Mor, kesin marka rengi olarak kullanılmaz.

İçerikten gelen aura bazı sayfalarda shell altına hafifçe sızabilir; ancak header okunabilirliğini bozamaz.

Header genel olarak nötr kalmalıdır.

---

## 21. Yüzey ve Border Yorumu

Header:

- Mat koyu yüzey
- İnce alt border
- Gerekirse çok hafif blur
- Ağır gölge yok

Social Rail:

- `#10121A` veya uygun surface
- İnce border
- Aktif alanda hafif `#171A24`
- Kalıcı glow yok

Dropdown/menu:

- Geçici yüzey olduğu için kontrollü cam etkisi
- Yeterli kontrast
- Viewport clipping koruması

---

## 22. Tipografi

- Wordmark: geçici olarak Manrope veya marka fontu alanı
- Ana nav: Inter `500`
- Aktif nav: Inter `600`
- Rail label: Inter `400–500`
- Sayaç: Inter `500–600`
- Kullanıcı adı: Inter `500`
- Username veya yardımcı bilgi: Inter `400`

Tüm nav etiketleri sentence case kullanır.

---

## 23. Iconography

Kesin ikon ailesi:

- Phosphor
- Çizgili
- Regular
- Yaklaşık `1.75–2px`

Örnek ikonlar:

- Home
- Compass/search
- Plus/create
- Users/friends
- Chat/messages
- Envelope/invites
- History/people watched with
- Block
- Settings
- User/profile
- Bell
- Menu
- Close
- Arrow back
- Log out

Farklı ikon aileleri karıştırılmaz.

Aktif ikon dolguluya geçmez.

Aktiflik:

- Accent renk
- Yüzey
- Küçük indicator

ile gösterilir.

---

## 24. Shell Boyutları

Başlangıç referansları:

- Home desktop header: `72px`
- Normal desktop header: `64px`
- Mobile header: `56–64px`
- Closed rail: `56–72px`
- Open rail: `220–260px`
- Dropdown min width: `200–240px`
- Mobil drawer: viewport’un yaklaşık `%82–90` genişliği veya full-screen

Kesin değerler gerçek layout QA ile ayarlanabilir.

Ancak shell içerikten gereksiz alan çalamaz.

---

## 25. Sticky ve Scroll Davranışı

### Desktop header

Sticky olabilir.

Şartlar:

- Scroll sırasında layout shift yapmaz
- İçeriği kapatmaz
- Z-index sistemi nettir
- Scroll ile agresif küçülmez
- Gereksiz blur animasyonu yapmaz

### Social Rail

Viewport yüksekliğinde kalabilir.

İçerik taşarsa kendi scroll alanı olur.

### Mobil header

Sticky olabilir.

Klavye, safe area ve browser chrome ile uyumlu test edilmelidir.

---

## 26. Sayaç ve Unread Davranışı

Sayaçlar:

- Yalnız gerçek unread/pending state
- Sessiz güncellenir
- Realtime blink yapmaz
- `0` olduğunda gizlenebilir
- Screen reader’a anlamlı label verir

Örnek:

> 3 unread messages

Yalnız sayı şeklinde anlamsız okunmamalıdır.

---

## 27. Loading Davranışı

Shell loading state’i ekranı bloke etmez.

### Auth yüklenirken

- Avatar alanında küçük skeleton
- Nav korunur
- İçerik kaybolmaz

### Social count yüklenirken

- Sayaç gizli veya nötr placeholder
- `0` gibi yanlış veri gösterilmez

### Menu açılırken

- Lokal loading gerekiyorsa yalnız ilgili alan
- Tam shell spinner’a dönmez

---

## 28. Empty ve Hata Davranışı

Shell ana navigasyon olduğu için küçük servis hataları shell’i çökertemez.

Örnek:

- Notification count yüklenemedi → bell çalışmaya devam eder veya count gizlenir
- Social count yüklenemedi → nav route’ları görünür kalır
- Avatar yüklenemedi → fallback avatar
- Profile menu data yüklenemedi → güvenli temel menü

Global shell kritik hata yüzeyi değildir.

Tam ekran hata yalnız uygulamanın tamamı kullanılamıyorsa gösterilir.

---

## 29. Realtime Davranış

Social ve notification sayaçları realtime güncellenebilir.

Ancak:

- Badge zıplamaz
- Rail açılıp kapanmaz
- Focus kaybolmaz
- Menü otomatik açılmaz
- User interaction bozulmaz

Yeni bildirim geldiğinde küçük ve sakin feedback kullanılabilir.

---

## 30. Responsive Davranış

Breakpoints başlangıç referansı:

- Mobil: `< 640px`
- Tablet: `640–1023px`
- Desktop: `1024px+`

Ancak shell hangi noktada sıkışıyorsa gerçek breakpoint orada belirlenir.

### Mobilde kaldırılacaklar

- Desktop center nav
- Kalıcı Social Rail
- Geniş profile area
- Header içi uzun arama
- Çoklu ikincil ikonlar

### Mobilde korunacaklar

- Menü
- Sayfa bağlamı
- Geri
- Ana kullanıcı aksiyonu
- Account erişimi

Mobil desktop shell’in sıkıştırılmış hâli olamaz.

---

## 31. Erişilebilirlik

Aşağıdakiler zorunludur:

- Tüm nav öğeleri keyboard ile erişilebilir
- Aktif route `aria-current` benzeri semantik taşır
- Icon button’ların accessible name’i vardır
- Mobile menu focus trap uygular
- Drawer ve dropdown escape ile kapanır
- Kapanınca focus tetikleyiciye döner
- Sayaçlar screen reader için anlamlıdır
- Touch target’lar minimum `44×44px`
- Contrast WCAG AA hedefini karşılar
- Hover bilgileri focus ile de görünür
- Tooltip yalnız hover’a bağlı değildir
- Rail collapsed label’ları screen reader’dan kaybolmaz
- Reduced motion desteklenir
- Room’a geçiş motion azaltıldığında sadeleşir

---

## 32. Azaltılmış Hareket

`prefers-reduced-motion` açıkken:

- Rail genişleme hareketi kısa fade veya anlık geçişe düşer
- Drawer slide yerine fade olabilir
- Header transition azaltılır
- Room’a geçiş özel zoom yapmaz
- Aktif indicator hareket etmez
- İşlevsel feedback korunur

---

## 33. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Geçici Vibehall logosu
- `wavee` kullanıcı adı
- Avatar
- Notification count
- Friends/messages/invites sayaçları
- Search ikonu
- Mobil saat ve cihaz çerçevesi
- Social drawer yönü
- Mor badge’ler
- Nar çiçeği hex örneği
- Room ekranındaki sample chat
- Tablet blur arka planı
- Menü öğelerinin kesin sırası

Gerçek route, veri ve kesin tokenlar kullanılmalıdır.

---

## 34. Otomatik Uygulanmayacak Görsel Unsurlar

### 34.1 Global search

Gerçek capability yoksa eklenmez.

### 34.2 Notification center

Mevcut sistem yalnız basit notifications sağlıyorsa yeni gelişmiş center oluşturulmaz.

### 34.3 Social Rail’in her sayfada açık olması

Rail kullanıcı tercihine veya ekran türüne göre kapalı kalabilir.

### 34.4 Mobil full-screen menu

Tek seçenek değildir; güvenli drawer da kullanılabilir.

### 34.5 Logo sembolü

Kalıcı logo değildir.

### 34.6 Badge sayıları

Gerçek unread/pending data yoksa gösterilmez.

---

## 35. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Alt mobil navigasyon eklemek
- Global people search eklemek
- Yeni route veya social feature eklemek
- Follower/feed/like alanı eklemek
- Social Rail’i ana ürün alanına dönüştürmek
- Room ekranında global header bırakmak
- Room’da logo göstermek
- Room’da notification veya profile menu göstermek
- Her sayfaya farklı header tasarlamak
- Logo tasarımını bu wave içinde kesinleştirmek
- Sahte sayaç veya unread göstermek
- Admin route’u normal user’a göstermek
- Yeni CSS framework veya router eklemek
- Header’ı aşırı glassmorphism yapmak
- Nav ikonlarını farklı kütüphanelerden karıştırmak
- Mobilde desktop nav’i yatay scroll ile korumak

---

## 36. Teknik Uyarlama Alanları

Codex sınırlı olarak şu alanlarda uyarlama yapabilir:

- Mevcut custom router route listesi
- Auth state yapısı
- Mevcut notification API
- Social counts response’u
- Rail’in mevcut component yapısına entegrasyonu
- Header’ın mevcut app shell içine uygulanması
- Responsive breakpoint
- Tablet drawer yönü
- Profil menüsünün portal/popover implementation’ı
- Logo placeholder component’i
- Accessibility için ölçü ve focus ayarları
- Z-index sisteminin mevcut modal yapısına göre düzenlenmesi

Bu uyarlamalar ana navigasyon hiyerarşisini, mobilde alt nav olmaması kararını veya Room’da shell’in kaybolmasını değiştiremez.

---

## 37. Z-Index Sistemi

Shell katmanları merkezi bir z-index sistemi kullanmalıdır.

Örnek mantık:

- Page content
- Sticky header
- Social Rail
- Dropdown/popover
- Drawer backdrop
- Drawer
- Modal
- Toast
- Critical overlay

Keyfî `z-index: 999999` kullanılmaz.

Room fullscreen veya YouTube player overlay’leriyle çakışmalar test edilir.

---

## 38. Mevcut Teknik Yapıyla Uyum

Implementation şu teknik gerçekleri korumalıdır:

- React 19
- Vite
- TypeScript
- Custom router
- React Router yok
- Tailwind yok
- Vanilla CSS
- Mevcut auth/session sistemi
- Mevcut social ve notification API’leri
- Room route’unda ayrı shell davranışı
- Phosphor ikon ailesi
- Merkezi design token sistemi

Shell mevcut route ve page bileşenlerini kırmadan uygulanmalıdır.

---

## 39. Bileşen Envanteri

Bu paket en az şu reusable bileşenleri değerlendirmelidir:

- AppShell
- HomeHeader
- AppHeader
- MobileHeader
- MobileMenu
- SocialRail
- SocialDrawer
- NavItem
- NavBadge
- ProfileMenu
- NotificationButton
- LogoPlaceholder
- RoomMinimalContextBar
- ShellBackdrop
- Drawer
- Tooltip

Her biri bağımsız şekilde yeni ürün davranışı eklememelidir.

---

## 40. Wave Kapsamı Önerisi

Bu board şu capability aşamalarına ayrılabilir:

### Shell Foundation

- AppShell
- Route-based variants
- Home vs app header
- Room shell exclusion
- Design tokens

### Desktop Navigation

- Main nav
- Active route
- Profile menu
- Notification integration
- Social Rail open/closed

### Mobile and Tablet Navigation

- Mobile header
- Full menu/drawer
- Tablet social drawer
- Safe area
- Touch behavior

### State and Accessibility Pass

- Loading
- Error fallback
- Realtime counts
- Keyboard
- Focus
- Reduced motion

Kesin wave ayrımını Codex mevcut component yapısına göre yapabilir.

Ancak AppShell route mantığı ve Room exclusion aynı capability içinde birlikte doğrulanmalıdır.

---

## 41. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Home header normal app header’dan daha ferah görünmektedir
- Normal app header kontrollü ve sade görünmektedir
- Ana navigasyon yalnız gerçek route’ları göstermektedir
- Home, Discover ve Create Room erişilebilir durumdadır
- Global people search eklenmemiştir
- Search varsa gerçek room/search capability’ye bağlıdır
- Social Rail desktop’ta açık ve kapalı çalışmaktadır
- Rail ana içeriği kullanılamaz hâle getirmemektedir
- Sayaçlar yalnız gerçek veriden gelmektedir
- Tablet Social Drawer çalışmaktadır
- Mobilde alt navigasyon bulunmamaktadır
- Mobil minimal header ve menu kullanılmaktadır
- Profile menu erişilebilir ve güvenlidir
- Admin route yalnız admin’e görünmektedir
- Misafir ve giriş yapmış kullanıcı shell’leri doğru farklılaşmaktadır
- Room route’unda global shell tamamen kaybolmaktadır
- Room’dan çıkınca shell doğru biçimde geri gelmektedir
- Header/rail transition layout shift üretmemektedir
- Dropdown ve drawer focus yönetimi tamamlanmıştır
- Escape ve outside-click davranışları çalışmaktadır
- Touch target’lar yeterlidir
- Screen reader nav anlamlıdır
- Reduced motion desteklenmektedir
- Dar ekran ve tablet QA tamamlanmıştır
- Z-index çakışması yoktur
- Typecheck ve build geçmiştir
- İlgili component ve E2E testleri geçmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 42. Son Tasarım Hükmü

Global shell Vibehall’ın kendisi değildir.

Vibehall’a açılan yolları düzenleyen görünmez mimaridir.

Doğru deneyim:

- Home’da davetkâr
- Normal uygulama ekranlarında kontrollü
- Social alanlarda yardımcı
- Mobilde sade
- Room içinde tamamen geri çekilmiş

olmalıdır.

Bu tasarım paketinin başarı ölçütü çok kapsamlı bir navigasyon yapmak değildir.

Başarı ölçütü:

> Kullanıcının Vibehall içinde nerede olduğunu her an anlaması, ihtiyaç duyduğu alana hızlıca ulaşması ve Room’a girdiğinde arayüz kabuğunun deneyimin önünden tamamen çekilmesidir.