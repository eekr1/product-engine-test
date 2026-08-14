# Decisions — RUN-20260814-001

## Operational Decisions Register

### DEC-001
- **Decision ID**: DEC-001
- **Topic**: Base Package Selection
- **Choice**: `demo-frontend`
- **Rationale**: Proje hedefi potansiyel müşteri için frontend demo geliştirmek olduğundan `demo-frontend` temel domain paketi seçilmiştir.
- **Provenance**: User Approved Intake + Engine Package Rules

### DEC-002
- **Decision ID**: DEC-002
- **Topic**: Wave Granularity & Decomposition
- **Choice**: 5 Wave (`WAVE_00` to `WAVE_04`)
- **Rationale**: `DEMO_FRONTEND_PACKAGE.md` wave granularity guard kurallarına tam uyum sağlamak için Foundation, Hero/Trust, Services, Contact ve Cross-cutting QA sorumlulukları ayrıştırılmıştır.
- **Provenance**: Engine Package Rules + Wave Granularity Guard

### DEC-003
- **Decision ID**: DEC-003
- **Topic**: Output Target Category
- **Choice**: `outputs/demos/trakya-teknik-makine/`
- **Rationale**: `delivery_profile: Prototype` için canonical output konumu `outputs/demos/` altındadır.
- **Provenance**: Engine Output Structure Rules
