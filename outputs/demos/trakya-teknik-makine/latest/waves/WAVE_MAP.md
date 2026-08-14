# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **WAPR-001 (Deterministic Decomposition):** Her uygulama dalgası (wave) tam, bağımsız ve doğrulanabilir bir teslimat birimini ifade eder.
- **WAPR-002 (Approved Scope Invariant):** Dalgalar yalnız `INPUT_SNAPSHOT.md` Approved Scope Registry (`SCP-001` .. `SCP-018`) içindeki onaylı maddeleri taahhüt edebilir. `VERIFIED_CURRENT_TRUTH` (referans gerçekler) veya `FUTURE`/`OUT_OF_SCOPE` maddeler uygulama dalgasına eklenemez.
- **WAPR-003 (Clean Responsibility Separation):** `DEMO_FRONTEND_PACKAGE` Deterministic Wave Granularity Guard gereğince:
  - Foundation (`WAVE_00`) kullanıcı arayüzü yüzeylerinden ayrılmıştır.
  - Hizmetler (`WAVE_03`) ile İletişim (`WAVE_04`) ayrı dalgalardadır.
  - Tüm projeyi kapsayan bağımsız QA & Polishing (`WAVE_05`) ayrı bir kapanış dalgasıdır.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Deliverables | Dependencies | Exit Boundary |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Technical Environment Setup | Modüler klasör yapısı, Vanilla CSS Design Tokens (`variables.css`), Local Mock Data Adapter (`companyData.js`), Ana HTML Kabuğu | None | Önizleme sunucusu sorunsuz çalışıyor, CSS değişkenleri aktif, mock veri servisi veri dönüyor |
| `WAVE_01` | Global Shell & Primary Entry | Header, Ana Gezinme Menüsü, Mobile Nav, Hero Section, Ana Mesaj ve Birincil CTA | `WAVE_00` | Hero alanı ve ana gezinme tüm kırılma noktalarında duyarlı çalışıyor |
| `WAVE_02` | Corporate Identity & Disan Trust | Hakkımızda Bölümü, Disan Hidrolik Trakya Yetkili Servis Güven Rozeti / Paneli | `WAVE_01` | Kurumsal güven unsurları ve yetkili servislik alanı görsel bütünlükle sunuluyor |
| `WAVE_03` | Services Presentation | 3 Temel Hizmet Kartı / Panelleri (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) | `WAVE_01` | 3 ana hizmet eşit görsel ağırlıkta ve teknik detaylarıyla sergileniyor |
| `WAVE_04` | Contact & Conversion CTA Surfaces | İletişim Bölümü, Telefon ve E-posta İletişim Bağlantıları (`tel:`, `mailto:`), Mock Validation Formu | `WAVE_02`, `WAVE_03` | İletişim kanalları erişilebilir, tıklanabilir ve form simülasyonu çalışıyor |
| `WAVE_05` | Final QA & Presentation Polish | Çapraz Cihaz / Tarayıcı Doğrulaması, Responsive Cilalama, Performans ve Erişim Kontrolü | `WAVE_04` | Sıfır konsol hatası, %100 responsive uyum ve eksiksiz satış demosu sunum kalitesi |

## 3. Dependency Chain

```text
WAVE_00 (Foundation)
   ↓
WAVE_01 (Global Shell & Hero)
   ├───────────────────────────────┐
   ↓                               ↓
WAVE_02 (Corporate & Trust)     WAVE_03 (Services)
   └───────────────────────────────┤
                                   ↓
                         WAVE_04 (Contact & CTA)
                                   ↓
                         WAVE_05 (Final QA & Polish)
```

## 4. Wave Entries

### WAVE_00: Foundation & Technical Environment Setup

- **Wave ID**: `WAVE_00`
- **Name**: Foundation & Technical Environment Setup
- **Goal**: Projenin modüler klasör mimarisini, Vanilla CSS Design Tokens altyapısını ve static mock data adapter katmanını kurmak.
- **Committed Capabilities**:
  - Modular directory structure | `SCP-001` | Proje klasör mimarisinin kurulması | PASS
  - Vanilla CSS design tokens | `SCP-001` | Renk, tipografi, spacing ve elevation token'larının CSS değişkenleri olarak tanımlanması | PASS
  - Static local mock data adapter | `SCP-006` | Clean service/data-access boundary ve local mock adapter modülü | PASS
  - HTML5 app shell | `SCP-001` | Temel HTML kabuğu ve dev server ortamı | PASS
