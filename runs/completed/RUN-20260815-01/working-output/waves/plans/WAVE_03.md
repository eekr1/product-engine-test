# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Direct Contact CTA & Regional Context

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Telefon (`tel:`) ve e-posta (`mailto:`) direct-contact CTA yüzeylerini, Trakya bölgesi kurumsal servis bağlamını ve footer alanını inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_03
Name: Direct Contact CTA & Regional Context
Goal: Telefon (tel:) ve e-posta (mailto:) direct-contact CTA yüzeylerini, Trakya bölgesi kurumsal servis bağlamını ve footer alanını inşa etmek.
Why Separate: Hizmetleri inceleyen ziyaretçinin doğrudan iletişime geçebileceği CTA yüzeyleri ve bölgesel bağlam ayrı bir dönüşüm adımıdır.
Committed Capabilities:
  - Telefon ve e-posta direct-contact CTA yüzeyleri | SCP-006 | Direct-contact phone & email CTAs | PASS
  - Trakya bölgesi endüstriyel/teknik servis bağlamının sunumu | SCP-009 | Regional industrial service context | PASS
In Scope: Direct Contact CTA Bloğu (tel:, mailto:), Trakya Bölgesi kurumsal teknik servis bağlamı vurgu alanı, Mobil Sticky Contact Bar, Kurumsal Footer.
Out of Scope: Form submit backend'i, WhatsApp sohbet widget'ı, canlı Google Maps iframe'i, doğrulanmamış telefon/adres uydurmak.
Primary Deliverables: ContactSection (src/ui/components/ContactSection.js), MobileStickyCTA (src/ui/components/MobileStickyCTA.js), Footer (src/ui/components/Footer.js)
Dependencies: WAVE_02.
Upstream Boundary Consumed: WAVE_02 hizmetler bölümü ve markanın kurumsal yapısı.
Downstream Handoff: WAVE_04 için tüm görsel bölümleri tamamlanmış sayfa yapısı.
Exit Boundary: Telefon ve e-posta CTA butonlarının masaüstü ve mobilde doğru protokolleri (tel:, mailto:) tetiklemesi.
```

## 2. Parent Capability Coverage

| Plan Capability | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Direct Contact CTA Block (`tel:` & `mailto:` triggers) | Telefon ve e-posta direct-contact CTA yüzeyleri (`SCP-006`) | implementation-of | PASS |
| Mobile Sticky Action Bar | Telefon ve e-posta direct-contact CTA yüzeyleri (`SCP-006`) | detail-of | PASS |
| Regional Service Context & Trust Block | Trakya bölgesi endüstriyel/teknik servis bağlamının sunumu (`SCP-009`) | implementation-of | PASS |
| Corporate Footer & Legal Copyright Notice | Trakya bölgesi endüstriyel/teknik servis bağlamının sunumu (`SCP-009`) | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Ziyaretçi `WAVE_01` ile firma kimliğini görüp `WAVE_02` ile 3 approved hizmeti inceledikten sonra doğrudan iletişime geçme ihtiyacı duyar. İletişim CTA yüzeyleri, mobil sticky aksiyon barı ve Trakya bölgesi kurumsal güven bağlamı bu aşamada inşa edilir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_02.md`

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_02` (Core Services Presentation), `WAVE_00` (`companyService.js`).

## 6. Scope

### In Scope
- Direct Contact Section Component (`src/ui/components/ContactSection.js`):
  - Hızlı arama butonu (`href="tel:..."`).
  - Hızlı e-posta gönderme butonu (`href="mailto:..."`).
  - Doğrulanmış placeholder veya approved contact format kullanımı.
- Trakya Bölgesi Kurumsal Servis Bağlamı Gösterimi (Trakya genelinde teknik altyapı ve sanayi bakım desteği vurgusu).
- Mobile Sticky CTA Bar Component (`src/ui/components/MobileStickyCTA.js`): Mobilde ekranın alt kısmında sabit duran `Ara` ve `E-posta Gönder` butonları.
- Corporate Footer Component (`src/ui/components/Footer.js`): Telif hakkı, Disan Hidrolik Yetkili Servis künyesi ve hızlı bağlantılar.

### Out of Scope
- İletişim formu sunucu tarafı backend'i veya e-posta gönderim API'si (Kapsam dışı).
- WhatsApp canlı sohbet widget'ı veya pop-up modal (Kapsam dışı).
- Canlı Google Maps / OpenStreetMap iframe haritası (Kapsam dışı).
- Kaynakta bulunmayan adres veya yetkili adı uydurmak (YASAK).

## 7. Expected Result / Target Structure

```text
src/ui/components/
├── ContactSection.js
├── MobileStickyCTA.js
└── Footer.js
```

## 8. Implementation Checklist

- [ ] **Task 3.1 — Direct Contact CTA Section Component**
  - **Location / Responsibility**: `src/ui/components/ContactSection.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-006`.
  - **Inputs / Dependencies**: `companyService.js`, `styles/main.css`.
  - **Implementation Behavior**: Telefon ve e-posta direct contact CTA butonları render edilir. Butonlar doğrudan `tel:` ve `mailto:` URI şemalarını tetikler.
  - **Applicable States / Responsive**: Large Amber primary CTA button layout (desktop & mobile).
  - **Preserve / Must Not**: Form submit input'ları veya sahte backend yetenekleri eklenemez.
  - **Verification**: Butonlara tıklandığında cihazın varsayılan arama veya e-posta uygulamasını tetikleyecek doğru URI link formatı kontrol edilir.
  - **Done Result**: Direct Contact CTA bileşeni hazır.

- [ ] **Task 3.2 — Mobile Sticky Action Bar Component**
  - **Location / Responsibility**: `src/ui/components/MobileStickyCTA.js`.
  - **Parent Capability Relation**: `detail-of` -> `SCP-006`.
  - **Inputs / Dependencies**: `styles/main.css` (Fixed bottom bar rules).
  - **Implementation Behavior**: Sadece mobil ekranlarda (<768px) ekranın en altında sabitlenen ve başparmakla kolay erişilen 2 eylem butonu (`Ara`, `E-posta`) render edilir.
  - **Applicable States / Responsive**: Hidden on desktop (>=768px), visible on mobile.
  - **Preserve / Must Not**: Masaüstü görünümde ekranı kapatacak şekilde gösterilemez.
  - **Verification**: Mobil görünüm simülasyonunda ekranın alt çubuğunda sabit belirdiği ve içeriği örtmediği doğrulanır.
  - **Done Result**: Mobile Sticky CTA bileşeni hazır.

- [ ] **Task 3.3 — Regional Context & Corporate Footer Component**
  - **Location / Responsibility**: `src/ui/components/Footer.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-009`.
  - **Inputs / Dependencies**: `styles/main.css` (Dark technical bar).
  - **Implementation Behavior**: Trakya bölgesi endüstriyel makine servis bağlamı vurgusu, Disan Hidrolik Trakya Bölge Yetkili Servisi künyesi ve telif hakkı metni dökülür.
  - **Preserve / Must Not**: Gerçekleşmemiş sosyal medya hesapları veya unapproved harita bağlantıları eklenemez.
  - **Verification**: Footer alanında Trakya bölgesi vurgusunun yer aldığı doğrulanır.
  - **Done Result**: Regional Context & Footer bileşeni hazır.

## 9. State / Role / Responsive Coverage

- **Touch Target & Accessibility**: Mobilde CTA butonları en az 44x44px dokunma alanına sahiptir.
- **Link Protocols**: Linkler `tel:` ve `mailto:` standart protokolleri ile biçimlendirilmiştir.

## 10. Automated Verification

- Contact linklerinin `tel:` ve `mailto:` öneklerini doğru taşıdığı DOM testi ile doğrulanır.

## 11. Manual QA / Debug Verification

- Mobil görünümde Sticky CTA bar test edilir. Tıklandığında telefon araması ve e-posta açma isteminin doğru tetiklendiği görülür.

## 12. Acceptance / Exit Criteria

- [ ] Telefon CTA `tel:` protokolünü tetikliyor.
- [ ] E-posta CTA `mailto:` protokolünü tetikliyor.
- [ ] Mobil ekranda Sticky CTA bar sorunsuz görünüyor.
- [ ] Footer alanında Disan Hidrolik Yetkili Servis ve Trakya bölgesi bağlamı yer alıyor.
- [ ] Form submit, harita veya WhatsApp entegrasyonu bulunmuyor.

## 13. Handoff / Stop Rule

`WAVE_03` tamamlandığında `WAVE_04` (Final Integration & Presentation QA) başlayabilir.

---
## Wave Result

- **Status**: Pending Execution (Generation Phase Completed).
