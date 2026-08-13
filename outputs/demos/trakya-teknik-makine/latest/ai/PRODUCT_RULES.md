# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Veri Doğruluğu & FCL Uyumu)**: Sitede yer alan firma unvanı ("Trakya Teknik Makine"), yetkili servislik ("Disan Hidrolik Makine Trakya Bölge Yetkili Servisi") ve 3 ana hizmet ("Yedek Parça Temini", "Yerinde Teknik Destek", "Makine Bakım ve Onarım") ifadeleri doğrulanmış kaynaklarla birebir uyumlu olmalıdır (FCL-001 .. FCL-006). Kanıtlanmamış yeni hizmet, sertifika veya referans iddiası eklenemez.
- **PR-002 (Kurumsal Güven Vurgusu)**: Ziyaretçi ilk 3 saniyede firmanın faaliyet alanını, Disan Hidrolik yetkili servisliğini ve Trakya bölgesindeki hizmet kapsamını anlayabilmelidir.
- **PR-003 (Net İletişim Erişimi)**: Masaüstü ve mobil ekranlarda telefon ve e-posta iletişim kanallarına erişim tek tık uzaklıkta olmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-001 (Mock Data Boundary)**: Presentation katmanı veriyi doğrudan hardcoded UI component'lerinden değil, mock data service adapter üzerinden okumalıdır.
- **BC-002 (Sahte Backend Yasağı)**: Demo kapsamında sahte REST endpoint'leri, sahte veritabanı şeması veya backend contract'ları uydurulmayacaktır.
- **BC-003 (Siteden Ayrılmama Kuralı)**: Harici yönlendirme bağlantıları (Disan Hidrolik vb.) haricinde tüm navigasyon akışları demo içinde bütünlüklü çalışmalıdır.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (Kapsam İçi)**: Kurumsal tanıtım, 3 ana hizmetin görsel ve içerik sunumu, Disan Hidrolik yetkili servis rozeti/bölümü, iletişim CTA'ları ve responsive layout.
- **SR-002 (Kapsam Dışı)**: Yönetim paneli (CMS), veritabanı entegrasyonu, kullanıcı girişi/kaydı, e-ticaret/online ödeme, canlı domain yayını.
- **SR-003 (Gelecek Kapsam - Future Boundary)**: Canlıya alma durumunda mock adapter yerine real API adapter bağlanabilecektir.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UXR-001 (Responsive Hiyerarşi)**: Masaüstü görünümdeki zengin kompozisyon, mobil ekranlarda sıkışıklık yaratmadan dikey akışa dönüşmelidir.
- **UXR-002 (Hizmet Keşfi Etkileşimi)**: Her bir hizmet kartı (Yedek Parça, Yerinde Destek, Bakım-Onarım) kısa özet + teknik yetkinlik vurgusu içermelidir.
- **UXR-003 (CTA Davranışı)**: Mobil cihazlarda telefon numarası CTA'ı doğrudan arama başlatmalı (`tel:`), e-posta CTA'ı posta uygulamasını açmalıdır (`mailto:`).
