# Profile ve Settings Design Package

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Profile ve Settings Design Package** görseli, Vibehall’ın kullanıcı kimliği, public profil, profil düzenleme, hesap ayarları ve gizlilik yüzeyleri için onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Aşağıdaki kararları bağlayıcı biçimde temsil eder:

- Profilin sade ve oda merkezli kimlik anlayışı
- Avatar, display name, username ve bio’nun temel profil unsurları olması
- Profilin follower, like, puan ve rozet rekabetine dönüşmemesi
- Kendi profili ile başka kullanıcının gördüğü public profil arasındaki ayrım
- Settings alanının kurumsal dashboard değil, sakin bir hesap kontrol merkezi olması
- Gizlilik ayarlarının anlaşılır ve güvenilir biçimde sunulması
- Desktop ve mobil yüzeylerin aynı tasarım ailesinden türemesi
- Profil ve sosyal alanların Vibehall’ın oda merkezli ruhundan kopmaması

Ancak görselde yer alan bütün ayar kategorileri, banner görseli, son odalar, cihaz yönetimi, bildirim tercihleri, dil değiştirme, read receipts ve online status kontrolleri mevcut ürün kabiliyeti olarak yorumlanamaz.

Implementation gerçek profil modeli, mevcut account API’leri, avatar upload sistemi, privacy kontratları, social capability’leri ve canonical ürün kurallarını kullanmalıdır.

Ana ilke:

> Profil kullanıcının Vibehall’daki sade kimliğidir; bir performans vitrini veya sosyal statü sayfası değildir.

---

## 1. Ekranın Ana Amacı

Profile ve Settings sisteminin temel amacı şudur:

> Kullanıcının Vibehall’daki kimliğini sade biçimde göstermesi, kendi bilgilerini güvenle yönetmesi ve görünürlük tercihlerini kontrol edebilmesi.

Kullanıcı bu alanlarda:

- Kendi profilini görebilmeli
- Avatarını, display name’ini ve bio’sunu yönetebilmeli
- Username ve hesap bilgilerini mevcut kurallara göre görebilmeli
- Başka bir kullanıcının public profilini güvenli sınırlar içinde inceleyebilmeli
- Arkadaşlık veya mesajlaşma gibi mevcut sosyal aksiyonlara ulaşabilmeli
- Gizlilik ve hesap tercihlerini anlayabilmeli
- Blocked Accounts gibi güvenlik yüzeylerine erişebilmeli
- Gerektiğinde hesabından çıkış yapabilmelidir

Profilin görevi kullanıcıyı sayılarla değerlendirmek değildir.

Settings’in görevi onlarca teknik ayarı göstermek değil, mevcut gerçek tercihleri anlaşılır biçimde yönetmektir.

---

## 2. Ürün Karakteri

Profil alanı şu değerlere bağlı kalmalıdır:

- Room first
- Minimal identity
- No vanity
- Privacy first
- Calm and focused

Bu ilkeler görseldeki alt prensip şeridinin özünü oluşturur ve bağlayıcıdır.

Profil:

- Follower sayısı göstermez
- Like sayısı göstermez
- Profil puanı göstermez
- Rozet koleksiyonu oluşturmaz
- Popülerlik sıralaması içermez
- Aktivite skoruna dönüşmez
- Kullanıcıyı içerik üreticisi markası gibi sunmaz

Vibehall’daki kimlik, insanların odalarda birbirlerini yeniden tanıyabilmesini sağlayacak kadar güçlü; statü yarışına dönüşmeyecek kadar sade olmalıdır.

---

## 3. Görsel Hiyerarşi

Kendi profilindeki görsel öncelik sırası:

1. Avatar
2. Display name
3. Username
4. Kısa bio
5. Edit profile aksiyonu
6. Mevcut ve güvenli sosyal/oda bağlamı
7. İkincil navigasyon

Public profildeki öncelik sırası:

1. Kullanıcının temel kimliği
2. Bio
3. Mevcut ilişki durumu
4. Friend/message gibi izin verilen aksiyonlar
5. Güvenli ve gerçekten mevcut ortak oda bağlamı
6. Report/block gibi ikincil güvenlik işlemleri

Settings ekranındaki öncelik sırası:

1. Ayar kategorileri
2. Mevcut seçimin kısa özeti
3. Hesap ve gizlilik
4. Güvenlik ve blocked accounts
5. Appearance veya notification gibi mevcut tercihler
6. Log out
7. Delete account gibi kritik işlemler, gerçekten mevcutsa

---

## 4. Profil Türleri

Bu paket üç temel profil durumunu ayırmalıdır:

1. Kendi profili
2. Başka kullanıcının public profili
3. Block veya erişim sınırları nedeniyle kısıtlanmış profil durumu

Her profil aynı veriyi gösteremez.

