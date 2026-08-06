# Discover Design Package

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Discover Design Package** görseli, Vibehall’ın oda keşif ekranının onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Discover ekranındaki oda grid’inin başrolünü, arama ve filtrelerin ikincil konumunu, oda kartlarının bilgi hiyerarşisini, masaüstü shell yapısını ve kullanıcıya “şu anda burada neler oluyor?” hissinin nasıl aktarılacağını bağlayıcı biçimde temsil eder.

Ancak görselde bulunan bütün navigasyon bölümleri, sağ yan paneller, global arama seçenekleri, kategoriler, sayaçlar ve oda bilgileri mevcut ürün özelliği olarak yorumlanamaz. Uygulama gerçek Discover API kontratlarını, mevcut oda alanlarını, kategori modelini ve canonical ürün kurallarını kullanmalıdır.

Discover yalnızca `live` ve `public` odaları gösterir. Private odalar Discover’da hiçbir zaman görünmez. Misafirler Discover’ı görebilir, fakat bir odaya katılmak için auth gerekir.

---

## 1. Ekranın Ana Amacı

Discover ekranının temel amacı şudur:

> Kullanıcıya Vibehall’da şu anda açık olan odaları hızlı, anlaşılır ve atmosferik biçimde göstermek.

Kullanıcı bu ekranda:

- Şu anda açık odaları görebilmeli
- Hangi odaların aktif olduğunu anlayabilmeli
- Oda başlığı, host ve içerideki insan varlığını hızlıca tarayabilmeli
- Arama, kategori ve sıralama kullanabilmeli
- Bir odaya girmek için ne yapacağını düşünmemeli
- Hiç oda yoksa veya sonuç bulunamadıysa açık bir sonraki adım görebilmelidir

Discover’ın görevi veri yönetmek değil, kullanıcının bir odaya denk gelmesini sağlamaktır.

Ana ilke:

> Discover bir dashboard değil, açık odaların görüldüğü dijital koridordur.

---

## 2. Görsel Odağı

Discover ekranındaki görsel hiyerarşi şu sırayla ilerlemelidir:

1. Açık oda grid’i
2. Oda thumbnail’leri
3. Oda adı ve Live durumu
4. Host ve içerideki kişi sayısı
5. Arama, kategori ve sıralama
6. İkincil navigasyon ve yardımcı yüzeyler

Görselde üstte arama ve filtre alanı görünür durumdadır; ancak ekranın asıl odağı bu kontroller değil, altındaki odalardır.

Kullanıcı ekrana girdiğinde ilk hissi:

> “Burada şu anda girilebilecek odalar var.”

olmalıdır.

---

## 3. Kilitli Kompozisyon

### 3.1 Desktop ana yapı

Desktop Discover üç temel alana ayrılabilir:

- Global shell veya navigasyon
- Ana Discover içerik alanı
- İsteğe bağlı yardımcı yan yüzey

Ana içerik alanı şu sırayı korur:

1. Sayfa başlığı ve kısa açıklama
2. Search / category / sort kontrolleri
3. Kategori kısayolları, gerçekten gerekliyse
4. Live room count veya kısa sonuç bilgisi
5. Oda grid’i
6. Pagination veya load more

Oda grid’i ekranın en büyük ve en baskın yüzeyidir.

---

### 3.2 Sol social/navigation alanı

Görselde solda geniş bir kalıcı social navigasyon bulunmaktadır.

Bu alan görsel kompozisyon örneğidir ve kesin uygulama zorunluluğu değildir.

Mevcut onaylanmış global shell kararlarına göre:

- Social Rail yalnız masaüstünde yardımcı yüzey olabilir
- Ana Discover içeriğiyle yarışmamalıdır
- Açık veya kapalı davranışı mevcut shell planına uymalıdır
- Discover’a özel ikinci bir büyük sidebar oluşturulmamalıdır

Görseldeki sol alandaki şu öğeler ürün kontratına göre değerlendirilmelidir:

- Friends
- Messages
- Invites
- People You Watched With
- Blocked
- Profile
- Settings
- Help & Support

