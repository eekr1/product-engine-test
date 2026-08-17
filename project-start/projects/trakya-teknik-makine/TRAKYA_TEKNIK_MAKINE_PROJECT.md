# Trakya Teknik Makine — Project Start Scenario

Bu dosya Trakya Teknik Makine projesi için Product Engine'in self-contained project source material'idir.

## 1. Proje Kimliği

- Proje adı: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- Proje slug'ı: `trakya-teknik-makine`
- Proje türü: `corporate-website`
- Proje modu: yeni
- Delivery profile: Prototype
- Implementation planning: standard
- Design planning: standard
- Tek cümlelik açıklama: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren **çok sayfalı kurumsal web sitesi satış demosu** olarak sunmak.
- Sahip / müşteri: Trakya Teknik Makine; çalışma potansiyel satış görüşmesi amacıyla hazırlanacaktır.

> Planning profile ve site architecture değerleri source hint/desired target'tır; canonical approved input gerçeği Product Engine intake + explicit approval gate'te kesinleşir.
> `sales demo` delivery context'tir; project type `corporate-website` olarak korunur.

## 2. Problem / Amaç

Trakya Teknik Makine için yalnız tek sayfalık bir tanıtım yüzeyi değil; firmanın ne yaptığını hızlı anlatan, hizmetlerini ayrı keşif/detay yüzeyleriyle güçlü biçimde sunan, kurumsal güven hissi oluşturan ve satış görüşmesinde **“gerçek siteniz böyle olabilir”** etkisi veren modern bir kurumsal frontend demo hazırlanacaktır.

## 3. Ürün / İş Bağlamı

- Bu çalışma proaktif satış demosudur.
- İlk hedef production sistem değil, görsel ve işlevsel olarak güçlü bir frontend kurumsal site demosudur.
- Prototype yalnız delivery maturity'yi sınırlar; page breadth, design quality, code quality veya architecture quality'yi düşürmez.
- Demo müşteri tarafından olumlu karşılanırsa aynı frontend foundation üzerinde backend, CMS/admin, production deployment ve ek entegrasyonlar ayrı approved scope olarak devam edebilmelidir.
- Basit hero + üç hizmet kartı + iletişim section'ından oluşan tek-page landing yapı hedef değildir.

## 4. Hedef Kullanıcılar

### Birincil Kullanıcılar

- Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler.
- Yedek parça temini arayan makine ve ekipman kullanıcıları.
- Yerinde teknik destek arayan potansiyel müşteriler.

### İkincil Kullanıcılar

- Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.
- Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 5. Temel Kullanıcı Akışları

- Ziyaretçi Ana Sayfa üzerinden firmanın kim olduğunu ve ne yaptığını hızlıca anlayabilmeli.
- Ziyaretçi ayrı Kurumsal yüzey üzerinden firma/yetkili servis kimliğini değerlendirebilmeli; source-backed olmayan tarihçe/kapasite/iddia eklenmemeli.
- Ziyaretçi Hizmetler overview yüzeyinde üç approved hizmeti görebilmeli.
- Ziyaretçi her approved hizmeti ayrı detail surface üzerinden daha odaklı biçimde inceleyebilmeli; detail copy factual allowlist'i aşmamalı.
- Ziyaretçi ayrı İletişim yüzeyinden approved direct-contact kanallarına ulaşabilmeli.
- Global navigation desktop/mobile boyunca aynı approved information architecture'ı korumalı.

## 6. Kapsam

### Kapsam Dahili

- Modern, responsive, **multi-page corporate website** frontend demo.
- Ana Sayfa.
- Kurumsal sayfa.
- Hizmetler overview sayfası.
- Yedek Parça Temini için ayrı service-detail page.
- Yerinde Teknik Destek için ayrı service-detail page.
- Makine Bakım ve Onarım için ayrı service-detail page.
- İletişim sayfası.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin uygun approved yüzeylerde sunumu.
- Üç temel hizmetin güçlü görsel hiyerarşiyle sunumu.
- Telefon/e-posta direct-contact capability; exact values yalnız approved factual source mevcutsa render edilir, uydurulmaz.
- Gerçek route/navigation davranışı; distinct approved pages same-page anchor section'lara indirgenmez.
- Mock/local içerik için clean frontend service/data-access boundary.
- Sales-demo presentation quality ve cross-page responsive consistency.

