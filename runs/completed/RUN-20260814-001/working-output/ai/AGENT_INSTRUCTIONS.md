# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projede çalışacak herhangi bir AI ajanının izlemesi gereken birincil okunma sırası:

1. [README.md](../README.md) — Root giriş noktası ve doküman haritası.
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje bağlamı ve temel özet.
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — İş mantığı, ürün kuralları ve kısıtlamalar.
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Teknoloji yığını ve mimari sınırlar.
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Görsel konsept, tipografi ve renk jetonları.
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Üst seviye teslim yol haritası.
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Wave yapısı ve bağımlılık zinciri.
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Aktif wave ve proje durum gerçeği.
9. Aktif `waves/plans/WAVE_<NN>.md` — Sıradaki uygulanacak execution planı.
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Sıradaki somut görevler.
11. [ai/DECISIONS.md](./DECISIONS.md) — Kararlar ve mimari gerekçeler.

## 2. Agent Behavior Rules

- **B-01 (Model Independence)**: Ajan kullanılan modelden (Claude, Gemini, GPT vb.) bağımsız olarak yalnızca bu projenin belgelerinde tanımlanan kurallara uyar.
- **B-02 (No Speculative Enrichment / VAL-13)**: Ajan doğrulanmamış marka iddiaları, sahte sertifikalar veya 7/24 garanti metinleri uyduramaz. Yalnızca `SOURCE_REGISTER.md` ve `FCL` verilerine dayanır.
- **B-03 (No Throwaway Code)**: Demo/prototype seviyesinde dahi ajan temiz, modüler ve sürdürülebilir kod üretir.

## 3. Active Wave Execution Rule

- Ajan her çalışma turunda yalnız [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) içinde tanımlı aktif wave'in [waves/plans/WAVE_<NN>.md](../waves/plans/WAVE_00.md) planına odaklanır.
- Aktif wave'in kabul kriterleri tamamlanmadan sonraki wave'in kodlamasına geçilemez.

## 4. Coding / Architecture Conventions

- **Clean Boundary**: Presentation bileşenleri doğrudan statik veriye gömülmez; `companyService.js` üzerinden veri tüketir.
- **Styling**: `styles/main.css` içinde `DESIGN_RULES.md` Custom Properties jetonları kullanılır; ad-hoc veya karmaşık stil sınıfları yazılmaz.
- **Naming**: Kebab-case dosya adlandırma ve semantik HTML5 etiketleri tercih edilir.

## 5. Verification Mandates

- Her kod değişikliğinden sonra ajan uygulamanın tarayıcıda veya lokal sunucuda hatasız çalıştığını doğrulamalıdır.
- Mobil responsive düzenlerde sayfa genişliğinin taşma yapmadığı kontrol edilmelidir.

## 6. Documentation Update / Handoff Rule

- Ajan görev tamamladığında [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) ve [ai/NEXT_TASKS.md](./NEXT_TASKS.md) belgelerini gerçek ilerlemeye göre güncellemelidir.
- Yeni bir mimari veya teknik karar alındığında [ai/DECISIONS.md](./DECISIONS.md) dosyasına gerekçesiyle birlikte işlenmelidir.

## 7. Stop / Clarification Rules

- Belirsiz veya çelişkili bir durumla karşılaşıldığında sessizce uydurma tahmin yürütülmez; çalışma durdurularak durum raporlanır.
