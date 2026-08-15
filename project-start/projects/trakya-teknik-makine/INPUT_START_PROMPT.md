# Trakya Teknik Makine — Input Start Prompt

Product Engine runtime'ını Trakya Teknik Makine için **yeni ve temiz bir chat/session** içinde başlatıyorsun.

## Authoritative Project Input

Approved project input:

`inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`

## Hard Context Boundary

Bu chat intake chat'inin devamı değildir.

- Önceki chat, raw brief konuşması, intake reasoning'i veya agent memory'si authority değildir.
- Trakya Teknik Makine project truth başlangıcı yukarıdaki approved `PROJECT_INPUT` dosyasıdır; factual provenance canonical project source evidence zincirinden çözülür.
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

## Mandatory Operational Checkpoints

### SOURCE_REGISTER

```text
fresh templates/runs/SOURCE_REGISTER_TEMPLATE.md
→ project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md factual evidence
→ approved input/snapshot only as derivative authorities
→ write SOURCE_REGISTER
```

`SRC-*` factual source setine PROJECT_INPUT, INPUT_SNAPSHOT, engine, package, template veya ref ekleme. Normal source-closed run'da factual source identity project source file'dır.

### WAVE_MAP

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh templates/waves/WAVE_MAP_TEMPLATE.md
→ current authorities
→ ONE WAVE_MAP write
→ CLOSE
```

### EACH WAVE_PLAN

Her exact wave için sıfırdan checkpoint:

```text
fresh templates/waves/WAVE_PLAN_TEMPLATE.md
→ exact current parent WAVE_NN entry
→ at least one isolated quality reference FOR THIS WAVE
→ authorities/FCL as applicable
→ ONE WAVE_NN write
→ validate/repair
→ CLOSE
```

Önceki wave'in template/ref read'i reuse edilemez. WAVE_02/03/04 dahil her wave kendi observable template + quality-ref read event'ini taşımalıdır.

### VALIDATION_REPORT

```text
fresh templates/runs/VALIDATION_REPORT_TEMPLATE.md
→ fresh/current engine/VALIDATION_RULES.md
→ inspect current working-output + evidence
→ write VALIDATION_REPORT
```

Validation report `VAL-01..VAL-19` eksiksiz olmalıdır. `VAL-15 = UNVERIFIED` iken overall `PASS` yasaktır; canonical result en fazla `CONDITIONAL PASS` olabilir.

## Talimatlar

1. Product Engine canonical boot/read order'ını baştan uygula.
2. Approved `PROJECT_INPUT` dosyasını tamamen oku ve project truth başlangıcı olarak freeze et.
3. Package/document/profile resolution'ı canonical Engine authority'lerinden yeniden çöz.
4. `RUN_PROTOCOL`, `GENERATION_PIPELINE`, `OUTPUT_STRUCTURE` ve applicable templates/contracts uyarınca yeni run başlat.
5. Her canonical artifact ve her dynamic instance için point-of-use template refresh uygula; batch-read + batch-generate yapma.
6. SOURCE_REGISTER'ı fresh template + exact project source evidence ile üret; runtime authority'leri factual source olarak sınıflandırma.
7. WAVE_MAP yalnız approved executable scope'u decomposition seviyesinde freeze etsin.
8. Her WAVE_PLAN yalnız exact parent WAVE_MAP entry'yi implementation seviyesinde detaylandırsın; parent'ta olmayan yeni capability ekleme.
9. Her WAVE_PLAN için fresh template + current-wave quality ref gerçekten re-open edilsin; ref/template context'i wave'ler arasında reuse etme.
10. Factual claims yalnız source-backed SOURCE_REGISTER/FCL zinciriyle desteklensin.
11. VALIDATION_REPORT write öncesi current validation template ve validation rules fresh-read edilsin.
12. Independent observable IDE/tool trace gerçekten inspect edilemiyorsa `Observable Trace Status: AVAILABLE` yazma; canonical UNAVAILABLE/UNVERIFIED davranışını uygula.
13. Validation report current `VAL-01..VAL-19`, source classification, semantic capability diff ve gerçek evidence sınırlarına göre fail-closed çalışsın; agent self-report ground truth değildir.
14. Publication/completion yalnız canonical validation gate izin veriyorsa yapılsın.

## Beklenen Akış

```text
approved PROJECT_INPUT
→ fresh Product Engine boot
→ package/document resolution
→ source-register checkpoint
→ run
→ working-output
→ isolated wave checkpoints
→ validation-report checkpoint
→ publication/completion when allowed
```

Bu session approved input öncesindeki chat'i hatırlamaya veya yeniden yorumlamaya çalışmaz.
