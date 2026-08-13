# Validation Rules

## Amaç

Product Engine working output'unun yalnız eksiksiz değil, gerçekten **agent-ready, source-safe ve evidence-consistent** olup olmadığını doğrular.

Validation generator'ın kendi beyanlarını tekrar etmez; produced artifact'ları, approved truth'u ve mevcut observable evidence'ı karşılaştırır.

> Self-report is evidence metadata, not ground truth.

## Sonuçlar

```text
PASS             → publication yapılabilir
CONDITIONAL PASS → yalnız non-blocking bulgu vardır
FAIL             → blocking contract ihlali vardır; publication yapılamaz
```

---

# Blocking Validation Set

## 1. Approval Integrity

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

## 2. Package + Planning Compliance

Resolved set:

```text
base package + planning overlay + contextual conditions
```

ile uyumlu olmalıdır. Required planning minimumu eksikse FAIL.

## 3. Canonical Document / Dynamic Instance Coverage

- required canonical documents mevcut mu?
- WAVE_MAP'teki her wave için WAVE_PLAN var mı?
- applicable design dynamic instances mevcut mu?
- duplicate/alternate skeleton icat edilmiş mi?

Eksik required coverage → FAIL.

## 4. Approved Scope Integrity

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

Örnek blocking leakage:

```text
Approved Future: interactive teklif formu
Generated WAVE: teklif formu simülasyonu geliştir
→ FAIL
```

```text
Approved Future: canlı harita
Generated WAVE: map/contact deliverable
→ FAIL
```

Future item'ın yalnız future context olarak anılması ihlal değildir; executable deliverable/task olması ihlaldir.

## 5. Wave Decomposition + Execution Depth

Validation önce WAVE_MAP decomposition'ını, sonra her WAVE_PLAN execution contract'ını kontrol eder.

### WAVE_MAP Decomposition

- meaningful, independently verifiable deliverable'lara bölünmüş mü?
- bağımsız surface/feature/flow tek wave altında gizlenmiş mi?
- same-page olması gerekçe edilerek distinct responsibilities birleştirilmiş mi?
- whole-project final QA son feature/contact wave'ine gömülmüş mü?
- completion boundary açık mı?
- artificial micro-wave var mı?

Kural:

```text
multiple independent meaningful deliverables hidden → FAIL / repair WAVE_MAP
no meaningful standalone result                 → FAIL / merge/redefine
whole-project QA hidden in feature wave          → FAIL / split QA
coherent complete deliverable                    → valid
```

Whole-project responsive sweep/regression/cross-browser/final presentation QA birden fazla önceki surface'i yeniden doğruluyorsa ayrı final QA wave'i olmalıdır.

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

## 6. Execution-Critical Decision Completeness

Execution-critical unresolved karar varken active wave executable gösterilemez.

Exact stack/tooling unresolved ise stack-specific command/fact gerçekmiş gibi yazılamaz.

İhlal → FAIL.

## 7. Cross-Document Execution Consistency

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

## 8. Decision Provenance + Coverage

Allowed statuses:

```text
User Approved
Engine Resolved
Pending Review
Superseded
```

### Provenance Check

- `User Approved` için **exact kararın kendisi** approved input/user statement içinde bulunmalı.
- Generic `Onaylıyorum, devam et` mesajı, generation sonrası exact stack/palette/tooling seçimini User Approved yapmaz.
- Engine'in generation sırasında seçtiği exact implementation/design kararı `Engine Resolved` olmalıdır.
- Kullanıcı kararı gerektiren kritik konu `Engine Resolved` yapılamaz.

### Coverage Check

Final output'ta exact ve kalıcı bir seçim varsa DECISIONS coverage'ı aranır:

```text
TECH_CONTEXT: Vanilla HTML/CSS/JS
→ DECISIONS exact stack resolution kaydı olmalı

DESIGN_RULES: exact palette / typography concept
→ Engine chose it ise DECISIONS Engine Resolved kaydı olmalı
```

Missing decision record, wrong provenance veya false User Approved → FAIL.

## 9. Tech Context / Integration Readiness

Frontend/demo için:

- current data source açık mı?
- mock/local boundary var mı?
- presentation ↔ service/data boundary belli mi?
- future real adapter noktası belli mi?
- approved olmayan backend/API/database gerçekmiş gibi uydurulmuş mu?

Critical ihlal → FAIL.

## 10. Design Profile + Quality

- `light` → güçlü, project-specific DESIGN_RULES
- `standard` → applicable design system/shell/page/state coverage
- `full` → standard + justified feature/admin coverage

