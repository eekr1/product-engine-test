# RUN_LOG_TEMPLATE

## Template Metadata

```yaml
template_id: run-log-template
template_name: Run Log Operational Template
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
output_filename: RUN_LOG.md
```

## Amaç

Run adımlarının kronolojik sırayla kısa ve somut operasyonel izini tutmak.

## Kullanım Koşulları

Run boyunca kronolojik olarak güncellenir.

## Girdi Kaynakları

- Run Yürütme Adımları

## Zorunlu Bölümler

- Kronolojik Çalışma Günlüğü (Chronological Log Entries)

## Koşullu Bölümler

- `[CONDITIONAL: include only if errors occurred]` Hata ve İstisna Günlükleri

## İçerik Üretim Kuralları

- `RUN_MANIFEST.md` yerine geçmez.
- Aşırı sohbet/transcript saklamamalı; kısa, somut operasyon kayıtları tutmalıdır.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{CHRONOLOGICAL_LOG_ENTRIES}}`: [Zaman Damgası] [Aşama] [Aksiyon] [Sonuç] formatında loglar.

## Kapsam Dışı

- Model konuşma geçmişi (transcript)

## Diğer Dokümanlarla İlişki

- Primary Owner: Chronological execution audit trace.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Run adımlarının ne zaman ve nasıl yapıldığını belgeler.

## Validation Beklentileri

- Zaman sırasına göre yazılmalıdır.

---

# OUTPUT DOCUMENT START

# Run Execution Log — {{RUN_ID}}

## 1. Kronolojik Çalışma Günlüğü

{{CHRONOLOGICAL_LOG_ENTRIES}}

[CONDITIONAL: include only if errors occurred]
## 2. Hata ve İstisna Günlükleri

- Run sırasında karşılaşılan teknik aksamalar ve atılan adımlar.

# OUTPUT DOCUMENT END
