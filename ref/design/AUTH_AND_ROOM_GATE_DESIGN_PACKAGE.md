# Auth ve Room Gate Design Package

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Auth ve Room Gate Design Package** görseli, Vibehall’ın giriş, kayıt, şifre sıfırlama ve özellikle oda bağlamından gelen kimlik doğrulama akışlarının onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Kullanıcının bir odaya girmek isterken karşılaştığı auth kapısının nasıl hissettirmesi gerektiğini, oda bağlamının nasıl korunacağını, formun görsel önceliğini ve başarılı auth sonrasında Room’a geri dönüş akışını bağlayıcı biçimde temsil eder.

Ancak görseldeki bütün form alanları, metinler, sayaçlar, CTA’lar ve mikro akışlar mevcut ürün kabiliyeti olarak yorumlanamaz. Uygulama gerçek auth kontratlarını, mevcut backend validasyonlarını ve Vibehall’ın canonical ürün kurallarını kullanmalıdır.

Vibehall’da misafirler Discover ve public profilleri görebilir fakat odaya giremez. Odaya giriş için hesap ve aktif oturum gerekir. Auth sonrası kullanıcı hedef odaya geri döndürülmelidir.

---

## 1. Ekranın Ana Amacı

Bu tasarım paketinin ana amacı, auth sürecini kullanıcı ile oda arasına giren soğuk bir duvar olmaktan çıkarmaktır.

Kullanıcı:

- Bir odaya girmeye çalıştıysa hangi odaya girmeye çalıştığını unutmamalı
- Neden giriş yapması gerektiğini anlamalı
- Login veya signup işlemini mümkün olan en az zihinsel yükle tamamlamalı
- Başarılı auth sonrasında hedef Room’a doğal biçimde dönmeli
- Teknik bir sistem ekranına değil, oda kapısındaki kısa bir geçişe geldiğini hissetmeli

Ana ürün ilkesi:

> Auth bir engel değil, odaya girişin kısa ve doğal bir parçasıdır.

Normal login/signup ekranı da sade ve güvenilir olmalıdır; fakat Room Context Auth görünümü bu paketin en önemli yüzeyidir.

---

## 2. Görsel Odağı

### Room Context Auth

Görsel hiyerarşi şu sırada olmalıdır:

1. Girilmeye çalışılan odanın görseli ve oda bağlamı
2. `Sign in to join this room.` ana mesajı
3. Auth formu
4. Ana CTA
5. Login/signup arasında geçiş
6. Şifre sıfırlama ve diğer ikincil aksiyonlar

Kullanıcı ekrana girdiğinde ilk olarak yalnızca bir login formu görmemelidir.

Önce şu hissi almalıdır:

> Bu oda hâlâ burada ve giriş yaptığımda doğrudan içeri döneceğim.

### Normal Auth

Normal auth ekranında görsel odak:

1. Login veya signup amacı
2. Form
3. Ana CTA
4. Alternatif auth akışına geçiş
5. Şifre sıfırlama

Normal auth ekranı daha sade olabilir. Room görseli veya oda bilgisi yalnız kullanıcı gerçekten bir odadan geldiyse gösterilir.

---

## 3. Kilitli Kompozisyon

### 3.1 Desktop Room Context Auth

Desktop görünüm iki ana parçadan oluşur:

- Sol tarafta oda bağlamı
- Sağ tarafta auth formu

#### Sol oda bağlamında bulunacaklar

- Odanın gerçek thumbnail’i
- Oda adı
- Host bilgisi
- Live durumu
- İçerideki kişi sayısı, mevcut API güvenilir biçimde sağlıyorsa
- Gerekirse kategori bilgisi
- Çok sınırlı katılımcı avatarı veya presence göstergesi

Bu alan oda kartı gibi değil, girilmeye çalışılan gerçek odanın sakin bir önizlemesi gibi görünmelidir.

#### Sağ auth alanında bulunacaklar

