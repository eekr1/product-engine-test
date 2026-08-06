# Social Hub Design Package

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Social Hub Design Package** görseli, Vibehall’ın arkadaşlık, istekler, davetler, People You Watched With ve Blocked Accounts yüzeyleri için onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Aşağıdaki kararları bağlayıcı biçimde temsil eder:

- Social Hub’ın bağımsız bir sosyal ağ değil, odalarda başlayan bağların devamı olması
- Friends, Requests, Invites, People You Watched With ve Blocked Accounts alanlarının tek tasarım ailesinde birleşmesi
- People You Watched With alanının ürünün sosyal merkezindeki özel konumu
- Social Rail’in masaüstünde yardımcı yüzey olarak kullanılması
- Mobilde social alanların sade sekmeli yapıya dönüşmesi
- Friends-only mesajlaşma ve oda merkezli arkadaşlık mantığının korunması
- Feed, follower, like, skor ve popülerlik mekaniklerinin bulunmaması
- Sosyal işlemlerin sade, hızlı ve düşük görsel gürültüyle sunulması
- Empty state’lerin kullanıcıyı genel kullanıcı aramasına değil, yeniden odalara yönlendirmesi

Ancak görselde bulunan bütün sayaçlar, çevrimiçi durumlar, ortak oda adları, zaman bilgileri, mobil alt navigasyon, arama alanları ve CTA’lar mevcut ürün kabiliyeti olarak yorumlanamaz.

Implementation gerçek friendship, invite, block, DM ve People You Watched With kontratlarını; mevcut route’ları, backend authorization kurallarını ve kesin tasarım sistemini kullanmalıdır.

> **Ana ilke:** Vibehall’da sosyal bağlar profillerden veya feed’den değil, paylaşılan odalardan doğar.

---

## 1. Ekranın Ana Amacı

Social Hub’ın temel amacı şudur:

> Kullanıcının odalarda karşılaştığı insanlarla kurduğu bağları takip edebilmesini, arkadaşlık isteklerini ve oda davetlerini yönetebilmesini ve daha önce birlikte izlediği kişilere yeniden ulaşabilmesini sağlamak.

Kullanıcı bu alanda:

- Arkadaşlarını görebilmeli
- Gelen ve gönderilen arkadaşlık durumlarını anlayabilmeli
- Oda davetlerini yönetebilmeli
- Daha önce birlikte izlediği insanlara ulaşabilmeli
- Arkadaş olduğu kişilere mesaj gönderebilmeli
- Engellediği hesapları yönetebilmeli
- Hiç sosyal bağlantısı yoksa nasıl bağlantı kuracağını anlayabilmelidir

Social Hub’ın amacı kullanıcıya mümkün olduğunca çok insan göstermek değildir.

Amacı:

> Daha önce gerçek bir oda bağlamında karşılaşılan insanlarla olan bağlantıları sakin ve anlaşılır biçimde devam ettirmektir.

---

## 2. Değişmez Ürün Prensipleri

Aşağıdaki sınırlar bütün Social Hub varyantlarında korunmalıdır:

- Feed yoktur
- Follower sistemi yoktur
- Like sistemi yoktur
- Profil puanı yoktur
- Popüler kullanıcı sıralaması yoktur
- Global kullanıcı dizini yoktur
- Rastgele kullanıcı araması yoktur
- Arkadaş olmayan kullanıcıya doğrudan DM yoktur
- Sosyal bağlantılar mümkün olduğunca oda bağlamından doğar
- People You Watched With merkezi bir capability’dir
- Block ve privacy kuralları backend tarafından enforce edilir
- Social Rail ana ürün navigasyonunun yerine geçmez
- Social Hub ekranı dashboard veya CRM görünümüne dönüşmez

Her yeni sosyal özellik şu sorudan geçmelidir:

> Bu özellik kullanıcıyı tekrar ortak bir oda deneyimine bağlıyor mu, yoksa Vibehall’ı genel sosyal ağa mı dönüştürüyor?

İkinci durum söz konusuysa özellik bu tasarım paketinin kapsamına girmez.

---

## 3. Social Hub Bilgi Mimarisi

Social Hub beş ana alandan oluşur:

1. Friends
2. Requests
3. Invites
4. People You Watched With
5. Blocked Accounts

Bu alanların tamamı tek tasarım sistemi ve ortak route ailesi altında ele alınmalıdır.

### 3.1 Desktop

Desktop’ta:

- Social Rail
- Sayfa başlığı
- Üst sekmeler
- Seçili sosyal alanın ana içeriği

kullanılabilir.

### 3.2 Mobil

Mobilde:

- Minimal header
- Üst sekmeler
- Tek kolon liste
- Detay veya ikincil işlemler için ayrı ekran veya bottom sheet

kullanılır.

Mobil alt navigasyon kullanılmaz.

---

## 4. Görsel Hiyerarşi

Social Hub’ın genel görsel öncelik sırası:

1. Seçili sosyal alan
2. Kullanıcı kimliği
3. İlişki veya davet durumu
4. Ana eylem
5. Oda bağlamı
6. Zaman ve yardımcı metadata
7. İkincil menüler

