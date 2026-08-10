# Scenario Metadata — web-app-blocked-001 (Input)

```yaml
scenario_id: web-app-blocked-001
title: Approved Input for Realtime Sync App Demo
example_type: edge-case
project_type: web-app
package_id: demo-frontend
delivery_profile: Prototype
engine_version: 0.1.0
status: active
created_at: 2026-01-01T00:00:00Z
updated_at: 2026-01-01T00:00:00Z
source: synthetic
anonymized: true
```

---

## 1. Senaryonun Amacı

Bu senaryo, kullanıcı tarafından sorunsuz biçimde onaylanmış (`status: approved`), hiçbir açık kritik çelişki içermeyen bir `PROJECT_INPUT.md` belgesini gösterir.

---

## 2. Input vs Run Contract Semantiği

- **Tam Onaylı Girdi (Conflict-Free Intake):** Girdi belgesi intake aşamasında çözülmemiş hiçbir kritik çelişki barındırmaz. Kullanıcı onayı tamdır (`approved_by: user`).
- **Run Creation Eligibility:** Girdi geçerli ve onaylı olduğu için `Run Creation Gate` aşamasını sorunsuz geçer ve çalıştırma dondurulmuş snapshot ile başlatılır (`RUN-20260101-002`).
- **Sonradan Keşfedilen Runtime Çelişkisi:** Çalıştırma başladıktan sonra, teknik fizibilite/bağımlılık denetimi sırasında prototipin simülasyon yerine gerçek multi-tenant WebSocket sunucusu gerektirdiği şeklinde yeni bir teknik gereksinim keşfedilir. Bu yeni çalışma zamanı gereksinimi `demo-frontend` prototip kapsamıyla çelişir ve çalışma `Blocked` durumuna geçer.

---

## 3. Beklenen Sonuç (Expected Result)

- **Intake Status:** `approved` (`approved_by: user`, `input_id: INPUT-REALTIME-SYNC-APP-V1`)
- **Intake Conflicts:** `None` (Intake esnasında kritik çelişki yoktur)
- **Run Eligibility:** `ELIGIBLE` (Product Engine snapshot alıp run başlatabilir)
