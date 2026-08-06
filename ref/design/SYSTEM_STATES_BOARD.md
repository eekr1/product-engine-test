# System States Board

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **System States Board** görseli, Vibehall’ın loading, empty, error, offline, reconnect, işlem sonucu ve Room lifecycle durumları için onaylanmış ortak görsel ve davranış referansıdır.

Bu board tek bir sayfayı temsil etmez. Ürünün bütün ekranlarında tekrar kullanılacak ortak durum sistemini tanımlar.

Görsel yalnızca genel ilham kaynağı değildir. Aşağıdaki kararları bağlayıcı biçimde temsil eder:

- Tam sayfa spinner kullanılmaması
- İlk yüklemede içerik yapısına uygun skeleton gösterilmesi
- Sonraki yenilemelerde mevcut içeriğin korunması
- Lokal işlemlerde yalnız ilgili alanın loading durumuna geçmesi
- Empty state’lerde sahte içerik kullanılmaması
- Teknik hata kodlarının kullanıcıya gösterilmemesi
- Offline ve reconnect durumlarında mevcut bağlamın korunması
- Her durumda kullanıcıya açık bir sonraki hareket sunulması
- Room lifecycle durumlarının ortak ve tutarlı bir dil kullanması
- Toast ve feedback mesajlarının kısa, sakin ve bağlama uygun olması
- State ekranlarının Vibehall atmosferini bozmaması

Ancak görselde bulunan bütün state isimleri, ikonlar, açıklamalar, loading aşamaları ve CTA metinleri mevcut ürün davranışı olarak doğrudan yorumlanamaz.

Implementation her ekranın gerçek API, realtime, lifecycle ve kullanıcı yetkisi durumlarına göre yapılmalıdır.

> **Ana ilke:** Kullanıcı hiçbir zaman sistemin ne yaptığını tahmin etmek zorunda kalmamalı; fakat arayüz de her küçük işlemde dikkat istememelidir.

---

## 1. Board’un Sistem İçindeki Rolü

System States Board şu ekranların tamamı için ortak referanstır:

- Home
- Discover
- Create Room
- Room
- Auth
- Social Hub
- Messages ve DM
- Profile
- Settings
- Utility sayfaları
- Admin
- Modal ve panel akışları

Her sayfa loading, empty veya error durumunu kendi zevkine göre yeniden tasarlamamalıdır.

Ortak state bileşenleri merkezi sistemden türetilmelidir.

Önerilen ortak bileşen aileleri:

- `Skeleton`
- `InlineLoader`
- `ButtonLoader`
- `EmptyState`
- `InlineError`
- `PageError`
- `OfflineBanner`
- `ReconnectBanner`
- `Toast`
- `ActionStatus`
- `RoomStateView`
- `MediaPlaceholder`
- `RetryAction`

---

## 2. Değişmez State Prensipleri

Aşağıdaki kurallar bütün ürün boyunca korunmalıdır:

- Tam sayfa spinner yoktur
- İlk yüklemede skeleton kullanılır
- Sonraki refresh sırasında mevcut içerik korunur
- Lokal işlem yalnız ilgili bileşeni etkiler
- Sahte oda, kullanıcı veya mesaj gösterilmez
- Teknik hata kodu kullanıcıya gösterilmez
- Raw backend exception gösterilmez
- Hata durumunda mümkünse retry veya güvenli alternatif sunulur
- Kullanıcı bağlamı gereksiz yere kaybolmaz
- Reconnect sırasında ekran boşaltılmaz
- Empty state ile error state birbirine karıştırılmaz
- Loading ile disabled state aynı şey değildir
- Başarı feedback’i kısa ve sakin olmalıdır
- Kritik hata ile küçük lokal hata aynı ağırlıkta gösterilmemelidir

Her state şu üç soruya cevap vermelidir:

1. Ne oluyor?
2. Kullanıcı beklemeli mi, bir şey yapmalı mı?
3. Sonraki güvenli hareket nedir?

---

## 3. State Hiyerarşisi

State’ler etkilerine göre dört seviyeye ayrılır.

### 3.1 Bileşen seviyesi

Örnekler:

- Buton loading
- Thumbnail loading
- Tek form alanı hatası
- Tek mesaj gönderim hatası
- Tek kart verisi yüklenemedi

Bu durum bütün sayfayı etkilemez.

### 3.2 Bölüm seviyesi

Örnekler:

- Discover room listesi yüklenemedi
- Social sekmesi yüklenemedi
- Conversation history yüklenemedi
- Profile secondary content yüklenemedi

Global shell ve diğer alanlar korunur.

### 3.3 Sayfa seviyesi

Örnekler:

- Ana sayfa verisi tamamen alınamadı
- Profile bulunamadı
- Auth route kullanılamıyor
- Admin surface yüklenemedi

Sayfa merkezli state kullanılabilir; fakat global shell mümkünse korunur.

### 3.4 Kritik uygulama seviyesi

Yalnız gerçekten uygulamanın çalışamayacağı durumlarda kullanılır:

- Session/bootstrap çöktü
- Uygulama bundle kritik hata verdi
- Zorunlu backend capability tamamen erişilemez
- Güvenli fallback mümkün değil

Bu seviye nadir kullanılmalıdır.

---

## 4. Loading States

Loading sistemi dört ana duruma ayrılır:

1. Initial loading
2. Content refresh
3. Inline / load more
4. Image / media loading

