# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın doğrulanmış hizmetlerini ve Disan Hidrolik yetkili servis kimliğini koruyarak, satış görüşmesinde gösterilmek üzere modern, profesyonel ve yüksek kaliteli bir frontend demo ile yenileme projesidir.

---

## 1. Hızlı Başlangıç (Quick Start)

Bu proje satış amaçlı bir frontend demo olup, hafif ve performanslı local preview mimarisine sahiptir.

1. Proje ana dizininde `index.html` dosyasını doğrudan tarayıcıda açabilir veya yerel bir statik sunucu (ör. VS Code Live Server veya `npx serve`) kullanabilirsiniz.
2. Veriler `data/companyData.js` mock service katmanı üzerinden çekilmektedir.
3. Tasarım kuralları `styles/tokens.css` ve `styles/main.css` içinde CSS değişkenleri olarak tanımlanmıştır.

---

## 2. Çalıştırma ve Önizleme Komutları

Exact stack henüz unresolved/local preview aşamasında olduğu için yerel statik sunucu veya doğrudan tarayıcı açılışı desteklenmektedir:

```bash
# Yerel statik sunucu ile önizleme (opsiyonel)
npx serve .
```

---

## 3. Kanonik Dokümantasyon Okuma Sırası (Agent Read Order)

Projeye yeni katılan bir geliştirici veya AI ajanın izlemesi gereken referans okuma sırası:

1. [README.md](./README.md) — Bu dosya (Giriş ve doküman haritası)
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Proje kimliği, amaç ve özet
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — Ürün iş kuralları ve kısıtlamalar
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Mimari, stack ve integration readiness
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) — Visual concept ve tasarım kuralları
6. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Üst seviye teslimat haritası
7. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) — Dalga planlama sırası
8. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Aktif wave ve mevcut durum
9. Aktif Wave Planı: [waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md)
10. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki somut görevler
11. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) — Ajan çalışma talimatları
12. [ai/DECISIONS.md](./ai/DECISIONS.md) — Mimari ve ürün kararları

---

## 4. Doküman Yapısı

```text
/
├── README.md
├── ai/
│   ├── PROJECT_BRAIN.md
│   ├── PRODUCT_RULES.md
│   ├── TECH_CONTEXT.md
│   ├── CURRENT_STATUS.md
│   ├── NEXT_TASKS.md
│   ├── AGENT_INSTRUCTIONS.md
│   └── DECISIONS.md
├── project/
│   └── PROJECT_PLAN.md
├── design/
│   └── DESIGN_RULES.md
└── waves/
    ├── WAVE_MAP.md
    └── plans/
        ├── WAVE_00.md
        ├── WAVE_01.md
        ├── WAVE_02.md
        └── WAVE_03.md
```
