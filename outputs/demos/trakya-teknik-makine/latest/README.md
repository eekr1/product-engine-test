# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut kurumsal web sitesini (SITE123 altyapılı www.trakyateknikmakine.com), firmanın Hizmetlerini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve yetkili servis kimliğini (Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi) daha profesyonel, modern ve güven veren bir sunumla yeniden ele alan frontend kurumsal satış demosu projesidir.

## 1. Hızlı Başlangıç (Quick Start)

1. Proje kök dizinindeki static/HTML dosyalarını herhangi bir yerel web sunucusu (ör. Live Server, VS Code Preview veya basit static HTTP server) ile açın.
2. Ana giriş noktası `index.html` dosyasıdır.
3. Sunucu tarafı bağımlılığı veya derleme adımı gerekmez (Clean Vanilla HTML/CSS/JS baseline).

## 2. Çalıştırma Komutları

```bash
# Yerel statik sunucu ile çalıştırma (örnek)
npx serve .
# veya tarayıcıda doğrudan index.html dosyasını açma
```

## 3. Canonical Agent Read Order & Dokümantasyon Haritası

Projeyi inceleyen veya geliştirmeye başlayan AI ajanı/geliştiricisi için zorunlu referans sırası:

1. [README.md](./README.md) — Bu dosya (Giriş noktası ve yönlendirme)
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Proje amacı, kapsamı ve kilit kararlar
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — Ürün davranışları ve kapsam sınırları
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Teknik stack, service boundary ve entegrasyon yapısı
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) — Projeye özgü visual concept, renk paleti ve anti-template kuralları
6. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Roadmap, milestone'lar ve teslim stratejisi
7. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) — 5 aşamalı execution wave yapısı ve bağımlılıklar
8. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Anlık proje durumu ve aktif wave gerçeği
9. [waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md) — Aktif Wave 00 uygulama planı
10. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki görev kuyruğu
11. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) — Ajan çalışma kuralları ve handoff disiplini
12. [ai/DECISIONS.md](./ai/DECISIONS.md) — Kalıcı mimari ve ürün kararları

## 4. Wave Yapısı Özeti

- **WAVE_00**: Foundation & Service Boundary Setup
- **WAVE_01**: Hero & Corporate Trust Surface
- **WAVE_02**: Services Presentation Surface
- **WAVE_03**: Contact & Direct CTA Surface
- **WAVE_04**: Final Cross-Surface QA & Presentation Verification
