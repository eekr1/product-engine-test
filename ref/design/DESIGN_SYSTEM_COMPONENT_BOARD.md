# Design System Component Board

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Design System Component Board** görseli, Vibehall’ın bütün kullanıcı ve operasyon ekranlarında kullanılacak ortak görsel dilin onaylanmış referansıdır.

Görsel yalnızca bir moodboard değildir. Aşağıdaki sistemlerin temel davranışını ve birbirleriyle olan ilişkisini bağlayıcı biçimde temsil eder:

- Renk ve yüzey sistemi
- Tipografi hiyerarşisi
- Buton ailesi
- Form alanları
- Avatar ve durum göstergeleri
- Oda kartları
- Modal, side panel ve bottom sheet
- Toast ve reconnect bildirimi
- Skeleton ve empty state
- Hover, focus, disabled ve loading durumları

Ancak görselde bulunan bütün renk kodları, rozet türleri, paylaşım servisleri, ikonlar ve örnek içerikler mevcut ürün kabiliyeti olarak yorumlanamaz.

Bu board’un amacı Codex’in her ekranda yeni renk, radius, buton, ikon veya yüzey biçimi icat etmesini önlemektir.

Ana ilke:

> Vibehall’ın bütün ekranları aynı dünyanın parçaları gibi görünmelidir.

---

## 1. Sistem İçindeki Rolü

Bu board tek bir kullanıcı ekranını temsil etmez.

Bütün ürün boyunca kullanılacak ortak tasarım sözleşmesidir.

Şu ekran ve bileşen aileleri bu sistemden türetilmelidir:

- Home
- Discover
- Create Room
- Room
- Auth
- Social
- Messages
- Profile
- Settings
- Utility pages
- Admin
- Modal ve panel yüzeyleri
- Loading, empty, error ve reconnect durumları

Her yeni ekran veya bileşen önce mevcut sistem içinde çözümlenmelidir.

Yeni bir renk, radius, gölge veya kontrol biçimi yalnız gerçekten mevcut sistemle çözülemiyorsa ve kullanıcı onayı alınmışsa eklenebilir.

---

## 2. Kesin Renk Sistemi

Görselde mor ve ultraviyole tonları yoğun biçimde kullanılmaktadır.

Bu renkler görsel kompozisyonu ve ışık kullanımını temsil eder; **kesin marka paleti değildir.**

Vibehall’ın daha önce kesinleştirilmiş gerçek renk sistemi aşağıdaki gibidir.

### 2.1 Ana zeminler

- **Hall background:** `#090A0F`
- **Normal surface:** `#10121A`
- **Elevated surface:** `#171A24`
- **Hover / selected surface:** `#1D2130`

Saf siyah `#000000` genel uygulama zemini olarak kullanılmaz.

Yalnızca:

- Video çevresi
- Tam ekran karartması
- Overlay maskesi
- Özel kontrast gereken medya alanları

için sınırlı biçimde kullanılabilir.

### 2.2 Sınırlar

- **Normal border:** `rgba(255, 255, 255, 0.08)`
- **Active border:** `rgba(255, 255, 255, 0.12)`
- **Güçlü ayrım:** yalnız gerçekten gerekli alanlarda daha yüksek kontrast

Her yüzeyin etrafına border çizilmez.

Boşluk ve ton farkı yeterliyse ayrıca sınır kullanılmamalıdır.

### 2.3 Metin renkleri

- **Primary text:** `#F5F7FA`
- **Secondary text:** `#A8AFBF`
- **Muted text:** `#7B8396`
- **Disabled text:** `rgba(245, 247, 250, 0.38)`

Tam beyaz uzun metinlerde varsayılan olarak kullanılmaz.

Gece kullanımında daha yumuşak kontrast korunur.

---

## 3. Kesin Marka ve Accent Rengi

Görselde kullanılan mor CTA ve focus renkleri kesin sistem değildir.

Vibehall’ın bağlayıcı accent rengi:

- **Accent:** `#FF625A`
- **Accent hover:** `#FF766F`
- **Accent pressed:** `#E9544D`
- **Accent soft:** `rgba(255, 98, 90, 0.14)`
- **Accent focus:** `rgba(255, 98, 90, 0.48)`
- **Accent üzeri metin:** `#090A0F`

Nar çiçeği rengi bütün ekranı boyayan tema rengi değildir.

Şu alanlarda kontrollü biçimde kullanılır:

- Ana CTA
- Aktif sekme
- Seçili durum
- Focus halkası
- Küçük marka ayrıntıları
- Önemli fakat nadir vurgu

Kalıcı veya yoğun glow kullanılmaz.

Accent bir mekândaki yön ışığı gibi davranmalıdır.

---

## 4. Sistem Durum Renkleri

Marka rengi ile sistem durumları ayrılır.

- **Success / Online / Live:** `#5ED7A0`
- **Warning:** `#F0B55A`
- **Error / Dangerous:** `#E45B6A`
- **Informational:** ana sistemle uyumlu kontrollü soğuk ton

Durum yalnızca renkle anlatılamaz.

Her durumda:

- Metin
- İkon
- Gerekirse şekil veya badge

ile ikinci anlam katmanı bulunmalıdır.

Örnek:

- Yeşil nokta + `Online`
- Kırmızı ikon + `Message failed`
- Sarı üçgen + `Connection is unstable`

---

## 5. Üç Seviyeli Yüzey Sistemi

Vibehall üç temel derinlik seviyesi kullanır.

### 5.1 Level 1 — Hall Ground

- Renk: `#090A0F`
- Genel sayfa zemini
- Ana atmosfer
- Gölge kullanılmaz

### 5.2 Level 2 — Standard Surface

- Renk: `#10121A`
- Chat
- Form
- Filtre
- Ayarlar
- Normal paneller
- İnce border kullanılabilir

### 5.3 Level 3 — Focus Surface

- Renk: `#171A24`
- Aktif kart
- Modal
- Açık panel
- Kullanıcının o anda etkileşim kurduğu ana yüzey

Hover veya seçili durumda `#1D2130` kullanılabilir.

Keyfî yeni yüzey tonları üretilmez.

---

## 6. İçerikten Doğan Aura Sistemi

Görseldeki oda kartlarının çevresinde içerik renginden doğan ışık yaklaşımı bağlayıcıdır.

Arayüz kabuğu karanlık ve nötr kalır.

Odanın atmosferi izlenen videonun thumbnail’inden doğar.

### 6.1 Aura üretimi

- Thumbnail’in bulanıklaştırılmış kopyası kullanılır
- Görsel güçlü biçimde karartılır
- Detayları okunabilir hâlde bırakılmaz
- Yalnız renk ve ışık kaynağı gibi davranır
- Player veya oda kartı çevresinde yoğunlaşır
- Chat ve metin kontrastını bozmaz

Başlangıç referansları:

- Blur: `80–120px`
- Desktop opacity: yaklaşık `%12–16`
- Mobile opacity: yaklaşık `%8–12`
- Üzerinde koyu gradient veya mask
- Thumbnail kenarları görünmeyecek şekilde hafif scale

Bu değerler görsel QA ile ayarlanabilir.

### 6.2 Aura yasakları

Aura:

- Thumbnail’i açıkça arka plan resmi gibi gösteremez
- Bütün ekranı tek renge boyayamaz
- Neon gösterisine dönüşemez
- Metin kontrastını düşüremez
- Sürekli hareket etmek zorunda değildir

Thumbnail yoksa nötr zemin korunur.

Sahte veya rastgele renk üretilmez.

---

## 7. Tipografi Sistemi

Görseldeki Manrope + Inter ayrımı bağlayıcıdır.

### 7.1 Manrope

Manrope karakter taşıyan kısa metinlerde kullanılır:

- Home hero
- Sayfa başlığı
- Büyük bölüm başlığı
- Önemli oda adı
- Kısa ve güçlü ürün cümlesi

Manrope arayüzün her yerinde arka arkaya kullanılmaz.

