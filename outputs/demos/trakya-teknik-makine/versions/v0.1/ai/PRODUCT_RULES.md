# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Firma Kimliği & Statü Sunumu)**: Web sitesi Trakya Teknik Makine'nin firma adını ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ana sayfada belirgin görsel ve metinsel hiyerarşi ile sunmalıdır.
- **PR-002 (3 Approved Hizmet Sunumu)**: Sitede yalnızca approved 3 temel hizmet sunulabilir: `Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`.
- **PR-003 (Factual Claim Sınırı)**: Hizmet isimlerine source-backed olmayan hiçbir ek nitelik, iddia veya süreç qualifier'ı (`stoktan teslim`, `orijinal parça garantisi`, `mobil filo`, `acil müdahale`, `SLA`, `periyodik bakım`, `revizyon` vb.) eklenemez.
- **PR-004 (Direct Contact CTA)**: Telefon (`tel:`) ve e-posta (`mailto:`) direct-contact CTA'ları masaüstü ve mobil cihazlarda kolayca erişilebilir olmalıdır.
- **PR-005 (Bölge ve Sektör Bağlamı)**: Metinlerde ve görsellerde Trakya bölgesi endüstriyel makine teknik servis uzmanlığı bağlamı yansıtılmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-001 (No Unapproved Interactions)**: Approved scope'ta yer almayan iletişim formu submit backend'i, WhatsApp canlı sohbet widget'ı, canlı harita ve modal pop-up etkileşimleri üretilmeyecek ve simüle edilmeyecektir.
- **BC-002 (Prototype Maturity)**: Proje satış görüşmelerinde kullanılacak bir frontend prototipidir. Kod veya arayüz kalitesinden taviz verilemez; ancak backend/auth/database bulunmadığı açıkça korunmalıdır.
- **BC-003 (Strict Content Boundary)**: Kaynak dosyada bulunmayan çalışma saatleri, sertifikalar, müşteri referansları veya sayısal kapasite iddiaları metinlere yazılamaz.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (In-Scope Boundary)**: Kapsam yalnız ana kurumsal landing page, 3 approved hizmet kartı/bölümü, firma tanıtım alanı ve direct-contact CTA yüzeylerinden oluşur.
- **SR-002 (Out-of-Scope Boundary)**: Admin paneli, CMS, veritabanı, kullanıcı girişi, online ödeme/e-ticaret, canlı harita, WhatsApp widget'ı, sunucu taraflı form işleme ve production hosting geçişi kapsam dışıdır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UXR-001 (Responsive Design)**: Kullanıcı deneyimi mobil (360px+), tablet ve masaüstü (1440px+) ekran boyutlarında kırılma olmadan sorunsuz çalışmalıdır.
- **UXR-002 (Data Boundary isolation)**: Sunulan firma ve hizmet bilgileri presentation component'leri içine kontrolsüz biçimde hardcode edilmeyecek, `companyService.js` data-access katmanından okunacaktır.
- **UXR-003 (CTA Accessibility)**: Telefon CTA'sı mobil cihazlarda arama başlatmalı, e-posta CTA'sı varsayılan e-posta istemcisini tetiklemelidir.
