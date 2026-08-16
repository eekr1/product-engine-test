# Fizyoterapist Eda Pala — Project Start Scenario

Bu dosya Fizyoterapist Eda Pala projesi için Product Engine'in self-contained project source material'idir.

Mevcut proje bilgileri sınırlıdır. Bu nedenle yalnız açıkça bilinen kişi, meslek ve konum bilgileri project truth kabul edilir; eksik gerçek dünya bilgileri tahmin edilmez ve gerektiğinde open question olarak korunur.

## 1. Proje Kimliği

- Proje adı: Fizyoterapist Eda Pala Web Sitesi Demo
- Proje slug'ı: `fizyoterapist-eda-pala`
- Proje türü: Profesyonel kişisel web sitesi / satış demosu
- Proje modu: yeni
- Delivery profile: Prototype
- Implementation planning: standard
- Design planning: light
- Tek cümlelik açıklama: Tekirdağ'daki Fizyoterapist Eda Pala için, mevcut doğrulanmış bilgilerle çalışan; modern, güven veren ve profesyonel bir frontend web sitesi demosu hazırlamak.
- Sahip / müşteri: Fizyoterapist Eda Pala; çalışma potansiyel satış görüşmesi amacıyla hazırlanacaktır.

> Planning profile değerleri source hint'idir; canonical approved input gerçeği approval gate'te kesinleşir.

## 2. Problem / Amaç

Bu proje kapsamında Fizyoterapist Eda Pala için yeni bir web sitesi demosu oluşturulacaktır. Amaç; adı, mesleki unvanı ve Tekirdağ konum bağlamını profesyonel bir dijital sunuma dönüştürmek ve satış görüşmesinde gösterilebilecek güçlü bir frontend demo hazırlamaktır.

Mevcut kaynaklarda uzmanlık, tedavi alanı, eğitim, deneyim, klinik, hizmet, başarı, sağlık sonucu veya doğrudan iletişim bilgileri bulunmamaktadır. Bu alanlar doğrulanmış bilgi sağlanmadan factual içerik olarak üretilemez.

## 3. Ürün / İş Bağlamı

- Bu çalışma proaktif satış demosudur.
- İlk hedef production sağlık platformu veya randevu sistemi değil, görsel ve yapısal olarak güçlü bir profesyonel frontend demodur.
- Mevcut kişi ve hizmet bilgileri sınırlıdır; eksik alanlar generic fizyoterapi bilgisiyle kişi özelinde doldurulmamalıdır.
- Prototype teslim olgunluğunu sınırlar; tasarım, kod veya mimari kalite tabanını düşürmez.
- Demo başarılı bulunursa gerçek hizmetler, biyografi, iletişim bilgileri, randevu akışı ve production ihtiyaçları müşteri tarafından doğrulandıktan sonra ayrı kapsam olarak ele alınabilir.

## 4. Hedef Kullanıcılar

### Birincil Kullanıcılar

- Tekirdağ bağlamında bir fizyoterapist hakkında temel profesyonel bilgi arayan potansiyel ziyaretçiler.
- Fizyoterapist Eda Pala'nın dijital profilini görmek isteyen kişiler.

### İkincil Kullanıcılar

- Fizyoterapist Eda Pala ile iletişim kurmak veya mevcut sosyal medya profiline ulaşmak isteyen ziyaretçiler.

> Ziyaretçilerin belirli bir hastalık, tanı, tedavi veya terapi ihtiyacı olduğu source tarafından doğrulanmadığından hedef kullanıcılar klinik alt segmentlere ayrılamaz.

## 5. Temel Kullanıcı Akışları

- Ziyaretçi sayfanın Fizyoterapist Eda Pala'ya ait profesyonel tanıtım yüzeyi olduğunu hızlıca anlayabilmeli.
- Ziyaretçi mesleki unvanın `Fizyoterapist` olduğunu görebilmeli.
- Ziyaretçi konum bağlamının `Tekirdağ` olduğunu görebilmeli.
- Ziyaretçi kullanıcı tarafından sağlanan Instagram profiline yönlenebilmeli.
- Source-backed ek içerik bulunmadığı durumda site, uydurma hizmet kartları veya klinik iddialarla doldurulmamalıdır.

## 6. Kapsam

### Kapsam Dahili

- Modern ve responsive profesyonel frontend demo.
- Fizyoterapist Eda Pala adının, mesleki unvanının ve Tekirdağ bağlamının güçlü sunumu.
- Mevcut factual content ile güçlü bir dijital profil/landing experience oluşturulması.
- Kullanıcı tarafından sağlanan Instagram profiline outbound CTA/link.
- İçeriğin gelecekte doğrulanmış bilgiler eklendiğinde büyüyebilmesini destekleyen temiz frontend yapı.
- Mock/local data kullanılacaksa bunun yalnız presentation/configuration amaçlı olması; gerçek dünya claim'i üretmemesi.

### Kapsam Dışı