- **In Scope**: Klasör yapısı, `index.html`, `index.css`, `variables.css`, `companyData.js` mock servisi.
- **Out of Scope**: Kullanıcı arayüzü bileşenlerinin görsel çizimi, sunucu altyapısı, backend API.
- **Primary Deliverables**: `src/` klasör yapısı, `variables.css`, `companyData.js`.
- **Dependencies**: None.
- **Exit Boundary**: Dev server sorunsuz açılıyor, CSS değişkenleri doğru yükleniyor, mock adapter `getCompanyInfo()` ve `getServices()` verilerini döndürüyor.

---

### WAVE_01: Global Shell & Primary Entry (Navigation & Hero Surface)

- **Wave ID**: `WAVE_01`
- **Name**: Global Shell & Primary Entry
- **Goal**: Sitenin üst gezinme kabuğunu (Header/Nav), mobil menüyü ve etkileyici Hero giriş alanını inşa etmek.
- **Committed Capabilities**:
  - Global Header & Navigation | `SCP-001` | Masaüstü ve mobil uyumlu üst gezinme menüsü | PASS
  - Primary Hero Section | `SCP-002` | Ana mesaj ve görsel vurgu alanı | PASS
  - Hero Primary Conversion CTA | `SCP-005` | Hero içi birincil iletişim/teklif butonları | PASS
- **In Scope**: Header, Logo alanı, Navigasyon bağlantıları, Mobile Hamburger Menu, Hero Başlığı, Alt Başlık, Hero CTA'ları.
- **Out of Scope**: Detaylı hizmet kartları, iletişim formu backend'i.
- **Primary Deliverables**: Header Bileşeni, Hero Section Bileşeni, Responsive Mobile Menu.
- **Dependencies**: `WAVE_00`.
- **Exit Boundary**: Header ve Hero alanı mobil (320px+) ve masaüstü (1440px+) ekranlarda tasarıma tam uygun çiziliyor, menü ve Hero CTA'ları çalışıyor.

---

### WAVE_02: Corporate Identity & Disan Authorized Service Trust

- **Wave ID**: `WAVE_02`
- **Name**: Corporate Identity & Disan Trust
- **Goal**: Trakya Teknik Makine'nin kurumsal geçmişini ve Disan Hidrolik Trakya Bölge Yetkili Servisi güven rozetini/panelini sunmak.
- **Committed Capabilities**:
  - Corporate About Section | `SCP-003` | Firmanın uzmanlık ve kurumsal tanıtım alanı | PASS
  - Disan Authorized Service Trust Badge / Panel | `SCP-003` | Disan Hidrolik yetkili servisliği doğrulama paneli | PASS
- **In Scope**: Kurumsal tanıtım metinleri, Yetkili Servis vurgu rozeti, güven unsurları.
- **Out of Scope**: Uydurma müşteri yorumları veya sahte başarı iddiaları.
- **Primary Deliverables**: About Section, Disan Service Trust Badge Panel.
- **Dependencies**: `WAVE_01`.
- **Exit Boundary**: Kurumsal bilgiler ve Disan yetkili servis rozeti görsel bütünlük ve yüksek okunabilirlikle sunuluyor.

---

### WAVE_03: Services Presentation (Spare Parts, On-Site Support, Maintenance/Repair)

- **Wave ID**: `WAVE_03`
- **Name**: Services Presentation
- **Goal**: Firmanın 3 ana hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) güçlü görsel kartlar ve teknik detaylarla sergilemek.
- **Committed Capabilities**:
  - Spare Parts Service Card | `SCP-004` | Yedek Parça Temini hizmet kartı | PASS
  - On-Site Support Service Card | `SCP-004` | Yerinde Teknik Destek hizmet kartı | PASS
  - Maintenance & Repair Service Card | `SCP-004` | Makine Bakım ve Onarım hizmet kartı | PASS
