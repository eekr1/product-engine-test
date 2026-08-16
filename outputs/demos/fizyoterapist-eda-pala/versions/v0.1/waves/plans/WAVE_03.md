# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_03: Trust, Location Context & Outbound Link Integration

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Tekirdağ konum bağlamını (`FCL-003`) sunan güven bölümünü inşa etmek, onaylı Instagram profiline (`FCL-004`) yumuşak mikro etkileşimli outbound CTA butonunu entegre etmek ve tüm satılmaya hazır demoyu doğrulamak.

## 1. Parent Wave Map Entry

```yaml
wave_id: WAVE_03
wave_name: Trust, Location Context & Outbound Link Integration
primary_goal: Tekirdağ konum bağlamını sunmak ve onaylı Instagram profiline outbound CTA entegrasyonunu tamamlamak
delivery_maturity_target: Sales-Demo Ready Prototype
dependencies: [WAVE_02]
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Tekirdağ Location Context Presentation Card (`FCL-003`) | Tekirdağ Konum Bağlamı Sunum Bileşeni | implementation-of | PASS |
| Outbound Instagram Profile CTA Button (`FCL-004`) | Outbound Instagram Profil Link / CTA Entegrasyonu | implementation-of | PASS |
| Outbound Link Accessibility & Security Attributes | Outbound Instagram Profil Link / CTA Entegrasyonu | detail-of | PASS |
| Full Integrated Demo Verification & Quality Sign-Off | Frontend Demo Tamamlama ve Son Satış Demosu Doğrulaması | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_02` ile Hero & Profil bölümü kurulmuştur. Satış görüşmesinde gösterilecek frontend demonun tamamlanabilmesi için ziyaretçiyi eyleme geçiren onaylı Instagram profili yönlendirmesinin (`FCL-004`) ve Tekirdağ konum bağlamının (`FCL-003`) güven sunumuyla birleştirilmesi ve tüm projenin nihai doğrulamadan geçirilmesi gerekmektedir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md` (CTA button interaction & colors)
- `SOURCE_REGISTER.md` (`FCL-003: Tekirdağ`, `FCL-004: Instagram URL`)
- `waves/WAVE_MAP.md` (`WAVE_03` parent entry)

## 5. Dependencies

- `WAVE_02` (Hero & Profil bölümü tamamlanmış olmalıdır).

## 6. Scope

### In Scope
- Konum ve Güven bölümü HTML markup'ı (`<section id="trust-location" class="trust-section container">`).
- Outbound Instagram CTA butonu entegrasyonu (`href="https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv"`, `target="_blank"`, `rel="noopener noreferrer"`).
- `styles/components.css` içinde Konum kartı ve Outbound CTA butonu görsel stilleri ile hover mikro etkileşimleri.
- `src/adapters/contentAdapter.js` üzerinden Tekirdağ konum verisi ve Instagram URL'sinin dinamik aktarılması.
- Tüm sayfanın (Hero + Location + Instagram CTA + Header + Footer) masaüstü ve mobilde uçtan uca doğrulanması.

### Out of Scope
- Canlı harita (Google Maps / OpenStreetMap) iframe entegrasyonu.
- WhatsApp entegrasyonu veya online randevu alma backend'i.
- Instagram profili scraping'i veya profilden veri çekilmesi.
- Sahte açık adres, telefon numarası veya e-posta eklenmesi.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (fully assembled landing page with Hero, Trust/Location & Instagram CTA)
├── styles/
│   ├── tokens.css
│   ├── main.css
│   └── components.css (Hero, Location Card & Outbound CTA styling)
└── src/
    ├── config/content.config.js
    ├── adapters/contentAdapter.js
    └── app.js (fully bound content & interactions)
```

## 8. Implementation Checklist

- [ ] **Task 1: Location Context & Trust Section Markup**
  - **Location / Responsibility**: `index.html` içinde `<section id="trust-location" class="trust-section container">`.
  - **Parent Capability Relation**: `implementation-of` (Tekirdağ Konum Bağlamı Sunum Bileşeni).
  - **Inputs / Contracts**: `<h2 id="location-title">`, `<div class="location-card">`, `<span id="location-name">`.
  - **Implementation Behavior**: Tekirdağ konum bağlamını sunan sakin bir editoryal kart ve güven sunumu alanı oluşturmak.
  - **FCL / Source Boundary**: Konum verisi yalnız `FCL-003` (Tekirdağ) ile sınırlıdır; ilçe, cadde, mahalle veya klinik adresi eklenmez.
  - **Verification**: Tarayıcıda Tekirdağ konumkartı görsel kütle olarak yerleşir.
  - **Done Result**: Konum bölümü HTML yapısı hazır.

