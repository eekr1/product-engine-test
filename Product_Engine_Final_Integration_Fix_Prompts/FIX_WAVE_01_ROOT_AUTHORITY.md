# Product Engine — Final Integration Fix
# Wave 01 — Root Authority, Read Order & Build-State Closure

Repo: `eekr1/product-engine-test`

Bu çalışma final integration audit sonrasında yapılan ilk fix dalgasıdır.

## Bu Wave'in Amacı

Repository'nin üst seviye authority katmanını tamamlamak.

Bu wave sonunda:

- root `README.md` gerçek sistem giriş noktası olmalı,
- root authority/read-order tek ve net olmalı,
- aktif Product Engine version authority belirlenmiş olmalı,
- `PRODUCT_ENGINE_BRAIN.md` sade ve tek anlamlı olmalı,
- planning'in artık build-design/history katmanı olduğu açık olmalı,
- `planning/BUILD_STATUS.md` mevcut repo gerçeğini yansıtmalı.

Yeni runtime mimarisi tasarlama.

---

# Önce Oku

Aşağıdaki dosyaları sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `README.md`
3. `engine/README.md`
4. `planning/README.md`
5. `planning/BUILD_STATUS.md`
6. `logs/README.md`
7. `logs/ENGINE_CHANGELOG.md`
8. `archive/README.md`

Ardından repository root'taki mevcut `PROMPT_XX_*.md` dosyalarının isimlerini ve rollerini yalnız inventory amacıyla incele.

---

# Authority İlkesi

Bu wave sonunda authority hierarchy açıkça şu mantıkta olmalı:

```text
Root README
→ Repository entry point
→ Current Product Engine version
→ Current system state
→ Canonical boot/read order
→ Active vs historical layers map

PRODUCT_ENGINE_BRAIN
→ Product Engine'in amacı, vizyonu, sınırları ve temel operating philosophy

engine/
→ Runtime behavior contracts

packages/
→ Package definitions

templates/
→ Generation structures

inputs/
→ Approved project truth

runs/
→ Execution evidence

outputs/
→ Final validated deliverables

logs/
→ Persistent engine-level memory

examples/
→ Non-authoritative fixtures

archive/
→ Inactive historical material

planning/
→ Historical/build-design specs; runtime authority değildir

root PROMPT_XX files
→ Historical build orchestration artifacts; runtime authority değildir
```

---

# Görev 1 — Root README'yi Gerçek Sistem Giriş Noktası Yap

Mevcut root `README.md` placeholder durumundadır.

Onu Product Engine'in canonical repository entry point'i haline getir.

Minimum şu bölümleri içersin:

## Product Engine Nedir?

Kısa özet. Brain'i tekrar etme.

## Current Version

Tek authoritative aktif engine version burada olsun.

V0 final integration sonrası sade bir version seç.

Tercih:

```text
Product Engine Version: 0.1.0
```

Eğer mevcut repo history veya changelog başka açık version kararı içeriyorsa onu kullan.

Version history'nin sahibi `logs/ENGINE_CHANGELOG.md` olarak kalsın.

## Repository Map

Ana klasörlerin tek cümlelik rolleri.

## Authority Hierarchy

Hangi katmanın hangi sorunun sahibi olduğu.

## Canonical Agent Boot / Read Order

Bu read order runtime data flow değildir.

Açıkça iki kavramı ayır:

```text
Agent Boot Read Order
≠
Runtime Execution Flow
```

Önerilen boot order:

1. Root `README.md`
2. `PRODUCT_ENGINE_BRAIN.md`
3. `engine/README.md`
4. İlgili engine contracts
5. Seçilen package
6. İlgili templates
7. Aktif approved input
8. Run sırasında ilgili run records

`planning/`, `examples/`, `archive/` varsayılan boot read order'a dahil edilmemeli.

## Current Build State

Tüm ana klasörlerin built/closed olduğunu açıkça belirt.

## Historical / Non-Runtime Layers

`planning/`, root `PROMPT_XX`, `examples/`, `archive/`, `ref/` rollerini ayır.

