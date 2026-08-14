# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_05: Final Cross-Cutting QA & Presentation Readiness

- **Status**: Pending Execution
- **Parent Wave**: `WAVE_05` in `waves/WAVE_MAP.md`
- **Goal**: Tüm kurumsal demo uygulamasının masaüstü, tablet ve mobil cihazlarda responsive düzen kontrolünü, tipografi/kompozisyon denetimini, local mock data adapter doğrulamasını ve satış sunumu son hazır olma denetimini gerçekleştirmek.

## 1. Parent Wave Map Entry

- **Goal**: Uçtan uca responsive kontrol, tipografi denetimi, mock data doğrulaması ve satış demosu hazır olma testi.
- **Committed Capabilities**:
  - Cross-Viewport Responsive Layout Audit (Desktop, Tablet, Mobile) (Support: SCP-001)
  - Typography, Color Contrast (WCAG AA) & Design Rules Compliance Audit (Support: SCP-001)
  - Local Data Adapter Boundary Verification (`companyService`) (Support: SCP-006)
  - Sales Presentation Demo Readiness Review (Support: SCP-001)

## 2. Parent Capability Coverage

| Plan Capability Atom | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Viewport Responsive Testing (Desktop / Tablet / Mobile) | Cross-Viewport Responsive Layout Audit (Desktop, Tablet, Mobile) | implementation-of | PASS |
| Contrast & Typography Audit against `DESIGN_RULES.md` | Typography, Color Contrast (WCAG AA) & Design Rules Compliance Audit | implementation-of | PASS |
| Data Boundary Integrity Test (`companyService.js`) | Local Data Adapter Boundary Verification (`companyService`) | verification-of | PASS |
| Sales Demo Presentation Workflow Verification | Sales Presentation Demo Readiness Review | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

Demo uygulamasının potansiyel müşteriye sunulmadan önceki son bütünsel kalite, responsive uyumluluk ve tasarım doğrulaması aşamasıdır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- WAVE_00, WAVE_01, WAVE_02, WAVE_03, WAVE_04

## 6. Scope

### In Scope
- Tüm tamamlanan yüzeylerin (Header, Hero, Corporate, Services, Contact, Footer) 1920px, 1024px, 768px, 375px ekran boyutlarında denetimi.
- WCAG AA renk kontrast oranı doğrulaması.
- `companyService` modülünün tüm verileri eksiksiz sağladığının kontrolü.
- Satış sunumu akış simülasyonu.

### Out of Scope
- Yeni arayüz bileşeni veya onaylanmamış özellik ekleme.

## 7. Expected Result / Target Structure

```text
/
├── outputs/demos/trakya-teknik-makine/ (Final validated output directory)
└── QA_Audit_Checklist (Verified execution proof)
```

## 8. Implementation Checklist

- [ ] Masaüstü, tablet ve mobil görünüm düzen denetimi yapılacak. (Parent Atom: Cross-Viewport Responsive Layout Audit)
- [ ] Tipografi ve renk kontrastı WCAG AA denetimi tamamlanacak. (Parent Atom: Typography & Color Contrast Audit)
- [ ] `companyService` veri erişim sınırı ve mock nesneler doğrulanacak. (Parent Atom: Local Data Adapter Boundary Verification)
- [ ] Satış demosu sunum senaryosu uçtan uca çalıştırılacak. (Parent Atom: Sales Presentation Demo Readiness Review)

## 9. State / Role / Responsive Coverage

- Çapraz cihaz ekran çözünürlüklerinde yatay kaydırma (horizontal scroll) hatası olmamalıdır.
- Tüm CTA bağlantıları mobil cihazlarda kesintisiz çalışmalıdır.

## 10. Automated Verification

- W3C Validator ve Lighthouse / Accessibility skor denetimi.

## 11. Manual QA / Debug Verification

- Gerçek mobil cihaz veya tarayıcı devtools simülasyonu ile satış sunum simülasyonu yapılacak.

## 12. Acceptance / Exit Criteria

- [ ] 0 responsive kıvrılma/hata.
- [ ] WCAG AA uyumu doğrulanmış.
- [ ] `companyService` veri katmanı tam uyumlu.
- [ ] Satış demosu sunuma eksiksiz hazır.

## 13. Handoff / Stop Rule

WAVE_05 tamamlandığında Product Engine çalışması doğrulamaya (Validation) ve ardından yayına (Publication / Completion) geçer.

---

## Wave Result

- **Status**: Pending Execution
- **Result**: Not executed yet (planning phase complete).
