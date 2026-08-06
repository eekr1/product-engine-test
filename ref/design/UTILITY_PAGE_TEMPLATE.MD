# Utility Page Template

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Utility Page Template** görseli, Vibehall’ın uzun metin, yasal bilgilendirme, topluluk kuralları, destek ve sistem açıklama sayfaları için onaylanmış ortak kompozisyon ve tasarım yönü referansıdır.

Bu template tek bir sayfayı temsil etmez. Aşağıdaki sayfa ailelerinin ortak görsel ve davranış sistemini tanımlar:

- Terms of Service
- Privacy Policy
- Community Guidelines
- Support
- Help
- System Information
- Uzun bilgilendirme sayfaları
- Basit ürün açıklama sayfaları
- Şifre sıfırlama sonrası bilgilendirme gibi kısa yardımcı yüzeyler
- Gerekli diğer utility içerikler

Görsel yalnızca genel ilham kaynağı değildir. Aşağıdaki kararları bağlayıcı biçimde temsil eder:

- İçerik ve okunabilirliğin görsel dekorasyondan önce gelmesi
- Masaüstünde kontrollü maksimum içerik genişliği
- Mobilde rahat okunan, tek kolonlu yapı
- Net başlık ve bölüm hiyerarşisi
- Global shell ile tasarım tutarlılığı
- Uzun içeriklerin anlamlı bölümlere ayrılması
- Destekleyici sayfalara doğal bağlantılar verilmesi
- Gereksiz aura, animasyon ve görsel gürültü kullanılmaması
- Kullanıcıya açık ve insani bir dil sunulması

Ancak görselde bulunan bütün navigasyon öğeleri, metinler, tarih bilgileri, tema değiştirme ikonu, accordion davranışı, Support Center bağlantısı ve sayfa kategorileri mevcut ürün kabiliyeti olarak doğrudan yorumlanamaz.

Implementation gerçek route’ları, yayınlanmış canonical içerikleri, global shell kararlarını ve mevcut legal/support altyapısını kullanmalıdır.

> **Ana ilke:** Utility sayfalarında tasarım içeriği süslemez; içeriğin kolay anlaşılmasını sağlar.

---

## 1. Template’in Ana Amacı

Utility Page Template’in temel amacı şudur:

> Kullanıcının yasal, toplulukla ilgili veya yardım amaçlı bilgileri rahatça okuyabilmesini, ihtiyaç duyduğu bölümü kolayca bulabilmesini ve sonrasında ne yapacağını açıkça anlayabilmesini sağlamak.

Kullanıcı bu sayfalarda:

- Hangi sayfada olduğunu hemen anlamalı
- İçeriğin güncelliğini görebilmeli
- Uzun metni gözleri yorulmadan okuyabilmeli
- Bölümler arasında kolayca ilerleyebilmeli
- İlgili başka sayfalara ulaşabilmeli
- Yardıma ihtiyaç duyarsa doğru destek alanına gidebilmeli
- Mobilde metni yakınlaştırmak veya yatay kaydırmak zorunda kalmamalıdır

Utility sayfaları ürünün atmosferini koruyabilir; ancak içerik hiçbir zaman dekorasyonun arkasında kalmamalıdır.

---

## 2. Kullanılacak Sayfa Aileleri

Bu template aşağıdaki içerik türlerinde kullanılabilir.

### 2.1 Terms of Service

- Kullanım şartları
- Hesap sorumlulukları
- Yasak davranışlar
- Hizmetin sona erdirilmesi
- Sorumluluk ve değişiklik hükümleri
- İletişim bilgileri

### 2.2 Privacy Policy

- Toplanan veriler
- Verilerin kullanım amaçları
- Saklama süreleri
- Güvenlik yaklaşımı
- Kullanıcı hakları
- Üçüncü taraf servisleri
- İletişim ve talepler

### 2.3 Community Guidelines

- Topluluk davranışları
- Taciz ve tehdit yasağı
- Uygunsuz içerik
- Spam ve kötüye kullanım
- Raporlama
- Yaptırım yaklaşımı
- Oda ve mesaj güvenliği

### 2.4 Support

- Sık karşılaşılan sorunlar
- Hesap erişimi
- Oda sorunları
- Mesajlaşma ve arkadaşlık
- Güvenlik ve raporlama
- Teknik yardım
- İletişim veya destek talebi

### 2.5 System Information

- Vibehall’ın nasıl çalıştığı
- Oda mantığı
- Temel özellik açıklamaları
- Sistem veya hizmet durumları
- Sık kullanılan ürün kavramları

Her içerik türü aynı template’i kullanabilir; ancak sayfa amacı ve bilgi yapısı birbirine karıştırılmamalıdır.

---

## 3. Değişmez Tasarım Prensipleri

Bütün utility sayfalarında aşağıdaki kurallar korunmalıdır:

- Maksimum okuma genişliği kontrollüdür
- Uzun satırlar kullanılmaz
- Metin ana görsel odaktır
- Net heading hiyerarşisi vardır
- Paragraflar gereksiz uzun değildir
- İçerik bölümlere ayrılır
- Gerektiğinde listeler kullanılır
- Teknik ve hukuki dil mümkün olduğunca sadeleştirilir
- Önemli bağlantılar bağlam içinde sunulur
- Gereksiz illüstrasyon veya dekor kullanılmaz
- Büyük aura veya neon efekt kullanılmaz
- Global shell ile görsel uyum korunur
- Mobilde yatay scroll oluşmaz
- Dark-first okunabilirlik korunur
- İçerik HTML içinde güvenli ve semantik biçimde render edilir

