# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Final Integration & Presentation QA

- **Status**: Ready for Execution
- **Goal**: Tüm frontend projesinin çoklu cihaz genişliklerinde (320px - 2560px) responsive kontrolü, WCAG AA erişilebilirlik taraması ve satış sunumu kalite doğrulaması.

## 1. Why This Wave / Dependency Rationale
Tüm parçaların birleştiği, bütünsel responsive kırılmaların ve görsel kalitenin müşteri sunumuna %100 hazır hale getirildiği final QA dalgasıdır. Tüm önceki dalgalara (`WAVE_00` - `WAVE_03`) dayanır.

## 2. Canonical Sources to Read
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [INPUT_SNAPSHOT.md](../../../INPUT_SNAPSHOT.md)

## 3. Dependencies
- `WAVE_03` (Contact Channels & Quick CTAs)

## 4. Scope
### Scope References
- `SCP-001` (Responsive modern frontend corporate demo)
- `SCP-009` (Proactive sales presentation prototype objective)

### In Scope
- Cross-device responsive layout sweep (320px, 480px, 768px, 1024px, 1440px, 2560px).
- Typography, color contrast ve spacing doğrulaması.
- Navigation smooth scroll ve bölüm geçiş kontrolleri.
- Lighthouse / Accessibility ve Performans kontrolü.
- Satış sunumu "Mevcut Siteden Yenilenmiş Demoya" karşılaştırma QA doğrulaması.

### Out of Scope
- Yeni özellik veya scope eklenmesi.

## 5. Expected Result / Target Structure
Yayınlanabilir, sıfır hatasız, yüksek kaliteli frontend demo uygulaması kopyası ve QA kontrol raporu.

## 6. Implementation Checklist
- [ ] Mobil (320px - 480px) ekranlarda sıfır yatay kayma (horizontal scrollbar) olduğunu doğrula. `Scope Ref: SCP-001`
- [ ] Tablet (768px - 1024px) ekranlarda kart ızgaralarının ve navigasyonun düzgün kırıldığını doğrula. `Scope Ref: SCP-001`
- [ ] Masaüstü (1440px+) ve 4K ekranlarda maksimum içerik genişliğinin (`max-width: 1280px`) korunduğunu doğrula. `Scope Ref: SCP-001`
- [ ] Renk kontrastlarının WCAG AA standardını karşıladığını doğrula (`DESIGN_RULES.md`). `Scope Ref: SCP-009`
- [ ] Satış görüşmesinde sunulacak müşteri mesajlarının ve yetkili servis rozetinin görsel gücünü teyit et. `Scope Ref: SCP-009`

## 7. State / Role / Responsive Coverage
- Tüm breakpoint'lerde 100% responsive kapsama.

## 8. Automated Verification
- Derleme komutunun (`npx vite build`) sıfır uyarı ve sıfır hata ile tamamlanması.

## 9. Manual QA / Debug Verification
- Tarayıcı Geliştirici Araçları (DevTools) responsive modunda 320px - 2560px arası tam test.

## 10. Acceptance / Exit Criteria
- [ ] Yatay kayma, kırılan metin veya çakışan kart yok.
- [ ] Performans ve erişilebilirlik yüksek seviyede.
- [ ] Müşteri sunumuna %100 hazır.

## 11. Handoff / Stop Rule
`WAVE_04` tamamlandığında Product Engine v0.2.0 koda geçiş aşaması eksiksiz teslim edilmiş sayılır.

---
## Wave Result
- **Status**: Ready for Execution
- **Completion Evidence**: Pending execution
