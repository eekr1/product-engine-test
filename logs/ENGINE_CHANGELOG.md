# Product Engine — Engine Changelog (`logs/ENGINE_CHANGELOG.md`)

## 1. Amaç ve Otorite

Bu belge, Product Engine'in çekirdek motor yapısında (`engine/`), paket kurallarında (`packages/`), şablon standartlarında (`templates/`), girdi/run/çıktı yaşam döngülerinde ve klasör mimarisinde yapılan kalıcı değişikliklerin tek resmi tarihsel geçmiş kaynağıdır.

### Sürüm Otoritesi Modeli

- **Root `README.md`**: Güncel aktif Product Engine sürümünün birincil otoritesi.
- **`logs/ENGINE_CHANGELOG.md`**: Product Engine sürüm geçmişinin birincil otoritesi.

Güncel aktif sürüm: `v0.3.1`.

---

## 2. Changelog-Worthy Değişiklikler

Aşağıdakiler changelog'a kaydedilir:

- yeni veya değişen engine contract'ları,
- package/document selection davranışı,
- planning profile semantiği,
- canonical template/document type değişiklikleri,
- intake/approval/run lifecycle değişiklikleri,
- output hierarchy ve versioning değişiklikleri,
- validation contract değişiklikleri,
- deprecated/removed canonical dosyalar,
- geriye dönük uyumluluğu etkileyen mimari kararlar.

Typo, format ve tek-run operasyon notları changelog kaydı değildir.

---

## 3. Kayıt Şeması

```markdown
## PE-CHANGE-<NNN> — <YYYY-MM-DD>

- **Version:** vX.Y.Z
- **Change Type:** Added | Changed | Fixed | Deprecated | Removed | Security | Documentation
- **Affected Area:** <areas>
- **Breaking Change:** Yes | No
- **Related Issue:** <ISSUE-XXX | None>
- **Related Run:** <RUN-YYYYMMDD-XXX | None>

### Summary
...

### Reason
...

### Impact
...
```

Change ID'ler artan sırada ve immutable'dır.

---

## 4. Sürüm Geçmişi

### v0.1.0 — First Real Engine Runtime

`v0.1.0`, Product Engine'in ilk gerçek proje run'ını gerçekleştiren temel runtime sürümüdür.

Historical kanıt:

- `runs/completed/RUN-20260811-001/`
- `outputs/demos/trakya-teknik-makine/versions/v0.1/`

Bu historical artefact'ler sonraki contract'lara uyarlamak amacıyla geriye dönük mutate edilmez.

---

## PE-CHANGE-001 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Added
- **Affected Area:** engine/ | packages/ | templates/ | inputs/ | runs/ | outputs/ | project-start/
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Product Engine'e delivery maturity'den bağımsız iki planning ekseni eklendi:

```text
implementation_planning: standard | full
design_planning: light | standard | full (UI/UX applicable ise)
```

`engine/PLANNING_PROFILES.md` yeni canonical authority olarak eklendi. `standard` implementation planning agent-ready minimum olarak tanımlandı. `light` design planning daha az artifact fakat aynı kalite tabanı prensibiyle tanımlandı.

### Reason

İlk gerçek Trakya Teknik Makine run'ı, `Prototype` delivery profile'ın mevcut package/catalog kuralları nedeniyle yalnız dört temel belge üretmesinin Engine'in gerçek hedefi olan "yeni agent doğrudan implementation'a başlayabilsin" kriterini karşılamadığını gösterdi.

Delivery maturity ile execution/design planning depth aynı kavram olarak kullanılıyordu. Bu coupling kaldırıldı.

### Impact

- `Prototype` artık implementation planning'i otomatik azaltmaz.
- Demo/prototype projeler throwaway architecture olarak değerlendirilemez.
- UI projelerinde design planning `light | standard | full` ile bağımsız çözülür.
- Planning profile değerleri approved input truth'un parçasıdır.

---

## PE-CHANGE-002 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Changed
- **Affected Area:** packages/ | engine/DOCUMENT_CATALOG.md | engine/PACKAGE_RULES.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Base package'ların planning depth sahipliği kaldırıldı. Shared `packages/PLANNING_PROFILE_OVERLAY.md` eklendi.

Base package artık domain/scope ihtiyacını; planning overlay ise execution/design depth'i belirler.

### Reason

