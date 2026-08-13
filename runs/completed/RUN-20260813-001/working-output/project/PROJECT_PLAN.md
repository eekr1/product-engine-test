# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

- **Fazlı Satış Demosu Yaklaşımı:** İlk teslimat, potansiyel müşteri görüşmesinde güven yaratacak ve yenileme teklifini destekleyecek yüksek kaliteli bir frontend demo (`Prototype`) olacaktır.
- **Katmanlı Geliştirim:** Altyapı, İlk İzlenim/Hero, Hizmetler ve İletişim aşamaları sırasıyla tamamlanarak teslim edilecektir.
- **Integration-Ready Mimari:** Demo kod tabanı throwaway değildir; veri katmanı ile sunum katmanı ayrılarak gelecekteki backend/CMS entegrasyonu kolaylaştırılmıştır.

## 2. Phases / Milestones

- **Milestone 1 — Intake & Approval (Tamamlandı):** Proje girdilerinin normalize edilmesi, onay kapısından geçilmesi ve approved input snapshot'ının dondurulması.
- **Milestone 2 — Architecture & Wave Planning (Aktif):** Temel altyapının (`WAVE_00`), tasarım kural setinin ve dalga planlarının hazırlanması.
- **Milestone 3 — Frontend Demo Execution:** Hero, Hizmetler ve İletişim dalgalarının (`WAVE_01`, `WAVE_02`, `WAVE_03`) tamamlanması.
- **Milestone 4 — Final Presentation QA & Publication:** Demoyla ilgili cross-browser/responsive testlerin yapılması ve `outputs/demos/trakya-teknik-makine/latest/` altında yayına alınması.

## 3. Wave Relationship

- `WAVE_00` (Foundation & Design System Setup) $\rightarrow$ Tüm dalgaların teknik ve görsel zeminidir.
- `WAVE_01` (Hero & Corporate Trust Surface) $\rightarrow$ İlk izlenim ve yetkili servis vurgusunu kurar.
- `WAVE_02` (Service Presentation Surface) $\rightarrow$ 3 ana hizmeti detaylandırır.
- `WAVE_03` (Contact, Map & Presentation QA) $\rightarrow$ Dönüşüm ve nihai gösterim kalitesini tamamlar.

## 4. Dependency Overview

- Visual Concept (`DESIGN_RULES.md`) ve Mock Data Layer (`companyData.js`) bağımlılıkları `WAVE_00` bünyesinde çözülür.
- Her üst wave bir önceki alt wave'in çıktısına dayanır.

## 5. Deliverables

- **Agent-Ready Dokümantasyon Paketi:** `ai/`, `project/`, `design/`, `waves/` klasörleri.
- **Kurumsal Frontend Demo:** HTML/CSS/JS modüler kod yapısı.
- **Uygulanabilir Execution Planları:** `WAVE_00.md`, `WAVE_01.md`, `WAVE_02.md`, `WAVE_03.md`.

## 6. Acceptance Conditions

- Demo, satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını net vermelidir.
- Firma gerçekliği ve doğrulanmış hizmetler korunmuş olmalıdır.
- Mimari `agent-ready` seviyede devredilebilir olmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Satış Sonrası Aşamalar (Future Scope):**
  - Müşteri onayı alındığında gerçek CMS/Admin paneli entegrasyonu.
  - Canlı e-posta gönderimi yapan backend API servisleri.
  - Dinamik yedek parça katalog ve arama modülü.
