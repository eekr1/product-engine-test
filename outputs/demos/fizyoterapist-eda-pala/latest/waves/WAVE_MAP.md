# Fizyoterapist Eda Pala Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Deterministic Granularity Guard**: `demo-frontend` bazı uyarınca Foundation, Presentation/Identity, Contact ve Final QA sorumlulukları birbirine karıştırılmaksızın bağımsız dalgalara ayrılmıştır.
- **Strict Scope Authorization**: Yalnızca onaylı `SCP-001` .. `SCP-005` yetkili yetenek atomları committed capability olarak dalgalara dağıtılmıştır.
- **Zero Hidden Capabilities**: Her dalganın Committed Capabilities tablosu ile Summary/In Scope/Deliverables listesi semantik olarak %100 örtüşmektedir.
- **Fail-Closed Verification**: `WAVE_04` tüm önceki dalgalar bağımsız olarak tamamlandıktan sonra bütüncül responsive, erişilebilirlik ve anti-cliché denetimini gerçekleştirir.

## 2. Wave Map Summary

| Wave ID | Name | Goal | Primary Deliverables | Preceding Dependencies |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Setup | Proje dosya mimarisi, CSS custom property jetonları ve dondurulmuş veri adapter yapısının kurulması. | `index.html` shell, `styles/tokens.css`, `js/config/content.config.js`, `js/adapters/contentAdapter.js` | Approved Input |
| `WAVE_01` | Hero & Visual Presentation | Karşılama (Hero) bölümünün inşa edilmesi; Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamının ilk bakışta sunulması. | `index.html` Hero section markup, Hero CSS styling, visual persona card | `WAVE_00` |
| `WAVE_02` | Professional Identity & Location Context | Kişisel tanıtım ve Tekirdağ konum bağlamı bilgi kartlarının inşa edilmesi; onaylı dondurulmuş verilerin zarif sunumu. | Professional Identity Section, Location Context Card, static content binding | `WAVE_01` |
| `WAVE_03` | Outbound Instagram Contact & CTA | Onaylı Instagram profili yönlendirme butonunun ve sosyal etkileşim alanının inşa edilmesi. | Outbound Instagram CTA Card/Button, accessibility attributes, hover micro-interactions | `WAVE_02` |
| `WAVE_04` | Final Cross-Cutting QA & Verification | Tüm yüzeylerin responsive düzen, erişilebilirlik, performans ve anti-cliché kurallarına göre bütüncül doğrulanması. | Comprehensive Audit Report, Cross-device verification, validated prototype package | `WAVE_03` |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Setup)
    ↓
WAVE_01 (Hero & Visual Presentation)
    ↓
WAVE_02 (Professional Identity & Location Context)
    ↓
WAVE_03 (Outbound Instagram Contact & CTA)
    ↓
WAVE_04 (Final Cross-Cutting QA & Verification)
```

## 4. Wave Entries

### WAVE_00 — Foundation & Setup

- **Goal**: Proje dosya yapısının, `styles/tokens.css` tasarım jetonlarının ve dondurulmuş statik veri adapter altyapısının kurulması.
- **Why Separate / Sequencing Rationale**: Kullanıcı arayüzü inşa edilmeden önce dondurulmuş verilerin ve renk/tipografi jetonlarının tanımlanması şarttır.
- **Committed Capabilities**:
  - `Static Modular Frontend Setup` | Support: `SCP-001`, `SCP-004` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Serene Design System Tokens` | Support: `SCP-005` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Local Content Adapter Provider` | Support: `SCP-004` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
- **In Scope**: Dosya ağacı, `styles/tokens.css`, `styles/main.css`, `js/config/content.config.js`, `js/adapters/contentAdapter.js`.
- **Out of Scope**: Kullanıcı arayüzü görselleri ve HTML kart markup'ı.
- **Primary Deliverables**: `styles/tokens.css`, `js/config/content.config.js`, `js/adapters/contentAdapter.js`.
- **Dependencies**: Approved Project Input.
- **Upstream Boundary Consumed**: None (Initial wave).
- **Downstream Handoff**: `WAVE_01` için hazır CSS custom property jetonları ve dondurulmuş veri okuma adapter'ı.
- **Exit Boundary**: Altyapı dosyalarının eksiksiz oluşturulması ve `contentAdapter.js` modülünün verileri hatasız döndürmesi.

---

### WAVE_01 — Hero & Visual Presentation

- **Goal**: Ziyaretçiyi karşılayan Hero bölümünün inşa edilmesi; Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamının sunulması.
- **Why Separate / Sequencing Rationale**: Ziyaretçinin ilk etkileşim anı olan Hero bölümünün bağımsız bir deliverable olarak doğrulanması gerekir.
- **Committed Capabilities**:
  - `Hero Presentation Surface` | Support: `SCP-001`, `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Eda Pala Persona Display` | Support: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Fizyoterapist Title Display` | Support: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Tekirdağ Location Context Summary` | Support: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
- **In Scope**: `index.html` içindeki `<header>` ve `<section class="hero">` markup'ı, hero stilleri ve tipografik hiyerarşi.
- **Out of Scope**: Outbound Instagram CTA kartı ve alt bilgi bölümü.
- **Primary Deliverables**: Hero presentation section.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` tarafından sağlanan `tokens.css` ve `contentAdapter.js`.
- **Downstream Handoff**: `WAVE_02` için hazır Hero karşılama yüzeyi.
- **Exit Boundary**: Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamının Hero alanında eksiksiz ve zarif biçimde görüntülenmesi.

