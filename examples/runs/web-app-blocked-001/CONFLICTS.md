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
| `CNF-01` | `Critical` | Çalıştırma sırasındaki teknik fizibilite incelemesinde prototipin simülasyon yerine gerçek multi-tenant WebSocket sunucusu gerektirdiği keşfedilmiştir. Bu yeni teknik gereksinim seçilen istemci taraflı `demo-frontend` prototip kapsamı ile çelişmektedir. | `INPUT_SNAPSHOT.md` (`demo-frontend` Scope) | Runtime Technical Discovery (`Feasibility Review`) | `Unresolved` |

---

## Conflict Resolution Action
`engine/CONFLICT_RESOLUTION.md` uyarınca runtime sırasında keşfedilen bu kritik mimari çelişki çözülmeden doküman üretimi devam ettirilemez. Çalışma `Blocked` durumuna geçirilmiştir. Kullanıcıdan kapsam tercihi (Mock simülasyona devam edilmesi mi yoksa backend paketine geçilmesi mi) beklenmektedir.
