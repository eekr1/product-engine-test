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

Projenin onaylı teknik bağlamında (`TECH_CONTEXT.md` ve `DEPLOYMENT.md`) tanımlanan ortam değişkenlerinin (environment variables) örnek yapılandırma dosyasını (`.env.example`) stack-bağımsız standart bir yapıda sunmak.

## Kullanım Koşulları

Ortam değişkeni kullanan tüm projelerde bir yapısal şablon olarak kullanılır.

## Girdi Kaynakları

- `TECH_CONTEXT.md`, `DEPLOYMENT.md`

## Zorunlu Bölümler

- Uygulama ve Sunucu Yapılandırması (Application Configuration)

## Koşullu Bölümler

- `[CONDITIONAL: include only if database exists]` Veritabanı Yapılandırması (Database Configuration)
- `[CONDITIONAL: include only if authentication exists]` Kimlik Doğrulama ve Güvenlik (Authentication / Security)
- `[CONDITIONAL: include only if third-party services exist]` Dış Servis ve API Anahtarları (External Services)

## İçerik Üretim Kuralları

- Şablon belirli bir dil, framework (Node.js, Python, Go vb.), veritabanı (PostgreSQL, MongoDB vb.) veya auth kütüphanesi (NextAuth, OAuth vb.) varsaymaz.
- Değişken isimleri onaylı teknik bağlamdan (`TECH_CONTEXT.md`) türetilir.
- GERÇEK SECRET, PASSWORD, TOKEN VEYA PRIVATE KEY İÇERMEMELİDİR. Yalnızca örnek/placeholder değerler sunulur.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{APP_ENV_VARIABLES_BLOCK}}`: Uygulama sunucu ayarları değişken blokları.
- `{{DATABASE_ENV_VARIABLES_BLOCK}}`: Veritabanı bağlantı değişken blokları.
- `{{AUTH_ENV_VARIABLES_BLOCK}}`: Auth ve güvenlik değişken blokları.
- `{{THIRD_PARTY_ENV_VARIABLES_BLOCK}}`: Dış entegrasyon değişken blokları.

## Kapsam Dışı

- Gerçek canlı ortam değişkeni değerleri ve gizli anahtarlar

## Diğer Dokümanlarla İlişki

- Primary Owner: Proje konfigürasyon şablonu.
- Referenced By: `DEPLOYMENT.md`, `README.md`.

## Delivery Profile Davranışı

- Geliştirme ve canlı ortamlarda güvenli konfigürasyon yapısı sağlar.

## Validation Beklentileri

- Hiçbir gerçek credential veya secret kalmamalıdır.
- Belirli bir framework veya veritabanı dayatması yapılmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Environment Variables (.env.example)

# ==========================================
# Uygulama ve Sunucu Yapılandırması
# ==========================================
{{APP_ENV_VARIABLES_BLOCK}}

[CONDITIONAL: include only if database exists]
# ==========================================
# Veritabanı Yapılandırması
# ==========================================
{{DATABASE_ENV_VARIABLES_BLOCK}}

[CONDITIONAL: include only if authentication exists]
# ==========================================
# Kimlik Doğrulama ve Güvenlik
# ==========================================
{{AUTH_ENV_VARIABLES_BLOCK}}

[CONDITIONAL: include only if third-party services exist]
# ==========================================
# Dış Servisler ve API Anahtarları
# ==========================================
{{THIRD_PARTY_ENV_VARIABLES_BLOCK}}

# OUTPUT DOCUMENT END
