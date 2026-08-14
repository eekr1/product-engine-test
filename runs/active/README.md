# Product Engine — Active Runs Katmanı (`runs/active/`)

## 1. Amaç ve Kapsam

`runs/active/` henüz terminal duruma ulaşmamış run'ların operasyonel çalışma alanıdır.

---

## 2. IF YOU ARE HERE — Active Run Router

```text
IF run is being initialized:
→ re-open engine/RUN_PROTOCOL.md
→ re-open templates/runs/RUN_MANIFEST_TEMPLATE.md
→ create manifest

IF creating INPUT_SNAPSHOT:
→ re-open templates/runs/INPUT_SNAPSHOT_TEMPLATE.md
→ re-open exact approved PROJECT_INPUT
→ generate snapshot
→ compare output section-by-section with template
→ STOP if Approved Scope Registry or any required field is missing

IF creating SOURCE_REGISTER:
→ re-open templates/runs/SOURCE_REGISTER_TEMPLATE.md
→ resolve actual consumed/registered sources
→ materialize claim_scope + FCL structure required by current template
→ STOP if exact evidence/support fields are missing

IF generating project artifacts:
→ re-open engine/GENERATION_PIPELINE.md
→ re-open templates/README.md
→ re-open exact selected template for EACH artifact/instance
→ write only under working-output/

IF generating WAVE plans:
→ re-open WAVE_PLAN_TEMPLATE before EACH WAVE instance
→ one template read = one instance checkpoint

IF validating:
→ re-open engine/VALIDATION_RULES.md
→ re-open VALIDATION_REPORT_TEMPLATE.md
→ materialize every mandatory evidence block
→ missing evidence block means corresponding gate cannot PASS

IF validation is PASS/accepted CONDITIONAL PASS and publication is eligible:
→ re-open engine/OUTPUT_STRUCTURE.md
→ publish only from validated working-output

IF closing/moving the run:
→ re-open engine/RUN_PROTOCOL.md
→ finalize manifest/progress/log/completion first
→ only then move physical run folder
```

### STOP CHECK

```text
STOP if:
- current artifact was generated from memory instead of exact template
- required operational template section is missing
- SCP/FCL/evidence structures required by current template are absent
- future/open/non-executable scope is being committed
- validation claims PASS without required evidence blocks
- published output is being written before validation eligibility
```

Bu README navigation/checkpoint katmanıdır; canonical rules ilgili engine contract ve template dosyasındadır.

---

## 3. Barındırılan Run Durumları

`Created`, `Initialized`, `Running`, `Blocked`, `Paused`, `Resumed`, `Validation` durumundaki run'lar burada bulunabilir. Logical status authority `RUN_MANIFEST.md`, lifecycle authority `engine/RUN_PROTOCOL.md`'dir.

---

## 4. Active Run İçi Yapı

```text
runs/active/<run-id>/
├── RUN_MANIFEST.md
├── INPUT_SNAPSHOT.md
├── PACKAGE_SELECTION.md
├── SOURCE_REGISTER.md
├── ASSUMPTIONS.md
├── CONFLICTS.md
├── DECISIONS.md
├── RUN_LOG.md
├── PROGRESS.md
├── VALIDATION_REPORT.md
├── COMPLETION_REPORT.md
└── working-output/
```

Her operational belgenin yapısal kaynağı `templates/runs/` altındaki exact current template'tir.

---

## 5. Working Output İzolasyonu

Üretilen project artifacts yalnız `runs/active/<run-id>/working-output/` altında oluşturulur. `outputs/` generation workspace değildir.

---

## 6. No Orphan Runs

Run yarım kalırsa uygun logical status kaydedilir. Terminal kapanış tamamlanmadan folder taşınmaz; tamamlanan run `completed/`, failed/cancelled run `failed/` fiziksel bucket'ına bütün olarak taşınır.
