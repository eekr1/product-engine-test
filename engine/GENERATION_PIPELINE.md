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

### Evidence Boundary

Product Engine markdown/runtime records actual IDE/tool read event'ini kendi başına kanıtlayamaz.

Bu nedenle iki farklı katman ayrılır:

```text
Generation Contract Compliance
→ agent refresh eylemini yapmak zorundadır
→ PROGRESS/RUN_LOG yapılan işi audit metadata olarak kaydeder

Observable Trace Audit
→ yalnız IDE/tool execution trace varsa actual read-before-write sırasını kanıtlayabilir
```

Operational self-report actual read event proof değildir.

Trace mevcut değilse:

```text
Point-of-Use observable verdict = UNVERIFIED
```

Agent veya validator trace yokken `PASS` uyduramaz. `UNVERIFIED`, refresh contract'ının kaldırıldığı anlamına gelmez; yalnız observable proof sınırını dürüstçe belirtir.

Trace mevcutsa trace birincil otoritedir ve operational records trace ile çelişemez.

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
9. Record artifact-specific audit metadata in PROGRESS/RUN_LOG
10. Mark this checkpoint locally complete
CHECKPOINT END
→ only now resolve the next artifact
```

### Sequencing Invariant

Geçersiz:

```text
read WAVE_PLAN_TEMPLATE once
→ generate WAVE_00
→ generate WAVE_01
→ generate WAVE_02
```

Geçerli:

```text
read WAVE_PLAN_TEMPLATE
→ generate/check WAVE_00

read WAVE_PLAN_TEMPLATE AGAIN
→ generate/check WAVE_01
```

Aynı template'ten birden fazla dynamic instance çıkıyorsa her instance yeni checkpoint'tir. Batch-read + batch-generate yasaktır.

Operational metadata minimumu:

```text
artifact / dynamic instance
claimed template refresh
primary authorities consulted
approved scope/truth check performed where applicable
local contract check result
repair performed: yes/no
```

Bu metadata actual IDE read proof olarak etiketlenemez.

---

# Scope Truth Boundary

Approved input içindeki kapsam kategorileri farklı authority taşır:

```text
In Scope               → generation may implement/plan
Known Decisions        → generation may implement/plan
Verified Current Truth → generation may reuse as factual truth
Future Possibilities   → NOT current scope
Open Questions         → NOT approved scope until resolved
Out of Scope           → prohibited for current generation
```

> Future possibility is not approved scope.

`Future Possibilities`, `Open Questions` veya başka non-approved alanlardaki feature/flow yalnız future/unresolved context olarak anılabilir; WAVE_MAP, WAVE_PLAN, PROJECT_PLAN veya active NEXT_TASKS içine committed deliverable olarak taşınamaz.

Approved scope genişletilecekse yeni explicit user approval / yeni input version gerekir.

---

# Factual Claim Allowlist Boundary

Business/product/service factual truth serbest metin enrichment ile genişletilemez.

Run'ın `SOURCE_REGISTER.md` belgesi verified factual truth için Factual Claim Allowlist tutar:

```text
FCL-XXX
Claim
Source ID
Source Location / Evidence
Status: Verified | Approved
Allowed Use
```

Canonical kural:

> Generated factual business claim must map to an existing FCL claim ID.

Örnek:

```text
FCL: Yedek Parça Temini
Allowed: Yedek Parça Temini hizmet kartını oluştur
Invalid without separate FCL: orijinal parça / hızlı temin / garanti
```

Bir üst-seviye hizmet başlığı alt teknik kapsamı, süreç detayını, hız/garanti modifier'ını veya yeni coğrafi/operational iddiayı otomatik authorize etmez.

FCL yoksa:

```text
remove factual enrichment
or use neutral/non-factual wording
or stop for clarification if execution-critical
```

Design treatment, layout, interaction ve visual direction factual business claim'e dönüşmediği sürece FCL gerektirmez.

---

# Project Run Write Boundary

Normal project generation run Product Engine'in authority/history yüzeylerini read-only kullanır.

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

Package-specific deterministic guards resolution sonucu binding validation/decomposition contract'ının parçasıdır.

## 4. Document + Dynamic Instance Resolution

`DOCUMENT_CATALOG.md` yeniden okunur ve canonical Document ID seti + dynamic instance registry çözülür.

Yeni instance yeni Document ID değildir.

## 5. Source Register + Factual Claim Resolution

Artifact generation başlamadan önce `SOURCE_REGISTER_TEMPLATE.md`, approved input ve verified project sources yeniden okunur.

`SOURCE_REGISTER.md` içinde:

```text
source registry
+
Factual Claim Allowlist (FCL)
```

oluşturulur.

FCL registry source'tan daha geniş olamaz. Generated factual claim'ler bundan sonra FCL ID ile trace edilir.

## 6. Template Resolution

Template resolution yalnız hangi canonical template'in kullanılacağını belirler. Template içeriği artifact checkpoint sırasında yeniden okunur.

Missing/duplicate/conflicting skeleton → generation başlamaz.

## 7. Information Distribution

Approved truth `INFORMATION_MAP.md` owner kurallarıyla dağıtılır.

Scope Truth Boundary ve FCL Boundary bu aşamada uygulanır.

## 8. Missing / Assumption / Conflict / Decision Handling

`ASSUMPTION_RULES.md` ve `CONFLICT_RESOLUTION.md` uygulanır.

### Decision Resolution Contract

Generation sırasında kesinleşen ve output execution reality'sini değiştiren her kalıcı karar `DECISIONS.md` içinde kayıtlı olmalıdır.

```text
explicitly present in approved input → User Approved
chosen by Engine after approval       → Engine Resolved
unresolved and user-critical          → Pending Review
```

Generic user approval, Engine'in sonradan seçtiği exact stack/palette/implementation detayını `User Approved` yapmaz.

### Execution-Critical Decision Gate

Execution-critical unresolved karar:

```text
→ active wave Ready for Execution olamaz
→ README kesin command yazamaz
→ NEXT_TASKS executable gösterilemez
→ clarification / resolution gerekir
```

Engine approved scope'u değiştirmeyen düşük-risk implementation detayını `Engine Resolved` olarak çözebilir.

## 9. Dependency-Ordered Generation

Genel sıra:

```text
Approved Input
→ SOURCE_REGISTER + FCL registry
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

