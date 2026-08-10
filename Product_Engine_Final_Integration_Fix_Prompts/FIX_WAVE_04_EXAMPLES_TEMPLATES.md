# Product Engine — Final Integration Fix
# Wave 04 — Examples, Templates & Edge-Case Alignment

Repo: `eekr1/product-engine-test`

Wave 01–03 tamamlanmış olmalıdır.

## Amaç

Examples ve template edge-case'lerini güncel runtime/package contracts ile tekrar hizalamak.

Bu wave özellikle final audit'te bulunan gerçek example drift'ini kapatmalıdır.

---

# Önce Oku

1. `README.md`
2. `engine/DOCUMENT_CATALOG.md`
3. `engine/PACKAGE_RULES.md`
4. `engine/VALIDATION_RULES.md`
5. `engine/OUTPUT_STRUCTURE.md`
6. `packages/README.md`
7. `packages/DEMO_FRONTEND_PACKAGE.md`
8. `templates/README.md`
9. `templates/project/ENV_EXAMPLE_TEMPLATE.md`
10. `inputs/README.md`
11. `runs/README.md`
12. `outputs/README.md`
13. `examples/README.md`

Ardından tüm `examples/inputs/`, `examples/runs/`, `examples/outputs/` fixture'larını inventory et.

Özellikle `web-app-minimal-001`.

---

# Görev 1 — `web-app-minimal-001` Drift'ini Düzelt

Current package contract:

```text
DEMO_FRONTEND_PACKAGE
project_type: web-app
delivery_profile: Prototype
```

için applicable required seti doğrula.

Current audit bulgusu:

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES
DESIGN
```

required olduğu halde positive fixture yalnız ilk üç dokümanı üretiyor.

Eğer current contracts hâlâ bunu doğruluyorsa fixture'ı güncelle.

Gerekli değişiklikler:

- input Delivery Target doküman seti,
- run `documents_produced`,
- run validation/completion fixture,
- output fixture,
- scenario descriptions,
- gerekiyorsa `DESIGN_RULES.md` synthetic clean output.

Fixture gerçek runtime template/package davranışını göstermeli.

Example için package contract'ı değiştirme.

---

# Görev 2 — Tüm Active Positive Examples Cross-Audit

Her active positive scenario için:

```text
project_type
+
delivery_profile
+
package_id
```

kombinasyonunu ilgili package + DOCUMENT_CATALOG üzerinden çöz.

Kontrol et:

- required docs eksik mi?
- non-applicable docs fazla mı?
- validation result doğru mu?
- run status doğru mu?
- output_ref doğru mu?
- output fixture clean mi?

Drift varsa düzelt.

Negative veya blocked fixture'ları yanlışlıkla positive hale getirme.

---

# Görev 3 — Engine Version Metadata Senkronizasyonu

Wave 01 sonunda root README current Product Engine version sahibidir.

Examples içinde artık:

```text
engine_version: not_assigned
```

kalmamalı.

Active examples, current version'u kullanmalı.

Ancak historical/deprecated fixture mantığı varsa mevcut historical value korunabilir; gerekçeyi açık tut.

`logs/` neutral templates için `not_assigned` gibi başlangıç literal'ı artık gereksiz hale geldiyse current authority ile uyumlu hale getir.

Yeni fake version üretme.

---

# Görev 4 — Delivery Profile Normalization Mapping'i Explicit Yap

Canonical truth values:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

Template metadata machine values:

```text
foundation
prototype
implementation-ready
production-ready
```

Bu mapping'in tek ve explicit bir standardı olsun.

Tercih edilen owner:

`templates/README.md`

Örnek:

```text
Canonical input/runtime value
Foundation
→ template metadata value: foundation

Implementation Ready
→ implementation-ready
```

Açıkça belirt:

- template metadata aliases project truth değildir,
- input/package/runtime canonical value'ları Title Case biçimde kalır,
- yalnız template filtering metadata'sında normalized machine form kullanılır.

Tüm template'leri gereksiz yere değiştirme; mevcut değerler mapping'e uyuyorsa bırak.

---

# Görev 5 — `.env.example` Structural Artifact Edge-Case'ini Açıklaştır

`ENV_EXAMPLE_TEMPLATE.md`:

```text
template_type: structural
document_id: not_applicable
output_filename: .env.example
```

şeklinde bağımsız bir output artefact üretebiliyor.

Bu özel durumu açık contract haline getir.

Ama yeni Document ID oluşturma.

Minimum açıklama:

```text
Some structural templates may produce non-catalog support artifacts.
These are not project documents and do not receive Document Catalog IDs.
Their inclusion is package/template applicability driven and validated separately.
```

Bu davranışın:

- document selection pipeline'ını bozmadığını,
- package'ta gerekmiyorsa üretilmeyeceğini,
- final output cleanliness kurallarına tabi olduğunu

netleştir.

Gerekirse `templates/README.md` ve ilgili engine/catalog note'unda küçük cross-reference ekle.

Yeni generic artifact subsystem tasarlama.

---

# Görev 6 — Examples Staleness Policy Uygula

`examples/README.md` zaten stale/deprecated davranışı tanımlıyor.

Aktif contract'la uyuşmayan ama bu wave'de güncellenmeyecek fixture varsa:

- `status: deprecated` veya `invalid`,
- neden,
- replacement/current scenario

belirt.

Active stale fixture bırakma.

---

# Validation

1. `web-app-minimal-001` current package contract ile uyumlu mu?
2. Positive run `documents_produced` doğru mu?
3. Output fixture document seti doğru mu?
4. Validation result gerçekten PASS olabilir mi?
5. Active examples current engine version taşıyor mu?
6. Delivery profile mapping explicit mi?
7. `.env.example` special case documented mı?
8. Yeni Document ID oluşmadı mı?
9. Examples hala non-authoritative mı?
10. `git diff --check` temiz mi?

---

# Çalışma Sonu Raporu

- Güncellenen example scenarios
- Current required document sets
- Engine version sync sonucu
- Template normalization mapping
- Structural support artifact kuralı
- Wave 05'e geçmeye engel var mı?

Bu wave dışına çıkma.
