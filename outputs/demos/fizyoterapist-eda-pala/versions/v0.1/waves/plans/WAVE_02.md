# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_02: Hero & Professional Profile Section

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Eda Pala adının (`FCL-001`), `Fizyoterapist` unvanının (`FCL-002`) ve kişisel profesyonel marka tanıtım bölümünün editoryal, modern ve güven veren bir görsel kompozisyonla geliştirilmesi.

## 1. Parent Wave Map Entry

```yaml
wave_id: WAVE_02
wave_name: Hero & Professional Profile Section
primary_goal: Eda Pala adını, Fizyoterapist unvanını ve kişisel marka tanıtım alanını modern editoryal düzenle inşa etmek
delivery_maturity_target: Validated Prototype Component
dependencies: [WAVE_01]
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Hero Name (`FCL-001`) & Title (`FCL-002`) Header Markup | Eda Pala İsmi ve Fizyoterapist Unvanı Sunum Bileşeni | implementation-of | PASS |
| Editorial Hero Layout Grid & Visual Card Backdrop | Modern Profesyonel Hero & Profil Layout Surface | implementation-of | PASS |
| Professional Personal Branding Presentation Copy | Kişisel Marka Tanıtım Kompozisyonu | implementation-of | PASS |
| Responsive Hero Layout & Typography Scaling | Modern Profesyonel Hero & Profil Layout Surface | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_01` ile layout shell ve CSS token yapısı tamamlanmıştır. Ziyaretçinin ilk 3 saniyede Eda Pala'nın `Fizyoterapist` unvanıyla kişisel dijital profilini görmesini sağlayan Hero ve Profil bölümü bağımsız bir görsel ve işlevsel birim olarak inşa edilmelidir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md` (Hero visual character, typography & colors)
- `SOURCE_REGISTER.md` (`FCL-001: Eda Pala`, `FCL-002: Fizyoterapist`)
- `waves/WAVE_MAP.md` (`WAVE_02` parent entry)

## 5. Dependencies

- `WAVE_01` (Design system, typography & main layout shell tamamlanmış olmalıdır).

## 6. Scope

