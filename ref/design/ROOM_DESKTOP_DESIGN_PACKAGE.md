# Room Desktop Design Package

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Room Desktop Design Package** görseli, Vibehall’ın masaüstü oda deneyimi için onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Aşağıdaki kararları bağlayıcı biçimde temsil eder:

- Room’un Vibehall’ın ana deneyimi olması
- Video ve chat’in ekranın iki temel bileşeni olması
- Participant görünümünde yaklaşık `75/25` video–chat dengesi
- Global shell’in Room içinde tamamen kaybolması
- Minimal room context bar
- Host kontrollerinin aynı kompozisyon içinde, düşük görsel ağırlıkla sunulması
- Sinematik modda videonun genişlemesi ve chat’in aşağı taşınması
- İçerikten doğan aura sisteminin Room atmosferini belirlemesi
- Room ended durumunda açık sonraki adımlar ve People You Watched With bağlantısı
- Room’un dashboard, yayın yönetim paneli veya video konferans uygulamasına dönüşmemesi

Ancak görselde bulunan bütün player kontrolleri, participant sayıları, chat sekmeleri, host araçları, playback durumu, kategori etiketleri, avatarlar ve Room Ended içeriği mevcut ürün kabiliyeti olarak yorumlanamaz.

Implementation mevcut YouTube player kontratlarını, realtime oda durumunu, host authority modelini, participant/chat API’lerini, access policy’lerini ve canonical ürün kararlarını kullanmalıdır.

Ana ilke:

> Video var, chat var; geri kalan her şey yalnızca ihtiyaç anında görünür.

---

## 1. Ekranın Ana Amacı

Room ekranının temel amacı şudur:

> Kullanıcının başka insanlarla aynı videoyu birlikte izlediği, chat üzerinden onların varlığını hissettiği ve arayüzü düşünmek zorunda kalmadığı sade bir dijital mekân oluşturmak.

Kullanıcı Room’a girdiğinde:

- Videoyu hemen görmeli
- Chat’in nerede olduğunu anlamalı
- Odanın adını ve host’u görebilmeli
- Oda durumunu anlayabilmeli
- Global site navigasyonundan kopup Room bağlamına geçmeli
- Gereksiz kontrol, kart veya panel kalabalığı yaşamamalı
- Host değilse yönetim araçları görmemeli
- Bağlantı sorunlarında mevcut deneyimini kaybetmemeli
- Oda sona erdiğinde ne yapacağını açıkça anlayabilmelidir

Room’un görevi ürünün bütün sosyal özelliklerini aynı anda göstermek değildir.

Room’un görevi:

> Aynı videoyu, aynı anda, aynı yerde birlikte izletmektir.

---

## 2. Değişmez Room Prensipleri

Aşağıdaki ilkeler bütün Room varyantlarında korunur:

- Video ana odaktır
- Chat sürekli erişilebilir sosyal alandır
- Oda bilgisi minimum düzeydedir
- Yönetim kontrolleri varsayılan deneyimi boğmaz
- Global header yoktur
- Social Rail yoktur
- Logo yoktur
- Profil menüsü yoktur
- Global notification alanı yoktur
- Geniş platform navigasyonu yoktur
- Room kendi minimal bağlam sistemini kullanır
- İçerikten doğan aura atmosferi oluşturur
- Room bir dashboard’a dönüşmez

Room’a eklenen her yüzey şu sorudan geçmelidir:

> Bu öğe videoyu birlikte izleme deneyimi için gerçekten gerekli mi?

Cevap hayırsa varsayılan görünümde yer almamalıdır.

---

## 3. Room Varyantları

Bu paket dört ana desktop durumunu kapsar:

1. Participant view
2. Host view
3. Cinematic mode
4. Room ended

Bunlara ek olarak aynı tasarım sisteminden türetilmesi gereken durumlar:

- Initial loading
- Joining room
- Reconnecting
- Room full
- Access denied
- Banned
- Player unavailable
- Chat disconnected
- Feature unavailable
- Host ended room
- Unexpected room closure

Her durum yeni bir sayfa tasarımı üretmemeli; aynı Room mimarisinin state’i olarak davranmalıdır.

---

## 4. Participant View — Ana Kompozisyon

Participant görünümü Room’un standart ve en önemli görünümüdür.

Ana desktop yapı:

- Üstte minimal room context bar
- Solda video
- Sağda chat
- Altta yalnız gerekli oda metadata’sı veya ikincil kontroller
- İçerikten doğan aura
- Yaklaşık `75/25` video–chat dengesi

### 4.1 Video–chat oranı

Başlangıç ana dengesi:

- Video: yaklaşık `%75`
- Chat: yaklaşık `%25`

Chat için daha güvenli teknik hedef:

- Yaklaşık `360–420px` kontrollü genişlik
- Video kalan alanı doldurur

Bu oran katı matematiksel bir zorunluluk değildir.

Ekran daraldığında:

- Chat okunamayacak kadar küçültülmez
- Video oranı bozulmaz
- Kompozisyon uygun breakpoint’te alt alta veya farklı Room düzenine geçer

### 4.2 Ana odak

Kullanıcının ilk gördüğü öğe video olmalıdır.

Chat:

