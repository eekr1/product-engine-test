# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-01 (Yetkili Servis Vurgusu):** Demo web sitesinde Trakya Teknik Makine'nin Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğu bilgisi belirgin biçimde sunulmalı, güven verici görsel ve metinsel öğelerle desteklenmelidir [FCL-001].
- **PR-02 (Üç Temel Hizmetin Sunumu):** Sitede firmanın 3 temel hizmet alanı eşit teknik ağırlık ve net görsel hiyerarşi ile sunulmalıdır: 1. Yedek Parça Temini, 2. Yerinde Teknik Destek, 3. Makine Bakım ve Onarım [FCL-002].
- **PR-03 (Doğrulanmış Firma Bilgileri):** Metinlerde yalnızca mevcut kaynaklardan doğrulanmış firma bilgileri yer almalı; doğrulanmamış sertifika, müşteri referansı veya rakamsal başarı iddiaları uydurulmamalıdır [SCP-008, SCP-014].
- **PR-04 (Doğrudan İletişim CTA'ları):** Kullanıcıyı eyleme geçiren ana iletişim noktaları telefon (`tel:`) ve e-posta (`mailto:`) direct linkleri olarak kurgulanmalıdır [FCL-004].

## 2. Davranış ve Akış Kısıtlamaları

- **BC-01 (Demo Kullanılabilirliği):** Satış görüşmesinde müşteri temsilcisi veya potansiyel müşteri siteyi incelerken tüm ana akışlar (Ana Sayfa -> Hizmet Detayı -> İletişim) kesintisiz, hızlı ve takılmadan çalışmalıdır.
- **BC-02 (Mobil & Masaüstü Uyumluluğu):** Demo hem masaüstü hem de mobil cihazlarda (tablet/telefon) kırılma olmadan tam duyarlı (responsive) gösterim sunmalıdır.
- **BC-03 (Gerçekçi Hissiyat):** Demo sahte/place-holder "Lorem Ipsum" metinleri içermemeli; gerçek Türkçe sektör ve firma terimleriyle tamamlanmış hissi vermelidir.

## 3. Kapsam Sınırları ve Kuralları

- **SB-01 (Frontend Demo Boundary):** Çalışma yalnız frontend demo kapsamındadır. Demo içerisinde backend sunucusu, veritabanı veya gerçek admin paneli çağrıları yer almaz [SCP-009, SCP-010].
- **SB-02 (Geleceğe Hazır Mimari):** Veri erişimi UI bileşenlerinin içine doğrudan gömülmemeli; mock data modülü üzerinden servis edilmelidir [SCP-005].

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-01 (3 Saniye Keşif Kuralı):** Ziyaretçi ana sayfaya girdiğinde ilk 3 saniye içinde firmanın ne yaptığını, yetkili servis kimliğini ve temel hizmetlerini anlayabilmelidir.
- **UX-02 (Erişilebilir İletişim):** Masaüstü ve mobilde iletişim butonları ve telefon numaraları tek tıkla arama veya e-posta gönderme eylemini tetiklemelidir.
