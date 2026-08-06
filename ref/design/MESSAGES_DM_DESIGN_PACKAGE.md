# Messages ve DM Design Package

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Messages ve DM Design Package** görseli, Vibehall’ın arkadaşlar arası özel mesajlaşma deneyiminin onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Aşağıdaki kararları bağlayıcı biçimde temsil eder:

- Mesajlaşmanın friends-only yapısı
- Desktop Messages Hub kompozisyonu
- Açık DM konuşmasının sakin ve okunabilir yapısı
- Mobil konuşma ekranının sadeleştirilmiş düzeni
- Composer’ın güvenilir ve sürekli erişilebilir olması
- Sending, sent, failed ve edited gibi mesaj durumlarının düşük görsel ağırlıkla gösterilmesi
- Realtime güncellemelerin ekranı blink ettirmemesi
- Room invite kartlarının mesaj akışına doğal biçimde yerleşmesi
- Empty state’lerin kullanıcıya açık bir sonraki hareket sunması
- DM deneyiminin Discord veya Messenger klonuna dönüşmemesi

Ancak görselde bulunan bütün kullanıcılar, mesaj içerikleri, filtreler, durum göstergeleri, edited state’leri, typing indicator’ları, presence bilgileri ve oda daveti alanları mevcut ürün kabiliyeti olarak yorumlanamaz.

Implementation gerçek frontend ve backend mesaj kontratlarını, arkadaşlık erişim kurallarını, realtime davranışını, block politikalarını ve mevcut ürün kapsamını kullanmalıdır.

Ana ilke:

> DM, Vibehall’daki odalarda başlayan bağların sakin ve güvenilir devamıdır.

---

## 1. Ekranın Ana Amacı

Messages ve DM sisteminin temel amacı şudur:

> Kullanıcının yalnızca arkadaş olduğu kişilerle, odalarda kurulan bağın devamı olarak özel biçimde iletişim kurabilmesi.

Kullanıcı bu alanda:

- Arkadaşlarıyla olan konuşmalarını görebilmeli
- Açık bir konuşmaya kolayca geçebilmeli
- Mesaj gönderebilmeli
- Mesajın gönderiliyor, gönderildi veya başarısız olduğunu anlayabilmeli
- Oda davetini doğal biçimde paylaşabilmeli
- Realtime mesajları ekran zıplamadan alabilmeli
- Mesaj geçmişini rahat okuyabilmeli
- Arkadaşı veya konuşması yoksa ne yapacağını anlayabilmelidir

Messages bölümü bağımsız bir sosyal ağ veya genel chat platformu değildir.

Ana ilke:

> Yalnızca arkadaşlar, yalnızca gerçek bağlar, gereksiz gürültü yok.

---

## 2. Ürün Sınırı: Friends-Only Mesajlaşma

Bu paketin en kritik ürün kararı friends-only yapıdır.

Bir kullanıcı yalnızca:

- Aktif arkadaşlık ilişkisi bulunan
- Block veya account-state politikaları tarafından engellenmeyen
- Mesajlaşmaya yetkili

başka bir kullanıcıyla DM başlatabilir veya sürdürebilir.

Aşağıdakiler yapılamaz:

- Global kullanıcıya mesaj gönderme
- Username yazarak rastgele DM açma
- Takipçi/follower üzerinden mesajlaşma
- Public inbox
- Message request kutusu
- Arkadaş olmayan kullanıcıya ücretli veya özel mesaj
- Genel kullanıcı dizininden sohbet başlatma

Frontend yalnız görsel olarak kısıtlama yapamaz.

Friends-only politikası backend tarafından authoritative biçimde enforce edilmelidir.

---

## 3. Görsel Hiyerarşi

Messages alanındaki genel görsel öncelik sırası:

1. Aktif konuşma
2. Mesaj içeriği
3. Composer
4. Konuşulan kişinin kimliği
5. Conversation listesi
6. Sending/read/error durumları
7. İkincil menüler ve işlemler

Mesajlaşma ekranının başrolü:

> İnsan ve konuşma.

Sidebar, filtreler, unread sayaçları veya status göstergeleri konuşmanın önüne geçemez.

---

## 4. Desktop Messages Hub Kompozisyonu

Desktop Messages Hub temel olarak üç kontrollü bölgeye ayrılabilir:

1. Global shell veya Social Rail
2. Conversation listesi
3. Aktif conversation alanı veya boş state

Görselde solda global ürün navigasyonu, ortada konuşma listesi ve sağda aktif alan bulunmaktadır.

Bu genel ilişki korunabilir.

Ancak global shell daha önce onaylanan Global Shell ve Navigasyon sisteminden gelmelidir. Messages sayfası kendine özel yeni ana navigasyon üretmemelidir.

