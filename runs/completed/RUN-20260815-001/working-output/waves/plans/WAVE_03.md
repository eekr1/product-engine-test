# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Direct Contact & Corporate Communication Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçilerin firmayla doğrudan iletişim kurmasını sağlayan e-posta ve telefon direct-contact CTA yüzeyinin yapılması.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_03
Name: Direct Contact & Corporate Communication Surface
Goal: Ziyaretçilerin firmayla doğrudan iletişim kurmasını sağlayan e-posta ve telefon direct-contact CTA yüzeyinin yapılması.
Why Separate: demo-frontend granularity guard gereği Contact alanı Services alanından ve final QA dalgasından kesinlikle bağımsız ayrıştırılmalıdır.
Committed Capabilities:
  - Direct-contact telefon CTA bağlantı yüzeyi | SCP-006 | IN_SCOPE | YES | Telefon CTA arayüzü | PASS | PASS | PASS
  - Direct-contact e-posta CTA bağlantı yüzeyi | SCP-006 | IN_SCOPE | YES | E-posta CTA arayüzü | PASS | PASS | PASS
  - Kurumsal footer ve telif alanı | SCP-001 | IN_SCOPE | YES | Kurumsal footer alanı | PASS | PASS | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Phone Direct Action Button (`contact.js`) | Direct-contact telefon CTA bağlantı yüzeyi | implementation-of | PASS |
| Email Direct Action Button (`contact.js`) | Direct-contact e-posta CTA bağlantı yüzeyi | implementation-of | PASS |
| Corporate Footer & Copyright Area (`footer.js`) | Kurumsal footer ve telif alanı | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`demo-frontend` paket kuralları uyarınca Contact alanı Services dalgası ile birleştirilemez ve Final QA dalgasından ayrı olmalıdır. Bu dalga ziyaretçinin satış/bilgi talebi için firmaya doğrudan ulaşabileceği CTA konsolunu üretir.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (FCL-06, FCL-07)
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (PR-BUS-03, PR-BHV-03)
- `tech/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`

## 5. Dependencies

- `WAVE_00`, `WAVE_01` tamamlanmış olmalıdır.

## 6. Scope

### In Scope
- İletişim Konsolu alanı HTML/CSS/JS bileşenleri.
- `tel:` protokollü Telefon İletişim CTA Butonu.
- `mailto:` protokollü E-posta İletişim CTA Butonu.
- Kurumsal Footer (Trakya Teknik Makine & Disan Yetkili Servisi telif ve bölgesel bağlam metni).

### Out of Scope
- Backend submit olan iletişim formu.
- Canlı harita entegrasyonu.
- WhatsApp sohbet widget'ı.
- Sahte adres, çalışma saatleri veya telefon numarası uydurmak (placeholder formatı approved kurallarda kalacaktır).

## 7. Expected Result / Target Structure

```text
src/
├── ui/
│   ├── contact.js
│   └── footer.js
└── styles/
    └── contact.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Direct Contact Console Component**
  - **Location / Responsibility**: `src/ui/contact.js`, `src/styles/contact.css`
  - **Parent Capability Relation**: implementation-of (Telefon ve E-posta direct contact yüzeyi)
  - **Dependencies**: `WAVE_00`, `WAVE_01`
  - **Behavior**: `h2` İletişim başlığı altında telefon ve e-posta direct CTA butonlarını barındıran teknik konsol yüzeyinin oluşturulması.
  - **FCL Boundary**: FCL-07 uyarınca kesinlikle form submit backend'i, harita veya WhatsApp eklenmeyecektir.
  - **Done Result**: Contact konsolunun ekranda doğru render edilmesi.

- [ ] **Task 2: Direct Protocols (`tel:` / `mailto:`) Activation & Touch Targets**
  - **Location / Responsibility**: `src/ui/contact.js`
  - **Parent Capability Relation**: implementation-of (Direct contact CTA bağlantıları)
  - **Dependencies**: Task 1
  - **Behavior**: Butonlara `href="tel:..."` ve `href="mailto:..."` bağlantılarının tanımlanması; dokunma alanlarının en az 44x44px yapılması.
  - **Done Result**: Mobil cihazlarda doğrudan arama ve e-posta uygulamasını açan bağlantılar.

- [ ] **Task 3: Corporate Footer & Regional Context Boundary**
  - **Location / Responsibility**: `src/ui/footer.js`
  - **Parent Capability Relation**: implementation-of (Kurumsal footer alanı)
  - **Dependencies**: Task 1
  - **Behavior**: Trakya Teknik Makine & Disan Hidrolik Makine Trakya Bölge Yetkili Servisi telif uyarısı ve Trakya Bölgesi bağlam metninin render edilmesi.
  - **Done Result**: Sayfa altında kurumsal kapanış alanı.

## 9. State / Role / Responsive Coverage

- **Mobile View**: Dikey hizalanmış geniş dokunmatik arama/e-posta butonları.
- **Desktop View**: Asimetrik konsol kartı düzeni.
- **Accessibility**: Yüksek kontrast oranı ve belirgin focus ring.

## 10. Automated Verification

- [ ] DOM Check: `tel:` and `mailto:` links validation.
- [ ] No forbidden tags check (`form`, `iframe` for map, `whatsapp` scripts).

## 11. Manual QA / Debug Verification

- [ ] Mobil cihazda telefon CTA butonuna basıldığında arama ekranının tetiklenmesi.
- [ ] Form veya harita eklenmediğinin kesin teyidi.

## 12. Acceptance / Exit Criteria

- [x] İletişim direct-contact CTA bağlantıları (`tel:`, `mailto:`) çalışıyor.
- [x] Harita, WhatsApp veya backend formu eklenmedi.
- [x] Footer kurumsal unvanı ve yetkili servis statüsünü doğruluyor.

## 13. Handoff / Stop Rule

- `WAVE_03` tamamlandıktan sonra uygulama `WAVE_04` (Final QA & Verification) aşamasına geçecektir.

---

## Wave Result

- **Status**: Pending Execution
