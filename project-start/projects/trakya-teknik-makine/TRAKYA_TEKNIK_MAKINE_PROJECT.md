# Trakya Teknik Makine — Project Start Scenario

Bu dosya `project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md` şablonundan üretilmiş proje instance'ıdır.

## 1. Proje Kimliği

- Proje adı: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- Proje slug'ı: `trakya-teknik-makine`
- Proje türü: Kurumsal web sitesi / satış demosu
- Proje modu: yeni
- Delivery profile: Prototype
- Implementation planning: standard
- Design planning: light
- Tek cümlelik açıklama: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak.
- Sahip / müşteri: Trakya Teknik Makine; demo Enis tarafından potansiyel satış görüşmesi amacıyla hazırlanacaktır.

> Bu planning değerleri project-start source hint'leridir. Canonical approved input gerçeği hâline gelmeleri Product Engine intake/approval contract'larına tabidir.

## 2. Problem / Amaç

Mevcut web sitesi firmanın temel bilgilerini ve hizmetlerini sunuyor ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye uygundur.

Bu projenin amacı, Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini koruyarak daha güçlü, modern, profesyonel ve satış görüşmesinde gösterilebilir bir kurumsal web sitesi demosu hazırlamaktır.

## 3. Ürün / İş Bağlamı

- Bu çalışma doğrudan müşteri siparişi değildir; potansiyel müşteriye gösterilmek üzere hazırlanacak proaktif bir satış demosudur.
- İlk hedef tam üretim sistemi değil, görsel ve işlevsel olarak güçlü bir frontend demodur.
- Demo/prototype scope'u teslim olgunluğunu sınırlar; tasarım, kod veya mimari kalite tabanını düşürmez.
- Demo başarılı bulunursa sonraki aşamada gerçek içerik doğrulaması, production geliştirme, hosting/domain geçişi ve gerekirse yönetim paneli gibi kapsamlar ayrıca ele alınabilir.
- Mevcut web sitesi ana firma bilgi kaynağıdır; mevcut tasarım yapısı yeni tasarım için authority değildir.

## 4. Hedef Kullanıcılar

### Birincil Kullanıcılar

- Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler.
- Yedek parça temini arayan makine ve ekipman kullanıcıları.
- Yerinde teknik destek veya servis hizmeti arayan potansiyel müşteriler.

### İkincil Kullanıcılar

- Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları.
- Trakya Teknik Makine ile iletişime geçmek isteyen mevcut müşteriler.

## 5. Temel Kullanıcı Akışları

- Ziyaretçi ana sayfadan firmanın ne yaptığını hızlıca anlayabilmeli.
- Ziyaretçi hizmetleri açık ve görsel olarak güçlü biçimde inceleyebilmeli.
- Ziyaretçi firmanın Disan Hidrolik Makine'nin Trakya bölgesindeki yetkili servisi olduğunu görebilmeli.
- Ziyaretçi güven unsurlarını ve firma hakkında temel bilgileri inceleyebilmeli.
- Ziyaretçi telefon, e-posta veya uygun iletişim CTA'ları üzerinden kolayca firmaya ulaşabilmeli.

## 6. Kapsam

### Kapsam Dahili

- Modern ve responsive kurumsal frontend demo.
- Ana sayfa ve gerekli görülen kurumsal/hizmet/iletişim sayfa veya bölümleri.
- Mevcut gerçek firma içeriğinin yeniden organize edilmesi.
- Firmanın hizmetlerinin güçlü şekilde sunulması.
- Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim.
- Telefon/e-posta gibi temel iletişim CTA'ları.
- Gelecekte gerçek backend/data kaynağı bağlanmasını kolaylaştıracak temiz frontend sınırları ve integration-ready yapı.

### Kapsam Dışı

- İlk demo aşamasında gerçek admin paneli.
- Backend ve veritabanının gerçekten uygulanması.
- Gerçek kullanıcı hesabı veya authentication.
- Online ödeme/e-ticaret.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, referanslar veya teknik yetkinlikler.
- Production deployment ve mevcut domainin taşınması.

## 7. Fonksiyonel Gereksinimler

- Responsive masaüstü ve mobil kullanım.
- Ana navigasyonun çalışması.
- Hizmet içeriğinin açık biçimde sunulması.
- İletişim bilgilerinin kolay erişilebilir olması.
- Telefon ve e-posta CTA'larının uygun cihazlarda kullanılabilir olması.
- Demo içinde kullanılan gerçek firma bilgilerinin mevcut kaynakla çelişmemesi.
- Tasarımın satış görüşmesinde gerçek bir site hissi verecek bütünlükte olması.
- Mock/local içerik presentation component'lerine kontrolsüz biçimde gömülmemeli; data/service boundary korunmalı.