`Prototype → TECH_CONTEXT/WAVE planning çıkar` gibi package-level daraltmalar yeni agent-ready kalite tabanıyla çelişiyordu ve farklı package'lar arasında drift riski yaratıyordu.

### Impact

Planning profile minimumları hiçbir base package tarafından sessizce düşürülemez. `TECH_CONTEXT`, planning/wave/state dokümanları ve design artifact'leri delivery profile'dan bağımsız olarak seçilebilir.

---

## PE-CHANGE-003 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Added
- **Affected Area:** templates/design/ | engine/DOCUMENT_CATALOG.md | engine/INFORMATION_MAP.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** None

### Summary

Design Engine canonical document modeline yükseltildi. Yeni/aktif design artifact family:

```text
DESIGN
DESIGN-SYSTEM
GLOBAL-SHELL
PAGE-DESIGN
FEATURE-DESIGN
SYSTEM-STATES
ADMIN-DESIGN
```

Generic single-skeleton page ve feature package template'leri tanımlandı.

### Reason

Tek `DESIGN_RULES.md`, büyük veya gerçek UI ürünlerinde agent'ın ekran/feature tasarımını implementation-ready seviyede anlaması için yeterli değildi. `ref/design` içindeki proje-özel pattern'ler generic Engine contract'larına dönüştürülmeliydi.

### Impact

- `light`: güçlü DESIGN_RULES tabanı.
- `standard`: design system, global shell, page/screen packages ve system states.
- `full`: standard + gerçek karmaşıklığın gerektirdiği feature/admin/complex-flow planning.
- Sektör klişeleri ve generic template görünümü default design reasoning olarak kabul edilmez.

---

## PE-CHANGE-004 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Changed
- **Affected Area:** templates/waves/ | engine/GENERATION_PIPELINE.md | engine/VALIDATION_RULES.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** None

### Summary

Wave sistemi tek canonical skeleton'a indirildi:

```text
waves/WAVE_MAP.md
waves/plans/WAVE_<NN>.md
```

Eski duplicate `STANDARD_WAVE_TEMPLATE.md` ve `STANDART WAVE TEMPLATE.md` kaldırıldı; iyi execution disiplinleri `WAVE_PLAN_TEMPLATE.md` içine taşındı.

### Reason

Birden fazla wave skeleton aynı kavram için farklı contract üretme riski taşıyordu. Engine'in Single-Skeleton prensibiyle çelişiyordu.

### Impact

Her selected wave için ayrı uygulanabilir plan ve acceptance/validation contract üretilebilir. `NEXT_TASKS` aktif wave planından türetilir; `CURRENT_STATUS` aktif wave durumunu taşır.

---

## PE-CHANGE-005 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Changed
- **Affected Area:** engine/VALIDATION_RULES.md | engine/OUTPUT_STRUCTURE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Agent-readiness, design coverage, planning profile compliance, backend/integration readiness ve cross-document consistency validation katmanları genişletildi.

Frontend/demo projelerinde gerçek backend yoksa endpoint/schema uydurmak yasak; fakat mock/local data ile future API adapter arasında temiz service/data-access boundary planlamak zorunlu kalite tabanıdır.

### Reason

İlk gerçek run, output'un doküman olarak geçerli olmasının tek başına implementation-ready olması anlamına gelmediğini gösterdi.

### Impact

Yeni temel kabul kriteri:

> Projeyi daha önce görmemiş yeni bir agent, final output'u okuyup yeni mimari planlama yapmadan aktif `WAVE_<NN>` planını uygulamaya başlayabilmelidir.

Bu sağlanmıyorsa output validation PASS alamaz.

---

## PE-CHANGE-006 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Fixed
- **Affected Area:** project-start/ | templates/ | inputs/ | outputs/
- **Breaking Change:** No
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Post-build integration audit cleanup uygulandı:

- duplicate top-level project-start templates kaldırıldı,
- `project-start/templates/` tek canonical project-start skeleton authority olarak bırakıldı,
- Trakya source `delivery_profile / implementation_planning / design_planning` schema'sına migrate edildi,
- eski Trakya pending/approved current input artefact'leri temizlendi,
- `outputs/.../latest/` altındaki eski `v0.1.0` current view kaldırıldı,
- historical `versions/v0.1/` ve completed first-run kaydı korundu.

### Reason

Yeni `v0.2.0` architecture sonrası `v0.1.0` current-state artefact'lerinin yeni run'ı etkileyebilmesi ve iki farklı project-start skeleton bulunması authority drift yaratıyordu.