- `Sign in to join this room.`
- Kısa destekleyici açıklama
- Login formu
- Ana CTA
- Signup’a geçiş
- Forgot password
- Gerekirse stay signed in seçeneği, mevcut sistemde gerçekten varsa

Auth formu büyük bir kurumsal panel veya modal gibi görünmemelidir.

#### Desktop oranı

Oda bağlamı ve form yaklaşık dengeli bir iki kolon yapısında olabilir.

Oda görseli formu boğmamalı; form da oda bağlamını görünmez hâle getirmemelidir.

---

### 3.2 Mobil Room Context Auth

Mobil görünüm masaüstünün sıkıştırılmış hâli değildir.

Doğal sıra:

1. Geri
2. Oda thumbnail’i
3. Oda adı ve kısa bağlam
4. `Sign in to join this room.`
5. Auth formu
6. Ana CTA
7. Login/signup geçişi

Mobilde oda önizlemesi yeterince görünür olmalı fakat formu ekranın çok altına itmemelidir.

Thumbnail yaklaşık `16:9` oranını korur.

Auth formu ekran genişliğini verimli kullanır ve yatay kaydırma oluşturmaz.

---

### 3.3 Normal Login ve Signup

Normal login ve signup ekranları aynı tasarım ailesini kullanır.

#### Login

- Username/email alanı yalnız gerçek backend kontratına göre belirlenir
- Password
- Sign in CTA
- Forgot password
- Signup’a geçiş

#### Signup

Yalnız mevcut sistemdeki gerçek zorunlu alanlar gösterilir.

Görseldeki şu alanlar temsilî olabilir:

- Email optional
- Username
- Password
- Ek profil alanları

Codex mevcut auth route ve schema’yı incelemeden form alanı ekleyemez veya kaldıramaz.

Signup akışı gereksiz wizard’a dönüştürülemez.

---

### 3.4 Auth Sonrası Odaya Dönüş

Başarılı auth sonrasında kullanıcı:

- Başarı ekranında gereksiz süre bekletilmez
- Home’a veya Discover’a yönlendirilmez
- Hedef Room’a doğrudan geri döner
- Room mevcutsa normal join akışına devam eder
- Room kapanmışsa veya erişilemezse açık ve sakin bir state gösterilir

Geçiş sırasında kısa bir ara durum kullanılabilir:

> Almost there…

Ancak bu yalnızca gerçek bir hazırlık işlemi sürüyorsa gösterilir.

Dekoratif bekleme ekranı oluşturulmaz.

Ana akış:

> Odaya gitmeyi dene → Auth gerekli → Login/signup → Session doğrulanır → Hedef Room’a geri dön → Join süreci devam eder

---

## 4. Görsel Hiyerarşi

Room Context Auth yüzeyinde hiyerarşi:

1. Oda bağlamı
2. Ana auth mesajı
3. Form
4. Ana CTA
5. Alternatif auth akışı
6. Yardımcı bağlantılar

Normal auth yüzeyinde hiyerarşi:

1. Auth amacı
2. Form
3. Ana CTA
4. Alternatif akış
5. Şifre sıfırlama

Şunlar ana CTA ile yarışamaz:

- Forgot password
- Sign up / Sign in geçişi
- Stay signed in
- Community Guidelines veya Terms bağlantıları
- Geri butonu

---

## 5. Atmosfer ve Işık

Auth yüzeyleri Vibehall’ın ana tasarım sistemini kullanır:

- Ana zemin: `#090A0F`
- Normal yüzey: `#10121A`
- Odak yüzeyi: `#171A24`
- Accent: `#FF625A`
- Ana metin: `#F5F7FA`
- İkincil metin: `#A8AFBF`
- İnce sınırlar: düşük opaklıklı beyaz

### Room Context Auth atmosferi

Oda thumbnail’inden gelen kontrollü aura arka planda kullanılabilir.

Aura:

