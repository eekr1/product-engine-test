# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **BR-01 (Firma Kimliği Bütünlüğü)**: Sitede yer alan firma unvanı "Trakya Teknik Makine" olarak sunulmalıdır.
- **BR-02 (Yetkili Servis Vurgusu)**: Firmanın "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" olduğu bilgisi ana sayfada ve header/hero alanında görünür biçimde konumlandırılmalıdır.
- **BR-03 (Üç Temel Hizmet Kapsamı)**: Hizmetler bölümü tam olarak 3 ana dikey üzerinden sunulmalıdır:
  1. *Yedek Parça Temini*
  2. *Yerinde Teknik Destek*
  3. *Makine Bakım ve Onarım*
- **BR-04 (Gerçek Veri Doğruluğu)**: Mevcut web sitesinde doğrulanmamış yeni sertifika, müşteri logosu veya uydurma iddialar gösterilmemelidir.

---

## 2. Davranış ve Akış Kısıtlamaları

- **BC-01 (Statik/Mock Veri Modeli)**: Demo frontend altyapısında backend veritabanı veya canlı API yoktur. İletişim formu gönderimleri kullanıcıya basarili geri bildirim modalı/toast gösteren client-side simülasyon olarak çalışır.
- **BC-02 (Doğrudan İletişim Bağlantıları)**: Telefon numaraları mobil cihazlarda tıklanabilir (`tel:`) olmalı, e-posta adresleri varsayılan e-posta istemcisini tetiklemelidir (`mailto:`).
- **BC-03 (Navigasyon Kısıtı)**: Menü bağlantıları (Ana Sayfa, Kurumsal, Hizmetlerimiz, İletişim) kesintisiz biçimde ilgili sayfa/bölümlere yumuşak geçiş (smooth scroll veya sayfa yönlendirmesi) yapmalıdır.

---

## 3. Kapsam Sınırları ve Kuralları

- **SR-01 (E-Ticaret Yasaklama)**: Demo aşamasında sepete ekleme, online ödeme veya fiyatlandırma tablosu yer almayacaktır.
- **SR-02 (Admin Paneli İzolasyonu)**: Giriş yapma, şifre sıfırlama veya içerik düzenleme paneli demo kapsamında bulunmaz.
- **SR-03 (Dış API Bağımsızlığı)**: Dış bağımlılıkların kesilmesi veya internet erişiminin olmaması durumunda dahi demo tam işlevsel şekilde çalışmalıdır.

---

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-01 (Responsive Düzen)**: Tasarım 320px mobil ekranlardan 1920px geniş masaüstü ekranlara kadar tam duyarlı (responsive) olmalıdır.
- **UX-02 (Hızlı Erişim CTA)**: Mobil görünümde sabit veya kolay erişilebilir "Hemen Ara" ve "Teklif Al / İletişim" butonları bulunmalıdır.
- **UX-03 (Güven ve Kurumsallık)**: Görsel unsurlar endüstriyel güvenilirlik, teknik titizlik ve kaliteli servis hissi uyandırmalıdır.
