# Product Engine — Engine Hardening Log (`logs/ENGINE_HARDENING_LOG.md`)

## 1. Amaç

Bu belge, gerçek Product Engine kullanımlarında gözlenen ancak tek başına proje üretimini durdurmayan düşük etkili sapmaları ve tekrar eden kalite pattern'lerini izler.

Temel ilke:

> Engine yanlış üretmiyorsa kullan; eksikliği gerçek kullanım öğretsin.

Bu log bir runtime gate değildir. Normal project run agent'ının zorunlu boot/read order parçası değildir. Engine maintainer veya review agent, gerçek run/output incelemesi sonrasında gerekli gördüğünde bu belgeyi günceller.

---

## 2. Ownership Boundary

```text
ENGINE_HARDENING_LOG.md
→ Tekil MINOR/LOW gözlemleri, tekrar sayısı ve pattern takibi.
→ Henüz proje üretimini durdurmayan hardening adayları.

ISSUES.md
→ Doğrulanmış ve çözüm gerektiren sistemsel defect/bug yaşam döngüsü.

IMPROVEMENTS.md
→ Sistem doğru çalışırken gelecekte eklenebilecek enhancement fikirleri.

ENGINE_CHANGELOG.md
→ Gerçekten uygulanmış kalıcı engine değişikliklerinin geçmişi.
```

Bir hardening kaydı BLOCKER/MAJOR niteliğindeyse veya gerçek kullanımda sistemik defect seviyesine yükselirse burada bekletilmez; `ISSUES.md` içine promote edilir.

---

## 3. Status ve Promotion Kuralı

```text
WATCH
→ İlk gerçek gözlem. Proje çalışmasını durdurmaz.

REPEATED
→ Aynı kök pattern en az iki bağımsız gerçek run/projede tekrar gözlendi.

FIX CANDIDATE
→ Tekrar ve etki birlikte engine hardening'i haklı çıkarıyor.

PROMOTED
→ Konu ISSUES.md veya IMPROVEMENTS.md içine taşındı; hardening kaydı tarihsel iz olarak korunur.

CLOSED
→ Sonraki gerçek kullanımlarda tekrar etmediği için veya ilgili fix sonrası artık aktif takip gerektirmediği için kapatıldı.
```

Tek bir minor gözlem otomatik fix zorunluluğu doğurmaz. Aynı pattern tekrar ederse `Occurrence` artırılır; mümkünse farklı run/proje evidence'ı eklenir. Bir kayıt sessizce silinmez.

---

## 4. Entry Schema

```markdown
## HARDENING-<NNN> — <Kısa başlık>

- **Status:** <WATCH | REPEATED | FIX CANDIDATE | PROMOTED | CLOSED>
- **Severity:** <Minor | Low>
- **First Seen:** <YYYY-MM-DD>
- **Last Seen:** <YYYY-MM-DD>
- **Occurrence:** <N>
- **Observed In:** <run/output/project reference>
- **Related Authority:** <repo-relative authority path | None>
- **Promoted To:** <ISSUE-XXX | IMPROVEMENT-XXX | None>

### Observed
<Gerçekte ne oldu?>

### Expected
<Daha doğru/precise davranış ne olmalıydı?>

### Impact
<Çıktıyı veya agent execution'ını ne ölçüde etkiledi?>

### Evidence / Example
<Kısa, repo-relative somut örnek.>

### Next Rule
<Watch / tekrar say / promote / fix koşulu.>
```

---

## 5. Aktif Hardening Gözlemleri

## HARDENING-001 — WAVE reference routing precision

- **Status:** WATCH
- **Severity:** Minor
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Occurrence:** 1
- **Observed In:** `RUN-20260817-001` — Fizyoterapist Eda Pala project generation
- **Related Authority:** `engine/GENERATION_PIPELINE.md`, `ref/waves/README.md`
- **Promoted To:** None

### Observed
`WAVE_00` yalnız setup/foundation, static frontend stack ve local content configuration sorumluluğu taşımasına rağmen `WAVE_12_RUNTIME_REFERENCE.md` depth reference olarak seçildi.

### Expected
Gerçek lifecycle/state/realtime sorumluluğu taşımayan setup/foundation wave, sırf adında "foundation" geçtiği için runtime reference'a yönelmemeli; applicable UI/page/feature reference route kullanılmalı.