- [ ] **Task 2: Outbound Instagram CTA Button Implementation**
  - **Location / Responsibility**: `index.html` & `styles/components.css`.
  - **Parent Capability Relation**: `implementation-of` (Outbound Instagram Profil Link / CTA Entegrasyonu).
  - **Inputs / Contracts**: `<a id="instagram-cta" class="btn btn-primary" target="_blank" rel="noopener noreferrer">`.
  - **Implementation Behavior**: `href` değerini `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv` (`FCL-004`) olarak bağlamak. Buton için `styles/components.css` içinde `background-color: var(--accent-primary)`, `color: #FFFFFF`, `padding: 1rem 2rem`, `border-radius: 8px`, `transition: var(--transition-smooth)` tanımlamak. Hover durumunda `transform: translateY(-2px)` ve `background-color: var(--accent-hover)` mikromotion'ını eklemek.
  - **FCL / Source Boundary**: Buton metni "Instagram Profilini İncele" olarak sunulur; "Randevu Al" veya "Bize Ulaşın" gibi backend uydurması yapılmaz.
  - **Verification**: Butona tıklandığında yeni sekmede onaylı Instagram URL'si açılır.
  - **Done Result**: Outbound Instagram CTA entegrasyonu tamamlandı.

- [ ] **Task 3: Security & Accessibility Attributes Audit**
  - **Location / Responsibility**: `index.html` `#instagram-cta`.
  - **Parent Capability Relation**: `detail-of` (Outbound Instagram Profil Link / CTA Entegrasyonu).
  - **Inputs / Contracts**: `target="_blank"`, `rel="noopener noreferrer"`, `aria-label="Fizyoterapist Eda Pala Instagram Profilini Yeni Sekmede Aç"`.
  - **Implementation Behavior**: Güvenlik zafiyeti (`tabnabbing`) engelleyici `rel="noopener noreferrer"` ve ekran okuyucu açıklamasını kontrol etmek.
  - **Verification**: Chrome Lighthouse & AXE accessibility denetiminden geçer.
  - **Done Result**: Güvenlik ve erişilebilirlik nitelikleri doğrulandı.

- [ ] **Task 4: Full Integrated Demo Quality Verification**
  - **Location / Responsibility**: Full frontend package (`index.html`, `styles/`, `src/`).
  - **Parent Capability Relation**: `verification-of` (Frontend Demo Tamamlama ve Son Satış Demosu Doğrulaması).
  - **Inputs / Contracts**: `PRODUCT_RULES.md` & `DESIGN_RULES.md`.
  - **Implementation Behavior**: Mobil ve masaüstü çözünürlüklerde uçtan uca kontrol yapmak. Hiçbir yerde sahte adres/telefon/randevu placeholder'ı kalmadığını ve `FCL-001`..`FCL-004` dışı factual claim üretilmediğini teyit etmek.
  - **Verification**: Demo proaktif satış görüşmesinde sorunsuz sunulacak görsel ve teknik seviyeye ulaşır.
  - **Done Result**: Satış demosu nihai doğrulamadan geçti.

## 9. State / Role / Responsive Coverage

- **Outbound Link Behavior**: Her zaman yeni sekmede (`_blank`) güvenli biçimde açılır.
- **Focus & Keyboard Navigation**: CTA butonu klavye Tab sırasına dahildir ve belirgin focus ring (`outline: 2px solid var(--accent-primary)`) gösterir.
- **Mobile Touch Target**: CTA butonu yüksekliği en az 48px olarak ayarlanmıştır.

## 10. Automated Verification

- URL protocol & HTML attribute verification (`target="_blank"`, `rel="noopener noreferrer"`).
- Outbound CTA link exact match test: `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`.

## 11. Manual QA / Debug Verification

- Outbound CTA butonuna tıklanarak harici sekmeye yönlendirme test edilir.
- Mobil cihaz görünümünde CTA butonunun dokunma alanı ve görünürlüğü kontrol edilir.

## 12. Acceptance / Exit Criteria

- [ ] Tekirdağ konum bağlamı (`FCL-003`) harita veya adres uydurmadan temiz editoryal kartla sunuluyor.
- [ ] Outbound Instagram CTA butonu (`FCL-004`) yeni sekmede ve `rel="noopener noreferrer"` ile açılıyor.
- [ ] Sitede hiçbir uydurma sağlık, tedavi, telefon veya randevu formu bulunmuyor.
- [ ] Satış demosu prototype olgunluğunda görsel ve teknik olarak eksiksiz.

## 13. Handoff / Stop Rule

- `WAVE_03` tamamlandığında tüm implementation dalgaları bitmiş olur.
- Sunulacak teslim olgunluğu: Sales-Demo Ready Prototype.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
