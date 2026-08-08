# SOURCE_REGISTER_TEMPLATE

## Template Metadata

```yaml
template_id: source-register-template
template_name: Source Register Operational Template
document_id: not_applicable
version: 1.0.0
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

Run sırasında okunan veya başvurulan tüm kaynakların (inputs, templates, packages, refs, existing project docs) listesini, sürümlerini ve otorite seviyelerini kayıt altına almak.

## Kullanım Koşulları

Run süresince aktif tutulur.

## Girdi Kaynakları

- Kullanılan girdi, paket, template ve referans dosyaları

## Zorunlu Bölümler

- Girdi ve Sözleşme Kaynakları (Input & Contract Sources)
- Template Sürüm Kayıtları (Template Versions Register)
- Referans Belgeleri Kullanım Kaydı (Ref Usage Register)

## Koşullu Bölümler

- `[CONDITIONAL: include only if user provided external docs]` Dış Kaynak Belgeleri

## İçerik Üretim Kuralları

- Her kaynak için: Source ID, Tür (Input/Package/Template/Ref), Path/Referans, Sürüm, Otorite Seviyesi (Binding/Reference) ve Kullanım Amacı tutulmalıdır.
- Ham ref belgeleri run klasörüne kopyalanmaz; referans gösterilir.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{TEMPLATE_VERSIONS_TABLE}}`: Kullanılan aktif template'lerin versiyon tablosu.
- `{{REF_USAGE_TABLE}}`: Başvurulan ref belgeleri ve kullanım amacı.

## Kapsam Dışı

- Referans belgelerin tam metin kopyaları

## Diğer Dokümanlarla İlişki

- Primary Owner: Run kaynak ve sürüm kayıt tescili.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Hangi template sürümüyle ne üretildiğinin tam izlenebilirliğini sağlar.

## Validation Beklentileri

- Tüm aktif template sürümleri kaydedilmelidir.

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

[CONDITIONAL: include only if user provided external docs]
## 4. Dış Kaynak Belgeleri

- Kullanıcı tarafından sağlanan harici dokümanlar, linkler ve belgeler.

# OUTPUT DOCUMENT END