- Videoyla yarışmaz
- Görünmez de olmaz
- İnsan varlığını sürekli ama sakin biçimde taşır

---

## 5. Minimal Room Context Bar

Room’un üst alanı normal site header’ı değildir.

Yalnız Room bağlamını koruyan küçük bir bar’dır.

### 5.1 İçerik

Gerçek ürün kontratına göre:

- Back
- Oda adı
- Host bilgisi
- Live durumu
- Participant count, gerekiyorsa
- Küçük seçenek menüsü

bulunabilir.

### 5.2 Yükseklik

Yaklaşık başlangıç:

- `48–52px`

Kesin değer player ve mevcut layout QA ile ayarlanabilir.

### 5.3 Görsel karakter

- Mat koyu yüzey
- İnce border
- Minimum dikey alan
- Güçlü logo veya marka alanı yok
- Büyük breadcrumb yok
- Geniş navigasyon yok

### 5.4 Oda adı

- Bir satır
- Uzunsa ellipsis
- Tooltip veya accessible full name
- Manrope ya da Inter semibold
- Videodan daha güçlü görünemez

### 5.5 Host bilgisi

- Küçük avatar, gerçekten mevcutsa
- Host display name veya username
- `Hosted by` yardımcı metni
- Verified veya premium badge yok

---

## 6. Back Davranışı

Back aksiyonu Room’dan güvenli çıkış sağlar.

Tercih edilen davranış:

- Kullanıcı Discover’dan geldiyse önceki Discover state’ine dönebilir
- Query, filtre ve scroll mümkünse korunur
- Doğrudan linkten geldiyse Hall veya güvenli önceki route’a döner

Back:

- Tarayıcı history ile uyumlu olmalı
- Double navigation üretmemeli
- Room presence cleanup davranışıyla uyumlu olmalı
- Oda içindeki kritik unsaved state varsa uygun davranış göstermeli

Back butonu room ended veya access state’lerinde de açık kalabilir.

---

## 7. Video Player Alanı

Video player Room’un ana yüzeyidir.

### 7.1 Boyut

- Mevcut alanı maksimum verimle kullanır
- Video aspect ratio korunur
- Gereksiz padding kullanılmaz
- Player kontrol alanı kesilmez
- Chat yüzünden aşırı küçülmez

### 7.2 Player sınırları

Implementation YouTube player’ın gerçek teknik sınırlarına uymalıdır.

Görseldeki bütün player ikonları birebir uygulanmak zorunda değildir.

YouTube embed/player tarafından desteklenmeyen kontroller sahte biçimde oluşturulamaz.

### 7.3 Player kontrolleri

Yalnız gerçek davranışlar:

- Play/pause
- Seek, host authority izin veriyorsa
- Volume
- Fullscreen
- Cinematic mode
- Gerekiyorsa sync state

kullanılır.

Görselde bulunan ek ikonlar yeni capability anlamına gelmez.

### 7.4 Participant playback authority

Participant’ın playback kontrolü canonical ürün kararına göre uygulanır.

Eğer host-authoritative playback kullanılıyorsa participant:

- Host playback durumunu takip eder
- Kendi başına authoritative state değiştiremez
- Lokal UI ile backend state arasında yanlış kontrol hissi yaşamaz

Frontend’de görünen kontrol, backend authority ile çelişemez.

---

## 8. İçerikten Doğan Aura

Room atmosferi videonun thumbnail’i veya mevcut güvenli medya görselinden doğar.

Aura:

- Player arkasında yoğunlaşır
- Chat ve context bar çevresine hafifçe yayılabilir
- Ekranı içerik tonuna göre dönüştürür
- Fakat thumbnail’i okunur arka plan resmi gibi göstermez

### 8.1 Teknik yaklaşım

Başlangıç referansı:

- Yüksek blur
- Güçlü dark mask
- Düşük opacity
- Hafif scale
- Pointer interaction yok
- Player arkasında absolute decorative layer

### 8.2 Yoğunluk

- Normal Room: düşük–orta
- Cinematic mode: biraz daha güçlü
- Chat alanı: daha düşük
- Mobil: daha da kontrollü

### 8.3 Yasaklar

- Sürekli hareket eden neon dalgalar
- Parlak thumbnail tekrarları
- Metin kontrastını düşüren renk
- Her birkaç saniyede renk değiştirme
- Performansı bozan canvas/video blur
- Aura’yı ürün özelliği gibi sunma

Reduced motion açıkken aura statik kalır.

---

## 9. Chat Alanı

Chat, videonun yanında akan sessiz insan varlığı gibi görünmelidir.

Bir sosyal medya feed’i veya Twitch chat duvarı olmamalıdır.

### 9.1 Ana yapı

- Chat header veya sekme alanı
- Message history
- Composer
- Reconnect/typing/local state
- Gerekirse People görünümüne geçiş

### 9.2 Chat–People sekmesi

Görselde:

- Chat
- People 124

sekmeleri bulunmaktadır.

Bu, mevcut ürün capability’si destekliyorsa kullanılabilir.

Ancak participant listesi zaten ayrı panel veya menu üzerinden daha sağlıklı çözülüyorsa ikinci sekme zorunlu değildir.

Kilitli olan:

- Chat’in sürekli erişilebilir olması
- Participant bilgisinin gerektiğinde ulaşılabilir olması

### 9.3 Mesaj biçimi

Room chat mesajları:

- Büyük renkli baloncuklar kullanmaz
- Kullanıcı avatarı + isim + mesaj yapısı kullanabilir
- Düşük yüzey vurgusu
- Rahat okunabilir font
- Yoğun ama sıkışık olmayan spacing

kullanır.

Twitch benzeri hızlı akan rengârenk chat görünümü oluşturulmaz.

### 9.4 Mesaj gruplama

Aynı kullanıcının art arda mesajlarında:

- Avatar tekrarı azaltılabilir
- İsim tekrarları azaltılabilir
- Mesaj akışı sakinleşir

### 9.5 “Now playing” mesajı

Görselde chat içinde:

> Now playing: Nujabes – Feather

benzeri satır vardır.

Bu yalnız mevcut sistem gerçekten player/state system message üretiyorsa kullanılır.

Sahte now-playing mesajı eklenmez.

---

## 10. Chat Composer

Composer:

- Chat alanının altında
- Sürekli erişilebilir
- Karanlık mat yüzey
- Görünür focus
- Güvenilir send davranışı

taşır.

### 10.1 Input

- Tek satırdan kontrollü büyüyebilir
- Enter/Shift+Enter davranışı tutarlı
- Uzun mesaj layout’u bozmaz
- Max length mevcut backend kontratına uyar
- IME desteği bozulmaz

### 10.2 Send

- Icon button veya sade küçük CTA
- En az `44×44px` target
- Double-submit önleme
- Lokal sending state
- Tüm chat’i bloke etmeme

### 10.3 Auth ve permission

Kullanıcı chat gönderemiyorsa:

- Composer disabled state’e geçer
- Sebep açık fakat güvenli biçimde gösterilir

Örnek:

> Chat is unavailable for this room.

Raw backend reason gösterilmez.

---

## 11. Chat Realtime Davranışı

- Yeni mesajlar sessizce eklenir
- Duplicate mesaj oluşmaz
- Kullanıcı aşağıdaysa auto-scroll olabilir
- Kullanıcı geçmiş okuyorsa scroll zorla aşağı çekilmez
- `New messages` indicator kullanılabilir
- Reconnect sırasında mevcut mesajlar korunur
- Chat history blink etmez

Chat bağlantısı player bağlantısından bağımsız sorun yaşayabilir.

Bu durumda bütün Room hata ekranına dönmez.

Örnek lokal durum:

> Reconnecting to chat…

Video çalışmaya devam edebilir.

---

## 12. Participant Listesi

Participant listesi ikincil bilgidir.

Varsayılan Room yüzeyini boğmamalıdır.

Görüntülenebilecek bilgiler:

- Avatar
- Display name
- Host durumu
- Online/present state
- Gerekirse moderation action, yalnız host için

Participant count gerçek backend state’inden gelir.

Sahte avatar veya kullanıcı üretilemez.

Liste:

- Chat sekmesi
- Side panel
- Menu
- Bottom sheet, mobilde

üzerinden erişilebilir.

---

## 13. Participant View’de Görünmemesi Gerekenler

Normal participant aşağıdaki kontrolleri görmemelidir:

- End Room
- Participant management
- Kick
- Ban
- Host playback authority controls
- Room-level moderation panel
- Reconciliation/debug araçları
- Admin araçları
- Host-only invite grant detayları

Participant yalnız kendi erişimine uygun aksiyonları görür:

- Invite, ürün izin veriyorsa
- Report
- Leave Room
- View participants
- Cinematic mode
- Fullscreen

---

## 14. Host View

Host view aynı ana kompozisyonu korur.

Host olduğu için ekran yeni bir dashboard’a dönüşmez.

Ana yapı yine:

- Video
- Chat
- Minimal context bar
- İçerikten doğan aura

olarak kalır.

Host kontrolleri düşük ağırlıkla eklenir.

### 14.1 Görselde gösterilen host kontrolleri

- Playback synced
- Invite
- Manage
- End Room

Bu yön uygundur; ancak gerçek button ve davranışlar mevcut capability’lere göre belirlenir.

### 14.2 Host kontrol hiyerarşisi

1. Playback/sync durumu
2. Invite
3. Participants/manage
4. End Room

End Room destructive görünür fakat ekranı sürekli kırmızıya boğmaz.

### 14.3 Manage

Manage butonu:

- Side panel
- Popover
- Controlled overlay

açabilir.

İçerik:

- Participants
- Kick
- Room ban
- Gerekli room controls

ile sınırlıdır.

Ayrı büyük admin dashboard açılmaz.

---

## 15. Host Playback Durumu

Playback sync göstergesi:

- Küçük
- Sakin
- Teknik olmayan
- Gerçek realtime state’e bağlı

olmalıdır.

Örnek:

> Playback synced

Ancak bu ifade yalnız sistem gerçekten sync sağlıklı durumunu ölçebiliyorsa gösterilir.

Olası gerçek state’ler:

- Synced
- Updating
- Reconnecting
- Player unavailable
- Feature unavailable

Sahte sürekli yeşil status gösterilmez.

---

## 16. Host Invite Davranışı