---

### 4.1 Conversation listesi

Conversation listesi şu bilgileri taşıyabilir:

- Kullanıcı avatarı
- Display name veya username
- Son mesajın kısa özeti
- Son aktivite zamanı
- Unread count
- Online/presence durumu, mevcut gizlilik politikası izin veriyorsa
- Oda daveti gönderilmişse ilgili küçük özet

Liste:

- Rahat taranabilir
- Aşırı yüksek veya aşırı kompakt olmayan
- Seçili konuşmayı açık biçimde gösteren
- Büyük mesaj önizlemeleriyle şişmeyen
- Aktif konuşma alanıyla yarışmayan

bir yapıda olmalıdır.

#### Conversation row davranışı

Hover:

- Yüzey hafifçe açılır
- Büyük glow kullanılmaz

Selected:

- `#171A24` benzeri focus yüzeyi
- Nar çiçeği küçük indicator
- Daha güçlü metin

Unread:

- Semibold isim
- Küçük gerçek unread badge
- Son mesajın daha yüksek kontrastı

---

### 4.2 Conversation listesi araması

Görselde:

> Search friends…

alanı bulunmaktadır.

Bu arama yalnız kullanıcının arkadaşları veya mevcut konuşmaları içinde çalışabilir.

Global user search’e dönüşemez.

Arama şu alanlarda çalışabilir:

- Display name
- Username
- Mevcut conversation listesi

Yeni arkadaş bulma sistemi değildir.

Sonuç yoksa:

> No conversations match your search.

gibi lokal state gösterilebilir.

---

### 4.3 All / Unread filtresi

Görselde:

- All
- Unread

filtreleri bulunmaktadır.

Bu, mevcut message state ve API destekliyorsa kullanılabilir.

Unread filtresi:

- Yalnız gerçekten unread mesajı olan conversation’ları gösterir
- Count gerçek backend verisinden gelir
- Realtime güncellenir
- Hard-coded olmaz

Mevcut backend unread state tutmuyorsa sırf görsel için yeni karmaşık unread altyapısı eklenemez; ancak launch readiness kapsamında zaten planlanan bir capability ise ilgili kontrata göre uygulanabilir.

---

## 5. Desktop Açık DM Konuşması

Açık konuşma alanı üç ana bölümden oluşur:

1. Conversation header
2. Message history
3. Composer

### 5.1 Conversation header

Header şu bilgileri taşıyabilir:

- Geri, dar ekranda
- Avatar
- Display name
- Presence veya son durum, izin varsa
- Küçük seçenek menüsü

Görselde daha önce çıkarılan arama ve görüntülü arama butonları artık bulunmamaktadır. Bu karar bağlayıcıdır.

DM içinde:

- Sesli arama
- Görüntülü arama
- Screen share
- Call history

özelliği yoktur ve eklenemez.

Conversation header sade kalmalıdır.

#### Seçenek menüsü

Gerçek ürün kapsamına göre şunları içerebilir:

- View profile
- Report
- Block
- Delete local conversation view, gerçekten destekleniyorsa
- Leave veya clear gibi mevcut davranışlar

Yeni davranış sırf menü doldurmak için eklenmez.

---

## 6. Mesaj Geçmişi

Mesaj geçmişi sakin ve kolay okunabilir olmalıdır.

### 6.1 Mesaj biçimi

Ana tasarım dili büyük, parlak ve renkli chat balonları değildir.

Mesajlar:

- Küçük koyu yüzey
- Kontrollü radius
- Rahat satır yüksekliği
- Düşük görsel gürültü
- Gönderen ve alıcı arasında sade yön farkı

kullanır.

Kendi mesajları ile alınan mesajlar:

- Hizalama
- Hafif yüzey tonu
- Küçük accent ayrımı

ile farklılaşabilir.

Bütün gönderilen mesajları parlak nar çiçeği balona çevirmek yasaktır.

### 6.2 Avatar ve isim tekrarları

Arka arkaya aynı kişinin mesajlarında:

- Avatar tekrarları azaltılabilir
- Mesajlar grup hâlinde görünür
- Zaman bilgisi yalnız gerekli yerde gösterilir

Bu davranış message history’yi daha sakin yapar.

### 6.3 Gün ayırıcıları

`Today`, tarih veya gün ayırıcıları:

- Ortalanmış
- Soluk
- Küçük
- Mesaj akışından daha düşük ağırlıkta

olmalıdır.

---

## 7. Mesaj Durumları

Görselde aşağıdaki durumlar gösterilmektedir:

- Received
- Sent
- Sending
- Error
- Edited
- Read

Bunların yalnız gerçek backend/realtime kontratında karşılığı olanları uygulanmalıdır.

### 7.1 Sending

