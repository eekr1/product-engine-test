# CONFLICTS — RUN-20260101-002

```yaml
run_id: RUN-20260101-002
updated_at: 2026-01-01T00:05:00Z
total_conflicts: 1
critical_conflicts: 1
```

---

## Conflict Register

| Conflict ID | Severity | Description | Source A | Source B | Status |
|---|---|---|---|---|---|
| `CNF-01` | `Critical` | Sunucusuz statik prototip kısıtı ile canlı sunucu tarafı veritabanı senkronizasyon talebi çelişmektedir. | `INPUT_SNAPSHOT.md` (Scope) | `INPUT_SNAPSHOT.md` (Brief) | `Unresolved` |

---

## Conflict Resolution Action
`engine/CONFLICT_RESOLUTION.md` uyarınca kritik mimari çelişki çözülmeden üretim devam ettirilemez. Çalışma `Blocked` durumuna geçirilmiştir. Kullanıcıdan tercih (mock data persistence vs backend scope eklenmesi) beklenmektedir.
