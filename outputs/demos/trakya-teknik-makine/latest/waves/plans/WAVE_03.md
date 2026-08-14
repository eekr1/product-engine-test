# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Contact & Conversion Touchpoints

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Müşterinin firmaya hızla ulaşabilmesini sağlayacak iletişim bilgilerini ve aksiyon noktalarını kurmak.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_03
- **Name**: Contact & Conversion Touchpoints
- **Goal**: İletişim detayları, hızlı telefon/e-posta CTA'ları ve lokasyon bilgisi.
- **Primary Deliverables**: İletişim Bölümü, Telefon/E-posta CTA'ları, İletişim Kartı.
- **Dependencies**: WAVE_02.

## 2. Why This Wave / Dependency Rationale

Hizmet detayları kurulduktan sonra potansiyel müşteriyi iletişim aksiyonuna yönlendirecek temas noktalarının (conversion touchpoints) tamamlanması gerekir. `demo-frontend` kuralı gereğince İletişim alanı bağımsız ve net bir dalgadır.

## 3. Canonical Sources to Read

- `ai/PRODUCT_RULES.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 4. Dependencies

WAVE_02 (Corporate Trust & 3 Primary Services) tamamlanmış olmalıdır.

## 5. Scope

### In Scope

- İletişim bölümü ve iletişim detay kartı (`Contact.js`).
- Telefon numarası ve `tel:` bağlantısı.
- E-posta adresi ve `mailto:` bağlantısı.
- Adres ve bölge bilgisi (Trakya Bölgesi / Çorlu / Tekirdağ servis alanı).
- Hızlı iletişim bandı / CTA çubuğu.
- Footer (Alt Bilgi) alanı ve telif hakkı metni.

### Out of Scope

- Backend veritabanına kayıt yapan canlı iletişim formu API'si.
- Harita API anahtarına bağımlı canlı Google Maps SDK entegrasyonu (statik/mock harita kartı yeterlidir).

## 6. Expected Result / Target Structure

```text
src/
├── components/
│   ├── Contact.js
│   └── Footer.js
└── styles/
    ├── contact.css
    └── footer.css
```

## 7. Implementation Checklist

- [ ] `mockDataService.getContactInfo()` metodundan iletişim verilerinin çekilmesi.
- [ ] İletişim kartı HTML/CSS yapısının oluşturulması.
- [ ] Telefon, e-posta ve adres alanlarının doğru etiketlerle yerleştirilmesi.
- [ ] Mobilde ekranın altında sabitlenebilir "Hemen Ara" barı veya belirgin arama butonunun eklenmesi.
- [ ] Footer alanının ve kurumsal hızlı linklerin yerleştirilmesi.

## 8. State / Role / Responsive Coverage

- **Desktop (1024px+)**: Sol tarafta iletişim bilgileri, sağ tarafta servis alanı/lokasyon kartı.
- **Mobile (< 768px)**: Tek dikey sütun, büyük dokunma alanına sahip telefon/e-posta butonları.

## 9. Automated Verification

- DOM doğrulama: Telefon ve e-posta butonlarında `href` bağlantılarının mevcudiyeti.

## 10. Manual QA / Debug Verification

- Mobilde "Hemen Ara" butonuna tıklandığında cihazın arama ekranını açtığının simülasyonu.

## 11. Acceptance / Exit Criteria

- [ ] İletişim bilgileri mevcut sitedeki doğrulanmış verilerle tam uyumlu olmalı.
- [ ] Telefon ve e-posta aksiyonları eksiksiz çalışmalı.
- [ ] Mobilde erişilebilirlik ve dokunma kolaylığı sağlanmalı.

## 12. Handoff / Stop Rule

WAVE_03 tamamlandığında WAVE_04 (Cross-Cutting QA & Presentation Optimization) uygulamasına geçilebilir.

---

## Wave Result

Status: Pending Execution