### Kapsam Dışı

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API implementation.
- Authentication.
- E-ticaret / online ödeme.
- Canlı harita.
- WhatsApp entegrasyonu.
- Gerçek form submit backend'i.
- Production deployment/domain/hosting geçişi.
- Source-backed olmayan referans/proje/müşteri/tarihçe/sertifika/kapasite sayfaları veya company claims.
- Source dosyada bulunmayan hizmet qualifier'ları/teknik alt kapsamlar.

## 7. Site / Surface Architecture

Aşağıdaki yapı bu source için **desired corporate site architecture**'dır. Canonical PAGE IDs ve approved registry intake agent tarafından pending PROJECT_INPUT'ta önerilip kullanıcı explicit approval'ı ile kesinleşir.

### Known / Desired Pages

1. **Ana Sayfa**
   - Purpose: Firma kimliğini, yetkili servis statüsünü, approved service overview'ı ve site içi keşif yollarını güçlü giriş deneyiminde sunmak.

2. **Kurumsal**
   - Purpose: Trakya Teknik Makine kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü source-safe kurumsal presentation olarak ayrı sayfada sunmak.
   - Constraint: Tarihçe, ekip, kapasite, sertifika, referans veya başka company fact uydurulamaz.

3. **Hizmetler**
   - Purpose: Üç approved hizmeti overview/discovery architecture içinde sunmak ve ilgili detail pages'e yönlendirmek.

4. **Yedek Parça Temini — Hizmet Detayı**
   - Parent: Hizmetler.
   - Purpose: Approved `Yedek Parça Temini` hizmetini ayrı detail presentation yüzeyinde sunmak.
   - Constraint: stok, orijinal parça, belirli marka/parça garantisi eklenemez.

5. **Yerinde Teknik Destek — Hizmet Detayı**
   - Parent: Hizmetler.
   - Purpose: Approved `Yerinde Teknik Destek` hizmetini ayrı detail presentation yüzeyinde sunmak.
   - Constraint: mobil filo, acil müdahale, SLA/response time eklenemez.

6. **Makine Bakım ve Onarım — Hizmet Detayı**
   - Parent: Hizmetler.
   - Purpose: Approved `Makine Bakım ve Onarım` hizmetini ayrı detail presentation yüzeyinde sunmak.
   - Constraint: periyodik bakım, revizyon, spesifik makine/subsystem uzmanlığı eklenemez.

7. **İletişim**
   - Purpose: Approved direct-contact capability'leri ayrı iletişim yüzeyinde sunmak.
   - Constraint: exact telefon/e-posta/adres source truth olmadan uydurulmaz; map/form/WhatsApp otomatik eklenmez.

### Page Relationships

```text
Home
├── Corporate
├── Services
│   ├── Yedek Parça Temini Detail
│   ├── Yerinde Teknik Destek Detail
│   └── Makine Bakım ve Onarım Detail
└── Contact
```

- Navigation gerçek page/surface architecture'ı temsil etmelidir.
- Distinct pages `#kurumsal`, `#hizmetler`, `#iletisim` gibi single-page anchor shortcut'larına collapse edilmemelidir.
- Future CMS/admin/map/WhatsApp/form pages current architecture değildir.

## 8. Fonksiyonel Gereksinimler

- Responsive desktop/tablet/mobile kullanım.
- Çalışan global multi-page navigation.
- Direct URL / route-based page access suitable frontend architecture ile desteklenmeli.
- Firma kimliği ve yetkili servis statüsü güçlü sunulmalı.
- Üç approved hizmet overview + approved detail surfaces üzerinden açıkça keşfedilebilmeli.
- Approved contact channels'a kolay erişim sağlanmalı.
- Shared header/footer/shell cross-page consistent olmalı.
- Mock/local content presentation component'lerine kontrolsüz hardcode edilmemeli; service/data boundary korunmalı.
- Same-codebase continuation future page/CMS/API growth için structural rewrite gerektirmemeli.

