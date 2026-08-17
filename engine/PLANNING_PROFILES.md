# Planning Profiles

## Amaç

Bu belge, Product Engine içinde **implementation planning** ve **design planning** derinliğinin nasıl belirleneceğini tanımlar.

Planning profile'ları kalite veya product/page breadth seviyesi değildir.

```text
PROFILE DEPTH ≠ QUALITY LEVEL
PROFILE DEPTH ≠ APPROVED SCOPE BREADTH
```

Her uygulanabilir çıktı temiz, sürdürülebilir, genişletilebilir, coherent, current ve agent-ready olmalıdır.

---

## Kapsam

Bu belge şunların authoritative sahibidir:

- `implementation_planning` değerleri ve anlamları,
- `design_planning` değerleri ve anlamları,
- profile seçiminin kalite tabanı,
- demo/prototype mimari kalite beklentisi,
- frontend integration readiness,
- continuation/evolution-ready stack selection,
- profile depth ile design/page breadth ayrımı,
- generic/template drift'e karşı design quality rules.

Bu belge şunların sahibi değildir:

- exact site/page architecture → `SITE_ARCHITECTURE_RULES.md` + approved input,
- exact document ID seçimi → `PACKAGE_RULES.md`, `DOCUMENT_CATALOG.md`,
- project intake/approval → `PROJECT_INTAKE.md`,
- validation checklist → `VALIDATION_RULES.md`.

---

# 1. Implementation Planning

Canonical değerler:

```text
standard
full
```

### standard

Agent-ready implementation minimumudur.

Standard planning minimum:

- teknik bağlam ve ana mimari sınırlar,
- proje teslim aşamaları,
- wave structure ve execution order,
- mevcut durum ve sıradaki görevler,
- önemli kararlar ve rationale,
- acceptance criteria için yeterli context,
- frontend/backend/data/integration boundaries,
- future integration'ı gereksiz rewrite olmadan destekleyen clean boundaries,
- approved corporate page setinin implementation coverage'ı (applicable ise).

`standard` = “az plan” değildir.

### full

Standard kapsamını korur ve gerçek complexity gerektiriyorsa şunları derinleştirir:

- ayrıntılı dependency graph,
- granular acceptance criteria,
- cross-system/cross-feature dependencies,
- gerçek approved data/API contracts,
- test strategy,
- production deployment/operations,
- migration/transition planning,
- deeper technical risks.

`full` gereksiz document/complexity üretme izni değildir.

---

# 2. Design Planning

Canonical değerler:

```text
light
standard
full
```

`none` yoktur. UI/UX applicable değilse design planning seçilmez; metadata representation gerekirse `N/A` operational gösterimdir, yeni profile değildir.

## light

Belge kapsamı hafiftir; design quality düşük değildir.

Minimum:

- güçlü project-specific visual concept,
- typography/composition/spacing direction,
- anti-template constraints,
- responsive/accessibility baseline,
- agent'ın aynı design language'i sürdürebileceği karar netliği.

`light` özellikle gerçekten sınırlı **single/few-surface UI proof, compact prototype veya küçük interaction demonstration** için uygundur.

`light` şu anlama gelmez:

```text
corporate website'i single page'e indir
multi-page information architecture'ı görmezden gel
navigation/page responsibilities'i tek DESIGN_RULES içine gizle
```

Multi-page `corporate-website` için default intake recommendation `standard`dır. Kullanıcı `light` seçebilir; ancak approved page architecture yine eksiksiz implementation-ready kalmalı ve rationale pending intake'te görünmelidir.

## standard

Light kapsamının tamamını ve UI'ı sistem olarak modellemek için gereken orta derinliği içerir:

- DESIGN_RULES,
- DESIGN_SYSTEM,
- GLOBAL_SHELL / navigation,
- PAGE-DESIGN instances,
- applicable SYSTEM_STATES,
- cross-page/screen responsive consistency.

Birden çok distinct page/screen içeren corporate website veya serious UI product için varsayılan güçlü seviyedir.

## full

Standard kapsamını korur ve gerçek complexity gerekiyorsa:

- feature-level packages,
- complex multi-step flows,
- auth/gate/permission experiences,
- cross-screen interaction state,
- admin/operational UI,
- dense responsive/state matrices

ekler.

---

# 3. Universal Quality Floor

Profile ne olursa olsun:

```text
clean
maintainable
extensible
coherent
non-generic
current
agent-ready
```

MUST NOT:

```text
"Prototype olduğu için dağınık olabilir."
"Demo olduğu için mimari önemli değil."
"Light olduğu için generic template yeterli."
"Light olduğu için approved pages tek sayfaya merge edilebilir."
"Backend yok, data component içine gömülebilir."
```

Delivery/profile yalnız maturity/planning depth'i etkiler; approved scope/page breadth'i değiştirmez.

---

# 4. Design Diversity / Anti-Template

Product Engine sektör veya project type'tan hazır visual theme türetemez.

Yasak automatic mappings:

```text
sanayi → klasik lacivert kurumsal tema
SaaS → mor/mavi gradient + üç feature card
AI → neon cyan/mor dark UI
corporate website → hero + üç card + logo band + CTA template
```

