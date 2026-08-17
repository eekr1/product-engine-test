# Product Engine — Engine Issues (`logs/ISSUES.md`)

## 1. Amaç ve Kapsam

Bu belge, Product Engine'in çekirdek motor, package, template, input veya validation davranışında gözlemlenen doğrulanmış sistemsel kusurların yaşam döngüsü takip merkezidir.

```text
ISSUE → mevcut davranışta doğrulanmış kusur
IMPROVEMENT → doğru çalışan sistemi daha ileri taşıyan enhancement
```

Allowed status:

```text
Open | Investigating | Planned | In Progress | Blocked |
Implemented — Awaiting Validation | Resolved | Won't Fix | Duplicate | Invalid
```

Severity:

```text
Critical | Major | Minor | Low
```

Resolved yalnız fix + canonical contracts + changelog + fresh validation + non-recurrence evidence tamamlandığında kullanılabilir.

---

## Güncel Issue Durumu

```text
Open Issues                           : 0
Implemented — Awaiting Validation     : 1
Resolved Issues                       : 2
Total Recorded                        : 3
```

---

## ISSUE-001 — Demo frontend stack continuation readiness not enforced

- **Status:** Resolved
- **Severity:** Major
- **Category:** Engine Rules | Packages | Templates | Validation
- **Owner:** engine maintainer
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Related Runs:** `RUN-20260815-001`, `RUN-20260817-002`, `RUN-20260817-003`
- **Resolved in Version:** v0.2.2
- **Related Change:** PE-CHANGE-007, PE-CHANGE-008
- **Validation Run:** `RUN-20260817-003`

### Description
Engine demo/prototype projelerde data/service boundary'yi doğru kurmasına rağmen continuation beklenen sales/client demo için frontend stack/tooling seçimini blocking biçimde enforce etmiyordu.

### Failed Evidence
v0.2.1 fresh `RUN-20260817-002` yeni continuation rationale alanlarını okumasına rağmen dependency-free Vanilla seçti ve future React/Vite/Next migration'ını low-migration continuation olarak değerlendirdi. `VAL-09` bunu yakalamadı.

### Resolution
v0.2.2:

```text
continuation_expected = YES
+ approved_zero_build_constraint = NONE
→ package-managed/component-oriented baseline REQUIRED
```

Agent-generated rationale approved constraint değildir; future framework migration same-codebase continuation değildir; TECH_CONTEXT package manifest + dev/build/preview commands + continuation evidence üretir; `VAL-09` blocking kontrol eder.

### Validation Evidence
`RUN-20260817-003`:

- React 18+ selected,
- Vite selected,
- npm/package.json selected,
- `npm run dev`, `npm run build`, `npm run preview` generated,
- `Continuation Expected: YES`,
- `Approved Zero-Build Constraint: NONE`,
- `Same-Codebase Continuation: PASS`,
- `VAL-09: PASS`.

Overall run `CONDITIONAL PASS` yalnız independent trace unavailable nedeniyle `VAL-15 = UNVERIFIED` idi; ISSUE-001 davranışı fresh real-run evidence ile non-recurrent olarak doğrulandı.

---

## ISSUE-002 — Corporate website intent collapses into single-page planning and lacks canonical page architecture

- **Status:** Resolved
- **Severity:** Major
- **Category:** Engine Rules | Inputs | Packages | Templates | Validation
- **Owner:** engine maintainer
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Related Runs:** `RUN-20260817-003`, `RUN-20260817-004`; implementation evidence commit `f09b4ee852fe085e8d810cbfaa9a9f234d75f69a`
- **Resolved in Version:** v0.3.0
- **Related Change:** PE-CHANGE-009
- **Validation Run:** `RUN-20260817-004`

### Description
Corporate website intent first-class project type ve approved page/surface architecture olarak modellenmediği için Engine gerçek kurumsal sales demo scope'unu dar `landing-page` modeline normalize edebiliyordu.

