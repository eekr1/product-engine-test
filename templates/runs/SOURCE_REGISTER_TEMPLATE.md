# SOURCE_REGISTER_TEMPLATE

## Template Metadata

```yaml
template_id: source-register-template
template_name: Source Register Operational Template
document_id: not_applicable
version: 1.4.0
status: active
template_type: operational
category: operational
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - run_manifest
conditional_inputs: []
dependencies: []
output_filename: SOURCE_REGISTER.md
```

## Amaç

Run sırasında kullanılan kaynakları, kullanım gerçekliğini ve exact factual support boundary'lerini kayıt altına almak; FCL allowlist'i yalnız exact source support'tan üretmek.

## Source Support Contract

Her source kaydı minimum:

```text
Source ID
Source path / URL
Usage State: registered | consumed
Claim Scope
Exact Evidence Location
```

Canonical rules:

```text
registered != consumed
consumed requires independent observable read/consume evidence
no independent trace evidence -> registered
```

SOURCE_REGISTER, VALIDATION_REPORT, RUN_LOG, PROGRESS, manifest veya agent statement consumption proof değildir. External URL için gerçek open/read/fetch event'i yoksa `consumed` yazılamaz.

## Factual Claim Allowlist Contract

Blocking invariant:

```text
FCL semantic content subset-of exact supporting source evidence
Generated factual claim subset-of referenced FCL semantic content
```

Source evidence inference/classification izni değildir. Source'ta açıkça bulunmayan capability, faaliyet alanı, teknik alt kapsam, süreç veya modifier FCL'ye eklenemez.

Örnek:

```text
Source: Yedek Parça Temini
FCL: Yedek Parça Temini -> valid
FCL: Makine ve hidrolik yedek parça temini -> invalid unless exact support exists

Source: Makine Bakım ve Onarım
FCL: Firma faaliyet alanı hidrolik sistemlerdir -> invalid unless separately supported
```

## Validation Beklentileri

- Her FCL exact supporting source ve evidence location taşımalıdır.
- FCL source evidence'tan genişse VAL-13 FAIL.
- Generated claim FCL'den genişse VAL-13 FAIL.
- External source `consumed` fakat independent trace yoksa validation FAIL.

---

# OUTPUT DOCUMENT START

# Source Register — {{RUN_ID}}

## 1. Girdi ve Sözleşme Kaynakları

- **Engine Specs**: `engine/` (Binding)
- **Input Snapshot**: `INPUT_SNAPSHOT.md` (Binding)

## 2. Template Sürüm Kayıtları

{{TEMPLATE_VERSIONS_TABLE}}

## 3. Referans Belgeleri Kullanım Kaydı (Ref Usage)

{{REF_USAGE_TABLE}}

## 4. Factual Claim Allowlist

{{FACTUAL_CLAIM_ALLOWLIST}}

# OUTPUT DOCUMENT END
