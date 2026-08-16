# Fizyoterapist Eda Pala Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Projede çalışacak herhangi bir AI ajanı üretmeye başlamadan önce belgeleri şu sırayla okumalıdır:

1. [README.md](../README.md) — Proje genel görünümü ve read order rehberi
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje amacı, dondurulmuş kapsam ve factual allowlist
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün davranış kuralları ve limited-source/health-domain kısıtları
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Frontend preview mimarisi ve `siteConfig` veri adaptörü
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Görsel estetik, renk paleti, tipografi ve responsive kurallar
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Teslim stratejisi ve fazlar
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Ana dalga haritası (`WAVE_00` .. `WAVE_03`)
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Aktif wave ve mevcut proje durumu
9. Aktif wave planı: `waves/plans/WAVE_<NN>.md` (Örn: [WAVE_00.md](../waves/plans/WAVE_00.md))
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Uygulanacak öncelikli görevler listesi
11. [ai/DECISIONS.md](./DECISIONS.md) — Kararlar ve mimari tercihler

## 2. Agent Behavior Rules

- **Model Independency**: Ajan belirli bir model ailesine (Claude, Gemini, GPT, Codex) özel gizli varsayımlar veya prompt uzantıları kullanmaz; tüm çalışma kuralları markdown belgelerinden okunur.
- **Strict Factual Guard**: Ajan dondurulmuş 4 factual bilgi (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) dışında hiçbir sağlık, klinik, uzmanlık, eğitim veya adres bilgisi uyduramaz.
- **No Scope Expansion**: Demoda veya prototipte onaylanmamış iletişim formları, canlı harita, WhatsApp widget'ı veya backend yetenekleri üretemez.

## 3. Active Wave Execution Rule

- Ajan yalnızca `ai/CURRENT_STATUS.md` içerisinde dondurulmuş aktif wave (`WAVE_00` .. `WAVE_03`) sınırlarında çalışır.
- Aktif wave'in `WAVE_PLAN` belgesindeki görevleri sırayla uygular; sonraki wave'in işlerine yetkisiz olarak atlamaz.

## 4. Coding / Architecture Conventions

- **Clean Content Boundary**: Veriler bileşen kodları içine hardcode edilmez; `siteConfig.js` modülünden okunur.
- **Vanilla CSS Tokens**: Harici UI framework'ü veya TailwindCSS kullanılmaz. `:root` altındaki CSS Custom Properties tüketilir.
- **Semantic HTML5**: Semantik etiketler (`header`, `main`, `footer`, `section`, `nav`) kullanılır; `div` kalabalığından kaçınılır.

## 5. Verification Mandates

- Ajan kod veya doküman değişikliği yaptıktan sonra:
  1. `siteConfig` veri adaptörünün hatasız çalıştığını doğrular.
  2. HTML5 ve CSS geçerliliğini denetler.
  3. Uydurma sağlık iddiası sızmadığını teyit eder.

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında:
  1. İlgili `WAVE_PLAN` altındaki checklist maddelerini `[x]` olarak işaretler ve `Wave Result` bölümünü günceller.
  2. `ai/CURRENT_STATUS.md` belgesinde aktif wave'i bir sonraki dalgaya geçirir.
  3. `ai/NEXT_TASKS.md` belgesini sıradaki görevler ile günceller.
  4. Alınan yeni kararları `ai/DECISIONS.md` belgesine kaydeder.

## 7. Stop / Clarification Rules

- Doğrulanmamış factual bilgi ekleme talebi geldiğinde ajan çalışmayı durdurur ve onay ister.
- Onaylı kapsam dışına çıkan backend veya form taleplerinde durarak dondurulmuş `PROJECT_INPUT` sınırlarını hatırlatır.