Kendi profilinde yönetim aksiyonları bulunur.

Başka kullanıcı profilinde yalnız public ve güvenli bilgiler görünür.

Blocked veya erişilemeyen kullanıcı için nötr ve gizlilik koruyan davranış uygulanır.

---

## 5. Kendi Profili — Desktop Kompozisyonu

Desktop kendi profil görünümü temel olarak şu bölümlerden oluşabilir:

1. Global shell veya Social Rail
2. Profil üst alanı
3. Kimlik ve bio
4. Edit profile aksiyonu
5. Mevcut ve onaylı ikincil profil içeriği

### 5.1 Profil üst alanı

Görselde geniş bir banner/cover alanı bulunmaktadır.

Bu alan kompozisyon örneğidir; cover photo sistemi zorunlu ürün özelliği değildir.

Mevcut üründe cover image yoksa:

- Yeni cover upload sistemi eklenmez
- Sade gradient, aura veya nötr yüzey kullanılabilir
- Avatar ve kimlik alanı yine güçlü biçimde yerleştirilir

Banner’ın ana amacı profil yüzeyine atmosfer katmaktır; yeni kullanıcı içeriği türü oluşturmak değildir.

### 5.2 Avatar

Avatar profil kimliğinin en güçlü görsel öğesidir.

- Dairesel
- Yeterli boyutta
- Managed upload sistemini kullanır
- Güvenli fallback taşır
- Edit affordance yalnız kendi profilinde görünür

Avatar çevresinde sürekli glow veya statü halkası kullanılmaz.

### 5.3 Kimlik alanı

Kimlik alanında:

- Display name
- Username
- Kısa bio
- Edit profile butonu

yer alır.

Display name, username’dan daha güçlü görünür.

Username daha sakin ikincil metindir.

Rol, email veya account state gibi internaller burada gösterilmez.

---

## 6. Mobil Profil Kompozisyonu

Mobil profil masaüstünün yalnız sıkıştırılmış hâli değildir.

Doğal sıra:

1. Minimal header ve geri
2. Atmosferik üst yüzey, kullanılıyorsa
3. Avatar
4. Display name
5. Username
6. Bio
7. Edit profile veya sosyal aksiyon
8. Mevcut ikincil içerik
9. Global mobil menü erişimi

Mobilde:

- Avatar ve metin merkezli ya da kontrollü sol hizalı olabilir
- Büyük cover görseli form ve içerikleri aşağı itememelidir
- CTA tam genişlikte olabilir
- Yatay scroll oluşmaz
- Uzun display name taşmayı güvenli biçimde yönetir

Görselde mobil alt navigasyon bulunmaktadır. Ancak kesin Global Shell kararına göre mobil alt navigasyon kullanılmayacaktır.

Mobil profil, minimal üst header ve menü sistemiyle uygulanmalıdır.

---

## 7. Public Member Profile

Başka kullanıcının public profili, kendi profilinin yönetim kontrolleri çıkarılmış güvenli versiyonudur.

### 7.1 Gösterilebilecek temel bilgiler

- Avatar
- Display name
- Username
- Bio
- Mevcut friendship durumu
- Message aksiyonu, yalnız arkadaşsa
- Add friend / request state, mevcut politikalara göre
- Report
- Block
- Güvenli ortak oda veya karşılaşma bilgisi, gerçekten destekleniyorsa

### 7.2 Gösterilmemesi gereken bilgiler

- Email
- Hesap rolü
- Admin bilgisi
- Account-state reason
- Moderasyon geçmişi
- Block geçmişi
- Login zamanı
- Session veya cihaz bilgisi
- Arkadaş sayısı
- Toplam DM sayısı
- Kesin son görülme zamanı
- Private room geçmişi
- Kullanıcının tüm oda katılım geçmişi

Public profil gizlilik sınırlarının merkezidir.

---

## 8. Profil Aksiyonları

Kendi profilinde:

- Edit profile
- Avatar değiştir
- Settings’e git

bulunabilir.

Başka kullanıcı profilinde gerçek ilişki durumuna göre:

- Add friend
- Request sent
- Accept request
- Message
- Remove friend
- Block
- Report

bulunabilir.

Tüm aksiyonlar aynı anda görünmez.

İlişki durumuna göre yalnız anlamlı olanlar gösterilir.

Primary action bir taneyi geçmemelidir.

Block ve report ikincil menüde olabilir.

---

## 9. About / Bio Alanı

Bio sade kullanıcı kimliğinin ana metinsel parçasıdır.

Bio:

- Kısa
- Plain text
- Güvenli render edilen
- Belirli karakter sınırına sahip
- Link veya HTML çalıştırmayan
- Çok satırlı fakat kontrollü

olmalıdır.