Bunlar zaten mevcut social/navigation sisteminden geliyorsa kullanılabilir. Discover için yeni bir navigasyon mimarisi oluşturulmaz.

---

### 3.3 Sağ yardımcı yüzey

Görselde sağ tarafta:

- Trending now
- Popular tags
- How it works

panelleri bulunmaktadır.

Bunlar **kilitli ürün özellikleri değildir**.

#### Trending now

Mevcut backend gerçek ve güvenilir trending verisi üretmiyorsa eklenmez.

Sırf görseli doldurmak için:

- Sahte trend sırası
- Hard-coded oda listesi
- Yapay popülerlik skoru
- Tahminî kullanıcı sayısı

gösterilemez.

#### Popular tags

Mevcut kategori sistemi yeterliyse ayrı tag sistemi oluşturulmaz.

Tag ve category kavramları sessizce birbirine karıştırılamaz.

#### How it works

Discover ana akışını boğmuyorsa ve onboarding ihtiyacı varsa kısa yardımcı yüzey olabilir.

Ancak sürekli görünmesi zorunlu değildir.

Bu sağ alan:

- Kaldırılabilir
- Daha küçük yardım kartına dönüştürülebilir
- Geniş ekranlarda gösterilebilir
- Dar masaüstünde gizlenebilir

Ana oda grid’ini daraltamaz.

---

## 4. Sayfa Başlığı ve Açıklama

Ana başlık:

> Discover

Destekleyici açıklama örneği:

> See what’s happening in Vibehall right now.

Bu dil uygundur.

Metin:

- Kısa
- Doğrudan
- Atmosferik fakat anlaşılır
- Pazarlama paragrafına dönüşmeyen

bir yapıda olmalıdır.

Başlık Manrope, açıklama Inter kullanır.

---

## 5. Arama Sistemi

Discover araması yalnız mevcut ürün kontratına göre çalışmalıdır.

Desteklenen gerçek alanlar:

- Room title
- Host username veya display name
- Category

Mevcut ürün kurallarına göre Discover araması title, host ve category üzerinde çalışabilir.

### Arama placeholder’ı

Görselde:

> Search rooms, videos or people…

yazmaktadır.

Bu metin bağlayıcı değildir ve düzeltilmelidir.

Global kullanıcı dizini veya genel people search yoktur.

Daha doğru örnek:

> Search rooms, hosts or categories…

veya daha sade:

> Search live rooms…

“Videos” ifadesi yalnız backend gerçekten video title üzerinde arama yapıyorsa kullanılabilir.

“People” genel kullanıcı araması anlamına gelecek biçimde kullanılmamalıdır.

### Arama davranışı

- Debounce kullanılabilir
- Kullanıcı yazarken bütün ekran blink etmez
- Mevcut sonuçlar yeni sonuç gelene kadar korunabilir
- Arama temizlenebilir
- Keyboard ile kullanılabilir
- Search sonucu yoksa ayrı empty state gösterilir
- Query URL veya router state içinde korunabilir, mevcut custom router yapısına uygun biçimde

---

## 6. Kategori Sistemi

Kategori seçimi mevcut aktif category kayıtlarını kullanmalıdır.

Görselde örnek kategoriler:

- Music
- Chill
- Gaming
- Study
- Anime
- Podcast
- Lo-fi
- Movie
- Talk
- Other

bulunmaktadır.

Bunlar temsilîdir.

Gerçek kategori listesi backend’den veya mevcut canonical category kaynağından gelmelidir.

### Kategori davranışı

- `All` varsayılan olabilir
- Tek kategori seçimi mevcut kontrata uygunsa kullanılır
- Çoklu filtre ancak backend gerçekten destekliyorsa uygulanır
- Seçili kategori açıkça görünür
- Yalnız renkle anlatılmaz
- Category pill’leri küçük ve sakin kalır
- Çok kategori varsa yatay scroll, dropdown veya “more” davranışı düşünülebilir

Hard-coded kategori listesi kullanılmaz.

---

## 7. Sıralama Sistemi

Mevcut ürün kurallarına göre Discover şu sıralamaları destekleyebilir:

- New
- Active
- Nearly full

