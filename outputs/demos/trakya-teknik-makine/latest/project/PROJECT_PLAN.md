# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Proje, Trakya Teknik Makine kurumsal kimliğini ve 3 onaylı hizmetini 7 ayrı routable sayfa üzerinden sunan modern, responsive bir frontend satış demosu olarak geliştirilmektedir. Teslimat stratejisi; temellerin oluşturulması (`WAVE_00`), global responsive kabuk ve router yapısının kurulması (`WAVE_01`), ana kurumsal sayfaların geliştirilmesi (`WAVE_02`), hizmet özet ve detay sayfalarının kurulması (`WAVE_03`) ve kalite/continuation doğrulaması (`WAVE_04`) olmak üzere 5 sıralı wave aşamasından oluşur.

## 2. Approved Site / Surface Delivery Scope

| Page ID | Page Name | Route / Navigation Identity | Scope Status | Milestone Assignment |
|---|---|---|---|---|
| PAGE-001 | Ana Sayfa | `/` / `home` | IN_SCOPE | Milestone 2 (Core Corporate Pages) |
| PAGE-002 | Kurumsal | `/kurumsal` / `corporate` | IN_SCOPE | Milestone 2 (Core Corporate Pages) |
| PAGE-003 | Hizmetler | `/hizmetler` / `services` | IN_SCOPE | Milestone 3 (Services Overview & Details) |
| PAGE-004 | Yedek Parça Temini — Hizmet Detayı | `/hizmetler/yedek-parca-temini` / `service-detail-spare-parts` | IN_SCOPE | Milestone 3 (Services Overview & Details) |
| PAGE-005 | Yerinde Teknik Destek — Hizmet Detayı | `/hizmetler/yerinde-teknik-destek` / `service-detail-onsite-support` | IN_SCOPE | Milestone 3 (Services Overview & Details) |
| PAGE-006 | Makine Bakım ve Onarım — Hizmet Detayı | `/hizmetler/makine-bakim-onarim` / `service-detail-maintenance-repair` | IN_SCOPE | Milestone 3 (Services Overview & Details) |
| PAGE-007 | İletişim | `/iletisim` / `contact` | IN_SCOPE | Milestone 2 (Core Corporate Pages) |

## 3. Phases / Milestones

- **Milestone 0 (Foundation & Setup — WAVE_00)**: Vite + React + TS projesinin basılması, CSS Custom Properties (`tokens.css`), data adapter boundary ve local mock veri deposunun hazırlanması.
- **Milestone 1 (Global Shell & Routing — WAVE_01)**: Responsive Header, Footer, Mobile Drawer ve 7 onaylı rotayı içeren Client Router altyapısının kurulması.
- **Milestone 2 (Core Corporate Pages — WAVE_02)**: Ana Sayfa (`PAGE-001`), Kurumsal Sayfa (`PAGE-002`) ve İletişim Sayfası (`PAGE-007`) geliştirilmesi.
- **Milestone 3 (Services Overview & Detail Pages — WAVE_03)**: Hizmetler Overview (`PAGE-003`), Yedek Parça Detay (`PAGE-004`), Yerinde Destek Detay (`PAGE-005`) ve Bakım Onarım Detay (`PAGE-006`) geliştirilmesi.
- **Milestone 4 (Quality Polish & Continuation Verification — WAVE_04)**: Cross-page responsive uyum, erişilebilirlik, temiz veri katmanı ve same-codebase continuation doğrulaması.

## 4. Wave Relationship

- `WAVE_00` → `WAVE_01` → `WAVE_02` → `WAVE_03` → `WAVE_04`
- Her wave bağımsız bir teslimat katmanıdır ve kendisinden önceki foundation ve shell çıktılarını tüketir.

## 5. Dependency Overview

- `WAVE_01` (Navigation & Shell), `WAVE_00` (Design Tokens & Data Adapter) katmanına bağımlıdır.
- `WAVE_02` ve `WAVE_03` (Sayfa yüzeyleri), `WAVE_01` (Router & Layout Shell) katmanına bağımlıdır.
- `WAVE_04` (Final QA), tüm sayfaların geliştirilmesine bağımlıdır.

## 6. Deliverables

- Agent-ready ve sürüm kontrolüne hazır frontend kod yapısı.
- 7 onaylı routable sayfanın tamamının çalışan modern responsive arayüzü.
- Clean service/data adapter mimarisi (`src/services/dataAdapter.ts`).
- Endüstriyel hassasiyet temasında geliştirilmiş CSS tasarım sistemi.

## 7. Acceptance Conditions

- 7 sayfanın tamamı benzersiz URL rotalarında erişilebilir ve gezilebilir olmalıdır.
- Hiçbir sayfa tek sayfalık anchor section'a collapse edilmemelidir.
- FCL allowlist dışında uydurma veri yer almamalıdır.
- `npm run build` hatasız derleme üretmelidir.

## 8. Scope Growth / Upgrade Boundaries

- Gelecekte gerçek backend, CMS, canlı harita veya WhatsApp entegrasyonları eklendiğinde aynı codebase üzerinde yeniden yazım olmadan devam edilebilir (`Continuation Expected: YES`).
