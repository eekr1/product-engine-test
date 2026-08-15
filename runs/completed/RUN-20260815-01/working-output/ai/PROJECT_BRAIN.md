# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamak.
- **Delivery Profile**: Prototype
- **Implementation Planning**: standard
- **Design Planning**: light

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Trakya Teknik Makine'nin teknik servis gücünü, yetkili servis statüsünü ve hizmet alanlarını dijital ortamda modern, kurumsal ve güven verici bir biçimde yansıtan bir web varlığının ve satış görüşmelerinde müşterilere sunulabilecek yüksek kaliteli bir frontend demonun olmaması.
- **Değer Önermesi**: Potansiyel müşteri satış görüşmelerinde gösterilmek üzere; firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini öne çıkaran, modern responsive tasarıma sahip, temiz mimarili bir kurumsal frontend demo sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**:
  - Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler.
  - Yedek parça temini arayan makine ve ekipman kullanıcıları.
  - Yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar**:
  - Firma ve hizmet kapsamını değerlendiren satın alma ve operasyon sorumluları.
  - Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi (In Scope)**:
  - Modern ve responsive kurumsal frontend demo.
  - Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
  - Üç temel hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel ve metinsel sunumu.
  - Telefon ve e-posta direct-contact CTA yüzeyleri.
  - Mock/local içerik için temiz frontend service/data-access boundary.
  - Satış görüşmesinde gösterilebilir nitelikte tamamlanmış görsel ve işlevsel deneyim.
- **Kapsam Dışı (Out of Scope)**:
  - Gerçek admin paneli / CMS.
  - Backend, veritabanı veya gerçek API uygulaması.
  - Authentication, e-ticaret, ödeme, canlı harita, WhatsApp entegrasyonu, gerçek form submit backend'i, production deployment.
  - Source-backed olmayan firma iddiaları veya hizmet qualifier'ları (`stok`, `orijinal parça`, `mobil filo`, `SLA`, `periyodik bakım`, `revizyon` vb.).

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Frontend Web Demo (HTML5, Vanilla CSS, JS/ES Modules — modern responsive component yapısı).
- **Veri Mimarisi**: Mock/local static project data service layer (`companyService.js`). UI bileşenleri veriyi doğrudan service boundary üzerinden okur.
- **Backend / Integration Context**: Gerçek backend/API scope dışındadır; sahte endpoint veya database şeması üretilmez.

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Topic | Decision Summary | Rationale |
|---|---|---|---|
| DEC-001 | Delivery Purpose | Satış demosu frontend prototipi (`Prototype`) | Proaktif satış görüşmesinde müşteri sunumu hedeflenmektedir. |
| DEC-002 | Factual Content | Source-backed factual allowlist sınırlarına tam uyum | Firma adı, yetkili servis statüsü ve 3 approved hizmet dışında firma gerçeği uydurulamaz. |
| DEC-003 | Architecture | Clean frontend service/data-access boundary | UI bileşenlerine mock veri gömülmez; gelecekte gerçek backend geçişi desteklenir. |
| DEC-004 | Interaction Boundaries | WhatsApp, Canlı Harita, Form Submit Backend hariç tutuldu | Approved input kısıtları uyarınca scope dışı tutulmuştur. |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine generation aşamasında `WAVE_MAP` ve `WAVE_PLAN` dynamic instance'ları ile planlanmakta ve agent-ready duruma getirilmektedir.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