Görselde:

> Sort by: Live

bulunmaktadır.

Bu yalnız görsel örneğidir.

Sıralama seçenekleri gerçek backend kontratına göre düzenlenmelidir.

Örnek kullanıcı dili:

- Newest
- Most active
- Nearly full

Sıralama:

- Search ve category ile birlikte çalışır
- URL veya local state içinde korunabilir
- Sonuçları yenilerken loading blink oluşturmaz
- Değiştirildiğinde scroll davranışı kontrollü olur

Yeni bir ranking algoritması sırf görsel için eklenmez.

---

## 8. Filtreler

Görselde ayrı bir `Filters` butonu vardır.

Bu buton yalnız gerçekten ek filtreler bulunuyorsa kullanılmalıdır.

Örnek gerçek filtreler:

- Category
- Capacity availability
- Newest/active sorting
- Gerekirse mevcut backend tarafından desteklenen başka room filtreleri

Filtre paneli:

- Desktop’ta popover veya side panel
- Mobilde bottom sheet
- Apply/Clear davranışı
- Aktif filtre sayısı
- Erişilebilir focus yönetimi

kullanabilir.

Arama, category ve sort zaten görünürse gereksiz ikinci bir filtre sistemi oluşturulmamalıdır.

---

## 9. Live Room Count

Görselde:

> 432 rooms live

yazmaktadır.

Bu sayı yalnız backend gerçek toplam count döndürüyorsa gösterilebilir.

Count:

- Mevcut filtrelere göre güncellenebilir
- Tahmin edilmez
- Hard-coded olmaz
- Count endpoint’i yoksa kaldırılır
- İnsan yoğunluğu veya başarı algısı yaratmak için şişirilmez

Hiç oda yoksa `0 rooms live` yerine atmosferik empty state tercih edilebilir.

---

## 10. Oda Grid’i

Oda grid’i Discover’ın ana yüzeyidir.

### Desktop kolon yapısı

Kolon sayısı viewport genişliğine göre değişebilir.

Başlangıç referansı:

- Geniş desktop: 4 kolon
- Normal desktop: 3 kolon
- Dar desktop/tablet: 2 kolon
- Mobil: 1 kolon veya kontrollü 2 küçük kolon, okunabilirlik uygunsa

Görseldeki 4 kolon düzeni geniş desktop için uygundur.

### Grid ilkeleri

- Kartlar eşit görsel ritim taşır
- Thumbnail oranı korunur
- Metin taşmaları yönetilir
- Kartlar arasında yeterli nefes olur
- Grid çok sıkışık veya dev kartlardan oluşmaz
- Bir satırda farklı yükseklikler kaotik görünmez

---

## 11. Oda Kartı

Oda kartı izlenecek video değil, girilebilecek yer hissi vermelidir.

### 11.1 Zorunlu içerik

- Thumbnail
- Oda adı
- Host bilgisi
- Live durumu
- İçerideki kişi sayısı
- Gerekirse kategori

### 11.2 Temsilî içerikler

Görselde:

- Birden fazla avatar
- `+6`, `+7` gibi sayaçlar
- Sağ altta ok butonu
- Emoji
- Category pills
- Verified benzeri ikon

bulunmaktadır.

Bunlar gerçek kontrata göre değerlendirilir.

### 11.3 Host bilgisi

Host:

- Avatar, gerçekten mevcutsa
- Display name
- Username gerekirse
- Küçük kimlik alanı

ile gösterilebilir.

Host için görseldeki mor verified ikonu kullanılmaz; verified sistemi yoktur.

### 11.4 Participant count

Gerçek ve güncel room occupancy kullanılır.

Sahte avatar veya participant listesi gösterilmez.

Katılımcı avatarları yalnız güvenli ve mevcut API sağlıyorsa kullanılabilir.

Aksi hâlde:

- İnsan ikonu
- Sayı

yeterlidir.

### 11.5 Giriş davranışı

Kartın tamamı tıklanabilir olabilir.

Büyük `Join Room` butonu sürekli görünmek zorunda değildir.

Hover veya focus sırasında:

