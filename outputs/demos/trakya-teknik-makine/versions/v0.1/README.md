# Trakya Teknik Makine Kurumsal Web Sitesi Demo

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren çok sayfalı kurumsal web sitesi satış demosu olarak sunan frontend projesidir. Firma kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini 7 ayrı routable sayfa üzerinden sunar.

## 1. Hızlı Başlangıç (Quick Start)

Proje Vite + React + TypeScript baseline üzerinde package-managed olarak yapılandırılmıştır.

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev

# 3. Üretim derlemesini doğrulayın
npm run build

# 4. Derlenmiş önizlemeyi çalıştırın
npm run preview
```

## 2. Çalıştırma Komutları

- `npm run dev`: Yerel geliştirme dev sunucusunu başlatır (Vite).
- `npm run build`: TypeScript derlemesi ve Vite production build paketlemesi yapar.
- `npm run preview`: Üretim çıktısını yerelde önizler.

## 3. Ana Dokümantasyon Haritası ve Agent Read Order

Ajanlar ve geliştiriciler projeyi anlamak ve çalıştırmak için aşağıdaki sıralı okuma düzenini takip etmelidir:

1. [README.md](./README.md) — Giriş noktası ve okuma rehberi (Bu belge)
2. [PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Proje bağlamı, amaç ve 7 sayfalı approved architecture
3. [PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — Ürün kuralları, kapsam sınırları ve FCL yasakları
4. [TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Teknik stack, continuation gate, routing ve service boundary
5. [DESIGN_RULES.md](./design/DESIGN_RULES.md) — Görsel dil, kurumsal kimlik ve endüstriyel estetik
6. [DESIGN_SYSTEM.md](./design/DESIGN_SYSTEM.md) — Tasarım token'ları, renk rolleri (antrasit/amber) ve typography
7. [GLOBAL_SHELL.md](./design/GLOBAL_SHELL.md) — Global responsive shell ve 7-page navigation yapısı
8. [PAGE-DESIGN Packages](./design/pages/) — 7 ayrı onaylı sayfa tasarım sözleşmesi
   - [HOME_DESIGN_PACKAGE.md](./design/pages/HOME_DESIGN_PACKAGE.md) (`PAGE-001`)
   - [CORPORATE_DESIGN_PACKAGE.md](./design/pages/CORPORATE_DESIGN_PACKAGE.md) (`PAGE-002`)
   - [SERVICES_DESIGN_PACKAGE.md](./design/pages/SERVICES_DESIGN_PACKAGE.md) (`PAGE-003`)
   - [SERVICE_DETAIL_SPARE_PARTS_DESIGN_PACKAGE.md](./design/pages/SERVICE_DETAIL_SPARE_PARTS_DESIGN_PACKAGE.md) (`PAGE-004`)
   - [SERVICE_DETAIL_ONSITE_SUPPORT_DESIGN_PACKAGE.md](./design/pages/SERVICE_DETAIL_ONSITE_SUPPORT_DESIGN_PACKAGE.md) (`PAGE-005`)
   - [SERVICE_DETAIL_MAINTENANCE_REPAIR_DESIGN_PACKAGE.md](./design/pages/SERVICE_DETAIL_MAINTENANCE_REPAIR_DESIGN_PACKAGE.md) (`PAGE-006`)
   - [CONTACT_DESIGN_PACKAGE.md](./design/pages/CONTACT_DESIGN_PACKAGE.md) (`PAGE-007`)
9. [PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Uygulama planı ve wave teslimat sırası
10. [WAVE_MAP.md](./waves/WAVE_MAP.md) — 5 wave'lik kapsam haritası
11. [CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Güncel proje ve wave durumu
12. [WAVE Plans](./waves/plans/) — Wave uygulama planları (`WAVE_00.md` .. `WAVE_04.md`)
13. [NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki uygulanabilir görevler
14. [AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) & [DECISIONS.md](./ai/DECISIONS.md) — Ajan çalışma kuralları ve kararlar