Invite mevcut room invite sistemine bağlanır.

Invite yüzeyi:

- Modal veya side panel
- Arkadaş listesi
- Link copy
- Gerçek invite grant behavior
- Private room access kuralları

ile çalışabilir.

Yeni paylaşım servisleri sırf görsel için eklenmez.

Invite:

- Ban’ı bypass edemez
- Capacity’yi bypass edemez
- Ended room’a geçerli erişim veremez
- Private room grant davranışına uyar

---

## 17. Participant Management

Host participant management içinde gerçek capability’lere göre:

- Participant listesi
- Kick
- Room-level ban
- Unban, mevcutsa
- Host işareti
- Gerekirse report shortcut

bulunabilir.

### 17.1 Kick

- Açık hedef
- Confirmation, ürün kararına göre
- Realtime room state update
- Kullanıcıyı odadan çıkarma
- Audit/moderation state, mevcutsa

### 17.2 Ban

- Kick’ten daha güçlü destructive işlem
- Reason alanı, gerekiyorsa
- Confirmation
- Backend enforcement
- Rejoin engeli
- Invite grant ile bypass edilememe

Host control UI güvenlik authority değildir; backend enforcement zorunludur.

---

## 18. End Room

End Room host’a özel destructive işlemdir.

### 18.1 Görsel davranış

- Kırmızı/danger buton
- Diğer host kontrollerinden ayrılır
- Tek tıkla sessizce çalışmaz
- Confirmation modal açar

### 18.2 Confirmation

Modal açıkça şunları söyler:

- Bu oda sona erecek
- Katılımcılar çıkarılacak
- Chat kapanacak veya read-only olabilir
- İşlem geri alınamayabilir

Örnek:

> End this room for everyone?

CTA:

> End room

Secondary:

> Cancel

### 18.3 Sonuç

Backend authoritative room state’i ended olur.

Tüm client’lar realtime ile Room Ended state’ine geçer.

Yalnız host client’ında lokal state değiştirmek yeterli değildir.

---

## 19. Cinematic Mode

Cinematic mode videonun daha baskın hâle geldiği alternatif Room görünümüdür.

Ana kararlar:

- Video genişler
- Chat videonun altına taşınır
- Atmosfer videodan daha güçlü biçimde doğar
- Room kontrolleri minimum kalır
- Global shell yine görünmez

### 19.1 Video alanı

- Ekran genişliğinin büyük kısmını kullanır
- Aspect ratio korunur
- Chat altında kontrollü yükseklik
- Player kontrolleri erişilebilir

### 19.2 Chat aşağı yerleşimi

Görselde chat yatay ve düşük yükseklikte gösterilmiştir.

Bu yaklaşım kompozisyon referansıdır.

Gerçek uygulama seçenekleri:

- Düşük yükseklikli message strip
- Expandable chat drawer
- Alt panel
- Kontrollü chat listesi

Chat tamamen kaybolmamalıdır.

### 19.3 Cinematic mode giriş/çıkış

- Açık toggle
- `Enter cinematic`
- `Exit cinematic`

davranışı bulunur.

Mode state:

- Room içinde korunabilir
- Page refresh sonrası korunması zorunlu değildir
- URL veya local preference olabilir
- Player fullscreen ile karıştırılmamalıdır

### 19.4 Fullscreen farkı

Cinematic mode:

- Video + sınırlı Room bağlamı + chat

taşır.

Fullscreen:

- Varsayılan olarak temiz video

davranışıdır.

Fullscreen içinde chat overlay zorunlu değildir.

---

## 20. Room Ended Durumu

Room ended görünümü aynı Room shell içinde doğal bir sonuç ekranıdır.

Ana içerik:

- `This room has ended.`
- Kısa destekleyici metin
- Back to hall
- Open a new room
- People You Watched With, mevcut capability’ye göre

### 20.1 Görsel hiyerarşi

1. Room ended mesajı
2. Back to hall
3. Open a new room
4. People You Watched With
5. Eski chat, read-only veya kapalı state

### 20.2 Chat

Oda ended olduğunda:

- Yeni mesaj gönderilemez
- Composer disabled olur
- Açık metin gösterilir

Örnek:

> Chat is closed because this room has ended.

Görselde `Chat is disabled` bulunmaktadır; bu yön uygundur.

### 20.3 Eski mesajlar

Retention ve ürün kararına göre:

- Kısa süre görüntülenebilir
- Read-only kalabilir
- Room ekranında tamamen kaldırılabilir

Yeni davranış bu görsel nedeniyle icat edilmez.

---

## 21. People You Watched With

Room ended sonrası People You Watched With, Vibehall’ın sosyal devamlılık vizyonuyla uyumludur.

Ancak yalnız gerçek capability varsa kullanılmalıdır.

### 21.1 Görüntüleme

- Katılımcı avatarları
- Display name, panel açılırsa
- Arkadaşlık durumu
- Add friend veya profile action, ürün izin veriyorsa

kullanılabilir.

### 21.2 Gizlilik

- Block ilişkileri uygulanır
- Kendisini listeden gizleme tercihi uygulanır
- Hassas join/leave timestamp sızdırılmaz
- Private room participation public profile’a taşınmaz
- Sahte participant gösterilmez

