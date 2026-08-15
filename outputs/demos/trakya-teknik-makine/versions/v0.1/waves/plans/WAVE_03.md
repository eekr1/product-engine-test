# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Direct Contact & Action Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçilerin doğrudan iletişim kurmasını sağlayan Telefon ve E-posta direct-contact CTA bölümünü inşa etmek.

## 1. Parent Wave Map Entry

- **Name**: `WAVE_03: Direct Contact & Action Surface`
- **Goal**: Telefon ve e-posta direct-contact CTA arayüz yüzeyi.
- **Why Separate**: Dönüşüm ve iletişim eylemleri hizmet sunumundan bağımsız, clean `tel:` ve `mailto:` bağlantıları taşıyan ayrı bir dönüştürücü yüzeydir.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Phone Direct Contact CTA Button (`tel:`) | phone direct-contact CTA | implementation-of | PASS |
| Email Direct Contact CTA Button (`mailto:`) | email direct-contact CTA | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_03`, `WAVE_01` ve `WAVE_02` sunum yüzeylerinin devamında ziyaretçiyi doğrudan firma ile iletişime geçmeye yönlendiren dönüştürücü eylem yüzeyidir (`PR-BUS-03`, `FCL-06`, `ASM-02`). Clean client-side `tel:` ve `mailto:` protokolleri kullanılır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_02` (Approved Services Presentation Module).

## 6. Scope

### In Scope
- İletişim bölümü HTML5/CSS3 yapısı ve `ContactSurface` bileşeni.
- Telefon arama ikonu, arama butonu ve `tel:` URI protokol eylemi.
- E-posta gönderme ikonu, e-posta linki ve `mailto:` URI protokol eylemi.
- `CompanyDataService.getContactInfo()` üzerinden dinamik iletişim verisi çekilmesi.
- `DESIGN_RULES.md` uyarınca yüksek görünürlüklü Hydraulic Gold (`hsl(38, 92%, 50%)`) eylem buton stili ve minimum 48px dokunma hedefi (touch target).

### Out of Scope
- Sunucu taraflı form submit handler veya iletişim formu backend'i.
- Canlı Google Maps iframe'i veya canlı konum haritası.
- WhatsApp sohbet widget'ı veya WhatsApp URI entegrasyonu.
- Kaynakta doğrulanmamış fiziksel adres, çalışma saatleri veya şube ağı uydurma.

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   └── ContactSurface.js
└── styles/
    └── contact.css
```

## 8. Implementation Checklist

- [ ] **Task 03.1 (Contact Section Layout & Data Binding)**:
  - **Location/Responsibility**: `src/components/ContactSurface.js`, `src/styles/contact.css`.
  - **Parent Capability Relation**: `detail-of` -> `phone/email direct-contact CTA`.
  - **Implementation Behavior**: `CompanyDataService.getContactInfo()` metodu ile iletişim verisinin alınıp `<section class="contact-section">` olarak yerleştirilmesi.
  - **Verification**: İletişim bölümü DOM'da hatasız oluşturulmalıdır.
- [ ] **Task 03.2 (Phone Direct-Contact Action Button)**:
  - **Location/Responsibility**: `src/components/ContactSurface.js`.
  - **Parent Capability Relation**: `implementation-of` -> `phone direct-contact CTA`.
  - **Implementation Behavior**: `<a href="tel:..." class="btn-primary cta-phone">` butonunun eklenmesi; telefon ikonu ve arama metni ile tıklandığında cihazın telefon arama uygulamasını tetiklemesi.
  - **Verification**: Buton `tel:` protokolünü tetiklemelidir.
- [ ] **Task 03.3 (Email Direct-Contact Action Button)**:
  - **Location/Responsibility**: `src/components/ContactSurface.js`.
  - **Parent Capability Relation**: `implementation-of` -> `email direct-contact CTA`.
  - **Implementation Behavior**: `<a href="mailto:..." class="btn-secondary cta-email">` butonunun eklenmesi; e-posta ikonu ve e-posta adresi metni ile tıklandığında varsayılan e-posta istemcisini açması.
  - **Verification**: Link `mailto:` protokolünü tetiklemelidir.
- [ ] **Task 03.4 (Touch Target & Mobile Accessibility Styling)**:
  - **Location/Responsibility**: `src/styles/contact.css`.
  - **Parent Capability Relation**: `detail-of` -> `phone/email direct-contact CTA`.
  - **Implementation Behavior**: Mobilde dokunma kolaylığı için minimum 48px yükseklik (`min-height: 48px`), amber hover parlama gölgesi ve klavye focus indicator stili.
  - **Verification**: Mobil cihazlarda butonlar rahatça dokunulabilir olmalıdır.

## 9. State / Role / Responsive Coverage

- **Normal State**: Telefon ve E-posta CTA butonları yan yana veya dikey olarak net bir biçimde görünür.
- **Responsive Behavior**: Mobilde butonlar tam genişlik (`width: 100%`) alarak kolay dokunulabilir hale gelir.

## 10. Automated Verification

- Link Protocol Check: Direct-contact links contain valid `tel:` and `mailto:` href attributes without backend dependencies.

## 11. Manual QA / Debug Verification

- Telefon ve E-posta butonları tıklandığında işletim sisteminin ilgili arama/posta uygulaması tetikleniyor mu?
- Form backend'i veya harita gibi kapsam dışı elemanlar sızmış mı? (Olmamalıdır).

## 12. Acceptance / Exit Criteria

- [ ] Phone & Email CTA butonları eyleme hazır.
- [ ] Clean `tel:` ve `mailto:` bağlantıları doğrulandı.
- [ ] Kapsam dışı harita/form/WhatsApp bulunmuyor.

## 13. Handoff / Stop Rule

- `WAVE_03` tamamlandığında, `WAVE_04` (Whole-Project Responsive, Performance & Presentation QA) kapanış dalgasına geçilmeye hazır iletişim yüzeyi teslim edilir.

---

## Wave Result

- **Execution Status**: Pending Execution
- **Output Artifacts**: `src/components/ContactSurface.js`, `src/styles/contact.css`.
