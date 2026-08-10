# Product Engine — Final Integration Fix
# Wave 03 — Ownership & Duplication Reduction

Repo: `eekr1/product-engine-test`

Wave 01 ve Wave 02 tamamlanmış olmalıdır.

## Amaç

Aynı runtime contract'ın birden fazla dosyada ikinci authority olarak tekrar edilmesini azaltmak.

Amaç dokümanları kısaltmak için körlemesine içerik silmek değildir.

Amaç:

```text
tek soru
→ tek primary owner
→ diğer dosyalar reference/navigation/usage guide
```

modelini güçlendirmektir.

---

# Önce Oku

1. `README.md`
2. `engine/README.md`
3. `engine/RUN_PROTOCOL.md`
4. `engine/OUTPUT_STRUCTURE.md`
5. `engine/PACKAGE_RULES.md`
6. `runs/README.md`
7. `outputs/README.md`
8. `packages/README.md`
9. `templates/README.md`
10. `inputs/README.md`
11. `logs/README.md`
12. `examples/README.md`
13. `archive/README.md`

---

# Primary Authority Map

Bu wave'de şu ownership korunmalı:

```text
Run lifecycle/state transitions
→ engine/RUN_PROTOCOL.md

Generation stage order
→ engine/GENERATION_PIPELINE.md

Output publication/versioning/validity
→ engine/OUTPUT_STRUCTURE.md

Package selection logic
→ engine/PACKAGE_RULES.md

Package contents
→ packages/<PACKAGE>.md

Document identity/applicability
→ engine/DOCUMENT_CATALOG.md

Template structure
→ templates/

Input acceptance
→ engine/PROJECT_INTAKE.md

Physical input management
→ inputs/README.md

Run physical storage/usage
→ runs/README.md

Output physical storage/usage
→ outputs/README.md
```

---

# Görev 1 — `runs/README.md` İkinci Lifecycle Authority Olmasın

`runs/README.md` kullanım rehberi olarak kalsın.

Şunları yapabilir:

- physical folder layout,
- file roles,
- how to inspect a run,
- run records vs outputs/logs boundary,
- kısa lifecycle overview,
- canonical owner linkleri.

Ama canonical status transition kurallarını uzun bağımsız contract olarak tekrar sahiplenmesin.

Status vocabulary listesi gerekiyorsa:

> authoritative source: `engine/RUN_PROTOCOL.md`

olarak göster.

Transition semantics'i mümkün olduğunca reference et.

Cancelled/failed physical folder mapping gibi **runs physical storage'a özel** detaylar burada kalabilir.

---

# Görev 2 — `outputs/README.md` İkinci Output Engine Olmasın

`outputs/README.md` physical usage guide olmalı.

Kalabilir:

- canonical folder tree,
- `demos/` vs `products/`,
- final vs working output sınırı,
- cleanliness,
- how to inspect latest/versions,
- physical publication expectations,
- traceability lookup.

Ama:

- publication lifecycle engine'i,
- version allocation algorithm owner'lığı,
- run status machine,
- planning-vs-runtime tarihsel tartışma,
- build sırasında hangi bug'ın düzeltildiği

burada ikinci kez contract olarak yaşamamalı.

Canonical owner'lara referans ver:

- `engine/OUTPUT_STRUCTURE.md`
- `engine/RUN_PROTOCOL.md`

---

# Görev 3 — Output README'deki Build Audit Geçmişini Kaldır

Mevcut son bölümdeki:

```text
circular ifade kaldırıldı mı?
manifest kaldırıldı mı?
yalnız outputs sınırında mı çalışıldı?
...
```

gibi folder-build audit checklist'i runtime README'den çıkar.

Bu bilgiler runtime contract değildir.

Eğer tarihsel değeri varsa:

- changelog'a taşınması gerekip gerekmediğini değerlendir,
- sırf taşımak için yeni log oluşturma.

---

# Görev 4 — `packages/README.md` Sınırını Netleştir

`packages/README.md`:

- package system navigation,
- 5 package'ın rolleri,
- base + extension high-level explanation,
- deterministic document filtering overview

taşıyabilir.

Ama package selection authority:

```text
engine/PACKAGE_RULES.md
```

olarak açık kalmalı.

README seçim karar ağacını ikinci kez sahiplenmemeli.

Her package'ın actual document scope'u package file'larında kalsın.

---

# Görev 5 — Read Order vs Runtime Flow Ayrımını Netleştir

Özellikle:

- root README
- engine README
- package README
- template README

içinde iki kavramı karıştırma:

```text
Agent Boot / Reference Read Order
```

ve

```text
Runtime Execution/Data Flow
```

Root README bu ayrımın üst owner'ı olsun.

Engine README yalnız engine-level detayını açıklasın.

---

# Görev 6 — Physical Folder Semantics'i Açıklaştır

Run physical storage:

```text
active/
completed/
failed/
```

bir lifecycle vocabulary değildir.

Açıkça belirt:

- `failed/` fiziksel terminal bucket'tır,
- `status: Cancelled` run da burada tutulabilir,
- logical status her zaman RUN_MANIFEST'ten okunur.

Bu açıklama karmaşıklığı azaltmalı; yeni folder ekleme.

Invalidated completed run'ların physical location davranışını mevcut contract'a göre açıkla.

---

# Görev 7 — Cross-Reference Temizliği

README'lerde:

- aynı 20 maddelik kuralları tekrar etmek yerine canonical dosyaya link ver,
- broken relative links varsa düzelt,
- machine-local `file:///` referans olmasın,
- repo-relative path kullan.

---

# Scope Sınırı

Bu wave'de:

- root PROMPT_XX taşımak/silmek yok,
- examples fixture değiştirmek yok,
- template metadata değiştirmek yok,
- runtime behavior değiştirmek yok.

Wave 02'deki runtime decisions aynen korunmalı.

---

# Validation

1. Her runtime sorunun tek primary owner'ı var mı?
2. README'ler usage/navigation rolünde mi?
3. `runs/README` RUN_PROTOCOL'ü override etmiyor mu?
4. `outputs/README` OUTPUT_STRUCTURE'ı override etmiyor mu?
5. `packages/README` PACKAGE_RULES'ı override etmiyor mu?
6. Build-audit history runtime README'den çıktı mı?
7. Read order vs runtime flow açık mı?
8. Broken links yok mu?
9. `git diff --check` temiz mi?

---

# Çalışma Sonu Raporu

- Değiştirilen dosyalar
- Hangi duplicate authority blokları kaldırıldı/sadeleştirildi
- Primary ownership map
- Kalan intentional duplication
- Wave 04'e geçmeye engel var mı?

Bu wave dışına çıkma.
