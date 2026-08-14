# Trakya Teknik Makine — Project Start Scenario

Bu dosya Trakya Teknik Makine projesi için Product Engine'in self-contained project source material'idir.

## 1. Proje Kimliği

- Proje adı: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- Proje slug'ı: `trakya-teknik-makine`
- Proje türü: Kurumsal web sitesi / satış demosu
- Proje modu: yeni
- Delivery profile: Prototype
- Implementation planning: standard
- Design planning: light
- Tek cümlelik açıklama: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamak.
- Sahip / müşteri: Trakya Teknik Makine; çalışma potansiyel satış görüşmesi amacıyla hazırlanacaktır.

> Planning profile değerleri source hint'idir; canonical approved input gerçeği approval gate'te kesinleşir.

## 2. Problem / Amaç

Trakya Teknik Makine için firmanın ne yaptığını hızlı anlatan, hizmetlerini güçlü biçimde sunan ve satış görüşmesinde gösterilebilecek modern bir kurumsal frontend demo hazırlanacaktır.

## 3. Ürün / İş Bağlamı

- Bu çalışma proaktif satış demosudur.
- İlk hedef production sistem değil, görsel ve işlevsel olarak güçlü bir frontend demodur.
- Prototype teslim olgunluğunu sınırlar; tasarım, kod veya mimari kalite tabanını düşürmez.
- Demo başarılı bulunursa backend, admin, production deployment ve ek entegrasyonlar ayrı kapsam olarak ele alınabilir.

## 4. Hedef Kullanıcılar

### Birincil Kullanıcılar

- Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler.
- Yedek parça temini arayan makine ve ekipman kullanıcıları.
- Yerinde teknik destek arayan potansiyel müşteriler.

### İkincil Kullanıcılar

- Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.
- Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 5. Temel Kullanıcı Akışları

- Ziyaretçi firmanın ne yaptığını hızlıca anlayabilmeli.
- Ziyaretçi firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğunu görebilmeli.
- Ziyaretçi üç temel hizmeti açık biçimde inceleyebilmeli.
- Ziyaretçi firma hakkında temel kurumsal bilgiyi görebilmeli.
- Ziyaretçi telefon/e-posta gibi approved direct-contact CTA'larına kolayca ulaşabilmeli.

## 6. Kapsam

### Kapsam Dahili

- Modern ve responsive kurumsal frontend demo.
- Ana kurumsal tanıtım yüzeyi.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
- Üç temel hizmetin güçlü görsel sunumu.
- Telefon/e-posta direct-contact CTA yüzeyleri; exact değerler approved source truth mevcutsa kullanılır.
- Mock/local içerik için temiz frontend service/data-access boundary.
- Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim.

### Kapsam Dışı

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API uygulaması.
- Authentication.
- E-ticaret / online ödeme.
- Canlı harita.
- WhatsApp entegrasyonu.
- Gerçek form submit backend'i.
- Production deployment/domain/hosting geçişi.
- Source dosyada bulunmayan yeni firma iddiaları, hizmet alt kapsamları, sertifikalar, referanslar veya teknik yetkinlikler.

## 7. Fonksiyonel Gereksinimler

- Responsive masaüstü ve mobil kullanım.
- Çalışan ana navigasyon.
- Firma kimliğinin ve yetkili servis statüsünün güçlü sunumu.
- Üç approved hizmetin açık sunumu.
- Approved iletişim bilgilerine kolay erişim.
- Telefon/e-posta CTA'larının uygun cihazlarda kullanılabilir olması.
- Mock/local content'in presentation component'lerine kontrolsüz hardcode edilmemesi; service/data boundary korunması.

## 8. Mevcut Durum / Current Reality

- Trakya Teknik Makine gerçek bir firmadır.
- Firma Disan Hidrolik Makine'nin Trakya Bölge Yetkili Servisi olarak konumlandırılır.
- Bu Product Engine çalışması için yeni frontend demo kod tabanı henüz oluşturulmamıştır.
- Engine'in planlama yapması için mevcut bir web sitesi, CMS veya eski codebase bilgisine ihtiyacı yoktur.

## 9. Approved Project Facts / Content Truth

Aşağıdaki gerçekler bu source dosyanın factual allowlist temelidir:

- Firma adı: **Trakya Teknik Makine**.
- Statü: **Disan Hidrolik Makine Trakya Bölge Yetkili Servisi**.
- Ana Hizmet 1: **Yedek Parça Temini**.
- Ana Hizmet 2: **Yerinde Teknik Destek**.
- Ana Hizmet 3: **Makine Bakım ve Onarım**.
- Faaliyet/servis bağlamı: **Trakya bölgesi**, endüstriyel/makine teknik servis bağlamı.

Bu exact facts şu anlamlara genişletilemez:

- `Yedek Parça Temini` → stok, orijinal parça, belirli marka/parça garantisi anlamına gelmez.
- `Yerinde Teknik Destek` → mobil filo, acil müdahale, SLA veya belirli müdahale süresi anlamına gelmez.
- `Makine Bakım ve Onarım` → periyodik bakım, revizyon, hidrolik pres/güç ünitesi veya başka spesifik makine türü anlamına gelmez.
- Çalışma saatleri, sertifika, referans, müşteri, proje, başarı, kapasite veya başka firma gerçeği source support olmadan yazılamaz.

