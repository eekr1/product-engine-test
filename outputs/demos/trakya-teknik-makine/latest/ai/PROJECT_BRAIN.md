# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut web sitesi (SITE123 altyapısı) temel bilgileri sunmaktadır ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve potansiyel satış görüşmelerinde bırakacağı ilk izlenim açısından modern kurumsal standartların gerisindedir.
- **Değer Önermesi**: Firmanın gerçek ve doğrulanmış bilgilerini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım-Onarım ve Disan Hidrolik Yetkili Servisi) koruyarak; modern, responsive, hızlı ve etkileyici bir kurumsal frontend demosu sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım, yerinde servis ve yedek parça ihtiyacı olan işletmeler, fabrika operasyon yöneticileri ve ekipman kullanıcıları.
- **İkincil Kullanıcılar**: Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma sorumluları ve potansiyel iş ortakları.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo (Ana sayfa, Kurumsal, Hizmetler ve İletişim bölüm yapısı), doğrulanmış firma bilgilerinin sunumu, telefon/e-posta iletişim CTA'ları, clean service/data-access boundary (mock data adapter).
- **Kapsam Dışı**: Gerçek backend/veritabanı uygulaması, admin paneli, kullanıcı hesabı/auth, online ödeme/e-ticaret, production deployment, doğrulanmamış yeni firma/hizmet iddiaları.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5 / Vanilla CSS3 / JavaScript (ES6+ Modüler Mimari).
- **Veri & Servis Mimarisi**: presentation bileşenlerinden ayrıştırılmış yerel mock data service adapter (Future integration-ready).

## 6. Kritik Kararlar Özet Tablosu

| Karar Kodu | Konu | Karar Özeti | Gerekçe / Provenance |
|---|---|---|---|
| DEC-01 | Proje Amacı | Satış görüşmesi amaçlı frontend demo | User Approved |
| DEC-02 | Profile Seçimi | `implementation_planning: standard`, `design_planning: light` | User Approved |
| DEC-03 | Proje Durumu | `project_state: existing` | Engine Resolved (SITE123 varlığı) |
| DEC-04 | Veri Katmanı | Clean Service Boundary + Mock Adapter | Engine Resolved (Backend readiness) |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Initial Generation & Demo Foundation Stage.
- **Aktif Wave**: Wave 00 (Project Foundation, Design Baseline & Data Boundary).

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün ve kapsam davranış kuralları
- [TECH_CONTEXT.md](./TECH_CONTEXT.md) — Teknik mimari ve entegrasyon sınırları
- [DESIGN_RULES.md](../design/DESIGN_RULES.md) — Görsel tasarım dili ve UX kuralları
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Teslimat planı ve aşamalar
- [WAVE_MAP.md](../waves/WAVE_MAP.md) — Uygulama dalgaları haritası
- [DECISIONS.md](./DECISIONS.md) — Proje karar kayıtları