- Ok veya kısa giriş affordance’ı belirginleşebilir
- Kart hafif yükselir
- Thumbnail hafif yaklaşır
- Aura güçlenir

Kullanıcı aksiyonu yine anlaşılır olmalıdır.

---

## 12. Oda Kartı Aura Sistemi

Thumbnail’den doğan aura yaklaşımı bağlayıcıdır.

Her kart:

- Kendi thumbnail tonlarından hafif ışık alabilir
- Grid içinde diğer kartlardan ayrışabilir
- Fakat sürekli neon glow kullanamaz

Aura:

- Kart arkasında
- Düşük opaklıkta
- Hover sırasında biraz güçlenen
- Metin alanını bozmayan

bir yapıdadır.

Thumbnail yüklenmediyse nötr yüzey kullanılır.

---

## 13. Live Göstergesi

Live göstergesi:

- Küçük
- Açık
- Metin + renk
- Thumbnail’in köşesinde
- Yavaş nefes alan
- Reduced motion’da sabit

olmalıdır.

Görselde büyük kırmızı `LIVE` badge vardır.

Kesin tasarım sistemine göre:

- Sürekli büyük harf yerine `Live` tercih edilebilir
- Success/live rengi `#5ED7A0` sistemine göre uygulanabilir
- Gerekiyorsa sıcak mercan tonlu özel live badge kullanılabilir, fakat sistemle çelişmemelidir

Live durumunun gerçek room state’inden geldiği doğrulanmalıdır.

---

## 14. Private Room ve Access Kuralları

Discover yalnız public room gösterir.

Aşağıdaki odalar listelenemez:

- Private room
- Ended room
- Closed room
- Draft room, zaten mevcut değil
- Kullanıcının block ilişkisi nedeniyle görmemesi gereken room
- Moderasyon veya account policy nedeniyle gizlenmesi gereken room

Private odaların thumbnail, başlık veya host bilgisi Discover response’una sızdırılamaz.

Block ilişkisi Discover sonucunda backend authoritative biçimde uygulanmalıdır.

---

## 15. Misafir Kullanıcı Davranışı

Misafir kullanıcı Discover’ı görebilir.

Bir public room kartına tıkladığında:

- Bağlamsız login ekranına fırlatılmaz
- Room Context Auth Gate açılır
- Tıklanan room bilgisi korunur
- Auth sonrası hedef room’a geri dönülür

Discover kartı misafire tamamen disabled görünmemelidir.

Aksiyon açık kalır; auth geçişi doğal biçimde devreye girer.

---

## 16. Giriş Yapmış Kullanıcı Davranışı

Giriş yapmış kullanıcı kartı seçtiğinde:

- Room access backend tarafından doğrulanır
- Capacity
- Ban
- Block
- Room state
- Feature availability

kontrollerinden geçilir.

Kart tıklaması yalnız frontend state’e güvenerek kullanıcıyı içeri kabul edemez.

---

## 17. Pagination ve Load More

Görselde:

> Load more rooms

kullanılmıştır.

Bu yaklaşım mevcut API pagination kontratına göre uygulanabilir.

Olası davranışlar:

- Load more
- Cursor pagination
- Page pagination
- Infinite scroll, yalnız gerçekten faydalıysa

Tercih edilen launch davranışı:

- Kontrollü `Load more`
- Mevcut kartların korunması
- Buton içinde lokal loading
- Scroll pozisyonunun bozulmaması

Infinite scroll gereksiz karmaşıklık yaratıyorsa eklenmez.

---

## 18. Loading Davranışı

### İlk yükleme

Room card skeleton grid’i gösterilir.

Skeleton:

- Kart oranını korur
- Thumbnail alanını ayırır
- Metin satırlarını temsil eder
- Layout shift’i azaltır

### Search/filter yenilemesi

Mevcut sonuçlar mümkün olduğunca korunur.

- Grid tamamen kaybolmaz
- Tam sayfa spinner yok
- Üst filtre alanı kullanılabilir kalır
- Lokal loading göstergesi olabilir

### Load more

Yalnız alt bölüm veya buton loading gösterir.

---

## 19. Empty State’ler

