# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki doğrulanmış firma, yetkili servis ve hizmet içeriklerini koruyarak, potansiyel satış görüşmesinde firmaya sunulabilecek modern, güvenilir ve yüksek kaliteli kurumsal frontend demo dokümantasyon ve uygulama paketidir.

## 1. Hızlı Başlangıç (Quick Start)

Bu çalışma client-side modüler kurumsal web uygulamasıdır. Herhangi bir veritabanı veya karmaşık sunucu kurulumu gerektirmez.

1. Proje kök dizinindeki `index.html` dosyasını doğrudan bir web tarayıcısında açın veya yerel bir statik web sunucusu (VS Code Live Server, `npx serve` vb.) başlatın.
2. `CompanyService` veri katmanı varsayılan olarak `LocalCompanyAdapter` üzerinden lokal mock verileri yükler.

## 2. Çalıştırma ve Önizleme

```bash
# Yerel statik sunucu ile çalıştırmak için (isteğe bağlı):
npx serve .
```

## 3. Ana Dokümantasyon Haritası ve Agent Read Order

Projeye yeni katılan geliştirici veya AI ajanı için tavsiye edilen okuma sırası:

1. [README.md](./README.md) (Bu dosya — Başlangıç noktası)
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) (Proje bağlamı, amaç ve kapsam özeti)
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) (Ürün iş kuralları ve kısıtlamalar)
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) (Teknoloji yığını ve data/service boundary)
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) (Endüstriyel görsel kimlik ve tasarım kuralları)
6. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) (Teslimat stratejisi ve roadmap)
7. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) (Bağımsız delivery wave haritası)
8. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) (Aktif durum ve tamamlanan işler)
9. [waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md) (Aktif dalga uygulama planı)
10. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) (Sıradaki görevler)
11. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) (Ajan çalışma direktifleri)
12. [ai/DECISIONS.md](./ai/DECISIONS.md) (Önemli mimari ve ürün kararları)
