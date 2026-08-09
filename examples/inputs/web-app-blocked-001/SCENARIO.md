# Scenario Metadata — web-app-blocked-001 (Input)

```yaml
scenario_id: web-app-blocked-001
title: Approved Input for Realtime Sync App Demo
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

Bu senaryo, kullanıcı tarafından onaylanmış (`status: approved`) bir `PROJECT_INPUT.md` belgesini gösterir. Ancak bu girdi, kullanıcı talebinde çelişen iki gereksinim barındırmaktadır: "Sunucusuz statik frontend prototipi olma kısıtı" ile "Canlı sunucu veritabanı senkronizasyon talebi".

---

## 2. Test Edilen Davranış

- **Approved Input ≠ Conflict-Free Run ilkesi:** Girdinin `status: approved` olması, çalıştırmanın sorunsuz tamamlanacağını garanti etmez.
- **Run Creation Eligibility:** Girdi onaylı olduğu için `Run Creation Gate` aşamasını geçer ve bir run başlatılabilir (`RUN-20260101-002`).
- **Pipeline Blocking:** Çalıştırma başladıktan sonra `engine/CONFLICT_RESOLUTION.md` uyarınca paket çözümlenirken `CNF-01` kritik mimari çelişkisi tespit edilir ve çalışma `Blocked` durumuna geçer.

---

## 3. Beklenen Sonuç (Expected Result)

- **Intake Status:** `approved` (`approved_by: user`, `input_id: INPUT-REALTIME-SYNC-APP-V1`)
- **Run Eligibility:** `ELIGIBLE` (Girdi snapshot'ı alınabilir)
- **Run Lifecycle Impact:** Run pipeline adımlarında `Blocked` durumuna geçer.