---

## 4. Desktop Ana Kompozisyon

Desktop utility sayfası üç ana alandan oluşabilir:

1. Global shell veya utility navigation
2. Üst bağlam çubuğu
3. Ana içerik alanı

Görselde solda sabit ürün navigasyonu bulunmaktadır. Bu alan mevcut Global Shell kararlarıyla uyumlu biçimde uygulanmalıdır.

Utility sayfası kendine özel yeni bir navigasyon sistemi üretmemelidir.

### 4.1 Global shell

Normal uygulama shell’i kullanılabilir:

- Home veya Hall
- Discover
- Social
- Messages
- Create Room
- Kullanıcı menüsü

Ancak utility sayfalarında Social Rail’in sürekli açık olması zorunlu değildir.

Legal sayfalarda sade header veya daraltılmış app shell daha uygun olabilir.

### 4.2 İçerik yüzeyi

Ana içerik alanı:

- Merkezi veya kontrollü sol hizalı
- Maksimum genişliği belirlenmiş
- Uzun metin okumaya uygun
- Büyük boş dashboard alanlarından arındırılmış

olmalıdır.

### 4.3 İçerik genişliği

Bağlayıcı hedef:

- Maksimum içerik genişliği: `760–840px`

Bu aralık:

- Rahat satır uzunluğu
- Yeterli nefes
- Desktop’ta içerik odaklı görünüm

sağlar.

Sayfa container’ı daha geniş olabilir; fakat ana metin sütunu bu sınırı aşmamalıdır.

---

## 5. Üst Bağlam Çubuğu

Görselde ana içerik üzerinde:

- Back
- Tema ikonu
- Help ikonu

bulunmaktadır.

Bu alan utility page context bar olarak yorumlanabilir.

### 5.1 Back

Back aksiyonu:

- Kullanıcıyı önceki güvenli route’a götürür
- Direct link ile gelindiyse Home/Hall veya uygun route’a döner
- Tarayıcı history ile uyumlu çalışır
- Açık ve erişilebilir label taşır

### 5.2 Tema ikonu

Görselde ay/moon ikonu bulunmaktadır.

Bu ikon yalnız gerçekten light/dark appearance sistemi varsa kullanılabilir.

Vibehall dark-first ve yalnız dark görünüm kullanıyorsa:

- İşlevsiz tema ikonu gösterilmez
- Sırf görselde bulunduğu için light mode eklenmez

### 5.3 Help ikonu

Help ikonu:

- Support sayfasına
- İlgili yardım bölümüne
- Kısa açıklama popover’ına

bağlanabilir.

İşlevsiz dekoratif ikon kullanılamaz.

---

## 6. Sayfa Başlığı ve Meta Bilgisi

Her utility sayfası açık bir `h1` ile başlamalıdır.

Örnekler:

- Terms of Service
- Privacy Policy
- Community Guidelines
- Support
- How Vibehall Works

### 6.1 Başlık

- Manrope `600–700`
- Desktop yaklaşık `36–44px`
- Mobil yaklaşık `28–34px`
- Kontrollü satır uzunluğu
- Gereksiz büyük hero boyutu yok

### 6.2 Son güncelleme tarihi

Legal veya yaşayan içeriklerde:

> Last updated: May 20, 2025

gibi tarih gösterilebilir.

Tarih:

- Gerçek yayınlanan içerikten gelir
- Hard-coded sahte tarih olmaz
- Kullanıcının locale’ına göre formatlanabilir
- Sayfa başlığının hemen altında düşük ağırlıkta görünür

### 6.3 Giriş paragrafı

Sayfanın amacı kısa ve doğrudan açıklanır.

Giriş:

- Bir veya iki kısa paragraf
- Hukuki jargonla başlamayan
- Kullanıcıya ne okuyacağını söyleyen

bir yapıda olmalıdır.

---

## 7. İçerik Hiyerarşisi

Görseldeki bağlayıcı hiyerarşi:

- `H1`: Sayfa başlığı
- `H2`: Ana bölümler
- `H3`: Alt başlıklar
- Body: Açıklama
- Lists: Karmaşık maddeler
- Links: İlgili sayfalar

### 7.1 Önerilen masaüstü ölçeği

- `H1`: `36–44px`
- `H2`: `24–28px`
- `H3`: `18–20px`
- Body: `16px`
- Line-height: yaklaşık `24–28px`
- Caption/meta: `13–14px`

Görseldeki `H1 28/32` gibi değerler mobil veya küçük template örneği olarak değerlendirilmelidir; kesin global tipografi Design System’den gelir.

### 7.2 Başlık aralıkları

- H1 sonrası: `16–24px`
- Giriş sonrası ilk H2: `36–48px`
- H2 öncesi: `36–48px`
- H2 sonrası: `12–16px`
- Paragraflar arası: `16–20px`

Başlıklar birbirine yapışmamalı, fakat sayfa parçalanmış kart koleksiyonuna da dönüşmemelidir.

