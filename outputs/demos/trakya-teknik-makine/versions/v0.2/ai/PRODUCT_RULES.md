# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-01 (Kimlik ve Unvan)**: Ürünün tüm tanıtım yüzeylerinde firmanın ticari adı `Trakya Teknik Makine` ve resmi yetki statüsü `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` olarak açıkça belirtilmelidir.
- **PR-BUS-02 (Hizmet Kapsamı)**: Sunulacak hizmetler yalnız ve kesinlikle 3 approved hizmetten oluşacaktır:
  1. Yedek Parça Temini
  2. Yerinde Teknik Destek
  3. Makine Bakım ve Onarım
- **PR-BUS-03 (Bölgesel Odak)**: Firma faaliyet alanı ve hizmet bağlamı Trakya Bölgesi endüstriyel ve makine teknik servis ağı ile sınırlı tutulacaktır.
- **PR-BUS-04 (Gerçek Bilgi Sınırı)**: Approved kaynaklarda bulunmayan adres, çalışma saatleri, stok durumları, mobil filolar veya sertifika iddiaları uydurulmayacaktır.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-BHV-01 (Statik/Mock Veri Katmanı)**: Frontend demo canlı backend gerektirmez. Tüm dinamik görünümler local mock data adapter üzerinden beslenecektir.
- **PR-BHV-02 (Sahte Backend Yasağı)**: Gerçekleşmeyen backend API istekleri, sahte form submit simülasyonları veya sahte veritabanı yanıtları uydurulmayacaktır.
- **PR-BHV-03 (İletişim Kanalı Sınırı)**: İletişim eylemleri direct-contact CTA yüzeyleri (telefon / e-posta linkleri) üzerinden gerçekleşecektir. Canlı harita, WhatsApp widget'ı veya backend submit formları eklenmeyecektir.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-01 (Kapsam İçi Yüzeyler)**: Ana kurumsal tanıtım ekranı (Hero), yetkili servis güven katmanı, 3 temel hizmet detay panelleri, firma özet kurumsal alanı ve direct-contact iletişim alanı.
- **PR-SCP-02 (Kesin Kapsam Dışı)**: CMS, admin paneli, kullanıcı girişi/auth, veritabanı şeması, e-ticaret/ödeme, canlı harita, WhatsApp entegrasyonu, form backend'i.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-01 (Hızlı Anlaşılabilirlik)**: İlk 5 saniye içerisinde ziyaretçi firmanın ne yaptığını ve Disan yetkili servisi olduğunu doğrudan kavrayabilmelidir.
- **PR-UX-02 (Mobil ve Masaüstü Uyum)**: Tüm arayüz bileşenleri masaüstü ve mobil ekranlarda satış görüşmesinde sorunsuz gösterilecek responsive kalitede olmalıdır.
- **PR-UX-03 (Erişilebilirlik ve Dokunmatik Hedefler)**: CTA button ve e-posta/telefon bağlantıları mobil cihazlarda en az 44x44px dokunma alanına sahip olmalıdır.
