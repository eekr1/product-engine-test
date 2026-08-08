# API_CONTRACTS_TEMPLATE

## Template Metadata

```yaml
template_id: api-contracts-template
template_name: API Contracts Template
document_id: API
version: 1.0.0
status: active
template_type: document
category: project
supported_packages:
  - api-service
  - web-app
  - mobile-app
  - saas
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - TECH-CTX
  - DATA
output_filename: API_CONTRACTS.md
```

## Amaç

Sistemin iç ve dış API yüzeyini, endpoint tanımlarını, istek/cevap biçimlerini, kimlik doğrulama yöntemlerini ve hata kodlarını açık sözleşmelerle tanımlamak.

## Kullanım Koşulları

API veya HTTP servisi sunan tüm projelerde zorunludur.

## Girdi Kaynakları

- `TECH_CONTEXT.md`
- `DATA_MODEL.md`

## Zorunlu Bölümler

- Ortak Standartlar ve Auth Yöntemi (Global Standards & Auth)
- Endpoint Tanımları (Endpoint Contracts)
- İstek ve Cevap Şemaları (Request/Response Schemas)
- Standart Hata Kodları ve Yanıtları (Standard Error Codes)

## Koşullu Bölümler

- `[CONDITIONAL: include only if webhooks exist]` Webhook ve Olay Bildirimleri

## İçerik Üretim Kuralları

- Belirli bir REST/GraphQL veya gRPC teknolojisini zorlamamalı; seçilen mimariye uygun tekrarlanabilir endpoint yapısı sağlamalıdır.
- Endpoint Yapısı: Endpoint, Amaç, Method, Path, Auth, Request Body/Params, Validation, Response (Success/Error), Side Effects.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{BASE_URL_AND_AUTH_SUMMARY}}`: Base URL, auth başlıkları ve versiyonlama stratejisi.
- `{{ENDPOINTS_LIST_BLOCK}}`: Endpoint detay bloklarının listesi.
- `{{ERROR_CODES_TABLE}}`: Standart HTTP/Hata kodları tablosu.

## Kapsam Dışı

- Veritabanı tablo tasarımları (bkz: `DATA_MODEL.md`)
- Sunucu konfigürasyonu (bkz: `DEPLOYMENT.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `endpoints`, `request_formats`, `response_formats`, `auth_method`, `error_codes`.
- Referenced By: `TEST_STRATEGY.md`, `WAVE_PLAN.md`.

## Delivery Profile Davranışı

- **Implementation Ready**: Tüm endpoint'ler, parametreler, veri tipleri ve başarı yanıtları.
- **Production Ready**: Rate limiting, caching headers, detaylı hata senaryoları ve güvenlik sınırları.

## Validation Beklentileri

- Auth yöntemi `TECH_CONTEXT.md` ile birebir uyumlu olmalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — API Contracts

## 1. Ortak Standartlar ve Kimlik Doğrulama

- **Base URL**: `{{BASE_URL}}`
- **Authentication**: {{BASE_URL_AND_AUTH_SUMMARY}}
- **İçerik Tipi**: `application/json`

## 2. Endpoint Sözleşmeleri

{{ENDPOINTS_LIST_BLOCK}}

## 3. Standart Hata Kodları ve Yanıt Formatı

{{ERROR_CODES_TABLE}}

[CONDITIONAL: include only if webhooks exist]
## 4. Webhook ve Olay Bildirimleri

- Webhook olay türleri, imza doğrulaması ve payload yapıları.

# OUTPUT DOCUMENT END
