# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PRULE-001 (Doğrulanmış Bilgi İlkesi):** Web sitesinde sunulan firma adı, hizmetler, iletişim bilgileri ve Disan Hidrolik Trakya Bölge Yetkili Servisi kimliği doğrulanmış mevcut siteden (`trakyateknikmakine.com`) aktarılacaktır. Doğrulanmamış başarı iddiaları, sertifikalar veya referanslar türetilmeyecektir.
- **PRULE-002 (Hizmet Sunum Kuralı):** 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) eşit görsel ağırlıkta ve açık açıklama metinleriyle sunulmalıdır.
- **PRULE-003 (Yetkili Servis Vurgusu):** Disan Hidrolik Makine yetkili servisliği ana sayfada ve kurumsal alanlarda belirgin güven rozeti/metni olarak görünmelidir.
- **PRULE-004 (İletişim Odaklılık):** Ziyaretçi sitedeki her sayfadan veya ana bölümden telefon (`tel:`) ve e-posta (`mailto:`) iletişim CTA'larına en fazla 1 tıklama ile ulaşabilmelidir.

## 2. Davranış ve Akış Kısıtlamaları

- **PRULE-005 (Frontend Demo Sınırı):** Demo aşamasında sunucu taraflı form işleme, veritabanı kaydı veya canlı e-posta gönderimi yapılmayacaktır. İletişim formu yerel doğrulama ve kullanıcıya başarılı simülasyon geri bildirimi verecektir.
- **PRULE-006 (Gezinme Bütünlüğü):** Ana gezinme menüsü (Header/Nav) ve sayfa altı (Footer) tüm ekran boyutlarında erişilebilir ve tutarlı kalacaktır.
- **PRULE-007 (Erişilebilirlik ve Odak):** CTA butonları ve iletişim bağlantıları klavye gezintisini ve ekran okuyucu etiketlerini (`aria-label`) desteklemelidir.

## 3. Kapsam Sınırları ve Kuralları

- **PRULE-008 (Yasaklı Kapsam):** Demo sürümünde admin paneli, kullanıcı girişi, ödeme altyapısı, sepet/e-ticaret ve sahte canlı sohbet arayüzleri yer alamaz.
- **PRULE-009 (Integration Boundary):** UI presentation bileşenleri mock dataya sıkı sıkıya bağlı olmayacak; mock adapter katmanı üzerinden veri çekecektir.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PRULE-010 (Responsive Davranış):** Mobil cihazlarda (320px+), tabletlerde ve masaüstü ekranlarda (1440px+) yerleşim kırılması (overflow/overlap) yaşanmamalıdır.
- **PRULE-011 (Performans ve Hız):** Görseller optimize edilmiş biçimde yüklenmeli, sayfa açılışında gecikmeye sebep olunmamalıdır.