Liste satırları aynı anda çok fazla aksiyon göstermemelidir.

Bir kullanıcı satırında en fazla:

- Bir ana aksiyon
- Bir ikincil aksiyon
- Gerekirse `...` menüsü

bulunmalıdır.

---

## 5. Social Rail — Desktop

Social Rail desktop’ta sosyal alanlara hızlı erişim sağlayan yardımcı yüzeydir.

### 5.1 Rolü

Social Rail:

- Ana navigasyonun yerine geçmez
- Kullanıcının sosyal bağlarına hızlı erişim sağlar
- Home, Discover ve Create Room’dan daha güçlü görünmez
- Oda deneyimine girildiğinde tamamen kaybolur

### 5.2 Kapalı durum

Kapalı Social Rail:

- Yalnız ikonlar gösterir
- Küçük ve dar kalır
- İçerik alanını gereksiz biçimde daraltmaz
- Aktif sosyal alanı belirginleştirir
- Hover ve focus sırasında label gösterebilir

### 5.3 Açık durum

Açık Social Rail:

- İkon
- Alan adı
- Gerçek bekleyen durum sayaçları
- Aktif alan
- Kapatma veya daraltma kontrolü

gösterebilir.

### 5.4 Rail içeriği

Gerçek route’lara göre:

- Friends
- Requests
- Invites
- People You Watched With
- Blocked Accounts

gösterilebilir.

Messages ayrı ana social capability olarak rail içinde bulunabilir; ancak Social Hub sekmeleriyle karıştırılmamalıdır.

### 5.5 Sayaçlar

Sayaç yalnız gerçek backend verisinden gelir.

Örnekler:

- Bekleyen friend request sayısı
- Bekleyen room invite sayısı
- Okunmamış mesaj sayısı

Sayaç:

- Hard-coded olamaz
- `0` ise gizlenebilir
- Realtime güncellenebilir
- Ekranı zıplatmaz
- Screen reader için anlamlı label taşır

---

## 6. Social Hub — Desktop Ana Kompozisyon

Desktop Social Hub şu yapıdan oluşabilir:

1. Global application shell
2. Social Rail
3. Social başlığı
4. Kısa açıklama
5. Üst sekmeler
6. Ana liste veya içerik alanı

### 6.1 Sayfa başlığı

Başlık:

> Social

Kısa açıklama örneği:

> Connections continue here.

veya Türkçe ürün copy’sine göre eşdeğer kısa ifade.

Açıklama uzun sosyal ağ tanımına dönüşmemelidir.

### 6.2 Sekmeler

Sekmeler:

- Friends
- Requests
- Invites
- People You Watched With
- Blocked Accounts

olabilir.

Sekme sayısı geniş ekranda yatay gösterilebilir.

Dar alanda:

- Yatay scroll
- `More`
- İkincil menu

kullanılabilir.

Sekmeler:

- Aktif durumu nar çiçeği accent ile gösterir
- Yalnız renkle anlatılmaz
- Sayaçları gerçek state’ten alır
- Klavyeyle kullanılabilir

---

## 7. Friends Alanı

Friends alanı kullanıcının mevcut arkadaşlarını gösterir.

### 7.1 Satır içeriği

Her arkadaş satırı şu bilgileri taşıyabilir:

- Avatar
- Display name
- Username, gerekirse
- Presence durumu, privacy izin veriyorsa
- Son ortak oda veya son bağlam, güvenli ve mevcutsa
- Message aksiyonu
- İkincil menü

### 7.2 Ana aksiyon

Friends listesindeki ana aksiyon:

> Message

olabilir.

Mesajlaşma friends-only olduğu için bu ilişki doğrudur.

Message aksiyonu:

- Mevcut conversation’a gider
- Conversation yoksa güvenli biçimde oluşturur
- Backend friendship kontrolünü yine yapar
- Block veya account-state policy’yi bypass edemez

### 7.3 İkincil aksiyonlar

`...` menüsü içinde:

- View profile
- Invite to room
- Remove friend
- Block
- Report, gerçekten uygun ise

bulunabilir.

Tüm işlemler aynı satırda sürekli görünmemelidir.

### 7.4 Arama

Görselde friends listesi için arama alanı bulunmaktadır.

Bu arama yalnız mevcut arkadaş listesi içinde çalışabilir.

Global user search değildir.

Aranabilecek alanlar:

- Display name
- Username

Yeni kullanıcı keşfetme veya kullanıcı dizini oluşturma amacıyla kullanılamaz.

### 7.5 Presence filtresi

Görselde `Online` filtresi bulunmaktadır.

Bu yalnız gerçek presence kontratı varsa kullanılabilir.

Presence sistemi yoksa:

- Sahte online filtresi gösterilmez
- Son aktivite uydurulmaz
- `Online` etiketi hard-code edilmez

---

## 8. People You Watched With

People You Watched With, Social Hub’ın en özgün ve önemli alanlarından biridir.

### 8.1 Ürün amacı

Bu alan:

> Kullanıcının daha önce aynı Room’da bulunduğu insanları yeniden bulmasını sağlar.

