# Scenario Metadata — web-app-blocked-001 (Run)

```yaml
scenario_id: web-app-blocked-001
title: Blocked Run Due to Critical Unresolved Requirement Conflict
example_type: edge-case
project_type: web-app
package_id: demo-frontend
delivery_profile: Prototype
engine_version: not_assigned
status: active
created_at: 2026-01-01T00:00:00Z
updated_at: 2026-01-01T00:00:00Z
source: synthetic
anonymized: true
```

---

## 1. Senaryonun Amacı

Bu senaryo, onaylı bir girdi snapshot'ından (`INPUT-REALTIME-SYNC-APP-V1` — `examples/inputs/web-app-blocked-001/PROJECT_INPUT.md`) başlatılan ancak üretim aşamasında çözülemeyen kritik bir teknik çelişki (`Critical Conflict`) tespit edildiğinde bir Product Engine çalışmasının nasıl `Blocked` durumuna geçtiğini gösterir.

---

## 2. Test Edilen Davranış

- **Approved Input ≠ Conflict-Free Run:** Girdinin `status: approved` olması çalıştırmanın sorunsuz biteceğini garanti etmez; `RUN-20260101-002` çalışması `CNF-01` çelişkisi nedeniyle `Blocked` olur.
- **`Blocked` Semantiği:** Kritik çelişki veya netleştirme ihtiyacı olduğunda çalışmanın doğrudan `Failed` yapılmayıp `Blocked` durumunda duraklatılması.
- **Çelişki Kaydı (`CONFLICTS.md`):** İki çelişen gereksinimin (İstemci taraflı sunucusuz deployment kısıtlaması vs Sunucu taraflı canlı multi-tenant senkronizasyon talebi) `CONFLICTS.md` belgesine açıkça kaydedilmesi.
- **Çıktı Engeli:** `Blocked` durumundaki bir çalışmanın kesinlikle final çıktı yayınlayamayacağını (`output_ref: null`, `output_version: not_published`) doğrulamak.
- **`Blocked` ≠ `Failed` Ayrımı:** Çelişki çözüldüğünde çalışmanın `Resumed ➔ Running` durumuna dönebileceğini göstermek.

---

## 3. Beklenen Sonuç (Expected Result)

- **Run Status:** `Blocked`
- **Validation Result:** `null` (Validation aşamasına geçilmedi)
- **Output Publication:** `NOT_PUBLISHED` (`output_version: not_published`, `output_ref: null`)
