# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın gerçek hizmetlerini ve yetkili servis kimliğini daha profesyonel, modern ve güven veren bir görsel sunumla yeniden ele alan frontend demo projesi.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 altyapısındaki web sitesi firmanın hizmetlerini sunmakla birlikte görsel sunum, kurumsal algı ve içerik hiyerarşisi açısından satış görüşmelerinde beklenen modern ve güçlü ilk izlenimi yaratmakta yetersiz kalmaktadır.
- **Değer Önermesi**: Doğrulanmış firma verilerini ve Disan Hidrolik Yetkili Servis kimliğini koruyarak, satış görüşmesinde "mevcut sitenizi bu yüksek seviyeye taşıyabiliriz" mesajını veren, görsel ve işlevsel açıdan güçlü bir frontend deneyimi sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım, yedek parça temini ve yerinde teknik destek arayan sanayi ve imalat işletmeleri.
- **İkincil Kullanıcılar**: Satın alma ve operasyon sorumluları, mevcut müşteriler ve satış görüşmesindeki potansiyel karar vericiler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo, Ana Sayfa ve Kurumsal/Hizmet/İletişim bölümleri, 3 ana hizmetin sunumu (Yedek Parça, Yerinde Destek, Bakım & Onarım), Disan Hidrolik Yetkili Servis vurgusu, direct contact CTA'ları (`tel:`, `mailto:`), temiz presentation/service mimari sınırı.
- **Kapsam Dışı**: Gerçek admin paneli/CMS, backend sunucu, veritabanı, authentication, online ödeme, doğrulanmamış sahte referanslar uydurmak, production deployment.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Frontend Web Demo (HTML5/CSS3/JavaScript, modüler presentation ve local service/data adapter mimarisi).
- **Mimari Yaklaşım**: `UI Presentation Layer -> Service Interface -> Local Mock Data Adapter`. Backend henüz olmadığından mock veri servisi üzerinden UI beslenir; gelecekte backend eklendiğinde UI yeniden yazımı gerektirmez.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar | Gerekçe |
|---|---|---|
| DEC-01 | Frontend Demo Odaklılık | Projenin birincil amacı satış görüşmesinde potansiyel müşteriye gösterilebilir güçlü bir arayüz sunmaktır. |
| DEC-02 | Gerçek Veri Korunumu | Firmanın mevcut web sitesindeki doğrulanmış hizmet ve iletişim verileri dondurularak kullanılmıştır. |
| DEC-03 | Architectural Separation | Demo scope'u kod kalitesini düşürmez; presentation ile veri erişimi ayrılmıştır. |
| DEC-04 | Özgün Endüstriyel Tasarım | Sektör klişelerinden (ucuz lacivert şablonlar) kaçınılarak projeye özgü visual concept kurulmuştur. |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine `RUN-20260813-001` aktif üretimi devam etmektedir. `WAVE_00` (Foundation & Design Rules Setup) aşamasına başlanmaya hazırdır.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