- **In Scope**: 3 ana hizmet kartı, hizmet detay açıklamaları, teknik ikonlar, hizmet içi iletişim yönlendirmeleri.
- **Out of Scope**: Hizmetler için backend veritabanı veya fiyatlandırma tablosu.
- **Primary Deliverables**: Service Section, 3 Adet Hizmet Kartı Bileşeni.
- **Dependencies**: `WAVE_01`.
- **Exit Boundary**: 3 hizmet kartı grid düzeninde eşit görsel ağırlıkla ve hover etkileşimleriyle sorunsuz sergileniyor.

---

### WAVE_04: Contact, Communication & Conversion CTA Surfaces

- **Wave ID**: `WAVE_04`
- **Name**: Contact & Conversion CTA Surfaces
- **Goal**: Ziyaretçilerin firmaya kolayca ulaşabileceği telefon/e-posta bağlantılarını ve frontend doğrulamalı iletişim formunu sunmak.
- **Committed Capabilities**:
  - Phone Direct Contact Link (`tel:`) | `SCP-005` | Doğrudan telefon arama bağlantısı | PASS
  - Email Direct Contact Link (`mailto:`) | `SCP-005` | Doğrudan e-posta gönderme bağlantısı | PASS
  - Contact Form Surface & Validation | `SCP-005` | Frontend onaylı iletişim formu | PASS
- **In Scope**: İletişim bilgileri kartı, tıklanabilir tel/mail yönlendirmeleri, frontend form doğrulaması ve mock başarı bildirimi.
- **Out of Scope**: Sunucu taraflı e-posta gönderimi veya veritabanı kaydı.
- **Primary Deliverables**: Contact Section, Phone/Email CTA Cards, Interactive Contact Form.
- **Dependencies**: `WAVE_02`, `WAVE_03`.
- **Exit Boundary**: Telefon ve e-posta bağlantıları tıklanabilir, form geçerli girdilerde yerel başarı bildirimi simüle ediyor.

---

### WAVE_05: Final Cross-Cutting Integration, Responsive Polish & Presentation QA

- **Wave ID**: `WAVE_05`
- **Name**: Final QA & Presentation Polish
- **Goal**: Sitenin tamamında çapraz cihaz/tarayıcı kontrolü, responsive cilalama, performans ve satış demosu sunum kalitesi doğrulamasını gerçekleştirmek.
- **Committed Capabilities**:
  - Cross-device responsive polish | `SCP-001` | Tüm kırılma noktalarında dikey/yatay hizalama ve aralık kontrolü | PASS
  - Zero console errors & accessibility QA | `SCP-001` | Konsol hatası, kırık bağlantı veya aria uyarısı olmaması | PASS
  - Sales demo presentation readiness | `SCP-001` | Satış görüşmesinde akıcı gösterim sunum kalitesi | PASS
- **In Scope**: Tüm sayfadaki görseller, animasyonlar, mobil kırılma noktaları, tipografi ve buton durumları.
- **Out of Scope**: Yeni özellik veya sayfa eklenmesi.
- **Primary Deliverables**: Nihai cilalanmış ve test edilmiş kurumsal frontend demo.
- **Dependencies**: `WAVE_04`.
- **Exit Boundary**: Sıfır hata, mükemmel responsive performans ve satış görüşmesine %100 hazır demosu.

## 5. Cross-Wave Invariants

- Hiçbir dalga `inputs/approved/` içindeki dondurulmuş proje gerçeklikleriyle çelişemez.
- Hiçbir dalga sahte API, backend veritabanı veya uydurulmuş yeni firma bilgisi üretemez.
- Tüm dalgalar `DESIGN_RULES.md` içindeki renk ve tipografi sistemine uymak zorundadır.

## 6. Global Exit / Handoff Rules

- `WAVE_05` başarıyla tamamlandığında, uygulama kodu lokal geliştirme ortamında `npm run dev` ile sıfır hatayla çalışır durumda teslim edilir.
