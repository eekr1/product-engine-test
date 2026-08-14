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

Vibehall'ın gerçek full wave planıdır.

Şunlar için referanstır:

- büyük planın wave'lere nasıl ayrıldığı,
- sequencing ve dependency düşüncesi,
- foundation / feature / runtime / cross-cutting kapanışların nasıl ayrıştığı,
- her wave'in neden o sırada geldiğinin açıklanması,
- scope dışı alanların bilinçli biçimde korunması,
- implementation ve QA derinliğinin bütün plan boyunca tutarlı kalması.

Bu dosyadaki `Wave 00–29`, Vibehall isimleri, dosya yolları, component'ler, stack, test sayıları, tarihler veya completion state'leri başka projeye taşınamaz.

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

## Usage

Wave planning phase'ine girildiğinde agent bu README'yi quality-reference boundary olarak okur.

- WAVE_MAP hazırlanırken `Design_Wave_Plan.md` yalnız decomposition / sequencing / dependency kalite referansı olarak kullanılabilir.
- WAVE_PLAN hazırlanırken iki izole reference wave, **detay seviyesini kalibre etmek** için okunur.
- Her gerçek WAVE_PLAN write öncesindeki fresh `WAVE_PLAN_TEMPLATE.md` read zorunluluğu aynen devam eder.
- Reference read, canonical template read-token yerine geçmez ve VAL-15 pairing evidence sayılmaz.

Current project scope, capabilities, architecture ve filenames yalnız current project authorities tarafından belirlenir.
