# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye başlayan herhangi bir yetkin AI ajan aşağıdaki kanonik sırayı izlemelidir:

1. [README.md](../README.md) (Giriş noktası ve doküman okuma haritası)
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) (Proje amacı, kapsamı ve özet kararlar)
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) (İş mantığı, FCL doğrulanmış gerçeklik ve ürün sınırları)
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) (Mimari sınır, mock data adapter ve integration readiness)
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) (Visual identity, tipografi, renk rolleri, responsive taban)
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) (Fazlar ve teslimat yaklaşımı)
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) (5 dalgalı delivery roadmap)
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) (Mevcut durum ve aktif wave)
9. Aktif `waves/plans/WAVE_<NN>.md` (Şu anda: `WAVE_00.md`)
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) (Sıradaki uygulanabilir görevler)
11. [ai/AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md) (Bu dosya — ajan çalışma kuralları)
12. [ai/DECISIONS.md](./DECISIONS.md) (Kalıcı mimarlık ve ürün kararları)

## 2. Agent Behavior Rules

- **Model Bağımsızlığı**: Ajan Codex, Claude, Gemini veya başka bir sistem olabilir. Kodlama ve dokümantasyon kuralları tamamen model-bağımsızdır.
- **Spekülasyon Yasağı**: FCL allowlist (FCL-001..FCL-006) dışında yeni firma bilgileri veya kanıtlanmamış hizmet iddiaları uydurulamaz.
- **Quality Floor**: Prototype/Demo delivery profile planlama veya kod kalitesini düşürme izni vermez. Passable, clean ve extensible standart korunmalıdır.

## 3. Active Wave Execution Rule

- Ajan yalnızca [CURRENT_STATUS.md](./CURRENT_STATUS.md) içinde aktif gösterilen dalgaya (`WAVE_00`) ait `waves/plans/WAVE_<NN>.md` planını yürütür.
- Gelecek wave'lerin (WAVE_01 .. WAVE_04) görevleri aktif wave içinde tamamlanmış gösterilemez.

## 4. Coding / Architecture Conventions

- **Component & Data Separation**: Presentation katmanı veriyi doğrudan UI komponentlerine hardcode etmez; `companyMockData.js` adapter servisi üzerinden okur.
- **CSS Custom Properties**: Stil tanımları `styles/tokens.css` içinde dondurulan değişkenler üzerinden yönetilir.
- **Native-First & Clean Standards**: Harici gereksiz ağır kütüphane eklenmez. High-performance, clean ve semantic HTML5/CSS standartları uygulanır.

## 5. Verification Mandates

- Kod üretildikten veya düzenlendikten sonra:
  1. Responsive breakpoints (320px, 768px, 1024px, 1440px) kontrol edilir.
  2. Telefo/e-posta CTA bağlantılarının doğru çalıştığı doğrulanır.
  3. FCL verilerinin doğruluğu kontrol edilir.

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında ajan:
  1. [CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesini günceller (tamamlanan wave [x] işaretlenir, aktif wave bir sonrakine kaydırılır).
  2. [NEXT_TASKS.md](./NEXT_TASKS.md) kuyruğunu yeni aktif wave'in görevleriyle yeniler.
  3. Yeni kalıcı karar alındıysa [DECISIONS.md](./DECISIONS.md) içine ekler.

## 7. Stop / Clarification Rules

- Doğrulanmamış yeni içerik veya FCL dışı iddia talebi gelirse DURULUR ve kullanıcıdan netleştirme istenir.
- Sahte REST backend veya DB entegrasyonu istenirse UYDURMA YASAĞI uygulanarak durulur.
