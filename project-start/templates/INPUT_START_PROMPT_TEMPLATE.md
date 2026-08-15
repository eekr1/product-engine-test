# Input Start Prompt Template

Product Engine runtime'ını yeni ve temiz bir chat/session içinde başlatıyorsun.

Bu prompt yalnızca **Phase B — Run Session** içindir.

## Authoritative Project Input

Approved project input:

`{{APPROVED_INPUT_PATH}}`

## Hard Context Boundary

Bu session, intake session'ın devamı değildir.

- Önceki chat, raw brief konuşması, intake reasoning'i veya agent memory'si authority değildir.
- Project-specific truth için authoritative başlangıç yukarıdaki approved `PROJECT_INPUT` dosyasıdır; factual provenance ise canonical project source evidence zincirinden çözülür.
- Approved input'ta bulunmayan önceki niyet, fikir, varsayım veya öneri current scope'a taşınamaz.
- Gerekli context canonical source/input registry üzerinden yeniden okunur; chat memory ile tamamlanmaz.

## Delivery Semantics Guard

`demo`, `sales demo`, `prototype`, `local preview` veya benzeri ifadeler yalnız delivery purpose / runtime maturity belirtir.

Bunlar şunları authorize etmez:

- approved input'ta olmayan feature veya capability,
- mock interaction / form / map / WhatsApp / modal gibi yeni davranışlar,
- placeholder factual claims,
- scope expansion,
- daha düşük code, architecture veya design quality.

Her executable capability approved input ve canonical Engine scope resolution üzerinden gelmelidir.

## Mandatory Operational Checkpoints

Bu run'da templated artifact'ler memory/stale schema ile yazılamaz.

### SOURCE_REGISTER

```text
fresh templates/runs/SOURCE_REGISTER_TEMPLATE.md read
→ exact project source evidence + approved derivative authorities
→ SOURCE_REGISTER write
```

`SRC-*` yalnız factual project/enrichment sources içindir. `PROJECT_INPUT`, `INPUT_SNAPSHOT`, `engine/*`, `packages/*`, `templates/*`, `ref/*` factual SRC değildir.

### WAVE_MAP

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ fresh WAVE_MAP_TEMPLATE.md
→ exact current authorities
→ ONE WAVE_MAP write
→ close
```

### EACH WAVE_PLAN

Her `WAVE_NN` tamamen ayrı checkpoint'tir:

```text
fresh WAVE_PLAN_TEMPLATE.md
→ exact parent WAVE_NN
→ at least one isolated quality ref for THIS WAVE
→ current authorities/FCL as applicable
→ ONE WAVE_NN write
→ validate/repair
→ CLOSE
```

Önceki wave'in template veya ref read'i current wave için reuse edilemez. `0 quality-ref read` ile WAVE_PLAN yazılamaz.

### VALIDATION_REPORT

```text
fresh templates/runs/VALIDATION_REPORT_TEMPLATE.md
→ fresh/current engine/VALIDATION_RULES.md
→ inspect current working-output + available evidence
→ write VALIDATION_REPORT
```

Validation report current `VAL-01..VAL-19` gate setini eksiksiz taşır. `VAL-15 = UNVERIFIED` ise overall `PASS` yazılamaz; canonical result en fazla `CONDITIONAL PASS` olabilir.

## Talimatlar

1. Product Engine canonical boot/read order'ını baştan uygula.
2. Approved `PROJECT_INPUT` dosyasını tamamen oku ve project truth başlangıcı olarak freeze et.
3. Package/document/profile resolution'ı canonical Engine authority'lerinden yeniden çöz.
4. Run lifecycle'ını `RUN_PROTOCOL`, `GENERATION_PIPELINE`, `OUTPUT_STRUCTURE` ve applicable templates/contracts uyarınca yürüt.
5. Her artifact/instance için point-of-use template refresh kuralını uygula; batch-read + batch-generate yapma.
6. SOURCE_REGISTER factual source classification'ını `RUN_PROTOCOL` + `SOURCE_REGISTER_TEMPLATE` ile çöz; read edilen authority'leri factual source diye kaydetme.
7. WAVE_MAP approved execution scope'u decomposition seviyesinde freeze etsin; WAVE_PLAN yalnız exact parent map entry'yi detaylandırsın.
8. Her WAVE_PLAN için fresh template + current-wave quality-ref checkpoint'i gerçekten uygula; önceki read event'lerini reuse etme.
9. Factual claims yalnız source-backed SOURCE_REGISTER/FCL zinciriyle desteklensin.
10. VALIDATION_REPORT yazmadan immediately önce current validation template ve validation rules fresh-read edilsin.
11. Independent observable trace bu session tarafından gerçekten inspect edilemiyorsa trace'i `AVAILABLE` ilan etme; canonical UNAVAILABLE/UNVERIFIED davranışını uygula.
12. Validation sonucu canonical gate evidence'ından türemelidir; agent self-report veya kendi completion beyanı ground truth değildir.
13. Publication/completion yalnız canonical validation ve publication gate izin veriyorsa yapılır.

## Beklenen Akış

```text
approved PROJECT_INPUT
→ fresh Product Engine boot
→ package/document resolution
→ source-register checkpoint
→ run
→ working-output
→ per-wave isolated checkpoints
→ validation-report checkpoint
→ publication/completion when allowed
```

Bu session approved input öncesindeki chat bağlamını yeniden inşa etmeye veya yorum yoluyla taşımaya çalışmaz.
