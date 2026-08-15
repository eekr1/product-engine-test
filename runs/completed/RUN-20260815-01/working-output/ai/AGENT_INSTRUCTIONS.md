# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Projeye yeni başlayan veya göreve devam eden yetkin AI ajanı dosyaları şu sırayla okumalıdır:

1. `README.md` (Giriş ve okuma düzeni)
2. `ai/PROJECT_BRAIN.md` (Proje kimliği, amacı ve bağlamı)
3. `ai/PRODUCT_RULES.md` (İş mantığı ve kapsam kuralları)
4. `ai/TECH_CONTEXT.md` (Teknoloji stack'i ve service boundary)
5. `design/DESIGN_RULES.md` (Visual concept, renkler, tipografi ve düzen)
6. `project/PROJECT_PLAN.md` (Roadmap ve milestone ilişkisi)
7. `waves/WAVE_MAP.md` (Dalga mimarisi ve scope sınırları)
8. `ai/CURRENT_STATUS.md` (Mevcut durum ve aktif wave)
9. Active `waves/plans/WAVE_<NN>.md` (Yürütülecek wave planı)
10. `ai/NEXT_TASKS.md` (Sıradaki somut görev sırası)
11. `ai/DECISIONS.md` & `ai/AGENT_INSTRUCTIONS.md`

## 2. Agent Behavior Rules

- **Source Closed Principle**: Sadece `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` ve `SOURCE_REGISTER.md` FCL allowlist içindeki firma bilgileri kullanılabilir. Dış web araştırması ile yeni iddia veya qualifier uydurulamaz.
- **Model Neutrality**: Ajan modele özel kod, prompt veya private reasoning üretmez; standart clean web kodlaması uygular.
- **No Prototype Quality Floor Reduction**: Proje `Prototype` delivery profile'ına sahip olsa da temiz kod, modüler yapı, responsive uyum ve erişilebilirlik standartlarından taviz verilemez.

## 3. Active Wave Execution Rule

- Ajan aynı anda yalnızca `CURRENT_STATUS.md` içindeki aktif `WAVE_<NN>` planını yürütebilir.
- Aktif wave'in dışına çıkılamaz veya sonraki wave'in işleri önden yapılamaz.
- Aktif wave planındaki tüm kabul kriterleri sağlanmadan wave kapatılamaz.

## 4. Coding / Architecture Conventions

- **Pure Vanilla CSS & Design Tokens**: TailwindCSS veya ağır CSS kütüphanesi kullanılmayacaktır; `styles/main.css` içindeki CSS değişkenleri (`:root`) kullanılır.
- **Clean Service Layer Boundary**: Presentation bileşenleri doğrudan mock objelere erişmez; `companyService.js` üzerinden veri talep eder.
- **Strict Factual Content Boundary**: Sitede geçen firma unvanı "Trakya Teknik Makine", yetkili servis rozeti "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi", hizmetler ise strictly 3 approved hizmetten ibarettir.

## 5. Verification Mandates

- Her kod değişikliğinden sonra tarayıcıda responsive düzen ve konsol temizliği doğrulanmalıdır.
- Direct contact butonlarının `tel:` ve `mailto:` URI formatını doğru taşıdığı kontrol edilmelidir.
- Sitede hiçbir kırık link, eksik görsel veya taşan metin kalmamalıdır.

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında ajan:
  1. İlgili `WAVE_<NN>.md` planının `Wave Result` bölümünü günceller.
  2. `CURRENT_STATUS.md` içindeki aktif wave'i bir sonraki dalgaya kaydırır ve tamamlanan işleri ekler.
  3. `NEXT_TASKS.md` dosyasını yeni aktif wave'in görev sırasıyla günceller.
  4. Alınan yeni teknik kararlar varsa `ai/DECISIONS.md` dosyasına kaydeder.

## 7. Stop / Clarification Rules

- Approved scope dışında yeni bir etkileşim (harita, WhatsApp, form backend, DB vb.) talep edilirse ajan durmalı ve onaylı snapshot sınırlarını hatırlatmalıdır.
- Kaynakta bulunmayan yeni firma gerçeği eklenmesi istendiğinde durulmalıdır.
