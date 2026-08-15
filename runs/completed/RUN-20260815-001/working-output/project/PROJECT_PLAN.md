# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

- **Strategy**: Proaktif satış görüşmesinde gösterilmek üzere `Prototype` teslim olgunluğunda, modern, responsive ve temiz mimarili bir kurumsal frontend demo hazırlamaktır.
- **Planning Profiles**: `implementation_planning: standard`, `design_planning: light`.
- **Architectural Boundary**: Veri erişimi local static mock adapter katmanına soyutlanmış presentation bileşenlerinden oluşur. sahte backend veya API uygulaması yapılmaz.

## 2. Phases / Milestones

- **Milestone 0: Foundation & Data Architecture (WAVE_00)** — HTML/CSS temeli, CSS değişkenleri ve `companyService.js` mock static data adapter'ının kurulması.
- **Milestone 1: Identity & Hero Surface (WAVE_01)** — Header Shell ve Disan Hidrolik Yetkili Servisi statüsünü sunan Hero bölümünün tamamlanması.
- **Milestone 2: Corporate Background & Trust (WAVE_02)** — Trakya bölgesi endüstriyel makine servis bağlamını açıklayan Kurumsal bölümün tamamlanması.
- **Milestone 3: Core Services Showcase (WAVE_03)** — 3 approved hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) spesifikasyon kartlarıyla sergilenmesi.
- **Milestone 4: Direct Contact & Footer Surface (WAVE_04)** — Telefon (`tel:`) ve E-posta (`mailto:`) direct CTA alanlarının ve kurumsal Footer'ın tamamlanması.
- **Milestone 5: Integrated Demo Package & QA (WAVE_05)** — Bütüncül responsive uyum, cross-surface doğrulamaları ve satış demosu kabul doğrulaması.

## 3. Wave Relationship

Roadmap planı `WAVE_MAP.md` içindeki 6 dalga ile birebir sıralıdır:

```text
WAVE_00 (Foundation) → WAVE_01 (Hero) → WAVE_02 (Corporate) → WAVE_03 (Services) → WAVE_04 (Contact) → WAVE_05 (QA)
```

## 4. Dependency Overview

- `WAVE_00` temel stil ve veri erişim arayüzüdür; tüm sonraki dalgalar bu altyapıya dayanır.
- UI bileşenleri sırasıyla Header/Hero (`WAVE_01`), Kurumsal (`WAVE_02`), Hizmetler (`WAVE_03`) ve İletişim (`WAVE_04`) sırasında inşa edilir.
- `WAVE_05` tüm bileşenlerin entegrasyonunu doğrular.

## 5. Deliverables

- Agent-ready dökümantasyon paketi (`README.md`, `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`, `TECH_CONTEXT.md`, `DESIGN_RULES.md`, `WAVE_MAP.md`, `WAVE_00.md` - `WAVE_05.md`, `PROJECT_PLAN.md`, `CURRENT_STATUS.md`, `NEXT_TASKS.md`, `AGENT_INSTRUCTIONS.md`, `DECISIONS.md`).
- Bütüncül frontend demo kod bazı (`index.html`, `src/services/`, `src/components/`, `src/styles/`).

## 6. Acceptance Conditions

- [x] Satış demosu proaktif sunum için hazır, modern ve profesyonel görünüyor.
- [x] Firma kimliği, Disan Hidrolik Yetkili Servisi statüsü ve 3 approved hizmet ilk bakışta anlaşılıyor.
- [x] Direct contact CTA'ları (`tel:`, `mailto:`) tıklandığında cihazın iletişim uygulamalarını tetikliyor.
- [x] FCL-001 - FCL-007 dışı hiçbir uydurma iddia veya veri bulunmuyor.
- [x] Clean presentation-data access boundary korunuyor.

## 7. Scope Growth / Upgrade Boundaries

- **Gelecek Kapsam (Future Possibilities)**: Müşteri satış demosu sonrası talep ederse backend, gerçek veritabanı, form submit backend'i, canlı harita veya WhatsApp entegrasyonları ayrı bir sürüm (`v1.0+`) olarak ele alınabilir. Bugünü etkilemez.
