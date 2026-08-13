# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Contact & Action Surface

- **Status**: Pending Execution
- **Goal**: İletişim bilgilerini, telefon (`tel:`) ve e-posta (`mailto:`) CTA'larını ve hızlı iletişim/bölgesel servis etkileşim bileşenlerini kurmak.

## 1. Why This Wave / Dependency Rationale

Satış demosunda en önemli sonuç aksiyonu müşterinin firmayla iletişim kurmasıdır. Telefon ve e-posta kanalları doğrudan erişilebilir olmalıdır.

## 2. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies

- `WAVE_02` (Services presentation surface)

## 4. Scope

### In Scope
- Contact Section (Telefon numarası, e-posta adresi, Trakya bölgesi servis kapsama alanı tanımı).
- Birincil İletişim CTA'ları: Telefon arama butonu (`tel:`), E-posta gönderme butonu (`mailto:`).
- Hızlı İletişim / Teklif Talep Simülasyon Formu (UI etkileşimi, sahte backend olmadan local validation).
- Kurumsal Footer (Telif hakkı, hızlı navigasyon linkleri, sosyal/servis ikonları).

### Out of Scope
- Gerçek form gönderme backend'i veya e-posta sunucusu entegrasyonu.

## 5. Expected Result / Target Structure

- `src/components/ContactSection.js` / `.css`
- `src/components/Footer.js` / `.css`

## 6. Implementation Checklist

- [ ] TASK-030: `ContactSection` kapsayıcısını ve iletişim detay alanını kur.
- [ ] TASK-031: `tel:` ve `mailto:` bağlantılı arama ve e-posta butonlarını ekle.
- [ ] TASK-032: Hızlı iletişim/teklif isteme form bileşenini (Ad, Telefon, Mesaj) UI etkileşimiyle oluştur.
- [ ] TASK-033: `Footer` bileşenini ekle (firma unvanı, yetkili servislik uyarısı ve hızlı bağlantılar).

## 7. State / Role / Responsive Coverage

- Mobilde ekranın alt kısmında sabit hızlı arama barı ("sticky mobile call button").

## 8. Automated Verification

- Link href formatı (`tel:`, `mailto:`) doğrulama.

## 9. Manual QA / Debug Verification

- Form doldurma ve buton tıklama etkileşiminin kullanıcıya temiz geribildirim verdiğini doğrulama.

## 10. Acceptance / Exit Criteria

- Telefon ve e-posta kanallarına tek tıkla ulaşılabilmeli.
- İletişim ve Footer alanları tamamlanmış olmalı.

## 11. Handoff / Stop Rule

- WAVE_03 tamamlandığında `WAVE_04` final QA dalgasına geçilir.

---

## Wave Result

- Status: Pending Execution (Henüz çalıştırılmadı).