### In Scope
- Hero bölümü HTML markup'ı (`index.html` içinde `<section class="hero-section">`).
- `styles/components.css` içinde Hero ve Profil kartı CSS stilleri.
- `src/adapters/contentAdapter.js` ile Eda Pala adı ve Fizyoterapist unvanının DOM'a dinamik olarak aktarılması.
- Editoryal asimetrik layout (Sol sütun: Unvan rozeti, H1 Ad Soyad, Tanıtım paragrafı; Sağ sütun: Sakin kişisel marka kartı backdrop'ı).

### Out of Scope
- Sağlık/tedavi/uzmanlık alanları uydurma metinleri.
- Tıbbi/klinik cihaz veya doktor stok fotoğrafları.
- Eğitim, üniversite, sertifika veya deneyim yılı iddiaları.
- Outbound Instagram CTA butonu ve Konum kartı (`WAVE_03` kapsamındadır).

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (updated with Hero section markup)
├── styles/
│   └── components.css (Hero & Profile layout styling)
└── src/
    ├── adapters/contentAdapter.js
    └── app.js (renders Hero content dynamically via contentAdapter)
```

## 8. Implementation Checklist

- [ ] **Task 1: Hero Section HTML Markup & Semantic Hierarchy**
  - **Location / Responsibility**: `index.html` içinde `<section id="hero" class="hero-section container">`.
  - **Parent Capability Relation**: `implementation-of` (Eda Pala İsmi ve Fizyoterapist Unvanı Sunum Bileşeni).
  - **Inputs / Contracts**: `<h1 id="hero-name">`, `<span id="hero-title" class="badge">`, `<p id="hero-subtitle">`.
  - **Implementation Behavior**: Sol tarafta metinsel içerik alanı (`.hero-content`), sağ tarafta editoryal kart alanı (`.hero-card`) oluşturan HTML5 yapısını kurmak.
  - **FCL / Source Boundary**: Metin içeriği yalnız `FCL-001` (Eda Pala) ve `FCL-002` (Fizyoterapist) allowlist verilerini taşır.
  - **Verification**: Tarayıcıda semantic H1 ve badge elemanları DOM'a yerleşir.
  - **Done Result**: Hero HTML yapısı hazır.

- [ ] **Task 2: Hero & Profile CSS Styling & Editorial Layout**
  - **Location / Responsibility**: `styles/components.css`.
  - **Parent Capability Relation**: `implementation-of` (Modern Profesyonel Hero & Profil Layout Surface).
  - **Inputs / Contracts**: `tokens.css` variables (`--bg-secondary`, `--accent-primary`, `--text-primary`, `--font-size-h1`).
  - **Implementation Behavior**: Hero alanına dikey padding `6rem 0`, `.hero-grid` için 2 sütunlu CSS Grid (`1.2fr 0.8fr`), `.badge` için background `var(--bg-secondary)`, color `var(--accent-primary)`, border-radius `20px` tanımlamak. Sağ taraftaki `.hero-card` için sakin, şık bir border (`1px solid var(--border-color)`) ve border-radius (`16px`) uygulamak.
  - **Preserve / Must Not**: Turkuaz/mavi jenerik gradient veya doktor stok resmi KULLANILMAZ.
  - **Verification**: Masaüstünde şık 2 sütunlu editoryal görünüm sağlanır.
  - **Done Result**: Hero CSS stilleri tamamlandı.

- [ ] **Task 3: Dynamic Content Binding via Local Content Adapter**
  - **Location / Responsibility**: `src/app.js`.
  - **Parent Capability Relation**: `implementation-of` (Kişisel Marka Tanıtım Kompozisyonu).
  - **Inputs / Contracts**: `contentAdapter.getContent('hero')` ve `contentAdapter.getContent('profile')`.
  - **Implementation Behavior**: `app.js` başlatıldığında `contentAdapter` çağrılarak `#hero-name` elemanına "Eda Pala", `#hero-title` elemanına "Fizyoterapist" ve `#hero-subtitle` elemanına "Tekirdağ'da profesyonel ve güven veren kişisel dijital profil." metnini yazdırmak.
  - **Verification**: Metinler hardcode olmadan JS nesnesinden dinamik olarak aktarılır.
  - **Done Result**: Hero veri bağlama tamamlandı.

- [ ] **Task 4: Responsive Stacking & Mobile Optimization**
  - **Location / Responsibility**: `styles/components.css` (`@media (max-width: 768px)`).
  - **Parent Capability Relation**: `detail-of` (Modern Profesyonel Hero & Profil Layout Surface).
  - **Inputs / Contracts**: Mobile breakpoint `<768px`.
  - **Implementation Behavior**: `.hero-grid` alanını dikey tek sütun yapmak (`grid-template-columns: 1fr`), padding değerini `3rem 0` seviyesine indirmek, başlık yazı boyutunu mobil ölçeğe getirmek.
  - **Verification**: Mobil görünümde yatay kaydırma olmadan dikeyde kusursuz hizalanır.
  - **Done Result**: Mobile responsive Hero hazır.

## 9. State / Role / Responsive Coverage

- **Mobile Viewport (<768px)**: Tek sütunlu akış, okumayı kolaylaştıran spacing ve mobil fluid tipografi (`clamp`).
- **Desktop Viewport (1024px+)**: Asimetrik 2 sütunlu editoryal görünüm.
- **Empty / Missing Data**: `contentAdapter` boş dönerse `FCL-001` ve `FCL-002` varsayılan string'leri emniyet kopyası olarak kullanılır.

## 10. Automated Verification

- Static HTML & CSS validation.
- DOM render assertion: `#hero-name` elemanının innerText değeri "Eda Pala" ve `#hero-title` değeri "Fizyoterapist" olarak kontrol edilir.

## 11. Manual QA / Debug Verification

- Tarayıcı F12 geliştirici araçları ile mobil ve masaüstü görünümleri test edilir.
- WCAG 2.1 AA kontrast paneli ile metin kontrastı doğrulanır.

## 12. Acceptance / Exit Criteria

- [ ] Eda Pala adı (`FCL-001`) ve Fizyoterapist unvanı (`FCL-002`) Hero bölümünde net biçimde görüntüleniyor.
- [ ] Sağlık, tedavi veya klinik uydurma iddiaları bulunmuyor.
- [ ] Bileşen CSS'i `DESIGN_RULES.md` visual direction ilkelerine uygun.
- [ ] Mobil ve masaüstü geçişleri responsive ve taşmasız çalışıyor.

## 13. Handoff / Stop Rule

- `WAVE_02` tamamlandığında `WAVE_03` (Trust, Location Context & Outbound Link Integration) aşamasına geçilebilir.
- Sunulacak teslim olgunluğu: Validated Prototype Component.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
