# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Final Cross-Surface QA & Presentation Verification

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Sayfanın tamamında responsive breakpoint uyumluluğunu, visual token tutarlılığını ve satış demosu gösterim kalitesini doğrulamak.

## 1. Parent Wave Map Entry

- **Goal**: Sayfanın tamamında responsive breakpoint uyumluluğunu, visual token tutarlılığını ve satış demosu gösterim kalitesini doğrulamak.
- **Why Separate**: Granularity Guard kuralı uyarınca whole-project QA herhangi bir feature wave'inin içine gömülemez; bağımsız kapanış dalgası olarak yürütülmelidir.
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

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Responsive Breakpoint Audit (320px, 768px, 1024px) | Responsive Breakpoint QA | implementation-of | PASS |
| Visual Token & WCAG AA Contrast Audit | Visual Token & Contrast Verification | implementation-of | PASS |
| Presentation Readiness & Link Protocol Check | Presentation Readiness Verification | implementation-of | PASS |
| Clean Console & Zero-Error Check | Presentation Readiness Verification | detail-of | PASS |
| Final Package Verification Tests | Presentation Readiness Verification | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

- Whole-project QA, tüm UI bölümleri (`WAVE_01` .. `WAVE_03`) tamamlandıktan sonra yatay kapanış dalgası olarak uygulanır. Satış görüşmesinde sıfır hata ve kusursuz sunum sağlar.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_03` (Contact & Direct CTA Surface)

## 6. Scope

### In Scope
- Mobil (320px - 767px), Tablet (768px - 1023px) ve Masaüstü (1024px+) ekran boyutlarında bütünsel responsive denetim.
- WCAG AA kontrast standartları denetimi (min 4.5:1 ikincil metinler, 7:1 birincil metinler).
- İletişim butonları (`tel:`, `mailto:`) link protokolü denetimi.
- Konsolda JavaScript hatası olmamasının teyidi.

### Out of Scope
- Yeni UI bileşeni veya yeni sayfa eklenmesi.
- Backend/DB entegrasyon testi (backend olmadığı için).

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (Tamamen doğrulanmış birleşik kurumsal demo)
├── src/
│   ├── components/
│   │   ├── HeroSection.js
│   │   ├── TrustBadge.js
│   │   ├── AboutSection.js
│   │   ├── ServicesSection.js
│   │   ├── ServiceCard.js
│   │   ├── ContactSection.js
│   │   └── ContactCTA.js
│   ├── data/
│   │   └── companyData.json
│   ├── services/
│   │   └── machineService.js
│   └── styles/
│       ├── reset.css
│       ├── tokens.css
│       ├── hero.css
│       ├── services.css
│       └── contact.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Responsive Layout & Breakpoint Verification Audit**
  - **Location / Responsibility**: All layout CSS and components.
  - **Parent Capability Relation**: implementation-of `Responsive Breakpoint QA`.
  - **Inputs / Contracts**: `DESIGN_RULES.md` Section 7 (Responsive Principles).
  - **Implementation Behavior**: 320px, 375px, 768px, 1024px, 1440px viewport genişliklerinde test. Yatay kaydırma (horizontal scrollbar) olmaması teyidi.
  - **Verification**: Tarayıcı dev-tools responsive mod kontrolü.
  - **Concrete Done Result**: Sıfır responsive kırılma.

- [ ] **Task 2: Visual Token & WCAG AA Accessibility Contrast Audit**
  - **Location / Responsibility**: `tokens.css` ve tüm renk kombinasyonları.
  - **Parent Capability Relation**: implementation-of `Visual Token & Contrast Verification`.
  - **Inputs / Contracts**: `DESIGN_RULES.md` Section 8 (Accessibility Baseline).
  - **Implementation Behavior**: Metin ve zemin renklerinin kontrast kontrolü. Klavye odaklama çerçevelerinin (`:focus-visible`) testi.
  - **Verification**: Lighthouse / kontrast denetimi.
  - **Concrete Done Result**: WCAG AA standartlarına %100 uyum.

- [ ] **Task 3: Sales Presentation Readiness & Clean Console Audit**
  - **Location / Responsibility**: Whole project.
  - **Parent Capability Relation**: implementation-of `Presentation Readiness Verification`.
  - **Inputs / Contracts**: `PROJECT_BRAIN.md` başarı kriterleri.
  - **Implementation Behavior**: `tel:` ve `mailto:` bağlantılarının doğrulaması, kırık link ve konsol log taraması.
  - **Verification**: Konsol kayıtlarının temiz çıkması.
  - **Concrete Done Result**: Satış demosu sunuma hazır.

## 9. State / Role / Responsive Coverage

- **Cross-Viewport**: Tüm breakpoint'lerde kusursuz düzen ve metin okunabilirliği.

## 10. Automated Verification

- Konsolda runtime error veya uncaught promise rejection olmadığını doğrulayan otomatik kontrol.

## 11. Manual QA / Debug Verification

- Müşteri gösterim senaryosunda sayfanın baştan sona akıcı biçimde sunulabildiğinin manuel simülasyonu.

## 12. Acceptance / Exit Criteria

- [ ] Bütün responsive kontroller geçmeli.
- [ ] Konsolda hiç JavaScript hatası bulunmamalı.
- [ ] Satış demosu sunum kalitesi `Prototype` olgunluğunda ve `standard` dokümantasyon derinliğinde dondurulmalı.

## 13. Handoff / Stop Rule

- `WAVE_04` tamamlandığında run `Validation` aşamasına geçer.

---

## Wave Result

- **Result**: Pending Execution
