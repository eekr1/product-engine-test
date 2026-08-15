# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Trakya Teknik Makine projesi, firmanın kurumsal kimliğini ve yetkili servis güvencesini potansiyel müşterilere sunacak bir proaktif satış demosu (`Prototype`) olarak planlanmıştır. Teslimat stratejisi, temiz modüler frontend mimarisi ve `dataService.js` adapter katmanı ile gelecekte gerçek backend/API bağlantısına gereksiz kod değişimi olmadan olanak sağlayan kademeli dalga (wave) sistemine dayanır.

## 2. Phases / Milestones

- **Phase 1: Foundation & Shell (WAVE_00)** — CSS design tokens, responsive container kabuğu ve `dataService.js` adapter baseline.
- **Phase 2: Brand Identity Surface (WAVE_01)** — Hero sunum alanı ve Disan Hidrolik Yetkili Servis rozeti.
- **Phase 3: Core Services Presentation (WAVE_02)** — 3 approved hizmetin (`Yedek Parça`, `Teknik Destek`, `Bakım-Onarım`) visual grid kartları.
- **Phase 4: Direct Contact Surface (WAVE_03)** — Telefon ve E-posta direct contact CTA eylem yüzeyi.
- **Phase 5: Quality Assurance & Demo Release (WAVE_04)** — Uçtan uca responsive doğrulama ve satış demosu teslimatı.

## 3. Wave Relationship

Execution sırası `waves/WAVE_MAP.md` ile birebir uyumludur:

```text
WAVE_00 (Foundation) → WAVE_01 (Hero & Brand) → WAVE_02 (Services Grid) → WAVE_03 (Contact CTA) → WAVE_04 (Final Integration & QA)
```

## 4. Dependency Overview

- `WAVE_01` (Hero) `WAVE_00` (Foundation Shell) tamamlanmadan başlayamaz.
- `WAVE_02` (Hizmetler) `WAVE_00` ve `WAVE_01` bağımlılığını taşır.
- `WAVE_03` (İletişim) `WAVE_00` ve `WAVE_02` bağımlılığına sahiptir.
- `WAVE_04` (Final QA) önceki tüm dalgaların (`WAVE_00`..`WAVE_03`) tamamlanmasını gerektirir.

## 5. Deliverables

- Agent-Ready Dokümantasyon Paketi (`outputs/demos/trakya-teknik-makine/latest/`).
- Modüler Standalone Frontend Demo Kodu (`index.html`, `src/styles/`, `src/components/`, `src/services/dataService.js`).

## 6. Acceptance Conditions

- Trakya Teknik Makine adı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ilk etkileşimde açıkça anlaşılmalıdır.
- 3 onaylı hizmet (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) eksiksiz sergilenmelidir.
- Direct contact CTA'ları (telefon/e-posta) hatasız çalışmalıdır.
- Source dosyada bulunmayan firma iddiaları veya kapsam dışı etkileşimler (harita, WhatsApp vb.) eklenmemelidir.
- Mobil ve masaüstü responsive düzen sorunsuz olmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Current Scope**: `Prototype` / Sales Demo.
- **Future Possibilities (Gelecek Aşama)**: Gerçek backend API/CMS entegrasyonu, canlı harita entegrasyonu, mesaj formu backend'i veya WhatsApp kanalı ayrı kapsam snapshot'ı ile ele alınabilir.
