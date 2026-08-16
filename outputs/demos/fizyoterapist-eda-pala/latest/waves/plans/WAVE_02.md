# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_02: Instagram Outbound Integration & Digital Contact Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçilerin Fizyoterapist Eda Pala'nın onaylı Instagram profiline (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`) güvenli ve belirgin bir şekilde yönlenmesini sağlayan sosyal medya temas alanını inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_02
Name: Instagram Outbound Integration & Digital Contact Surface
Committed Capabilities:
- CAP-02-01: Onaylı Instagram profiline outbound link / CTA (https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv) | SCP-004 | IN_SCOPE | YES
Upstream Consumed: WAVE_00 (siteConfig, HTML5 shell), WAVE_01 (Profile Hero)
Downstream Handoff: WAVE_03 (Cross-Cutting Responsive, Accessibility & Presentation QA)
Exit Boundary: Outbound Instagram CTA button opens approved URL in new tab securely, no unapproved forms or maps present
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Instagram Outbound CTA button component | `CAP-02-01` (Onaylı Instagram outbound link / CTA) | `implementation-of` | `PASS` |
| Secure outbound link protocol (`target="_blank"` `rel="noopener noreferrer"`) | `CAP-02-01` (Onaylı Instagram outbound link / CTA) | `implementation-of` | `PASS` |
| Digital contact surface & social media card composition | `CAP-02-01` (Onaylı Instagram outbound link / CTA) | `implementation-of` | `PASS` |
| Instagram CTA & contact surface verification | `CAP-02-01` (Onaylı Instagram outbound link / CTA) | `verification-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

`WAVE_02` projenin birincil etkileşim ve iletişim sorumluluğudur. `WAVE_00` layout altyapısına ve `WAVE_01` Profile Hero yerleşimine dayanır. Onaylanmamış iletişim formları, canlı haritalar veya WhatsApp entegrasyonları yerine onaylı tek iletişim kanalı olan Instagram outbound yönlendirmesini odağına alır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (`PR-01`, `BC-01`, `BC-02`, `UX-03`)
- `ai/TECH_CONTEXT.md` (`TCON-02`)
- `design/DESIGN_RULES.md` (`color-instagram-accent`, Micro-Interactions)
- `runs/active/RUN-20260817-001/SOURCE_REGISTER.md` (`FCL-004`)

## 5. Dependencies

- `WAVE_00` (HTML5 Layout Container, CSS Custom Properties, `siteConfig` module).
- `WAVE_01` (Profile Hero Component).

## 6. Scope

### In Scope
- Outbound Instagram CTA butonu ve bağlantı kartı (`.instagram-cta-card`).
- `siteConfig.social.instagramUrl` (`FCL-004`) verisi üzerinden bağlantı adresi entegrasyonu.
- Güvenli yönlendirme protokolü: `target="_blank"` ve `rel="noopener noreferrer"`.
- Estetik SVG Instagram ikonu ve açık yönlendirme metni ("Instagram'da Takip Edin / İletişim").
- Hover ve focus mikro etkileşimleri (`transform: translateY(-2px)`, kontur değişimi).

### Out of Scope
- İletişim formu backend'i veya input alanları (Onay dışı).
- Canlı harita, klinik adresi veya yol tarifi (Onay dışı).
- WhatsApp sohbet widget'ı veya telefon/e-posta formları (Onay dışı).
- Instagram API entegrasyonu veya profil görsellerinin dinamik çekilmesi.

## 7. Expected Result / Target Structure

```text
working-output / contact surface component rendering:
<main class="container">
  ... Profile Hero ...
  <section class="contact-section">
    <div class="instagram-cta-card">
      <svg class="instagram-icon">...</svg>
      <div class="contact-text">...</div>
      <a href="https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="btn-instagram">
        Instagram'da Bağlantı Kur
      </a>
    </div>
  </section>
</main>
```

## 8. Implementation Checklist

- [ ] **Task 02-1: Outbound Instagram CTA Component Implementation**
  - **Location/Responsibility**: `index.html` (`.contact-section`) & `js/main.js`
  - **Parent Capability Relation**: `implementation-of` `CAP-02-01`
  - **Inputs/Dependencies**: `siteConfig.social.instagramUrl` (`FCL-004`).
  - **Implementation Behavior**: `a` etiketine `siteConfig.social.instagramUrl` adresini ekle; `target="_blank"` ve `rel="noopener noreferrer"` özniteliklerini zorunlu kıl.
  - **Preserve/Must Not**: URL'yi değiştirmek veya onaylanmamış başka bir sosyal medya adresi eklemek.
  - **Verification**: DOM incelemesinde bağlantının tam olarak `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv` olduğunu ve güvenlik özniteliklerinin varlığını kontrol et.
  - **Done Result**: Outbound Instagram link bileşeni güvenli şekilde bağlandı.

- [ ] **Task 02-2: Digital Contact Surface Card Composition & Styling**
  - **Location/Responsibility**: `css/styles.css` (`.instagram-cta-card`, `.btn-instagram`)
  - **Parent Capability Relation**: `implementation-of` `CAP-02-01`
  - **Inputs/Dependencies**: `design/DESIGN_RULES.md` (`color-instagram-accent`, Micro-Interactions).
  - **Implementation Behavior**: Temas kartını sakin `--color-bg-surface` zemin, ince sınır ve `--color-instagram-accent` vurgulu CTA butonu ile şekillendir; hover esnasında hafif yükselme efekti ekle.
  - **Preserve/Must Not**: Form alanları, harita iframe'i veya WhatsApp widget'ı ekleme.
  - **Verification**: Tarayıcıda buton hover/focus ve görsel uyum denetimi yap.
  - **Done Result**: Dijital temas alanı ve CTA kartı görsel olarak hazır.

## 9. State / Role / Responsive Coverage

- **Normal State**: Instagram CTA butonu ve yönlendirme kartı net biçimde görüntülenir.
- **Hover/Focus State**: Buton üzerine gelindiğinde veya klavye odağına alındığında belirgin renk ve odak çerçevesi sunar.
- **Responsive Coverage**: Mobil ekranlarda (`<640px`) CTA butonu tam genişlikte (`width: 100%`) dokunma dostu (`min-height: 48px`) boyut kazanır.

## 10. Automated Verification

- DOM elementinde `a[href*="instagram.com/fizyoterapistedapala"]` selektörünün doğrulanması.
- `target="_blank"` ve `rel="noopener noreferrer"` öznitelik kontrolü.

## 11. Manual QA / Debug Verification

- Outbound Instagram butonuna tıklandığında yeni sekmede doğru onaylı profil adresinin açıldığını test et.
- Kart alanında onay dışı form, adres veya telefon bilgisi bulunmadığını teyit et.

## 12. Acceptance / Exit Criteria

- [ ] Instagram CTA butonu onaylı URL'ye (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`) doğru yönlendiriyor.
- [ ] Bağlantı `target="_blank"` ve `rel="noopener noreferrer"` özniteliklerini taşıyor.
- [ ] Kart alanında hiçbir uydurma iletişim formu, harita veya telefon bilgisi yer almıyor.

## 13. Handoff / Stop Rule

`WAVE_02` tamamlandığında `WAVE_03` (Cross-Cutting QA) için tüm kullanıcı yüzeyleri (Hero + Instagram CTA) tamamlanmış olarak devredilir.

---
## Wave Result

- **Execution State**: Pending Execution (Ready for `WAVE_02` implementation pass).
