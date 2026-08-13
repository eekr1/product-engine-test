# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgede yer alan tüm kararlar `DEC-XXX` formatında, durumları (`User Approved` veya `Engine Resolved`) ve karar kaynakları (Source Provenance) belirtilerek dondurulmuştur.

## 2. Architectural / Technical Decisions

- **DEC-001 (Prototype Scope & Quality Floor)**
  - **Tarih**: 2026-08-13
  - **Konu**: Teslim Olgunluğu ve Mimari Kalite Tabanı
  - **Karar**: Delivery profile `Prototype` seçilmiş; ancak mimari kalite tabanı `PLANNING_PROFILES.md` uyarınca korunmuştur.
  - **Kısa Gerekçe**: Demo scope geçici olabilir ancak throwaway architecture kabul edilmez.
  - **Durum**: `User Approved`
  - **Source**: Approved Intake (`inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`) Section 2

- **DEC-002 (Mock Data Service Boundary)**
  - **Tarih**: 2026-08-13
  - **Konu**: Veri Erişimi ve Integration Boundary
  - **Karar**: UI presentation katmanı mock veriyi doğrudan hardcoded bileşenlerden değil, `companyMockData.js` service adapter interface'i üzerinden okuyacaktır.
  - **Kısa Gerekçe**: Gelecekte gerçek backend/API eklendiğinde UI katmanında yeniden yazım ihtiyacını engellemek.
  - **Durum**: `Engine Resolved`
  - **Source**: `PLANNING_PROFILES.md` Integration Readiness Baseline & `TECH_CONTEXT.md`

- **DEC-003 (Stack Neutrality & Execution Environment)**
  - **Tarih**: 2026-08-13
  - **Konu**: Frontend Execution Layer Choice
  - **Karar**: Frontend demo, bağımsız çalıştırılabilir modern HTML5 / Vanilla CSS / ES6+ JavaScript (veya React+Vite) sunum mimarisiyle dondurulmuştur.
  - **Kısa Gerekçe**: Hızlı başlangıç, yüksek performans ve satış görüşmesinde sorunsuz bağımsız çalışabilirlik.
  - **Durum**: `Engine Resolved`
  - **Source**: `PACKAGE_RULES.md` & `TECH_CONTEXT.md`

## 3. Product / Scope Decisions

- **DEC-004 (Verified Content Truth Boundary)**
  - **Tarih**: 2026-08-13
  - **Konu**: Firma Bilgileri ve FCL Kapsamı
  - **Karar**: Üretilen tüm metinsel içerik FCL allowlist (FCL-001..FCL-006) kayıtlarına sadık kalacaktır. Doğrulanmamış yeni firma iddiası eklenmeyecektir.
  - **Kısa Gerekçe**: Satış demosu gerçek firma güvenilirliğini zedeleyecek uydurma bilgiler taşımamalıdır.
  - **Durum**: `User Approved`
  - **Source**: Approved Intake (`inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`) & `GENERATION_PIPELINE.md` Stage 5

- **DEC-005 (Kapsam Dışı Modüller)**
  - **Tarih**: 2026-08-13
  - **Konu**: Admin Paneli, Auth ve Backend DB
  - **Karar**: İlk demo aşamasında Admin Paneli, Auth, Database ve e-Ticaret kapsam dışı bırakılmıştır.
  - **Kısa Gerekçe**: İlk hedef satış demosu için güçlü bir frontend deneyimidir.
  - **Durum**: `User Approved`
  - **Source**: Approved Intake Section 5

## 4. Design / UX Decisions

- **DEC-006 (Anti-Template Custom Design Direction)**
  - **Tarih**: 2026-08-13
  - **Konu**: Visual Identity & Visual Concept
  - **Karar**: Sanayi sektörünün otomatik lacivert/mavi şablon klişelerinden kaçınılacak; endüstriyel çelik, grafit ve güvenlik sarısı aksanı içeren özgün bir görsel dil (`DESIGN_RULES.md`) kurulacaktır.
  - **Kısa Gerekçe**: Satış görüşmesinde fark yaratan, jenerik olmayan kurumsal algı oluşturmak.
  - **Durum**: `Engine Resolved`
  - **Source**: `PLANNING_PROFILES.md` Design Diversity Rule & `DESIGN_RULES.md`

- **DEC-007 (Deterministic Wave Split)**
  - **Tarih**: 2026-08-13
  - **Konu**: Implementation Wave Architecture
  - **Karar**: Proje 5 bağımsız dalgaya (WAVE_00 .. WAVE_04) bölünmüştür. Services ve Contact ayrı wave'ler olarak dondurulmuştur.
  - **Kısa Gerekçe**: `DEMO_FRONTEND_PACKAGE` deterministic granularity guard kuralına uyum.
  - **Durum**: `Engine Resolved`
  - **Source**: `DEMO_FRONTEND_PACKAGE.md` Granularity Guard

## 5. Deprecated / Superseded Decisions

- Hiçbir karar yürürlükten kaldırılmamıştır (Superseded yok).
