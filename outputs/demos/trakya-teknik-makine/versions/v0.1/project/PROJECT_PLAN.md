# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

Projenin teslim stratejisi, Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki doğrulanmış firma içeriklerini koruyarak, potansiyel müşteri satış görüşmesinde sergilenebilecek modern, responsive ve yüksek kaliteli bir frontend demosu üretmektir. Proje `demo-frontend` paketi, `Prototype` delivery profile, `standard` implementation planning ve `light` design planning derinliği ile yürütülmektedir.

## 2. Phases / Milestones

1. **Phase 1: Project Setup & Technical Foundation (Milestone M1)**
   - Proje iskeletinin kurulması, design tokens CSS'in hazırlanması ve mock data service katmanının tanımlanması (WAVE_00).
2. **Phase 2: Primary Entry & Hero Interface (Milestone M2)**
   - Marka karşılama, Header/Nav barı, Hero alanı ve Disan Hidrolik Yetkili Servis rozetinin kurulması (WAVE_01).
3. **Phase 3: Service Presentation & Trust Building (Milestone M3)**
   - 3 temel hizmet kartının (Yedek Parça Temini, Yerinde Teknik Destek, Bakım-Onarım) ve kurumsal tanıtım bölümünün inşası (WAVE_02).
4. **Phase 4: Contact & Conversion Touchpoints (Milestone M4)**
   - İletişim kartı, telefon/e-posta CTA butonları ve footer alanının tamamlanması (WAVE_03).
5. **Phase 5: Cross-Device QA & Presentation Verification (Milestone M5)**
   - Mobil/masaüstü responsive kontrolleri, sıfır-hata doğrulaması ve demoyla satış sunumuna hazır hale gelinmesi (WAVE_04).

## 3. Wave Relationship

```text
Phase 1: M1 → WAVE_00 (Foundation & Core Service Boundary)
Phase 2: M2 → WAVE_01 (Primary Entry & Brand Hero)
Phase 3: M3 → WAVE_02 (Corporate Trust & 3 Primary Services)
Phase 4: M4 → WAVE_03 (Contact & Conversion Touchpoints)
Phase 5: M5 → WAVE_04 (Cross-Cutting QA & Presentation Optimization)
```

## 4. Dependency Overview

- Her wave bir önceki dalganın tamamlanmış ve çalışan kod tabanına bağımlıdır.
- WAVE_00 olmadan UI bileşenleri geliştirilemez.
- WAVE_01 (Hero) kurulmadan Hizmetler ve İletişim akışına geçilemez.
- WAVE_04 (Final QA) tüm yüzeyler tamamlanmadan başlatılamaz.

## 5. Deliverables

- Agent-ready dokümantasyon paketi (`README.md`, `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`, `TECH_CONTEXT.md`, `DESIGN_RULES.md`, `WAVE_MAP.md`, `WAVE_PLAN` instances).
- Çalışır frontend demo kaynak kodları (`index.html`, `src/styles/`, `src/services/`, `src/components/`).
- Satış görüşmesi sunum demosu.

## 6. Acceptance Conditions

- Sitenin ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern ve profesyonel görünmesi.
- 3 temel hizmet ve Disan Hidrolik yetkili servisliğinin net dökülmesi.
- Mobilde ve masaüstünde sıfır responsive düzen kırılması ve sıfır konsol hatası.
- Clean frontend data/service boundary yapısının korunması.

## 7. Scope Growth / Upgrade Boundaries

- **Current Scope**: Standart HTML/CSS/JS frontend satış demosu.
- **Future Upgrade Boundary (Sales Success)**: Satış görüşmesi başarılı geçerse, sonraki aşamada gerçek headless CMS / REST API backend entegrasyonu, yönetim paneli ve canlı production deployment kapsamları ayrı bir `Implementation Ready` / `Production Ready` run ile açılabilir.
