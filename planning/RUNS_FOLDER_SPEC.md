# RUNS_FOLDER_SPEC

# RUNS_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `runs/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- Run kavramının Product Engine içerisindeki anlamını,
- `runs/` klasörünün sistemdeki görevini,
- bir Product Engine çalışmasının nasıl başlatılacağını,
- çalışma sırasında hangi kayıtların tutulacağını,
- run durumlarının nasıl yönetileceğini,
- input, package, template, ref ve output ilişkilerinin nasıl izleneceğini,
- başarılı, başarısız ve yarım kalan çalışmaların nasıl kapatılacağını,
- run kayıtlarının nasıl denetlenebilir ve tekrar üretilebilir hâle getirileceğini,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge gerçek bir Product Engine run kaydı değildir.

`planning/RUNS_FOLDER_SPEC.md`, Product Engine içerisinde kullanılacak run yapısını ve run kayıt belgelerini hazırlayan ajan için bağlayıcı bir inşa rehberidir.

Gerçek çalışma kayıtları `runs/` klasörü içerisinde tutulacaktır.

---

# 2. Kaynak ve Üst Bağlam

`runs/` klasörü hazırlanırken aşağıdaki belgeler temel kaynak olarak kabul edilmelidir:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/ENGINE_FOLDER_SPEC.md`
3. `planning/PACKAGES_FOLDER_SPEC.md`
4. `planning/TEMPLATES_FOLDER_SPEC.md`
5. `planning/INPUTS_FOLDER_SPEC.md`
6. `planning/RUNS_FOLDER_SPEC.md`
7. `engine/GENERATION_PIPELINE.md`
8. `engine/RUN_PROTOCOL.md`
9. `engine/PROJECT_INTAKE.md`
10. `engine/PACKAGE_RULES.md`
11. `engine/ASSUMPTION_RULES.md`
12. `engine/CONFLICT_RESOLUTION.md`
13. `engine/VALIDATION_RULES.md`
14. `engine/OUTPUT_STRUCTURE.md`
15. Tamamlanmış `packages/` belgeleri
16. Tamamlanmış `templates/` belgeleri
17. Mevcut kök klasör yapısı

`PRODUCT_ENGINE_BRAIN.md`, Product Engine’in yapılandırılmış proje girdisini almasını, uygun doküman paketini seçmesini, şablonları kullanmasını, bilgileri doğru belgelere dağıtmasını, çelişkileri kontrol etmesini ve doğrudan kullanılabilir proje dokümantasyonu üretmesini hedefler.

Run sistemi bu hedefin tek çalışma örneğini kaydetme, izleme ve kanıtlama katmanıdır.

---

# 3. Run Kavramı

Bir run, Product Engine’in belirli bir input sürümünü kullanarak belirli bir dokümantasyon çıktısı üretmek üzere gerçekleştirdiği tek ve izlenebilir çalışma örneğidir.

Bir run:

- hangi proje girdisinin kullanıldığını,
- hangi package’ın seçildiğini,
- hangi delivery profile’ın uygulandığını,
- hangi template sürümlerinin kullanıldığını,
- hangi ref belgelerinden yararlanıldığını,
- hangi varsayımların yapıldığını,
- hangi çatışmaların çözüldüğünü,
- hangi aşamaların tamamlandığını,
- hangi validation sonuçlarının alındığını,
- hangi output’un üretildiğini,
- çalışmanın başarılı mı başarısız mı olduğunu

gösterebilmelidir.

```text
Run
=
Input snapshot
+
Package selection
+
Template ve ref kayıtları
+
Üretim aşamaları
+
Varsayımlar ve kararlar
+
Validation
+
Output bağlantısı
+
Kapanış durumu
~~~

Run, nihai proje dokümanlarının kendisi değildir.

Run, bu dokümanların nasıl ve hangi koşullarda üretildiğinin operasyonel kanıtıdır.

------

# 4. `runs/` Klasörünün Sistem İçindeki Görevi

`runs/` klasörü şu soruların sahibidir:

- Bu Product Engine çalışması ne zaman başladı?
- Hangi input sürümü kullanıldı?
- Hangi proje için çalışıldı?
- Hangi package seçildi?
- Package neden seçildi?
- Hangi delivery profile kullanıldı?
- Hangi template sürümleri kullanıldı?
- Hangi ref belgeleri okundu?
- Hangi varsayımlar yapıldı?
- Hangi çelişkiler çözüldü?
- Çalışma hangi aşamada?
- Hangi belgeler üretildi?
- Hangi validation kontrolleri geçti?
- Hangi kontroller başarısız oldu?
- Run neden durdu veya başarısız oldu?
- Nihai output nerede bulunuyor?
- Aynı run güvenilir biçimde incelenebilir mi?
- Yeni bir ajan çalışmaya kaldığı yerden devam edebilir mi?

`runs/` klasörü Product Engine’in çalışma örneği, operasyonel iz ve denetim katmanıdır.

------

# 5. Kapsam Dışı

`runs/` klasörü aşağıdaki içeriklerin ana sahibi değildir:

- Onaylanmış proje girdisinin güncel ana sürümü
- Nihai ve temiz proje dokümanları
- Package tanımlarının kalıcı içeriği
- Template tanımlarının kalıcı içeriği
- Product Engine’in genel çalışma sözleşmeleri
- Engine’in kalıcı changelog’u
- Genel geliştirme fikirleri
- Ref belgelerinin kopyaları
- Proje implementasyon kodu
- Üretim repository’si
- Müşteriye teslim edilecek temiz çıktı dizini
- Engine’in bütün geçmiş run özetleri
- Belirli modele özel konuşma geçmişi

Bu sorumluluklar ilgili diğer klasörlerde bulunmalıdır.

```text
inputs/
→ Run hangi proje gerçeğini kullanır?

runs/
→ Bu proje gerçeğiyle yapılan çalışmada ne oldu?

outputs/
→ Çalışmanın temiz ve teslim edilebilir sonucu nedir?

logs/
→ Bütün run’lardan Product Engine hakkında hangi kalıcı dersler çıkarıldı?

archive/
→ Artık aktif tutulmayan eski run kayıtları nerede saklanır?
```

------

# 6. Klasör Yapısı

Başlangıçta `runs/` klasörü aşağıdaki yapıya sahip olacaktır:

```text
runs/
├── README.md
├── active/
├── completed/
└── failed/
```

Her run kendi klasöründe tutulmalıdır.

Önerilen run yapısı:

```text
runs/active/<run-id>/
├── RUN_MANIFEST.md
├── INPUT_SNAPSHOT.md
├── PACKAGE_SELECTION.md
├── SOURCE_REGISTER.md
├── ASSUMPTIONS.md
├── CONFLICTS.md
├── DECISIONS.md
├── RUN_LOG.md
├── PROGRESS.md
├── VALIDATION_REPORT.md
├── COMPLETION_REPORT.md
└── working-output/
```

