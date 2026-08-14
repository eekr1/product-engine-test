# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın uzmanlığını ve Disan Hidrolik yetkili servisliğini daha modern, güven veren ve etkileyici bir frontend demo ile yeniden sunmak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 altyapılı site, firma ve hizmet bilgilerini sunsa da görsel hiyerarşi, mobil uyum, tipografi ve profesyonel algı açısından firmanın gerçek yetkinliğini yansıtmamakta ve potansiyel müşteri görüşmelerinde yetersiz kalmaktadır.
- **Değer Önermesi**: Gerçek firma ve hizmet verilerini koruyarak, potansiyel müşteriye "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını net şekilde veren modern, responsive, hızlı ve yüksek kaliteli bir kurumsal frontend deneyimi.

## 3. Hedef Kullanıcı Kitleleri

- **Bölge Sanayi İşletmeleri**: Trakya bölgesinde makine bakım, onarım veya teknik servis arayan imalat tesisleri ve operasyon yöneticileri.
- **Yedek Parça Müşterileri**: Hidrolik sistem ve ekipman yedek parçası tedarik etmek isteyen satın almacılar.
- **Satış Görüşmesi Muhatapları (Potansiyel Müşteri Yönetimi)**: Trakya Teknik Makine firma yetkilileri ve karar vericileri.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo (Single-page multi-section / landing mimarisi), 3 ana hizmet sunumu (Yedek Parça, Yerinde Destek, Bakım/Onarım), Disan Hidrolik Yetkili Servis vurgusu, hızlı telefon/e-posta CTA'ları, projeye özgü visual concept ve anti-template DESIGN_RULES.
- **Kapsam Dışı**: Gerçek admin paneli/CMS, veritabanı, sunucu kodları, auth, online ödeme, doğrulanamayan firma/referans iddiaları, production hosting/domain geçişi.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5 + Vanilla JS + Modern Vanilla CSS (Vite preview ortamında modüler yapı). İstemci taraflı presentation katmanı ile mock local data katmanı birbirinden kesin olarak ayrılmıştır.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar | Gerekçe | Status |
|---|---|---|---|
| DEC-001 | Satış demosu odaklı frontend yapısı | İnceleme ve sunum ortamı için hızlı, hafif ve taşınabilir deneyim | Onaylı |
| DEC-002 | `project_state: existing` tanımı | Yayında olan mevcut web sitesi ve firma bilgileri truth kaynağıdır | Onaylı |
| DEC-003 | Presentation & Data/Service Boundary ayrımı | Gelecekte gerçek backend geldiğinde UI katmanının yeniden yazılmasını engellemek | Onaylı |
| DEC-004 | Anti-template endüstriyel görsel yön | Sektör klişelerinden kaçınarak projeye özel kaliteli visual concept kurmak | Onaylı |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine v0.2.0 run aşaması donduruldu (`RUN-20260814-001`). Dokümantasyon paketi üretilmiş olup (`v0.1`), ilk implementation wave'i (`WAVE_00`) başlamaya hazırdır.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [../design/DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [../waves/WAVE_MAP.md](../waves/WAVE_MAP.md)