### 7.2 Inter

Inter işlevsel metin sistemidir:

- Navigasyon
- Formlar
- Butonlar
- Chat
- Kullanıcı adı
- Ayarlar
- Bildirim
- Yardımcı metin
- Uzun içerik
- Utility ve legal sayfaları

### 7.3 Font ağırlıkları

- Manrope büyük başlık: `600–700`
- Manrope bölüm/oda başlığı: `600`
- Inter gövde: `400–500`
- Inter CTA ve kısa önemli etiket: `500–600`

Gereksiz font weight yüklenmez.

### 7.4 Kesin ölçek

Görselde gösterilen `48px / 32px / 24px` değerleri temsili tipografi örneğidir.

Bağlayıcı masaüstü sistemi:

- Hero: `52–60px`
- Sayfa başlığı: `38–44px`
- Bölüm başlığı: `28–32px`
- Kart / oda başlığı: `18–20px`
- Normal body: yaklaşık `16px`
- Yardımcı metin: yaklaşık `14px`
- Caption: yaklaşık `12–13px`

Mobilde değerler kontrollü küçülür.

Başlıklar CTA ve içeriği ekran dışına itemez.

---

## 8. Büyük Harf Kullanımı

Arayüz sentence case kullanır.

Sürekli büyük harf kullanılmaz.

Görseldeki:

- `LIVE`
- `HOST`
- `MODERATOR`
- `PREMIUM`

gibi örnekler kesin ürün dili değildir.

Tercih edilen kullanım:

- `Live`
- `Host`
- `Online`
- `Reconnecting`

Büyük harf yalnız dilbilgisel veya gerçekten gerekli kısa kodlarda kullanılabilir.

---

## 9. Radius ve Geometri Sistemi

Bağlayıcı radius sistemi:

- Küçük bileşen: `10px`
- Normal bileşen: `14px`
- Büyük yüzey / oda kartı: `18px`
- Modal / bottom sheet: `22px`
- Avatar: dairesel

Geometri:

- Yumuşak
- Sempatik
- Yetişkin
- Sinematik

olmalıdır.

Keskin ve rahatsız edici köşelerden kaçınılır.

Ancak her bileşen kapsül biçimine dönüştürülmez.

---

## 10. Buton Sistemi

Board’daki default, hover, focus, disabled ve loading durumları bağlayıcı davranış örnekleridir.

Ancak mor renkler kesin değildir; nar çiçeği tokenları kullanılacaktır.

### 10.1 Boyutlar

- Small: `36px`
- Default: `44px`
- Large CTA: `48px`
- Mobil ana işlem: minimum `48px`

### 10.2 Primary CTA

- Background: `#FF625A`
- Text: `#090A0F`
- Hover: `#FF766F`
- Pressed: `#E9544D`
- Hover sırasında yaklaşık `2px` hafif yükselme
- Press sırasında çok hafif küçülme
- Kalıcı glow yok

### 10.3 Secondary button

- Koyu mat yüzey
- İnce border
- Hover sırasında yüzey hafifçe açılır
- Primary CTA ile yarışmaz

### 10.4 Text button

Şu alanlarda kullanılabilir:

- Learn more
- Back
- View all
- Cancel
- Düşük öncelikli navigasyon

Text button’ın hover ve focus durumu görünür olmalıdır.

### 10.5 Icon button

- Minimum dokunma alanı `44×44px`
- İkon ortalanır
- Tooltip veya erişilebilir isim taşır
- Belirsiz işlemler yalnız ikonla bırakılmaz
- Phosphor ikon sistemi kullanır

---

## 11. Buton Durumları

### Default

Normal görsel ağırlık.

### Hover

- Hafif renk değişimi
- Gerekiyorsa `1–2px` yükselme
- Büyük glow veya scale yok

### Focus

- En az `2px` focus halkası
- Nar çiçeği yüzeyde kontrast yetersizse açık renkli yardımcı halka
- Focus yalnız renkle anlatılmaz

### Disabled

