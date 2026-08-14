# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Direct Contact & Communication Access

- **Status**: Pending Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçilerin doğrudan firma ile iletişime geçmesini sağlayan telefon (`tel:`) ve e-posta (`mailto:`) CTA alanlarını, çalışma saatlerini, bölge servis kapsamı bilgilerini barındıran iletişim yüzeyini geliştirmek.

## 1. Parent Wave Map Entry

- **Goal**: Doğrudan iletişim alanını telefon (`tel:`) ve e-posta (`mailto:`) CTA'ları ile sunmak.
- **Committed Capabilities**:
  - Dedicated Contact Surface Presentation (Support: SCP-001, SCP-005)
  - Primary Phone CTA (`tel:`) Direct Touchpoint Card (Support: SCP-005)
  - Primary Email CTA (`mailto:`) Direct Touchpoint Card (Support: SCP-005)
  - Regional Service Coverage Info Presentation (Support: SCP-001, SCP-007)

## 2. Parent Capability Coverage

| Plan Capability Atom | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Dedicated Contact Section Layout Container | Dedicated Contact Surface Presentation | implementation-of | PASS |
| Tıklanabilir Telefon Arama Butonu (`tel:`) | Primary Phone CTA (`tel:`) Direct Touchpoint Card | implementation-of | PASS |
| Tıklanabilir E-posta Gönderme Butonu (`mailto:`) | Primary Email CTA (`mailto:`) Direct Touchpoint Card | implementation-of | PASS |
| Trakya Bölgesi Servis Kapsamı Bilgi Metni | Regional Service Coverage Info Presentation | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Potansiyel müşterinin satış veya servis talebi için doğrudan telefon ve e-posta kanallarıyla firmaya ulaşmasını sağlayan dönüşüm (conversion) katmanıdır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- WAVE_00, WAVE_01, WAVE_02, WAVE_03

## 6. Scope

### In Scope
- Doğrudan iletişim kartı layout'u.
- Tıklanabilir arama (`tel:`) ve doğrudan e-posta gönderme (`mailto:`) touchpoint bağlantıları.
- Trakya bölgesi servis kapsamı bilgilendirme metni (FCL-006).

### Out of Scope
- İletişim formu (form submit / backend ihtiyacı), canlı harita widget'ı veya WhatsApp ikonu.

## 7. Expected Result / Target Structure

```text
/
├── index.html (Contact section & Footer markup added)
├── styles/main.css (Contact & Footer styling added)
└── components/
    ├── ContactSection.js
    └── Footer.js
```

## 8. Implementation Checklist

- [ ] ContactSection bileşeni oluşturulacak. (Parent Atom: Dedicated Contact Surface Presentation)
- [ ] Tıklanabilir telefon arama kartı (`tel:`) yerleştirilecek. (Parent Atom: Primary Phone CTA Direct Touchpoint Card)
- [ ] Tıklanabilir e-posta gönderme kartı (`mailto:`) yerleştirilecek. (Parent Atom: Primary Email CTA Direct Touchpoint Card)
- [ ] Trakya bölgesi servis kapsamı metni eklenecek. (FCL-006; Parent Atom: Regional Service Coverage Info Presentation)
- [ ] Footer alt bilgi bileşeni eklenecek. (Parent Atom: Dedicated Contact Surface Presentation)

## 9. State / Role / Responsive Coverage

- Mobilde telefon ve e-posta butonları tam genişlikte (`width: 100%`) ve kolay dokunulabilir boyutta tasarlanacak.
- Form veya harita eklenmeksizin sade, hızlı ve doğrudan erişim sunulacak.

## 10. Automated Verification

- `tel:` ve `mailto:` bağlantılarının doğru formatlandığı ve kırık olmadığı doğrulanacak.

## 11. Manual QA / Debug Verification

- Mobil cihaz simülasyonunda telefon ve e-posta butonlarının cihazın yerel arama / e-posta istemcisini tetiklediği doğrulanacak.

## 12. Acceptance / Exit Criteria

- [ ] Doğrudan iletişim alanları telefon ve e-posta CTA'ları ile eksiksiz tamamlanmış.
- [ ] Onaylanmamış form/harita/WhatsApp modülleri eklenmemiş.

## 13. Handoff / Stop Rule

WAVE_04 tamamlandığında WAVE_05 (Final Cross-Cutting QA & Presentation Readiness) başlayabilir.

---

## Wave Result

- **Status**: Pending Execution
- **Result**: Not executed yet (planning phase complete).
