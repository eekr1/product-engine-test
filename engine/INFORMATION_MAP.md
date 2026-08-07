# Information Map

## Amaç

Bu belge, Product Engine içindeki her bilgi türünün hangi dokümana ait olduğunu tanımlar.

Temel soru:

> Bir bilgi Product Engine içinde ilk ve authoritative olarak hangi dokümana yazılmalıdır?

Bu belge, bilginin belgeler arasında kontrolsüz biçimde çoğalmasını ve çelişmesini engeller.

## Kapsam Dışı

- Doküman üretim sırası → `GENERATION_PIPELINE.md`
- Paket seçim mantığı → `PACKAGE_RULES.md`
- Validation kurallarının tamamı → `VALIDATION_RULES.md`
- Genel run operasyonları → `RUN_PROTOCOL.md`

---

## Sahiplik Kategorileri

Her bilgi türü için aşağıdaki sahiplik ayrımı kullanılır:

```text
Primary Owner   : Bilginin ilk ve authoritative olarak yazıldığı doküman.
Referenced By   : Bu bilgiye başvuran ancak kopyalamayan diğer dokümanlar.
Derived Into    : Bu bilgiden türetilen, bağımlı olan bilgiler veya dokümanlar.
Must Not Own    : Bu bilgiyi kendi içinde bağımsız biçimde tutmaması gereken dokümanlar.
```

---

## Bilgi Sahipliği Haritası

---

### Proje Amacı ve Genel Bağlam

```text
Primary Owner : PROJECT_BRAIN.md
Referenced By : README.md, CURRENT_STATUS.md, TECH_CONTEXT.md, PRODUCT_RULES.md
Derived Into  : Kapsam özeti, teknik bağlam özeti, dalga hedefleri
Must Not Own  : TECH_CONTEXT.md (tekrar etmemeli), WAVE_MAP.md (özetleyebilir ama sahiplenemez)
```

---

### Ürün Kuralları ve Davranış Kısıtlamaları

```text
Primary Owner : PRODUCT_RULES.md
Referenced By : PROJECT_BRAIN.md (özet), AGENT_INSTRUCTIONS.md, DESIGN_RULES.md
Derived Into  : Ajan davranış kuralları, tasarım kısıtlamaları
Must Not Own  : PROJECT_BRAIN.md (yalnızca özet referans)
```

---

### Teknik Stack ve Mimari

```text
Primary Owner : TECH_CONTEXT.md
Referenced By : PROJECT_BRAIN.md (özet), DEPLOYMENT.md, TEST_STRATEGY.md, DATA_MODEL.md, README.md
Derived Into  : Deployment kararları, test araçları seçimi
Must Not Own  : PRODUCT_RULES.md, WAVE_MAP.md
```

---

### Sistem Bileşenleri ve Entegrasyon Noktaları

```text
Primary Owner : TECH_CONTEXT.md
Referenced By : DATA_MODEL.md, API_CONTRACTS.md, DEPLOYMENT.md
Derived Into  : Bileşen bazlı görevler, entegrasyon görevleri
Must Not Own  : PRODUCT_RULES.md, PROJECT_BRAIN.md (yalnızca üst düzey referans)
```

---

### Ürün Stratejisi ve Rekabet Konumlaması

```text
Primary Owner : PRODUCT_STRATEGY.md (koşullu)
Referenced By : PROJECT_BRAIN.md (üst bağlam olarak), PRODUCT_RULES.md
Derived Into  : Özellik öncelikleri, büyüme hedefleri
Must Not Own  : TECH_CONTEXT.md, README.md
```

---

### Tasarım Kuralları ve Görsel Dil

```text
Primary Owner : DESIGN_RULES.md (koşullu)
Referenced By : PROJECT_BRAIN.md (tercih notları), README.md
Derived Into  : Bileşen kuralları, stil kararları
Must Not Own  : PRODUCT_RULES.md (tasarım tercihini not edebilir ama kuralı sahiplenemez)
```

---

### Mevcut Proje Durumu

```text
Primary Owner : CURRENT_STATUS.md
Referenced By : NEXT_TASKS.md, README.md, PROJECT_BRAIN.md (özet)
Derived Into  : Sonraki adımlar, dalga planı güncellemesi
Must Not Own  : PRODUCT_RULES.md, TECH_CONTEXT.md
```

---

### Sonraki Görevler

```text
Primary Owner : NEXT_TASKS.md
Referenced By : WAVE_PLAN.md (üst seviye)
Derived Into  : Sprint veya dalga görevleri
Must Not Own  : CURRENT_STATUS.md (yalnızca kısa vadeli önceliklere referans verebilir)
```

---

### Önemli Kararlar ve Gerekçeleri

```text
Primary Owner : DECISIONS.md
Referenced By : PROJECT_BRAIN.md (özet), TECH_CONTEXT.md (referans)
Derived Into  : Teknik ve mimari tercihler
Must Not Own  : TECH_CONTEXT.md (tam karar kaydı tutamaz)
```

---

### Ajan Çalışma Kuralları

```text
Primary Owner : AGENT_INSTRUCTIONS.md (koşullu)
Referenced By : PROJECT_BRAIN.md (okuma sırası), README.md
Derived Into  : Ajan öncelikleri, kodlama kuralları
Must Not Own  : PRODUCT_RULES.md (sadece ürün kurallarına sahip)
```

