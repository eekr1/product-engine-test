# Fizyoterapist Eda Pala Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

1. **Strict Approved Executable Scope Alignment**: Yalnız approved executable scope (`SCP-001`..`SCP-005`) kapsamındaki capability'ler wave'lere dağıtılmıştır. Sağlık/klinik/tedavi uydurmaları veya scope dışı interaction'lar (harita, randevu, WhatsApp, form backend) wave map'e sızdırılamaz.
2. **Sequential Prerequisite Order**: Temiz frontend yapısı ve local content config şeması (`WAVE_00`) öncelikle kurulur, ardından tasarım sistemi ve layout shell (`WAVE_01`), ardından Hero & Profil sunumu (`WAVE_02`), ve son olarak Konum ve Outbound Instagram CTA entegrasyonu (`WAVE_03`) tamamlanır.
3. **No Hidden Capabilities Invariant**: Her wave'in summary, goal, deliverables ve exit boundary alanlarındaki tüm capability atomları `Committed Capabilities` tablosunda eksiksiz listelenir.
4. **Delivery Maturity Wording**: Delivery profile `Prototype` seviyesindedir. Maturity dili `sales-demo ready`, `validated prototype` sınırında kalır; `production-ready` veya `launch-ready` claim'i yapılmaz.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Goal | Delivery Maturity Target | Dependencies |
|---|---|---|---|---|
| WAVE_00 | Foundation, Stack Setup & Local Content Config Schema | Vanilla HTML5/CSS3/JS modüler altyapısını ve `content.config.js` local adapter katmanını kurmak | Validated Prototype Foundation | None |
| WAVE_01 | Design System, Typography & Layout Shell | `DESIGN_RULES.md` uyarınca tasarım token'larını, tipografi ölçeklerini, renk paletini ve responsive layout shell'i oluşturmak | Validated Prototype Shell | WAVE_00 |
| WAVE_02 | Hero & Professional Profile Section | Eda Pala adı, Fizyoterapist unvanı ve kişisel marka tanıtım alanını modern editoryal düzenle inşa etmek | Validated Prototype Component | WAVE_01 |
| WAVE_03 | Trust, Location Context & Outbound Link Integration | Tekirdağ konum bağlamını sunmak ve onaylı Instagram profiline outbound CTA entegrasyonunu tamamlayarak demoyu tamamlamak | Sales-Demo Ready Prototype | WAVE_02 |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Local Content Config)
   │
   ▼
WAVE_01 (Design System, Tokens & Layout Shell)
   │
   ▼
WAVE_02 (Hero & Professional Profile Section)
   │
   ▼
WAVE_03 (Location Context & Outbound Link Integration)
```

## 4. Wave Entries

### WAVE_00: Foundation, Stack Setup & Local Content Config Schema

- **Goal**: Vanilla HTML5/CSS3/JS modüler dosya yapısını, semantic HTML5 skeleton'ı ve presentation component'lerini hardcode metinlerden ayıran `src/config/content.config.js` ile `src/adapters/contentAdapter.js` mimarisini kurmak.
- **Why Separate / Sequencing Rationale**: Bileşenler yazılmadan önce veri mimarisinin ve içerik katmanının izole edilmesi zorunludur. Gelecekte gerçek veriler veya backend geldiğinde bileşen kodunun değişmemesini sağlar.
- **Committed Capabilities**:

| Capability Atom | Approved Support ID(s) | Support Status | Support Executable Flag | Support Meaning | Eligibility Result | Semantic Subset Result | Map Subset Result |
|---|---|---|---|---|---|---|---|
| Vanilla HTML5/CSS3/JS Modüler Frontend Altyapısı | SCP-001 | IN_SCOPE | YES | Modern responsive profesyonel frontend demo | PASS | PASS | PASS |
| Presentation Local Content Config & Adapter Boundaries | SCP-004 | IN_SCOPE | YES | Temiz frontend mimarisi ve local content configuration boundary | PASS | PASS | PASS |
| Frontend Proaktif Satış Demosu Temeli | SCP-005 | KNOWN_DECISION | YES | Satış demosu için proaktif landing page sunumu | PASS | PASS | PASS |

- **In Scope**: Dosya ve klasör dizin şeması, `index.html` semantic kök yapısı, `src/config/content.config.js` factual içerik şeması (`FCL-001`..`FCL-004`), `src/adapters/contentAdapter.js` adaptör fonksiyonu, `src/app.js` başlatıcı.
- **Out of Scope**: CSS tasarım token'ları ve görsel stiller, sayfa bölümlerinin görsel tasarımı, dış API/backend entegrasyonları.
- **Primary Deliverables**: `index.html`, `src/config/content.config.js`, `src/adapters/contentAdapter.js`, `src/app.js`.
- **Dependencies**: None.
- **Upstream Boundary Consumed**: Canonical approved input (`INPUT_SNAPSHOT.md`) ve project source truth (`SRC-01`).
- **Downstream Handoff**: `WAVE_01` için modüler JS içerik adaptörü ve temiz HTML DOM yapısı teslim edilir.
- **Exit Boundary**: `contentAdapter.getContent()` metodu `FCL-001`..`FCL-004` factual verilerini başarıyla döndürür; HTML kök elemanı DOM'a sorunsuz yüklenir.

---

### WAVE_01: Design System, Typography & Layout Shell

- **Goal**: `DESIGN_RULES.md` ile tanımlanan renk paletini (`#FDFBF7`, `#3A5A40`, `#1F2421`), Google Font Outfit tipografisini, CSS custom properties token'larını ve responsive layout container grid'ini inşa etmek.
- **Why Separate / Sequencing Rationale**: Görsel bileşenlerin ve içerik bölümlerinin tutarlı görünmesi için global tasarım kurallarının ve responsive grid'in bağımsız bir wave olarak önceden hazırlanması gerekir.
- **Committed Capabilities**:

