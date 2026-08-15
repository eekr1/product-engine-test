# PACKAGE_SELECTION — RUN-20260815-001

```yaml
run_id: RUN-20260815-001
selected_base_package: demo-frontend
extensions: []
implementation_planning: standard
design_planning: light
overlay_applied: packages/PLANNING_PROFILE_OVERLAY.md
catalog_filtered: true
```

## 1. Selected Base Package

- **Package ID**: `demo-frontend`
- **Package Name**: Frontend Demo Package
- **Rationale**: Proje, satış görüşmelerinde kullanılmak üzere hazırlanan frontend-heavy landing-page/demo projesidir.

## 2. Planning Profile Overlay Resolution

`packages/PLANNING_PROFILE_OVERLAY.md` uygulanmıştır:
- `implementation_planning: standard` minimum seti eklendi: `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `STATUS`, `TASKS`, `DECISIONS`, `AGENT-INST`, `PROJ-PLAN`, `WAVE-MAP`, `WAVE-PLAN` instances.
- `design_planning: light` minimum seti eklendi: `DESIGN`.

## 3. Catalog Filtering & Exclusions

- `DATA`: Excluded (kalıcı/önemli veritabanı modeli yok).
- `API`: Excluded (onaylı gerçek API yüzeyi yok).
- `TEST`: Excluded (özel test stratejisi gerekmiyor).
- `DEPLOY` / `OPS`: Excluded (production deployment/operations kapsam dışı).
- `PROD-STRAT`: Excluded (ürün stratejisi belgesi gerekmiyor).
- `DESIGN-SYSTEM`, `GLOBAL-SHELL`, `PAGE-DESIGN`, `SYSTEM-STATES`: Excluded (`design_planning: light` gereği).

## 4. Resolved Output Paths (Canonical Vocabulary)

```text
README.md -> working-output/README.md
ai/PROJECT_BRAIN.md -> working-output/ai/PROJECT_BRAIN.md
ai/PRODUCT_RULES.md -> working-output/ai/PRODUCT_RULES.md
tech/TECH_CONTEXT.md -> working-output/tech/TECH_CONTEXT.md
design/DESIGN_RULES.md -> working-output/design/DESIGN_RULES.md
waves/WAVE_MAP.md -> working-output/waves/WAVE_MAP.md
waves/plans/WAVE_00.md -> working-output/waves/plans/WAVE_00.md
waves/plans/WAVE_01.md -> working-output/waves/plans/WAVE_01.md
waves/plans/WAVE_02.md -> working-output/waves/plans/WAVE_02.md
waves/plans/WAVE_03.md -> working-output/waves/plans/WAVE_03.md
waves/plans/WAVE_04.md -> working-output/waves/plans/WAVE_04.md
project/PROJECT_PLAN.md -> working-output/project/PROJECT_PLAN.md
ai/CURRENT_STATUS.md -> working-output/ai/CURRENT_STATUS.md
ai/NEXT_TASKS.md -> working-output/ai/NEXT_TASKS.md
ai/AGENT_INSTRUCTIONS.md -> working-output/ai/AGENT_INSTRUCTIONS.md
ai/DECISIONS.md -> working-output/ai/DECISIONS.md
```