---

## 5. Initial Loading

Initial loading, kullanıcı bir ekranı ilk kez açtığında kullanılır.

### 5.1 Ana davranış

İlk yüklemede:

- Gerçek içerik yapısına benzeyen skeleton gösterilir
- Sayfa layout’u önceden ayrılır
- Ana shell görünür kalır
- İçerik geldiğinde büyük layout shift oluşmaz
- Skeleton gerçek veri miktarı hakkında sahte iddia oluşturmaz

Örnekler:

- Discover’da room card skeleton
- Social’da user row skeleton
- Messages’da conversation row skeleton
- Room’da player + chat skeleton
- Profile’da avatar + identity skeleton
- Admin’de metric + table skeleton

### 5.2 Skeleton yapısı

Skeleton:

- Gerçek bileşenin yaklaşık geometrisini taşır
- Metin satırlarını nötr bloklarla temsil eder
- Düşük kontrastlıdır
- Hızlı ve parlak shimmer kullanmaz
- Çok uzun süre dikkat çekmez
- Reduced motion’da statik olabilir

### 5.3 Skeleton sayısı

Ekranı sahte veriyle dolu gösteren onlarca skeleton kullanılmaz.

Görünen viewport’u dolduracak kadar yeterlidir.

Örnek:

- Discover için 6–8 kart
- Social için 5–7 liste satırı
- Conversation için birkaç mesaj grubu

Kesin sayı responsive yapıya göre belirlenebilir.

---

## 6. Content Refresh

Kullanıcı daha önce yüklenmiş içeriği görüntülerken veri yeniden alınırsa mevcut içerik kaybolmamalıdır.

### 6.1 Doğru davranış

- Mevcut içerik ekranda kalır
- Arka planda refresh yapılır
- Küçük bir progress veya güncelleme göstergesi kullanılabilir
- Sonuç geldiğinde içerik sessizce reconcile edilir
- Scroll pozisyonu korunur
- Focus korunur
- Açık modal veya panel gereksiz yere kapanmaz

### 6.2 Yasak davranış

- Kartların skeleton’a dönmesi
- Tüm listenin kaybolması
- Tam ekran spinner
- Sayfanın beyaz/koyu boş yüzeye dönüşmesi
- Filtre veya arama state’inin sıfırlanması
- Kullanıcının bulunduğu scroll noktasının kaybolması

### 6.3 Stale içerik

Mevcut içerik gösterilirken veri eski olabilecekse:

- Gerekiyorsa küçük güncelleme göstergesi
- Başarısız refresh’te mevcut içerik korunabilir
- Kullanıcıya lokal hata bildirimi gösterilebilir

Örnek:

> We couldn’t refresh the rooms. Showing the latest available results.

Bu mesaj yalnız gerçekten faydalıysa kullanılmalıdır.

---

## 7. Inline Loading ve Load More

Inline loading kullanıcı mevcut içeriği kullanmaya devam ederken ek işlem yürütüldüğünde kullanılır.

Örnekler:

- Load more rooms
- Daha eski mesajları yükleme
- Friends listesinin sonraki sayfası
- Admin table pagination
- Bir panelin detayını yükleme

### 7.1 Davranış

- Mevcut içerik korunur
- Yalnız ilgili alt alan loading gösterir
- Load more butonu lokal loading’e geçer
- Aynı işlem iki kez başlatılamaz
- Scroll pozisyonu bozulmaz

### 7.2 Infinite scroll

Infinite scroll yalnız gerçekten gerekli ve güvenilir olduğunda kullanılmalıdır.

Aksi hâlde kontrollü:

> Load more

yaklaşımı tercih edilir.

Infinite scroll kullanılırsa:

- Focus kaybolmaz
- Screen reader yeni öğeleri anlayabilir
- Footer erişilemez hâle gelmez
- Duplicate fetch oluşmaz

---

## 8. Image ve Media Loading

Görsel veya medya yüklenirken bileşen alanı önceden ayrılmalıdır.

### 8.1 Thumbnail loading

- `16:9` alan korunur
- Yumuşak placeholder
- Düşük kontrastlı skeleton
- Gerekirse çok hafif shimmer
- Görsel gelince ani boyut değişimi olmaz

### 8.2 Aura

Thumbnail gelmeden içerikten doğan aura gösterilmez.

Nötr surface kullanılır.

Görsel geldiğinde aura:

- Yumuşak biçimde oluşabilir
- Aniden patlamaz
- Reduced motion’da doğrudan gösterilebilir

### 8.3 Görsel hatası

Görsel yüklenemezse:

- Kırık image ikonu gösterilmez
- Nötr fallback yüzey
- Gerekirse kategori veya genel room ikonu
- Metin bilgisi kullanılabilir kalır

### 8.4 Player loading

Room player alanı:

- Sabit boyutunu korur
- Player skeleton veya kontrollü placeholder gösterir
- Chat mümkünse yüklenmeye devam eder
- Bütün Room loading’e dönmez

---

## 9. Tam Sayfa Spinner Yasağı

Tam sayfa spinner Vibehall’ın standart loading çözümü değildir.

Kullanılmamasının nedenleri:

- Kullanıcı bağlamını kaybeder
- Platform boş veya kırık görünür
- Layout shift yaratır
- Realtime ve refresh işlemlerini ağır hissettirir
- Hangi alanın yüklendiğini açıklamaz
- Kullanıcının diğer kullanılabilir alanları kullanmasını engeller

