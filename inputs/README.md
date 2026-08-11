# Inputs Katmanı — Project Truth Management

## Amaç

`inputs/` Product Engine'in kullanıcıdan gelen proje bilgisini normalize ettiği, pending olarak netleştirdiği ve canonical explicit approval sonrasında immutable approved truth snapshot'larına dönüştürdüğü giriş katmanıdır.

Bu klasör **package seçmez, doküman üretmez veya run yönetmez**.

Authority ayrımı:

```text
engine/PROJECT_INTAKE.md
→ hangi alanların gerekli olduğu ve approval gate

engine/PLANNING_PROFILES.md
→ implementation/design planning profile semantiği

inputs/
→ bu alanların proje-specific pending/approved truth kayıtları

engine/PACKAGE_RULES.md + packages/
→ approved truth'tan document set çözümleme

runs/
→ belirli run için immutable operational snapshot
```

---

## Canonical Klasör Yapısı

```text
inputs/
├── README.md
├── PROJECT_INPUT_TEMPLATE.md
├── pending/
│   ├── README.md
│   └── <project-slug>/
│       └── PROJECT_INPUT.md
└── approved/
    ├── README.md
    └── <project-slug>/
        ├── v1/PROJECT_INPUT.md
        ├── v2/PROJECT_INPUT.md
        └── ...
```

Alternatif flat/history yapısı yoktur.

---

## Lifecycle

```text
Raw Project Information
        ↓
Normalization
        ↓
Pending Input
        ↓
Clarification / Assumption / Conflict Resolution
        ↓
Canonical Explicit User Approval
        ↓
Approved Input vN
        ↓
Run INPUT_SNAPSHOT
```

`pending` input ile generation run başlatılamaz.

---

## Canonical Metadata

```yaml
input_id: INPUT-EXAMPLE-PROJECT-V1
project_name: Example Project
project_slug: example-project
input_version: "1"
status: approved # pending | approved
project_type: web-app
project_state: new # new | existing
delivery_profile: Prototype
implementation_planning: standard # standard | full
design_planning: light # light | standard | full | N/A only if UI/UX not applicable
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

- `implementation_planning` bütün implementation-bearing projelerde zorunludur.
- Canonical değerler yalnız `standard | full`.
- UI/UX applicable projelerde `design_planning` zorunludur.
- Canonical design değerleri yalnız `light | standard | full`.
- `none` adlı design profile yoktur.
- UI/UX applicable değilse metadata'da operasyonel gösterim için `N/A` kullanılabilir; bu yeni profile değildir.
- Delivery profile planning depth yerine geçmez.

---

## Pending vs Approved

### Pending

- değiştirilebilir,
- missing/uncertain alan taşıyabilir,
- profile önerileri taşıyabilir,
- generation source of truth değildir.

### Approved

- tüm MUST alanları kesinleşmiştir,
- planning profile'lar kesinleşmiştir,
- critical conflict çözülmüştür,
- canonical explicit user approval alınmıştır,
- immutable logical version'dır,
- generation source of truth'tur.

---

## Explicit Approval Integrity

Geçerli approval yalnız kullanıcının pending intake/proje kararlarını doğrudan onaylayan mesajıdır.

Geçerli approval değildir:

```text
IDE auto-approve
plan approval
file/tool permission
terminal/patch approval
commit/push izni
agent'ın kendi planını tamamlaması
implicit/silent approval
```

Canonical approval yoksa:

- `status: pending` kalır,
- `approved_at` / `approved_by` boş kalır,
- `inputs/approved/` snapshot'ı oluşturulmaz,
- run başlatılmaz.

---

## Versioning / Immutability

Approved input yerinde overwrite edilmez.

```text
v1 approved
↓ değişiklik gerekir
pending v2 candidate
↓ explicit approval
v2 approved, supersedes: INPUT-...-V1
```

Eski approved sürüm fiziksel olarak değiştirilmez.

Aktif approved truth, `<project-slug>/` altındaki en yüksek `vN` sürümüdür.

Run başladıktan sonra yeni approved input sürümü oluşursa aktif run snapshot'ı değişmez; yeni truth ile çalışmak için yeni run gerekir.

---

## Canonical PROJECT_INPUT İçerik Yapısı

`PROJECT_INPUT_TEMPLATE.md` tek skeleton'dır ve şu bilgi ailelerini kapsar:

1. Original Brief
2. Project Identity & Planning Profiles
3. Problem / Purpose / Success
4. Target Users & Core Flows
5. Scope Boundaries
6. Existing Project Context
7. Technical Context & Integration Readiness
8. Design Context
9. Sources & Provenance
10. Known Decisions
11. Assumptions
12. Conflicts
13. Open Questions
14. Approval & Verification

Aynı truth'un paralel JSON/YAML/Markdown kopyaları oluşturulmaz.

---

## Demo / Prototype Truth Kuralı

`Prototype` veya demo context:

```text
scope maturity'yi sınırlar
≠
architecture quality'yi düşürür
```

Approved input'ta gerçek backend scope değilse:

- backend/API/database uydurulmaz,
- current data source yazılır,
- service/data boundary beklentisi yazılır,
- future integration context ayrı tutulur,
- unresolved teknik kararlar görünür kalır.

---

## Design Context Kuralı

Design input; brand fact ile yaratıcı design synthesis'i ayırmalıdır.

```text
brand/user-provided fact
→ authoritative source

Engine'in ürettiği visual concept
→ design decision / synthesis
```

Sektör klişesi tek başına design truth değildir.

---

## Security / Portability

MUST NOT:

- password, token, private key, API secret saklamak,
- `file:///C:/...` gibi machine-dependent path kullanmak,
- future scope'u current truth gibi göstermek,
- unresolved critical conflict ile approved snapshot oluşturmak.

Repo-relative path ve secret variable name referansları kullanılabilir.

---

## Run Snapshot Ayrımı

```text
inputs/approved/<project>/vN/PROJECT_INPUT.md
→ reusable project truth

runs/active/<run-id>/INPUT_SNAPSHOT.md
→ o run başladığı andaki immutable operational truth
```

Bu iki katman birbirinin yerine kullanılamaz.
