# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_05: Whole-Project Integration, Responsive Design & Quality QA

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_05` in `waves/WAVE_MAP.md`
- **Goal**: Tüm UI bileşenlerini `index.html` üzerinde entegre etmek, mobil/masaüstü responsive uyumunu kontrol etmek, WCAG AA erişilebilirlik, animasyon ve satış demosu doğrulamasını tamamlamak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_05
Name: Whole-Project Integration, Responsive Design & Quality QA
Goal: Tüm UI bileşenlerini index.html üzerinde entegre etmek, mobil/masaüstü responsive uyumunu kontrol etmek, WCAG AA erişilebilirlik, animasyon ve satış demosu doğrulamasını tamamlamak.
Why Separate: Tüm bağımsız UI bileşenleri tamamlandıktan sonra bütünsel tarayıcı entegrasyonu, responsive cihaz testi ve kalite doğrulaması ayrı bir kapanış dalgası gerektirir.
Committed Capabilities:
- SCP-001 (Responsive Frontend Experience Integration)
- SCP-006 (Sales Demo Verification)
In Scope: Integrated Prototype Package (index.html, src/**/*.js, src/**/*.css)
Out of Scope: Production deployment, domain/hosting yapılandırması veya harici backend entegrasyonu
Primary Deliverables: Integrated Prototype Package
Dependencies: WAVE_04
Upstream Boundary Consumed: WAVE_00..04 tüm UI ve config bileşenleri
Downstream Handoff: Satış görüşmelerinde kullanılabilir tamamlanmış frontend demo paketi
Exit Boundary: Kod hatasız çalışıyor, tüm akışlar dürüstçe sunuluyor ve satış demosu hazır
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Whole-Project Responsive Integration & Assembly | `SCP-001 (Responsive Frontend Experience Integration)` | implementation-of | PASS |
| Sales Demo Readiness & Quality Assurance | `SCP-006 (Sales Demo Verification)` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_05`, bağımsız olarak üretilen tüm bileşenlerin (`Header`, `HeroSection`, `ServicesSection`, `AboutSection`, `ContactBar`, `Footer`) birleştirilerek tek parça halinde sorunsuz çalıştığının doğrulandığı, performans, WCAG AA erişilebilirlik ve satış demosu kalitesinin garanti edildiği kapanış dalgasıdır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `SOURCE_REGISTER.md` (Tüm FCL maddeleri `FCL-001..FCL-006`)

## 5. Dependencies

- `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03`, `WAVE_04`.

## 6. Scope

### In Scope
- `src/app.js` modül orkestratörü: Tüm bileşenlerin (`Header`, `Hero`, `Services`, `About`, `ContactBar`, `Footer`) `index.html` üzerindeki root container'lara sırayla mount edilmesi ve event listener'ların başlatılması.
- Çapraz cihaz responsive breakpoint kontrolleri (Desktop >1200px, Tablet 768px-1024px, Mobile <768px).
- FCL dürüstlük denetimi: Tüm metinlerin `SRC-01` allowlist sınırına kesin uyumunun doğrulanması.
- Satış demosu hazırlığı: Sıfır konsol hatası, akıcı 60fps mikro-animasyonlar.

### Out of Scope
- Production hosting/domain deployment.
- Sahte backend, CMS veya veritabanı API entegrasyonu.

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260817-002/working-output/
├── index.html
└── src/
    ├── app.js
    ├── config/
    │   └── siteData.js
    ├── styles/
    │   └── main.css
    └── components/
        ├── shell/
        │   ├── Header.js
        │   ├── NavigationDrawer.js
        │   └── Footer.js
        ├── hero/
        │   └── HeroSection.js
        ├── services/
        │   ├── ServicesSection.js
        │   ├── ServiceCard.js
        │   └── ServiceDetailModal.js
        ├── about/
        │   └── AboutSection.js
        └── contact/
            └── ContactBar.js
