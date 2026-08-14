# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

- **Teslimat Yaklaşımı**: Satış görüşmesi odaklı kurumsal frontend demo (`delivery_profile: Prototype`).
- **Execution Derinliği**: `implementation_planning: standard` seviyesinde 5 aşamalı net wave roadmap'i.
- **Mimari Strateji**: Presentation katmanı ile mock veri katmanını ayrıştıran clean client-side architecture (`CompanyService`).

## 2. Phases / Milestones

- **Phase 1: Foundation & Entry Presentation (Milestone M1)**
  - `WAVE_00`: Environment & Service Boundary Setup
  - `WAVE_01`: Brand & Primary Entry / Hero Presentation
- **Phase 2: Technical Expertise & Conversion (Milestone M2)**
  - `WAVE_02`: Services & Technical Capability Presentation
  - `WAVE_03`: Corporate Identity & Direct Contact Conversion
- **Phase 3: QA & Demo Readiness (Milestone M3)**
  - `WAVE_04`: Cross-Cutting Integration, Responsive & Presentation QA

## 3. Wave Relationship

Planlanan 5 wave, `WAVE_MAP.md` ile birebir aynı delivery sırasını takip eder:
`WAVE_00` -> `WAVE_01` -> `WAVE_02` -> `WAVE_03` -> `WAVE_04`.

## 4. Dependency Overview

- `WAVE_01`, `WAVE_00` servis ve CSS altyapısına dayanır.
- `WAVE_02` ve `WAVE_03`, `WAVE_01` sayfa düzeni sürekliliğine dayanır.
- `WAVE_04`, tüm önceki dalgaların tamamlanmış olmasına dayanır.

## 5. Deliverables

- Agent-ready proje dokümantasyon paketi (`PROJECT_BRAIN`, `PRODUCT_RULES`, `TECH_CONTEXT`, `DESIGN_RULES`, `WAVE_MAP`, `WAVE_PLAN` instances).
- Çalışır responsive frontend demo web uygulaması.

## 6. Acceptance Conditions

- [x] Tüm zorunlu ve conditional canonical dokümanlar üretildi.
- [x] 5 wave planı detaylandırıldı.
- [x] Demo 0 konsol hatasıyla responsive çalışıyor.
- [x] Satış görüşmesinde sunulmaya %100 hazır.

## 7. Scope Growth / Upgrade Boundaries

- **Mevcut Kapsam (Current Scope)**: Frontend demo, mock adapter verisi, doğrudan telefon/e-posta CTA'ları.
- **Gelecek Büyüme (Future Possibilities)**: Gerçek CMS / Admin paneli entegrasyonu, canlı iletişim formu API'si, interaktif Google Maps JavaScript entegrasyonu, WhatsApp sohbet widget'ı, canlı domain/hosting taşıma.