Bu özellik Vibehall’ın sosyal modelini klasik friend discovery sisteminden ayırır.

Kullanıcılar global listeden bulunmaz.

Bağlantı şu zincirden doğar:

> Aynı oda → ortak an → yeniden karşılaşma → arkadaşlık

### 8.2 Satır içeriği

Her kayıt şunları içerebilir:

- Avatar
- Display name
- Username, gerekirse
- Ortak oda adı
- Yaklaşık karşılaşma zamanı
- Mevcut friendship durumu
- Add friend
- Message, yalnız zaten arkadaşsa
- View profile

### 8.3 Zaman bilgisi

Görselde:

- 2 saat önce
- 5 saat önce
- 1 gün önce

gibi zamanlar gösterilir.

Bu yalnız retention ve privacy kuralları izin veriyorsa kullanılabilir.

Exact join/leave timestamp veya hassas aktivite bilgisi gösterilmemelidir.

Daha güvenli ifadeler:

- Recently
- Yesterday
- A few days ago

olabilir.

### 8.4 Ortak oda bilgisi

Görselde oda adları gösterilmektedir.

Bu veri yalnız:

- Gerçek ortak Room kaydından geliyorsa
- Private room metadata’sı sızdırmıyorsa
- Retention süresi içinde ise
- Block/privacy policy’ye uygunsa

gösterilebilir.

Private room adı veya görseli, erişim yetkisi olmayan profile/social yüzeyine sızdırılamaz.

### 8.5 Aksiyonlar

İlişki durumuna göre:

#### Arkadaş değillerse

- Add friend
- View profile

#### Request gönderildiyse

- Request sent
- Cancel, mevcutsa

#### Arkadaşlarsa

- Message
- Invite to room

Aynı satırda hem `Message` hem `Add friend` gösterilmemelidir.

### 8.6 Privacy

Kullanıcı People You Watched With alanında görünmeyi kapatabiliyorsa bu preference backend’de enforce edilmelidir.

Ayrıca:

- Block ilişkileri
- Deleted accounts
- Suspended/banned accounts
- Privacy exclusions

uygulanmalıdır.

Frontend yalnız listeyi gizlemekle yetinemez.

---

## 9. Friend Requests

Requests alanı gelen arkadaşlık isteklerini gösterir.

### 9.1 Satır içeriği

- Avatar
- Display name
- Username
- Ortak oda bağlamı, varsa ve güvenliyse
- Accept
- Decline

### 9.2 Accept

Accept:

- Backend friendship state’ini günceller
- Listeyi sessizce günceller
- Duplicate friendship oluşturmaz
- İstek geçersizse güvenli hata gösterir
- Başarılı olunca yeni arkadaş Messages ve Friends alanında görünür

### 9.3 Decline

Decline:

- İsteği kaldırır
- Kullanıcıyı otomatik block etmez
- Friend request tekrar davranışı mevcut policy’ye göre kalır
- Ağır confirmation gerektirmez

### 9.4 Ortak oda bağlamı

Görselde:

> Shared room: synthwave dreams

benzeri bilgi bulunur.

Bu faydalı olabilir; ancak yalnız güvenli gerçek veri varsa gösterilir.

Private veya retention dışı Room bilgisi sızdırılamaz.

### 9.5 Gelen ve gönderilen istekler

Görsel yalnız gelen requests alanını vurgular.

Mevcut ürün gönderilen istekleri destekliyorsa:

- Ayrı sekme
- Filtre
- State label

kullanılabilir.

Ancak yeni outgoing request sistemi sırf görsel için eklenmez.

---

## 10. Room Invites

Invites alanı kullanıcının aldığı oda davetlerini gösterir.

### 10.1 Invite satırı

Her davet şu bilgileri taşıyabilir:

- Davet eden kullanıcı
- Oda adı
- Host
- Live/ended/full durumu
- Gerekirse kısa oda metadata’sı
- Join
- View

### 10.2 Join davranışı

Join:

- Room access policy’den geçer
- Auth zaten vardır
- Capacity kontrol edilir
- Ban kontrol edilir
- Room ended kontrol edilir
- Private room grant doğrulanır
- Feature availability kontrol edilir

Invite bu kontrolleri bypass edemez.

### 10.3 View davranışı

`View` aksiyonu:

- Invite detayını
- Oda preview’ını
- Davet eden kullanıcıyı

gösterebilir.

Ancak gereksiz ikinci adım yaratıyorsa yalnız `Join room` yeterli olabilir.

### 10.4 Invite state’leri

- Live
- Ended
- Full
- Expired
- Revoked
- Access unavailable

durumları gerçek backend state’ine göre gösterilir.

Sahte `Live` badge kullanılmaz.

### 10.5 Invite sonrası davranış

Kullanıcı Room’a girdiğinde:

- Invite gerekli grant olarak kullanılır
- Davet state’i mevcut ürün kontratına göre consumed veya visible kalabilir
- Sosyal liste loading blink üretmez

---

## 11. Blocked Accounts

Blocked Accounts yüzeyi sessiz ve işlevsel olmalıdır.