## 8. Mevcut Durum

- Trakya Teknik Makine'nin yayında olan mevcut bir web sitesi bulunmaktadır.
- Mevcut site SITE123 altyapısı tarafından desteklenmektedir.
- Site; Ana sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim içeriklerini sunmaktadır.
- Firma mevcut sitede kendisini Disan Hidrolik Makine'nin Trakya bölgesindeki yetkili servisi olarak tanımlamaktadır.
- Mevcut sitede üç temel hizmet öne çıkarılmaktadır: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.
- Demo için henüz yeni tasarım veya kod tabanı oluşturulmamıştır.

## 9. Mevcut Varlıklar / Kaynak Materyal

- Mevcut web sitesi: https://www.trakyateknikmakine.com/
- Mevcut firma açıklamaları ve hizmet metinleri.
- Mevcut iletişim bilgileri.
- Mevcut sitedeki marka/firma adı ve içerik yapısı.
- Gerekirse mevcut sitedeki görseller yalnızca uygunluk ve kullanım hakkı değerlendirilerek referans alınabilir.

## 10. Teknik Bağlam / Tercihler

- İlk aşama frontend demo olacaktır.
- Uygulama stack'i Product Engine'in package/document selection ve teknik karar süreci tarafından belirlenecektir; bu source dosyada zorunlu yeni stack kararı verilmemektedir.
- Demo hızlı geliştirilebilir, kolay çalıştırılabilir ve satış görüşmesinde güvenilir şekilde gösterilebilir olmalıdır.
- Demo kodu throwaway kabul edilmemeli; gerçek backend/data kaynağı geldiğinde presentation katmanının yeniden yazılmasını gerektirmeyecek temiz service/data-access boundary planlanmalıdır.
- İlk aşamada mock/local data kullanılabilir ancak data source, config/environment ve UI sorumlulukları ayrıştırılmalıdır.
- Gerçek backend kapsamda olmadığı sürece sahte endpoint, database schema veya production entegrasyon contract'ı uydurulmamalıdır.
- Mevcut SITE123 altyapısının korunması zorunlu değildir; mevcut site yalnızca kaynak ve karşılaştırma noktasıdır.

## 11. Veri / Entegrasyonlar

- İlk demo için özel veritabanı gereksinimi tanımlanmamıştır.
- İlk demo için dış API entegrasyonu gereksinimi tanımlanmamıştır.
- Telefon ve e-posta iletişim bağlantıları kullanılabilir.
- Harita, form veya WhatsApp gibi ek entegrasyonlar Product Engine intake/approval sırasında ihtiyaç ve demo değeri açısından değerlendirilebilir.
- Gelecekte backend eklenirse mock/local source yerine gerçek adapter bağlanabilecek entegrasyon sınırı korunmalıdır.

## 12. Tasarım Yönü

- Modern, temiz ve profesyonel endüstriyel/teknik kurumsal dil.
- Güven, teknik yetkinlik, servis kalitesi ve hızlı çözüm hissi ön planda olmalı.
- Mevcut sitenin tasarımı kopyalanmamalı; firma bilgileri korunarak projeye özgü yeni bir visual concept kurulmalı.
- `endüstri = lacivert`, `kurumsal = klasik hero + üç kart + CTA` gibi sektör/template klişeleri otomatik tasarım gerekçesi olarak kullanılmamalı.
- Light design planning daha az artifact anlamına gelir; daha düşük tasarım kalitesi veya generic template izni anlamına gelmez.
- Hizmetler güçlü görsel hiyerarşiyle sunulmalı.
- Masaüstü ve mobil deneyim birlikte düşünülmeli.
- Yenilik ve farklılaşma; tipografi, kompozisyon, spacing, imagery, yüzey sistemi ve kontrollü motion üzerinden projeye özgü biçimde kurulmalı; novelty uğruna usability bozulmamalıdır.

## 13. Deployment / Operasyonlar

- İlk aşamada production deployment zorunlu değildir.
- Demo lokal veya uygun bir demo hosting ortamında çalıştırılabilir.
- Gerçek domain ve hosting geçişi ancak satış sonrası ayrı kapsam olarak değerlendirilmelidir.
- Production operasyonu, monitoring ve backup gereksinimleri şu an tanımlanmamıştır.

