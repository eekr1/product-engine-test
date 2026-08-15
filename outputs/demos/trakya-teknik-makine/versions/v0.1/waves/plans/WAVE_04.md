# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_04: Direct Contact Surface & CTA Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçinin firma ile kolayca iletişime geçmesini sağlayan direct-contact CTA yüzeyini (`tel:`, `mailto:`) ve kurumsal Footer bölümünü inşa etmektir.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_04
- **Name**: Direct Contact Surface & CTA Presentation
- **Goal**: Telefon (`tel:`) ve E-posta (`mailto:`) direct-contact CTA'larının ve kurumsal footer yapısının sunumu
- **Primary Deliverables**: `src/components/Contact.js`, `src/components/Footer.js`, `src/styles/contact.css`
- **Upstream Boundary Consumed**: `WAVE_03` hizmetler bölümü ve `companyService.js` verileri
- **Downstream Handoff**: `WAVE_05` için tamamlanmış UI yüzeyleri

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Telefon direct contact CTA | `Telefon direct contact CTA` | implementation-of | PASS |
| E-posta direct contact CTA | `E-posta direct contact CTA` | implementation-of | PASS |
| Kurumsal Footer yapısı | `Kurumsal Footer yapısı` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

DEMO_FRONTEND_PACKAGE granularity guard'ı uyarınca İletişim bölümü Hizmetler bölümünden ve QA aşamasından ayrı bağımsız bir teslimat dalgası olarak kurgulanmalıdır. Kullanıcı hizmetleri inceledikten sonra doğrudan iletişime geçebileceği net bir aksiyon yüzeyine ihtiyaç duyar.

## 4. Canonical Sources to Read

- `working-output/ai/PROJECT_BRAIN.md`
- `working-output/ai/PRODUCT_RULES.md` (PR-003, BC-002)
- `working-output/ai/TECH_CONTEXT.md` (Section 3)
- `working-output/design/DESIGN_RULES.md` (Section 4, 8)
- `working-output/waves/WAVE_MAP.md` (WAVE_04 Entry)
- `SOURCE_REGISTER.md` (FCL-001, FCL-002, FCL-007)

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_03` (`Services.js`, `companyService.js`).
- **Downstream Consumers**: `WAVE_05`.

## 6. Scope

### In Scope
- İletişim bölümü bileşeni (`src/components/Contact.js`).
- Kurumsal Footer bileşeni (`src/components/Footer.js`).
- Visual styling (`src/styles/contact.css`).
- FCL-007: Telefon (`tel:`) ve E-posta (`mailto:`) direct-contact CTA'ları.
- FCL-001 & FCL-002: Kurumsal footer ismi ve yetkili servis badge'i.

### Out of Scope
- Form submit backend'i, canlı harita entegrasyonu, WhatsApp sohbet butonu.
- Uydurma fiziksel adres, çalışma saatleri veya telefon numaraları.

## 7. Expected Result / Target Structure

```text
/
└── src/
    ├── components/
    │   ├── Header.js
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Services.js
    │   ├── ServiceCard.js
    │   ├── Contact.js
    │   └── Footer.js
    └── styles/
        ├── index.css
        ├── hero.css
        ├── about.css
        ├── services.css
        └── contact.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Direct Contact Surface Component (`Contact.js`)**
  - **Location/Responsibility**: `src/components/Contact.js`
  - **Parent Capability Relation**: `Telefon direct contact CTA` & `E-posta direct contact CTA` (implementation-of)
  - **Inputs/Dependencies**: `companyService.getCompanyInfo()` iletişim verileri.
  - **Behavior**:
    - Section başlığı: "Doğrudan İletişim"
    - İletişim Açıklaması: Trakya bölgesindeki makine bakım, onarım ve yedek parça talepleri için doğrudan iletişim kanalları.
    - Telefon CTA Butonu: `tel:` protokol bağlantılı, belirgin arama ikonu ve butonu (FCL-007).
    - E-posta CTA Butonu: `mailto:` protokol bağlantılı e-posta gönderme butonu (FCL-007).
  - **Preserve/Must-Not**: Form submit backend'i, canlı harita iframe'i veya WhatsApp sohbet script'i eklenemez.
  - **FCL Boundary**: FCL-007.
  - **Verification**: `Contact.js` DOM yapısı taranır ve `tel:` / `mailto:` link protokolleri doğrulanır.
  - **Done Result**: Direct contact surface bileşeni hazır.

- [ ] **Task 2: Corporate Footer Component (`Footer.js`)**
  - **Location/Responsibility**: `src/components/Footer.js`
  - **Parent Capability Relation**: `Kurumsal Footer yapısı` (implementation-of)
  - **Inputs/Dependencies**: `companyService.getCompanyInfo()` verileri.
  - **Behavior**:
    - Marka adı: "Trakya Teknik Makine" (FCL-001)
    - Statü etiketi: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" (FCL-002)
    - Telif hakkı bildirimi (Current year & copyright)
    - Hızlı navigasyon ve direct contact bağlantı linkleri.
  - **Preserve/Must-Not**: Uydurma sosyal medya veya harita linkleri eklenemez.
  - **FCL Boundary**: FCL-001 & FCL-002.
  - **Verification**: Footer HTML taranır ve marka/statü metinleri teyit edilir.
  - **Done Result**: Kurumsal Footer bileşeni hazır.

- [ ] **Task 3: Contact & Footer CSS Styling (`contact.css`)**
  - **Location/Responsibility**: `src/styles/contact.css`
  - **Parent Capability Relation**: `Telefon direct contact CTA` (detail-of)
  - **Inputs/Dependencies**: `DESIGN_RULES.md` buton ve footer kuralları.
  - **Behavior**: Vurgulu kart zeminleri (`#1A2026`), yüksek görünürlüklü turuncu CTA butonları, mobilde 1-column dikey stacking ve 44px+ touch alanları.
  - **Preserve/Must-Not**: Jenerik mavi form/footer kopyalanamaz.
  - **Verification**: Mobil ve desktop kırılımlarında buton boyutları ve metin okunabilirliği test edilir.
  - **Done Result**: Direct contact ve Footer stilleri hazır.

## 9. State / Role / Responsive Coverage

- **Responsive View**: Desktop'ta 2-column contact CTA kartları; mobilde 1-column akış.
- **Touch Target**: Mobilde `tel:` ve `mailto:` butonları minimum 44px yüksekliğindedir.
- **Keyboard Access**: İletişim butonları ve footer linkleri klavye odağı (focus ring) taşır.

## 10. Automated Verification

- Link Protocol Verification: `tel:` ve `mailto:` href değerlerinin doğruluğu taranır.

## 11. Manual QA / Debug Verification

- Tıklandığında cihazın telefon arama uygulamasının ve varsayılan e-posta istemcisinin tetiklendiği kontrol edilir.

## 12. Acceptance / Exit Criteria

- [ ] `Contact.js`, `Footer.js` ve `contact.css` hatasız yükleniyor ve render ediliyor.
- [ ] İletişim butonları strictly `tel:` ve `mailto:` bağlantıları taşıyor.
- [ ] Form submit, harita veya WhatsApp gibi yetkisiz bileşenler bulunmuyor.

## 13. Handoff / Stop Rule

`WAVE_04` tamamlandığında İletişim ve Footer bölümü `WAVE_05` (Cross-Surface Integration, Responsive & QA) dalgasına teslim edilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
