# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Herhangi bir yetkin AI ajanı projede çalışmaya başlamadan önce aşağıdaki canonical sırayı takip etmelidir:

1. `README.md`
2. `ai/PROJECT_BRAIN.md`
3. `ai/PRODUCT_RULES.md`
4. `ai/TECH_CONTEXT.md`
5. `design/DESIGN_RULES.md`
6. `design/DESIGN_SYSTEM.md` & `design/GLOBAL_SHELL.md`
7. `design/pages/*_DESIGN_PACKAGE.md` (ilgili sayfa görevinde)
8. `project/PROJECT_PLAN.md`
9. `waves/WAVE_MAP.md`
10. `ai/CURRENT_STATUS.md`
11. `waves/plans/WAVE_<NN>.md` (aktif wave)
12. `ai/NEXT_TASKS.md`
13. `ai/AGENT_INSTRUCTIONS.md` (Bu belge)
14. `ai/DECISIONS.md`

## 2. Agent Behavior Rules

- **Rule 1 (Source-Closed Execution)**: Factual projeye dair tüm iddialar `SOURCE_REGISTER.md` ve FCL allowlist içinde tanımlı `SRC-001` kanıtlarına dayanmalıdır. Dış kaynaklardan veya kendi varsayımınızdan yeni firma/hizmet iddiaları (stok, garanti, acil servis süresi vb.) uyduramazsınız.
- **Rule 2 (No Distinct Page Collapse)**: Onaylanmış 7 distinct sayfa (`PAGE-001` .. `PAGE-007`) kendi routable identity'lerini korur. Tek sayfalık section anchor (`#section`) yapısına indirgenemez.
- **Rule 3 (No Prototype Quality Floor Reduction)**: Teslim profilinin `Prototype` olması kod kalitesini, mimari standartları, bileşen modülerliğini veya tasarım kalitesini düşürme bahanesi olamaz.

## 3. Active Wave Execution Rule

- Ajan yalnızca `ai/CURRENT_STATUS.md` içerisinde belirtilen aktif wave (`WAVE_<NN>`) ve onun detaylı planı (`waves/plans/WAVE_<NN>.md`) sınırlarında kod yazar.
- Aktif wave tamamlanmadan sonraki wave görevlerine geçilmez.

## 4. Coding / Architecture Conventions

- **Component Boundaries**: Presentation UI bileşenleri veriyi doğrudan import etmek yerine `services/dataAdapter.ts` üzerinden almalıdır.
- **Design System Usage**: CSS Custom Properties (`styles/tokens.css`) kullanılmalıdır; inline stil veya ad-hoc hex değerler yazılmamalıdır.
- **TypeScript Strictness**: Type declaration'ları açıkça yazılmalı, `any` kullanımından kaçınılmalıdır.

## 5. Verification Mandates

- Her kod değişikliği sonrası `npm run build` komutu çalıştırılarak derleme hatalarının olmadığından emin olunmalıdır.
- Direct URL ve sayfa geçişleri tüm 7 onaylı sayfa için test edilmelidir.

## 6. Documentation Update / Handoff Rule

- Bir wave görevi tamamlandığında ajan `ai/CURRENT_STATUS.md` ve `ai/NEXT_TASKS.md` dosyalarını güncel gerçekliğe göre güncellemelidir.
- Yeni bir mimari karar alındığında `ai/DECISIONS.md` dosyasına kaydedilmelidir.

## 7. Stop / Clarification Rules

- Unbacked factual claim gerektiren bir durumla karşılaşıldığında durulmalı ve kullanıcıdan netleştirme istenmelidir.
- Kapsam dışı (`OUT_OF_SCOPE`) bileşenlerin eklenmesi talep edilirse kullanıcıya Product Engine sınırları hatırlatılmalıdır.
