# Admin Operational Template

## Approved Visual Reference Interpretation

Bu wave başlatılırken prompt’a eklenecek **Admin Operational Template** görseli, Vibehall admin yüzeylerinin onaylanmış ana kompozisyon ve tasarım yönü referansıdır.

Görsel yalnızca genel ilham kaynağı değildir. Admin ekranlarının yerleşim düzenini, operasyonel yoğunluğunu, tablo dilini, bilgi hiyerarşisini ve kullanıcıya dönük tasarım sistemiyle olan görsel bağını temsil eder.

Ancak görselde bulunan bütün menüler, metrikler ve grafikler mevcut ürün kabiliyeti olarak yorumlanamaz. Uygulama yalnızca gerçek backend kontratlarını, mevcut admin yetkilerini ve canonical ürün sınırlarını kullanmalıdır.

Admin yüzeyi normal kullanıcılara kapalıdır ve yalnızca `UserRole.admin` rolü tarafından erişilebilir. `/admin` normal kullanıcı navigasyonunda görünmez.

---

## 1. Ekranın Ana Amacı

Admin yüzeyinin temel amacı, Vibehall’ın operasyonel ve güvenlik durumunu hızlı, açık ve güvenilir biçimde yönetebilmektir.

Admin kullanıcı bu yüzeyde:

- Aktif odaları inceleyebilmeli
- Kullanıcı durumlarını yönetebilmeli
- Raporları değerlendirebilmeli
- Moderasyon ve güvenlik işlemlerini gerçekleştirebilmeli
- Operasyonel sağlık durumlarını görebilmeli
- Gerekli durumlarda lifecycle reconciliation veya job retry gibi mevcut operasyon araçlarını kullanabilmeli
- Kritik eylemleri yanlışlıkla gerçekleştirmeden önce açık onay alabilmeli

Admin panelinin amacı atmosfer oluşturmak veya son kullanıcıyı eğlendirmek değildir.

Ana öncelikler:

1. Okunabilirlik
2. Güvenilirlik
3. Bilgiye hızlı erişim
4. Kritik eylemlerin güvenli biçimde yürütülmesi
5. Operasyonel durumun doğru anlaşılması

Admin yüzeyi kullanıcıya dönük Vibehall deneyiminden daha yoğun olabilir; fakat dağınık, ağır veya eski tip kurumsal kontrol paneli gibi görünmemelidir.

---

## 2. Görsel Odağı

Ana görsel odak, seçili admin bölümünün operasyonel içeriğidir.

Overview yüzeyinde hiyerarşi şu sırayla ilerler:

1. Sayfa başlığı ve ilgili zaman veya filtre bağlamı
2. Kritik özet metrikler
3. Ana operasyonel liste veya tablo
4. Sistem sağlığı ve rapor dağılımı gibi destekleyici alanlar
5. İkincil menüler, filtreler ve sayfalama
6. Kritik veya destructive eylemler

Sol navigasyon yardımcı ve sabit bir yönlendirme alanıdır; ekranın görsel yıldızı değildir.

Metrik kartları yalnız gerçekten anlamlı ve backend tarafından güvenilir biçimde üretilebilen verileri göstermelidir. Dekoratif veya tahminî metrik kullanılmaz.

---

## 3. Kilitli Kompozisyon

### 3.1 Desktop ana yapı

Desktop görünüm temel olarak üç parçadan oluşur:

- Sol admin navigasyonu
- Üst bağlam ve araç çubuğu
- Ana operasyonel içerik alanı

Sol navigasyon kontrollü ve sabit genişlikte kalır.

Ana içerik alanı:

- Geniş ekranda kalan alanı kullanır
- Klasik sayfa container’ına gereksiz şekilde sıkıştırılmaz
- Büyük tabloların rahat okunmasına izin verir
- Çok geniş monitörlerde kontrolsüz biçimde yayılmaz

### 3.2 Sol navigasyon

Sol navigasyonda yalnız mevcut admin yüzeyleri yer alır.

Mevcut sisteme göre uygun ana alanlar şunları içerebilir:

- Overview
- Rooms
- Users
- Reports
- Moderation veya blocks/bans
- Operations
- Platform content
- System veya operational status

Görselde yer alan aşağıdaki alanlar mevcut kodda yoksa otomatik olarak eklenemez:

- Genel Messages browser
- Genel friendship graph
- Sınırsız DM inbox browsing
- Yeni analytics modülü
- Yeni invitation yönetim sistemi
- Yeni system logs ürünü

Özellikle adminin genel DM kutularını veya sosyal ilişki grafiğini serbestçe gezebilmesi yasaktır. Admin yalnız rapora bağlı, sınırlandırılmış ve audit edilen evidence/context yüzeylerinden erişim sağlayabilir.

### 3.3 Üst araç çubuğu

Üst araç çubuğu şu tür işlevler için kullanılabilir:

- Sayfa başlığı
- Lokal arama
- İlgili filtreler
- Tarih veya durum filtresi
- Bildirim veya operasyon uyarısı
- Admin profil menüsü

Global kullanıcı araması gibi ürün kapsamında olmayan bir kabiliyet eklenemez.

Search alanı yalnızca aktif admin yüzeyinde desteklenen gerçek veri üzerinde çalışmalıdır.

### 3.4 Overview metrikleri

Özet metrikler:

- Dört veya daha az ana kartla başlamalı
- Gerçek, ölçülebilir ve operasyonel olarak anlamlı olmalı
- Backend’den güvenilir biçimde alınmalı
- Bilinmeyen karşılaştırma oranları uydurmamalı
- “Geçen haftaya göre yüzde değişim” yalnız gerekli tarihsel veri mevcutsa gösterilmeli

Mevcut ürüne göre uygun örnekler:

- Live rooms
- Active veya eligible users
- Open reports
- Processing/failed durable jobs
- Evidence retention veya lifecycle warning counts
- Operational degraded state

Görseldeki sayılar ve yüzdelik değişimler temsilîdir.

### 3.5 Ana liste veya tablo

Overview’da ana operasyonel içerik olarak live rooms, open reports veya operational warnings kullanılabilir.

Tablo şu ilkeleri korur:

- Başlık satırı açık
- Satırlar rahat taranabilir
- Durumlar badge ile desteklenir
- Satır eylemleri sağda ve ikincil
- Kritik işlemler doğrudan tek tıkla çalışmaz
- Hover yalnız görsel destek sağlar
- Klavyeyle erişim korunur
- Pagination veya cursor davranışı gerçek API kontratına uyar

### 3.6 Sağ destek alanları

Rapor dağılımı, system status veya operational health gibi alanlar ana içeriğin yanında destekleyici yüzey olarak bulunabilir.

Bunlar:

- Ana tabloyla yarışmamalı
- Aşırı renkli grafikler kullanmamalı
- Gerekli bilgiyi birkaç saniyede okunabilir hâle getirmeli
- Gerçek backend verisine dayanmalı

---

## 4. Görsel Hiyerarşi

Admin yüzeyindeki hiyerarşi:

1. Kritik operational state
2. Açık raporlar, odalar veya kullanıcı işlemleri
3. Ana tablo ve liste içerikleri
4. Filtreler ve arama
5. Destekleyici grafik veya sistem sağlığı
6. İkincil navigasyon
7. Dekoratif unsurlar

Destructive veya riskli eylemler dikkat çekici olmalıdır; ancak ekranın tamamını sürekli kırmızıya boğmamalıdır.

Ana eylem rengi Vibehall accent sistemini kullanabilir. Destructive işlemler kendi hata/tehlike rengini kullanır.

Her metrik, tablo ve panel eşit görsel ağırlığa sahip olamaz.

---

## 5. Atmosfer ve Işık

Admin paneli, Vibehall’ın genel görsel sistemine bağlı kalır:

- Ana zemin: `#090A0F`
- Normal yüzey: `#10121A`
- Odak yüzeyi: `#171A24`
- Accent: `#FF625A`
- İnce sınırlar: düşük opaklıklı beyaz
- Manrope başlık, Inter arayüz

