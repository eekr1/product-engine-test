# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Contact Channels & Quick CTAs

- **Status**: Ready for Execution
- **Goal**: Telefon, e-posta, çalışma saatleri, adres ve hızlı erişim iletişim aksiyonlarının geliştirilmesi.

## 1. Why This Wave / Dependency Rationale
Ziyaretçinin firmaya ulaşmasını sağlayan dönüşüm (conversion) ve iletişim katmanıdır. `WAVE_02` (Services) sonrasında yer alır.

## 2. Canonical Sources to Read
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [README.md](../../README.md)

## 3. Dependencies
- `WAVE_02` (Services Showcase)

## 4. Scope
### Scope References
- `SCP-006` (Phone and email quick contact CTAs)
- `SCP-010` (Existing company, service and contact info)

### In Scope
- İletişim bölümü ve bilgi kartları (Telefon, E-posta, Adres/Bölge, Çalışma Saatleri).
- Telefon arama (`tel:`) ve e-posta gönderme (`mailto:`) butonları.
- İletişim formu simülasyonu (İstemci tarafı mock feedback bildirimi).
- Mobil cihazlar için sabit alt hızlı arama barı (Quick Action Bar).

### Out of Scope
- Sunucu taraflı e-posta gönderimi / API entegrasyonu (`SCP-012`).
- Canlı harita entegrasyonu (Scope Dışı).

## 5. Expected Result / Target Structure
`src/components/ContactSection.js`, `src/components/QuickActionBar.js` modülleri.

## 6. Implementation Checklist
- [ ] İletişim bölümü kapsayıcısını ve doğrulanmış firma iletişim bilgilerini ekle (`FCL-001`). `Scope Ref: SCP-010`
- [ ] Telefon CTA butonunu `tel:` protokolüne bağla. `Scope Ref: SCP-006`
- [ ] E-posta CTA butonunu `mailto:` protokolüne bağla. `Scope Ref: SCP-006`
- [ ] İletişim formu arayüzünü oluştur ve gönderim anında mock toast/feedback gösterimini bağla. `Scope Ref: SCP-006`
- [ ] Mobil ekranlar için alt sabit hızlı arama barını (Sticky Action Bar) ekle. `Scope Ref: SCP-006`

## 7. State / Role / Responsive Coverage
- Mobil alt arama barının yalnız mobil genişliklerde görünür olması.
- Form gönderim mock başarı state'i.

## 8. Automated Verification
- `tel:` ve `mailto:` bağlantılarının href niteliklerinin doğrulanması.

## 9. Manual QA / Debug Verification
- Mobilde telefon butonuna basıldığında cihaz arama ekranının tetiklendiğinin kontrolü.

## 10. Acceptance / Exit Criteria
- [ ] İletişim kanalları eksiksiz ve kolay erişilebilir.
- [ ] Mobil hızlı arama barı sorunsuz çalışıyor.

## 11. Handoff / Stop Rule
`WAVE_03` tamamlandığında `WAVE_04` (Final Cross-Device Responsive Verification & Presentation QA) geliştirilmeye başlanacaktır.

---
## Wave Result
- **Status**: Ready for Execution
- **Completion Evidence**: Pending execution
