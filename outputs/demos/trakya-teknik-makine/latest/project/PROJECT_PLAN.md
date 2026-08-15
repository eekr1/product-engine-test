# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

- **Teslimat Yaklaşımı**: Satış görüşmelerinde kullanılmak üzere hazırlanan frontend-only kurumsal web sitesi demo stratejisi.
- **Mimari Strateji**: Decoupled presentation & local mock data adapter mimarisi.
- **Teslimat Olgunluğu**: `delivery_profile: Prototype` — throwaway architecture kullanılmadan yüksek görsellik ve temiz veri sınırlarıyla satışa hazır demo.

## 2. Phases / Milestones

- **Milestone 1: Foundation & Boundary Setup (`WAVE_00`)** — Modüler CSS, design tokens ve local mock data adapter tamamlanması.
- **Milestone 2: Brand Identity & Hero Release (`WAVE_01`)** — Trakya Teknik Makine & Disan Yetkili Servisi karşılama yüzeyinin tamamlanması.
- **Milestone 3: Core Services Presentation Release (`WAVE_02`)** — 3 approved hizmet kart ve detay vitrininin tamamlanması.
- **Milestone 4: Direct Contact Console Release (`WAVE_03`)** — Telefon/e-posta direct contact CTA arayüzünün tamamlanması.
- **Milestone 5: Demo Release & Quality Gate (`WAVE_04`)** — Çapraz cihaz responsive, WCAG uyumu ve satış sunumuna hazır yayın.

## 3. Wave Relationship

```text
WAVE_00 (Foundation)
  └──► WAVE_01 (Hero & Disan Identity)
        ├──► WAVE_02 (3 Core Services)
        └──► WAVE_03 (Direct Contact)
              └──► WAVE_04 (Final QA & Demo Publication)
```

`PROJECT_PLAN.md` `WAVE_MAP.md` ile birebir aynı teslim sırasını takip eder.

## 4. Dependency Overview

- HTML/CSS/JS modüler yapı -> Disan Yetkili Servis Hero -> 3 Hizmet Kartı -> Direct Contact Console -> QA & Release.

## 5. Deliverables

- **Sistem Mimarisi ve Kod**: HTML5, Vanilla CSS3, Vanilla JS ES6 Modules, local mock adapter (`src/`).
- **Dokümantasyon Paket v0.2.0**: README, PROJECT_BRAIN, PRODUCT_RULES, TECH_CONTEXT, DESIGN_RULES, WAVE_MAP, WAVE_PLAN (00..04), CURRENT_STATUS, NEXT_TASKS, AGENT_INSTRUCTIONS, DECISIONS.
- **Çıktı Konumu**: `outputs/demos/trakya-teknik-makine/versions/v0.2/`.

## 6. Acceptance Conditions

- 0 Konsol hatası.
- Mobil ve masaüstünde tam responsive uyum.
- Approved kısıtlara %100 sadakat (uydurma backend/veri olmaması).

## 7. Scope Growth / Upgrade Boundaries

- **Gelecek Kapsam (Future Scope)**: Gerçek backend/API entegrasyonu, CMS paneli, canlı harita, WhatsApp widget'ı ve online form submit backend'i. Bugünkü demo scope'una dahil edilmemiştir.
