# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Cross-Cutting Integration, Responsive & Presentation QA

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Proje geneli responsive uyumluluk denetimi, visual polish, service boundary doğrulaması ve satış görüşmesi demo hazırlığının tamamlanması.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_04
- **Name**: Cross-Cutting Integration, Responsive & Presentation QA
- **Parent Goal**: Proje geneli responsive uyumluluk denetimi, visual polish, service boundary doğrulaması ve satış görüşmesi demo hazırlığının tamamlanması.
- **Committed Capabilities**:
  - Proje Geneli Responsive ve Mobil Uyum Doğrulaması | SCP-001 | Responsive kurumsal frontend demo uygulaması | PASS
  - Presentation Readiness & Service Boundary Audit | SCP-006 | Clean data-access boundary denetimi | PASS

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Proje Geneli Responsive Layout Audit (375px - 1440px+) | Proje Geneli Responsive ve Mobil Uyum Doğrulaması | implementation-of | PASS |
| Visual Polish & Endüstriyel CSS Token Denetimi | Proje Geneli Responsive ve Mobil Uyum Doğrulaması | detail-of | PASS |
| `CompanyService` & Data Boundary Integrity Audit | Presentation Readiness & Service Boundary Audit | implementation-of | PASS |
| Console Error & Cross-Browser Performance Check | Presentation Readiness & Service Boundary Audit | verification-of | PASS |
| Satış Görüşmesi Demo Presentation Readiness Check | Presentation Readiness & Service Boundary Audit | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

Satış görüşmesinde potansiyel müşteriye sunulacak bir frontend deponun görsel hata, kırık responsive düzen veya konsol hatası barındırmaması gerekir. `WAVE_04`, önceki tüm wave'leri (`WAVE_00` - `WAVE_03`) kapsayan bütünsel kalite ve kapanış dalgasıdır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_00.md` .. `WAVE_03.md`

## 5. Dependencies

- `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03` (Tüm önceki dalgalar).

## 6. Scope

### In Scope
- Mobil (375px), Tablet (768px) ve Masaüstü (1200px+) breakpoint'lerinde sayfa düzeni doğrulaması.
- CSS değişkenleri (`--bg-primary`, `--accent-amber`) ve renk kontrastı denetimi.
- `CompanyService` mimarisinin temiz çalıştığının ve presentation koduna hardcoded veri sızmadığının denetimi.
- Konsolda 0 JS hatası ve 0 kırık bağlantı garantisi.
- Demo sunum hazır duruma getirilmesi.

### Out of Scope
- Yeni sayfa, yeni bileşen veya yeni kapsamsal özellik eklenmesi.
- Sunucu tarafı yayına alma ve domain taşıma (Production deployment).

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html
├── css/
│   └── main.css
└── js/
    ├── data/
    ├── adapters/
    ├── services/
    └── components/
```

## 8. Implementation Checklist

- [ ] Tüm responsive breakpoint'lerde (375px, 768px, 1024px, 1440px) dikey ve yatay kayma (overflow) olmadığını doğrula (`SCP-001`).
- [ ] CSS token'larının `DESIGN_RULES.md` renk ve tipografi standartlarını tam olarak karşıladığını denetle (`PR-UX-02`).
- [ ] UI bileşenlerinin hiçbirinde hardcoded firma metni kalmadığını, verilerin `CompanyService` üzerinden aktığını kontrol et (`SCP-006`).
- [ ] Tarayıcı geliştirici araçları konsolunda hiçbir JS uyarısı veya hatası kalmadığını doğrula.
- [ ] Masaüstü ve mobil ekranlarda telefon ve e-posta tıklama eylemlerinin sorunsuz çalıştığını son kez test et (`SCP-005`).

## 9. State / Role / Responsive Coverage

- **Cross-Browser State**: Chrome, Safari, Firefox ve Edge üzerinde aynı görsel dille sorunsuz çalışma.
- **Accessibility Baseline**: Metin kontrastlarının WCAG AA standartlarına uygunluğu.
- **Zero-Error Guarantee**: Konsol temizliği ve 0 hata.

## 10. Automated Verification

- Clean DOM Audit: DOM üzerinde çözülmemiş placeholder (`[TBD]`, `{{...}}`) kalmadığını doğrula.
- Service Boundary Check: Presentation bileşenlerinin veriyi `CompanyService` dışından almadığını doğrula.

## 11. Manual QA / Debug Verification

- Satış görüşmesi senaryosu simüle edilerek ana sayfadan iletişim noktasına kadar olan akış kontrol edilmelidir.
- Mobil görünümde navigasyon ve butonların kolay tıklanabilirliği doğrulanmalıdır.

## 12. Acceptance / Exit Criteria

- [ ] Demo 0 konsol hatasıyla sorunsuz çalışıyor.
- [ ] Mobil, tablet ve masaüstü görünümleri kusursuz.
- [ ] Satış görüşmesinde sunulmaya %100 hazır.

## 13. Handoff / Stop Rule

`WAVE_04` tamamlandığında, Product Engine run'ı son doğrulamaya (Validation) ve yayımlamaya (Publication) hazır duruma gelir.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state)