### 21.3 Çok kişi

`+8` gibi gösterim, gerçek listedeki kalan kişi sayısını temsil edebilir.

Tıklanınca kontrollü panel açılabilir.

---

## 22. Room Metadata ve Category Pills

Görselde Room altında:

- Music
- Chill
- Lo-fi Hip Hop
- Study

gibi birden fazla etiket bulunur.

Mevcut model tek category taşıyorsa birden fazla tag sistemi eklenmez.

Kategori:

- Bir veya gerekli minimum metadata
- Düşük görsel ağırlık
- Video ve chat’le yarışmayan

biçimde gösterilir.

Görseldeki tag’ler kompozisyon örneğidir.

---

## 23. Participant Count

Participant count:

- Gerçek occupancy
- Capacity ile gerekiyorsa `12 / 20`
- Küçük insan ikonu
- Context bar veya metadata alanı

ile gösterilebilir.

Sayı:

- Realtime güncellenebilir
- Blink etmez
- Tahmin edilmez
- Avatar sayısından uydurulmaz

Host ve participant görünümünde aynı authoritative state kullanılır.

---

## 24. Room Loading State

### 24.1 Initial loading

Room shell korunur.

Gösterilebilecekler:

- Player skeleton
- Chat skeleton
- Context bar skeleton
- Aura için nötr fallback

Tam sayfa spinner kullanılmaz.

### 24.2 Joining room

Gerçek join handshake sürüyorsa lokal state:

> Joining room…

kullanılabilir.

Sahte progress stepper oluşturulmaz.

### 24.3 Player loading

Player alanı korunur.

Chat mümkünse yüklenmeye devam eder.

### 24.4 Chat loading

Chat alanı skeleton veya lokal loading gösterir.

Video beklemek zorunda değildir.

---

## 25. Reconnecting Durumu

Reconnecting Room’un önemli state’lerinden biridir.

### 25.1 Genel reconnect

Küçük room-level banner:

> Reconnecting to the room…

Mevcut video/chat içeriği mümkün olduğunca ekranda kalır.

### 25.2 Player sync reconnect

Player alanında lokal indicator.

### 25.3 Chat reconnect

Chat header veya composer yakınında lokal indicator.

### 25.4 Recovery

Bağlantı geri geldiğinde:

- Room state reconcile edilir
- Playback authoritative zamana getirilir
- Eksik mesajlar alınır
- Participant listesi güncellenir
- Duplicate event oluşmaz

Reconnect başarıyla tamamlandığında banner sessizce kaybolur.

---

## 26. Room Full Durumu

Room kapasitesi doluysa:

- Kullanıcı Room’a normal participant olarak alınmaz
- Player veya chat erişimi ürün politikasına göre sınırlandırılır
- Açık state gösterilir

Örnek:

> This room is full.

Aksiyonlar:

- Back to hall
- Explore other rooms

Yeni waitlist sistemi sırf state’i çözmek için eklenmez.

---

## 27. Ban ve Access Denied Durumu

Kullanıcı banned veya erişim politikası nedeniyle odaya giremiyorsa:

- Teknik reason sızdırılmaz
- Room bilgisi gereğinden fazla gösterilmez
- Nötr güvenli state kullanılır

Örnek:

> You can’t join this room.

Gerekliyse:

- Back to hall
- Explore rooms

sunulur.

Host’un veya başka kullanıcının özel aksiyonu gereksiz şekilde açıklanmaz.

---

## 28. Private Room Durumu

Private Room’a direct link ile gelindiğinde:

- Auth kontrolü
- Password veya invite grant kontrolü
- Capacity
- Ban
- Room state

backend tarafından enforce edilir.

Room UI access başarılı olduktan sonra public Room ile aynı ana kompozisyonu kullanabilir.

Private room için ek gösterilebilecek küçük durum:

- Private icon
- `Private room`

Ancak password, grant veya access internalleri UI’da görünmez.

---

## 29. Player Unavailable ve Feature Unavailable

YouTube player veya embedded media geçici olarak kullanılamıyorsa:

- Room bütünüyle çökmemeli
- Chat çalışabiliyorsa korunmalı
- Player alanında açık lokal state gösterilmeli

Örnek:

> The video is temporarily unavailable.

Aksiyon:

> Try again

Feature flag nedeniyle Room media unavailable ise generic hata yerine kullanıcı dostu state gösterilir.

Ancak launch öncesi ana Room capability unavailable durumda kabul edilmez.

---

## 30. Leave Room

Participant için Leave Room ikincil menüde yer alabilir.

Leave:

- Room presence cleanup
- Realtime unsubscribe
- Player cleanup
- Previous route’a dönüş

davranışlarını güvenli biçimde yürütür.

Normal leave için ağır confirmation gerekli olmayabilir.

Host leave davranışı ayrı değerlendirilmelidir:

- Host yalnız leave edebilir mi?
- Leave room’u end eder mi?
- Host authority devam eder mi?

Canonical ürün kararı neyse korunur.

Görsel yeni host transfer sistemi eklenmesine izin vermez.

---

## 31. Options Menu

Context bar’daki `...` menüsü gerçek kullanıcı rolüne göre içerik gösterir.

Participant için olası öğeler:

