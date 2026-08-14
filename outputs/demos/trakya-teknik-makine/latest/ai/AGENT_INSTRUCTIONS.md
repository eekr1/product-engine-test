# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye yeni başlayan herhangi bir yetkin AI agent şu kanonik okuma sırasını takip etmelidir:

1. `README.md` (Proje giriş noktası ve genel harita)
2. `ai/PROJECT_BRAIN.md` (Proje amacı, bağlamı ve genel özet)
3. `ai/PRODUCT_RULES.md` (İş kuralı ve davranış kısıtlamaları)
4. `ai/TECH_CONTEXT.md` (Teknoloji yığını, mimarlık ve data/service boundary)
5. `design/DESIGN_RULES.md` (Visual concept, renkler, tipografi ve UX kuralları)
6. `project/PROJECT_PLAN.md` (Roadmap ve milestone ilişkisi)
7. `waves/WAVE_MAP.md` (Proje wave haritası)
8. `ai/CURRENT_STATUS.md` (Mevcut anlık durum)
9. Active `waves/plans/WAVE_<NN>.md` (Şu anda yürütülen wave planı)
10. `ai/NEXT_TASKS.md` (Aktif wave içindeki sıradaki görevler)
11. `ai/AGENT_INSTRUCTIONS.md` (Bu çalışma talimatı belgesi)
12. `ai/DECISIONS.md` (Kalıcı ürün/mimari kararlar)

## 2. Agent Behavior Rules

- **Model Bağımsızlığı**: Ajan hangi LLM/model üzerinde çalışırsa çalışsın (Claude, Gemini, GPT, Codex vb.) çalışma kuralları aynıdır. Modele özel private reasoning veya özel komut dili talep edilmez.
- **Doğrulanmış Gerçeklik**: Ajan, firmanın müşterileri, başarıları veya ürün kapasiteleri hakkında doğrulannamış bilgi üretemez (`PR-02`).
- **Throwaway Kod Yasağı**: Demo prototipi olması kod kalitesinin veya mimari temizliğin düşürülebileceği anlamına gelmez. Presentation ve data-access katmanları kesinlikle ayrılmalıdır.

## 3. Active Wave Execution Rule

- Ajan yalnızca `ai/CURRENT_STATUS.md` belgesinde belirtilen aktif wave (`WAVE_00`) ve ilgili `waves/plans/WAVE_<NN>.md` planı doğrultusunda kod yazmalıdır.
- Aktif wave tamamlanmadan ve exit criteria sağlanmadan bir sonraki wave'in kodlamasına geçilemez.

## 4. Coding / Architecture Conventions

- **HTML/CSS/JS Style**: Semantik HTML5, Vanilla CSS3 Custom Properties (`design-tokens.css`), ES6+ modern JavaScript.
- **Data Boundary**: UI component'leri doğrudan JSON verisi taşımamalı, `src/services/mockDataService.js` arayüzü üzerinden veri talep etmelidir.
- **Responsive Standard**: Mobilde dikey hizalanmış, masaüstünde çok sütunlu 12-column grid düzeni.

## 5. Verification Mandates

- Kod değişikliği yapıldıktan sonra tarayıcıda veya static preview sunucusunda uygulamanın düzgün yüklendiği doğrulanmalıdır.
- Konsol hata ve uyarıları (`0 errors, 0 warnings`) kontrol edilmelidir.
- Mobil görünümde taşma yapmadığı onaylanmalıdır.

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında ajan:
  1. `waves/plans/WAVE_<NN>.md` belgesindeki checklist kutucuklarını işaretlemeli,
  2. `ai/CURRENT_STATUS.md` belgesini tamamlanan wave durumuna göre güncellemeli,
  3. `ai/NEXT_TASKS.md` belgesini bir sonraki wave'in görevleriyle revize etmelidir.
  4. Önemli bir karar alındıysa `ai/DECISIONS.md` belgesine eklemelidir.

## 7. Stop / Clarification Rules

- Approved scope dışında kalan yeni bir özellik (örn. online sipariş sistemi, kullanıcı girişi, admin paneli) talep edildiğinde ajan kod yazmayı durdurmalı ve kullanıcıdan clarification istemelidir.