Mesaj optimistic olarak ekleniyorsa:

- Mesaj anında akışta görünür
- Küçük sending indicator taşır
- Tüm composer kilitlenmez
- Kullanıcı başka mesaj yazmaya devam edebilir, mevcut sıra/queue güvenliyse
- Mesaj görünmez şekilde kaybolmaz

Sending state:

- Küçük spinner
- Soluk timestamp
- `Sending…` metni, gerekirse

ile gösterilebilir.

### 7.2 Sent

Backend mesajı kabul ettiğinde:

- Sending state sessizce sent durumuna geçer
- Balon zıplamaz
- Mesaj yeniden eklenip duplicate oluşturmaz

### 7.3 Delivered ve Read

Delivered/read bilgisi yalnız backend gerçekten destekliyorsa kullanılır.

Görseldeki çift tik yalnız tasarım örneğidir.

Read receipt sistemi yoksa:

- Eklenmez
- Sahte tik gösterilmez
- “Seen” davranışı uydurulmaz

Read receipt mevcutsa kullanıcı gizlilik kararlarıyla uyumlu olmalıdır.

### 7.4 Error

Mesaj gönderilemezse:

- Mesaj akışta kalır
- Küçük hata durumu gösterir
- Retry aksiyonu sunabilir
- Kullanıcının yazdığı içerik kaybolmaz

Örnek:

> Message failed. Tap to retry.

Retry aynı mesajı güvenli biçimde yeniden gönderir; duplicate üretmez.

### 7.5 Edited

Görselde edited state bulunmaktadır.

Mesaj düzenleme mevcut ürün kabiliyetinde yoksa uygulanmaz.

Görselde yer alması yeni edit-message özelliği anlamına gelmez.

---

## 8. Composer

Composer DM deneyiminin güvenilir merkezi olmalıdır.

### 8.1 Temel yapı

Composer:

- Mesaj input’u
- Gönder butonu
- Mevcut gerçek ek özellikler, varsa
- Lokal loading/error davranışı

taşır.

Görselde solda `+` butonu vardır.

Bu buton yalnız gerçek bir davranışa bağlıysa kullanılabilir.

Örnek:

- Room invite eklemek
- Mevcut desteklenen medya eki
- Fotoğraf gönderme, yalnız ürün kontratında gerçekten varsa

İşlevsiz `+` butonu gösterilmez.

### 8.2 Input davranışı

- Tek satırdan kontrollü birkaç satıra büyüyebilir
- Çok uzun mesajda max height ve iç scroll kullanır
- Enter ile gönderme davranışı platform standardına uygun olur
- Shift+Enter yeni satır olabilir
- IME davranışı bozulmaz
- Mobil klavye ile uyumludur
- Draft text yanlış conversation’a taşınmaz

### 8.3 Composer sabitliği

Desktop’ta conversation alanının altında sabit kalır.

Mobilde:

- Safe area dikkate alınır
- Klavye açılınca görünür kalır
- Son mesajlar composer arkasında kaybolmaz
- Viewport zıplaması minimum olur

### 8.4 Sending sırasında composer

Görselde sending state açık fakat sakin gösterilmektedir.

Ana karar:

> Bir mesaj gönderilirken composer’ın tamamı gereksiz yere kilitlenmez.

Ancak backend yalnız tek in-flight mesajı güvenli destekliyorsa:

- Gönder butonu kısa süre disabled olabilir
- Input kullanılabilir kalabilir
- Kullanıcı metni kaybolmaz

Teknik gerçeklere göre güvenli davranış seçilir.

---

## 9. Typing Indicator

Görselde:

> sylxne is typing…

gibi typing indicator bulunur.

Bu özellik yalnız realtime backend gerçekten typing event destekliyorsa uygulanır.

Typing indicator:

- Sakin
- Kısa ömürlü
- Ekranı zıplatmayan
- Sürekli yanıp sönmeyen
- Conversation’a özel

olmalıdır.

Typing event yoksa sırf görsel için yeni sistem eklenmez.

Typing indicator participant’ın hassas aktivite zamanını kalıcı biçimde saklamamalıdır.

---

## 10. Realtime Davranış

Mesajlaşma gerçek zamanlı çalışırken şu ilkeler korunur:

- Yeni mesaj sessizce akışa eklenir
- Duplicate mesaj oluşmaz
- Conversation listesinde son mesaj güncellenir
- Unread count doğru artar
- Açık conversation’daki mesaj unread sayılmaz veya mevcut kontrata göre işlenir
- Ekran loading state’e dönmez
- Conversation listesi blink etmez
- Scroll pozisyonu korunur
- Kullanıcı eski mesajları okuyorsa otomatik en alta zorla atılmaz

### 10.1 Auto-scroll

Kullanıcı conversation’ın en altındaysa:

