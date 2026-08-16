# Fizyoterapist Eda Pala — Input Start Prompt

Product Engine runtime'ını Fizyoterapist Eda Pala için **yeni ve temiz bir chat/session** içinde başlatıyorsun.

## Authoritative Project Input

Approved project input:

`inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md`

## Hard Context Boundary

Bu chat intake chat'inin devamı değildir.

- Önceki chat, raw brief konuşması, intake reasoning'i veya agent memory'si authority değildir.
- Fizyoterapist Eda Pala project truth başlangıcı yukarıdaki approved `PROJECT_INPUT` dosyasıdır; factual provenance canonical project source evidence zincirinden çözülür.
- Approved input'ta olmayan önceki fikir, öneri, varsayım veya niyet current scope'a taşınamaz.
- Gerekli factual/source context canonical source/input registry üzerinden yeniden okunur; chat memory ile tamamlanmaz.

## Low-Information / Health-Domain Guard

Bu proje bilinçli olarak düşük bilgi yoğunluklu bir gerçek proje testidir.

Approved input kaynak sınırları dışında:

- uzmanlık veya tedavi alanı,
- terapi yöntemi,
- hastalık/rahatsızlık listesi,
- eğitim/sertifika/deneyim,
- klinik veya exact lokasyon,
- telefon/e-posta/çalışma saati/fiyat,
- hasta yorumu, başarı oranı veya sağlık sonucu,
- randevu availability veya operasyonel capability

uydurulamaz.

`Fizyoterapist`, `Eda Pala` ve `Tekirdağ` gibi approved facts adjacent domain knowledge ile genişletilemez.

Kullanıcı tarafından sağlanan Instagram URL'si yalnız approved scope izin veriyorsa outbound profile link olarak kullanılabilir. Runtime Instagram'ı açıp factual enrichment yapmaz ve profil içeriğini SOURCE_REGISTER factual source olarak eklemez.

## Demo / Prototype Semantics

Bu projenin satış demosu ve `Prototype` olması yalnız delivery purpose / runtime maturity belirtir.

Bunlar şunları authorize etmez:

- approved input'ta olmayan form, booking, map, WhatsApp, modal veya başka interaction/capability,
- placeholder sağlık/meslek/kişi iddiası,
- generic fizyoterapi hizmet kartları,
- scope expansion,
- düşük kalite / throwaway architecture.

Gerçek backend approved scope'ta değilse uydurulmaz. Gerekli frontend content/data boundary local/static adapter ile temiz tutulur.

## Mandatory Operational Checkpoints

### SOURCE_REGISTER

```text
fresh templates/runs/SOURCE_REGISTER_TEMPLATE.md
→ project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md factual evidence
→ approved input/snapshot only as derivative authorities
→ write SOURCE_REGISTER
```

`SRC-*` factual source setine PROJECT_INPUT, INPUT_SNAPSHOT, engine, package, template, ref veya Instagram profile content ekleme. Normal source-closed run'da factual source identity project source file'dır.

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

Önceki wave'in template/ref read'i reuse edilemez. Her wave kendi observable template + quality-ref read event'ini taşımalıdır.

### VALIDATION_REPORT

```text
fresh templates/runs/VALIDATION_REPORT_TEMPLATE.md
→ fresh/current engine/VALIDATION_RULES.md
→ inspect current working-output + evidence
→ write VALIDATION_REPORT
```

Validation report current canonical `VAL-*` gate setini eksiksiz taşımalıdır. Independent observable trace gerçekten doğrulanamıyorsa canonical UNAVAILABLE/UNVERIFIED davranışı uygulanmalı ve validation sonucu buna göre türetilmelidir.

## Talimatlar

1. Product Engine canonical boot/read order'ını baştan uygula.
2. Approved `PROJECT_INPUT` dosyasını tamamen oku ve project truth başlangıcı olarak freeze et.
3. Package/document/profile resolution'ı canonical Engine authority'lerinden yeniden çöz.
4. `RUN_PROTOCOL`, `GENERATION_PIPELINE`, `OUTPUT_STRUCTURE` ve applicable templates/contracts uyarınca yeni run başlat.
5. Her canonical artifact ve her dynamic instance için point-of-use template refresh uygula; batch-read + batch-generate yapma.
6. SOURCE_REGISTER'ı fresh template + exact project source evidence ile üret; runtime authority'leri veya Instagram profil içeriğini factual source olarak sınıflandırma.
7. WAVE_MAP yalnız approved executable scope'u decomposition seviyesinde freeze etsin.
8. Her WAVE_PLAN yalnız exact parent WAVE_MAP entry'yi implementation seviyesinde detaylandırsın; parent'ta olmayan yeni capability, sağlık claim'i veya content family ekleme.
9. Her WAVE_PLAN için fresh template + current-wave quality ref gerçekten re-open edilsin; ref/template context'i wave'ler arasında reuse etme.
10. Factual claims yalnız source-backed SOURCE_REGISTER/FCL zinciriyle desteklensin.
11. Düşük bilgi yoğunluğunu çözmek için generic fizyoterapi domain bilgisiyle içerik üretme; eksik factual content açıkça eksik kalabilir, tasarım bunu layout/composition ile çözmelidir.
12. VALIDATION_REPORT write öncesi current validation template ve validation rules fresh-read edilsin.
13. Independent observable IDE/tool trace gerçekten inspect edilemiyorsa `AVAILABLE` ilan etme; canonical UNAVAILABLE/UNVERIFIED davranışını uygula.
14. Validation report current gate seti, source classification, semantic capability diff ve gerçek evidence sınırlarına göre fail-closed çalışsın; agent self-report ground truth değildir.
15. Publication/completion yalnız canonical validation gate izin veriyorsa yapılsın.

## Beklenen Akış

```text
approved PROJECT_INPUT v1
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
