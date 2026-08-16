# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_03: Outbound Instagram Contact & CTA

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Onaylı Instagram profili yönlendirme butonunun ve sosyal etkileşim alanının inşa edilmesi.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_03`
- **Name**: Outbound Instagram Contact & CTA
- **Why Separate**: Dış iletişim ve sosyal yönlendirme işlevselliği kendi içinde bağımsız erişilebilirlik ve yönlendirme kuralları taşır.
- **In Scope**: `<section class="contact-cta">` markup'ı, Instagram yönlendirme butonu, `target="_blank" rel="noopener noreferrer"` öznitelikleri, hover efektleri.
- **Out of Scope**: Randevu formu, iletişim formu backend'i veya WhatsApp entegrasyonu.
- **Primary Deliverables**: Outbound Instagram CTA Section.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Outbound Instagram Profile CTA | Outbound Instagram Profile CTA | `implementation-of` | `PASS` |
| Social Outbound Interaction Component | Social Outbound Interaction Component | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

- Ziyaretçinin Fizyoterapist Eda Pala ile tek onaylı dijital temas noktası olan Instagram profil bağlantısına erişmesini sağlar.
- `WAVE_02` tanıtım gövdesini tüketir ve sayfanın dönüşüm/iletişim kapanış bölümünü oluşturur.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 5. Dependencies

- `WAVE_02` (Professional Identity & Location Context).

## 6. Scope

### In Scope
- `<section class="contact-cta-section">` semantik HTML markup'ı.
- Outbound Instagram Profile CTA Button (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`).
- Mandatory security & accessibility attributes (`target="_blank"`, `rel="noopener noreferrer"`, `aria-label="Fizyoterapist Eda Pala Instagram Profilini Ziyaret Et (Yeni Pencerede Açılır)"`).
- Interactive hover effects (`translateY(-2px)`, soft elevation shadow).
- Data binding via `contentAdapter.getContactData()`.

### Out of Scope
- Online randevu formu backend'i veya modal etkileşimleri.
- WhatsApp sohbet butonu, e-posta formu veya telefon doğrudan arama kartı (onaylanmamış veri).
- Canlı harita entegrasyonu.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (Updated with Contact CTA Section)
├── styles/
│   └── cta.css (CTA component specific styles)
└── js/
    └── components/
        └── ctaComponent.js (CTA data binding module)
```

## 8. Implementation Checklist

- [ ] **`TSK-03-01`: Contact CTA Section Markup**
  - **Location**: `index.html` (`<section class="contact-section">`)
  - **Responsibility**: Semantik başlık ("Sosyal Medya & İletişim"), açıklama paragrafı ve CTA container.
  - **Parent Capability**: `Social Outbound Interaction Component`
  - **Done Criteria**: `index.html` içinde CTA kart yapısının oluşturulması.
- [ ] **`TSK-03-02`: Instagram Outbound Link Button (`FCL-04`)**
  - **Location**: `index.html`, `js/components/ctaComponent.js`
  - **Responsibility**: `contentAdapter.getContactData()` üzerinden onaylı Instagram URL'sinin `<a>` etiketine `href` olarak atanması.
  - **Parent Capability**: `Outbound Instagram Profile CTA`
  - **Done Criteria**: Buton tıklandığında doğru Instagram URL'sinin açılması.
- [ ] **`TSK-03-03`: Security & Accessibility Attributes (`FCL-04`)**
  - **Location**: `index.html`
  - **Responsibility**: `target="_blank"` ve `rel="noopener noreferrer"` özniteliklerinin eklenmesi, ekran okuyucu için açık `aria-label` tanımlanması.
  - **Parent Capability**: `Outbound Instagram Profile CTA`
  - **Done Criteria**: Güvenlik ve erişilebilirlik özniteliklerinin %100 mevcut olması.
- [ ] **`TSK-03-04`: Interactive Styling & Touch Target (`tokens.css`)**
  - **Location**: `styles/cta.css`
  - **Responsibility**: Minimum `48px x 48px` dokunma alanı, `--color-primary` arka plan rengi, visible focus outline.
  - **Parent Capability**: `Social Outbound Interaction Component`
  - **Done Criteria**: Klavye navigasyonunda ve mobil dokunmada kusursuz etkileşim.

## 9. State / Role / Responsive Coverage

- **Normal State**: Instagram CTA butonu net görsel öncelikle (primary accent button) sergilenir.
- **Hover / Focus State**: Fare ile üzerine gelindiğinde dikey yumuşak yükselme, klavye ile odaklanıldığında net `--color-primary` odak halkası.
- **Mobile Behavior**: Mobilde buton %100 genişliğe yayılır (`width: 100%`), dokunma alanı `52px` yüksekliğindedir.

## 10. Automated Verification

- [ ] Anchor element attribute scan (`target="_blank"`, `rel="noopener noreferrer"`).
- [ ] URL exact equality check against `FCL-04`.

## 11. Manual QA / Debug Verification

- [ ] Butona tıklandığında Instagram sayfasının güvenli biçimde yeni sekmede açıldığının teyidi.
- [ ] Form backend'i veya WhatsApp butonlarının bulunmadığının kontrolü.

## 12. Acceptance / Exit Criteria

- [ ] Instagram profili bağlantısı `FCL-04` ile tam eşleşir.
- [ ] Güvenlik ve erişilebilirlik standartlarına uygundur.

## 13. Handoff / Stop Rule

- `WAVE_03` tamamlandığında `WAVE_04` (Final Cross-Cutting QA & Verification) aşamasına geçilebilir.
- Onaylanmamış iletişim kanalı eklenirse çalışma durdurulur.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