Görselde ayrı `About me` kartı bulunmaktadır.

Bu yaklaşım kullanılabilir; ancak bio aynı anda profil başlığında ve ayrı kartta gereksiz tekrar edilmemelidir.

Bir yerde kısa tagline, diğer yerde uzun bio olacaksa backend kontratında gerçekten iki alan bulunmalıdır. Tek bio alanı varsa aynı metin iki kez gösterilmez.

---

## 10. Recent Rooms ve Rooms We Watched Together

Görselde:

- Recent rooms
- Rooms we watched together

alanları bulunmaktadır.

Bu alanlar önemli fakat **otomatik uygulanacak özellikler değildir**.

### 10.1 Recent rooms

Kendi profilde recent rooms gösterimi ancak mevcut güvenli backend kontratı varsa kullanılabilir.

Dikkat edilmesi gerekenler:

- Private room geçmişi sızdırılamaz
- Kullanıcının katıldığı bütün odalar public profile’da listelenemez
- Ended room metadata’sının retention kuralları korunur
- Block ilişkileri gözetilir
- Sahte room geçmişi oluşturulmaz

Kendi profilinde yalnız kullanıcının görebileceği kişisel geçmiş alanı olarak düşünülebilir.

### 10.2 Rooms we watched together

Bu fikir Vibehall’ın oda merkezli ruhuyla uyumludur.

Ancak yalnız:

- İki kullanıcının gerçekten ortak bulunduğu
- Güvenli retention içinde kalan
- Privacy politikasının izin verdiği
- Block veya account policy ile çelişmeyen

veri mevcutsa gösterilebilir.

Oda katılım geçmişi profil dekorasyonu uğruna gereksiz şekilde açığa çıkarılamaz.

### 10.3 Daha güvenli alternatif

Mevcut People You Watched With capability’si profil içine taşınmadan, Social Hub içinde kalabilir.

Profile yalnız bu alana küçük bir bağlantı verebilir.

---

## 11. Profil Düzenleme Modalı

Görselde edit profile işlemi ortalanmış modal olarak gösterilmiştir.

Bu yaklaşım kısa form için uygundur.

### 11.1 Form alanları

Yalnız gerçek mevcut alanlar:

- Avatar
- Display name
- Username, değiştirilebiliyorsa
- Bio

gösterilir.

Görselde bulunmayan fakat mevcut gerçek alanlar da korunur.

Görselde bulunan bir alan, backend desteklemiyorsa eklenmez.

### 11.2 Username davranışı

Username değiştirmenin:

- Benzersizlik
- Cooldown
- Normalization
- Reserved words
- Length
- Safety filter

gibi kontratları varsa korunmalıdır.

Username değiştirilemiyorsa input olarak gösterilmez.

Salt okunur bilgi ve uygun açıklama kullanılır.

### 11.3 Save changes

- Ana CTA
- Lokal loading
- Double-submit koruması
- Başarı toast’ı
- Hata durumunda form değerlerinin korunması

kullanır.

### 11.4 Modal davranışı

- Focus trap
- Escape ile kapanma
- Kapanınca focus restore
- Unsaved changes varsa güvenli davranış
- Mobilde full-screen sheet veya uygun form yüzeyi

uygulanır.

---

## 12. Avatar Upload

Avatar yönetimi mevcut managed upload sistemini kullanmalıdır.

Akış:

1. Kullanıcı görsel seçer
2. Dosya türü ve boyutu doğrulanır
3. Preview gösterilir
4. Upload edilir
5. Başarılı sonuç profil state’ine bağlanır
6. Eski avatar temizliği mevcut retention sistemine göre yapılır

Aşağıdakiler yapılamaz:

- Arbitrary external avatar URL
- Kontrolsüz remote image
- Base64’ü profil alanına gömmek
- Client-side kontrolü güvenlik olarak görmek
- Orijinal dosya adını public identifier yapmak

Upload sırasında:

- Avatar alanı lokal loading gösterir
- Profilin tamamı bloke olmaz
- Hata durumunda önceki avatar korunur

---

## 13. Settings Ana Yapısı

Settings bir dashboard değil, kategori tabanlı sade bir tercih merkezidir.

Desktop’ta:

- Global shell veya navigation
- Settings başlığı
- Kategori listesi
- Seçili ayar içeriği, gerekiyorsa

kullanılabilir.

Mobilde:

1. Settings listesi
2. Kategori seçimi
3. Ayrı detay ekranı
4. Geri ile listeye dönüş

yaklaşımı kullanılır.

Her ayarın aynı sayfada dev bir form olarak gösterilmesi gerekmez.

---

## 14. Settings Kategori Sistemi

Görselde şu kategoriler bulunmaktadır:

- Account
- Privacy
- Notifications
- Appearance
- Blocked Accounts
- Language
- Log out

