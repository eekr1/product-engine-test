# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Proje Türü**: `corporate-website`
- **Tanım**: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren çok sayfalı kurumsal web sitesi satış demosu olarak sunmak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Trakya Teknik Makine için proaktif satış görüşmelerinde gösterilebilecek, firmanın kurumsal kimliğini ve yetkili servis statüsünü yansıtan modern çok sayfalı bir web varlığının bulunmaması.
- **Değer Önermesi**: Trakya Teknik Makine kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini modern multi-page kurumsal web sitesi demosuyla sunarak "gerçek siteniz böyle olabilir" etkisini oluşturmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**:
  - Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler.
  - Yedek parça temini arayan makine ve ekipman kullanıcıları.
  - Yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar**:
  - Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.
  - Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 4. Temel Kapsam Özeti

- Modern, responsive multi-page corporate website frontend demo.
- 7 approved distinct routable sayfa (`PAGE-001` .. `PAGE-007`).
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin approved yüzeylerde sunumu.
- Üç temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) overview + detail presentation yüzeyleriyle sunumu.
- Direct contact kanalları (placeholder/unknown yönetimi).
- Mock/local content için clean service/data-access boundary.
- Same-codebase continuation hazırlığı.

## 5. Site / Surface Architecture Özeti

| Page ID | Page Name | Purpose | Route / Navigation Identity | Scope Status | Parent / Detail Relation |
|---|---|---|---|---|---|
| PAGE-001 | Ana Sayfa | Firma kimliğini, yetkili servis statüsünü, approved hizmet overview'ını ve keşif yollarını sunmak. | `/` / `home` | IN_SCOPE | Root |
| PAGE-002 | Kurumsal | Trakya Teknik Makine kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü sunmak. | `/kurumsal` / `corporate` | IN_SCOPE | Child of Root |
| PAGE-003 | Hizmetler | Üç approved hizmeti overview/discovery architecture içinde sunmak ve detail sayfalarına yönlendirmek. | `/hizmetler` / `services` | IN_SCOPE | Child of Root |
| PAGE-004 | Yedek Parça Temini — Hizmet Detayı | Approved `Yedek Parça Temini` hizmetini ayrı detail presentation yüzeyinde sunmak. | `/hizmetler/yedek-parca-temini` / `service-detail-spare-parts` | IN_SCOPE | Detail of PAGE-003 |
| PAGE-005 | Yerinde Teknik Destek — Hizmet Detayı | Approved `Yerinde Teknik Destek` hizmetini ayrı detail presentation yüzeyinde sunmak. | `/hizmetler/yerinde-teknik-destek` / `service-detail-onsite-support` | IN_SCOPE | Detail of PAGE-003 |
| PAGE-006 | Makine Bakım ve Onarım — Hizmet Detayı | Approved `Makine Bakım ve Onarım` hizmetini ayrı detail presentation yüzeyinde sunmak. | `/hizmetler/makine-bakim-onarim` / `service-detail-maintenance-repair` | IN_SCOPE | Detail of PAGE-003 |
| PAGE-007 | İletişim | Direct-contact capability'lerini ayrı iletişim yüzeyinde sunmak. | `/iletisim` / `contact` | IN_SCOPE | Child of Root |

## 6. Sistem Mimari Özeti

- **Teknoloji Yığını**: Vite + React + TypeScript, Vanilla CSS (Design Tokens + Modern Grid/Flexbox), Clean Data Adapter Boundary.
- **Routing**: Component-based Client Router (7 distinct routable surfaces).
- **Architecture Principle**: Presentation Layer → Service/Data Adapter Boundary → Local Mock Data (future API replacement without UI refactoring).

## 7. Kritik Kararlar Özet Tablosu

| Decision ID | Summary | Status | Provenance |
|---|---|---|---|
| DEC-001 | Base package is strictly `corporate-website` | User Approved | `PROJECT_INPUT.md` |
| DEC-002 | Approved 7-page architecture frozen without collapse | User Approved | `PROJECT_INPUT.md` |
| DEC-003 | Vite + React + TypeScript baseline for continuation | Engine Resolved | `TECH_CONTEXT.md` |
| DEC-004 | FCL boundary strictly enforced against unbacked claims | User Approved | `PROJECT_INPUT.md` |

## 8. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine planning completed; execution phase starting with Wave 00 setup.

## 9. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [CURRENT_STATUS.md](./CURRENT_STATUS.md)