### Impact

Trakya Teknik Makine ikinci gerçek test için temiz source state'ine döndü. Bir sonraki run yeni input ve yeni output version üretmek zorundadır.

---

## PE-CHANGE-007 — 2026-08-17

- **Version:** v0.2.1
- **Change Type:** Fixed
- **Affected Area:** engine/PLANNING_PROFILES.md | packages/DEMO_FRONTEND_PACKAGE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md | logs/ISSUES.md
- **Breaking Change:** No
- **Related Issue:** ISSUE-001
- **Related Run:** RUN-20260815-001

### Summary

Continuation-ready frontend stack selection intent'i eklendi. Sales/client demo için package-managed/component-ready baseline tercih edildi; zero-build yaklaşım için continuation rationale beklendi.

### Validation Outcome

Fresh `RUN-20260817-002` bu fix'in yeterince deterministic olmadığını gösterdi. Agent yeni rationale bölümünü okuyup yine dependency-free Vanilla seçti ve future React/Vite/Next migration'ını “low migration” olarak gerekçelendirdi. `VAL-09` bunu yakalamadı.

---

## PE-CHANGE-008 — 2026-08-17

- **Version:** v0.2.2
- **Change Type:** Fixed
- **Affected Area:** engine/PLANNING_PROFILES.md | packages/DEMO_FRONTEND_PACKAGE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md | engine/VALIDATION_RULES.md | README.md | logs/ISSUES.md
- **Breaking Change:** No
- **Related Issue:** ISSUE-001
- **Related Run:** RUN-20260817-002, RUN-20260817-003

### Summary

Continuation-ready frontend stack selection preference/rationale modelinden deterministic blocking gate modeline geçirildi.

Canonical invariant:

```text
continuation_expected = YES
+ approved_zero_build_constraint = NONE
→ package-managed/component-oriented frontend baseline REQUIRED
```

### Reason

v0.2.1, agent'ın kendi “low migration cost / modular ES6 / future framework migration” yorumunu zero-build istisnası olarak kullanmasına izin verdi. Ayrıca `VAL-09` yalnız data adapter + future API path'i doğruluyordu.

### Impact

- Sales/client demo veya future backend/CMS/page/component growth taşıyan projelerde continuation otomatik YES olarak çözülür.
- Zero-build/dependency-free seçim yalnız exact approved user/project/environment constraint ile mümkündür.
- Agent-generated rationale approved constraint değildir.
- “İleride React/Vite/Next'e migrate edilir” same-codebase continuation değildir.
- TECH_CONTEXT `Continuation Expected`, `Continuation Evidence`, `Approved Zero-Build Constraint`, selected baseline, package manifest ve dev/build/preview commands alanlarını explicit üretir.
- `VAL-09` bu alanları blocking doğrular; eksik/uygunsuz seçim output validation FAIL üretir.
- Framework global olarak hardcode edilmez; uygun package-managed component-oriented çözüm project-specific synthesis ile seçilir.

### Validation Outcome

`RUN-20260817-003` React 18+ + Vite + npm/package.json + repeatable dev/build/preview commands + `Continuation Expected: YES` + `Approved Zero-Build Constraint: NONE` + `Same-Codebase Continuation: PASS` üretti; `VAL-09: PASS` oldu. ISSUE-001 v0.2.2'de Resolved.

---

## PE-CHANGE-009 — 2026-08-17

- **Version:** v0.3.0
- **Change Type:** Changed / Fixed
- **Affected Area:** engine/PROJECT_INTAKE.md | engine/SITE_ARCHITECTURE_RULES.md | engine/PLANNING_PROFILES.md | engine/PACKAGE_RULES.md | engine/DOCUMENT_CATALOG.md | engine/GENERATION_PIPELINE.md | engine/VALIDATION_RULES.md | engine/INFORMATION_MAP.md | packages/ | inputs/ | project-start/ | templates/ | README.md | PRODUCT_ENGINE_BRAIN.md | logs/ISSUES.md
- **Breaking Change:** Yes
- **Related Issue:** ISSUE-002
- **Related Run:** RUN-20260817-003 / implementation evidence `f09b4ee852fe085e8d810cbfaa9a9f234d75f69a`

### Summary

Product Engine'in corporate website modeli first-class multi-page information architecture seviyesine yükseltildi.

