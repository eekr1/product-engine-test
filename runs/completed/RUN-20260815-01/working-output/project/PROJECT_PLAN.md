# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Bu proje proaktif kurumsal satış görüşmelerinde müşteriye sunulmak üzere `Prototype` teslim olgunluğunda hazırlanacak bir frontend satış demodur. 

Teslimat stratejisi:
- Temiz modüler UI mimarisi.
- Mock/local data service/adapter boundary (`companyService.js`).
- Yalnızca onaylı 3 temel hizmet (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) ve yetkili servis statüsünün sunumu.
- Dalga bazlı sıralı execution (`WAVE_00` .. `WAVE_04`).

## 2. Phases / Milestones

- **Milestone 1 (Foundation & Architecture Boundary)**: Proje scaffolding, CSS design tokens ve `companyService` veri soyutlama katmanının tamamlanması (`WAVE_00`).
- **Milestone 2 (Brand Identity & Hero Surface)**: Trakya Teknik Makine marka kimliği ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi rozetinin ana sayfada sunulması (`WAVE_01`).
- **Milestone 3 (Core Services Presentation)**: Approved 3 temel hizmetin görsel ve metinsel kartlar halinde sunulması (`WAVE_02`).
- **Milestone 4 (Direct Contact & Regional Trust)**: Telefon/e-posta direct contact CTA yüzeyleri, mobil aksiyon barı ve Trakya bölgesi kurumsal servis bağlamının tamamlanması (`WAVE_03`).
- **Milestone 5 (Final Sales Demo & Release QA)**: Tüm sayfanın uçtan uca responsive, service boundary ve satış olgunluğu kontrollerinden geçerek yayınlanması (`WAVE_04`).

## 3. Wave Relationship

Project Plan, `WAVE_MAP.md` belgesindeki dalga sırasını aynen takip eder:

```text
Milestone 1: WAVE_00 (Foundation & Data Access Boundary)
     ↓
Milestone 2: WAVE_01 (Brand Identity & Hero Surface)
     ↓
Milestone 3: WAVE_02 (Core Services Presentation)
     ↓
Milestone 4: WAVE_03 (Direct Contact CTA & Regional Context)
     ↓
Milestone 5: WAVE_04 (Final Integration & Presentation QA)
```

## 4. Dependency Overview

- `WAVE_01` (Hero), `WAVE_00` CSS token ve veri katmanına dayanır.
- `WAVE_02` (Services), `WAVE_01` üst sayfa düzenine ve `companyService` hizmet verisine dayanır.
- `WAVE_03` (Contact & Footer), `WAVE_02` hizmetler bölümüne dayanır.
- `WAVE_04` (Final QA), tüm önceki dalgaların eksiksiz tamamlanmasına dayanır.

## 5. Deliverables

- **Frontend Demo Package**: `outputs/demos/trakya-teknik-makine/latest/` altında çalışan HTML5/CSS/JS frontend demo.
- **Agent Documentation Package**: Ajanların projeyi kesintisiz yürütebileceği agent-ready dokümantasyon seti.

## 6. Acceptance Conditions

1. Sitede firma adı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü açıkça anlaşılmalıdır.
2. Tam olarak 3 approved hizmet (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) sergilenmelidir.
3. Hizmet isimlerinde kaynak dışı hiçbir qualifier (`stok`, `orijinal parça`, `mobil filo`, `SLA` vb.) bulunmamalıdır.
4. Mobil ve masaüstü görünümler satış görüşmesinde sorunsuz gösterilecek kalitede olmalıdır.
5. Veri doğrudan `companyService.js` üzerinden okunmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Current Scope**: Standalone frontend satış demosu (HTML/CSS/JS + local mock data).
- **Future Scope (If Approved Later)**:
  - Gerçek backend, veritabanı ve CMS entegrasyonu.
  - İletişim formu sunucu entegrasyonu.
  - Canlı Harita ve WhatsApp canlı destek entegrasyonu.
  - Production hosting ve alan adı kurulumu.
