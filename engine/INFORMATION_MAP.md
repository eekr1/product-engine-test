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

### Proje Amacı

```text
Primary Owner : PRODUCT_REQUIREMENTS.md (PRD)
Referenced By : README.md, CURRENT_STATUS.md, ARCHITECTURE.md
Derived Into  : Core flows, success criteria, scope definitions
Must Not Own  : ARCHITECTURE.md (tekrar etmemeli), WAVE_MAP.md (özetleyebilir ama sahiplenemez)
```

---

### Kullanıcılar ve Kullanıcı Türleri

```text
Primary Owner : PRODUCT_REQUIREMENTS.md (PRD)
Referenced By : DESIGN_RULES.md, TESTING_STRATEGY.md, API_REFERENCE.md
Derived Into  : Persona açıklamaları, akış öncelikleri
Must Not Own  : ARCHITECTURE.md, DATA_MODEL.md
```

---

### Temel Kullanıcı Akışları

```text
Primary Owner : PRODUCT_REQUIREMENTS.md (PRD)
Referenced By : WAVE_MAP.md, WAVE_PLAN.md, TESTING_STRATEGY.md
Derived Into  : Görev listesi, dalga kapsamı
Must Not Own  : ARCHITECTURE.md (mimari akışı açıklayabilir ama kullanıcı akışını sahiplenemez)
```

---

### Teknik Stack

```text
Primary Owner : ARCHITECTURE.md
Referenced By : DEPLOYMENT.md, TESTING_STRATEGY.md, DATA_MODEL.md, README.md
Derived Into  : Deployment kararları, test araçları
Must Not Own  : PRODUCT_REQUIREMENTS.md (tercih notlanabilir ama stack sahibi değil)
```

---

### Sistem Bileşenleri ve Mimari

```text
Primary Owner : ARCHITECTURE.md
Referenced By : DATA_MODEL.md, API_REFERENCE.md, DEPLOYMENT.md
Derived Into  : Bileşen bazlı görevler, entegrasyon noktaları
Must Not Own  : PRODUCT_REQUIREMENTS.md, WAVE_MAP.md
```

---

### Veri Modeli (Varlıklar, İlişkiler)

```text
Primary Owner : DATA_MODEL.md
Referenced By : API_REFERENCE.md, ARCHITECTURE.md (üst düzey)
Derived Into  : API endpoint şemaları, test senaryoları
Must Not Own  : PRODUCT_REQUIREMENTS.md, ARCHITECTURE.md (tam veri modeli)
```

---

### API Yüzeyi (Endpoint, Request, Response)

```text
Primary Owner : API_REFERENCE.md
Referenced By : TESTING_STRATEGY.md, WAVE_PLAN.md
Derived Into  : Test senaryoları, entegrasyon görevleri
Must Not Own  : ARCHITECTURE.md (yalnızca API yaklaşımına referans verebilir)
```

---

### Mevcut Proje Durumu

```text
Primary Owner : CURRENT_STATUS.md
Referenced By : NEXT_TASKS.md, README.md
Derived Into  : Sonraki adımlar, dalga planı güncellemesi
Must Not Own  : PRODUCT_REQUIREMENTS.md, ARCHITECTURE.md
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

### Dalga Yapısı (Üst Seviye)

```text
Primary Owner : WAVE_MAP.md
Referenced By : WAVE_PLAN.md, README.md
Derived Into  : Dalga bazlı ayrıntılı görev planları
Must Not Own  : PRODUCT_REQUIREMENTS.md, NEXT_TASKS.md
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

### Tasarım Kuralları ve Görsel Dil

```text
Primary Owner : DESIGN_RULES.md
Referenced By : PRODUCT_REQUIREMENTS.md (tercih notları), README.md
Derived Into  : Bileşen kuralları, stil kararları
Must Not Own  : PRODUCT_REQUIREMENTS.md (tasarım tercihini not edebilir ama kuralı sahiplenemez)
```

---

### Deployment Hedefi ve Ortamı

```text
Primary Owner : DEPLOYMENT.md
Referenced By : ARCHITECTURE.md (referans seviyesinde)
Derived Into  : CI/CD pipeline görevleri
Must Not Own  : ARCHITECTURE.md (yalnızca hosting kararına referans verebilir)
```

---

### Test Stratejisi ve Test Araçları

```text
Primary Owner : TESTING_STRATEGY.md
Referenced By : WAVE_PLAN.md, NEXT_TASKS.md
Derived Into  : Test görevleri
Must Not Own  : ARCHITECTURE.md, PRODUCT_REQUIREMENTS.md
```

---

### Ürün Konumlandırma ve Rekabet Bağlamı

```text
Primary Owner : PRODUCT_STRATEGY.md
Referenced By : PRODUCT_REQUIREMENTS.md (üst bağlam olarak)
Derived Into  : Özellik öncelikleri
Must Not Own  : ARCHITECTURE.md, README.md
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

## Aynı Bilginin Farklı Seviyelerde Temsili

Bazı bilgiler birden fazla dokümanda farklı detay seviyelerinde yer alabilir. Bu kabul edilebilir; ancak sahiplik tek olmalıdır.

Örnekler:

```text
Teknik stack:
  → ARCHITECTURE.md: tam karar ve gerekçe
  → README.md: tek satır özet
  → DEPLOYMENT.md: ortam bazlı seçim

Kullanıcı akışları:
  → PRD: tam tanım
  → WAVE_MAP.md: hangi dalgada yer alacağı
  → WAVE_PLAN.md: görev bazlı kırılım
```

---

## Bilgi Değişikliğinde Güncelleme Zinciri

Bir primary owner'daki bilgi değişirse, aşağıdaki zincir kontrol edilmelidir:

```text
PRD değişirse:
  → WAVE_MAP, WAVE_PLAN, ARCH bağımlılık kontrolü yapılır.

ARCH değişirse:
  → DATA, API, DEPLOY, TEST bağımlılık kontrolü yapılır.

STATUS değişirse:
  → NEXT_TASKS, WAVE_PLAN bağımlılık kontrolü yapılır.
```

Bu kontrol `VALIDATION_RULES.md` içindeki cross-document consistency kuralıyla desteklenir.

---

## Tekrar ve Çoğalma Önleme

Aşağıdaki davranışlar MUST NOT uygulanır:

- Aynı teknik kararın ARCH ve PRD'de birbirinden bağımsız biçimde tutulması
- Aynı kullanıcı akışının PRD ve WAVE_PLAN'da farklı tanımlanması
- Aynı kapsam kısıtlamasının birden fazla belgede bağımsız sahiplenilmesi

Bir belge başka belgeye ait bilgiye ihtiyaç duyuyorsa kısa referans verir; kopyalamaz.
