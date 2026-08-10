# Scenario Metadata — web-app-pending-001 (Input)

```yaml
scenario_id: web-app-pending-001
title: Pending Web Application Input with Critical Gaps
example_type: negative
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

Bu senaryo, henüz kullanıcı tarafından açıkça onaylanmamış (`status: pending`) ve kritik bilgi eksiklikleri taşıyan bir `PROJECT_INPUT.md` taslağını gösterir.

---

## 2. Test Edilen Davranış

- **Run Creation Gate Engeli:** Taslak (`pending`) durumdaki bir girdinin doğrudan bir Product Engine çalıştırması (`run`) başlatmak için kullanılamayacağını doğrulamak.
- **Intake Validation Failure:** Zorunlu alan eksikliği (örneğin hedef kitle ve belirsiz kapsam) ve açık onay eksikliği nedeniyle `Intake Validation` denetiminin geçilemeyeceğini göstermek.
- **Ajan Sorumluluk Sınırı:** Ajanın eksik olan kritik bilgileri kendi kendine varsayarak veya uydurarak `status: approved` atayamayacağını; kullanıcıya soru hazırlaması gerektiğini somutlaştırmak.

---

## 3. Beklenen Sonuç (Expected Result)

- **Intake Validation:** `FAIL` / `INCOMPLETE`
- **Run Creation Eligibility:** `NOT_ELIGIBLE` (Product Engine bu girdi ile asla bir run başlatamaz).
- **Ajan Eylemi:** Kullanıcıya eksik alanları netleştirecek açıklayıcı sorular sunmak ve girdiyi `inputs/pending/` klasöründe tutmak.