---

## 8. Uzun Metin Okunabilirliği

Legal ve utility içeriklerinde temel hedef rahat okumadır.

### 8.1 Satır uzunluğu

Yaklaşık hedef:

- `60–80` karakter

Çok geniş satırlar kullanılmaz.

### 8.2 Paragraf uzunluğu

Paragraflar:

- Mümkünse `3–6` satır
- Tek konu
- Gereksiz hukuk dili olmadan

yazılmalıdır.

Uzun maddeler:

- Alt başlıklara
- Listelere
- Numaralı bölümlere

ayrılmalıdır.

### 8.3 Metin kontrastı

- Ana metin `#F5F7FA` yerine gerektiğinde daha yumuşak primary/secondary kombinasyonu
- Body için yüksek fakat göz yormayan kontrast
- Linkler açık biçimde ayrışır
- Muted metin aşırı soluk olmaz

---

## 9. Divider ve Bölüm Ayrımları

Görselde bölümler arasında ince divider kullanılmaktadır.

Divider:

- Düşük opaklıklı beyaz
- Bölüm bitiminde
- Gereksiz her paragraf arasında değil
- İçeriği destekleyen

bir şekilde kullanılabilir.

Alternatif olarak yalnız spacing yeterliyse divider kullanılmayabilir.

Her bölüm ayrı card içine alınmaz.

Utility sayfası dashboard görünümüne dönüşmemelidir.

---

## 10. Link Sistemi

Utility içeriğindeki bağlantılar:

- Metinden net biçimde ayrılır
- Nar çiçeği accent veya uygun link rengi kullanır
- Hover ve focus durumu vardır
- Alt çizgi veya başka ikinci görsel işaret taşıyabilir
- Klavyeyle erişilebilir
- Harici linkse uygun güvenlik nitelikleri kullanır

Örnek ilgili bağlantılar:

- Community Guidelines
- Privacy Policy
- Terms
- Support
- Report form
- Account settings

Linkler yalnız “click here” metniyle verilmemelidir.

---

## 11. Mobil Ana Kompozisyon

Mobil utility sayfası tek kolonlu ve içerik odaklıdır.

Doğal sıra:

1. Minimal header
2. Back
3. Sayfa başlığı
4. Last updated
5. Giriş
6. Bölümler
7. Support veya ilgili sayfa CTA’sı

### 11.1 Kenar boşluğu

Başlangıç hedefi:

- `16–20px`

### 11.2 Metin

- Body minimum `16px`
- Rahat line-height
- Yatay scroll yok
- Metin zoom davranışı engellenmez
- Uzun URL veya kelimeler wrap edilir

### 11.3 Header

- Minimal
- Sayfa başlığı veya ürün context’i
- Geri
- Gerekiyorsa tek yardımcı aksiyon

Mobilde desktop sidebar gösterilmez.

Global alt navigasyon kullanılmaz.

---

## 12. Mobil Accordion Davranışı

Görselde mobil Terms sayfası bölümleri accordion olarak gösterilmiştir.

Bu davranış **zorunlu değildir**.

### 12.1 Accordion kullanılabilecek durumlar

- Support FAQ
- Çok uzun ve bağımsız bilgi bölümleri
- Kullanıcının yalnız belirli bir cevabı aradığı yüzeyler
- System Info

### 12.2 Accordion kullanılmaması gereken durumlar

Legal içeriklerde bölümleri varsayılan kapalı göstermek:

- Metnin tamamını taramayı zorlaştırabilir
- Linklenen bölüme erişimi karmaşıklaştırabilir
- Print/export davranışını bozabilir
- Hukuki metnin görünürlüğünü azaltabilir

Terms ve Privacy için tercih:

- Normal sürekli belge akışı
- İçindekiler / anchor navigation
- Bölüm jump link’leri

olabilir.

Görseldeki accordion kompozisyon seçeneğidir; bütün utility sayfalara uygulanmaz.

### 12.3 Accordion erişilebilirliği

Kullanılırsa:

- Gerçek button semantics
- `aria-expanded`
- Klavye erişimi
- Deep-link desteği
- Açık bölüm state’i
- Reduced motion

uygulanır.

---

## 13. İçindekiler ve Anchor Navigation

Uzun sayfalarda içindekiler sistemi düşünülebilir.

Desktop seçenekleri:

- Üstte kısa contents listesi
- Sağda sticky mini table of contents
- İçerik başında anchor links

Mobil:

- `On this page` dropdown
- Bölüm listesi
- Anchor jump

kullanılabilir.

İçindekiler:

- Gerçek heading yapısından üretilmeli
- Hard-coded metinlerle içerikten kopmamalı
- Active section gösterebilir
- Back button ve browser history’yi bozmamalı

Bu capability uzunluk ve ihtiyaç varsa eklenir; kısa sayfalar için zorunlu değildir.

---

## 14. Support Sayfası Uyarlaması

Support aynı template’i kullanabilir; ancak legal metinden daha aksiyon odaklıdır.

Support sayfası şu yapıda olabilir:

1. Support başlığı
2. Kısa açıklama
3. Kategori listesi
4. Sık sorulan sorular
5. İlgili utility bağlantıları
6. Destek talebi veya iletişim yöntemi