## 9. Mevcut Durum / Current Reality

- Trakya Teknik Makine gerçek bir firmadır.
- Firma Disan Hidrolik Makine'nin Trakya Bölge Yetkili Servisi olarak konumlandırılır.
- Bu v0.3.0 fresh Product Engine çalışması için current implementation/generated state temizlenerek sıfırdan planlanacaktır.
- Mevcut dış web sitesi/CMS/old codebase bilgisi bu run için gerekli source truth değildir.

## 10. Approved Project Facts / Content Truth

Factual allowlist temel gerçekleri:

- Firma adı: **Trakya Teknik Makine**.
- Statü: **Disan Hidrolik Makine Trakya Bölge Yetkili Servisi**.
- Ana Hizmet 1: **Yedek Parça Temini**.
- Ana Hizmet 2: **Yerinde Teknik Destek**.
- Ana Hizmet 3: **Makine Bakım ve Onarım**.
- Faaliyet/servis bağlamı: **Trakya bölgesi**, endüstriyel/makine teknik servis bağlamı.

Exact facts şu anlamlara genişletilemez:

- `Yedek Parça Temini` → stok, orijinal parça, belirli marka/parça garantisi değildir.
- `Yerinde Teknik Destek` → mobil filo, acil müdahale, SLA veya belirli müdahale süresi değildir.
- `Makine Bakım ve Onarım` → periyodik bakım, revizyon, hidrolik pres/güç ünitesi veya başka spesifik makine türü değildir.
- Çalışma saatleri, sertifika, referans, müşteri, proje, tarihçe, ekip büyüklüğü, başarı, kapasite veya başka company truth source support olmadan yazılamaz.

Telefon/e-posta/adres gibi exact contact values source material'a gerçek değer olarak eklenmeden factual copy olarak uydurulamaz. Engine capability'yi planlayabilir ancak unknown value üretmez.

## 11. Teknik Bağlam / Tercihler

- Current scope frontend corporate sales demo'dur.
- Exact frontend framework/build/routing tooling Product Engine technical resolution aşamasında belirlenir.
- Continuation expected: YES — müşteri kabulü sonrası aynı codebase üzerinde devam edebilmelidir.
- Approved zero-build constraint yoktur.
- Package-managed, component/module-oriented ve repeatable dev/build/preview workflow beklenir.
- Multi-page architecture gerçek routable/navigable surfaces üretmelidir.
- Clean service/data-access boundary korunmalıdır.
- Backend current scope değilse sahte endpoint/database schema/production integration contract uydurulmamalıdır.

## 12. Veri / Entegrasyonlar

- İlk demo için database gereksinimi yoktur.
- İlk demo için external API gereksinimi yoktur.
- Mock/local project data kullanılabilir.
- Future backend/data source için replaceable adapter boundary korunmalıdır.

## 13. Tasarım Yönü

- Modern, temiz, profesyonel endüstriyel/teknik corporate language.
- Güven, teknik uzmanlık, precision ve profesyonellik öne çıkmalı.
- Generic `lacivert hero + üç kart + standart footer` sector-template pattern'i kullanılmamalı.
- Multi-page site boyunca visual system tutarlı fakat page composition'ları kendi görevlerine göre farklılaşmış olmalı.
- Hizmet detail pages yalnız aynı kartların büyütülmüş kopyası gibi görünmemeli; source-safe içerik sınırı içinde page-specific composition üretilebilir.
- Güçlü typography, spacing, technical/grid/diagram inspired surfaces ve controlled motion kullanılabilir.
- **Antrasit/koyu teknik yüzey + amber/turuncu precision accent yönü tercih edilen ve önceki demo görselinde beğenilen bir creative direction'dır; resmi brand color/fact değildir.** Engine bunu proje-specific design decision olarak kullanabilir veya aynı karakteri koruyan eşdeğer kaliteli solution üretebilir.
- Masaüstü ve mobil birlikte planlanmalı.