Başarılı run tamamlandığında run klasörü:

```text
runs/completed/<run-id>/
```

konumuna taşınır.

Başarısız veya devam ettirilemeyecek run:

```text
runs/failed/<run-id>/
```

konumuna taşınır.

Bu yapı başlangıç hedefidir.

Mevcut ağaçta bulunmayan dosyalar, ihtiyaç doğrulandıktan ve tekil sorumlulukları onaylandıktan sonra eklenmelidir.

------

# 7. `README.md`

## Sahip Olduğu Soru

Run sistemi nasıl kullanılır?

## İçermelidir

- Run kavramı
- Run yaşam döngüsü
- Active, completed ve failed ayrımı
- Run klasör yapısı
- Run ID standardı
- Run başlatma koşulları
- Run kapatma koşulları
- Output ile run kaydı arasındaki ayrım
- Run devam ettirme davranışı
- Kullanılan input, package ve template sürümlerinin kaydı
- İlgili engine sözleşmelerine referanslar
- Hangi dosyanın hangi sorumluluğa sahip olduğu

## İçermemelidir

- Bütün run belgelerinin içeriklerinin tekrarı
- Genel generation pipeline’ın tamamı
- Package seçim karar ağacının tamamı
- Template içerikleri
- Gerçek proje kayıtları
- Bütün run geçmişinin listesi

------

# 8. Run Yaşam Döngüsü

Her run aşağıdaki yaşam döngüsünü desteklemelidir:

```text
Created
→ Initialized
→ Running
→ Validation
→ Completed
```

Alternatif yollar:

```text
Running
→ Blocked
→ Running
Running
→ Paused
→ Resumed
Running
→ Failed
Validation
→ Failed
Running
→ Cancelled
```

Run durumlarının tanımları tek bir authoritative belgede bulunmalıdır.

Run durumu yalnızca klasör konumundan anlaşılmamalıdır.

`RUN_MANIFEST.md` içerisinde açıkça kaydedilmelidir.

------

# 9. Run Durumları

## 9.1 Created

Run kimliği oluşturulmuştur ancak çalışma henüz başlatılmamıştır.

Bu durumda:

- Run klasörü oluşturulabilir.
- Temel metadata yazılabilir.
- Input snapshot henüz tamamlanmamış olabilir.
- Üretim başlamamalıdır.

------

## 9.2 Initialized

Run başlamak için gerekli başlangıç belgeleri hazırlanmıştır.

En az:

- Run manifest
- Input snapshot
- Package selection
- Kaynak kaydı
- Başlangıç validation kontrolü

bulunmalıdır.

Initialized durumda üretime geçilebilir.

------

## 9.3 Running

Product Engine aktif olarak dokümanları üretmekte veya çalışma aşamalarını yürütmektedir.

Bu durumda:

- Run log güncellenmelidir.
- Progress görünür olmalıdır.
- Yeni varsayımlar ve çatışmalar kaydedilmelidir.
- Working output üzerinde çalışılabilir.

------

## 9.4 Blocked

Run kritik bilgi, çatışma, erişim eksikliği veya validation engeli nedeniyle ilerleyememektedir.

Blocked durumda:

- Engelin nedeni kaydedilmelidir.
- Gerekli kullanıcı sorusu veya dış bağımlılık belirtilmelidir.
- Çalışılmış gibi ilerleme kaydedilmemelidir.
- Run completed yapılmamalıdır.

------

## 9.5 Paused

Run bilinçli biçimde geçici olarak durdurulmuştur.

Paused ile Blocked aynı değildir.

```text
Paused
→ Devam kararı beklenir.

Blocked
→ Çözülecek bir engel vardır.
```

Pause nedeni ve devam için gerekli bağlam kaydedilmelidir.

------

## 9.6 Validation

Ana üretim tamamlanmıştır ve çıktılar doğrulanmaktadır.

Bu durumda:

- Working output değiştirilmemiş nihai çıktı gibi sunulmamalıdır.
- Validation raporu tamamlanmalıdır.
- Kritik bulgular çözülmeden completed durumuna geçilmemelidir.

------

## 9.7 Completed

Run başarıyla tamamlanmıştır.

Completed olmak için:

- Zorunlu üretim aşamaları bitmiş,
- Validation kabul edilmiş,
- Nihai output hazırlanmış,
- Completion report yazılmış,
- Output konumu kaydedilmiş

olmalıdır.

------

## 9.8 Failed

Run başarıyla tamamlanamamıştır.

Failed durumu:

- kritik validation hatası,
- çözülemeyen çatışma,
- geçersiz input,
- erişilemeyen zorunlu kaynak,
- sistematik üretim hatası,
- run bütünlüğünün bozulması

gibi nedenlerle oluşabilir.

Başarısızlık nedeni açıkça kaydedilmelidir.

------

## 9.9 Cancelled

Run teknik hata nedeniyle değil, bilinçli karar nedeniyle sonlandırılmıştır.

Örnek:

- Proje iptal edildi.
- Yanlış input kullanıldığı fark edildi.
- Yeni kapsam nedeniyle yeni run açılacak.
- Run tekrarlı oluşturuldu.

Cancelled run, failed run’dan ayrı işaretlenmelidir.

V0’da ikisi aynı klasörde tutulabilir ancak durum metadata’da ayrılmalıdır.

------

# 10. Active, Completed ve Failed Ayrımı

## `active/`

Aşağıdaki durumlardaki run’ları içerir:

- Created
- Initialized
- Running
- Blocked
- Paused
- Validation

## `completed/`

Yalnızca başarıyla tamamlanmış run’ları içerir.

## `failed/`

Aşağıdaki durumları içerebilir:

- Failed
- Cancelled
- Invalidated

Klasör konumu ile `RUN_MANIFEST.md` durumu birbiriyle çelişmemelidir.

------

# 11. Run ID Standardı

Her run benzersiz ve okunabilir bir kimliğe sahip olmalıdır.

Önerilen biçim:

```text
<project-slug>_<date>_<sequence>
```

Örnek:

```text
io-makina_2026-08-06_001
vibehall_2026-08-06_002
```

Daha ayrıntılı biçim gerektiğinde:

```text
<project-slug>_<run-type>_<date>_<sequence>
```

Örnek:

```text
io-makina_generation_2026-08-06_001
vibehall_update_2026-08-06_001
```

Run ID:

- küçük harfli olmalı,
- boşluk içermemeli,
- Türkçe özel karakter içermemeli,
- proje slug’ıyla başlamalı,
- aynı proje ve tarih içinde benzersiz olmalıdır.