## 14. Daha Önce Alınmış Önemli Kararlar

- İlk çıktı satış amaçlı frontend demo olacaktır.
- Delivery profile için `Prototype`, implementation planning için `standard`, design planning için `light` source hint'i kullanılacaktır; canonical değerler approval gate'te kesinleşecektir.
- Proje mevcut sitenin yeniden tasarlanması yaklaşımıyla ele alınacaktır.
- Mevcut sitedeki doğrulanabilir firma bilgileri kaynak olarak kullanılacaktır.
- Mevcut sitenin görsel tasarım kararları yeni demo için bağlayıcı değildir.
- Bilinmeyen firma bilgileri uydurulmayacaktır.
- Demo scope'u kod/mimari kalite tabanını düşürmeyecektir.
- Product Engine'in canonical lifecycle ve approval gate'i korunacaktır.

## 15. Bilinen Kısıtlar

- Çalışma müşteriyle henüz doğrulanmış bir production brief değildir.
- Firma hakkında yalnızca mevcut sitede açıkça bulunan bilgiler doğrulanmış kabul edilmelidir.
- Demo aşamasında gereksiz backend, panel veya operasyonel complexity eklenmemelidir.
- Yeni içerik yazılırken firmanın kanıtlanmamış hizmet, sertifika, müşteri, proje veya başarı iddiaları oluşturulmamalıdır.
- Tasarım, sektör klişesine veya başka Engine çıktılarının görünümüne varsayılan olarak bağlanmamalıdır.

## 16. Bilinmeyenler / Açık Sorular

- Firmanın resmi logo/brand asset'lerinin yüksek kaliteli kaynakları mevcut mu?
- Yeni sitede kesin sayfa yapısı ne olmalı?
- Hizmetler için ek teknik detay veya görseller mevcut mu?
- Firma referansları ve müşteri yorumları doğrulanabilir mi?
- WhatsApp, iletişim formu, harita veya teklif talep akışı istenecek mi?
- Production aşamasında yönetim paneli ihtiyacı olacak mı?
- Gerçek hosting/domain ve bakım modeli nasıl olacak?

## 17. Başarı Kriterleri

- Demo ilk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünmeli.
- Tasarım generic kurumsal demo template'i hissi vermemeli; projeye özgü ayırt edilebilir bir visual concept taşımalı.
- Firma ve üç ana hizmet hızlıca anlaşılmalı.
- Kullanıcı iletişim noktasına kolay ulaşabilmeli.
- Mobil ve masaüstü görünüm satış görüşmesinde gösterilecek kaliteye sahip olmalı.
- Demo gerçek firma bilgilerini korurken kanıtlanmamış bilgi üretmemeli.
- Frontend yapısı, sonradan gerçek data/backend entegrasyonuna geçişi gereksiz yeniden yazım olmadan desteklemeli.
- `implementation_planning: standard` sonucu yeni bir agent'ın ilk wave'i uygulamaya başlayabileceği kadar açık execution plan üretmeli.
- Ortaya çıkan proje, müşteri görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça verebilmeli.

## 18. Özel Talimatlar

- Bu dosya Product Engine için source material'dir; final ürün gereksinim belgesi olarak kabul edilmemelidir.
- Product Engine mevcut authority/read-order, intake, planning profile, package/document selection ve approval contract'larını aynen uygulamalıdır.
- Demo odaklılık, production complexity'yi sınırlar; planning veya kalite tabanını düşürmez.
- Mevcut siteden alınan gerçek bilgiler ile bizim demo/tasarım kararlarımız birbirinden ayrılmalıdır.
- Planning profile source hint'leri explicit user approval olmadan approved input truth sayılmamalıdır.

## 19. Referanslar

- Trakya Teknik Makine mevcut web sitesi: https://www.trakyateknikmakine.com/
- Product Engine project-start template: `project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md`
- Project start agent prompt template: `project-start/templates/AGENT_START_PROMPT_TEMPLATE.md`
- Planning profiles authority: `engine/PLANNING_PROFILES.md`

---

## Handoff Kuralı

Bu dosya proje kaynak materyalidir; canonical Product Engine contract'ı veya final Engine input'u değildir.

Ajan bu dosyayı Product Engine'in yetkili read order, intake, planning profile, package/document selection, lifecycle, validation, approval, run, output, logging ve archive contract'ları üzerinden işlemelidir. Eksik bilgiler, spekülatif varsayımlar yerine Engine'in mevcut missing-input ve approval davranışıyla ele alınmalıdır.