## 14. Deployment / Operasyonlar

- Production deployment current scope değildir.
- Demo local veya suitable demo environment'ta çalıştırılabilir.
- Hosting/domain/monitoring/backup future approved scope'tur.

## 15. Daha Önce Alınmış Önemli Kararlar

- Project type source hint: `corporate-website`.
- Delivery profile source hint: `Prototype`.
- Implementation planning source hint: `standard`.
- Design planning source hint: `standard`.
- Desired site architecture: Home + Corporate + Services + 3 service-detail pages + Contact.
- Single-page landing reduction hedef değildir.
- Unknown company facts uydurulmayacaktır.
- Demo scope code/design/architecture/page breadth quality floor'unu düşürmeyecektir.
- Same-codebase continuation + clean service/data boundary korunacaktır.

## 16. Bilinen Kısıtlar

- Müşteri tarafından doğrulanmış production brief değildir; proaktif sales demo source'udur.
- Yalnız bu source'taki explicit company/domain facts factual truth kabul edilir.
- Page architecture presentation structure organize eder; yeni company fact authorize etmez.
- Gereksiz backend/panel/operational complexity eklenmemeli.
- Tasarım başka Engine çıktılarının görünümünü kopyalamamalı.

## 17. Bilinmeyenler / Açık Sorular

- Resmi logo/brand assets yüksek kaliteli source olarak sağlanacak mı?
- Exact telefon/e-posta/adres final demoda kullanılacak mı ve source truth olarak sağlanacak mı?
- Hizmetler için source-backed ek teknik detail/image sağlanacak mı?
- Firma referansları/projects/testimonials daha sonra doğrulanacak mı?
- Future scope'ta form/map/WhatsApp istenecek mi?
- Production aşamasında admin/CMS ihtiyacı olacak mı?

Bu unresolved items current approved page architecture'ı bloke etmez; source-backed olmadığı sürece current pages bunları factual content gibi kullanamaz.

## 18. Başarı Kriterleri

- Demo ilk bakışta modern, premium ve profesyonel corporate website hissi vermeli.
- Tek-page landing page / generic template hissi vermemeli.
- Global navigation ayrı approved pages arasında gerçek navigation sağlamalı.
- Home, Corporate, Services, 3 Service Detail ve Contact responsibilities açıkça hissedilmeli.
- Firma/yetkili servis statüsü ve approved services hızlı anlaşılmalı.
- Hizmet overview → detail discovery flow çalışmalı.
- Mobile/desktop cross-page experience sales görüşmesinde gösterilecek kalitede olmalı.
- Source-backed olmayan company truth üretilmemeli.
- Frontend same codebase üzerinde future backend/CMS/page growth'e structural rewrite olmadan devam edebilmeli.
- `implementation_planning: standard` active wave'leri fresh agent için ikinci planning pass gerektirmemeli.
- `design_planning: standard` approved page setine page-specific design coverage sağlamalı.

## 19. Özel Talimatlar

- Normal runtime external web research yapmaz.
- Source dışından factual enrichment yapılamaz.
- Missing factual info open question olarak kalır.
- Teknik implementation decisions Engine-resolved olabilir; company/domain claims source-backed olmalıdır.
- Intake agent exact PAGE IDs ile Proposed Site Architecture sunmalı ve user explicit approval'ı almadan approved input oluşturulmamalıdır.

## 20. Referanslar

- Project-start skeleton: `project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md`
- Phase A prompt: `project-start/templates/AGENT_START_PROMPT_TEMPLATE.md`
- Site architecture authority: `engine/SITE_ARCHITECTURE_RULES.md`
- Planning profiles authority: `engine/PLANNING_PROFILES.md`

---

## Handoff Kuralı

Bu dosya project source material'dir; final Engine input değildir. Intake agent source'u canonical pending PROJECT_INPUT'a normalize eder, proposed/known PAGE registry + profiles'i user'a görünür sunar, explicit approval alır, approved input oluşturur ve STOP eder. Runtime yalnız approved input üzerinden fresh session'da devam eder.
