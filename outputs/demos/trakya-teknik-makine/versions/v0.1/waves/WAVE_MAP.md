# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Deterministic Wave Granularity**: Delivery wave'leri bağımsız olarak doğrulanabilir ve tamamlanmış teslimat birimlerine bölünmüştür. Foundation, Primary Entry/Hero, Services Presentation, Corporate & Contact Conversion ve Final Cross-Cutting QA kesin sınırlarla ayrılmıştır.
- **Acyclic Dependency Hierarchy**: Bağımlılık zinciri `WAVE_00` -> `WAVE_01` -> `WAVE_02` -> `WAVE_03` -> `WAVE_04` şeklinde tek yönlü ve döngüsüzdür.
- **No Hidden Capabilities**: Her wave'in In Scope, Primary Deliverables ve Exit Boundary alanlarındaki yetenekleri Committed Capabilities tablosunda açıkça listelenmiş ve approved SCP kayıtları ile eşleştirilmiştir.

## 2. Wave Map Summary

| Wave ID | Wave Name | Goal | Dependencies | Deliverables Count |
|---|---|---|---|---|
| WAVE_00 | Foundation & Environment Setup | Proje yapısı, CSS design tokens ve CompanyService data adapter altyapısının kurulması. | None | 5 |
| WAVE_01 | Brand & Primary Entry / Hero Presentation | Header navigation, Disan Hidrolik yetkili servis duyurusu ve Hero bölümünün inşası. | WAVE_00 | 3 |
| WAVE_02 | Services & Technical Capability Presentation | 3 temel hizmet alanının (Yedek Parça, Yerinde Destek, Bakım-Onarım) detaylı kartlarla sunulması. | WAVE_00, WAVE_01 | 3 |
| WAVE_03 | Corporate Identity & Direct Contact Conversion | Kurumsal güven, Trakya bölge servis gücü ve doğrudan telefon/e-posta iletişim alanının inşası. | WAVE_01, WAVE_02 | 3 |
| WAVE_04 | Cross-Cutting Integration, Responsive & Presentation QA | Proje geneli responsive uyumluluk, service boundary denetimi ve satış sunumu hazırlığı. | WAVE_00..WAVE_03 | 2 |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary)
  └──> WAVE_01 (Header & Hero Presentation)
        └──> WAVE_02 (Services Grid & Technical Cards)
              └──> WAVE_03 (Corporate & Contact Conversion)
                    └──> WAVE_04 (Cross-Cutting QA & Presentation Readiness)
