# VALIDATE_PROJECT_PROMPT

## Template Metadata

```yaml
template_id: validate-project-prompt
template_name: Validate Project Prompt Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: prompt
category: prompts
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - outputs_package
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

Üretilen proje dokümantasyon paketini `engine/VALIDATION_RULES.md` standartlarına göre denetleyen ve doğrulama raporu çıkartan prompt şablonudur.

## Kullanım Koşulları

Validation Run sırasında veya teslimat öncesi denetimde kullanılır.

## İçerik Üretim Kuralları

- Model bağımsızdır.
- Ajanı `engine/VALIDATION_RULES.md` kurallarını eksiksiz denetlemeye yönlendirir.

---

# PROMPT START

# Proje Doğrulama Talimatı (Validate Project)

Üretilen dokümantasyon paketini denetlemek için aşağıdaki adımları uygula:

1. **Sözleşmeleri Oku**:
   - `engine/VALIDATION_RULES.md`
   - `engine/DOCUMENT_CATALOG.md`
   - `engine/INFORMATION_MAP.md`

2. **Denetim Listesi (Validation Checks)**:
   - **Varlık Kontrolü**: Seçilen pakette zorunlu tüm belgeler `outputs/` klasöründe mevcut mu?
   - **Katalog ve ID Uyumu**: Doküman isimleri ve katalog kimlikleri eşleşiyor mu?
   - **Bilgi Sahipliği Denetimi**: Bilgi kopyalanmış mı yoksa referans mı verilmiş?
   - **Eksik Bilgi Denetimi**: Çözülmemiş placeholder veya yetkisiz varsayım var mı?
   - **Çapraz Tutarlılık**: Belgeler arası birbiriyle çelişen mimarlık veya ürün kararları var mı?

3. **Rapor Oluşturma**:
   - Denetim sonuçlarını `templates/runs/VALIDATION_REPORT_TEMPLATE.md` formatında kaydet.
   - Kritik hata (`Severity: Critical`) varsa çalışmayı durdur ve `Validation Failed` olarak raporla.

# PROMPT END