Bunlar tek tek gerçek kapsamla doğrulanmalıdır.

### 14.1 Kesin veya güçlü adaylar

- Account
- Privacy
- Blocked Accounts
- Log out
- Appearance, gerçekten tema tercihi varsa
- Notifications, gerçek notification tercihleri varsa

### 14.2 Otomatik uygulanmayacaklar

- Language
- Connected Devices
- Read receipts
- Online status toggle
- Notification customization

mevcut altyapı yoksa eklenmez.

Kategori listesi boş görünmesin diye sahte ayar üretilmez.

---

## 15. Account Settings

Account alanı yalnız gerçek yönetilebilir bilgileri gösterir.

Örnek:

- Email, sistemde varsa
- Username
- Password change
- Delete account, gerçekten destekleniyorsa
- Session veya auth güvenliğiyle ilgili mevcut kontroller

### 15.1 Email

Vibehall’ın gerçek auth modelinde email yoksa:

- Email satırı gösterilmez
- Change email özelliği eklenmez
- Görselde bulunması bağlayıcı değildir

### 15.2 Password

Password change mevcut backend kontratına bağlanır.

- Current password
- New password
- Confirm
- Güvenli validation
- Session davranışı

mevcut politikalara göre uygulanır.

### 15.3 Delete account

Görselde `Delete account` bulunmaktadır.

Yalnız mevcut ürün ve backend gerçekten destekliyorsa gösterilir.

Delete account:

- Tek tıkla çalışmaz
- Sonuçları açıklar
- Confirmation ister
- Gerekirse password re-authentication ister
- Retention ve legal davranışlara uyar

Yeni account deletion altyapısı yalnız görsel nedeniyle eklenmez.

---

## 16. Privacy Settings

Privacy ayarlarının amacı kullanıcının sosyal görünürlüğünü anlaşılır biçimde kontrol etmesidir.

Görselde şu seçenekler bulunmaktadır:

- Who can add you as a friend
- Who can send you room invites
- Show me in People You Watched With
- Show my online status
- Read receipts

Bunların yalnız backend tarafından gerçekten desteklenenleri uygulanır.

### 16.1 Friend request privacy

Gerçek policy seçenekleri neyse onlar kullanılır.

Örnek:

- Everyone
- People I watched with
- Nobody

ancak yalnız mevcut ürün kararı ve backend izin veriyorsa.

### 16.2 Room invite privacy

Örnek:

- Friends
- Nobody

Mevcut invite sistemiyle uyumlu gerçek seçenekler kullanılmalıdır.

### 16.3 People You Watched With görünürlüğü

Bu capability mevcutsa:

- Kullanıcı listelenme tercihini kontrol edebilir
- Değişiklik backend’de authoritative olur
- Geçmiş ve yeni kayıt davranışı açıkça tanımlanır
- Block ve privacy politikaları yine uygulanır

### 16.4 Online status

Presence visibility backend’de yoksa sadece UI toggle oluşturulmaz.

### 16.5 Read receipts

DM sistemi read receipt desteklemiyorsa eklenmez.

---

## 17. Blocked Accounts

Blocked Accounts mevcut Social Hub ve Settings arasında erişilebilir olabilir.

Tek canonical block listesi kullanılmalıdır.

Aynı listenin farklı route’larda farklı davranış göstermesine izin verilmez.

Blocked Accounts yüzeyi:

- Engellenmiş kullanıcı
- Avatar
- Display name/username
- Unblock aksiyonu
- Gerekirse block tarihi, gizlilik açısından uygunsa

gösterebilir.

Unblock:

- Açık kullanıcı aksiyonu gerektirir
- Anında social bağlantıyı geri getirmez
- Friendship otomatik olarak yeniden oluşmaz
- Backend policy’ye uyar

Block yönü veya diğer kullanıcının davranışları gereksiz şekilde ifşa edilmez.

---

## 18. Notifications Settings

Notification kategorisi yalnız gerçek notification kanalları ve tercihleri varsa kullanılır.

Örnek mevcut olaylar:

- Friend requests
- Room invites
- Messages
- Safety or account notifications

Ancak:

- Push notification altyapısı yoksa push toggle eklenmez
- Email sistemi yoksa email notification eklenmez
- Sound setting yoksa sahte kontrol gösterilmez
- Her küçük event için onlarca toggle oluşturulmaz

Basit ve gerçek seçenekler tercih edilir.

---

## 19. Appearance Settings

Appearance mevcut ürün tasarım kararıyla uyumlu olmalıdır.

Vibehall’ın ana tasarımı dark-first ise:

- Kullanıcıya çalışmayan light mode seçeneği gösterilmez
- Accent rengini kullanıcıya değiştirme özelliği otomatik eklenmez
- Theme marketplace oluşturulmaz

