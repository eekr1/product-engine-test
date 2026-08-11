# Trakya Teknik Makine — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Gerçek Firma Bilgisi İlkesi)**: Demoda sunulan tüm firma tanıtım metinleri, adres, telefon, e-posta bilgileri ve yetkili servis statüsü mevcut `trakyateknikmakine.com` sitesindeki doğrulanmış verilere dayanmalıdır. Doğrulanmamış yeni iddia veya sahte sertifika eklenemez.
- **PR-002 (3 Temel Hizmet Vurgusu)**: Firma hizmetleri açıkça üç ana başlık altında sunulmalıdır:
  1. Yedek Parça Temini
  2. Yerinde Teknik Destek
  3. Makine Bakım ve Onarım
- **PR-003 (Yetkili Servis Partnerliği Vurgusu)**: Firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğu bilgisi hero ve kurumsal özet bölümlerinde belirgin biçimde vurgulanmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-001 (Satış Görüşmesi Odaklılığı)**: Demo etkileşimleri hızlı, aksamayan ve sunum anında kesintiye uğramayacak şekilde tasarlanmalıdır.
- **BC-002 (Mock/Data Boundary İzolasyonu)**: UI bileşenleri veri kaynağını bir data service arayüzünden almalıdır; veriler presentation bileşenlerine kontrolsüz biçimde gömülmemelidir.
- **BC-003 (Sahte Backend Üretmeme)**: Demo kapsamı dışında kalan backend API, kullanıcı girişi, veritabanı veya ödeme adımları varmış gibi sahte modal veya sahte hata ekranları oluşturulmamalıdır.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (Frontend Demo Sınırı)**: Bu çalışma bir frontend demo projesidir. Gerçek admin paneli, kullanıcı hesabı ve veri kayıt veritabanı kapsam dışındadır.
- **SR-002 (Doğrudan İletişim Bağlantıları)**: İletişim aksiyonları cihaz destekliyorsa doğrudan `tel:` (telefon arama) ve `mailto:` (e-posta gönderme) bağlantılarını tetiklemelidir.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-001 (Responsive Uyum)**: Sayfa düzeni mobil (360px+), tablet (768px+) ve masaüstü (1200px+) ekran boyutlarında kırılma veya taşma olmaksızın duyarlı çalışmalıdır.
- **UX-002 (Erişilebilir İletişim)**: Telefon ve iletişim bilgileri ana gezinti çubuğunda ve alt bilgi (footer) alanında her zaman erişilebilir olmalıdır.
- **UX-003 (Görsel Hiyerarşi)**: Hizmet kartları ve teknik yetkinlikler yüksek kontrastlı başlıklar, açıklayıcı alt metinler ve ikon/görsel alanları ile desteklenmelidir.
