# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

- **Approach**: Modüler frontend presentation mimarisi. Proje, satış görüşmelerinde proaktif biçimde sunulmak üzere hazırlanan bir kurumsal frontend landing page demosudur (`delivery_profile: Prototype`, `implementation_planning: standard`).
- **Focus**: İlk 5 saniyede firma uzmanlığını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve üç onaylı hizmeti net sunmak, direct-contact CTA'larına erişim sağlamak.
- **Architecture Constraint**: Presentation bileşenleri doğrudan hardcode veri yerine local data access boundary (`siteData.js`) üzerinden beslenir.

## 2. Phases / Milestones

- **Phase 1: Foundation & Architecture (WAVE_00)**
  - Milestone: CSS design tokens, HTML shell ve `siteData.js` adapter katmanı hazır.
- **Phase 2: Global Shell & Brand Positioning (WAVE_01 - WAVE_02)**
  - Milestone: Header, mobil drawer, footer ve Hero bölümü (Disan yetkili servis rozeti & CTA'lar) tamamlandı.
- **Phase 3: Core Services & Corporate Presentation (WAVE_03 - WAVE_04)**
  - Milestone: Üç onaylı hizmet kartları/modalları, kurumsal tanıtım ve direct-contact telefon/e-posta aksiyon yüzeyi kuruldu.
- **Phase 4: Assembly, Responsive & Quality QA (WAVE_05)**
  - Milestone: Tüm bileşenler `index.html` üzerinde entegre edildi, mobil/masaüstü responsive uyum ve satış demosu kalitesi doğrulandı.

## 3. Wave Relationship

```text
WAVE_00 (Foundation & Config) 
  → WAVE_01 (Header/Footer Shell) 
  → WAVE_02 (Hero & Status Section) 
  → WAVE_03 (Services Showcase) 
  → WAVE_04 (Corporate & Contact Bar) 
  → WAVE_05 (Integration & QA)
```

## 4. Dependency Overview

- `WAVE_01` relies on `WAVE_00` CSS tokens & HTML shell.
- `WAVE_02` relies on `WAVE_01` Header shell.
- `WAVE_03` relies on `WAVE_02` Hero area.
- `WAVE_04` relies on `WAVE_03` Services area.
- `WAVE_05` relies on `WAVE_00..WAVE_04` completed components.

## 5. Deliverables

- Clean agent-ready documentation package (`outputs/demos/trakya-teknik-makine/latest/`).
- Interactive frontend prototype codebase (`index.html`, `src/config/siteData.js`, `src/styles/main.css`, `src/components/**/*.js`).

## 6. Acceptance Conditions

- [ ] Demo ilk bakışta modern, profesyonel ve teknik güven veren bir kurumsal kimlik sunmalıdır.
- [ ] Firma adı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ve üç onaylı hizmet net anlaşılmalıdır.
- [ ] Direct-contact telefon/e-posta butonları sorunsuz çalışmalıdır.
- [ ] Source-backed olmayan hiçbir kurgusal iddia koda gömülmemelidir.

## 7. Scope Growth / Upgrade Boundaries

- **Future Phase (Müşteri Onayı Sonrası)**: Müşteriden doğrulanmış adres, telefon, e-posta, çalışma saatleri, referanslar sağlandığında ve backend/CMS/harita entegrasyonu talep edildiğinde yeni approved `PROJECT_INPUT` versiyonu ile sonraki geliştirme fazına geçilecektir.