Discover için en az üç ayrı empty state vardır.

### 19.1 Hiç açık oda yok

Örnek:

> The hall is quiet right now.

> Open the first room.

Ana CTA:

> Open a room

Bu durumda sahte oda gösterilmez.

### 19.2 Search sonucu yok

Örnek:

> No rooms match your search.

Aksiyonlar:

- Search’ü temizle
- Filtreleri sıfırla
- Yeni oda aç

### 19.3 Filter sonucu yok

Örnek:

> No live rooms match these filters.

Aksiyon:

> Clear filters

Bu state’ler System States Board dilini kullanır.

---

## 20. Hata Davranışı

### Discover verisi alınamadı

Sayfa-level lokal hata:

> We couldn’t load live rooms.

Aksiyon:

> Try again

Global shell ve filtre alanı mümkünse korunur.

### Bir kart thumbnail’i yüklenemedi

Yalnız kart içinde fallback gösterilir.

Bütün grid hata durumuna geçmez.

### Count veya side panel verisi başarısız

Ana oda grid’i çalışıyorsa sayfa kullanılabilir kalır.

Trending veya yardımcı panel hatası tüm Discover’ı engelleyemez.

---

## 21. Realtime Güncellemeler

Discover canlı room state’lerini güncelleyebilir.

Realtime davranış:

- Oda count güncellenebilir
- Room ended olduğunda kart sakin biçimde kaldırılabilir veya state değiştirebilir
- Occupancy değişebilir
- Yeni room eklenebilir

Ancak:

- Grid sürekli zıplamamalı
- Kart sırası agresif biçimde değişmemeli
- Kullanıcının hover/focus ettiği kart kaybolmamalı
- Sayfa blink etmemeli

Yeni room geldiğinde küçük bir:

> New rooms available

indikasyonu daha güvenli olabilir.

Kullanıcı isterse listeyi yenileyebilir.

---

## 22. Sağ Panelin Teknik Yorumu

Görselin sağındaki üç panel ayrı ayrı değerlendirilmelidir.

### Trending now

Yalnız gerçek ranking verisi varsa.

### Popular tags

Mevcut category sisteminin kopyası olmamalı.

### How it works

Onboarding veya ilk kullanım için kontrollü olabilir.

Bu paneller ana Discover capability’sinin parçası değildir.

Wave kapsamında ekranı gereksiz büyütüyorlarsa kaldırılabilir.

Kilitli olan sağ panel değil, oda grid’inin ana odak olmasıdır.

---

## 23. Create Room Yardımcı Kartı

Görselde sol altta ayrı `Create a room` kartı vardır.

Bu kart:

- Global Create Room erişimi zaten açıksa zorunlu değildir
- Discover içinde doğal bir secondary CTA olarak kullanılabilir
- Oda grid’inden daha güçlü görünmemelidir
- Kullanıcıyı boşlukta bırakmamak için destekleyici olabilir

Sahte illüstrasyon veya büyük neon kart zorunlu değildir.

---

## 24. Navigasyon ve Global Shell

Discover normal application shell’ini kullanır.

Desktop:

- Home
- Discover aktif
- Create Room
- Kullanıcı kontrolleri
- Gerekirse Social Rail

Görselde üst global arama alanı bulunmaktadır.

Bu alan Discover’ın kendi aramasıyla tekrar ediyorsa iki ayrı search gösterilmemelidir.

Ana karar:

> Discover’da yalnızca bir net room search deneyimi bulunmalıdır.

Global header search mevcut ürünün genelinde zorunlu değilse kaldırılır.

Özellikle `people search` çağrışımı yapan global search yasaktır.

---

## 25. Responsive Davranış

Mobil Discover ayrı bir görsel paketle daha sonra netleştirilebilir.

Bu desktop wave içinde yalnız güvenli responsive davranış sağlanacaksa:

- Global sidebar kaldırılır
- Minimal header kullanılır
- Search tam genişlik olur
- Category yatay scroll veya filter sheet’e geçebilir
- Sort/filter bottom sheet olabilir
- Grid 1 kolon veya kontrollü 2 kolon olur
- Sağ yardımcı panel kaldırılır
- Room kartlarının metinleri okunabilir kalır
- Touch target’lar minimum `44×44px`
- Hover gerektiren işlem olmaz

