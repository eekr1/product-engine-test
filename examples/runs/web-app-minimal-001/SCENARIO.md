# Scenario Metadata — web-app-minimal-001 (Run)

```yaml
scenario_id: web-app-minimal-001
title: Completed Minimal Web Application Run
example_type: positive
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

Bu senaryo, onaylı bir `PROJECT_INPUT.md` (`INPUT-TASK-TRACKER-DEMO-V1`) belgesinden başlanarak `demo-frontend` paketi ve `Prototype` teslimat profili ile yürütülen ve başarıyla tamamlanan (`status: Completed`) bir çalışmanın 11 kanonik operasyonel belgesini ve `working-output/` yapısını gösterir.

---

## 2. Test Edilen Davranış

- Run yaşam döngüsünün `Created ➔ Initialized ➔ Running ➔ Validation ➔ Completed` adımlarını sorunsuz geçmesi.
- `INPUT_SNAPSHOT.md` snapshot'ının onaylı girdiden eksiksiz alınması (`INPUT-TASK-TRACKER-DEMO-V1`).
- `PACKAGE_SELECTION.md` kararlarının `engine/PACKAGE_RULES.md` ile tam uyumlu olması (`selected_package: demo-frontend`).
- `VALIDATION_REPORT.md` denetiminin `validation_result: PASS` vermesi.
- `RUN_MANIFEST.md` belgesindeki `output_ref` alanında kanonik runtime yayın konumunun (`outputs/demos/task-tracker-demo/versions/v0.1/`) dondurulması.

---

## 3. Physical Fixture vs Canonical Runtime Output Ref

- **Canonical Runtime Output Ref (`output_ref`):** `outputs/demos/task-tracker-demo/versions/v0.1/` (Gerçek bir çalıştırmanın `RUN_MANIFEST.md` belgesine yazacağı yetkili runtime çıktı yolu).
- **Physical Example Fixture Location:** `examples/outputs/web-app-minimal-001/` (Örnek materyallerin repository içerisinde saklandığı sentetik fixture dizini).

---

## 4. Beklenen Sonuç (Expected Result)

- **Run Status:** `Completed`
- **Validation Result:** `PASS`
- **Output Ref:** `outputs/demos/task-tracker-demo/versions/v0.1/`
