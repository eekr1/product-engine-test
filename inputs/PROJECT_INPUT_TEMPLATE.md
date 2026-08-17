---
input_id: "INPUT-{{PROJECT_SLUG_UPPER}}-V1"
project_name: "{{PROJECT_NAME}}"
project_slug: "{{PROJECT_SLUG}}"
input_version: "1"
status: "pending" # pending | approved
project_type: "{{PROJECT_TYPE}}"
project_state: "{{PROJECT_STATE}}" # new | existing
delivery_profile: "{{DELIVERY_PROFILE}}" # Foundation | Prototype | Implementation Ready | Production Ready
implementation_planning: "{{IMPLEMENTATION_PLANNING}}" # standard | full
design_planning: "{{DESIGN_PLANNING}}" # light | standard | full | N/A only when UI/UX is not applicable
primary_language: "{{PRIMARY_LANGUAGE}}"
created_at: "{{CREATED_AT}}"
updated_at: "{{UPDATED_AT}}"
approved_at: "{{APPROVED_AT}}"
approved_by: "{{APPROVED_BY}}"
supersedes: "{{SUPERSEDES_INPUT_ID}}"
source_type: "{{SOURCE_TYPE}}"
source_count: {{SOURCE_COUNT}}
---

# Project Input: {{PROJECT_NAME}}

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
{{ORIGINAL_RAW_USER_BRIEF}}
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** {{PROJECT_NAME}}
- **Project Slug:** `{{PROJECT_SLUG}}`
- **Project Type:** `{{PROJECT_TYPE}}`
- **Project State:** `{{PROJECT_STATE}}`
- **Delivery Profile:** `{{DELIVERY_PROFILE}}`
- **Implementation Planning:** `{{IMPLEMENTATION_PLANNING}}`
- **Design Planning:** `{{DESIGN_PLANNING}}`
- **Primary Language:** `{{PRIMARY_LANGUAGE}}`

### Planning Profile Rationale

- **Implementation:** {{IMPLEMENTATION_PLANNING_RATIONALE}}
- **Design:** {{DESIGN_PLANNING_RATIONALE}}

> `design_planning` için `none` profile yoktur. UI/UX applicable değilse metadata değeri yalnız operasyonel temsil amacıyla `N/A` olabilir; bu yeni bir profile değildir.

---

## 3. Problem, Purpose & Success

### Project Summary

{{PROJECT_SUMMARY}}

### Problem

{{PROBLEM_DESCRIPTION}}

### Purpose

{{PROJECT_PURPOSE}}

### Success Criteria

{{SUCCESS_CRITERIA}}

---

## 4. Target Users & Core Flows

### Users / Roles

{{TARGET_USERS}}

### Core Flows

{{CORE_FLOWS}}

---

## 5. Scope Boundaries

### In Scope

{{IN_SCOPE}}

### Out of Scope

{{OUT_OF_SCOPE}}

### Future Possibilities

{{FUTURE_SCOPE}}

> Future scope bugünkü committed scope gibi yazılamaz.

---

## 6. Site Architecture

[CONDITIONAL: MUST be fully resolved when `project_type: corporate-website`; otherwise write `N/A`]

### Architecture Status

- **Status:** {{SITE_ARCHITECTURE_STATUS}} # proposed | approved | N/A
- **Architecture Rationale:** {{SITE_ARCHITECTURE_RATIONALE}}

### Page / Surface Registry

| Page ID | Page Name | Purpose | Route / Navigation Identity | Scope Status | Primary Content / Capability Boundaries | Parent / Detail Relation |
|---|---|---|---|---|---|---|
{{SITE_ARCHITECTURE_ROWS}}

### Corporate Website Architecture Rules

- `corporate-website` için approved inputta bu registry boş olamaz.
- Her executable distinct page `PAGE-XXX` identity taşır.
- Pending proposal executable authority değildir.
- Approved distinct pages single-page anchor section'lara collapse edilemez.
- Future/unresolved pages approved current set içinde gösterilemez.
- Exact semantics: `engine/SITE_ARCHITECTURE_RULES.md`.

---

## 7. Existing Project Context

### Current Reality

{{CURRENT_REALITY}}

### Target State

{{TARGET_STATE}}

### Transition Scope

{{TRANSITION_SCOPE}}

`project_state: new` ise bu bölüm `N/A` olarak açıkça işaretlenebilir.

---

## 8. Technical Context & Integration Readiness

### Technical Preferences / Constraints

{{TECHNICAL_CONTEXT}}

### Current Data Source Reality

{{CURRENT_DATA_SOURCE}}

### Service / Data-Access Boundary Expectation

{{DATA_SERVICE_BOUNDARY}}

### Future Backend / Integration Context

{{FUTURE_INTEGRATION_CONTEXT}}

### Unresolved Technical Decisions

{{UNRESOLVED_TECHNICAL_DECISIONS}}

> Backend/API henüz approved scope değilse gerçekmiş gibi endpoint, database veya stack üretilmez. Integration readiness yalnız temiz boundary beklentisidir.

---

## 9. Design Context

### Known Brand / Design Inputs

{{KNOWN_DESIGN_INPUTS}}

### Desired Character / Perception

{{DESIRED_DESIGN_CHARACTER}}

### Explicit Preferences / Constraints

{{DESIGN_PREFERENCES_CONSTRAINTS}}

### Differentiation Notes

{{DESIGN_DIFFERENTIATION_CONTEXT}}

> Sektör klişesi design decision değildir. Multi-page `corporate-website` için default intake recommendation `design_planning: standard`dır; final değer explicit approval ile kesinleşir.

---

## 10. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
{{SOURCE_REGISTER_ROWS}}

- `source_count` yukarıdaki gerçek kayıt sayısıyla aynı olmalıdır.
- Secret/token/password saklanmaz.
- Machine-dependent absolute path kullanılmaz.

---

## 11. Known Decisions

{{KNOWN_DECISIONS}}

---

## 12. Assumptions

{{ASSUMPTIONS}}

Her assumption `engine/ASSUMPTION_RULES.md` sınıf/status kurallarına uymalıdır.

---

## 13. Conflicts

{{CONFLICTS}}

Critical conflict çözülmeden approved input oluşturulamaz.

---

## 14. Open Questions / Unresolved Items

{{OPEN_QUESTIONS}}

Approved input'ta generation'ı bloke eden unresolved item bulunamaz.

---

## 15. Approval & Verification

- **Status:** `{{STATUS}}`
- **Approved At:** {{APPROVED_AT}}
- **Approved By:** {{APPROVED_BY}}

### Canonical Approval Checklist

- [ ] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [ ] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti.
- [ ] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [ ] `project_type: corporate-website` ise Site Architecture registry PAGE identities ile tamamlandı ve explicit approval kapsamına girdi.
- [ ] Corporate website distinct approved pages single-page section seti gibi modellenmedi.
- [ ] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [ ] Critical conflict kalmadı.
- [ ] Assumption'lar kayıtlı ve status'ları doğru.
- [ ] Secret/credential yok.
- [ ] Absolute machine path yok.
- [ ] `source_count` doğru.
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
