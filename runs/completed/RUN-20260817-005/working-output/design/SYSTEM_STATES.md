# Trakya Teknik Makine Kurumsal Web Sitesi Demo — System States

## 1. Loading State

- **Kullanım**: Sayfa veya bileşen ilk yüklenirken veya mock service verisi getirilirken.
- **Görünüm**: Koyu antrasit zemin üzerinde amber renkte teknik çark/spinner animasyonu veya skeleton loader katmanları.
- **Mesaj Tonu**: "Veriler Yükleniyor..." (teknik ve sade).

## 2. Empty State

- **Kullanım**: Mock veride ilgili kategori altında içerik bulunmadığında (örn. detay bilgisi bulunamayan durumlar).
- **Görünüm**: Ortalanmış teknik ikon, sade açıklama ve ana sayfaya/hizmetlere dönüş butonu.
- **Mesaj Tonu**: "İlgili kayıt bulunamadı. Lütfen hizmetler sayfamızı inceleyin."

## 3. Error State

- **Kullanım**: Yanlış route girildiğinde (404) veya veri getirme hatası oluştuğunda.
- **Görünüm**: Koyu kırmızı sınır çizgisi, uyarı ikonu ve "Ana Sayfaya Dön" eylem butonu.
- **Mesaj Tonu**: "Aradığınız sayfa bulunamadı veya bir hata oluştu."

## 4. Success / Confirmation State

- **Kullanım**: Direct contact bağlantılarına (tel / mailto) tıklandığında uygulamanın doğrudan iletişim aracını başlattığına dair geçici bilgi bildirimi.
- **Kısıt**: Kullanıcıdan form verisi alınmadığı için "Mesajınız iletildi" veya "Form başarıyla gönderildi" gibi SAHTE submit başarı state'leri ÜRETİLMEZ.

## 5. Disabled / Unavailable State

- **Kullanım**: Exact telefon veya e-posta bilgisi source material'da hazır olmadığında veya henüz doğrulanmadığında.
- **Görünüm**: İşlevsiz fake değer gösterilmesi yerine `Direct-contact channel status: Available upon confirmation` bildirimi veya devre dışı bırakılmış teknik görünüm.

## 6. Shared Feedback Patterns

- İletişim eylemlerinde tarayıcının yerel tel/mailto protokolu tetiklenir.
- Toast veya notification bileşeni yalnız sistem bilgilendirmesi için çalışır; sahte form mesajı üretmez.
