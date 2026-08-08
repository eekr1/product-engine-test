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
- Ajanı önce authoritative repository belgelerini okumaya zorlar.
- Uzun manuel metinler içermez; görevi ilgili sözleşmeler üzerinden başlatır.

---

# PROMPT START

# Proje Başlatma Talimatı (Start Project)

Aşağıdaki adımları sırayla izleyerek proje üretim çalışmasını (Generation Run) başlat:

1. **Repository-First Bağlam Kontrolü**:
   - `PRODUCT_ENGINE_BRAIN.md`
   - `engine/DOCUMENT_CATALOG.md`
   - `engine/INFORMATION_MAP.md`
   - `engine/PACKAGE_RULES.md`
   - `engine/RUN_PROTOCOL.md`
   belgelerini sırayla oku.

2. **Girdi Doğrulama**:
   - `inputs/` klasöründeki onaylı proje girdisini (`APPROVED`) incele.

3. **Paket ve Profil Seçimi**:
   - `engine/PACKAGE_RULES.md` kurallarına göre uygun paketi ve Delivery Profile seviyesini seç.

4. **Run Kaydı Başlatma**:
   - `templates/runs/` şablonlarını kullanarak `runs/active/<run-id>/` altında `RUN_MANIFEST.md`, `INPUT_SNAPSHOT.md` ve `PACKAGE_SELECTION.md` belgelerini oluştur.

5. **Üretime Geçiş**:
   - Kataloğa uygun dokümanları `templates/` şablonları uyarınca üret ve `outputs/` hedefinde konumlandır.

Sessizce eksik bilgi uydurma; belirsizlik durumunda `engine/ASSUMPTION_RULES.md` uygulayarak varsayımları kaydet.

# PROMPT END
