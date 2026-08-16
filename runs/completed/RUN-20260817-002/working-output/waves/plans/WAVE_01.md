# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Global Shell & Corporate Navigation Header

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Mobil ve masaüstü uyumlu kurumsal header, navigasyon menüsü, marka logosu alanı ve footer shell yapısını (`src/components/shell/Header.js`, `src/components/shell/Footer.js`, `src/components/shell/NavigationDrawer.js`) inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_01
Name: Global Shell & Corporate Navigation Header
Goal: Kurumsal header, responsive navigasyon menüsü ve footer shell bileşenini inşa etmek.
Why Separate: Ziyaretçinin sayfada gezinmesini sağlayan ana görünüm kabuğu (shell) içerik alanlarından önce tamamlanmalıdır.
Committed Capabilities:
- SCP-001 (Global Shell Navigation)
- SCP-002 (Brand Logo & Name Header Presenter)
In Scope: Header.js, NavigationDrawer.js, Footer.js
Out of Scope: Dynamic CMS menüsü, kullanıcı giriş butonları veya e-ticaret sepeti
Primary Deliverables: src/components/shell/Header.js, NavigationDrawer.js, Footer.js
Dependencies: WAVE_00
Upstream Boundary Consumed: WAVE_00 CSS design token'ları ve HTML shell
Downstream Handoff: WAVE_02 hero ve içerik bölümü için üst navigasyon kabuğu
Exit Boundary: Header ve Footer görünümü masaüstü ve mobil ekranlarda sorunsuz çalışıyor
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Header & Mobile Drawer Navigation Shell | `SCP-001 (Global Shell Navigation)` | implementation-of | PASS |
| Brand Name & Authorized Status Header Bar | `SCP-002 (Brand Logo & Name Header Presenter)` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_01`, tüm sayfaya çerçeve oluşturan header, navigasyon ve footer kabuğudur. Ziyaretçi firmanın adını (`Trakya Teknik Makine`) ve yetkili servis vurgusunu header alanında görür. Bu shell olmadan hero (`WAVE_02`) veya hizmet vitrini (`WAVE_03`) bağımsız konumlanamaz.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `SOURCE_REGISTER.md` (`FCL-001`, `FCL-002`)

## 5. Dependencies

- `WAVE_00` (HTML shell, CSS design tokens ve `siteData.js`).

## 6. Scope

### In Scope
- `src/components/shell/Header.js`: Marka adı (`Trakya Teknik Makine`), `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` rozeti, masaüstü hızlı linkler (Ana Sayfa, Hizmetlerimiz, Hakkımızda, İletişim), mobil hamburger menü ikonu ve direct-contact telefon CTA butonu.
- `src/components/shell/NavigationDrawer.js`: Mobil cihazlar için sağdan kayan (slide-over) navigasyon paneli ve kapatma aksiyonu.
- `src/components/shell/Footer.js`: Alt kurumsal telif hakkı, yetkili servis beyanı ve quick links.

### Out of Scope
- Dynamic CMS menü yönetimi veya backend session / auth linkleri.
- Uydurma sosyal medya adresleri veya kurgusal e-posta abonelik formları.

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260817-002/working-output/
└── src/
    └── components/
        └── shell/
            ├── Header.js
            ├── NavigationDrawer.js
            └── Footer.js
```

## 8. Implementation Checklist

- [ ] **Task 1.1 (Header & Brand Presenter Component)**:
  - **Location**: `src/components/shell/Header.js`
  - **Responsibility**: Header çubuğunun render edilmesi, marka adı (`Trakya Teknik Makine`) ve yetkili servis statü rozetinin gösterimi.
  - **Parent Capability Relation**: `implementation-of` (`SCP-002`)
  - **Inputs / Contracts**: `getSiteData()` adapter'ı.
  - **Behavior**: Glassmorphism efektli sabit/sticky header. Masaüstünde navigasyon linkleri ve `tel:` CTA butonu görünür.
  - **Preserve**: Responsive breakpoint 768px.
  - **Verification**: Browser inspector toggle.
  - **Done**: Desktop header complete.

- [ ] **Task 1.2 (Mobile Navigation Drawer Component)**:
  - **Location**: `src/components/shell/NavigationDrawer.js`
  - **Responsibility**: Mobil ekranlarda hamburger ikona tıklandığında açılan slide-over navigasyon paneli.
  - **Parent Capability Relation**: `implementation-of` (`SCP-001`)
  - **Inputs / Contracts**: UI state toggle event handler.
  - **Behavior**: Mobil menü açılır, sayfa kaydırılması kilitlenir, tıklama ile kapanır.
  - **Preserve**: Touch target minimum 44x44px.
  - **Verification**: Mobile device simulation QA.
  - **Done**: Mobile drawer complete.

- [ ] **Task 1.3 (Corporate Footer Shell Component)**:
  - **Location**: `src/components/shell/Footer.js`
  - **Responsibility**: Kurumsal telif hakkı metni (`© Trakya Teknik Makine`), `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` resmi beyanı ve alt hızlı erişim linkleri.
  - **Parent Capability Relation**: `implementation-of` (`SCP-001`)
  - **Inputs / Contracts**: `getSiteData()` FCL data.
  - **Behavior**: Sayfa altında temiz kurumsal kapanış sunar.
  - **Preserve**: No speculative address or stock claims.
  - **Verification**: Visual check in browser.
  - **Done**: Footer shell complete.

## 9. State / Role / Responsive Coverage

- **Desktop State (>1200px)**: Yatay navigasyon linkleri, belirgin yetkili servis rozeti, direct-contact telefon CTA'sı.
- **Tablet & Mobile State (<768px)**: Mobil hamburger menü ikonu aktif, navigasyon linkleri slide-over drawer içine taşınır.
- **Glassmorphism Backdrop**: Header kaydırıldığında `backdrop-filter: blur(12px)` ile zemin bulanıklaşır.

## 10. Automated Verification

```bash
# Check file creation
ls -la src/components/shell/Header.js src/components/shell/NavigationDrawer.js src/components/shell/Footer.js
```

## 11. Manual QA / Debug Verification

- Masaüstü görünümde header üzerindeki navigasyon linklerine tıklandığında ilgili anchor `#services`, `#about`, `#contact` alanlarına yumuşak kaydırma (smooth scroll) yapıldığını kontrol et.
- Ekran genişliğini 500px seviyesine çekerek hamburger ikonunun çıktığını ve mobil çekmecenin sorunsuz açılıp kapandığını doğrula.

## 12. Acceptance / Exit Criteria

- [ ] `Header.js`, `NavigationDrawer.js` ve `Footer.js` modülleri hatasız oluşturulmuştur.
- [ ] Header üzerinde `Trakya Teknik Makine` firma adı ve `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` statüsü eksiksiz görünmektedir.
- [ ] Mobil ve masaüstü responsive geçişleri sorunsuz çalışmaktadır.
- [ ] `WAVE_02` Hero alanı için üst navigasyon çerçevesi hazırdır.

## 13. Handoff / Stop Rule

`WAVE_01` tamamlandığında `WAVE_02` Hero checkpoint'ine geçilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
