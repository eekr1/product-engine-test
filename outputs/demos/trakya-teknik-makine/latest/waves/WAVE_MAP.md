# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Bağımsız Teslim Odaklılık**: Her dalga (wave) kendi başına anlamlı, bağımsız olarak derlenebilir, test edilebilir ve doğrulanabilir bir yazılım ve dokümantasyon çıktısı üretir.
- **Service Boundary Önceliği**: Arayüz geliştirmeden önce mock service adapter katmanı tamamlanır (`hardcoded UI component forbidden`).
- **Clean Granularity**: Foundation, Visual System & Shell, Interactive Sections ve Final Integration & QA birbirini izleyen açık dalgalara ayrılmıştır.

## 2. Wave Map Summary

| Wave ID | Wave Adı | Amacı ve Scope | Bağımlılık | Deliverables | Dynamic Instance Path |
|---|---|---|---|---|---|
| `WAVE_00` | Foundation & Data-Access Boundary Setup | Vite+React ortamı, CSS Design Tokens (`tokens.css`), Dondurulmuş Mock Veri Nesneleri (`mockData.js`) ve Service Adapters (`companyService.js`, `contactService.js`). | Yok | Vite/React Scaffold, Tokens, Mock Adapters | `waves/plans/WAVE_00.md` |
| `WAVE_01` | Core Layout Shell & Visual System | Header/Nav, Footer, Mobile Drawer, Buttons, Cards, Badges, Hero Section & Brand Identity primitives. | `WAVE_00` | Responsive Shell, Theme System, Hero Component | `waves/plans/WAVE_01.md` |
| `WAVE_02` | Interactive Demo Sections, Services & Contact Flows | Hakkımızda, 3 Ana Hizmet Kartı/Detayları, Disan Hidrolik Yetkili Servis vurgusu, İletişim Formu (client-side handler) ve Final Presentation QA. | `WAVE_01` | Interactive Demo App, Completed Content Sections, Final QA | `waves/plans/WAVE_02.md` |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary Setup)
    │
    ▼
WAVE_01 (Core Layout Shell & Visual Concept Primitives)
    │
    ▼
WAVE_02 (Interactive Demo Sections, Services & Contact Flows + Final QA)
```

## 4. Wave Entries

### WAVE_00 — Foundation & Data-Access Boundary Setup
- **Goal**: Projenin teknik altyapısını, CSS Design Tokens mimarisini ve mock service adapter katmanını kurmak.
- **Deliverables**: Vite+React projesi, `src/styles/tokens.css`, `src/data/mockData.js`, `src/services/companyService.js`, `src/services/contactService.js`.
- **Exit Criteria**: `npm run dev` hatasız başlamalı, mock service unit seviyesinde test edilmeli.

### WAVE_01 — Core Layout Shell & Visual System
- **Goal**: Mobil uyumlu ana çerçeveyi (Header, Footer, Nav, Drawer) ve projenin özgün endüstriyel visual concept primitives (Hero, Buttons, Cards, Badges) katmanını geliştirmek.
- **Deliverables**: `src/components/layout/`, `src/components/ui/`, `src/components/sections/Hero.jsx`.
- **Exit Criteria**: Layout mobil ve masaüstü ekranlarda kırılmadan render olmalı, amber accent ve dark slate teması görünür olmalı.

### WAVE_02 — Interactive Demo Sections, Services & Contact Flows
- **Goal**: Hakkımızda, 3 Ana Hizmet (Yedek Parça, Yerinde Destek, Bakım/Onarım), Disan Hidrolik Yetkili Servisliği ve İletişim Formu etkileşimini tamamlayıp proaktif satış sunumu için hazır hale getirmek.
- **Deliverables**: `src/components/sections/Services.jsx`, `About.jsx`, `DealerBadge.jsx`, `ContactForm.jsx`.
- **Exit Criteria**: Tüm sayfalar/bölümler mock service verisiyle sorunsuz çalışmalı, form client-side doğrulama yapmalı, static build (`npm run build`) uyarısız alınmalıdır.

## 5. Cross-Wave Invariants

- **No Hardcoded UI**: Hiçbir wave sırasında metinler JSX içine sabit gömülemez; `src/services/` üzerinden okunmalıdır.
- **Anti-Template Rule**: Sektör klişesi lacivert tema yerine endüstriyel kehribar & antresit paleti korunmalıdır.
- **Build Cleanliness**: Her wave sonunda `npm run build` hatasız tamamlanmalıdır.

## 6. Global Exit / Handoff Rules

- Proje tamamlandığında `outputs/demos/trakya-teknik-makine/latest/` altında tüm dokümantasyon güncellenmeli ve ajanın koda doğrudan devam edebileceği dynamic `WAVE_PLAN` kopyaları sunulmalıdır.