Görseldeki “kullanılmaz” örneği bu kararı bağlayıcı biçimde temsil eder.

### 9.1 İstisna

Yalnız çok kısa bir auth bootstrap veya güvenli uygulama başlangıcında başka hiçbir UI render edilemiyorsa minimal başlangıç indicator’ı düşünülebilir.

Bu durum:

- Çok kısa sürmeli
- Ürünün normal sayfa state’i olmamalı
- Kullanıcıya sürekli gösterilmemeli

---

## 10. Empty States

Empty state, sistemin düzgün çalıştığı fakat gösterilecek veri bulunmadığı durumdur.

Error değildir.

Empty state’in amacı:

- Durumu açıklamak
- Boşluğu sakin biçimde doldurmak
- Kullanıcıya gerçek ve uygun sonraki hareketi göstermek

Empty state sahte veriyle gizlenmez.

---

## 11. No Rooms State

Hiç live public room yoksa:

> The hall is quiet right now.

Yardımcı metin:

> Open the first room or check back soon.

Ana aksiyon:

> Open a room

Misafir kullanıcı için CTA auth return intent’e bağlanır.

### 11.1 Yasaklar

- Sahte room card
- Örnek kullanıcılar
- Hard-coded live room
- “Popular rooms” adı altında eski veri
- Kırmızı hata mesajı

Bu bir hata değil, gerçek empty state’tir.

---

## 12. No Results State

Search veya filter sonucunda oda bulunmadığında:

> No rooms match your search.

Yardımcı aksiyonlar:

- Clear search
- Clear filters
- Change category

Yeni oda açma CTA’sı ikincil olabilir.

Search sonucu yok durumu ile platformda hiç room olmaması ayrı state’tir.

### 12.1 Filter state korunması

Kullanıcı hangi filtrenin sonuç vermediğini görebilmelidir.

State ekranı filtreleri gizlememelidir.

---

## 13. No Messages State

Kullanıcının arkadaşları var fakat mesajı yoksa:

> No messages yet.

Yardımcı metin:

> Start a conversation with one of your friends.

Aksiyon:

> View friends

veya doğrudan conversation listesi.

Global user search önerilmez.

---

## 14. No Friends State

Kullanıcının hiç arkadaşı yoksa:

> You haven’t made any connections yet.

Yardımcı metin:

> Meet people in rooms and connect with the ones you enjoy watching with.

Ana aksiyon:

> Discover rooms

Görseldeki `Find friends` dili global kullanıcı dizini çağrışımı yapıyorsa kullanılmamalıdır.

---

## 15. No People You Watched With State

Kullanıcı henüz kimseyle ortak Room’da bulunmadıysa:

> No shared rooms yet.

Yardımcı metin:

> Join a room and the people you watch with may appear here.

Aksiyon:

> Enter the hall

Privacy nedeniyle liste boşsa kullanıcıya gizlilik internalleri açıklanmaz.

---

## 16. Diğer Empty State Aileleri

Ortak sistem şu durumları da kapsamalıdır:

### No invites

> No room invites right now.

### No requests

> No pending requests.

### No blocked accounts

> You haven’t blocked anyone.

### No conversations found

> No conversations match your search.

### No admin results

> No records match these filters.

### No reports

> No open reports.

Her state kendi bağlamına göre kısa ve gerçek olmalıdır.

---

## 17. Empty State Görsel Dili

Empty state görseli:

- Küçük soyut ikon
- Hafif aura
- Sade illüstrasyon
- Kontrollü dekoratif yüzey

kullanabilir.

Ancak:

- Büyük maskot zorunlu değildir
- Her state için ayrı ağır asset üretilmez
- İllüstrasyon metinden daha baskın olmaz
- Atmosferi bozan parlak mor/neon kullanılmaz
- Kesin design tokenları uygulanır

Empty state component’i şu parçaları destekleyebilir:

- Icon
- Title
- Description
- Primary action
- Secondary action, nadiren

---

## 18. Error States

Error state sistemin beklenen veriyi veya işlemi tamamlayamadığı durumdur.

Error’lar etki alanına göre gösterilmelidir.

- Alan hatası
- İşlem hatası
- Bölüm hatası
- Sayfa hatası
- Kritik uygulama hatası

Her hata tam sayfa “Something went wrong” ekranına dönüşmemelidir.

---

## 19. Something Went Wrong

Genel sayfa veya bölüm hatası için kullanılabilir.

Örnek:

> Something went wrong.

Yardımcı metin:

> Try again in a moment.

Ana aksiyon:

> Try again

Bu metin yalnız daha özel güvenli hata açıklaması üretilemiyorsa kullanılır.

Mümkün olduğunda daha bağlamsal dil tercih edilir:

- We couldn’t load live rooms.
- We couldn’t load this conversation.
- We couldn’t load your profile.
- We couldn’t connect to the room.

---

## 20. Action Failed

Kullanıcının başlattığı tek bir işlem başarısız olduğunda lokal hata gösterilir.

Örnekler:

- Friend request gönderilemedi
- Invite gönderilemedi
- Message gönderilemedi
- Profile kaydedilemedi
- Room oluşturulamadı
- Admin action tamamlanamadı

Mesaj örneği:

> We couldn’t complete this action. Try again.

