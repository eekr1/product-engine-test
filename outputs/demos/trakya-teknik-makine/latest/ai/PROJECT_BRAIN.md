# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Delivery Profile**: Prototype
- **Implementation Planning**: standard
- **Design Planning**: light
- **Tanım**: Trakya Teknik Makine firmanın ne yaptığını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve üç onaylı hizmetini profesyonel, modern ve güven veren bir kurumsal frontend demoya dönüştürmek.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Trakya Teknik Makine'nin potansiyel satış görüşmelerinde gösterilebilecek, firma uzmanlığını ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü güçlü şekilde yansıtan modern bir kurumsal web varlığının/demosunun bulunmaması.
- **Değer Önermesi**: Ziyaretçilerin ilk bakışta firma uzmanlığını, yetkili servis statüsünü ve üç onaylı hizmetini güvenle anlamasını sağlayan, direct-contact CTA'larına erişim sunan, modüler frontend data boundary yapısına sahip satış demosu.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Müşteriler**: Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine ve ekipman kullanıcıları, yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Müşteriler**: Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Modern ve responsive kurumsal frontend demo (landing page).
  - Trakya Teknik Makine firma kimliği ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünün sunumu.
  - Üç onaylı hizmetin görsel sunumu (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`).
  - Direct-contact telefon/e-posta CTA yüzeyleri (code/config seviyesinde kalan fallback değerler).
  - Clean frontend service/data-access boundary (mock/local content configuration).
- **Kapsam Dışı**:
  - `Yedek Parça Temini` ifadesini stok, orijinal parça, belirli marka/parça garantisi iddialarıyla genişletmek.
  - `Yerinde Teknik Destek` ifadesini mobil filo, acil müdahale, SLA veya müdahale süresi iddialarıyla genişletmek.
  - `Makine Bakım ve Onarım` ifadesini periyodik bakım, revizyon, hidrolik pres/güç ünitesi gibi alt hizmetlerle genişletmek.
  - Adres, telefon, e-posta, çalışma saati, sertifika, referans exact değerlerini uydurmak.
  - Gerçek admin paneli / CMS, veritabanı, backend API, authentication, canlı harita, WhatsApp, form submit backend'i.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Client-side modern HTML/CSS/JavaScript kurumsal frontend demo.
- **Data Boundary**: Presentation component'lerinden izole edilmiş, yerel static JSON/JS mock configuration katmanı.

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Karar | Gerekçe | Durum |
|---|---|---|---|
| DEC-001 | Satış Görüşmesi Demosu | Öncelik satış sunumu için responsive frontend prototype geliştirmektir. | Approved Input |
| DEC-002 | Strict FCL Boundary | Source allowlist dışındaki firma, hizmet alt detayları veya uydurma iletişim bilgisi eklenmeyecektir. | Approved Input |
| DEC-003 | Clean Data Boundary | UI component'leri hardcode veri yerine local data config/adapter katmanına bağlanacaktır. | Approved Input |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine `RUN-20260817-002` generation yürütülmektedir (`delivery_profile: Prototype`).
- **Mevcut Faz**: Wave 00..05 delivery pipeline planning & static package generation.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
