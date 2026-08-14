# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-001 (Doğrulanmış Firma Kimliği)**: Sitede sunulan firma bilgileri (unvan: Trakya Teknik Makine; yetkili servis: Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi) canlı sitedeki doğrulanmış verilere harfiyen uymalıdır. Doğrulanmamış yeni firma iddiası eklenemez.
- **PR-002 (3 Temel Hizmet Kapsamı)**: Sunulan temel hizmet alanları tam olarak 3 adettir: 1) Yedek Parça Temini, 2) Yerinde Teknik Destek, 3) Makine Bakım ve Onarım. Hizmet detayları anlaşılır, kurumsal ve teknik yetkinlik hissi veren içerikle sunulmalıdır.
- **PR-003 (Disan Hidrolik Yetkili Servis Güvencesi)**: Yetkili servis kimliği Hero alanı ve Hakkımızda/Güven bölümlerinde belirgin ve güven verici biçimde konumlandırılmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- **BC-001 (Gerçek Backend Yokluğu)**: Sistemde sunucu tarafı form işleme, veritabanı kaydı veya sahte API çağrıları bulunmaz.
- **BC-002 (Doğrudan İletişim Akışı)**: İletişim eylemleri yalnızca cihazın yerel telefon uygulamasına (`tel:`) ve e-posta istemcisine (`mailto:`) yönlendiren doğrudan CTA'lar üzerinden gerçekleşir.
- **BC-003 (Kapsam Dışı Etkileşim Yasağı)**: Gönderilebilir form modalları, canlı harita entegrasyonları, WhatsApp botları veya sahte arama motorları gibi backend'i olmayan sahte etkileşimler eklenemez.

## 3. Kapsam Sınırları ve Kuralları

- **SR-001 (Single Page / Multi-Section Landing Structure)**: Frontend demo tek bir akıcı Landing Page mimarisinde sunulur. Bölümler: Hero / Karşılama, Yetkili Servislik & Kurumsal Güven, Hizmetlerimiz (3 Alan), İletişim & CTA.
- **SR-002 (SITE123 Bağımsızlığı)**: Mevcut sitedeki metinler ve doğrulanmış firma verileri korunur, ancak eski SITE123 şablon tasarımı ve kod yapısı tamamen terk edilir.
- **SR-003 (Kalite Tabanı)**: Demo niteliğinde olması spagetti veya düşük kaliteli mimari için gerekçe değildir; kod ve presentation katmanı modüler tutulacaktır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-001 (Mobil Uyumluluk & CTA Erişilebilirliği)**: Mobil cihazlarda telefon ve e-posta butonları dokunmatik hedef standartlarına (min 44px) uygun, kolay ulaşılabilir olmalıdır.
- **UX-002 (Görsel Hiyerarşi & Tipografi)**: Endüstriyel disiplin ve teknik yetkinlik hissi veren güçlü tipografik hiyerarşi ve okunabilir içerik düzeni sağlanmalıdır.
- **UX-003 (Hızlı Yükleme & Performans)**: Ağır harici kütüphaneler yerine hafif, optimize ve sürdürülebilir frontend yapı tercih edilmelidir.