Ancak daha özel ve faydalı metin mümkünse tercih edilir.

### 20.1 Lokal kalma

Action failed:

- İlgili form veya buton yakınında
- Toast veya inline message olarak
- Kullanıcının verisini koruyarak
- Retry imkânı sunarak

gösterilir.

Bütün sayfa hata durumuna geçmez.

---

## 21. Teknik Hata Kodları

Kullanıcıya aşağıdakiler doğrudan gösterilmez:

- HTTP status code
- Prisma hata kodu
- Stack trace
- Raw exception
- WebSocket close code
- Internal enum
- Database constraint adı
- Storage key
- Request dump

Örnek kötü mesaj:

> PrismaClientKnownRequestError P2002

Örnek doğru kullanıcı mesajı:

> This username is already taken.

### 21.1 Teknik destek bilgisi

Gerçekten gerekli admin veya support akışında:

- Correlation ID
- Request ID
- Error reference

ayrı ve düşük öncelikli teknik detay olarak gösterilebilir.

Normal kullanıcı ekranında ana mesajın önüne geçemez.

---

## 22. Offline States

Offline state, cihazın internet bağlantısı olmadığında veya backend’e ulaşılamadığında kullanılır.

### 22.1 Genel offline

Örnek:

> You’re offline.

Yardımcı metin:

> Check your connection and try again.

Aksiyon:

> Try again

### 22.2 Mevcut içerik

Daha önce yüklenmiş içerik varsa:

- Ekranda kalabilir
- Güncel olmayabileceği anlaşılır
- Yeni mutation işlemleri güvenli biçimde engellenir veya queue mantığı varsa açıkça yönetilir

### 22.3 Offline banner

Kullanıcı mevcut ekranda kalabiliyorsa tam sayfa offline state yerine küçük banner kullanılabilir.

Örnek:

> You’re offline. Some actions are unavailable.

Bağlantı geri geldiğinde banner sessizce kaybolabilir.

---

## 23. Reconnecting

Realtime bağlantı koptuğunda reconnect state kullanılır.

### 23.1 Ana davranış

- Mevcut içerik korunur
- Room player/chat mümkün olduğunca ekranda kalır
- Conversation history kaybolmaz
- Participant listesi boşaltılmaz
- Küçük reconnect indicator gösterilir

Örnek:

> Reconnecting…

veya:

> Reconnecting to the room…

### 23.2 Reconnect sonucu

Bağlantı geri geldiğinde:

- HTTP snapshot veya authoritative state alınır
- Eksik event’ler reconcile edilir
- Duplicate event engellenir
- Indicator kaybolur
- Kullanıcı gereksiz başarı toast’ıyla rahatsız edilmez

### 23.3 Uzun süren reconnect

Belirli süre sonunda:

- Manuel retry
- Offline açıklaması
- Güvenli çıkış aksiyonu

sunulabilir.

---

## 24. Connection State’lerin Ayrımı

Aşağıdaki durumlar birbirine karıştırılmamalıdır:

### Offline

Cihaz veya genel bağlantı yok.

### Reconnecting

Bağlantı geçici olarak koptu ve sistem otomatik tekrar bağlanıyor.

### Degraded

Bazı servisler çalışmıyor; ürün kısmen kullanılabilir.

### Failed

Otomatik recovery başarısız oldu ve kullanıcı aksiyonu gerekiyor.

UI mesajı gerçek duruma uygun olmalıdır.

Sistem sürekli “reconnecting” gösterip aslında hiç retry yapmamalıdır.

---

## 25. Action States

Görselde işlem durumları şu şekilde örneklenmiştir:

- Sending
- Sent
- Delivered / Read
- Saving
- Success
- Deleting

Bunların yalnız gerçek sistem kontratında karşılığı olanları uygulanmalıdır.

---

## 26. Sending State

Mesaj veya davet gönderilirken:

- Kullanıcı aksiyonu hemen görünür olabilir
- Küçük pending indicator gösterilir
- Tüm ekran bloke edilmez
- Double-submit engellenir
- İçerik kaybolmaz

Mesaj için optimistic davranış kullanılabilir.

Invite veya friend request için güvenli optimistic UI gerekiyorsa rollback desteklenmelidir.

---

## 27. Sent, Delivered ve Read

### Sent

Backend işlemi kabul etti.

### Delivered

Karşı taraf cihazı veya server delivery state’i gerçekten destekliyorsa kullanılabilir.

### Read

Read receipt sistemi gerçekten varsa kullanılabilir.

Görselde bulunması bu capability’lerin otomatik uygulanacağı anlamına gelmez.

Backend desteği yoksa sahte tik veya state gösterilmez.

---

## 28. Saving State

Form veya ayar kaydedilirken:

- Save butonu lokal loading’e geçer
- Form değerleri korunur
- Kullanıcı hangi işlemin sürdüğünü anlar
- Başka ilgisiz alanlar kilitlenmez

Örnek:

> Saving…

Auto-save kullanılıyorsa küçük satır içi durum:

- Saving
- Saved
- Couldn’t save

gösterilebilir.

Auto-save olmayan formda sahte “Saved” state’i kullanılmaz.

---

## 29. Success State

Başarılı işlem feedback’i kısa ve sakin olmalıdır.

Örnekler:

- Room created.
- Invite sent.
- Changes saved.
- Friend added.
- Link copied.