Desktop kompozisyon mobilde körlemesine küçültülemez.

---

## 26. Erişilebilirlik

Aşağıdaki maddeler zorunludur:

- Search görünür label veya accessible name taşır
- Select ve filter kontrolleri klavyeyle çalışır
- Category seçimi screen reader’a açıkça bildirilir
- Oda kartının tıklanabilir alanı anlamlı accessible name taşır
- Kart içinde iç içe çelişkili link/button yapısı oluşturulmaz
- Live durumu yalnız renk ile anlatılmaz
- Participant count anlamlı okunur
- Focus halkası görünürdür
- Grid keyboard ile gezilebilir
- Load more sonucu uygun biçimde duyurulur
- Yeni realtime room’lar agresif live region ile okunmaz
- Contrast WCAG AA hedefini karşılar
- Reduced motion desteklenir

Örnek accessible card label:

> Join “Night drive”, hosted by wavee, 8 people inside.

---

## 27. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Room isimleri
- Thumbnail’ler
- Host isimleri
- Avatarlar
- Participant sayıları
- `432 rooms live`
- Trending sıralaması
- Popular tags
- How it works
- Verified benzeri host ikonları
- Emoji
- Kategori listesi
- Global search placeholder’ı
- Notification sayısı
- Social sidebar sayaçları
- Room arrows
- Footer tarihi
- Load more metni
- Mor/pembe renkler

Gerçek backend verisi ve kesin tasarım tokenları kullanılmalıdır.

---

## 28. Otomatik Uygulanmayacak Görsel Unsurlar

### Global people search

Yasaktır. Genel kullanıcı dizini veya araması yoktur.

### Trending system

Mevcut değilse eklenmez.

### Popular tag sistemi

Category sisteminden ayrı yeni tag altyapısı kurulmaz.

### Verified host ikonu

Verified sistemi yoktur.

### Participant avatar listesi

Gerçek ve güvenli API yoksa gösterilmez.

### Global room count

Gerçek total count yoksa gösterilmez.

### Analytics veya popularity score

Yeni ranking/analytics sistemi eklenmez.

### How it works paneli

Gerekli değilse kaldırılabilir.

### İkinci search alanı

Header search ve Discover search aynı anda kullanılmaz.

---

## 29. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Global kullanıcı araması eklemek
- People directory oluşturmak
- Private room’ları listelemek
- Ended room’ları live gibi göstermek
- Trending algoritması eklemek
- Popular tags sistemi eklemek
- Verified badge sistemi eklemek
- Follower/like/popularity katmanı eklemek
- Sahte participant avatarları göstermek
- Hard-coded room count kullanmak
- Sahte live room üretmek
- Oda kartlarını YouTube video kartına dönüştürmek
- Büyük Join butonlarını her kartta sürekli göstermek
- Discover’ı dashboard’a çevirmek
- Grid alanını yardımcı paneller uğruna daraltmak
- Aynı sayfada iki farklı room search kullanmak
- Yeni CSS framework veya router eklemek
- Private room metadata’sını response’ta sızdırmak

---

## 30. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu alanlarda uyarlama yapabilir:

- Mevcut Discover API response’una göre card alanları
- Gerçek category ve sorting enum’ları
- Pagination veya cursor yapısı
- Kolon sayıları
- Sağ panelin kaldırılması
- Search/filter toolbar yerleşimi
- Existing Social Rail ile entegrasyon
- Room card reusable component kullanımı
- Thumbnail fallback
- Custom router query state
- Responsive breakpoint
- Accessibility için ölçü ve kontrast ayarı

Bu uyarlamalar oda grid’inin ana rolünü ve ekranın keşif karakterini değiştiremez.

---

## 31. Mevcut Teknik Yapıyla Uyum

Implementation şu gerçekleri korumalıdır:

