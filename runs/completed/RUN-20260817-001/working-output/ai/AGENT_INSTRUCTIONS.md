# Fizyoterapist Eda Pala Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Bu projede göreve başlayan herhangi bir yetkin AI ajanının izlemesi gereken zorunlu okuma sırası:

1. [README.md](../README.md) — Proje özeti ve hızlı başlangıç
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje kimliği, amacı ve core vision
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — Kapsam kısıtları ve factual claim kuralları
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Mimari yapı ve local content adapter sınırı
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Visual direction, tipografi, renk paleti ve layout
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Proje roadmap'i ve teslim milestoneları
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Yürütme dalga haritası
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Mevcut durum ve aktif dalga
9. Aktif [waves/plans/WAVE_<NN>.md](../waves/plans/WAVE_00.md) — Yürütülecek detaylı plan
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Anlık görev sırası
11. [ai/DECISIONS.md](./DECISIONS.md) — Mimari ve ürün kararları kaydı

## 2. Agent Behavior Rules

- **Source-Closed Rule**: Ajan factual kaynak olarak sadece `SOURCE_REGISTER.md` (`SRC-01`) ve `FCL` allowlist'ini kullanır. Dış web araştırması, sosyal medya scraping'i veya Instagram URL'sini açarak factual enrichment yapmak YASAKTIR.
- **No Health Claims**: Kaynakta bulunmayan tedavi alanları, hastalıklar, tanı yöntemleri veya sağlık vaatleri UYDURULMAZ.
- **No Invented Backend/Interactions**: Scope dışındaki backend, online randevu, canlı harita, WhatsApp veya modal etkileşimler eklenemez.
- **Profile Maturity Boundary**: Delivery profile `Prototype` seviyesindedir. Maturity dili `sales-demo ready` veya `validated prototype` sınırında tutulur; `production-ready` veya `launch-ready` claim'i yapılmaz.

## 3. Active Wave Execution Rule

- Ajan her seferinde sadece **TEK BİR AKTİF WAVE** planını (`WAVE_MAP.md` tarafından belirlenen) yürütür.
- Aktif wave'in `Implementation Checklist` adımları tamamlanmadan sonraki wave'e geçilemez.
- Plan dışı yeni capability veya surface eklenemez.

## 4. Coding / Architecture Conventions

- **Pure Frontend Baseline**: HTML5, Vanilla CSS3 (Custom Properties), Vanilla JavaScript (ES6 Modules).
- **No Framework Overkill**: React/Vue/Tailwind CSS gibi harici bağımlılıklar eklenmez.
- **Content Adapter Separation**: Hardcode metin yazılmaz; tüm metinler `src/config/content.config.js` -> `src/adapters/contentAdapter.js` katmanından okunur.
- **Accessible & Responsive**: Modern CSS Grid/Flexbox, WCAG 2.1 AA renk kontrastı ve mobile touch target (min 44px) kurallarına uyulur.

## 5. Verification Mandates

- Kod yazıldıktan veya değiştirildikten sonra:
  1. Static HTML/CSS syntax kontrolü yapılır.
  2. DOM elemanlarının `contentAdapter` verilerini doğru yansıttığı teyit edilir.
  3. Mobil ve masaüstü layout'ta yatay overflow oluşmadığı doğrulanır.
  4. Outbound linklerin `target="_blank" rel="noopener noreferrer"` nitelikleri denetlenir.

## 6. Documentation Update / Handoff Rule

- Bir wave checklist adımı veya wave tamamlandığında:
  - `waves/plans/WAVE_<NN>.md` planındaki ilgili checklist kutuları `[x]` olarak güncellenir.
  - `ai/CURRENT_STATUS.md` ve `ai/NEXT_TASKS.md` dosyaları yeni duruma göre güncellenir.
  - Alınan önemli mimari kararlar `ai/DECISIONS.md` dosyasına eklenir.

## 7. Stop / Clarification Rules

- Scope dışı factual veri ihtiyacı veya çelişkili gereksinim ortaya çıktığında ajan sessiz varsayım yapmak yerine durur ve kullanıcıdan açık netleştirme talep eder.