- Yeni mesaj geldiğinde aşağı kaydırılabilir

Kullanıcı yukarıda geçmiş okuyorsa:

- Scroll pozisyonu korunur
- `New messages` indicator gösterilebilir

### 10.2 Connection state

Bağlantı durumu:

- Küçük ve sakin indicator
- Reconnecting durumunda mevcut mesajlar korunur
- Bağlantı geri gelince eksik mesajlar reconcile edilir
- Tam ekran spinner gösterilmez

---

## 11. Room Invite in DM

Room invite kartı DM akışının gerçek ve önemli bir parçasıdır.

Amaç:

> Bir arkadaşı aktif bir odaya davet etmeyi, normal mesajın doğal devamı hâline getirmek.

### 11.1 Invite kartında bulunabilecekler

- `Room invite`
- Oda adı
- Host
- Thumbnail
- Live veya ended durumu
- Participant count, gerçekse
- `Join room` CTA

### 11.2 Davranış

Invite kartı gerçek room state’iyle güncellenmelidir.

Room:

- Live ise Join room
- Ended ise Room ended
- Full ise Room full
- Private access gerekiyorsa mevcut invite grant kontratı
- Kullanıcı banned ise erişim reddi

davranışını göstermelidir.

Invite kartı access kontrolünü bypass edemez.

### 11.3 Görsel dil

Invite kartı:

- Mesaj akışından tamamen yabancı görünmez
- Normal metin balonundan biraz daha güçlü yüzey
- Thumbnail’den kontrollü aura
- Tek CTA
- Küçük metadata

kullanır.

Büyük reklam kartına dönüşmemelidir.

---

## 12. Empty State’ler

Görselde iki temel empty state vardır:

- No messages yet
- No friends yet

Bunlar ayrı durumlar olarak korunmalıdır.

### 12.1 No messages yet

Kullanıcının arkadaşları var fakat conversation seçilmemiş veya hiç mesajlaşma yoksa:

> No messages yet.

> Select a friend to start a conversation.

CTA veya yönlendirme:

> View friends

veya conversation listesi kullanılabilir.

### 12.2 No friends yet

Kullanıcının hiç arkadaşı yoksa:

> No friends yet.

> Meet people in rooms and add the ones you connect with.

CTA:

> Discover rooms

veya:

> Go to Social

olabilir.

Görselde `Find friends` CTA’sı bulunmaktadır.

Global kullanıcı araması olmadığı için bu metin dikkatle değerlendirilmelidir.

`Find friends`, kullanıcı dizini çağrışımı yapıyorsa kullanılmamalıdır.

Daha doğru yön:

> Discover rooms

çünkü Vibehall’da insanlar odalarda karşılaşır.

### 12.3 Conversation seçilmemiş state

Desktop’ta sağ ana alan:

> Select a friend to start.

gibi sakin bir state gösterebilir.

Büyük illüstrasyon zorunlu değildir.

---

## 13. Block Politikası

Block davranışı mesajlaşmada authoritative olmalıdır.

Bir kullanıcı diğerini engellediğinde veya block ilişkisi oluştuğunda:

- Yeni mesaj gönderilemez
- Conversation composer uygun state’e geçer
- Realtime gönderim durur
- User presence veya hassas bilgiler gizlenebilir
- Mevcut conversation geçmişinin görünürlüğü mevcut ürün politikasına göre korunur veya sınırlandırılır

UI, kimin kimi engellediğini gereksiz yere ifşa etmemelidir.

Örnek nötr state:

> Messaging is unavailable for this conversation.

Backend error reason doğrudan kullanıcıya sızdırılmaz.

---

## 14. Account State ve Mesajlaşma

Restricted, suspended veya banned hesap politikaları backend tarafından uygulanır.

Örneğin:

- Restricted kullanıcı mesaj gönderebilir mi?
- Suspended kullanıcı conversation okuyabilir mi?
- Banned kullanıcı session kullanabilir mi?

mevcut canonical account-state kontratına göre korunmalıdır.

UI yalnız backend kararını kullanıcı dostu biçimde açıklar.

Yeni account-state davranışı sırf bu ekran için tanımlanmaz.

---

## 15. Presence ve Status Indicators

Görselde:

- Online
- Idle
- Offline
- Do not disturb

durumları bulunmaktadır.

Bunların tamamı mevcut ürün özelliği değildir.

Yalnız gerçek presence kontratında bulunan durumlar kullanılabilir.

### 15.1 Otomatik uygulanmayacak state’ler

- Idle
- Do not disturb
- Custom status
- Last active exact timestamp

mevcut sistemde yoksa eklenmez.

### 15.2 Gizlilik

Presence:

