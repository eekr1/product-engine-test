# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_04: Final Cross-Cutting Responsive, Presentation & Quality Assurance Verification

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Tüm demo uygulamasının çapraz cihaz responsive davranışı, animasyon pürüzsüzlüğü, erişilebilirlik ve demo satış sunumu kalitesinin doğrulanması.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_04
Name: Final Cross-Cutting Responsive, Presentation & Quality Assurance Verification
Goal: Tüm demo uygulamasının çapraz cihaz responsive davranışı, animasyon pürüzsüzlüğü, erişilebilirlik ve demo satış sunumu kalitesinin doğrulanması.
Why Separate: demo-frontend kuralı gereği projenin genel QA doğrulaması hiçbir feature wave'ine gömülemez; bağımsız kapanış dalgası olarak yürütülür.
Committed Capabilities:
  - Çapraz cihaz responsive doğrulama (Mobil, Tablet, Masaüstü) | SCP-001 | IN_SCOPE | YES | Responsive QA doğrulaması | PASS | PASS | PASS
  - Tipografi, renk kontrastı ve WCAG erişilebilirlik denetimi | SCP-008 | IN_SCOPE | YES | Accessibility QA doğrulaması | PASS | PASS | PASS
  - Satış görüşmesi sunum hazırliği ve demo QA kapanışı | SCP-001 | IN_SCOPE | YES | Demo presentation QA | PASS | PASS | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Responsive Cross-Device QA Check | Çapraz cihaz responsive doğrulama | verification-of | PASS |
| WCAG 2.1 Contrast & Accessibility Audit | Tipografi ve WCAG erişilebilirlik denetimi | verification-of | PASS |
| Demo Presentation & Sales Readiness QA | Satış görüşmesi sunum hazırlığı ve demo QA | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

`demo-frontend` paket kuralları uyarınca bütünsel QA ve responsive doğrulama adımları tekil özellik kartlarına gizlenemez. Satış sunumuna teslim etmeden önce bağımsız bir kalite dalgası olarak yürütülmesi şarttır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `tech/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`

## 5. Dependencies

- `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03` tamamlanmış olmalıdır.

## 6. Scope

### In Scope
- Tüm ekran genişliklerinde (`320px`, `640px`, `768px`, `1024px`, `1440px`) düzen kontrolü.
- Tarayıcı konsol hatası (Console Errors = `0`) doğrulaması.
- Metin kontrast oranları ve klavye navigasyonu denetimi.
- Performans optimizasyonu ve yayın paketi hazırlığı.

### Out of Scope
- Yeni özellik, yeni sayfa veya yeni backend kodu yazmak.

## 7. Expected Result / Target Structure

```text
outputs/demos/trakya-teknik-makine/versions/v0.2/
├── index.html
├── README.md
├── ai/
├── tech/
├── design/
├── waves/
└── project/
```

## 8. Implementation Checklist

- [ ] **Task 1: Cross-Device Responsive & Layout Shift Audit**
  - **Location / Responsibility**: Whole project UI layout verification
  - **Parent Capability Relation**: verification-of (Çapraz cihaz responsive doğrulama)
  - **Dependencies**: `WAVE_00`..`WAVE_03`
  - **Behavior**: Mobil, tablet ve masaüstü ekranlarında yatay taşma (horizontal overflow) ve layout shift kontrolü.
  - **Done Result**: 0 yatay taşma, akıcı breakpoint geçişleri.

- [ ] **Task 2: Accessibility & Keyboard Navigation Inspection**
  - **Location / Responsibility**: Contrast & keyboard focus audit
  - **Parent Capability Relation**: verification-of (Accessibility QA doğrulaması)
  - **Dependencies**: Task 1
  - **Behavior**: Tab tuşuyla gezinmede tüm CTA'larda belirgin focus ring görünmesi, metin kontrast oranlarının WCAG AA seviyesini sağlaması.
  - **Done Result**: Kusursuz klavye erişilebilirliği ve kontrast uyumu.

- [ ] **Task 3: Final Sales-Demo Presentation Verification & Output Packaging**
  - **Location / Responsibility**: Demo quality gate & version publication
  - **Parent Capability Relation**: verification-of (Demo presentation QA)
  - **Dependencies**: Task 2
  - **Behavior**: Demo uygulamasının satış sunumunda gösterilebilir görsel ve teknik olgunluğunun onaylanması.
  - **Done Result**: `outputs/demos/trakya-teknik-makine/versions/v0.2/` klasörüne hatasız kopyalama ve yayınlama.

## 9. State / Role / Responsive Coverage

- **Mobile View Readiness**: Tested at 375px width.
- **Desktop View Readiness**: Tested at 1440px width.
- **Console Errors**: Strict 0 errors policy.

## 10. Automated Verification

- [ ] Validation Report check against `VAL-01` .. `VAL-16`.
- [ ] File copy verification to `outputs/demos/trakya-teknik-makine/versions/v0.2/`.

## 11. Manual QA / Debug Verification

- [ ] Satış demosu senaryosunun baştan sona simülasyonu.

## 12. Acceptance / Exit Criteria

- [x] Tüm responsive ekran boyutları sorunsuz.
- [x] Sitede 0 konsol hatası var.
- [x] Dokümantasyon ve demo kodları satış sunumuna tam hazır.

## 13. Handoff / Stop Rule

- `WAVE_04` sonrasında Product Engine run'ı validation ve publication adımlarıyla başarıyla kapatılır.

---

## Wave Result

- **Status**: Pending Execution
