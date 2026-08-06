# BUILD_STATUS

~~~md
# Product Engine Build Status

## 1. Belgenin Amacı

Bu belge, Product Engine’in planlama, üretim, audit ve onay sürecindeki güncel durumunu takip eder.

Bu dosya:

- Product Engine’in genel proje planı değildir.
- Bir Product Engine run kaydı değildir.
- Engine changelog değildir.
- Ayrıntılı çalışma günlüğü değildir.
- Klasörlerin nasıl üretileceğini açıklayan bir spec değildir.

Ana sorusu şudur:

> Product Engine’in hangi bölümü hazır, hangi bölüm üzerinde çalışılıyor ve sıradaki iş nedir?

Bu belge, Product Engine’in inşa sürecindeki tek üst seviye durum kaynağıdır.

---

# 2. Genel Durum

```text
Current Phase:
Planning Specifications Completed

Current Focus:
Planning Set Cross-Audit

Next Major Build:
engine/

Overall Status:
Planning hazır, gerçek klasör üretimi henüz başlamadı.
```

------

# 3. Güncel Özet

Product Engine’in bütün ana klasörleri için planning spec belgeleri hazırlanmıştır.

Tamamlanan planning seti:

```text
planning/
├── README.md
├── BUILD_STATUS.md
├── ENGINE_FOLDER_SPEC.md
├── PACKAGES_FOLDER_SPEC.md
├── TEMPLATES_FOLDER_SPEC.md
├── INPUTS_FOLDER_SPEC.md
├── RUNS_FOLDER_SPEC.md
├── OUTPUTS_FOLDER_SPEC.md
├── LOGS_FOLDER_SPEC.md
├── EXAMPLES_FOLDER_SPEC.md
└── ARCHIVE_FOLDER_SPEC.md
```

Planning belgeleri hazırdır.

Ancak:

- planning setinin çapraz audit’i henüz yapılmamıştır,
- gerçek `engine/` belgeleri henüz üretilmemiştir,
- diğer ana klasörlerin build aşaması başlamamıştır,
- hiçbir klasör henüz final veya locked kabul edilmemelidir.

------

# 4. Durum Tanımları

## Spec Status

```text
Not Started
→ Spec çalışması başlamadı.

Draft
→ Spec hazırlanıyor ancak henüz hazır değil.

Ready
→ Spec tamamlandı ve audit için hazır.

Approved
→ Spec audit edildi ve kullanıma onaylandı.

Needs Revision
→ Spec üzerinde düzeltme gerekiyor.
```

## Build Status

```text
Not Started
→ Gerçek klasör içeriği henüz üretilmedi.

In Progress
→ Klasör üzerinde aktif üretim yapılıyor.

Built
→ Klasör içeriği üretildi ve audit bekliyor.

Blocked
→ Üretim bir karar veya bağımlılık nedeniyle durdu.
```

## Audit Status

```text
Not Started
→ Audit yapılmadı.

In Review
→ Audit devam ediyor.

Pass
→ Kritik veya önemli sorun bulunmadı.

Conditional Pass
→ Küçük düzeltmelerle kabul edilebilir.

Fail
→ Kritik çelişki veya eksiklik bulundu.
```

## Final Status

```text
Pending
→ Süreç devam ediyor.

Approved
→ Build ve audit tamamlandı.

Locked
→ Onaylı yapı aktif temel olarak sabitlendi.

Deprecated
→ Artık aktif kullanılmıyor.
```

------

# 5. Planning Set Durumu

