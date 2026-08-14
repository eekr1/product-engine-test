# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projede çalışacak her AI ajanı aşağıdaki sırayı izleyerek bağlam kazanmalıdır:

1. `README.md`
2. `ai/PROJECT_BRAIN.md`
3. `ai/PRODUCT_RULES.md`
4. `ai/TECH_CONTEXT.md`
5. `design/DESIGN_RULES.md`
6. `project/PROJECT_PLAN.md`
7. `waves/WAVE_MAP.md`
8. `ai/CURRENT_STATUS.md`
9. Aktif wave planı (`waves/plans/WAVE_<NN>.md`)
10. `ai/NEXT_TASKS.md`
11. `ai/AGENT_INSTRUCTIONS.md` (Bu dosya)
12. `ai/DECISIONS.md`

## 2. Agent Behavior Rules

- **AGRULE-001 (Model Bağımsızlığı):** Herhangi bir yetkin AI ajanı (Claude, GPT, Gemini, Codex vb.) bu belgeleri okuyarak doğrudan çalışabilmelidir. Modele özel gizli prompt veya bağımlılık tanımlanamaz.
- **AGRULE-002 (Doğrulanmış Bilgi Sınırı):** Sitede sunulacak firma bilgileri yalnızca doğrulanmış kaynaklarla kısıtlıdır. Doğrulanmamış yeni iddialar, müşteri yorumları veya sertifikalar icat edilmemelidir.
- **AGRULE-003 (Kapsam Aşımı Yasaktır):** Aktif dalga (wave) planının dışına sessizce çıkılamaz.

## 3. Active Wave Execution Rule

- Ajan yalnızca `CURRENT_STATUS.md` belgesinde aktif olarak işaretlenmiş wave planı (`waves/plans/WAVE_<NN>.md`) üzerindeki görevleri uygular.
- Bir wave tamamlanmadan sonraki wave planına geçilemez.
- Wave tamamlandığında `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenir.

## 4. Coding / Architecture Conventions

- **Clean Boundary:** presentation bileşenleri doğrudan static mock veriye bağımlı olmamalı; `Service / Adapter` arayüzü üzerinden veri tüketmelidir.
- **Quality Baseline:** Demo veya prototype olması throwaway/kirli kod veya dağınık mimari yazma izni vermez.
- **Modular Style System:** CSS stilleri `DESIGN_RULES.md` içinde tanımlanan değişkenlere (`var(--color-...)`) dayalı modüler yapıda tutulmalıdır.

## 5. Verification Mandates

- Kod değişikliklerinden sonra tarayıcı/preview çıktısı kontrol edilmeli, konsol hataları veya layout kırılmaları doğrulanmalıdır.
- Hiçbir görev empirik doğrulama yapılmadan "tamamlandı" olarak işaretlenemez.

## 6. Documentation Update / Handoff Rule

- Her wave kapanışında:
  - `CURRENT_STATUS.md` güncellenir.
  - `NEXT_TASKS.md` yeni wave'in ilk görevleriyle güncellenir.
  - Alınan kalıcı mimari kararlar `DECISIONS.md` belgesine eklenir.

## 7. Stop / Clarification Rules

- Doğrulanmamış firma bilgisi gerektiğinde dur ve kullanıcıya soru sor.
- Onaylı kapsamla çelişen bir durum tespit edildiğinde dur ve kullanıcıya danış.
