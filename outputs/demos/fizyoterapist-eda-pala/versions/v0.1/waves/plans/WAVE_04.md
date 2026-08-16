# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_04: Final Cross-Cutting QA & Verification

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Tüm yüzeylerin responsive/cross-device performansı, erişilebilirlik, anti-cliché ve fail-closed validation denetimi.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_04`
- **Name**: Final Cross-Cutting QA & Verification
- **Why Separate**: Bütüncül kalite kontrolü tüm kullanıcı yüzeyleri tamamlandıktan sonra bağımsız bir kapanış adımı olarak yapılmalıdır.
- **In Scope**: Cross-browser & cross-device responsive test, keyboard navigation audit, contrast audit, zero-unverified-claim audit.
- **Out of Scope**: Yeni özellik veya içerik geliştirmesi.
- **Primary Deliverables**: Validated prototype output package.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Cross-Device Responsive Verification | Cross-Device Responsive Verification | `verification-of` | `PASS` |
| Accessibility & Keyboard Navigation Verification | Accessibility & Keyboard Navigation Verification | `verification-of` | `PASS` |
| Anti-Clinic-Cliché Visual Audit | Anti-Clinic-Cliché Visual Audit | `verification-of` | `PASS` |
| Complete Final Prototype Verification | Complete Final Prototype Verification | `verification-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

- Tüm bireysel arayüz dalgaları (`WAVE_00` .. `WAVE_03`) tamamlandıktan sonra, uygulamanın bütüncül kalitesini, responsive kırılma noktalarını, erişilebilirliğini ve sağlık alanı kısıtlarına tam uyumunu bağımsız olarak doğrular.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [engine/VALIDATION_RULES.md](../../../../engine/VALIDATION_RULES.md)

## 5. Dependencies

- `WAVE_00` .. `WAVE_03` tüm dalga paketlerinin tamamlanmış olması.

## 6. Scope

### In Scope
- Masaüstü (1200px+), Tablet (768px - 1199px) ve Mobil (<768px) ekranlarda yatay kayma (horizontal overflow) denetimi.
- Klavye gezintisi (`Tab`, `Shift+Tab`, `Enter`) ve görünür focus halkası denetimi.
- WCAG 2.1 AA kontrast oranı denetimi.
- Health-Domain Guard denetimi (Sıfır uydurma tedavi, hastalık, adres veya yorum kontrolü).
- Canonical Validation Gate denetimi (`VAL-01` .. `VAL-19`).

### Out of Scope
- Yeni UI bileşeni, içerik kartı veya stil eklenmesi.

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260817-001/
├── VALIDATION_REPORT.md
└── COMPLETION_REPORT.md
```

## 8. Implementation Checklist

- [ ] **`TSK-04-01`: Cross-Device Responsive Audit**
  - **Location**: Tüm `.css` dosyaları ve `index.html`
  - **Responsibility**: Mobile (375px), Tablet (768px) ve Desktop (1440px) görünümlerinde dikey akış ve sıfır yatay kayma denetimi.
  - **Parent Capability**: `Cross-Device Responsive Verification`
  - **Done Criteria**: Tüm kırılma noktalarında kusursuz layout uyumu.
- [ ] **`TSK-04-02`: Accessibility & Keyboard Navigation Audit**
  - **Location**: `index.html`, `styles/tokens.css`
  - **Responsibility**: Focus göstergeleri (`:focus-visible`), aria-label öznitelikleri ve klavye sekme sırası denetimi.
  - **Parent Capability**: `Accessibility & Keyboard Navigation Verification`
  - **Done Criteria**: Klavye ile Instagram CTA ve tüm bağlantılara erişim.
- [ ] **`TSK-04-03`: Anti-Clinic-Cliché & Health Guard Audit**
  - **Location**: Tüm metin içerikleri ve bileşenler
  - **Responsibility**: Doğrulanmamış hiçbir sağlık iddiasının, tedavi kartının veya turkuaz gradientin bulunmadığının teyidi.
  - **Parent Capability**: `Anti-Clinic-Cliché Visual Audit`
  - **Done Criteria**: %100 FCL allowlist uyumu.
- [ ] **`TSK-04-04`: Canonical Engine Validation Execution (`VAL-01` .. `VAL-19`)**
  - **Location**: `runs/active/RUN-20260817-001/VALIDATION_REPORT.md`
  - **Responsibility**: `engine/VALIDATION_RULES.md` kurallarının eksiksiz çalıştırılması.
  - **Parent Capability**: `Complete Final Prototype Verification`
  - **Done Criteria**: Validation Report'un PASS / CONDITIONAL PASS ile sonuçlanması.

## 9. State / Role / Responsive Coverage

- **Verification Coverage**: Masaüstü, tablet ve mobil cihaz görünümlerinde %100 kapsama.
- **Fail-Closed Strategy**: Herhangi bir kısıt ihlali durumunda validation FAIL verilmesi.

## 10. Automated Verification

- [ ] `VAL-01` .. `VAL-19` canonical validation gate denetimi.
- [ ] Mandatory evidence blocks eksiksizlik kontrolü.

## 11. Manual QA / Debug Verification

- [ ] Ekran okuyucu uyumluluğu ve klavye focus halkalarının görünürlüğü.
- [ ] Instagram dış yönlendirmesinin sekme ve güvenlik kontrolü.

## 12. Acceptance / Exit Criteria

- [ ] Tüm 19 validation kapısı başarıyla yürütülmüştür.
- [ ] `VALIDATION_REPORT.md` üretilmiş ve kapanışa onay vermiştir.

## 13. Handoff / Stop Rule

- `WAVE_04` başarılı tamamlandığında run kapanış aşamasına (`Completion`) ve paket yayınlama adımına geçilir.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