| Capability Atom | Approved Support ID(s) | Support Status | Support Executable Flag | Support Meaning | Eligibility Result | Semantic Subset Result | Map Subset Result |
|---|---|---|---|---|---|---|---|
| CSS Custom Properties & Design Tokens System | SCP-001 | IN_SCOPE | YES | Modern responsive profesyonel frontend demo | PASS | PASS | PASS |
| Responsive Layout Container & Main Grid Shell | SCP-001 | IN_SCOPE | YES | Modern responsive profesyonel frontend demo | PASS | PASS | PASS |
| Proaktif Visual Direction Shell | SCP-005 | KNOWN_DECISION | YES | Satış demosu için proaktif landing page sunumu | PASS | PASS | PASS |

- **In Scope**: `styles/tokens.css` (renkler, fontlar, spacing, elevation), `styles/main.css` (reset, layout container, responsive grid, header/footer shell), Google Fonts Outfit yükleme.
- **Out of Scope**: Hero ve Profil bölümüne özel bileşen CSS'leri, Instagram CTA buton detayları.
- **Primary Deliverables**: `styles/tokens.css`, `styles/main.css`.
- **Dependencies**: WAVE_00.
- **Upstream Boundary Consumed**: WAVE_00 ile kurulan `index.html` ve JS dosya yapısı.
- **Downstream Handoff**: `WAVE_02` için hazır responsive CSS grid ve tipografik token yapısı teslim edilir.
- **Exit Boundary**: Tüm cihaz çözünürlüklerinde (Desktop, Tablet, Mobile) layout container sorunsuz hizalanır; CSS değişkenleri ve Outfit fontu tarayıcıda yüklenir.

---

### WAVE_02: Hero & Professional Profile Section

- **Goal**: Fizyoterapist Eda Pala adının (`FCL-001`), `Fizyoterapist` unvanının (`FCL-002`) ve kişisel profesyonel marka tanıtım bölümünün editoryal, modern ve güven veren bir görsel kompozisyonla geliştirilmesi.
- **Why Separate / Sequencing Rationale**: Landing page'in birincil odak noktası olan kişisel marka ve unvan sunumu, bağımsız bir bileşen ve teslim birimi olarak geliştirilmeli ve doğrulanmalıdır.
- **Committed Capabilities**:

| Capability Atom | Approved Support ID(s) | Support Status | Support Executable Flag | Support Meaning | Eligibility Result | Semantic Subset Result | Map Subset Result |
|---|---|---|---|---|---|---|---|
| Eda Pala İsmi ve Fizyoterapist Unvanı Sunum Bileşeni | SCP-002 | IN_SCOPE | YES | Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamının sunumu | PASS | PASS | PASS |
| Modern Profesyonel Hero & Profil Layout Surface | SCP-001 | IN_SCOPE | YES | Modern responsive profesyonel frontend demo | PASS | PASS | PASS |
| Kişisel Marka Tanıtım Kompozisyonu | SCP-005 | KNOWN_DECISION | YES | Satış demosu için proaktif landing page sunumu | PASS | PASS | PASS |