```

## 4. Wave Entries

### Wave 00: Foundation & Environment Setup

- **Wave ID**: WAVE_00
- **Name**: Foundation & Environment Setup
- **Goal**: Proje altyapısının, endüstriyel CSS tasarım sistemi token'larının ve presentation-service ayrımını sağlayan `CompanyService` mock adapter mimarisinin kurulması.
- **Committed Capabilities**:
  - Modüler frontend proje yapısı | SCP-001 | Modern responsive kurumsal demo altyapısı | PASS
  - Service layer & Local data adapter boundary (`CompanyService`, `LocalCompanyAdapter`) | SCP-006 | Sahte backend uydurmadan data-access boundary | PASS
  - Temel mock veri modelleri (`CompanyData`, `ServicesData`) | SCP-007 | Doğrulanmış firma verilerinin korunması | PASS
- **In Scope**: Proje klasör yapısı, `index.html` temel iskelet, `css/main.css` design tokens, `js/services/CompanyService.js`, `js/data/CompanyData.js` ve `js/data/ServicesData.js`.
- **Out of Scope**: Belirli sayfa görselleri, canlı harita, backend endpoint'leri.
- **Primary Deliverables**: `index.html`, `css/main.css`, `js/services/CompanyService.js`, `js/data/CompanyData.js`, `js/data/ServicesData.js`.
- **Dependencies**: None.
- **Exit Boundary**: Temel HTML/CSS iskeleti hazır, `CompanyService` konsoldan veri döndürebilir durumda.

---

### Wave 01: Brand & Primary Entry / Hero Presentation

- **Wave ID**: WAVE_01
- **Name**: Brand & Primary Entry / Hero Presentation
- **Goal**: Header navigation, Trakya Teknik Makine marka alanı, Disan Hidrolik Trakya Bölge Yetkili Servisi unvanı duyurusu ve doğrudan iletişim CTA'larını içeren Hero alanının inşası.
- **Committed Capabilities**:
  - Navigation Header & Kurumsal Marka Kimliği | SCP-002 | Ana sayfa karşılama ve logo/marka alanı | PASS
  - Disan Hidrolik Trakya Bölge Yetkili Servisi Duyurusu | SCP-002 | Servis yetki unvanı vurgusu | PASS
  - Hero karşılama ve doğrudan telefon/e-posta CTA'ları | SCP-005 | Temel doğrudan iletişim CTA'ları | PASS
- **In Scope**: Responsive Navigation Header, Disan Hidrolik Badge, Hero karşılama metinleri, doğrudan `tel:` ve `mailto:` bağlantı butonları.
- **Out of Scope**: Hizmet kartları detayları, kurumsal hakkımızda bölümü, form submit simülasyonu, WhatsApp widget'ı.
- **Primary Deliverables**: Header Component (`js/components/Header.js`), Hero Component (`js/components/Hero.js`), Hero CSS stilleri.
- **Dependencies**: WAVE_00.
- **Exit Boundary**: Masaüstü ve mobilde uyumlu Header ve Hero bölümü eksiksiz görüntüleniyor; CTA butonları tıklanabilir.

---

### Wave 02: Services & Technical Capability Presentation

- **Wave ID**: WAVE_02
- **Name**: Services & Technical Capability Presentation
- **Goal**: Trakya Teknik Makine'nin 3 temel hizmet alanının (Yedek Parça Temini, Yerinde Teknik Destek, Bakım & Onarım) detaylı kartlar, teknik vurgular ve endüstriyel ikonlarla sunulması.
- **Committed Capabilities**:
  - Yedek Parça Temini Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | PASS
  - Yerinde Teknik Destek Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | PASS
  - Bakım & Onarım Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | PASS
- **In Scope**: Services Grid bölümü, 3 adet detaylı hizmet kartı (görsel/ikon, açıklama, teknik avantajlar), `CompanyService` entegrasyonu.
- **Out of Scope**: E-ticaret sepet/ödeme, backend veri kaydı.
- **Primary Deliverables**: Services Component (`js/components/Services.js`), Service Card Component, Services CSS Grid stilleri.
- **Dependencies**: WAVE_00, WAVE_01.
- **Exit Boundary**: 3 hizmet alanı `CompanyService` verisinden dinamik render ediliyor; responsive grid düzeni aktif.

---

### Wave 03: Corporate Identity & Direct Contact Conversion

- **Wave ID**: WAVE_03
- **Name**: Corporate Identity & Direct Contact Conversion
- **Goal**: Firmanın Trakya bölgesi servis gücünü, teknik yetkinliğini ve doğrudan iletişim bilgilerini sunan kurumsal bölüm ile iletişim ve footer alanının inşası.
- **Committed Capabilities**:
  - Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | SCP-004 | Kurumsal güven ve bölge odaklı yetkinlik tanıtımı | PASS
  - İletişim Bilgileri ve Doğrudan Erişilebilir Telefon/E-posta CTA'ları | SCP-005 | Doğrudan iletişim CTA'ları erişimi | PASS
- **In Scope**: Hakkımızda & Bölge Yetkinlik bölümü, İletişim Bilgileri kartı, dikey/yatay doğrudan telefon (`tel:`) ve e-posta (`mailto:`) bağlantıları, Footer hızlı erişim alanı.
- **Out of Scope**: Form backend gönderimi, Google Maps API, WhatsApp sohbet widget'ı.
- **Primary Deliverables**: About Component (`js/components/About.js`), Contact Component (`js/components/Contact.js`), Footer Component (`js/components/Footer.js`).
- **Dependencies**: WAVE_01, WAVE_02.
- **Exit Boundary**: Kurumsal bilgi ve iletişim alanları tamamlandı; mobil ve masaüstü erişim sorunsuz.

---

### Wave 04: Cross-Cutting Integration, Responsive & Presentation QA

- **Wave ID**: WAVE_04
- **Name**: Cross-Cutting Integration, Responsive & Presentation QA
- **Goal**: Proje geneli responsive uyumluluk denetimi, visual polish, service boundary doğrulaması ve satış görüşmesi demo hazırlığının tamamlanması.
- **Committed Capabilities**:
  - Proje Geneli Responsive ve Mobil Uyum Doğrulaması | SCP-001 | Responsive kurumsal frontend demo uygulaması | PASS
  - Presentation Readiness & Service Boundary Audit | SCP-006 | Clean data-access boundary denetimi | PASS
- **In Scope**: Tüm cihaz boyutlarında (375px - 1440px+) responsive düzen testi, CSS variables audit, console hatası denetimi, satış görüşmesi sunum testi.
- **Out of Scope**: Yeni özellik ekleme, scope dışı kütüphane dahil etme.
- **Primary Deliverables**: Bütünleşik ve doğrulanmış frontend demo paket son hali, clean code & dokümantasyon hizalaması.
- **Dependencies**: WAVE_00, WAVE_01, WAVE_02, WAVE_03.
- **Exit Boundary**: Demo 0 konsol hatasıyla çalışıyor; satış görüşmesinde gösterilmeye %100 hazır.

## 5. Cross-Wave Invariants

- **Quality Invariant**: Demo/prototype olması hiçbir wave'de tasarım, kod veya mimari kalite tabanını düşüremez.
- **Scope Invariant**: Form backend, canlı harita veya WhatsApp entegrasyonu hiçbir wave'e gizlice eklenemez.
- **Data Boundary Invariant**: Hiçbir UI bileşeni veri ihtiyacını `CompanyService` katmanı dışından doğrudan hardcoded HTML olarak çözemez.

## 6. Global Exit / Handoff Rules

- Her wave tamamlandığında ilgili checklist `[x]` olarak güncellenir.
- Bir sonraki wave, önceki wave'in Exit Boundary koşulları tam olarak sağlanmadan başlatılamaz.
- Satış görüşmesi demosu `WAVE_04` QA onayından sonra yayına/sunuma hazır kabul edilir.
