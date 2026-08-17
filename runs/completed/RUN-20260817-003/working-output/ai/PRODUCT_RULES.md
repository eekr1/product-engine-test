# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Kurumsal Kimlik Presentation)**: Web sitesi demosu, Trakya Teknik Makine'nin adını ve "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" unvanını ana kurumsal tanıtım alanında net ve belirgin biçimde sunmalıdır.
- **PR-002 (Doğrulanmış Üç Hizmet Sunumu)**: Sadece source-backed olarak doğrulanmış üç temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) sunulmalıdır.
- **PR-003 (Direct-Contact CTA Kuralları)**: İletişim butonları/yüzeyleri telefon (`tel:`) ve e-posta (`mailto:`) direct-contact CTA capability sunmalıdır. Exact değerler source truth olmadan uydurulmayacak; presentation service boundary üzerinden yönetilecektir.
- **PR-004 (Factual Allowlist Sınırı)**: Metinlerde veya tasarımlarda source-backed olmayan hiçbir firma gerçeği, stok, orijinal parça, belirli marka garantisi, mobil filo, acil müdahale, SLA, müdahale süresi, periyodik bakım veya revizyon gibi uydurma qualifier'lar KULLANILAMAZ.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-001 (No Invented Backend)**: Frontend demo içerisinde sahte backend submit, sahte API endpoint'i veya veritabanı simülasyonu çalıştırılamaz.
- **BC-002 (No Invented Interaction Capabilities)**: Approved scope'ta bulunmayan form, canlı harita, WhatsApp entegrasyonu, arama/filtreleme, modal pop-up veya yetkilendirme akışları tasarıma veya koda eklenemez.
- **BC-003 (Clean Presentation Data Access)**: Presentation verisi (hizmet kartları metni, CTA etiketleri vb.) component JSX'ine hardcode edilmeyip presentation service boundary (`src/services/presentationService.js`) üzerinden çekilmelidir.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (Demo/Prototype Scope Boundary)**: Bu proje proaktif bir satış frontend demosudur. Gelecekte eklenebilecek backend, CMS, canlı harita veya WhatsApp entegrasyonları bugünkü demo kapsamına dahil edilemez.
- **SR-002 (Trakya Bölgesi Bağlamı)**: Bölge vurgusu genel Trakya bölgesi bağlamında tutulmalı; source truth olmadan spesifik şehir, ilçe veya fiziksel adres iddiasına dönüştürülmemelidir.
- **SR-003 (No Placeholder Data)**: Tasarımı doldurmak uğruna sahte adres, sahte vergi no, uydurma sertifika veya sahte müşteri yorumları eklenemez. Eksik bilgiler açık soru (Open Question) olarak korunmalıdır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-001 (Responsive Integrity)**: Masaüstü, tablet ve mobil cihazlarda akıcı, okunabilir ve profesyonel görünüm sağlanmalıdır.
- **UX-002 (Anti-Clique Visual Hierarchy)**: Sektör klişesi olan "lacivert hero + 3 kart + standart footer" kalıbı kullanılmamalı; modern tipografi, dengeli kompozisyon ve özgün yüzey mimarisi uygulanmalıdır.
- **UX-003 (Direct Contact Capability)**: Mobil cihazlarda telefon CTA'sına dokunulduğunda arama başlatma dialer'ı, e-posta CTA'sına dokunulduğunda e-posta istemcisi tetiklenebilmelidir.
