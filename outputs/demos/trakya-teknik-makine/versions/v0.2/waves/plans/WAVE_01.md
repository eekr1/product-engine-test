# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Global Shell & Primary Entry

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Sitenin üst gezinme kabuğunu (Header/Nav), mobil menüyü ve etkileyici Hero giriş alanını inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_01
Name: Global Shell & Primary Entry
Goal: Sitenin üst gezinme kabuğunu (Header/Nav), mobil menüyü ve etkileyici Hero giriş alanını inşa etmek.
Committed Capabilities:
- Global Header & Navigation | SCP-001 | PASS
- Primary Hero Section | SCP-002 | PASS
- Hero Primary Conversion CTA | SCP-005 | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Masaüstü ve mobil Header bileşeni | Global Header & Navigation | implementation-of | PASS |
| Mobile Hamburger Menu etkileşimi | Global Header & Navigation | detail-of | PASS |
| Hero Section başlığı, alt başlığı ve görsel alanı | Primary Hero Section | implementation-of | PASS |
| Hero içi teklif/iletişim CTA butonları (`tel:`, `#contact`) | Hero Primary Conversion CTA | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Global header ve Hero alanı ziyaretçinin siteye girdiğinde gördüğü ilk yüzeydir. Kurumsal algının temeli burada kurulur.

## 4. Canonical Sources to Read

- `design/DESIGN_RULES.md`
- `ai/PRODUCT_RULES.md`
- `ai/PROJECT_BRAIN.md`

## 5. Dependencies

- `WAVE_00` (Foundation & Design Tokens).

## 6. Scope

### In Scope

- Header & Navigasyon barı (Logo, Menü Bağlantıları, Mobil Menü Butonu).
- Responsive Mobil Menü Açılır Paneli.
- Hero Bölümü (Tipografik başlık, teknik gradyan arka plan, birincil ve ikincil CTA butonları).

### Out of Scope

- Hizmet kartları ve iletişim formu.

## 7. Expected Result / Target Structure

- Header ve Hero bileşenleri `src/components/Header.js` ve `src/components/Hero.js` altında modüler olarak oluşturulur.

## 8. Implementation Checklist

- [ ] `TASK-010`: Header HTML ve CSS bileşeninin yazılması (Logo + Navigasyon).
- [ ] `TASK-011`: Mobil Hamburger Menü etkileşiminin Javascript ile bağlanması.
- [ ] `TASK-012`: Hero bölümünün `DESIGN_RULES.md` visual direction ilkelerine göre çizilmesi.
- [ ] `TASK-013`: Hero CTA butonlarının yönlendirmelerinin (`tel:`, `#contact`) bağlanması.

## 9. State / Role / Responsive Coverage

- Desktop (1200px+), Tablet (768px) ve Mobile (320px) ekran kırılma noktalarında tam duyarlılık.

## 10. Automated Verification

- Linting ve HTML semantik yapısı hatasız olmalıdır.

## 11. Manual QA / Debug Verification

- Mobil menü açma/kapama sorunsuz çalışmalıdır.
- Hero CTA butonları tıklanabilir olmalıdır.

## 12. Acceptance / Exit Criteria

- [ ] Header ve Hero alanı responsive olarak tasarıma tam uygun görünüyor.
- [ ] Mobil menü açılıp kapanıyor.
- [ ] Hero CTA'ları doğru hedef bağlantılara sahip.

## 13. Handoff / Stop Rule

- `WAVE_01` tamamlandığında `WAVE_02` ve `WAVE_03` aşamalarına geçilebilir.

---

## Wave Result

- **Result**: Pending / Not Executed
