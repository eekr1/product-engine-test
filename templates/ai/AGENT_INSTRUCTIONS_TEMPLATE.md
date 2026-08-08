# AGENT_INSTRUCTIONS_TEMPLATE

## Template Metadata

```yaml
template_id: agent-instructions-template
template_name: Agent Instructions Template
document_id: AGENT-INST
version: 1.0.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
output_filename: AGENT_INSTRUCTIONS.md
```

## Amaç

Projede görev alacak yapay zeka ajanı için projeye özel çalışma kurallarını, kodlama konvansiyonlarını, iletişim tarzını ve davranış önceliklerini tanımlamak.

## Kullanım Koşulları

Implementation Ready ve Production Ready projelerde zorunludur.

## Girdi Kaynakları

- `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`, `TECH_CONTEXT.md`

## Zorunlu Bölümler

- Ajan Davranış Kuralları (Agent Behavior Rules)
- Kodlama Konvansiyonları ve Standartları (Coding Conventions)
- İletişim ve Raporlama Tarzı (Communication Style)
- Doğrulama ve Test Yükümlülükleri (Verification Mandates)

## Koşullu Bölümler

- `[CONDITIONAL: include only if project has strict security rules]` Güvenlik ve Gizlilik Kuralları

## İçerik Üretim Kuralları

- Model bağımsız olmalıdır (Claude, Gemini, GPT veya Codex'e özel ifade veya davranış yazılmamalıdır).
- Product Engine sözleşmeleriyle (`engine/`) çelişen talimatlar verilmemelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{BEHAVIOR_RULES_LIST}}`: Projeye özel ajan davranış ilkeleri.
- `{{CODING_CONVENTIONS_LIST}}`: Kodlama standartları ve dosya düzeni kuralları.
- `{{COMMUNICATION_STYLE_RULES}}`: Raporlama ve açıklama formatı kuralları.

## Kapsam Dışı

- Ürün iş mantığı kuralları (bkz: `PRODUCT_RULES.md`)
- Genel Product Engine çalıştırma kuralları (bkz: `engine/RUN_PROTOCOL.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `agent_behavior_rules`, `working_priorities`, `coding_conventions`, `communication_style`.
- Referenced By: `PROJECT_BRAIN.md`, `README.md`.

## Delivery Profile Davranışı

- Projeye atanan ajanın koda müdahale etmeden önce uyması gereken sınırları tam ve net bir dille belirtir.

## Validation Beklentileri

- Hiçbir model spesifik prompt veya private chain-of-thought talebi bulunmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Agent Instructions

## 1. Ajan Davranış Kuralları

{{BEHAVIOR_RULES_LIST}}

## 2. Kodlama Konvansiyonları ve Standartları

{{CODING_CONVENTIONS_LIST}}

## 3. İletişim ve Raporlama Tarzı

{{COMMUNICATION_STYLE_RULES}}

## 4. Doğrulama ve Test Yükümlülükleri

- Değişiklikler sonrası kod derlenme ve test doğrulama kuralları.

[CONDITIONAL: include only if project has strict security rules]
## 5. Güvenlik ve Gizlilik Kuralları

- Hassas veriler, API key'ler ve yetkilendirme katmanları ile ilgili kısıtlamalar.

# OUTPUT DOCUMENT END