- Düşük kontrast
- Hover uygulanmaz
- Tıklanabilir görünmez
- Mümkünse neden disabled olduğu bağlamdan anlaşılır

### Loading

- Lokal loading
- Küçük spinner veya progress
- Buton genişliği değişmez
- Metin tamamen kaybolmak zorunda değildir
- Double-submit engellenir
- Bütün ekran loading’e dönmez

---

## 12. Input ve Form Alanları

Board’daki input, textarea ve select ailesi ana biçimi temsil eder.

### 12.1 Input

- Mat koyu yüzey
- İnce sınır
- `44–48px` minimum yükseklik
- Görünür label
- Inter
- Focus sırasında nar çiçeği halka
- Hata durumunda kırmızı sınır + açık hata metni

Placeholder label yerine kullanılmaz.

### 12.2 Textarea

- Aynı yüzey sistemi
- Kontrollü resize
- Minimum ve maksimum yükseklik
- Uzun metinde içerik kaybolmaz
- Mobilde yatay resize yok

### 12.3 Select

- Native veya accessible custom select
- Klavye ile kullanılabilir
- Açık seçili durum
- Dropdown ana yüzeyden ayırt edilir
- Menü viewport dışına taşmaz

Görseldeki `Friends only` seçeneği her select için gerçek ürün özelliği değildir; yalnız dropdown görünümü örneğidir.

---

## 13. Form Validation

Validation:

- Alanın hemen altında
- Sakin fakat açık
- Kullanıcıya neyi düzeltmesi gerektiğini söyleyen
- Screen reader ile input’a bağlı

olmalıdır.

Örnek:

> Enter a valid YouTube link.

Teknik hata veya raw backend exception gösterilmez.

Hata yalnız kırmızı border ile anlatılmaz.

---

## 14. Avatar Sistemi

Görseldeki avatar boyutları temsilî başlangıç örnekleridir.

Önerilen sistem:

- Küçük presence: `24px`
- Normal liste/chat: `32px`
- Profil/öne çıkan kullanıcı: `40–48px`
- Büyük profil avatarı: ekran bağlamına göre daha büyük

Avatar:

- Dairesel
- Crop davranışı tutarlı
- Yüklenemezse güvenli fallback
- Presence noktası avatar içeriğini kapatmaz

Avatar işleme mevcut managed upload sistemini kullanır. Harici avatar URL düzenleme geri getirilemez.

---

## 15. Badge Sistemi

Board’daki badge örnekleri **genel biçim referansıdır**, ürün özelliği listesi değildir.

### 15.1 Kullanılabilecek gerçek badge türleri

Yalnız mevcut ürün kontratında karşılığı bulunan durumlar:

- Host
- Admin, gerçekten gerekli admin yüzeyinde
- Live
- Online
- Room state
- Report state
- Account state
- Job state

### 15.2 Otomatik uygulanmayacak badge’ler

Görselde bulunan:

- Moderator
- Verified
- Premium

rozetleri uygulanmayacaktır.

Nedenleri:

- Moderator rolü mevcut değildir ve ayrı plan gerektirir
- Verified sistemi tanımlanmamıştır
- Premium sistemi tanımlanmamıştır
- Ürün profil ego yarışmasına veya badge ekonomisine dönüşmemelidir

Admin ve member rolleri korunur; yeni moderator rolü kullanıcı onayı olmadan eklenemez.

---

## 16. Live ve Presence Göstergeleri

Live göstergesi:

- Küçük
- Sakin
- Metin + renk
- Yavaş nefes alan hareket
- Reduced motion’da sabit

olmalıdır.

Participant count:

- Küçük insan ikonu
- Sayı
- Oda kartı veya bağlam içinde ikincil ağırlık

Presence:

- Yeşil nokta + gerekirse metin
- Gizlilik tercihlerine uyar
- Dakika düzeyinde hassas timestamp sızdırmaz
- Online/last-seen kurallarını ihlal etmez

---

## 17. Oda Kartı

Board’daki Room Card, Home ve Discover için temel reusable bileşendir.

