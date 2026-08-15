# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Firma ve Statü Sunumu)**: Arayüz, firma adını "Trakya Teknik Makine" ve yetkili servis statüsünü "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" olarak açıkça sunmalıdır.
- **PR-002 (3 Approved Hizmet Kapsamı)**: Sunulan hizmetler yalnız ve kesin olarak 3 approved hizmetten oluşur: `Yedek Parça Temini`, `Yerinde Teknik Destek` ve `Makine Bakım ve Onarım`.
- **PR-003 (Direct Contact CTA)**: İletişim eylemleri telefon (`tel:`) ve e-posta (`mailto:`) direct-contact bağlantılarıyla sınırlıdır.
- **PR-004 (Mock Data Boundary)**: Kullanılan tüm kurumsal veriler local mock static adapter üzerinden sunulur; UI component'leri içinde hardcode edilmez.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-001 (Source-Closed Fact Rule)**: `SRC-001` belgesinde açıkça yer almayan hiçbir firma gerçeği (stok adedi, mobil araç sayısı, acil müdahale taahhüdü, SLA süresi, makine modelleri, çalışma saatleri, sertifikalar veya fiziksel adres) arayüze eklenemez.
- **BC-002 (No Invented Interactions)**: Arayüzde form submit backend'i, canlı harita widget'ı, WhatsApp sohbet butonu, e-ticaret sepeti veya yetkilendirme akışları uydurulamaz ve görüntülenemez.
- **BC-003 (No Invented Backend)**: Gerçek backend, API veya veritabanı uygulanmaz; sahte endpoint veya veritabanı şeması üretilmez.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (Prototype Maturity)**: Bu proje bir `Prototype` / satış demosu projesidir. Temiz frontend mimarisini korur; ancak approved scope dışında yeni etkileşim veya kapabilite ekleme yetkisi vermez.
- **SR-002 (Integration Readiness)**: Sunum bileşenleri ile mock veri adapter'ı arasında temiz service boundary korunur. Gelecekte gerçek backend geçişi presentation katmanını değiştirmeden yapılabilmelidir.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-001 (Responsive Integrity)**: Masaüstü ve mobil ekran boyutlarında arayüz düzeni bozulmadan, satış görüşmesinde gösterilecek profesyonellikte sunulmalıdır.
- **UX-002 (Non-Generic Industrial Theme)**: Standart lacivert hero + 3 kart klişesi yerine Trakya Teknik Makine'ye özel modern endüstriyel tipografi, renk paleti ve kompozisyon kullanılmalıdır.
- **UX-003 (Direct Access)**: İletişim CTA'ları (telefon/e-posta) hem hero hem de footer alanlarında erişilebilir olmalıdır.
