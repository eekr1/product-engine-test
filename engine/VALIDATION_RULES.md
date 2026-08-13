# Validation Rules

## Amaç

Product Engine working output'unun yalnız eksiksiz değil, gerçekten **agent-ready, source-safe, scope-safe ve evidence-consistent** olup olmadığını doğrular.

Validation generator'ın kendi beyanlarını tekrar etmez; produced artifact'ları, approved scope registry'yi, factual claim allowlist'i, package contract'larını ve mevcut observable evidence'ı karşılaştırır.

> Self-report is evidence metadata, not ground truth.

## Sonuçlar

```text
PASS             → publication yapılabilir
CONDITIONAL PASS → yalnız non-blocking bulgu / açık evidence limitation vardır
FAIL             → blocking contract ihlali vardır; publication yapılamaz
```

## Canonical Evidence Priority Ladder

Evidence kaynakları sabit öncelik taşır:

```text
E1 — Observable IDE/tool execution trace
E2 — Filesystem / produced artifact state
E3 — Approved input, INPUT_SNAPSHOT/SCP, SOURCE_REGISTER/FCL, canonical contracts
E4 — PROGRESS / RUN_LOG / manifest / agent self-report metadata
```

Canonical rule:

> Higher-priority evidence always wins when evidence conflicts.

Örnek:

```text
E1: WAVE_PLAN_TEMPLATE only once before WAVE_00..04 writes
E4: PROGRESS says every wave refreshed template
→ E1 wins
→ E4 claim invalidated
→ VAL-15 FAIL
```

Validator alt seviye evidence'ı seçerek üst seviye contradiction'ı görmezden gelemez.

## Canonical Gate Identity Contract

```text
VAL-01 Approval Integrity
VAL-02 Package + Planning Compliance
VAL-03 Canonical Document / Dynamic Instance Coverage
VAL-04 Approved Scope Integrity
VAL-05 Wave Decomposition + Execution Depth
VAL-06 Execution-Critical Decision Completeness
VAL-07 Cross-Document Execution Consistency
VAL-08 Decision Provenance + Coverage
VAL-09 Tech Context / Integration Readiness
VAL-10 Design Profile + Quality
VAL-11 Project Plan / Wave / State Alignment
VAL-12 Information Ownership / Assumption / Conflict Integrity
VAL-13 Source Claim Integrity
VAL-14 Template / Placeholder / Project Leakage
VAL-15 Point-of-Use Trace Integrity
VAL-16 Validation Timeline Integrity
VAL-17 Engine Boundary Integrity
VAL-18 Output + Operational Path Integrity
VAL-19 Traceability + Lifecycle
```

Validator kendi `CHK-*` setini icat edemez.

```text
missing canonical gate in validation report
→ validation report incomplete
→ overall FAIL
```

---

# Blocking Validation Set

## VAL-01 — Approval Integrity

- approved input mevcut mu?
- planning profile alanları geçerli mi?
- `approved_by: user` gerçek explicit user approval'a dayanıyor mu?
- auto/tool/plan approval kullanılmış mı?
- `project_state` gerçeklikle uyumlu mu?

İhlal → FAIL.

## VAL-02 — Package + Planning Compliance

Resolved set:

```text
base package + planning overlay + contextual conditions
```

ile uyumlu olmalıdır. Package-specific blocking guard ihlal edilirse FAIL.

## VAL-03 — Canonical Document / Dynamic Instance Coverage

- required canonical documents mevcut mu?
- WAVE_MAP'teki her wave için WAVE_PLAN var mı?
- applicable design dynamic instances mevcut mu?
- duplicate/alternate skeleton icat edilmiş mi?

Eksik required coverage → FAIL.

## VAL-04 — Approved Scope Integrity

Validation prose yorumuna değil, run'ın `INPUT_SNAPSHOT.md` belgesindeki **Approved Scope Registry (`SCP-XXX`)** üyeliğine dayanır.

Allowed SCP statuses:

```text
IN_SCOPE
KNOWN_DECISION
VERIFIED_CURRENT_TRUTH
OPEN_QUESTION
FUTURE
OUT_OF_SCOPE
```

Executable semantics:

```text
IN_SCOPE / KNOWN_DECISION → executable deliverable/task authorize edebilir
VERIFIED_CURRENT_TRUTH    → factual/reference use; yeni feature scope'u tek başına authorize etmez
OPEN_QUESTION             → executable NO
FUTURE                    → executable NO
OUT_OF_SCOPE              → executable NO
```

Özellikle şu artifact'lar kontrol edilir:

```text
WAVE_MAP
all WAVE_PLAN instances
PROJECT_PLAN
NEXT_TASKS
```

Her committed deliverable/task için mekanik membership check:

```text
Scope Ref var mı?
→ NO = FAIL

Scope Ref SCP registry'de var mı?
→ NO = FAIL

SCP status executable mı?
→ NO = FAIL
```

Örnek:

```text
TASK: Telefon CTA ekle
Scope Ref: SCP-003 / IN_SCOPE
→ valid

TASK: Teklif formu simülasyonu ekle
Scope Ref: SCP-101 / OPEN_QUESTION
→ FAIL
```

Future/Open/Out-of-Scope item yalnız context olarak anılabilir; executable task olamaz.

## VAL-05 — Wave Decomposition + Execution Depth

### WAVE_MAP Decomposition

- meaningful, independently verifiable deliverable'lara bölünmüş mü?
- bağımsız surface/feature/flow tek wave altında gizlenmiş mi?
- whole-project final QA son feature/contact wave'ine gömülmüş mü?
- artificial micro-wave var mı?

```text
multiple independent meaningful deliverables hidden → FAIL / repair WAVE_MAP
whole-project QA hidden in feature wave           → FAIL / split QA
coherent complete deliverable                    → valid
```

### Package-Level Deterministic Guards

Applicable package contract blocking authority'dir.

`demo-frontend` landing/corporate context:

```text
Services + distinct Contact responsibility in one wave
→ FAIL / split

feature/contact surface + whole-project final responsive/cross-browser/regression/presentation QA
→ FAIL / split final QA

QA re-validates 2+ previously completed surfaces/features
→ separate final QA wave REQUIRED
```

### WAVE_PLAN Execution Depth

- goal/dependency/in-out scope açık mı?
- checklist atomic ve uygulanabilir mi?
- Scope Ref'ler executable mı?
- selected deliverable wave sonunda complete mi?
- başka wave deliverable'ı task içine saklanmış mı?
- verification/QA/exit criteria somut mu?

Selected deliverable yarım kalıyorsa veya agent yeniden plan üretmek zorundaysa → FAIL.

### Pre-Execution State Integrity

```text
Status = Ready for Execution | Pending Execution | Blocked
Implementation Checklist = [ ]
Acceptance / Exit Criteria = [ ]
Wave Result = pending / not executed
```

Pre-execution `[x]` veya success result → FAIL.

## VAL-06 — Execution-Critical Decision Completeness

Execution-critical unresolved karar varken active wave executable gösterilemez.
Exact stack/tooling unresolved ise stack-specific command/fact gerçekmiş gibi yazılamaz.

İhlal → FAIL.

## VAL-07 — Cross-Document Execution Consistency

```text
README
TECH_CONTEXT
CURRENT_STATUS
NEXT_TASKS
WAVE_MAP
active WAVE_PLAN
DECISIONS
```

aynı execution reality'yi anlatmalıdır.

## VAL-08 — Decision Provenance + Coverage

Allowed statuses:

```text
User Approved
Engine Resolved
Pending Review
Superseded
```

- `User Approved` için exact karar approved input/user statement içinde bulunmalı.
- Generic approval generation sonrası exact stack/palette/tooling seçimini User Approved yapmaz.
- Engine-selected exact implementation/design kararı `Engine Resolved` olmalıdır.
- Final exact seçimlerin DECISIONS coverage'ı bulunmalıdır.

Missing/wrong provenance → FAIL.

## VAL-09 — Tech Context / Integration Readiness

Frontend/demo için:

- current data source açık mı?
- mock/local boundary var mı?
- presentation ↔ service/data boundary belli mi?
- future real adapter noktası belli mi?
- approved olmayan backend/API/database uydurulmuş mu?

Critical ihlal → FAIL.

## VAL-10 — Design Profile + Quality

- `light` → güçlü project-specific DESIGN_RULES
- `standard` → applicable design system/shell/page/state coverage
- `full` → standard + justified feature/admin coverage

`light` generic/düşük kalite gerekçesi olamaz.

## VAL-11 — Project Plan / Wave / State Alignment

PROJECT_PLAN ↔ WAVE_MAP ↔ CURRENT_STATUS ↔ NEXT_TASKS aynı sıra/scope/active-wave gerçekliğini anlatmalıdır.

Critical mismatch → FAIL.

## VAL-12 — Information Ownership / Assumption / Conflict Integrity

- canonical owner sınırları korunuyor mu?
- prohibited/kayıtsız assumption var mı?
- `confirmed` için gerçek authority var mı?
- critical conflict çözülmüş mü?
- assumption approved decision gibi gösterilmiş mi?

Critical ihlal → FAIL.

## VAL-13 — Source Claim Integrity

Source validation blacklist değil **allowlist** esaslıdır.

`SOURCE_REGISTER.md` içindeki Factual Claim Allowlist (`FCL-XXX`) canonical factual registry'dir.

Her generated business/product/service factual claim veya modifier:

```text
→ existing FCL-XXX claim ID ile traceable olmalı
or
→ approved exact support ile FCL registry'ye eklenmiş olmalı
```

Üst-seviye claim yeni modifier/alt kapsam authorize etmez.

```text
FCL: Yedek Parça Temini
→ hizmet kartı valid
→ orijinal / hızlı temin / garanti invalid unless separate FCL exists
```

FCL mapping yoksa → FAIL / repair.

## VAL-14 — Template / Placeholder / Project Leakage