- Kullanıcı privacy ayarlarına uyar
- Hassas dakika/saniye bilgisi sızdırmaz
- Arkadaş olmayan kişilere gösterilmez
- Block ilişkilerinde korunur

Görselin altındaki status board yalnız biçim referansıdır.

---

## 16. Mobil Konuşma Listesi

Mobilde Messages Hub ve conversation aynı anda yan yana gösterilmez.

Akış:

1. Conversation listesi
2. Conversation seçimi
3. Açık conversation
4. Geri ile listeye dönüş

Mobil liste:

- Avatar
- İsim
- Son mesaj
- Zaman
- Unread count

gösterir.

Global alt navigasyon kullanılmaz.

Minimal üst header ve geri davranışı kullanılır.

---

## 17. Mobil Açık Conversation

Mobil açık conversation:

- Minimal header
- Avatar ve isim
- Küçük seçenek menüsü
- Mesaj geçmişi
- Composer
- Typing/reconnect indicator

taşır.

Arama veya görüntülü arama butonu bulunmaz.

Bu özellikle bağlayıcıdır.

### 17.1 Klavye açık durumu

Görselde mobil klavye ayrı bir frame’de gösterilmiştir.

Klavye açıldığında:

- Composer klavyenin üzerinde kalır
- Son mesaj görünür kalır
- Header gereksiz büyümez
- Viewport hesaplaması kontrollü olur
- Safe area korunur
- Scroll jump minimum olur

### 17.2 Mobil message density

Mesajlar çok geniş bubble kullanmamalı.

Metin okunabilir kalmalı ve yanlarda yeterli nefes olmalıdır.

---

## 18. Docked Conversation Panel

Önceki tasarım listesinde docked conversation panel ayrı örnek olarak değerlendirilmişti.

Bu görsel doğrudan docked panel göstermese de aynı DM dilinden türetilebilir.

Docked panel mevcut ürün özelliğiyse:

- Desktop ana ekranın yanında küçük conversation yüzeyi
- Aynı composer ve message bileşenleri
- Daha kompakt header
- Resize veya minimize, yalnız mevcutsa
- Global DM’nin kopyası olmayan sade yapı

kullanır.

Yeni dock sistemi sırf görsel paketinde bahsedildiği için eklenmez.

---

## 19. Mesaj Zamanı ve Tarih Davranışı

Timestamp’ler:

- Her mesajda sürekli görünmek zorunda değildir
- Hover/focus veya grup sonlarında gösterilebilir
- Mobilde daha sakin tutulabilir
- Kullanıcının locale ve timezone’una göre formatlanır

Exact timestamp hassas sosyal aktivite hissi yaratacak biçimde public yüzeylere sızdırılmaz.

DM içinde mesaj timestamp’i işlevsel olduğu için gösterilebilir.

---

## 20. Message History Pagination

Uzun conversation’larda mesaj geçmişi kontrollü yüklenmelidir.

Tercih edilen davranış:

- En yeni mesajlarla açılır
- Yukarı scroll’da eski mesajlar yüklenir
- Yeni mesajlar mevcut viewport’u bozmaz
- Eski mesaj yüklenirken scroll anchor korunur
- Skeleton veya küçük lokal loading
- Tam ekran spinner yok

Pagination mevcut backend cursor/page kontratına uyar.

---

## 21. Mesaj İçerik Güvenliği

Mesajlar render edilirken:

- HTML escape edilir
- Script veya unsafe markup çalıştırılmaz
- URL handling güvenli olur
- Çok uzun kelimeler layout’u bozmaz
- Emoji desteklenebilir
- Mention sistemi yoksa mention parsing eklenmez
- Markdown desteği yoksa eklenmez

Link preview veya attachment sistemi sırf görsel için eklenmez.

Room invite kartı ayrı typed message veya structured payload ise mevcut kontrat korunur.

---

## 22. Report ve Moderasyon

DM içindeki report aksiyonu mevcut güvenlik akışına bağlanmalıdır.

Report:

- Belirli mesaj veya conversation bağlamına bağlı
- Kullanıcıya açık reason seçenekleri
- Gerekli context/evidence sınırları
- Backend audit
- Privacy koruması

ile çalışmalıdır.

Admin genel DM inbox’ını serbestçe gezemez.

Yalnız report-linked ve audit edilen evidence/context yüzeyleri kullanılabilir.

Mesaj report butonu:

- Sürekli görünmek zorunda değildir
- Hover/focus/long press ile açılabilir
- Mobilde seçenek menüsünde bulunabilir

---

## 23. Delete Davranışları

Görselde delete veya clear doğrudan gösterilmemektedir.

Mevcut üründe mesaj silme, conversation silme veya local hide davranışı varsa:

- Gerçek kontrata göre uygulanır
- “Delete for everyone” yoksa eklenmez
- Silinen mesaj state’i doğru gösterilir
- Kullanıcı verisi yanlışlıkla server’dan silinmez

Yeni delete/edit sistemi bu wave içinde icat edilmez.

---

## 24. Görsel Karakter

Messages ekranı:

- Koyu
- Sakin
- Okunabilir
- Düşük görsel gürültülü
- Güvenilir
- İnsan odaklı

olmalıdır.

Şunlara benzememelidir:

- Discord server yapısı
- Messenger renkli balon sistemi
- Slack workspace
- Telegram feature yoğunluğu
- Twitch chat
- Gaming overlay

Vibehall DM’in farklılığı:

> Odalarda oluşan karşılaşmaların özel ve sessiz devamı olmasıdır.

---

## 25. Renk ve Yüzeyler

Görselde mor vurgu kullanılmıştır.

Implementation kesin tasarım sistemini kullanır:

- Background: `#090A0F`
- Surface: `#10121A`
- Elevated: `#171A24`
- Hover: `#1D2130`
- Accent: `#FF625A`
- Success/online: `#5ED7A0`
- Error: `#E45B6A`

Mesaj balonları nar çiçeği ile doldurulmaz.

Accent yalnız:

- Aktif conversation
- Send button
- Focus
- Küçük selected state

için kontrollü kullanılır.

---

## 26. Tipografi

- Messages page title: Manrope `600–700`
- Conversation name: Inter veya Manrope `600`
- Message body: Inter `400`
- Timestamp: Inter `400`
- Composer: Inter `400–500`
- Status/error: Inter `400–500`

Mesaj metni yaklaşık `15–16px` aralığında rahat okunabilir olmalıdır.

Line-height sıkıştırılmaz.

---

## 27. Boşluk ve Yoğunluk

Messages kullanıcıya dönük diğer ekranlardan biraz daha yoğun olabilir; fakat sıkışık olamaz.

Başlangıç yaklaşımı:

- Conversation list row: `64–76px`
- Message group gap: `8–12px`
- Farklı kullanıcı grubu: `16–20px`
- Composer padding: `12–16px`
- Desktop conversation area side padding: `24–32px`
- Mobile side padding: `12–16px`

Mesajlar ekranın tamamına çok geniş yayılmaz.

Okuma satırı kontrollü kalır.

---

## 28. Loading Davranışı

### İlk yükleme

- Conversation list skeleton
- Açık conversation varsa message skeleton
- Composer surface korunur
- Global shell görünür kalır

### Conversation değişimi

- Önceki conversation yanlış kişiye ait mesaj göstermemeli
- Lokal skeleton veya kısa placeholder
- Tüm Messages sayfası loading’e dönmez

### Yeni mesaj gönderme

- Mesaj optimistic eklenebilir
- Lokal sending state
- Composer korunur

### Eski mesajları yükleme

- Üstte küçük loading
- Scroll anchor korunur

Tam sayfa spinner kullanılmaz.

---

## 29. Error Durumları

### Conversation list yüklenemedi

> We couldn’t load your conversations.

CTA:

> Try again

### Conversation yüklenemedi

Yalnız açık conversation alanında hata gösterilir.

Liste kullanılabilir kalır.

### Send failed

Mesaj üzerinde error + retry.

### Realtime disconnected

Küçük connection indicator:

> Reconnecting…

Mevcut mesajlar ekranda kalır.

### Friendship no longer valid

> Messaging is no longer available for this conversation.

Ham backend error gösterilmez.

---

## 30. Empty State Görsel Dili

Görselde mor illüstrasyonlar bulunmaktadır.

Bunlar zorunlu asset değildir.

Empty state:

- Küçük soyut ikon
- Hafif aura
- Kısa mesaj
- Net tek aksiyon

kullanır.

Sahte conversation veya fake friend gösterilmez.

---

## 31. Erişilebilirlik

Aşağıdaki maddeler zorunludur:

- Conversation listesi keyboard ile gezilebilir
- Seçili conversation semantik olarak anlaşılır
- Unread count anlamlı accessible label taşır
- Message history mantıklı DOM sırasındadır
- Kullanıcı adı ve mesaj birlikte doğru okunur
- Sending/error/read state’leri screen reader’a kontrollü bildirilir
- Composer görünür label veya accessible name taşır
- Send button accessible name taşır
- Typing indicator agresif live region kullanmaz
- Yeni mesajlar kullanıcıyı kesintiye uğratmadan duyurulur
- Room invite kartı anlamlı label taşır
- Focus görünürdür
- Touch target’lar minimum yaklaşık `44×44px`
- Contrast WCAG AA hedefini karşılar
- Long press işlemlerinin keyboard karşılığı vardır
- Reduced motion desteklenir

---

