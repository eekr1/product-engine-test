# API_SERVICE_PACKAGE

## Package Kimliği

```yaml
package_id: api-service
package_name: API Service Package
package_type: base
version: 2.0.0
status: active
compatible_project_types:
  - api-service
  - integration
  - infrastructure
  - web-app
  - mobile-app
```

## Amaç

Gerçek API/backend/integration surface'i bulunan projelerin domain gereksinimlerini tanımlar.

Implementation planning depth `PLANNING_PROFILE_OVERLAY.md` tarafından uygulanır. UI yoksa design planning applicable değildir; `none` profile icat edilmez.

---

## Domain Candidate Documents

Gerçek API-service scope'ta güçlü canonical adaylar:

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES (applicable ise)
TECH-CTX
API
DATA (kalıcı/önemli data model varsa)
```

Execution docs planning overlay tarafından eklenir.

TEST/DEPLOY/OPS gerçek complexity/production scope koşullarıyla değerlendirilir.

---

## API Domain Kuralları

- Endpoint/request/response contract owner'ı API_CONTRACTS'tır.
- Data entities/relations owner'ı DATA_MODEL'dır.
- Architecture/integration boundary owner'ı TECH_CONTEXT'tir.
- Auth/security kararları approved input/decision olmadan uydurulamaz.
- Infrastructure/integration project type'ta gerçek API surface yoksa API belgesi sırf package compatibility nedeniyle zorlanmaz.

---

## Full Planning

`implementation_planning: full` karmaşık API projelerinde:

- DATA,
- API,
- TEST,
- production scope varsa DEPLOY/OPS

gibi belgelerin daha derin çözülmesini sağlar; ancak gerçek koşul olmadan doküman üretmez.

---

## Validation

- API contract gerçek approved scope'a dayanıyor.
- TECH_CONTEXT / DATA / API ownership ayrımı korunuyor.
- Planning overlay execution minimumu mevcut.
- Fake auth/deployment/data assumption yok.
- UI yoksa gereksiz design artifact üretilmiyor.