Gerçek seçenekler:

- Reduced motion tercihi, browser preference üstüne kullanıcı kontrolü gerekiyorsa
- Compact density, gerçekten planlanmışsa
- Dark appearance ile ilgili sınırlı seçim

olabilir.

Ancak design system keyfî biçimde kişiselleştirilemez.

---

## 20. Language Settings

Görselde Language ayarı bulunmaktadır.

Localization altyapısı ve gerçek çeviri kapsamı yoksa:

- Language kategorisi eklenmez
- Sadece İngilizce seçenek gösteren anlamsız ayar oluşturulmaz

Language selector yalnız:

- Birden fazla gerçek dil destekleniyorsa
- Çeviri dosyaları tamamlandıysa
- Route, validation ve system messages uyumluysa

uygulanabilir.

---

## 21. Connected Devices

Görselde Connected Devices yüzeyi bulunmaktadır.

Bu, görseldeki en belirgin temsilî fakat riskli alanlardan biridir.

Mevcut session sistemi:

- Cihaz oturumlarını listelemiyor
- Session metadata tutmuyor
- Remote revoke endpoint’i sağlamıyorsa

Connected Devices eklenemez.

Yalnız görsel nedeniyle:

- Sahte Windows/Android/iPhone oturumları
- “Active now”
- “Log out from other devices”

gösterilemez.

Bu özellik ayrı güvenlik capability’si ve backend planı gerektirir.

---

## 22. Log Out

Log out Settings listesinde ayrı ve açık biçimde bulunabilir.

- Diğer ayar kategorilerinden görsel olarak ayrılır
- Hata/destructive rengini kontrollü kullanır
- İşlem sonrası session temizlenir
- Realtime bağlantılar kapanır
- Kullanıcı güvenli public route’a yönlendirilir
- Hassas local state temizlenir

Basit logout için ağır onay modalı zorunlu değildir.

Ancak yanlışlıkla tetiklenmeyecek kadar açık yerleşim gerekir.

---

## 23. Public Profil Gizlilik Sınırları

Public profil yalnız minimum güvenli kimlik verisini döndürmelidir.

Backend response mümkün olduğunca ayrı public presenter veya güvenli DTO kullanmalıdır.

Public profil response’una şunlar yanlışlıkla eklenmemelidir:

- Email
- Password alanları
- Role
- Account restriction reason
- Moderation internalleri
- Private preference’lar
- Session data
- Last IP/location
- Admin notları
- Exact last seen
- Private room history
- Friend graph

Frontend’de saklamak yerine backend’den hiç göndermemek tercih edilir.

---

## 24. Friendship Durumları

Public profilde friendship durumu açık biçimde temsil edilebilir:

- Not friends
- Request sent
- Request received
- Friends
- Blocked veya unavailable, nötr biçimde

Her durumda yalnız uygun aksiyon görünür.

Örnek:

### Not friends

- Add friend

### Request sent

- Request sent
- Cancel, mevcutsa

### Request received

- Accept
- Decline

### Friends

- Message
- Remove friend, ikincil

Friendship state realtime güncellenebilir; ekran blink etmemelidir.

---

## 25. Report ve Block Aksiyonları

Başka kullanıcı profilinde report ve block görünür fakat ikincil olmalıdır.

Uygun yer:

- `...` menüsü
- Mobil action sheet
- Ayrı safety menu

Block:

- Sonucunu açıklar
- Gerekirse confirmation ister
- Mevcut DM/friendship davranışını backend policy’ye göre günceller

Report:

- Reason seçimi
- Güvenli context
- Submit feedback

kullanır.

Public profil report edilince admin’e profil dışı gereksiz özel veri gönderilmez.

---

## 26. Profil Empty ve Loading State’leri

### 26.1 Initial loading

- Avatar skeleton
- Kimlik satırı skeleton
- Bio skeleton
- İkincil alan skeleton
- Global shell görünür

Tam sayfa spinner kullanılmaz.

### 26.2 Avatar bulunmuyor

Güvenli fallback avatar.

### 26.3 Bio boş

Kendi profilinde:

> Add a short bio.

Public profilde alan tamamen gizlenebilir.

### 26.4 İkincil oda verisi yok

Sahte room kartı gösterilmez.

İlgili bölüm:

- Gizlenebilir
- Sakin empty state gösterebilir

### 26.5 Profil bulunamadı

> This profile isn’t available.

Sebep:

- Silinmiş hesap
- Block policy
- Invalid username
- Restricted erişim

gibi internalleri gereksiz şekilde ayırmadan nötr mesaj kullanılabilir.

---

## 27. Settings Loading ve Error Durumları

Settings kategorileri mümkünse statik shell olarak görünür.

Seçili kategori yüklenemiyorsa yalnız içerik alanı hata gösterir.