- Invite
- View participants
- Cinematic mode
- Report room
- Leave room

Host için:

- Invite
- Manage participants
- Room settings, mevcutsa
- End room

Admin-only işlem normal participant menüsünde görünmez.

Menü:

- Keyboard erişilebilir
- Escape ile kapanır
- Outside click ile kapanır
- Viewport dışına taşmaz
- Mobilde bottom sheet’e dönüşebilir

---

## 32. Görsel Karakter

Room ekranı:

- Temiz
- Karanlık
- İçerik odaklı
- Sakin
- Sinematik
- İnsan varlığı taşıyan
- Düşük kontrol yoğunluklu

olmalıdır.

Şunlara dönüşmemelidir:

- OBS paneli
- Twitch creator dashboard
- Discord voice channel
- Zoom toplantısı
- YouTube Studio
- Admin paneli
- Gaming overlay
- Çok araçlı medya player

Room’un özgünlüğü:

> Video ile chat’in aynı atmosfer içinde, gereksiz arayüz olmadan birlikte durmasıdır.

---

## 33. Renk ve Yüzeyler

Görselde mor accent yoğun biçimde kullanılmıştır.

Implementation kesin sistemi kullanır:

- Background: `#090A0F`
- Surface: `#10121A`
- Elevated: `#171A24`
- Hover: `#1D2130`
- Accent: `#FF625A`
- Live/success: `#5ED7A0`
- Error/destructive: `#E45B6A`

Room’da accent daha az görünmelidir.

İçerik renkleri auradan gelir.

Nar çiçeği yalnız:

- Focus
- Ana aksiyon
- Selected chat tab
- Küçük Room state
- Critical Host CTA dışında olmayan vurgular

için kontrollü kullanılır.

---

## 34. Tipografi

- Room title: Manrope veya Inter `600`
- Host/meta: Inter `400–500`
- Chat message: Inter `400`
- Chat username: Inter `500–600`
- Timestamp: Inter `400`
- Context buttons: Inter `500`
- Room ended title: Manrope `600–700`

Room’da büyük marketing typography kullanılmaz.

Video alanı önceliklidir.

---

## 35. Boşluk ve Yoğunluk

Room desktop daha sıkı fakat ferah bir uygulama yüzeyidir.

Başlangıç yaklaşımı:

- Outer padding: `12–20px`
- Context bar içi: `12–16px`
- Video–chat gap: `8–12px`
- Chat padding: `12–16px`
- Message group gap: `8–12px`
- Metadata row: `8–12px`
- Player çevresi: minimum gereksiz boşluk

Normal sayfalardaki `40–56px` kenar boşluğu Room’da kullanılmaz.

Room viewport’u daha fazla kullanır.

---

## 36. Responsive Davranış

Bu paket desktop referansıdır; yine de dar desktop ve tablet geçişi güvenli olmalıdır.

### Geniş desktop

- Video solda
- Chat sağda
- `75/25`

### Normal desktop

- Chat kontrollü minimum genişlik
- Video kalan alan

### Dar desktop/tablet

Chat `320–360px` altına düşmeden önce:

- Video üstte
- Chat altta
- Veya sinematik benzeri stacked mode

değerlendirilmelidir.

Horizontal overflow oluşamaz.

Chat’i `240px` gibi okunamaz genişliğe sıkıştırmak yasaktır.

---

## 37. Erişilebilirlik

Aşağıdaki maddeler zorunludur:

- Player kontrolleri keyboard ile erişilebilir
- Room title heading semantiği uygundur
- Back butonu accessible name taşır
- Chat tab ve People tab doğru semantics kullanır
- Chat history anlamlı DOM sırasındadır
- Kullanıcı adı ve mesaj doğru sırayla okunur
- Composer accessible name taşır
- Live state yalnız renkle anlatılmaz
- Participant count anlamlı okunur
- Options menu keyboard ile açılır
- Host-only controls rol bazlı gizlenir
- End Room confirmation focus trap uygular
- Room Ended state screen reader’a uygun biçimde duyurulur
- Reconnect state kontrollü live region kullanır
- Focus görünürdür
- Touch target’lar en az `44×44px`
- WCAG AA kontrast hedeflenir
- Reduced motion desteklenir
- Fullscreen ve cinematic mode durum değişimi açıkça bildirilir

---

## 38. Azaltılmış Hareket

`prefers-reduced-motion` açıkken:

- Aura hareketi durur
- Room giriş transition’ı kısa fade’e düşer
- Cinematic mode geçişi anlık veya kısa fade olur
- Chat message giriş animasyonu kapanır
- Live pulse statik olur
- Participant avatar eklenme animasyonu kapanır
- İşlevsel loading/reconnect indicator korunur

---

## 39. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Oda adı
- Host isimleri
- Avatarlar
- Participant sayısı
- Chat mesajları
- Video thumbnail’leri
- Player süreleri
- Category pill’leri
- Playback synced ifadesi
- People count
- Live badge
- Verified benzeri ikonlar
- Host control isimleri
- Room ended message
- People You Watched With avatarları
- Mor accent
- Chat/People tab sayıları
- Now playing system message
- Player control ikonları
- Cinematic mode içindeki yatay chat dizilimi

Gerçek backend, player ve design system kontratları kullanılmalıdır.

