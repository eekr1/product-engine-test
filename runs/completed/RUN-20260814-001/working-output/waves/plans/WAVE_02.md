# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Services Showcase

- **Status**: Ready for Execution
- **Goal**: Firmanın üç ana hizmetinin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel kartlar ve teknik spec sheet estetiği ile sergilenmesi.

## 1. Why This Wave / Dependency Rationale
Hizmetler firmanın birincil değer ürettiği alandır. `WAVE_01` (Hero & Trust) sonrasında ziyaretçinin hizmet derinliğini incelemesini sağlar.

## 2. Canonical Sources to Read
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [SOURCE_REGISTER.md](../../../SOURCE_REGISTER.md)

## 3. Dependencies
- `WAVE_01` (Primary Entry & Authorized Service Trust)

## 4. Scope
### Scope References
- `SCP-003` (Spare Parts Supply showcase)
- `SCP-004` (On-Site Technical Support showcase)
- `SCP-005` (Machine Maintenance & Repair showcase)

### In Scope
- Hizmetler bölümü başlık ve açıklama alanı.
- 3 adet modüler Hizmet Kartı (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım).
- İkonografi, teknik özellik listeleri ve detay mikro-etkileşimleri.

### Out of Scope
- İletişim formu / harita (`WAVE_03`).
- E-ticaret / sepete ekle fonksiyonu (Scope Dışı).

## 5. Expected Result / Target Structure
`src/components/ServicesSection.js`, `src/components/ServiceCard.js` modülleri ve CSS kart stilleri.

## 6. Implementation Checklist
- [ ] Hizmetler bölümü kapsayıcısını ve hiyerarşik başlığını oluştur. `Scope Ref: SCP-003`
- [ ] Yedek Parça Temini kartını geliştir; hidrolik parça ve ekipman vurgusunu ekle (`FCL-003`). `Scope Ref: SCP-003`
- [ ] Yerinde Teknik Destek kartını geliştir; Trakya bölgesi hızlı saha servisi vurgusunu ekle (`FCL-004`). `Scope Ref: SCP-004`
- [ ] Makine Bakım ve Onarım kartını geliştir; periyodik bakım ve arıza onarım detaylarını ekle (`FCL-005`). `Scope Ref: SCP-005`
- [ ] Kartları `contentService.getServices()` asenkron çağrısına bağla ve hover mikroyükselme efektini uygula. `Scope Ref: SCP-003`

## 7. State / Role / Responsive Coverage
- Kartların mobil cihazlarda dikey istiflenmesi (stacked layout), masaüstünde 3 sütunlu ızgara.
- Card hover & focus durumları.

## 8. Automated Verification
- 3 adet servis kartının DOM üzerinde başarıyla render edildiğinin kontrolü.

## 9. Manual QA / Debug Verification
- Her üç kartın metinlerinin `SOURCE_REGISTER` doğrulanmış verileriyle tam uyuştuğunun ve görsel hiyerarşinin korunduğunun kontrolü.

## 10. Acceptance / Exit Criteria
- [ ] 3 temel hizmet açık ve profesyonel biçimde sergileniyor.
- [ ] Kartlar teknik spec sheet hissi veriyor; sıradan jenerik şablon kutusu değil.

## 11. Handoff / Stop Rule
`WAVE_02` tamamlandığında `WAVE_03` (Contact Channels & Quick CTAs) geliştirilmeye başlanacaktır.

---
## Wave Result
- **Status**: Ready for Execution
- **Completion Evidence**: Pending execution
