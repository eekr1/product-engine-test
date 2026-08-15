# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin kurumsal kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini potansiyel müşteri ve satış görüşmelerinde etkileyici biçimde sunan modern kurumsal frontend demo.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Firmanın ne yaptığını hızlı anlatan, yetkili servis statüsünü ve hizmetlerini güçlü biçimde sunan ve potansiyel satış görüşmelerinde gösterilebilecek modern bir kurumsal web sitesi demosunun eksikliği.
- **Değer Önermesi**: Trakya Teknik Makine'nin Disan Hidrolik Makine Trakya Bölge Yetkili Servisliği güvenini, yedek parça temini, yerinde teknik destek ve makine bakım-onarım uzmanlığını modern ve güven veren endüstriyel görsel dille hızlıca aktarmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine/ekipman kullanıcıları ve yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar**: Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi tanıtımı, 3 approved hizmet sunumu (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım), direct-contact CTA yüzeyleri (telefon/e-posta), temiz local mock data adapter mimarisi.
- **Kapsam Dışı**: CMS, gerçek backend/database/API uygulaması, yetkilendirme/auth, e-ticaret, canlı harita, WhatsApp entegrasyonu, form submit backend'i, uydurma firma bilgileri/çalışma saatleri/adres/sertifikalar.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5, Vanilla CSS3 (Custom Properties & Design Tokens), Vanilla JavaScript (ES6+ Modules), local static data adapter.
- **Mimari Yaklaşım**: Presentation katmanı ile veri erişimini ayıran decoupled local mock adapter mimarisi.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Seçim / Karar | Gerekçe |
|---|---|---|---|
| `DEC-01` | Proje Kapsamı | Sales-ready frontend demo | Satış görüşmesinde hızlı gösterim ve kurumsal sunum ihtiyacı. |
| `DEC-02` | Backend & Data Boundary | Local mock static adapter | Gerçek backend approved scope dışındadır; sahte backend yazmak yasaktır. |
| `DEC-03` | Tasarım Yönü | Özel endüstriyel görsel kimlik | Generic lacivert hero + 3 kart klişesinden kaçınma kuralı. |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: `project_state: new` — Dokümantasyon paketi v0.2.0 standardında hazırlanmaktadır. İlk dalga (`WAVE_00`) bootstrapped aşamasındadır.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün kuralları ve kapsam sınırları.
- [TECH_CONTEXT.md](../tech/TECH_CONTEXT.md) — Teknik mimari ve data boundary detayları.
- [DESIGN_RULES.md](../design/DESIGN_RULES.md) — Tasarım ilkeleri ve tipografi.
- [WAVE_MAP.md](../waves/WAVE_MAP.md) — Uygulama dalga haritası.
- [DECISIONS.md](./DECISIONS.md) — Alınan kararlar kaydı.
