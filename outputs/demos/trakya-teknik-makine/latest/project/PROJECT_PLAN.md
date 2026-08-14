# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

- **Strategy**: Proje, potansiyel müşteri satış görüşmesinde güven artırmak amacıyla geliştirilen modern bir kurumsal frontend satış demosudur (`delivery_profile: Prototype`).
- **Execution Depth**: `implementation_planning: standard` derinliğinde tutulmuş, 5 sıralı dalgaya (`WAVE_00` .. `WAVE_04`) bölünmüştür.
- **Data Architecture Strategy**: Sunucu bağımlılığı olmadan presentation katmanını modüler tutan local static data adapter (`MachineService`) yaklaşımı benimsenmiştir.

## 2. Phases / Milestones

- **Phase 1: Foundation & Architecture Setup**
  - *Milestone 1*: Baseline HTML5, CSS design tokens (`#0F141C`, `#FF6B00`, Inter) ve `MachineService` adapter'ının tamamlanması (`WAVE_00`).
- **Phase 2: Core Surface Delivery**
  - *Milestone 2*: Hero alanı ve Disan Hidrolik yetkili servis rozetinin yayına alınması (`WAVE_01`).
  - *Milestone 3*: 3 temel hizmet alanının (Yedek Parça, Teknik Destek, Bakım-Onarım) kartlarla sunulması (`WAVE_02`).
  - *Milestone 4*: İletişim detayları ve tel/mailto CTA'larının kurulması (`WAVE_03`).
- **Phase 3: Quality Assurance & Launch**
  - *Milestone 5*: Responsive breakpoint, WCAG AA kontrast ve satış demosu gösterim QA kontrolünün tamamlanması (`WAVE_04`).

## 3. Wave Relationship

| Phase | Target Wave | Purpose | Handoff Product |
|---|---|---|---|
| Phase 1 | `WAVE_00` | Foundation & Data Boundary | Baseline CSS tokens & `MachineService` |
| Phase 2 | `WAVE_01` | Hero & Corporate Trust | Hero & Yetkili Servis Badge |
| Phase 2 | `WAVE_02` | Services Presentation | 3 Core Service Cards Grid |
| Phase 2 | `WAVE_03` | Contact & Direct CTA | Tel/Mailto Direct CTAs & Address |
| Phase 3 | `WAVE_04` | Final QA & Presentation Verification | Published Validated Demo Output |

## 4. Dependency Overview

- `WAVE_00` (Foundation) -> `WAVE_01` (Hero) -> `WAVE_02` (Services) -> `WAVE_03` (Contact) -> `WAVE_04` (QA).
- Bağımlılık zinciri doğrusal (linear) ve dairesel olmayan (acyclic) yapıdadır.

## 5. Deliverables

- `README.md` (Project Output Read-Order Navigation).
- Canonical AI dokümantasyon paketi (`PROJECT_BRAIN.md`, `PRODUCT_RULES.md`, `TECH_CONTEXT.md`, `CURRENT_STATUS.md`, `NEXT_TASKS.md`, `AGENT_INSTRUCTIONS.md`, `DECISIONS.md`).
- `DESIGN_RULES.md` (Projeye özgü endüstriyel visual direction ve anti-template kuralı).
- `WAVE_MAP.md` ve 5 adet detaylandırılmış `WAVE_<NN>.md` planı.
- Temiz, responsive ve modüler frontend demo kaynak kodları.

## 6. Acceptance Conditions

- Proje demo çıktısı ilk bakışta eski SITE123 sitesinden belirgin biçimde daha modern ve kurumsal görünmelidir.
- Disan Hidrolik yetkili servisliği ve 3 ana hizmet net biçimde anlaşılmalıdır.
- Gerçek backend veya sahte form modalları barındırmamalı, doğrudan CTA'lar çalışmalıdır.
- Mobil ve masaüstü ekranlarda kusursuz uyumluluk gösterilmelidir.

## 7. Scope Growth / Upgrade Boundaries

- **Satış Sonrası Olası Büyüme (Future Scope)**: Müşteri onayı alındığında gerçek CMS entegrasyonu, dinamik iletişim formu API adapter'ı ve production domain DNS geçişi ayrı bir proje fazı olarak ele alınacaktır.