### 11.1 Satır içeriği

- Avatar
- Display name
- Username
- Block tarihi, gerçekten gerekliyse
- `...` menüsü
- Unblock aksiyonu

### 11.2 Unblock

Unblock:

- Açık kullanıcı aksiyonu gerektirir
- Friendship’i otomatik geri getirmez
- DM’i otomatik yeniden açmaz
- Invite veya People You Watched With görünürlüğünü mevcut policy’ye göre günceller
- Backend tarafından enforce edilir

### 11.3 Gizlilik

Blocked Accounts listesi yalnız hesap sahibine gösterilir.

Başka kullanıcı:

- Kendisinin engellendiğini doğrudan bu yüzeyden öğrenemez
- Block reason göremez
- Block timestamp göremez

### 11.4 Listeyi temizle

Görselde:

> Clear list

benzeri toplu aksiyon bulunmaktadır.

Bu otomatik uygulanmamalıdır.

Toplu unblock:

- Risklidir
- Ayrı açık confirmation ister
- Mevcut ürün kapsamında yoksa eklenmez

Tercihen her kullanıcı tek tek unblock edilir.

---

## 12. Mobil Social Hub

Mobil Social Hub sade ve tek kolonlu olmalıdır.

### 12.1 Header

- Minimal üst header
- `Social` başlığı
- Gerekirse geri veya menü

Mobil alt navigasyon kullanılmaz.

Görseldeki alt navigasyon kesin Global Shell kararlarıyla çelişir ve uygulanmamalıdır.

### 12.2 Sekmeler

Mobilde üst sekmeler:

- Friends
- Requests
- Invites

ilk görünür alanlar olabilir.

People You Watched With ve Blocked Accounts:

- Yatay scroll içinde
- `More` menüsünde
- Ayrı liste ekranında

çözülebilir.

Sekmeler çok sıkışık hâle getirilmemelidir.

### 12.3 Liste yapısı

Mobil satırlar:

- Avatar
- İsim
- Kısa bağlam
- Ana aksiyon

taşır.

İkincil aksiyonlar menü veya bottom sheet’e taşınır.

### 12.4 Touch davranışı

- Touch target minimum `44×44px`
- Accept/Decline yanlışlıkla birbirine basılmayacak kadar ayrılır
- Uzun isimler taşmayı güvenli yönetir
- Yatay scroll oluşmaz

---

## 13. Social Rail ve Mobil Menü İlişkisi

Social Rail yalnız desktop’ta kalıcı olabilir.

Tablet:

- Social drawer

Mobil:

- Tam ekran social route
- Global mobil menu üzerinden giriş

kullanır.

Aynı anda:

- Kalıcı rail
- Mobil alt navigation
- Üst sekme
- Yan drawer

kullanılarak navigasyon çoğaltılamaz.

Her breakpoint’te tek açık ve anlaşılır navigation yöntemi bulunmalıdır.

---

## 14. Liste Satırı Tasarım Sistemi

Bütün Social Hub listeleri ortak bir kullanıcı satırı bileşeni kullanmalıdır.

### 14.1 Ortak içerik

- Avatar
- Kimlik
- Bağlam metni
- Durum
- Ana eylem
- İkincil eylem

### 14.2 Duruma göre farklılaşma

#### Friend row

- Message

#### People You Watched With row

- Add friend veya Message

#### Request row

- Accept / Decline

#### Invite row

- Join / View

#### Blocked row

- Unblock veya menu

Aynı bileşen bütün işlevleri aynı anda göstermemelidir.

### 14.3 Hover ve focus

- Hafif yüzey açılması
- Görünür focus halkası
- Büyük card yükselmesi yok
- Ana aksiyon netleşebilir
- İçerik hizası değişmez

---

## 15. Arama ve Filtre Sistemi

Social Hub araması alan bağlamına göre çalışmalıdır.

### Friends

- Yalnız mevcut friends

### People You Watched With

- Yalnız mevcut listedeki kişiler
- Gerekirse oda adına göre filtre

### Requests

- Genellikle arama gerekmeyebilir

### Invites

- Oda veya davet eden kullanıcıya göre filtre, yalnız gerçek ihtiyaç varsa

### Blocked Accounts

- Yalnız blocked listesi

Global kullanıcı araması hiçbir social tab içinde açılamaz.

Filtreler listeyi yönetmek içindir, yeni insan keşfetmek için değil.

---

## 16. Sorting

Görselde People You Watched With için `Newest` sıralaması bulunmaktadır.

Bu uygundur.

Gerçek seçenekler backend destekliyorsa:

- Newest
- Oldest
- Recently watched with

kullanılabilir.

Popularity, mutual count veya engagement score sıralaması eklenmez.

Friends listesinde:

- Alphabetical
- Online first, yalnız gerçek presence varsa
- Recently messaged, mevcut data varsa

değerlendirilebilir.

Yeni ranking altyapısı sırf görsel için oluşturulmaz.

---

## 17. Loading Davranışı

### 17.1 İlk yükleme

