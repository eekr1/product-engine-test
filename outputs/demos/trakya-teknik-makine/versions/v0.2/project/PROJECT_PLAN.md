# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

Projenin teslim stratejisi, potansiyel müşteriye yapılacak satış görüşmesinde "mevcut sitenizi bu kaliteye taşıyabiliriz" mesajını açıkça veren, modern, responsive ve yüksek görsel kurumsal kaliteye sahip bir frontend demo üretmektir. Proje `delivery_profile: Prototype`, `implementation_planning: standard` ve `design_planning: light` olarak yürütülmektedir.

## 2. Phases / Milestones

- **Milestone 1 (Foundation & Boundary Setup):** Proje ortamının kurulması, Vite + React altyapısının initialize edilmesi, CSS Design Tokens ve Mock Service Adapter katmanının oluşturulması.
- **Milestone 2 (Core Shell & Visual Direction):** Responsive Layout Shell (Header, Navigation, Mobile Drawer, Footer) ile projenin özgün endüstriyel visual concept bileşenlerinin tamamlanması.
- **Milestone 3 (Interactive Sections & Content Alignment):** Ana Sayfa, Kurumsal/Hakkımızda, Hizmetlerimiz (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım), Disan Hidrolik Yetkili Servisliği vurgusu ve İletişim Formu (client-side handler) bölümlerinin entegrasyonu.
- **Milestone 4 (Demo Verification & Handoff):** Masaüstü ve mobil responsive kontrollerin tamamlanması, static build testi ve ajanın teslim paketi doğrulaması.

## 3. Wave Relationship

Planlama 3 sıralı execution dalgasına (wave) bölünmüştür:

```text
WAVE_00 (Foundation & Service Boundary)
    │
    ▼
WAVE_01 (Core Shell & Visual System)
    │
    ▼
WAVE_02 (Interactive Demo Sections & Content)
```

## 4. Dependency Overview

- `WAVE_01`, `WAVE_00` servis ve token altyapısına bağımlıdır.
- `WAVE_02`, `WAVE_01` layout ve tasarım bileşenlerine bağımlıdır.
- Tüm dalgalar `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` dondurulmuş firma verilerine dayanır.

## 5. Deliverables

1. Canonical Product Engine `v0.2.0` Dokümantasyon Paketi (`outputs/demos/trakya-teknik-makine/latest/`).
2. Vite + React tabanlı modern frontend demo source kodları.
3. Çalıştırılabilir statik frontend bundle (`dist/` klasörü).

## 6. Acceptance Conditions

1. Demo, mevcut siteden belirgin biçimde daha modern ve profesyonel görünmeli.
2. Tasarım hazır kurumsal şablon veya lacivert klişesi hissi vermemeli.
3. Firma bilgileri ve 3 ana hizmet hızlıca anlaşılmalı.
4. Mobil ve masaüstü uyumu kusursuz çalışmalı.
5. Presentation katmanı veriyi bileşenlere gömmemeli (`clean service adapter boundary`).

## 7. Scope Growth / Upgrade Boundaries

- **Bugünkü Scope (Demo):** Frontend demo, mock data provider, client-side iletişim form handler.
- **Gelecek Scope (Production Upgrade):** Gerçek Headless CMS / REST API adapter'ının bağlanması, sunucu tarafı form gönderimi, canlı DNS/domain transferi (bu aşama satış sonrası kapsam olarak değerlendirilecektir).
