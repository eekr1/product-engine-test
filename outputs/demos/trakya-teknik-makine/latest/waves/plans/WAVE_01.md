# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Primary Entry & Corporate Trust

- **Status**: Pending Execution
- **Goal**: Header, mobil/masaüstü navigasyon, Hero bölümü, Disan Hidrolik yetkili servislik rozeti ve Kurumsal Hakkında güven panelini geliştirmek.

## 1. Why This Wave / Dependency Rationale
Ziyaretçi demoya girdiğinde ilk 5 saniyede firmanın kim olduğunu, yetkinliğini ve Disan Hidrolik yetkili servisliğini anlamalıdır. Bu yüzey projenin birincil giriş ve güven alma alanıdır.

## 2. Canonical Sources to Read
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies
- `WAVE_00` (Foundation & Design Tokens & Service Layer)

## 4. Scope

### Scope References
- `SCP-001`: Responsive Frontend Demo
- `SCP-002`: Ana Sayfa ve Kurumsal/Hizmet/İletişim Bölümleri
- `SCP-003`: Disan Hidrolik Yetkili Servislik Sunumu

### In Scope
- Header ve navigasyon barı (logo, menü bağlantıları, hızlı telefon CTA).
- Hero bölümü (Disan Hidrolik Trakya Bölge Yetkili Servisi rozeti, ana değer başlığı ve doğrudan iletişim CTA butonları).
- Kurumsal Hakkında ve Güven Alanı (firmanın teknik uzmanlığı, vizyonu ve teknik servislik vurgusu).
- Responsive mobil hamburger menü ve etkileşimleri.

### Out of Scope
- Hizmet kartları detay alanı (`WAVE_02` kapsamı).
- İletişim formu ve adres harita kartları (`WAVE_03` kapsamı).

## 5. Expected Result / Target Structure
- `Header` bileşeni (sabitlemeli / sticky nav).
- `Hero` section (`#0F172A` zemin, `Space Grotesk` H1 başlık, `#F59E0B` aksan CTA).
- `Corporate Trust` section (Yetkili servislik rozeti, teknik açıklama panelleri).

## 6. Implementation Checklist

- [ ] **Task 1 (Header Component)**: Sticky Header, logo alanı ve nav menüsünün oluşturulması. (Scope Ref: `SCP-002`)
- [ ] **Task 2 (Hero Surface & Authorized Badge)**: Hero alanı, Disan Hidrolik Yetkili Servisliği rozeti (`FCL-002`) ve aksan CTA butonlarının eklenmesi. (Scope Ref: `SCP-003`)
- [ ] **Task 3 (Corporate Trust Section)**: Trakya Teknik Makine kurumsal tanıtım ve güven panelinin `companyService.getCompanyInfo()` verisiyle oluşturulması. (Scope Ref: `SCP-002`, FCL: `FCL-001`)
- [ ] **Task 4 (Mobile Navigation)**: Responsive mobil hamburger menü açılır/kapanır etkileşiminin eklenmesi. (Scope Ref: `SCP-001`)

## 7. State / Role / Responsive Coverage
- **State**: Mobil menü açık/kapalı durumu.
- **Responsive**: Masaüstünde yatay menü, mobilde dikey akordeon/hamburger menü.

## 8. Automated Verification
- CSS Kontrolü: Navigasyon ve Hero elemanları taşma yapmamalı (`overflow-x: hidden`).

## 9. Manual QA / Debug Verification
- Masaüstü ve mobil ekranlarda Hero başlığı ve Disan Hidrolik rozeti net şekilde okunabilmeli.

## 10. Acceptance / Exit Criteria
- [ ] Hero bölümünde Disan Hidrolik yetkili servisliği açıkça vurgulanmaktadır.
- [ ] Navigasyon barı mobil ve masaüstünde sorunsuz çalışmaktadır.

## 11. Handoff / Stop Rule
`WAVE_01` tamamlandıktan sonra `WAVE_02` (Services Presentation) başlatılabilir.

---
## Wave Result
*Status*: Pending Execution
