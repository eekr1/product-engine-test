# Trakya Teknik Makine — Project Plan

## 1. Delivery Strategy

Trakya Teknik Makine kurumsal web sitesi yenileme projesi, potansiyel müşteri satış görüşmesinde sunulacak yüksek kaliteli bir kurumsal frontend demo olarak kurgulanmıştır.

Teslimat stratejisi; throwaway kod yazmadan, presentation katmanı ile mock data katmanını tamamen ayırarak (integration readiness) ve 4 sıralı delivery wave'i üzerinden aşamalı inşa etmeye dayanır.

## 2. Phases / Milestones

- **Milestone 0 (Foundation)**: Mimari yapı, CSS tasarım token'ları, layout kabuğu ve mock data service katmanının kurulması (`WAVE_00`).
- **Milestone 1 (Header & Trust Surface)**: Header navigasyonu, Hero görsel kompozisyonu ve Disan Hidrolik Yetkili Servislik vurgusunun tamamlanması (`WAVE_01`).
- **Milestone 2 (Services Surface)**: 3 Ana Hizmet alanının (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel kartları ve detaylarının tamamlanması (`WAVE_02`).
- **Milestone 3 (Contact & Demo Finalization)**: İletişim bölümü, mobilde sabit duran hızlı erişim çubuğu, footer ve responsive QA süreçlerinin tamamlanması (`WAVE_03`).

## 3. Wave Relationship

```text
WAVE_00 (Foundation) ──> WAVE_01 (Hero & Trust) ──> WAVE_02 (Services) ──> WAVE_03 (Contact & QA)
```

Tüm wave'ler tek yönlü ve bağımlılık zincirine uygun olarak sırayla uygulanır.

## 4. Dependency Overview

- `WAVE_00` approved intake ve engine sözleşmelerine dayanır.
- `WAVE_01`, `WAVE_00` tasarım token'ları ve layout kabuğuna dayanır.
- `WAVE_02`, `WAVE_01` header ve kurumsal yapısına dayanır.
- `WAVE_03`, `WAVE_02` hizmetler yüzeyine dayanır ve uçtan uca demoyu tamamlar.

## 5. Deliverables

1. `README.md` & Canonical AI Dokümantasyon Paketi
2. `DESIGN_RULES.md` uyumlu CSS Tasarım Sistemi & Token'ları
3. Modern, responsive, mobil uyumlu Kurumsal Frontend Demo Arayüzü
4. Mock Data Service Adapter Katmanı (Integration-Ready)

## 6. Acceptance Conditions

- Arayüz ilk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünmelidir.
- Disan Hidrolik yetkili servisliği ve 3 temel hizmet hızlıca anlaşılmalıdır.
- Telefon ve e-posta doğrudan iletişim CTA'ları cihazlarda çalışmalıdır.
- Mobil ve masaüstü responsive kalite tam olmalıdır.
- Kanıtlanmamış firma bilgisi uydurulmamalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Mevcut Committed Kapsam**: Satış amaçlı kurumsal frontend demo (`delivery_profile: Prototype`).
- **Gelecek Potansiyel Kapsam (Upgrade Boundaries)**: Müşteri satışı sonrasında gerçek backend entegrasyonu, yönetim paneli (CMS), etkileşimli teklif formu ve production hosting/domain geçiş operasyonu.
