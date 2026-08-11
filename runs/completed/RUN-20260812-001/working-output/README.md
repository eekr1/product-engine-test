# Trakya Teknik Makine — Kurumsal Web Sitesi Yenileme Demo

Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki doğrulanmış firma bilgilerini, 3 ana hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve Disan Hidrolik yetkili servis partnerliğini öne çıkaran modern, responsive kurumsal web sitesi frontend demosu.

## 1. Hızlı Başlangıç (Quick Start)

Bu proje sıfır dış bağımlılıklı (zero-dependency) HTML5, CSS3 ve ES6+ JavaScript mimarisinde geliştirilmiştir.

1. Proje ana klasörüne gidin.
2. `index.html` dosyasını herhangi bir modern web tarayıcısında (Chrome, Firefox, Edge, Safari) doğrudan açın.
3. Veya hafif bir HTTP sunucusu çalıştırmak isterseniz:
   ```bash
   npx serve .
   ```
   ya da Python HTTP sunucusu ile:
   ```bash
   python -m http.server 8000
   ```

## 2. Kanonik Ajan Okuma Sırası (Agent Read Order)

Bu dokümantasyon paketine bağlanan yeni bir geliştirici veya AI ajan sırasıyla şu belgeleri okumalıdır:

1. [README.md](./README.md) (Bu giriş belgesi)
2. [PROJECT_BRAIN.md](./ai/PROJECT_BRAIN.md) (Proje özeti ve kimliği)
3. [PRODUCT_RULES.md](./ai/PRODUCT_RULES.md) (İş mantığı ve ürün kuralları)
4. [TECH_CONTEXT.md](./ai/TECH_CONTEXT.md) (Teknoloji yığını ve data boundary)
5. [DESIGN_RULES.md](./design/DESIGN_RULES.md) (Özgün tasarım sistemi ve renk paleti)
6. [PROJECT_PLAN.md](./project/PROJECT_PLAN.md) (Teslim yol haritası)
7. [WAVE_MAP.md](./waves/WAVE_MAP.md) (Execution wave haritası)
8. [CURRENT_STATUS.md](./ai/CURRENT_STATUS.md) (Anlık durum ve aktif wave)
9. [WAVE_00.md](./waves/plans/WAVE_00.md) (Aktif wave planı)
10. [NEXT_TASKS.md](./ai/NEXT_TASKS.md) (Sıradaki uygulanabilir görevler)
11. [AGENT_INSTRUCTIONS.md](./ai/AGENT_INSTRUCTIONS.md) (Ajan çalışma talimatları)
12. [DECISIONS.md](./ai/DECISIONS.md) (Alınan kararlar)

## 3. Klasör Yapısı

```text
├── README.md                  # Giriş ve rehberlik belgesi
├── ai/                        # Ürün, teknik ve durum belgeleri
│   ├── PROJECT_BRAIN.md
│   ├── PRODUCT_RULES.md
│   ├── TECH_CONTEXT.md
│   ├── CURRENT_STATUS.md
│   ├── NEXT_TASKS.md
│   ├── AGENT_INSTRUCTIONS.md
│   └── DECISIONS.md
├── design/                    # Tasarım sistemi belgeleri
│   └── DESIGN_RULES.md
├── project/                   # Proje teslim planları
│   └── PROJECT_PLAN.md
└── waves/                     # Execution wave haritası ve planları
    ├── WAVE_MAP.md
    └── plans/
        ├── WAVE_00.md
        ├── WAVE_01.md
        └── WAVE_02.md
```