- Form kontrastını bozamaz
- Thumbnail’i arka planda açıkça tekrar gösteremez
- Odayı canlı ve ulaşılabilir hissettirmelidir
- Mobilde daha düşük yoğunlukta kullanılmalıdır

### Normal Auth atmosferi

Normal auth daha nötr kalabilir.

Büyük dekoratif portal görseli zorunlu değildir.

Kullanıcı formu çözmekte zorlanmamalıdır.

Cam etkisi yalnız geçici menü, toast veya küçük overlay alanlarında kullanılabilir. Form paneli mat ve güvenilir kalmalıdır.

---

## 6. Tipografi ve Boşluk Yorumu

### Tipografi

- Ana başlıklar: Manrope `600–700`
- Form label’ları: Inter `500`
- Input metni: Inter `400–500`
- Yardımcı metin: Inter `400`
- CTA: Inter `600`
- Hata metni: Inter `400–500`

### Başlıklar

Room Context Auth:

> Sign in to join this room.

Signup karşılığı:

> Create your account.

Normal login:

> Welcome back.

Normal signup:

> Create your account.

Metinler kısa, doğrudan ve sıcak olmalıdır.

### Boşluk

- Form alanları arasında `16px`
- Label ve input arasında `8px`
- Ana CTA öncesinde `20–24px`
- Form panel iç boşluğu desktop’ta `28–32px`
- Mobilde `20–24px`
- Oda bağlamı ile auth formu arasında `24–32px`

Form gereksiz sıkışık veya aşırı geniş olamaz.

---

## 7. Form Bileşenleri

### 7.1 Input

Input’lar:

- Mat koyu yüzey
- İnce sınır
- `44–48px` minimum yükseklik
- Görünür label
- Focus sırasında nar çiçeği halka
- Açık hata durumu
- Uygun autocomplete niteliği

kullanır.

Placeholder, label yerine geçemez.

Password alanında show/hide kontrolü kullanılabilir.

Bu ikon:

- Erişilebilir isim taşır
- Klavyeyle çalışır
- Formu yeniden submit etmez

---

### 7.2 Ana CTA

Login:

> Sign in

Signup:

> Create account

Ana CTA:

- Dolgulu nar çiçeği
- Tam form genişliğinde olabilir
- Loading sırasında metin veya lokal spinner ile durum gösterir
- Formun tamamını gereksiz yere kilitlemez
- Double-submit engellenir

CTA loading örneği:

- Metin korunabilir
- Küçük spinner eklenebilir
- Buton lokal olarak disabled olur

Tüm ekran loading’e dönmez.

---

### 7.3 Alternatif Auth Akışı

Login ekranında:

> Don’t have an account? Sign up

Signup ekranında:

> Already have an account? Sign in

Bu geçiş:

- Formun altında
- İkincil görsel ağırlıkta
- Aynı hedef Room bağlamını koruyarak

çalışmalıdır.

Login’den signup’a geçildiğinde return intent kaybolamaz.

---

### 7.4 Forgot Password

Forgot password:

- Password label yanında veya form altında gösterilebilir
- Room bağlamını kaybetmemelidir
- Reset tamamlandıktan sonra kullanıcı login’e dönebilmelidir
- Mümkünse hedef Room return intent korunmalıdır

Şifre sıfırlama akışı ayrı bir genel sayfaya gitse bile dönüş bağlamı saklanmalıdır.

---

## 8. Return Intent ve Oda Bağlamı

Bu paketin en önemli teknik davranışlarından biri return intent’tir.

Kullanıcı bir odaya girerken auth’a yönlendirilmişse sistem güvenli biçimde şunları saklayabilir:

- Hedef room slug/id
- Gerekli route veya query bilgisi
- Invite veya grant bağlamı, mevcut kontratlara uygun biçimde
- Auth sonrası dönülecek güvenli iç route

### Güvenlik

Return intent:

