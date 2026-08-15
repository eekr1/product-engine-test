# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Projeye yeni katılan veya sıradaki wave'i üstlenen ajan sırasıyla aşağıdaki belgeleri okumalıdır:

1. `README.md` (Root entry point ve read order)
2. `ai/PROJECT_BRAIN.md` (Proje kimliği, amaç ve kapsam özeti)
3. `ai/PRODUCT_RULES.md` (İş kuralları, FCL ve scope kısıtları)
4. `ai/TECH_CONTEXT.md` (Teknoloji yığını ve mock adapter boundary)
5. `design/DESIGN_RULES.md` (Görsel konsept, tipografi, renkler ve responsive ilkeler)
6. `project/PROJECT_PLAN.md` (Milestone'lar ve roadmap)
7. `waves/WAVE_MAP.md` (Wave yapısı ve bağımlılıklar)
8. `ai/CURRENT_STATUS.md` (Aktif wave ve anlık durum)
9. Active `waves/plans/WAVE_<NN>.md` (Çalışılacak wave planı)
10. `ai/NEXT_TASKS.md` (Sıradaki somut görevler)
11. `ai/DECISIONS.md` (Alınmış kararlar)

## 2. Agent Behavior Rules

- **Strict Factual Allowlist**: Source dosyada bulunmayan firma iddiaları (stok, mobil filo, acil servis SLA, periyodik bakım detayları vb.) uydurulmayacaktır.
- **Uninvented Backend Rule**: Backend API, veritabanı, canlı harita veya WhatsApp entegrasyonu uydurulmayacak; veri erişimi `dataService.js` adapter'ı üzerinden yürütülecektir.
- **No Model Lock-in**: Yönergeler ve kodlar model-bağımsız (Codex, Claude, Gemini) standart markdown ve JavaScript ile yürütülecektir.

## 3. Active Wave Execution Rule

- Ajan yalnızca `ai/CURRENT_STATUS.md` içinde aktif gösterilen wave planını (`waves/plans/WAVE_<NN>.md`) uygulayabilir.
- Aktif wave tamamlanmadan sonraki wave'in işlerine geçilemez.
- Wave checklist maddeleri tamamlandıkça durum güncellenir.

## 4. Coding / Architecture Conventions

- **Component-Driven Isolation**: UI presentation bileşenleri (Hero, Services, Contact) kendi alanlarında kalır; inline mock veri barındırmaz.
- **CSS Custom Properties**: Tüm stil kararları `src/styles/tokens.css` üzerinden tüketilir.
- **Clean Adapter Pattern**: Veri okumaları `src/services/dataService.js` arabirimi üzerinden asenkron metotlarla yapılır.

## 5. Verification Mandates

- Kod değişiklikleri sonrası responsive layout kırılmaları denetlenir (1200px, 768px, 320px).
- HTML semantic yapısının (tek `h1`, doğru etiketler) korunduğu doğrulanır.
- `dataService.js` metotlarının doğru verileri döndürdüğü unit/konsol seviyesinde test edilir.

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında ajan `ai/CURRENT_STATUS.md`, `ai/NEXT_TASKS.md` ve ilgili `WAVE_<NN>.md` sonuç bölümünü günceller.
- Yeni bir teknik karar alındığında `ai/DECISIONS.md` belgesine eklenir.

## 7. Stop / Clarification Rules

- Approved scope dışına çıkan veya FCL ihlali gerektiren bir durum oluştuğunda ajan çalışmayı durdurur ve kullanıcı onayına başvurur.