Run ID oluşturulduktan sonra değiştirilmemelidir.

------

# 12. Run Türleri

Run sistemi en az aşağıdaki çalışma türlerini destekleyebilmelidir.

## 12.1 Generation Run

Onaylı input’tan yeni proje dokümantasyon paketi üretir.

## 12.2 Update Run

Mevcut doküman paketini yeni bilgi veya kapsamla günceller.

## 12.3 Validation Run

Mevcut output’u veya proje dokümantasyonunu denetler.

## 12.4 Migration Run

Mevcut proje belgelerini Product Engine standardına dönüştürür.

## 12.5 Expansion Run

Mevcut package’ı veya delivery profile’ı genişletir.

Örnek:

```text
Prototype
→ Implementation Ready
```

## 12.6 Repair Run

Eksik, tutarsız veya başarısız bir output paketini düzeltir.

Run türü metadata’da açıkça belirtilmelidir.

Her çalışma otomatik olarak sıfırdan generation run kabul edilmemelidir.

------

# 13. `RUN_MANIFEST.md`

## Sahip Olduğu Soru

Bu run nedir ve mevcut durumu nedir?

## İçermelidir

- Run ID
- Proje adı
- Proje slug
- Run türü
- Run durumu
- Başlangıç tarihi
- Son güncelleme tarihi
- Tamamlanma tarihi
- Çalıştıran ajan veya ortam
- Kullanılan input ID ve sürümü
- Seçilen package
- Delivery profile
- Kullanılan template sürüm özeti
- Nihai output konumu
- Önceki veya bağlı run’lar
- Blocked veya failure nedeni
- Run sahibi veya karar kaynağı

## İçermemelidir

- Ayrıntılı kronolojik log
- Bütün varsayımların tam metni
- Validation bulgularının tamamı
- Nihai doküman içerikleri

`RUN_MANIFEST.md`, run’ın kimlik ve durum merkezi olmalıdır.

------

# 14. Run Manifest Metadata

Önerilen yapı:

```yaml
run_id: io-makina_2026-08-06_001
project_name: IO Makina
project_slug: io-makina
run_type: generation
status: running
created_at: 2026-08-06T11:30:00+03:00
updated_at: 2026-08-06T12:10:00+03:00
completed_at:
input_id: io-makina-001
input_version: 1.0
package_id: corporate-website
delivery_profile: prototype
agent_runtime: claude
previous_run:
output_path:
```

`agent_runtime` alanı izlenebilirlik amacıyla kullanılabilir.

Engine kuralları hiçbir model için özel davranış tanımlamamalıdır.

------

# 15. `INPUT_SNAPSHOT.md`

## Sahip Olduğu Soru

Bu run hangi değişmez proje girdisini kullandı?

## İçermelidir

- Onaylı input’un run başlangıcındaki tam veya kontrollü kopyası
- Input ID
- Input sürümü
- Onay durumu
- Onay tarihi
- Kaynak özeti
- Aktif varsayımlar
- Çözülmüş çatışmalar
- Run başlangıcındaki kapsam ve teslim hedefi

## İçermemelidir

- Run başladıktan sonra ortaya çıkan yeni kararların sessizce eklenmesi
- Ana input dosyasının yerine geçme iddiası
- Run logları
- Output içerikleri

Input snapshot, run süresince değişmez kabul edilmelidir.

Yeni bilgi gelirse snapshot değiştirilmemeli; değişiklik ayrı bir kayıt veya yeni input sürümü olarak ele alınmalıdır.

------

# 16. `PACKAGE_SELECTION.md`

## Sahip Olduğu Soru

Bu run için hangi package ve delivery profile neden seçildi?

## İçermelidir

- Seçilen base package
- Seçilen extension’lar
- Delivery profile
- Seçim gerekçesi
- Kullanılan intake sinyalleri
- Zorunlu dokümanlar
- Koşullu dokümanlar
- Hariç bırakılan dokümanlar
- Package daraltmaları
- Package genişletmeleri
- Package birleşimleri
- Açık package riskleri

## İçermemelidir

- Package sözleşmesinin tamamının kopyası
- Template içerikleri
- Genel package selection kuralları

Bu dosya run’a özel seçim kanıtıdır.

------

# 17. `SOURCE_REGISTER.md`

## Sahip Olduğu Soru

Bu run sırasında hangi kaynaklar, template’ler ve ref belgeleri kullanıldı?

## İçermelidir

Her kaynak için:

```text
source_id
source_type
name
path_or_reference
version
authority_level
usage_scope
used_in
notes
```

Kaynak türleri:

- Input
- Package
- Template
- Ref
- Existing project document
- User-provided source
- Generated intermediate source

Örnek:

```text
Source ID:
template-project-brain-v0.1

Type:
Template

Path:
templates/ai/PROJECT_BRAIN_TEMPLATE.md

Usage:
PROJECT_BRAIN.md üretimi

Authority:
Binding template
```

Raw ref dosyaları run klasörüne gereksiz yere kopyalanmamalıdır.

Kaynak konumu ve sürümü kaydedilmelidir.

------

# 18. Template Sürüm Kaydı

Run, kullanılan her aktif template’in sürümünü saklamalıdır.

Örnek:

```md
| Document ID | Template | Version |
|---|---|---|
| PROJECT_BRAIN | PROJECT_BRAIN_TEMPLATE.md | 0.2 |
| TECH_CONTEXT | TECH_CONTEXT_TEMPLATE.md | 0.1 |
| WAVE_PLAN | WAVE_PLAN_TEMPLATE.md | 0.3 |
```

Bu kayıt, aynı run’ın gelecekte neden farklı output ürettiğini anlamaya yardım eder.

Template sürümü kaydedilmeden completed run oluşturulmamalıdır.

------

# 19. Ref Kullanım Kaydı

Run sırasında kullanılan ref belgeleri kaydedilmelidir.

Her ref için:

- Hangi yapısal amaçla kullanıldığı
- Hangi output belgelerini etkilediği
- Otorite seviyesi
- Proje özel içeriğinin taşınmadığına dair kontrol

belirtilmelidir.

Örnek:

```text
Ref:
Ref Docs/Design/Design System.md

Usage:
Tasarım dokümanının bölüm yapısını ve ayrıntı seviyesini anlamak.

Not:
Ref içerisindeki marka, renk ve proje özel kararlar output’a taşınmadı.
```

------

# 20. `ASSUMPTIONS.md`

## Sahip Olduğu Soru

Bu run sırasında hangi varsayımlar yapıldı?

## İçermelidir

Her varsayım için:

```text
assumption_id
description
reason
source_gap
impact
risk_level
temporary_or_permanent
approval_status
affected_documents
resolution_status
```

Örnek:

```text
Assumption ID:
ASM-001

Description:
İlk sürümde ürün içerikleri mock data ile gösterilecek.

Reason:
Gerçek veri kaynağı henüz sağlanmadı.

Impact:
Frontend akışları hazırlanabilir; gerçek entegrasyon kapsam dışıdır.

Risk:
Low

Status:
Approved temporary assumption
```

Varsayımlar run log içinde kaybolmamalıdır.

Ayrı ve denetlenebilir biçimde tutulmalıdır.

------

# 21. Varsayım Durumları

Varsayımlar en az aşağıdaki durumları desteklemelidir:

- Proposed
- Approved
- Rejected
- Resolved
- Superseded

Kritik bir varsayım yalnızca Proposed durumundayken üretimde gerçek bilgi gibi kullanılmamalıdır.

Varsayım çözüldüğünde:

- yeni gerçek bilgi belirtilmeli,
- etkilenen dokümanlar güncellenmeli,
- eski varsayım silinmemeli,
- `Resolved` olarak işaretlenmelidir.

------

# 22. `CONFLICTS.md`

## Sahip Olduğu Soru

Bu run sırasında hangi bilgi veya kural çatışmaları ortaya çıktı ve nasıl çözüldü?

## İçermelidir

Her çatışma için:

```text
conflict_id
source_a
source_b
description
severity
affected_scope
resolution_rule
resolution
resolved_by
status
```

Örnek:

```text
Conflict:
Mevcut sitede 7 sayfa bulunuyor; approved input 5 sayfalık yeni kapsam belirtiyor.

Resolution:
Approved input güncel proje kapsamı olarak kabul edildi.

Affected documents:
PROJECT_PLAN, DESIGN_PACKAGE, WAVE_PLAN

Status:
Resolved
```

Çözülemeyen kritik çatışmalar run’ı Blocked durumuna taşımalıdır.

------

# 23. `DECISIONS.md`

## Sahip Olduğu Soru

Bu run sırasında hangi operasyonel veya üretim kararları alındı?

## İçermelidir

- Package genişletme kararları
- Doküman hariç bırakma kararları
- Delivery profile uyarlamaları
- Template seçimi değişiklikleri
- Output biçimi kararları
- Run’a özel üretim kararları
- Karar gerekçeleri

## İçermemelidir

- Projenin bütün kalıcı ürün ve teknik karar geçmişi
- Engine’in genel kararları
- Package sözleşmesinin kopyası

Run içinde alınan kalıcı proje kararları, nihai output içerisindeki proje `DECISIONS.md` belgesine de aktarılmalıdır.

Run `DECISIONS.md`, bu aktarımın kaynağını gösterir.

------

# 24. `RUN_LOG.md`

## Sahip Olduğu Soru

Run sırasında hangi önemli işlemler hangi sırayla gerçekleştirildi?

## İçermelidir

- Tarih veya zaman
- Aşama
- Yapılan işlem
- Sonuç
- Durum değişikliği
- Oluşan hata veya uyarı
- İlgili belge veya artefakt

Örnek:

```md
## 2026-08-06 11:40

- Input snapshot oluşturuldu.
- Corporate Website Package seçildi.
- Delivery profile: Prototype.
- PROJECT_BRAIN ve PRODUCT_RULES üretimi tamamlandı.
```

Run log kısa, kronolojik ve operasyonel olmalıdır.

Ajanın uzun iç muhakemesi veya özel chain-of-thought metni kaydedilmemelidir.

Yalnızca gözlemlenebilir işlemler ve kararlar yazılmalıdır.

------

# 25. Log Yoğunluğu

Run log her küçük metin düzenlemesini kaydetmemelidir.

Kaydedilmesi gerekenler:

- Durum değişiklikleri
- Pipeline aşamalarının tamamlanması
- Yeni varsayım
- Yeni çatışma
- Package değişikliği
- Kritik validation bulgusu
- Output üretimi
- Run kapanışı

Kaydedilmemesi gerekenler:

- Her paragraf düzenlemesi
- Ajanın iç düşünce akışı
- Önemsiz biçim düzeltmeleri
- Aynı olayın tekrarları

Amaç izlenebilirliktir; gürültü üretmek değildir.

------

# 26. `PROGRESS.md`

## Sahip Olduğu Soru

Run’ın hangi aşamaları tamamlandı, hangileri açık ve sırada ne var?

## İçermelidir

- Pipeline aşamaları
- Her aşamanın durumu
- Tamamlanan dokümanlar
- Bekleyen dokümanlar
- Blokerler
- Sonraki adım
- Validation durumu

Örnek:

```md
| Aşama | Durum | Not |
|---|---|---|
| Input validation | Completed | Approved input kullanıldı |
| Package selection | Completed | Corporate Website |
| Core AI docs | Completed | 7/7 |
| Design docs | In progress | 3/5 |
| Wave docs | Not started | — |
| Final validation | Not started | — |
```

Progress belgesi, `CURRENT_STATUS.md` gibi proje durum belgesi değildir.

Yalnızca aktif run’ın ilerlemesini gösterir.

------

# 27. Working Output

Run sırasında üretilen geçici belgeler:

```text
working-output/
```

altında tutulabilir.

Working output:

- eksik olabilir,
- validation bekliyor olabilir,
- placeholder içerebilir,
- nihai teslim sayılmaz.

Working output doğrudan `outputs/` klasörüne kopyalanmamalıdır.

Önce validation ve temizlik tamamlanmalıdır.

------

# 28. Working Output ile Nihai Output Ayrımı

```text
runs/active/<run-id>/working-output/
→ Çalışma alanı

outputs/<category>/<project-slug>/
→ Temiz teslim
```

Nihai output’a taşınmadan önce:

- Template talimatları kaldırılmalı
- Çözülmemiş zorunlu placeholder kalmamalı
- Validation geçmeli
- Dosya isimleri doğrulanmalı
- Başka proje içeriği kontrol edilmeli
- Completion report hazırlanmalıdır

Working output’un varlığı completed run anlamına gelmez.

------

# 29. `VALIDATION_REPORT.md`

## Sahip Olduğu Soru

Bu run’ın ürettiği paket hangi validation kontrollerinden geçti?

## İçermelidir

- Validation kapsamı
- Kullanılan validation kuralları
- Yapısal kontroller
- İçerik kontrolleri
- Belgeler arası tutarlılık
- Package uyumluluğu
- Template uyumluluğu
- Placeholder kontrolü
- Ref sızıntısı kontrolü
- Ajanın uygulamaya başlayabilirlik kontrolü
- Bulgu önem seviyeleri
- Çözülen bulgular
- Açık bulgular
- Nihai sonuç

Nihai sonuçlardan biri:

```text
PASS
CONDITIONAL PASS
FAIL
```

olmalıdır.

------

# 30. Validation Bulgu Seviyeleri

## Critical

Output’un kullanılmasını engeller.

Örnek:

- Yanlış proje adı
- Çelişkili teknik stack
- Eksik ana doküman
- Başka projeden içerik sızıntısı
- Çözülmemiş kritik placeholder

Critical bulgu varken run completed yapılamaz.

## Major

Output kullanılabilirliği veya doğruluğu ciddi ölçüde etkiler.

Major bulguların çoğu completed öncesinde çözülmelidir.

## Minor

Kullanımı engellemeyen ancak iyileştirilmesi gereken sorun.

## Info

Risk oluşturmayan gözlem veya öneri.

------

# 31. Conditional Pass

Conditional Pass yalnızca:

- açık kalan konuların kritik olmaması,
- kullanıcının bu eksiklikleri kabul etmesi,
- açık maddelerin output ve completion report içerisinde görünür olması

durumunda kullanılmalıdır.

Conditional Pass, kritik hataları görmezden gelmek için kullanılmamalıdır.

------

# 32. `COMPLETION_REPORT.md`

## Sahip Olduğu Soru

Run nasıl sonuçlandı ve ne teslim edildi?

## İçermelidir

- Run özeti
- Kullanılan input
- Seçilen package
- Delivery profile
- Üretilen dokümanlar
- Hariç bırakılan dokümanlar
- Yapılan önemli varsayımlar
- Çözülen çatışmalar
- Validation sonucu
- Açık kalan konular
- Nihai output konumu
- Sonraki önerilen çalışma
- Run durumu

Completion report kısa, gerçek ve teslim odaklı olmalıdır.

Run completed olmadan önce hazırlanmalıdır.

------

# 33. Başarılı Run Kapanışı

Bir run’ın completed durumuna geçmesi için en az:

1. Approved input snapshot bulunmalıdır.
2. Package selection kaydı bulunmalıdır.
3. Kullanılan template sürümleri kayıtlı olmalıdır.
4. Zorunlu output belgeleri üretilmiş olmalıdır.
5. Çözülmemiş critical conflict bulunmamalıdır.
6. Çözülmemiş critical assumption bulunmamalıdır.
7. Validation sonucu PASS veya kabul edilmiş CONDITIONAL PASS olmalıdır.
8. Nihai output temizlenmiş olmalıdır.
9. Output konumu manifestte kayıtlı olmalıdır.
10. Completion report tamamlanmış olmalıdır.
11. Run klasörü `completed/` altına taşınmalıdır.
12. Global run index güncellenmelidir.

Bu koşullardan biri eksikse run completed olarak işaretlenmemelidir.

------

# 34. Başarısız Run Kapanışı

Run başarısız olduğunda:

- Son başarılı aşama kaydedilmelidir.
- Başarısızlık nedeni açıkça yazılmalıdır.
- Kullanılabilir ara çıktılar belirtilmelidir.
- Working output yanlışlıkla nihai output’a taşınmamalıdır.
- Run status `failed` olarak güncellenmelidir.
- Run klasörü `failed/` altına taşınmalıdır.
- Yeniden deneme önerisi yazılmalıdır.
- Yeni run açılacaksa önceki run ID’sine referans verilmelidir.

Başarısız run silinmemelidir.

------

# 35. Yarım Kalan Run

Yarım kalan ancak devam ettirilebilecek run başarısız sayılmamalıdır.

Durum:

```text
Paused
```

veya:

```text
Blocked
```

olarak tutulmalıdır.

Devam için en az şu bilgiler bulunmalıdır:

- Son tamamlanan aşama
- Aktif çalışma
- Açık dosyalar
- Bloker
- Sonraki adım
- Yeniden okunması gereken belgeler
- Değişmemesi gereken kararlar

Yeni ajan bu kayıtlarla kaldığı yerden devam edebilmelidir.

------

# 36. Run Devam Ettirme

Run devam ettirilirken:

1. `RUN_MANIFEST.md` okunmalıdır.
2. `PROGRESS.md` okunmalıdır.
3. `RUN_LOG.md` son kayıtları incelenmelidir.
4. Açık assumptions ve conflicts kontrol edilmelidir.
5. Input snapshot değişmemiş olmalıdır.
6. Kullanılan template sürümleri doğrulanmalıdır.
7. Working output incelenmelidir.
8. Devam noktası açıkça kaydedilmelidir.

Run devam ettirilirken sıfırdan üretim yapılmamalıdır.

Ancak working output güvenilmez veya bozulmuşsa repair veya yeni run önerilmelidir.

------

# 37. Resume ile Yeni Run Ayrımı

Aşağıdaki durumlarda mevcut run devam ettirilebilir:

- Aynı input sürümü kullanılıyorsa
- Aynı package kapsamı geçerliyse
- Aynı delivery target korunuyorsa
- Çalışma yalnızca yarım kaldıysa
- Yeni bilgi ana kapsamı değiştirmiyorsa

Aşağıdaki durumlarda yeni run açılmalıdır:

- Input sürümü önemli ölçüde değiştiyse
- Package değiştiyse
- Delivery profile değiştiyse
- Ana kapsam genişlediyse veya daraldıysa
- Mevcut run completed olduysa
- Eski run’ın bütünlüğü bozulduysa
- Farklı bir çalışma türü yapılacaksa

------

# 38. Aynı Proje için Birden Fazla Run

Aynı proje için birden fazla run doğal ve desteklenen bir durumdur.

Örnek:

```text
io-makina_generation_2026-08-06_001
io-makina_validation_2026-08-06_002
io-makina_expansion_2026-08-10_001
```

Run’lar birbirlerine şu alanlarla bağlanabilir:

```text
previous_run
parent_run
supersedes_run
derived_from_run
related_runs
```

Eski completed run yeni run tarafından değiştirilmemelidir.

Yeni çalışma yeni run olarak kaydedilmelidir.

------

# 39. Parent ve Child Run

Büyük bir çalışma gerektiğinde bir ana run altında alt run’lar olabilir.

Örnek:

```text
Parent Run:
corporate-site_full-generation_2026-08-06_001

Child Runs:
- core-docs
- design-docs
- wave-docs
- validation
```

Ancak V0’da gereksiz run parçalanması yapılmamalıdır.

Tek bir ajan ve tek bir teslim hedefiyle yönetilebilen çalışma tek run olmalıdır.

Parent-child yapısı yalnızca gerçekten bağımsız çalışma parçaları varsa kullanılmalıdır.

------

# 40. Run İptali

Run iptal edildiğinde:

- İptal nedeni
- İptal kararı tarihi
- İptal eden kişi veya kaynak
- Üretilmiş artefaktların durumu
- Yeni run açılıp açılmayacağı

