# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye katılan herhangi bir AI ajanı (Codex, Claude, Gemini veya diğer yetkin sistemler) üretime başlamadan önce aşağıdaki sırayı takip etmelidir:

1. [README.md](../README.md)
2. [PROJECT_BRAIN.md](./PROJECT_BRAIN.md)
3. [PRODUCT_RULES.md](./PRODUCT_RULES.md)
4. [TECH_CONTEXT.md](./TECH_CONTEXT.md)
5. [DESIGN_RULES.md](../design/DESIGN_RULES.md)
6. [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
7. [WAVE_MAP.md](../waves/WAVE_MAP.md)
8. [CURRENT_STATUS.md](./CURRENT_STATUS.md)
9. Aktif wave planı (`waves/plans/WAVE_<NN>.md`)
10. [NEXT_TASKS.md](./NEXT_TASKS.md)
11. [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)
12. [DECISIONS.md](./DECISIONS.md)

## 2. Agent Behavior Rules

- **Strict Adherence to Approved Scope**: Ajan yalnız `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` ile dondurulmuş scope sınırlarında hareket eder.
- **Model Independence**: Ajan modele özel komut dizilimlerine veya gizli varsayımlara dayanamaz. Tüm çalışma kuralları bu belgelere yazılır.
- **No Unapproved Invention**: Sahte backend endpoint'i, veritabanı şeması, müşteri yorumu veya onaylanmamış referans uydurulamaz.

## 3. Active Wave Execution Rule

- Ajan aynı anda yalnız tek bir aktif wave (`CURRENT_STATUS.md` içindeki `Active Wave`) üzerinde çalışır.
- Aktif wave'in `Implementation Checklist` maddeleri sırayla uygulanır.
- Aktif wave tamamlanmadan sonraki wave'in kodlamasına geçilemez.

## 4. Coding / Architecture Conventions

- **Clean Data-Access Boundary**: UI presentation bileşenleri veriyi doğrudan HTML içine gömmemeli; `CompanyService` katmanı üzerinden okumalıdır (`TECH_CONTEXT.md`).
- **No Throwaway Code**: Demo/prototype scope'u kod ve mimari kalite tabanını düşürmez; temiz, okunabilir ve genişletilebilir JS/CSS yazılmalıdır.
- **Industrial Design System**: `DESIGN_RULES.md` ile tanımlanan renkler (`#0F141C`, `#1A212D`, `#FFB800`) ve tipografi disiplinle uygulanmalıdır.

## 5. Verification Mandates

- Kodlama değişikliğinin ardından tarayıcı konsolunda 0 JS hatası olduğu doğrulanmalıdır.
- Telefon (`tel:`) ve e-posta (`mailto:`) CTA bağlantılarının çalıştığı test edilmelidir.
- Mobil ve masaüstü responsive düzenlerin kusursuz olduğu doğrulanmalıdır.

## 6. Documentation Update / Handoff Rule

- Bir task veya wave tamamlandığında ajan `CURRENT_STATUS.md` ve `NEXT_TASKS.md` dosyalarını günceller.
- Yeni bir teknik karar alındığında `ai/DECISIONS.md` dosyasına kaydedilir.

## 7. Stop / Clarification Rules

Ajan aşağıdaki durumlarda durmalı ve clarification talep etmelidir:
- Kapsam dışı form backend, harita script'i veya WhatsApp entegrasyonu talep edildiğinde.
- Doğrulanmamış firma iddiaları veya sahte sertifika eklenmesi istendiğinde.
