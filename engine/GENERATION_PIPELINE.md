# Generation Pipeline

## Amaç

Product Engine'in approved project truth'u, model/tool bağımsız biçimde agent-ready, validated ve versioned dokümantasyon paketine dönüştüren canonical runtime akışıdır.

## Authority Boundaries

- Intake → `PROJECT_INTAKE.md`
- Planning profiles → `PLANNING_PROFILES.md`
- Package selection → `PACKAGE_RULES.md`
- Documents → `DOCUMENT_CATALOG.md`
- Information ownership → `INFORMATION_MAP.md`
- Validation → `VALIDATION_RULES.md`
- Run lifecycle → `RUN_PROTOCOL.md`
- Output paths → `OUTPUT_STRUCTURE.md`

---

# Point-of-Use Authority Refresh

Boot sırasında bir authority/template okunmuş olması, daha sonra memory'den uygulanması için yeterli değildir.

Canonical kural:

> Authority must be close to the action it governs.

Bir artifact üretilmeden veya lifecycle transition yapılmadan hemen önce, o işi yöneten canonical authority/template yeniden açılır. Önceden topluca okunmuş template'lere memory'den güvenilmez.

## Observable Refresh Semantics

Refresh yalnız run kaydına `refreshed` yazılması değildir. Gerçek refresh, artifact/instance üretiminden önce ilgili canonical kaynağın yeniden okunmasıdır.

```text
self-reported refresh record ≠ proof of refresh
observable read/open event      = primary evidence when available
```

Çalışma ortamı tool/IDE execution trace sağlıyorsa bu trace refresh kanıtının birincil otoritesidir. `PROGRESS.md` / `RUN_LOG.md` kayıtları trace ile çelişemez ve trace'de görülmeyen bir read event'i olmuş gibi gösteremez.

Trace mevcut değilse operational evidence audit desteği sağlar; ancak kendi başına point-of-use compliance'ı ispatladığı varsayılmaz.

## Artifact Checkpoint Protocol

Her canonical document ve her dynamic instance **ayrı checkpoint** olarak işlenir. Bir checkpoint kapanmadan sonraki artifact'a geçilemez.

```text
CHECKPOINT START
1. Resolve exactly one artifact / dynamic instance
2. Re-open its canonical template
3. Re-open its primary authority/dependencies
4. Re-open approved scope/truth owner when artifact can introduce product/business scope or claims
5. Generate only this artifact
6. Re-open template validation expectations
7. Compare artifact against template + authority + approved scope/truth
8. Repair immediately if needed
9. Record artifact-specific evidence in PROGRESS/RUN_LOG
10. Mark this checkpoint locally complete
CHECKPOINT END
→ only now resolve the next artifact
```

### Sequencing Invariant

Aşağıdaki sıra geçersizdir:

```text
read WAVE_PLAN_TEMPLATE once
→ generate WAVE_00
→ generate WAVE_01
→ generate WAVE_02
→ later write "refreshed" evidence
```

Geçerli sıra:

```text
read WAVE_PLAN_TEMPLATE
→ read WAVE_00 scope/truth
→ generate WAVE_00
→ local compare/repair
→ record WAVE_00 evidence

read WAVE_PLAN_TEMPLATE AGAIN
→ read WAVE_01 scope/truth
→ generate WAVE_01
→ local compare/repair
→ record WAVE_01 evidence
```

Aynı template'ten birden fazla dynamic instance çıkıyorsa her instance yeni checkpoint'tir. Batch-read + batch-generate yasaktır.

Minimum evidence:

```text
artifact / dynamic instance
read event occurred before generation
canonical template refreshed
primary authorities refreshed
approved scope/truth checked where applicable
local contract check result
repair performed: yes/no
```

Operational record, gerçekleşmemiş bir read/refresh event'i sonradan olmuş gibi iddia edemez.

---

# Scope Truth Boundary

Approved input içindeki kapsam kategorileri farklı authority taşır:

```text
In Scope              → generation may implement/plan
Known Decisions       → generation may implement/plan
Verified Current Truth→ generation may reuse as factual truth
Future Possibilities  → NOT current scope
Open Questions        → NOT approved scope until resolved
Out of Scope          → prohibited for current generation
```

Canonical kural:

> Future possibility is not approved scope.

`Future Possibilities`, `Open Questions` veya başka non-approved alanlardaki feature/flow yalnız "future/unresolved" olarak anılabilir; WAVE_MAP, WAVE_PLAN, PROJECT_PLAN veya active NEXT_TASKS içine committed deliverable olarak taşınamaz.

