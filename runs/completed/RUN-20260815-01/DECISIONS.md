# Run Decisions Log — RUN-20260815-01

## 1. Operasyonel Karar Girişleri

| Decision ID | Topic | Decision | Rationale | Date |
|---|---|---|---|---|
| RDEC-001 | Base Package Selection | `demo-frontend` seçildi | Proje proaktif kurumsal satış demosu ve frontend tanıtım yüzeyidir | 2026-08-15 |
| RDEC-002 | Planning Profile Resolution | `implementation_planning: standard` ve `design_planning: light` uygulandı | Standard implementation agent-ready doküman setini sağlar; Light design projeye özgü visual rules üretir | 2026-08-15 |
| RDEC-003 | Wave Decomposition | 5 distinct wave (`WAVE_00` .. `WAVE_04`) belirlendi | `DEMO_FRONTEND_PACKAGE` Granularity Guard gereği Services, Contact ve Final QA ayrı wave'ler olarak ayrılmıştır | 2026-08-15 |
| RDEC-004 | Point-of-Use Template Refresh | Her canonical doküman ve dynamic instance için point-of-use template re-read + single-use write kullanılacaktır | `GENERATION_PIPELINE.md` ve `VAL-15` dynamic token pairing zorunluluğu | 2026-08-15 |
