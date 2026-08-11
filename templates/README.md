# Product Engine Templates

`templates/` Product Engine tarafından seçilmiş canonical document'ların ve destek artifact'lerinin **tek skeleton authority** katmanıdır.

Template selection kararı burada verilmez; `DOCUMENT_CATALOG.md`, package resolution ve planning profiles tarafından verilir.

---

# Template Kategorileri

```text
templates/
├── ai/
├── project/
├── design/
├── waves/
├── prompts/
└── runs/
```

## `ai/`

Canonical context/state/agent belgeleri:

```text
PROJECT_BRAIN_TEMPLATE.md
PRODUCT_RULES_TEMPLATE.md
TECH_CONTEXT_TEMPLATE.md
PRODUCT_STRATEGY_TEMPLATE.md
CURRENT_STATUS_TEMPLATE.md
NEXT_TASKS_TEMPLATE.md
DECISIONS_TEMPLATE.md
AGENT_INSTRUCTIONS_TEMPLATE.md
```

## `project/`

Project architecture/delivery belgeleri:

```text
README_TEMPLATE.md
PROJECT_PLAN_TEMPLATE.md
DATA_MODEL_TEMPLATE.md
API_CONTRACTS_TEMPLATE.md
TEST_STRATEGY_TEMPLATE.md
DEPLOYMENT_TEMPLATE.md
OPERATIONS_TEMPLATE.md
```

Structural support template'leri (örn. `.env.example`) catalog document değildir.

## `design/`

Canonical design document skeleton'ları:

```text
DESIGN_RULES_TEMPLATE.md                 → DESIGN
DESIGN_SYSTEM_TEMPLATE.md                → DESIGN-SYSTEM
GLOBAL_SHELL_TEMPLATE.md                 → GLOBAL-SHELL
PAGE_DESIGN_PACKAGE_TEMPLATE.md          → PAGE-DESIGN dynamic instances
FEATURE_DESIGN_PACKAGE_TEMPLATE.md       → FEATURE-DESIGN dynamic instances
SYSTEM_STATES_TEMPLATE.md                → SYSTEM-STATES
ADMIN_OPERATIONAL_TEMPLATE.md            → ADMIN-DESIGN
```

Diğer component/asset structural helper template'leri varsa yalnız destek yapısıdır; canonical Document ID yerine geçmez.

### Dynamic Design Single-Skeleton Rule

```text
PAGE_DESIGN_PACKAGE_TEMPLATE
→ HOME_DESIGN_PACKAGE.md
→ ROOM_DESIGN_PACKAGE.md
→ SERVICES_DESIGN_PACKAGE.md

FEATURE_DESIGN_PACKAGE_TEMPLATE
→ MATCHING_FLOW_DESIGN_PACKAGE.md
→ ROOM_LIFECYCLE_DESIGN_PACKAGE.md
```

Her instance aynı canonical ID/template'i kullanır. Yeni page/feature için alternatif schema/template oluşturulmaz.

## `waves/`

```text
WAVE_MAP_TEMPLATE.md   → bütün proje wave architecture
WAVE_PLAN_TEMPLATE.md  → her WAVE_<NN>.md dynamic execution plan instance
```

Tek canonical wave-plan skeleton vardır. Yeni wave için yeni template oluşturulmaz.

## `prompts/`

Runtime/project execution prompt helper'larıdır. Product Engine authority contract'larını ezemez.

## `runs/`

Run operational record template'leridir. Final project output'a sızmaz.

---

# Template Types

```text
document
→ tek canonical document output

dynamic-document
→ tek canonical Document ID/template'den birden fazla project-specific instance

structural
→ catalog dışı yardımcı yapı / support artifact

prompt
→ model-independent execution instruction

operational
→ run evidence / manifest / report
```

---

# Metadata Standardı

Canonical document template metadata'sı ihtiyaç kadar şu alanları kullanır:

```yaml
template_id: <unique>
template_name: <name>
document_id: <CATALOG-ID>
version: <semver>
status: active
template_type: document | dynamic-document
category: ai | project | design | waves
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_implementation_planning:
  - standard
  - full
supported_design_planning:
  - light
  - standard
  - full
required_inputs: []
conditional_inputs: []
dependencies: []
output_filename: <file>
# veya dynamic:
output_filename_pattern: <pattern>
```

Bir template yalnız ilgili planning axis applicable ise o metadata alanını taşımalıdır.

---

# Delivery Profile Normalization

Template metadata machine-form:

```text
Foundation           → foundation
Prototype            → prototype
Implementation Ready → implementation-ready
Production Ready     → production-ready
```

Project truth içinde canonical Title Case korunur.

Planning profile değerleri zaten canonical lowercase enum'dur:

```text
implementation: standard | full
design: light | standard | full
```

---

# Single-Skeleton Invariant

MUST NOT:

- aynı Document ID için iki active canonical template,
- page-specific ayrı schema template,
- feature-specific ayrı schema template,
- her wave için farklı template,
- `STANDARD_WAVE_TEMPLATE` gibi WAVE_PLAN ile paralel ikinci skeleton,
- `PAGE_SPEC_TEMPLATE` gibi PAGE-DESIGN ile aynı responsibility'yi taşıyan paralel active skeleton.

---

# Placeholder / Conditional Standard

```text
{{PLACEHOLDER_NAME}}
[CONDITIONAL: include only if <condition>]
```

Final output'ta template placeholder veya metadata kalamaz.

---

# Generation Reference Order

```text
1. DOCUMENT_CATALOG
2. PLANNING_PROFILES / resolved package + overlay
3. INFORMATION_MAP
4. selected canonical template
5. dependency templates
6. approved input + resolved instance context
7. generate working output
8. validate
```

Runtime full order `engine/GENERATION_PIPELINE.md` authority'sidir.

---

# Quality Invariants

Template hiçbir profile için kaliteyi düşüren talimat veremez.

```text
Prototype ≠ throwaway
light design ≠ generic/basic
full ≠ generate everything
integration-ready ≠ invent backend
```
