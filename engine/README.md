# Product Engine — Engine Klasörü

## Amaç

Bu klasör, Product Engine'in çalışma zamanı sözleşmelerini içerir.

Bir ajan bu klasördeki belgeleri okuyarak Product Engine'in nasıl davrandığını anlayabilmeli ve yalnızca bu belgeler ile proje girdisi üzerinden doğru şekilde çalışabilmelidir.

Bu klasör; hangi bilgileri kabul edeceğini, hangi sırayla hareket edeceğini, planning derinliğini nasıl belirleyeceğini, eksik veya çelişkili bilgiyle nasıl başa çıkacağını, çıktının nasıl doğrulanacağını ve bir çalışmanın nasıl yönetileceğini tanımlar.

---

## Klasördeki Dosyalar ve Görevleri

| Dosya | Görev |
|---|---|
| `README.md` | Navigasyon ve başlangıç belgesi. Bu dosya. |
| `PROJECT_INTAKE.md` | Proje bilgilerinin nasıl alınacağını ve onaylanacağını tanımlar. |
| `PLANNING_PROFILES.md` | Implementation/design planning derinliğini, kalite tabanını ve demo/integration readiness kurallarını tanımlar. |
| `DOCUMENT_CATALOG.md` | Product Engine'in tanıdığı doküman türlerinin kayıt merkezi. |
| `PACKAGE_RULES.md` | Hangi proje için hangi doküman paketi seçileceğini belirler. |
| `INFORMATION_MAP.md` | Her bilgi türünün hangi dokümana ait olduğunu tanımlar. |
| `GENERATION_PIPELINE.md` | Uçtan uca üretim akışının aşamalarını ve sırasını tanımlar. |
| `OUTPUT_STRUCTURE.md` | Üretilen çıktının klasör yapısını ve teslim kurallarını tanımlar. |
| `VALIDATION_RULES.md` | Çıktının geçerli sayılması için gerekli kontrolleri tanımlar. |
| `ASSUMPTION_RULES.md` | Eksik bilgi durumunda ajanın nasıl davranacağını tanımlar. |
| `CONFLICT_RESOLUTION.md` | Çelişkili bilgi durumunda hangi kaynağın öncelikli olduğunu tanımlar. |
| `RUN_PROTOCOL.md` | Tek bir Product Engine çalışmasının operasyonel yaşam döngüsünü tanımlar. |

---

## Agent Boot / Reference Read Order (Kanonik Okuma Sırası)

> [!IMPORTANT]
> **Kavram Ayrımı: Agent Boot Read Order ≠ Runtime Execution Flow**
> - **Agent Boot Read Order**: Bir ajanın Product Engine sistemini ve çalışma kurallarını anlamak için okuduğu referans okuma sırasıdır. (Root [README.md](../README.md) bu ayrımın üst otoritesidir).
> - **Runtime Execution Flow**: Bir çalıştırma (`run`) sırasındaki adım adım üretim ve veri akış sırasıdır (`engine/GENERATION_PIPELINE.md` tarafından yönetilir).

Bir Product Engine çalışması başlatılmadan önce referans okuma sırası:

```text
1.  Kök README.md                  (kök klasör — sistem genel görünümü, aktif sürüm, authority haritası)
2.  PRODUCT_ENGINE_BRAIN.md       (kök klasör — Product Engine nedir, vizyon ve sınırlar)
3.  engine/README.md               (bu dosya — navigasyon)
4.  engine/PROJECT_INTAKE.md       (hangi bilgiler gerekli?)
5.  engine/PLANNING_PROFILES.md    (implementation/design planning derinliği nedir?)
6.  engine/DOCUMENT_CATALOG.md     (hangi dokümanlar tanınır?)
7.  engine/PACKAGE_RULES.md        (hangi paket seçilir?)
8.  engine/ASSUMPTION_RULES.md     (eksik bilgide ne yapılır?)
9.  engine/CONFLICT_RESOLUTION.md  (çelişkide ne yapılır?)
10. engine/INFORMATION_MAP.md      (bilgi hangi dokümana yazılır?)
11. engine/GENERATION_PIPELINE.md  (üretim sırası nedir?)
12. engine/OUTPUT_STRUCTURE.md     (çıktı nasıl teslim edilir?)
13. engine/VALIDATION_RULES.md     (çıktı geçerli mi?)
14. engine/RUN_PROTOCOL.md         (çalışma nasıl yönetilir?)
15. Seçilen packages/ belgeleri
16. İlgili templates/ belgeleri
17. Aktif proje girdisi
```

