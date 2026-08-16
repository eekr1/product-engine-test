# Fizyoterapist Eda Pala Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Projede çalışacak herhangi bir AI ajanı veya geliştirici işe başlamadan önce şu sırayı takip etmelidir:

1. [README.md](../README.md) — Proje giriş noktası ve genel özet
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Ürün amacı, vizyonu ve temel kısıtlar
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — Sağlık alanı kuralları ve kapsam sınırları
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Modüler frontend mimarisi ve statik adapter sınırları
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Tasarım dili, renk paleti ve tipografi tabanı
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Fazlar ve teslimat sırası
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Dalga haritası ve bağımlılıklar
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Mevcut durum ve aktif dalga takibi
9. `waves/plans/WAVE_<NN>.md` — Aktif dalga uygulama detayları
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Aktif dalga içindeki sıradaki atomik görevler
11. [ai/AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md) — Ajan davranış ve kodlama kuralları (Bu dosya)
12. [ai/DECISIONS.md](./DECISIONS.md) — Kalıcı mimari ve tasarım kararları günlüğü

## 2. Agent Behavior Rules

- **Source-Closed Truth Constraint**: Ajan yalnızca onaylı `PROJECT_INPUT` ve `FCL` içindeki doğrulanmış gerçekleri (`Eda Pala`, `Fizyoterapist`, `Tekirdağ`, Instagram URL) kullanabilir.
- **Health Domain Guard**: Ajan kesinlikle uydurma tedavi yöntemi, hastalık listesi, adres, telefon, hasta yorumu veya eğitim bilgisi ekleyemez.
- **Model Independence**: Ajan modelden bağımsız hareket eder. Kod ve dokümantasyon kalitesi model türüne göre değişmez.
- **No Throwaway Code**: Demo veya prototype etiketi düşük kaliteli, spagetti veya standart dışı kod yazma izni değildir.

## 3. Active Wave Execution Rule

- Ajan her oturumda yalnızca `CURRENT_STATUS.md` belgesinde belirtilen **aktif dalga** scope'unda çalışır.
- Aktif dalga planında (`waves/plans/WAVE_<NN>.md`) tanımlanmamış yeni bir özellik, component veya sayfa ekleyemez.
- Aktif dalga tamamlanmadan sonraki dalganın görevlerine geçemez.

## 4. Coding / Architecture Conventions

- **Semantic HTML**: Tüm UI öğeleri uygun HTML5 semantik öznitelikleriyle (`header`, `main`, `section`, `footer`, `nav`, `button`, `a`) yazılmalıdır.
- **Design System Tokens**: CSS stilleri ad-hoc renk veya spacing değerleri içeremez; `styles/tokens.css` içinde tanımlı custom property'leri kullanmalıdır.
- **Clean Content Separation**: Veriler doğrudan HTML koduna hardcode edilmez; `content.config.js` ve `contentAdapter.js` katmanı üzerinden okunur.
- **Accessibility**: Tüm etkileşimli öğeler klavye gezintisi ve ekran okuyucular için `aria-label`, visible focus outline ve uygun kontrast değerlerine sahip olmalıdır.

## 5. Verification Mandates

- Ajan ürettiği kod veya dokümanı doğrulamadan task'ı "Done" ilan edemez.
- HTML/CSS dosyalarında sözdizimi hatası veya eksik etiket bulunmadığı doğrulanmalıdır.
- Tüm responsive kırılma noktalarında (mobile 375px, tablet 768px, desktop 1200px) taşma olmadığı kontrol edilmelidir.
- Outbound Instagram yönlendirmesinin `target="_blank" rel="noopener noreferrer"` özniteliklerini taşıdığı doğrulanmalıdır.

## 6. Documentation Update / Handoff Rule

- Bir dalga veya task tamamlandığında ajan `CURRENT_STATUS.md` ve `NEXT_TASKS.md` dosyalarını günceller.
- Yeni bir teknik veya tasarım kararı alındıysa bu karar `ai/DECISIONS.md` belgesine kaydedilir.
- Tamamlanmamış bir iş kesinlikle completed olarak işaretlenemez.

## 7. Stop / Clarification Rules

- Doğrulanmamış bir kişisel veya tıbbi bilgi eklenmesi istendiğinde ajan çalışmayı durdurur.
- Aktif dalga scope'unu aşan yeni bir ürün özelliği istendiğinde ajan durur ve netleştirme talep eder.
