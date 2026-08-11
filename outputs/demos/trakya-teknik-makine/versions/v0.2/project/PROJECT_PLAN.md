# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

Bu proje, Trakya Teknik Makine'nin mevcut kurumsal web sitesini modernleştirmek amacıyla hazırlanan satış odaklı bir frontend demo teslimat stratejisine sahiptir. Strateji, hızlı, görsel olarak etkileyici ve temiz kodlanmış bir frontend yapısını dondurulmuş doğrulanmış firma içerikleriyle buluşturmayı hedefler.

## 2. Phases / Milestones

- **Milestone 1 (Foundation & Setup — WAVE_00)**: Proje mimarisinin, visual token'larının ve yerel mock data katmanının kurulması.
- **Milestone 2 (Frontend Demo & Core Assembly — WAVE_01)**: Ana sayfa hero bölümünün, 3 temel hizmet kartlarının (Yedek Parça, Yerinde Destek, Bakım & Onarım), Disan Hidrolik yetkili servis rozetlerinin ve iletişim CTA'larının modern visual identity ile tamamlanması.
- **Milestone 3 (Sales Review & Handoff)**: Satış görüşmesinde sunuma hazır frontend demonun doğrulanması ve incelenmesi.

## 3. Wave Relationship

- `WAVE_00`: Temel altyapı, CSS mimarisi ve data adapter katmanı (`WAVE_MAP` Faz 1).
- `WAVE_01`: Visual bileşenlerin inşası, sayfa kompozisyonu ve etkileşimler (`WAVE_MAP` Faz 2).

## 4. Dependency Overview

- `WAVE_00` tamamlanmadan `WAVE_01` bileşen üretimine başlanamaz.
- Doğrulanmış firma verileri `WAVE_00` data provider katmanında dondurulmadan UI entegrasyonu yapılamaz.

## 5. Deliverables

- Agent-ready dokümantasyon paketi (`v0.2`).
- Responsive, modern kurumsal frontend demo (lokal dev/preview ortamında çalışan).
- Clean service/data access boundary (integration-ready mimari).

## 6. Acceptance Conditions

- Demo ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern ve kurumsal görünmelidir.
- 3 ana hizmet ve yetkili servis unvanı ilk bakışta anlaşılmalıdır.
- İletişim butonları sorunsuz çalışmalıdır.
- Kod kalitesi throwaway olmamalı, presentation ile data layer ayrılmış olmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Gelecek Kapsam (Satış Sonrası)**: Gerçek CMS/Admin paneli, canlı API entegrasyonu, production hosting ve domain geçişi bu demo aşamasından sonra ayrıca ele alınacaktır.
