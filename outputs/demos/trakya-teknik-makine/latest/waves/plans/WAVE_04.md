# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Contact & Conversion CTA Surfaces

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçilerin firmaya kolayca ulaşabileceği telefon/e-posta bağlantılarını ve frontend doğrulamalı iletişim formunu sunmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_04
Name: Contact & Conversion CTA Surfaces
Goal: Ziyaretçilerin firmaya kolayca ulaşabileceği telefon/e-posta bağlantılarını ve frontend doğrulamalı iletişim formunu sunmak.
Committed Capabilities:
- Phone Direct Contact Link (`tel:`) | SCP-005 | PASS
- Email Direct Contact Link (`mailto:`) | SCP-005 | PASS
- Contact Form Surface & Validation | SCP-005 | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Tıklanabilir doğrudan telefon arama kartı / bağlantısı (`tel:`) | Phone Direct Contact Link (`tel:`) | implementation-of | PASS |
| Tıklanabilir doğrudan e-posta gönderme kartı / bağlantısı (`mailto:`) | Email Direct Contact Link (`mailto:`) | implementation-of | PASS |
| İletişim formu arayüzü, alan doğrulamaları ve mock başarı simülasyonu | Contact Form Surface & Validation | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Satış görüşmesinde demoyu inceleyen potansiyel müşterinin iletişim kanalına erişebilmesi ve müşterilerin firmaya kolay ulaşabileceğini görmesi dönüşüm (conversion) açısından kritiktir.

## 4. Canonical Sources to Read

- `ai/PRODUCT_RULES.md` (PRULE-004 & PRULE-005)
- `design/DESIGN_RULES.md`
- `ai/TECH_CONTEXT.md`

## 5. Dependencies

- `WAVE_02` (Corporate Identity) & `WAVE_03` (Services Presentation).

## 6. Scope

### In Scope

- İletişim Bölümü (`#contact`).
- Telefon İletişim Kartı (Doğrudan `tel:` araması).
- E-posta İletişim Kartı (Doğrudan `mailto:` bağlantısı).
- İnteraktif İletişim Formu (Ad Soyad, E-posta / Telefon, Mesaj alanı).
- Frontend Form Validation ve Mock Başarı Bildirimi.

### Out of Scope

- Sunucu taraflı backend ve veritabanı kaydı.

## 7. Expected Result / Target Structure

- `src/components/ContactSection.js`, `src/components/ContactForm.js` ve `src/components/ContactInfo.js`.

## 8. Implementation Checklist

- [ ] `TASK-040`: İletişim bilgileri kartlarının (Telefon, E-posta, Adres) çizilmesi.
- [ ] `TASK-041`: Telefon (`tel:`) ve E-posta (`mailto:`) tıklama eylemlerinin doğrulanması.
- [ ] `TASK-042`: İletişim formunun HTML5 ve JS doğrulamalarının yazılması.
- [ ] `TASK-043`: Form gönderiminde yerel başarı bildirimi toast/alert simülasyonunun eklenmesi.

## 9. State / Role / Responsive Coverage

- Form alanlarında `:focus`, `:invalid` ve `:valid` durumları `DESIGN_RULES.md` renk değişkenleriyle belirginleştirilir.

## 10. Automated Verification

- Form zorunlu alan doğrulamalarının istemci tarafında çalıştığı kontrol edilir.

## 11. Manual QA / Debug Verification

- Telefon ve mail bağlantılarına tıklanınca varsayılan cihaz uygulamalarının tetiklendiği doğrulanmalıdır.

## 12. Acceptance / Exit Criteria

- [ ] Telefon ve e-posta butonları sorunsuz çalışıyor.
- [ ] İletişim formu boş/geçersiz girdide uyarı veriyor, geçerli girdide mock başarı mesajı gösteriyor.

## 13. Handoff / Stop Rule

- `WAVE_04` tamamlandığında nihai `WAVE_05` QA ve cila aşamasına geçilir.

---

## Wave Result

- **Result**: Pending / Not Executed
