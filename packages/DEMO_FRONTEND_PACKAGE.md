# DEMO_FRONTEND_PACKAGE

## Package Kimliği

```yaml
package_id: demo-frontend
package_name: Frontend Demo Package
package_type: base
version: 2.2.1
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

## Demo / Prototype Semantics

`demo`, `sales demo`, `prototype`, `local preview` veya benzeri ifadeler **delivery purpose / runtime maturity** bilgisidir; execution capability authority değildir.

Canonical invariant:

```text
demo/prototype label ≠ feature approval
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
- demo gerekçesiyle service/config boundary'lerini yok saymak,
- demo/prototype gerekçesiyle approved scope'ta olmayan mock interaction veya feature eklemek.

Gerçek API approved scope'a girerse `API`/`DATA` ve ilgili extension/context koşulları yeniden çözülür.

### Continuation-Ready Frontend Foundation

`demo-frontend` package için integration readiness yalnız data adapter ile tamamlanmış sayılmaz. Özellikle satış demosu veya müşteri kabul ederse gerçek projeye dönüşmesi beklenen frontend'lerde, bugünkü stack/tooling seçimi aynı codebase üzerinde devam etmeyi desteklemelidir.

Canonical package expectation:

```text
sales demo
→ same frontend foundation
→ additional pages/components/state
→ real service/API/CMS integration when approved
```

Aksi yönde approved teknik constraint yoksa Engine, modern package-managed ve component-ready bir frontend development baseline'ını tercih etmelidir. Bu kural belirli bir framework'ü global olarak zorunlu kılmaz; framework/tooling seçimi project-specific teknik synthesis kararıdır.

Beklenen baseline class:

```text
package/dependency manifest
+ repeatable dev/build/preview workflow
+ modular component/module structure
+ service/config boundary
+ production-continuation friendly source layout
```

Zero-build / dependency-free Vanilla yaklaşımı otomatik yasak değildir; fakat yalnızca `engine/PLANNING_PROFILES.md` içindeki continuation-ready selection gate'i karşılayan açık gerekçeyle seçilebilir.

Şunlar tek başına yeterli gerekçe değildir:

```text
demo
prototype
small project
fast implementation
no dependencies
```

TECH_CONTEXT, seçilen stack'in kabul sonrası continuation yolunu ve migration maliyetini açıkça gerekçelendirmelidir.

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

`demo-frontend` özellikle `landing-page`, corporate presentation veya satış demosu bağlamında wave decomposition'ı yorum serbestisine bırakamaz.

Aşağıdaki responsibility class'lar distinct deliverable adaylarıdır:

```text
Foundation / Bootstrapping
Primary Entry / Hero
Corporate / Trust
Services / Product Presentation
Contact / Conversion
Final Cross-Cutting Integration / Responsive / Regression / Presentation QA
```

Bu liste sabit wave isimleri değildir; ancak şu merge'ler deterministic olarak geçersizdir:

```text
Services + Contact in one wave
→ SPLIT unless contact is truly trivial/non-distinct and has no own data/CTA/responsive responsibility

Any feature/surface + whole-project final QA
→ SPLIT

Contact + whole-project final QA
→ SPLIT
```

Cross-cutting QA tanımı:

```text
QA scope re-validates 2 or more previously completed surfaces/features
or performs whole-project responsive/cross-browser/regression/presentation verification
→ separate final QA wave is REQUIRED
```

Corporate/landing demo için minimum decomposition sanity:

- Foundation user-facing surfaces'ten ayrıdır.
- Services distinct ise Contact altında saklanamaz.
- Contact yalnız approved contact capability'lerini taşıyabilir; `Contact` etiketi form/map/WhatsApp gibi ek davranışları otomatik authorize etmez.
- Whole-project final QA bir feature wave'inin acceptance maddesi olarak gizlenemez.

Valid merge yalnız gerçekten tek coherent completion boundary varsa ve merge edilen responsibility bağımsız olarak tamamlanabilir bir deliverable değilse yapılabilir. Bu istisna explicit rationale ile WAVE_MAP içinde açıklanmalıdır.

Validator bu guard'ı heuristic tavsiye olarak değil package-level blocking contract olarak uygular.

---

## Validation

Bu package için ek doğrulamalar:

- demo/prototype label yeni capability authorize etmez,
- demo ≠ throwaway architecture,
- integration readiness mevcut,
- continuation beklenen demo için frontend stack/tooling continuation-ready ve düşük migration maliyetli gerekçelendirilmiş,
- zero-build/dependency-free seçim varsa explicit constraint veya güçlü continuation rationale mevcut,
- repeatable dev/build/preview workflow ve package/tooling reality TECH_CONTEXT ile tutarlı,
- invented backend yok,
- invented mock interaction/capability yok,
- design profile minimumu korunmuş,
- planning overlay implementation minimumu korunmuş,
- sunum akışı gerçek approved scope ile tutarlı,
- distinct Services ve Contact sorumlulukları uygunsuz biçimde merge edilmemiş,
- whole-project final QA herhangi bir feature/contact wave'ine gömülmemiş.

Package scope/granularity/continuation guard ihlali → validation FAIL / TECH_CONTEXT or WAVE_MAP repair.

---

## Output Category

Varsayılan category:

```text
outputs/demos/<project-slug>/
```

Planning profile bu category'yi tek başına değiştirmez.