### Evidence
Trakya source material proje türünü **kurumsal web sitesi / satış demosu** olarak tanımladı. Ancak active v0.2.x intake vocabulary `corporate-website` type taşımadığı için approved input `project_type: landing-page` oldu.

Generated WAVE_MAP yalnız:

```text
Foundation
→ Header/Hero
→ Services + Contact
→ Responsive / Sales Demo QA
```

planladı ve final deliverable'ı `responsive landing page` olarak dondurdu.

`kodlamasyonxd` implementation commit'i bu planı doğru uyguladı: yüksek görsel kaliteye rağmen Home/Corporate/Services/Service Details/Contact gibi gerçek corporate information architecture yerine tek sayfa section navigation ortaya çıktı.

### Impact
- Sales demo müşteri için gerçek site hacmini göstermedi.
- Corporate navigation ayrı page/surface yerine anchor section'a dönüştü.
- Services detail architecture oluşmadı.
- Prototype delivery profile yanlışlıkla scope/page breadth reduction gibi davrandı.
- Engine'in gerçek değer önerisi olan structured multi-page planning zayıfladı.

### Root Cause
1. `corporate-website` canonical project type yoktu.
2. `landing-page` active vocabulary corporate intent'i absorbe edebiliyordu.
3. Corporate package vardı fakat `landing-page | web-app | content-platform` compatibility hack'iyle çalışıyordu.
4. Intake'te approved `site_architecture` / PAGE registry yoktu.
5. WAVE_MAP, GLOBAL_SHELL, PAGE-DESIGN ve validation arasında exact approved page-set equality contract'ı yoktu.
6. Demo/frontend package domain selection'i corporate sales demo ile karışabiliyordu.

### v0.3.0 Resolution
- Active `landing-page` project type kaldırıldı.
- First-class `project_type: corporate-website` eklendi.
- `engine/SITE_ARCHITECTURE_RULES.md` canonical semantics owner olarak eklendi.
- Corporate PROJECT_INPUT approved PAGE-XXX registry taşımak zorunda.
- Source exact pages eksikse pending Proposed Site Architecture üretilir; explicit approval olmadan executable olmaz.
- Corporate sales demo base package deterministically `corporate-website` olur.
- Approved distinct pages single-page anchor sections'a collapse edilemez.
- Multi-page corporate default design planning recommendation `standard`.
- GLOBAL_SHELL navigation, PAGE-DESIGN instances, WAVE_MAP page coverage ve WAVE_PLAN page tasks approved registry'ye bağlandı.
- VAL-02/03/04/05/07/09/10/12/14/15/19 page/domain modelini blocking doğrular.

### Validation Evidence
Fresh `RUN-20260817-004`:

- `project_type: corporate-website`,
- approved `PAGE-001..PAGE-007`,
- 7 distinct routable surfaces,
- 7 PAGE-DESIGN instances,
- `APPROVED_PAGE_SET == PLANNED_PAGE_SET == NAVIGATION_PAGE_SET == PAGE_DESIGN_INSTANCE_SET`,
- `MISSING_MAP_PAGES = []`,
- `UNAPPROVED_MAP_PAGES = []`,
- `COLLAPSED_APPROVED_PAGES = []`,
- corporate package preserved,
- coherent 5-wave multi-page execution map

üretti. ISSUE-002 behavior non-recurrent olarak doğrulandı.

`RUN-20260817-004` içinde ayrıca ayrı bir scope-semantic defect (ISSUE-003) bulundu; bu, corporate page architecture resolution'ın başarılı validation evidence'ını geçersiz kılmaz ancak run'ın overall PASS sonucunun güvenilir olmadığını gösterir.

---

## ISSUE-003 — Broad page/scope support can incorrectly authorize unapproved child interactions

