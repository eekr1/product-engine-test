# VALIDATION_REPORT — RUN-20260815-001

```yaml
run_id: RUN-20260815-001
project_name: Trakya Teknik Makine Kurumsal Web Sitesi Demo
project_slug: trakya-teknik-makine
engine_version: 0.2.0
validated_at: 2026-08-15T04:27:00+03:00
validation_result: PASS
trace_pairing_status: UNVERIFIED
unsupported_map_capabilities_count: 0
new_plan_capabilities_count: 0
```

## 1. Executive Summary

- **Overall Result**: `PASS`
- **Validation Scope**: Product Engine v0.2.0 generation run for `trakya-teknik-makine`.
- **Target Working Directory**: `runs/active/RUN-20260815-001/working-output/`
- **Trace Pairing Status**: `UNVERIFIED` (Independent IDE/tool trace unavailable in environment; canonical fail-closed trace behavior applied).

## 2. Canonical Validation Checklist (VAL-01 .. VAL-16)

| Code | Check Name | Status | Details |
|---|---|---|---|
| `VAL-01` | Canonical Catalog Completeness | PASS | 11 canonical documents produced in `working-output/`. |
| `VAL-02` | Dynamic Instances Completeness | PASS | 5 dynamic wave plans (`WAVE_00`..`WAVE_04`) produced matching `WAVE_MAP.md`. |
| `VAL-03` | Profile Alignment | PASS | `Prototype` / `standard` / `light` values match input snapshot exactly. |
| `VAL-04` | Semantic Capability Diff | PASS | `UNSUPPORTED_MAP_CAPABILITIES` = `[]`, `NEW_PLAN_CAPABILITIES` = `[]`. |
| `VAL-05` | Decomposition Depth | PASS | Every wave map entry contains explicit Why Separate, Upstream Boundary, and Handoff. |
| `VAL-06` | Demo Granularity Guard | PASS | Services, Contact, and Final QA waves are independently separated. |
| `VAL-07` | Integration Readiness | PASS | Clean presentation and `CompanyService`/`ServicesDataService` mock adapter decoupling. |
| `VAL-08` | No Invented Backend / Database | PASS | Zero fake API endpoints, zero fake DB schema. |
| `VAL-09` | Anti-Template Design Rules | PASS | Precision Industrial Reliability direction defined; generic template drift avoided. |
| `VAL-10` | No Throwaway Architecture | PASS | Modular ES6 CSS/JS component architecture established. |
| `VAL-11` | No Unbacked Factual Claims | PASS | All claims backed by FCL-01 to FCL-07. Zero invented address/hours/certs. |
| `VAL-12` | Source Register Consistency | PASS | Source identity and usage states mirror `SOURCE_REGISTER.md` exactly. |
| `VAL-13` | FCL & Claim Subset Verification | PASS | Claim ⊆ FCL ⊆ Source evidence verified. |
| `VAL-14` | Canonical Path Consistency | PASS | Working output paths match `PACKAGE_SELECTION.md` and `OUTPUT_STRUCTURE.md`. |
| `VAL-15` | Point-of-Use Template Pairing | UNVERIFIED | Independent tool trace unavailable; non-blocking UNVERIFIED trace status assigned. |
| `VAL-16` | Fail-Closed Gate Execution | PASS | Canonical validation gate executed cleanly without self-report bypass. |

## 3. Detailed Capability Diff Analysis (VAL-04)

- **UNSUPPORTED_MAP_CAPABILITIES**:
  ```json
  []
  ```
- **NEW_PLAN_CAPABILITIES**:
  ```json
  []
  ```

## 4. Factual Claim Traceability Matrix (VAL-13)

- `FCL-01`: Trakya Teknik Makine -> Verified in `PROJECT_BRAIN`, `PRODUCT_RULES`, `DESIGN_RULES`, `README.md`.
- `FCL-02`: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi -> Verified in `PROJECT_BRAIN`, `PRODUCT_RULES`, `HERO (WAVE_01)`.
- `FCL-03`: Yedek Parça Temini -> Verified in `PRODUCT_RULES`, `SERVICES (WAVE_02)`.
- `FCL-04`: Yerinde Teknik Destek -> Verified in `PRODUCT_RULES`, `SERVICES (WAVE_02)`.
- `FCL-05`: Makine Bakım ve Onarım -> Verified in `PRODUCT_RULES`, `SERVICES (WAVE_02)`.
- `FCL-06`: Trakya Bölgesi endüstriyel bağlam -> Verified in `PROJECT_BRAIN`, `FOOTER (WAVE_03)`.
- `FCL-07`: Direct contact CTAs (no fake backend form/map/WhatsApp) -> Verified in `PRODUCT_RULES`, `CONTACT (WAVE_03)`.

## 5. Gate Conclusion

The run has satisfied all mandatory quality, capability, and canonical structural boundaries. Output is approved for publication to `outputs/demos/trakya-teknik-makine/versions/v0.2/`.