Örnek:

```text
Future: WhatsApp / teklif formu / canlı harita
→ current wave task olarak üretilemez
```

Approved scope genişletilecekse yeni explicit user approval / yeni input version gerekir.

## Factual Claim Boundary

Generation approved/verified business truth'u yeni factual claim'lerle zenginleştiremez.

```text
Approved: "Yedek Parça Temini"
Allowed:  "Yedek Parça Temini hizmet kartını oluştur"
Invalid:  "orijinal parça + hızlı teslimat garantisi"
```

Design treatment, layout, interaction ve visual direction Engine tarafından çözülebilir; bunlar business/service truth'e dönüşemez.

---

# Project Run Write Boundary

Normal project generation run Product Engine'in authority/history yüzeylerini **read-only** kullanır.

Protected surfaces:

```text
PRODUCT_ENGINE_BRAIN.md
root README engine-version authority
engine/
packages/
templates/
logs/ENGINE_CHANGELOG.md
```

Writable operational surfaces:

```text
inputs/
runs/
outputs/
logs/RUN_INDEX.md
```

Tek-run başarısı `ENGINE_CHANGELOG.md` girdisi değildir.

---

# Transition Authority Refresh

Lifecycle transition yapılmadan hemen önce ilgili authority yeniden açılır:

```text
pending → approved        → PROJECT_INTAKE
resolution → generation   → PACKAGE_RULES / DOCUMENT_CATALOG
validation entry          → VALIDATION_RULES
validation → publication  → OUTPUT_STRUCTURE
active → completed/failed → RUN_PROTOCOL
```

Transition authority refresh yapılmadan state değiştirilmez.

---

# Pipeline

## 1. Intake / Normalization

Ham brief ve kaynaklar canonical pending input'a normalize edilir.

Point-of-use refresh:

```text
PROJECT_INTAKE.md
PROJECT_INPUT_TEMPLATE.md
```

Output:

```text
inputs/pending/<slug>/PROJECT_INPUT.md
```

Critical missing/conflict/decision varsa stop.

## 2. Explicit Approval Gate

Approval transition öncesinde `PROJECT_INTAKE.md` yeniden okunur.

```text
IDE/tool/plan/auto-approval ≠ canonical approval
```

Approved input olmadan generation run başlayamaz.

## 3. Package + Planning Resolution

Resolution anında:

```text
PACKAGE_RULES.md
selected base package
applicable contextual package(s)
PLANNING_PROFILE_OVERLAY.md
```

yeniden okunur.

Resolved set:

```text
base package + planning overlay + contextual conditions
```

## 4. Document + Dynamic Instance Resolution

`DOCUMENT_CATALOG.md` yeniden okunur ve canonical Document ID seti + dynamic instance registry çözülür.

Yeni instance yeni Document ID değildir.

## 5. Template Resolution

Template resolution yalnız hangi canonical template'in kullanılacağını belirler. Template içeriği artifact checkpoint sırasında yeniden okunur.

Missing/duplicate/conflicting skeleton → generation başlamaz.

## 6. Information Distribution

Approved truth `INFORMATION_MAP.md` owner kurallarıyla dağıtılır.

Scope Truth Boundary bu aşamada uygulanır; future/open/out-of-scope öğeler committed scope'a dönüşemez.

## 7. Missing / Assumption / Conflict / Decision Handling

`ASSUMPTION_RULES.md` ve `CONFLICT_RESOLUTION.md` uygulanır.

### Decision Resolution Contract

Generation sırasında kesinleşen ve output execution reality'sini değiştiren her kalıcı karar `DECISIONS.md` içinde kayıtlı olmalıdır.

Örnekler:

```text
exact frontend stack/runtime
build/tooling approach
service/data boundary implementation choice
visual concept / exact palette choice
wave-level architecture boundary
```

Provenance:

```text
explicitly present in approved input → User Approved
chosen by Engine after approval       → Engine Resolved
unresolved and user-critical          → Pending Review
```

Generic user approval, Engine'in sonradan seçtiği exact stack/palette/implementation detayını `User Approved` yapmaz.

### Execution-Critical Decision Gate

Bir karar aktif/ilk wave'in uygulanma biçimini değiştiriyorsa execution-critical'dır.

Execution-critical unresolved karar:

```text
→ active wave Ready for Execution olamaz
→ README kesin command yazamaz
→ NEXT_TASKS executable gösterilemez
→ clarification / resolution gerekir
```

