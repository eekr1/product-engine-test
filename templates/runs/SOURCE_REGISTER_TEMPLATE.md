# SOURCE_REGISTER_TEMPLATE

## Template Metadata

```yaml
template_id: source-register-template
template_name: Source Register Operational Template
document_id: not_applicable
version: 1.2.0
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

Run sırasında okunan veya başvurulan tüm kaynakların listesini, sürümlerini ve otorite seviyelerini kayıt altına almak; generation sırasında kullanılabilecek doğrulanmış factual business/product/service claim'leri explicit allowlist olarak tanımlamak.

## Kullanım Koşulları

Run süresince aktif tutulur.

## Girdi Kaynakları

- Kullanılan girdi, paket, template ve referans dosyaları
- Approved input / INPUT_SNAPSHOT
- Verified project sources

## Zorunlu Bölümler

- Girdi ve Sözleşme Kaynakları
- Template Sürüm Kayıtları
- Referans Belgeleri Kullanım Kaydı
- Factual Claim Allowlist

## Factual Claim Allowlist Contract

Business/product/service factual truth generation sırasında serbest metin olarak genişletilemez. Run başında verified source truth ayrı claim kayıtlarına normalize edilir.

Her factual claim için minimum:

```text
Claim ID: FCL-XXX
Claim: exact supported fact
Source ID: SRC-XXX
Source Location / Evidence: path, section, URL veya verified source reference
Status: Verified | Approved
Allowed Use: factual copy / planning / implementation reference
```

Canonical kural:

> FCL reference is not a license to enrich.

Bir generated factual claim yalnız referans verdiği FCL claim'in **exact semantic boundary**'si içinde kalıyorsa authorize edilmiş sayılır.

```text
Generated factual claim ⊆ Referenced FCL semantic content
```

FCL ID'nin yalnız mevcut olması yeterli değildir.

Örnek:

```text
FCL-002 Claim: Yerinde Teknik Destek

Allowed:
- "Yerinde Teknik Destek" hizmet kartını oluştur
- "Yerinde Teknik Destek" başlığını göster

NOT automatically allowed:
- arıza tespiti
- sahada müdahale
- mobil servis ekibi
- 7/24 destek
```

Başka örnek:

```text
FCL Claim: Makine Bakım ve Onarım

Allowed:
- Makine Bakım ve Onarım hizmet bölümü

NOT automatically allowed:
- periyodik bakım
- revizyon
- hidrolik/mekanik alt kapsam
```

Üst-seviye hizmet adı yeni modifier, süreç, performans, alt hizmet, coğrafi kapsam veya teknik yetkinliği authorize etmez.

FCL kaydı yoksa veya generated claim FCL sınırından genişse generation:

```text
remove factual enrichment
or use neutral wording tied exactly to verified claim
or create a separate FCL only if exact source support exists
or stop for clarification if execution-critical
```

Design treatment, layout, color, interaction veya presentation wording factual business claim olmadığı sürece FCL gerektirmez.

## İçerik Üretim Kuralları

- Her kaynak için Source ID, tür, path/referans, sürüm, otorite seviyesi ve kullanım amacı tutulur.
- Ham ref belgeleri run klasörüne kopyalanmaz; referans gösterilir.
- Verified business/product/service facts FCL'e normalize edilir.
- FCL kaydı source'tan daha geniş veya daha iddialı olamaz.
- Generated claim yalnız referenced FCL semantic boundary içinde kullanılabilir.
- Aynı factual claim duplicate FCL kayıtlarıyla çoğaltılmaz.

## Placeholder Tanımları

- `{{RUN_ID}}`
- `{{TEMPLATE_VERSIONS_TABLE}}`
- `{{REF_USAGE_TABLE}}`
- `{{FACTUAL_CLAIM_ALLOWLIST}}`

## Kapsam Dışı

- Referans belgelerin tam metin kopyaları
- Kaynakta bulunmayan factual claim üretimi

## Diğer Dokümanlarla İlişki

- Primary Owner: Run kaynak, sürüm ve factual claim provenance tescili.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`, `engine/GENERATION_PIPELINE.md`, `engine/VALIDATION_RULES.md`, WAVE planning/output generation.

## Validation Beklentileri

- Tüm aktif template sürümleri kaydedilmelidir.
- Generated factual claims mevcut FCL kayıtlarıyla traceable olmalıdır.
- FCL ID mevcut olsa bile generated claim referenced FCL semantic boundary'yi aşarsa validation FAIL olmalıdır.
- Unsupported factual modifier/subclaim bulunursa source claim validation FAIL olmalıdır.

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

[CONDITIONAL: include only if user provided external docs]
## 5. Dış Kaynak Belgeleri

- Kullanıcı tarafından sağlanan harici dokümanlar, linkler ve belgeler.

# OUTPUT DOCUMENT END
