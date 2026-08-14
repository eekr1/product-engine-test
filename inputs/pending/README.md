# Pending Inputs (`inputs/pending/`)

## 1. Amacı ve Tanımı

`inputs/pending/` henüz explicit user approval almamış proje girdilerinin çalışma alanıdır.

> Pending input generation source of truth değildir ve run başlatamaz.

---

## 2. IF YOU ARE HERE — Pending Router

```text
IF normalizing a new project:
→ re-open engine/PROJECT_INTAKE.md
→ re-open inputs/PROJECT_INPUT_TEMPLATE.md
→ preserve Original Brief
→ normalize required fields
→ compare PROJECT_INPUT section-by-section with template

IF required information is missing/uncertain:
→ re-open engine/ASSUMPTION_RULES.md
→ re-open engine/CONFLICT_RESOLUTION.md if needed
→ keep status pending
→ do NOT create approved version

IF ready for user approval:
→ re-check required sections + metadata + scope boundaries
→ present pending truth for explicit approval
→ approval must refer to project/input truth

IF user approves:
→ re-open inputs/approved/README.md
→ create immutable approved vN
```

### STOP CHECK

```text
STOP if:
- PROJECT_INPUT template required section is missing
- critical conflict/unresolved required field remains
- future/open scope silently became current scope
- approval is inferred from tool/plan/commit permission
- source_count/provenance does not match actual source set
```

---

## 3. Canonical Yapı

```text
inputs/pending/<project-slug>/
├── PROJECT_INPUT.md
├── sources/       [optional]
└── attachments/   [optional]
```

Aynı project slug için tek aktif pending revision tutulur.

---

## 4. Pending Agent Sorumlulukları

- Original Brief'i koru.
- Intake contract'a göre normalize et.
- Eksik alanları görünür bırak.
- Assumption/conflict kayıtlarını doğru contract'a göre ele al.
- Source/provenance bilgisini kaydet.
- Explicit user approval olmadan approved/run aşamasına geçme.

---

## 5. Pending → Approved Gate

Geçiş için hem içerik/intake koşulları hem explicit user approval gerekir. Approval olmadan `status: approved` ve `inputs/approved/` write yasaktır.
