# Input Start Prompt Template

Product Engine runtime'ını yeni ve temiz bir chat/session içinde başlatıyorsun.

Bu prompt yalnızca **Phase B — Run Session** içindir.

## Authoritative Project Input

Approved project input:

`{{APPROVED_INPUT_PATH}}`

## Hard Context Boundary

Bu session intake session'ın devamı değildir.

- Önceki chat/raw brief/intake reasoning/agent memory authority değildir.
- Project-specific truth için authoritative başlangıç approved `PROJECT_INPUT` dosyasıdır.
- Approved input'ta bulunmayan önceki niyet, page önerisi, varsayım veya fikir current scope'a taşınamaz.
- Factual provenance canonical source/FCL zincirinden çözülür.

---

## Delivery / Domain Guard

`demo`, `sales demo`, `prototype`, `local preview` delivery purpose/maturity bilgisidir; project type/domain authority değildir.

```text
project_type: corporate-website
+ delivery_profile: Prototype
→ corporate-website domain korunur
```

Demo wording approved feature/page scope'u, code/architecture/design quality'yi veya site breadth'i düşürmez.

---

## Corporate Site Architecture Runtime Gate

Approved input `project_type: corporate-website` ise runtime başlamadan önce:

1. `engine/SITE_ARCHITECTURE_RULES.md` fresh-read et.
2. Approved input Site Architecture registry'sini tamamen oku.
3. `APPROVED_PAGE_SET = set(IN_SCOPE PAGE-XXX identities)` olarak freeze et.
4. Set boşsa STOP / intake correction.
5. Package selection `corporate-website` olmalıdır; `demo-frontend` delivery wording nedeniyle override edemez.

Run boyunca:

```text
APPROVED_PAGE_SET immutable
new page forbidden
missing page forbidden
page rename/identity drift forbidden
distinct page → anchor section collapse forbidden
```

---

## Mandatory Operational Checkpoints

Templated artifact'ler memory/stale schema ile yazılamaz.

### SOURCE_REGISTER

```text
fresh templates/runs/SOURCE_REGISTER_TEMPLATE.md
→ exact project source evidence + approved derivative authorities
→ SOURCE_REGISTER write
```

### PAGE-DESIGN (when applicable)

Corporate/page-based project + `design_planning: standard | full` ise her approved PAGE-XXX ayrı dynamic checkpoint'tir:

```text
fresh PAGE_DESIGN_PACKAGE_TEMPLATE.md
→ exact approved PAGE-XXX registry row
→ current DESIGN / DESIGN_SYSTEM / GLOBAL_SHELL / PRODUCT_RULES
→ ONE page-design instance write
→ identity/capability/factual diff
→ CLOSE
```

Bir template read birden fazla page instance için reuse edilemez.

Expected corporate page-design set:

```text
PAGE_DESIGN_INSTANCE_SET == APPROVED_PAGE_SET
```

### WAVE_MAP

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh WAVE_MAP_TEMPLATE.md
→ exact current authorities + APPROVED_PAGE_SET if applicable
→ ONE WAVE_MAP write
→ page/capability/decomposition validation
→ close
```

Corporate website:

```text
PLANNED_PAGE_SET == APPROVED_PAGE_SET
```

### EACH WAVE_PLAN

Her `WAVE_NN` ayrı checkpoint:

```text
fresh WAVE_PLAN_TEMPLATE.md
→ exact parent WAVE_NN
→ current parent Covered Page IDs
→ at least one isolated quality ref for THIS WAVE
→ current authorities/FCL
→ ONE WAVE_NN write
→ capability/page/factual diff
→ CLOSE
```

### VALIDATION_REPORT

```text
fresh templates/runs/VALIDATION_REPORT_TEMPLATE.md
→ fresh/current engine/VALIDATION_RULES.md
→ inspect current working-output + available evidence
→ write VALIDATION_REPORT
```

Current `VAL-01..VAL-19` eksiksiz uygulanır. Corporate website ise validation minimum page evidence'ı taşır:

```text
APPROVED_PAGE_SET
PLANNED_PAGE_SET
NAVIGATION_PAGE_SET
PAGE_DESIGN_INSTANCE_SET when applicable
MISSING_MAP_PAGES
UNAPPROVED_MAP_PAGES
COLLAPSED_APPROVED_PAGES
```

`VAL-15 = UNVERIFIED` ise overall en fazla `CONDITIONAL PASS` olabilir.

---

## Talimatlar

1. Product Engine canonical boot/read order'ını baştan uygula.
2. Approved PROJECT_INPUT'u tamamen oku ve freeze et.
3. Corporate website ise approved page registry'yi ayrıca immutable execution boundary olarak freeze et.
4. Package/document/profile resolution'ı canonical Engine authority'lerinden yeniden çöz.
5. Run lifecycle'ını `RUN_PROTOCOL`, `GENERATION_PIPELINE`, `OUTPUT_STRUCTURE` uyarınca yürüt.
6. Her dynamic artifact için point-of-use template refresh uygula; batch-read + batch-generate yapma.
7. WAVE_MAP approved capability + page scope'u decomposition seviyesinde freeze etsin; WAVE_PLAN exact parent'ı detaylandırsın.
8. PAGE-DESIGN applicable ise her approved PAGE identity için isolated checkpoint uygula.
9. Factual claims yalnız source-backed SOURCE_REGISTER/FCL zinciriyle desteklensin.
10. Distinct corporate page'leri single-page anchor/section structure'a collapse etme.
11. Continuation expected frontend için TECH_CONTEXT package/tooling/routing expansion path'i canonical guards'a göre çözsün.
12. VALIDATION_REPORT yazmadan önce current validation template/rules fresh-read edilsin.
13. Independent trace inspect edilemiyorsa `AVAILABLE` ilan etme.
14. Validation sonucu canonical evidence'dan türemeli; self-report ground truth değildir.
15. Publication/completion yalnız canonical validation/publication gate izin veriyorsa yapılır.

## Beklenen Akış

```text
approved PROJECT_INPUT
→ fresh Engine boot
→ approved PAGE_SET freeze if corporate
→ deterministic package/document resolution
→ source register
→ design/page checkpoints if applicable
→ WAVE_MAP
→ isolated WAVE_PLAN checkpoints
→ validation
→ publication/completion when allowed
```
