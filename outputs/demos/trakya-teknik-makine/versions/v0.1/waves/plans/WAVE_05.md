# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_05: Cross-Surface Integration, Responsive & QA

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_05` in `waves/WAVE_MAP.md`
- **Goal**: Tüm tamamlanan UI yüzeylerinin (Header, Hero, About, Services, Contact, Footer) bütüncül entegrasyonunu sağlamak, masaüstü/mobil responsive uyumunu doğrulamak ve satış demosu kabul QA işlemlerini tamamlamaktır.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_05
- **Name**: Cross-Surface Integration, Responsive & QA
- **Goal**: Ekranlar arası bütünleşme, mobil/masaüstü uyumu ve satış demosu kabul doğrulaması
- **Primary Deliverables**: `src/styles/responsive.css`, `working-output/` bütüncül test ve doğrulama kiti
- **Upstream Boundary Consumed**: `WAVE_00` - `WAVE_04` arası tüm üretilmiş bileşenler
- **Downstream Handoff**: Validation ve Final Publication (`outputs/demos/trakya-teknik-makine/versions/v0.1`)

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Bütüncül responsive frontend demo uyumu | `Bütüncül responsive frontend demo uyumu` | implementation-of | PASS |
| Satış demosu kabul ve visual QA | `Satış demosu kabul ve visual QA` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

DEMO_FRONTEND_PACKAGE granularity guard'ı uyarınca whole-project responsive uyum, cross-surface entegrasyon ve satış demosu kabul QA işlemleri tek bir feature dalgasına gömülemez. Bağımsız bir kapanış ve kalite doğrulaması dalgası olmak zorundadır.

## 4. Canonical Sources to Read

- `working-output/ai/PROJECT_BRAIN.md`
- `working-output/ai/PRODUCT_RULES.md`
- `working-output/ai/TECH_CONTEXT.md`
- `working-output/design/DESIGN_RULES.md` (Section 7 & 8)
- `working-output/waves/WAVE_MAP.md` (WAVE_05 Entry)
- `SOURCE_REGISTER.md` (FCL-001 - FCL-007)

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03`, `WAVE_04`.
- **Downstream Consumers**: Engine Validation Gate & Publication.

## 6. Scope

### In Scope
- Cross-surface responsive breakpoint düzenlemeleri (`src/styles/responsive.css`).
- Viewport kırılımları (1024px desktop, 768px tablet, 480px mobile).
- Bütüncül visual QA ve accessibility (WCAG AA) denetimi.
- Clean service/data access boundary ve FCL 100% uyum doğrulaması.

### Out of Scope
- Yeni ürün özelliği eklemek, backend/API/database entegrasyonu yapmak.
- Harita, form submit backend'i veya WhatsApp widget'ları eklemek.

## 7. Expected Result / Target Structure

```text
/
└── src/
    ├── components/
    │   ├── Header.js
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Services.js
    │   ├── ServiceCard.js
    │   ├── Contact.js
    │   └── Footer.js
    └── styles/
        ├── index.css
        ├── hero.css
        ├── about.css
        ├── services.css
        ├── contact.css
        └── responsive.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Cross-Surface Responsive Breakpoints & Accessibility Alignment (`responsive.css`)**
  - **Location/Responsibility**: `src/styles/responsive.css`
  - **Parent Capability Relation**: `Bütüncül responsive frontend demo uyumu` (implementation-of)
  - **Inputs/Dependencies**: `DESIGN_RULES.md` responsive ve accessibility standartları.
  - **Behavior**:
    - `@media (max-width: 1024px)`: Layout padding ve grid aralıklarının tablet görünümüne adapte edilmesi.
    - `@media (max-width: 768px)`: Hero, About, Services ve Contact bileşenlerinin 1-column dikey akışa geçmesi, dokunmatik butonların minimum 44px boyuta çekilmesi.
    - Focus indicator'ları (`outline: 2px solid #F26522`) ve WCAG AA kontrast kontrolleri.
  - **Preserve/Must-Not**: Yatay kaydırma (horizontal overflow) üreten CSS kuralları yazılamaz.
  - **Verification**: Chrome DevTools responsive emulator ile 320px - 1440px arası ekran boyutları test edilir.
  - **Done Result**: Bütüncül responsive CSS kiti hazır.

- [ ] **Task 2: Sales Demo Readiness & Boundary Verification Audit**
  - **Location/Responsibility**: `working-output/` genel kod bazı ve dokümantasyonu.
  - **Parent Capability Relation**: `Satış demosu kabul ve visual QA` (implementation-of)
  - **Inputs/Dependencies**: `PRODUCT_RULES.md`, `TECH_CONTEXT.md`, `FCL`.
  - **Behavior**:
    - 1. FCL Kontrolü: Üretilen arayüzde FCL-001 - FCL-007 harici hiçbir uydurma marka, stok, acil servis veya adres bilgisinin bulunmadığı doğrulanır.
    - 2. Service Boundary Kontrolü: UI bileşenlerinin verileri `companyService.js` üzerinden asenkron aldığı teyit edilir.
    - 3. Wording Kontrolü: Delivery profile `Prototype` ile uyumlu wording ("demo-ready", "sales-demo ready") taranır.
  - **Preserve/Must-Not**: `production-ready` veya `launch-ready` gibi üst profile maturity iddiaları kullanılamaz.
  - **Verification**: Kod ve döküman metinlerinde static string tavaması yapılır.
  - **Done Result**: Bütüncül QA denetimi başarıyla tamamlandı.

## 9. State / Role / Responsive Coverage

- **Mobile Viewport**: 320px - 480px genişliklerinde yatay scroll yapmaksızın tam akış.
- **High Contrast State**: WCAG AA renk kontrast oranı (4.5:1+) korunmuştur.
- **Demo Readiness**: Proaktif satış görüşmelerinde sorunsuz gösterilebilir görsel kalite.

## 10. Automated Verification

- Zero Console Error Verification: Web sürücü/konsol simülasyonunda 0 JavaScript hatası.
- Responsive Overflow Test: `#app` container genişliğinin viewport genişliğini aşmadığı denetlenir.

## 11. Manual QA / Debug Verification

- Satış görüşmesi akışı simüle edilerek Hero'dan İletişim bölümüne kadar tüm bileşenlerin tutarlı çalıştığı ve CTA'ların doğru protokolleri çalıştırdığı doğrulanır.

## 12. Acceptance / Exit Criteria

- [ ] Tüm UI bileşenleri hatasız ve yüksek görsel kalitede render ediliyor.
- [ ] Mobil ve masaüstü görünümlerde 0 yatay kaydırma ve 0 JS hatası var.
- [ ] FCL 100% korunmuş, uydurma hiçbir iddia içermiyor.
- [ ] Delivery wording `Prototype` / `demo-ready` sınırlarına tam uyuyor.

## 13. Handoff / Stop Rule

`WAVE_05` tamamlandığında tüm `working-output/` paketi Product Engine Canonical Validation Gate'ine sunulur.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
