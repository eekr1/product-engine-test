# Product Engine — Outputs Demos Kategorisi Rehberi

## 1. Amaç ve Kapsam

`outputs/demos/` yalnız doğrulanmış ve yayınlanmaya uygun demo deliverable'larının saklandığı final output alanıdır.

> Bu klasör generation workspace değildir.

---

## 2. IF YOU ARE HERE — Publication Router

```text
IF you are still generating documents:
→ STOP
→ return to runs/active/<run-id>/working-output/

IF validation has not completed:
→ STOP
→ re-open engine/VALIDATION_RULES.md
→ validate working-output first

IF validation is CONDITIONAL PASS:
→ verify canonical acceptance requirement is satisfied
→ do not self-accept evidence limitation

IF publication is eligible:
→ re-open engine/OUTPUT_STRUCTURE.md
→ resolve category + project slug + output version
→ publish immutable versions/<version>/ first
→ verify copied package completeness
→ update latest/ from published valid version
→ only then continue run completion
```

### STOP CHECK

```text
STOP publication if:
- validation target was published output instead of working-output
- blocking gate is FAIL/UNVERIFIED without required resolution
- required validation evidence blocks are missing
- output version already exists and would be overwritten
- working/runtime files are leaking into final output
- latest/ would point to partial or unvalidated content
```

Bu README publication navigation sağlar; canonical publication contract `engine/OUTPUT_STRUCTURE.md` ve lifecycle contract `engine/RUN_PROTOCOL.md` içindedir.

---

## 3. Klasör Yapısı

```text
outputs/demos/<project-slug>/
├── latest/
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── ...
```

- `versions/`: immutable published versions.
- `latest/`: newest valid published version'ın derived görünümü.

---

## 4. Kategori Sorumluluk Sınırları

- `demos/` kategori seçimini kendisi yapmaz.
- Category ≠ delivery profile.
- Yalnız publication gate'i geçen temiz project deliverable'ları burada bulunur.
- `runs/` operational records bu alana sızamaz.

---

## 5. README Leakage Ban

Bu operational README proje `latest/` veya `versions/` içine kopyalanamaz. Published package içindeki README projenin kendi canonical project README'sidir.