```

## 8. Implementation Checklist

- [ ] **Task 5.1 (App Orchestrator & Component Mounting)**:
  - **Location**: `src/app.js`
  - **Responsibility**: Dynamic ES6 import ile tüm UI bileşenlerinin yüklenmesi ve DOM mount işleminin tamamlanması.
  - **Parent Capability Relation**: `implementation-of` (`SCP-001`)
  - **Inputs / Contracts**: `getSiteData()` adapter & UI components.
  - **Behavior**: Sayfa yüklendiğinde tüm bölümler sırasıyla render edilir.
  - **Preserve**: No blocking synchronous errors.
  - **Verification**: Browser DOM inspection.
  - **Done**: App orchestrator complete.

- [ ] **Task 5.2 (Responsive Layout & Touch Target Verification)**:
  - **Location**: `src/styles/main.css` & components
  - **Responsibility**: Mobil ekranlarda yatay kayma (horizontal overflow) olmamasının ve tüm butonların en az 44x44px dokunma alanına sahip olmasının doğrulanması.
  - **Parent Capability Relation**: `implementation-of` (`SCP-001`)
  - **Inputs / Contracts**: `DESIGN_RULES.md` responsive principles.
  - **Behavior**: Mobil ve masaüstünde akıcı responsive düzen.
  - **Preserve**: Clean viewport behavior.
  - **Verification**: Chrome DevTools Device Mode audit.
  - **Done**: Responsive QA complete.

- [ ] **Task 5.3 (Sales Demo Quality & FCL Verification)**:
  - **Location**: Entire working-output codebase
  - **Responsibility**: FCL dürüstlük denetimi (uydurma iddia olmadığını doğrulama) ve satış görüşmesinde sorunsuz sunulacak görsel kalitenin teyidi.
  - **Parent Capability Relation**: `implementation-of` (`SCP-006`)
  - **Inputs / Contracts**: `SOURCE_REGISTER.md` FCL allowlist.
  - **Behavior**: Satış görüşmesine hazır, profesyonel kurumsal frontend demo.
  - **Preserve**: Prototype maturity profile.
  - **Verification**: Full manual QA walkthrough.
  - **Done**: Demo QA complete.

## 9. State / Role / Responsive Coverage

- **Cross-Browser & Device Alignment**: Chrome, Edge, Safari ve mobil tarayıcılarda denenmiş layout.
- **Accessibility & Contrast**: Kontrast oranları WCAG AA seviyesinde, klavye gezintisi kesintisiz.
- **Performance & Motion**: Animasyonlar `prefers-reduced-motion` medya sorgusunu destekler.

## 10. Automated Verification

```bash
# Verify complete output directory structure
ls -la working-output/ index.html src/app.js src/styles/main.css src/config/siteData.js
```

## 11. Manual QA / Debug Verification

- `index.html` dosyasını yerel HTTP sunucusunda (`npx serve`) veya tarayıcıda çalıştırıp sıfır konsol uyarısı/hatası olduğunu denetle.
- Mobil görünümde hamburger menüyü açıp kapat, hero CTA butonuna basarak `#services` alanına kaydır, hizmet kartına tıkla ve modal pencereyi kapat.
- Metin içeriklerinde `SRC-01`allowlist dışına çıkan iddia olmadığını teyit et.

## 12. Acceptance / Exit Criteria

- [ ] Tüm UI bileşenleri `src/app.js` üzerinden `index.html`'e hatasız monte edilmiştir.
- [ ] Mobil ve masaüstü görünümlerde yatay taşma (overflow) veya hizalama hatası bulunmamaktadır.
- [ ] FCL dürüstlüğü tamdır; uydurma iddia veya sahte backend yer almamaktadır.
- [ ] Satış demosu (`Prototype`) tamamlanmıştır ve sunuma hazırdır.

## 13. Handoff / Stop Rule

`WAVE_05` tamamlandığında tüm wave planları sonlanmış olur. Proje `PROJ-PLAN` ve operational dokümanların kapanışı aşamasına geçer.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