- Sekmeler görünür kalır
- Liste satırı skeleton’ları gösterilir
- Global shell görünür
- Tam sayfa spinner kullanılmaz

### 17.2 Sekme değişimi

- Tüm Social Hub yeniden yüklenmez
- Seçili liste alanında lokal skeleton
- Önceki sekme state’i yanlış yerde gösterilmez
- Aktif sekme kaybolmaz

### 17.3 İşlem loading’i

Accept, Decline, Add friend, Join veya Unblock işlemlerinde:

- Yalnız ilgili satır veya buton loading olur
- Tüm liste kilitlenmez
- Double-submit engellenir
- İşlem sonucu reconcile edilir

---

## 18. Empty State’ler

Her sosyal alanın kendi empty state’i olmalıdır.

### 18.1 Friends empty state

> You haven’t made any connections yet.

Yönlendirme:

> Discover rooms

Global kullanıcı araması sunulmaz.

### 18.2 Requests empty state

> No pending friend requests.

Ek CTA zorunlu değildir.

### 18.3 Invites empty state

> No room invites right now.

Yönlendirme:

> Discover rooms

olabilir.

### 18.4 People You Watched With empty state

> No recent shared rooms yet.

Yönlendirme:

> Enter the hall

veya:

> Discover rooms

olabilir.

### 18.5 Blocked Accounts empty state

> You haven’t blocked anyone.

CTA gerekmez.

### 18.6 Görsel yaklaşım

- Hafif aura
- Küçük soyut illüstrasyon
- Kısa metin
- Bir net aksiyon, gerçekten gerekliyse

Sahte kullanıcı veya fake listeler kullanılmaz.

---

## 19. Error Durumları

### Liste yüklenemedi

> We couldn’t load this list.

Aksiyon:

> Try again

### Friend request action failed

> We couldn’t update this request. Try again.

### Invite expired

> This invite is no longer available.

### Room ended

> This room has ended.

### Unblock failed

> We couldn’t unblock this account. Try again.

Hatalar:

- Lokal
- Teknik olmayan
- Kullanıcının ne yapabileceğini söyleyen

bir dil kullanmalıdır.

Ham backend exception veya internal enum gösterilmez.

---

## 20. Realtime Davranış

Social Hub bazı durumları realtime güncelleyebilir:

- Yeni friend request
- Friend request accepted
- Yeni room invite
- Invite state değişimi
- Unread count
- Friendship removal
- Block state değişimi

Realtime güncelleme:

- Listeyi blink ettirmez
- Scroll pozisyonunu bozmaz
- Kullanıcının işlem yaptığı satırı aniden kaydırmaz
- Aynı kaydı duplicate eklemez
- Sayaçları sessizce günceller

Yeni bir öğe geldiğinde:

> New request available

gibi küçük bir indicator kullanılabilir.

---

## 21. Friends-Only DM Entegrasyonu

Message butonu yalnız gerçek arkadaşlarda görünür.

Kullanıcı arkadaş değilse:

- Message gösterilmez
- Add friend veya Request sent durumu gösterilir

Friendship kaldırıldığında:

- Message aksiyonu kapanır
- Mevcut DM composer mevcut policy’ye göre kullanılamaz hâle gelir
- Backend send işlemini reddeder
- UI güvenli nötr mesaj gösterir

Frontend’de butonu gizlemek tek başına yeterli değildir.

---

## 22. Room Invite Entegrasyonu

Social Hub ve Room Invite sistemi birlikte çalışmalıdır.

Kullanıcı:

- Bir arkadaşı aktif Room’a davet edebilir
- Aldığı daveti Social Hub’da görebilir
- DM içinde structured invite kartı görebilir

Aynı invite üç farklı yerde üç farklı state taşımamalıdır.

Canonical invite state backend’de tutulur.

Invite:

- Social Hub
- Messages
- Notification
- Room

yüzeylerinde aynı sonucu göstermelidir.

---

## 23. Friendship State Modeli

Arayüz en az şu ilişki durumlarını doğru temsil etmelidir:

- No relationship
- Request sent
- Request received
- Friends
- Blocked
- Unavailable

Her state için yalnız uygun eylemler görünür.

### No relationship

- Add friend

### Request sent

- Request sent
- Cancel, mevcutsa

### Request received

- Accept
- Decline

### Friends

- Message
- Invite
- Remove friend, ikincil

### Blocked

- Normal friendship aksiyonu yok
- Kendi blocked listesinde Unblock

State frontend tarafından tahmin edilmemelidir.

Backend response authoritative olmalıdır.

---

## 24. Block Politikası

Block bütün social capability’leri etkiler.

Block sonrasında:

- Friendship sona erebilir veya pasifleşebilir
- DM gönderilemez
- Room invite gönderilemez
- People You Watched With listesinde görünmez
- Profile görünürlüğü sınırlanır
- Presence bilgisi gizlenir
- Realtime channel erişimi güncellenir

Davranış mevcut canonical block politikasına göre uygulanır.

Invite veya eski friendship state block’u bypass edemez.

---

## 25. Privacy ve Veri Sınırları

Social Hub yalnız gerekli minimum veriyi göstermelidir.