Her artifact Artifact Checkpoint Protocol'den ayrı ayrı geçer.

### WAVE-MAP Checkpoint

`WAVE_MAP` öncesi yeniden oku:

```text
WAVE_MAP_TEMPLATE
selected package/context + package granularity guards
PROJECT_BRAIN
PRODUCT_RULES
TECH_CONTEXT
applicable DESIGN
approved input scope boundaries
SOURCE_REGISTER FCL registry
```

Package-specific deterministic split guard heuristic değildir.

Örneğin applicable `demo-frontend` corporate/landing context'te:

```text
Services + distinct Contact → split
surface + whole-project final QA → split
QA re-validates 2+ previous surfaces → separate final QA wave
```

### Dynamic WAVE_PLAN Checkpoint

Her `WAVE_<NN>` için yeniden:

```text
WAVE_PLAN_TEMPLATE
WAVE_MAP'teki exact WAVE_<NN> entry
TECH_CONTEXT
PRODUCT_RULES
applicable DESIGN authority
approved input scope boundaries
SOURCE_REGISTER FCL registry
```

Bir wave:

- başka wave deliverable'ını task içine saklayamaz,
- future scope'u active task yapamaz,
- FCL mapping'i olmayan factual business claim üretemez.

İhlal görülürse ilgili WAVE_MAP/artifact repair edilir.

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

## 10. Pre-Validation Consistency + Provenance Check

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
SOURCE_REGISTER FCL registry
applicable package guards
```

birlikte karşılaştırılır.

Blocking ihlal varsa Validation stage'e geçmeden repair yapılır.

## 11. Validation / Repair

Validation transition öncesinde `VALIDATION_RULES.md` bu anda yeniden açılır.

Validation report ancak:

```text
all required artifacts generated
all artifact checkpoints closed
pre-validation consistency check completed
validation stage started
```

sonrasında oluşturulabilir.

Validation canonical gate seti `VAL-01..VAL-19`'dur. Validator alternate `CHK-*` seti icat edemez.

Point-of-Use verdict:

```text
observable trace valid   → VAL-15 PASS
observable trace invalid → VAL-15 FAIL
trace unavailable        → VAL-15 UNVERIFIED
```

Trace unavailable iken VAL-15 PASS yazılamaz.

Validation report timestamp generation/checkpoint completion timestamp'larından önce olamaz.

```text
PASS             → publication
CONDITIONAL PASS → yalnız non-blocking/evidence-limited bulgu + açık kabul
FAIL             → repair; devam ederse Failed
```

## 12. Publication

Publication transition öncesinde `OUTPUT_STRUCTURE.md` yeniden açılır.

PASS veya policy'nin izin verdiği açık CONDITIONAL PASS sonrası:

1. output version tahsis edilir.
2. `versions/<version>/` yayınlanır.
3. `latest/` aynı sürümün derived görünümü olur.
4. Run records gerçek path'leri kaydeder.

## 13. Completion

Completion transition öncesinde `RUN_PROTOCOL.md` yeniden açılır.

Run records terminal gerçekliğe kapatılır, sonra doğru lifecycle konumuna move edilir.

---

# Agent-Ready Completion Invariant

> Projeyi hiç görmemiş yetkin yeni bir ajan, output paketini okuyup yeni bir mimari/teknik planlama turu yapmadan aktif `WAVE_<NN>.md` planını uygulamaya başlayabilmelidir.

Bu koşul sağlanmıyorsa output biçimsel olarak eksiksiz olsa bile generation başarılı sayılmaz.
