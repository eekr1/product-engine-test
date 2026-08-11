# DEMO_FRONTEND_PACKAGE

## Package Kimliği

```yaml
package_id: demo-frontend
package_name: Frontend Demo Package
package_type: base
version: 2.0.0
status: active
default_delivery_profile: Prototype
compatible_project_types:
  - web-app
  - landing-page
  - prototype
  - mobile-app
```

## Amaç

Satış demosu, UI proof, sunum prototipi veya erken frontend deneyimi gibi **frontend ağırlıklı scope'u** tanımlar.

Bu package planning depth sahibi değildir. Implementation/design planning belgeleri `PLANNING_PROFILE_OVERLAY.md` tarafından eklenir.

---

## Domain Scope

Bu base package şu gerçekleri ifade eder:

- Birincil teslim, çalışır ve sunulabilir frontend/UI deneyimidir.
- Gerçek backend/database/auth yalnız approved scope'ta ise aktif implementation scope'udur.
- Gerçek backend yoksa demo mock/local data kullanabilir.
- Demo throwaway architecture değildir.
- UI/UX applicable olduğundan `design_planning` profile'ı intake'te zorunludur.

---

## Base Domain Documents

Base package'ın kendi domain çekirdeği:

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES (applicable product type'ta)
DESIGN       (UI applicable olduğu için)
```

Bunlar nihai document set değildir.

Nihai set:

```text
DEMO_FRONTEND base domain docs
+
PLANNING_PROFILE_OVERLAY
+
real contextual conditions
```

ile çözülür.

Örneğin:

```yaml
delivery_profile: Prototype
implementation_planning: standard
design_planning: light
```

ise overlay TECH-CTX, PROJECT_PLAN, WAVE_MAP/WAVE plans, STATUS/TASKS/AGENT/DECISIONS gibi agent-ready implementation minimumunu ekler.

---

## Integration Readiness

Gerçek backend yoksa:

```text
UI
→ service/data-access boundary
→ mock/local adapter
→ future real API adapter (approved olduğunda)
```

beklenir.

MUST NOT:

- mock data'yı kontrolsüz component içine yaymak,
- backend/API/database uydurmak,
- demo gerekçesiyle service/config boundary'lerini yok saymak.

Gerçek API approved scope'a girerse `API`/`DATA` ve ilgili extension/context koşulları yeniden çözülür.

---

## Design Kuralı

Demo design'ı generic template anlamına gelmez.

`design_planning: light` bile:

- güçlü project-specific visual concept,
- anti-template rationale,
- modern composition/typography,
- responsive/accessibility baseline

içeren DESIGN_RULES üretmek zorundadır.

Sektör klişesi tek tasarım gerekçesi olamaz.

---

## Validation

Bu package için ek doğrulamalar:

- demo ≠ throwaway architecture,
- integration readiness mevcut,
- invented backend yok,
- design profile minimumu korunmuş,
- planning overlay implementation minimumu korunmuş,
- sunum akışı gerçek scope ile tutarlı.

---

## Output Category

Varsayılan category:

```text
outputs/demos/<project-slug>/
```

Planning profile bu category'yi tek başına değiştirmez.
