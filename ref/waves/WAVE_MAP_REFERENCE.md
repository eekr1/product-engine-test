# Reference Wave Map — Vibehall Decomposition Pattern

> **REFERENCE ONLY — NON-AUTHORITATIVE**
>
> Bu belge `Design_Wave_Plan.md` içindeki gerçek Vibehall decomposition yaklaşımının kompakt kalite referansıdır. Current project scope, capability, wave count, wave names, filenames, stack, completion state veya architecture authority değildir.

## Amaç

Agent'a büyük bir işi yalnız broad teknik fazlara değil, **anlamlı ve bağımsız doğrulanabilir delivery boundary'lerine** ayırmanın nasıl göründüğünü göstermektir.

Bu referanstan yalnız şu kalite sinyalleri alınabilir:

```text
meaningful decomposition
sequencing rationale
dependency reasoning
foundation-before-feature ordering
shared primitives before consuming surfaces
runtime/state foundation before specialized experiences
cross-cutting consolidation after feature delivery
final integration / regression / production-readiness separation
clear handoff boundaries
```

## Vibehall Decomposition Snapshot

Gerçek planın wave index'i şu progression modelini gösterir:

```text
00  mevcut sistem envanteri / migration safety boundary
01  design tokens / visual foundation
02  shared controls / identity / overlay primitives
03  shared loading / empty / error / feedback
04  desktop global shell / navigation
05  tablet + mobile shell
06  shared RoomCard / media / aura foundation
07  Home experience
08  Discover / query experience
09  normal auth visual foundation
10  room-context auth gate / return intent
11  create room / host transition
12  shared room runtime + lifecycle state foundation
13  room desktop participant experience
14  room desktop host / moderation / closure
15  room mobile experience
16  profile experience
17  settings / privacy / account safety
18  social foundation / friends / reconnection
19  social invites / blocked / mobile closure
20  messages desktop / DM reliability
21  messages mobile / invite integration
22  utility / legal / support / system pages
23  admin design foundation
24  admin surface migration / operational states
25  shared component consolidation / style debt closure
26  responsive / accessibility / reduced-motion horizontal closure
27  end-to-end integration / regression
28  performance / production readiness
29  global launch final QA / polish
```

Bu liste **kopyalanacak wave map değildir**. Öğrettiği pattern şudur:

```text
inventory/safety
→ foundations
→ shared primitives
→ shells
→ shared feature foundations
→ user-facing surfaces
→ runtime/state foundations before dependent complex surfaces
→ adjacent/social/admin feature families
→ consolidation
→ horizontal quality closure
→ integration/regression
→ production readiness
→ final QA
```

## Decomposition Reasoning Pattern

İyi bir wave yalnız “frontend”, “backend”, “UI”, “test” gibi broad teknik başlık değildir.

Her wave için şu sorular cevaplanmalıdır:

1. Wave sonunda tek başına anlaşılır ve doğrulanabilir hangi somut boundary teslim edilmiş olacak?
2. Bu boundary neden önceki wave tamamlanmadan güvenle üretilemez?
3. Sonraki hangi wave veya surface bu sonucu doğrudan tüketiyor?
4. Aynı wave içinde birbirinden bağımsız iki deliverable gizlenmiş mi?
5. Ortak primitive/foundation, onu kullanan feature'lardan önce ayrılmış mı?
6. Runtime/state/reconcile gibi cross-surface davranışlar özel ekranların içine gömülmüş mü?
7. Whole-project responsive/accessibility/regression/performance/final QA feature wave'lerine gizlenmiş mi?
8. Wave yalnız klasör veya component grubuna göre mi bölünmüş, yoksa gerçek delivery sonucu mu var?

## Good Separation Examples

### Foundation vs consuming feature

```text
shared design/data/runtime foundation
→ consuming page/feature wave
```

Foundation bağımsız bir contract/boundary bırakıyorsa ayrı wave olabilir.

### Shared runtime vs specialized surfaces

```text
shared lifecycle/state/reconcile foundation
→ participant surface
→ host/moderation surface
→ mobile specialization
```

Runtime davranışı üç ayrı surface tarafından tüketiliyorsa tek bir UI wave'ine gizlenmemelidir.

### Feature delivery vs cross-cutting closure

```text
feature waves complete
→ component consolidation
→ responsive/accessibility closure
→ end-to-end regression
→ performance/readiness
→ final QA
```

Cross-cutting kalite işleri feature implementation checklist'ine tek satır olarak sıkıştırılmamalıdır; gerçekten whole-project boundary oluşturuyorsa ayrı wave adayıdır.

## Bad Decomposition Signals

```text
"Foundation" içinde setup + data + bütün UI + QA
"Main UI" içinde birbirinden bağımsız birçok surface
"Final" içinde responsive + accessibility + regression + performance + deployment + polish
wave name yalnız klasör/teknoloji adı
her wave aynı dependency'yi tekrar eder ama gerçek handoff yok
wave sonunda sonraki agent'ın neyi hazır bulacağı belli değil
```

## Current-Project Boundary

Reference hiçbir capability authorize etmez.

MUST NOT:

- Vibehall'ın 30-wave sayısını hedef almak,
- yukarıdaki wave isimlerini current projeye taşımak,
- Vibehall runtime/social/admin capability'lerini current scope'a eklemek,
- current project için gereksiz micro-wave üretmek,
- sırf reference uzun diye küçük projeyi yapay biçimde büyütmek.

Canonical karar:

```text
current approved executable scope
+ current architecture/dependencies
+ meaningful standalone delivery boundaries
= current WAVE_MAP
```

## Calibration Exit Question

WAVE_MAP yazılmadan önce agent şu soruya cevap verebilmelidir:

> “Bu map yalnız geçerli bir wave listesi mi, yoksa her wave'in neden ayrı olduğunu, hangi upstream boundary'yi tükettiğini ve sonraki wave'e hangi tamamlanmış sonucu bıraktığını gösteren gerçek bir execution decomposition mı?”

İkinci cevap net değilse decomposition henüz yeterli değildir.
