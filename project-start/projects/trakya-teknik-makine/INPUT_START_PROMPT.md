# Trakya Teknik Makine — Input Start Prompt

Product Engine runtime'ını Trakya Teknik Makine için **yeni ve temiz bir chat/session** içinde başlatıyorsun.

## Authoritative Project Input

Approved project input:

`inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`

## Hard Context Boundary

Bu chat intake chat'inin devamı değildir.

- Önceki chat, raw brief konuşması, intake reasoning'i veya agent memory'si authority değildir.
- Trakya Teknik Makine project truth başlangıcı yalnız yukarıdaki approved `PROJECT_INPUT` dosyasıdır.
- Approved input'ta olmayan önceki fikir, öneri, varsayım veya niyet current scope'a taşınamaz.
- Gerekli factual/source context canonical source/input registry üzerinden yeniden okunur; chat memory ile tamamlanmaz.

## Demo / Prototype Semantics

Bu projenin satış demosu ve `Prototype` olması yalnız delivery purpose / runtime maturity belirtir.

Bunlar şunları authorize etmez:

- approved input'ta olmayan form, map, WhatsApp, modal veya başka yeni interaction/capability,
- placeholder veya doğrulanmamış firma iddiası,
- scope expansion,
- düşük kalite / throwaway architecture.

Gerçek backend approved scope'ta değilse uydurulmaz. Gerekli frontend data boundary local/mock adapter ile temiz tutulur.

## Talimatlar

1. Product Engine canonical boot/read order'ını baştan uygula.
2. Approved `PROJECT_INPUT` dosyasını tamamen oku ve project truth başlangıcı olarak freeze et.
3. Package/document/profile resolution'ı canonical Engine authority'lerinden yeniden çöz.
4. `RUN_PROTOCOL`, `GENERATION_PIPELINE`, `OUTPUT_STRUCTURE` ve applicable templates/contracts uyarınca yeni run başlat.
5. Her canonical artifact ve her dynamic instance için point-of-use template refresh uygula; batch-read + batch-generate yapma.
6. WAVE_MAP yalnız approved executable scope'u decomposition seviyesinde freeze etsin.
7. Her WAVE_PLAN yalnız exact parent WAVE_MAP entry'yi implementation seviyesinde detaylandırsın; parent'ta olmayan yeni capability ekleme.
8. Factual claims yalnız SOURCE_REGISTER/FCL zinciriyle desteklensin. Canlı website gerçekten bağımsız open/read/fetch edilmediyse `consumed` yazma.
9. Independent observable IDE/tool trace gerçekten inspect edilemiyorsa `Observable Trace Status: AVAILABLE` yazma; canonical UNAVAILABLE/UNVERIFIED davranışını uygula.
10. Validation report semantic capability diff, source identity/state ve gerçek evidence sınırlarına göre fail-closed çalışsın; agent self-report ground truth değildir.
11. Publication/completion yalnız canonical validation gate izin veriyorsa yapılsın.

## Beklenen Akış

```text
approved PROJECT_INPUT
→ fresh Product Engine boot
→ package/document resolution
→ run
→ working-output
→ validation
→ publication/completion when allowed
```

Bu session approved input öncesindeki chat'i hatırlamaya veya yeniden yorumlamaya çalışmaz.
