# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Proje Türü**: `corporate-website`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `standard`
- **Tanım**: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren çok sayfalı kurumsal web sitesi satış demosu (`corporate-website`) olarak sunmak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Trakya Teknik Makine için tek sayfalık jenerik tanıtım yetersizdir. Firmanın teknik yetkinliğini, Disan Hidrolik yetkili servis statüsünü ve 3 temel hizmetini ayrı keşif/detay sayfalarıyla sunan kurumsal güven odaklı bir web demosuna ihtiyaç duyulmaktadır.
- **Değer Önermesi**: Yetkili servis kimliğini ve hizmet alanlarını 7 bağımsız routable sayfa ile sergileyen, potansiyel müşterilere "gerçek kurumsal siteniz böyle olabilir" hissi veren, aynı codebase üzerinde gelecekteki backend/CMS büyümesine hazır modern frontend mimarisi.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine ve ekipman kullanıcıları, yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar**: Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, direct contact ile firma yetkililerine ulaşmak isteyen ziyaretçiler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Modern, responsive, 7 sayfalı kurumsal web sitesi frontend demosu.
  - Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliği sunumu.
  - 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) overview ve ayrı detay sayfaları.
  - Telefon ve e-posta doğrudan iletişim (direct-contact capability) sınırı (exact değer sağlandığında render edilir).
  - Gerçek rotalama sağlanan multi-page navigasyon (distinct routable surfaces).
  - Clean frontend service / data-access boundary.
  - Gelecekte aynı kod tabanı üzerinde büyüme hazırlığı (same-codebase continuation).
- **Kapsam Dışı**:
  - Gerçek admin paneli / CMS.
  - Backend veritabanı veya gerçek API implementation.
  - Authentication, e-ticaret veya online ödeme.
  - Canlı harita, WhatsApp entegrasyonu.
  - İletişim formu, demo form, mesaj gönderme etkileşimi, form input alanları veya form başarı/hata durumları.
  - Source dosyada bulunmayan referans, müşteri logosu, şirket tarihçesi, sertifika, ekip veya kapasite iddiaları.

## 5. Site / Surface Architecture Özeti

| Page ID | Page Name | Route Identity | Purpose |
|---|---|---|---|
| `PAGE-001` | Ana Sayfa | `/` | Firma kimliğini, yetkili servis statüsünü, 3 hizmet özetini ve site içi keşif yollarını ana giriş yüzeyinde sunmak. |
| `PAGE-002` | Kurumsal | `/kurumsal` | Trakya Teknik Makine kurumsal kimliğini ve Disan yetkili servis statüsünü ayrı sayfada sunmak. |
| `PAGE-003` | Hizmetler | `/hizmetler` | 3 onaylı hizmeti overview mimarisi içinde sunmak ve detay sayfalarına yönlendirmek. |
| `PAGE-004` | Yedek Parça Temini — Hizmet Detayı | `/hizmetler/yedek-parca-temini` | Yedek Parça Temini hizmetini ayrı detay yüzeyinde sunmak. |
| `PAGE-005` | Yerinde Teknik Destek — Hizmet Detayı | `/hizmetler/yerinde-teknik-destek` | Yerinde Teknik Destek hizmetini ayrı detay yüzeyinde sunmak. |
| `PAGE-006` | Makine Bakım ve Onarım — Hizmet Detayı | `/hizmetler/makine-bakim-onarim` | Makine Bakım ve Onarım hizmetini ayrı detay yüzeyinde sunmak. |
| `PAGE-007` | İletişim | `/iletisim` | Telefon ve e-posta doğrudan iletişim kanallarını ayrı sayfada sunmak. |

## 6. Sistem Mimari Özeti

- **Teknoloji Yığını**: Vite + React + TypeScript + Vanilla CSS / Modern CSS Variables + React Router DOM.
- **Mimari Yaklaşım**: Package-managed, component-oriented, clean service/data-access boundary taşıyan same-codebase continuation mimarisi.
- **Veri Yaklaşımı**: Local mock fixture verisi; soyutlanmış data-access adapter katmanı üzerinden UI'a sunulur.

## 7. Kritik Kararlar Özet Tablosu

| ID | Subject | Decision | Status | Source |
|---|---|---|---|---|
| `DEC-001` | Base Package | Select `corporate-website` base package | `Engine Resolved` | `engine/PACKAGE_RULES.md` |
| `DEC-002` | Frontend Stack | Vite + React + TypeScript + React Router baseline | `Engine Resolved` | `engine/PLANNING_PROFILES.md` |
| `DEC-003` | Page Breadth | 7 distinct routable pages (`PAGE-001` to `PAGE-007`) | `User Approved` | Approved Project Input |
| `DEC-004` | Contact Scope | Direct phone & email contact links only; no form/submit/map/WhatsApp | `User Approved` | Approved Project Input |
| `DEC-005` | Design Direction | Koyu antrasit yüzey + amber/turuncu vurucu vurgular | `User Approved` | Approved Project Input |

## 8. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: `Ready for Execution`
- **Aktif Dalga**: `WAVE_00` — Foundation & Engineering Baseline

## 9. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
