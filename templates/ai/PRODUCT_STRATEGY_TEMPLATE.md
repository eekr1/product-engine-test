# PRODUCT_STRATEGY_TEMPLATE

## Template Metadata

```yaml
template_id: product-strategy-template
template_name: Product Strategy Template
document_id: PROD-STRAT
version: 1.0.0
status: active
template_type: document
category: ai
supported_packages:
  - saas
  - corporate-website
  - demo-frontend
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs:
  - market_research
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
output_filename: PRODUCT_STRATEGY.md
```

## Amaç

Ürünün pazar konumlanmasını, rekabet analizini, gelir modelini ve uzun vadeli büyüme stratejisini tanımlamak.

## Kullanım Koşulları

Koşullu dokümandır (`Required: conditional`). Yalnızca pazar ve ticari büyüme hedefi olan projelerde üretilir. Varsayım olarak üretilmemelidir.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`

## Zorunlu Bölümler

- Pazar Konumlanması (Market Positioning)
- Rekabet Bağlamı ve Farklılaşma (Competitive Context)
- Gelir Yaklaşımı ve Model (Monetization Approach)
- Büyüme ve Ölçeklenme Yönü (Growth Direction)

## Koşullu Bölümler

- `[CONDITIONAL: include only if product pricing tiers exist]` Fiyatlandırma ve Paket Modelleri

## İçerik Üretim Kuralları

- Ticari ve stratejik hedeflere odaklanmalı; teknik detay veya kod yapısına girmemelidir.
- Onaylanmamış pazar verisi uydurulmamalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{MARKET_POSITIONING}}`: Pazar konumlandırma tanımı.
- `{{COMPETITIVE_LANDSCAPE}}`: Rakipler ve fark yaratan unsurlar.
- `{{MONETIZATION_MODEL}}`: Gelir ve iş modeli.
- `{{GROWTH_STRATEGY}}`: Büyüme hedefleri ve yol haritası stratejisi.

## Kapsam Dışı

- İş mantığı kuralları (bkz: `PRODUCT_RULES.md`)
- Teknik altyapı maliyet detayları (bkz: `OPERATIONS.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `market_positioning`, `competitive_context`, `growth_targets`, `monetization_approach`.
- Referenced By: `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`.

## Delivery Profile Davranışı

- **Implementation Ready**: Temel pazar konumlandırması ve hedef kitle stratejisi.
- **Production Ready**: Detaylı gelir modelleri, büyüme metrikleri ve pazar riski analizleri.

## Validation Beklentileri

- `PROJECT_BRAIN.md` projesinin vizyonuyla tam uyumlu olmalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Product Strategy

## 1. Pazar Konumlanması

{{MARKET_POSITIONING}}

## 2. Rekabet Bağlamı ve Farklılaşma

{{COMPETITIVE_LANDSCAPE}}

## 3. Gelir Yaklaşımı ve İş Modeli

{{MONETIZATION_MODEL}}

## 4. Büyüme ve Ölçeklenme Yönü

{{GROWTH_STRATEGY}}

[CONDITIONAL: include only if product pricing tiers exist]
## 5. Fiyatlandırma ve Paket Modelleri

- Fiyatlandırma katmanları ve sunulan değer paketi tanımları.

# OUTPUT DOCUMENT END
