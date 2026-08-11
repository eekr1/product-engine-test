# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye katılan herhangi bir AI ajanı veya yetkin geliştirici, kod yazmaya veya karar almaya başlamadan önce dokümanları tam olarak şu sırayla okumalıdır:

1. [README.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/README.md)
2. [PROJECT_BRAIN.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/PROJECT_BRAIN.md)
3. [PRODUCT_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/PRODUCT_RULES.md)
4. [TECH_CONTEXT.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/TECH_CONTEXT.md)
5. [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/design/DESIGN_RULES.md)
6. [PROJECT_PLAN.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/project/PROJECT_PLAN.md)
7. [WAVE_MAP.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/waves/WAVE_MAP.md)
8. [CURRENT_STATUS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/CURRENT_STATUS.md)
9. Aktif Wave Planı ([WAVE_00.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/waves/plans/WAVE_00.md) veya [WAVE_01.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/waves/plans/WAVE_01.md))
10. [NEXT_TASKS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/NEXT_TASKS.md)
11. [AGENT_INSTRUCTIONS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/AGENT_INSTRUCTIONS.md) (Bu dosya)
12. [DECISIONS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/DECISIONS.md)

## 2. Agent Behavior Rules

- **MODE-AGNOSTIC**: Ajan belirli bir LLM sağlayıcısına (Claude, GPT, Gemini, Codex) özel gizli çıkarım yapmamalı; yalnız bu proje belgelerindeki kurallara uymalıdır.
- **QUALITY FLOOR**: Projenin `Prototype` veya demo olması throwaway kod, kontrolsüz spagetti bileşenler veya uydurma veriler anlamına gelmez.
- **NO INVENTED DATA**: Firma unvanları, hizmetleri ve yetkili servis durumları kaynak belgeden sapmamalıdır.

## 3. Active Wave Execution Rule

- Ajan yalnız [CURRENT_STATUS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/CURRENT_STATUS.md) ve [NEXT_TASKS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/NEXT_TASKS.md) belgelerinde belirtilen **aktif dalga (active wave)** sınırları içinde kod üretmelidir.
- Aktif dalganın dışına çıkılamaz, sonraki dalga işleri sessizce uygulanamaz.

## 4. Coding / Architecture Conventions

- **Component-Based UI**: UI bileşenleri presentation odaklı olmalı, veri okuma işlemlerini `CompanyService` veya data provider katmanı üzerinden gerçekleştirmelidir.
- **Native / Pure CSS & HTML**: Proje visual concept ve tipografi kuralları [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/design/DESIGN_RULES.md) üzerinden uygulanmalıdır.
- **Clean Service Boundaries**: Mock veri ile UI bileşenleri arasına doğrudan bağımlılık kurulmamalıdır.

## 5. Verification Mandates

- Üretilen kod çalıştırılmadan ve tarayıcıda/onizlemede kontrol edilmeden "tamamlandı" ilan edilemez.
- Mobil responsive kırılmalar ve tipografik okunabilirlik mutlaka test edilmelidir.

## 6. Documentation Update / Handoff Rule

- Bir dalga veya önemli görev tamamlandığında ajan:
  1. [CURRENT_STATUS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/CURRENT_STATUS.md) belgesindeki aktif wave ve tamamlanan işler alanını güncellemelidir.
  2. [NEXT_TASKS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/NEXT_TASKS.md) belgesindeki sıradaki iş listesini yenilemelidir.
  3. Yeni bir mimari/tasarım kararı alındıysa bunu [DECISIONS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/DECISIONS.md) belgesine eklemelidir.

## 7. Stop / Clarification Rules

- Doğrulanmamış yeni bir firma bilgisi gereksinimi ortaya çıktığında dur ve kullanıcıya danış.
- Uygulama esnasında mimari sınırlar veya kısıtlar çelişirse, koda devam etme; `DECISIONS.md` veya kullanıcı netleştirmesine başvur.
