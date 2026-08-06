# Product Engine

## Ne üretir?

Olayımız projelerin içinde olan ai dosyalarını tek şablon altında toplamak ve her proje için oluşturulacak ai dosyalarını belirlemek, şablonunu ayarlamak ve bunu sürekli hale getirmektir. Daha sonrada bunları tam otomatik hale getirmek. Yani bir projeye başlarken böyle bi proje yapıcaz dedikten sonra tüm o dosyalar hazır istediğimiz gibi hazırlanıcak ve agentler direk üretime başlicak. Agent'in hangisi olduğu bile farketmicek çünkü tüm bilgiler zaten elinde olucak.

## Girdi olarak ne alır?

Proje bilgileri, ai dosyalarıyla ilgili şablonlar ve şablonlara veya projeye ek bilgiler.

## Çıktı olarak ne verir?

Kullanıma hazır ai döküman dosyaları, wave dosyaları ve genel proje dökümantasyonları.

## İlk çalışan sürüm ne yapar?

Bahsettiğimiz girdileri alır ve bahsettiğimiz çıktıları verir ;).

---------------------------------------

# Product Engine

## Ne üretir?

Product Engine, projelerde kullanılan AI dokümantasyon yapısını standartlaştırır.

Her proje için:

- hangi AI dosyalarının oluşturulacağını belirler,
- bu dosyaların şablonlarını yönetir,
- proje bilgilerini ilgili belgelere doğru şekilde dağıtır,
- belgeler arasındaki tutarlılığı korur,
- proje ilerledikçe dokümantasyonun güncel kalmasını sağlar.

Amaç, yeni bir proje fikri tanımlandıktan sonra ihtiyaç duyulan bütün AI ve proje belgelerinin kullanıma hazır hâlde oluşturulmasıdır.

Bu sayede kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmez. Ajan; ürünün amacını, kurallarını, mimarisini, mevcut durumunu, kararlarını ve sıradaki görevleri doğrudan proje belgelerinden öğrenerek üretime başlayabilir.

## Girdi olarak ne alır?

- Projenin fikri ve amacı
- Ürün gereksinimleri
- Kullanıcı türleri ve temel akışlar
- Teknik tercihler ve kısıtlamalar
- Tasarım tercihleri
- Hazır AI dosyası şablonları
- Projeye özel ek bilgiler
- İstenirse mevcut proje dosyaları ve dokümantasyon

## Çıktı olarak ne verir?

Projeye göre uyarlanmış, birbiriyle tutarlı ve doğrudan kullanılabilir:

- AI dokümantasyon dosyaları
- Proje planı
- Teknik bağlam
- Ürün kuralları
- Mimari kararlar
- Mevcut durum belgesi
- Sonraki görevler
- Ajan çalışma talimatları
- Tasarım kuralları
- Wave Map
- Ayrıntılı Wave Plan
- README
- Deployment ve yapılandırma belgeleri
- Gerekli klasör ve dosya şeması

## İlk çalışan sürüm ne yapar?

İlk sürüm:

1. Kullanıcıdan yapılandırılmış proje bilgilerini alır.
2. Oluşturulacak doküman paketini seçer.
3. Hazır şablonları proje bilgileriyle doldurur.
4. Bilgileri doğru belgeler arasında dağıtır.
5. Belgeler arasındaki temel çelişkileri kontrol eder.
6. Kullanıma hazır proje dokümantasyon paketini üretir.

İlk sürümün kod üretmesi gerekmez. Başarılı sayılması için, yeni bir proje tanımından ajanların doğrudan çalışmaya başlayabileceği eksiksiz ve tutarlı bir dokümantasyon paketi üretmesi yeterlidir.