---

## 40. Otomatik Uygulanmayacak Görsel Unsurlar

### 40.1 Verified ikonları

Verified sistemi yoktur.

### 40.2 Birden fazla category/tag

Model tek category ise yeni tag sistemi eklenmez.

### 40.3 Playback synced göstergesi

Gerçek sync-health ölçümü yoksa sahte status gösterilmez.

### 40.4 Chat/People sekmesi

Participant listesi farklı mevcut yüzeyden çözülüyorsa zorunlu değildir.

### 40.5 Now playing system message

Gerçek typed system message yoksa eklenmez.

### 40.6 Player control ikonları

YouTube player veya mevcut media contract desteklemiyorsa eklenmez.

### 40.7 Cinematic mode

Mevcut değilse bu plan kapsamında onaylanmış capability olarak uygulanabilir; ancak fullscreen ile karıştırılmaz ve teknik sınırlar incelenir.

### 40.8 People You Watched With

Mevcut capability ve privacy kontratı varsa uygulanır; yoksa ayrı capability gerekir.

### 40.9 Host Manage paneli

Mevcut kick/ban ve participant endpoints ile sınırlıdır.

Yeni room management sistemi oluşturulmaz.

---

## 41. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Room’da global header bırakmak
- Room’da logo göstermek
- Social Rail göstermek
- Video alanını küçük bir kart hâline getirmek
- Chat’i gizli varsayılan panel yapmak
- Room’u dashboard’a çevirmek
- Host view’i ayrı admin paneline çevirmek
- Yeni playback authority modeli eklemek
- Host transfer sistemi eklemek
- Co-host veya moderator rolü eklemek
- Yeni video provider eklemek
- Video call veya voice chat eklemek
- Screen share eklemek
- Reactions, gifts veya like sistemi eklemek
- Verified veya premium badge eklemek
- Sahte participant veya message göstermek
- Private room access politikasını değiştirmek
- Ban veya capacity kontrolünü bypass etmek
- Fullscreen içinde zorunlu chat overlay eklemek
- Player’ın desteklemediği kontrolleri sahte biçimde göstermek
- Every-state için farklı Room layout üretmek
- Reconnect sırasında ekranı boşaltmak
- Room ended state’inde chat göndermeye izin vermek
- Mor paleti kesin sistem olarak kullanmak
- Tailwind veya React Router eklemek

---

## 42. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu alanlarda uyarlama yapabilir:

- Mevcut Room component yapısı
- YouTube player entegrasyonu
- Realtime event isimleri
- Host authority API’si
- Chat API ve pagination
- Participant list presenter’ı
- Current room state model
- Cinematic mode implementation tekniği
- Responsive breakpoint
- Context bar’ın kesin yüksekliği
- Chat genişliği
- Side panel veya popover tercihi
- Room ended verisinin retention davranışı
- Existing People You Watched With entegrasyonu
- Accessibility için player wrapper ve DOM yapısı

Bu uyarlamalar video–chat hiyerarşisini, global shell’in yokluğunu veya host kontrollerinin minimal kalması kararını değiştiremez.

---

## 43. Realtime ve Güvenilirlik Gereksinimleri

Room realtime sistemi en az şu riskleri ele almalıdır:

- Duplicate chat event
- Out-of-order message
- Stale participant list
- Host playback event yarış koşulu
- Reconnect sonrası yanlış player zamanı
- End Room event’inin bazı client’lara ulaşmaması
- Kick/ban sonrası client’ın içeride kalması
- Capacity sayısının yanlış görünmesi
- Session expiry
- Feature unavailable state
- Player ready olmadan playback command gelmesi
- Room state ile UI state’in ayrışması

Recovery davranışı:

- HTTP snapshot veya authoritative state ile reconcile
- Realtime event deduplication
- Idempotent room end
- Güvenli participant removal
- Chat history restore
- Player state resync

UI yalnız socket event’ine körlemesine güvenmemelidir.

---

## 44. Güvenlik ve Yetki Sınırları

- Room join backend tarafından authorize edilir
- Host identity request body’den alınmaz
- Host-only actions backend’de role/ownership doğrular
- Kick ve ban backend authority’dir
- End Room yalnız host veya izin verilen admin tarafından yapılabilir
- Private password güvenli biçimde doğrulanır
- Invite grant policy korunur
- Ban invite grant ile bypass edilemez
- Capacity server-side enforce edilir
- Chat send room membership gerektirir
- Ended room’a message gönderilemez
- Participant başka room’un socket channel’ına erişemez
- Room metadata response’u privacy sınırlarına uyar
- XSS ve unsafe chat render engellenir
- Rate limit/abuse koruması doğrulanır

---

## 45. Performans Yaklaşımı

Room en yoğun realtime ve media yüzeyidir.

Değerlendirilmesi gerekenler:

- Player component gereksiz remount olmamalı
- Chat update player’ı rerender etmemeli
- Participant update bütün Room’u rerender etmemeli
- Aura optimize edilmiş asset veya CSS kullanmalı
- Büyük blur performansı ölçülmeli
- Chat history pagination
- Avatar lazy loading
- Realtime event batching
- Stable layout
- Resize observer dikkatli kullanılmalı
- Cinematic mode player’ı yeniden başlatmamalı
- Fullscreen state güvenli korunmalı
- Visibility change davranışı test edilmeli

