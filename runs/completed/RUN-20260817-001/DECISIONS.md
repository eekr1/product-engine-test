# Run Decisions Log — RUN-20260817-001

## 1. Operasyonel Karar Girişleri

| Decision ID | Topic | Decision | Rationale | Provenance | Date |
|---|---|---|---|---|---|
| `RDEC-01` | Package Selection | Base package `demo-frontend`, delivery profile `Prototype`, implementation `standard`, design `light` donduruldu. | Approved `PROJECT_INPUT.md` Section 2 ile tam uyum. | User Approved | 2026-08-17 |
| `RDEC-02` | Document Resolution | 10 canonical document ID ve 4 dynamic wave plan instance'ı çözüldü. Conditional backend/database/API dokümanları hariç tutuldu. | Approved scope ve `PLANNING_PROFILE_OVERLAY.md` minimumları uyarınca. | Engine Resolved | 2026-08-17 |
| `RDEC-03` | Wave Decomposition | 4 izole wave (`WAVE_00` .. `WAVE_03`) tanımlandı. Services ve Contact ayrıldı, cross-cutting QA bağımsız `WAVE_03` olarak konumlandırıldı. | `DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği. | Engine Resolved | 2026-08-17 |
| `RDEC-04` | Factual Source Boundary | Factual sources `SRC-01` (project source file) ile sınırlandı. Engine, package, template ve Instagram content SRC setine alınmadı. | `SOURCE_REGISTER_TEMPLATE.md` canonical source rules uyarınca. | Engine Resolved | 2026-08-17 |
