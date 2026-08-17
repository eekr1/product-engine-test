# Trakya Teknik Makine Kurumsal Web Sitesi Demo

Trakya Teknik Makine'nin firma ve hizmet bilgilerini profesyonel, modern ve güven veren çok sayfalı kurumsal web sitesi satış demosu (`corporate-website`) olarak sunan canonical agent-ready projesidir.

## 1. Hızlı Başlangıç (Quick Start)

1. Depoyu klonlayın veya çalışma alanında açın.
2. Bağımlılıkları yükleyin: `npm install`
3. Geliştirme sunucusunu başlatın: `npm run dev`
4. Tarayıcıda açın: `http://localhost:5173`
5. Üretim sürümünü derleyin: `npm run build`
6. Önizleme yapın: `npm run preview`

## 2. Çalıştırma Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## 3. Ana Dokümantasyon Haritası

Projeye yeni katılan geliştirici veya ajan için önerilen canonical okuma sırası:

1. [README.md](./README.md) — Proje giriş noktası ve hızlı başlangıç
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Proje kimliği, problem, kapsam ve karar özeti
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — Ürün davranış kuralları, kapsam sınırları ve UX kısıtları
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Teknoloji yığını, mimari kararlar ve rotalama yaklaşımı
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) — Görsel konsept, anti-template ilkeleri ve tasarım dili
6. [design/DESIGN_SYSTEM.md](./design/DESIGN_SYSTEM.md) — Tasarım token'ları, tipografi, renkler ve primitive'ler
7. [design/GLOBAL_SHELL.md](./design/GLOBAL_SHELL.md) — Global düzen, nav kayıtları ve responsive kabuk
8. Sayfa Tasarım Paketleri:
   - [design/pages/HOME_DESIGN_PACKAGE.md](./design/pages/HOME_DESIGN_PACKAGE.md) (`PAGE-001`)
   - [design/pages/KURUMSAL_DESIGN_PACKAGE.md](./design/pages/KURUMSAL_DESIGN_PACKAGE.md) (`PAGE-002`)
   - [design/pages/HIZMETLER_DESIGN_PACKAGE.md](./design/pages/HIZMETLER_DESIGN_PACKAGE.md) (`PAGE-003`)
   - [design/pages/YEDEK_PARCA_TEMINI_DESIGN_PACKAGE.md](./design/pages/YEDEK_PARCA_TEMINI_DESIGN_PACKAGE.md) (`PAGE-004`)
   - [design/pages/YERINDE_TEKNIK_DESTEK_DESIGN_PACKAGE.md](./design/pages/YERINDE_TEKNIK_DESTEK_DESIGN_PACKAGE.md) (`PAGE-005`)
   - [design/pages/MAKINE_BAKIM_ONARIM_DESIGN_PACKAGE.md](./design/pages/MAKINE_BAKIM_ONARIM_DESIGN_PACKAGE.md) (`PAGE-006`)
   - [design/pages/ILETIM_DESIGN_PACKAGE.md](./design/pages/ILETIM_DESIGN_PACKAGE.md) (`PAGE-007`)
9. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Teslimat stratejisi ve fazlar
10. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) — Dalga mimarisi ve sayfa kapsam haritası
11. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Anlık execution ve aktif dalga durumu
12. Aktif Dalga Planları:
    - [waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md) — Foundation & Engineering Baseline
    - [waves/plans/WAVE_01.md](./waves/plans/WAVE_01.md) — Global Shell & Navigation Architecture
    - [waves/plans/WAVE_02.md](./waves/plans/WAVE_02.md) — Home & Corporate Pages
    - [waves/plans/WAVE_03.md](./waves/plans/WAVE_03.md) — Services Overview & Detail Pages
    - [waves/plans/WAVE_04.md](./waves/plans/WAVE_04.md) — Contact Page & Direct Contact Capabilities
    - [waves/plans/WAVE_05.md](./waves/plans/WAVE_05.md) — Cross-Page Responsive Integration & Quality QA
13. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki somut görevler kuyruğu
14. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) — Ajan çalışma ve doğrulama kuralları
15. [ai/DECISIONS.md](./ai/DECISIONS.md) — Kalıcı mimari, ürün ve tasarım kararları