Telefon/e-posta/adres gibi exact contact values source material'a gerçek değer olarak eklenmeden factual copy olarak uydurulamaz. Engine direct-contact capability'yi planlayabilir ancak unknown value üretmez.

## 10. Teknik Bağlam / Tercihler

- İlk aşama frontend demo olacaktır.
- Kesin frontend stack Product Engine package/technical resolution aşamasında belirlenir.
- Demo kolay çalıştırılabilir ve satış görüşmesinde güvenilir gösterilebilir olmalıdır.
- Mock/local data kullanılabilir.
- UI ile data source arasında temiz service/data-access boundary olmalıdır.
- Backend kapsamda değilse sahte endpoint, database schema veya production integration contract uydurulmamalıdır.

## 11. Veri / Entegrasyonlar

- İlk demo için veritabanı gereksinimi yoktur.
- İlk demo için dış API gereksinimi yoktur.
- Mock/local project data kullanılabilir.
- Gelecekte gerçek backend/data source bağlanabilmesi için adapter sınırı korunmalıdır.

## 12. Tasarım Yönü

- Modern, temiz, profesyonel endüstriyel/teknik kurumsal dil.
- Güven, teknik uzmanlık, hızlı çözüm algısı ve profesyonellik öne çıkmalı.
- `hızlı çözüm` yalnız algısal tasarım hedefidir; SLA veya operasyonel süre claim'i değildir.
- Generic `lacivert hero + üç kart + standart footer` sektör klişesi varsayılan tasarım olarak kullanılmamalıdır.
- Light design planning düşük kalite veya generic template izni değildir.
- Hizmetler güçlü görsel hiyerarşiyle sunulmalıdır.
- Masaüstü ve mobil birlikte düşünülmelidir.
- Tipografi, kompozisyon, spacing, imagery, yüzey sistemi ve kontrollü motion projeye özgü biçimde çözülebilir.

## 13. Deployment / Operasyonlar

- Production deployment bu scope'ta değildir.
- Demo lokal veya uygun demo ortamında çalıştırılabilir.
- Hosting/domain/monitoring/backup daha sonraki ayrı kapsamdır.

## 14. Daha Önce Alınmış Önemli Kararlar

- İlk çıktı satış amaçlı frontend demo olacaktır.
- Delivery profile `Prototype`, implementation planning `standard`, design planning `light` source hint'idir.
- Bilinmeyen firma bilgileri uydurulmayacaktır.
- Demo scope'u kod/mimari kalite tabanını düşürmeyecektir.
- Clean frontend service/data boundary korunacaktır.

## 15. Bilinen Kısıtlar

- Müşteri tarafından doğrulanmamış production brief değildir.
- Yalnız bu source dosyada açıkça bulunan firma/domain gerçekleri factual truth kabul edilir.
- Gereksiz backend, panel veya operational complexity eklenmemelidir.
- Tasarım başka Engine çıktılarının görünümüne veya sektör klişesine bağlanmamalıdır.

## 16. Bilinmeyenler / Açık Sorular

- Resmi logo/brand asset'lerinin yüksek kaliteli kaynakları mevcut mu?
- Exact telefon/e-posta/adres değerleri final demoda kullanılacak mı ve source truth olarak sağlanacak mı?
- Hizmetler için source-backed ek teknik detay veya görseller sağlanacak mı?
- Firma referansları/müşteri yorumları daha sonra doğrulanacak mı?
- Future scope'ta form, harita veya WhatsApp istenecek mi?
- Production aşamasında admin/CMS ihtiyacı olacak mı?

## 17. Başarı Kriterleri

- Demo ilk bakışta modern ve profesyonel görünmeli.
- Generic kurumsal template hissi vermemeli.
- Firma, yetkili servis statüsü ve üç approved hizmet hızlıca anlaşılmalı.
- Kullanıcı approved iletişim noktasına kolay ulaşabilmeli.
- Mobil ve masaüstü görünüm satış görüşmesinde gösterilecek kalitede olmalı.
- Source-backed olmayan firma gerçeği üretilmemeli.
- Frontend yapısı gelecekte gerçek data/backend adapter'ına geçişi gereksiz yeniden yazım olmadan desteklemeli.
- `implementation_planning: standard` çıktısı fresh capable agent'ın aktif wave'i ikinci planning pass olmadan uygulayabileceği açıklıkta olmalı.

## 18. Özel Talimatlar

- Bu dosya normal Product Engine intake'i için yeterli project factual universe'dür.
- External website/search/research normal runtime'ın parçası değildir.
- Agent source dosyanın dışından factual enrichment yapamaz.
- Missing factual info open question olarak kalır; generic industry knowledge ile doldurulmaz.
- Teknik implementation kararları Engine-resolved olabilir; gerçek firma/domain claim'leri source-backed olmak zorundadır.

## 19. Referanslar

- Product Engine project-start template: `project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md`
- Project start agent prompt template: `project-start/templates/AGENT_START_PROMPT_TEMPLATE.md`
- Planning profiles authority: `engine/PLANNING_PROFILES.md`

---

## Handoff Kuralı

Bu dosya project source material'dir; final Engine input'u değildir. Intake agent bu source'u canonical pending PROJECT_INPUT'a normalize eder, explicit user approval alır ve approved input oluşturduktan sonra durur. Runtime yalnız approved input üzerinden yeni session'da devam eder.
