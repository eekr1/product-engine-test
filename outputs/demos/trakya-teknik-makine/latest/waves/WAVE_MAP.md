# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **WAP-01 (Executable Scope Alignment)**: Her wave yalnız `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` içinde açıkça onaylanmış executable capability atomlarını taşır.
- **WAP-02 (Granularity Guard)**: `demo-frontend` package rules uyarınca Services ve Contact sorumlulukları ayrı wave'lerde tutulmuş, whole-project QA son wave olarak izole edilmiştir.
- **WAP-03 (Service Boundary First)**: Foundation wave'i (WAVE_00) UI presentation katmanından önce temiz data/service boundary yapısını kurar.
- **WAP-04 (No Invented Scope)**: Form modalları, canlı harita entegrasyonları veya WhatsApp botları gibi onaylanmamış etkileşimler wave kapsamına alınamaz.

## 2. Wave Map Summary

| Wave ID | Wave Name | Goal | Delivery Scope Summary | Dependencies |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Service Boundary Setup | Proje temel yapısını, design token'ları ve local data adapter katmanını kurmak | HTML/CSS/JS baseline, CSS variables, `MachineService` local data adapter | None |
| `WAVE_01` | Hero & Corporate Trust Surface | İlk izlenim Hero alanı ve Disan Hidrolik yetkili servis kimliğini sunmak | Hero banner, Disan Hidrolik yetkili servis rozeti, Hakkında özeti | `WAVE_00` |
| `WAVE_02` | Services Presentation Surface | 3 temel hizmet alanının detaylı ve profesyonel sunumunu sağlamak | Yedek Parça, Yerinde Destek, Bakım-Onarım kartları ve detayları | `WAVE_01` |
| `WAVE_03` | Contact & Direct CTA Surface | İletişim bilgilerini ve doğrudan telefon/e-posta CTA'larını sunmak | Kurumsal adres, telefon (`tel:`) CTA, e-posta (`mailto:`) CTA | `WAVE_02` |
| `WAVE_04` | Final Cross-Surface QA & Presentation Verification | Bütüncül responsive uyumluluk, görsel tutarlılık ve satış demosu QA kontrolü | Responsive breakpoint QA, cross-browser kontrol, sunum testi | `WAVE_03` |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary)
   │
   ▼
WAVE_01 (Hero & Corporate Trust Surface)
   │
   ▼
WAVE_02 (Services Presentation Surface)
   │
   ▼
WAVE_03 (Contact & Direct CTA Surface)
   │
   ▼
WAVE_04 (Final Cross-Surface QA & Presentation Verification)
```

---

## 4. Wave Entries

### WAVE_00 — Foundation & Service Boundary Setup

- **Goal**: Projenin HTML/CSS/JS dosya yapısını, `DESIGN_RULES` renk ve tipografi token'larını ve `MachineService` local static data adapter katmanını kurmak.
- **Why Separate / Sequencing Rationale**: UI presentation katmanı yazılmadan önce clean data boundary ve CSS variable token'larının hazır olması gerekir; aksi takdirde component'ler içine veri/stil gömülerek spagetti mimari oluşur.
- **Committed Capabilities**:
  - HTML5/CSS3/JS projesi temel dosya yapısı | SCP-001 | Single Page Landing Page baseline | PASS
  - Design Token CSS Değişkenleri | SCP-003 | `#0F141C` antrasit, `#FF6B00` amber accent, Inter tipografi token'ları | PASS
  - `MachineService` Local Data Adapter | SCP-004 | Local JSON veri kaynağını async promise-ready interface üzerinden sunan adapter | PASS
- **In Scope**: Dosya yapısı (`index.html`, `src/styles/tokens.css`, `src/services/machineService.js`, `src/data/companyData.json`), font yüklemeleri, reset CSS.
- **Out of Scope**: Somut UI içerik bölümlerinin görsel tasarımı, sayfa içi zengin animasyonlar.
- **Primary Deliverables**: `index.html` iskeleti, `tokens.css`, `machineService.js`, `companyData.json`.
- **Dependencies**: None.
- **Upstream Boundary Consumed**: Baseline project environment.
- **Downstream Handoff**: `WAVE_01` için hazır CSS token'ları ve `MachineService` veri sağlayıcısı.
- **Exit Boundary**: UI bileşenleri `MachineService.getCompanyInfo()` çağrısını sorunsuz yapabilmeli, CSS variables yüklenmiş olmalı.

---

### WAVE_01 — Hero & Corporate Trust Surface

- **Goal**: Ziyaretçiyi karşılayan ilk izlenim Hero alanını, Disan Hidrolik Trakya Bölgesi Yetkili Servis rozetini ve Hakkımızda kurumsal özetini sunmak.
- **Why Separate / Sequencing Rationale**: Satış demosu için ilk 3 saniyede güven vermek kritiktir. Yetkili servis kimliği diğer hizmetlerden önce algılanmalıdır.
- **Committed Capabilities**:
  - Hero Karşılama Bölümü | SCP-001 | Kurumsal başlık, alt başlık ve hızlı CTA butonları | PASS
  - Disan Hidrolik Yetkili Servis Kimliği | SCP-002 | Disan Hidrolik Trakya Bölgesi Yetkili Servisi rozeti ve metinsel güvence | PASS
  - Kurumsal Hakkımızda Özeti | SCP-001 | Trakya Teknik Makine ağır sanayi tecrübesi özeti | PASS
