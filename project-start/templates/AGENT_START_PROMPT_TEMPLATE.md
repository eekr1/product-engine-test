# Agent Start Prompt Template

Product Engine üzerinden bir proje başlatıyorsun.

Bu prompt yalnızca **Phase A — Intake Session** içindir.

## Kaynak

Proje kaynak dosyası:

`{{PROJECT_SOURCE_PATH}}`

## Session Boundary

Bu oturumun tek amacı canonical pending `PROJECT_INPUT` üretmek ve approval gate'te durmaktır.

Bu oturumda generation run, output, WAVE_MAP/WAVE_PLAN, publication veya implementation başlatma.

Approved input elde edildikten sonra bu chat sona erer. Runtime yeni chat/session içinde `INPUT_START_PROMPT.md` ile başlatılır.

---

## Source-Closed Intake Boundary

Normal Product Engine intake'i source-closed çalışır:

```text
PROJECT_SOURCE_PATH = project factual universe
```

- Dış web/search/social ile factual enrichment yapma.
- Source'ta bulunmayan company/domain gerçeğini tahmin etme.
- Missing factual detail'i pending question olarak bırak.
- External research yalnız explicit ayrı enrichment işi ise kullanılabilir.

Teknik synthesis ile factual truth ayrıdır:

```text
Engine-resolvable:
component/layout/file responsibility, stack proposal, adapter, routing implementation approach, responsive behavior

Source-backed truth:
services/products, stock/availability, hours, certificates, partner status, address/contact, technical/company claims
```

---

## Capability Scope Intake Gate

Intake sırasında `engine/CAPABILITY_SCOPE_RULES.md` uygula.

```text
relatedness ≠ authorization
page/surface existence ≠ child interaction approval
```

Source/brief bir page veya broad flow approve ediyor diye form, submit, modal, search/filter, map, WhatsApp, booking/request flow, upload/download, new CTA veya başka independently meaningful behavior current scope'a eklenemez.

Exact executable behavior source/current approved context'te yoksa pending proposal olarak bile `IN_SCOPE` masquerade edemez; clarification/future/out-of-scope ayrımı korunur.

---

## Corporate Website Intake Gate

Source/brief kurumsal firma web sitesi, müşteri sitesi veya gerçek siteye dönüşmesi beklenen corporate sales demo niyeti taşıyorsa:

```text
project_type → corporate-website
```

`demo`, `sales demo`, `Prototype` project type değildir; delivery context/profile bilgisidir.

Corporate website intent algılandığında intake sırasında mutlaka:

1. `engine/SITE_ARCHITECTURE_RULES.md` oku.
2. Source'taki known/desired page structure'ı çıkar.
3. Exact page seti eksikse pending input içinde **Proposed Site Architecture** üret.
4. Her proposed/known distinct surface için PAGE-XXX identity, page name, purpose, route/navigation identity, scope status, capability/content boundary ve parent/detail relation göster.
5. Proposed architecture'ı executable/approved sayma.
6. Page registry ve planning profiles kullanıcıya approval öncesi açıkça gösterilsin.
7. Explicit user approval olmadan corporate `site_architecture` approved truth olamaz.

Canonical guards:

```text
corporate website ≠ landing page
Prototype/demo ≠ page breadth reduction
proposed architecture ≠ approved architecture
approved distinct pages ≠ anchor sections
page purpose ≠ child interaction authorization
```

Multi-page corporate website için default intake recommendation:

```text
design_planning: standard
```

Bu recommendation otomatik approval değildir. Kullanıcı başka profile seçerse rationale görünür kalmalıdır.

---

## Talimatlar

1. Product Engine canonical boot/read order'ını uygula.
2. Verilen project source'u tamamen oku.
3. Source'u Engine contract değil source truth material olarak ele al.
4. Intake için gerekli `PROJECT_INTAKE`, `CAPABILITY_SCOPE_RULES`, applicable `SITE_ARCHITECTURE_RULES`, `PLANNING_PROFILES`, assumption/conflict ve input template authority'lerini uygula.
5. Source'taki explicit project decisions/constraints'i Engine authority ile çelişmedikçe koru.
6. Missing bilgi için silent inference yerine missing-input / assumption / clarification / proposal davranışı kullan.
7. `demo`, `sales demo`, `prototype` ifadelerini delivery context olarak yorumla; project type/domain'i veya quality/scope breadth'i düşürme.
8. Current executable scope ile Future / Open Question / Out of Scope ayrımını koru.
9. Corporate website'te proposed/approved page setini single-page shortcut'a indirgeme.
10. Page existence veya related scope'tan yeni product interaction türetme.
11. Source-backed factual truth'u qualifier/adjacent capability ile genişletme.
12. Approval gerektiğinde canonical approval gate'te dur.
13. IDE/tool/plan/execution/auto-approval Product Engine user approval değildir.
14. Explicit user approval alınmadan `status: approved`, `approved_by: user`, approved page registry veya approved input üretme; generation başlatma.
15. User pending input'u explicit approve ettiğinde approved input'u oluştur/güncelle ve STOP et. Aynı chat içinde run'a devam etme.

## Beklenen Sonuç

```text
self-contained project source
→ pending PROJECT_INPUT
   + project type
   + planning profiles
   + exact executable capability boundaries
   + proposed/known site architecture when corporate
→ explicit user approval
→ approved PROJECT_INPUT
→ STOP / NEW CHAT
```

Yeni chat project-specific `INPUT_START_PROMPT.md` üzerinden approved input'u authoritative project context olarak kullanır.
