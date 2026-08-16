# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_03: Cross-Cutting Responsive, Accessibility & Presentation QA

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Tüm landing page yüzeylerinin mobil, tablet ve masaüstü ekranlarda kusursuz duyarlılıkta çalıştığını, WCAG AA erişilebilirlik standartlarını karşıladığını ve doğrulanmamış içerik sızıntısı içermediğini doğrulamak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_03
Name: Cross-Cutting Responsive, Accessibility & Presentation QA
Committed Capabilities:
- CAP-03-01: Modern tipografi, whitespace, sakin renk paleti ve responsive layout doğrulaması | SCP-006 | IN_SCOPE | YES
Upstream Consumed: WAVE_00, WAVE_01, WAVE_02 (All layout, profile, and CTA components)
Downstream Handoff: Product Engine Output Publication (outputs/demos/fizyoterapist-eda-pala/)
Exit Boundary: Whole-project responsive layout, accessibility, and presentation QA passed with zero unapproved claims
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Whole-project responsive breakpoint QA | `CAP-03-01` (Responsive layout doğrulaması) | `verification-of` | `PASS` |
| WCAG AA color contrast & accessibility audit | `CAP-03-01` (Sakin renk paleti & erişilebilirlik) | `verification-of` | `PASS` |
| Source-closed content & claim integrity scan | `CAP-03-01` (Görsel bütünlük & içerik doğrulama) | `verification-of` | `PASS` |
| Sales demo presentation readiness check | `CAP-03-01` (Görsel bütünlük & sunum doğrulama) | `verification-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

`DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği, tüm kullanıcı yüzeyleri (`WAVE_01` Hero ve `WAVE_02` Instagram CTA) tamamlandıktan sonra bütüncül responsive, erişilebilirlik ve sunum doğrulamasını içeren horizontal QA çalışması bağımsız bir kapanış dalgası olarak yürütülmelidir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (`UX-01`, `UX-02`, `UX-03`, `PR-01`, `PR-02`)
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md` (Accessibility Baseline, Responsive Principles)
- `runs/active/RUN-20260817-001/SOURCE_REGISTER.md` (FCL-001 .. FCL-004)

## 5. Dependencies

- `WAVE_00` (Setup & Local Preview Foundation).
- `WAVE_01` (Profile Hero Component).
- `WAVE_02` (Instagram Outbound CTA Component).

## 6. Scope

### In Scope
- Çözünürlük bazlı responsive layout denetimi: Mobile (`320px - 640px`), Tablet (`640px - 1024px`), Desktop (`> 1024px`).
- Yatak overflow (horizontal scrollbar) ve layout shift kontrolü.
- WCAG AA renk kontrast oranları denetimi (minimum 4.5:1).
- Klavye sekme (Tab) akışı ve görünür `:focus-visible` çerçeveleri denetimi.
- Source-closed sızıntı taraması: Uydurma tıbbi tedavi, hastalık, adres, telefon, sahte form veya kırık bağlantı bulunmadığının teyidi.

### Out of Scope
- Yeni sayfa veya ürün bileşeni eklenmesi.
- Backend API, veritabanı veya canlı hosting kurulumu.

## 7. Expected Result / Target Structure

```text
working-output / verified prototype presentation:
- Clean responsive single-page landing page
- Validated HTML5 & CSS3 code
- Passed WCAG AA contrast & keyboard access
- 100% source-closed compliant content
```

## 8. Implementation Checklist

- [ ] **Task 03-1: Cross-Viewport Responsive Layout Audit**
  - **Location/Responsibility**: `css/styles.css` (Media queries & fluid typography)
  - **Parent Capability Relation**: `verification-of` `CAP-03-01`
  - **Inputs/Dependencies**: `design/DESIGN_RULES.md` Responsive Principles.
  - **Implementation Behavior**: Sayfayı `320px`, `375px`, `768px`, `1024px` ve `1440px` çözünürlüklerinde test et; taşma (overflow) veya şekil bozukluklarını düzelt.
  - **Preserve/Must Not**: Mobilde dokunma alanlarını `48px` altına düşürme.
  - **Verification**: Tarayıcı geliştirici araçları ile farklı cihaz boyutlarında dene.
  - **Done Result**: Tüm çözünürlüklerde sıfır yatay overflow ile duyarlı görünüm sağlandı.

- [ ] **Task 03-2: Accessibility & Keyboard Navigation Audit**
  - **Location/Responsibility**: `index.html` & `css/styles.css` (`:focus-visible`)
  - **Parent Capability Relation**: `verification-of` `CAP-03-01`
  - **Inputs/Dependencies**: `design/DESIGN_RULES.md` Accessibility Baseline.
  - **Implementation Behavior**: Klavyede Tab tuşu ile gezinmeyi test et; Instagram CTA butonunun net odak çerçevesine sahip olduğunu ve ekran okuyucu etiketlerinin eksiksizliğini doğrula.
  - **Preserve/Must Not**: Odak çerçevelerini (`outline: none`) kaldırma.
  - **Verification**: Klavye ile tam erişilebilirlik ve kontur görünürlüğünü doğrula.
  - **Done Result**: WCAG AA erişilebilirlik standartları karşılandı.

- [ ] **Task 03-3: Source-Closed Content & Claim Integrity Audit**
  - **Location/Responsibility**: `working-output/` genel metin içeriği
  - **Parent Capability Relation**: `verification-of` `CAP-03-01`
  - **Inputs/Dependencies**: `SOURCE_REGISTER.md` (FCL-001 .. FCL-004).
  - **Implementation Behavior**: Sayfadaki tüm metinleri tara; Eda Pala, Fizyoterapist, Tekirdağ ve Instagram URL dışındaki hiçbir uydurma sağlık iddiasının veya sahte iletişim verisinin sızmadığını dondur.
  - **Preserve/Must Not**: Hiçbir uydurma metin veya placeholder kalmasına izin verme.
  - **Verification**: Metin taraması ile 100% FCL uyumunu doğrula.
  - **Done Result**: İçerik ve claim dürüstlüğü tam olarak sağlandı.

## 9. State / Role / Responsive Coverage

- **Mobile Viewport (<640px)**: Dikey hizalanmış temiz kart düzeni, dokunmaya uygun büyük Instagram CTA butonu.
- **Desktop Viewport (>1024px)**: Geniş whitespace, asimetrik tipografik hiyerarşi ve sakin görsel sunum.

## 10. Automated Verification

- W3C HTML5 & CSS3 Sentaks Doğrulaması.
- Lighthouse / Axe erişilebilirlik ve performans taraması (Kontrast ve odak uyumu).

## 11. Manual QA / Debug Verification

- Çapraz tarayıcı denetimi (Chrome, Safari, Firefox, Edge).
- Ekran okuyucu (NVDA/VoiceOver) ile başlık ve link etiketlerinin doğrulanması.

## 12. Acceptance / Exit Criteria

- [ ] Sayfa tüm hedef ekran boyutlarında hatasız ve yatay taşma olmadan yükleniyor.
- [ ] WCAG AA renk kontrastı ve klavye erişilebilirliği tam.
- [ ] Instagram dış bağlantısı hatasız çalışıyor.
- [ ] Uydurma sağlık iddiası, sahte form veya adres bilgisi sıfır.

## 13. Handoff / Stop Rule

`WAVE_03` tamamlandığında prototip doğrulanmış olur ve Product Engine çıktısı `outputs/demos/fizyoterapist-eda-pala/` klasörüne yayımlanmaya hazır hale gelir.

---
## Wave Result

- **Execution State**: Pending Execution (Ready for `WAVE_03` implementation pass).
