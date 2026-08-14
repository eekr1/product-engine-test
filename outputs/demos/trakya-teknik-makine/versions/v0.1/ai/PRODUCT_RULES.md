# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-01 (Firma Kimliği)**: Web sitesinde sunulan firma bilgileri strictly Trakya Teknik Makine'nin doğrulanmış verilerine ve Disan Hidrolik Trakya Bölge Yetkili Servisi unvanına dayanmalıdır.
- **PR-BUS-02 (Hizmet Sunumu)**: Sitede öne çıkarılan 3 ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Bakım & Onarım) net görsel ve teknik vurgularla ayrı ayrı açıklanmalıdır.
- **PR-BUS-03 (Gerçek Bilgi Korunumu)**: Müşteri tarafından onaylanmamış yeni referanslar, sahte kalite belgeleri veya uydurma teknik iddialar ürüne eklenemez.
- **PR-BUS-04 (Demo Semantiği)**: Ürünün Prototype / Satış Demosu olması approved scope dışındaki yetenekleri (canlı harita, WhatsApp widget'ı, form submit backend'i) otomatik olarak authorize etmez.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-BEH-01 (Doğrudan İletişim)**: İletişim CTA noktaları masaüstü ve mobilde doğrudan telefon (`tel:`) ve e-posta (`mailto:`) bağlantıları açmalıdır.
- **PR-BEH-02 (Data Boundary)**: Arayüz bileşenleri veriyi doğrudan presentation koduna gömmemeli; `CompanyService` veri erişim katmanından okumalıdır.
- **PR-BEH-03 (Backend Uydurmama)**: Gerçek backend approved scope'ta olmadığı için sahte API veya database schema uydurulmamalı, mock adapter ile frontend temiz tutulmalıdır.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-01 (Kapsam İçi)**: Ana sayfa hero karşılama, yetkili servis vurgusu, 3 hizmet alanı sunumu, kurumsal güven bilgileri, responsive navigation, doğrudan iletişim CTA'ları.
- **PR-SCP-02 (Kapsam Dışı)**: Admin paneli / CMS backend, veritabanı, kullanıcı girişi / kimlik doğrulama, e-ticaret, form backend gönderimi, interaktif Google Maps, WhatsApp widget'ı.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-01 (Responsive Uyumluluk)**: Tüm sayfalar ve bileşenler mobil, tablet ve masaüstü ekran boyutlarında kusursuz hiyerarşi ve okunabilirlik sunmalıdır.
- **PR-UX-02 (Kurumsal Prestij)**: Görsel tasarım generic kurumsal template hissi vermemeli; modern endüstriyel tipografi, renk tonlaması ve micro-interaction'lar ile özel olarak kurulmalıdır.
- **PR-UX-03 (Hızlı İletişim Erişimi)**: Kullanıcı sitenin hangi bölümünde olursa olsun telefon veya e-posta iletişim bağlantılarına tek tıkla ulaşabilmelidir.
