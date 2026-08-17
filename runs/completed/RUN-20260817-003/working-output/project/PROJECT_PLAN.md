# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Bu projenin temel teslimat stratejisi, Trakya Teknik Makine için proaktif satış görüşmelerinde müşterilere gösterilebilecek modern, yüksek kalitede, responsive ve güven veren kurumsal bir frontend landing page demosu hazırlamaktır. Teslimat olgunluğu `Prototype` seviyesindedir. Temiz bir frontend service/data boundary (`presentationService.js`) kurularak, gelecekte gerçek backend veya CMS eklendiğinde kod tabanının yeniden yazım gerektirmeksizin genişlemesi (continuation readiness) sağlanmıştır.

## 2. Phases / Milestones

- **Milestone 1: Project Boot & Architecture Foundation (Phase 1)**
  - Vite + React + Vanilla CSS altyapısının scaffolding'i.
  - CSS custom properties (design tokens) ve modüler renk/tipografi sisteminin kurulması.
  - Presentation service boundary adaptörünün dondurulmuş Factual Allowlist ile yapılandırılması.
- **Milestone 2: Global Shell & Corporate Identity Presentation (Phase 2)**
  - Kurumsal başlık, navigasyon barı, firma adı ve "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" unvanının öne çıkarıldığı hero yüzeyinin geliştirilmesi.
- **Milestone 3: Service Presentation & Direct-Contact Capabilities (Phase 3)**
  - Doğrulanmış 3 hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) kart yüzeyleriyle sunulması.
  - Telefon (`tel:`) ve e-posta (`mailto:`) direct-contact CTA butonlarının entegre edilmesi.
- **Milestone 4: Responsive Polish & Sales Demo Readiness (Phase 4)**
  - Mobil, tablet ve masaüstü breakpoint uyumunun tamamlanması, kontrollü motion ve etkileşim durumlarının (hover, active, focus) cilalanması.
  - Demo build'inin (`npm run build`) doğrulanması.

## 3. Wave Relationship

Proje teslimat aşamaları [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) belgesindeki 4 isolated dalga ile 1-e-1 eşleşir:

- **Phase 1** → [WAVE_00](../waves/plans/WAVE_00.md): Foundation & Design System Infrastructure
- **Phase 2** → [WAVE_01](../waves/plans/WAVE_01.md): Global Shell & Corporate Header Presentation
- **Phase 3** → [WAVE_02](../waves/plans/WAVE_02.md): Verified Services & Direct-Contact Capabilities
- **Phase 4** → [WAVE_03](../waves/plans/WAVE_03.md): Responsive Polish & Sales Demo Readiness

## 4. Dependency Overview

```text
WAVE_00 (Foundation & Service Boundary)
   │
   ▼
WAVE_01 (Global Shell & Corporate Identity)
   │
   ▼
WAVE_02 (Services Grid & Direct-Contact CTA)
   │
   ▼
WAVE_03 (Responsive Polish & Sales Demo Readiness)
```

## 5. Deliverables

1. Paket kontrollü, modüler Vite+React frontend demo kod tabanı.
2. `src/services/presentationService.js` izole içerik adaptör katmanı.
3. `src/styles/tokens.css` endüstriyel görsel tasarım token'ları.
4. Tam çalışan responsive kurumsal landing page demosu.
5. Satış demosu için derlenmiş static build paketi (`dist/`).

## 6. Acceptance Conditions

- Demo ilk bakışta modern, profesyonel ve endüstriyel uzmanlık odaklı olmalı.
- Firma adı, yetkili servis statüsü ve 3 approved hizmet net biçimde sunulmalı.
- Direct-contact CTA butonları (telefon/e-posta) tıklanabilir/dokunulabilir olmalı.
- Source-backed olmayan hiçbir uydurma veri, stok, SLA veya acil servis iddiası yer almamalı.
- Masaüstü ve mobil görünümler hatasız render olmalı.

## 7. Scope Growth / Upgrade Boundaries

- **Mevcut Kapsam (Current Committed Scope)**: Statik presentation config destekli frontend landing page demosu.
- **Gelecek Kapsam (Future Possibilities / Out of Scope)**: Müşteri demoyu onayladıktan sonra eklenebilecek olan gerçek backend, CMS/admin paneli, canlı harita entegrasyonu, WhatsApp sohbet modülü, form submit backend'i ve production deployment. Bu gelecek adımlar bugünkü koda veya tasarıma zorla dahil edilemez.