Ancak admin yüzeyinde:

- İçerikten doğan aura minimum kullanılır
- Büyük dekoratif video görselleri kullanılmaz
- Sürekli glow kullanılmaz
- Kozmik veya portal metaforu doğrudan çizilmez
- Glass efekti yalnız modal, menü ve geçici bildirimlerde kullanılır
- Grafikler ürünün ana accent rengini ve sınırlı sistem renklerini kullanır

Admin, son kullanıcı yüzeylerinden daha operasyonel ve daha mat görünmelidir.

Ama aynı ürünün parçası olduğu yine de anlaşılmalıdır.

---

## 6. Tipografi ve Boşluk Yorumu

### Tipografi

- Sayfa başlığı: Manrope
- Panel ve tablo başlıkları: Manrope veya Inter semibold
- Tablo, filtre, form ve yardımcı metin: Inter
- Sayısal metrikler: Inter veya Manrope semibold
- Teknik açıklamalar: Inter regular

Sürekli büyük harf kullanılmaz.

Tablo başlıkları sade ve kısa kalmalıdır.

### Boşluk

Admin yüzeyi kullanıcıya dönük ekranlardan daha yoğun olabilir; ancak sıkışık görünemez.

Temel spacing sistemi korunur:

- `8px` küçük iç ayrım
- `12–16px` bileşen iç boşluğu
- `20–24px` kart ve panel boşluğu
- `24–32px` ana bölümler arası
- `32–40px` sayfa çevresi

Metrik kartları ve tablo arasında yeterli nefes bulunur.

Bilgiyi ekrana sığdırmak uğruna:

- Satır yüksekliği aşırı küçültülmez
- Font 12px altına düşürülmez
- Kritik eylemler birbirine yapıştırılmaz
- Yatay tarama zorlaştırılmaz

---

## 7. Bileşen Yorumu

### 7.1 Metrik kartları

Metrik kartı şunları içerebilir:

- Açık başlık
- Büyük değer
- Küçük açıklama veya durum
- İlgili sade ikon
- Gerekirse yön veya warning bilgisi

Gereksiz sparkline, dekoratif yüzde veya animasyon eklenmez.

### 7.2 Tablolar

Tablolar:

- Mat yüzey
- İnce satır ayrımları
- Rahat okunabilir satır yüksekliği
- Kontrollü hover
- Durum badge’leri
- Sağda satır menüsü

kullanır.

Tablo hücreleri kart koleksiyonuna dönüşmez.

### 7.3 Badge’ler

Badge örnekleri:

- Live
- Ended
- Open
- Reviewed
- Action taken
- Dismissed
- Escalated
- Active
- Restricted
- Suspended
- Banned
- Processing
- Failed
- Dead-letter
- Operational
- Degraded

Badge yalnız renkle anlam taşımaz; açık metin içerir.

### 7.4 Kritik eylemler

Örnekler:

- Suspend user
- Ban user
- Close room
- Retry job
- Run reconciliation
- Generate evidence access
- Dismiss veya action report
- Delete veya publish platform content

Bu işlemler:

- Açık metinle tanımlanır
- Gerektiğinde neden veya kapsam gösterir
- Onay modalı kullanır
- Audit kaydına uygun biçimde yürütülür
- Kullanıcının yanlış nesnede işlem yapmasını önler

### 7.5 Side panel ve modal

Detay incelemeleri büyük masaüstünde side panel veya ayrı detay yüzeyi olarak açılabilir.

Kritik onaylar ortalanmış modal kullanır.

Modal:

- İşlemin etkisini açıklar
- Hedef kullanıcı, oda veya raporu belirtir
- Destructive işlemi normal CTA’dan ayırır
- Gerekiyorsa reason alanı ister

---

## 8. Sayfa Aileleri

Admin Operational Template aşağıdaki gerçek ekran ailelerine uyarlanabilir:

### Overview

- Operasyonel özet
- Açık rapor sayısı
- Live room durumu
- Job/worker sağlığı
- Degraded warning
- Kısa aksiyon bağlantıları

