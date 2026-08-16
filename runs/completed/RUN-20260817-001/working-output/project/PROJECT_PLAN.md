# Fizyoterapist Eda Pala Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Bu projenin teslimat stratejisi **"Source-Closed Modular Frontend Prototype"** yaklaşımına dayanmaktadır. Amaç, proaktif satış görüşmesinde Fizyoterapist Eda Pala adını, mesleki unvanını ve Tekirdağ konum bağlamını temsil eden modern, güven veren bir landing page demosu sunmaktır. Sahte backend veya uydurma sağlık iddiaları üretilmeden, local static configuration katmanı ile temiz bir frontend mimarisi inşa edilmektedir.

## 2. Phases / Milestones

- **Milestone 1 (Foundation & Data Boundary - WAVE_00)**: Modüler HTML5/CSS3/JS yapısının ve `content.config.js` adaptör katmanının kurulması.
- **Milestone 2 (Design System & Shell - WAVE_01)**: Design token'larının, Google Fonts Outfit tipografisinin ve responsive layout shell'inin hazırlanması.
- **Milestone 3 (Personal Profile & Hero - WAVE_02)**: Eda Pala ismi ve Fizyoterapist unvanının editoryal Hero layout kompozisyonunda tamamlanması.
- **Milestone 4 (Trust & Outbound CTA - WAVE_03)**: Tekirdağ konum bağlamının ve onaylı Instagram profiline outbound CTA entegrasyonunun tamamlanarak nihai demonun doğrulanması.

## 3. Wave Relationship

Project Plan, yürütme seviyesinde [WAVE_MAP.md](../waves/WAVE_MAP.md) belgesini birebir takip eder:

```text
WAVE_00 (Foundation & Local Config)
   ↓
WAVE_01 (Design System & Layout Shell)
   ↓
WAVE_02 (Hero & Personal Profile)
   ↓
WAVE_03 (Location Context & Outbound Instagram Link)
```

## 4. Dependency Overview

- `WAVE_01` için önkoşul `WAVE_00` temel mimarisi.
- `WAVE_02` için önkoşul `WAVE_01` layout shell ve CSS token'ları.
- `WAVE_03` için önkoşul `WAVE_02` Hero bileşeni.

## 5. Deliverables

- **Kapsam İçi Teslimatlar**: `index.html`, `styles/tokens.css`, `styles/main.css`, `styles/components.css`, `src/config/content.config.js`, `src/adapters/contentAdapter.js`, `src/app.js`.
- **Dokümantasyon Paketi**: Root README, PROJECT_BRAIN, PRODUCT_RULES, TECH_CONTEXT, DESIGN_RULES, WAVE_MAP, WAVE_PLAN (00..03), PROJECT_PLAN, CURRENT_STATUS, NEXT_TASKS, AGENT_INSTRUCTIONS, DECISIONS.

## 6. Acceptance Conditions

- [x] Satış görüşmesinde gösterilecek modern visual direction sağlandı.
- [x] Factual veriler (`Eda Pala`, `Fizyoterapist`, `Tekirdağ`, Instagram URL) exact `SOURCE_REGISTER` allowlist ile uyumlu.
- [x] Kaynak dışı hiçbir tedavi, uzmanlık, adres, telefon veya randevu uydurması yapılmadı.
- [x] Outbound Instagram linki `target="_blank" rel="noopener noreferrer"` ile çalışıyor.

## 7. Scope Growth / Upgrade Boundaries

- **Gelecek Kapsam (Müşteri Onayı Sonrası)**: Müşteri ile yapılacak görüşme sonrasında gerçek hizmet listeleri, detaylı biyografi, klinik adresi, iletişim kanalları, randevu sistemi veya backend entegrasyonu onaylandığı takdirde ayrı bir input sürümü ve engine run'ı ile eklenecektir.
