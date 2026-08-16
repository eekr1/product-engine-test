# Product Engine — Engine Changelog (`logs/ENGINE_CHANGELOG.md`)

## 1. Amaç ve Otorite

Bu belge, Product Engine'in çekirdek motor yapısında (`engine/`), paket kurallarında (`packages/`), şablon standartlarında (`templates/`), girdi/run/çıktı yaşam döngülerinde ve klasör mimarisinde yapılan kalıcı değişikliklerin tek resmi tarihsel geçmiş kaynağıdır.

### Sürüm Otoritesi Modeli

- **Root `README.md`**: Güncel aktif Product Engine sürümünün birincil otoritesi.
- **`logs/ENGINE_CHANGELOG.md`**: Product Engine sürüm geçmişinin birincil otoritesi.

Güncel aktif sürüm: `v0.2.2`.

---

## 2. Changelog-Worthy Değişiklikler

Engine contract, package behavior, template schema, validation, lifecycle ve versioning değişiklikleri burada kaydedilir.

---

## 3. Sürüm Geçmişi

### v0.1.0 — First Real Engine Runtime
İlk gerçek Product Engine runtime.

### v0.2.0 — Planning / Design / Wave Architecture
Planning profiles, implementation-ready wave planning, design planning ve integration-readiness mimarisi.

---

## PE-CHANGE-007 — 2026-08-17

- **Version:** v0.2.1
- **Change Type:** Fixed
- **Affected Area:** engine/PLANNING_PROFILES.md | packages/DEMO_FRONTEND_PACKAGE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md | logs/ISSUES.md
- **Breaking Change:** No
- **Related Issue:** ISSUE-001
- **Related Run:** RUN-20260815-001

### Summary
Continuation-ready frontend stack selection intent'i eklendi. Sales/client demo için package-managed/component-ready baseline tercih edildi; zero-build yaklaşım için continuation rationale beklendi.

### Validation Outcome
Fresh `RUN-20260817-002` bu fix'in yeterince deterministic olmadığını gösterdi. Agent yeni rationale bölümünü okuyup yine dependency-free Vanilla seçti ve future React/Vite/Next migration'ını “low migration” olarak gerekçelendirdi. `VAL-09` bunu yakalamadı.

---

## PE-CHANGE-008 — 2026-08-17

- **Version:** v0.2.2
- **Change Type:** Fixed
- **Affected Area:** engine/PLANNING_PROFILES.md | packages/DEMO_FRONTEND_PACKAGE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md | engine/VALIDATION_RULES.md | README.md | logs/ISSUES.md
- **Breaking Change:** No
- **Related Issue:** ISSUE-001
- **Related Run:** RUN-20260817-002

### Summary
Continuation-ready frontend stack selection preference/rationale modelinden deterministic blocking gate modeline geçirildi.

Canonical invariant:

```text
continuation_expected = YES
+ approved_zero_build_constraint = NONE
→ package-managed/component-oriented frontend baseline REQUIRED
```

### Reason
v0.2.1, agent'ın kendi “low migration cost / modular ES6 / future framework migration” yorumunu zero-build istisnası olarak kullanmasına izin verdi. Ayrıca `VAL-09` yalnız data adapter + future API path'i doğruluyordu.

### Impact
- Sales/client demo veya future backend/CMS/page/component growth taşıyan projelerde continuation otomatik YES olarak çözülür.
- Zero-build/dependency-free seçim yalnız exact approved user/project/environment constraint ile mümkündür.
- Agent-generated rationale approved constraint değildir.
- “İleride React/Vite/Next'e migrate edilir” same-codebase continuation değildir.
- TECH_CONTEXT `Continuation Expected`, `Continuation Evidence`, `Approved Zero-Build Constraint`, selected baseline, package manifest ve dev/build/preview commands alanlarını explicit üretir.
- `VAL-09` bu alanları blocking doğrular; eksik/uygunsuz seçim output validation FAIL üretir.
- Framework global olarak hardcode edilmez; uygun package-managed component-oriented çözüm project-specific synthesis ile seçilir.

---

## 4. Güncel Durum

```text
Active Engine Version Authority : Root README.md (v0.2.2)
Version History Authority       : logs/ENGINE_CHANGELOG.md
Recorded Change Entries         : 8
Next Acceptance Gate            : Fresh Trakya generation validates deterministic continuation gate
```