Gösterilebilir:

- Avatar
- Display name
- Username
- Friendship state
- Güvenli ortak oda bağlamı
- Invite state
- Presence, izin varsa

Gösterilmemeli:

- Email
- Role
- Account-state reason
- Moderation geçmişi
- Exact last seen
- Private room history
- Tam arkadaş grafiği
- Başka kullanıcıların mutual friend sayısı
- Hassas join/leave timestamp
- Block direction internalleri

Public/social presenter’lar minimum güvenli veri döndürmelidir.

---

## 26. Presence ve Online Durumu

Görselde yeşil online noktaları bulunmaktadır.

Bu yalnız gerçek presence sistemi varsa kullanılabilir.

Presence:

- Privacy preference’a uyar
- Arkadaş olmayan kullanıcıya gösterilmez
- Block durumunda gösterilmez
- Exact activity timestamp sızdırmaz
- Realtime güncellenebilir
- Sahte varsayılan online state kullanmaz

Presence yoksa liste yine çalışır; online noktası gösterilmez.

---

## 27. Görsel Karakter

Social Hub:

- Sakin
- Yumuşak
- İnsan odaklı
- Oda merkezli
- Düşük gürültülü
- Güvenilir
- Ferah

olmalıdır.

Şunlara dönüşmemelidir:

- Facebook arkadaş listesi
- Instagram follower ekranı
- LinkedIn bağlantı merkezi
- Discord member browser
- Dating app eşleşme listesi
- Global people directory
- CRM sistemi

Social Hub’ın özgünlüğü:

> İnsanları profillerinden değil, paylaşılan anlardan hatırlatmasıdır.

---

## 28. Renk ve Yüzeyler

Görselde mor accent kullanılmaktadır.

Implementation kesin tasarım sistemini kullanır:

- Background: `#090A0F`
- Surface: `#10121A`
- Elevated: `#171A24`
- Hover: `#1D2130`
- Accent: `#FF625A`
- Success/online: `#5ED7A0`
- Warning: `#F0B55A`
- Error/destructive: `#E45B6A`

Nar çiçeği şu alanlarda kullanılır:

- Aktif sekme
- Add friend
- Accept
- Seçili Social Rail öğesi
- Focus

Her buton nar çiçeği dolgulu olmak zorunda değildir.

Decline ve View gibi işlemler secondary görünür.

---

## 29. Tipografi

- Social page title: Manrope `600–700`
- Sekmeler: Inter `500–600`
- Display name: Inter `500–600`
- Username/bağlam: Inter `400`
- Zaman ve metadata: Inter `400`
- Ana aksiyon: Inter `500–600`
- Empty state title: Manrope veya Inter `600`

Liste metinleri sıkıştırılmaz.

Sentence case kullanılır.

---

## 30. Boşluk ve Yoğunluk

Başlangıç yaklaşımı:

- Sayfa dış boşluğu: `32–40px`
- Sekme ile liste arası: `20–24px`
- Liste satırı yüksekliği: `64–76px`
- Satır içi padding: `12–16px`
- Avatar–metin arası: `12px`
- Ana aksiyonlar arası: `8px`
- Büyük bölüm arası: `24–32px`

Liste satırları card koleksiyonuna dönüşmemelidir.

Daha çok kontrollü yüzey veya sakin satır yapısı tercih edilir.

---

## 31. Responsive Davranış

Mobilde:

- Social Rail yoktur
- Alt navigasyon yoktur
- Minimal üst header vardır
- Sekmeler üstte bulunur
- İçerik tek kolondur
- İkincil işlemler bottom sheet veya menu’ye taşınır
- Button’lar minimum `44×44px`
- Safe area dikkate alınır
- Uzun isimler güvenli kesilir
- Yatay scroll yalnız sekmelerde kontrollü kullanılabilir

Desktop görünüm mobilde yalnız küçültülmez.

---

## 32. Erişilebilirlik

Aşağıdaki maddeler zorunludur:

- Social sekmeleri gerçek tab semantics kullanır
- Aktif sekme screen reader’a bildirilir
- Sayaçlar anlamlı accessible label taşır
- Kullanıcı satırları keyboard ile erişilebilir
- Avatar ve isim doğru sırayla okunur
- Add friend, Message, Accept ve Decline açık accessible name taşır
- `...` menüsü klavyeyle açılabilir
- Focus görünürdür
- Renk tek state göstergesi değildir
- Online durumu metinsel karşılığa sahiptir
- Liste güncellemeleri agresif live region kullanmaz
- Empty state heading yapısı doğrudur
- Touch target’lar minimum `44×44px`
- Contrast WCAG AA hedefini karşılar
- Reduced motion desteklenir
- Mobil sekme scroll’u keyboard ve screen reader ile kullanılabilir

---

## 33. Azaltılmış Hareket

`prefers-reduced-motion` açıkken:

- Social Rail geçişi fade veya anlık olur
- Liste satırı eklenme animasyonu kapanır
- Sayaç pulse etmez
- Sekme indicator hareketi sadeleşir
- Empty state aura statik kalır
- İşlevsel loading feedback’i korunur

