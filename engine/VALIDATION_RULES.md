# Validation Rules

## Amaç

Product Engine working output'unun yalnız eksiksiz değil, gerçekten **agent-ready** olup olmadığını doğrular.

Validation generator'ın kendi beyanlarını tekrar etmez; produced artifact'ları, canonical truth'u ve mevcut observable evidence'ı karşılaştırır.

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
- canonical planning profile alanları geçerli mi?
- `approved_by: user` gerçek explicit user approval'a dayanıyor mu?
- auto/tool/plan approval kullanılmış mı?
- `project_state` mevcut proje gerçekliğiyle uyumlu mu?

`project_state` sanity rule:

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

ile uyumlu olmalıdır. Standard implementation minimumu veya applicable design minimumu eksikse FAIL.

## 3. Canonical Document / Dynamic Instance Coverage

- required canonical documents mevcut mu?
- WAVE_MAP'teki her wave için WAVE_PLAN var mı?
- standard/full design'da gereken page/feature instances mevcut mu?
- gereksiz alternate Document ID/skeleton icat edilmiş mi?

Eksik required coverage → FAIL.

## 4. Wave Decomposition + Execution Depth

Validation önce WAVE_MAP decomposition'ını, sonra her WAVE_PLAN execution contract'ını kontrol eder.

### WAVE_MAP Decomposition

- wave'ler broad teknik fazlar yerine meaningful, independently verifiable deliverable'lara bölünmüş mü?
- tek wave içinde birbirinden bağımsız birkaç product surface/feature/flow gizlenmiş mi?
- distinct bir surface/feature kendi başına tamamlanıp doğrulanabiliyorsa yalnız teknik benzerlik veya aynı sayfada yer alma nedeniyle başka bağımsız teslimlerle birleştirilmiş mi?
- corporate/landing UI gibi projelerde `Home/Hero`, `Corporate/Trust`, `Services`, `Contact` gibi distinct responsibilities gereksiz biçimde tek `Core Frontend` wave'ine yığılmış mı?
- gerçekten cross-cutting final integration/responsive/QA işi son feature/contact wave'ine gizlenmiş mi?
- wave sonunda hangi deliverable'ın complete sayılacağı açık mı?
- yapay mikro-wave üretilmiş mi?

Kural:

```text
multiple independent meaningful deliverables hidden in one wave → FAIL / repair WAVE_MAP
no meaningful standalone result → FAIL / merge or redefine
cross-cutting whole-project QA hidden in final feature wave → FAIL / split QA
coherent complete deliverable → valid candidate
```

Granularity değerlendirmesi `WAVE_MAP_TEMPLATE.md` içindeki reference example'ın birebir kopyasını istemez; örneğin gösterdiği separation seviyesini kalibre etmek için kullanır.

### WAVE_PLAN Execution Depth

Her wave bir task özeti değil execution contract olmalıdır.

Kontrol:

- goal/dependency/in-out scope açık mı?
- expected result / target structure anlaşılır mı?
- implementation checklist anlamlı alt gruplara ayrılmış mı?
- görevler atomic ve doğrulanabilir mi?
- normal kapsamlı wave yeterli implementation derinliğine sahip mi (çoğu durumda yaklaşık 10–20 doğrulanabilir görev; kota değildir)?
- map'teki assigned deliverable applicable scope'uyla wave sonunda complete oluyor mu?
- checklist, başka wave olması gereken bağımsız deliverable'ları `1.1 / 1.2` benzeri task'lar altında saklıyor mu?
- state/role/responsive coverage applicable alanları kapsıyor mu?
- verification + manual QA/debug + exit criteria somut mu?
- user-facing surface ise applicable structure/content, interaction, responsive, states, accessibility ve data/service integration sorumlulukları ele alınmış mı?
- agent wave'i okuyunca tekrar mini implementation planı üretmek zorunda mı?

Son sorunun cevabı evet ise veya selected deliverable wave sonunda yarım kalıyorsa → FAIL.

### Pre-Execution State Integrity

Wave planı generation sırasında henüz execute edilmemişse:

```text
Status = Ready for Execution | Pending Execution | Blocked
Implementation Checklist checkbox = [ ]
Acceptance / Exit Criteria checkbox = [ ]
Wave Result = pending / not executed
```

Pre-execution wave'de `[x]` completion kriteri bulunamaz. İhlal → FAIL.

## 5. Execution-Critical Decision Completeness

Aktif/ilk wave'i uygulama yolunu değiştiren unresolved karar var mı?

Execution-critical unresolved karar varken active wave executable gösterilemez.

Exact stack/tooling unresolved ise `npm`, `pnpm`, `yarn`, `vite`, framework-specific command veya eşdeğer stack-specific assumption/command gerçekmiş gibi yazılamaz.

İhlal → FAIL.

## 6. Cross-Document Execution Consistency

```text
README
TECH_CONTEXT
CURRENT_STATUS
NEXT_TASKS
active WAVE_PLAN
DECISIONS
```

aynı execution reality'yi anlatmalıdır.

Stack/tool/build command/architecture boundary çelişkisi → FAIL.
Küçük terminoloji drift'i → CONDITIONAL PASS.

## 7. Decision Provenance

Allowed project decision statuses:

```text
User Approved
Engine Resolved
Pending Review
Superseded
```

- `User Approved` için canonical user approval kaynağı olmalı.
- `Engine Resolved` approved scope'u değiştirmemeli.
- Kullanıcı kararı gerektiren kritik konu `Engine Resolved` yapılamaz.
- execution-critical `Pending Review` varken agent-ready PASS verilemez.

İhlal → FAIL.

## 8. Tech Context / Integration Readiness