Tüm belgelerin her run öncesinde baştan okunması zorunlu değildir. Ajan gerekli belgeleri iş akışı sırasında başvuru amacıyla kullanabilir.

---

## Hangi Soru Hangi Dosyanın Sahibi

| Soru | Authoritative Dosya |
|---|---|
| Hangi proje bilgileri gerekli? | `PROJECT_INTAKE.md` |
| Implementation/design planning ne kadar derin olmalı? | `PLANNING_PROFILES.md` |
| Demo/prototype mimari kalite tabanı nedir? | `PLANNING_PROFILES.md` |
| Hangi dokümanlar var ve görevleri nedir? | `DOCUMENT_CATALOG.md` |
| Hangi paketi seçmeliyim? | `PACKAGE_RULES.md` |
| Bu bilgi hangi dokümana yazılmalı? | `INFORMATION_MAP.md` |
| Üretim adımları neler ve sırası nedir? | `GENERATION_PIPELINE.md` |
| Çıktı nereye ve nasıl teslim edilir? | `OUTPUT_STRUCTURE.md` |
| Çıktı geçerli mi? | `VALIDATION_RULES.md` |
| Eksik bilgi varsa ne yapmalıyım? | `ASSUMPTION_RULES.md` |
| Bilgiler çelişiyorsa ne yapmalıyım? | `CONFLICT_RESOLUTION.md` |
| Run'ı nasıl başlatır ve kapatırım? | `RUN_PROTOCOL.md` |

---

## Diğer Ana Klasörlerle İlişki

```text
engine/
→ Product Engine nasıl davranır? (bu klasör)

packages/
→ Hangi proje için hangi doküman grubu seçilir?
→ engine/PACKAGE_RULES.md tarafından başvurulur.

templates/
→ Seçilen belgeler hangi yapıyla üretilir?
→ engine/DOCUMENT_CATALOG.md her dokümanın template konumunu gösterir.

inputs/
→ Proje bilgileri hangi yapıda alınır ve saklanır?
→ engine/PROJECT_INTAKE.md kabul kriterlerini tanımlar.

runs/
→ Tek bir çalışmada ne oldu?
→ engine/RUN_PROTOCOL.md run yaşam döngüsünü yönetir.

outputs/
→ Başarılı çalışmanın temiz sonucu nedir?
→ engine/OUTPUT_STRUCTURE.md teslim yapısını tanımlar.

logs/
→ Product Engine zaman içinde nasıl gelişti?
→ Engine sözleşmeleri bu klasörü doğrudan sahiplenmez.

ref/
→ Kalite ve yapı referansları. Authoritative değildir.
```

---

## Temel Terimler

| Terim | Tanım |
|---|---|
| **Project Intake** | Proje bilgisinin Product Engine'e kabul edilme süreci |
| **Delivery Profile** | Projenin hedef teslim olgunluk düzeyi |
| **Implementation Planning** | Projenin nasıl inşa edileceğine ilişkin execution planning derinliği (`standard | full`) |
| **Design Planning** | UI/UX tasarım planlama derinliği (`light | standard | full`, applicable projelerde) |
| **Package** | Bir proje bağlamı için seçilen doküman grubu |
| **Template** | Bir dokümanın üretim yapısını ve iskeletini tanımlayan dosya |
| **Ref** | Kalite referansı olarak kullanılan harici kaynak; authoritative değil |
| **Run** | Tek bir Product Engine çalışması |
| **Output** | Başarılı run sonunda üretilen temiz doküman paketi |
| **Assumption** | Eksik bilgi için yapılan kontrollü ve kayıtlı çıkarım |
| **Conflict** | İki authoritative kaynak arasındaki uyumsuzluk |
| **Validation** | Üretilen çıktının kurallara uygunluğunun doğrulanması |
| **Document Catalog** | Tanınan doküman türlerinin kayıt merkezi |
| **Information Owner** | Bir bilgi türünü birincil olarak sahibi olan doküman |
| **Input Snapshot** | Bir run başlangıcında alınan proje girdisi anlık görüntüsü |
| **Run Manifest** | Bir run'ın kimliğini, kararlarını ve durumunu tutan kayıt |

---

## Model Bağımsızlığı İlkesi

Bu engine belgeler belirli bir AI modeline veya çalışma ortamına bağımlı değildir.

Markdown okuyabilen, dosya oluşturabilen ve kuralları uygulayabilen herhangi bir yetkin ajan Product Engine rolünü yerine getirebilir.

Ajan kimliği yalnızca izlenebilirlik amacıyla run kaydına dahil edilebilir; engine davranışını değiştirmez.