### 14.1 Support kategorileri

Gerçek ürün kapsamına göre:

- Account
- Rooms
- Messages
- Friends and invites
- Safety and reporting
- Technical issues
- Privacy

### 14.2 Yardım CTA’sı

Görselde:

> Visit our Support Center

bulunmaktadır.

Ayrı Support Center mevcut değilse bu metin kullanılmaz.

Bunun yerine:

- Contact support
- Read support articles
- Report a problem

gibi gerçek aksiyonlar kullanılabilir.

### 14.3 Destek iletişimi

Email veya form gerçekten mevcutsa gösterilir.

Sahte destek kanalı oluşturulmaz.

Yanıt süresi gibi iddialar doğrulanmadan yazılmaz.

---

## 15. Community Guidelines Uyarlaması

Community Guidelines sayfası:

- Açık davranış beklentileri
- Yasak içerikler
- Oda ve chat davranışları
- Report sistemi
- Block araçları
- Yaptırım yaklaşımı

gibi bölümler kullanır.

Dil:

- Net
- Yargılayıcı olmayan
- İnsan odaklı
- Ne yapılmaması gerektiğini açıklayan
- Mümkünse doğru davranış örneği veren

olmalıdır.

Aşırı hukuk dili kullanılmamalıdır.

---

## 16. Privacy Policy Uyarlaması

Privacy Policy, legal olarak doğru olmakla birlikte okunabilir tasarım kullanmalıdır.

Önerilen bölümler:

- What we collect
- Why we use it
- Room and social data
- Messages
- Uploaded media
- Cookies and sessions
- Service providers
- Retention
- Security
- User choices
- Contact

Görseldeki template content’i gerçek Privacy Policy yerine kullanılamaz.

Yayınlanmış canonical belge authoritative kaynaktır.

UI düzenlemesi metni sessizce değiştiremez.

---

## 17. Terms of Service Uyarlaması

Terms sayfası numaralı bölümler kullanabilir.

Örnek:

1. Acceptance
2. What Vibehall is
3. Accounts
4. Rooms and user content
5. Community rules
6. Suspension and termination
7. Availability
8. Changes
9. Contact

Görseldeki bölüm isimleri temsilîdir.

Gerçek legal belge kullanılmalıdır.

Codex görseli baz alarak yeni hukuki madde yazmamalıdır.

---

## 18. İçerik Kaynağı ve Yayınlama

Utility içerikleri tek bir canonical kaynaktan gelmelidir.

Olası kaynaklar:

- Static TypeScript/JSON content
- Markdown
- Backend platform content
- Admin tarafından yayınlanan content
- Versioned legal documents

Aynı Terms metninin:

- Frontend içinde
- Admin panelinde
- Backend response’unda

farklı kopyaları tutulmamalıdır.

### 18.1 Platform content sistemi varsa

- Draft
- Published
- Version
- Last updated
- Publish action

kontratları korunur.

Public utility route yalnız yayınlanmış içeriği gösterir.

### 18.2 Markdown kullanılırsa

- Güvenli parser
- HTML sanitize
- Heading ID üretimi
- Link güvenliği
- Liste ve blockquote desteği

sağlanmalıdır.

Raw HTML varsayılan olarak çalıştırılmamalıdır.

---

## 19. Global Shell ile Uyum

Utility sayfası normal uygulama shell’iyle tutarlı olmalıdır.

Ancak içerik odağı nedeniyle shell sadeleştirilebilir.

### 19.1 Giriş yapmış kullanıcı

- Normal app header
- Avatar/menu
- Gerekli navigation
- Utility content

### 19.2 Misafir kullanıcı

Terms, Privacy ve Guidelines public olmalıdır.

Header:

- Logo/wordmark
- Home
- Discover
- Sign in, gerekiyorsa

gösterebilir.

Social Rail veya kullanıcıya özel menüler gösterilmez.

### 19.3 Room ekranı

Utility sayfa Room overlay’i olarak açılmaz.

Kullanıcı Room’dan utility linkine giderse yeni route veya güvenli external/new tab davranışı ürün kararına göre uygulanır.

Room’un üzerine büyük utility modal açılması tercih edilmez.

---

## 20. Görsel Karakter

Utility sayfaları:

- Sade
- Mat
- Okunabilir
- Güvenilir
- İnsan odaklı
- Sessiz
- İçerik merkezli

olmalıdır.

Şunlara dönüşmemelidir:

- Pazarlama landing page’i
- Dashboard
- Büyük kart koleksiyonu
- Neon poster
- Blog template’i
- Dokümantasyon geliştirici portalı
- Yoğun sidebar’lı kurumsal yardım merkezi

Vibehall karakteri:

- Renk tokenları
- Tipografi
- İkonografi
- İnce yüzeyler

üzerinden hissedilir.

Büyük atmosfer görselleri üzerinden değil.

---

## 21. Aura ve Dekorasyon

Utility sayfalarında aura minimum seviyededir.

Kullanılabilecek dekor:

- Çok hafif köşe gradient’i
- Küçük marka işareti
- Support kartında küçük ikon
- Düşük yoğunluklu yüzey ayrımı

Kullanılmaması gerekenler:

- İçerikten doğan büyük thumbnail aura’sı
- Hareketli portal
- Neon arka plan
- Büyük illüstrasyon
- Okuma alanının arkasında hareket
- Yoğun glassmorphism

Metin kontrastı her zaman önceliklidir.

---

## 22. Renk Sistemi

Kesin tokenlar:

- Background: `#090A0F`
- Surface: `#10121A`
- Elevated: `#171A24`
- Hover: `#1D2130`
- Primary text: `#F5F7FA`
- Secondary text: `#A8AFBF`
- Muted text: `#7B8396`
- Accent: `#FF625A`

Görselde kullanılan mor link ve ikonlar nar çiçeği accent sistemine uyarlanmalıdır.

Link rengi uzun metin içinde WCAG AA kontrastını korumalıdır.

Legal metindeki kritik uyarılar gerektiğinde warning/error tokenları kullanabilir; fakat sayfa renkli uyarı kutularıyla doldurulmaz.

---

## 23. Tipografi

### 23.1 Font ailesi

- H1 ve büyük bölüm başlıkları: Manrope
- Body, listeler ve form metinleri: Inter

### 23.2 Body

- Desktop ve mobil taban: `16px`
- Line-height: yaklaşık `1.5–1.75`
- Weight: `400`

### 23.3 Linkler

- Inter `400–500`
- Görünür hover/focus
- Uzun belge içinde rahat seçilebilir

### 23.4 Vurgu

Bold metin yalnız önemli tanım veya sonuçlarda kullanılır.

Bütün paragraf bold yapılmaz.

---

## 24. Listeler ve Karmaşık Bilgi

Karmaşık koşullar:

- Numaralı liste
- Madde listesi
- Definition list
- Kısa tablo, gerçekten gerekliyse

ile gösterilebilir.

### 24.1 Liste spacing

- Maddeler arası `8–12px`
- Liste öncesi/sonrası `16–20px`
- İç içe liste kontrollü indent

### 24.2 Tablolar

Legal veya privacy karşılaştırması için tablo gerekiyorsa:

- Responsive wrapper
- Mobilde kart veya yatay scroll
- Açık header
- Yeterli kontrast

kullanılır.

Tablo yalnız görünüş için eklenmez.

---

## 25. Callout ve Bilgi Kutuları

Bazı içeriklerde bilgi kutusu kullanılabilir.

Örnekler:

- Önemli privacy notu
- Kullanıcı sorumluluğu
- Acil güvenlik yönlendirmesi
- Support sonraki adımı

Callout:

- İnce border
- Kontrollü accent
- Kısa başlık
- Birkaç satır açıklama
- Gerekirse tek CTA

kullanır.

Her bölüm callout’a dönüştürülmez.

---

## 26. Yardım Kartı

Görselin mobil alt kısmında `Questions?` kartı bulunmaktadır.

Bu yaklaşım faydalıdır.

Utility sayfası sonunda:

> Need help?

gibi bir destek kartı bulunabilir.

İçerik:

- Kısa açıklama
- Support bağlantısı
- Gerekirse report veya contact aksiyonu

Kart:

- İçeriğin doğal sonunda
- Ana metni bölmeden
- Tek CTA ile

gösterilir.

Gerçek destek route’u yoksa sahte bağlantı kullanılmaz.

---

## 27. İlgili Sayfalar Alanı

Utility template sayfa sonunda ilgili bağlantılar gösterebilir.

Örnek:

Terms sayfasında:

- Privacy Policy
- Community Guidelines
- Support

Privacy sayfasında:

- Terms
- Settings
- Support

Community Guidelines sayfasında:

- Report
- Blocked Accounts
- Support

Bu alan:

- Küçük liste veya kartlar
- Ana metinden daha düşük görsel ağırlık
- Gerçek route’lar

kullanır.

Görseldeki geniş “Pages using this template” alanı implementation sayfasının kullanıcıya gösterilecek parçası değildir.

O alan tasarım referans panosunun açıklamasıdır.

Public sayfada aynı şekilde gösterilmesi zorunlu değildir.

---

## 28. Search

Support veya System Info çok büyürse lokal içerik araması eklenebilir.

Ancak Terms ve Privacy için genel search zorunlu değildir.

Search:

- Yalnız utility content içinde
- Global people veya room search olmayan
- Gerçek index/data’ya bağlı

olmalıdır.

İşlevsiz search input eklenmez.

---

## 29. Loading State

Utility içerik static veya cached ise loading çok kısa olabilir.

### 29.1 İlk yükleme

- Başlık skeleton
- Meta skeleton
- Birkaç metin satırı skeleton
- Global shell görünür

Tam sayfa spinner yoktur.

### 29.2 İçerik refresh

Yayınlanmış content yeniden fetch edilirse mevcut belge ekranda kalabilir.

Yeni içerik geldikten sonra güncellenir.

Legal metin okunurken ekran boşaltılmaz.

---

## 30. Empty State

Yayınlanmış içerik yoksa bu normal kullanıcı-facing empty state olarak kabul edilmemelidir.

Terms, Privacy ve Community Guidelines launch için zorunlu sayfalardır.

Production’da yayınlanmamışsa:

- Sistem bunu deployment/readiness hatası olarak görmelidir
- Sahte metin veya placeholder legal content gösterilmemelidir
- Kullanıcıya güvenli genel hata gösterilebilir
- Operasyon tarafına alert düşmelidir

