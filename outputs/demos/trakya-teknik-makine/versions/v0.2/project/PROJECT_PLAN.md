# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

Bu projenin teslim stratejisi, Trakya Teknik Makine'nin potansiyel müşteri satış görüşmesinde sunduğu güveni ve uzmanlığı en üst düzeye çıkaracak modern bir kurumsal frontend demosu hazırlamaktır. Teslimat yaklaşımı, `WAVE_MAP.md` belgesindeki sıralı 6 uygulama dalgasına (wave) dayalı bağımlılık zincirini izler. Kod ve mimari kalite tabanı throwaway kabul edilmeyip, sonradan gerçek backend entegrasyonuna imkan tanıyacak şekilde temiz sınırlarla (Service/Adapter) inşa edilir.

## 2. Phases / Milestones

- **Phase 1: Product Engine Intake & Documentation Assembly (Milestone 1)**
  - Onaylı proje girdisinin snapshot olarak dondurulması.
  - Agent-ready mimari, tasarım ve execution belgelerinin üretimi.
- **Phase 2: Frontend Foundation & Brand Visual Identity (Milestone 2)**
  - Proje mimarisinin (`WAVE_00`) ve global navigasyon/hero alanının (`WAVE_01`) tamamlanması.
- **Phase 3: Corporate Trust & Service Presentation (Milestone 3)**
  - Disan Hidrolik yetkili servislik vurgusunun (`WAVE_02`) ve 3 temel hizmetin (`WAVE_03`) tamamlanması.
- **Phase 4: Conversion Surfaces & Quality Assurance (Milestone 4)**
  - İletişim alanının (`WAVE_04`) ve çapraz kontrol/QA cilasının (`WAVE_05`) tamamlanması.

## 3. Wave Relationship

Planlanan dalgalar birbiri üzerine inşa edilir:

```text
WAVE_00 (Foundation & Tokens)
   ↓
WAVE_01 (Global Shell & Hero)
   ↓
WAVE_02 (Corporate Identity & Disan Trust)
   ↓
WAVE_03 (Services Presentation)
   ↓
WAVE_04 (Contact & Communication CTA)
   ↓
WAVE_05 (Cross-Cutting QA & Presentation Polish)
```

## 4. Dependency Overview

- `WAVE_01` için `WAVE_00` temel stil token'ları ve mock adapter gereklidir.
- `WAVE_02` ve `WAVE_03` için `WAVE_01` sayfa kabuğu gereklidir.
- `WAVE_04` iletişim katmanı için önceki tüm içerik bölümleri tamamlanmış olmalıdır.
- `WAVE_05` bağımsız QA dalgası olup tüm önceki dalgaların tamamlanmasını gerektirir.

## 5. Deliverables

1. Tamamlanmış ve çalışan kurumsal frontend demo web uygulaması.
2. Responsive masaüstü, tablet ve mobil uyumlu arayüzler.
3. Yerel mock data katmanı (`companyData.js`).
4. Eksiksiz Product Engine v0.2.0 dokümantasyon paketi.

## 6. Acceptance Conditions

- Sitenin ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern ve profesyonel görünmesi.
- Disan Hidrolik Trakya Bölge Yetkili Servisi vurgusunun ve 3 ana hizmetin açıkça anlaşılması.
- İletişim kanallarına (telefon/mail) sorunsuz erişilebilmesi.
- Konsol hatası veya kırık yerleşim bulunmaması.

## 7. Scope Growth / Upgrade Boundaries

- **Gelecek Aşamalar (Future Scope)**: Satış görüşmesi başarılı geçtiği takdirde gerçek içerik doğrulaması, REST/GraphQL backend API entegrasyonu, içerik yönetim paneli (CMS/admin) ve production hosting geçişi ayrı bir proje fazı olarak planlanacaktır.
