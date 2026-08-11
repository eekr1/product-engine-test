# Trakya Teknik Makine — Project Plan

## 1. Delivery Strategy

Bu proje, Trakya Teknik Makine için potansiyel müşterilere yönelik satış görüşmelerinde gösterilmek üzere modüler ve aşamalı bir kurumsal frontend demo teslimat stratejisini benimser. Teslimat olgunluğu `Prototype`, planlama derinliği `standard` olarak belirlenmiştir. Kod mimarisi temiz service boundary ve modüler bileşen yapısı ile kurgulanır.

---

## 2. Phases / Milestones

- **Milestone 1: Foundation & Setup (Wave 00)**
  - Proje mimarisinin, CSS değişkenlerinin/design token'larının ve `MockDataService` adaptör katmanının tamamlanması.
- **Milestone 2: Core Frontend UI Development (Wave 01)**
  - Modern Hero bölümü, Disan Hidrolik Yetkili Servis tanımı vurgusu ve 3 temel hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) bileşenlerinin geliştirilmesi.
- **Milestone 3: Polish & Demo Readiness (Wave 02)**
  - Responsive cilalama, iletişim CTA'ları, erişilebilirlik doğrulayıcıları ve satış görüşmesine hazır demo yayını.

---

## 3. Wave Relationship

- `WAVE_00` -> Temel altyapı ve mock data adaptörü kurulur.
- `WAVE_01` -> Ana arayüz ve hizmet gösterim bileşenleri geliştirilir.
- `WAVE_02` -> Responsive uyumluluk, iletişim akışları ve nihai demo kabul doğrulaması yapılır.

Detaylı dalga planlaması için bkz: [waves/WAVE_MAP.md](../waves/WAVE_MAP.md)

---

## 4. Dependency Overview

1. Approved Project Input & Canonical User Approval (`INPUT-TRAKYA-TEKNIK-MAKINE-V1`)
2. Design Rules & Anti-Template Principles (`DESIGN_RULES.md`)
3. Service Adapter Interface & Mock Data Layer (`TECH_CONTEXT.md`)

---

## 5. Deliverables

- Çalışır, responsive ve modern kurumsal frontend demo web uygulaması.
- Tamamlanmış ve ajana hazır dokümantasyon paketi (`README.md`, `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`, `TECH_CONTEXT.md`, `DESIGN_RULES.md`, `WAVE_MAP.md` vb.).

---

## 6. Acceptance Conditions

1. Demo ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern ve profesyonel görünmelidir.
2. Sektör şablonu (generic corporate template) hissi vermemeli, projeye özel visual concept taşımalıdır.
3. Firmanın 3 temel hizmeti ve mevcut sitesindeki yetkili servis beyanı net biçimde anlaşılmalıdır.
4. Mobil ve masaüstü cihazlarda sorunsuz çalışmalıdır.
5. Service boundary ilkeleri korunmalı, veri UI bileşenlerine doğrudan gömülmemelidir.

---

## 7. Scope Growth / Upgrade Boundaries

- **Mevcut Scope**: Satış görüşmesi amaçlı kurumsal frontend demo.
- **Future Scope (Onay Gerektirir)**: Satış sonrası müşteri onayı alındığında CMS/Admin paneli entegrasyonu, gerçek backend API servisleri, online teklif/iletişim formu ve production domain taşıması ayrıca planlanabilir.