Başarı için:

- Büyük kutlama ekranı kullanılmaz
- Konfeti yalnız çok özel başarı akışında ve ayrı onayla düşünülebilir
- Birkaç saniyelik toast veya inline feedback yeterlidir

İşlemin doğal sonucu zaten görünüyorsa ayrıca toast gerekmeyebilir.

Örnek:

Friend request kabul edilip satır Friends listesine taşındıysa ekstra büyük başarı mesajı gerekmez.

---

## 30. Deleting State

Silme işlemi sırasında:

- Hedef öğe açık kalır
- Lokal progress gösterilir
- Aynı işlem tekrar başlatılamaz
- Başarısızlıkta içerik geri yüklenir veya korunur
- Destructive sonucu açık olmalıdır

Görselde deleting örneği yalnız işlem state biçimini temsil eder.

Yeni delete capability’si anlamına gelmez.

---

## 31. Room States

System States Board Room için ortak lifecycle durumlarını tanımlar:

1. Joining Room
2. Room Ending Soon
3. Room Ended
4. Room Full

Bunlara ek olarak:

- Access denied
- Banned
- Private access required
- Player unavailable
- Feature unavailable

durumları aynı sistemden türetilmelidir.

---

## 32. Joining Room

Kullanıcı Room’a girmeye çalışırken gerçek join işlemi sürüyorsa:

> Joining room…

Yardımcı metin:

> This should only take a moment.

Ancak bu state yalnız gerçek backend/socket/player hazırlığı varsa gösterilir.

Sahte bekleme ekranı oluşturulmaz.

### 32.1 Kompozisyon

- Room shell veya player alanı korunur
- Tam ekran genel spinner yok
- Gerekirse lokal dots/progress
- Kullanıcı bağlamını kaybetmez

### 32.2 Timeout

Join belirli sürede tamamlanmazsa:

- Retry
- Back to hall
- Bağlamsal hata

sunulur.

---

## 33. Room Ending Soon

Bu state yalnız ürün gerçekten önceden kapanış bilgisi verebiliyorsa kullanılır.

Örnek:

> This room is ending soon.

Yardımcı metin:

> The host is closing the room.

Ancak host `End Room` işlemi anında gerçekleşiyorsa sahte countdown veya warning oluşturulmaz.

Gerçek lifecycle davranışı yoksa bu state uygulanmaz.

---

## 34. Room Ended

Room ended state:

> This room has ended.

Aksiyonlar:

- Back to hall
- Open a new room
- People You Watched With, mevcutsa

Ended room’da:

- Chat gönderilemez
- Player kontrolü durur
- Room state yeniden live gibi gösterilemez
- Invite geçersiz olur
- Join retry sunulmaz

Bu state Room Desktop Package ile aynı dilde uygulanmalıdır.

---

## 35. Room Full

Room capacity doluysa:

> This room is full.

Aksiyon:

> Explore other rooms

veya:

> Back to hall

Yeni waitlist sistemi otomatik eklenmez.

Invite veya direct link capacity kontrolünü bypass edemez.

---

## 36. Diğer Room State’leri

### Access denied

> You can’t join this room.

### Banned

Kullanıcıya gereksiz moderasyon internali açıklanmadan nötr access state kullanılabilir.

### Private access required

Mevcut Room Gate veya password akışına yönlendirilir.

### Player unavailable

> The video is temporarily unavailable.

Chat çalışabiliyorsa korunabilir.

### Feature unavailable

> Rooms are temporarily unavailable.

Launch readiness’te kritik capability unavailable kabul edilmemelidir.

---

## 37. Toast ve Feedback Sistemi

Toast kısa ve geçici feedback içindir.

Uygun örnekler:

- Room created.
- Invite copied.
- Friend added.
- Connection is weak.
- Action failed.

### 37.1 Toast yerleşimi

Desktop:

- Üst sağ
- Alt sağ
- Global shell ile çakışmayacak alan

Mobil:

- Üst veya alt safe area
- Composer ve keyboard’u kapatmayan konum

Kesin yer tüm ürün boyunca tutarlı olmalıdır.

### 37.2 Toast süresi

- Success: kısa
- Info: kısa–orta
- Warning: orta
- Error: kullanıcı aksiyonu gerekiyorsa daha uzun veya manuel kapatılabilir

### 37.3 Toast yoğunluğu

- Aynı anda çok fazla toast birikmez
- Benzer mesajlar deduplicate edilir
- Realtime olayların her biri toast üretmez
- Mesaj geldiğinde global toast gerekmez, mevcut notification sistemi kullanılır

---

## 38. Toast Türleri

### Success

Yeşil ikon + kısa mesaj.

### Info

Nötr veya kontrollü bilgi rengi.

### Warning

Sarı/amber ikon + dikkat mesajı.

### Error

Kırmızı ikon + açık hata.

Her toast yalnız renkle anlam taşımaz.

İkon ve metin bulunur.

---

## 39. Retry Sistemi

Retry aksiyonu yalnız gerçekten aynı işlemi güvenli biçimde tekrar edebiliyorsa sunulur.

Retry:

- Idempotent olmalı veya duplicate koruması taşımalı
- Aynı room’u iki kez oluşturmamalı
- Aynı mesajı duplicate göndermemeli
- Aynı friend request’i çoğaltmamalı
- Aynı admin action’ı iki kez çalıştırmamalı