kaydedilmelidir.

İptal edilen working output nihai output olarak kullanılmamalıdır.

------

# 41. Run Invalidasyonu

Completed bir run daha sonra geçersiz kabul edilebilir.

Örnek nedenler:

- Yanlış input kullanıldığı fark edildi.
- Ref proje içeriği sızdığı tespit edildi.
- Kritik validation hatası sonradan bulundu.
- Output yanlış package ile üretildi.

Completed run geçmişten silinmemelidir.

Manifestte:

```text
status: invalidated
```

olarak işaretlenebilir ve neden kaydedilmelidir.

Geçersiz run’ın output’u aktif output olarak kullanılmamalıdır.

------

# 42. Output Aktarımı

Working output’tan nihai output’a aktarım kontrollü olmalıdır.

Aktarım sırasında:

1. Output Structure uygulanmalıdır.
2. Dosya adları doğrulanmalıdır.
3. Gereksiz run belgeleri çıkarılmalıdır.
4. Template metadata kaldırılmalıdır.
5. Placeholder temizliği yapılmalıdır.
6. Validation sonucu kontrol edilmelidir.
7. Output hedefi oluşturulmalıdır.
8. Dosyalar kopyalanmalıdır.
9. Run manifestte output yolu kaydedilmelidir.
10. Output README veya manifest gerekiyorsa üretilmelidir.

Run klasörünün tamamı `outputs/` altına kopyalanmamalıdır.

------

# 43. Run Kayıtları ile Output Ayrımı

Run kayıtları şunları içerebilir:

- Input snapshot
- Package selection
- Assumptions
- Conflicts
- Run log
- Progress
- Validation report
- Completion report

Nihai output ise yalnızca proje için doğrudan kullanılabilir belgeleri içermelidir.

```text
Run records
→ Sürecin kanıtı

Output
→ Sürecin ürünü
```

Bu iki katman birbirine karıştırılmamalıdır.

------

# 44. Run Gizlilik ve Güvenlik İlkeleri

Run klasörü aşağıdaki bilgileri saklamamalıdır:

- API secret değerleri
- Şifreler
- Private key’ler
- Gerçek kullanıcı kişisel verileri
- Production token’ları
- Gizli müşteri verilerinin gereksiz kopyaları
- Ajanın özel iç muhakemesi

Gerekli erişim bilgileri yalnızca:

- Environment variable adı
- Secret manager referansı
- Erişim eksikliği notu

olarak kaydedilmelidir.

------

# 45. Chain-of-Thought Saklamama İlkesi

Run belgeleri ajanın özel düşünce zincirini veya gizli iç muhakemesini saklamamalıdır.

Kaydedilmesi gerekenler:

- Alınan karar
- Kararın gerekçesi
- Kullanılan kaynak
- Uygulanan kural
- Sonuç

Kaydedilmemesi gerekenler:

- Uzun serbest düşünce akışı
- Gizli chain-of-thought
- Gereksiz zihinsel ara adımlar

Run kayıtları denetlenebilir karar izi sağlamalıdır; özel muhakeme günlüğü olmamalıdır.

------

# 46. Tekrar Üretilebilirlik

Bir run’ın tam olarak aynı metni üretmesi garanti edilemeyebilir.

Ancak run, aynı üretim koşullarını anlamaya yetecek kadar bilgi taşımalıdır:

- Input sürümü
- Package sürümü
- Delivery profile
- Template sürümleri
- Ref kaynakları
- Assumptions
- Conflicts
- Önemli üretim kararları
- Validation kuralları

Amaç birebir deterministik metin değil, yöntemsel tekrar üretilebilirliktir.

------

# 47. Run İçinde Dosya Sahipliği

Her bilgi türünün tek ana sahibi olmalıdır.

```text
RUN_MANIFEST
→ Kimlik ve durum

INPUT_SNAPSHOT
→ Kullanılan değişmez input

PACKAGE_SELECTION
→ Package ve delivery profile kararı

SOURCE_REGISTER
→ Kullanılan kaynak ve sürümler

ASSUMPTIONS
→ Varsayımlar

CONFLICTS
→ Çatışmalar

DECISIONS
→ Run’a özel kararlar

RUN_LOG
→ Kronolojik önemli işlemler

PROGRESS
→ Mevcut ilerleme

VALIDATION_REPORT
→ Kalite kontrol sonucu

COMPLETION_REPORT
→ Run kapanış özeti
```

Aynı bilgi birden fazla belgede ayrıntılı biçimde sahiplenilmemelidir.

Gerekli olduğunda kısa özet ve referans kullanılabilir.

------

# 48. Run Yoğunluğu ve Ölçeklenebilirlik

Her run aynı sayıda operasyon belgesi üretmek zorunda değildir.

Küçük bir proje için minimum run paketi şu olabilir:

```text
RUN_MANIFEST.md
INPUT_SNAPSHOT.md
PACKAGE_SELECTION.md
RUN_LOG.md
VALIDATION_REPORT.md
COMPLETION_REPORT.md
working-output/
```

Daha karmaşık projelerde:

```text
SOURCE_REGISTER.md
ASSUMPTIONS.md
CONFLICTS.md
DECISIONS.md
PROGRESS.md
```

zorunlu veya gerekli hâle gelebilir.

Ancak kritik varsayım veya çatışma varsa ilgili belge küçük projede de oluşturulmalıdır.

Doküman yoğunluğu projenin riskine ve karmaşıklığına göre ölçeklenmelidir.

------

# 49. Minimum Run Paketi

Her run en az şunları taşımalıdır:

1. Run kimliği ve durumu
2. Input snapshot veya input referansı
3. Package ve delivery profile seçimi
4. Önemli çalışma kaydı
5. Validation sonucu
6. Kapanış veya mevcut durum raporu
7. Output veya working output konumu

Bu bilgiler olmadan run izlenebilir kabul edilmemelidir.

------

# 50. Run Güncelleme Kuralları

Run belgeleri aşağıdaki olaylarda güncellenmelidir:

- Run başlatıldığında
- Durum değiştiğinde
- Pipeline aşaması tamamlandığında
- Yeni varsayım yapıldığında
- Çatışma ortaya çıktığında
- Package kapsamı değiştiğinde
- Validation bulgusu oluştuğunda
- Output hazırlandığında
- Run kapatıldığında

Her küçük içerik düzenlemesinde bütün run belgeleri güncellenmemelidir.

------

# 51. Run Sırasında Input Değişikliği

Run sırasında kullanıcı yeni bilgi verirse bu bilgi üç sınıftan birine ayrılmalıdır.

## Küçük Netleştirme

Ana kapsamı değiştirmiyorsa:

- Run decision veya assumption kaydına eklenebilir.
- Etkilenen working output güncellenebilir.
- Ana input’un yeni sürüm ihtiyacı değerlendirilir.

## Önemli Değişiklik

Kapsamı, package’ı veya delivery profile’ı etkiliyorsa:

- Mevcut run paused veya cancelled yapılmalıdır.
- Yeni input sürümü oluşturulmalıdır.
- Yeni run açılmalıdır.

## Çelişkili Bilgi

Conflict olarak kaydedilmeli ve çözülmeden devam edilmemelidir.

Input snapshot sessizce değiştirilmemelidir.

------

# 52. Run Sırasında Package Değişikliği

Package seçimi run başladıktan sonra değişirse:

- Değişikliğin nedeni kaydedilmelidir.
- Yeni doküman gereksinimleri belirlenmelidir.
- Template kayıtları güncellenmelidir.
- Output kapsamı güncellenmelidir.
- Validation kapsamı yeniden hesaplanmalıdır.

Küçük extension eklemeleri aynı run içinde mümkün olabilir.

Ana package veya delivery profile değişikliği çoğunlukla yeni run gerektirmelidir.

------

# 53. Run Sırasında Template Değişikliği

Run başladıktan sonra template dosyası kalıcı olarak değişirse run’ın ortasında yeni sürüme sessizce geçilmemelidir.

Seçenekler:

- Run mevcut template sürümüyle tamamlanır.
- Template değişikliği kritikse run paused edilir.
- Yeni template sürümü kaydedilerek kontrollü geçiş yapılır.
- Gerekirse yeni run açılır.

Kullanılan gerçek template sürümü kaynak kaydında korunmalıdır.

------

# 57. Run Operasyon Belgesi Şablonları

Run operasyon belgelerinin şablonları `templates/runs/` altında tutulur.

`runs/` klasörü yalnızca gerçek run kayıtlarını barındırır; template sahibi değildir.

`templates/runs/` altında şu şablonlar yer alabilir:

```text
templates/runs/
├── RUN_MANIFEST_TEMPLATE.md
├── PACKAGE_SELECTION_TEMPLATE.md
├── SOURCE_REGISTER_TEMPLATE.md
├── ASSUMPTIONS_TEMPLATE.md
├── CONFLICTS_TEMPLATE.md
├── RUN_LOG_TEMPLATE.md
├── PROGRESS_TEMPLATE.md
├── VALIDATION_REPORT_TEMPLATE.md
└── COMPLETION_REPORT_TEMPLATE.md
```

Bu şablonlar `templates/runs/` klasörü build edilirken oluşturulacaktır.

------

# 58. Run Template Konumu

Run operasyon belgelerinin şablonları için authoritative konum:

```text
templates/runs/
```

`runs/_templates/` kullanılmayacaktır.

Tüm üretim şablonları `templates/` altında yönetilir; run operasyon şablonları da bu yapının içindedir.

------


# 54. Validation Sonrası Düzeltme Döngüsü


Validation bulguları düzeltme gerektirirse:

```text
Validation
→ Findings
→ Repair
→ Re-validation
```

döngüsü uygulanmalıdır.

Her validation turu için:

- Tarih
- Bulgu özeti
- Yapılan düzeltmeler
- Yeni sonuç

kaydedilmelidir.

Eski bulgular silinmemeli; resolved olarak işaretlenmelidir.

------


# 55. Run Kalite İlkeleri

## 55.1 İzlenebilirlik

Her önemli karar ve kaynak bulunabilmelidir.

## 55.2 Değişmez Başlangıç

Input snapshot run sırasında sessizce değişmemelidir.

## 55.3 Tek Sorumluluk

Her run belgesinin tek ana görevi olmalıdır.

## 55.4 Minimum Yeterlilik

Küçük run’lar gereksiz bürokrasiye zorlanmamalıdır.

## 55.5 Gerçeklik

Yapılmamış aşamalar tamamlanmış gösterilmemelidir.

## 55.6 Temiz Ayrım

Working output, nihai output ve run kayıtları ayrılmalıdır.

## 55.7 Devam Edilebilirlik

Yeni ajan run’ı kaldığı yerden anlayabilmelidir.

## 55.8 Model Bağımsızlığı

Run formatı belirli bir ajana bağlı olmamalıdır.

## 55.9 Güvenlik

Secret ve gereksiz kişisel veri saklanmamalıdır.

## 55.10 Denetlenebilirlik

Run sonunda neyin neden üretildiği anlaşılabilmelidir.

------

# 56. Run Hazırlama Ajanının Görevi

`runs/` sistemini hazırlayan ajan:

1. `PRODUCT_ENGINE_BRAIN.md` dosyasını okumalıdır.
2. İlgili planning spec belgelerini okumalıdır.
3. Tamamlanmış engine sözleşmelerini incelemelidir.
4. `engine/RUN_PROTOCOL.md` ile run yapısını eşleştirmelidir.
5. `engine/GENERATION_PIPELINE.md` ile aşama kayıtlarını uyumlu hâle getirmelidir.
6. `engine/VALIDATION_RULES.md` ile validation raporunu eşleştirmelidir.
7. `engine/OUTPUT_STRUCTURE.md` ile output aktarımını uyumlu hâle getirmelidir.
8. Run README ve gerekli run belge şablonlarını hazırlamalıdır.
9. Active, completed ve failed durumlarını net tanımlamalıdır.
10. Input snapshot ile ana input arasındaki farkı korumalıdır.
11. Working output ile final output ayrımını korumalıdır.
12. Run kayıtlarını gereksiz ayrıntıyla şişirmemelidir.
13. Başka klasörleri değiştirmemelidir.
14. Açık kararları raporlamalıdır.

Ajan yalnızca `runs/` klasöründe çalışmalıdır.

Aşağıdaki klasörlerin içeriğini değiştirmemelidir:

- `engine/`
- `packages/`
- `templates/`
- `inputs/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- `planning/`

# 59. Üretim Sonu Raporu

Run klasörünü hazırlayan ajan çalışma sonunda aşağıdaki başlıklarla kısa bir rapor sunmalıdır:

## Doldurulan Dosyalar

Hazırlanan `README.md` ve diğer run yapı belgeleri.

## Run Yaşam Döngüsü

Desteklenen durumlar ve geçişler.

## Run Belge Haritası

Her run belgesinin tekil sorumluluğu.

## Minimum Run Paketi

Küçük bir çalışma için gerekli minimum kayıtlar.

## Input İlişkisi

Approved input ve input snapshot ayrımı.

## Package ve Template İzlenebilirliği

Seçimlerin ve sürümlerin nasıl kaydedildiği.

## Working Output Ayrımı

Çalışma alanı ile nihai output arasındaki fark.

## Başarılı ve Başarısız Kapanış

Kapanış koşullarının özeti.

## Yapılan Varsayımlar

Spec dışında gerekli görülen varsayımlar.

## Açık Kararlar

Kullanıcı tarafından ayrıca belirlenmesi gereken konular.

## Önerilen Yeni Dosyalar

Mevcut yapıda bulunmayan ama gerekli görülen belgeler.

Bu rapor run belgelerinin içine rastgele eklenmemelidir.

------

# 60. Audit Gereksinimi

İlk run sistemi hazırlandıktan sonra `runs/` klasörü temiz bir ajan veya ayrı sohbet tarafından denetlenmelidir.

Audit aşağıdaki konuları kontrol etmelidir:

- Run ve output ayrımının netliği
- Input ile input snapshot ayrımı
- Active, completed ve failed durumlarının tutarlılığı
- Run ID benzersizliği
- Run manifestin yeterliliği
- Run log yoğunluğunun uygunluğu
- Özel chain-of-thought saklanma riski
- Assumption ve conflict ayrımı
- Progress ile project current status ayrımı
- Package ve template sürüm izlenebilirliği
- Başarılı kapanış kriterleri
- Başarısız run davranışı
- Resume ile yeni run ayrımı
- Validation sonrası repair döngüsü
- Küçük projelerde gereksiz bürokrasi
- Yarım run’ın başka ajan tarafından devam ettirilebilirliği
- Secret veya kişisel veri riski
- Model bağımlı alanlar
- Run template’lerinin doğru konumu

Audit ajanı ilk aşamada dosyaları değiştirmemelidir.

Önce bulgularını raporlamalıdır.

Düzeltmeler ayrı bir uygulama adımında yapılmalıdır.

------

# 61. Tamamlanma Kriterleri

`runs/` klasörü aşağıdaki koşulların tamamı sağlandığında tamamlanmış kabul edilir:

1. Run kavramı açıkça tanımlanmıştır.
2. Run yaşam döngüsü belirlenmiştir.
3. Active, completed ve failed ayrımı nettir.
4. Run ID standardı tanımlıdır.
5. Minimum run paketi belirlenmiştir.
6. Run manifest yapısı tanımlıdır.
7. Input snapshot değişmezliği korunmaktadır.
8. Package seçimi kayıt altına alınmaktadır.
9. Template ve ref sürümleri izlenmektedir.
10. Varsayımlar ayrı kaydedilmektedir.
11. Çatışmalar ayrı kaydedilmektedir.
12. Kronolojik önemli işlemler loglanmaktadır.
13. Run ilerlemesi görünürdür.
14. Working output ile final output ayrılmıştır.
15. Validation raporu zorunludur.
16. Başarılı kapanış kriterleri ölçülebilirdir.
17. Başarısız ve cancelled run davranışları tanımlıdır.
18. Yarım kalan run başka ajan tarafından devam ettirilebilir.
19. Aynı proje için birden fazla run desteklenmektedir.
20. Completed run geçmişten silinmeden invalidated yapılabilir.
21. Run kayıtları private chain-of-thought içermez.
22. Secret ve kişisel veri kuralları tanımlıdır.
23. Küçük çalışmalar gereksiz kayıt yüküne zorlanmamaktadır.
24. Run ve output katmanları birbirine karışmamaktadır.
25. Manuel test run’ı başlatılıp doğru biçimde kapatılabilmektedir.

------

# 62. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `runs/` klasörü tamamlanmış kabul edilmemelidir:

- Run durumu yalnızca klasör konumundan anlaşılıyorsa
- Input snapshot bulunmuyorsa
- Approved input run sırasında sessizce değiştirilebiliyorsa
- Package seçiminin nedeni kaydedilmiyorsa
- Kullanılan template sürümleri bilinmiyorsa
- Ref kaynaklarının kullanım amacı kaydedilmiyorsa
- Varsayımlar run log içinde kayboluyorsa
- Çatışmalar sessizce çözülüyorsa
- Working output doğrudan final output sayılıyorsa
- Validation raporu olmadan completed olunabiliyorsa
- Başarısız run siliniyorsa
- Yarım kalan run’ın devam noktası belli değilse
- Her küçük işlem gereksiz loglanıyorsa
- Ajanın özel chain-of-thought metni saklanıyorsa
- Completed run sonradan sessizce değiştirilebiliyorsa
- Resume ve yeni run koşulları ayrılmamışsa
- Aynı proje run’ları birbirine bağlanamıyorsa
- Run klasörü final output ile aynı dosyaları taşıyorsa
- Secret veya kişisel veri tutuluyorsa
- Küçük proje ağır operasyon bürokrasisine zorlanıyorsa

------

# 63. Değişiklik İlkesi

Bu spec onaylandıktan sonra `runs/` klasörü hazırlanmalıdır.

Run sistemi hazırlanırken mevcut ağaçta bulunmayan bir belge ihtiyacı ortaya çıkarsa ajan:

1. Sessizce yeni belge oluşturmamalıdır.
2. Belgenin tekil sorumluluğunu açıklamalıdır.
3. Mevcut engine, template veya log belgesiyle aynı görevi taşıyıp taşımadığını kontrol etmelidir.
4. Yeni belgenin zorunlu mu koşullu mu olduğunu belirtmelidir.
5. Onay almadan kök klasör ağacını değiştirmemelidir.

Run sisteminde yapılacak kalıcı değişiklikler `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

------

# 64. Nihai Hedef

`runs/` klasörü tamamlandığında Product Engine:

- her çalışmayı benzersiz bir run olarak başlatabilmeli,
- kullanılan input’u değişmez snapshot olarak saklayabilmeli,
- package ve delivery profile seçimini gerekçelendirebilmeli,
- kullanılan template ve ref sürümlerini izleyebilmeli,
- varsayım ve çatışmaları görünür biçimde yönetebilmeli,
- çalışma ilerlemesini kaydedebilmeli,
- working output’u nihai output’tan ayırabilmeli,
- validation sonucuna göre run’ı tamamlayabilmeli veya başarısız kapatabilmeli,
- yarım kalan çalışmayı başka bir ajanın devam ettirmesini sağlayabilmelidir.

Run sisteminin çalışma modeli şu olmalıdır:

```text
Approved Input
+
Run initialization
+
Package selection
+
Template ve source register
+
Generation pipeline
+
Assumption ve conflict kayıtları
+
Validation
+
Output transfer
+
Completion report
=
Completed Product Engine Run
```

Run sisteminin başarısı çok fazla operasyon dosyası üretmesiyle değil; herhangi bir Product Engine çıktısının hangi bilgi, kural, package, template ve kararlarla üretildiğini temiz biçimde gösterebilmesiyle ölçülmelidir.
