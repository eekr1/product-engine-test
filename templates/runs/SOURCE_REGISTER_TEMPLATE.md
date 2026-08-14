# SOURCE_REGISTER_TEMPLATE

## Template Metadata

```yaml
template_id: source-register-template
template_name: Source Register Operational Template
document_id: not_applicable
version: 1.5.0
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
  - input_snapshot
conditional_inputs: []
dependencies: []
output_filename: SOURCE_REGISTER.md
```

## Amaç

Run sırasında kullanılan factual kaynakları ve exact claim support boundary'lerini kayıt altına almak; FCL allowlist'i yalnız project source → approved input zincirinden üretmek.

## Default Source Model

Normal Product Engine run'ı **source-closed** çalışır.

```text
self-contained PROJECT_START_SCENARIO
→ approved PROJECT_INPUT
→ INPUT_SNAPSHOT
→ SOURCE_REGISTER / FCL
→ generated docs
```

Normal akışta dış web sitesi, arama motoru, sosyal medya veya başka external URL project truth authority'si olarak eklenmez. Proje source dosyasında bir URL geçmiş olması tek başına SOURCE_REGISTER'a external source ekleme veya o kaynaktan claim üretme izni değildir.

External source yalnız kullanıcı açıkça ayrı bir research/source-enrichment işi talep etmiş ve source gerçekten okunmuş/fetch edilmişse eklenebilir.

## Source Support Contract

Her factual source kaydı minimum:

```text
Source ID
Source path
Usage State: consumed
Claim Scope
Exact Evidence Location
```

Normal project-start akışında primary factual source project source file'dır; approved input ve input snapshot bu source truth'un canonicalized/frozen türevleridir, bağımsız yeni fact kaynağı değildir.

## Factual Claim Allowlist Contract

Blocking invariants:

```text
FCL semantic content subset-of exact supporting project source evidence
Approved PROJECT_INPUT factual content subset-of project source evidence
Generated factual claim subset-of referenced FCL semantic content
```

Source evidence inference/classification izni değildir. Source'ta açıkça bulunmayan capability, faaliyet alanı, teknik alt kapsam, süreç, modifier, availability veya operational fact FCL'ye eklenemez.

Örnek:

```text
Source: Yedek Parça Temini
Allowed FCL: Yedek Parça Temini
Forbidden without exact support: orijinal parça, stoktan teslim, marka bazlı parça kapsamı

Source: Yerinde Teknik Destek
Allowed FCL: Yerinde Teknik Destek
Forbidden without exact support: mobil filo, acil müdahale, SLA

Source: Makine Bakım ve Onarım
Allowed FCL: Makine Bakım ve Onarım
Forbidden without exact support: periyodik bakım, hidrolik pres, revizyon, güç ünitesi
```

## Implementation Detail vs Factual Truth

Engine teknik implementation kararı üretebilir:

```text
component split
file responsibility
layout/grid
adapter/interface shape
responsive behavior
non-factual interaction styling
verification strategy
```

Ancak gerçek dünya/company/domain claim'leri exact source-backed olmak zorundadır:

```text
service qualifiers
stock/availability
operating hours
address/contact facts
certificates/partnership claims
specific technical capabilities
customer/project/reference claims
```

## Validation Beklentileri

- Her FCL exact supporting project source evidence location taşımalıdır.
- Approved input source truth'u genişletirse VAL-13 FAIL.
- FCL source evidence'tan genişse VAL-13 FAIL.
- WAVE_MAP/WAVE_PLAN dahil generated factual claim FCL'den genişse VAL-13 FAIL.
- Factual scan yalnız FCL tablosuyla sınırlı kalamaz; executable prose, goals, scope, deliverables, task behavior, acceptance ve content copy içindeki company/domain claims de kontrol edilir.

---

# OUTPUT DOCUMENT START

# Source Register — {{RUN_ID}}

## 1. Project Factual Source

{{PROJECT_SOURCE_TABLE}}

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE
→ APPROVED_PROJECT_INPUT
→ INPUT_SNAPSHOT
→ FCL
```

## 3. Template Sürüm Kayıtları

{{TEMPLATE_VERSIONS_TABLE}}

## 4. Referans Belgeleri Kullanım Kaydı (Ref Usage)

{{REF_USAGE_TABLE}}

## 5. Factual Claim Allowlist

{{FACTUAL_CLAIM_ALLOWLIST}}

# OUTPUT DOCUMENT END
