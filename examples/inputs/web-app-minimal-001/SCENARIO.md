# Scenario Metadata — web-app-minimal-001 (Input)

```yaml
scenario_id: web-app-minimal-001
title: Minimal Web Application Approved Input
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

Bu senaryo, sıfırdan başlanan (`new`) minimal bir web uygulaması prototipi için hazırlanan, tam doğrulanmış ve kullanıcı tarafından açıkça onaylanmış bir `PROJECT_INPUT.md` belgesinin yapısını gösterir.

---

## 2. Test Edilen Davranış

- `inputs/PROJECT_INPUT_TEMPLATE.md` kanonik yapısına tam uyum.
- `project_type: web-app` ve `delivery_profile: Prototype` kanonik terimlerinin doğru kullanımı.
- Kullanıcı onay bilgisi (`status: approved`, `approved_by: user`, `approved_at: 2026-01-01T00:00:00Z`).
- Zorunlu intake alanlarının eksiksiz doldurulması ve hiçbir açık kritik çelişki kalmaması.
- Sentetik veri kullanımı; gerçek kişi/şirket bilgisi, secret veya yerel yol (`file:///`) bulunmaması.

---

## 3. Beklenen Sonuç (Expected Result)

- **Intake Validation:** `PASS`
- **Run Creation Eligibility:** `ELIGIBLE` (Product Engine bu girdi ile doğrudan yeni bir run başlatabilir).
- **Package Selection:** `demo-frontend` paketi seçilir (`engine/PACKAGE_RULES.md` uyarınca).
