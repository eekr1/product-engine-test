# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Single Purpose Per Wave**: Her dalga tek bir anlamlı ve doğrulanabilir teslimat hedefine sahiptir.
- **Foundation First (`WAVE_00`)**: Temel altyapı, CSS visual token'ları ve soyut data adapter katmanı kurulmadan UI geliştirmesine geçilmez.
- **Integration-Ready Presentation (`WAVE_01`)**: Görsel UI bileşenleri inşa edilirken data boundary korunur, sahte backend uydurulmaz.

## 2. Wave Map Summary

| Wave ID | Wave Adı | Ana Hedef | Bağımlılık | İlgili Plan |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Project Setup | Proje altyapısı, stil sistemi ve mock data adapter katmanının kurulması | Yok | `waves/plans/WAVE_00.md` |
| `WAVE_01` | Core Frontend Demo & Assembly | Hero, Hizmetler Grid'i, Yetkili Servis Rozeti ve İletişim CTA bileşenlerinin montajı | `WAVE_00` | `waves/plans/WAVE_01.md` |

## 3. Dependency Chain

```text
Approved Input & Document Package
       ↓
    WAVE_00 (Foundation, Design Tokens & Data Provider)
       ↓
    WAVE_01 (Frontend Core Demo Components & Responsive Assembly)
       ↓
  Final Sales Review & Verification
```

## 4. Wave Entries

### WAVE_00: Foundation & Project Setup
- **Amaç**: Temel HTML/CSS mimarisini, renk/tipografi değişkenlerini, responsive layout shell'ini ve yerel mock veri adapter katmanını kurmak.
- **Kapsam**: Layout shell, CSS tokens, `companyData` provider, `CompanyService` boundary.
- **Çıktı**: Çalıştırılabilir temel dev yapısı ve mock veri katmanı.
- **Exit Kriteri**: Yerel veri servisinden firma bilgileri ve 3 ana hizmet çekilebiliyor olmalı.

### WAVE_01: Core Frontend Demo & Assembly
- **Amaç**: Trakya Teknik Makine kurumsal web sitesi demosu visual bileşenlerini üretmek ve satış görüşmesine hazır hale getirmek.
- **Kapsam**: Hero bölümü, Hizmetler Kart Grid'i (Yedek Parça, Yerinde Destek, Bakım/Onarım), Disan Hidrolik Yetkili Servis vurgu kartı, İletişim bölümü ve mobil CTA bar.
- **Çıktı**: Satış görüşmesinde gösterilecek tamamlanmış responsive frontend demo.
- **Exit Kriteri**: Mobil ve masaüstü tarayıcıda görsel tasarım kusursuz çalışmalı; iletişim butonları işlevsel olmalı.

## 5. Cross-Wave Invariants

- **INVARIANT-1**: Hiçbir wave dondurulmuş doğrulanmış firma bilgilerinden sapamaz.
- **INVARIANT-2**: UI bileşenleri veri sağlayıcısına doğrudan gömülemez; service boundary korunur.
- **INVARIANT-3**: Kapsam dışı backend veya admin paneli koda dahil edilemez.

## 6. Global Exit / Handoff Rules

- Her iki dalga başarıyla tamamlandığında, temsilci ajan [CURRENT_STATUS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/CURRENT_STATUS.md) belgesini günceller ve satıcı temsilcisine gösterim onayını verir.
