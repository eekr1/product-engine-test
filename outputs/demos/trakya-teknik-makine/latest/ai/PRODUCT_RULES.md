# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-01 (Bilgi Doğruluğu İlkesi)**: Demodaki tüm firma bilgileri (Disan Hidrolik Yetkili Servisi statüsü, iletişim adresleri, telefon numaraları) yayında olan mevcut web sitesindeki (`https://www.trakyateknikmakine.com/`) doğrulanmış bilgilerle birebir eşleşmelidir. Müşteri tarafından onaylanmamış sahte yetkinlik iddiaları uydurulamaz.
- **PR-BUS-02 (Üç Ana Hizmet Vurgusu)**: Demo içinde sunulan temel hizmetler kesin olarak üç ana başlık etrafında kurgulanmalıdır:
  1. Yedek Parça Temini
  2. Yerinde Teknik Destek
  3. Makine Bakım ve Onarım
- **PR-BUS-03 (Yetkili Servis Vurgusu)**: Trakya Teknik Makine'nin Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğu bilgisi, ana sayfada ve kurumsal tanıtım alanlarında açık ve görünür biçimde sunulmalıdır.
- **PR-BUS-04 (Hızlı İletişim Aksiyonu)**: Telefon (click-to-call) ve e-posta (mailto) bağlantıları mobil ve masaüstü cihazlarda doğrudan çalışır durumda olmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-BEH-01 (Statik Frontend Deneyimi)**: Demo tamamen istemci tarafında (frontend) çalışmalıdır. Sayfa geçişleri, dinamik görünüm güncellemeleri veya modal/sekme etkileşimleri arka plan sunucusu gerektirmemelidir.
- **PR-BEH-02 (Form ve Veri Gönderimi)**: İletişim veya teklif aksiyonları demo modunda çalışmalı, kullanıcıya görsel başarı bildirimi (toast/modal) sunmalı ancak sahte veritabanı veya API sunucusuna veri göndermeye çalışmamalıdır.
- **PR-BEH-03 (Authentication ve Admin Yokluğu)**: Sistemde kullanıcı girişi, admin paneli, şifre sıfırlama veya rol tabanlı yetkilendirme akışları yer almamalıdır.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-01 (Demo Scope Sınırı)**: Demo teslimat olgunluğu `Prototype` seviyesindedir. Ancak kod ve mimari kalite tabanı düşürülemez.
- **PR-SCP-02 (Gelecek Özellik Sınırı)**: WhatsApp hızlı iletişim butonu, canlı harita veya online teklif alma gibi özellikler mevcut scope'a zorunlu olarak dahil edilmemeli; ileride eklenebilecek modüler yapıda planlanmalıdır.
- **PR-SCP-03 (Veri İzolasyonu)**: İçerik verisi UI component'leri içine gömülmemeli; `data/` katmanındaki modüler mock service adapter üzerinden okunmalıdır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-01 (Responsive Tam Uyum)**: Web sitesi 320px mobil ekranlardan 1920px+ masaüstü ekranlara kadar kırılma yaşanmadan responsive olmalıdır.
- **PR-UX-02 (Erişilebilirlik ve Okunabilirlik)**: Metin kontrast oranları en az WCAG AA standartlarını karşılamalı, tipografi büyüklükleri sanayi/teknik okuyucu kitlesine hitap edecek netlikte olmalıdır.
- **PR-UX-03 (Anti-Template Rationale)**: Tasarım generic Bootstrap/Tailwind şablonu hissi vermemeli; projeye özel Tipografi, Renk Yüzeyleri ve Kompozisyon kurallarına uymalıdır.