| Dosya                               | Spec Status | Audit Status | Final Status | Not                                         |
| ----------------------------------- | ----------- | ------------ | ------------ | ------------------------------------------- |
| `planning/README.md`                | Ready       | Not Started  | Pending      | Planning kullanım ve üretim protokolü hazır |
| `planning/ENGINE_FOLDER_SPEC.md`    | Ready       | Not Started  | Pending      | Engine klasörü yapım şartnamesi hazır       |
| `planning/PACKAGES_FOLDER_SPEC.md`  | Ready       | Not Started  | Pending      | Package sistemi yapım şartnamesi hazır      |
| `planning/TEMPLATES_FOLDER_SPEC.md` | Ready       | Not Started  | Pending      | Template sistemi yapım şartnamesi hazır     |
| `planning/INPUTS_FOLDER_SPEC.md`    | Ready       | Not Started  | Pending      | Input sistemi yapım şartnamesi hazır        |
| `planning/RUNS_FOLDER_SPEC.md`      | Ready       | Not Started  | Pending      | Run sistemi yapım şartnamesi hazır          |
| `planning/OUTPUTS_FOLDER_SPEC.md`   | Ready       | Not Started  | Pending      | Output sistemi yapım şartnamesi hazır       |
| `planning/LOGS_FOLDER_SPEC.md`      | Ready       | Not Started  | Pending      | Log sistemi yapım şartnamesi hazır          |
| `planning/EXAMPLES_FOLDER_SPEC.md`  | Ready       | Not Started  | Pending      | Example sistemi yapım şartnamesi hazır      |
| `planning/ARCHIVE_FOLDER_SPEC.md`   | Ready       | Not Started  | Pending      | Archive sistemi yapım şartnamesi hazır      |
| `planning/BUILD_STATUS.md`          | Ready       | Not Started  | Pending      | Üst seviye build takibi hazır               |

Planning belgelerinin hazırlanmış olması, henüz audit edilmiş veya kilitlenmiş oldukları anlamına gelmez.

------

# 6. Ana Klasör Build Durumu

| Sıra | Klasör          | Spec    | Build       | Audit       | Fix         | Final   | Sıradaki Eylem                            |
| ---- | --------------- | ------- | ----------- | ----------- | ----------- | ------- | ----------------------------------------- |
| 1    | `engine/`       | Ready   | Not Started | Not Started | Not Started | Pending | Planning audit sonrasında üret            |
| 2    | `packages/`     | Ready   | Not Started | Not Started | Not Started | Pending | `engine/` onayından sonra üret            |
| 3    | `templates/`    | Ready   | Not Started | Not Started | Not Started | Pending | `packages/` onayından sonra üret          |
| 4    | `inputs/`       | Ready   | Not Started | Not Started | Not Started | Pending | Çekirdek sistem onayından sonra üret      |
| 5    | `runs/`         | Ready   | Not Started | Not Started | Not Started | Pending | Input ve engine yapısıyla uyumlu üret     |
| 6    | `outputs/`      | Ready   | Not Started | Not Started | Not Started | Pending | Run ve validation yapısından sonra üret   |
| 7    | `logs/`         | Ready   | Not Started | Not Started | Not Started | Pending | Operasyon yapıları netleşince üret        |
| 8    | `examples/`     | Ready   | Not Started | Not Started | Not Started | Pending | Onaylı sistemi test edecek örnekleri üret |
| 9    | `archive/`      | Ready   | Not Started | Not Started | Not Started | Pending | Aktif yapı tamamlandıktan sonra üret      |
| 10   | Kök entegrasyon | Pending | Not Started | Not Started | Not Started | Pending | Bütün klasörlerden sonra tamamla          |

------

# 7. Onaylanan İnşa Sırası

Product Engine klasörleri şu sırayla hazırlanacaktır:

```text
1. Planning set cross-audit
2. Gerekli planning düzeltmeleri
3. engine/
4. packages/
5. templates/
6. inputs/
7. runs/
8. outputs/
9. logs/
10. examples/
11. archive/
12. Kök README ve entegrasyon
13. Manuel Product Engine testi
14. Son audit ve kilitleme
```

Bir klasörün bağımlı olduğu önceki klasör onaylanmadan sonraki build aşamasına geçilmemelidir.

------

# 8. Aktif Aşama

## Planning Set Cross-Audit

Planning setinin bütün belgeleri hazırlanmıştır.

Sıradaki çalışma, bu belgeleri birbirleriyle karşılaştıran çapraz audit’tir.

Audit sırasında özellikle şu konular kontrol edilmelidir:

- Aynı terimlerin farklı spec’lerde aynı anlamda kullanılması
- Klasör sorumluluklarının birbirine karışmaması
- Dosya ve klasör ağaçlarının uyumu
- Var olmayan belgelerin zorunlu kaynak olarak gösterilmemesi
- Package, template ve document catalog ilişkisi
- Input, run ve output sınırları
- Delivery profile terminolojisi
- Run template’lerinin konumu
- Output sürümleme yaklaşımı
- Archive ve aktif klasör ilişkisi
- Tekrar eden veya gereksiz kurallar
- Gerçek build’i engelleyecek açık kararlar