### 17.1 İçerik

- `16:9` thumbnail
- Oda adı
- Host’un küçük kimliği
- Live durumu
- İçerideki kişi sayısı
- Gerekirse kategori
- İçerikten gelen aura

### 17.2 Davranış

Kartın tamamı giriş alanı olabilir.

Büyük `Join Room` butonu sürekli görünmek zorunda değildir.

Hover veya focus sırasında:

- Kart yaklaşık `4px` yükselir
- Thumbnail `%3–4` yaklaşır
- Aura biraz güçlenir
- Giriş affordance’ı görünür hâle gelebilir

Mobilde hover taklit edilmez.

### 17.3 Ürün sınırları

- Private oda gösterilmez
- Sahte participant count kullanılmaz
- Sahte thumbnail kullanılmaz
- Mevcut gerçek room contract kullanılır
- Kart içerik videosu değil, girilecek yer hissi verir

---

## 18. Modal

Board’daki modal yapısı genel davranışı temsil eder.

Modal:

- Kritik onay
- Kısa ve odaklı işlem
- Form
- Invite veya paylaşım
- Destructive confirmation

için kullanılabilir.

### 18.1 Modal kuralları

- Arka plan karartılır
- Focus modal içine alınır
- Escape veya açık kapatma davranışı bulunur
- Kapanınca focus önceki öğeye döner
- Mobilde kritik olmayan uzun akışlar bottom sheet’e dönüşebilir

### 18.2 Invite modalındaki temsilî öğeler

Görselde:

- WhatsApp
- Twitter
- Share link
- More

gibi paylaşım seçenekleri bulunur.

Bunlar otomatik entegrasyon kapsamı değildir.

Mevcut üründe yalnız link copy veya gerçekten desteklenen share davranışı kullanılır.

Yeni sosyal paylaşım entegrasyonu sırf görselde bulunduğu için eklenmez.

---

## 19. Side Panel

Side panel:

- Katılımcı listesi
- Report context
- Admin detail
- Uzun ama geçici yönetim
- Desktop yardımcı akış

için kullanılabilir.

Side panel:

- Ana ekranın tamamını yok etmez
- İlgili bağlamı görünür bırakır
- Scroll davranışı bağımsızdır
- Focus yönetimi erişilebilirdir

Room içinde participant paneli açıkken video ve chat’in ana hiyerarşisi tamamen bozulmamalıdır.

---

## 20. Bottom Sheet

Bottom sheet özellikle mobilde kullanılır.

Uygun alanlar:

- Room options
- Host controls
- Participants
- Invite
- Report
- İkincil filtreler

Bottom sheet:

- Safe area’yı dikkate alır
- Swipe/close davranışı açık olur
- Kritik destructive işlem için doğrudan yeterli olmayabilir
- Kritik onay gerekirse ortalanmış modal açılır

---

## 21. Toast Sistemi

Toast kısa ve net feedback içindir.

Örnekler:

- Room created
- Invite sent
- Link copied
- Changes saved
- Message failed

Toast:

- Ana içeriği kapatmaz
- Kısa sürede kaybolur
- Kritik hatalarda manuel kapatma veya retry sunabilir
- Cam etkisini sınırlı biçimde kullanabilir
- Birikerek ekranı kaplamaz

Success, info ve error aynı genel geometriyi kullanır.

---

## 22. Reconnect Bildirimi

Board’daki reconnect banner yaklaşımı bağlayıcıdır.

Reconnect sırasında:

- Mevcut içerik ekranda kalır
- Kullanıcı teknik loading döngülerine maruz bırakılmaz
- Küçük, sakin bildirim görünür
- Bağlantı geri geldiğinde otomatik kaybolur
- Uzun sürerse retry veya açıklama gösterilir

Room içindeki problem player/chat alanında lokal gösterilebilir.

Genel bağlantı problemi üst yüzeyde küçük banner olabilir.

Örnek:

> Reconnecting to the room…

---

## 23. Skeleton Sistemi

İlk yüklemede skeleton kullanılır.