Retry butonu lokal loading state’e geçer.

Başarısız retry sonsuz döngü oluşturmaz.

---

## 40. Kullanıcı Bağlamını Koruma

State değişimleri mümkün olduğunca kullanıcının bağlamını korumalıdır.

Korunması gerekenler:

- Scroll pozisyonu
- Search query
- Filter seçimi
- Seçili tab
- Açık conversation
- Form değerleri
- Room context
- Draft message
- Açık panel
- Focus, mümkünse

Hata veya reconnect kullanıcıyı varsayılan sayfaya geri atmamalıdır.

---

## 41. Atmosferin Korunması

Loading, empty ve error durumları tasarım sisteminden kopuk görünmemelidir.

Kullanılacak ortak dil:

- Koyu nötr zemin
- Mat surface
- İnce border
- Nar çiçeği kontrollü vurgu
- Sistem renkleri
- Küçük Phosphor ikonları
- Hafif aura
- Sakin tipografi

State ekranları:

- Beyaz modal gibi görünmez
- Bootstrap alert hissi vermez
- Teknik admin paneli görünümüne dönüşmez
- Abartılı oyun uyarısı kullanmaz
- Yoğun neon efekt taşımaz

---

## 42. Tipografi

- State title: Manrope veya Inter `600`
- Description: Inter `400`
- CTA: Inter `500–600`
- Teknik olmayan yardımcı metin: Inter `400`
- Toast: Inter `400–500`

Metin uzunlukları kısa tutulur.

Başlık genellikle bir cümleyi geçmez.

Açıklama en fazla iki kısa satır olmalıdır.

---

## 43. İkonografi

Kesin ikon sistemi Phosphor’dur.

Uygun ikon örnekleri:

- Loading / spinner
- Search empty
- Filter
- Chat
- Users
- Offline cloud
- Reconnect
- Error
- Check
- Hourglass
- Door
- Room full
- Warning

İkonlar:

- Ana mesajı destekler
- Metnin yerini almaz
- Aynı state için bütün sayfalarda tutarlı kullanılır

---

## 44. Hareket Sistemi

### Skeleton

- Yavaş ve düşük kontrast shimmer
- Reduced motion’da statik

### Toast

- Kısa fade/slide
- `200–260ms`

### Error/empty state

- İlk render’da hafif fade
- Sürekli hareket yok

### Reconnect

- Çok yavaş ve sakin indicator
- Dikkat çeken hızlı dönme yok

### Success

- Küçük check transition
- Konfeti veya bounce yok

---

## 45. Azaltılmış Hareket

`prefers-reduced-motion` açıkken:

- Skeleton shimmer kapanır
- Spinner daha sade indicator’a dönüşebilir
- Toast slide yerine fade olur
- Empty state aura statik kalır
- Success check animasyonu minimuma iner
- Reconnect dots sabit veya düşük hareketli olur
- İşlevsel durum bilgisi korunur

---

## 46. Erişilebilirlik

Aşağıdaki kurallar bütün state bileşenleri için zorunludur:

- Loading state screen reader’a uygun biçimde bildirilir
- Skeleton gereksiz yere tek tek okunmaz
- Empty state heading semantiği doğrudur
- Error message ilgili alana programatik olarak bağlanır
- Retry butonu açık accessible name taşır
- Toast uygun live region kullanır
- Success mesajları `polite`
- Kritik hata gerektiğinde daha güçlü duyurulabilir
- Reconnect sürekli tekrar tekrar okunmaz
- Room Ended gibi kritik state bir kez anlamlı biçimde duyurulur
- İkonlar dekoratifse screen reader’dan gizlenir
- Renk tek bilgi kaynağı değildir
- Focus görünürdür
- CTA touch target minimum `44×44px`
- Kontrast WCAG AA hedefini karşılar

---

## 47. Screen Reader Canlı Bölgeleri

Live region’lar dikkatli kullanılmalıdır.

### `aria-live="polite"` benzeri kullanım

- Changes saved
- Friend added
- Reconnected
- New message available, gerekiyorsa

### Daha güçlü bildirim

- Room ended
- Session expired
- Critical action failed

Ancak sürekli realtime event’ler screen reader’ı rahatsız etmemelidir.

Her yeni chat mesajı global live region’dan okunmamalıdır; chat alanının kendi semantiği kullanılmalıdır.

---

## 48. Teknik State Modeli

UI state’leri mümkün olduğunca açık ayrılmalıdır.

Örnek mantık:

- `idle`
- `initialLoading`
- `refreshing`
- `loadingMore`
- `success`
- `empty`
- `error`
- `offline`
- `reconnecting`

Tek bir `isLoading` boolean’ı bütün davranışları yönetmemelidir.

Benzer şekilde mutation state:

- `idle`
- `submitting`
- `succeeded`
- `failed`

olarak ayrılabilir.

Kesin state mimarisi mevcut codebase’e göre belirlenir; ancak davranış ayrımı korunmalıdır.

---

## 49. Realtime ve HTTP Reconcile

Realtime state yalnız socket event’lerine körlemesine güvenmemelidir.

Reconnect sonrası:

- Authoritative HTTP snapshot alınabilir
- Duplicate event’ler ayıklanır
- Missing state tamamlanır
- UI stale veriden güvenli biçimde güncellenir

Özellikle:

- Room state
- Participant count
- Message history
- Invite status
- Friend request count
- Admin job status