Support veya optional System Info içeriği yoksa uygun empty state kullanılabilir.

---

## 31. Error State

İçerik yüklenemezse:

> We couldn’t load this page.

Aksiyon:

> Try again

Legal sayfalarda gerekiyorsa:

- Güvenli cached/latest published content
- Teknik olarak mümkünse fallback static version

değerlendirilebilir.

Ancak eski içerik gösteriliyorsa güncellik bilgisi yanlış olmamalıdır.

Raw API veya parser hatası gösterilmez.

---

## 32. Not Found

Utility route geçersizse ortak 404 sistemi kullanılır.

Örnek:

> This page isn’t available.

Aksiyonlar:

- Back to hall
- Visit Support

Yasal bir route yanlış yazıldı diye generic application crash gösterilmez.

---

## 33. Yazdırma ve Kopyalama Davranışı

Legal içeriklerde print-friendly görünüm faydalı olabilir.

Print CSS değerlendirilirse:

- Koyu arka plan kaldırılabilir
- Navigasyon gizlenir
- Metin siyah/beyaz okunur
- URL ve tarih korunur
- Accordion içeriklerinin tamamı açılır
- Gereksiz CTA’lar kaldırılır

Bu özellik mevcut ihtiyaç varsa uygulanır; zorunlu değildir.

Metin seçimi veya kopyalama CSS ile engellenmez.

---

## 34. Deep Link ve Anchor Davranışı

Bir kullanıcı belirli bölüme linklenebilmelidir.

Örnek:

`/terms#termination`

Anchor sistemi:

- Stabil heading ID
- Başlık değişimlerinde dikkatli migration
- Sticky header offset
- Browser back davranışı
- Focus/scroll erişilebilirliği

sağlamalıdır.

Accordion varsa hedef bölüm otomatik açılmalıdır.

---

## 35. SEO ve Metadata

Public utility sayfaları doğru metadata taşımalıdır.

- Page title
- Description
- Canonical URL
- `robots` kararı
- Language
- Open Graph, gerektiğinde
- Last updated görünümü

Terms ve Privacy arama motorlarında indexlenebilir; gerçek product/legal kararına göre uygulanır.

Admin draft içeriği indexlenemez.

---

## 36. İçerik Güvenliği

Utility content render edilirken:

- HTML sanitize edilir
- Script çalıştırılmaz
- Unsafe iframe kullanılmaz
- Link protocol doğrulanır
- Harici linkler güvenli açılır
- Markdown içinde raw HTML sınırlandırılır
- Stored XSS önlenir

Admin content editor varsa preview ile public render aynı güvenli pipeline’ı kullanmalıdır.

---

## 37. Legal İçerik Bütünlüğü

Legal belgeler sıradan UI copy’si gibi sessizce düzenlenemez.

Codex:

- Terms maddesi yazamaz
- Privacy claim’i uyduramaz
- Kullanıcı hakkı ekleyip çıkaramaz
- Legal tarih değiştiremez
- “No tracking” veya “we never sell data” gibi claim’leri doğrulamadan ekleyemez

Canonical legal metin authoritative kaynaktır.

Bu wave:

- Görsel düzen
- Render sistemi
- Navigasyon
- Responsive
- Accessibility

üzerinde çalışır.

Legal içeriğin kendisini değiştirmek ayrı review gerektirir.

---

## 38. Content Guidelines

Utility içeriklerinde aşağıdaki yazım yaklaşımı uygulanmalıdır:

- Açık ve sade dil
- Kısa paragraflar
- Net başlıklar
- Karmaşık konularda listeler
- Teknik jargonun açıklanması
- Kullanıcıya dönük ton
- Gerektiğinde açık sonraki adım
- İlgili sayfalara bağlantı
- Gereksiz samimiyet veya pazarlama dili kullanılmaması

Support dili insani olabilir.

Terms ve Privacy dili daha resmi fakat anlaşılır kalmalıdır.

---

## 39. Mobil Okunabilirlik

Mobilde özellikle şu noktalar test edilmelidir:

- Font en az `16px`
- Satır yüksekliği rahat
- Uzun heading taşmıyor
- URL’ler wrap oluyor
- Listeler ekran dışına çıkmıyor
- Accordion touch target yeterli
- Sticky header içeriği kapatmıyor
- Safe area korunuyor
- Browser text scaling bozulmuyor
- Zoom engellenmiyor

Mobilde metin kart içine gereksiz biçimde sıkıştırılmaz.

Ana içerik ekran genişliğini doğal kullanır.

---

## 40. Erişilebilirlik

Aşağıdaki maddeler zorunludur:

- Tek bir anlamlı `h1`
- Heading seviyeleri sıralı
- Main landmark kullanımı
- Navigation landmark’ları doğru
- Back button açık accessible name taşır
- Link metinleri bağlamlıdır
- Accordion gerçek button kullanır
- `aria-expanded` ve panel ilişkisi doğrudur
- Anchor jump sonrası heading focus veya görünür konuma gelir
- Metin kontrastı WCAG AA hedefini karşılar
- Font büyütmede layout bozulmaz
- Klavye ile bütün link ve kontroller erişilebilir
- Focus görünürdür
- Harici link davranışı anlaşılırdır
- İkonlar dekoratifse gizlenir
- Uzun sayfalarda skip link düşünülebilir
- Reduced motion desteklenir
- Screen reader bölüm yapısını düzgün okuyabilir