- **In Scope**: Hero bölümü HTML ve CSS bileşeni (`styles/components.css`), `contentAdapter` üzerinden Eda Pala adı ve Fizyoterapist unvanı entegrasyonu, sakin editoryal visual backdrop.
- **Out of Scope**: Sağlık/tedavi/uzmanlık uydurma metinleri, hasta müdahale stok görselleri, sahte biyografi veya eğitim iddiaları.
- **Primary Deliverables**: `styles/components.css` (Hero & Profile bölümü).
- **Dependencies**: WAVE_01.
- **Upstream Boundary Consumed**: WAVE_01 layout shell ve WAVE_00 content adapter.
- **Downstream Handoff**: `WAVE_03` için tamamlanmış Hero & Profil bölümü teslim edilir.
- **Exit Boundary**: Eda Pala ismi ve Fizyoterapist unvanı net biçimde görüntülenir; responsive geçişler sorunsuz çalışır.

---

### WAVE_03: Trust, Location Context & Outbound Link Integration

- **Goal**: Tekirdağ konum bağlamını (`FCL-003`) sunan güven bölümünü inşa etmek, onaylı Instagram profiline (`FCL-004`) yumuşak mikro etkileşimli outbound CTA butonunu entegre etmek ve tüm satılmaya hazır demoyu doğrulamak.
- **Why Separate / Sequencing Rationale**: Outbound sosyal medya yönlendirmesi ve konum bağlamı, Hero tanıtımından sonra ziyaretçinin eyleme geçtiği final teslim adımını oluşturur.
- **Committed Capabilities**:

| Capability Atom | Approved Support ID(s) | Support Status | Support Executable Flag | Support Meaning | Eligibility Result | Semantic Subset Result | Map Subset Result |
|---|---|---|---|---|---|---|---|
| Tekirdağ Konum Bağlamı Sunum Bileşeni | SCP-002 | IN_SCOPE | YES | Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamının sunumu | PASS | PASS | PASS |
| Outbound Instagram Profil Link / CTA Entegrasyonu | SCP-003 | IN_SCOPE | YES | Instagram profiline outbound CTA / link | PASS | PASS | PASS |
| Frontend Demo Tamamlama ve Son Satış Demosu Doğrulaması | SCP-005 | KNOWN_DECISION | YES | Satış demosu için proaktif landing page sunumu | PASS | PASS | PASS |

- **In Scope**: Tekirdağ konum kartı/bölümü, Outbound Instagram CTA butonu (`target="_blank" rel="noopener noreferrer"`), footer hızlı gezinme, cross-browser ve mobile-responsive nihai kontroller.
- **Out of Scope**: Canlı harita entegrasyonu, WhatsApp veya randevu formu, Instagram scraping/profil verisi çekme.
- **Primary Deliverables**: Full integrated frontend demo package (`index.html`, `styles/`, `src/`).
- **Dependencies**: WAVE_02.
- **Upstream Boundary Consumed**: WAVE_02 Hero & Profil bölümü ve WAVE_01 layout shell.
- **Downstream Handoff**: Satış demosu incelemesine hazır bitmiş frontend prototype paketi.
- **Exit Boundary**: Ziyaretçi Tekirdağ konumunu görür ve Instagram CTA butonuna tıklayarak yeni sekmede onaylı Instagram URL'sine ulaşır; satış demosu kalite kriterleri sağlanır.

## 5. Cross-Wave Invariants

- **CWI-01 (Source Closed Factual Integrity)**: Hiçbir wave'de `SRC-01` ve `FCL` allowlist dışından sağlık, tedavi, tanı, adres, telefon veya biyografi metni üretilemez.
- **CWI-02 (Adapter Pattern Strictness)**: Tüm metin içerikleri `src/config/content.config.js` üzerinden beslenir.
- **CWI-03 (No Invented Capabilities)**: Randevu, WhatsApp, harita veya backend gerektiren hiçbir etkileşim dalgalara eklenemez.
- **CWI-04 (Prototype Maturity Language)**: Hiçbir wave belgesinde "production-ready" veya "launch-ready" ifadesi kullanılamaz.

## 6. Global Exit / Handoff Rules

1. Tüm dalgalar (`WAVE_00`..`WAVE_03`) sırasıyla tamamlandığında, çıktı `outputs/demos/fizyoterapist-eda-pala/v0.1/` ve `outputs/demos/fizyoterapist-eda-pala/latest/` dizinlerine taşınmaya hazır hale gelir.
2. Her wave planı kendi execution checklist'ine ve verification adımlarına sahiptir.
