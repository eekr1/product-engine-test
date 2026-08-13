# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Proje Genel Yaklaşımı ve Teslimat Stratejisi

- **Teslimat Modeli**: Iterative Wave-Based Frontend Delivery.
- **Hedef Olgunluk**: `Prototype` (Yüksek etkili, gösterilebilir satış demosu; kod kalitesi ve mimari sürdürülebilirlik korunmuştur).
- **Planlama Derinliği**: `implementation_planning: standard` & `design_planning: light`.

## 2. Fazlar ve Milestone'lar

### Phase 1 — Foundation & Architecture (WAVE_00)
- CSS Design Tokens, HTML Layout Reset, Google Fonts.
- `companyData.js` Local Mock Provider ve `DataService` arayüzü.

### Phase 2 — Core Surface & Trust (WAVE_01)
- Navigation Header.
- Hero Kompozisyonu ve Disan Hidrolik Yetkili Servis Rozeti.

### Phase 3 — Services & Actions (WAVE_02)
- 3 Ana Hizmet Kartı Izgarası (Yedek Parça, Yerinde Destek, Bakım/Onarım).
- Direct Contact CTA'lar (`tel:`, `mailto:`).

### Phase 4 — Presentation QA & Handover (WAVE_03)
- Mobil/Masaüstü tam uyumluluk testi, performans ve satış görüşmesi görsel kalite doğrulaması.

## 3. Bağımlılık Zinciri

```text
Phase 1 (WAVE_00: Foundation)
       ↓
Phase 2 (WAVE_01: Core Surface & Trust)
       ↓
Phase 3 (WAVE_02: Services & Actions)
       ↓
Phase 4 (WAVE_03: Presentation QA & Handover)
```

## 4. Kalite Tabanı ve Sorumluluklar

- Demo kapsamı mimari kaliteyi düşürmez. UI presentation katmanı veri erişiminden ayrılmıştır.
- Tüm wave'ler `engine/PLANNING_PROFILES.md` ve `engine/OUTPUT_STRUCTURE.md` standartlarına tabidir.
