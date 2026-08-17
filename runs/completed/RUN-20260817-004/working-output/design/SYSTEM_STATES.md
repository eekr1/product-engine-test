# Trakya Teknik Makine Kurumsal Web Sitesi Demo — System States

## 1. Loading State

- **Görünüm**: Skeleton loader (koyu antrasit `#161D2A` kartlar üzerinde pulse animasyonlu hafif gri bloklar `#1F293D`) veya amber spinner (`#FF9500`).
- **Davranış**: Sayfa/bileşen yüklenirken içerik zıplamasını engellemek için hedef alan boyutu önceden ayrılır.
- **Erişilebilirlik**: `aria-busy="true"` ve `aria-live="polite"` etiketleri kullanılır.

## 2. Empty State

- **Görünüm**: Sade teknik ikon, kurumsal açıklama metni ve yönlendirme butonu.
- **Mesaj Tonu**: Kurumsal, yardımsever ve teknik. "Aradığınız kriterlere uygun içerik bulunamadı."
- **Aksiyon**: "Hizmetlerimize Göz Atın" veya "Ana Sayfaya Dön" butonları.

## 3. Error State

- **Görünüm**: İnce kırmızı/amber teknik kenarlık (`#EF4444` / `#FF9500`), dikkat ikonu ve hata mesajı paneli.
- **Mesaj Tonu**: Açık ve çözüm odaklı. "Sayfa yüklenirken bir sorun oluştu."
- **Recovery**: "Yeniden Dene" veya "İletişime Geçin" butonları.

## 4. Success / Confirmation State

- **Görünüm**: Yeşil/amber onay rozeti (`#10B981` / `#FF9500`) ve net onay mesajı.
- **Kullanım**: İletişim formu demo modunda gönderildiğinde bilgilendirme mesajı.

## 5. Disabled / Unavailable State

- **Görünüm**: Opaklığı düşürülmüş (`opacity: 0.5`), `cursor: not-allowed` ve pasif renkler (`--text-muted`).
- **Kullanım**: Hazır olmayan veya source truth bulunmayan alanlar için pasif durum.

## 6. Shared Feedback Patterns

- **Toast Notifications**: Sağ üst köşede beliren 4 saniye sonra otomatik kapanan bilgilendirme mesajları (Success, Warning, Error).
- **Inline Alert Panels**: Sayfa içi sabit bilgilendirme blokları.

## 7. Conditional States

- **Route Not Found (404 Page)**:
  - Görünüm: 404 teknik kurgu ekranı, "Sayfa Bulunamadı" mesajı, Ana Sayfa ve Hizmetler yönlendirme butonları.