Active runtime vocabulary'den `landing-page` project type kaldırıldı ve first-class:

```text
project_type: corporate-website
```

eklendi.

Canonical model:

```text
project_type       → ne üretiyoruz?
delivery_profile   → hangi maturity'de teslim ediyoruz?
site_architecture  → hangi approved pages/surfaces var?
planning profiles  → planning depth nedir?
technical stack    → nasıl sürdürülebilir implement ediyoruz?
```

### Canonical Invariants

```text
corporate website ≠ landing page
sales demo ≠ project type
Prototype ≠ site/page breadth reduction
proposed page architecture ≠ approved architecture
approved distinct pages ≠ same-page anchor sections
wave grouping ≠ page omission
```

### New Site Architecture Contract

`engine/SITE_ARCHITECTURE_RULES.md` corporate page/surface semantics owner olarak eklendi.

Corporate approved input PAGE registry taşır:

```text
Page ID
Page Name
Purpose
Route / Navigation Identity
Scope Status
Primary Content / Capability Boundaries
Parent / Detail Relation
```

Exact list source'ta eksikse Phase A pending Proposed Site Architecture üretir; explicit user approval olmadan executable truth olmaz.

### Package / Planning / Design Changes

- Corporate sales demo base package deterministically `corporate-website` kalır.
- `demo-frontend` corporate domain'i override edemez.
- Corporate package v3.0.0 multi-page breadth/navigation/page coverage guard'larını taşır.
- Multi-page corporate default recommendation `implementation_planning: standard` + `design_planning: standard`.
- Profile depth approved scope/page breadth'i değiştiremez.

### Generation Changes

Corporate run başında immutable:

```text
APPROVED_PAGE_SET = set(IN_SCOPE PAGE-XXX identities)
```

freeze edilir.

Downstream chain:

```text
Approved PAGE Registry
→ PROJECT_BRAIN / PRODUCT_RULES
→ TECH_CONTEXT routing/page expansion
→ GLOBAL_SHELL navigation
→ PAGE-DESIGN instances (standard/full)
→ PROJECT_PLAN
→ WAVE_MAP Covered Page IDs
→ WAVE_PLAN page tasks
```

Blocking generation relations:

```text
APPROVED_PAGE_SET == PLANNED_PAGE_SET
APPROVED_PAGE_SET == PAGE_DESIGN_INSTANCE_SET   (design standard/full)
```

### Validation Changes

VAL-01..VAL-19 korunarak page/domain modeline genişletildi.

Key blockers:

```text
VAL-02 → corporate package/domain selection
VAL-03 → dynamic page-design coverage
VAL-04 → approved/planned equality + collapse detection
VAL-05 → page-aware execution depth
VAL-07 → approved/navigation/design/wave identity consistency
VAL-09 → continuation-ready stack + routing/page expansion
VAL-10 → design profile/page coverage
VAL-12 → site architecture ownership
VAL-14 → unresolved PAGE/route placeholders
VAL-15 → PAGE-DESIGN/WAVE_PLAN point-of-use token integrity
VAL-19 → page architecture lifecycle traceability
```

Explicit collapse detector:

```text
Approved: Home + Corporate + Services + Contact
Generated: / + #corporate + #services + #contact
→ FAIL
```

### Reason

Trakya real project showed that visually high-quality and technically continuation-ready React/Vite implementation could still be materially underscoped because corporate intent had been normalized to `landing-page`. Engine correctly executed the wrong breadth because no approved page registry existed.

### Impact

- Corporate sales demos real website information architecture modelleyebilir.
- Page breadth explicit user-approved truth olur.
- Navigation, design packages, project/wave planning and validation exact PAGE identities paylaşır.
- Page architecture yeni factual company claim authorize etmez.
- v0.2.2 deterministic continuation-ready stack guard korunur.

### Validation Outcome

Fresh `RUN-20260817-004` corporate-website package + approved PAGE-001..007 + seven distinct routes + seven PAGE-DESIGN instances + coherent page-aware wave map üretti. `APPROVED_PAGE_SET == PLANNED_PAGE_SET == NAVIGATION_PAGE_SET == PAGE_DESIGN_INSTANCE_SET`, collapse/missing/unapproved page setleri boş kaldı. ISSUE-002 v0.3.0 behavior'ı doğrulandı.

Aynı run ayrıca ayrı bir capability semantic authorization defect'i (ISSUE-003) ortaya çıkardı; bu defect PE-CHANGE-010 kapsamındadır.