reconcile edilmelidir.

---

## 50. Görseldeki Mor Renklerin Yorumu

System States Board görselinde mor ve ultraviyole renkler yoğun biçimde kullanılmaktadır.

Implementation kesin Vibehall tokenlarını kullanır:

- Background: `#090A0F`
- Surface: `#10121A`
- Elevated: `#171A24`
- Hover: `#1D2130`
- Accent: `#FF625A`
- Success: `#5ED7A0`
- Warning: `#F0B55A`
- Error: `#E45B6A`

Mor yalnız içerik aura’sından doğal olarak geliyorsa görülebilir.

Sistem accent’i olarak kullanılmaz.

---

## 51. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Room isimleri
- Thumbnail’ler
- Kullanıcı isimleri
- Participant sayıları
- Loading adımları
- Mesaj içerikleri
- Delivered/read state’leri
- Saving/deleting state’leri
- Room ending soon
- CTA metinleri
- İllüstrasyonlar
- Mor renk sistemi
- Reconnect dots
- Toast metinleri
- System state ikonları
- Full room sayısı
- Sample filters
- Navigation öğeleri

Gerçek ürün kontratları ve kesin design tokenları kullanılmalıdır.

---

## 52. Otomatik Uygulanmayacak Görsel Unsurlar

### 52.1 Delivered / Read

Gerçek backend desteği yoksa uygulanmaz.

### 52.2 Deleting

Mevcut delete capability’si olmayan alanlara eklenmez.

### 52.3 Room Ending Soon

Gerçek lifecycle warning yoksa uygulanmaz.

### 52.4 Inline loading adımları

Gerçekte takip edilmeyen aşamalar gösterilmez.

### 52.5 Toast türleri

Her işlem toast üretmek zorunda değildir.

### 52.6 Empty state CTA’ları

Her sayfada gerçek kullanıcı akışına göre belirlenir.

### 52.7 İllüstrasyonlar

Birebir asset olarak uygulanmak zorunda değildir.

---

## 53. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Tam sayfa spinner kullanmak
- Refresh sırasında içeriği kaldırmak
- Her küçük işlemde tüm sayfayı loading’e geçirmek
- Sahte room, user veya message göstermek
- Teknik hata kodlarını kullanıcıya göstermek
- Raw backend exception render etmek
- Her hata için aynı genel full-screen ekranı kullanmak
- Empty state’i error olarak göstermek
- Offline state’i Room ended ile karıştırmak
- Reconnect sırasında player/chat’i boşaltmak
- Gerçekte takip edilmeyen progress adımları göstermek
- Sahte delivered/read state eklemek
- Sahte success feedback üretmek
- Retry ile duplicate mutation oluşturmak
- Her realtime event için toast göstermek
- Kullanıcı form değerlerini hata sonrası kaybetmek
- Görseldeki mor sistemi kesin palette dönüştürmek
- Yeni CSS framework veya state library eklemek
- State bileşenlerini her sayfada ayrı ayrı kopyalamak

---

## 54. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu alanlarda uyarlama yapabilir:

- Mevcut state management yapısı
- API client error formatı
- Realtime event ve reconnect sistemi
- Skeleton bileşen sayısı
- Toast konumu
- Retry davranışı
- Room state enum’ları
- HTTP snapshot/reconcile yaklaşımı
- Error mapping katmanı
- Loading component isimleri
- Responsive state yerleşimi
- Accessibility için live region yapısı
- Existing reusable component sistemi

Bu uyarlamalar ana loading, empty, error ve context-preservation kararlarını değiştiremez.

---

## 55. Ortak Error Mapping

Backend hata kodları merkezi kullanıcı mesajlarına çevrilmelidir.

Örnek kategoriler:

- Authentication required
- Permission denied
- Validation failed
- Room ended
- Room full
- User blocked
- Network unavailable
- Feature unavailable
- Rate limited
- Conflict
- Unknown error

Her ekran raw backend mesajını kendi içinde farklı şekilde çevirmemelidir.

Merkezi veya ortak helper kullanılması tercih edilir.

---

## 56. Güvenlik Sınırları

State mesajları hassas bilgileri sızdırmamalıdır.

Gösterilmemesi gereken örnekler:

- Kimin kimi block ettiği
- Admin moderation reason
- Account restriction internalleri
- Private room password durumu
- Invite grant token
- Database hatası
- User existence bilgisi, auth güvenliği açısından sakıncalıysa
- Server path
- Storage key
- Internal feature flag adı

Kullanıcıya yalnız güvenli ve eyleme dönük açıklama verilir.

---

## 57. Performans Yaklaşımı

- Skeleton bileşenleri hafif olmalıdır
- Ağır SVG animasyonları kullanılmamalıdır
- Büyük blur ve shimmer performansı ölçülmelidir
- Toast state tüm uygulamayı gereksiz rerender etmemelidir
- Reconnect event’leri debounce veya batching kullanabilir
- Skeleton DOM sayısı kontrol altında tutulmalıdır
- Image placeholder layout shift’i engellemelidir
- Retry stale request’leri iptal etmelidir
- Refresh sırasında duplicate fetch önlenmelidir

State sistemi performans sorununa dönüşmemelidir.

---

## 58. Bileşen Envanteri

System States wave’i en az şu reusable bileşenleri değerlendirmelidir:

