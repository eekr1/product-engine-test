# Run Decisions Log — RUN-20260813-001

## 1. Operasyonel Karar Girişleri

| Decision ID | Konu / Alan | Alınan Karar | Karar Sahibi / Provenance | Gerekçe | Tarih |
|---|---|---|---|---|---|
| `RDEC-001` | Base Package Selection | `demo-frontend` temel paketi seçilmiştir. | Engine Resolved | Projenin birincil hedefi satış demosu olarak sunulacak kurumsal frontend deneyimidir. | 2026-08-13 |
| `RDEC-002` | Extension Application | `existing-project` extension paketi uygulanmıştır. | User Approved Intake | Mevcut web sitesi (`trakyateknikmakine.com`) birincil gerçeklik ve firma bilgi kaynağıdır. | 2026-08-13 |
| `RDEC-003` | Wave Breakdown Granularity | 5 dalgalı (WAVE_00 .. WAVE_04) delivery roadmap ve deterministic wave split dondurulmuştur. | Engine Resolved (`DEMO_FRONTEND_PACKAGE` Guard) | Services (Bakım-Onarım/Yedek Parça) ve Contact sorumluluklarının merge edilmesi yasaktır; ayrıca QA ayrı dalga olmalıdır. | 2026-08-13 |
| `RDEC-004` | Integration Boundary | Frontend Mock Data Adapter interface planlanmıştır. | Engine Resolved (`PLANNING_PROFILES` Baseline) | Backend bulunmadığı için sahte API uydurulmayacak; ancak UI katmanının sonradan gerçek backend'e bağlanması için temiz service boundary korunacaktır. | 2026-08-13 |