---

## 41. Azaltılmış Hareket

Utility sayfalarında zaten minimum hareket kullanılır.

`prefers-reduced-motion` açıkken:

- Accordion animasyonu kaldırılır veya kısalır
- Sayfa geçişi fade olmadan gerçekleşebilir
- Anchor smooth scroll kapanır
- Yardım kartı veya hover hareketi sadeleşir
- İşlevsel feedback korunur

---

## 42. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir:

- Terms of Service metni
- Last updated tarihi
- Bölüm başlıkları
- Vibehall tanımı
- Community Rules metni
- Mobil accordion
- Ay/moon ikonu
- Help ikonu
- Sol navigasyon
- Kullanıcı adı ve avatarı
- Support Center bağlantısı
- Template Specifications paneli
- Content Guidelines paneli
- Pages Using This Template kartları
- Alt prensip şeridi
- Mor renkler
- Mobil cihaz çerçevesi
- Sayfa isimleri

Gerçek content, route ve kesin design tokenları kullanılmalıdır.

---

## 43. Otomatik Uygulanmayacak Görsel Unsurlar

### 43.1 Tema değiştirme

Gerçek appearance capability yoksa uygulanmaz.

### 43.2 Mobil accordion

Her utility sayfada zorunlu değildir.

### 43.3 Support Center

Gerçek route veya sistem yoksa uygulanmaz.

### 43.4 Sol sabit sidebar

Global shell kararına ve auth durumuna göre sadeleştirilebilir.

### 43.5 “Pages using this template” alanı

Referans board açıklamasıdır; public sayfada zorunlu değildir.

### 43.6 System Info

Gerçek içerik ve route yoksa eklenmez.

### 43.7 Kullanıcı avatarı

Public legal sayfalarda misafir kullanıcı için gösterilmez.

### 43.8 Tarihler ve legal metinler

Görseldeki örnekler doğrudan kullanılmaz.

---

## 44. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Yeni legal metin yazmak
- Terms veya Privacy maddelerini değiştirmek
- Sahte last updated tarihi göstermek
- `No tracking` veya `we never sell data` gibi doğrulanmamış claim eklemek
- Light mode veya tema sistemi eklemek
- Her utility bölümünü ayrı card’a çevirmek
- Büyük atmosfer görseli eklemek
- Uzun satırlı tam genişlik metin kullanmak
- Mobilde desktop sidebar’ı korumak
- Mobil alt navigasyon eklemek
- Bütün legal bölümleri zorunlu accordion yapmak
- Raw HTML’i sanitize etmeden render etmek
- İşlevsiz help veya search ikonu göstermek
- Placeholder legal content yayınlamak
- Görseldeki mor sistemi kesin palette dönüştürmek
- Yeni CMS veya markdown framework’ü yalnız bu ekran için eklemek
- Utility sayfalarını pazarlama landing page’ine çevirmek
- Template açıklama panellerini public kullanıcı arayüzüne birebir taşımak

---

## 45. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu alanlarda uyarlama yapabilir:

- Mevcut utility route yapısı
- İçerik kaynağı
- Markdown veya JSON render sistemi
- Global shell varyantı
- İçindekiler kullanımı
- Accordion kullanımı
- Support kategorileri
- Mobil header
- Sayfa maksimum genişliği
- Heading anchor üretimi
- Content version/last updated gösterimi
- Print CSS
- SEO metadata
- Accessibility için semantik yapı
- Existing platform content sistemiyle entegrasyon

Bu uyarlamalar içerik odaklı, sade ve okunabilir template kararlarını değiştiremez.

---

## 46. Mevcut Teknik Yapıyla Uyum

Implementation mevcut proje sınırlarını korumalıdır:

- React 19
- Vite
- TypeScript
- Custom router
- React Router yok
- Tailwind yok
- Vanilla CSS
- Merkezi design tokenları
- Mevcut API client
- Mevcut platform content veya static content sistemi
- Güvenli content rendering
- Global shell
- Phosphor ikon sistemi

Utility route’ları mevcut router içinde açık ve stabil olmalıdır.

---

## 47. Performans Yaklaşımı

Utility sayfaları hafif olmalıdır.

- Büyük hero asset yok
- Gereksiz JavaScript animasyonu yok
- İçerik mümkün olduğunca hızlı render edilir
- Font weight sayısı sınırlı
- Markdown parsing memoize veya build-time olabilir
- Uzun belge render’ı gereksiz rerender üretmez
- Sticky table of contents performanslı çalışır
- Anchor observer varsa kontrollü kullanılır
- Support görselleri lazy loading kullanır

Legal sayfa yüklenmek için ağır uygulama bundle’ını beklememelidir; mevcut mimari sınırında optimize edilir.

---

## 48. Güvenlik ve Gizlilik Sınırları

- Draft legal content public route’a sızmaz
- Admin-only metadata gösterilmez
- Content editor raw script ekleyemez
- Public page kullanıcıya session/device bilgisi göstermez
- Support formu varsa input’lar server-side doğrulanır
- Sensitive support içeriği URL query’sine yazılmaz
- Harici bağlantılar güvenli protocol kullanır
- User-generated content utility HTML’ine doğrudan eklenmez
- Legal content versioning/audit mevcutsa korunur