- tek canonical skeleton mı?
- required sections dolu mu?
- unresolved placeholder sızmış mı?
- başka proje truth/design/stack sızmış mı?

Critical ihlal → FAIL.

## VAL-15 — Point-of-Use Trace Integrity

Actual IDE/tool read event'i yalnız E1 observable execution trace ile doğrulanabilir.

### Truth Table

```text
Observable trace AVAILABLE?
│
├─ NO  → VAL-15 = UNVERIFIED
│
└─ YES
   │
   ├─ required read-before-write sequence present? YES → PASS
   └─ required read-before-write sequence present? NO  → FAIL
```

Dynamic instance geçerli sequence:

```text
read WAVE_PLAN_TEMPLATE
→ write WAVE_00
read WAVE_PLAN_TEMPLATE again
→ write WAVE_01
```

Geçersiz sequence:

```text
read WAVE_PLAN_TEMPLATE once
→ write WAVE_00
→ write WAVE_01
→ write WAVE_02
```

Evidence priority:

```text
E1 trace contradicts E4 PROGRESS/RUN_LOG
→ E1 wins
→ self-report invalidated
```

`PROGRESS.md`, `RUN_LOG.md` veya agent self-report actual read proof değildir.

### UNVERIFIED Semantics

- `UNVERIFIED` = PASS değildir.
- Trace yokken validator PASS iddia edemez.
- Diğer tüm blocking gate'ler PASS ise VAL-15 UNVERIFIED overall sonucu en fazla `CONDITIONAL PASS` yapabilir.

## VAL-16 — Validation Timeline Integrity

Validation **yalnız** active run working-output üzerinde publication öncesi yapılır.

Canonical target:

```text
runs/active/<run-id>/working-output/
```

Chronology:

```text
last required artifact generation/checkpoint
< validation stage start
<= VALIDATION_REPORT created/updated timestamp
< publication
< completion
```

Published path (`outputs/.../versions/...` veya `latest/`) validation target olarak kullanılmışsa → FAIL.
Chronology contradiction → FAIL.

## VAL-17 — Engine Boundary Integrity

Normal project run protected surfaces'i mutate edemez:

```text
PRODUCT_ENGINE_BRAIN.md
root README engine-version authority
engine/
packages/
templates/
logs/ENGINE_CHANGELOG.md
```

Operational writable:

```text
inputs/
runs/
outputs/
logs/RUN_INDEX.md
```

Protected mutation → FAIL.

## VAL-18 — Output + Operational Path Integrity

Final output path'leri `OUTPUT_STRUCTURE.md` ile uyumlu olmalıdır.
Operational records gerçek resolved/published path'i kaydetmelidir.
Validation target ile published output path birbirine karıştırılamaz.

Mismatch → FAIL.

## VAL-19 — Traceability + Lifecycle

Manifest input/package/profiles/documents/dynamic instances/validation/output refs taşır.
Aynı run ID tek lifecycle location'da bulunur.

Completed run için:

```text
RUN_MANIFEST status → Completed
PROGRESS status → Completed
RUN_LOG final event → Completed
COMPLETION_REPORT → successful completion
```

`runs/completed/` altında active state veya active duplicate → FAIL.

---

# Agent-Ready Acceptance Test

Projeyi hiç görmemiş yetkin yeni bir ajan yalnız final package ile:

1. read order'ı bulabiliyor mu?
2. scope ve technical/design authority'yi anlayabiliyor mu?
3. active wave'i belirleyebiliyor mu?
4. active WAVE_PLAN + NEXT_TASKS ile yeni planlama/kritik seçim yapmadan başlayabiliyor mu?
5. selected deliverable'ın done koşulunu anlayabiliyor mu?
6. QA/stop koşullarını anlayabiliyor mu?

4 veya 5 sağlanmıyorsa ilgili canonical gate FAIL olmalıdır.

---

# Validation Report Minimumu

```text
Expected Gate IDs: VAL-01..VAL-19
Executed Gate IDs
Missing Gate IDs
Unexpected/Custom Gate IDs
Observable Trace Status: AVAILABLE | UNAVAILABLE
Highest Evidence Level Used
Evidence Contradictions
Validation Target = runs/active/<run-id>/working-output/
overall result
validation chronology
VAL-01..VAL-19 ayrı sonuç satırları
per-gate evidence level
failed checks / warnings / UNVERIFIED limitations / repair actions
```

Canonical result rules:

```text
missing VAL ID → overall FAIL
higher-priority contradiction ignored → overall FAIL
non-executable SCP used by executable task → VAL-04 FAIL
trace available + invalid sequence → VAL-15 FAIL
trace unavailable → VAL-15 UNVERIFIED
published output used as validation target → VAL-16 FAIL
critical FAIL → overall FAIL
VAL-15 UNVERIFIED + all other gates PASS → at most CONDITIONAL PASS
```

Publication yalnız PASS veya gerçekten non-blocking/evidence-limited ve açıkça kabul edilmiş CONDITIONAL PASS sonrası yapılabilir.
