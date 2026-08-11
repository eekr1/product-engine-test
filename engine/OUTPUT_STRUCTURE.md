# Output Structure

## Amaç

Bu belge, validation'dan geçen Product Engine çıktısının fiziksel klasör yapısını, versioning/publication kurallarını ve agent-ready read-order organizasyonunu tanımlar.

Run kayıtları `runs/` altında kalır; final project package yalnız temiz proje dokümantasyonunu içerir.

---

# Canonical Published Output Structure

```text
outputs/<category>/<project-slug>/
├── latest/
│   ├── README.md
│   │
│   ├── ai/
│   │   ├── PROJECT_BRAIN.md
│   │   ├── PRODUCT_RULES.md
│   │   ├── TECH_CONTEXT.md
│   │   ├── PRODUCT_STRATEGY.md       (conditional)
│   │   ├── CURRENT_STATUS.md
│   │   ├── NEXT_TASKS.md
│   │   ├── AGENT_INSTRUCTIONS.md
│   │   └── DECISIONS.md
│   │
│   ├── project/
│   │   ├── PROJECT_PLAN.md
│   │   ├── DATA_MODEL.md              (conditional)
│   │   ├── API_CONTRACTS.md           (conditional)
│   │   ├── TEST_STRATEGY.md           (conditional)
│   │   ├── DEPLOYMENT.md              (conditional)
│   │   └── OPERATIONS.md              (conditional)
│   │
│   ├── design/                         (UI/UX applicable ise)
│   │   ├── DESIGN_RULES.md
│   │   ├── DESIGN_SYSTEM.md            (standard/full)
│   │   ├── GLOBAL_SHELL.md             (standard/full, applicable)
│   │   ├── SYSTEM_STATES.md            (standard/full, interactive UI)
│   │   ├── ADMIN_OPERATIONAL_DESIGN.md (full, conditional)
│   │   ├── pages/                      (standard/full, dynamic)
│   │   │   ├── <PAGE>_DESIGN_PACKAGE.md
│   │   │   └── ...
│   │   └── features/                   (full, dynamic/conditional)
│   │       ├── <FEATURE>_DESIGN_PACKAGE.md
│   │       └── ...
│   │
│   └── waves/
│       ├── WAVE_MAP.md
│       └── plans/
│           ├── WAVE_00.md
│           ├── WAVE_01.md
│           └── ...
│
└── versions/
    ├── v0.1/   # latest/ ile aynı canonical internal structure
    ├── v0.2/
    └── ...
```

`README.md` root output entry point olarak tek başına üstte kalır; diğer canonical belgeler owner category klasörlerine yerleşir.

---

## Category

```text
outputs/demos/
→ demo/prototype/early deliverable category

outputs/products/
→ implementation/production product deliverable category
```

Category primarily delivery context tarafından belirlenir; planning depth category'yi tek başına değiştirmez.

Örneğin:

```yaml
delivery_profile: Prototype
implementation_planning: standard
design_planning: light
```

çıktısı `demos/` altında olabilir ama yine agent-ready implementation planning belgelerini taşır.

---

# Owner Category → Output Path Mapping

```text
README-DOC      → /README.md

PROJECT-BRAIN   → /ai/PROJECT_BRAIN.md
PRODUCT-RULES   → /ai/PRODUCT_RULES.md
TECH-CTX        → /ai/TECH_CONTEXT.md
PROD-STRAT      → /ai/PRODUCT_STRATEGY.md
STATUS          → /ai/CURRENT_STATUS.md
TASKS           → /ai/NEXT_TASKS.md
AGENT-INST      → /ai/AGENT_INSTRUCTIONS.md
DECISIONS       → /ai/DECISIONS.md

PROJ-PLAN       → /project/PROJECT_PLAN.md
DATA            → /project/DATA_MODEL.md
API             → /project/API_CONTRACTS.md
TEST            → /project/TEST_STRATEGY.md
DEPLOY          → /project/DEPLOYMENT.md
OPS             → /project/OPERATIONS.md

DESIGN          → /design/DESIGN_RULES.md
DESIGN-SYSTEM   → /design/DESIGN_SYSTEM.md
GLOBAL-SHELL    → /design/GLOBAL_SHELL.md
SYSTEM-STATES   → /design/SYSTEM_STATES.md
ADMIN-DESIGN    → /design/ADMIN_OPERATIONAL_DESIGN.md
PAGE-DESIGN     → /design/pages/<PAGE_OR_SCREEN_SLUG>_DESIGN_PACKAGE.md
FEATURE-DESIGN  → /design/features/<FEATURE_SLUG>_DESIGN_PACKAGE.md

WAVE-MAP        → /waves/WAVE_MAP.md
WAVE-PLAN       → /waves/plans/WAVE_<NN>.md
```

Dynamic instance registry run manifest'te gerçek path'leriyle kaydedilir.

---

# Planning Profile Output Minimumları

## Implementation `standard`

Applicable projede final output en az şunları taşımalıdır:

```text
README.md
ai/PROJECT_BRAIN.md
ai/PRODUCT_RULES.md
ai/TECH_CONTEXT.md
ai/CURRENT_STATUS.md
ai/NEXT_TASKS.md
ai/AGENT_INSTRUCTIONS.md
ai/DECISIONS.md
project/PROJECT_PLAN.md
waves/WAVE_MAP.md
waves/plans/WAVE_<NN>.md  (WAVE_MAP'teki her implementation wave için)
```

