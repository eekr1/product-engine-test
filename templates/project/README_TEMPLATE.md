# README_TEMPLATE

## Template Metadata

```yaml
template_id: readme-template
template_name: Project README Template
document_id: README-DOC
version: 1.0.0
status: active
template_type: document
category: project
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
output_filename: README.md
```

## Amaç

Projeye yeni katılan geliştirici veya ajan için başlangıç noktasını oluşturmak; projeyi kurma, çalıştırma ve ana dokümanlara erişim rehberliğini sağlamak.

## Kullanım Koşulları

Tüm projelerde zorunludur (`Required: required`).

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `PROJECT_BRAIN.md`, `TECH_CONTEXT.md`

## Zorunlu Bölümler

- Proje Başlığı ve Özet (Project Title & Summary)
- Hızlı Başlangıç Rehberi (Quick Start Guide)
- Ana Doküman Haritası (Key Documents Map)
- Çalıştırma ve Test Komutları (Run & Test Commands)

## Koşullu Bölümler

- `[CONDITIONAL: include only if environment variables exist]` Ortam Değişkenleri Rehberi

## İçerik Üretim Kuralları

- README diğer belgelerin (örn: `TECH_CONTEXT`, `PRODUCT_RULES`) uzun detaylarını tekrar etmemelidir.
- Yönlendirici, kısa ve açık bir giriş noktası olmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{PROJECT_SUMMARY}}`: Kısa proje tanımı.
- `{{QUICK_START_STEPS}}`: Kurulum ve çalıştırma adımları.
- `{{KEY_DOCUMENTS_LIST}}`: Proje içi ana dokümanların linkli listesi.
- `{{COMMANDS_LIST}}`: npm/yarn/make/docker vb. temel çalıştırma komutları.

## Kapsam Dışı

- Detaylı ürün kuralları (bkz: `PRODUCT_RULES.md`)
- Tam API endpoint şemaları (bkz: `API_CONTRACTS.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `project_summary`, `how_to_start`, `key_documents`, `project_links`.
- Referenced By: — (Giriş noktasıdır).

## Delivery Profile Davranışı

- Projenin her geliştirme ve canlı aşamasında en güncel çalıştırma talimatlarını barındırır.

## Validation Beklentileri

- `PROJECT_BRAIN.md` ve `TECH_CONTEXT.md` ile çelişen çalıştırma komutu veya tanım içermemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}}

{{PROJECT_SUMMARY}}

## 1. Hızlı Başlangıç (Quick Start)

{{QUICK_START_STEPS}}

## 2. Çalıştırma Komutları

{{COMMANDS_LIST}}

## 3. Ana Dokümantasyon Haritası

{{KEY_DOCUMENTS_LIST}}

[CONDITIONAL: include only if environment variables exist]
## 4. Ortam Değişkenleri

- Gerekli `.env` değişkenleri ve yapılandırma talimatları için bkz: [ENV_EXAMPLE_TEMPLATE.md](file:///ENV_EXAMPLE_TEMPLATE.md)

# OUTPUT DOCUMENT END
