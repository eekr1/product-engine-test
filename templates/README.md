# Product Engine Templates

Product Engine'in `templates/` katmanı, seçilen dokümanların nasıl ve hangi yapıda üretileceğini tanımlayan model-bağımsız üretim sözleşmeleridir.

## Amaç ve Sorumluluk Sınırı

`templates/` klasörü şu soruların yanıtını verir:
- Seçilen doküman hangi yapı ve standart ile oluşturulmalıdır?
- Hangi bölümler zorunlu, hangi bölümler koşulludur?
- Hangi bilgi hangi kaynaktan alınmalı veya türetilmelidir?
- Eksik veya belirsiz bilgiyle `ASSUMPTION_RULES.md` uyarınca nasıl davranılmalıdır?
- Farklı Delivery Profile seviyelerinde (Foundation, Prototype, Implementation Ready, Production Ready) ayrıntı seviyesi nasıl ölçeklenmelidir?
- Nihai çıktı dokümanı nasıl görünmelidir?

### Template Ne Deyildir?
- Doküman varlık veya zorunluluk kararlarının merkezi değildir (`engine/DOCUMENT_CATALOG.md` ve `packages/` owner'dır).
- Bilgi sahipliği dağıtım haritası değildir (`engine/INFORMATION_MAP.md` owner'dır).
- Eksik bilgi kurallarının karar merkezi değildir (`engine/ASSUMPTION_RULES.md` owner'dır).
- Gerçek run operasyon verilerinin tutulduğu yer değildir (Authority buradadır, uygulama `runs/` klasöründedir).
- Model-özel (Claude, Gemini, GPT) prompt deposu değildir.

---

## Template Kategorileri

`templates/` klasörü 6 ana alt klasörden oluşur:

1. **`ai/` (AI Context & Rule Templates)**:
   - Ajanın okuyacağı ve projenin bağlamını, ürün kurallarını, teknik sınırlarını, karar kayıtlarını ve durumunu yöneten ana doküman template'leri (`PROJECT_BRAIN`, `PRODUCT_RULES`, `TECH_CONTEXT`, `PRODUCT_STRATEGY`, `CURRENT_STATUS`, `NEXT_TASKS`, `DECISIONS`, `AGENT_INSTRUCTIONS`).

2. **`project/` (Project Specs & Architecture Templates)**:
   - Proje teslimi, mimarisi ve operasyonuna yönelik doküman template'leri (`README`, `PROJECT_PLAN`, `DATA_MODEL`, `API_CONTRACTS`, `DEPLOYMENT`, `OPERATIONS`, `TEST_STRATEGY`, `ENV_EXAMPLE`).

3. **`design/` (Design Rules & UI Structural Templates)**:
   - Görsel dil, UI bileşenleri, sayfa spesifikasyonları ve sistem durumlarına ait tasarım template'leri (`DESIGN_RULES`, `DESIGN_SYSTEM`, `DESIGN_PACKAGE`, `GLOBAL_SHELL`, `PAGE_SPEC`, `COMPONENT_SPEC`, `SYSTEM_STATES`).

4. **`waves/` (Delivery Wave Templates)**:
   - Aşamalı teslimat (wave) süreçlerine ait harita, plan ve standart dalga template'leri (`WAVE_MAP`, `WAVE_PLAN`, `STANDARD_WAVE`).

5. **`prompts/` (Agent Execution Prompts)**:
   - Ajanı repository-first ve authoritative belgelere yönlendirerek çalıştıran model-bağımsız prompt template'leri (`START_PROJECT_PROMPT`, `START_WAVE_PROMPT`, `CONTINUE_WAVE_PROMPT`, `UPDATE_DOCS_PROMPT`, `VALIDATE_PROJECT_PROMPT`).

6. **`runs/` (Run Operational Templates)**:
   - Run yaşam döngüsündeki operasyonel kayıt ve rapor şablonları (`RUN_MANIFEST`, `INPUT_SNAPSHOT`, `PACKAGE_SELECTION`, `SOURCE_REGISTER`, `ASSUMPTIONS`, `CONFLICTS`, `DECISIONS`, `RUN_LOG`, `PROGRESS`, `VALIDATION_REPORT`, `COMPLETION_REPORT`).

---

## Template Türleri

- **Document Templates (`template_type: document`)**: `engine/DOCUMENT_CATALOG.md` içerisinde tanımlı `Document ID` karşılığı olan bağımsız doküman üretim şablonlarıdır.
- **Structural Templates (`template_type: structural`)**: Başka dokümanların içinde tekrar eden bileşen, sayfa veya wave yapılarını tanımlayan şablonlardır (`document_id: not_applicable`).
- **Prompt Templates (`template_type: prompt`)**: Ajan çalışma döngülerini başlatan model-bağımsız talimat şablonlarıdır (`document_id: not_applicable`).
- **Operational Templates (`template_type: operational`)**: `RUN_MANIFEST` dışındaki run kayıtlarının operasyonel şablonlarıdır (`RUN_MANIFEST` hariç `document_id: not_applicable`).

---

## Metadata Standardı

Tüm template dosyaları YAML formatında aşağıdaki ortak metadata bloğunu taşır:

```yaml
template_id: <unique-template-id>
template_name: <Template Name>
document_id: <CATALOG-ID | not_applicable>
version: 1.0.0
status: active
template_type: document | structural | prompt | operational
category: ai | project | design | waves | prompts | operational
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - intake_data
conditional_inputs: []
dependencies: []
output_filename: <OUTPUT_FILENAME.md | not_applicable>
```

---

## Placeholder Standardı

Template'lerde dinamik olarak doldurulacak alanlar için aşağıdaki standart kullanılır:

```text
{{PLACEHOLDER_NAME}}
```

- Kurallar: Büyük harf, İngilizce, alt çizgi (`_`) ile ayrılmış, açık ve standart isimlendirme (örn: `{{PROJECT_NAME}}`, `{{TECH_STACK}}`, `{{TARGET_USERS_LIST}}`).
- Koşullu Bölümler: `[CONDITIONAL: include only if <condition>]` bloğu ile işaretlenir.

---

## Okuma ve Uygulama Sırası

1. `engine/DOCUMENT_CATALOG.md` ve `engine/INFORMATION_MAP.md` ile sorumluluk sınırlarını doğrula.
2. Üretilecek dokümanın `templates/` altındaki ilgili template'ini seç.
3. Metadata ve üretim kurallarını incele.
4. `# OUTPUT DOCUMENT START` ile `# OUTPUT DOCUMENT END` arasındaki iskeleti doldurarak nihai dokümanı oluştur.
