# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Proaktif satış görüşmesinde gösterilmek üzere Trakya Teknik Makine'nin kurumsal kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini modern, responsive ve güven veren bir görsel sunumla ortaya koyan kurumsal frontend demoyu hazırlamaktır.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Trakya Teknik Makine için firmanın ne yaptığını ve teknik servis bağlamını hızlı anlatan, hizmetlerini güçlü biçimde sunan ve satış görüşmesinde gösterilebilecek modern bir kurumsal frontend demoya ihtiyaç vardır.
- **Değer Önermesi**: Trakya bölgesindeki endüstriyel makine kullanıcılarına ve potansiyel müşterilere firmanın yetkili servis güvencesini, 3 temel hizmet alanını ve doğrudan iletişim kanallarını modern, profesyonel bir arayüzle sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**:
  - Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan endüstriyel işletmeler.
  - Yedek parça temini arayan makine ve ekipman kullanıcıları.
  - Yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar**:
  - Firma ve hizmet kapsamını değerlendiren satın alma ve operasyon sorumluları.
  - Trakya Teknik Makine ile doğrudan iletişime geçmek isteyen müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi (In Scope)**:
  - Modern ve responsive kurumsal frontend demo.
  - Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
  - Üç temel hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel hiyerarşi ile sunumu.
  - Telefon (`tel:`) ve E-posta (`mailto:`) direct-contact CTA yüzeyleri.
  - Mock/local static içerik için temiz frontend service/data-access boundary.
- **Kapsam Dışı (Out of Scope)**:
  - Gerçek admin paneli / CMS.
  - Backend, veritabanı veya gerçek API uygulaması.
  - Authentication / Yetkilendirme.
  - E-ticaret / online ödeme / canlı harita / WhatsApp entegrasyonu / gerçek form submit backend'i.
  - Source-unbacked firma iddiaları (stok, mobil filo, acil müdahale, SLA, makine türü, çalışma saati, sertifika, referans, adres).

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5, CSS3 (Vanilla CSS), JavaScript (ES Module static mock adapter architecture).
- **Service/Data Access Boundary**: UI bileşenleri veriyi doğrudan component içinde tutmaz; local mock service adapter interface'i üzerinden tüketir.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Seçilen Karar | Durum |
|---|---|---|---|
| DEC-001 | Delivery Profile | `Prototype` (Satış demosu amaçlı temiz frontend) | Approved |
| DEC-002 | Planning Profiles | `implementation_planning: standard`, `design_planning: light` | Approved |
| DEC-003 | Source-Closed Boundary | Source-unbacked hiçbir firma/hizmet gerçeği uydurulamaz | Approved |
| DEC-004 | Backend Scope | Gerçek backend yok; temiz service/data access boundary ile mock static adapter | Approved |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Initial Product Engine Output Generation (`v0.1`). Kapsam dondurulmuş ve dökümantasyon paketi agent-ready seviyede üretilmiştir.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
