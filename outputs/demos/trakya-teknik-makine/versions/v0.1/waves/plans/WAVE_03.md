# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Contact & Conversion

- **Status**: Pending Execution
- **Goal**: Doğrulanmış firma iletişim bilgilerini, dikey telefon ve e-posta CTA butonlarını, harita/konum kart görünümünü ve Footer alanını geliştirmek.

## 1. Why This Wave / Dependency Rationale
Ziyaretçinin firmayı inceledikten sonra anında iletişime geçebilmesini sağlamak kurumsal web sitesinin temel dönüşüm hedefidir.

## 2. Canonical Sources to Read
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)

## 3. Dependencies
- `WAVE_02` (Services Presentation Surface)

## 4. Scope

### Scope References
- `SCP-001`: Responsive Frontend Demo
- `SCP-005`: Telefon ve E-posta İletişim CTA Bağlantıları
- `SCP-007`: Gerçek Firma Bilgilerinin Korunması (`trakyateknikmakine.com`)

### In Scope
- İletişim Bilgileri Paneli (`companyService.getContactInfo()`).
- Telefon (`tel:`) ve E-posta (`mailto:`) dikey CTA alanları ve hızlı arama butonları.
- Konum / Adres bilgi kartı görünümü.
- Kurumsal Footer (telif hakkı, navigasyon özeti, yetkili servislik uyarısı).

### Out of Scope
- Backend e-posta gönderim servisi veya sunucu tarafı form işleyici (`SCP-009`).
- Canlı harita entegrasyonu (Future Scope `SCP-014`).

## 5. Expected Result / Target Structure
- `Contact` Section (İletişim paneli, hızlı arama kartları).
- Mobil cihazlar için dikey sabit veya kolay erişilebilir arama barı.
- `Footer` bileşeni.

## 6. Implementation Checklist

- [ ] **Task 1 (Contact Section Layout)**: İletişim bölümü ve kart düzeninin oluşturulması. (Scope Ref: `SCP-005`)
- [ ] **Task 2 (Telephony & Mail Action Buttons)**: `tel:` ve `mailto:` eylem butonlarının cihaz tetikleyicileri ile tanımlanması. (Scope Ref: `SCP-005`)
- [ ] **Task 3 (Address & Map Mock Card)**: Doğrulanmış adres bilgisinin harita kart görünümü ile sunumu. (Scope Ref: `SCP-007`)
- [ ] **Task 4 (Footer Component)**: Telif hakkı, navigasyon bağlantıları ve Disan yetkili servislik rozetli Footer'ın yazılması. (Scope Ref: `SCP-001`)

## 7. State / Role / Responsive Coverage
- **State**: Tıklama ve yönlendirme durumları.
- **Responsive**: Mobil cihazlarda geniş tıklama alanlı (`>44px`) dikey butonlar.

## 8. Automated Verification
- Link Checker: Telefon butonları `tel:`, e-posta butonları `mailto:` protokolüne sahip olmalıdır.

## 9. Manual QA / Debug Verification
- Mobilde telefon butonuna basıldığında cihazın arama ekranı açılmalıdır.

## 10. Acceptance / Exit Criteria
- [ ] İletişim bilgileri eksiksiz ve doğrulanmış durumdadır.
- [ ] Telefon ve e-posta CTA'ları tüm ekran boyutlarında kolay erişilebilirdir.

## 11. Handoff / Stop Rule
`WAVE_03` tamamlandıktan sonra `WAVE_04` (Final Integration, Responsive & Presentation QA) başlatılabilir.

---
## Wave Result
*Status*: Pending Execution
