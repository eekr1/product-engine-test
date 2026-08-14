# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Final Integration, Responsive & Presentation QA

- **Status**: Pending Execution
- **Goal**: Tüm geliştirilen yüzeylerin (Header, Hero, Services, Contact, Footer) bütünleşik sayfa akışını, responsive (desktop, tablet, mobile) uyumunu, cross-browser görünümünü ve satış demosu sunum kalitesini doğrulamak.

## 1. Why This Wave / Dependency Rationale
`DEMO_FRONTEND_PACKAGE.md` Granularity Guard kuralı gereğince tüm projenin çapraz cihaz, akış ve sunum kalitesini doğrulayan bütüncül (cross-cutting) QA adımı ayrı bir final wave olarak yürütülmelidir.

## 2. Canonical Sources to Read
- [README.md](../../README.md)
- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies
- `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03` (Tüm önceki dalgalar tamamlanmış olmalıdır).

## 4. Scope

### Scope References
- `SCP-001`: Responsive Frontend Demo
- `SCP-002`: Ana Sayfa ve Kurumsal/Hizmet/İletişim Bölümleri
- `SCP-003`: Disan Hidrolik Yetkili Servislik Sunumu
- `SCP-004`: 3 Temel Hizmet Sunumu
- `SCP-005`: Telefon ve E-posta İletişim CTA Bağlantıları
- `SCP-007`: Gerçek Firma Bilgilerinin Korunması

### In Scope
- Bütünleşik sayfa navigasyon ve kaydırma (smooth scroll) testleri.
- Responsive ekran boyutları doğrulaması (1440px Masaüstü, 768px Tablet, 375px Mobil).
- Çapraz tarayıcı görünüm doğrulama (Chrome, Safari, Firefox, Edge).
- Satış demosu sunum senaryosu QA checklist yürütülmesi.
- `VAL-13` (Source claim & no invented facts) ve `VAL-04` (Scope boundary) son denetimi.

### Out of Scope
- Yeni özellik veya kapsam eklenmesi.

## 5. Expected Result / Target Structure
- Satış görüşmesinde sunulmaya hazır, %100 kusursuz çalışan, yüksek kaliteli kurumsal frontend demo paketi.

## 6. Implementation Checklist

- [ ] **Task 1 (Unified Page Flow & Navigation)**: Yumuşak kaydırma (smooth scroll) ve bölüm bağlantılarının doğrulanması. (Scope Ref: `SCP-001`, `SCP-002`)
- [ ] **Task 2 (Responsive Sweep & Breakpoints)**: 1440px, 768px ve 375px ekran genişliklerinde sıfır kayma/taşma doğrulaması. (Scope Ref: `SCP-001`)
- [ ] **Task 3 (Source Claim & Anti-Enrichment Audit)**: Sitedeki tüm metinlerin `FCL-001` - `FCL-007` sınırında kaldığının ve uydurma iddia bulunmadığının denetlenmesi. (Scope Ref: `SCP-007`)
- [ ] **Task 4 (Sales Demo Readiness Checklist)**: Müşteri sunumu öncesi son görsel ve işlevsel QA onayının verilmesi. (Scope Ref: `SCP-001`)

## 7. State / Role / Responsive Coverage
- **State**: Bütünleşik uygulama durumu.
- **Responsive**: Tüm çözünürlük kırılımlarında (breakpoints) kusursuz görünüm.

## 8. Automated Verification
- Zero Overflow Check: Sayfa genişliği mobilde taşma yapmamalı (`scrollWidth <= clientWidth`).
- Zero Broken Links Check: Tüm dahili bağlantılar ve eylem butonları geçerli hedeflere sahip olmalı.

## 9. Manual QA / Debug Verification
- Satış görüşmesi senaryosu: Ana sayfadan girilip Disan yetkili servisliği okunmalı, hizmet kartları incelenmeli ve iletişim CTA butonuna basılarak demo akışı tamamlanmalıdır.

## 10. Acceptance / Exit Criteria
- [ ] Responsive düzen tüm ekran kırılımlarında kusursuzdur.
- [ ] Satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını veren görsel kaliteye ulaşılmıştır.
- [ ] Hiçbir doğrulanmamış bilgi veya kırık bağlantı kalmamıştır.

## 11. Handoff / Stop Rule
`WAVE_04` başarıyla tamamlandığında run kapanış ve yayınlama safhasına geçilir.

---
## Wave Result
*Status*: Pending Execution