## 32. Azaltılmış Hareket

`prefers-reduced-motion` açıkken:

- Mesaj giriş animasyonu kapanır
- Typing dots hareketi sadeleşir
- Conversation geçişi fade veya doğrudan olur
- Unread badge pulse etmez
- Room invite aura statik kalır
- İşlevsel loading indicator korunur

---

## 33. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Kullanıcı isimleri
- Avatarlar
- Mesaj içerikleri
- Zamanlar
- Unread count
- Online status
- Typing indicator
- Read tikleri
- Edited state
- Room invite bilgileri
- Thumbnail
- Find friends CTA
- Mor illüstrasyonlar
- Conversation sayısı
- Status indicator board
- `+` composer butonu
- Mobil cihaz çerçevesi
- Mor renk sistemi

Gerçek veri, gerçek backend kontratı ve kesin design tokenları kullanılmalıdır.

---

## 34. Otomatik Uygulanmayacak Görsel Unsurlar

### 34.1 Read receipts

Backend desteği yoksa eklenmez.

### 34.2 Edited messages

Mesaj düzenleme yoksa eklenmez.

### 34.3 Typing indicator

Realtime typing sistemi yoksa eklenmez.

### 34.4 Idle ve Do Not Disturb

Presence kontratında yoksa eklenmez.

### 34.5 Find friends

Global user search çağrışımı nedeniyle yeniden yazılmalıdır.

### 34.6 Composer `+` menüsü

Gerçek attachment/invite davranışı yoksa gösterilmez.

### 34.7 Room invite rich card

Mevcut structured invite message kontratı varsa uygulanır; yoksa ayrı capability gerektirir.

### 34.8 Call butonları

Bu görselin güncel sürümünde bulunmamaktadır ve eklenmeyecektir.

---

## 35. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Sesli arama eklemek
- Görüntülü arama eklemek
- Screen share eklemek
- Arkadaş olmayan kullanıcıya DM açmak
- Global user search eklemek
- Message request sistemi eklemek
- Discord server/channel yapısı eklemek
- Renkli büyük chat balonlarını ana dil yapmak
- Read receipt eklemek, backend yoksa
- Edit message eklemek
- Typing sistemi eklemek, mevcut değilse
- File attachment eklemek, mevcut değilse
- Idle veya DND status eklemek
- Sahte online state göstermek
- Sahte unread count kullanmak
- Sahte message history kullanmak
- Genel admin DM browser eklemek
- Message içeriğini unsafe HTML olarak render etmek
- Composer’ı her sending sırasında tamamen kilitlemek
- Realtime refresh’te listeyi blink ettirmek
- Mesaj hatasında içeriği kaybetmek
- Yeni CSS framework veya router eklemek

---

## 36. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu alanlarda uyarlama yapabilir:

- Mevcut DM API response’u
- Conversation list data yapısı
- Realtime event isimleri
- Optimistic message modeli
- Message ID reconciliation
- Pagination/cursor sistemi
- Unread state
- Existing Social Rail entegrasyonu
- Room invite message type
- Responsive breakpoint
- Mobile keyboard handling
- Accessibility için DOM yapısı
- Existing reusable Avatar, Badge, Toast ve Composer bileşenleri

Bu uyarlamalar friends-only politikasını, sade conversation kompozisyonunu veya call özelliği olmaması kararını değiştiremez.

---

## 37. Teknik Güvenilirlik

Realtime message sistemi aşağıdaki riskleri ele almalıdır:

- Duplicate message
- Out-of-order delivery
- Reconnect sonrası eksik mesaj
- Optimistic message ile server message eşleştirme
- Gönderim timeout’u
- Retry sonrası duplicate
- Conversation değişirken stale response
- Unread count yarış koşulları
- Block/friendship state değişimi
- Session expiry

Client generated temporary ID veya mevcut eşdeğer mekanizma kullanılıyorsa server message ile güvenli biçimde reconcile edilmelidir.

Kullanıcı aynı mesajı iki kez görmemelidir.

---

## 38. Privacy ve Güvenlik

- DM yalnız friends-only
- Backend authorization her read/send işleminde
- Block policy enforce edilir
- Report context sınırlandırılır
- Mesaj içeriği XSS’e karşı escape edilir
- Rate limit veya abuse protection doğrulanır
- Message body length backend’de sınırlandırılır
- Hassas account internalleri response’a eklenmez
- Admin genel inbox browse yapamaz
- Realtime channel authorization korunur
- Conversation ID tahmin edilerek başka DM okunamaz

Frontend’de conversation gizlemek güvenlik değildir; backend yetki kontrolü zorunludur.

---

## 39. Performans Yaklaşımı