- Harici URL’ye yönlendirmeye izin veremez
- Open redirect oluşturamaz
- Query içinden gelen güvensiz URL’yi körlemesine kullanamaz
- Yalnız izin verilen Vibehall route’larına dönebilir

Private Room akışında:

- Normal password gereksinimi korunur
- Geçerli RoomInvite grant varsa mevcut ürün kontratı uygulanır
- Auth, ban veya capacity kontrolünü bypass edemez

Auth sonrası odaya dönüş, normal room access politikalarının tamamından yeniden geçmelidir.

---

## 9. Room Context Bilgileri

Oda bağlamında yalnız kullanıcıya güvenli biçimde gösterilebilen bilgiler kullanılır:

- Room title
- Thumbnail
- Host display name veya username
- Live durumu
- Category
- Güvenli participant count

Private Room için:

- Discover’da görünmeme kuralı korunur
- Direct link ile gelen kullanıcıya yalnız güvenli minimum bağlam gösterilir
- Oda detayları access policy’yi aşacak şekilde sızdırılmaz
- Password veya invite grant bilgisi UI’da açığa çıkarılmaz

Room sona ermişse auth formu göstermeye devam etmek yerine uygun state’e geçilmelidir.

Örnek:

> This room has ended.

---

## 10. Etkileşimler

### Hover

- CTA hafifçe yükselir
- İkincil linkler renk değiştirir
- Oda önizlemesi büyük hareket yapmaz

### Focus

- En az `2px` görünür focus halkası
- Focus sırası mantıklı:

  - Geri
  - İlk input
  - İkinci input
  - Ana CTA
  - Alternatif auth
  - Forgot password

### Enter ile submit

- Form geçerliyse submit olur
- IME veya mobil klavye davranışı bozulmaz
- Double-submit oluşmaz

### Loading

- CTA içinde lokal loading
- Mevcut oda görseli ve form korunur
- Tüm sayfa blink etmez
- Auth response beklenirken form layout’u değişmez

### Success

Başarı durumu çok kısa ve doğal olabilir.

> Almost there…

Ardından hedef Room’a geçilir.

### Error

Hata, ilgili alanın yanında veya form seviyesinde gösterilir.

Teknik hata mesajı kullanılmaz.

---

## 11. Hata Sistemi

### Alan hataları

Örnek:

- Username or email is required.
- Password is required.
- Password is too short.
- Choose a valid username.

Alan hataları:

- İlgili input altında
- Açık fakat sakin
- Screen reader ile ilişkili
- Submit sonrasında ilk hataya focus yönlendirmesi yapılabilir

### Form seviyesi hataları

Örnek:

> We couldn’t sign you in. Check your details and try again.

Hatalar kullanıcı hesabının var olup olmadığını gereksiz yere ifşa etmemelidir.

### Network hatası

> We couldn’t reach Vibehall. Check your connection and try again.

### Room dönüş hataları

Auth başarılı fakat Room’a giriş mümkün değilse:

- Room ended
- Room full
- Access denied
- Banned
- Invite expired
- Invalid password
- Feature unavailable

durumları gerçek ürün kontratına göre ayrı ve sakin biçimde gösterilir.

---

## 12. Responsive Davranış

Mobilde:

- Header minimum kalır
- Geri butonu görünür
- Thumbnail üstte
- Form alanları tam genişlik
- CTA minimum `48px`
- Klavye açıldığında aktif input görünür
- Submit CTA erişilebilir kalır
- Form kontrolsüz şekilde zıplamaz
- Password manager ve autofill ile uyum korunur
- Safe area dikkate alınır

Oda önizlemesi mobilde sabit yüksekliği aşmamalıdır.

Küçük ekranlarda katılımcı avatarları azaltılabilir veya tamamen kaldırılabilir. Oda adı ve ana thumbnail korunmalıdır.

---

## 13. Erişilebilirlik

Aşağıdaki maddeler zorunludur:

- Tüm input’ların görünür label’ı veya açık erişilebilir adı vardır
- Hata metinleri input ile `aria-describedby` benzeri ilişki kurar
- Form submit sonucu uygun live region ile bildirilir
- Password show/hide butonu erişilebilir isim taşır
- Focus görünürdür
- Tab sırası mantıklıdır
- Kontrast WCAG AA hedefini karşılar
- CTA yalnız renkle ifade edilmez
- Loading durumu screen reader’a bildirilir
- Auth sonrası yönlendirme anlaşılır biçimde gerçekleşir
- Oda thumbnail’i dekoratifse boş alt; bilgi taşıyorsa anlamlı alt kullanılır
- Mobil dokunma alanları en az yaklaşık `44×44px`

---

## 14. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Room thumbnail
- Oda adı
- Host adı
- Participant count
- Avatarlar
- Mesaj içerikleri
- Formdaki örnek username/email
- `Stay signed in`
- Başarı ekranı süresi
- Oda kategorileri
- Signup alanlarının sayısı
- “Email optional” ifadesi
- Mobil cihaz çerçevesi
- Oda içi chat içeriği

Gerçek frontend ve backend kontratları kullanılmalıdır.

---

## 15. Otomatik Uygulanmayacak Görsel Unsurlar

### Username or email login

Görselde `Username or email` alanı bulunmaktadır.

Mevcut auth backend’i hangi identifier’ı kabul ediyorsa yalnız o uygulanır. Görsel nedeniyle email login veya username login davranışı değiştirilemez.

### Stay signed in

Görselde `Stay signed in` seçeneği vardır.

Mevcut session/cookie kontratında karşılığı yoksa eklenmez.

### Email optional

Signup görselinde email optional görünmektedir.

Mevcut schema ve ürün kararı neyse o korunur.

### Katılımcı avatarları

Room Context Auth ekranında avatarlar dekoratif örnektir.

Güvenli ve gerçek participant preview endpoint’i yoksa sahte avatar veya ekstra API eklenmez.

### Ara başarı ekranı

`Almost there…` ekranı yalnız gerçek hazırlık süresi varsa kullanılabilir. Auth hızlıysa doğrudan Room’a geçilir.

### Mobil tasarım

Görsel mobil örnek içerir; ancak ayrıntılı mobil implementation ayrı mobil referans veya ilgili wave kapsamına göre yapılabilir.

---

## 16. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Yeni auth provider eklemek
- Google, Apple veya sosyal login eklemek
- Mevcut signup alanlarını sırf görselde var diye değiştirmek
- Email doğrulama sistemi eklemek
- Stay signed in özelliği eklemek
- Guest room access açmak
- Auth zorunluluğunu kaldırmak
- Private Room politikasını değiştirmek
- Ban, capacity veya password kontrolünü bypass etmek
- Kullanıcıyı auth sonrası Home’a göndermek
- Harici return URL kabul etmek
- Oda bağlamı için sahte kullanıcı veya sayaç göstermek
- Görseldeki room preview için yeni gizli veri sızdırmak
- Formu çok adımlı wizard’a çevirmek
- React Router veya yeni auth kütüphanesi eklemek
- Teknik backend hata mesajlarını doğrudan kullanıcıya göstermek

Misafirlerin odaya girememesi ve auth sonrası return intent davranışı mevcut ürün sınırları içinde korunmalıdır.

---

## 17. Teknik Uyarlama Alanları

Codex sınırlı olarak şu konularda uyarlama yapabilir:

- Mevcut auth API alanlarına göre form içeriği
- Login/signup switch yapısı
- Return intent’in mevcut custom router’a entegrasyonu
- Room preview için güvenli mevcut endpoint kullanımı
- Mobil breakpoint
- Gerçek hata enumlarının kullanıcı dostu metne dönüştürülmesi
- Password manager ve browser autofill uyumu
- Form validation’ın mevcut Zod veya backend kurallarıyla hizalanması
- Session sonrası Room join akışının mevcut route yapısına bağlanması
- Mevcut reusable form bileşenlerinin kullanılması

