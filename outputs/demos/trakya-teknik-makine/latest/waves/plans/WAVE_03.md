# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Responsive Polish & Sales Demo Readiness

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Mobil ve tablet responsive uyumunu mükemmelleştirmek, hover/focus/active durumlarını cilalamak ve satış demosu için derlenmiş static build üretmek.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_03
- **Name**: Responsive Polish & Sales Demo Readiness
- **Goal**: Mobil ve tablet responsive uyumunu mükemmelleştirmek, hover/focus/active durumlarını cilalamak ve satış demosu için derlenmiş static build üretmek.
- **Why Separate**: Tüm UI bileşenleri hazır olmadan responsive cilalama ve cross-device QA yapılamaz; satış görüşmesi öncesinde bağımsız kalite kapanış dalgası gereklidir.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Responsive Layout Adjustment (`media queries`) | Mobile/Tablet responsive layout adaptation | implementation-of | PASS |
| Interactive State & Accessibility Polish | Interactive state & accessibility polish | implementation-of | PASS |
| Production Build Verification (`npm run build`) | Static build preview validation (`npm run build`) | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_03`, projenin tüm görsel bileşenleri (Wave 01 & Wave 02) tamamlandıktan sonra devreye giren son kalite ve cilalama dalgasıdır. Satış görüşmelerinde mobil cihazlarda veya tabletlerde gösterim yaparken hiçbir dikey taşma (overflow), hizalama bozukluğu veya dokunmatik buton küçüklüğü yaşanmamasını garanti eder.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md) — Başarı kriterleri ve hedef sunum bağlamı
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md) — Responsive ve UX kuralları
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md) — Build ve preview komutları
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md) — Responsive breakpoint'ler, touch target boyutları ve odak halkası
- [waves/WAVE_MAP.md](../WAVE_MAP.md) — Wave 03 hedefleri ve çıkış kriterleri

## 5. Dependencies

- **WAVE_02**: `ServicesGrid`, `ContactCTA` ve `Footer` bileşenlerinin tamamlanmış olması gerekir.

## 6. Scope

### In Scope
- Media query düzenlemeleri (`@media (max-width: 1023px)` ve `@media (max-width: 767px)`).
- Mobil cihazlarda dokunmatik CTA alanlarının minimum `44px` yüksekliğe uyarlanması.
- Hover, focus ve active durumlarının kontrollü mikro geçişlerle (`transition: all 0.25s ease-in-out`) cilalanması.
- WCAG AA seviyesinde klavye odağı (`outline: 2px solid #D97706`) kontrolü.
- `npm run build` ile uyarısız ve hatasız `dist/` bundle üretimi ve `npm run preview` doğrulaması.

### Out of Scope
- Production hosting / domain / DNS yapılandırması.
- Yeni UI bileşeni veya yeni sayfa eklenmesi.
- Backend, veritabanı veya canlı entegrasyonlar.

## 7. Expected Result / Target Structure

```text
dist/
├── index.html
├── assets/
│   ├── index-<hash>.js
│   └── index-<hash>.css
```

## 8. Implementation Checklist

- [x] **Task 1 / Responsive Layout Adaptation**:
  - Location: `src/styles/global.css`, `src/components/*.css`
  - Consumes: `design/DESIGN_RULES.md` Section 7 (Responsive Principles)
  - Owns: Desktop, tablet ve mobil breakpoint medya sorguları
  - Must Not: Yatay kaydırma çubuğu (horizontal overflow) oluşmayacaktır
  - Verification: Chrome DevTools cihaz modunda 320px, 375px, 768px, 1024px ekran çözünürlüklerinde test edilmesi
  - Done: Masaüstü ve mobil ekranlarda kusursuz uyum sağlanması.

- [x] **Task 2 / Interactive State & Accessibility Polish**:
  - Location: `src/styles/tokens.css`, `src/components/*.css`
  - Consumes: `design/DESIGN_RULES.md` Section 6 & 8
  - Owns: Hover kart kaldırma efekti, CTA odak halkası, klavye Tab navigasyonu
  - Must Not: `outline: none` ile odak halkası gizlenmeyecektir
  - Verification: Tab tuşuyla navigasyon yapıldığında amber odak çerçevesinin görünmesi
  - Done: Mikro etkileşimlerin ve erişilebilirliğin tamamlanması.

- [x] **Task 3 / Static Build Verification**:
  - Location: `./package.json`, `./vite.config.js`
  - Consumes: `ai/TECH_CONTEXT.md` build komutları
  - Owns: Satış demosu için derlenmiş static `dist/` paketi
  - Must Not: Derleme hatası veya eksik modül uyarısı bırakılmayacaktır
  - Verification: `npm run build` ve `npm run preview` komutlarının hatasız çalışması
  - Done: Satışa hazır demo paketinin derlenmesi.

## 9. State / Role / Responsive Coverage

- **Desktop (`>= 1024px`)**: Akıcı max-width: 1200px container, hover efektleri aktif.
- **Tablet (`768px - 1023px`)**: 2 sütunlu kartlar, optimize edilmiş padding.
- **Mobile (`< 768px`)**: Dikey tek sütun dizilim, minimum 44px touch target butonlar, sıfır yatay kayma.

## 10. Automated Verification

```bash
# Production derleme testi
npm run build

# Production derleme önizlemesi
npm run preview
```

## 11. Manual QA / Debug Verification

- Mobil görünümde (`375px`) dikey kaydırma yapılırken sağa-sola taşma (horizontal scroll) olmadığını kontrol et.
- Tab tuşu ile sayfa başında sonuna kadar gezerek odak halkasını gözlemle.
- `npm run build` çıktısının `dist/` klasörüne temiz JS ve CSS bundle'ları ürettiğini doğrula.

## 12. Acceptance / Exit Criteria

- [x] Masaüstü, tablet ve mobil ekranlarda yatay kayma (horizontal overflow) yok.
- [x] Direct-contact CTA butonları mobilde en az `44px` yüksekliğe ve dokunmatik alana sahip.
- [x] Klavye ile gezintide görünür amber odak halkası mevcut.
- [x] `npm run build` komutu uyarısız ve hatasız `dist/` önizleme paketi üretiyor.

## 13. Handoff / Stop Rule

`WAVE_03` tamamlandığında, projenin tüm implementation planları tamamlanmış ve satış demosu teslim olgunluğuna ulaşmış olur. Dokümantasyon `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenir ve publication gate'e devredilir.

---
## Wave Result

- **Result Status**: completed
