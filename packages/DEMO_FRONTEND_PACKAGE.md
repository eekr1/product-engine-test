# DEMO_FRONTEND_PACKAGE

## Package Kimliği

```yaml
package_id: demo-frontend
package_name: Frontend Demo Package
package_type: base
version: 2.3.0
status: active
default_delivery_profile: Prototype
compatible_project_types:
  - prototype
  - web-app
  - mobile-app
  - other
```

## Amaç

UI proof, interaction prototype, concept validation veya erken frontend deneyimi gibi **frontend ağırlıklı fakat corporate-website domain'i olmayan** scope'u tanımlar.

Bu package planning depth sahibi değildir. Implementation/design planning belgeleri `PLANNING_PROFILE_OVERLAY.md` tarafından eklenir.

`corporate-website` project type bu package tarafından sahiplenilemez. Bir corporate website sales demo/prototype olsa bile domain base package `corporate-website` olmalıdır.

---

## Demo / Prototype Semantics

`demo`, `sales demo`, `prototype`, `local preview` veya benzeri ifadeler **delivery purpose / runtime maturity** bilgisidir; project type veya execution capability authority değildir.

Canonical invariants:

```text
demo/prototype label ≠ feature approval
demo/prototype label ≠ project type override
```

Bu etiketler tek başına şunları authorize etmez:

- contact form,
- map,
- WhatsApp,
- modal,
- mock interaction,
- placeholder capability,
- yeni CTA türü,
- yeni page/surface/flow,
- approved scope dışındaki herhangi bir capability.

Mock/local data kullanma izni yalnız approved current frontend scope'u desteklemek içindir; yeni product behavior icat etme izni değildir.

Demo/prototype ayrıca code, architecture, design, accessibility veya responsive quality floor'unu düşürmez.

---

## Domain Scope

Bu base package şu gerçekleri ifade eder:

- Birincil teslim, çalışır ve sunulabilir frontend/UI deneyimidir.
- Gerçek backend/database/auth yalnız approved scope'ta ise aktif implementation scope'udur.
- Gerçek backend yoksa demo mock/local data kullanabilir.
- Mock/local adapter yalnız approved capability'lerin veri ihtiyacını karşılar; kendi başına yeni interaction veya feature oluşturmaz.
- Demo throwaway architecture değildir.
- UI/UX applicable olduğundan design planning gerekir.
- Corporate information architecture bu package'ın shortcut scope'u değildir.

---

## Base Domain Documents

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES (applicable product type'ta)
DESIGN       (UI applicable olduğu için)
```

Nihai set:

```text
DEMO_FRONTEND base domain docs
+
PLANNING_PROFILE_OVERLAY
+
real contextual conditions
```

ile çözülür.

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
- demo gerekçesiyle service/config boundary'lerini yok saymak,
- demo/prototype gerekçesiyle approved scope'ta olmayan mock interaction veya feature eklemek.

Gerçek API approved scope'a girerse `API`/`DATA` ve ilgili extension/context koşulları yeniden çözülür.

---

## Continuation-Ready Frontend Foundation

`demo-frontend` package için integration readiness yalnız data adapter ile tamamlanmış sayılmaz. Aynı codebase üzerinde continuation beklenen frontend'lerde bugünkü stack/tooling seçimi gerçek ürüne devam etmeyi desteklemelidir.

Canonical expectation:

```text
demo frontend
→ same frontend foundation
→ additional surfaces/components/state
→ real service/API integration when approved
```

Approved teknik constraint yoksa continuation beklenen demo package-managed, component-oriented ve repeatable dev/build/preview workflow taşıyan modern frontend baseline kullanmalıdır.

Beklenen baseline class:

```text
package/dependency manifest
+ repeatable dev/build/preview workflow
+ modular component/module structure
+ service/config boundary
+ production-continuation friendly source layout
```

Zero-build / dependency-free yaklaşım yalnız `engine/PLANNING_PROFILES.md` continuation gate'ini karşılayan **approved constraint** ile seçilebilir. Agent kendi low-migration rationale'ını constraint yerine kullanamaz.

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

## Deterministic Wave Granularity Guard

Demo frontend wave decomposition responsibility sınırlarına göre yapılır.

Distinct deliverable class örnekleri:

```text
Foundation / Bootstrapping
Primary Surface / Shell
Feature / Presentation Surface
Conversion / Contact behavior (approved ise)
Final Cross-Cutting Integration / Responsive / Regression / Presentation QA
```

Rules:

- Foundation user-facing surface'lerden ayrıdır.
- Whole-project final QA gerçek feature wave'inin içine gizlenemez.
- Yeni capability yalnız wave decomposition gerekçesiyle üretilemez.
- Corporate website page architecture bu package'ın wave-granularity heuristiğine indirgenemez; corporate project `CORPORATE_WEBSITE_PACKAGE` kullanır.

---

## Validation

Bu package için ek doğrulamalar:

- demo/prototype label yeni capability authorize etmez,
- demo/prototype label corporate-website project type'ını override etmez,
- demo ≠ throwaway architecture,
- integration readiness mevcut,
- continuation beklenen demo için frontend stack/tooling continuation-ready,
- zero-build/dependency-free seçim yalnız approved constraint ile destekli,
- repeatable dev/build/preview workflow ve package/tooling reality TECH_CONTEXT ile tutarlı,
- invented backend yok,
- invented mock interaction/capability yok,
- design profile minimumu korunmuş,
- planning overlay implementation minimumu korunmuş,
- whole-project final QA feature wave'ine gömülmemiş.

Package scope/granularity/continuation guard ihlali → validation FAIL / upstream repair.

---

## Output Category

Varsayılan category:

```text
outputs/demos/<project-slug>/
```

Planning profile bu category'yi tek başına değiştirmez.
