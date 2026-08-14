# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projede çalışmaya başlayan herhangi bir AI ajan (Codex, Claude, Gemini, GPT vb.) veya insan geliştirici aşağıdaki sırayı takip etmelidir:

1. [README.md](../README.md) — Proje giriş noktası ve genel özet
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje kimliği, amacı, kitleler ve mimari özet
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — İş kuralları ve kısıtlamalar
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Teknoloji yığını, Vite+React ve service boundary mimarisi
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Projeye özgü visual concept, tipografi ve anti-template ilkeleri
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Proje fazları
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Execution dalgaları ve bağımlılık haritası
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Projenin anlık durumu ve aktif dalga
9. [waves/plans/WAVE_00.md](../waves/plans/WAVE_00.md) — Aktif dalga uygulama planı
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Sıradaki somut görevler

## 2. Agent Behavior Rules

- **Model Bağımsızlığı**: Ajan belirli bir LLM sağlayıcısına özel kod veya private reasoning varsayımı yazamaz.
- **Dondurulmuş Gerçekler**: Mevcut web sitesinde (`trakyateknikmakine.com`) yer alan doğrulanmış firma bilgileri korunacaktır; doğrulanmamış yeni müşteri/hizmet iddiası uydurulamaz.
- **Kapsam Disiplini**: Ajan onaylı kapsamın (`inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`) dışına sessizce çıkamaz.

## 3. Active Wave Execution Rule

- Ajan yalnızca [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesinde gösterilen aktif wave ve [ai/NEXT_TASKS.md](./NEXT_TASKS.md) içerisindeki görevler üzerinde çalışabilir.
- Aktif wave tamamlanmadan sonraki wave'in kodlamasına atlanamaz.
- Bir wave tamamlandığında, ajan [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) ve [ai/NEXT_TASKS.md](./NEXT_TASKS.md) dosyalarını güncelleyerek el sıkışır (handoff).

## 4. Coding / Architecture Conventions

- **Frontend Stack**: Vite + React + Modern CSS Custom Properties.
- **No Direct Component Hardcoding**: Presentation bileşenleri metin verisini doğrudan kendi JSX kodları içine gömmemeli (`hardcoded UI forbidden`); `src/data/mockData.js` ve `src/services/` adapter katmanı üzerinden veri tüketmelidir.
- **Design Tokens**: Renkler, fontlar, spacing ve elevation değerleri `src/styles/tokens.css` dosyasında tanımlı CSS değişkenleri üzerinden kullanılmalıdır.
- **Component Separation**: Sayfa bölümleri (`src/components/sections/`), yeniden kullanılabilir arayüz elemanları (`src/components/ui/`) ve layout kabuğu (`src/components/layout/`) modüler tutulmalıdır.

## 5. Verification Mandates

- Kod yazıldıktan veya değiştirildikten sonra `npm run build` ve `npm run dev` komutları çalıştırılarak hatasız derlendiği ve çalıştığı doğrulanmalıdır.
- Mobil ve masaüstü duyarlılığı (responsive) taranmalı, taşma/kayma olmadığından emin olunmalıdır.
- Konsolda herhangi bir kırıcı React hatası veya uyarısı kalmamalıdır.

## 6. Documentation Update / Handoff Rule

- Bir dalga (wave) tamamlandığında:
  1. `CURRENT_STATUS.md` güncellenir (tamamlanan wave işaretlenir, yeni aktif wave seçilir).
  2. `NEXT_TASKS.md` yeni wave görevleriyle yenilenir.
  3. Yeni bir mimari/ürün kararı alınmışsa `ai/DECISIONS.md` dosyasına eklenir.

## 7. Stop / Clarification Rules

- Doğrulanmamış yeni firma bilgisi veya kanıtlanmamış yetkinlik eklenmesi istendiğinde durulur.
- Presentation katmanı ile service boundary arasındaki mimari kural ihlal edilirse geliştirme durdurulur ve rehberlik sağlanır.
