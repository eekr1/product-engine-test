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
Resolved Issues                       : 1
Total Recorded                        : 2
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

- **Status:** Implemented — Awaiting Validation
- **Severity:** Major
- **Category:** Engine Rules | Inputs | Packages | Templates | Validation
- **Owner:** engine maintainer
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Related Runs:** `RUN-20260817-003`; implementation evidence commit `f09b4ee852fe085e8d810cbfaa9a9f234d75f69a`
- **Resolved in Version:** not_assigned
- **Related Change:** PE-CHANGE-009
- **Validation Run:** None — fresh v0.3.0 corporate run required

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

### v0.3.0 Implemented Resolution
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

Issue fresh v0.3.0 corporate generation gerçek approved multi-page architecture üretip validation gate'lerinden geçtiğinde `Resolved` yapılacaktır.