---

### Proje Özeti ve Başlangıç Rehberi

```text
Primary Owner : README.md
Referenced By : — (giriş noktasıdır)
Derived Into  : —
Must Not Own  : Diğer dokümanların birincil içerikleri. README özetler ve yönlendirir.
```

---

### Proje Planı ve Aşamalar

```text
Primary Owner : PROJECT_PLAN.md (koşullu)
Referenced By : WAVE_MAP.md, README.md
Derived Into  : Dalga planı, görev listesi
Must Not Own  : WAVE_MAP.md (yalnızca dalga yapısına sahip)
```

---

### Veri Modeli (Varlıklar, İlişkiler)

```text
Primary Owner : DATA_MODEL.md
Referenced By : API_CONTRACTS.md, TECH_CONTEXT.md (üst düzey)
Derived Into  : API endpoint şemaları, test senaryoları
Must Not Own  : TECH_CONTEXT.md (yalnızca veri yaklaşımına referans verebilir)
```

---

### API Yüzeyi (Endpoint, Request, Response)

```text
Primary Owner : API_CONTRACTS.md
Referenced By : TEST_STRATEGY.md, WAVE_PLAN.md
Derived Into  : Test senaryoları, entegrasyon görevleri
Must Not Own  : TECH_CONTEXT.md (yalnızca API yaklaşımına referans verebilir)
```

---

### Deployment Hedefi ve Ortamı

```text
Primary Owner : DEPLOYMENT.md
Referenced By : TECH_CONTEXT.md (referans seviyesinde), OPERATIONS.md
Derived Into  : CI/CD pipeline görevleri, ortam değişkenleri
Must Not Own  : TECH_CONTEXT.md (yalnızca hosting kararına referans verebilir)
```

---

### Operasyon ve İzleme

```text
Primary Owner : OPERATIONS.md (koşullu)
Referenced By : DEPLOYMENT.md
Derived Into  : İzleme görevleri, incident response
Must Not Own  : DEPLOYMENT.md (yalnızca deployment adımlarına sahip)
```

---

### Test Stratejisi ve Test Araçları

```text
Primary Owner : TEST_STRATEGY.md
Referenced By : WAVE_PLAN.md, NEXT_TASKS.md
Derived Into  : Test görevleri
Must Not Own  : TECH_CONTEXT.md, PROJECT_BRAIN.md
```

---

### Dalga Yapısı (Üst Seviye)

```text
Primary Owner : WAVE_MAP.md
Referenced By : WAVE_PLAN.md, README.md, PROJECT_PLAN.md
Derived Into  : Dalga bazlı ayrıntılı görev planları
Must Not Own  : PROJECT_BRAIN.md, NEXT_TASKS.md
```

---

### Dalga Görevleri ve Kabul Kriterleri

```text
Primary Owner : WAVE_PLAN.md
Referenced By : NEXT_TASKS.md
Derived Into  : Günlük veya sprint düzeyinde görevler
Must Not Own  : WAVE_MAP.md (yalnızca üst düzey kapsama referans verir)
```

---

## Aynı Bilginin Farklı Seviyelerde Temsili

Bazı bilgiler birden fazla dokümanda farklı detay seviyelerinde yer alabilir. Bu kabul edilebilir; ancak sahiplik tek olmalıdır.

Örnekler:

```text
Teknik stack:
  → TECH_CONTEXT.md: tam karar ve gerekçe
  → README.md: tek satır özet
  → DEPLOYMENT.md: ortam bazlı seçim

Kullanıcı akışları:
  → PRODUCT_RULES.md: kural bazlı tanım
  → WAVE_MAP.md: hangi dalgada yer alacağı
  → WAVE_PLAN.md: görev bazlı kırılım
```

---

## Bilgi Değişikliğinde Güncelleme Zinciri

Bir primary owner'daki bilgi değişirse, aşağıdaki zincir kontrol edilmelidir:

```text
PROJECT_BRAIN değişirse:
  → WAVE_MAP, WAVE_PLAN, TECH_CONTEXT bağımlılık kontrolü yapılır.

TECH_CONTEXT değişirse:
  → DATA_MODEL, API_CONTRACTS, DEPLOYMENT, TEST_STRATEGY bağımlılık kontrolü yapılır.

CURRENT_STATUS değişirse:
  → NEXT_TASKS, WAVE_PLAN bağımlılık kontrolü yapılır.
```

Bu kontrol `VALIDATION_RULES.md` içindeki cross-document consistency kuralıyla desteklenir.

---

## Tekrar ve Çoğalma Önleme

Aşağıdaki davranışlar MUST NOT uygulanır:

- Aynı teknik kararın TECH_CONTEXT ve PROJECT_BRAIN'de birbirinden bağımsız biçimde tutulması
- Aynı kapsam kısıtlamasının birden fazla belgede bağımsız sahiplenilmesi
- Aynı davranış kuralının hem PRODUCT_RULES hem AGENT_INSTRUCTIONS'da bağımsız tanımlanması

Bir belge başka belgeye ait bilgiye ihtiyaç duyuyorsa kısa referans verir; kopyalamaz.
