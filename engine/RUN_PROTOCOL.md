# Run Protocol

## Amaç

Tek bir Product Engine run'ının operasyonel yaşam döngüsünü, snapshot'larını, kayıtlarını ve kapanış konumunu tanımlar.

Generation mantığı `GENERATION_PIPELINE.md`'ye, final path authority ise `OUTPUT_STRUCTURE.md`'ye aittir.

Run kayıtları private reasoning içermez; yalnız sonuç, kısa gerekçe, karar provenance'ı ve izlenebilir metadata tutulur.

---

# Run Klasör Yapısı

```text
runs/
├── active/
├── completed/
└── failed/
```

Active run minimumu:

```text
RUN_MANIFEST.md
INPUT_SNAPSHOT.md
PACKAGE_SELECTION.md
SOURCE_REGISTER.md
ASSUMPTIONS.md
CONFLICTS.md
DECISIONS.md
RUN_LOG.md
PROGRESS.md
VALIDATION_REPORT.md
COMPLETION_REPORT.md
working-output/
```

## Location Exclusivity

Aynı run ID aynı anda yalnız bir lifecycle klasöründe bulunabilir:

```text
active OR completed OR failed
```

Completion/failure fiziksel move'dur; active kopya kalamaz.

---

# Run Başlatma

Generation run yalnız:

1. explicit user approval almış approved input,
2. canonical planning profile alanları,
3. aynı proje/scope için çakışmayan active run

varsa başlatılır.

Approved snapshot'tan en az:

```text
input_id / input_version
project_slug
project_type
project_state
delivery_profile
implementation_planning
design_planning (UI ise)
```

dondurulur. Run başladıktan sonra input snapshot mutate edilmez.

## Run ID

```text
RUN-<YYYYMMDD>-<sequence>
```

Immutable ve benzersizdir.

---

# Lifecycle

```text
Created → Initialized → Running → Validation → Completed
```

Alternatif durumlar:

```text
Blocked
Paused / Resumed
Failed
Cancelled
Invalidated
```

Vocabulary dışı lifecycle status icat edilmez.

---

# Writable / Protected Surfaces

Normal project generation run'ı yalnız proje/run/output operasyon yüzeylerine yazabilir.

Writable örnekler:

```text
inputs/
runs/
outputs/
logs/RUN_INDEX.md
```

Protected Engine surfaces:

```text
PRODUCT_ENGINE_BRAIN.md
root README engine-version authority
engine/
packages/
templates/
logs/ENGINE_CHANGELOG.md
```

Protected yüzeyler project run sırasında read-only'dir. Bunlar yalnız explicit Engine maintenance/hardening/version-change çalışmasında değiştirilebilir.

Bir project run'ın başarıyla tamamlanması kendi başına `ENGINE_CHANGELOG.md` girdisi üretmez. Tek-run operational history `RUN_INDEX.md` / run records içinde tutulur.

---

# RUN_MANIFEST

En az:

```text
run_id
status
timestamps
agent_id
project_slug
input id/version
selected_package
delivery_profile
implementation_planning
design_planning
canonical documents
dynamic instance paths
validation_result
output_version
output_ref
latest_ref
```

Manifest profile değerleri INPUT_SNAPSHOT ile eşleşmelidir.

---

# PACKAGE_SELECTION

Kayıt şunları taşır:

```text
base package
extensions/context
planning overlay
resolved canonical document IDs
include/exclude decisions
dynamic instance resolution
resolved output paths
```

## Canonical Path Recording Rule

`PACKAGE_SELECTION`, `RUN_MANIFEST`, `PROGRESS`, `COMPLETION_REPORT` ve diğer operational records path vocabulary'si icat edemez.

Her path:

```text
engine/OUTPUT_STRUCTURE.md
+
resolved Document owner category
+
real generated instance path
```

kaynağından türetilir.

Örnek canonical paths:

```text
project/PROJECT_PLAN.md
design/DESIGN_RULES.md
waves/WAVE_MAP.md
waves/plans/WAVE_00.md
ai/CURRENT_STATUS.md
```

Operational record ile working/final output path'i çelişirse validation FAIL olmalıdır.

---

# SOURCE / ASSUMPTION / CONFLICT / DECISION RECORDS