Skeleton:

- Gerçek içeriğin yapısına benzer
- Layout alanını önceden ayırır
- Düşük kontrastlıdır
- Hızlı ve parlak shimmer kullanmaz
- Hareket azaltma ayarında statik olabilir

Örnek skeleton aileleri:

- Room card
- Profile
- Chat list
- Message list
- Admin table
- Form preview

Sonraki refresh sırasında skeleton’a geri dönülmez; mevcut içerik korunur.

---

## 24. Empty State

Board’daki empty state hafif atmosfer yaklaşımını temsil eder.

Empty state:

- Küçük ikon veya soyut ışık
- Kısa ana mesaj
- Kısa yardımcı metin
- Net tek CTA

taşır.

Örnek:

> The hall is quiet right now. Open the first room.

Sahte oda, kullanıcı veya aktivite gösterilmez.

Görseldeki gezegen illüstrasyonu zorunlu asset değildir.

Hafif gradient veya geometrik aura ile aynı his sağlanabilir.

---

## 25. Hover, Focus, Disabled ve Loading State Board

Görseldeki durum satırı bütün reusable bileşenler için ortak davranış standardını temsil eder.

Her bileşenin en az şu durumları düşünülmelidir:

- Default
- Hover
- Focus
- Active / selected
- Disabled
- Loading
- Error, ilgiliyse

Bu durumlar ekran bazında yeniden icat edilmez.

---

## 26. Loading Sistemi

### 26.1 İlk yükleme

Skeleton.

### 26.2 Sonraki yenileme

Mevcut içerik korunur.

### 26.3 Buton işlemi

Lokal loading.

### 26.4 Kart veya medya yükleme

Görsel alanı korunur; yumuşak placeholder kullanılır.

### 26.5 Yasak

Tam sayfa spinner kullanılmaz.

Board’un loading states alanındaki spinner yalnız küçük ve lokal işlem örneğidir.

Tam ekran bekleme çözümü değildir.

---

## 27. İkon Sistemi

Board’daki ikonların görsel karakteri bağlayıcıdır; kesin ikon ailesi **Phosphor** olacaktır.

- Çizgili ikon
- Regular ağırlık
- Yaklaşık `1.75–2px`
- Aktif durumda dolguluya geçilmez
- Aktiflik renk ve yüzeyle anlatılır

Boyutlar:

- Small: `16px`
- Default: `20px`
- Main action: `24px`
- Empty state: `32–40px`

Farklı ikon kütüphaneleri karıştırılmaz.

---

## 28. Hareket Sistemi

Board statik olsa da bileşen davranışları daha önce kesinleştirilen hareket dilini takip eder.

- Anlık feedback: `120–160ms`
- Surface transition: `200–260ms`
- Spatial transition: `320–420ms`

Hareket:

- Sakin
- Yumuşak
- Amaçlı
- Dikkat istemeyen

olmalıdır.

Elastik veya zıplayan animasyon kullanılmaz.

---

## 29. Azaltılmış Hareket

`prefers-reduced-motion` açıkken:

- Kart yükselmesi kapanır
- Thumbnail zoom kapanır
- Live pulse sabit işarete dönüşür
- Sürekli aura hareketi durur
- Panel geçişleri kısa fade veya doğrudan geçiş olur
- İşlevsel loading feedback’i korunur

---

## 30. Erişilebilirlik

Bütün component board şu şartları karşılamalıdır:

- Normal metinlerde WCAG AA kontrast hedefi
- Görünür focus
- Keyboard navigation
- Durumların yalnız renkle anlatılmaması
- Minimum yaklaşık `44×44px` touch target
- Label ve accessible name
- Modal focus trap
- Modal kapanınca focus restore
- Toast/live region davranışı
- Reconnect’in screen reader’a kontrollü duyurulması
- Aura ve blur’un okunabilirliği bozmaması
- Hover işlemlerinin touch ve keyboard karşılığı

---

## 31. Görselde Bulunan Fakat Uygulanmayacak Ürün Unsurları