---

## PE-CHANGE-010 — 2026-08-17

- **Version:** v0.3.1
- **Change Type:** Added / Fixed
- **Affected Area:** engine/CAPABILITY_SCOPE_RULES.md | engine/README.md | engine/GENERATION_PIPELINE.md | engine/VALIDATION_RULES.md | templates/design/PAGE_DESIGN_PACKAGE_TEMPLATE.md | templates/waves/WAVE_MAP_TEMPLATE.md | templates/runs/VALIDATION_REPORT_TEMPLATE.md | README.md | logs/ISSUES.md
- **Breaking Change:** No
- **Related Issue:** ISSUE-003
- **Related Run:** RUN-20260817-004

### Summary

Executable capability authorization broad relatedness modelinden deterministic exact semantic subset modeline geçirildi.

Yeni canonical owner:

```text
engine/CAPABILITY_SCOPE_RULES.md
```

Core invariant:

```text
GENERATED_CAPABILITY semantic meaning
⊆ exact approved executable support semantic meaning
```

### Defect Evidence

`RUN-20260817-004` approved scope yalnız Contact page + phone/e-mail direct-contact behavior taşımasına rağmen PAGE-DESIGN şunları üretti:

```text
interactive contact form
name/e-mail/subject/message inputs
submit action
success state
```

WAVE_MAP bunu `CAP-022 Contact Channels and Demo Form` olarak `SCP-008 Contact page + SCP-011 phone/e-mail` support'una bağladı ve v0.3.0 VAL-04 false PASS verdi.

```text
Contact page != contact form
phone/e-mail direct contact != form submit
```

### Generation Changes

- Her implementation-bearing generated artifact capability self-diff'e tabidir.
- Page/surface existence child interaction authorization değildir.
- Form, input collection, submit, new interaction state, modal, search/filter, map, WhatsApp, booking/request flow, upload/download ve new CTA independently meaningful capability atomu sayılır.
- PAGE-DESIGN template `Approved Capability Support` block'u taşır.
- PAGE-DESIGN checkpoint `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES == empty` olmadan CLOSE edilemez.
- Upstream generated artifact approved support authority değildir; unsupported capability downstream'da aklanamaz.
- WAVE_MAP every capability için direct exact approved executable support ister.

### Validation Changes

VAL-04'e Stage 0 global generated-artifact capability integrity eklendi.

Required evidence:

```text
GENERATED_EXECUTABLE_CAPABILITY_ATOMS
GENERATED_CAPABILITY_SUPPORT_RELATIONS
UNSUPPORTED_GENERATED_CAPABILITIES
PAGE_DESIGN_CAPABILITY_ATOMS
UNSUPPORTED_PAGE_DESIGN_CAPABILITIES
```

Blocking:

```text
UNSUPPORTED_GENERATED_CAPABILITIES != empty
→ VAL-04 FAIL

UNSUPPORTED_PAGE_DESIGN_CAPABILITIES != empty
→ VAL-04 FAIL
```

### Impact

- Design creativity yeni product behavior authorize edemez.
- Page architecture yalnız surface identity/boundary verir; plausible interactions otomatik scope değildir.
- Broad page/purpose support ile child capability authorization yapılamaz.
- Validator WAVE_MAP öncesindeki generated design artifacts'i de scope açısından denetler.
- Existing page architecture, continuation stack ve factual claim gates korunur.

### Acceptance Gate

Fresh Trakya v0.3.1 run:

- approved contact scope unchanged iken form/submit/success state üretmemeli,
- veya unsupported interaction oluşursa generation checkpoint repair etmeli / VAL-04 FAIL vermeli,
- corporate 7-page architecture + continuation stack behavior'ı regression olmadan korumalıdır.

ISSUE-003 yalnız bu fresh evidence sonrasında `Resolved` yapılır.

---

## 5. Güncel Durum

```text
Active Engine Version Authority : Root README.md (v0.3.1)
Version History Authority       : logs/ENGINE_CHANGELOG.md
Recorded Change Entries         : 10
ISSUE-001                        : Resolved in v0.2.2
ISSUE-002                        : Resolved in v0.3.0 by RUN-20260817-004
ISSUE-003                        : Implemented — Awaiting Fresh v0.3.1 Validation
Next Acceptance Gate            : Fresh Trakya corporate generation + exact capability semantic validation
```
