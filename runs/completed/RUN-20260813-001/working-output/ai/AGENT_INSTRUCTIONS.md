# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye katılan herhangi bir yetkin AI ajanın uyması gereken zorunlu okuma sırası:

1. [README.md](../README.md) — Giriş ve doküman haritası
2. [PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje kimliği ve amacı
3. [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün iş kuralları ve kısıtlamalar
4. [TECH_CONTEXT.md](./TECH_CONTEXT.md) — Mimari, stack ve integration boundary'leri
5. [DESIGN_RULES.md](../design/DESIGN_RULES.md) — Visual concept ve tasarım kuralları
6. [PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Üst seviye teslimat haritası
7. [WAVE_MAP.md](../waves/WAVE_MAP.md) — Dalga planlama sırası
8. [CURRENT_STATUS.md](./CURRENT_STATUS.md) — Aktif wave ve mevcut durum
9. Aktif Wave Planı (Örn: [WAVE_00.md](../waves/plans/WAVE_00.md))
10. [NEXT_TASKS.md](./NEXT_TASKS.md) — Sıradaki somut görevler
11. [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md) — Bu çalışma talimatları belgesi
12. [DECISIONS.md](./DECISIONS.md) — Mimari ve ürün kararları

## 2. Agent Behavior Rules

- **Model Bağımsızlığı:** Ajan kendisini belirli bir AI sağlayıcısına bağımlı kılacak kodlar yazamaz. Markdown ve standart kod araçlarıyla çalışır.
- **Sessiz Varsayım Yasağı:** Kritik eksikliklerde veya kullanıcı onayı gereken durumlarda uydurma veri üretemez.
- **Throwaway Architecture Yasağı:** Demo/Prototype olması kod veya mimari kalitesini düşürmek için gerekçe değildir.

## 3. Active Wave Execution Rule

- Ajan aynı anda yalnızca aktif olan `WAVE_<NN>.md` scope'unu yürütür.
- Aktif wave dışındaki sonraki dalgaların görevlerini sessizce öne çekemez veya tamamlandı olarak işaretleyemez.
- Aktif wave tamamlandığında `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenerek bir sonraki wave'e geçilir.

## 4. Coding / Architecture Conventions

- **Presentation ↔ Data Separation:** UI bileşenleri veriyi doğrudan hardcode yazamaz; `data/companyData.js` mock service katmanı üzerinden okur.
- **CSS Variables:** Tüm renkler, fontlar ve aralıklar `styles/tokens.css` içindeki CSS değişkenleri üzerinden tanımlanır.
- **Semantik HTML:** HTML5 semantik elemanları (`header`, `nav`, `main`, `section`, `footer`) zorunludur.

## 5. Verification Mandates

- Kod yazıldıktan veya değiştirildikten sonra tarayıcı konsolunda JavaScript hatası ve kırık stil bağlantısı olmadığı doğrulanmalıdır.
- Mobil ve masaüstü görünümler responsive açıdan test edilmelidir.

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında ilgili `WAVE_<NN>.md` içindeki Wave Result bölümü güncellenir.
- Alınan yeni kalıcı teknik veya mimari kararlar `DECISIONS.md` belgesine eklenir.

## 7. Stop / Clarification Rules

- Execution-critical bir karar unresolved durumdaysa veya kullanıcı onayı gerekiyorsa ajan çalışmayı durdurur ve kullanıcıya açık soru yöneltir.
