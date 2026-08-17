# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Firma & Yetkili Servis Kimliği)**: Proje genelinde firma adı "Trakya Teknik Makine", yetkili servis statüsü "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" olarak sunulmalıdır.
- **PR-002 (Onaylı 3 Hizmet Kapsamı)**: Yalnızca source-backed 3 temel hizmet sunulabilir: "Yedek Parça Temini", "Yerinde Teknik Destek", "Makine Bakım ve Onarım".
- **PR-003 (Direct-Contact Capability)**: İletişim eylemleri yalnız doğrudan `tel:` ve `mailto:` direct-contact bağlantıları ile sınırlıdır. Exact telefon veya e-posta adresi bilgisi sağlandığında render edilir; uydurma fake numara/adres gösterilmez.
- **PR-004 (Factual Allowlist Strictness)**: Source-backed olmayan referans, müşteri logosu, şirket tarihçesi, çalışan sayısı, sertifika, stok teslim garantisi, mobil filo, 7/24 acil servis süresi veya periyodik bakım takvimi eklenemez.

## 2. Davranış ve Akış Kısıtlamaları

- **BR-001 (No Contact Form / Submit Behavior)**: İletişim sayfasında veya diğer yüzeylerde iletişim formu, mesaj alanı, demo form, submit/send butonu, form validation veya form başarı/hata durumu Kesinlikle bulunamaz.
- **BR-002 (No Interactive Map / WhatsApp)**: Canlı harita entegrasyonu, harita iframe'i, WhatsApp canlı sohbet butonu veya external chat widget eklenemez.
- **BR-003 (No E-Commerce / Pricing / Booking)**: Fiyatlandırma tablosu, online satın alma, teklif alma formu, randevu takvimi veya ödeme akışı eklenemez.
- **BR-004 (No Fake Interaction States)**: Tıklandığında "Mesajınız Gönderildi" veya "Teklif Alındı" gibi sahte ürün state'leri tetikleyen buton/modal eklenemez.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (Approved Page Set Boundary)**: Proje yalnız onaylı 7 sayfadan oluşur (`PAGE-001` - `PAGE-007`). Yeni sayfa (örn: referanslar, projeler, blog) eklenemez.
- **SR-002 (Single-Page Collapse Yasağı)**: 7 onaylı sayfa aynı doküman içi `#section` anchor gezintisine indirgenemez. Her sayfa gerçek routable bir yüzey olarak kalmalıdır.
- **SR-003 (Prototype Maturity Boundary)**: Prototype teslim olgunluğu sayfa sayısını, mimari kaliteyi veya tasarım standardını düşürmez; yalnız production backend/CMS/hosting gereksinimlerini kapsam dışında tutar.

## 4. Site / Surface Integrity Rules

- **IR-001 (Home Surface Responsibility)**: `PAGE-001` Ana Sayfa firma kimliğini, yetkili servis rozetini, 3 hizmet özetini ve detay sayfalarına yönlendirmeleri sunar.
- **IR-002 (Corporate Surface Responsibility)**: `PAGE-002` Kurumsal sayfası Trakya Teknik Makine kurumsal kimliği ile Disan yetkili servis statüsünü sunar. Tarihçe veya ekip uydurulamaz.
- **IR-003 (Services Overview Responsibility)**: `PAGE-003` Hizmetler overview sayfası 3 hizmeti kart yapısıyla sunar ve ilgili detay sayfalarına (`PAGE-004`, `PAGE-005`, `PAGE-006`) yönlendirir.
- **IR-004 (Service Detail Responsibility)**: Her hizmet detay sayfası (`PAGE-004`, `PAGE-005`, `PAGE-006`) kendi hizmetine odaklı sunum yapar. İçerik factual allowlist sınırında kalır.
- **IR-005 (Contact Surface Responsibility)**: `PAGE-007` İletişim sayfası direct-contact telefon/e-posta bilgilerini sunar. Form, harita veya WhatsApp barındıramaz.

## 5. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-001 (Global Navigation)**: Masaüstü ve mobil ekranlarda header/navigation 7 sayfayı da erişilebilir kılmalıdır.
- **UX-002 (Responsive Consistency)**: Tüm sayfalar mobil, tablet ve masaüstü ekranlarda yüksek görsel uyum ve okunabilirlik sunmalıdır.
- **UX-003 (Clean Data Boundary)**: UI bileşenleri mock verileri doğrudan hardcode etmeyecek; data-access service adapter katmanı üzerinden erişecektir.
