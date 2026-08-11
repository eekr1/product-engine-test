# Trakya Teknik Makine — Project Plan

## 1. Delivery Strategy

Bu projenin teslim stratejisi, Trakya Teknik Makine'ye potansiyel satış görüşmesinde gösterilecek yüksek kaliteli, etkileyici ve responsive bir frontend demo üretmektir (`delivery_profile: Prototype`). Uygulama planlaması `implementation_planning: standard` derinliğindedir ve 3 ardışık execution wave'e bölünmüştür.

## 2. Phases / Milestones

- **Milestone 1 (Foundation & Tokens)**: Tasarım sistemi, renk değişkenleri, HTML5 semantik iskelet ve modüler data service katmanının tamamlanması (`WAVE_00`).
- **Milestone 2 (Core Content UI)**: Hero, Kurumsal Özeti, 3 Ana Hizmet breakdown kartları ve görsel hiyerarşinin tamamlanması (`WAVE_01`).
- **Milestone 3 (Trust, CTAs & Demo Polish)**: Disan Hidrolik Yetkili Servis vurgusu, Telefon/E-posta doğrudan CTA'ları, responsive mobil ayarlar ve son gösterim cilası (`WAVE_02`).

## 3. Wave Relationship

```text
WAVE_00 (Foundation, CSS Tokens & Data Service)
    │
    ▼
WAVE_01 (Hero, Corporate Overview & Services Grid UI)
    │
    ▼
WAVE_02 (Authorized Partner Card, Contact CTAs & Demo Verification)
```

## 4. Dependency Overview

- `WAVE_01`, `WAVE_00` çıktısı olan CSS değişkenlerine ve `CompanyDataService` veri yapısına bağımlıdır.
- `WAVE_02`, `WAVE_01` sayfa düzenine ve iletişim alanlarına bağımlıdır.

## 5. Deliverables

- Çalıştırılabilir responsive kurumsal web sitesi demo frontend kod tabanı (`index.html`, `styles/`, `scripts/`, `data/`).
- Satış gösterimi için bağımsız yerel preview çalıştırma imkanı.
- Agent-ready dokümantasyon paketi (`outputs/demos/trakya-teknik-makine/latest/`).

## 6. Acceptance Conditions

- Mevcut `trakyateknikmakine.com` sitesindeki tüm doğrulanmış firma ve 3 hizmet bilgisi eksiksiz korunmuş olmalıdır.
- Tasarım modern, endüstriyel güven hissi veren özgün visual concept taşımalıdır.
- Mobil ve masaüstü responsive görünümler kusursuz olmalıdır.
- Kod yapısı presentation ve service katmanlarını ayrıştırmış olmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Bugünkü Scope**: Frontend Sales Demo (`Prototype`).
- **Gelecek Aşamaları (Satış Sonrası)**: Gerçek CMS/Admin paneli entegrasyonu, dinamik teklif formu altyapısı, harita API entegrasyonu, production hosting ve domain taşınması.