Örnek:

> We couldn’t load these settings.

CTA:

> Try again

Kaydetme hatası:

- Form değerlerini korur
- Lokal hata gösterir
- Toggle’ı yanlış başarı durumunda bırakmaz
- Optimistic update varsa rollback yapar

Başarı:

> Changes saved.

toast veya küçük inline feedback ile gösterilir.

---

## 28. Form ve Toggle Davranışı

Settings form kontrolleri:

- Görünür label
- Yardımcı açıklama
- Mevcut değer
- Klavye erişimi
- Lokal save state

taşır.

Toggle yalnız gerçek boolean tercih için kullanılır.

Dropdown:

- Birden fazla seçenek varsa
- Seçenekler backend contract ile uyumluysa

kullanılır.

Her ayar otomatik kaydedilebilir veya Save button kullanabilir; aynı ekran içinde tutarsız davranış oluşturulmamalıdır.

---

## 29. Görsel Karakter

Profile ve Settings alanı:

- Yumuşak
- Sakin
- Kimlik odaklı
- Mahremiyet hissi veren
- Gösterişsiz
- Okunabilir

olmalıdır.

Şunlara dönüşmemelidir:

- Influencer profile
- Gaming profile card
- Achievement page
- LinkedIn benzeri kimlik dökümü
- Instagram benzeri takipçi vitrini
- Kurumsal account dashboard
- Yoğun security control center

Profilin gücü, az ve anlamlı bilgi göstermesinden gelir.

---

## 30. Renk ve Yüzeyler

Görselde mor accent kullanılmıştır.

Implementation kesin sistemi kullanır:

- Background: `#090A0F`
- Surface: `#10121A`
- Elevated: `#171A24`
- Hover: `#1D2130`
- Accent: `#FF625A`
- Success: `#5ED7A0`
- Error/destructive: `#E45B6A`

Profil cover veya room thumbnail’lerinden gelen aura sınırlı biçimde kullanılabilir.

Settings daha nötr ve mat kalmalıdır.

Toggle ve selected state’lerde nar çiçeği accent kontrollü kullanılır.

---

## 31. Tipografi

- Profil display name: Manrope `600–700`
- Sayfa başlığı: Manrope `600–700`
- Username: Inter `400–500`
- Bio: Inter `400`
- Settings kategori başlığı: Inter `500–600`
- Yardımcı açıklama: Inter `400`
- Form label: Inter `500`
- Kritik aksiyon: Inter `500–600`

Bio için rahat satır yüksekliği korunur.

Settings listesi sıkıştırılmaz.

---

## 32. Boşluk ve Yoğunluk

Profil:

- Ferah üst kimlik alanı
- Avatar çevresinde yeterli nefes
- Kimlik ve bio arasında `12–20px`
- Ana bölümler arasında `24–32px`
- Card iç boşluk `16–24px`

Settings:

- Liste satırı `56–72px`
- İkon, başlık ve açıklama arasında net hiyerarşi
- Kategori grupları arasında `12–20px`
- Form alanları arasında `16–20px`

Profil geniş ekranlarda kontrolsüz yayılmaz.

Settings içerik genişliği yaklaşık `720–960px` aralığında tutulabilir.

---

## 33. Mobil Settings Davranışı

Mobil Settings:

- Tek kolon
- Minimal header
- Kategori listesi
- Kategori detayında geri
- Minimum `44×44px` touch target
- Safe area
- Yatay scroll olmaması

kullanır.

Görseldeki mobil alt navigasyon kaldırılmalıdır.

Settings detayları modal yerine normal mobil sayfa veya bottom sheet olarak değerlendirilebilir.

Kritik onaylar ortalanmış modal olarak kalabilir.

---

## 34. Erişilebilirlik

Aşağıdaki maddeler zorunludur:

- Avatar upload control erişilebilir isim taşır
- Profil heading sırası doğrudur
- Display name ve username anlamlı sırayla okunur
- Edit profile modal focus trap uygular
- Form error’ları input’larla ilişkilidir
- Toggle’lar gerçek switch semantics kullanır
- Toggle label ve mevcut değer screen reader’a anlamlı gelir
- Settings row yalnız görsel kart değil, keyboard ile erişilebilir kontroldür
- Destructive aksiyonlar yalnız kırmızı renkle anlatılmaz
- Public profile aksiyonları açık accessible name taşır
- Touch target’lar minimum `44×44px`
- Contrast WCAG AA hedefini karşılar
- Reduced motion desteklenir
- Avatar ve cover alt text davranışı doğrudur
- Başarı ve hata feedback’i live region ile kontrollü duyurulur

---

## 35. Azaltılmış Hareket

`prefers-reduced-motion` açıkken:

- Profil aura hareketi durur
- Modal ve settings geçişleri kısa fade veya doğrudan olur
- Toggle animasyonu minimuma iner
- Avatar hover hareketi kapanır
- Oda kartı zoom’u kapanır
- İşlevsel loading göstergeleri korunur

---

## 36. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Kullanıcı adı `mert`
- Avatar ve banner görselleri
- Bio metinleri
- Recent rooms
- Room thumbnail’leri
- Participant sayıları
- Settings kategori listesi
- Email adresi
- Connected devices
- Notification preferences
- Appearance
- Language
- Read receipts
- Online status
- Friend request privacy seçenekleri
- Room invite privacy seçenekleri
- Delete account
- Mobil alt navigasyon
- Mor renk sistemi
- Privacy sloganları
- “We don’t sell your data” benzeri claim’ler

Gerçek veri ve gerçek product/legal kontratları kullanılmalıdır.

---

## 37. Otomatik Uygulanmayacak Görsel Unsurlar

### 37.1 Cover image sistemi

Mevcut değilse eklenmez.

### 37.2 Recent rooms

Güvenli endpoint ve privacy kontratı yoksa gösterilmez.

### 37.3 Rooms we watched together

Mevcut veri ve retention davranışı doğrulanmadan public profile’a eklenmez.

### 37.4 Email change

Email auth sistemi yoksa uygulanmaz.

### 37.5 Connected devices

Session device altyapısı yoksa uygulanmaz.

### 37.6 Notification settings

Gerçek notification preference backend’i yoksa eklenmez.

### 37.7 Language

Localization altyapısı yoksa eklenmez.

### 37.8 Read receipts

DM capability’si yoksa eklenmez.

### 37.9 Online status toggle

Presence privacy sistemi yoksa eklenmez.

### 37.10 Delete account

Mevcut güvenli backend akışı yoksa sırf görsel için eklenmez.

### 37.11 Mobil alt navigasyon

Kesin shell kararına aykırıdır ve uygulanmaz.

---

## 38. Product ve Legal Claim Güvenliği

Görselde:

> Your data is yours.
> We don’t sell your data. Ever.

ve:

> Private by default.

gibi iddialar bulunmaktadır.

Bu metinler yalnız:

- Privacy Policy
- Gerçek veri işleme davranışı
- Analytics/telemetry kullanımı
- Third-party servisler
- Advertising veya monetization modeli

ile tamamen uyumluysa yayınlanabilir.

Görselde bulunmaları bağlayıcı copy değildir.

Aynı şekilde “minimal and secure” gibi claim’ler ölçüsüz güvenlik garantisine dönüşmemelidir.

---

## 39. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Follower sistemi eklemek
- Like sistemi eklemek
- Profil puanı eklemek
- Rozet veya achievement eklemek
- Verified veya premium profil eklemek
- Public arkadaş sayısı göstermek
- Kullanıcıların tüm oda geçmişini public yapmak
- Private room geçmişini sızdırmak
- Cover photo upload eklemek, mevcut değilse
- Email sistemi eklemek
- Connected Devices altyapısı eklemek
- Read receipts eklemek
- Online status privacy sistemi eklemek
- Notification preference backend’i eklemek
- Language sistemi eklemek
- Delete account capability’si eklemek
- Exact last seen göstermek
- Account role veya moderation bilgisi göstermek
- Mobil alt navigasyon eklemek
- Sahte recent room veya device göstermek
- Profile’ı sosyal medya vitrini hâline getirmek
- Settings’i kurumsal dashboard’a çevirmek
- Tailwind veya React Router eklemek
- Görseldeki mor sistemi kesin palette çevirmek

---

## 40. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu konularda uyarlama yapabilir:

- Mevcut profile API response’u
- Own profile ve public profile presenter ayrımı
- Existing avatar upload component’i
- Mevcut username/display name/bio alanları
- Friendship state
- Block/report akışı
- Existing privacy preferences
- Settings route yapısı
- Modal veya full-page edit tercihi
- Settings kategori sayısı
- Public profile aksiyonlarının sırası
- Responsive breakpoint
- Cover yerine nötr aura kullanımı
- Accessibility gerektiren DOM ve ölçü düzeltmeleri

Bu uyarlamalar minimal kimlik, no-vanity ve privacy-first yaklaşımını değiştiremez.

---

## 41. Teknik ve Güvenlik Gereksinimleri

- Own profile update yalnız authenticated kullanıcıya açıktır
- Başka kullanıcının profili değiştirilemez
- Public profile response güvenli alanlarla sınırlıdır
- Username uniqueness backend’de enforce edilir
- Bio ve display name sanitize/validate edilir
- Avatar upload type ve size server-side doğrulanır
- Arbitrary remote URL kabul edilmez
- Block ve friendship state backend authority’dir
- Settings update CSRF koruması taşır
- Privacy preference server-side uygulanır
- Route ID/username değiştirilerek private veri okunamaz
- Admin-only veri public profile’a eklenmez
- Account-state internalleri sızdırılmaz

