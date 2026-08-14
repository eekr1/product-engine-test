# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

- **Delivery Profile**: Prototype (Satış Demosu & Kurumsal Sunum)
- **Implementation Planning**: standard (Agent-Ready Dalga Yönetimi)
- **Strateji Özeti**: Proje, Trakya Teknik Makine'nin mevcut SITE123 web sitesindeki doğrulanmış firma kimliği (Disan Hidrolik Trakya Bölge Yetkili Servisi) ve 3 temel hizmet alanını temel alarak, sırasıyla altyapı, ana karşılama alanı, kurumsal güven, hizmet kartları, iletişim ve bütüncül QA dalgaları halinde geliştirilecektir.

## 2. Phases / Milestones

- **Milestone 1: Project Scaffolding & Local Boundary Setup (Wave 00)**
  - Temel kod yapısı, CSS token'ları ve `companyService` / `contentAdapter` yerel mock data katmanı kurulur.
- **Milestone 2: Primary Entry & Identity Foundation (Wave 01 & Wave 02)**
  - Ziyaretçiyi karşılayan Header, Hero banner, Disan Hidrolik yetkili servis rozeti, hızlı iletişim bağlantıları ve kurumsal güven bölümü tamamlanır.
- **Milestone 3: Core Services & Direct Communication Presentation (Wave 03 & Wave 04)**
  - 3 temel hizmet alanı kartlar halinde sunulur ve doğrudan `tel:` / `mailto:` iletişim alanı tamamlanır.
- **Milestone 4: Final Cross-Cutting QA & Demo Publication (Wave 05)**
  - Çapraz cihaz responsive denetimi, tipografi denetimi ve satış demosu sunum kontrolü gerçekleştirilir.

## 3. Wave Relationship

- `PROJECT_PLAN.md` üst seviye yol haritasını yönetirken; adım adım teknik yürütme `waves/WAVE_MAP.md` ve detaylı dalga sözleşmeleri `waves/plans/WAVE_00.md` .. `WAVE_05.md` tarafından sağlanır.

## 4. Dependency Overview

- `WAVE_00` (Altyapı & CSS Token'ları) → Tüm dalgaların bağımlı olduğu temeldir.
- `WAVE_01` (Hero & Navigation) → `WAVE_02` (Kurumsal Güven) ve `WAVE_03` (Hizmetler) için önkoşuldur.
- `WAVE_04` (İletişim) → `WAVE_01..03` bileşenlerini takip eder.
- `WAVE_05` (Bütüncül QA) → Tüm dalgalar tamamlandıktan sonra yürütülür.

## 5. Deliverables

- `README.md` (Agent okuma sırası rehberi)
- Modüler frontend web demosu kaynak kodları (HTML/CSS/JS)
- `companyService` yerel mock data adapter katmanı
- Agent-ready dokümantasyon paketi (`ai/`, `project/`, `design/`, `waves/`)

## 6. Acceptance Conditions

- [ ] Arayüz ilk bakışta eski SITE123 sitesinden açıkça daha modern ve güven vericidir.
- [ ] Disan Hidrolik Bölge Yetkili Servis statüsü ve 3 temel hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) eksiksiz sunulmaktadır.
- [ ] Telefon ve e-posta doğrudan erişim CTA butonları sorunsuz çalışmaktadır.
- [ ] Sahte backend, uydurma veritabanı veya approved scope dışı modül eklenmemiştir.
- [ ] Tüm dalgalar (WAVE_00 - WAVE_05) doğrulanmıştır.

## 7. Scope Growth / Upgrade Boundaries

- **Bugünkü Scope**: Frontend satış demosu (`delivery_profile: Prototype`).
- **Gelecek Potansiyel Gelişimler (Future Scope)**:
  - Gerçek backend veya Headless CMS entegrasyonu (UI katmanına dokunmadan `companyService` API adapter'ına geçiş).
  - Canlı hosting/domain geçişi ve DNS operasyonları.
  - İletişim formu backend'i, harita veya WhatsApp entegrasyonu.
