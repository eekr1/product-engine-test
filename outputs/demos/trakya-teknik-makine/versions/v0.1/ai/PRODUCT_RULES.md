# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-001 (Firma Tanıtımı)**: Web sitesi demosu ilk bakışta firma adını (`Trakya Teknik Makine`) ve resmi statüsünü (`Disan Hidrolik Makine Trakya Bölge Yetkili Servisi`) net biçimde sunmalıdır.
- **PR-BUS-002 (Onaylı Üç Hizmet)**: Hizmetler bölümü yalnız ve kesin olarak üç onaylı hizmeti sunacaktır:
  1. `Yedek Parça Temini`
  2. `Yerinde Teknik Destek`
  3. `Makine Bakım ve Onarım`
- **PR-BUS-003 (Bölge Bağlamı)**: Hizmet sunumunda Trakya bölgesi endüstriyel/makine teknik servis bağlamı öne çıkarılmalı, ancak uydurma spesifik ilçe/adres veya şube iddialarına yer verilmemelidir.
- **PR-BUS-004 (Direct-Contact CTA)**: Ziyaretçi telefon ve e-posta direct-contact butonlarına kolayca erişebilmelidir. Exact iletişim değerleri koda/konfigürasyona fallback olarak tanımlanacak, uydurma sahte firma iletişim verisi üretilmeyecektir.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-CON-001 (Factual Allowlist Sınırı)**: Source-backed `SRC-01` allowlist dışındaki hiçbir firma gerçeği (stok garantisi, orijinal parça garantisi, mobil filo, 7/24 hizmet, SLA, periyodik bakım paketleri, pres revizyonu, sertifikalar, müşteri referansları, adres veya çalışma saatleri) ürün metinlerinde veya bileşenlerinde yer alamaz.
- **PR-CON-002 (Kurgusal Form Submit / Backend Yasaktır)**: Sitede form submit backend'i, canlı harita entegrasyonu, WhatsApp yönlendirmesi veya e-ticaret modülü bulunmayacaktır.
- **PR-CON-003 (Delivery Profile Sınırı)**: Ürün metinlerinde ve bileşenlerinde "production-ready", "launch-ready" gibi onaylı `Prototype` profilini aşan olgunluk iddiaları kullanılamaz.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-001 (Kapsam İçi Yüzeyler)**:
  - Header & Navigation Shell
  - Hero & Statü Banner (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi)
  - Üç Onaylı Hizmet Sunum Kartları / Detay Katmanı
  - Kurumsal Tanıtım ve Trakya Bölge Teknik Servis Bağlamı
  - Direct-Contact İletişim Butonları (Telefon / E-posta)
- **PR-SCP-002 (Kesin Kapsam Dışı Yüzeyler)**:
  - Admin Paneli / CMS / Kullanıcı Girişi
  - Online Sipariş / Ödeme Katmanı
  - İletişim Formu Backend / Harita API Entegrasyonu / Live Chat / WhatsApp

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-001 (Responsive Deneyim)**: Satış görüşmelerinde mobil (smartphone) ve masaüstü (laptop/desktop) cihazlarda sorunsuz sunulabilecek responsive kompozisyon sağlanmalıdır.
- **PR-UX-002 (Görsel Hiyerarşi & Algı)**: Tasarım modern, temiz, teknik uzmanlık ve güven veren bir kurumsal dil sunmalıdır. Generic "lacivert hero + 3 standart kart + footer" kurumsal sektör klişelerinden uzak durulmalıdır.
- **PR-UX-003 (Clean Data Boundary)**: UI bileşenleri metin verilerini doğrudan harici mock/local configuration katmanından çekmelidir.
