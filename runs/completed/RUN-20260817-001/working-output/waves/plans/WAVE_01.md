# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_01: Profile Hero & Personal Brand Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Fizyoterapist Eda Pala adını, `Fizyoterapist` mesleki unvanını ve `Tekirdağ` konum bağlamını sakin, modern ve güven veren bir görsel kompozisyon ile sergilemek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_01
Name: Profile Hero & Personal Brand Presentation
Committed Capabilities:
- CAP-01-01: Fizyoterapist Eda Pala kişisel marka landing page demosu sunumu | SCP-001 | IN_SCOPE | YES
- CAP-01-02: Fizyoterapist Eda Pala adı ve unvanının belirgin sergilenmesi | SCP-002 | IN_SCOPE | YES
- CAP-01-03: Tekirdağ konum bağlamının sunumu | SCP-003 | IN_SCOPE | YES
Upstream Consumed: WAVE_00 (siteConfig, HTML5 shell, CSS tokens)
Downstream Handoff: WAVE_02 (Instagram Outbound CTA & Digital Contact Surface)
Exit Boundary: Eda Pala name, Fizyoterapist title, Tekirdağ location rendered from siteConfig with high typographic quality
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Eda Pala H1 header & `Fizyoterapist` title presentation | `CAP-01-02` (Adı ve unvanının sergilenmesi) | `implementation-of` | `PASS` |
| `Tekirdağ` location context badge & presentation | `CAP-01-03` (Tekirdağ konum bağlamı sunumu) | `implementation-of` | `PASS` |
| Serene personal brand introduction layout | `CAP-01-01` (Landing page demosu sunumu) | `implementation-of` | `PASS` |
| Profile presentation verification | `CAP-01-01`, `CAP-01-02`, `CAP-01-03` | `verification-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

`WAVE_01` kişisel markanın ana tanıtım yüzeyidir. `WAVE_00`'da kurulan HTML5 düzen kabuğu ve `siteConfig` veri modülü üzerine oturur. Sosyal medya outbound CTA'larından (`WAVE_02`) bağımsız olarak kişisel marka kimliğini ve profesyonel unvanı eksiksiz doğrular.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (`PR-01`, `PR-02`, `PR-03`, `SR-01`, `SR-02`)
- `ai/TECH_CONTEXT.md` (`TC-02`)
- `design/DESIGN_RULES.md` (Typography Scale, Color Roles, Asymmetric Balance)
- `runs/active/RUN-20260817-001/SOURCE_REGISTER.md` (`FCL-001`, `FCL-002`, `FCL-003`)

## 5. Dependencies

- `WAVE_00` (HTML5 Layout Container, CSS Custom Properties, `siteConfig` module).

## 6. Scope

### In Scope
- Ana H1 başlık alanı: **Eda Pala** (Name) ve **Fizyoterapist** (Title).
- Konum bağlamı rozeti/metni: **Tekirdağ** (Location Context).
- Sakin ve profesyonel kişisel marka tanıtım kartı düzeni.
- `siteConfig` nesnesinden veri okuma entegrasyonu (`js/main.js` render fonksiyonu).
- Tipografik hiyerarşi (`Inter`, `letter-spacing: -0.02em`, `clamp` yazı boyutları).

### Out of Scope
- Tedavi yöntemleri, hastalık/rahatsızlık veya seans bilgileri (Doğrulanmamıştır).
- Eğitim, sertifika, uzmanlık veya klinik sahipliği iddiaları.
- Stok tıbbi fotoğraflar veya anatomik görseller.
- Instagram dış bağlantı kartının detaylı yerleşimi (`WAVE_02`).

## 7. Expected Result / Target Structure

```text
working-output / profile hero component rendering:
<main class="container">
  <section class="profile-hero-section">
    <div class="location-badge">Tekirdağ</div>
    <h1 class="profile-name">Eda Pala</h1>
    <p class="profile-title">Fizyoterapist</p>
    <div class="profile-bio-card">...</div>
  </section>
