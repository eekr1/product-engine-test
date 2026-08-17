# Product Engine — Run Index (`logs/RUN_INDEX.md`)

## 1. Amaç ve Otorite

Bu belge Product Engine run'larının secondary index'idir. Authoritative run truth `RUN_MANIFEST.md` belgeleridir.

## 2. Güncel İndeks Durumu

```text
Total Indexed Runs : 5
Active Runs        : 0
Completed Runs     : 5
Failed Runs        : 0
Invalidated Runs   : 0
```

| Run ID | Project Slug | Package | Profile | Status | Validation | Date | Output Ref | Note |
|---|---|---|---|---|---|---|---|---|
| `RUN-20260815-001` | `trakya-teknik-makine` | `demo-frontend` | `Prototype` | `Completed` | `CONDITIONAL PASS` | 2026-08-15 | `outputs/demos/trakya-teknik-makine/v0.0/` | Initial legacy run |
| `RUN-20260817-001` | `fizyoterapist-eda-pala` | `demo-frontend` | `Prototype` | `Completed` | `CONDITIONAL PASS` | 2026-08-17 | `outputs/demos/fizyoterapist-eda-pala/latest/` | Published upon explicit user acceptance |
| `RUN-20260817-002` | `trakya-teknik-makine` | `demo-frontend` | `Prototype` | `Completed` | `CONDITIONAL PASS` | 2026-08-17 | `outputs/demos/trakya-teknik-makine/latest/` | Legacy engine run |
| `RUN-20260817-003` | `trakya-teknik-makine` | `demo-frontend` | `Prototype` | `Completed` | `CONDITIONAL PASS` | 2026-08-17 | `outputs/demos/trakya-teknik-makine/latest/` | Fresh canonical engine run |
| `RUN-20260817-004` | `trakya-teknik-makine` | `corporate-website` | `Prototype` | `Completed` | `PASS` | 2026-08-17 | `outputs/demos/trakya-teknik-makine/latest/` | Fresh Product Engine v0.3.0 run with 7 distinct corporate pages |