---

## 42. Performans Yaklaşımı

- Avatar modern format ve uygun boyutta sunulur
- Büyük profile asset lazy veya responsive yüklenir
- Public profile request’leri stale response’a karşı korunur
- Profile route değişiminde yanlış kullanıcının verisi gösterilmez
- Settings kategorileri gerektiğinde lazy fetch olabilir
- Her toggle tüm settings’i yeniden fetch etmek zorunda değildir
- Avatar update sonrası cache düzgün invalidate edilir
- Room thumbnail alanları varsa lazy loading kullanılır

Performans optimizasyonu privacy veya veri doğruluğunu bozamaz.

---

## 43. Wave Kapsamı Önerisi

Bu paket şu capability bütünlerine ayrılabilir:

### Profile Visual Foundation

- Own profile
- Public profile
- Avatar/identity layout
- Bio
- Relationship actions
- Loading/empty/error

### Edit Profile and Avatar

- Edit modal/page
- Field validation
- Avatar upload
- Save/error feedback

### Settings Foundation

- Settings shell
- Category list
- Account
- Privacy
- Blocked Accounts
- Log out

### Social and Safety Integration

- Friendship state
- Message action
- Block
- Report
- People You Watched With bağlantısı

### Responsive and Accessibility

- Mobil profile
- Mobil settings
- Keyboard
- Screen reader
- Reduced motion
- Touch QA

Görselde bulunan fakat altyapısı olmayan connected devices, language, read receipts veya yeni privacy sistemleri bu wave’e dahil edilmez.

---

## 44. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Own profile görsel referansla yan yana karşılaştırılmıştır
- Public profile görsel referansla ve privacy kurallarıyla karşılaştırılmıştır
- Avatar, display name, username ve bio ana kimlik unsurlarıdır
- Follower, like, puan veya rozet bulunmamaktadır
- Verified veya premium sistemi eklenmemiştir
- Public profile gizli veri göstermemektedir
- Email, role ve account-state internalleri sızmamaktadır
- Profil ego veya performans vitrini gibi görünmemektedir
- Settings sade ve kategori tabanlıdır
- Settings kurumsal dashboard’a dönüşmemiştir
- Yalnız gerçek mevcut ayarlar gösterilmektedir
- Connected devices sahte biçimde uygulanmamıştır
- Language altyapı yoksa gösterilmemektedir
- Read receipts backend yoksa gösterilmemektedir
- Online status preference backend yoksa gösterilmemektedir
- Mobil alt navigasyon bulunmamaktadır
- Avatar upload managed upload sistemini kullanmaktadır
- Username ve bio validasyonları backend ile uyumludur
- Block ve friendship state backend’de enforce edilmektedir
- Own/public profile ayrımı test edilmiştir
- Profil bulunamadı ve erişilemez state’leri tamamlanmıştır
- Loading sırasında layout zıplamamaktadır
- Settings save hatalarında değerler korunmaktadır
- Keyboard ve focus davranışı tamamlanmıştır
- Modal focus yönetimi test edilmiştir
- Screen reader form ve toggle davranışı anlamlıdır
- WCAG AA kontrast hedefi korunmuştur
- Desktop ve dar ekran QA yapılmıştır
- Typecheck ve build geçmiştir
- İlgili frontend/backend testleri geçmiştir
- İki farklı kullanıcıyla friendship/profile görünürlük testi yapılmıştır
- Block sonrası profil ve DM davranışı test edilmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 45. Son Tasarım Hükmü

Profile ve Settings alanı Vibehall’ın içinde ayrı bir sosyal statü sistemi değildir.

Doğru profil:

- Kullanıcıyı tanınabilir kılar
- Onun temel kimliğini taşır
- Odalarda kurduğu bağların devamına izin verir
- Gereksiz sayı ve rozetlerle kimliği ölçmez
- Gizli bilgileri açığa çıkarmaz

Doğru Settings deneyimi:

- Kullanıcının gerçekten kontrol edebileceği şeyleri gösterir
- Teknik ayrıntıyla boğmaz
- Gizlilik ve güvenliği anlaşılır hâle getirir
- Üründe olmayan tercihleri varmış gibi göstermez

Bu tasarım paketinin başarı ölçütü kapsamlı profil ve ayar ekranları oluşturmak değildir.

Başarı ölçütü:

> Kullanıcının Vibehall’daki kimliğini sade biçimde taşıması, görünürlüğünü güvenle kontrol etmesi ve odalarda başlayan gerçek bağların statü yarışına dönüşmeden devam edebilmesidir.