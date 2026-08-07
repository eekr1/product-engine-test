~~~md
Product Engine’in gerçek build aşamasına geçiyoruz.

Planning seti tamamlandı, cross-audit yapıldı, gerekli düzeltmeler uygulandı ve `engine/` build aşaması onaylandı.

Bu görevde yalnızca `engine/` klasörünü üret.

Yeni klasör yapısı tasarlama, planning’i yeniden tartışma, packages/templates/inputs/runs/outputs/logs/examples/archive klasörlerini doldurmaya başlama.

# Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/ENGINE_FOLDER_SPEC.md`

Ardından `planning/ENGINE_FOLDER_SPEC.md` tarafından gerekli görülen ilgili planning belgelerini ve mevcut repository yapısını incele.

`ref/` altında engine belgelerinin yapısını veya kalite seviyesini anlamaya yardımcı olacak gerçekten ilgili kaynaklar varsa kullanabilirsin.

Ancak:

- `ref/` authoritative değildir.
- Ref içeriğini proje gerçeği veya Product Engine kuralı olarak kopyalama.
- Planning ve Product Engine Brain ile çelişen ref davranışlarını taşıma.

---

# Ana Görev

Aşağıdaki `engine/` klasörünü gerçek, kullanılabilir Product Engine sözleşmeleriyle doldur:

```text
engine/
├── README.md
├── PROJECT_INTAKE.md
├── DOCUMENT_CATALOG.md
├── PACKAGE_RULES.md
├── INFORMATION_MAP.md
├── GENERATION_PIPELINE.md
├── OUTPUT_STRUCTURE.md
├── VALIDATION_RULES.md
├── ASSUMPTION_RULES.md
├── CONFLICT_RESOLUTION.md
└── RUN_PROTOCOL.md
~~~

Bu dosyalar placeholder, taslak veya planning spec özeti olmamalıdır.

Bunlar Product Engine’in gerçek runtime davranış sözleşmeleridir.

Amaç:

> Yeterince yetenekli herhangi bir AI ajanı bu engine belgelerini okuyarak Product Engine’in nasıl çalışacağını anlayabilmeli ve yalnızca sohbet bağlamına ihtiyaç duymadan doğru şekilde uygulayabilmelidir.

------

# Temel Sorumluluk Ayrımı

`engine/` yalnızca Product Engine’in **nasıl davranacağını** tanımlar.

Engine:

- proje intake sürecini tanımlar,
- belgelerin kimliklerini ve görevlerini kataloglar,
- package seçim mantığını tanımlar,
- bilgilerin hangi belgeye ait olduğunu belirler,
- üretim pipeline’ını tanımlar,
- output yapısını tanımlar,
- validation kurallarını tanımlar,
- varsayım davranışını tanımlar,
- çelişki çözümünü tanımlar,
- run protokolünü tanımlar.

Engine aşağıdakilerin sahibi değildir:

- gerçek package içerikleri,
- gerçek document template’leri,
- gerçek project input’ları,
- gerçek run kayıtları,
- gerçek project output’ları,
- engine changelog geçmişi,
- example senaryoları,
- archive kayıtları.

Bu sınırı koru.

------

# Dosya Sorumlulukları

## `engine/README.md`

Engine klasörünün giriş noktası olmalıdır.

Şunları kısa ve net biçimde açıklamalıdır:

- engine nedir,
- klasördeki her dosyanın görevi,
- önerilen okuma sırası,
- hangi dosyanın hangi sorunun authoritative sahibi olduğu,
- diğer ana klasörlerle ilişki,
- engine’in model bağımsız çalışma ilkesi.

README diğer belgelerin bütün içeriğini tekrar etmemelidir.

------

## `engine/PROJECT_INTAKE.md`

Product Engine’in proje bilgisini nasıl kabul edeceğini tanımlar.

Şunları kapsamalıdır:

- minimum gerekli input,
- önerilen input alanları,
- project type,
- project state,
- delivery profile,
- mevcut proje / yeni proje ayrımı,
- mevcut kaynaklar,
- hedefler,
- kapsam,
- teknik bilgiler,
- tasarım bilgileri,
- bilinmeyen bilgiler,
- açık kararlar,
- kullanıcı tarafından onaylanmış gerçekler,
- pending → approved geçiş mantığı,
- eksik bilgi davranışı,
- clarification gerektiren durumlar,
- hangi bilginin assumption yapılamayacağı.

Burada gerçek project input saklanmaz.

------

## `engine/DOCUMENT_CATALOG.md`

Product Engine’in desteklediği doküman kimliklerinin authoritative kataloğu olmalıdır.

Her document için mümkün olduğunca standart kayıt biçimi kullan.

Örneğin:

```text
Document ID
Document Name
Owner Category
Purpose
Required / Conditional
Applicable Project Types
Applicable Delivery Profiles
Primary Information Ownership
Template Location
Output Location
Dependencies
Validation Expectations
```

Katalog:

- aynı belgenin iki farklı kimlikle oluşmasını engellemeli,
- package ve template sistemlerinin ortak referansı olmalı,
- koşullu belgeleri tanımlayabilmeli,
- `PRODUCT_STRATEGY.md` ve `DESIGN_RULES.md` gibi conditional belgeleri desteklemeli,
- run operasyon belgelerinin `templates/runs/` altında template sahibi olduğunu dikkate almalı.

Gerçek template içeriğini burada yazma.

------

## `engine/PACKAGE_RULES.md`

Hangi project için hangi documentation package veya delivery profile’ın seçileceğini tanımlar.

Planning’de onaylanan yaklaşımı kullan.

Delivery profile kavramları:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

Kurallar:

- project type ve delivery profile birbirinden farklı kavramlardır,
- package seçimi gereksiz doküman üretmemelidir,
- küçük projeler minimal paketle başlayabilmelidir,
- hızlı prototype throwaway olmak zorunda değildir,
- mevcut proje ile sıfırdan proje farklı ihtiyaçlara sahip olabilir,
- package gerektiğinde base + extension mantığını destekleyebilmelidir.

Gerçek package dosyalarını burada üretme.

------

## `engine/INFORMATION_MAP.md`

Bilgilerin authoritative sahipliğini tanımlar.

Ana soru:

> Bir bilgi Product Engine içinde ilk ve authoritative olarak hangi dokümana yazılmalıdır?

Örneğin:

- project purpose,
- product rules,
- technical stack,
- current status,
- next tasks,
- decisions,
- design rules,
- data model,
- API contracts,
- project plan,
- wave plan,
- deployment,
- testing

gibi bilgi türlerinin sahipliğini netleştir.

Ama aynı bilgiyi gereksiz biçimde birçok belgeye kopyalama.

Gerekirse şu ayrımı kullan:

```text
Primary Owner
Referenced By
Derived Into
Must Not Own
```

Bu belge dokümantasyon şişmesini engelleyen temel sözleşmelerden biri olmalıdır.

------

## `engine/GENERATION_PIPELINE.md`

Product Engine’in uçtan uca çalışma sırasını tanımlar.

Temel akış yaklaşık olarak şunu kapsamalıdır:

```text
Project information
→ Intake
→ Approval
→ Package selection
→ Document selection
→ Template resolution
→ Information distribution
→ Assumption/conflict handling
→ Generation
→ Validation
→ Repair if necessary
→ Final output
→ Run completion
```

Ancak planning belgelerindeki gerçek kurallara göre ayrıntılandır.

Her aşamada:

- input,
- action,
- expected result,
- possible stop/block condition

net olmalıdır.

Pipeline tool veya AI model bağımlı olmamalıdır.

------

## `engine/OUTPUT_STRUCTURE.md`

Product Engine’in ürettiği final project documentation paketinin nasıl yerleştirileceğini tanımlar.

Planning’de kesinleşen sürümleme yapısını kullan:

```text
outputs/<category>/<project-slug>/
├── latest/
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── v1.0/
```

Kurallar:

- `latest/` en son üretilen değil, en son geçerli Active output’tur,
- validation’dan geçmeyen output latest olamaz,
- eski sürümler versions altında korunur,
- working output ile final output ayrıdır,
- run kayıtları final output içine sızmamalıdır,
- final output’ta placeholder veya template metadata kalmamalıdır,
- package’a göre yalnızca gerekli klasörler/dosyalar oluşturulmalıdır,
- source run, input version, package ve delivery profile izlenebilir olmalıdır.

------

## `engine/VALIDATION_RULES.md`

Product Engine output’unun geçerli sayılması için gereken kontrolleri tanımlar.

Validation en az şu katmanları kapsamalıdır:

- structure validation,
- required document validation,
- content completeness,
- information ownership,
- cross-document consistency,
- package compliance,
- template compliance,
- unresolved placeholder detection,
- assumption compliance,
- conflict resolution compliance,
- project leakage detection,
- output cleanliness,
- traceability.

Validation sonucu planning ile uyumlu şekilde:

```text
PASS
CONDITIONAL PASS
FAIL
```

olabilir.

Hangi durumda output final yapılabilir, hangi durumda repair gerekir, hangi durumda run başarısız sayılır açık olmalıdır.

------

## `engine/ASSUMPTION_RULES.md`

Eksik bilgi durumunda ajanın nasıl davranacağını tanımlar.

Açık ayrım yap:

- safe assumption,
- bounded assumption,
- clarification required,
- prohibited assumption.

Özellikle:

- teknik gerçekler,
- müşteri bilgileri,
- yasal/finansal gerçekler,
- credentials/secrets,
- production deployment detayları,
- kullanıcının açıkça karar vermesi gereken ürün tercihleri

gibi konularda sessizce uydurma yapılmamalıdır.

Assumption:

- görünür,
- izlenebilir,
- gerektiğinde değiştirilebilir

olmalıdır.

Private chain-of-thought kaydı isteme veya saklama.

Yalnızca sonuç, karar ve kısa gerekçe tutulmalıdır.

------

## `engine/CONFLICT_RESOLUTION.md`

Kaynaklar veya belgeler çeliştiğinde hangi bilginin öncelikli olduğunu tanımlar.

Planning’de kullanılan genel authority yaklaşımıyla uyumlu olmalıdır.

Çelişki türlerini ayırabilirsin:

- user input conflict,
- approved input vs old docs,
- current docs vs ref,
- package vs template,
- planning vs runtime contract,
- existing project state vs desired future state.

Çelişki çözümünde:

- sessiz overwrite yapma,
- belirsizliği gerçekmiş gibi sunma,
- ref’i authoritative kabul etme.

Gerekirse işlemi blocked hâle getir.

------

## `engine/RUN_PROTOCOL.md`

Tek bir Product Engine run’ının nasıl yönetileceğini tanımlar.

`planning/RUNS_FOLDER_SPEC.md` ile uyumlu olmalıdır.

Şunları kapsamalıdır:

- run creation,
- run ID,
- input snapshot,
- selected package,
- delivery profile,
- source register,
- assumptions,
- conflicts,
- decisions,
- progress,
- validation,
- working output,
- completion,
- failure,
- pause/resume,
- invalidation,
- new run gerektiren durumlar.

Run template’lerinin authoritative konumu:

```text
templates/runs/
```

olmalıdır.

`runs/_templates/` kullanılmamalıdır.

Run kayıtları private chain-of-thought içermez.

------

# Cross-Document Kuralları

Engine belgeleri birbirinden kopuk yazılmamalıdır.

Aşağıdaki ilişkileri özellikle doğrula:

```text
PROJECT_INTAKE
→ PACKAGE_RULES için gerekli bilgiyi sağlar.

