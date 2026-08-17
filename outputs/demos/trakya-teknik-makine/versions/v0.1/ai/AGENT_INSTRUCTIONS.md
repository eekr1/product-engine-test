# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Projede çalışacak herhangi bir AI agent işe başlamadan önce şu sırayı takip etmelidir:

1. [README.md](../README.md) — Proje başlangıç noktası ve çalıştırma rehberi
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje bağlamı ve factual universe
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — İş mantığı, direct-contact CTA ve scope kuralları
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Frontend stack (Vite+React), continuation gate ve service/data boundary
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Visual direction, tipografi, renk paleti ve layout kuralları
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Teslimat fazları ve dalga dizilimi
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Delivery wave haritası
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Mevcut durum ve aktif wave
9. Relevant Wave Plan: `waves/plans/WAVE_<NN>.md` — Uygulanacak aktif dalga planı
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Sıradaki somut görevler

## 2. Agent Behavior Rules

- **BR-001 (Source-Closed Truth)**: Ajan sadece `TRAKYA_TEKNIK_MAKINE_PROJECT.md` ve onaylı `PROJECT_INPUT.md` belgelerinde yer alan factual verileri kullanabilir. Dış arama yapıp firma hakkında uydurma veri (adres, stok, SLA vb.) üretemez.
- **BR-002 (Model-Agnostic Execution)**: Kurallar ve talimatlar modelden bağımsızdır. Claude, Gemini, GPT veya Codex için özel imtiyaz veya istisna uygulanamaz.
- **BR-003 (Quality Floor)**: Teslim profilinin `Prototype` olması kod veya mimari kalitesini düşürme izni değildir. Dağınık kod, hardcode veri veya component-level coupling kabul edilemez.

## 3. Active Wave Execution Rule

- Ajan yalnızca [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesinde ve [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) haritasında aktif olan wave'in plan dosyasını (`waves/plans/WAVE_<NN>.md`) uygulayabilir.
- Aktif wave tamamlanmadan sonraki wave'in işlerine geçilemez veya kapsam dışı yeni yetenekler eklenemez.
- Bir wave'in görevleri yürütülürken `WAVE_PLAN.md` içerisindeki `Implementation Checklist` harfiyen izlenmelidir.

## 4. Coding / Architecture Conventions

- **Component Isolation**: Her UI bileşeni tek bir sorumluluğa sahip olmalı ve `src/components/` altında modüler olarak yer almalıdır.
- **Data Boundary**: Presentation bileşenleri doğrudan hardcode mock veri içermemeli; veriyi `src/services/presentationService.js` üzerinden çekmelidir.
- **Styling Standards**: Stiller `src/styles/tokens.css` içindeki CSS Custom Properties ile yönetilmeli; ad-hoc inline stillerden kaçınılmalıdır.
- **Clean Structure**: Modern React (ES6+ functional components & hooks) standartları kullanılmalıdır.

## 5. Verification Mandates

- Her kod değişikliğinden sonra `npm run build` çalıştırılarak TypeScript/Vite derleme hataları kontrol edilmelidir.
- Geliştirme sunucusu (`npm run dev`) ile arayüzün responsive davranışı, renk uyumu ve CTA butonlarının çalışırlığı doğrulanmalıdır.
- `tel:` ve `mailto:` bağlantılarının doğru HTML nitelikleriyle üretildiği denetlenmelidir.

## 6. Documentation Update / Handoff Rule

- Bir wave çalışması bittiğinde ajan:
  1. `waves/plans/WAVE_<NN>.md` içindeki checklist ve exit criteria durumlarını günceller.
  2. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesindeki aktif wave ve tamamlanan işler bilgisini günceller.
  3. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) belgesini bir sonraki wave'in ilk görevleriyle günceller.
  4. Önemli bir mimari karar alındıysa [ai/DECISIONS.md](./DECISIONS.md) kütüğüne ekler.

## 7. Stop / Clarification Rules

- Factual Allowlist dışında yeni bir firma bilgisi veya teknik veri gereksinimi doğarsa,
- Approved scope dışında yeni bir etkileşim veya backend talebi ile karşılaşılırsa,
- Ajan derhal durmalı ve açık soru (Open Question) oluşturarak kullanıcıdan netleştirme istemelidir.