Görsel atmosfer player stabilitesini bozamaz.

---

## 46. Wave Kapsamı Önerisi

Bu paket şu capability bütünlerine ayrılabilir:

### Room Shell and Participant Foundation

- Minimal context bar
- Global shell exclusion
- Video–chat layout
- Room metadata
- Participant view
- Aura

### Chat and Presence

- Message history
- Composer
- Participant list
- Realtime updates
- Reconnect
- Scroll behavior

### Host Controls

- Playback status
- Invite
- Participant management
- Kick/ban
- End Room
- Confirmation flows

### Cinematic Mode

- Expanded video
- Chat below
- Mode transition
- Fullscreen distinction
- Responsive behavior

### Room End and Continuity

- Room Ended state
- Disabled chat
- Back to hall
- Open a room
- People You Watched With

### Reliability, Security and Accessibility

- Reconnect reconcile
- Authorization
- Capacity/ban/private
- Keyboard
- Screen reader
- Reduced motion
- Performance

Kesin wave ayrımını Codex mevcut Room mimarisine göre düzenleyebilir.

Ancak Room shell, participant layout ve global shell exclusion aynı capability içinde birlikte doğrulanmalıdır.

---

## 47. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Room participant görünümü görsel referansla yan yana karşılaştırılmıştır
- Video ana görsel odaktır
- Chat sürekli erişilebilirdir
- Desktop ana denge yaklaşık `75/25` veya eşdeğer kontrollü chat genişliğidir
- Chat okunamayacak kadar daralmamaktadır
- Global header görünmemektedir
- Logo görünmemektedir
- Social Rail görünmemektedir
- Minimal context bar doğru çalışmaktadır
- Oda adı, host ve menü kontrollü görünmektedir
- Participant host-only controls görmemektedir
- Host view ayrı dashboard’a dönüşmemiştir
- Host actions backend’de authorize edilmektedir
- End Room confirmation kullanmaktadır
- End Room bütün client’ları Room Ended state’ine taşımaktadır
- Kick ve ban backend’de enforce edilmektedir
- Private room policy korunmaktadır
- Capacity policy korunmaktadır
- Ban invite ile bypass edilememektedir
- Player yalnız gerçek desteklenen kontrolleri göstermektedir
- Aura thumbnail’den kontrollü biçimde doğmaktadır
- Aura metin kontrastını bozmamaktadır
- Chat büyük renkli baloncuk sistemine dönüşmemiştir
- Realtime chat duplicate üretmemektedir
- Reconnect ekranı boşaltmamaktadır
- Player reconnect sonrası authoritative state’e dönmektedir
- Cinematic mode videoyu genişletmektedir
- Cinematic mode chat’i erişilebilir tutmaktadır
- Fullscreen ile cinematic mode birbirine karışmamaktadır
- Room Ended state’i açık sonraki adımlar sunmaktadır
- Ended room’da chat gönderilememektedir
- People You Watched With yalnız gerçek ve güvenli veri kullanmaktadır
- Sahte avatar, participant veya message yoktur
- Loading lokal skeleton/state kullanmaktadır
- Tam sayfa spinner yoktur
- Room full, banned, access denied ve player unavailable state’leri tamamlanmıştır
- Keyboard ve focus davranışı tamamlanmıştır
- Screen reader chat ve Room state’lerini anlamlı okumaktadır
- Reduced motion desteklenmektedir
- Normal, geniş ve dar desktop QA yapılmıştır
- Player remount veya playback reset problemi yoktur
- Typecheck ve build geçmiştir
- İlgili frontend, backend, realtime ve E2E testleri geçmiştir
- En az iki participant ve bir host ile uçtan uca test yapılmıştır
- Reconnect, kick, ban, end-room ve cinematic test edilmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 48. Son Tasarım Hükmü

Room ekranı Vibehall’ın bir sayfası değil, Vibehall’ın kendisidir.

Doğru participant deneyimi:

- Kullanıcı odaya girer
- Video hemen karşısındadır
- Chat yanında sessizce akar
- İnsanların orada olduğunu hisseder
- Arayüzü çözmek zorunda kalmaz

Doğru host deneyimi:

- Aynı sade Room içinde kalır
- Yalnız gerektiğinde yönetim araçlarına ulaşır
- Host olduğu için ayrı bir kontrol merkezine taşınmaz
- Odayı ve insanları güvenle yönetebilir

Doğru cinematic deneyim:

- Video daha fazla alan kazanır
- Atmosfer güçlenir
- Chat kaybolmaz
- Room’un özü değişmez

Doğru Room Ended deneyimi:

- Odanın bittiğini açıkça söyler
- Kullanıcıyı boşlukta bırakmaz
- Hall’a, yeni bir odaya veya tanıştığı insanlara doğru doğal devam sunar

Bu tasarım paketinin başarı ölçütü çok gelişmiş bir video player veya chat sistemi yapmak değildir.

Başarı ölçütü:

> Kullanıcının video ve chat dışında hiçbir şeyi düşünmeden başka insanlarla aynı anda aynı şeyin içinde olduğunu hissedebilmesidir.