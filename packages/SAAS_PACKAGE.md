# SAAS_PACKAGE

## Package Kimliği

```yaml
package_id: saas
package_name: SaaS Package
package_type: base
version: 2.0.0
status: active
compatible_project_types:
  - web-app
  - mobile-app
  - api-service
  - content-platform
  - internal-tool
```

> `saas` bir project type değildir; business/domain package bağlamıdır.

## Amaç

Hesap, auth/permission, kalıcı veri, backend/API, kullanıcıya özel state ve gerçek ürün lifecycle'ı taşıyan SaaS benzeri sistemlerin domain gereksinimlerini tanımlar.

Planning depth `PLANNING_PROFILE_OVERLAY.md` tarafından uygulanır.

---

## Domain Candidate Documents

Gerçek scope'a göre SaaS bağlamında aşağıdaki canonical belgeler güçlü adaydır:

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES
TECH-CTX
DATA
API
```

UI varsa DESIGN familyası design planning overlay tarafından çözülür.

Execution docs (PROJECT_PLAN/WAVE/STATUS/TASKS/AGENT/DECISIONS) implementation planning overlay tarafından çözülür.

TEST/DEPLOY/OPS/PROD-STRAT real scope/profile koşullarıyla eklenir.

---

## Domain Kuralları

- Auth/permission tasarımı sessizce uydurulamaz.
- Gerçek data model ve API varsa DATA/API canonical owner'larında belgelenir.
- Tenant/account/billing gibi SaaS klişeleri proje brief'inde yoksa otomatik scope'a eklenmez.
- Monetization modeli sırf package adı SaaS diye üretilmez.
- UI varsa tasarım generic dashboard/cards template'ine otomatik bağlanmaz.

---

## Full Planning

`implementation_planning: full` SaaS için genellikle DATA/API/TEST gibi derin belgeleri gerekli kılabilir; ancak her belge gerçek approved scope koşuluyla doğrulanır.

Production target gerçekten onaylanmışsa DEPLOY/OPS değerlendirilir.

---

## Validation

- SaaS stereotype scope drift yok.
- Auth/data/API truth approved context ile tutarlı.
- Planning overlay minimumu korunmuş.
- UI varsa design profile minimumu korunmuş.
- DATA/API/DEPLOY gibi belgeler gerçek scope olmadan üretilmemiş.
