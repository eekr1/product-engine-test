# Product Engine — Final Full Integration Re-Audit

Repo: `eekr1/product-engine-test`

Wave 01–05 tamamlandı.

Bu görevde yalnızca audit yap.

Hiçbir dosyayı değiştirme.
Commit/push yapma.
Yeni çözüm tasarlama.

## Amaç

Repository'yi folder-by-folder değil, tek Product Engine sistemi olarak yeniden denetlemek.

---

# Audit Kapsamı

Özellikle doğrula:

## Root Authority

- root README gerçek entry point mi?
- PRODUCT_ENGINE_BRAIN ile sorumluluk ayrımı net mi?
- current version tek authority'de mi?
- root read order net mi?
- historical layers ayrılmış mı?

## Read Order

- Agent Boot Read Order
- Runtime Execution Flow

birbirinden net ayrılmış mı?

## Engine / Packages / Templates

- package selection tek owner mı?
- document catalog applicability deterministic mi?
- template mapping doğru mu?
- package/document/template zincirinde duplicate authority var mı?
- structural support artifacts açıklanmış mı?

## Input → Run → Output

Şu zinciri baştan sona simüle et:

```text
raw brief
→ pending input
→ explicit approval
→ approved input version
→ run creation
→ snapshot
→ package selection
→ document selection
→ template resolution
→ working output
→ validation
→ publication
→ latest update
→ run completion
```

Her adımın tek owner'ı ve deterministic sonucu var mı?

## Lifecycle Vocabulary

Run statuses tam olarak:

```text
Created
Initialized
Running
Blocked
Paused
Resumed
Validation
Completed
Failed
Cancelled
Invalidated
```

Validation:

```text
PASS
CONDITIONAL PASS
FAIL
```

Input:

```text
pending
approved
```

uyumlu mu?

Physical folder state ile logical status karışıyor mu?

## Versioning

- Engine version
- Input version
- Output version
- Template version
- Package version

rolleri ayrılmış mı?

Output ordering deterministic mi?

## Outputs

- publication before Completed mı?
- latest derived view mü?
- invalidation fallback deterministic mi?
- no-valid-output behavior açık mı?
- output status registry yanlışlıkla oluşmuş mu?

## Logs / Archive

- logs persistent engine memory mi?
- run logs ile karışıyor mu?
- archive inactive historical layer mı?
- archive active runtime source olarak okunuyor mu?
- old-runs metadata immutable runtime evidence'i bozmuyor mu?

## Examples

- active examples current contracts ile uyumlu mu?
- `web-app-minimal-001` gerçekten PASS olabilir mi?
- positive/negative/blocked fixture semantics doğru mu?
- current engine version doğru mu?
- stale active example var mı?

## Planning / Root Prompts

- planning runtime authority değil mi?
- BUILD_STATUS güncel mi?
- build prompts historical alanda mı?
- root'ta stale active-looking PROMPT_XX kaldı mı?
- `.md.md` naming drift kaldı mı?

## Broken References

Repo-relative link/path kontrolü yap.

Özellikle ara:

```text
file:///
C:\Users\
/Users/
not_assigned
.md.md
runs/_templates/
OUTPUT_MANIFEST.md
VERSION_MANIFEST.md
Active output
current-unavailable
```

Her eşleşmeyi bağlamıyla değerlendir.

## Complexity

- Aynı kural iki primary owner'da mı?
- Bir README runtime engine gibi davranıyor mu?
- V0 için gereksiz registry/manifest/status sistemi var mı?
- historical build commentary runtime docs'a sızmış mı?

---

# Severity

Bulguları yalnız şu seviyelerde sınıflandır:

```text
BLOCKER
MAJOR
MINOR
COSMETIC
```

---

# Pass Gate

Final Integration PASS yalnız şu koşullarda ver:

```text
BLOCKER = 0
MAJOR = 0
```

MINOR/COSMETIC varsa ayrıca listele ancak PASS'i engelleme.

---

# Final Rapor Formatı

## Executive Result

```text
FINAL INTEGRATION: PASS | FAIL
BLOCKER: N
MAJOR: N
MINOR: N
COSMETIC: N
```

## BLOCKER
...

## MAJOR
...

## MINOR
...

## COSMETIC
...

## Canonical System Flow

Repo'dan türetilmiş current flow'u kısa biçimde yaz.

## Authority Map

Her ana sorunun primary owner'ını tablo halinde ver.

## Remaining Risks

Varsa.

Hiçbir dosyayı değiştirme.
