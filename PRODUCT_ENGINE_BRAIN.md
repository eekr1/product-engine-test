# Product Engine Brain

## Ne Üretir?

Product Engine, projelerde kullanılan AI dokümantasyon yapısını standartlaştırır.

Her proje için:

- hangi AI dosyalarının oluşturulacağını belirler,
- bu dosyaların şablonlarını yönetir,
- proje bilgilerini ilgili belgelere doğru şekilde dağıtır,
- belgeler arasındaki tutarlılığı korur,
- proje ilerledikçe dokümantasyonun güncel kalmasını sağlar.

Amaç, yeni bir proje fikri tanımlandıktan sonra ihtiyaç duyulan bütün AI ve proje belgelerinin kullanıma hazır hâlde oluşturulmasıdır.

Bu sayede kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmez. Ajan; ürünün amacını, kurallarını, mimarisini, mevcut durumunu, kararlarını ve sıradaki görevleri doğrudan proje belgelerinden öğrenerek üretime başlayabilir.

---

## Girdi Sebagai Ne Alır?

- Projenin fikri ve amacı
- Ürün gereksinimleri
- Kullanıcı türleri ve temel akışlar
- Teknik tercihler ve kısıtlamalar
- Tasarım tercihleri
- Hazır AI dosyası şablonları
- Projeye özel ek bilgiler
- İstenirse mevcut proje dosyaları ve dokümantasyon

---

## Çıktı Sebagai Ne Verir?

Projeye göre uyarlanmış, birbiriyle tutarlı ve doğrudan kullanılabilir dokümantasyon paketi:

- AI dokümantasyon dosyaları
- Proje planı
- Teknik bağlam
- Ürün kuralları
- Mimari kararlar
- Mevcut durum belgesi
- Sonraki görevler
- Ajan çalışma talimatları
- Tasarım kuralları
- Wave Map ve ayrıntılı Wave Plan
- README
- Deployment ve yapılandırma belgeleri
- Gerekli klasör ve dosya şeması

---

## Model Bağımsızlığı İlkesi

Product Engine belirli bir AI modeline, sağlayıcıya veya özel araç zincirine bağımlı değildir.

Markdown okuyabilen, dosya yazabilen ve kuralları uygulayabilen herhangi bir yetkin ajan Product Engine rolünü yerine getirebilir. Ajanların değişmesi dokümantasyon standardını ve kalitesini etkilemez.

---

## İlk Çalışan Sürüm Ne Yapar?

İlk çalışan sürüm (V0):

1. Kullanıcıdan yapılandırılmış proje bilgilerini alır.
2. Oluşturulacak doküman paketini seçer.
3. Hazır şablonları proje bilgileriyle doldurur.
4. Bilgileri doğru belgeler arasında dağıtır.
5. Belgeler arasındaki temel çelişkileri kontrol eder.
6. Kullanıma hazır proje dokümantasyon paketini üretir.

İlk sürümün kod üretmesi gerekmez. Başarılı sayılması için, yeni bir proje tanımından ajanların doğrudan çalışmaya başlayabileceği eksiksiz ve tutarlı bir dokümantasyon paketi üretmesi yeterlidir.

---

## Temel Sınırlar

- **Brain kural detaylarının deposu değildir:** Çalışma zamanı sözleşmelerinin detayları `engine/` klasöründedir.
- **Brain sürüm ve durum belgesi değildir:** Aktif sürüm otoritesi root `README.md`, sürüm geçmişi otoritesi `logs/ENGINE_CHANGELOG.md`'dir.
- **Brain build takibi yapmaz:** Klasör yapım geçmişi ve entegrasyon durumları `planning/BUILD_STATUS.md` ve ilgili log dosyalarında tutulur.