Her UI project'te birlikte değerlendirilir:

- brand/product character,
- audience/use context,
- content density/tasks,
- approved brand assets/constraints,
- project differentiation,
- current usable composition/interaction patterns.

```text
non-generic ≠ random
modern ≠ trend copy
novel ≠ inaccessible
```

---

# 5. Demo / Prototype Architectural Quality

Canonical invariant:

```text
Temporary scope ≠ throwaway architecture
Prototype/demo maturity ≠ reduced page architecture
```

Demo frontend future backend/data/service layer'a büyüyebilecekse current structure gereksiz rewrite oluşturmamalıdır.

MUST NOT:

- business logic presentation'a gömmek,
- mock data'yı uncontrolled component'lere dağıtmak,
- config/environment boundary'yi yok saymak,
- future integration points'i belirsiz bırakmak,
- short-lived hacks'i permanent architecture yapmak,
- corporate sales demo'yu single marketing surface'e indirmek.

---

# 6. Backend / Integration Readiness

Frontend current scope'ta backend olmayabilir. Sahte API/database üretilemez.

Required conceptual boundary:

```text
UI / presentation
      ↓
service / data-access boundary
      ↓
mock/local adapter today
real API adapter later when approved
```

Technical planning şunları cevaplamalıdır:

- data today nereden geliyor,
- mock/local data nerede,
- UI hangi boundary üzerinden consume ediyor,
- real backend geldiğinde hangi layer değişiyor,
- env/config nasıl ayrılıyor,
- hangi backend/API decisions unresolved.

```text
integration-ready → YES
invented backend → NO
```

---

# 6A. Continuation-Ready Frontend Stack Selection

Integration readiness yalnız adapter boundary değildir. Stack/tooling, continuation beklenen projede aynı codebase'in büyümesini structural rewrite olmadan desteklemelidir.

Canonical invariant:

```text
Prototype/demo maturity ≠ migration-heavy frontend foundation izni
```

Continuation expected flow:

```text
demo/current frontend
→ same application foundation
→ more pages/components/state
→ real service/API adapter
→ optional CMS/admin/auth/integrations
```

Belirli global framework mandate yoktur. Ancak continuation beklenen client/sales frontend için approved opposite constraint yoksa şu class zorunludur:

```text
package-managed development baseline
+ component/module-oriented source structure
+ repeatable dev/build/preview workflow
+ service/config boundary
+ continuation-friendly routing/page expansion path when multi-page
```

## Zero-Build / Dependency-Free Gate

Continuation expected projede standalone/dependency-free/zero-build seçim yalnız **approved user/project/environment constraint** ile yapılabilir.

Valid constraint examples:

- explicit zero-build/static delivery requirement,
- target environment package tooling çalıştıramıyor,
- explicitly disposable one-off proof with no continuation expectation.

Invalid self-justifications:

```text
"küçük olduğu için"
"demo olduğu için"
"daha hızlı"
"dependency crash olmasın"
"ileride framework'e migrate ederiz"
"migration kolay olur"
```

Agent rationale approved constraint yaratamaz.

TECH_CONTEXT minimum şu evidence'ı taşır:

```text
Continuation Expected
Approved Zero-Build Constraint
Selected Frontend Baseline
Package Manifest
Dev Command
Build Command
Preview Command
Same-Codebase Continuation
Routing/Page Expansion Path (multi-page applicable ise)
```

---

# 7. Corporate Website Profile Guidance

Site architecture semantics `SITE_ARCHITECTURE_RULES.md` sahibidir; bu bölüm yalnız profile recommendation verir.

Default recommendation:

```text
corporate-website + multiple approved pages
→ implementation_planning: standard (unless complexity requires full)
→ design_planning: standard
```

Nedeni:

- real navigation shell,
- page-specific information hierarchy,
- consistent design system,
- page contracts,
- cross-page responsive behavior.

Bu recommendation approval değildir. Kullanıcı profile değerlerini pending intake üzerinden explicit approve eder.

---

# 8. Delivery Profile Relationship

`delivery_profile`, `implementation_planning`, `design_planning`, `site_architecture` ayrı eksenlerdir.

Örnek:

```yaml
project_type: corporate-website
delivery_profile: Prototype
implementation_planning: standard
design_planning: standard
site_architecture:
  - PAGE-001 Home
  - PAGE-002 Corporate
  - PAGE-003 Services
  - PAGE-004 Contact
```

Anlamı:

- delivery maturity Prototype,
- implementation plan agent-ready standard,
- multi-page design standard,
- dört approved page'in tamamı current scope.

Prototype bu dört page'i bire düşürmez.

---

# Core Invariants

```text
PROFILE DEPTH ≠ QUALITY LEVEL
PROFILE DEPTH ≠ APPROVED SCOPE BREADTH
Prototype ≠ page reduction
Light ≠ generic design
Multi-page corporate website → standard design recommended
Temporary scope ≠ throwaway architecture
Continuation expected → same-codebase growth
Integration-ready ≠ invented backend
```
