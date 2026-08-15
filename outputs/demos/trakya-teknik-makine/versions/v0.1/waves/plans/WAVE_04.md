# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_04: Whole-Project Responsive, Performance & Presentation QA

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Tüm frontend demoyu kapsayan cross-browser, mobil/tablet responsive uyum, performans, erişilebilirlik (WCAG AA) ve satış demosu sunum kalitesi doğrulamasını gerçekleştirmek.

## 1. Parent Wave Map Entry

- **Name**: `WAVE_04: Whole-Project Responsive, Performance & Presentation QA`
- **Goal**: Tüm sayfalar arası responsive uyum, cross-browser kontrolü ve satış demosu sunum doğrulaması.
- **Why Separate**: `DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği projenin bütününü kapsayan yatay QA işleri tekil feature dalgalarının içine gömülemez; bağımsız kapanış dalgası olarak yürütülür.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Responsive Breakpoint Inspection & Layout Verification | whole-project responsive verification | verification-of | PASS |
| WCAG 2.1 AA Contrast & Keyboard Focus Audit | presentation quality assurance | verification-of | PASS |
| End-to-End Sales Demo Presentation Audit | presentation quality assurance | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_04`, `WAVE_00` .. `WAVE_03` arasında geliştirilen tüm katmanların satış görüşmesinde sorunsuz sergilenmesini garanti eden yatay QA dalgasıdır. Package granularity kuralı gereği bağımsız kapanış adımıdır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_03` (Direct Contact & Action Surface).

## 6. Scope

### In Scope
- Mobile (<640px), Tablet (640px - 1024px) ve Desktop (>1024px) breakpoint doğrulama kontrolleri.
- W3C WCAG 2.1 AA kontras oranları (minimum 4.5:1) ve klavye gezintisi odak göstergesi denetimi.
- Direct-contact CTA (`tel:`, `mailto:`) eylemlerinin uçtan uca tetiklenme testi.
- Factual claim ihlali (stok, SLA vb.) olup olmadığının son metin denetimi.

### Out of Scope
- Yeni UI bileşeni veya yeni kod özelliği geliştirmek.
- Backend/API testi veya sunucu yük testi.

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260815-001/
└── working-output/ (Validated Prototype Output)
```

## 8. Implementation Checklist

- [ ] **Task 04.1 (Cross-Device Responsive Layout Audit)**:
  - **Location/Responsibility**: `src/styles/responsive.css` / layout verification.
  - **Parent Capability Relation**: `verification-of` -> `whole-project responsive verification`.
  - **Implementation Behavior**: 320px, 375px, 768px, 1024px, 1440px genişliklerinde yatay kaydırma (horizontal overflow) ve tipografi hizalama denetimi.
  - **Verification**: Sıfır yatay scrollbar olmalıdır.
- [ ] **Task 04.2 (Accessibility & Contrast Audit)**:
  - **Location/Responsibility**: `design/DESIGN_RULES.md` accessibility baseline verification.
  - **Parent Capability Relation**: `verification-of` -> `presentation quality assurance`.
  - **Implementation Behavior**: Koyu endüstriyel arka plan ve amber accent metinler arasında WCAG AA kontras kontolü; Tab klavye gezintisinde odak halkası varlığı.
  - **Verification**: Tüm metinler yüksek okunabilirliğe sahip olmalıdır.
- [ ] **Task 04.3 (Sales-Demo Presentation Verification)**:
  - **Location/Responsibility**: Whole project presentation flow.
  - **Parent Capability Relation**: `verification-of` -> `presentation quality assurance`.
  - **Implementation Behavior**: Trakya Teknik Makine kurumsal adının, Disan Trakya Bölge Yetkili Servisi statüsünün, 3 approved hizmetin ve direct CTA'ların eksiksiz ve tutarlı sunum kontrolü.
  - **FCL Boundary**: Son metin taramasında kaynak dışı hiçbir firma iddiası bulunmamalıdır.
  - **Verification**: Satış demosu 5 saniyelik ilk bakış testini hatasız geçmelidir.

## 9. State / Role / Responsive Coverage

- **All Breakpoints**: Mobile, Tablet, Desktop responsive görünümleri kusursuzdur.

## 10. Automated Verification

- Validation Gate Run: `VAL-01` .. `VAL-19` rules pass completely without blocking failures.

## 11. Manual QA / Debug Verification

- Satış demosu ekranında 3 saniye içinde yetkili servis statüsü ve 3 hizmet anlaşılabiliyor mu?
- Klavye ile Tab tuşuna basıldığında odak belirgin bir amber çizgi ile görünüyor mu?

## 12. Acceptance / Exit Criteria

- [ ] Responsive düzen tüm breakpoint'lerde doğrulandı.
- [ ] Accessibility (WCAG AA) kontrolleri tamamlandı.
- [ ] Satış demosu sunuma hazır (sales-demo ready validated prototype).

## 13. Handoff / Stop Rule

- `WAVE_04` tamamlandığında, Product Engine run'ı validation kapısına girmeye ve yayınlanmaya (publication) hazırdır.

---

## Wave Result

- **Execution Status**: Pending Execution
- **Output Artifacts**: Validated sales-demo frontend package in `working-output/`.