- React 19 + Vite + TypeScript
- Custom router
- React Router yok
- Tailwind yok
- Vanilla CSS
- Mevcut API client
- HTTP fallback ve realtime state birlikte çalışır
- Discover yalnız gerçek backend room verisini kullanır
- Block/private/live politikaları backend authority olarak kalır
- Category backend kaynağından gelir
- Search title/host/category sınırında kalır
- Auth gate Room Context Auth akışına bağlanır

---

## 32. Performans Yaklaşımı

Discover çok sayıda görsel ve kart taşıyabilir.

Bu nedenle:

- Thumbnail lazy loading
- Stable aspect ratio
- Image fallback
- Gereksiz büyük görsel indirmeme
- Component memoization, gerçekten gerekiyorsa
- Search debounce
- Request cancellation veya stale response koruması
- Pagination
- Realtime update batching

değerlendirilmelidir.

Ancak performans optimizasyonu için kullanıcıya eski veya yanlış room state gösterilemez.

---

## 33. Wave Kapsamı Önerisi

Bu görsel şu capability bütünlerine ayrılabilir:

### Discover Visual Foundation

- Sayfa shell
- Heading
- Search/filter toolbar
- Grid
- RoomCard entegrasyonu

### Query and Filter Behavior

- Search
- Category
- Sorting
- URL/router state
- Pagination/load more

### Discover States

- Initial skeleton
- No rooms
- No results
- Error
- Realtime refresh

### Access and Policy Verification

- Public/live only
- Private room leakage testi
- Block policy
- Guest auth gate
- Capacity/ban transition

### Responsive and Accessibility Pass

- Dar ekran
- Keyboard
- Screen reader
- Touch
- Reduced motion

Kesin wave bölünmesini Codex mevcut kod yapısına göre düzenleyebilir. Ancak Discover UI, query state ve room policy birlikte uçtan uca doğrulanmalıdır.

---

## 34. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Discover ekranı görsel referansla yan yana karşılaştırılmıştır
- Oda grid’i ekranın ana odağıdır
- Search, category ve sorting grid’i boğmamaktadır
- Yalnız public ve live odalar gösterilmektedir
- Private room metadata’sı sızmamaktadır
- Block ilişkileri doğru uygulanmaktadır
- Search yalnız izin verilen alanlarda çalışmaktadır
- Global people search eklenmemiştir
- Kategori listesi gerçek backend kaynağından gelmektedir
- Hard-coded room count yoktur
- Sahte trending veya tag verisi yoktur
- Room kartları gerçek veri kullanmaktadır
- Participant count sahte değildir
- Verified veya popularity sistemi eklenmemiştir
- İlk yüklemede skeleton vardır
- Search/filter yenilemeleri loading blink üretmez
- No rooms ve no results state’leri ayrıdır
- Load more veya pagination çalışmaktadır
- Guest kullanıcı room kartından doğru Auth Gate’e geçmektedir
- Auth sonrası hedef Room bağlamı korunmaktadır
- Ended/full/banned durumları doğru ele alınmaktadır
- Thumbnail lazy loading ve fallback çalışmaktadır
- Keyboard/focus davranışı tamamlanmıştır
- Screen reader card label’ları anlamlıdır
- Desktop ve dar ekran QA yapılmıştır
- Typecheck ve build geçmiştir
- İlgili frontend/backend testleri geçmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 35. Son Tasarım Hükmü

Discover ekranı bir içerik kataloğu veya video arama motoru değildir.

Bir sosyal medya feed’i de değildir.

Discover:

> Şu anda açık olan odaların kapılarının görüldüğü sade ve yaşayan bir koridordur.

Doğru deneyim:

- Kullanıcı odayı görür
- İçeride insan olduğunu hisseder
- Odanın ne olduğunu hızlıca anlar
- Filtrelerle boğuşmaz
- Kartın bir video değil, girilebilir bir yer olduğunu hisseder
- Tek hareketle Room’a doğru ilerler

Bu tasarım paketinin başarı ölçütü çok sayıda oda kartı göstermek değildir.

Başarı ölçütü:

> Kullanıcının Vibehall’da şu anda ne olduğunu birkaç saniyede anlaması ve ilgisini çeken bir odaya doğal biçimde girebilmesidir.

