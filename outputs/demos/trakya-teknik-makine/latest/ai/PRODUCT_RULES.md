# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Doğrulanmış Firma Kimliği)**: Web arayüzünde sunulan tüm firma tanıtım metinleri, yetkili servis unvanları ve hizmet açıklamaları SITE123 kaynaklı doğrulanmış verilerle (Disan Hidrolik Trakya Bölge Yetkili Servisi) tam uyumlu olacaktır. Doğrulanmamış firma iddiaları veya uydurma referanslar sunulamaz.
- **PR-002 (3 Temel Hizmet Odağı)**: Sunumda 3 temel hizmet (1. Yedek Parça Temini, 2. Yerinde Teknik Destek, 3. Makine Bakım ve Onarım) eşit görsel ağırlık ve açık içerik hiyerarşisi ile vurgulanacaktır.
- **PR-003 (Yetkili Servis Vurgusu)**: Disan Hidrolik Trakya Bölge Yetkili Servisi statüsü sitenin ana sunum yüzeyinde güven unsuru olarak görünür biçimde konumlandırılacaktır.
- **PR-004 (Doğrudan İletişim Erişimi)**: Masaüstü ve mobil ziyaretçilerin firma yetkililerine hızla ulaşabilmesi için telefon (`tel:`) ve e-posta (`mailto:`) CTA noktaları kesintisiz erişilebilir kılınacaktır.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-001 (Gerçek Backend Kısıtı)**: Frontend demo sahte backend/API endpoint'leri sunmayacaktır. Veri erişimi `companyService` / `contentAdapter` katmanı üzerinden yerel mock veri ile yönetilecektir.
- **BC-002 (Etkileşim Kısıtı)**: Approved scope'ta yer almayan iletişim formu submit işlemi, canlı harita veya WhatsApp butonu gibi onaylanmamış etkileşimler demo scope'una eklenemez.
- **BC-003 (Mevcut Site Bağlamı)**: Mevcut SITE123 web sitesinin görsel düzeni yeni demo için bağlayıcı değildir; ancak firma gerçeklikleri ve hizmet sınırları korunacaktır.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (Kapsam İçi Sınır)**: Kurumsal tanıtım, 3 temel hizmet detaylandırması, yetkili servis bilgisi ve telefon/e-posta CTA noktalarını içeren responsive frontend web demosu.
- **SR-002 (Kapsam Dışı Sınır)**: Backend API sunucusu, CMS entegrasyonu, kullanıcı girişi, e-ticaret/ödeme altyapısı, canlı domain operasyonları ve doğrulanmamış iddialar kesin olarak kapsam dışıdır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-001 (İlk İzlenim & Güven)**: Ziyaretçi siteye girdiğinde ilk 3 saniyede firmanın uzmanlık alanını, Trakya bölgesindeki konumunu ve Disan Hidrolik yetkili servisi olduğunu kavramalıdır.
- **UX-002 (Anti-Template Görsel Dil)**: Tasarım generic lacivert kurumsal şablon klişelerinden sakınacak; projeye özel endüstriyel uzmanlık, teknik güven ve netlik hissi veren özgün bir görsel dil kullanacaktır.
- **UX-003 (Responsive Esneklik)**: Mobil ve masaüstü ekran boyutlarında okunabilirlik, görsel hiyerarşi ve hızlı iletişim butonları sorunsuz çalışmalıdır.