`light` generic/düşük kalite gerekçesi olamaz.

## 11. Project Plan / Wave / State Alignment

PROJECT_PLAN ↔ WAVE_MAP ↔ CURRENT_STATUS ↔ NEXT_TASKS aynı sıra/scope/active-wave gerçekliğini anlatmalıdır.

Critical mismatch → FAIL.

## 12. Information Ownership / Assumption / Conflict Integrity

- canonical owner sınırları korunuyor mu?
- prohibited/kayıtsız assumption var mı?
- `confirmed` için gerçek authority var mı?
- critical conflict çözülmüş mü?
- assumption approved decision gibi gösterilmiş mi?

Critical ihlal → FAIL.

## 13. Source Claim Integrity

Project output ve execution plans içindeki business/product/service factual claim'ler approved/verified truth ile traceable olmalıdır.

Validation yalnız genel hizmet başlıklarını değil, task/copy içindeki **factual modifiers ve alt kapsamı** da kontrol eder.

Özellikle:

```text
7/24 / süre / hız
orijinal / garantili
hızlı temin / aynı gün
mobil ekip / müdahale
periyodik bakım
hidrolik revizyon
performans testi
sertifika / uzman kadro
yeni coğrafi kapsam
yeni teknik süreç veya hizmet alt kapsamı
müşteri / referans / partner iddiası
```

Approved source yalnız `Yedek Parça Temini` diyorsa `orijinal parça`, `hızlı temin`, `garanti` gibi modifiers otomatik türetilemez.

Canonical source desteği yoksa → FAIL / repair.

## 14. Template / Placeholder / Project Leakage

- tek canonical skeleton mı?
- required sections dolu mu?
- unresolved placeholder sızmış mı?
- başka proje truth/design/stack sızmış mı?

Critical ihlal → FAIL.

## 15. Point-of-Use Trace Integrity

Operational self-report tek başına refresh kanıtı değildir.

```text
observable execution/tool trace available
→ trace is primary authority
→ PROGRESS/RUN_LOG must agree with actual sequence
```

Dynamic instances için **instance başına ayrı read-before-write sequence** gerekir:

```text
read WAVE_PLAN_TEMPLATE
→ write WAVE_00
read WAVE_PLAN_TEMPLATE again
→ write WAVE_01
```

Şu sequence FAIL'dir:

```text
read WAVE_PLAN_TEMPLATE once
→ write WAVE_00
→ write WAVE_01
→ write WAVE_02
→ PROGRESS says all refreshed
```

Validation kendi run metadata'sındaki `Yes` alanını proof olarak kullanamaz; observable trace ile karşılaştırmalıdır.

Trace mevcutken read event yoksa veya sıra yanlışsa → FAIL.

Trace unavailable ise validator `observable proof unavailable` diye evidence limitation belirtir; self-report'u stronger proof gibi sunamaz.

## 16. Validation Timeline Integrity

Validation report yalnız required artifact generation ve pre-validation checks tamamlandıktan sonra oluşturulabilir.

Zaman/sıra kontrolü:

```text
last required artifact generation/checkpoint
< validation stage start
<= VALIDATION_REPORT created/updated timestamp
< publication
< completion
```

`VALIDATION_REPORT` timestamp'i artifact generation'dan önceyse veya RUN_LOG validation event'i ile çelişiyorsa → FAIL.

Operational timestamps kendi aralarında mümkün bir chronology oluşturmalıdır.

## 17. Engine Boundary Integrity

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

## 18. Output + Operational Path Integrity

Final output path'leri `OUTPUT_STRUCTURE.md` ile uyumlu olmalıdır.
Operational records gerçek resolved/published path'i kaydetmelidir.

Mismatch → FAIL.

## 19. Traceability + Lifecycle

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

4 veya 5 sağlanmıyorsa → FAIL.

---

# Validation Report Minimumu

```text
result
run_id
base package + profiles
canonical document coverage
dynamic instance coverage
approved scope integrity
wave decomposition result
wave execution depth result
pre-execution wave state integrity
execution-critical decision result
cross-document execution consistency
decision provenance + coverage
source claim integrity
point-of-use trace integrity
validation timeline integrity
engine boundary integrity
integration readiness
design quality
operational path integrity
agent-ready acceptance
lifecycle location + operational state integrity
failed checks / warnings / repair actions
```

Publication yalnız PASS veya gerçekten non-blocking ve açıkça kabul edilmiş CONDITIONAL PASS sonrası yapılabilir.