- Conversation list pagination veya sınırlı fetch
- Message history cursor pagination
- Virtualization yalnız gerçekten gerekliyse
- Stable scroll anchor
- Avatar lazy loading
- Gereksiz full-list rerender önleme
- Realtime event batching
- Stale request cancellation
- Composer draft state izolasyonu
- Thumbnail optimization, room invite kartında

değerlendirilmelidir.

Performans optimizasyonu mesaj doğruluğunu bozamaz.

---

## 40. Wave Kapsamı Önerisi

Bu paket şu capability bütünlerine ayrılabilir:

### Messages Hub Foundation

- Conversation list
- Search/filter
- Empty state
- Selected conversation
- Global shell entegrasyonu

### DM Conversation Experience

- Header
- Message history
- Composer
- Message groups
- Timestamp
- Mobile layout

### Send Reliability

- Optimistic sending
- Pending/sent/error
- Retry
- Duplicate prevention
- Reconnect reconciliation

### Realtime and Unread

- New messages
- Conversation preview update
- Unread count
- Auto-scroll
- Connection state

### Room Invite Integration

- Structured invite card
- Room state
- Join action
- Access policy

### Safety and Accessibility

- Friends-only enforcement
- Block/report
- Keyboard
- Screen reader
- Mobile keyboard
- Reduced motion

Kesin wave bölünmesini Codex mevcut codebase’e göre düzenleyebilir. Ancak optimistic send, realtime reconciliation ve duplicate prevention aynı güvenilirlik bütününde birlikte test edilmelidir.

---

## 41. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Messages Hub görsel referansla yan yana karşılaştırılmıştır
- Conversation listesi ve açık konuşma arasında net hiyerarşi vardır
- DM yalnız arkadaşlar arasında çalışmaktadır
- Arkadaş olmayan kullanıcıya mesaj gönderilememektedir
- Call veya video-call butonu bulunmamaktadır
- Global user search eklenmemiştir
- Conversation search yalnız mevcut arkadaşlar/konuşmalar içinde çalışmaktadır
- Büyük renkli mesaj balonları ana tasarım dili değildir
- Message history sakin ve okunabilirdir
- Composer sürekli erişilebilir ve güvenilirdir
- Sending sırasında bütün composer gereksiz yere kilitlenmemektedir
- Optimistic message duplicate oluşturmamaktadır
- Failed message kaybolmamakta ve retry sunmaktadır
- Reconnect sonrasında eksik/duplicate mesaj oluşmamaktadır
- Realtime güncelleme loading blink üretmemektedir
- Unread count yalnız gerçek veriden gelmektedir
- Read receipt yalnız backend destekliyorsa kullanılmaktadır
- Edited state yalnız gerçek capability varsa kullanılmaktadır
- Typing indicator yalnız gerçek realtime desteği varsa kullanılmaktadır
- Room invite kartı gerçek room state ve access politikasına uymaktadır
- Ended/full/banned room invite durumları doğru ele alınmaktadır
- Block politikası backend’de enforce edilmektedir
- Empty conversation ve no friends state’leri ayrıdır
- `Find friends` dili global directory çağrışımı yaratmayacak biçimde düzeltilmiştir
- Mobilde klavye açıldığında composer görünür kalmaktadır
- Scroll anchor davranışı doğrudur
- Message pagination çalışmaktadır
- XSS ve authorization kontrolleri tamamlanmıştır
- Keyboard ve screen reader davranışı test edilmiştir
- Reduced motion desteklenmiştir
- Typecheck ve build geçmiştir
- İlgili frontend/backend/realtime testleri geçmiştir
- Staging üzerinde iki gerçek kullanıcıyla uçtan uca DM testi yapılmıştır
- Kullanıcı staging ekranını onaylamıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 42. Son Tasarım Hükmü

Messages ve DM alanı Vibehall’ın içinde ayrı bir mesajlaşma uygulaması değildir.

Doğru deneyim şudur:

- Kullanıcı bir odada biriyle karşılaşır
- Arkadaşlık kurar
- Daha sonra o kişiyle sakin biçimde mesajlaşır
- Birbirlerini tekrar bir odaya çağırabilirler
- Sosyal bağ, odadan kopmadan devam eder

Messages alanı:

- Feed üretmez
- Takipçi sistemi oluşturmaz
- Yabancılardan mesaj toplamaz
- Görüntülü arama platformuna dönüşmez
- Kullanıcıyı bildirim ve durum kalabalığına boğmaz

Bu tasarım paketinin başarı ölçütü çok özellikli bir messenger oluşturmak değildir.

Başarı ölçütü:

> Kullanıcının yalnızca gerçek arkadaşlarıyla, güvenilir ve sakin bir arayüz içinde iletişim kurabilmesi ve odalarda başlayan bağların doğal biçimde devam edebilmesidir.