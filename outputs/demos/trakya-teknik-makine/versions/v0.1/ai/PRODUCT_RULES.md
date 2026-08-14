# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-01 (Veri Doğruluğu)**: Sitede sunulan firma unvanı, iletişim detayları, Disan Hidrolik Yetkili Servisliği beyanı ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) mevcut sitedeki doğrulanmış verilerle tam uyumlu olmalıdır.
- **PR-02 (Kanıtlanmamış İddia Yasağı)**: Müşteri veya firma tarafından açıkça doğrulanmamış yeni müşteri referansı, kalite sertifikası, başarı iddiası veya teknik kapasite beyanı üretilmeyecek ve demoya eklenmeyecektir.
- **PR-03 (Service Focus)**: Ziyaretçinin ilk 5 saniye içinde firmanın ne yaptığını, hangi bölgede çalıştığını (Trakya Bölgesi) ve yetkili servis kimliğini anlaması sağlanmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-01 (Demo Boundary)**: Demo frontend düzeyinde kalmalıdır. Gerçek sunucu bağlantısı, veritabanı veya admin paneli taklidi yapılmayacaktır.
- **BC-02 (Hızlı İletişim Aksiyonları)**: Telefon numarasına tıklamak ilgili cihazda arama başlatmalı (`tel:`), e-posta adresine tıklamak e-posta uygulamasını açmalıdır (`mailto:`).
- **BC-03 (Data-Access Boundary)**: Presentation katmanı bileşenleri veriyi doğrudan hardcode etmeyecek, soyut service provider katmanından okuyacaktır.

## 3. Kapsam Sınırları ve Kuralları

- **SR-01 (Kapsam İçi Yüzeyler)**: Ana Sayfa, Kurumsal/Hakkımızda, Hizmetlerimiz (3 detay hizmet yüzeyi), İletişim ve Yetkili Servislik Güven Bölümü.
- **SR-02 (Kapsam Dışı İşlevler)**: Admin paneli, içerik yönetim sistemi (CMS), veritabanı CRUD işlemleri, kullanıcı girişi, online satış/ödeme.
- **SR-03 (Gelecek Kapsam)**: Canlı backend API bağlantısı, dinamik teklif formu işleme, CMS yönetimi.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-01 (Mobil Öncelikli Responsive Deneyim)**: Sitenin tüm bölümleri akıllı telefonlar, tabletler ve masaüstü ekranlarda kırılma veya kayma olmadan sorunsuz çalışmalıdır.
- **UX-02 (Erişilebilirlik ve İletişim Kolaylığı)**: Mobil görünümde sabit veya kolay erişilebilir bir "Hemen Ara" / İletişim butonu bulunmalıdır.
- **UX-03 (Görsel Hiyerarşi)**: 3 temel hizmet (Yedek Parça, Teknik Destek, Bakım-Onarım) görsel olarak eşit ağırlıkta ve ayırt edilebilir kartlar/bölümler halinde sunulmalıdır.