- `SOURCE_REGISTER` içindeki `SRC-*` identities yalnız bağımsız **factual project sources** veya explicit factual enrichment sources olabilir.
- Normal source-closed project-start run'ında project source file primary factual source'tur.
- Approved `PROJECT_INPUT` ve `INPUT_SNAPSHOT` source truth'un approved/frozen türev authority'leridir; `SRC-*` factual source identity değildir.
- `engine/*`, `packages/*`, `templates/*`, planning overlays ve runtime contracts okunabilir authority/schema'dır; `SRC-*` factual source identity değildir.
- `ref/` materyali Reference Only quality calibration'dır; project truth veya factual source değildir.
- Template/version, ref usage ve authority read kayıtları SOURCE_REGISTER içinde ayrı operational tablolar halinde tutulabilir fakat `SOURCE_REGISTER_SOURCE_SET` içine alınamaz.
- FCL provenance exact `PROJECT_SOURCE` evidence üzerinden kurulmalıdır; yalnız approved input/package/engine evidence'ına dayanamaz.
- ASSUMPTIONS `ASSUMPTION_RULES.md`'ye uyar.
- CONFLICTS `CONFLICT_RESOLUTION.md`'ye uyar.
- Run DECISIONS operasyonel kararlardır; final `ai/DECISIONS.md` ile aynı dosya değildir.
- Karar provenance'ı kullanıcı onayı ile Engine resolution'ı birbirine karıştırmamalıdır.

Canonical normal-run truth chain:

```text
PROJECT_SOURCE factual evidence
→ APPROVED_PROJECT_INPUT approval/filter boundary
→ INPUT_SNAPSHOT frozen derivative
→ SOURCE_REGISTER/FCL from PROJECT_SOURCE evidence
→ generated artifacts
```

---

# Operational Artifact Point-of-Use Rule

Operational record'lar da template bypass edemez.

Bir templated operational artifact yazılmadan hemen önce kendi canonical template'i fresh-read edilmelidir. Önceki artifact için yapılan template read sonraki artifact için reusable değildir.

Özellikle:

```text
SOURCE_REGISTER write
→ fresh templates/runs/SOURCE_REGISTER_TEMPLATE.md
→ exact project source + approved derivative authorities
→ write SOURCE_REGISTER

VALIDATION_REPORT write
→ fresh templates/runs/VALIDATION_REPORT_TEMPLATE.md
→ engine/VALIDATION_RULES.md
→ current validation target/evidence
→ write VALIDATION_REPORT
```

Canonical template okunmadan stale schema/memory ile operational artifact yazılamaz.

`VALIDATION_REPORT` current `VAL-01..VAL-19` gate setini eksiksiz temsil etmelidir. `VAL-15 = UNVERIFIED` ise overall result `PASS` olamaz; canonical semantics uygulanır.

---

# Progress / Blocking

Progress gerçek stage ve dynamic coverage'ı gösterir:

```text
WAVE plans: N/N
Page design: N/N
Feature design: N/N
```

Execution-critical clarification gerekiyorsa run `Blocked`/uygun stop state'e geçer; output executable gibi gösterilmez.

Approved scope/profile değişikliği gerekiyorsa yeni input version + yeni run açılır.

---

# Validation / Publication / Completion

Başarılı kapanış sırası:

```text
1. Required docs + instances üretildi.
2. Validation PASS / accepted non-blocking CONDITIONAL PASS.
3. output_version tahsis edildi.
4. OUTPUT_STRUCTURE ile versions/<version>/ yayınlandı.
5. latest/ güncellendi.
6. Manifest/output refs donduruldu.
7. Completion report yazıldı.
8. Operational closure state'leri Completed gerçekliğine güncellendi.
9. Run completed klasörüne move edildi.
10. active kopyanın olmadığı doğrulandı.
```

`CONDITIONAL PASS` publication için validation sonrasında verilmiş explicit user/operator acceptance event'i zorunludur. Intake/plan approval bu acceptance yerine geçmez; event yoksa output publish edilmez ve run Completed'a kapatılamaz.

## Operational Closure Integrity

Run fiziksel olarak `runs/completed/<run-id>/` altına taşınmadan önce mevcut operational records kapanış state'iyle uyumlu hale getirilir.

Minimum successful completion consistency:

```text
RUN_MANIFEST.status = Completed
PROGRESS.status = Completed
RUN_LOG final lifecycle event = Completed
VALIDATION_REPORT = PASS | accepted CONDITIONAL PASS
COMPLETION_REPORT = successful completion
```

`PROGRESS.md` içindeki coverage/evidence geçmişi korunur; yalnız run-level lifecycle status kapanış gerçekliğine güncellenir.

```text
runs/completed/<run-id>/ + Status: Running → INVALID
runs/completed/<run-id>/ + Status: Validation → INVALID
runs/completed/<run-id>/ + operational records disagree → INVALID
```

Bu kapanış güncellemeleri move'dan **önce** yapılmalıdır. Dosyaları completed klasörüne taşımak tek başına lifecycle completion değildir.

FAIL run final output yayınlamaz ve failed lifecycle location'a taşınır. Failed move öncesinde operational records da Failed gerçekliğine güncellenmelidir.

Completed run sonradan invalidated olabilir; history silinmez ancak invalid output `latest/` olarak kalamaz.

---

# Final Output Boundary

```text
runs/    → execution evidence
outputs/ → clean agent-ready project package
```

Run/working/temp artifact final output'a sızamaz.