---

## 34. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Kullanıcı isimleri
- Avatarlar
- Oda adları
- Zaman bilgileri
- Online noktaları
- Friends count
- Request count
- Invite count
- Add Friend butonları
- Message butonları
- Mobil alt navigasyon
- Mor renkler
- Shared room metinleri
- Search alanı
- Sorting seçenekleri
- `Clear list`
- Empty state illüstrasyonu
- Oda daveti metinleri
- People You Watched With kayıtları

Gerçek backend verisi, mevcut route’lar ve kesin tasarım tokenları kullanılmalıdır.

---

## 35. Otomatik Uygulanmayacak Görsel Unsurlar

### 35.1 Mobil alt navigasyon

Uygulanmaz.

### 35.2 Online filter

Gerçek presence sistemi yoksa uygulanmaz.

### 35.3 Exact time bilgileri

Privacy ve retention doğrulanmadan uygulanmaz.

### 35.4 Shared room bilgisi

Güvenli ortak oda verisi yoksa gösterilmez.

### 35.5 Clear blocked list

Toplu unblock capability’si yoksa uygulanmaz.

### 35.6 Social search

Yalnız mevcut liste içinde çalışabilir; global user search değildir.

### 35.7 Tüm sekmelerin aynı anda görünmesi

Mobilde uygun responsive çözüm kullanılabilir.

### 35.8 People You Watched With action seti

Friendship state’e göre dinamik olmalıdır; görseldeki Message + Add Friend aynı anda uygulanamaz.

---

## 36. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Feed eklemek
- Follower sistemi eklemek
- Like sistemi eklemek
- Global user search eklemek
- People directory oluşturmak
- Arkadaş olmayan kullanıcıya DM açmak
- Popüler kullanıcı sıralaması eklemek
- Mutual friends sayısı eklemek
- Verified veya premium badge eklemek
- Sahte friend/request/invite sayısı göstermek
- Sahte online state göstermek
- Private room geçmişi sızdırmak
- Exact last seen göstermek
- Mobil alt navigation eklemek
- Toplu unblock capability’si eklemek
- Dating app benzeri eşleşme sistemi oluşturmak
- People You Watched With listesini rastgele kullanıcılarla doldurmak
- Room invite access policy’sini bypass etmek
- Block politikasını yalnız frontend’de uygulamak
- Social Hub’ı dashboard’a çevirmek
- Tailwind veya React Router eklemek
- Görseldeki mor paleti kesin sistem olarak kullanmak

---

## 37. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu alanlarda uyarlama yapabilir:

- Mevcut friendship API response’u
- Requests ve Invites route yapısı
- People You Watched With presenter’ı
- Blocked Accounts endpoint’i
- Social Rail mevcut component entegrasyonu
- Sekme sayısı ve sırası
- Liste pagination yapısı
- Search ve sort alanları
- Mobil sekme davranışı
- Presence entegrasyonu
- Room invite state
- Existing DM route bağlantısı
- Accessibility için DOM yapısı
- Responsive breakpoint

Bu uyarlamalar oda merkezli sosyal model, no-feed ve no-global-search kararlarını değiştiremez.

---

## 38. Teknik Güvenilirlik

Social Hub state yönetimi şu riskleri ele almalıdır:

- Duplicate friend request
- Accept ve decline yarış koşulu
- Request kabul edilirken kullanıcı block edildi
- Invite görüntülenirken Room ended oldu
- Invite duplicate geldi
- Friendship kaldırılırken DM açık kaldı
- Unblock sonrası eski state cache’te kaldı
- Realtime sayaç ile HTTP snapshot uyuşmadı
- Sekme değişirken stale response geldi
- Aynı kullanıcı farklı listelerde çelişkili state taşıdı
- People You Watched With kaydı retention nedeniyle silindi

Recovery yaklaşımı:

- Authoritative backend snapshot
- Idempotent mutation
- Request deduplication
- Query invalidation
- Realtime reconcile
- Güvenli optimistic update rollback

---

## 39. Güvenlik ve Yetki Sınırları

- Kullanıcı yalnız kendi friends listesini okuyabilir
- Yalnız kendisine gelen request’i accept/decline edebilir
- Friendship mutation backend’de authorize edilir
- Invite yalnız hedef kullanıcı tarafından görülebilir
- Invite grant başka kullanıcıya taşınamaz
- Block listesi yalnız hesap sahibine açıktır
- Unblock yalnız kendi block kaydında çalışır
- People You Watched With yalnız izin verilen ortak Room bağlamını gösterir
- Private room metadata’sı sızdırılmaz
- Friendship state ID değiştirerek başka hesap adına yönetilemez
- Social counts yalnız gerçek authenticated kullanıcıya aittir
- CSRF mutation’larda korunur
- Rate limit ve abuse koruması doğrulanır

---

## 40. Performans Yaklaşımı

