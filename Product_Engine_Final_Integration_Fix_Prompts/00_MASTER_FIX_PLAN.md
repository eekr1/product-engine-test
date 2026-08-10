# Product Engine — Final Integration Fix Plan

Repo: `eekr1/product-engine-test`

## Amaç

Folder-by-folder build tamamlandı. Bu fix serisinin amacı yeni mimari tasarlamak değil; final integration audit sırasında bulunan entegrasyon problemlerini kök nedenlerine göre kapatmak ve repository'yi tek, tutarlı ve kapalı Product Engine sistemi haline getirmektir.

## Genel Kurallar

- Mevcut çalışan mimariyi yeniden tasarlama.
- Yeni belge ailesi, yeni lifecycle vocabulary veya yeni package sistemi icat etme.
- `engine/`, `packages/`, `templates/`, `inputs/`, `runs/`, `outputs/`, `logs/`, `examples/`, `archive/` mevcut sorumluluk sınırlarını koru.
- Runtime contract'lar planning belgelerinden üstündür.
- `ref/` authoritative değildir.
- Değişiklikleri yalnız aktif wave kapsamıyla sınırla.
- Her wave sonunda:
  - değişen dosyaları listele,
  - hangi audit bulgularını kapattığını belirt,
  - geride kalan riskleri belirt,
  - `git diff --check` çalıştır,
  - ilgili çapraz referansları doğrula.
- Yeni root prompt oluşturma; bu fix promptları dışarıdan uygulanacaktır.
- Kullanıcı tarafından ayrıca istenmedikçe commit/push yapma.

---

# Wave Sırası

## Wave 01 — Root Authority, Read Order & Build-State Closure

Kapatılacak ana bulgular:

- Root `README.md` authority eksikliği
- Engine version authority eksikliği
- `planning/BUILD_STATUS.md` stale olması
- Planning/runtime ayrımının belirsizliği
- Root read-order ve repository map eksikliği
- `PRODUCT_ENGINE_BRAIN.md` içindeki çift tanımın sadeleştirilmesi

Dosya:
`FIX_WAVE_01_ROOT_AUTHORITY.md`

---

## Wave 02 — Runtime Contract Harmonization

Kapatılacak ana bulgular:

- Output publication sırası conflict'i
- `CONDITIONAL PASS` davranışındaki çift anlam
- Package selection sırasında delivery profile lifecycle ihlali
- Output versioning determinism eksikliği
- `Active output` vocabulary belirsizliği
- `current-unavailable` representation belirsizliği

Dosya:
`FIX_WAVE_02_RUNTIME_CONTRACTS.md`

---

## Wave 03 — Ownership & Duplication Reduction

Kapatılacak ana bulgular:

- `engine/RUN_PROTOCOL.md` ↔ `runs/README.md`
- `engine/OUTPUT_STRUCTURE.md` ↔ `outputs/README.md`
- `engine/PACKAGE_RULES.md` ↔ `packages/README.md`
- README'lerin ikinci authority haline gelmesi
- Output README içindeki build-audit geçmişi
- Lifecycle folder semantics açıklığının iyileştirilmesi
- Read order vs execution order ayrımının netleştirilmesi

Dosya:
`FIX_WAVE_03_OWNERSHIP_DEDUP.md`

---

## Wave 04 — Examples, Templates & Edge-Case Alignment

Kapatılacak ana bulgular:

- `web-app-minimal-001` example drift
- Positive/PASS fixture'ın package contract ile uyuşmaması
- Template delivery profile normalization mapping eksikliği
- `.env.example` structural-template özel durumunun explicit contract haline getirilmesi
- Examples engine-version metadata senkronizasyonu

Dosya:
`FIX_WAVE_04_EXAMPLES_TEMPLATES.md`

---

## Wave 05 — Root Artifact Cleanup & Final Repository Hygiene

Kapatılacak ana bulgular:

- Root `PROMPT_XX` build orchestration artifact'larının aktif runtime yüzeyinden ayrılması
- `PROMPT_03_PACKAGES_BUILD.md.md` naming drift
- Stale planning referansları
- Gereksiz complexity
- Küçük terminoloji/yazım temizliği
- Final repository navigation kontrolü

Dosya:
`FIX_WAVE_05_REPO_HYGIENE.md`

---

## Final Gate — Full Integration Re-Audit

Hiçbir yeni mimari tasarlamadan repository'yi tekrar baştan sona tek sistem olarak denetle.

Dosya:
`FINAL_REAUDIT.md`

---

# Önerilen Uygulama Disiplini

Her wave için ayrı Gemini chat kullan.

Sıra değiştirme:

1. Wave 01
2. Wave 02
3. Wave 03
4. Wave 04
5. Wave 05
6. Final Re-Audit

Bir wave FAIL veya BLOCKED kalırsa sonraki wave'e geçme.

Her wave tamamlandıktan sonra değişiklikleri gözle kontrol et ve ancak ondan sonra sıradaki promptu çalıştır.
