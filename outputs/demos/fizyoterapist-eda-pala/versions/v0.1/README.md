# Fizyoterapist Eda Pala Web Sitesi Demo

Tekirdağ'daki Fizyoterapist Eda Pala için, mevcut doğrulanmış sınırlı bilgilerle (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) çalışan; modern, güven veren ve profesyonel bir frontend web sitesi demosu. Müşteri görüşmesinde sunulacak proaktif satış demosu niteliğindedir.

## 1. Hızlı Başlangıç (Quick Start)

Bu proje harici runtime bağımlılığı gerektirmeyen modüler frontend mimarisine sahiptir.

1. Proje kök dizininde `index.html` dosyasını tarayıcıda doğrudan açın veya herhangi bir lokal HTTP dev server (`npx serve`, `live-server` vb.) ile çalıştırın.
2. Tüm içerik ve factual veriler [js/siteConfig.js](./js/siteConfig.js) statik veri adaptörü üzerinden okunmaktadır.

## 2. Çalıştırma Komutları

```bash
# Herhangi bir lokal HTTP sunucusu ile preview çalıştırmak için:
npx serve ./

# Veya Python dahili sunucusu ile:
python -m http.server 8000
```

## 3. Canonical Agent Read Order & Dokümantasyon Haritası

Projeye yeni katılan geliştirici veya AI ajanı dokümanları şu sırayla okumalıdır:

1. [README.md](./README.md) — Bu dosya (giriş noktası ve rehber)
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Proje amacı, dondurulmuş kapsam ve factual allowlist
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — Ürün davranış kuralları ve limited-source/health-domain guardrails
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Frontend preview mimarisi ve `siteConfig` veri adaptörü
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) — Görsel estetik, renk paleti, tipografi ve responsive kurallar
6. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Teslim stratejisi ve fazlar
7. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) — Ana dalga haritası (`WAVE_00` .. `WAVE_03`)
8. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Aktif wave ve mevcut proje durumu
9. [waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md) — Aktif wave planı (Setup & Preview Foundation)
10. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki eylemler listesi
11. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) — Ajan çalışma talimatları
12. [ai/DECISIONS.md](./ai/DECISIONS.md) — Mimari ve ürün kararları