DOCUMENT_CATALOG
→ packages ve templates için document kimliklerinin ortak kaynağıdır.

PACKAGE_RULES
→ hangi belgelerin gerektiğini belirler.

INFORMATION_MAP
→ seçilen belgelerde bilginin nereye yazılacağını belirler.

GENERATION_PIPELINE
→ bütün süreci sıraya koyar.

ASSUMPTION_RULES
→ eksik bilgi davranışını yönetir.

CONFLICT_RESOLUTION
→ çelişkili bilgi davranışını yönetir.

VALIDATION_RULES
→ sonuçların kabul edilip edilmeyeceğini belirler.

OUTPUT_STRUCTURE
→ doğrulanmış output’un nereye gideceğini belirler.

RUN_PROTOCOL
→ bütün sürecin operasyonel izini tutar.
```

Aynı kuralın birden fazla dosyada tam tanımını tekrar etme.

Bir dosya başka dosyanın sorumluluğuna ihtiyaç duyuyorsa kısa referans ver.

------

# Model Bağımsızlığı

Engine hiçbir yerde:

- Claude,
- Gemini,
- GPT,
- Codex

için ayrı davranış kuralları tanımlamamalıdır.

Ajan veya runtime bilgisi izlenebilirlik amacıyla kaydedilebilir; ancak engine davranışını değiştirmemelidir.

------

# Minimum Yeterlilik

Product Engine her proje için maksimum belge üretmeye çalışmamalıdır.

Ana ilke:

> Gereken kadar belge, gereken kadar ayrıntı.

Küçük bir prototype ile production-ready SaaS aynı dokümantasyon yoğunluğuna zorlanmamalıdır.

Ancak minimal yaklaşım:

- kritik kararları kaybetmemeli,
- ileride genişlemeyi engellememeli,
- başka bir ajanın projeyi anlayamayacağı kadar zayıf olmamalıdır.

------

# Yasaklar

Bu görev sırasında:

- `planning/` belgelerini değiştirme.
- `PRODUCT_ENGINE_BRAIN.md` değiştirme.
- `packages/` doldurma.
- `templates/` doldurma.
- `inputs/` doldurma.
- `runs/` doldurma.
- `outputs/` doldurma.
- `logs/` doldurma.
- `examples/` doldurma.
- `archive/` doldurma.
- kök README’yi doldurma.
- yeni ana klasör oluşturma.
- CLI veya kod sistemi yazma.
- Product Engine V0’ı gereksiz otomasyonla büyütme.
- belirli bir modele özel prompt mimarisi oluşturma.
- planning’de alınmış kararları yeniden açma.

Yalnızca `engine/` klasörü içerisinde çalış.

------

# Dosya Kalitesi

Her engine belgesi:

- doğrudan Markdown olmalı,
- dış markdown wrapper içinde olmamalı,
- tek H1 başlığa sahip olmalı,
- doğru code fence kullanmalı,
- placeholder bırakmamalı,
- gereksiz tekrar içermemeli,
- model bağımsız olmalı,
- proje bağımsız olmalı,
- başka bir ajanın sıfır sohbet bağlamıyla anlayabileceği kadar açık olmalı.

Belgeleri yalnızca uzun olsun diye uzatma.

Açıklığın bittiği yerde belge de bitmelidir.

------

# Çalışma Sonu Doğrulama

Build tamamlandığında şu soruları kontrol et:

1. `engine/` içindeki 11 dosyanın tamamı gerçek içerikle dolu mu?
2. Her dosyanın tek authoritative sorumluluğu var mı?
3. Aynı temel kural farklı belgelerde çelişkili biçimde tanımlanmış mı?
4. Document Catalog ile Package Rules ilişkisi net mi?
5. Intake → Package → Templates → Generation → Validation → Output akışı çalışıyor mu?
6. Assumption ve conflict davranışı birbirinden ayrılmış mı?
7. Run Protocol pipeline ile uyumlu mu?
8. Output Structure planning’de onaylanan `latest/ + versions/` kararına uyuyor mu?
9. Run templates yalnızca `templates/runs/` olarak tanımlanmış mı?
10. Engine başka klasörlerin sorumluluğunu sahipleniyor mu?
11. Sistem belirli bir AI modeline bağımlı mı?
12. Küçük projeler gereksiz bürokrasiye zorlanıyor mu?
13. Başka bir ajan yalnızca bu belgelerle Product Engine davranışını anlayabilir mi?
14. Planning belgelerine aykırı yeni karar alındı mı?
15. Hedef klasör dışında herhangi bir dosya değiştirildi mi?

------

# Çalışma Sonu Raporu

İş bittikten sonra kısa fakat somut bir rapor ver:

## Doldurulan Dosyalar

11 engine dosyasının her biri için tek cümlelik görev özeti.

## Engine Akışı

Product Engine’in artık tanımlanmış uçtan uca çalışma akışını kısa şekilde özetle.

## Authoritative Ownership

Hangi engine dosyasının hangi ana sorunun sahibi olduğunu göster.

## Kritik Kararlar

Build sırasında planning’den uygulanan önemli kararları belirt.

## Açık Noktalar

Gerçekten sonraki klasörlere bırakılması gereken noktaları belirt.

Bunları hata gibi gösterme; sadece doğru owner klasörünü belirt.

## Değiştirilen Dosyalar

Yalnızca `engine/` altında değişiklik yapıldığını doğrula.

## Sonuç

Aşağıdakilerden biriyle bitir:

```text
ENGINE_BUILD_COMPLETE
```

veya

```text
ENGINE_BUILD_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.