---

### WAVE_02 — Professional Identity & Location Context

- **Goal**: Fizyoterapist Eda Pala'nın profesyonel tanıtımını ve Tekirdağ konum bağlamını aktaran bilgi kartları bölümünün inşa edilmesi.
- **Why Separate / Sequencing Rationale**: Kişisel marka sunumunu detaylandıran içerik kartları Hero bölümünden bağımsız bir teslimat adımıdır.
- **Committed Capabilities**:
  - `Professional Identity Section` | Support: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Tekirdağ Location Context Presentation` | Support: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Verified Facts Baseline Presentation` | Support: `SCP-002`, `SCP-006` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
- **In Scope**: `<section class="identity-location">` markup'ı, statik veri bağlama ve dingin kart stilleri.
- **Out of Scope**: Uydurma tedavi yöntemleri, adres/telefon veya hasta yorumları.
- **Primary Deliverables**: Professional Identity & Location Context Section.
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` Hero yüzeyi.
- **Downstream Handoff**: `WAVE_03` için hazır tanıtım gövdesi.
- **Exit Boundary**: Kişisel unvan ve Tekirdağ konum bağlamının uydurma iddia olmaksızın şık kart yapısında görüntülenmesi.

---

### WAVE_03 — Outbound Instagram Contact & CTA

- **Goal**: Onaylı Instagram profili yönlendirme butonunun ve sosyal etkileşim alanının inşa edilmesi.
- **Why Separate / Sequencing Rationale**: Dış iletişim ve sosyal yönlendirme işlevselliği kendi içinde bağımsız erişilebilirlik ve yönlendirme kuralları taşır.
- **Committed Capabilities**:
  - `Outbound Instagram Profile CTA` | Support: `SCP-003` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Social Outbound Interaction Component` | Support: `SCP-003` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
- **In Scope**: `<section class="contact-cta">` markup'ı, Instagram yönlendirme butonu, `target="_blank" rel="noopener noreferrer"` öznitelikleri, hover efektleri.
- **Out of Scope**: Randevu formu, iletişim formu backend'i veya WhatsApp entegrasyonu.
- **Primary Deliverables**: Outbound Instagram CTA Section.
- **Dependencies**: `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_02` tanıtım gövdesi.
- **Downstream Handoff**: `WAVE_04` için hazır eksiksiz frontend arayüzü.
- **Exit Boundary**: Instagram yönlendirme butonunun sorunsuz çalışması ve erişilebilirlik özniteliklerinin eksiksiz tanımlanması.

---

### WAVE_04 — Final Cross-Cutting QA & Verification

- **Goal**: Tüm yüzeylerin responsive/cross-device performansı, erişilebilirlik, anti-cliché ve fail-closed validation denetimi.
- **Why Separate / Sequencing Rationale**: Bütüncül kalite kontrolü tüm kullanıcı yüzeyleri tamamlandıktan sonra bağımsız bir kapanış adımı olarak yapılmalıdır.
- **Committed Capabilities**:
  - `Cross-Device Responsive Verification` | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Accessibility & Keyboard Navigation Verification` | Support: `SCP-005` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Anti-Clinic-Cliché Visual Audit` | Support: `SCP-005` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
  - `Complete Final Prototype Verification` | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Result: `PASS`
- **In Scope**: Cross-browser & cross-device responsive test, keyboard navigation audit, contrast audit, zero-unverified-claim audit.
- **Out of Scope**: Yeni özellik veya içerik geliştirmesi.
- **Primary Deliverables**: Validated prototype output package.
- **Dependencies**: `WAVE_03`.
- **Upstream Boundary Consumed**: `WAVE_00` .. `WAVE_03` tüm üretilmiş UI ve kod tabanı.
- **Downstream Handoff**: Publication gate and terminal operational completion.
- **Exit Boundary**: `VAL-01` .. `VAL-19` kapılarından PASS veya accepted CONDITIONAL PASS alınması.

## 5. Cross-Wave Invariants

- **Invariant 1**: Her dalga strictly onaylı `SCP-001` .. `SCP-005` kapsamını korur.
- **Invariant 2**: Hiçbir dalga doğrulanmamış tedavi, klinik veya adres bilgisi üretemez.
- **Invariant 3**: Her dalga responsive ve erişilebilir olmak zorundadır.

## 6. Global Exit / Handoff Rules

- Tüm 5 dalga planı (`WAVE_00.md` .. `WAVE_04.md`) dondurulmadan ve validation geçmeden paket publish edilemez.
