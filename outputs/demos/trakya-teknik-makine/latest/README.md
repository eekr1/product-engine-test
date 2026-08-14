# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki (trakyateknikmakine.com) gerçek firma bilgilerini, Disan Hidrolik yetkili servislik vurgusunu ve 3 ana hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) koruyarak hazırlanan modern kurumsal frontend satış demosu dokümantasyon paketidir.

---

## 1. Hızlı Başlangıç (Quick Start)

Bu dokümantasyon paketi, herhangi bir AI ajanı veya geliştirici tarafından doğrudan okunup koda dönüştürülebilecek biçimde standartlaştırılmıştır (`implementation_planning: standard`, `design_planning: light`).

Ajan Okuma Sırası (Agent Read Order):
1. `README.md` (Bu dosya — Giriş ve harita)
2. `ai/PROJECT_BRAIN.md` (Projenin amacı, kapsamı ve karar özeti)
3. `ai/PRODUCT_RULES.md` (Ürün davranış ve UX kuralları)
4. `ai/TECH_CONTEXT.md` (Frontend teknik stack ve mock adapter mimarisi)
5. `design/DESIGN_RULES.md` (Görsel konsept, tipografi, renk, spacing ve responsive ilkeleri)
6. `project/PROJECT_PLAN.md` (Fazlar ve teslimat yaklaşımı)
7. `waves/WAVE_MAP.md` (Dalga haritası ve bağımlılık matrisi)
8. `ai/CURRENT_STATUS.md` (Aktif dalga ve durum)
9. `waves/plans/WAVE_00.md` .. `WAVE_05.md` (Sırasıyla dalga uygulama planları)
10. `ai/NEXT_TASKS.md` (Sıradaki görevler)
11. `ai/AGENT_INSTRUCTIONS.md` (Ajan çalışma ilkeleri)
12. `ai/DECISIONS.md` (Mimari ve teknik kararlar)

---

## 2. Çalıştırma Komutları

```bash
# Bağımlılıkları yükleme ve yerel önizleme ortamını başlatma
npm install
npm run dev
```

> **Not:** Demo aşamasında backend API bulunmamaktadır. Veriler `local mock adapter` katmanından sağlanmaktadır. Teknik detaylar için bkz: [TECH_CONTEXT.md](./ai/TECH_CONTEXT.md).

---

## 3. Ana Dokümantasyon Haritası

- [PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Proje Amacı ve Karar Özeti
- [PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — Ürün ve Kapsam Kuralları
- [TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Teknik Mimari ve Integration Readiness
- [DESIGN_RULES.md](./design/DESIGN_RULES.md) — Görsel ve Tasarım Kuralları
- [PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Proje ve Teslimat Planı
- [WAVE_MAP.md](./waves/WAVE_MAP.md) — Execution Waves Haritası
- [CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Mevcut Durum Takibi
- [NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki Görevler
- [AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) — Ajan Çalışma Talimatları
- [DECISIONS.md](./ai/DECISIONS.md) — Önemli Kararlar Kaydı
