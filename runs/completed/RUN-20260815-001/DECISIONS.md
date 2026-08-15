# DECISIONS — RUN-20260815-001 (Operational Decisions)

```yaml
run_id: RUN-20260815-001
decision_count: 3
```

## Operational Decisions

| Decision ID | Decision Title | Decision Rationale | Authoritative Source | Date |
|---|---|---|---|---|
| `DEC-OP-01` | Selection of Base Package `demo-frontend` | Projenin frontend-only satış demosu niteliği gereği `demo-frontend` seçildi. | `PACKAGE_RULES.md` & `DEMO_FRONTEND_PACKAGE.md` | 2026-08-15 |
| `DEC-OP-02` | Selection of 5 Wave Decomposition | `demo-frontend` granularity guard uyarınca Services, Contact ve Final QA dalgaları bağımsız ayrıştırıldı. | `DEMO_FRONTEND_PACKAGE.md` & `GENERATION_PIPELINE.md` | 2026-08-15 |
| `DEC-OP-03` | Point-of-Use Template Refresh Protocol | Her artifact ve dynamic instance için point-of-use template read-write pairing uygulanacaktır. | `GENERATION_PIPELINE.md` | 2026-08-15 |