### Rooms

- Live veya ended room listesi
- Host
- Katılımcı sayısı
- State
- Oluşturulma veya başlangıç zamanı
- Room detail

### Users

- Kullanıcı kimliği
- Account state
- Role
- Katılım tarihi
- Gerekli admin eylemleri

### Reports

- Report target
- Reason
- Status
- Reporter
- Created time
- Context/evidence availability
- Admin action

### Moderation / Blocks / Bans

- Mevcut moderasyon action kayıtları
- Room-level ban ve kick geçmişi
- İlgili kullanıcı veya oda
- Aktör
- Tarih
- Reason

### Operations

- Readiness state
- Queue/job counters
- Lifecycle reconciliation
- Failed veya dead-letter job
- Admin-only retry
- Evidence retention counters

### Platform Content

- Terms
- Privacy
- Community Guidelines
- Support
- Draft/published state
- Edit/publish akışı

Görseldeki her örnek sayfanın implement edilmesi zorunlu değildir. Yalnız mevcut kod ve plan kapsamındaki yüzeyler uygulanır.

---

## 9. Responsive Davranış

Görselde bulunan mobil admin görünümü ana yaratıcı referans değildir. Admin için öncelik desktop operasyonudur.

Dar ekranlarda amaç, tam desktop dashboard’u küçültmek değil; kritik bilgilere erişimi korumaktır.

### Mobil veya dar ekran davranışı

- Sol sidebar hamburger menü veya drawer’a dönüşür
- Metrik kartları dikey veya iki kolonlu sıraya geçer
- Büyük tablolar kart özetine veya kontrollü yatay kaydırmaya geçebilir
- En önemli kolonlar görünür kalır
- İkincil kolonlar detail drawer içinde gösterilebilir
- Kritik eylemler `...` menüsü veya detail panel içinde kalır
- Alt navigasyon zorunlu değildir
- Grafikler sade özet görünümüne düşebilir

Admin mobilde son kullanıcı uygulaması kadar kapsamlı optimize edilmek zorunda değildir; fakat ana operasyonları kullanılamaz hâle de gelemez.

Tablet ve dar laptop ekranları özellikle test edilmelidir.

---

## 10. Etkileşimler

### Hover

- Satır veya kart hafifçe belirginleşir
- Büyük yükselme veya glow yok
- Kritik eylemler hover olmadan da erişilebilir

### Focus

- En az `2px` görünür focus halkası
- Klavye ile tablo satırları, filtreler ve menüler gezilebilir
- Focus sırası mantıklı

### Loading

- İlk yüklemede tablo ve kart skeleton’ları
- Sonraki refresh sırasında içerik korunur
- Buton işlemlerinde lokal loading
- Tam sayfa spinner yok

### Empty

Örnekler:

- Açık rapor yok
- Live oda yok
- Failed job yok
- Arama sonucu yok

Empty state kısa, sakin ve operasyonel olmalıdır.

Örnek:

> No open reports. Everything is clear for now.

### Error

- Lokal hata ilgili panelde
- Sayfa verisi alınamadığında retry
- Teknik stack trace veya raw hata kodu yok
- Admin için gerekli correlation veya request ID yalnız kontrollü teknik detay alanında gösterilebilir

### Realtime ve refresh

- Otomatik refresh ekranı blink ettirmez
- Tablo scroll konumu korunur
- Açık detail panel kapanmaz
- Yeni kayıt geldiğinde sakin indicator gösterilebilir
- Admin manuel yenileme yapabilir

---

## 11. Temsilî Alanlar

Görseldeki aşağıdaki unsurlar temsilîdir ve birebir uygulanmaz:

- Sayısal metrikler
- Yüzdelik artış/azalış değerleri
- Tarih aralığı
- Oda isimleri
- Kullanıcı isimleri
- Avatarlar
- Rapor nedenleri ve sayıları
- Analytics grafiği
- Sistem servis adları
- Bildirim sayısı
- Navigation menü sayısı
- Mobile bottom navigation
- Search shortcut
- Chart renkleri ve dağılımları