Aşağıdakiler yalnız tasarım biçimi örneğidir:

- Purple/Pink/Blue/Cyan/Green ana marka paleti
- Moderator badge
- Verified badge
- Premium badge
- WhatsApp entegrasyonu
- Twitter entegrasyonu
- Social share servisleri
- Friends-only select seçeneği, ilgili olmayan formlarda
- Heart/favorite sistemi
- Like sayısı
- Premium üyelik
- Global rozet sistemi
- Görseldeki özel room isimleri
- Avatarlar
- Participant sayıları
- Kategori metinleri

Vibehall’da follower, like, puan, rozet ve performans döngüsü yoktur.

---

## 32. Görsel ile Kesin Kararlar Arasındaki Çatışmalar

### 32.1 Mor accent

Görsel mor kullanıyor.

Implementation nar çiçeği kullanacaktır.

### 32.2 Badge çeşitliliği

Görsel birçok statü rozetine sahip.

Implementation yalnız gerçek ürün state ve rollerini gösterecektir.

### 32.3 Share servisleri

Görsel sosyal servis ikonları gösteriyor.

Implementation yalnız mevcut gerçek paylaşım davranışlarını kullanacaktır.

### 32.4 Favorite/heart

Görsel icon button örneğinde kalp bulunuyor.

Bu yalnız icon button biçim örneğidir; favorite özelliği anlamına gelmez.

### 32.5 Premium

Görsel Premium badge gösteriyor.

Premium üyelik veya monetization özelliği eklenmez.

---

## 33. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Board’daki mor paleti kesin sistem olarak uygulamak
- Yeni badge veya role sistemi eklemek
- Moderator rolü eklemek
- Premium üyelik eklemek
- Verified hesap sistemi eklemek
- Like veya favorite özelliği eklemek
- Yeni sosyal paylaşım entegrasyonu eklemek
- Her bileşene glassmorphism uygulamak
- Yeni radius değerleri üretmek
- Yeni ikon kütüphanesi eklemek
- Her sayfada farklı button sistemi oluşturmak
- Tam sayfa spinner kullanmak
- Skeleton yerine loading blink yapmak
- Sahte avatar veya kullanıcı göstermek
- Tasarım tokenlarını component içine dağınık hard-code etmek
- Tailwind veya yeni CSS framework eklemek
- Mevcut vanilla CSS sistemini terk etmek

---

## 34. Teknik Uygulama Yaklaşımı

Design system merkezi tokenlar üzerinden kurulmalıdır.

Örnek token aileleri:

- Color
- Surface
- Text
- Border
- Radius
- Spacing
- Typography
- Shadow
- Motion
- Z-index
- Component size

CSS custom properties veya mevcut projeye uygun eşdeğer merkezi sistem kullanılmalıdır.

Örnek mantık:

```css
:root {
  --vh-bg-hall: #090a0f;
  --vh-surface: #10121a;
  --vh-surface-elevated: #171a24;
  --vh-surface-hover: #1d2130;

  --vh-text-primary: #f5f7fa;
  --vh-text-secondary: #a8afbf;
  --vh-text-muted: #7b8396;

  --vh-accent: #ff625a;
  --vh-accent-hover: #ff766f;
  --vh-accent-pressed: #e9544d;

  --vh-radius-sm: 10px;
  --vh-radius-md: 14px;
  --vh-radius-lg: 18px;
  --vh-radius-xl: 22px;
}
```

Bu kod yalnız isimlendirme mantığı örneğidir.

Codex mevcut CSS yapısını inceleyerek proje için uygun kesin token organizasyonunu kurmalıdır.

---

## 35. Mevcut Teknik Yapıyla Uyum

Implementation şu sınırları korumalıdır:

- React 19 + Vite + TypeScript
- Custom router
- React Router yok
- Tailwind yok
- Vanilla CSS
- Mevcut component yapısı
- Phosphor ikon sistemi
- Mevcut accessibility ve test altyapısı
- Aynı component’in farklı ekranlarda yeniden kullanılabilmesi

