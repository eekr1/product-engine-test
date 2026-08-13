# Validation Rules

## Amaç

Product Engine working output'unun yalnız eksiksiz değil, gerçekten **agent-ready, source-safe ve evidence-consistent** olup olmadığını doğrular.

Validation generator'ın kendi beyanlarını tekrar etmez; produced artifact'ları, approved truth'u, package contract'larını, Factual Claim Allowlist'i ve mevcut observable evidence'ı karşılaştırır.

> Self-report is evidence metadata, not ground truth.

## Sonuçlar

```text
PASS             → publication yapılabilir
CONDITIONAL PASS → yalnız non-blocking bulgu / açık evidence limitation vardır
FAIL             → blocking contract ihlali vardır; publication yapılamaz
```

## Canonical Gate Identity Contract

Blocking validation set sabit canonical ID'lere sahiptir.

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

Validator kendi `CHK-*` setini icat edemez, gate'leri birleştirip azaltamaz veya numaralı setten madde düşüremez.

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
- `project_state` mevcut proje gerçekliğiyle uyumlu mu?

```text
existing website/product/code/docs/previous implementation context exists
→ project_state = existing

new codebase/rewrite from scratch alone
→ project_state = new anlamına gelmez
```

İhlal → FAIL.

## VAL-02 — Package + Planning Compliance

Resolved set:

```text
base package + planning overlay + contextual conditions
```

ile uyumlu olmalıdır. Required planning minimumu veya applicable package-specific blocking guard ihlal edilirse FAIL.

## VAL-03 — Canonical Document / Dynamic Instance Coverage

- required canonical documents mevcut mu?
- WAVE_MAP'teki her wave için WAVE_PLAN var mı?
- applicable design dynamic instances mevcut mu?
- duplicate/alternate skeleton icat edilmiş mi?

Eksik required coverage → FAIL.

## VAL-04 — Approved Scope Integrity

Validation approved input scope kategorilerini artifact'larla doğrudan karşılaştırır.

```text
In Scope / Known Decisions / verified current truth
→ committed generation scope olabilir

Future Possibilities
Open Questions / unresolved options
Out of Scope
→ explicit later approval olmadan committed scope OLAMAZ
```

Özellikle WAVE_MAP, WAVE_PLAN, PROJECT_PLAN ve NEXT_TASKS kontrol edilir.

Future item'ın yalnız future context olarak anılması ihlal değildir; executable deliverable/task olması ihlaldir.

İhlal → FAIL.

## VAL-05 — Wave Decomposition + Execution Depth

Validation önce WAVE_MAP decomposition'ını, sonra her WAVE_PLAN execution contract'ını kontrol eder.

### WAVE_MAP Decomposition

Genel kurallar:

- meaningful, independently verifiable deliverable'lara bölünmüş mü?
- bağımsız surface/feature/flow tek wave altında gizlenmiş mi?
- same-page olması gerekçe edilerek distinct responsibilities birleştirilmiş mi?
- whole-project final QA son feature/contact wave'ine gömülmüş mü?
- completion boundary açık mı?
- artificial micro-wave var mı?

```text
multiple independent meaningful deliverables hidden → FAIL / repair WAVE_MAP
no meaningful standalone result                  → FAIL / merge/redefine
whole-project QA hidden in feature wave           → FAIL / split QA
coherent complete deliverable                     → valid
```

### Package-Level Deterministic Guards

Applicable package contract heuristic değil blocking authority'dir.

`demo-frontend` landing/corporate context örneği:

```text
Services + distinct Contact responsibility in one wave
→ FAIL / split

feature/contact surface + whole-project final responsive/cross-browser/regression/presentation QA
→ FAIL / split final QA

QA re-validates 2+ previously completed surfaces/features
→ separate final QA wave REQUIRED
```

Package istisnası ancak package contract'ın izin verdiği şekilde WAVE_MAP içinde explicit rationale ile kanıtlanabilir.

### WAVE_PLAN Execution Depth

Kontrol:

- goal/dependency/in-out scope açık mı?
- expected result anlaşılır mı?
- checklist meaningful groups + atomic tasks içeriyor mu?
- selected deliverable wave sonunda complete mi?
- başka wave olması gereken deliverable task olarak saklanmış mı?
- applicable responsive/state/accessibility/data boundary sorumlulukları var mı?
- verification/manual QA/exit criteria somut mu?
- agent yeni mini-plan üretmek zorunda mı?

Selected deliverable yarım kalıyorsa veya agent tekrar plan üretmek zorundaysa → FAIL.

### Pre-Execution State Integrity

Henüz execute edilmemiş wave:

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

Stack/tool/build command/architecture boundary çelişkisi → FAIL.

## VAL-08 — Decision Provenance + Coverage

Allowed statuses:

```text
User Approved
Engine Resolved
Pending Review
Superseded
```

- `User Approved` için exact kararın kendisi approved input/user statement içinde bulunmalı.
- Generic `Onaylıyorum, devam et` mesajı generation sonrası exact stack/palette/tooling seçimini User Approved yapmaz.
- Engine'in generation sırasında seçtiği exact implementation/design kararı `Engine Resolved` olmalıdır.
- Kullanıcı kararı gerektiren kritik konu `Engine Resolved` yapılamaz.

