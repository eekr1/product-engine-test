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
  - working_output
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

`runs/active/<run-id>/working-output/` dizinindeki çalışma taslaklarını `engine/VALIDATION_RULES.md` standartlarına göre denetleyen ve doğrulama raporu çıkartan prompt şablonudur.

## Kullanım Koşulları

Validation Run sırasında veya nihai teslimat öncesi denetimde kullanılır.

## İçerik Üretim Kuralları

- Model bağımsızdır.
- Working output belgelerini `engine/VALIDATION_RULES.md` kurallarına göre denetler.
- Genel doğrulama sonucu için `PASS`, `CONDITIONAL PASS` veya `FAIL` standart vocabulary'sini kullanır.

---

# PROMPT START

# Proje Doğrulama Talimatı (Validate Project)

`runs/active/<run-id>/working-output/` dizininde üretilmiş dokümantasyon paketini denetlemek için aşağıdaki adımları uygula:

1. **Sözleşmeleri Oku**:
   - `engine/VALIDATION_RULES.md`
   - `engine/DOCUMENT_CATALOG.md`
   - `engine/INFORMATION_MAP.md`

2. **Denetim Listesi (Validation Checks)**:
   - **Varlık Kontrolü**: Seçilen pakette required ve applicable olan tüm belgeler `working-output/` klasöründe mevcut mu?
   - **Katalog ve ID Uyumu**: Doküman isimleri ve katalog kimlikleri eşleşiyor mu?
   - **Bilgi Sahipliği Denetimi**: Bilgi kopyalanmış mı yoksa `engine/INFORMATION_MAP.md` uyarınca referans mı verilmiş?
   - **Eksik Bilgi Denetimi**: Çözülmemiş placeholder veya yetkisiz varsayım var mı?
   - **Çapraz Tutarlılık**: Belgeler arası birbiriyle çelişen mimarlık veya ürün kararları var mı?

3. **Rapor Oluşturma**:
   - Denetim sonuçlarını `RUN_MANIFEST.md` ve `VALIDATION_REPORT.md` içinde `PASS`, `CONDITIONAL PASS` veya `FAIL` olarak kaydet.
   - Kritik hata (`Severity: Critical`) varsa genel sonucu `FAIL` olarak belirle ve repair aşamasını başlat.

# PROMPT END
