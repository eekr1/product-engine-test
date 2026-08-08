# ENV_EXAMPLE_TEMPLATE

## Template Metadata

```yaml
template_id: env-example-template
template_name: Env Example Structural Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: structural
category: project
supported_packages:
  - all
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - tech_context
conditional_inputs: []
dependencies: []
output_filename: .env.example
```

## Amaç

Projenin ihtiyaç duyduğu ortam değişkenlerinin (environment variables) örnek yapılandırma dosyasını (`.env.example`) standart bir yapıda sunmak.

## Kullanım Koşulları

Ortam değişkeni kullanan tüm projelerde bir yapısal şablon olarak kullanılır.

## Girdi Kaynakları

- `TECH_CONTEXT.md`, `DEPLOYMENT.md`

## Zorunlu Bölümler

- Uygulama ve Sunucu Ayarları (App & Server Config)
- Veritabanı Yapılandırması (Database Config)
- Kimlik Doğrulama ve Güvenlik (Auth & Security)

## Koşullu Bölümler

- `[CONDITIONAL: include only if third-party services are used]` Dış Servis ve API Anahtarları

## İçerik Üretim Kuralları

- GERÇEK SECRET, PASSWORD, TOKEN VEYA PRIVATE KEY İÇERMEMELİDİR.
- Her değişken için açıklama, örnek/varsayılan değer ve zorunluluk durumu belirtilmelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{ENV_VARIABLES_BLOCK}}`: Ortam değişkenlerinin açıklamalı listesi.

## Kapsam Dışı

- Gerçek canlı ortam değişkeni değerleri (üretilmez ve saklanmaz)

## Diğer Dokümanlarla İlişki

- Primary Owner: Proje konfigürasyon şablonu.
- Referenced By: `DEPLOYMENT.md`, `README.md`.

## Delivery Profile Davranışı

- Geliştirme ve canlı ortamlarda güvenli konfigürasyon yapısı sağlar.

## Validation Beklentileri

- Hiçbir gerçek credential veya secret kalmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Environment Variables (.env.example)

# ==========================================
# Uygulama ve Sunucu Ayarları
# ==========================================
NODE_ENV=development # development | staging | production
PORT=3000
APP_URL=http://localhost:3000

# ==========================================
# Veritabanı Yapılandırması
# ==========================================
DATABASE_URL=postgresql://user:password@localhost:5432/dbname?schema=public

# ==========================================
# Kimlik Doğrulama ve Güvenlik
# ==========================================
AUTH_SECRET=your_jwt_or_session_secret_here
NEXTAUTH_URL=http://localhost:3000

[CONDITIONAL: include only if third-party services are used]
# ==========================================
# Dış Servis ve API Anahtarları
# ==========================================
THIRD_PARTY_API_KEY=your_api_key_here

# OUTPUT DOCUMENT END
