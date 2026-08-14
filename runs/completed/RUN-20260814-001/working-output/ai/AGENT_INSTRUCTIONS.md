# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye dahil olan her AI ajanı sırasıyla şu belgeleri okuyarak bağlam kazanmalıdır:

1. `README.md` (Kök rehber ve navigasyon)
2. `ai/PROJECT_BRAIN.md` (Projenin amacı, bağlamı ve mimari özeti)
3. `ai/PRODUCT_RULES.md` (İş mantığı ve kapsam kuralları)
4. `ai/TECH_CONTEXT.md` (Teknoloji yığını, mimari sınırlar ve integration readiness)
5. `design/DESIGN_RULES.md` (Görsel yön, tipografi, renkler ve anti-template kuralları)
6. `project/PROJECT_PLAN.md` (Teslimat roadmap'i ve milestone'lar)
7. `waves/WAVE_MAP.md` (Dalga haritası ve bağımlılıklar)
8. `ai/CURRENT_STATUS.md` (Aktif faz ve mevcut durum)
9. İlgili `waves/plans/WAVE_<NN>.md` (Çalışılacak aktif dalga planı)
10. `ai/NEXT_TASKS.md` (Sıradaki somut görevler)

## 2. Agent Behavior Rules

- **Model Bağımsızlığı**: Ajan hangi LLM (Claude, Gemini, GPT, Codex vb.) olursa olsun aynı markdown dokümantasyon standartlarına uymalıdır.
- **Throwaway Kod Yasaktır**: Demo/Prototype aşamasında dahi spagetti veya kirli kod yazılamaz. Temiz mimari ve modüler yapı korunmalıdır.
- **Gerçek Bilgi Bütünlüğü**: Doğrulanmamış firma iddiaları, sahte sertifikalar veya onaylanmamış backend kontratları uydurulamaz.

## 3. Active Wave Execution Rule

- Ajan yalnızca `CURRENT_STATUS.md` içinde belirtilen **Aktif Dalga (`Active Wave`)** kapsamındaki görevleri yürütür.
- Aktif dalga tamamlanmadan sonraki dalgalara sessizce geçilemez.
- Bir dalga bittiğinde `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenerek bir sonraki dalgaya el verilir (handoff).

## 4. Coding / Architecture Conventions

- **Frontend Core**: Vanilla JS ES6+ (Modüler export/import), HTML5 semantik etiketler, Vanilla CSS3 Custom Properties.
- **Presentation & Data Isolation**: UI bileşenleri veriyi hardcode etmez; `contentService.js` arayüzü üzerinden asenkron tüketir.
- **Naming Conventions**: CSS sınıfları için BEM / semantic utility yaklaşımı, JS dosyaları için camelCase / PascalCase bileşen adları.

## 5. Verification Mandates

- Kod değişiklikleri sonrasında `npx vite build` çalıştırılarak derleme hatası olmadığı doğrulanmalıdır.
- DevTools responsive modunda 320px - 2560px aralığı test edilmelidir.
- Konsolda JS runtime hatası olmamalıdır.

## 6. Documentation Update / Handoff Rule

- Her dalga sonunda ajanın yaptığı gerçek ilerleme `ai/CURRENT_STATUS.md` belgesine yansıtılmalıdır.
- Yeni bir mimari veya ürün kararı alındığında bu `ai/DECISIONS.md` belgesine dondurulmalıdır.

## 7. Stop / Clarification Rules

- Approved scope dışına çıkan bir talep veya belirsizlik durumunda ajan üretimi durdurup kullanıcıya netleştirme sorusu yöneltmelidir.
