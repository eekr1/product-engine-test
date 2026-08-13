# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut kurumsal web sitesini (SITE123), firmanın uzmanlığını, yetkili servis statüsünü (Disan Hidrolik Trakya Bölge Yetkili Servisi) ve 3 ana hizmetini (Yedek Parça Temini, Yerinde Destek, Bakım-Onarım) modern, responsive ve yüksek kaliteli bir kurumsal frontend demo ile yeniden sunan Product Engine dokümantasyon paketidir.

---

## 1. Canonical Agent Read Order (Okuma Sırası)

Projede görev alacak geliştirici veya AI ajanlarının takip etmesi gereken kanonik okuma sırası:

1. [README.md](./README.md) — Bu belge (Kök giriş noktası)
2. [ai/PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) — Proje vizyonu, kapsamı ve kimliği
3. [ai/PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) — Doğrulanmış firma bilgileri ve ürün kuralları
4. [ai/TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) — Mimari sınırlar ve clean service/data boundary
5. [design/DESIGN_RULES.md](./design/DESIGN_RULES.md) — Visual concept, renk paleti, tipografi ve UX ilkeleri
6. [project/PROJECT_PLAN.md](./project/PROJECT_PLAN.md) — Teslimat aşamaları ve milestone'lar
7. [waves/WAVE_MAP.md](./waves/WAVE_MAP.md) — Uygulama dalgaları haritası
8. [ai/CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) — Anlık proje durumu ve aktif wave
9. [waves/plans/WAVE_00.md](./waves/plans/WAVE_00.md) — Aktif wave planı (Foundation & Data Boundary)
10. [ai/NEXT_TASKS.md](./ai/NEXT_TASKS.md) — Sıradaki somut görevler
11. [ai/AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) — Ajan çalışma talimatları
12. [ai/DECISIONS.md](./ai/DECISIONS.md) — Proje karar kayıtları ve provenance

---

## 2. Hızlı Başlangıç & Çalıştırma Rehberi

Demo modüler Vanilla HTML5 / CSS3 ve JavaScript (ES6 Modülleri) standartlarında hazırlanmıştır. Ağır paket yöneticisi veya derleme adımı gerektirmez.

### Lokal Çalıştırma

1. Proje kök dizininde herhangi bir statik web sunucusu başlatın (örneğin Python ile: `python -m http.server 8000` veya VS Code Live Server).
2. Tarayıcıda `http://localhost:8000` adresini açın.
3. Uygulamanın hatasız yüklendiğini ve `CompanyService` mock verilerinin ekrana basıldığını gözlemleyin.

---

## 3. Doküman Klasör Haritası

```text
outputs/demos/trakya-teknik-makine/latest/
├── README.md                           # Bu dosya
├── ai/
│   ├── PROJECT_BRAIN.md                # Proje ozeti ve vizyonu
│   ├── PRODUCT_RULES.md                # Doğrulanmış firma verileri ve ürün kuralları
│   ├── TECH_CONTEXT.md                 # Mimari & Clean Data Service Boundary
│   ├── CURRENT_STATUS.md               # Aktif wave & faz takibi
│   ├── NEXT_TASKS.md                   # Sıradaki uygulanabilir görevler
│   ├── AGENT_INSTRUCTIONS.md           # Model-bağımsız ajan talimatları
│   └── DECISIONS.md                    # Provenance destekli karar kayitlari
├── project/
│   └── PROJECT_PLAN.md                 # Teslimat yol haritası ve milestone'lar
├── design/
│   └── DESIGN_RULES.md                 # Projeye ozgün Visual Concept & UX kuralları
└── waves/
    ├── WAVE_MAP.md                     # Uygulama dalgaları haritası
    └── plans/
        ├── WAVE_00.md                  # Active Wave Plan (Foundation & Data Boundary)
        ├── WAVE_01.md                  # Wave Plan (Corporate Shell & Trust)
        └── WAVE_02.md                  # Wave Plan (Services & Demo Verification)
```

---

## 4. Kalite ve Sınır İlkeleri

- **Profile Depth ≠ Quality Level**: Demo olgunluğu `Prototype` seviyesindedir; ancak kod ve mimari kalite tabanı düşürülemez.
- **Integration Readiness**: Yerel mock veri katmanı presentation bileşenlerinden soyutlanmıştır. Gelecekte gerçek backend bağlandığında presentation katmanı yeniden yazılmaz.
- **Doğrulanmış Gerçeklik**: Mevcut web sitesinde açıkça bulunmayan firma iddiaları uydurulmamıştır.