---

## 49. Bileşen Envanteri

Utility template wave’i en az şu reusable bileşenleri değerlendirmelidir:

- `UtilityPageLayout`
- `UtilityHeader`
- `BackButton`
- `ArticleHeader`
- `LastUpdated`
- `ArticleSection`
- `TableOfContents`
- `AnchorLink`
- `AccordionSection`
- `Callout`
- `SupportCard`
- `RelatedPages`
- `UtilityLoadingState`
- `UtilityErrorState`
- `SafeRichTextRenderer`
- `ExternalLink`
- `PrintStyles`

Her utility sayfası aynı temel sistemden türetilmelidir.

---

## 50. Wave Kapsamı Önerisi

### 50.1 Utility Layout Foundation

- Desktop kompozisyon
- Mobil kompozisyon
- Global shell entegrasyonu
- İçerik genişliği
- Tipografi ve spacing

### 50.2 Content Rendering

- Static/Markdown/platform content
- Heading yapısı
- Lists
- Links
- Safe rich text
- Last updated

### 50.3 Navigation ve Long-Form UX

- Back
- Anchor links
- Table of contents
- Accordion, uygun sayfalarda
- Related pages

### 50.4 Support Uyarlaması

- Support kategorileri
- FAQ
- Help card
- Gerçek support aksiyonları

### 50.5 States, Accessibility ve SEO

- Loading
- Error
- Not found
- Keyboard
- Screen reader
- Print
- Metadata
- Mobile QA

Kesin wave ayrımını Codex mevcut content ve route mimarisine göre düzenleyebilir.

Ancak safe content rendering ve public route davranışı aynı capability içinde doğrulanmalıdır.

---

## 51. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Utility page görsel referansla yan yana karşılaştırılmıştır
- Ana metin alanı desktop’ta yaklaşık `760–840px` maksimum genişliktedir
- Uzun satırlar kullanılmamaktadır
- Body text mobil ve desktop’ta rahat okunmaktadır
- Manrope ve Inter doğru alanlarda kullanılmaktadır
- Heading hiyerarşisi semantik olarak doğrudur
- Sayfa tek anlamlı `h1` taşımaktadır
- Global shell utility içeriğin önüne geçmemektedir
- Mobilde desktop sidebar bulunmamaktadır
- Mobil alt navigasyon eklenmemiştir
- Yatay scroll oluşmamaktadır
- Legal içerik görseldeki örnek metinle değiştirilmemiştir
- Canonical yayınlanmış content kullanılmaktadır
- Last updated gerçek veriden gelmektedir
- Draft içerik public’e sızmamaktadır
- Raw HTML güvenli biçimde sanitize edilmektedir
- Linkler keyboard ve screen reader ile erişilebilirdir
- Accordion yalnız uygun içeriklerde kullanılmaktadır
- Legal metnin tamamı gereksiz şekilde kapalı accordion içinde saklanmamaktadır
- Anchor/deep-link davranışı çalışmaktadır
- Support bağlantıları gerçek route veya iletişim yöntemine bağlıdır
- İşlevsiz tema, search veya help ikonu bulunmamaktadır
- Büyük dekoratif görseller veya yoğun aura kullanılmamaktadır
- İlk yüklemede uygun skeleton vardır
- İçerik yüklenemezse güvenli hata ve retry gösterilmektedir
- Terms, Privacy ve Guidelines production’da eksik bırakılamamaktadır
- Print ve text scaling davranışı layout’u bozmamaktadır
- WCAG AA kontrast hedefi korunmaktadır
- Focus görünürdür
- Reduced motion desteklenmiştir
- SEO title, description ve canonical kontrolleri yapılmıştır
- Desktop, tablet ve mobil QA tamamlanmıştır
- Typecheck ve build geçmiştir
- İlgili component ve route testleri geçmiştir
- XSS ve unsafe link senaryoları test edilmiştir
- Staging üzerinde kullanıcı onayı alınmıştır
- Görselden yapılan bilinçli sapmalar closure raporunda belgelenmiştir

---

## 52. Son Tasarım Hükmü

Utility sayfaları Vibehall’ın en gösterişli alanları değildir.

Gösterişli olmaları da gerekmez.

Doğru utility deneyimi:

- Kullanıcıyı doğru bilgiye hızlıca ulaştırır
- Uzun metni yorucu hâle getirmez
- Hukuki veya teknik içeriği gizlemez
- Global ürün diliyle tutarlı kalır
- Kullanıcıya gerektiğinde açık bir sonraki adım verir

Terms ve Privacy güven oluşturur.

Community Guidelines sınırları anlaşılır kılar.

Support kullanıcıyı yalnız bırakmaz.

System Information ürünün çalışma biçimini açıklar.

Bu tasarım paketinin başarı ölçütü güzel bir belge sayfası oluşturmak değildir.

Başarı ölçütü:

> Kullanıcının ihtiyaç duyduğu bilgiyi sakin, açık ve güvenilir bir arayüz içinde bulabilmesi ve okuduktan sonra ne yapacağını anlayabilmesidir.