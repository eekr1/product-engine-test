# Conflict Resolution

## Amaç

Bu belge, iki bilgi, belge veya kural çeliştiğinde hangi kaynağın öncelikli olduğunu ve çelişkinin nasıl çözüleceğini tanımlar.

Temel ilke: Sessiz overwrite MUST NOT yapılır. Belirsizlik gerçekmiş gibi sunulmaz.

## Kapsam Dışı

- Eksik bilgi için varsayım kuralları → `ASSUMPTION_RULES.md`
- Genel validation listesi → `VALIDATION_RULES.md`
- Pipeline'ın tam akışı → `GENERATION_PIPELINE.md`
- Intake alanları → `PROJECT_INTAKE.md`

---

## Kaynak Otorite Sırası

Aşağıdaki sıra, çelişki durumunda hangi kaynağın üstün tutulacağını belirler:

```text
1. Kullanıcının güncel ve açık talebi
2. PRODUCT_ENGINE_BRAIN.md
3. Onaylanmış proje girdisi (approved input)
4. engine/ sözleşmeleri (bu belgeler dahil)
5. Seçilen packages/ tanımları
6. templates/ kuralları
7. Projeye özel ek kaynaklar
8. ref/ belgeleri
9. Ajan varsayımları
```

Alt sıradaki kaynak, üst sıradaki kaynakla çelişiyorsa üst sıradaki kaynak esas alınır.

---

## Çelişki Türleri

### 1. Kullanıcı Girdisi Çelişkisi

**Tanım:** Kullanıcı aynı run içinde çelişkili bilgi vermiştir.

**Örnek:**
```text
- Proje türü hem "web-app" hem "api-service" olarak belirtilmiş.
- Kapsam hem "sadece MVP" hem "tüm özellikler ilk versiyonda" olarak ifade edilmiş.
```

**Davranış:**
- Çelişki tespit edilir ve kullanıcıya açıkça gösterilir.
- Kullanıcının hangi bilgiyi onayladığı sorulur.
- Kullanıcı yanıtlanana kadar üretim başlatılamaz (MUST NOT).

---

### 2. Onaylı Girdi ile Eski Doküman Çelişkisi

**Tanım:** Mevcut proje senaryosunda, onaylı yeni girdi ile önceki doküman içeriği çelişiyor.

**Örnek:**
```text
- Yeni girdi teknik stack değiştiğini bildiriyor.
- Eski ARCHITECTURE.md eski stack'i gösteriyor.
```

**Davranış:**
- Onaylı girdi üstün tutulur (otorite sırasına göre).
- Çelişki ve üstünlük kararı run kaydına yazılır.
- Eski doküman sessizce overwrite edilmez; değişiklik gerekçelendirilir.

---

### 3. Engine Sözleşmesi ile Ref Belgesi Çelişkisi

**Tanım:** Bir `ref/` belgesi engine sözleşmesinden farklı bir davranış öneriyor.

**Davranış:**
- Engine sözleşmesi üstün tutulur (MUST).
- Ref belgesi authoritative değildir.
- Ref'e dayanan alternatif, yalnızca kullanıcı açıkça tercihini belirtirse değerlendirilebilir.

---

### 4. Paket ile Template Çelişkisi

**Tanım:** Paket bir doküman türünü zorunlu tutarken, template o dokümanı farklı bir yapıda tanımlıyor.

**Davranış:**
- Paket hangi dokümanların üretileceğini belirler.
- Template dokümanın nasıl üretileceğini belirler.
- İki sorumluluk birbirine karıştırılmamalıdır.
- Eğer gerçek çelişki varsa (template zorunlu bir bölümü eksik kılıyorsa), eksiklik rapor edilir ve kullanıcıya bildirilir.

---

### 5. Mevcut Durum ile Hedef Durum Çelişkisi

**Tanım:** Mevcut proje gerçeği ile kullanıcının istediği hedef durum çelişiyor gibi görünüyor.

**Örnek:**
```text
- Mevcut proje SQL kullanıyor.
- Kullanıcı yeni run'da NoSQL geçiş planı istiyor.
```

**Davranış:**
- Bu bir çelişki değil, bir geçiş kararıdır.
- Mevcut durum CURRENT_STATUS'ta, hedef durum ARCHITECTURE veya PRD'de belgelenir.
- İki belgenin çeliştiği sanılmamalı; farklı zaman dilimlerini temsil ettikleri netleştirilmelidir.

---

### 6. Engine Sözleşmeleri Arası Çelişki

**Tanım:** İki engine belgesi aynı karar için çelişkili kural içeriyor.

**Davranış:**
- Bu durum en yüksek öncelikli çelişkidir.
- Ajan sessizce seçim yapmamalıdır (MUST NOT).
- Çelişki, kullanıcıya açıkça raporlanmalıdır.
- Engine spec düzeltmesi beklenene kadar ilgili aşama blocked kalır.

---

## Çelişki Çözüm Kaydı Formatı

Her çözülen çelişki aşağıdaki bilgileri içermelidir:

```text
Conflict ID   : CON-001 (run içinde sıralı)
Tür           : user_input | approved_vs_old | engine_vs_ref | package_vs_template |
                current_vs_desired | engine_vs_engine
Çelişen A     : İlk kaynak ve iddiası
Çelişen B     : İkinci kaynak ve iddiası
Karar         : Hangi kaynak esas alındı?
Gerekçe       : Neden bu kaynak seçildi? (otorite sırasına göre)
Kullanıcıya   : Bildirildi mi? (evet / hayır)
Durum         : resolved | blocked | pending_user
```

Çelişki kayıtları run manifest'ine eklenir. Bkz: `RUN_PROTOCOL.md`.

---

## Çözülebilir ve Çözülemeyen Çelişkiler

### Çözülebilir Çelişkiler

Otorite sırası açıkça üstün kaynağı belirliyorsa ve üstün kaynak belirsiz değilse çelişki engine tarafından çözülür. Kullanıcıya bildirilir ama onay beklenmez.

### Çözülemeyen Çelişkiler

Aşağıdaki durumlarda çelişki engine tarafından çözülemez:

```text
- Kullanıcı aynı run'da çelişkili bilgi verdi.
- İki engine sözleşmesi çelişiyor.
- Kullanıcı onayı olmadan ilerlemek yanlış çıktıya yol açabilir.
- Otorite sırası belirsiz.
```

Bu durumlarda:

- Pipeline blocked durumuna alınır.
- Kullanıcıya çelişki ve seçenekler net biçimde açıklanır.
- Kullanıcı kararı alınana kadar üretim devam etmez (MUST NOT).

---

## Ref Belgelerinin Otorite Sınırı

`ref/` belgeleri:

- kalite, yapı, bölümleme ve kapsam için kaynak olarak kullanılabilir,
- ancak onaylı girdi, engine sözleşmesi veya paket kuralının önüne geçemez (MUST NOT),
- ref'teki proje isimleri, teknik kararlar ve tasarım tercihleri yeni projeye taşınamaz.

---

## Sessiz Overwrite Yasağı

Aşağıdaki durumlar MUST NOT uygulanır:

```text
- Eski doküman içeriğini kullanıcıya bildirmeden yeni içerikle değiştirmek
- Çelişkili bilgilerden birini gerekçe belirtmeden seçmek
- Çelişkiyi görmezden gelerek üretimi sürdürmek
- Ref belgesindeki kararı proje gerçeği gibi kullanmak
```
