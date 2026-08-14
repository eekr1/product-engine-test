# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-01 (Veri Doğruluğu İlkesi):** Sitede sunulan tüm firma bilgileri (adres, telefon, yetkili servislik, hizmet tanımları) mevcut yayındaki sitede (`trakyateknikmakine.com`) yer alan doğrulanmış verilere %100 sadık kalmalıdır. Doğrulanmamış yeni firma iddiaları uydurulamaz.
- **PR-02 (Yetkili Servislik Vurgusu):** Firmanın Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi olduğu gerçeği, site genelinde kurumsal güven ögesi olarak net şekilde vurgulanmalıdır.
- **PR-03 (Üç Temel Hizmet Hiyerarşisi):** Firmanın sunduğu 3 ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) eşit öneme sahip olacak biçimde net başlıklar ve açıklayıcı detaylarla kart/bölüm hiyerarşisinde sunulmalıdır.
- **PR-04 (Doğrudan İletişim Önceliği):** Telefon (`tel:`) ve e-posta (`mailto:`) CTA'ları ziyaretçinin tek tıkla firmaya ulaşmasını sağlayacak şekilde masaüstü ve mobil arayüzlerde sürekli görünür veya kolay erişilebilir olmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-05 (Sahte Backend Yasaktır):** Demo sırasında sahte REST API endpoint'leri, backend veritabanı veya sahte sunucu gecikmeleri üretilmeyecek; veri temiz yerel service adapter (mock data provider) üzerinden sağlanacaktır.
- **PR-06 (Hardcoded Content Yasaktır):** Presentation bileşenlerine içerik doğrudan gömülmeyecek; veriler mock service boundary arayüzünden okunarak UI render edilecektir.
- **PR-07 (Kimlik Doğrulama Yasaktır):** Demoda kullanıcı girişi, üyelik veya auth akışları yer almayacaktır.

## 3. Kapsam Sınırları ve Kuralları

- **PR-08 (Kapsam İçi Sayfa/Bölümler):** Ana Sayfa (Hero, Servisler Özet, Yetkili Servis Vurgusu, Güven Ögeleri, İletişim CTA), Kurumsal / Hakkımızda, Hizmetlerimiz (3 hizmet detaylı), İletişim (İletişim Formu Demo Handler, Adres, Telefon, E-posta).
- **PR-09 (Kapsam Dışı İşlevler):** Admin paneli, CMS, e-ticaret/online ödeme, canlı DNS/domain transferi kapsam dışındadır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-10 (Responsive Uyum):** Arayüz tüm mobil, tablet ve masaüstü ekran çözünürlüklerinde (320px — 1920px+) kayma veya taşma olmadan kusursuz çalışmalıdır.
- **PR-11 (İletişim Formu Demo Davranışı):** İletişim formu doldurulduğunda, client-side doğrulama yapılmalı ve başarı bildirimi (toast/modal) gösterilerek form temizlenmelidir. Herhangi bir sunucuya istek atılmamalıdır.
- **PR-12 (Erişilebilirlik ve Performans):** Semantik HTML5 yapıları, `alt` etiketleri ve yüksek kontrast oranları korunmalıdır.
