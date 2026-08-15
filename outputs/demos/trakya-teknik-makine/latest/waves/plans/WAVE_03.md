# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Direct Contact & Corporate Communication Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçileri firmayla doğrudan iletişime geçirmeye yönlendiren Telefon ve E-posta direct contact CTA yüzeylerinin yapımı.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_03`
- **Name**: Direct Contact & Corporate Communication Surface
- **Committed Capabilities**:
  - `Phone direct-contact CTA action button & bar` (`SCP-005`)
  - `Email direct-contact CTA action button & bar` (`SCP-005`)
- **Upstream Boundary Consumed**: `WAVE_00` data adapter & `WAVE_02` services presentation.
- **Downstream Handoff**: Functional direct contact CTA section with `tel:` and `mailto:` action handlers ready for final integration QA.

## 2. Parent Capability Coverage

| Plan Task / Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| `Task 03.1: Direct Contact Section Container` | `Phone direct-contact CTA action button & bar` | `implementation-of` | `PASS` |
| `Task 03.2: Direct Contact CTA Action Cards & Triggers` | `Phone direct-contact CTA action button & bar`, `Email direct-contact CTA action button & bar` | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

Doğrudan iletişim kanalları satış demosu ziyaretçisini firmaya bağlayan ana dönüşüm (conversion) adımıdır. `WAVE_01` hero ve `WAVE_02` hizmetler modülünün ardından kullanıcının firmaya ulaşabileceği eylem kartlarının inşası gereklidir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_00` (Foundation Shell & Data Adapter).
- `WAVE_02` (Core Services Presentation Surface).

## 6. Scope

### In Scope
- İletişim Bölüm Kapsayıcısı (`src/components/ContactSection.js`).
- Direct Contact Telefon ve E-posta CTA Kartları (`src/components/ContactCtaCards.js`).
- Stil dosyası (`src/styles/contact.css`).
- Telefon (`tel:`) ve E-posta (`mailto:`) doğrudan etkileşim tetikleyicileri.
- `dataService.getContactMethods()` entegrasyonu.

### Out of Scope
- WhatsApp entegrasyonu (Out of scope).
- Canlı harita / Google Maps (Out of scope).
- Mesaj gönderme formu backend'i veya sunucu entegrasyonu (Out of scope).
- Source dosyada yer almayan firma adresi, çalışma saatleri veya uydurma telefon numaraları.

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   ├── ContactSection.js
│   └── ContactCtaCards.js
└── styles/
    └── contact.css
```

## 8. Implementation Checklist

- [ ] **Task 03.1 — Build Direct Contact Section Container**:
  - **Location / Responsibility**: `src/components/ContactSection.js` ve `src/styles/contact.css`. İletişim bölümünün görsel alanının ve başlığının (`İletişime Geçin`) render edilmesi.
  - **Parent Capability Relation**: `implementation-of` (`Phone direct-contact CTA action button & bar`).
  - **Inputs / Contracts**: `DESIGN_RULES.md#Section 3, 4`. Koyu endüstriyel vurgu alanı (`#1E293B` zemin, Amber `#F97316` CTA vurgusu).
  - **Implementation Behavior**: Bölüm başlığını render eder ve direct contact kartlarının döküldüğü 2-kolonlu grid kapsayıcısını sunar.
  - **States / Responsive**: Desktop 2-column flex; Mobile (320px) 1-column dikey döküm.
  - **Preserve / Must Not**: Canlı harita, WhatsApp veya mesaj formu eklenmeyecektir.
  - **FCL / Source Boundary**: FCL-007 (Telefon ve e-posta direct contact CTA).
  - **Verification**: İletişim alanının sayfa altında temiz biçimde konumlanması.
  - **Done Result**: İletişim bölüm kapsayıcısı.

- [ ] **Task 03.2 — Build Direct Contact CTA Action Cards & Triggers**:
  - **Location / Responsibility**: `src/components/ContactCtaCards.js` ve `src/styles/contact.css`. Telefon ve E-posta direct contact eylem kartlarının inşası.
  - **Parent Capability Relation**: `implementation-of` (`Phone direct-contact CTA action button & bar`, `Email direct-contact CTA action button & bar`).
  - **Inputs / Contracts**: `dataService.getContactMethods()`, FCL-007.
  - **Implementation Behavior**: `dataService.getContactMethods()` üzerinden CTA verilerini okur. Telefon kartı için `tel:` protokolünü, e-posta kartı için `mailto:` protokolünü doğrudan tetikleyen Amber CTA butonları sunar. İletişim numarası/adresi için schema placeholder değerlerini korur.
  - **States / Responsive**: Normal state, hover state (canlı amber ışıma), active/click state. Touch-friendly minimum `44px` buton yüksekliği.
  - **Preserve / Must Not**: Gerçek gibi gösterilen uydurma telefon numaraları veya adresler eklenmeyecektir. WhatsApp veya mesaj formu backend'i eklenmeyecektir.
  - **FCL / Source Boundary**: FCL-007.
  - **Verification**: Butonlara tıklandığında `tel:` ve `mailto:` bağlantılarının tetiklenmesi.
  - **Done Result**: Direct contact CTA kart bileşenleri.

## 9. State / Role / Responsive Coverage

- **Normal State**: `ContactSection` ve `ContactCtaCards` render edilir; `tel:` ve `mailto:` linkleri aktif duruma gelir.
- **Loading State**: Data beklenirken skeleton CTA kartları görünür.
- **Responsive Coverage**: Desktop 2-column layout -> Mobile 1-column dikey döküm.

## 10. Automated Verification

- `ContactCtaCards` renders exactly 2 CTA elements (`tel:` link and `mailto:` link).
- Click handlers preserve `tel:` and `mailto:` protocols.
- No WhatsApp or map elements exist in DOM.

## 11. Manual QA / Debug Verification

- Mobil cihaz simülatöründe (320px) telefon CTA butonuna dokunulduğunda arama başlatma dialer'ının tetiklendiğini kontrol et.
- E-posta CTA butonuna tıklandığında varsayılan e-posta istemcisinin `mailto:` ile açıldığını doğrula.
- İletişim bölümünde harita veya mesaj formu uydurulmadığını denetle.

## 12. Acceptance / Exit Criteria

- [ ] Telefon ve e-posta direct contact CTA yüzeyleri eksiksiz inşa edilmiştir.
- [ ] `tel:` ve `mailto:` protokol tetikleyicileri doğru çalışmaktadır.
- [ ] Tasarım `DESIGN_RULES.md` renk ve CTA hiyerarşisine uygundur.
- [ ] Kapsam dışı hiçbir etkileşim bileşeni (harita, WhatsApp, form backend'i) eklenmemiştir.
- [ ] Satış demosu (`Prototype`) olgunluk standartlarında iletişim yüzeyi tamamlanmıştır.

## 13. Handoff / Stop Rule

`WAVE_03` tamamlandığında iletişim CTA modülü `WAVE_04` (Final Entegrasyon & Responsive QA) aşamasına devredilir.

---
## Wave Result

*Pending Execution — Direct contact CTA surface ready for execution.*
