# Scenario Metadata — web-app-blocked-001 (Run)

```yaml
scenario_id: web-app-blocked-001
title: Blocked Run Due to Critical Runtime Technical Conflict
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

Bu senaryo, tamamen onaylı ve çelişkisiz bir girdi snapshot'ından (`INPUT-REALTIME-SYNC-APP-V1`) başlatılan bir Product Engine çalışmasının, üretim sırasında yeni bir teknik gereksinimin keşfedilmesiyle nasıl `Blocked` durumuna geçtiğini gösterir.

---

## 2. Test Edilen Davranış & Akış

1. **Approved Input Initialization:** Girdi `status: approved` olarak snapshot alınır ve run başlatılır (`RUN-20260101-002`).
2. **Runtime Discovery:** Paket ve teknik fizibilite incelemesi sırasında prototipin simülasyon ötesinde canlı multi-tenant WebSocket sunucusu gerektirdiği şeklinde yeni bir çalışma zamanı bağımlılığı keşfedilir.
3. **Critical Conflict Registration (`CONFLICTS.md`):** Sonradan keşfedilen bu yeni gereksinim `demo-frontend` istemci taraflı prototip kapsamıyla çelişir ve `CNF-01` olarak kaydedilir.
4. **Transition to Blocked:** Çalışma `engine/CONFLICT_RESOLUTION.md` uyarınca doğrudan `Failed` yapılmayıp `Blocked` durumuna çekilir.
5. **Output Shielding:** `Blocked` durumundaki bir çalıştırmanın nihai çıktı yayınlayamayacağını (`output_ref: null`, `output_version: not_published`) doğrulamak.

---

## 3. Beklenen Sonuç (Expected Result)

- **Run Status:** `Blocked`
- **Validation Result:** `null` (Validation aşamasına geçilmedi)
- **Output Publication:** `NOT_PUBLISHED` (`output_version: not_published`, `output_ref: null`)
