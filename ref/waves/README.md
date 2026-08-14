# Wave Quality References

`ref/waves/` Product Engine'in canonical wave authority'si değildir.

Bu klasörün tek amacı, agent'a **iyi wave decomposition ve implementation-ready wave detail seviyesinin nasıl göründüğünü** gerçek, tamamlanmış bir proje üzerinden göstermektir.

Canonical ownership değişmez:

```text
engine/                     -> rules / boundaries / runtime contracts
templates/waves/            -> required wave artifact structure
approved project input      -> project truth / scope
WAVE_MAP                    -> current project's execution scope contract
ref/waves/                  -> non-authoritative quality + depth examples
```

## Reference Set

### `Design_Wave_Plan.md`

Vibehall'ın gerçek full wave planıdır ve master reference olarak tutulur. Büyük olduğu için runtime agent'ın bunu bütünüyle okuması zorunlu değildir.

Şunlar için arşiv/master referanstır:

- büyük planın wave'lere nasıl ayrıldığı,
- sequencing ve dependency düşüncesi,
- foundation / feature / runtime / cross-cutting kapanışların nasıl ayrıştığı,
- implementation ve QA derinliğinin bütün plan boyunca nasıl korunduğu.

Bu dosyadaki Vibehall scope'u, wave count/name, filenames, technologies, dates veya completion state başka projeye taşınamaz.

### `WAVE_MAP_REFERENCE.md`

Full `Design_Wave_Plan.md` içindeki decomposition yaklaşımının **compact point-of-use reference** sürümüdür.

WAVE_MAP generation checkpoint'inde okunması gereken map-quality referansı budur.

Özellikle şunları kalibre eder:

- meaningful delivery boundary,
- sequencing rationale,
- dependency/handoff reasoning,
- shared foundation before consuming feature,
- runtime/state foundation before specialized surfaces,
- feature delivery ile cross-cutting closure ayrımı,
- consolidation / regression / readiness / final-QA ayrımı.

Bu dosyadaki Vibehall wave listesi current project için hedef sayı veya scope değildir.

### `WAVE_07_HOME_REFERENCE.md`

UI / page / feature delivery için izole execution-depth örneğidir.

Özellikle şunları gösterir:

- exact dependencies,
- canonical/context reads,
- in-scope / out-of-scope ayrımı,
- implementation checklist'in dosya ve davranış seviyesine inmesi,
- data/service tüketimi,
- loading / empty / error / role / responsive / accessibility durumları,
- automated + manual QA,
- debug verification,
- measurable exit criteria.

### `WAVE_12_RUNTIME_REFERENCE.md`

Runtime / lifecycle / realtime / state-heavy bir wave için izole execution-depth örneğidir.

Özellikle şunları gösterir:

- authoritative state model,
- REST + realtime reconcile,
- duplicate/stale/out-of-order guard'ları,
- cleanup ve ownership,
- role/access boundaries,
- reconnect/context preservation,
- test/QA/exit criteria derinliği.

## Hard Reference Boundary

Reference artifacts **project authority değildir**.

MUST NOT:

- Vibehall project facts veya scope'unu yeni projeye taşımak,
- Vibehall wave count veya wave names'i model almak,
- aynı component/file path'lerini uydurmak,
- React/Socket.IO/YouTube veya başka Vibehall teknolojilerini yeni projede varsaymak,
- tamamlanmış `[x]` checklist'leri yeni wave'e kopyalamak,
- `QA-closed`, tarih, commit, test sonucu veya completion claim'i taşımak,
- ref'teki bir capability'yi current approved scope'a eklemek.

Reference'ten alınabilecek şeyler yalnız:

```text
planning depth
responsibility clarity
task granularity
dependency reasoning
state/role/edge-case coverage
verification depth
handoff clarity
implementation readiness
```

Yeni bir Product Engine WAVE_PLAN her zaman kendi canonical pre-execution state semantics'ini kullanır:

```text
Status = Ready for Execution | Pending Execution | Blocked
Implementation Checklist = [ ]
Acceptance / Exit Criteria = [ ]
Wave Result = pending / not executed
```

## Point-of-Use Usage

### WAVE_MAP checkpoint

Required order:

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh WAVE_MAP_TEMPLATE.md
→ current approved scope + authorities
→ generate only WAVE_MAP
```

Full `Design_Wave_Plan.md` master reference olarak dursa da runtime map calibration için compact `WAVE_MAP_REFERENCE.md` tercih edilir.

### Every WAVE_PLAN checkpoint

**Her dynamic plan ayrı checkpoint'tir.** Phase başında bir kez ref okuyup bütün planları batch yazmak geçersizdir.

Required order for each exact `WAVE_NN`:

```text
fresh WAVE_PLAN_TEMPLATE.md
→ exact parent WAVE_MAP entry
→ relevant isolated depth reference(s)
→ current project authorities
→ generate ONLY WAVE_NN
→ validate/repair
→ close checkpoint
```

UI/page/feature ağırlıklı wave için `WAVE_07_HOME_REFERENCE.md`, runtime/state-heavy wave için `WAVE_12_RUNTIME_REFERENCE.md`, hybrid wave için applicable olan iki ref birlikte kullanılabilir.

Reference read canonical template read-token yerine geçmez ve VAL-15 pairing evidence sayılmaz.

Current project scope, capabilities, architecture ve filenames yalnız current project authorities tarafından belirlenir.
