# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Brand Identity & Hero Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine marka kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü rozetini ve görsel hero tanıtım alanını inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_01
Name: Brand Identity & Hero Surface
Goal: Trakya Teknik Makine marka kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü rozetini ve görsel hero tanıtım alanını inşa etmek.
Why Separate: Ziyaretçi ve müşterinin ilk gördüğü güven verici marka kimliği ve yetkili servis statüsü, hizmet detaylarından önce sunulmalıdır.
Committed Capabilities:
  - Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu | SCP-002 | Authorized Service status presentation | PASS
  - Trakya Teknik Makine gerçek firma kimliği sunum temeli | SCP-009, SCP-010 | Company identity presentation | PASS
In Scope: Header / Navigation Bar, Hero Section (Manşet, yetkili servis vurgusu, görsel teknik zemin), Authorized Service Badge.
Out of Scope: 3 Hizmetin detay kartları (WAVE_02), İletişim formu / harita / WhatsApp.
Primary Deliverables: Navbar (src/ui/components/Navbar.js), Hero (src/ui/components/Hero.js), AuthorizedServiceBadge (src/ui/components/AuthorizedServiceBadge.js)
Dependencies: WAVE_00.
Upstream Boundary Consumed: WAVE_00 CSS token'ları ve companyService marka bilgileri.
Downstream Handoff: WAVE_02 için üst marka ve yetkili servis kimliği tamamlanmış ana sayfa üst düzeni.
Exit Boundary: Ana sayfa üst alanında marka adı ve Yetkili Servis statüsünün sorunsuz görünmesi ve responsive uyumu.
```

## 2. Parent Capability Coverage

| Plan Capability | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Navbar & Brand Header Presentation | Trakya Teknik Makine gerçek firma kimliği sunum temeli (`SCP-009`, `SCP-010`) | implementation-of | PASS |
| Disan Hidrolik Trakya Bölge Yetkili Servis Badge Component | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu (`SCP-002`) | implementation-of | PASS |
| Industrial Hero Surface & Headline Composition | Trakya Teknik Makine gerçek firma kimliği sunum temeli (`SCP-009`, `SCP-010`) | implementation-of | PASS |
| Direct Action Buttons (`tel:`, `mailto:` trigger placeholders) | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu (`SCP-002`) | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Satış görüşmesinde müşteri demoyu açtığında ilk 5 saniye içinde firmanın adını, teknik uzmanlık tescilini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğunu görmelidir. Bu üst marka katmanı tamamlanmadan alt hizmet detaylarına geçilmesi visual hierarchy'yi bozar.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_00.md`

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_00` (Design tokens, base reset CSS, `companyService.js` data access boundary).

## 6. Scope

### In Scope
- Header / Navigation Bar (`Navbar.js`): Firma adı ("Trakya Teknik Makine"), yetkili servis mini-badge, hızlı yönlendirme bağlantıları.
- Authorized Service Badge Component (`AuthorizedServiceBadge.js`): Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü vurgulayan premium teknik rozet.
- Hero Section (`Hero.js`):
  - H1 Ana Başlık: "Trakya Bölgesi Endüstriyel Makine & Hidrolik Teknik Servisi"
  - Alt Açıklama: Trakya Teknik Makine'nin uzman teknik kadrosu ve yetkili servis güvencesi sunumu.
  - Aksan Butonlar: Hızlı İletişim (`tel:` ve `mailto:` direct CTA).
  - Görsel Teknik Zemin: Hassas endüstriyel grid çizgileri, Steel Blue & Amber renk dengesi.

### Out of Scope
- 3 Hizmetin detaylı kart kataloğu (WAVE_02).
- Canlı Harita, WhatsApp widget'ı, Form Submit (Kapsam Dışı).
- Kaynakta bulunmayan sertifikalar, müşteri yorumları veya unapproved iddialar (YASAK).

## 7. Expected Result / Target Structure

```text
src/ui/components/
├── Navbar.js
├── Hero.js
└── AuthorizedServiceBadge.js
```

## 8. Implementation Checklist

- [ ] **Task 1.1 — Header Navigation & Brand Identity Component**
  - **Location / Responsibility**: `src/ui/components/Navbar.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-009`, `SCP-010`.
  - **Inputs / Dependencies**: `companyService.getCompanyInfo()`, `styles/main.css`.
  - **Implementation Behavior**: Header yapısı render edilir. `companyService` üzerinden firma adını ve yetkili servis unvanını okur. Responsive mobil burger / masaüstü yatay menü yapısını içerir.
  - **Applicable States / Responsive**: Sticky glassmorphism/matte header (desktop & mobile).
  - **Preserve / Must Not**: Unapproved logo imajları veya sahte menü linkleri eklenemez.
  - **Verification**: Tarayıcıda sayfa üst alanında Trakya Teknik Makine isminin göründüğü doğrulanır.
  - **Done Result**: Header navigation component hazır.

- [ ] **Task 1.2 — Authorized Service Badge Component**
  - **Location / Responsibility**: `src/ui/components/AuthorizedServiceBadge.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-002`.
  - **Inputs / Dependencies**: `design/DESIGN_RULES.md` (Industrial Amber accent, monospace label).
  - **Implementation Behavior**: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü özel bir mühendislik rozeti olarak çizer. İkonik hidrolik/dişli simgesi ve net tipografik hizalama içerir.
  - **Preserve / Must Not**: Yetkili servis ifadesi "Tek Yetkili", "Distribütör" veya "Üretici" olarak değiştirilemez.
  - **Verification**: Rozetin metninin tam olarak "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" olduğu kontrol edilir.
  - **Done Result**: Authorized Service Badge bileşeni hazır.

- [ ] **Task 1.3 — Industrial Hero Surface Component**
  - **Location / Responsibility**: `src/ui/components/Hero.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-009`, `SCP-010`.
  - **Inputs / Dependencies**: `AuthorizedServiceBadge.js`, `styles/main.css`.
  - **Implementation Behavior**: 60-40 asimetrik grid düzeninde sol tarafta ana başlık, yetkili servis rozeti, açıklama metni ve aksan iletişim butonları; sağ tarafta teknik mühendislik grid motifleri render edilir.
  - **Applicable States / Responsive**: Desktop 2-column layout, mobile single-column stacked layout.
  - **Preserve / Must Not**: Generic stok sanayi resmi konulamaz; mühendislik çizim motifleri kullanılır.
  - **Verification**: Mobil ve masaüstü görünümde Hero alanının düzgün hizalandığı ve LCP performansının yüksek olduğu teyit edilir.
  - **Done Result**: Hero Surface bileşeni hazır.

## 9. State / Role / Responsive Coverage

- **Mobile Layout**: Mobilde (360px+) Navbar compact duruma geçer, Hero içeriği dikey dökülür, Yetkili Servis rozeti okunabilir boyutta kalır.
- **Contrast & Focus**: Hero CTA butonları yüksek kontrastlı Amber renkte `focus-visible` ring taşır.

## 10. Automated Verification

- Header & Hero component'lerinin `index.html` içinde DOM'a eksiksiz eklendiği denetlenir.

## 11. Manual QA / Debug Verification

- Tarayıcıda 1440px ve 375px ekran genişliklerinde test edilir. Yetkili Servis rozetinin ve firma adının ilk okuma alanında (above the fold) olduğu doğrulanır.

## 12. Acceptance / Exit Criteria

- [ ] Header alanında Trakya Teknik Makine firma adı ve Yetkili Servis rozeti görünüyor.
- [ ] Yetkili Servis rozeti tam metni: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi".
- [ ] Hero bölümü responsive olarak mobil ve masaüstü ekranlarda kusursuz hizalanıyor.
- [ ] Kaynak dışı iddia veya qualifier içermiyor.

## 13. Handoff / Stop Rule

`WAVE_01` tamamlandığında `WAVE_02` (Core Services Presentation) başlayabilir.

---
## Wave Result

- **Status**: Pending Execution (Generation Phase Completed).