Gerçek backend kontratları ve mevcut Prisma modelleri kullanılmalıdır.

---

## 12. Otomatik Uygulanmayacak Görsel Unsurlar

Aşağıdaki görsel öğeler, yalnızca kompozisyon örneği olarak değerlendirilir:

### Analytics

Görselde analytics sayfası ve grafik örneği bulunur.

Mevcut sistemde kapsamlı analytics altyapısı yoksa bu plan kapsamında yeni analytics ürünü oluşturulmaz.

Yalnız gerçek ve mevcut metrik endpoint’leri kullanılabilir.

### Messages admin alanı

Görselde ayrı bir Messages admin navigasyonu bulunur.

Admin için genel DM inbox browsing yasaktır. Yalnız report-linked context ve audit edilen evidence erişimi kullanılabilir.

### Invites admin alanı

Görselde ayrı Invites admin sayfası bulunur.

Mevcut admin API’sinde böyle bir yönetim yüzeyi yoksa eklenmez.

### System Logs

Görselde System Logs navigasyonu bulunmaktadır.

Mevcut, güvenli ve admin’e uygun bir log endpoint’i yoksa yeni raw log browser oluşturulmaz.

### Mobile bottom navigation

Görselde mobil admin için alt navigasyon örneği bulunur.

Bu zorunlu değildir. Dar ekran için drawer veya minimal menü daha uygun olabilir.

### Tarih karşılaştırmaları

“Last 7 days” gibi kıyaslamalar ancak gerçek tarihsel veri mevcutsa gösterilir.

---

## 13. Yasaklanan Yorumlar

Codex aşağıdaki değişiklikleri kendi kararıyla yapamaz:

- Yeni analytics altyapısı oluşturmak
- Genel DM browser eklemek
- Friendship graph veya kullanıcı sosyal ağı tarayıcısı eklemek
- Raw evidence body’lerini varsayılan ekrana dökmek
- Raw storage key veya internalleri göstermek
- Yeni moderator rolü eklemek
- Admin rol modelini değiştirmek
- Kullanıcıya dönük route’ları admin tasarımına uydurmak
- Yeni backend endpoint’leri sırf görselde var diye eklemek
- Metrikleri sahte veya hard-coded sayılarla doldurmak
- Dashboard’u animasyon veya dekorla ağırlaştırmak
- Büyük tabloları erişilemez hâle getirmek
- Kritik eylemleri onaysız çalıştırmak
- Son aktif admin korumasını bozmak
- Admin bootstrap güvenliğini zayıflatmak
- `prisma db push` davranışını production çözümü olarak kullanmak

Moderator rolü ve yetki genişletmesi hâlâ ayrı plan ve onay gerektirir.

---

## 14. Teknik Uyarlama Alanları

Codex sınırlı biçimde şu alanlarda uyarlama yapabilir:

- Mevcut admin route yapısına göre navigasyon grupları
- API response’larına göre tablo kolonları
- Cursor veya page-based pagination
- Gerçek veri uzunlukları
- Responsive kırılma noktaları
- Büyük tablolar için yatay scroll veya summary card
- Reusable admin bileşenlerine ayırma
- Accessibility kontrast düzeltmeleri
- Side panel yerine mevcut route detail görünümünü kullanma
- Mevcut test ve auth altyapısına uyarlama

Bu uyarlamalar ana operasyonel kompozisyonu, okunabilirliği veya güvenlik sınırlarını değiştiremez.

---

## 15. Mevcut Teknik Yapıyla Uyum

Admin implementation mevcut teknik yapıyı korumalıdır:

- Custom router kullanılmaya devam edilir
- React Router eklenmez
- Tailwind veya yeni CSS framework eklenmez
- Mevcut vanilla CSS design system geliştirilir
- Admin route’u `/admin` altında kalır
- Backend role kontrolü korunur
- CSRF koruması mutation işlemlerinde uygulanır
- Admin action audit davranışı korunur
- Evidence erişimi report-linked ve audit edilmiş kalır
- Operations endpoint’leri yalnız admin erişiminde kalır
- Production migration disiplini `prisma migrate deploy` olarak korunur