Frontend/demo için current data source, mock/local data boundary, presentation ↔ service/data boundary ve future adapter noktası açık olmalıdır.

Approved olmayan backend/API/database uydurulmuşsa → FAIL.

## 9. Design Profile + Quality

- `light` → güçlü, project-specific DESIGN_RULES
- `standard` → applicable design system/shell/page/state coverage
- `full` → standard + justified feature/admin coverage

`light` düşük kalite/generic template gerekçesi olamaz.

## 10. Project Plan / Wave / State Alignment

PROJECT_PLAN ↔ WAVE_MAP ↔ CURRENT_STATUS ↔ NEXT_TASKS aynı sıra/scope/active-wave gerçekliğini anlatmalıdır.

Critical mismatch → FAIL.

## 11. Information Ownership / Assumption / Conflict Integrity

- canonical owner sınırları korunuyor mu?
- prohibited/kayıtsız assumption var mı?
- unresolved stack/tooling varken stack-specific assumption sızmış mı?
- `confirmed` için gerçek authority var mı?
- critical conflict çözülmüş mü?

Critical ihlal → FAIL.

## 12. Source Claim Integrity

Project output ve execution plans içindeki business/product/service factual claim'ler approved/verified truth ile traceable olmalıdır.

Validation özellikle şu alanları approved input, INPUT_SNAPSHOT, SOURCE_REGISTER ve PRODUCT_RULES ile karşılaştırır:

```text
hizmet kapsamı
7/24 / süre / hız iddiaları
garanti
sertifika / yetkilendirme
ekip büyüklüğü / mobil ekip
aynı gün / hızlı teslim / müdahale süresi
performans / başarı oranı
coğrafi kapsama ilişkin yeni iddialar
müşteri / referans / partner iddiaları
```

Design treatment veya UI wording yeni factual business claim'e dönüşemez.

Canonical source'da açık destek bulunmayan claim → FAIL veya generation repair.

## 13. Template / Placeholder / Project Leakage

- tek canonical skeleton kullanılmış mı?
- required sections dolu mu?
- placeholder/template instruction sızmış mı?
- başka projeye ait truth/design/stack sızmış mı?

Critical ihlal → FAIL.

## 14. Point-of-Use Trace Integrity

Operational self-report tek başına refresh kanıtı değildir.

Validation iki katmanlı çalışır:

```text
observable execution/tool trace available
→ trace is primary authority
→ PROGRESS/RUN_LOG must agree with trace

trace unavailable
→ operational evidence may support audit
→ validator must not claim stronger proof than available evidence
```

Her canonical artifact ve her dynamic instance için ilgili template/authority read event'i artifact üretiminden önce gerçekleşmiş olmalıdır.

Özellikle:

```text
read WAVE_PLAN_TEMPLATE
→ generate WAVE_00
read WAVE_PLAN_TEMPLATE again
→ generate WAVE_01
```

Batch read sonrası birden fazla instance generation point-of-use compliance değildir.

Trace mevcutken PROGRESS/RUN_LOG `refreshed` diyor fakat actual read event yoksa → FAIL.

## 15. Engine Boundary Integrity

Normal project generation run aşağıdaki protected Engine surfaces'i mutate edemez:

```text
PRODUCT_ENGINE_BRAIN.md
root README engine-version authority
engine/
packages/
templates/
logs/ENGINE_CHANGELOG.md
```

Operational writable örnekler:

```text
inputs/
runs/
outputs/
logs/RUN_INDEX.md
```

Project run'ın tek başına başarılı olması `ENGINE_CHANGELOG.md` girdisi değildir.

Protected surface mutation project run sırasında görülürse → FAIL.

## 16. Output + Operational Path Integrity

Final output path'leri `OUTPUT_STRUCTURE.md` ile birebir uyumlu olmalıdır.
Operational records gerçek resolved/published path'i kaydetmelidir.

Mismatch → FAIL.

## 17. Traceability + Lifecycle

Manifest input/package/profiles/documents/dynamic instances/validation/output refs taşır.

Aynı run ID yalnız bir lifecycle location'da bulunabilir.

Completed run için:

```text
RUN_MANIFEST status → Completed
PROGRESS status → Completed
RUN_LOG final lifecycle event → Completed
COMPLETION_REPORT → successful completion
```

`runs/completed/` altında aktif state veya active kopya → FAIL.

---

# Agent-Ready Acceptance Test

Projeyi hiç görmemiş yetkin yeni bir ajan yalnız final package ile:

1. read order'ı bulabiliyor mu?
2. scope ve teknik/design authority'yi anlayabiliyor mu?
3. active wave'i belirleyebiliyor mu?
4. active WAVE_PLAN + NEXT_TASKS ile yeni planlama veya kritik teknik seçim yapmadan implementation'a başlayabiliyor mu?
5. selected wave deliverable'ının ne zaman gerçekten complete olduğunu anlayabiliyor mu?
6. done/QA/stop koşullarını anlayabiliyor mu?

4 veya 5. madde sağlanmıyorsa → FAIL.

---

# Validation Report Minimumu

```text
result
run_id
base package + profiles
canonical document coverage
dynamic instance coverage
wave decomposition result
wave execution depth result
pre-execution wave state integrity
execution-critical decision result
cross-document execution consistency
approval + project_state integrity
decision provenance
source claim integrity
point-of-use trace integrity
engine boundary integrity
integration readiness
design quality
operational path integrity
agent-ready acceptance
lifecycle location + operational state integrity
failed checks / warnings / repair actions
```

Publication yalnız PASS veya gerçekten non-blocking ve açıkça kabul edilmiş CONDITIONAL PASS sonrası yapılabilir.
