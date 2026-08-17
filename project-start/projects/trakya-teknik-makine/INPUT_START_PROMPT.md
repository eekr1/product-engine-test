# Trakya Teknik Makine — Input Start Prompt

Product Engine v0.3.0 runtime'ını Trakya Teknik Makine için **yeni ve temiz bir chat/session** içinde başlatıyorsun.

## Authoritative Project Input

Approved project input:

`inputs/approved/trakya-teknik-makine/<ACTIVE_VERSION>/PROJECT_INPUT.md`

Aktif approved input, `inputs/approved/trakya-teknik-makine/` altındaki en yüksek `vN` version'dır. Flat/non-versioned PROJECT_INPUT varsayma.

## Hard Context Boundary

Bu session intake chat'inin devamı değildir.

- Previous chat/reasoning/memory authority değildir.
- Project truth approved PROJECT_INPUT'tur.
- Factual provenance canonical source/FCL chain'den çözülür.
- Approved input'ta olmayan önceki idea/page/proposal current scope'a taşınamaz.

---

## Corporate Website Runtime Gate

Approved input şunları taşımalıdır:

```text
project_type: corporate-website
approved site_architecture with PAGE-XXX identities
```

Runtime başında:

1. `engine/SITE_ARCHITECTURE_RULES.md` oku.
2. Approved Site Architecture registry'yi tamamen oku.
3. `APPROVED_PAGE_SET = set(IN_SCOPE PAGE-XXX identities)` freeze et.
4. Set empty/missing ise STOP / intake correction.
5. Base package `corporate-website` olmalıdır. Sales demo / Prototype wording `demo-frontend` override yapamaz.

Run boyunca:

```text
new PAGE identity forbidden
approved PAGE omission forbidden
PAGE rename/route drift forbidden
distinct PAGE → same-page anchor collapse forbidden
```

---

## Continuation / Technical Gate

Bu corporate sales demo continuation expectation taşır.

```text
Continuation Expected: YES
Approved Zero-Build Constraint: NONE
```

TECH_CONTEXT current Engine rules'e göre package-managed, component/module-oriented, repeatable dev/build/preview workflow ve approved multi-page registry'yi structural rewrite olmadan destekleyen routing/page expansion path çözmelidir.

Specific framework/router hard-code etme; technical synthesis current Engine contract'a göre yapılır.

---

## Mandatory Operational Checkpoints

### SOURCE_REGISTER

```text
fresh SOURCE_REGISTER_TEMPLATE
→ TRAKYA_TEKNIK_MAKINE_PROJECT.md factual evidence
→ derivative approved authorities separated
→ write SOURCE_REGISTER
```

### PAGE-DESIGN

Approved design profile `standard | full` ise her exact PAGE-XXX ayrı checkpoint:

```text
fresh PAGE_DESIGN_PACKAGE_TEMPLATE
→ exact approved PAGE-XXX row
→ DESIGN / DESIGN_SYSTEM / GLOBAL_SHELL / PRODUCT_RULES
→ ONE page-design write
→ page/capability/factual diff
→ CLOSE
```

Required:

```text
PAGE_DESIGN_INSTANCE_SET == APPROVED_PAGE_SET
```

### WAVE_MAP

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh WAVE_MAP_TEMPLATE.md
→ current authorities + APPROVED_PAGE_SET
→ ONE WAVE_MAP write
→ capability + page coverage + decomposition validation
→ CLOSE
```

Required:

```text
PLANNED_PAGE_SET == APPROVED_PAGE_SET
```

### EACH WAVE_PLAN

Her exact wave ayrı checkpoint:

```text
fresh WAVE_PLAN_TEMPLATE
→ exact parent WAVE_NN
→ exact parent Covered Page IDs
→ at least one relevant quality reference for THIS wave
→ current authorities/FCL
→ ONE WAVE write
→ capability/page/factual diff
→ CLOSE
```

### VALIDATION_REPORT

Fresh validation template + current `VALIDATION_RULES.md` ile `VAL-01..VAL-19` eksiksiz uygula.

Corporate minimum evidence:

```text
APPROVED_PAGE_SET
PLANNED_PAGE_SET
NAVIGATION_PAGE_SET
PAGE_DESIGN_INSTANCE_SET (applicable)
MISSING_MAP_PAGES
UNAPPROVED_MAP_PAGES
COLLAPSED_APPROVED_PAGES
```

`VAL-15 = UNVERIFIED` iken overall en fazla `CONDITIONAL PASS`.

---

## Talimatlar

1. Canonical Product Engine boot/read order'ını fresh uygula.
2. Active approved PROJECT_INPUT'u tamamen oku/freeze et.
3. PAGE registry'yi immutable execution boundary yap.
4. Package/document/profile resolution'ı v0.3.0 authorities'den yeniden çöz.
5. `RUN_PROTOCOL`, `GENERATION_PIPELINE`, `OUTPUT_STRUCTURE` uyarınca fresh run başlat.
6. Dynamic PAGE-DESIGN ve WAVE_PLAN instances batch-generate etme; point-of-use fresh template checkpoint uygula.
7. WAVE_MAP approved capabilities + exact PAGE setini freeze etsin.
8. Navigation/global shell approved page setinin tamamını gerçek routable/navigable surfaces olarak korusun.
9. Home/Corporate/Services/3 service details/Contact identities approved registry'de varsa hiçbirini same-page section'a collapse etme.
10. Factual claims yalnız source-backed FCL boundary içinde kalsın.
11. Validation self-report değil available evidence üzerinden fail-closed çalışsın.
12. Independent trace yoksa AVAILABLE ilan etme.
13. Publication/completion yalnız canonical validation gate izin veriyorsa yapılsın.

## Beklenen Akış

```text
approved PROJECT_INPUT + PAGE registry
→ fresh Engine boot
→ corporate package/document resolution
→ source/FCL
→ design system/global shell/page design checkpoints
→ page-aware WAVE_MAP
→ page-aware isolated WAVE_PLAN checkpoints
→ validation
→ publication/completion when allowed
```
