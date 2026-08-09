# VALIDATION REPORT — RUN-20260101-001

```yaml
run_id: RUN-20260101-001
overall_validation: PASS
validated_at: 2026-01-01T00:08:00Z
validator_id: execution-agent-01
```

---

## Validation Summary

| Rule Category | Applied Rules | Result | Notes |
|---|---|---|---|
| **Structure Validation** | Standard document headers and layout | `PASS` | All required sections present |
| **Cleanliness Check** | Zero placeholders (`{{...}}`, `<TODO>`) | `PASS` | No unresolved placeholders found |
| **Leakage Check** | No internal directives or run manifests in text | `PASS` | Clean text output |
| **Security Check** | No secrets, credentials, or personal data | `PASS` | Checked against safety rules |
| **Portability Check** | No machine-local `file:///` paths | `PASS` | Repo-relative paths used |

---

## Conclusion

Tüm validation denetimleri eksiksiz geçilmiştir (`PASS`). Üretilen taslaklar `outputs/` katmanında yayınlanmaya uygundur.
