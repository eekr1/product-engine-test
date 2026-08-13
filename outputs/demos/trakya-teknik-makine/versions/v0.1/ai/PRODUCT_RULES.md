# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **Kurumsal Doğruluk Kuralı:** Demoda sunulan firma ismi (Trakya Teknik Makine), yetkili servis kimliği (Disan Hidrolik Trakya Yetkili Servisi) ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) mevcut doğrulanmış bilgilerle tam uyumlu olmalıdır.
- **Kanıtlanmamış Bilgi Yasağı:** Firma hakkında müşteri tarafından açıkça doğrulanmamış yeni başarı iddiaları, sertifikalar, müşteri referansları veya 7/24 kesintisiz müdahale gibi kanıtlanmamış taahhütler uydurulmamalıdır.
- **Satış Demosu Odaklılık:** Tüm içerik ve kullanıcı akışları, satış görüşmesinde firmanın yetkinliğini ve profesyonelliğini en yüksek seviyede yansıtacak biçimde kurgulanmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **Hızlı Bilgilendirme:** Ziyaretçi ana sayfaya girdiğinde ilk 3 saniye içinde firmanın kimliğini ve ana faaliyet alanlarını kavrayabilmelidir.
- **Etkileşim Sınırları:** İletişim butonları (telefon ve e-posta), ilgili mobil cihazlarda doğrudan arama/e-posta başlatma CTA'sı olarak çalışmalıdır.
- **Demo Veri Ayrımı:** Demo verileri UI sunum bileşenleri içine hardcode gömülmemeli, typed mock data adapter üzerinden okunmalıdır.

## 3. Kapsam Sınırları ve Kuralları

- **Kapsam İçi:** Responsive masaüstü ve mobil kurumsal demo, modern visual direction, 3 hizmet kartı/detay bölümü, yetkili servis vurgusu, hızlı iletişim kanalları.
- **Kapsam Dışı:** Gerçek admin paneli, kullanıcı oturum açma (auth), canlı backend API entegrasyonu, ödeme sistemleri, production hosting.
- **Gelecek Kapsam:** Satış sonrası entegre edilebilecek canlı iletişim formu API'si, dinamik yedek parça stok sorgulama ve WhatsApp destek hattı.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **Mobil Uyumluluk (Responsive Baseline):** Demo, mobil telefon ve masaüstü ekranlarda kırılma veya taşma olmadan satış sunumu yapılabilecek kalitede responsive olmalıdır.
- **Erişilebilirlik ve Okunabilirlik:** Yüksek kontrastlı tipografi, net buton etiketleri ve endüstriyel güven yansıtan temiz spacing düzeni kullanılmalıdır.
- **Sektör Klişelerinden Kaçınma:** Sanayi sektörü diye otomatik koyu lacivert + turuncu + 3 kutulu hero gibi generic template yaklaşımlarına teslim olunmamalı, projeye özel visual concept kurulmalıdır.
