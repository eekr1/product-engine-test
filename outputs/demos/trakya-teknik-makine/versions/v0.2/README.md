# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut SITE123 web sitesindeki (`https://www.trakyateknikmakine.com/`) doğrulanmış firma ve hizmet verilerini temel alarak; potansiyel müşteri satış görüşmesinde firmanın yetkinliğini, gücünü ve modern vizyonunu en üst düzeyde yansıtacak yüksek kaliteli bir frontend kurumsal web demosu üretmek.

## 1. Canonical Agent Read Order

Projeyi inceleyen veya yeni bir geliştirme görevine başlayan yetkin bir ajanın dokümanları okuma sırası:

1. [README.md](./README.md) (Bu dosya — Giriş noktası ve gezinti haritası)
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) (Projenin amacı, kapsamı ve genel özet)
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) (İş mantığı, ürün kuralları ve kısıtlamalar)
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) (Frontend mimarisi, data boundary ve entegrasyon kısıtları)
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) (Görsel konsept, renk paleti, tipografi ve anti-template kuralları)
6. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) (Roadmap ve teslimat aşamaları)
7. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) (6 dalgalı execution decomposition haritası)
8. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) (Mevcut durum ve aktif dalga takibi)
9. Aktif Dalga Planı ([waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md))
10. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) (Sıradaki iş listesi ve task detayları)
11. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) (Ajan davranış ve uygulama kuralları)
12. [ai/DECISIONS.md](./ai/DECISIONS.md) (Mimari, ürün ve tasarım kararları)

## 2. Hızlı Başlangıç & Önizleme

Bu proje bir frontend kurumsal demo uygulamasıdır (`delivery_profile: Prototype`).

- Herhangi bir bağımlılık kurulumu (npm/yarn) gerektirmeden `index.html` dosyası doğrudan tarayıcıda açılarak önizlenebilir.
- Veri erişimi `services/companyService.js` arabirimi üzerinden `data/companyData.js` yerel modülü ile sağlanır.

## 3. Dokümantasyon Dizin Haritası

- `ai/`: Proje özeti, kurallar, teknik bağlam, durum, görevler, ajan talimatları ve mimari kararlar.
- `project/`: Proje yol haritası ve teslimat planı.
- `design/`: Tasarım kuralları ve görsel konsept rehberi.
- `waves/`: Execution wave haritası ve detaylı dalga uygulama planları.