Audit ilk aşamada planning belgelerini değiştirmemelidir.

Yalnızca bulgu raporu üretmelidir.

------

# 9. Planning Audit Kabul Koşulları

Planning audit sonucu `PASS` veya kabul edilmiş `CONDITIONAL PASS` olmadan `engine/` build aşamasına geçilmemelidir.

## PASS

- Kritik çelişki yoktur.
- Klasör sorumlulukları nettir.
- Build sırası uygulanabilirdir.
- Dosya ağaçları uyumludur.
- Açık kararlar üretimi engellememektedir.

## CONDITIONAL PASS

- Üretimi engellemeyen küçük ifade veya terminoloji düzeltmeleri vardır.
- Düzeltmeler kayıt altına alınarak build başlayabilir.

## FAIL

- Aynı sorumluluk birden fazla klasör tarafından sahipleniliyorsa
- Spec’ler farklı klasör yapıları tanımlıyorsa
- Zorunlu bağımlılıklar mevcut değilse
- Engine üretimini engelleyen açık kararlar varsa
- Planning seti uygulanabilir tek bir sistem oluşturmuyorsa

------

# 10. Bir Klasörün Build Akışı

Her ana klasör için aşağıdaki süreç uygulanmalıdır:

```text
Spec’i oku
→ Bağımlı onaylı belgeleri oku
→ Yalnızca hedef klasörü üret
→ Build raporu hazırla
→ Ayrı ajanla audit yap
→ Bulguları değerlendir
→ Onaylanan düzeltmeleri uygula
→ Yeniden doğrula
→ Klasörü onayla
→ BUILD_STATUS güncelle
```

------

# 11. Klasör Tamamlanma Koşulları

Bir klasör yalnızca aşağıdaki koşullarda `Approved` kabul edilmelidir:

1. İlgili spec audit edilmiştir.
2. Klasördeki zorunlu belgeler doldurulmuştur.
3. Build raporu hazırlanmıştır.
4. Ayrı audit tamamlanmıştır.
5. Kritik bulgular çözülmüştür.
6. Önemli çelişkiler giderilmiştir.
7. Başka klasörlerin sorumlulukları ihlal edilmemiştir.
8. Belgeler ajan bağımsızdır.
9. Manuel kullanım mümkündür.
10. Bu dosyadaki durum tablosu güncellenmiştir.

`Locked` durumu ancak klasör gerçek bir testte başarıyla kullanıldıktan sonra verilmelidir.

------

# 12. Kararlaştırılan Konular

Aşağıdaki açık kararlar planning audit sonrasında kesinleştirilmiştir.

## Run Template Konumu

**Karar:** `templates/runs/`

Run operasyon belgelerinin şablonları `templates/runs/` altında tutulacaktır.

`runs/` klasörü yalnızca gerçek run kayıtlarını barındırır; template sahibi değildir.

------

## Output Sürümleme Yapısı

**Karar:** `latest/` + `versions/` yapısı

```text
outputs/<category>/<project-slug>/
├── latest/
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── v1.0/
```

`latest/`, en son geçerli `Active` output'u temsil eder.

Validation'dan geçmeyen veya invalidated output `latest/` olamaz.

Flat yapı (`outputs/<category>/<project-slug>_<version>/`) kullanılmayacaktır.

------

## Example Scenario Yapısı

**Karar:** V0 için mevcut ayrı alt klasör yapısı

```text
examples/
├── inputs/
├── runs/
└── outputs/
```

Aynı senaryoya ait dosyalar ortak `scenario_id` ile ilişkilendirilir.

Örnek: `corporate-site-minimal-001`

`examples/scenarios/<scenario-id>/` yapısı gelecekte değerlendirilebilecek bir seçenektir; V0 build yapısı değildir.

------

## Archive Metadata Yöntemi

**Karar:** YAML frontmatter

Arşivlenen her Markdown dosyasının başına YAML frontmatter bloğu eklenir:

```yaml
---
archive_id: ARC-...
status: deprecated
archive_reason: ...
replacement: ...
archived_at: YYYY-MM-DD
---
```

Ayrı metadata dosyası veya merkezi manifest V0'da kullanılmayacaktır.

------

