# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, doğrulanmış firma bilgilerini koruyarak potansiyel müşteri satış görüşmesinde güçlü bir ilk izlenim bırakacak modern ve profesyonel bir frontend satış demosu ile yeniden ele almak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 altyapılı web sitesi temel firma bilgilerini sunmaktadır; ancak görsel sunum, kurumsal güven algısı, içerik hiyerarşisi ve modern tasarım standartları açısından potansiyel müşteri satış görüşmelerinde yetersiz kalmaktadır.
- **Değer Önermesi**: Firmanın uzmanlığını, Disan Hidrolik Trakya Bölge Yetkili Servisliğini ve 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) öne çıkaran, hızlı, responsive ve özgün bir kurumsal frontend deneyimi sunarak müşteri görüşmesini desteklemek.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım, hidrolik sistem servisi veya yedek parça temini arayan sanayi ve ekipman işletmeleri.
- **İkincil Kullanıcılar**: Firma hakkında güvenilirlik ve hizmet kapsamı araştırması yapan satın alma / operasyon sorumluları.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Modern, responsive kurumsal frontend demo.
  - Ana sayfa, kurumsal güven, hizmetler ve iletişim bölümleri.
  - Disan Hidrolik yetkili servislik vurgusu ve 3 ana hizmetin görsel sunumu.
  - Telefon ve e-posta iletişim CTA bağlantıları.
  - Temiz data/service boundary (mock adapter altyapısı).
- **Kapsam Dışı**:
  - Admin/yönetim paneli, backend API, veritabanı.
  - Authentication, online satış/ödeme.
  - Doğrulanmamış yeni firma iddiaları veya sahte referanslar.
  - Live production deployment ve domain taşıma.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Bağımsız modern frontend mimarisi (HTML/CSS/JS modüler yapı), local mock service adapter.
- **Entegrasyon Sınırı**: Presentation bileşenleri doğrudan statik veriye gömülmez; soyutlanmış data service katmanı (`companyService`) üzerinden veri tüketir.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Seçim | Gerekçe / Otorite |
|---|---|---|---|
| DEC-001 | Teslim Olgunluğu | `Prototype` | Potansiyel müşteri satış demosu odaklı çalışma. |
| DEC-002 | Planning Profiles | `standard` (impl) / `light` (design) | Agent-ready mimari planlama minimumu + özgün `DESIGN_RULES`. |
| DEC-003 | Firma Bilgisi | Doğrulanmış gerçek içerik | Sitedeki (`trakyateknikmakine.com`) gerçek veriler korunmuş, uydurma içerik engellenmiştir (`VAL-13`). |
| DEC-004 | Proje Durumu | `existing` | Mevcut web sitesi ve firma gerçekleri kaynak alındığı için Engine intake kuralı uygulanmıştır (`CON-01`). |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Generation fazında working output belgeleri üretilmektedir. Proje ilk execution dalgası olan `WAVE_00` için hazırdır.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
