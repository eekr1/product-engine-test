# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın kimliğini, yetkili servisliğini (Disan Hidrolik) ve üç temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) daha güçlü, modern ve güven veren bir görsel/teknik deneyimle sunan satış amaçlı frontend demo projesidir.

---

## 1. Hızlı Başlangıç (Quick Start)

1. Proje deposunu klonlayın veya çalışma dizinine geçin.
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu (preview server) başlatın:
   ```bash
   npm run dev
   ```
4. Tarayıcınızda `http://localhost:5173` adresini açarak frontend demoyu görüntüleyin.

---

## 2. Çalıştırma Komutları

```bash
# Bağımlılıkları yükleme
npm install

# Yerel geliştirme ve önizleme sunucusunu başlatma
npm run dev

# Frontend demo build alma (static bundle üretimi)
npm run build

# Üretilen statik demoyu önizleme
npm run preview
```

---

## 3. Ana Dokümantasyon Haritası & Ajan Okuma Sırası

Bir ajan veya geliştirici proje üzerinde çalışmaya başlarken kanonik referans okuma sırası:

1. [README.md](./README.md) — Proje giriş noktası ve doküman haritası (Bu dosya)
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Projenin amacı, sınırları, hedef kitlesi ve mental modeli
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — İş kuralları, içerik doğrulama ve kapsam sınırları
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Mimari yapı, Vite+React stack'i, service boundary ve mock adapter mimarisi
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) — Projeye özgü visual concept, tipografi, renk paleti ve anti-template kuralları
6. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Genel uygulama planı ve aşamalar
7. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) — Execution dalgaları ve bağımlılık haritası
8. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Projenin anlık durumu
9. [waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md) — Dalga 0: Altyapı & Service Boundary Kurulum Planı
10. [waves/plans/WAVE_01.md](./waves/plans/WAVE_01.md) — Dalga 1: Core Layout Shell & Design System Planı
11. [waves/plans/WAVE_02.md](./waves/plans/WAVE_02.md) — Dalga 2: Etkileşimli Bölümler & Demo Akışları Planı
12. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki görevler
13. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) — Ajan çalışma talimatları ve kalite kriterleri
14. [ai/DECISIONS.md](./ai/DECISIONS.md) — Alınan önemli ürün ve mimari kararlar