- `SkeletonBlock`
- `SkeletonText`
- `RoomCardSkeleton`
- `UserRowSkeleton`
- `MessageSkeleton`
- `InlineLoader`
- `ButtonLoadingState`
- `MediaPlaceholder`
- `EmptyState`
- `InlineError`
- `SectionError`
- `PageError`
- `OfflineBanner`
- `ReconnectBanner`
- `Toast`
- `ActionFeedback`
- `RoomLifecycleState`
- `RetryButton`

Her bileşen aynı token ve accessibility sistemini kullanmalıdır.

---

## 59. Wave Kapsamı Önerisi

### 59.1 Loading Foundation

- Skeleton primitives
- Initial loading
- Refresh state
- Inline loading
- Media placeholder
- Button loading

### 59.2 Empty State System

- Ortak EmptyState component
- Home/Discover
- Messages
- Social
- Profile/Admin empty varyantları

### 59.3 Error ve Offline System

- Error mapping
- Inline error
- Page error
- Offline
- Retry
- Safe user copy

### 59.4 Toast ve Action Feedback

- Success
- Info
- Warning
- Error
- Deduplication
- Accessibility

### 59.5 Room Lifecycle States

- Joining
- Full
- Ended
- Access denied
- Reconnecting
- Player unavailable

### 59.6 Realtime Reconciliation

- Content preservation
- Snapshot recovery
- Duplicate prevention
- Scroll/focus preservation

Kesin wave yapısını Codex mevcut state ve component mimarisine göre düzenleyebilir.

Ancak loading foundation ve content-preservation davranışı birlikte ele alınmalıdır.

---

## 60. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- System States Board görsel referansla yan yana karşılaştırılmıştır
- Tam sayfa spinner standart loading çözümü olarak kullanılmamaktadır
- İlk yüklemelerde içerik yapısına uygun skeleton vardır
- Skeleton’lar layout shift’i azaltmaktadır
- Sonraki refresh sırasında mevcut içerik korunmaktadır
- Search, filter ve scroll state’i refresh sırasında kaybolmamaktadır
- Lokal işlemler yalnız ilgili bileşeni loading’e geçirmektedir
- Button loading double-submit’i engellemektedir
- Görseller için stable placeholder ve fallback vardır
- Empty state’lerde sahte veri kullanılmamaktadır
- No rooms ve no results ayrı state’lerdir
- No messages ve no friends ayrı state’lerdir
- Empty state’ler gerçek ve uygun sonraki adımı göstermektedir
- Global user search çağrışımı yapan CTA’lar kullanılmamaktadır
- Teknik hata kodları kullanıcıya gösterilmemektedir
- Raw backend exception render edilmemektedir
- Hatalar etki alanına göre lokal veya sayfa seviyesinde gösterilmektedir
- Retry işlemleri duplicate mutation oluşturmamaktadır
- Offline ve reconnect durumları birbirinden ayrılmıştır
- Reconnect sırasında mevcut içerik korunmaktadır
- Reconnect sonrası authoritative state reconcile edilmektedir
- Toast mesajları kısa ve tutarlıdır
- Toast’lar birikerek ekranı kaplamamaktadır
- Realtime event’lerin tamamı toast üretmemektedir
- Delivered/read yalnız gerçek capability varsa gösterilmektedir
- Room ending soon yalnız gerçek lifecycle davranışı varsa kullanılmaktadır
- Room full, ended ve access denied state’leri doğru ayrılmıştır
- Ended Room’da chat gönderilememektedir
- Kullanıcı bağlamı ve form değerleri hata sonrası korunmaktadır
- State bileşenleri merkezi design tokenlarını kullanmaktadır
- Nar çiçeği ve sistem durum renkleri doğru uygulanmıştır
- Reduced motion desteklenmektedir
- Screen reader loading ve error feedback’lerini anlamlı biçimde almaktadır
- Focus retry ve state geçişlerinde korunmaktadır
- Desktop ve dar ekran QA yapılmıştır
- Typecheck ve build geçmiştir
- İlgili component, integration ve E2E testleri geçmiştir
- Offline, reconnect, timeout ve retry senaryoları manuel test edilmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 61. Son Tasarım Hükmü

System States Board’un amacı loading, error ve empty ekranlarını güzel göstermek değildir.

Asıl amaç:

> Ürün beklerken, hata verirken, bağlantı kaybederken veya gösterecek veri bulamazken bile kullanıcının Vibehall’dan kopmamasını sağlamaktır.

Doğru loading deneyimi:

- Kullanıcıya yapının geleceğini gösterir
- Ekranı boşaltmaz
- Sabır istemez

Doğru empty state:

- Gerçeği gizlemez
- Sahte aktivite üretmez
- Kullanıcıya doğal bir sonraki hareket sunar

Doğru error state:

- Teknik ayrıntıyla korkutmaz
- Sorunun etkisini açıklar
- Mümkünse recovery sunar

Doğru reconnect deneyimi:

- Kullanıcının bağlamını korur
- Mevcut içeriği ekranda tutar
- Bağlantı geri geldiğinde sessizce devam eder

Bu tasarım paketinin başarı ölçütü çok sayıda state ekranı oluşturmak değildir.

Başarı ölçütü:

> Vibehall’ın hiçbir durumda boş, kırık, anlaşılmaz veya kullanıcıyı ortada bırakan bir ürün gibi hissettirmemesidir.