- Friends ve People You Watched With listeleri pagination kullanabilir
- Avatarlar lazy loading kullanır
- Sekme data’sı gerektiğinde fetch edilir
- Realtime event’ler bütün sayfayı rerender etmez
- Sayaçlar merkezi state’ten gelir
- Search debounce edilir
- Stale request iptal edilir
- Büyük listelerde virtualization yalnız gerçekten gerekiyorsa kullanılır
- Liste satırı height stabil kalır
- Social Rail açılıp kapanırken layout thrash oluşturmaz

Performans optimizasyonu state doğruluğunu bozamaz.

---

## 41. Wave Kapsamı Önerisi

Bu paket aşağıdaki capability bütünlerine ayrılabilir:

### 41.1 Social Hub Foundation

- Social route
- Desktop sekmeler
- Social Rail entegrasyonu
- Ortak liste satırı
- Loading/empty/error state’leri

### 41.2 Friends ve Requests

- Friends listesi
- Request accept/decline
- Friendship state
- Message bağlantısı
- Search ve pagination

### 41.3 People You Watched With

- Ortak Room kayıtları
- Privacy
- Add friend
- Safe shared-room context
- Retention davranışı

### 41.4 Room Invites

- Invite listesi
- Room state
- Join
- Expired/ended/full durumları
- DM ve notification ile state uyumu

### 41.5 Blocked Accounts

- Block listesi
- Unblock
- Friendship/DM/social etkileri
- Privacy

### 41.6 Mobile ve Accessibility

- Mobil sekmeler
- Touch davranışı
- Keyboard
- Screen reader
- Reduced motion
- Responsive QA

Kesin wave ayrımını Codex mevcut dosya ve API yapısına göre düzenleyebilir.

Ancak friendship state, Requests ve Friends listesi aynı capability bütününde birlikte test edilmelidir.

---

## 42. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Social Hub görsel referansla yan yana karşılaştırılmıştır
- Social Hub bağımsız sosyal ağ gibi görünmemektedir
- Feed bulunmamaktadır
- Follower bulunmamaktadır
- Like veya popülerlik sistemi bulunmamaktadır
- Global user search eklenmemiştir
- Social Rail yardımcı yüzey olarak kalmıştır
- Social Rail ana navigasyonun yerine geçmemektedir
- Friends, Requests, Invites, People You Watched With ve Blocked Accounts aynı tasarım ailesindedir
- Friends listesi yalnız gerçek arkadaşları göstermektedir
- Message aksiyonu yalnız arkadaşlarda görünmektedir
- Requests accept/decline işlemleri backend’de authorize edilmektedir
- Duplicate friendship oluşmamaktadır
- People You Watched With yalnız gerçek ortak Room verisi kullanmaktadır
- Private Room metadata’sı sızmamaktadır
- Block ve privacy tercihleri People You Watched With listesine uygulanmaktadır
- Invite listesi gerçek Room state’ini göstermektedir
- Ended, full, expired ve revoked invite durumları doğru ele alınmaktadır
- Invite ban veya capacity kontrolünü bypass etmemektedir
- Blocked Accounts yalnız hesap sahibine görünmektedir
- Unblock friendship’i otomatik geri getirmemektedir
- Sahte kullanıcı, sayaç veya presence kullanılmamaktadır
- Mobil alt navigasyon bulunmamaktadır
- Mobil Social Hub minimal header ve üst sekmeler kullanmaktadır
- İlk yüklemede skeleton vardır
- Sekme değişimi bütün ekranı blink ettirmemektedir
- Empty state’ler global user search yerine Room’a yönlendirmektedir
- Realtime güncellemeler duplicate üretmemektedir
- Scroll ve focus korunmaktadır
- Keyboard ve screen reader davranışı tamamlanmıştır
- Touch target’lar yeterlidir
- Reduced motion desteklenmiştir
- Desktop, tablet ve mobil QA yapılmıştır
- Typecheck ve build geçmiştir
- İlgili frontend, backend ve realtime testleri geçmiştir
- En az iki kullanıcıyla request → accept → friend → message akışı test edilmiştir
- Invite → join → ended/full senaryoları test edilmiştir
- Block → social hide → unblock davranışı test edilmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 43. Son Tasarım Hükmü

Social Hub, Vibehall’ın içinde ayrı bir sosyal medya ürünü değildir.

Doğru deneyim şudur:

- Kullanıcı bir Room’da biriyle karşılaşır
- O kişi People You Watched With alanında yeniden görünür
- Kullanıcı isterse arkadaşlık kurar
- Arkadaş olunca mesajlaşabilir
- Birbirlerini başka bir Room’a davet edebilirler
- Bağ koparsa veya rahatsızlık oluşursa block ve safety araçları devreye girer

Social Hub:

- İnsanları sayılara dönüştürmez
- Kullanıcıya sonsuz insan kataloğu sunmaz
- Bağlantıları algoritmik feed’e dönüştürmez
- Kullanıcıyı follower ve beğeni yarışına sokmaz

Bu tasarım paketinin başarı ölçütü kapsamlı bir sosyal merkez oluşturmak değildir.

Başarı ölçütü:

> Oda içinde başlayan gerçek karşılaşmaların, sakin ve güvenilir bir sistem içinde arkadaşlığa, mesaja ve yeniden ortak bir odaya dönüşebilmesidir.