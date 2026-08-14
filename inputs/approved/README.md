# Approved Inputs (`inputs/approved/`)

## 1. Amacı ve Tanımı

`inputs/approved/` explicit user approval almış immutable project truth sürümlerinin saklandığı alandır.

> Product Engine run'ları yalnız geçerli approved input üzerinden başlar.

---

## 2. IF YOU ARE HERE — Approved Router

```text
IF creating approved vN:
→ confirm explicit user approval exists
→ re-open PROJECT_INPUT_TEMPLATE.md
→ compare final approved artifact section-by-section
→ write new immutable vN
→ never mutate older approved versions

IF starting a run from approved truth:
→ resolve exact highest/current vN intended for this run
→ re-open engine/RUN_PROTOCOL.md
→ re-open templates/runs/INPUT_SNAPSHOT_TEMPLATE.md
→ create immutable run INPUT_SNAPSHOT
→ compare snapshot against template before continuing

IF approved truth changes later:
→ return to pending
→ create next candidate version
→ require new explicit approval
→ do not mutate current run snapshot
```

### STOP CHECK

```text
STOP if:
- approved version is being edited in place
- approval evidence is implicit/tool-derived
- required approved PROJECT_INPUT section is missing
- run snapshot omits required current template structures
- a newer approved version is silently injected into an active run
```

---

## 3. Canonical Yapı

```text
inputs/approved/<project-slug>/
├── v1/PROJECT_INPUT.md
├── v2/PROJECT_INPUT.md
└── ...
```

## 4. Immutability

Approved version yerinde değiştirilmez. Yeni truth yeni pending candidate → explicit approval → yeni `vN` ile temsil edilir.

## 5. Current Approved Version

Varsayılan aktif approved truth, project slug altındaki en yüksek `vN` sürümüdür; ancak run manifest hangi exact input version ile başlatıldığını dondurur.

## 6. Approved Input vs Run Snapshot

```text
inputs/approved/<project>/vN/PROJECT_INPUT.md
→ reusable approved project truth

runs/active/<run-id>/INPUT_SNAPSHOT.md
→ run-specific immutable operational snapshot
```

Bu iki katman birbirinin yerine geçmez.