Bu uyarlamalar auth’ın oda bağlamını koruyan ana kompozisyonunu ve hissini değiştiremez.

---

## 18. Mevcut Teknik Yapıyla Uyum

Implementation şu gerçekleri korumalıdır:

- Frontend custom router kullanır
- React Router eklenmez
- Tailwind eklenmez
- Mevcut vanilla CSS design system geliştirilir
- Cookie tabanlı session korunur
- CSRF mutation davranışı korunur
- Auth return intent mevcut route mantığına güvenli biçimde bağlanır
- Private Room ve invite grant access kontrolleri backend authority olarak kalır
- Room access kararları yalnız frontend tarafından verilmez
- Login/signup API kontratları değiştirilmeden önce ayrı onay gerekir

Custom router ve auth teknik yapısı mevcut proje bağlamında tanımlıdır.

---

## 19. Wave Kapsamı Önerisi

Bu görsel aşağıdaki mantıklı implementation kapsamına dönüştürülebilir:

### Auth Visual Foundation

- Normal login
- Normal signup
- Password reset
- Shared form components
- Error/loading states

### Room Gate Experience

- Room-context auth layout
- Güvenli room preview
- Return intent
- Auth sonrası Room dönüşü
- Room ended/full/access error state’leri

### Responsive and Accessibility Pass

- Mobil düzen
- Autofill/password manager
- Keyboard/focus
- Screen reader error announcements
- Loading ve reconnect davranışı

Kesin wave bölünmesini Codex mevcut kod büyüklüğüne göre belirleyebilir. Ancak Room Context Auth ve return intent aynı capability bütününün parçaları olarak test edilmelidir.

---

## 20. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Room Context Auth ekranı görsel referansla yan yana karşılaştırılmıştır
- Girilmeye çalışılan odanın bağlamı görünürdür
- Auth formu oda bağlamıyla dengeli yerleşmiştir
- Kullanıcı neden giriş yapması gerektiğini açıkça anlar
- Login/signup geçişinde hedef Room bağlamı kaybolmaz
- Başarılı auth sonrası kullanıcı hedef Room’a döner
- Harici open redirect mümkün değildir
- Room ended, full veya access denied durumları doğru ele alınır
- Private Room kuralları korunur
- Ban ve capacity kontrolleri bypass edilemez
- Sahte oda veya participant verisi kullanılmaz
- Form alanları gerçek backend kontratına uygundur
- Teknik hata mesajları kullanıcıya gösterilmez
- Loading yalnız lokal düzeyde gösterilir
- Double-submit engellenmiştir
- Password manager ve autofill test edilmiştir
- Klavye ve focus davranışı tamamlanmıştır
- Mobilde klavye açıldığında form kullanılabilir kalır
- WCAG AA kontrast hedefi korunmuştur
- Typecheck ve build geçmiştir
- İlgili frontend/backend testleri geçmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporuna yazılmıştır

---

## 21. Son Tasarım Hükmü

Auth ekranı Vibehall’ın dışında duran ayrı bir güvenlik paneli gibi görünmemelidir.

Özellikle Room Context Auth:

> Odanın kapısında duran kısa, sakin ve anlaşılır bir geçiş gibi hissettirmelidir.

Doğru deneyim şudur:

- Kullanıcı odayı görür
- Neden giriş yapması gerektiğini anlar
- Formu hızlıca tamamlar
- Bağlamını kaybetmez
- Başarılı işlemden sonra doğrudan odaya döner

Bu tasarım paketinin başarı ölçütü yalnız güzel bir login ekranı oluşturmak değildir.

Başarı ölçütü:

> Kullanıcının auth sürecini ürün deneyiminden kopmadan tamamlaması ve geldiği odaya doğal biçimde geri dönmesidir.