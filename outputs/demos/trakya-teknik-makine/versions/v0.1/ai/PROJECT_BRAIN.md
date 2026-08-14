# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini (https://www.trakyateknikmakine.com/), firmanın gerçek hizmet ve yetkili servislik bilgilerini koruyarak potansiyel müşteri satış görüşmesinde sunulabilecek modern, profesyonel ve güven veren bir frontend demo ile yeniden tasarlamak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 altyapılı web sitesi firmanın hizmetlerini sunuyor olsa da görsel hiyerarşi, kurumsal algı ve ilk izlenim açısından satış görüşmesinde firmanın gerçek yetkinliğini ve güvenilirliğini tam yansıtmamaktadır.
- **Değer Önermesi**: Trakya bölgesindeki makine kullanıcılarına ve işletmelere firmanın Disan Hidrolik yetkili servis kimliğini, 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve hızlı iletişim kanallarını görsel olarak güçlü, responsive ve modern bir frontend deneyimiyle sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım, yerinde teknik servis veya yedek parça arayan endüstriyel işletmeler ve ekipman kullanıcıları.
- **İkincil Kullanıcılar**: Satın alma ve operasyon sorumluları ile Trakya Teknik Makine ile hızlı iletişim kurmak isteyen mevcut müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo, Ana Sayfa, Kurumsal/Hakkımızda, Hizmetler ve İletişim yüzeyleri, telefon/e-posta CTA'ları, mock/local verili temiz presentation-service boundary ayrımı.
- **Kapsam Dışı**: Gerçek admin paneli, backend API, veritabanı, auth, online ödeme, doğrulanmamış yeni firma iddiaları veya sertifikalar, production deployment.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Standart HTML/CSS/JavaScript (Modern Vanilla JS veya hafif bundler/Vite altyapısı), modüler component yapısı, mock data provider ve clean service boundary.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Alınan Karar | Gerekçe |
|---|---|---|---|
| DEC-01 | Demo Kapsamı | İlk çıktı satış demosu olarak hazırlanan frontend prototipidir. | Potansiyel müşteriye görsel ve işlevsel kaliteyi göstermek. |
| DEC-02 | Firma Verileri | Mevcut sitedeki gerçek firma bilgileri ve yetkili servislik beyanı korunur. | Doğrulanmış firma gerçeklerine sadık kalmak. |
| DEC-03 | Mimari Temizlik | Backend olmasa dahi data/service boundary ayrılır. | İleride gerçek backend entegrasyonuna kolay geçiş sağlamak. |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine `v0.2.0` generation run'ı tamamlandı. `v0.1` dokümantasyon paketi başarıyla yayınlandı.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
