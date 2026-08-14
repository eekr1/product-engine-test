# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Cross-Cutting QA & Presentation Optimization

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Tüm sitenin masaüstü, tablet ve mobil ekranlarda satış görüşmesinde sorunsuz gösterilecek kaliteye ulaştığını doğrulamak.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_04
- **Name**: Cross-Cutting QA & Presentation Optimization
- **Goal**: Mobil/masaüstü responsive doğrulama, tarayıcı uyumluluğu, satış sunumu QA.
- **Primary Deliverables**: Temiz Demo Paketi, Responsive QA Raporu, Presentation Baseline.
- **Dependencies**: WAVE_03.

## 2. Why This Wave / Dependency Rationale

`demo-frontend` paket sözleşmesi gereğince tüm kullanıcı yüzeyleri (Hero, Hizmetler, İletişim) tamamlandıktan sonra proje genelini kapsayan bütüncül bir QA ve sunum doğrulaması bağımsız son dalga olarak yürütülmelidir.

## 3. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 4. Dependencies

WAVE_03 (Contact & Conversion Touchpoints) tamamlanmış olmalıdır.

## 5. Scope

### In Scope

- Tüm sayfa ve bileşenlerin ekran çözünürlüğü ve tarayıcı doğrulama sweep'i (Desktop 1920px/1440px, Tablet 768px, Mobile 375px/390px).
- Renk kontrastı, yazı boyutu ve odak noktaları erişilebilirlik denetimi (WCAG AA).
- Navigasyon geçişleri ve pürüzsüz kaydırma (smooth scroll) testleri.
- Satış görüşmesi sunum hazırlığı doğrulaması ("Mevcut sitenizi bu seviyeye taşıyabiliriz" mesajının netliği).

### Out of Scope

- Yeni özellik ekleme veya mimari tasarım değişikliği.

## 6. Expected Result / Target Structure

```text
/
├── index.html
└── src/
    ├── components/
    │   ├── Header.js
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Services.js
    │   ├── Contact.js
    │   └── Footer.js
    └── styles/
        └── main.css (tüm stillerin birleşimi veya modüler aktarımı)
```

## 7. Implementation Checklist

- [ ] Tüm ekran çözünürlüklerinde yatay taşma (horizontal scrollbar) olup olmadığının kontrolü.
- [ ] Mobil menü ve tıklanabilir tüm elemanların dokunmatik ekran testi.
- [ ] Tipografi hiyerarşisi ve zemin-metin kontrast oranlarının denetimi.
- [ ] Mock data yüklenme süresi ve console log temizliği (sıfır JavaScript hatası).
- [ ] Satış demosu sunum kontrolünün yapılması.

## 8. State / Role / Responsive Coverage

- **All Devices**: Mobile, Tablet, Desktop.
- **Browsers**: Chrome, Edge, Safari, Firefox.

## 9. Automated Verification

- Konsol hata denetimi (`0 errors, 0 warnings`).
- HTML markup validation ve CSS syntax denetimi.

## 10. Manual QA / Debug Verification

- Müşteri sunumu senaryosuyla sitenin yukarıdan aşağıya incelenmesi ve "Hemen Ara" / "İletişim" butonlarının testi.

## 11. Acceptance / Exit Criteria

- [ ] Demo ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern ve profesyonel görünmeli.
- [ ] Sıfır konsol hatası ve sıfır responsive düzen kırılması olmalı.
- [ ] Satış görüşmesinde müşteri temsilcisinin güvenle sergileyebileceği kaliteye ulaşılmalı.

## 12. Handoff / Stop Rule

WAVE_04 başarıyla tamamlandığında çalışma dondurulur, publication gate çalıştırılır ve nihai paket `outputs/demos/trakya-teknik-makine/latest/` dizinine teslim edilir.

---

## Wave Result

Status: Pending Execution