`full` bu seti korur ve real scope koşullarına göre DATA/API/TEST/PROD-STRAT/DEPLOY/OPS ekler.

## Design `light`

```text
design/DESIGN_RULES.md
```

## Design `standard`

Applicable olduğunda:

```text
design/DESIGN_RULES.md
design/DESIGN_SYSTEM.md
design/GLOBAL_SHELL.md
design/SYSTEM_STATES.md
design/pages/*_DESIGN_PACKAGE.md
```

## Design `full`

Standard set korunur ve gerçek scope gerekliyse:

```text
design/features/*_DESIGN_PACKAGE.md
design/ADMIN_OPERATIONAL_DESIGN.md
```

eklenir.

---

# Root README / Agent Read Order

Published `README.md` yeni agent'a en az şu sırayı göstermelidir:

```text
1. README.md
2. ai/PROJECT_BRAIN.md
3. ai/PRODUCT_RULES.md
4. ai/TECH_CONTEXT.md
5. design/DESIGN_RULES.md                   (UI applicable)
6. design/DESIGN_SYSTEM.md + GLOBAL_SHELL  (if present)
7. relevant page/feature design package(s) (if present)
8. project/PROJECT_PLAN.md
9. waves/WAVE_MAP.md
10. ai/CURRENT_STATUS.md
11. active waves/plans/WAVE_<NN>.md
12. ai/NEXT_TASKS.md
13. ai/AGENT_INSTRUCTIONS.md
14. ai/DECISIONS.md and conditional technical docs as needed
```

Amaç bütün dosyaları her görevde zorla okutmak değil; agent'ın authority ve active execution context'i kaybetmemesidir.

---

# Final Output / Run Record Ayrımı

MUST NOT final output içinde bulunur:

```text
RUN_MANIFEST.md
RUN_LOG.md
INPUT_SNAPSHOT.md
ASSUMPTIONS.md (run operational copy)
CONFLICTS.md (run operational copy)
VALIDATION_REPORT.md
COMPLETION_REPORT.md
working-output/
```

Bunlar `runs/` katmanına aittir.

Proje-level `ai/DECISIONS.md` final output'tur; run-level `runs/.../DECISIONS.md` operasyonel kayıtla karıştırılmaz.

---

# Output Cleanliness

Final output MUST NOT içerir:

- template metadata veya placeholder,
- `[TBD]`, `[BURAYA YAZ]` gibi çözülmemiş zorunlu alan,
- başka proje içeriği,
- private chain-of-thought,
- run operasyon dosyası,
- çözülememiş critical conflict,
- gerçekmiş gibi yazılmış onaylanmamış backend/API/database/deployment kararı.

Unresolved fakat current scope'u bloklamayan future kararlar canonical owner belgede açıkça `unresolved / future` olarak tutulabilir.

---

# Versioning / Publication

Publication gate sonrası sıra:

```text
1. output_version numerik olarak tahsis edilir.
2. Clean package versions/<output_version>/ içine immutable olarak yazılır.
3. latest/ aynı canonical internal structure ile güncellenir.
4. RUN_MANIFEST output_version/output_ref ile dondurulur.
5. Run Completed olur ve runs/completed/ altına taşınır.
```

## Version Format

```text
v<major>.<minor>
```

İlk sürüm: `v0.1`.

Normal regeneration: minor +1.

Major artışı otomatik değildir; açık migration/release kararı gerekir.

Published version klasörü overwrite/silinemez.

Karşılaştırma numeriktir (`v0.9 < v0.10 < v1.0`).

---

# latest/ Integrity

`latest/`:

- en son **valid published** output'un kopyasıdır,
- failed/blocked/cancelled run tarafından güncellenemez,
- invalidated source run'a işaret edemez.

Latest source invalidated olursa önceki en yüksek valid Completed version restore edilir. Hiç valid version yoksa `latest/` boş tutulur; output katmanında ayrı fake status dosyası oluşturulmaz.

---

# Traceability

Her published version için run katmanından şu bilgiler izlenebilir olmalıdır:

```text
run_id
input_id / version
base package
delivery_profile
implementation_planning
design_planning
canonical document set
dynamic instance paths
validation result
output version
publication timestamp
```

---

# Agent-Ready Output Invariant

Final package yalnız "dokümanların bulunduğu klasör" değildir.

Yeni yetkin agent:

1. README ile read order'ı bulabilmeli,
2. PROJECT_BRAIN/PRODUCT_RULES/TECH_CONTEXT ile proje gerçekliğini anlayabilmeli,
3. UI varsa design authority ve ilgili page/feature contract'larını bulabilmeli,
4. PROJECT_PLAN/WAVE_MAP ile teslim yolunu anlayabilmeli,
5. CURRENT_STATUS ile aktif wave'i bulabilmeli,
6. aktif WAVE_<NN> + NEXT_TASKS ile yeni planlama yapmadan implementation'a başlayabilmelidir.

Bu invariant sağlanmıyorsa final output yapısal olarak eksiktir.