---

# Görev 2 — `PRODUCT_ENGINE_BRAIN.md` Sadeleştirme

Dosya şu anda aynı Product Engine tanımını iki kez taşıyor.

Yap:

- ilk kaba/orijinal anlatımı ve ikinci formal anlatımı tek, temiz Brain içinde birleştir,
- tekrarları kaldır,
- Product Engine'in:
  - amacı,
  - girdisi,
  - çıktısı,
  - model bağımsızlığı,
  - ilk çalışan sürüm tanımı,
  - temel sınırları
  net kalsın.

Brain:

- current version authority olmasın,
- repo status belgesi olmasın,
- folder-by-folder build history tutmasın,
- runtime rule detaylarını engine dosyalarından kopyalamasın.

---

# Görev 3 — `planning/BUILD_STATUS.md` Güncelle

Mevcut dosya stale ve kendisini üst seviye build status authority ilan ediyor.

Dosyayı güncel gerçekliğe getir.

Yeni durum yaklaşık şu mantığı yansıtmalı:

```text
Planning: Completed
Folder Builds: Completed
Final Integration Audit: Completed
Integration Fixes: In Progress
Current Fix Wave: Wave 01
```

Ancak bu dosyanın rolünü de sınırla:

- runtime status authority değildir,
- Product Engine current operational truth değildir,
- yalnız Product Engine repository build/integration history/status belgesidir.

Folder status tablosu varsa gerçek duruma güncelle:

- engine CLOSED
- packages CLOSED
- templates CLOSED
- inputs CLOSED
- runs CLOSED
- outputs CLOSED
- logs CLOSED
- examples CLOSED
- archive CLOSED

Final integration fixes henüz tamamlanmadığı için repository overall status'ü:
`Integration Fix In Progress`
gibi açık bir değer taşıyabilir.

---

# Görev 4 — Planning'in Runtime Authority Olmadığını Netleştir

`planning/README.md` ve gerekirse `planning/BUILD_STATUS.md` içinde açıkça belirt:

- planning belgeleri build-design specification'dır,
- tamamlanmış runtime contract'ları override edemez,
- runtime ile planning çelişirse current runtime contracts authoritative'dir,
- planning yeni agent boot order'ının zorunlu parçası değildir.

Planning'i silme veya archive'a taşıma.

---

# Görev 5 — Version Authority Zincirini Tamamla

Root README aktif version sahibi olacak.

`logs/ENGINE_CHANGELOG.md` version history sahibi olacak.

Gerekli yerlerde şu eski geçici ifadeleri düzelt:

```text
engine_version: not_assigned
```

Ancak bu wave'de examples fixture içeriklerini topluca değiştirme.
Examples senkronizasyonu Wave 04'te yapılacak.

Logs README içinde:

> root README aktif version authority

ifadesi yeni gerçekle uyumlu olmalı.

---

# Scope Sınırı

Bu wave'de:

- runtime lifecycle kurallarını değiştirme,
- package selection logic değiştirme,
- output version algoritması değiştirme,
- examples fixture düzeltme,
- root prompt dosyalarını taşıma/silme/rename etme,
- package/template content değiştirme.

Bunlar sonraki wave'lerin konusu.

---

# Validation

Wave sonunda doğrula:

1. Root README artık placeholder değil.
2. Root README current version sahibi.
3. `PRODUCT_ENGINE_BRAIN.md` tek tanım taşıyor.
4. `engine/README.md` ile root read order çelişmiyor.
5. planning artık runtime authority gibi görünmüyor.
6. `planning/BUILD_STATUS.md` mevcut repo gerçeğini yansıtıyor.
7. Active vs historical layers net.
8. No broken repo-relative links.
9. `git diff --check` temiz.

---

# Çalışma Sonu Raporu

Şunları yaz:

- Değiştirilen dosyalar
- Kapatılan audit bulguları
- Yeni root authority hierarchy
- Aktif Product Engine version
- Kalan riskler
- Wave 02'ye geçmeye engel olup olmadığı

Bu wave dışına çıkma.
