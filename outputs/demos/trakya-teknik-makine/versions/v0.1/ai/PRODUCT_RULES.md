# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-001 (Doğrulanmış İçerik Kuralı):** Sitede sunulan tüm kurumsal bilgiler, hizmet isimleri, Disan Hidrolik yetkili servisliği ve iletişim bilgileri yalnızca doğrulanmış mevcut site kaynaklarına dayanmalıdır. Müşteri tarafından onaylanmamış yeni hizmet, sertifika veya başarı iddiaları uydurulamaz.
- **PR-BUS-002 (Üç Temel Hizmet Vurgusu):** Sitede 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) eşit görsel ağırlıkla fakat net kategori ayrımlarıyla sunulmalıdır.
- **PR-BUS-003 (Yetkili Servis Statüsü):** Firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğu bilgisi Ana Sayfa ve Kurumsal alanlarda güven rozeti / yetkinlik vurgusu olarak belirgin şekilde yer almalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-BEH-001 (İletişim CTA Davranışı):** Telefon numaralarına tıklatıldığında mobil/destekleyen cihazlarda `tel:` protokolü, e-posta adreslerine tıklatıldığında `mailto:` protokolü çalışmalıdır.
- **PR-BEH-002 (Statik Mock Veri Kısıtı):** Demo aşamasında backend olmadığı için dinamik form gönderimleri istemci tarafında mock başarı bildirimi (toast/modal feedback) ile simüle edilmeli; gerçek sunucu isteği gibi gösterilmemelidir.
- **PR-BEH-003 (Throwaway Olmayan Veri Katmanı):** Mock veri yapıları presentation component'lerinin içine doğrudan hardcode edilmemeli, modüler JS data/service katmanından çekilmelidir.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-001 (Demo Sınırı):** Proje bir frontend tanıtım prototipidir. Kullanıcı girişi, kayıt paneli, ödeme sistemi veya e-ticaret altyapısı kapsam dışındadır.
- **PR-SCP-002 (Admin/CMS Sınırı):** İçerik yönetim paneli veya CMS entegrasyonu ilk demo kapsamına dahil değildir.
- **PR-SCP-003 (Gelecek Entegrasyon Sınırı):** İleride eklenebilecek WhatsApp desteği veya online teklif talep modülleri arayüzde temiz genişleme noktaları olarak bırakılabilir fakat sahte backend kontratına zorlanamaz.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-001 (3 Saniye Anlaşılabilirlik Rule):** Ziyaretçi ana sayfaya ulaştığında 3 saniye içinde firmanın ne yaptığını, hangi bölgede çalıştığını ve yetkili servis statüsünü anlayabilmelidir.
- **PR-UX-002 (Responsive Hiyerarşi):** Masaüstü ve mobil ekranlarda aynı içerik bütünlüğü korunmalı; mobil menü ve hızlı erişim butonları dokunmatik kullanıma tam uyumlu olmalıdır.
- **PR-UX-003 (Erişilebilirlik Tabanı):** Yüksek kontrastlı renk rolleri, okunabilir tipografi ve net odaklanma (focus) durumları sağlanmalıdır.
