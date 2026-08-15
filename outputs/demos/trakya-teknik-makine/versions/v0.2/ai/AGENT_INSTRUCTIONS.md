# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Projeye dahil olan veya devam eden her yetkin ajanın sırasıyla okuması gereken referans sırası:
1. `README.md`
2. `ai/PROJECT_BRAIN.md`
3. `ai/PRODUCT_RULES.md`
4. `tech/TECH_CONTEXT.md`
5. `design/DESIGN_RULES.md`
6. `waves/WAVE_MAP.md`
7. Aktif Dalga Planı: `waves/plans/WAVE_<NN>.md`
8. `ai/CURRENT_STATUS.md` & `ai/NEXT_TASKS.md`

## 2. Agent Behavior Rules

- **ABR-01 (Model Bağımsızlığı)**: Kod ve dokümantasyon belirli bir LLM sağlayıcısına (Claude, Gemini, GPT, Codex) özgü kurallar veya private prompt kalıpları içeremez.
- **ABR-02 (Sıfır Uydurma Kuramı)**: Kaynakta (`FCL`) yer almayan hiçbir firma gerçeği (stok, mobil filo, çalışma saatleri, adres, sertifikalar) uydurulmayacaktır.
- **ABR-03 (Demo Kalite Tabanı)**: `Prototype` statüsü throwaway kod veya kalitesiz mimari anlamına gelmez; decoupled service/presentation mimarisi korunacaktır.

## 3. Active Wave Execution Rule

- Ajan yalnızca `ai/CURRENT_STATUS.md` içinde tanımlanan aktif dalga (`Active Wave`) kapsamındaki işleri yürütür.
- Aktif dalga tamamlanmadan sonraki dalganın işlerine başlanamaz veya kapsam karıştırılamaz.

## 4. Coding / Architecture Conventions

- **HTML5 & Modern CSS3**: Semantik HTML tag'leri, CSS Custom Properties (`tokens.css`), Flexbox/Grid layout yapısı.
- **Vanilla ES6 Modules**: Harici framework (React, Vue vb.) veya bundling gerektirmeyen saf JS modül mimarisi.
- **Data Boundary**: Presentation bileşenleri doğrudan hardcoded nesneler taşımayacak, `dataService` üzerinden veri çekecektir.

## 5. Verification Mandates

- Kod değişikliklerinden sonra 0 tarayıcı konsol hatası.
- Çapraz cihaz responsive görünüm doğrulaması (`320px`, `768px`, `1440px`).
- Klavye gezinimi ve WCAG 2.1 AA renk kontrastı denetimi.

## 6. Documentation Update / Handoff Rule

- Bir dalga tamamlandığında `ai/CURRENT_STATUS.md` ve `ai/NEXT_TASKS.md` güncellenecektir.
- Önemli bir teknik veya ürün kararı alındığında `ai/DECISIONS.md` belgesine eklenecektir.

## 7. Stop / Clarification Rules

- Approved scope dışına çıkan backend, veritabanı, CMS, canlı harita veya WhatsApp entegrasyonu talebi geldiğinde ajan çalışmayı DURDURACAK ve kullanıcıdan açık onay istenecektir.
