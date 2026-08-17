# Inputs Katmanı — Project Truth Management

## Amaç

`inputs/` Product Engine'in kullanıcıdan gelen proje bilgisini normalize ettiği, pending olarak netleştirdiği ve canonical explicit approval sonrasında immutable approved truth snapshot'larına dönüştürdüğü giriş katmanıdır.

Bu klasör package seçmez, doküman üretmez veya run yönetmez.

Authority ayrımı:

```text
engine/PROJECT_INTAKE.md
→ required fields + project type vocabulary + approval gate

engine/SITE_ARCHITECTURE_RULES.md
→ corporate website page/surface semantics

engine/PLANNING_PROFILES.md
→ planning profile semantics

inputs/
→ project-specific pending/approved truth values

engine/PACKAGE_RULES.md + packages/
→ approved truth'tan domain/document resolution

runs/
→ immutable operational run snapshot
```

---

## Canonical Klasör Yapısı

```text
inputs/
├── README.md
├── PROJECT_INPUT_TEMPLATE.md
├── pending/
│   └── <project-slug>/PROJECT_INPUT.md
└── approved/
    └── <project-slug>/
        ├── v1/PROJECT_INPUT.md
        ├── v2/PROJECT_INPUT.md
        └── ...
```

---

## Lifecycle

```text
Raw Project Information
→ Normalization
→ Pending Input
→ Clarification / Proposal / Assumption / Conflict Resolution
→ Canonical Explicit User Approval
→ Approved Input vN
→ Run INPUT_SNAPSHOT
```

Pending input generation source of truth değildir.

---

## Canonical Metadata

```yaml
input_id: INPUT-EXAMPLE-PROJECT-V1
project_name: Example Project
project_slug: example-project
input_version: "1"
status: approved
project_type: corporate-website
project_state: new
delivery_profile: Prototype
implementation_planning: standard
design_planning: standard
primary_language: tr
created_at: <ISO-8601>
updated_at: <ISO-8601>
approved_at: <ISO-8601>
approved_by: user
supersedes: ""
source_type: user-provided
source_count: 1
```

### Planning Profile Kuralları

- `implementation_planning`: `standard | full`.
- UI/UX applicable ise `design_planning`: `light | standard | full`.
- `none` canonical profile değildir.
- Delivery profile planning/page breadth yerine geçmez.
- Multi-page corporate website için default intake recommendation `design_planning: standard`dır; final value explicit approval ile kesinleşir.

---

## Corporate Website Site Architecture Truth

`project_type: corporate-website` için approved `PROJECT_INPUT` Site Architecture bölümü zorunludur.

Minimum registry:

```text
Page ID
Page Name
Purpose
Route / Navigation Identity
Scope Status
Primary Content / Capability Boundaries
Parent / Detail Relation
```

Rules:

```text
corporate website ≠ landing page
pending proposal ≠ approved architecture
Prototype/demo ≠ page reduction
approved distinct page ≠ anchor section
```

Source exact page list vermiyorsa pending input Proposed Site Architecture taşıyabilir. Bu proposal ancak user explicit approval sonrasında approved truth olur.

Approved project-specific truth owner:

```text
inputs/approved/<project>/vN/PROJECT_INPUT.md
```

Semantics owner:

```text
engine/SITE_ARCHITECTURE_RULES.md
```

Downstream GLOBAL_SHELL/PAGE-DESIGN/WAVE_MAP/WAVE_PLAN yeni PAGE identity icat edemez.

---

## Pending vs Approved

### Pending

- değiştirilebilir,
- missing/uncertain field taşıyabilir,
- planning profile proposal taşıyabilir,
- corporate website ise Proposed Site Architecture taşıyabilir,
- generation authority değildir.

### Approved

- all MUST fields resolved,
- planning profiles resolved,
- corporate website ise PAGE registry resolved,
- critical conflicts resolved,
- canonical explicit user approval recorded,
- immutable logical version,
- generation source of truth.

---

## Explicit Approval Integrity

Geçerli approval yalnız user'ın pending intake/proje kararlarını doğrudan onaylayan mesajıdır.

Geçerli approval değildir:

```text
IDE auto-approve
plan approval
file/tool permission
terminal/patch approval
commit/push izni
agent self-completion
implicit/silent approval
```

Corporate page proposal da aynı gate'e tabidir.

Canonical approval yoksa:

- `status: pending`,
- `approved_at` / `approved_by` boş,
- approved snapshot yok,
- run yok.

---

## Versioning / Immutability

Approved input overwrite edilmez.

```text
v1 approved
↓ truth değişikliği
pending v2
↓ explicit approval
v2 approved, supersedes v1
```

Approved site architecture değişikliği de yeni input version gerektirir.

---

## Canonical PROJECT_INPUT İçerik Yapısı

`PROJECT_INPUT_TEMPLATE.md` tek skeleton'dır:

1. Original Brief
2. Project Identity & Planning Profiles
3. Problem / Purpose / Success
4. Target Users & Core Flows
5. Scope Boundaries
6. Site Architecture
7. Existing Project Context
8. Technical Context & Integration Readiness
9. Design Context
10. Sources & Provenance
11. Known Decisions
12. Assumptions
13. Conflicts
14. Open Questions
15. Approval & Verification

Aynı truth'un paralel JSON/YAML/Markdown source-of-truth kopyası oluşturulmaz.

---

## Demo / Prototype Truth Kuralı

```text
Prototype/demo
→ delivery maturity
≠ architecture quality reduction
≠ approved page/scope breadth reduction
```

Gerçek backend current scope değilse backend/API/database uydurulmaz; clean service/data boundary ve future integration context korunur.

---

## Design Context Kuralı

```text
brand/user-provided fact → authoritative source
Engine visual concept     → design decision/synthesis
```

Sektör klişesi design truth değildir. Approved page architecture visual convenience için küçültülemez.

---

## Security / Portability

MUST NOT:

- secret/token/password saklamak,
- machine-dependent absolute path,
- future scope'u current truth gibi göstermek,
- unresolved critical conflict ile approved snapshot,
- proposed corporate page architecture'ı silent approved truth yapmak.

---

## Run Snapshot Ayrımı

```text
inputs/approved/<project>/vN/PROJECT_INPUT.md
→ reusable approved project truth

runs/active/<run-id>/INPUT_SNAPSHOT.md
→ exact run-start immutable operational snapshot
```

Bu iki katman birbirinin yerine kullanılamaz.