Engine approved scope'u değiştirmeyen düşük-risk implementation detayını `Engine Resolved` olarak çözebilir.

## 8. Dependency-Ordered Generation

Genel sıra:

```text
Approved Input
→ PROJECT-BRAIN
→ PRODUCT-RULES
→ TECH-CTX
→ DESIGN (UI)
→ WAVE-MAP
→ WAVE-PLAN instances
→ PROJECT_PLAN
→ STATUS
→ TASKS
→ AGENT-INST
→ DECISIONS
→ README-DOC
→ conditional DATA/API/TEST/DEPLOY/OPS
```

Her satır Artifact Checkpoint Protocol'den ayrı ayrı geçer.

### WAVE-MAP Checkpoint

`WAVE_MAP` öncesi yeniden oku:

```text
WAVE_MAP_TEMPLATE
selected package/context
PROJECT_BRAIN
PRODUCT_RULES
TECH_CONTEXT
applicable DESIGN
approved input scope boundaries
```

Map broad teknik fazlara değil coherent, independently verifiable deliverable'lara göre bölünür.

Cross-cutting whole-project `Final Integration / Responsive / QA` işi, gerçek bir feature/contact deliverable ile birleştirilmez; ayrı wave candidate olarak değerlendirilir.

### Dynamic WAVE_PLAN Checkpoint

Her `WAVE_<NN>` için yeniden:

```text
WAVE_PLAN_TEMPLATE
WAVE_MAP'teki exact WAVE_<NN> entry
TECH_CONTEXT
PRODUCT_RULES
applicable DESIGN authority
approved input In Scope / Future / Out of Scope boundaries
```

okunur.

Bir wave:
- başka wave deliverable'ını task içine saklayamaz,
- future scope'u active task yapamaz,
- doğrulanmamış business claim üretemez.

İhlal görülürse WAVE_PLAN yazılıp geçilmez; ilgili WAVE_MAP/artifact repair edilir.

### Standard Implementation Minimum

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES
TECH-CTX
STATUS
TASKS
DECISIONS
AGENT-INST
PROJ-PLAN
WAVE-MAP
WAVE-PLAN instances
```

### Design Minimums

```text
light    → DESIGN
standard → DESIGN + DESIGN-SYSTEM + applicable GLOBAL-SHELL/PAGE-DESIGN/SYSTEM-STATES
full     → standard + justified FEATURE-DESIGN/ADMIN-DESIGN
```

## 9. Pre-Validation Consistency + Provenance Check

Validation'a geçmeden önce:

```text
TECH_CONTEXT
README
CURRENT_STATUS
NEXT_TASKS
WAVE_MAP
all WAVE_PLAN instances
DECISIONS
approved input scope/truth
```

birlikte karşılaştırılır.

Kontrol edilir:

```text
execution reality consistent?
all resolved persistent decisions recorded?
Engine-selected decisions marked Engine Resolved?
future/out-of-scope leaked into committed scope?
unverified business claims present?
```

Blocking ihlal varsa Validation stage'e geçmeden repair yapılır.

## 10. Validation / Repair

Validation transition öncesinde `VALIDATION_RULES.md` **bu anda** yeniden açılır.

Validation report ancak:

```text
all required artifacts generated
all artifact checkpoints closed
pre-validation consistency check completed
validation stage started
```

sonrasında oluşturulabilir.

Validation report timestamp generation/checkpoint completion timestamp'larından önce olamaz.

```text
PASS             → publication
CONDITIONAL PASS → yalnız non-blocking bulgu + açık kabul
FAIL             → repair; devam ederse Failed
```

## 11. Publication

Publication transition öncesinde `OUTPUT_STRUCTURE.md` yeniden açılır.

PASS sonrası:

1. output version tahsis edilir.
2. `versions/<version>/` yayınlanır.
3. `latest/` aynı sürümün derived görünümü olur.
4. Run records gerçek path'leri kaydeder.

## 12. Completion

Completion transition öncesinde `RUN_PROTOCOL.md` yeniden açılır.

Run records Completed gerçekliğine kapatılır, sonra `runs/completed/<run-id>/` konumuna move edilir.

---

# Agent-Ready Completion Invariant

> Projeyi hiç görmemiş yetkin yeni bir ajan, output paketini okuyup yeni bir mimari/teknik planlama turu yapmadan aktif `WAVE_<NN>.md` planını uygulamaya başlayabilmelidir.

Bu koşul sağlanmıyorsa output biçimsel olarak eksiksiz olsa bile generation başarılı sayılmaz.
