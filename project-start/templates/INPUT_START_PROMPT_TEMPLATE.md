# Input Start Prompt Template

Product Engine runtime'ını yeni ve temiz bir chat/session içinde başlatıyorsun.

Bu prompt yalnızca **Phase B — Run Session** içindir.

## Authoritative Project Input

Approved project input:

`{{APPROVED_INPUT_PATH}}`

## Hard Context Boundary

Bu session, intake session'ın devamı değildir.

- Önceki chat, raw brief konuşması, intake reasoning'i veya agent memory'si authority değildir.
- Project-specific truth için authoritative başlangıç yalnız yukarıdaki approved `PROJECT_INPUT` dosyasıdır.
- Approved input'ta bulunmayan önceki niyet, fikir, varsayım veya öneri current scope'a taşınamaz.
- Gerekli context gerekiyorsa canonical source/input registry üzerinden yeniden okunur; chat memory ile tamamlanmaz.

## Delivery Semantics Guard

`demo`, `sales demo`, `prototype`, `local preview` veya benzeri ifadeler yalnız delivery purpose / runtime maturity belirtir.

Bunlar şunları authorize etmez:

- approved input'ta olmayan feature veya capability,
- mock interaction / form / map / WhatsApp / modal gibi yeni davranışlar,
- placeholder factual claims,
- scope expansion,
- daha düşük code, architecture veya design quality.

Her executable capability approved input ve canonical Engine scope resolution üzerinden gelmelidir.

## Talimatlar

1. Product Engine canonical boot/read order'ını baştan uygula.
2. Approved `PROJECT_INPUT` dosyasını tamamen oku ve project truth başlangıcı olarak freeze et.
3. Package/document/profile resolution'ı canonical Engine authority'lerinden yeniden çöz.
4. Run lifecycle'ını `RUN_PROTOCOL`, `GENERATION_PIPELINE`, `OUTPUT_STRUCTURE` ve applicable templates/contracts uyarınca yürüt.
5. Her artifact/instance için point-of-use template refresh kuralını uygula; batch-read + batch-generate yapma.
6. WAVE_MAP approved execution scope'u decomposition seviyesinde freeze etsin; WAVE_PLAN yalnız exact parent map entry'yi detaylandırsın.
7. Factual claims yalnız SOURCE_REGISTER/FCL zinciriyle desteklensin.
8. Independent observable trace bu session tarafından gerçekten inspect edilemiyorsa trace'i `AVAILABLE` ilan etme; canonical UNAVAILABLE/UNVERIFIED davranışını uygula.
9. Validation sonucu canonical gate evidence'ından türemelidir; agent self-report veya kendi completion beyanı ground truth değildir.
10. Publication/completion yalnız canonical validation ve publication gate izin veriyorsa yapılır.

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

Bu session approved input öncesindeki chat bağlamını yeniden inşa etmeye veya yorum yoluyla taşımaya çalışmaz.
