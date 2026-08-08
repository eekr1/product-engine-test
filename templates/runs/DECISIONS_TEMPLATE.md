# DECISIONS_TEMPLATE

## Template Metadata

```yaml
template_id: run-decisions-template
template_name: Run Decisions Operational Template
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
output_filename: DECISIONS.md
```

## Amaç

Sadece tek bir run sırasında alınan operasyonel ve yürütme (execution) seviyesindeki kararları kaydetmek.

## Kullanım Koşulları

Run yürütmesi sırasında operasyonel karar alındığında kullanılır.

## Girdi Kaynakları

- Run Yürütme Adımları

## Zorunlu Bölümler

- Operasyonel Karar Girişleri (Run Decision Entries)

## Koşullu Bölümler

- `[CONDITIONAL: include only if execution path changed]` Yürütme Yolu Değişiklik Kararları

## İçerik Üretim Kuralları

- Proje seviyesindeki kalıcı `DECISIONS.md` belgesi ile karıştırılmamalıdır. Bu belge run yürütmesine (örn: doküman üretim sırası, paket daraltma kararı) odaklanır.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{RUN_DECISIONS_TABLE}}`: Operasyonel kararlar tablosu (Decision ID, Topic, Decision, Rationale, Date).

## Kapsam Dışı

- Proje mimarlık ve ürün kararları (bkz: `templates/ai/DECISIONS_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Run operasyonel karar tescili.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Run operasyon adımlarının gerekçeli takibini sağlar.

## Validation Beklentileri

- Yalnızca run operasyonel kararlarını barındırmalıdır.

---

# OUTPUT DOCUMENT START

# Run Decisions Log — {{RUN_ID}}

## 1. Operasyonel Karar Girişleri

{{RUN_DECISIONS_TABLE}}

[CONDITIONAL: include only if execution path changed]
## 2. Yürütme Yolu Değişiklik Kararları

- Çalışma planında anlık yapılan strateji değişiklikleri ve nedenleri.

# OUTPUT DOCUMENT END