### Impact
Üretilen wave planı kullanılabilir kaldı ve scope/capability ihlali oluşmadı. Sorun reference selection precision seviyesinde kaldı.

### Evidence / Example
Observed read sequence:

```text
WAVE_PLAN_TEMPLATE.md
→ WAVE_12_RUNTIME_REFERENCE.md
→ WAVE_00.md
```

WAVE_00 responsibility: frontend foundation + stack setup + local content config schema.

### Next Rule
Başka gerçek run/projede aynı routing pattern'i görülürse `Occurrence` artır ve `REPEATED` durumuna geçir. Output kalitesini veya scope'u etkilemeye başlarsa `ISSUES.md`'ye promote et.

---

## HARDENING-002 — CURRENT_STATUS In Progress semantics

- **Status:** WATCH
- **Severity:** Minor
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Occurrence:** 1
- **Observed In:** `outputs/demos/fizyoterapist-eda-pala/latest/ai/CURRENT_STATUS.md`
- **Related Authority:** `templates/ai/CURRENT_STATUS_TEMPLATE.md`
- **Promoted To:** None

### Observed
Implementation henüz başlamamış ve `Active Wave` açıkça `Ready for Implementation` durumundayken `In Progress` bölümüne "kodlama aşamasının başlatılması bekleniyor" ifadesi yazıldı.

### Expected
Gerçek implementation başlamadıysa `In Progress` bölümü `None`, `Not Started` veya eşdeğer net bir current-truth durumu göstermeli. Sıradaki iş veya beklenen başlangıç `Immediate Priorities` / `NEXT_TASKS` sahibidir.

### Impact
Agent'ın uygulanacak sırayı anlamasını bozmadı; yalnız current-state semantiğini gereksiz bulanıklaştırdı.

### Evidence / Example
```text
Active Wave: WAVE_00 — Ready for Implementation
In Progress: kodlama aşamasının başlatılması bekleniyor
```

### Next Rule
Aynı semantik iki farklı gerçek run/projede tekrar ederse `REPEATED` yap. State confusion execution kararını etkilemeye başlarsa `ISSUES.md`'ye promote et.

---

## HARDENING-003 — Conditional validation wording precision

- **Status:** WATCH
- **Severity:** Minor
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Occurrence:** 1
- **Observed In:** `outputs/demos/fizyoterapist-eda-pala/latest/ai/CURRENT_STATUS.md`
- **Related Authority:** `engine/VALIDATION_RULES.md`, `templates/ai/CURRENT_STATUS_TEMPLATE.md`
- **Promoted To:** None

### Observed
Run validation sonucu `CONDITIONAL PASS` ve `VAL-15 = UNVERIFIED` olmasına rağmen generated CURRENT_STATUS, paketin `VAL-01..VAL-19 kurallarıyla tam uyumlu` olduğunu ifade etti.

### Expected
Downstream status/report wording canonical validation sonucunun precision'ını korumalıdır. `CONDITIONAL PASS` veya `UNVERIFIED` gate varken mutlak "all gates fully compliant/passed" anlamı üretilmemeli.

### Impact
Publication lifecycle doğru çalıştı ve explicit user acceptance sonrasında tamamlandı. Sorun operational action değil, reporting precision seviyesinde kaldı.

### Evidence / Example
```text
Validation: CONDITIONAL PASS
VAL-15: UNVERIFIED
Generated status wording: VAL-01..VAL-19 kurallarıyla tam uyumludur
```

### Next Rule
Aynı wording inflation başka run/output'ta tekrar ederse `REPEATED` yap. Validation sonucunun yanlış publish/completion kararına yol açması halinde doğrudan `ISSUES.md`'ye promote et.

---

## 6. Current Summary

```text
WATCH          : 3
REPEATED       : 0
FIX CANDIDATE  : 0
PROMOTED       : 0
CLOSED         : 0
TOTAL          : 3
```

Bu logun amacı minor perfection loop yaratmak değildir. Tekil düşük etkili sapmalar gerçek proje üretimini durdurmaz; tekrar eden veya etkisi büyüyen pattern'ler görünür hale geldikçe engine hardening kararı verilir.