## Engine Sürüm Kaynağı

**Karar:**

- Kök `README.md` → güncel aktif Product Engine sürümünün authoritative kaynağı
- `logs/ENGINE_CHANGELOG.md` → Product Engine sürüm geçmişinin authoritative kaynağı

`PRODUCT_ENGINE_BRAIN.md` sürümün bağımsız sahibi değildir.

Aynı sürüm bilgisi farklı belgeler tarafından bağımsız biçimde sahiplenilmemelidir.

------

# 13. Blokerler

Şu anda gerçek bir build blokeri bulunmamaktadır.

Ancak planning audit yapılmadan build başlatılması önerilmemektedir.

Mevcut durum:

```text
Blocker:
Yok

Required Gate:
Planning cross-audit

Next Build Target:
engine/
```

------

# 14. Sonraki Eylem

Sıradaki tek aktif görev:

```text
Bütün planning setini çapraz audit et.
```

Audit tamamlandıktan sonra:

```text
1. Bulguları önem seviyesine göre değerlendir.
2. Yalnızca gerekli düzeltmeleri uygula.
3. Planning audit durumunu güncelle.
4. ENGINE_FOLDER_SPEC’e göre engine/ klasörünü üret.
```

------

# 15. Değişiklik Güncelleme Protokolü

Bu dosya aşağıdaki olaylarda güncellenmelidir:

- Planning audit başladığında
- Planning audit tamamlandığında
- Bir spec revize edildiğinde
- Bir klasör build aşamasına geçtiğinde
- Bir klasör üretildiğinde
- Audit sonucu alındığında
- Düzeltme tamamlandığında
- Bir klasör Approved veya Locked olduğunda
- Yeni bir bloker oluştuğunda
- Aktif çalışma değiştiğinde
- Manuel Product Engine testi tamamlandığında

Her küçük metin düzenlemesinde bu dosya güncellenmemelidir.

------

# 16. Güncelleme İlkesi

Durumlar gerçeği yansıtmalıdır.

Aşağıdaki davranışlardan kaçınılmalıdır:

- Üretilmemiş klasörü `Built` göstermek
- Audit edilmemiş spec’i `Approved` göstermek
- Açık kritik bulgu varken klasörü onaylamak
- Başlamamış işi `In Progress` olarak bırakmak
- Eski next action bilgisini güncellememek
- Tamamlanmamış planning setini kilitli göstermek

Bu dosya iyimser tahmin değil, mevcut gerçeklik kaydıdır.

------

# 17. Güncelleme Kaydı

## 2026-08-06

### Tamamlananlar

- Product Engine ana klasör yapısı belirlendi.
- Bütün ana klasörler için planning spec belgeleri hazırlandı.
- `planning/README.md` hazırlandı.
- `planning/BUILD_STATUS.md` hazırlandı.

### Mevcut Aşama

Planning seti çapraz audit için hazır.

### Henüz Başlamayanlar

- Planning cross-audit
- Gerçek klasör build’leri
- Klasör bazlı audit’ler
- Example senaryoları
- Manuel Product Engine testi
- Final entegrasyon
- Kilitleme

### Sıradaki İş

Planning setinin temiz bir ajan veya ayrı sohbet tarafından çapraz denetlenmesi.

------

# 18. Nihai Hedef

Product Engine build süreci tamamlandığında bu belge şunları açık biçimde gösterebilmelidir:

- Hangi spec’lerin onaylandığını
- Hangi klasörlerin üretildiğini
- Hangi klasörlerin audit edildiğini
- Hangi düzeltmelerin tamamlandığını
- Hangi sürümlerin aktif olduğunu
- Hangi yapıların kilitlendiğini
- Sistemin manuel testten geçip geçmediğini
- Sıradaki bakım veya geliştirme işini

Başarı modeli:

```text
Hazır Planning Seti
+
Çapraz Audit
+
Klasör Bazlı Build
+
Bağımsız Audit
+
Kontrollü Düzeltme
+
Manuel Product Engine Testi
=
Onaylı ve Kullanılabilir Product Engine V0
```

Bu dosyanın başarısı ayrıntılı çalışma geçmişi taşımasıyla değil; Product Engine’in mevcut durumunu birkaç dakika içinde doğru ve tartışmasız biçimde gösterebilmesiyle ölçülmelidir.