Custom router ve vanilla CSS mevcut teknik mimarinin kesin parçalarıdır.

---

## 36. Bileşen Envanteri

Design foundation wave’i en az aşağıdaki reusable aileleri değerlendirmelidir:

- Button
- IconButton
- Input
- Textarea
- Select
- Checkbox / radio
- Avatar
- Badge
- StatusIndicator
- RoomCard
- Modal
- SidePanel
- BottomSheet
- Toast
- ReconnectBanner
- Skeleton
- EmptyState
- LoadingIndicator
- FormField
- ErrorMessage
- FocusRing
- Surface / panel primitives

Her bileşen mevcut kullanım alanları incelenmeden körlemesine yeniden yazılmamalıdır.

---

## 37. Wave Kapsamı Önerisi

Bu board uygun biçimde birkaç implementation aşamasına bölünebilir.

### Design Tokens Foundation

- Renkler
- Tipografi
- Radius
- Spacing
- Shadow
- Motion
- Z-index

### Core Controls

- Buttons
- Inputs
- Selects
- Form states
- Icon buttons
- Focus

### Identity and Status

- Avatar
- Badge
- Presence
- Live indicator

### Overlay Surfaces

- Modal
- Side panel
- Bottom sheet
- Toast
- Reconnect banner

### Loading and Empty States

- Skeleton
- Empty state
- Local loading
- Error state

### Room Card Foundation

- Thumbnail
- Aura
- Host
- Participant count
- Hover/focus

Kesin wave ayrımını Codex mevcut component tekrarlarını ve dosya yapısını inceleyerek belirleyebilir.

---

## 38. Görsel Kabul Kriterleri

Design system wave’i şu şartlar sağlanmadan kapatılamaz:

- Kesin renk tokenları uygulanmıştır
- Mor accent yerine nar çiçeği kullanılmıştır
- Manrope ve Inter doğru alanlarda kullanılmıştır
- Radius sistemi merkezileştirilmiştir
- Buton ailesinin bütün durumları tamamlanmıştır
- Input, textarea ve select tutarlıdır
- Focus görünür ve erişilebilirdir
- Avatar sistemi mevcut managed upload yapısıyla uyumludur
- Yalnız gerçek badge ve state’ler desteklenmektedir
- Moderator, Verified veya Premium eklenmemiştir
- Oda kartı içerikten doğan aura kullanmaktadır
- Modal, panel ve bottom sheet aynı yüzey diline sahiptir
- Toast ve reconnect davranışları tamamlanmıştır
- Skeleton ilk yüklemede layout shift’i azaltmaktadır
- Sonraki refresh içerikleri kaldırmamaktadır
- Tam sayfa spinner kullanılmamaktadır
- Empty state sahte içerik göstermemektedir
- Reduced motion desteklenmektedir
- Touch target’lar yeterlidir
- Keyboard ve screen reader davranışları test edilmiştir
- Aynı bileşen farklı ekranlarda tutarlı görünmektedir
- Tokenlar dağınık hard-code edilmemiştir
- Typecheck ve build geçmiştir
- İlgili component ve E2E testleri geçmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Board’dan yapılan bilinçli sapmalar belgelenmiştir

---

## 39. Son Tasarım Hükmü

Design System Component Board’un amacı çok sayıda güzel bileşen üretmek değildir.

Amaç:

> Vibehall’ın bütün ekranlarının tek bir görsel ve davranış sisteminden doğmasını sağlamaktır.

Bu sistem:

- Karanlık fakat canlı
- Yumuşak fakat yetişkin
- Ferah fakat boş olmayan
- Sempatik fakat oyuncak olmayan
- Atmosferik fakat okunabilir
- Tutarlı fakat tekdüze olmayan

bir karakter taşımalıdır.

En önemli görsel denklem:

> Karanlık kabuk + içerikten doğan ışık + sessiz insan varlığı.

Codex bu board’u yeni özellik kataloğu olarak değil, mevcut ürünün ortak tasarım sözleşmesi olarak yorumlamalıdır.