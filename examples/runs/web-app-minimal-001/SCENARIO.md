# Scenario Metadata — web-app-minimal-001 (Run)

```yaml
scenario_id: web-app-minimal-001
title: Completed Minimal Web Application Run
example_type: positive
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

Bu senaryo, onaylı bir `PROJECT_INPUT.md` belgesinden başlanarak `demo-frontend` paketi ve `Prototype` teslimat profili ile yürütülen ve başarıyla tamamlanan (`status: Completed`) bir çalışmanın 11 kanonik operasyonel belgesini ve `working-output/` yapısını gösterir.

---

## 2. Test Edilen Davranış

- Run yaşam döngüsünün `Created ➔ Initialized ➔ Running ➔ Validation ➔ Completed` adımlarını sorunsuz geçmesi.
- `INPUT_SNAPSHOT.md` snapshot'ının onaylı girdiden eksiksiz alınması.
- `PACKAGE_SELECTION.md` kararlarının `engine/PACKAGE_RULES.md` ile tam uyumlu olması.
- `VALIDATION_REPORT.md` denetiminin `PASS` vermesi.
- Final çıktının `outputs/demos/task-tracker-demo/versions/v0.1/` ve `latest/` dizinlerine yayınlanması.
- `RUN_MANIFEST.md` belgesindeki `output_ref` ve `output_version` alanlarının dondurulması.

---

## 3. Beklenen Sonuç (Expected Result)

- **Run Status:** `Completed`
- **Overall Validation:** `PASS`
- **Output Publication:** `PUBLISHED` (`output_version: v0.1`, `output_ref: examples/outputs/web-app-minimal-001/`)