Final output'ta exact ve kalıcı seçim varsa DECISIONS coverage'ı aranır.

Missing decision record, wrong provenance veya false User Approved → FAIL.

## VAL-09 — Tech Context / Integration Readiness

Frontend/demo için:

- current data source açık mı?
- mock/local boundary var mı?
- presentation ↔ service/data boundary belli mi?
- future real adapter noktası belli mi?
- approved olmayan backend/API/database gerçekmiş gibi uydurulmuş mu?

Critical ihlal → FAIL.

## VAL-10 — Design Profile + Quality

- `light` → güçlü, project-specific DESIGN_RULES
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

`SOURCE_REGISTER.md` içindeki Factual Claim Allowlist canonical run-level factual claim registry'sidir.

Her generated business/product/service factual claim veya factual modifier/subclaim:

```text
→ existing FCL-XXX claim ID ile traceable olmalı
or
→ approved input içinde exact direct support taşımalı ve FCL registry'ye eklenmiş olmalı
```

Üst-seviye claim yeni modifier/alt kapsamı authorize etmez.

```text
FCL: Yedek Parça Temini
→ "Yedek Parça Temini kartı" valid
→ "orijinal parça" invalid unless separate FCL support exists
→ "hızlı temin" invalid unless separate FCL support exists
```

Aynı mantık şunlara uygulanır:

```text
servis süreci
yetkili müdahale
hidrolik/mekanik bakım detayları
7/24 / süre / hız
garanti / orijinal
mobil ekip
periyodik bakım / revizyon
sertifika / uzman kadro
yeni coğrafi kapsam
müşteri / referans / partner iddiası
```

FCL mapping yoksa → FAIL / repair.

Design treatment/layout/interaction factual business claim değilse FCL gerektirmez.

## VAL-14 — Template / Placeholder / Project Leakage

- tek canonical skeleton mı?
- required sections dolu mu?
- unresolved placeholder sızmış mı?
- başka proje truth/design/stack sızmış mı?

Critical ihlal → FAIL.

## VAL-15 — Point-of-Use Trace Integrity

Point-of-use davranışı generation contract'ında zorunludur; fakat **actual IDE/tool read event'i yalnız observable execution trace ile doğrulanabilir**.

Canonical verdict semantics:

```text
observable trace available + sequence valid
→ PASS

observable trace available + sequence invalid/missing read
→ FAIL

observable trace unavailable
→ UNVERIFIED
```

Dynamic instances için geçerli trace örneği:

```text
read WAVE_PLAN_TEMPLATE
→ write WAVE_00
read WAVE_PLAN_TEMPLATE again
→ write WAVE_01
```

Şu sequence trace mevcutsa FAIL'dir:

```text
read WAVE_PLAN_TEMPLATE once
→ write WAVE_00
→ write WAVE_01
→ write WAVE_02
```

`PROGRESS.md`, `RUN_LOG.md` veya agent self-report actual read event proof değildir.

### UNVERIFIED Semantics

`UNVERIFIED` validator'ın execution trace'e erişemediğini dürüstçe gösterir.

- `UNVERIFIED` = PASS değildir.
- `UNVERIFIED` = generator contract ihlali kanıtlandı anlamına da gelmez.
- Validator trace yokken `PASS` iddia edemez.
- Bütün diğer blocking gate'ler PASS ise VAL-15 UNVERIFIED overall sonucu en fazla `CONDITIONAL PASS` yapabilir.
- Observable trace gereken bir acceptance/test ortamında trace bekleniyorsa fakat sağlanmamışsa test politikası bunu FAIL'e yükseltebilir.

## VAL-16 — Validation Timeline Integrity

Validation report yalnız required artifact generation ve pre-validation checks tamamlandıktan sonra oluşturulabilir.

```text
last required artifact generation/checkpoint
< validation stage start
<= VALIDATION_REPORT created/updated timestamp
< publication
< completion
```

Chronology contradiction → FAIL.

## VAL-17 — Engine Boundary Integrity

Normal project generation run şu protected surfaces'i mutate edemez:

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

Rapor şunları zorunlu taşır:

```text
Expected Gate IDs: VAL-01..VAL-19
Executed Gate IDs
Missing Gate IDs
Unexpected/Custom Gate IDs
overall result
run_id
base package + profiles
validation chronology
VAL-01..VAL-19 ayrı sonuç satırları
evidence inspected
failed checks / warnings / UNVERIFIED limitations / repair actions
```

Canonical kurallar:

```text
missing VAL ID → overall FAIL
custom CHK set replacing VAL IDs → overall FAIL
critical FAIL → overall FAIL
VAL-15 UNVERIFIED + all other gates PASS → at most CONDITIONAL PASS
```

Publication yalnız PASS veya gerçekten non-blocking/evidence-limited ve açıkça kabul edilmiş CONDITIONAL PASS sonrası yapılabilir.