Frontend’de React Router ve Tailwind kullanılmadığı mevcut teknik bağlamda açıkça tanımlıdır.

---

## 16. Admin Güvenlik Sınırları

Aşağıdaki kurallar değiştirilemez:

- Son aktif admin kendi hesabını kısıtlayamaz
- Admin bootstrap secret normal kullanım yüzeyine taşınamaz
- Raw evidence varsayılan olarak gösterilemez
- Evidence access bilinçli kullanıcı aksiyonu gerektirir
- Evidence erişimi audit log oluşturur
- General DM browse yapılamaz
- General friendship graph browse yapılamaz
- Account-state reason veya hassas internaller ordinary UI’da sızdırılmaz
- Destructive işlem açık hedef ve sonuç göstermeden çalışmaz

---

## 17. Wave Kapsamı Önerisi

Bu görsel tek başına bütün admin sisteminin yeniden yazılması anlamına gelmez.

Uygun wave kapsamı şu şekilde düzenlenebilir:

### Admin Design Foundation

- Admin shell
- Sidebar
- Header
- Ortak tablo
- Metrik kartı
- Badge
- Filter/search
- Modal ve side panel
- Loading/empty/error states

### Admin Surface Migration

Mevcut admin ekranları tek tek ortak template’e geçirilir:

- Overview
- Users
- Rooms
- Reports
- Moderation
- Operations
- Platform content

Her yüzey gerçek mevcut özelliklerine göre uyarlanır.

Yeni ürün kabiliyeti yalnız ayrı onaylı wave ile eklenebilir.

---

## 18. Görsel Kabul Kriterleri

Wave şu şartlar sağlanmadan kapatılamaz:

- Admin shell onaylanmış görsel referansla yan yana karşılaştırılmıştır.
- Sol navigasyon, üst araç alanı ve ana içerik ilişkisi korunmuştur.
- Sayfa kullanıcıya dönük ekranlardan daha operasyonel fakat aynı tasarım sistemine bağlıdır.
- Tablo okunabilirliği farklı ekran genişliklerinde korunmuştur.
- Metrik kartları gerçek backend verisi kullanmaktadır.
- Hard-coded veya sahte operasyon verisi yoktur.
- Yeni admin kabiliyeti yalnız görselde bulunduğu için eklenmemiştir.
- General DM browse veya friendship graph eklenmemiştir.
- Kritik eylemler confirmation ve güvenli hata davranışına sahiptir.
- Loading, empty, error ve reconnect durumları tamamlanmıştır.
- Realtime refresh loading blink oluşturmamaktadır.
- Klavye navigasyonu ve focus davranışı tamamlanmıştır.
- Dar ekran davranışı test edilmiştir.
- Son aktif admin koruması test edilmiştir.
- Admin-only route ve API yetkileri test edilmiştir.
- Typecheck ve build geçmiştir.
- İlgili backend ve frontend testleri geçmiştir.
- Staging üzerinde kullanıcı onayı alınmıştır.
- Görselden yapılan bilinçli sapmalar wave closure raporunda belgelenmiştir.

---

## 19. Son Tasarım Hükmü

Admin paneli Vibehall’ın atmosferik kullanıcı yüzeylerinin kopyası değildir.

Fakat tamamen farklı bir kurumsal ürün gibi de görünmemelidir.

Doğru denge:

> Aynı Vibehall tasarım sisteminin, operasyon için sadeleştirilmiş ve güvenilir hâli.

Admin paneli:

- Hızlı
- Okunabilir
- Kontrollü
- Güvenli
- Tutarlı
- Sessiz
- İşlevsel

olmalıdır.

Buradaki başarı ölçütü “güzel dashboard” oluşturmak değildir.

Başarı ölçütü:

> Admin’in doğru bilgiyi hızlıca görmesi, doğru işlemi güvenle yapması ve yanlışlıkla ürün sınırlarını aşamamasıdır.