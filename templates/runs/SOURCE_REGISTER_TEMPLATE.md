# SOURCE_REGISTER_TEMPLATE

## Template Metadata

```yaml
template_id: source-register-template
template_name: Source Register Operational Template
document_id: not_applicable
version: 1.3.0
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

Run sırasında kullanılan kaynakları, sürümlerini, otorite seviyelerini ve **exact factual support boundary**'lerini kayıt altına almak; generation sırasında kullanılabilecek doğrulanmış business/product/service claim'leri explicit FCL allowlist olarak tanımlamak.

## Source Support Contract

Her factual source kaydı minimum şu alanları taşır:

```text
Source ID: SRC-XXX
Source: exact path / URL / approved input section
Usage State: registered | consumed
Claim Scope: kaynağın açıkça desteklediği exact factual semantic boundary
Evidence Location: section / line / page / URL context
```

Canonical kurallar:

```text
registered ≠ consumed
source presence ≠ blanket factual authority
FCL claim ⊆ exact verified source support
```

`consumed` yalnız gerçek run trace üzerinde source'un read/consume edildiği doğrulanabiliyorsa kullanılabilir. SOURCE_REGISTER, RUN_LOG, PROGRESS veya validator self-report'u kendi başına consumption proof değildir.

## Factual Claim Allowlist Contract

İki aşamalı canonical invariant:

```text
FCL semantic content ⊆ exact supporting source evidence
Generated factual claim ⊆ referenced FCL semantic content
```

> FCL reference is not a license to enrich.

Örnek:

```text
Source evidence: "Yerinde Teknik Destek"
FCL: "Yerinde Teknik Destek" → valid
FCL: "Arıza tespiti ve sahada müdahale" → INVALID
Generated: "7/24 yerinde teknik destek" → INVALID without separate exact support
```

FCL source'tan genişse registry generation sırasında repair edilir; downstream output'a taşınmaz.

## Validation Beklentileri

- `FCL ⊆ exact source evidence` zorunludur.
- `generated claim ⊆ FCL` zorunludur.
- Unsupported modifier/subclaim → VAL-13 FAIL.
- External source/trace consumption yalnız bağımsız observable evidence ile doğrulanabilir.

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

> Her source/ref kaydı `usage_state`, `claim_scope` ve exact evidence location taşır. `registered` ≠ `consumed`.

## 4. Factual Claim Allowlist

{{FACTUAL_CLAIM_ALLOWLIST}}

# OUTPUT DOCUMENT END
