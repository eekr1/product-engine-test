# Project Start Scenario Template

Bu tek şablonu, Product Engine projeyi canonical intake/input yaşam döngüsüne normalize etmeden önce her yapılandırılmış proje başlangıç kaynak dosyası için kullan.

Projeye özel şema varyantları oluşturma. Her proje instance'ı bu başlık sırasını korumalıdır. Bir bölüm uygulanabilir değilse veya henüz bilinmiyorsa `N/A`, `Yok` veya `Tanımlanmadı` kullan.

## 1. Proje Kimliği

- Proje adı:
- Proje slug'ı:
- Proje türü:
- Proje modu: yeni / mevcut
- Delivery profile: Foundation / Prototype / Implementation Ready / Production Ready / Tanımlanmadı
- Implementation planning: standard / full / Tanımlanmadı
- Design planning (UI/UX applicable ise): light / standard / full / Tanımlanmadı
- Tek cümlelik açıklama:
- Sahip / müşteri:

> Planning profile değerleri kaynak dosyada belirtilmiş olsa bile canonical approved input gerçeği hâline gelmeleri için Product Engine intake/approval sürecinden geçmelidir. Ayrıntılar: `engine/PLANNING_PROFILES.md` ve `engine/PROJECT_INTAKE.md`.

## 2. Problem / Amaç

Proje hangi problemi çözüyor, hangi ihtiyaca hizmet ediyor ve neden var olmalı?

## 3. Ürün / İş Bağlamı

Projeyi maddi olarak etkileyen ürün, müşteri, iş, ticari, iç kullanım, demo, doğrulama veya operasyonel bağlamı açıkla.

Demo/prototype ise bunun teslim scope'unu sınırladığını ancak kalite veya mimari standartlarını düşürmediğini belirtmek için gerekli bağlamı ekle.

## 4. Hedef Kullanıcılar

### Birincil Kullanıcılar

- 

### İkincil Kullanıcılar

- 

## 5. Temel Kullanıcı Akışları

Kullanıcıların baştan sona tamamlayabilmesi gereken en önemli eylemleri açıkla.

- 

## 6. Kapsam

### Kapsam Dahili

- 

### Kapsam Dışı

- 

## 7. Fonksiyonel Gereksinimler

- 

## 8. Mevcut Durum

Bugün hâlihazırda var olan şeyi açıkla: yalnızca fikir, araştırma, tasarım, kod, deploy edilmiş ürün, kullanıcılar, entegrasyonlar, dokümantasyon, kısmi implementasyon veya diğer yerleşik durumlar.

## 9. Mevcut Varlıklar / Kaynak Materyal

Mevcut repo'ları, dokümanları, kodu, API'leri, veritabanlarını, ekran görüntülerini, tasarım dosyalarını, içerikleri, müşteri materyallerini, referans siteleri, kimlik bilgisi sınırlarını veya diğer yeniden kullanılabilir kaynakları listele.

- 

## 10. Teknik Bağlam / Tercihler

Bilinen veya tercih edilen stack, mimari, frontend/backend/database ayrımı, entegrasyonlar, hosting, deployment, repository, platform, environment, uyumluluk veya implementasyon kısıtlarını belirt.

Frontend/demo projelerinde backend henüz kapsamda olmasa bile, biliniyorsa şu entegrasyon readiness bağlamını belirt:

- Veri bugün nereden geliyor?
- Mock/local data nerede tutulmalı?
- UI ile data/service katmanı arasında bilinen sınır var mı?
- Gerçek backend daha sonra eklenecekse entegrasyon beklentisi nedir?
- Kesinleşmemiş backend/API kararları hangileridir?

Bilinmeyen teknik kararları uydurma; `Tanımlanmadı` kullan.

## 11. Veri / Entegrasyonlar

Bilinen veri kaynakları, depolama ihtiyaçları, API'ler, üçüncü taraf servisler, authentication, dış sistemler, import/export ihtiyaçları veya entegrasyon kısıtlarını belirt.

Gerçek backend/API henüz kapsamda değilse bunu açıkça belirt; yalnızca gelecekte bağlantıyı kolaylaştıracak boundary beklentisini kaynak bağlam olarak kaydet.

## 12. Tasarım Yönü

Bilinen görsel yön, marka kuralları, referans ürünler/siteler, tasarım dili, responsive gereksinimler, erişilebilirlik beklentileri veya mevcut tasarım kısıtlarını belirt.

Sektör klişelerini (`sanayi = lacivert`, `SaaS = mor gradient` vb.) tasarım kararı gibi yazma. Eğer kullanıcı kesin bir tasarım yönü vermediyse projeye özgü, modern ve non-generic bir visual concept geliştirilmesi gerektiğini belirt; spesifik renk/tema uydurma.

## 13. Deployment / Operasyonlar

Bilinen ortamlar, domain'ler, hosting sağlayıcıları, release beklentileri, monitoring, backup, operasyonel sahiplik veya diğer deployment bağlamını belirt.

## 14. Daha Önce Alınmış Önemli Kararlar

Daha yüksek bir Product Engine authority ile çelişmedikçe korunması gereken doğrulanmış kararları kaydet.

- 

## 15. Bilinen Kısıtlar

Bütçe, deadline, platform, compliance, dependency, compatibility, müşteri, içerik, operasyonel, hukuki, güvenlik veya diğer kesin kısıtları belirt.

- 

## 16. Bilinmeyenler / Açık Sorular

Eksik, belirsiz, kararsız veya doğrulama gerektiren önemli bilgileri listele.

- 

## 17. Başarı Kriterleri

İlk anlamlı sürümün, demonun, milestone'un veya teslimatın başarılı sayılması için nelerin doğru olması gerekir?

Başarı kriterleri yalnızca görsel tamamlanmayı değil, applicable olduğunda agent-readiness, temiz mimari sınırlar ve gelecekteki entegrasyonların gereksiz yeniden yazım olmadan yapılabilmesini de kapsamalıdır.

- 

## 18. Özel Talimatlar

Product Engine işlemesi açısından önemli olan ancak yukarıdaki bölümlere ait olmayan projeye özel talimatları belirt.

- 

## 19. Referanslar

İlgili URL'leri, repository path'lerini, dosyaları, ekran görüntülerini, dokümanları, rakip/referans ürünleri veya izlenebilir diğer kaynak materyalleri listele.

- 

---

## Handoff Kuralı

Bu dosya proje kaynak materyalidir; canonical Product Engine contract'ı veya final Engine input'u değildir.

Ajan bu dosyayı Product Engine'in yetkili read order, intake, planning profile, package/document selection, lifecycle, validation, approval, run, output, logging ve archive contract'ları üzerinden işlemelidir. Eksik bilgiler, spekülatif varsayımlar yerine Engine'in mevcut missing-input ve approval davranışıyla ele alınmalıdır.
