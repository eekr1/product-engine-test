# Operational Decisions — RUN-20260815-001

## 1. Run Execution Decisions

| Decision ID | Topic | Decision | Provenance | Rationale | Impact |
|---|---|---|---|---|---|
| DEC-OP-001 | Base Package Selection | `demo-frontend` | Engine Resolved | Proje kurumsal frontend satış demosu niteliğindedir. | Base document set belirlendi. |
| DEC-OP-002 | Planning Profile Overlay | `standard` implementation, `light` design | User Approved | `PROJECT_INPUT.md` onaylı profilleri uyarınca. | Agent-ready minimum belgeler eklendi. |
| DEC-OP-003 | Wave Structure | 5 Delivery Waves (WAVE_00 .. WAVE_04) | Engine Resolved | `DEMO_FRONTEND_PACKAGE` wave granularity guard uyarınca sorumluluklar ayrıldı. | Dynamic wave instance sayısı donduruldu. |