</main>
```

## 8. Implementation Checklist

- [ ] **Task 01-1: Profile Hero Header & Name/Title Component**
  - **Location/Responsibility**: `index.html` (`.profile-hero-section`) & `js/main.js`
  - **Parent Capability Relation**: `implementation-of` `CAP-01-02`
  - **Inputs/Dependencies**: `siteConfig.profile.name` (`FCL-001`) & `siteConfig.profile.title` (`FCL-002`).
  - **Implementation Behavior**: Ana H1 başlığı içinde `Eda Pala` ismini ve `Fizyoterapist` unvanını `siteConfig` modülünden dinamik okuyarak yüksek okunabilirlikte render et.
  - **Preserve/Must Not**: "Uzman Fizyoterapist", "Doktor", "Klinik Kurucusu" gibi uydurma unvanlar ekleme.
  - **Verification**: `siteConfig` verisinin DOM'a doğru aktarıldığını ve H1 etiketinin varlığını denetle.
  - **Done Result**: İsim ve unvan bileşeni eksiksiz görüntülendi.

- [ ] **Task 01-2: Location Context Badge Component**
  - **Location/Responsibility**: `index.html` (`.location-badge`) & `css/styles.css`
  - **Parent Capability Relation**: `implementation-of` `CAP-01-03`
  - **Inputs/Dependencies**: `siteConfig.profile.location` (`FCL-003`).
  - **Implementation Behavior**: `Tekirdağ` konum bilgisini sakin ve şık bir lokasyon rozeti/metni olarak profile hero alanına entegre et.
  - **Preserve/Must Not**: Exact klinik adresi, ilçe detayı veya yol tarifi ekleme.
  - **Verification**: Rozetin `Tekirdağ` metnini hatasız gösterdiğini denetle.
  - **Done Result**: Konum bağlamı rozeti hazır.

- [ ] **Task 01-3: Personal Brand Introduction Composition Layout**
  - **Location/Responsibility**: `css/styles.css` (`.profile-hero-section`, `.profile-card`)
  - **Parent Capability Relation**: `implementation-of` `CAP-01-01`
  - **Inputs/Dependencies**: `design/DESIGN_RULES.md` (Asymmetric Balance, Serene Human Professionalism).
  - **Implementation Behavior**: Hero alanını ferah whitespace (`clamp(2rem, 5vw, 6rem)` dikey aralık), sol ağırlıklı tipografik hiyerarşi ve sakin `--color-bg-primary` zemin ile düzenle.
  - **Preserve/Must Not**: Stok doktor görseli veya mavi/turkuaz gradient arka plan kullanma.
  - **Verification**: Tarayıcıda görsel estetik ve tipografik hiyerarşi denetimi yap.
  - **Done Result**: Profile hero kişisel marka tanıtım yüzeyi hazır.

## 9. State / Role / Responsive Coverage

- **Normal State**: Eda Pala, Fizyoterapist ve Tekirdağ bilgileri eksiksiz ve duru bir düzenle ekrana gelir.
- **Responsive Coverage**: Mobil ekranlarda (`<640px`) başlık ve unvan dikey hizalanır, font clamp ölçeği küçülür (`clamp(2.25rem, 5vw, 3.75rem)`).

## 10. Automated Verification

- `WAVE_01` DOM elementlerinin varlığı (`h1`, `.location-badge`, `.profile-title`).
- HTML5 semantik başlık sırası denetimi.

## 11. Manual QA / Debug Verification

- `Fizyoterapist Eda Pala` ve `Tekirdağ` metinlerinin `siteConfig` üzerinden hatasız çekildiğini doğrula.
- Tipografi boyutunun ve renk kontrastının okunabilirliğini incele.

## 12. Acceptance / Exit Criteria

- [ ] `Eda Pala` adı `H1` etiketinde belirgin şekilde yer alıyor.
- [ ] `Fizyoterapist` mesleki unvanı net biçimde sunuluyor.
- [ ] `Tekirdağ` konum bağlamı rozet/metin olarak ekranda görünüyor.
- [ ] Hiçbir doğrulanmamış hastalık, tedavi veya sertifika iddiası bulunmuyor.

## 13. Handoff / Stop Rule

`WAVE_01` tamamlandığında `WAVE_02` (Instagram Outbound Integration) için hazır profile hero yüzeyi ve sosyal medya entegrasyonuna uygun kart düzeni teslim edilir.

---
## Wave Result

- **Execution State**: Pending Execution (Ready for `WAVE_01` implementation pass).