- **Status:** Implemented — Awaiting Validation
- **Severity:** Major
- **Category:** Engine Rules | Generation | Design Templates | Validation
- **Owner:** engine maintainer
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Related Runs:** `RUN-20260817-004`
- **Resolved in Version:** not_assigned
- **Related Change:** PE-CHANGE-010
- **Validation Run:** None — fresh v0.3.1 Trakya run required

### Description
v0.3.0 exact scope/capability language taşımasına rağmen enforcement esas olarak WAVE_MAP/WAVE_PLAN seviyesinde çalışıyordu. Upstream PAGE-DESIGN gibi implementation-bearing design artifact'i, broad page existence/purpose ve related direct-contact capability'den yeni child interaction türetebildi. WAVE_MAP bunu inherited capability olarak commit etti ve validator exact semantic subset ihlalini yakalamadı.

### Fresh Evidence — RUN-20260817-004
Approved input:

```text
PAGE-007 Contact
+ phone/e-mail direct-contact capability
+ page boundary: harita/form/WhatsApp eklenmez
```

SCP:

```text
SCP-008 = Contact page
SCP-011 = phone/e-mail direct contact
```

Generated PAGE-DESIGN:

```text
Interactive Demo Form
- name
- email
- subject
- message
- submit behavior
- success state
```

Generated WAVE_MAP:

```text
CAP-022 = Contact Channels and Demo Form
support = SCP-008 + SCP-011
```

But:

```text
Contact page != form
phone/e-mail direct contact != form submit
page existence != child interaction authorization
```

Therefore generated form/submit/success-state capability was unsupported.

### Impact
- Approved scope dışındaki product behavior generated design docs içinde ortaya çıkabilir.
- Unsupported behavior downstream WAVE_MAP/WAVE_PLAN'a taşınarak görünürde supported hale gelebilir.
- VAL-04 broad relatedness üzerinden false PASS verebilir.
- Engine'in hard scope gate'i ihlal edilir.

### Root Cause
1. Executable capability semantic authorization için tek explicit canonical owner yoktu.
2. PAGE-DESIGN checkpoint identity/page/factual diff yapıyordu fakat child interaction atomlarını exact SCP support'a bağlayan required evidence block taşımıyordu.
3. VAL-04 global generated-artifact capability diff yerine ağırlıklı WAVE_MAP/WAVE_PLAN scope diff'ine odaklanıyordu.
4. Upstream generated artifact'teki unsupported capability downstream map'e taşındığında support laundering açıkça yasaklanmamıştı.

### v0.3.1 Implemented Resolution
- `engine/CAPABILITY_SCOPE_RULES.md` canonical executable capability semantics owner olarak eklendi.
- `relatedness ≠ authorization` ve `page existence ≠ child capability authorization` deterministic invariant oldu.
- Form, input collection, submit, success/error state, modal, search/filter, map, WhatsApp, booking/request flow, upload/download, new CTA vb. independently meaningful behavior ayrı capability atomu sayılır.
- PAGE-DESIGN template v1.2.0 `Approved Capability Support` + per-instance capability diff zorunluluğu aldı.
- PAGE-DESIGN checkpoint `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES == empty` olmadan CLOSE edilemez.
- WAVE_MAP direct exact approved executable support ister; upstream generated artifact scope authority olamaz.
- VAL-04 Stage 0 bütün implementation-bearing generated artifact'lerde global executable capability diff yapar.
- Validation report `GENERATED_EXECUTABLE_CAPABILITY_ATOMS`, support relations ve `UNSUPPORTED_GENERATED_CAPABILITIES` evidence'ını zorunlu taşır.
- Unsupported upstream capability downstream'da aklanamaz.

Fresh v0.3.1 Trakya generation contact surface'inde yalnız approved direct-contact behavior'ı üretip form/submit/success-state'i dışarıda bırakır veya valid new explicit approval olmadan bunları üretirse VAL-04 FAIL verirse ISSUE-003 `Resolved` yapılacaktır.