- Kaynakta bulunmayan tedavi/hizmet alanları.
- Belirli rahatsızlıklar, tanılar, tedavi yöntemleri veya sağlık sonucu iddiaları.
- Eğitim, üniversite, sertifika, uzmanlık, deneyim yılı veya mesleki başarı iddiaları.
- Klinik adı, klinik adresi, telefon, e-posta, çalışma saatleri veya fiyat bilgisi.
- Hasta yorumu, referans, başarı oranı, önce/sonra içeriği.
- Online randevu veya gerçek randevu backend'i.
- İletişim formu backend'i.
- WhatsApp entegrasyonu.
- Canlı harita.
- Authentication, admin paneli, CMS, veritabanı veya gerçek API.
- Production deployment/domain/hosting kurulumu.
- Tıbbi tavsiye, teşhis veya kişiye özel sağlık yönlendirmesi sunan içerik.

## 7. Fonksiyonel Gereksinimler

- Responsive masaüstü ve mobil kullanım.
- Çalışan ana navigasyon veya proje kapsamına uygun tek sayfa bölüm navigasyonu.
- Fizyoterapist Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamının net sunumu.
- Kullanıcı tarafından sağlanan Instagram profilinin açık ve erişilebilir bir outbound CTA olarak kullanılabilmesi.
- Source-backed olmayan hizmet, uzmanlık veya sağlık claim'lerinin arayüzde placeholder gerçekmiş gibi gösterilmemesi.
- Gelecekte doğrulanmış içerik geldiğinde genişletilebilecek temiz component/content boundary.

## 8. Mevcut Durum / Current Reality

- Bu Product Engine çalışması için yeni frontend demo kod tabanı henüz oluşturulmamıştır.
- Proje yeni proje olarak ele alınacaktır.
- Kullanıcı tarafından sağlanan tek sosyal profil Instagram profilidir.
- Instagram içeriği source hazırlanırken factual enrichment amacıyla kullanılmamıştır.
- Normal intake/run sırasında external research yapılmayacaktır; project truth bu source dosyada verilen bilgilerle sınırlıdır.

## 9. Approved Project Facts / Content Truth

Aşağıdaki gerçekler bu source dosyanın factual allowlist temelidir:

- İsim: **Eda Pala**.
- Mesleki unvan: **Fizyoterapist**.
- Konum bağlamı: **Tekirdağ**.
- Kullanıcı tarafından sağlanan Instagram profil URL'si: `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`

Instagram URL'sinin varlığı şu anlama **gelmez**:

- profil içeriğinin Engine tarafından doğrulandığı,
- kullanıcı adından başka mesleki/factual bilgi çıkarılabileceği,
- klinik, hizmet, uzmanlık, eğitim, sertifika, telefon, adres veya çalışma saati bilgisinin bilindiği.

Exact factual allowlist şu sınırlarla korunur:

- `Fizyoterapist` → `uzman fizyoterapist`, `doktor`, belirli bir klinik uzmanlık veya tedavi alanı anlamına gelmez.
- `Tekirdağ` → exact klinik adresi, ilçe, hizmet bölgesi, evde hizmet veya fiziksel klinik sahipliği anlamına gelmez.
- `Instagram profili` → randevu kanalı, resmi iletişim prosedürü veya profilde görülebilecek herhangi bir ek claim anlamına gelmez.

Source support olmadan hiçbir fizyoterapi hizmeti, yöntem, hastalık/rahatsızlık listesi, sağlık sonucu, eğitim/sertifika, deneyim, hasta yorumu, fiyat veya availability bilgisi üretilemez.

## 10. Teknik Bağlam / Tercihler

- İlk aşama frontend demo olacaktır.
- Kesin frontend stack Product Engine package/technical resolution aşamasında belirlenir.
- Demo kolay çalıştırılabilir ve satış görüşmesinde güvenilir gösterilebilir olmalıdır.
- İçerik local/static configuration ile tutulabilir.
- Factual content presentation component'lerine kontrolsüz hardcode edilmemeli; gelecekte doğrulanmış içeriğin eklenmesini kolaylaştıran temiz content/data boundary korunmalıdır.
- Backend kapsamda değilse sahte endpoint, database schema veya production integration contract uydurulmamalıdır.

## 11. Veri / Entegrasyonlar

- İlk demo için veritabanı gereksinimi yoktur.
- İlk demo için dış API gereksinimi yoktur.
- Instagram yalnız kullanıcı tarafından sağlanmış outbound URL olarak kullanılabilir; scraping, API veya runtime data source değildir.
- Gelecekte gerçek içerik, randevu veya iletişim sistemi eklenecekse ayrı approved scope gerekir.

## 12. Tasarım Yönü

