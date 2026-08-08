# START_PROJECT_PROMPT

## Template Metadata

```yaml
template_id: start-project-prompt
template_name: Start Project Prompt Template
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
  - approved_intake
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

Product Engine ile yeni bir proje üretim (generation) çalışmasını başlatan repository-first ve model-bağımsız ajana yönelik başlatma prompt şablonudur.

## Kullanım Koşulları

Yeni proje generation run başlatılırken kullanılır.

## İçerik Üretim Kuralları

- Model bağımsızdır (Claude, Gemini, GPT vb. model isimleri içermez).
- Ajanı önce authoritative repository belgelerini okumaya yönlendirir.
- Pipeline aşamalarını bypass etmez; dokümanları önce `working-output` dizininde üretir, doğrular ve onay sonrası `outputs/` klasörüne taşır.

---

# PROMPT START

# Proje Başlatma Talimatı (Start Project)

`engine/GENERATION_PIPELINE.md` ve `engine/RUN_PROTOCOL.md` sözleşmeleri uyarınca aşağıdaki adımları sırayla uygulayarak proje üretim çalışmasını (Generation Run) yürüt:

1. **Repository-First Bağlam Kontrolü**:
   - `PRODUCT_ENGINE_BRAIN.md`
   - `engine/DOCUMENT_CATALOG.md`
   - `engine/INFORMATION_MAP.md`
   - `engine/PACKAGE_RULES.md`
   - `engine/GENERATION_PIPELINE.md`
   - `engine/RUN_PROTOCOL.md`
   - `engine/VALIDATION_RULES.md`
   belgelerini sırayla oku.

2. **Girdi Doğrulama ve Paket Seçimi**:
   - `inputs/` klasöründeki onaylı proje girdisini (`APPROVED`) incele.
   - `engine/PACKAGE_RULES.md` uyarınca paket ve Delivery Profile seçimini yap.

3. **Run Başlatma ve Snapshot**:
   - `RUN-<YYYYMMDD>-<sequence>` formatında benzersiz `Run ID` oluştur.
   - `runs/active/<run-id>/` klasörünü açarak `RUN_MANIFEST.md`, `INPUT_SNAPSHOT.md` ve `PACKAGE_SELECTION.md` belgelerini initialized durumda kaydet.

4. **Taslak Üretim (Working Output)**:
   - Seçilen dokümanları `templates/` şablonları ve `engine/INFORMATION_MAP.md` sorumluluk sınırları uyarınca `runs/active/<run-id>/working-output/` dizininde üret.

5. **Doğrulama ve Onarım (Validation & Repair)**:
   - `working-output` içeriğini `engine/VALIDATION_RULES.md` standartlarına göre denetle.
   - `VALIDATION_REPORT.md` raporunu oluştur. Hata varsa (FAIL) `Repair` adımlarını uygula.

6. **Final Output ve Run Kapanışı**:
   - Validation `PASS` veya onaylı `CONDITIONAL PASS` aldığında, temiz çıktı paketini `outputs/<category>/<project-slug>/versions/<output-version>/` konumuna yerleştir.
   - Run durumunu `Completed` yaparak run klasörünü `runs/completed/<run-id>/` konumuna taşı.

Sessizce eksik bilgi uydurma; belirsizlik durumunda `engine/ASSUMPTION_RULES.md` uygulayarak varsayımları kaydet.

# PROMPT END
