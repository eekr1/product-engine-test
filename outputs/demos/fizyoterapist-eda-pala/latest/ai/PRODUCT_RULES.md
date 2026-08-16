# Fizyoterapist Eda Pala Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-01 (Factual Allowlist Strictness)**: Sitede gösterilecek tüm kişi, unvan ve konum bilgileri exact `SOURCE_REGISTER` (`SRC-01`) ve `FCL` allowlist'ine dayanmak zorundadır:
  - İsim: Eda Pala (`FCL-001`)
  - Mesleki Unvan: Fizyoterapist (`FCL-002`)
  - Konum Bağlamı: Tekirdağ (`FCL-003`)
  - Outbound Instagram URL: `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv` (`FCL-004`)
- **PR-02 (Health-Domain Claim Prohibition)**: Kaynakta açıkça doğrulanmamış hiçbir tedavi yöntemi, uzmanlık alanı, hastalık/rahatsızlık listesi, teşhis/tedavi vaadi, başarı oranı, hasta yorumu veya sağlık sonucu iddiası KULLANILAMAZ.
- **PR-03 (Title & Location Boundaries)**: `Fizyoterapist` unvanı "uzman fizyoterapist" veya "doktor" gibi unvanlara genişletilemez. `Tekirdağ` konum bağlamı fiziki klinik adresi veya ilçe şubesi iddiasına dönüştürülemez.
- **PR-04 (Outbound CTA Rule)**: Instagram URL'si yalnız harici profil bağlantısı (outbound link CTA) olarak `target="_blank" rel="noopener noreferrer"` attribute'ları ile kullanılacaktır. Profil içeriği factual source olarak sunulamaz.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-01 (No Invented Interactions)**: Approved scope dışındaki online randevu alma, canlı harita, WhatsApp entegrasyonu, canlı sohbet, iletişim formu backend'i veya modal etkileşimler UYDURULAMAZ.
- **BC-02 (No Fake Data / Placeholders)**: Tasarımın dolu görünmesi amacıyla sahte adres, sahte telefon numarası, sahte e-posta, sahte randevu saatleri veya sahte müşteri yorumları eklenemez. Eksik bilgiler açık soru olarak tutulur.
- **BC-03 (Responsive Layout Integrity)**: Mobil ve masaüstü görünümler satış görüşmesinde sorunsuz sunulacak biçimde responsive olmak zorundadır.

## 3. Kapsam Sınırları ve Kuralları

- **SR-01 (Committed Scope Boundary)**: Bu proje proaktif bir frontend satış demodur (Prototype).
- **SR-02 (Explicit Out-of-Scope List)**:
  - Uzmanlık ve tedavi alanları (Kapsam dışı)
  - Eğitim, üniversite, sertifika, deneyim yılı (Kapsam dışı)
  - Klinik adı, klinik adresi, telefon, e-posta, çalışma saati (Kapsam dışı)
  - Hasta yorumu, referans, başarı oranı, önce/sonra fotoğrafları (Kapsam dışı)
  - Online randevu veya form backend'i, WhatsApp, canlı harita (Kapsam dışı)
  - Authentication, veritabanı, CMS, hosting (Kapsam dışı)

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-01 (Clarity & Instant Recognition)**: Sayfaya giren ziyaretçi 3 saniye içinde Fizyoterapist Eda Pala'nın Tekirdağ'daki profesyonel dijital profilinde olduğunu anlar.
- **UX-02 (Clean Content Adapter Pattern)**: Arayüz bileşenleri hardcode metin içermez. Tüm factual ve presentation metinleri `src/config/content.config.js` adaptöründen okunur. Gelecekte gerçek veriler geldiğinde bileşen kodları değiştirilmeden sadece konfigürasyon güncellenebilir.
- **UX-03 (Non-Generic Aesthetics)**: Sağlık sektöründeki basmakalıp "turkuaz/mavi gradient + doktor stok görseli + 3 kart" klişesi kullanılmaz. Sakin, insani, modern tipografi ve whitespace odaklı visual direction uygulanır.
