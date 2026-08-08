# DATA_MODEL_TEMPLATE

## Template Metadata

```yaml
template_id: data-model-template
template_name: Data Model Template
document_id: DATA
version: 1.0.0
status: active
template_type: document
category: project
supported_packages:
  - web-app
  - api-service
  - mobile-app
  - saas
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
  - TECH-CTX
output_filename: DATA_MODEL.md
```

## Amaç

Sistemdeki veri varlıklarını (entities), alan tanımlarını (fields), varlık ilişkilerini (relationships), kısıtlamaları (constraints), indeksleri, veri akışını ve kalıcılık (persistence) kararlarını tanımlamak.

## Kullanım Koşulları

Veri saklayan veya işleyen tüm sistemlerde zorunludur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `PROJECT_BRAIN.md`, `TECH_CONTEXT.md`

## Zorunlu Bölümler

- Veri Varlıkları ve Alanlar (Entities & Fields)
- Varlık İlişkileri ve Kardinalite (Relationships & Cardinality)
- Veri Akışı ve Kalıcılık Kararları (Data Flow & Persistence)
- Doğrulama ve Kısıtlamalar (Constraints & Validation)

## Koşullu Bölümler

- `[CONDITIONAL: include only if database indexing is needed]` İndeksleme ve Performans Kuralları

## İçerik Üretim Kuralları

- Varlıklar ve alanlar tip, zorunluluk ve açıklama detaylarıyla sunulmalıdır.
- API Endpoint ayrıntılarını sahiplenmemelidir (bkz: `API_CONTRACTS.md`).

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{ENTITIES_SPECIFICATION_BLOCK}}`: Varlıklar, alan adları, tipler ve açıklamaları.
- `{{RELATIONSHIPS_DIAGRAM_OR_TABLE}}`: Varlık ilişkileri ve kardinalite (1:1, 1:N, N:M).
- `{{PERSISTENCE_DECISIONS_SUMMARY}}`: Veritabanı seçimi, ORM ve kalıcılık stratejisi.
- `{{CONSTRAINTS_LIST}}`: Unique, Foreign Key, Check vb. kısıtlamalar.

## Kapsam Dışı

- API İstek/Cevap şemaları (bkz: `API_CONTRACTS.md`)
- UI Form Tasarımları (bkz: `DESIGN_RULES.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `entities`, `relationships`, `data_flows`, `storage_decisions`.
- Referenced By: `API_CONTRACTS.md`, `TECH_CONTEXT.md`.

## Delivery Profile Davranışı

- **Implementation Ready**: Tam varlık tanımları, alan tipleri ve ilişki yapısı.
- **Production Ready**: İndeksleme stratejileri, veri göçü (migration) ve arşivleme kuralları.

## Validation Beklentileri

- Varlıklar `PRODUCT_RULES.md` içindeki iş kurallarını eksiksiz karşılamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Data Model

## 1. Veri Varlıkları ve Alan Tanımları (Entities & Fields)

{{ENTITIES_SPECIFICATION_BLOCK}}

## 2. Varlık İlişkileri ve Kardinalite

{{RELATIONSHIPS_DIAGRAM_OR_TABLE}}

## 3. Veri Akışı ve Kalıcılık Kararları

{{PERSISTENCE_DECISIONS_SUMMARY}}

## 4. Kısıtlamalar ve Doğrulama Kuralları

{{CONSTRAINTS_LIST}}

[CONDITIONAL: include only if database indexing is needed]
## 5. İndeksleme ve Performans Kuralları

- Sık sorgulanan alanlar için indeks ve performans stratejileri.

# OUTPUT DOCUMENT END