- Modern, temiz, sakin, insani ve profesyonel bir dijital profil hissi hedeflenir.
- Güven ve açıklık öne çıkmalıdır; ancak bu algısal tasarım hedefleri mesleki başarı veya sağlık sonucu claim'i değildir.
- Spesifik marka rengi, logo, tipografi veya görsel kimlik source tarafından tanımlanmamıştır; Engine bunları design synthesis olarak çözebilir fakat brand fact gibi sunamaz.
- Generic sağlık sitesi klişesi olan `turkuaz/mavi gradient + doktor stok fotoğrafı + üç tedavi kartı` varsayılan çözüm olarak kullanılmamalıdır.
- Anatomi, hasta, tedavi uygulaması veya klinik ekipman görselleri gerçek hizmet/uzmanlık çağrışımı yaratacak şekilde source-backed olmayan claim üretmemelidir.
- Sınırlı factual içerik; kontrollü tipografi, kompozisyon, whitespace, imagery ve motion ile profesyonel biçimde sunulabilir.
- Masaüstü ve mobil birlikte düşünülmelidir.

## 13. Deployment / Operasyonlar

- Production deployment bu scope'ta değildir.
- Demo lokal veya uygun demo ortamında çalıştırılabilir.
- Hosting/domain/monitoring/backup daha sonraki ayrı kapsamdır.

## 14. Daha Önce Alınmış Önemli Kararlar

- İlk çıktı satış amaçlı frontend demo olacaktır.
- Delivery profile `Prototype`, implementation planning `standard`, design planning `light` source hint'idir.
- Eksik kişi/hizmet bilgileri factual içerik olarak uydurulmayacaktır.
- Kullanıcı tarafından sağlanan Instagram URL'si yalnız outbound profile link olarak kullanılabilir.
- Sağlık/meslek alanındaki factual claim'ler source allowlist dışında genişletilmeyecektir.

## 15. Bilinen Kısıtlar

- Müşteri tarafından doğrulanmış production brief değildir.
- Yalnız bu source dosyada açıkça bulunan kişi/domain gerçekleri factual truth kabul edilir.
- Kişinin uzmanlık alanları, sunduğu hizmetler, eğitim/sertifikaları ve iletişim bilgileri bilinmemektedir.
- Sağlık alanı nedeniyle generic industry knowledge ile kişi özelinde tedavi/uzmanlık claim'i üretmek yasaktır.
- Gereksiz backend, panel, booking veya operational complexity eklenmemelidir.
- Tasarım başka Engine çıktılarının görünümüne veya sektör klişesine bağlanmamalıdır.

## 16. Bilinmeyenler / Açık Sorular

- Eda Pala'nın doğrulanmış çalışma/tedavi alanları nelerdir?
- Mesleki biyografide kullanılabilecek eğitim, sertifika veya deneyim bilgileri var mı?
- Logo, profesyonel portre veya marka materyalleri mevcut mu?
- Exact telefon/e-posta veya fiziksel çalışma adresi final sitede kullanılacak mı?
- Instagram dışında onaylı iletişim/randevu kanalı var mı?
- Gelecekte gerçek randevu akışı istenecek mi?
- Production aşamasında çok sayfalı yapı, CMS veya içerik yönetimi ihtiyacı olacak mı?

## 17. Başarı Kriterleri

- Demo ilk bakışta modern, profesyonel ve kişisel marka odaklı görünmeli.
- Generic sağlık/klinik template hissi vermemeli.
- Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` bağlamı hızlıca anlaşılmalı.
- Kullanıcı sağlanan Instagram profiline kolayca ulaşabilmeli.
- Mobil ve masaüstü görünüm satış görüşmesinde gösterilecek kalitede olmalı.
- Source-backed olmayan hizmet, uzmanlık, eğitim, klinik veya sağlık claim'i üretilmemeli.
- Eksik bilgiler açık soru olarak korunmalı; tasarımın dolu görünmesi uğruna factual placeholder kullanılmamalı.
- Frontend yapısı gelecekte doğrulanmış içerik eklenmesini gereksiz yeniden yazım olmadan desteklemeli.
- `implementation_planning: standard` çıktısı fresh capable agent'ın aktif wave'i ikinci planning pass olmadan uygulayabileceği açıklıkta olmalı.

## 18. Özel Talimatlar

- Bu dosya normal Product Engine intake'i için self-contained project factual universe'dür.
- External website/search/Instagram research normal intake veya runtime'ın parçası değildir.
- Agent Instagram URL'sini açarak factual enrichment yapamaz.
- Missing factual info open question olarak kalır; generic fizyoterapi bilgisiyle doldurulmaz.
- Teknik implementation ve yaratıcı design kararları Engine-resolved olabilir; kişi/meslek/sağlık claim'leri source-backed olmak zorundadır.

## 19. Referanslar

- Product Engine project-start template: `project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md`
- Project start agent prompt template: `project-start/templates/AGENT_START_PROMPT_TEMPLATE.md`
- Planning profiles authority: `engine/PLANNING_PROFILES.md`
- Kullanıcı tarafından sağlanan Instagram URL'si source içinde yalnız approved outbound link olarak kayıtlıdır; external research authority değildir.

---

## Handoff Kuralı

Bu dosya project source material'dir; final Engine input'u değildir. Intake agent bu source'u canonical pending PROJECT_INPUT'a normalize eder, explicit user approval alır ve approved input oluşturduktan sonra durur. Runtime yalnız approved input üzerinden yeni session'da devam eder.