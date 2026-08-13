# SOURCE_REGISTER_TEMPLATE

## Template Metadata

```yaml
template_id: source-register-template
template_name: Source Register Operational Template
document_id: not_applicable
version: 1.1.0
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

Run sırasında okunan veya başvurulan tüm kaynakların (inputs, templates, packages, refs, existing project docs) listesini, sürümlerini ve otorite seviyelerini kayıt altına almak; ayrıca generation sırasında kullanılabilecek doğrulanmış factual business/product/service claim'leri explicit allowlist olarak tanımlamak.

## Kullanım Koşulları

Run süresince aktif tutulur.

## Girdi Kaynakları

- Kullanılan girdi, paket, template ve referans dosyaları
- Approved input / INPUT_SNAPSHOT
- Verified project sources

## Zorunlu Bölümler

- Girdi ve Sözleşme Kaynakları (Input & Contract Sources)
- Template Sürüm Kayıtları (Template Versions Register)
- Referans Belgeleri Kullanım Kaydı (Ref Usage Register)
- Factual Claim Allowlist

## Koşullu Bölümler

- `[CONDITIONAL: include only if user provided external docs]` Dış Kaynak Belgeleri

## Factual Claim Allowlist Contract

Business/product/service factual truth generation sırasında serbest metin olarak genişletilemez. Run başında verified source truth, ayrı claim kayıtlarına normalize edilir.

Her factual claim için minimum:

```text
Claim ID: FCL-XXX
Claim: exact supported fact
Source ID: SRC-XXX
Source Location / Evidence: path, section, URL veya verified source reference
Status: Verified | Approved
Allowed Use: factual copy / planning / implementation reference
```

Örnek:

```text
FCL-001
Claim: Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisidir.
Source ID: SRC-02
Status: Verified

FCL-002
Claim: Yedek Parça Temini
Source ID: SRC-02
Status: Verified
```

Canonical kural:

> A generated factual business claim must map to an existing FCL claim ID or it is not approved factual truth.

Bir üst-seviye claim yeni modifier veya alt kapsamı otomatik authorize etmez.

```text
FCL: Yedek Parça Temini
→ "Yedek Parça Temini kartı" allowed
→ "orijinal yedek parça", "hızlı temin", "garanti" NOT automatically allowed
```

FCL kaydı yoksa generation:

```text
remove factual enrichment
or use neutral/non-factual wording
or stop for clarification if execution-critical
```

Design treatment, layout, color, interaction veya presentation wording factual business claim olmadığı sürece FCL gerektirmez.

## İçerik Üretim Kuralları

- Her kaynak için: Source ID, Tür (Input/Package/Template/Ref), Path/Referans, Sürüm, Otorite Seviyesi (Binding/Reference) ve Kullanım Amacı tutulmalıdır.
- Ham ref belgeleri run klasörüne kopyalanmaz; referans gösterilir.
- Verified business/product/service facts Factual Claim Allowlist'e normalize edilmelidir.
- FCL kaydı source'tan daha geniş veya daha iddialı olamaz.
- Aynı factual claim duplicate FCL kayıtlarıyla çoğaltılmaz; tek canonical claim kaydı kullanılır.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{TEMPLATE_VERSIONS_TABLE}}`: Kullanılan aktif template'lerin versiyon tablosu.
- `{{REF_USAGE_TABLE}}`: Başvurulan ref belgeleri ve kullanım amacı.
- `{{FACTUAL_CLAIM_ALLOWLIST}}`: FCL claim kayıtları.

## Kapsam Dışı

- Referans belgelerin tam metin kopyaları
- Kaynakta bulunmayan factual claim üretimi

## Diğer Dokümanlarla İlişki

- Primary Owner: Run kaynak, sürüm ve factual claim provenance tescili.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`, `engine/GENERATION_PIPELINE.md`, `engine/VALIDATION_RULES.md`, WAVE planning/output generation.

## Delivery Profile Davranışı

- Hangi template sürümüyle ne üretildiğinin tam izlenebilirliğini sağlar.
- Factual Claim Allowlist tüm delivery profile'larda source-truth boundary'yi destekler.

## Validation Beklentileri

- Tüm aktif template sürümleri kaydedilmelidir.
- Generated factual business/product/service claims mevcut FCL kayıtlarıyla traceable olmalıdır.
- Unsupported factual modifier/subclaim bulunursa source claim validation FAIL olmalıdır.

---

# OUTPUT DOCUMENT START

# Source Register — {{RUN_ID}}

## 1. Girdi ve Sözleşme Kaynakları

- **Engine Specs**: `engine/` v1.0.0 (Binding)
- **Input Snapshot**: `INPUT_SNAPSHOT.md` (Binding)

## 2. Template Sürüm Kayıtları

{{TEMPLATE_VERSIONS_TABLE}}

## 3. Referans Belgeleri Kullanım Kaydı (Ref Usage)

{{REF_USAGE_TABLE}}

## 4. Factual Claim Allowlist

{{FACTUAL_CLAIM_ALLOWLIST}}

[CONDITIONAL: include only if user provided external docs]
## 5. Dış Kaynak Belgeleri

- Kullanıcı tarafından sağlanan harici dokümanlar, linkler ve belgeler.

# OUTPUT DOCUMENT END
