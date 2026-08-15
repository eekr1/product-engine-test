# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-01 (Firma İdentite Sunumu)**: Arayüz, Trakya Teknik Makine adını ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi unvanını ana görsel hiyerarşide açıkça göstermelidir.
- **PR-BUS-02 (Hizmet Kapsamı)**: Sunulan hizmetler yalnızca 3 approved hizmetten ibarettir: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım. Approved kaynakta bulunmayan ek hizmetler veya alt uzmanlık iddiaları sunulamaz.
- **PR-BUS-03 (Doğrudan İletişim)**: İletişim eylemleri telefon (`tel:`) ve e-posta (`mailto:`) CTA'ları üzerinden doğrudan iletişim tetiklemelidir.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-CON-01 (Backend Bağımsızlığı)**: Frontend demo, sunucu taraflı bir form submit, veritabanı sorgusu veya API çağrısı beklemeksizin self-contained ve client-side çalışmalıdır.
- **PR-CON-02 (Saha / İddia Kısıtlaması)**: Stok durumu, mobil araç sayısı, yanıt süresi garantisi (SLA), periyodik bakım paketleri, sertifikalar veya referans listeleri gibi kaynakta doğrulanmamış iddialar arayüze eklenemez.
- **PR-CON-03 (Etkileşim Sınırı)**: Canlı harita, WhatsApp sohbet widget'ı, dinamik arama/filtreleme, modal popup veya e-ticaret sepet mekanizmaları mevcut kapsam dışındadır; arayüze uydurma etkileşim katmanları eklenemez.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-01 (In-Scope Verification)**: Kurumsal tanıtım hero alanı, yetkili servis statü vurgusu, 3 approved hizmet kartı ve direct-contact CTA alanları kapsama dahildir.
- **PR-SCP-02 (Out-of-Scope Enforcement)**: Admin paneli, CMS, kullanıcı girişi, veritabanı entegrasyonu, harita iframe'i ve WhatsApp yönlendirmesi kesinlikle kapsam dışıdır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-01 (Hızlı Bilgi Erişimi)**: Ziyaretçi ilk 3 saniyede firmanın ne yaptığını, yetkili servis statüsünü ve iletişim yollarını anlayabilmelidir.
- **PR-UX-02 (Responsive Uyum)**: Masaüstü, tablet ve mobil cihazlarda tipografi ve visual hierarchy bozulmadan kesintisiz deneyim sunulmalıdır.
- **PR-UX-03 (Temiz Data Boundary)**: Görsel bileşenler veriyi doğrudan component koduna hardcode etmek yerine mock/local data adapter üzerinden tüketmelidir.