- **In Scope**: Hero section layout'u, yetkili servis badge bileşeni, kurumsal tanıtım kartı.
- **Out of Scope**: 3 ana hizmetin detaylı listelenmesi, iletişim formu.
- **Primary Deliverables**: `HeroSection.js` / HTML yapısı, `TrustBadge` bileşeni, `AboutSection` yapısı.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` CSS token'ları ve `MachineService`.
- **Downstream Handoff**: `WAVE_02` için hazır üst sayfa düzeni.
- **Exit Boundary**: Hero ve kurumsal alan masaüstü ve mobil ekranlarda yüksek kontrast ve estetik duruşla işler durumda olmalı.

---

### WAVE_02 — Services Presentation Surface

- **Goal**: Firmanın 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detaylı, modern ve güven veren kartlarla sunmak.
- **Why Separate / Sequencing Rationale**: Hizmet sunumu firmanın ana teklifidir; Contact ve Hero sorumluluklarından bağımsız olarak kart yapısı, teknik detaylar ve ikincil eylemler içerecektir.
- **Committed Capabilities**:
  - Ana Hizmet 1: Yedek Parça Temini | SCP-005 | Orijinal yedek parça temini ve stok bilgisi sunumu | PASS
  - Ana Hizmet 2: Yerinde Teknik Destek | SCP-005 | Trakya bölgesi mobil teknik servis ve arıza müdahale sunumu | PASS
  - Ana Hizmet 3: Makine Bakım ve Onarım | SCP-005 | Hidrolik makine ve ağır sanayi ekipmanı periyodik bakım sunumu | PASS
- **In Scope**: 3'lü hizmet grid yapısı, hover efektli teknik detay kartları, ikonografik hizalama.
- **Out of Scope**: Sepet/e-ticaret, online randevu takvimi, sahte teklif alma formu.
- **Primary Deliverables**: `ServicesSection` yapısı, `ServiceCard` bileşenleri.
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` sayfa akışı ve `MachineService.getServices()` verisi.
- **Downstream Handoff**: `WAVE_03` için hazır hizmet bölümü.
- **Exit Boundary**: 3 hizmet alanı grid/flex yapısında düzgün sıralanmalı, kart hover etkileşimleri çalışmalıdır.

---

### WAVE_03 — Contact & Direct CTA Surface

- **Goal**: Doğrulanmış kurumsal iletişim bilgilerini ve cihaz uyumlu doğrudan telefon (`tel:`) ile e-posta (`mailto:`) CTA'larını sunmak.
- **Why Separate / Sequencing Rationale**: İletişim bölümü son dönüşüm noktasıdır. Backend'i olmayan güvenli doğrudan CTA'ları taşır.
- **Committed Capabilities**:
  - Doğrudan Telefon CTA (`tel:`) | SCP-006 | Tıklanabilir arama butonu | PASS
  - Doğrudan E-posta CTA (`mailto:`) | SCP-006 | Tıklanabilir e-posta gönderme butonu | PASS
  - Kurumsal Adres Bilgisi | SCP-006 | Doğrulanmış firma adres metni | PASS
- **In Scope**: İletişim kartı, tel/mailto linkleri, adres gösterimi.
- **Out of Scope**: Sahte form gönderme modalları, canlı harita widget'ı, WhatsApp botu.
- **Primary Deliverables**: `ContactSection` yapısı, `ContactCTA` bileşenleri.
- **Dependencies**: `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_02` sayfa yapısı ve firma iletişim verileri.
- **Downstream Handoff**: `WAVE_04` için tam içerikli sayfa yapısı.
- **Exit Boundary**: Telefon ve e-posta linkleri cihaz türüne uygun çalışmalı, adres bilgisi net okunmalıdır.

---

### WAVE_04 — Final Cross-Surface QA & Presentation Verification

- **Goal**: Sayfanın tamamında responsive breakpoint uyumluluğunu, visual token tutarlılığını ve satış demosu gösterim kalitesini doğrulamak.
- **Why Separate / Sequencing Rationale**: Granularity Guard kuralı uyarınca whole-project QA herhangi bir feature wave'inin içine gömülemez; bağımsız kapanış dalgası olarak yürütülmelidir.
- **Committed Capabilities**:
  - Responsive Breakpoint QA | SCP-001 | Mobil (320px+), Tablet (768px+), Desktop (1024px+) uyumluluk doğrulama | PASS
  - Visual Token & Contrast Verification | SCP-003 | WCAG AA kontrast ve renk tutarlılığı doğrulama | PASS
  - Presentation Readiness Verification | SCP-001 | Satış demosu akıcılık ve sıfır hata doğrulama | PASS
- **In Scope**: Tüm bölümlerin birleşik testi, cross-browser kontrolü, kırık link ve metin kontrolü.
- **Out of Scope**: Yeni özellik veya içerik ekleme.
- **Primary Deliverables**: Tamamlanmış ve doğrulanmış kurumsal frontend demo paketi.
- **Dependencies**: `WAVE_03`.
- **Upstream Boundary Consumed**: `WAVE_00` - `WAVE_03` tamamlanmış kod tabanı.
- **Downstream Handoff**: Published release (`outputs/demos/trakya-teknik-makine/latest/`).
- **Exit Boundary**: Bütün responsive kontroller geçmeli, konsolda hata olmamalı, satış demosu sunuma hazır olmalıdır.

---

## 5. Cross-Wave Invariants

- **CWI-01**: Hiçbir wave sahte backend veya sahte form/modal icat edemez.
- **CWI-02**: Görsel tasarım sistemi (`DESIGN_RULES`) tüm wave'lerde tek otoritedir.
- **CWI-03**: `MachineService` veri katmanı UI bileşenlerinden ayrı tutulacaktır.

## 6. Global Exit / Handoff Rules

- Her wave tamamlandığında `working-output/waves/plans/WAVE_<NN>.md` planı doğrulanacaktır.
- `WAVE_04` tamamlanmadan paket `outputs/demos/trakya-teknik-makine/latest/` konumuna yayınlanamaz.
