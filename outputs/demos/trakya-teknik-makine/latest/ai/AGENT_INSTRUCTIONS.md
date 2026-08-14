# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye katılan veya devralan yetkin bir AI ajanı çalışmaları yürütürken aşağıdaki canonical okuma sırasını izlemelidir:

1. [README.md](../README.md) (Proje başlangıç ve dizin navigasyonu)
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) (Proje bağlamı, amacı ve kilit kararlar)
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) (İş mantığı ve kapsam sınırları)
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) (Teknik stack, service boundary ve integration readiness)
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) (Projeye özgü visual concept, tipografi ve anti-template kuralları)
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) (Roadmap ve milestone ilişkisi)
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) (Wave yapısı ve bağımlılık zinciri)
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) (Mevcut faz ve aktif wave gerçeği)
9. Relevant `waves/plans/WAVE_<NN>.md` (Aktif wave planı)
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) (Sıradaki görev kuyruğu)
11. [ai/AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md) (Bu dosya — ajan çalışma kuralları)
12. [ai/DECISIONS.md](./DECISIONS.md) (Önemli mimari kararlar)

## 2. Agent Behavior Rules

- **ABR-01 (Model Bağımsızlığı)**: Tüm talimatlar ve kod standartları LLM sağlayıcısından (Claude, Gemini, GPT, Codex) bağımsızdır.
- **ABR-02 (Scope Invariant)**: Approved input'ta yer almayan hiçbir özellik, form, harita widget'ı veya WhatsApp botu uydurulamaz.
- **ABR-03 (No Throwaway Code)**: Satış demosu olması düşük kaliteli veya spagetti kod üretme izni vermez. Presentation ve data katmanları temiz ve modüler tutulur.

## 3. Active Wave Execution Rule

- Ajan yalnızca [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) üzerinde aktif olan wave'in [waves/plans/WAVE_<NN>.md](../waves/plans/WAVE_<NN>.md) planındaki görevleri yürütür.
- Sıradaki wave'e geçebilmek için mevcut wave'in tüm `Acceptance / Exit Criteria` maddelerinin başarıyla doğrulanması ve `CURRENT_STATUS.md` belgesinin güncellenmesi gerekir.

## 4. Coding / Architecture Conventions

- **Presentation & Styling**: Pure HTML5 ve Vanilla CSS. Design Token CSS değişkenleri (`tokens.css`) kullanılacaktır. TailwindCSS veya Bootstrap kullanılmaz.
- **Data Boundary**: UI component'leri veriyi doğrudan sabit objelerden çekmez; `MachineService` (`src/services/machineService.js`) interface'i üzerinden okur.
- **Form/Modal Policy**: Gerçek backend olmadığı için gönderilebilir sahte formlar veya sahte modal etkileşimleri eklenmez; doğrudan `tel:` ve `mailto:` CTA'ları kullanılır.

## 5. Verification Mandates

- Her kod veya stil değişikliği sonrasında:
  1. Konsol hatalarının (console errors) olmadığını doğrula.
  2. Responsive breakpoint uyumluluğunu kontrol et (320px, 768px, 1024px+).
  3. Metin kontrast oranlarının WCAG AA standartlarına uyduğunu teyit et.

## 6. Documentation Update / Handoff Rule

- Bir wave görevi tamamlandığında ajan:
  1. Aktif `WAVE_<NN>.md` planındaki ilgili görev kutusunu `[x]` olarak işaretler.
  2. `ai/CURRENT_STATUS.md` içindeki `Completed` ve `In Progress` listelerini günceller.
  3. `ai/NEXT_TASKS.md` dosyasını sıradaki göreve göre yeniler.
  4. Yeni alınan kalıcı bir mimari karar varsa `ai/DECISIONS.md` belgesine ekler.

## 7. Stop / Clarification Rules

- Aşağıdaki durumlarda ajan çalışmayı durdurmalı ve kullanıcıya netleştirme sorusu yöneltmelidir:
  - İstenen değişiklik approved scope ile açıkça çelişiyorsa.
  - İki canonical doküman arasında çözülemeyen bir çelişki tespit edilirse.
  - Güvenlik kritik veya ticari varsayım yapılması gereken bir durum ortaya çıkarsa.
