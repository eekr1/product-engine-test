# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend satış demosu ile yeniden ele almak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut web sitesinin firmanın hizmetlerini, Disan Hidrolik Yetkili Servisliğini ve kurumsal yetkinliğini modern görsel standartlar ve güçlü bir satış görüşmesi sunumu seviyesinde aktaramaması.
- **Değer Önermesi**: Doğrulanmış firma gerçeklerini koruyarak, SITE123 kısıtlarından arınmış, projeye özel endüstriyel görsel kimlik taşıyan ve gelecekte backend entegrasyonuna uygun temiz mimarili bir kurumsal frontend satış demosu sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil**: Trakya bölgesinde makine bakım, onarım veya teknik servis arayan işletmeler; yedek parça temini arayan makine kullanıcıları.
- **İkincil**: Satın alma ve operasyon sorumluları; iletişim kurmak isteyen mevcut müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Modern responsive kurumsal frontend demo, Ana Sayfa, Hizmetler ve İletişim bölümleri, Disan Hidrolik Yetkili Servisliği vurgusu, telefon/e-posta CTA'ları, mock data service adapter boundary.
- **Kapsam Dışı**: Gerçek admin paneli, backend/database, kullanıcı hesapları, e-ticaret, doğrulanmamış yeni firma iddiaları veya canlıya alma.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Frontend demo (HTML/CSS/JS presentation layer), mock data service adapter. Stack kararı Engine resolution'da kesinleşir.
- **Integration Boundary**: UI presentation katmanı mock data adapter interface'i üzerinden veri tüketir; gelecekte real API adapter ile değiştirilebilir.

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Konu | Karar | Gerekçe |
|---|---|---|---|
| `DEC-001` | Delivery & Scope | Prototype Frontend Sales Demo | Potansiyel müşteri görüşmesinde hızlı ve güçlü sunum sağlamak |
| `DEC-002` | Content Truth | Mevcut firma gerçeklerini korumak | Doğrulanmamış yeni iddia uydurmamak (FCL-001..FCL-006) |
| `DEC-003` | Visual Identity | Sektör klişesinden uzak özgün tasarım | Lacivert sanayi kalıplarından kaçınmak |
| `DEC-004` | Architecture Baseline | Mock Data Service Boundary | UI'ı veriye sert bağlamadan gelecekteki backend geçişini kolaylaştırmak |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: `v0.2.0` Product Engine Generation Phase (Aşama 9). 5 dalgalı (WAVE_00 .. WAVE_04) delivery plan dondurulmuştur.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
