# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki gerçek firma bilgilerini ve yetkili servislik kimliğini koruyarak potansiyel satış görüşmesinde sunulmak üzere modern, profesyonel bir kurumsal frontend demosu hazırlamak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 tabanlı web sitesi temel firma bilgilerini sunmakla birlikte görsel tasarım, tipografi, içerik hiyerarşisi ve kurumsal algı açısından satış görüşmesinde yaratılmak istenen güçlü ilk izlenimin gerisindedir.
- **Değer Önermesi**: Firmanın uzmanlığını, Disan Hidrolik Trakya Bölge Yetkili Servisi kimliğini ve 3 ana hizmetini (Yedek Parça, Yerinde Destek, Bakım-Onarım) modern tipografi, kompozisyon ve dinamik arayüz deneyimiyle sunarak güven ve profesyonellik algısı oluşturmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler; yedek parça temini arayan makine ve ekipman kullanıcıları.
- **İkincil Kullanıcılar**: Hizmet ve yetkinlik araştırması yapan satın alma / operasyon sorumluları; iletişime geçmek isteyen mevcut müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Modern responsive kurumsal frontend demo, Ana sayfa ve kurumsal/hizmet/iletişim bölümleri, Disan Hidrolik yetkili servis vurgusu, telefon/e-posta CTA'ları, clean service/data-access boundary ve local mock data adapter katmanı.
- **Kapsam Dışı**: Gerçek admin paneli, backend API, veritabanı uygulaması, kullanıcı girişi, online ödeme, doğrulanmamış yeni firma iddiaları veya sertifikaları.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5, CSS3 (Vanilla CSS design system), Javascript (ES Modules / modern frontend framework), Local Mock Adapter katmanı.
- **Integration Readiness**: presentation component'leri veriyi doğrudan içermez; `Service Interface -> Mock Adapter (Bugün) / Real API Adapter (Gelecekte)` mimarisi korunur.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Alınan Karar | Gerekçe |
|---|---|---|---|
| DEC-001 | Delivery & Planning Profile | `delivery_profile: Prototype`, `implementation: standard`, `design: light` | Satış demosu odağında agent-ready mimari ve özgün visual direction sağlamak |
| DEC-002 | Data Architecture | Service/Adapter katmanı ayrıştırıldı, mock data UI component'lerine gömülmedi | Gelecekte gerçek backend geçişini yeniden yazım olmadan desteklemek |
| DEC-003 | Design Direction | Sektör klişelerinden (otomatik lacivert hero template) kaçınıldı, özgün endüstriyel kimlik kuruldu | Potansiyel müşteride öne çıkan modern ve güven veren bir etki bırakmak |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine v0.2.0 dokümantasyon paketi eksiksiz üretilmiş, validation kontrollerinden geçmiş ve agent-ready durumda yayına hazır hale getirilmiştir.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün Kuralları ve Davranış Sınırları
- [TECH_CONTEXT.md](./TECH_CONTEXT.md) — Teknik Bağlam ve Mimari Sınırlar
- [DESIGN_RULES.md](../design/DESIGN_RULES.md) — Tasarım Kuralları ve Görsel Yön
- [DECISIONS.md](./DECISIONS.md) — Alınan Önemli Kararlar
