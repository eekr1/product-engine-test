# Run Decisions Log — RUN-20260815-001

## 1. Operasyonel Karar Girişleri

| Decision ID | Topic | Decision | Provenance | Rationale | Date |
|---|---|---|---|---|---|
| RDEC-001 | Base Package Selection | `demo-frontend` base package seçildi | Engine Resolved | Proje kurumsal web sitesi satış demosu olduğu ve frontend ağırlıklı scope sunduğu için. | 2026-08-15 |
| RDEC-002 | Planning Profile Overlay | `PLANNING_PROFILE_OVERLAY.md` uygulandı | Engine Resolved | `implementation_planning: standard` ve `design_planning: light` profillerinin agent-ready minimumunu eklemek için. | 2026-08-15 |
| RDEC-003 | Wave Decomposition | 6 isolated wave (WAVE_00 to WAVE_05) tanımlandı | Engine Resolved | Foundation, Hero, Corporate Context, Services, Contact ve Final QA sorumluluklarının ayrıştırılması guard'ı ve kalitesi için. | 2026-08-15 |
| RDEC-004 | Point-of-Use Refresh | Her artifact ve WAVE_PLAN için point-of-use template re-open uygulandı | Engine Resolved | Pipeline 1-to-1 template read-token ve checkpoint kurallarına strict uyum için. | 2026-08-15 |
