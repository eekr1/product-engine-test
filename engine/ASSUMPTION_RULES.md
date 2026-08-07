# Assumption Rules

## Amaç

Bu belge, Product Engine'in eksik bilgiyle karşılaştığında nasıl davranacağını tanımlar.

Temel ilke: Assumption görünür, izlenebilir ve gerektiğinde değiştirilebilir olmalıdır.

Private chain-of-thought kaydedilmez veya saklanmaz. Yalnızca sonuç, karar ve kısa gerekçe tutulur.

## Kapsam Dışı

- Genel çelişki çözüm sistemi → `CONFLICT_RESOLUTION.md`
- Intake alanlarının tam listesi → `PROJECT_INTAKE.md`
- Genel validation checklist → `VALIDATION_RULES.md`
- Pipeline'ın tam akışı → `GENERATION_PIPELINE.md`

---

## Assumption Sınıfları

### 1. Safe Assumption (Güvenli Varsayım)

Proje kapsamını, teknik mimarisini veya iş modelini etkilemeyen; paket varsayılanıyla güvenle tamamlanabilen eksik bilgi için yapılır.

**Koşullar:**

- Alanın eksikliği üretimi engellemiyorsa
- Paket veya proje türü için standart bir varsayılan mevcutsa
- Kullanıcı bu alanı onay sürecinde açıkça tartışmamışsa

**Davranış:**

- Varsayım yapılır.
- Açıkça kaydedilir: ne varsayıldığı ve neden.
- Validation sırasında gözden geçirilir.

**Örnekler:**

```text
- Dil (Türkçe) belirtilmemişse ve proje bağlamı buna işaret ediyorsa Türkçe varsayılır.
- Sayfalama davranışı belirtilmemişse endüstri standardı davranış varsayılır ve not edilir.
- Dosya adlandırma formatı belirtilmemişse kebab-case kullanılır.
```

---

### 2. Bounded Assumption (Sınırlı Varsayım)

Teknik veya ürün kararlarının çevre bilgisine göre makul biçimde tahmin edilebildiği ancak onay beklenmesi tercih edilen durumlarda yapılır.

**Koşullar:**

- Alanın birden fazla makul seçeneği var
- Seçilen seçenek proje gidişatını etkileyebilir ama kritik değil
- Kullanıcıya soru sormak mümkün ama üretim beklemeden devam edilebilir

**Davranış:**

- En makul seçenek seçilir ve gerekçesi kaydedilir.
- Kullanıcıya run tamamlandığında bildirilir ve onayı istenir.
- Onaylanmazsa bir sonraki run'da revize edilir.

**Örnekler:**

```text
- ORM tercihi belirtilmemişse proje stack'iyle uyumlu yaygın tercih varsayılır.
- Test kapsamı yüzdesi belirtilmemişse %80 hedef varsayılır ve not edilir.
```

---

### 3. Clarification Required (Netleştirme Gerekli)

Eksik bilginin varsayımla tamamlanamayacağı; üretimi bloke etmeden kullanıcıya sorulması gereken durumlar.

**Koşullar:**

- Bilgi paket seçimini, proje kapsamını veya kritik teknik kararı etkiliyor
- Birden fazla yorum mevcut ve her biri farklı çıktıya yol açıyor
- Varsayımın yanlış çıkması durumunda onarım maliyeti yüksek

**Davranış:**

- Üretim o aşamada durdurulur.
- Kullanıcıya net ve tek soru sorulur.
- Cevap alınmadan ilgili aşamaya devam edilmez.
- Birden fazla clarification gerekliyse hepsi aynı anda sorulur (tek sorgu, birden fazla madde).

**Örnekler:**

```text
- Proje türü belirsizse (web-app mı, api-service mi?)
- Delivery profile belirtilmemişse ve tahmin edilemiyorsa
- Mevcut proje için hangi dokümanların geçerli olduğu bilinmiyorsa
- Kapsam sınırları birden fazla yoruma açıksa
```

---

### 4. Prohibited Assumption (Yasak Varsayım)

Aşağıdaki bilgiler hiçbir koşulda sessizce uydurulmamalıdır (MUST NOT).

```text
- Projenin ticari amacı veya gelir modeli
- Gerçek müşteri veya kullanıcı kimliği
- Yasal, düzenleyici veya uyumluluk gereksinimleri
- Finansal bilgiler, bütçe, fiyatlandırma
- Kimlik doğrulama yöntemi (özellikle güvenlik kritik sistemlerde)
- Credentials, API anahtarları, sırlar, token'lar
- Production deployment hedefi veya ortamı (canlı sistem kararları)
- Kullanıcının açıkça karar vermesi gereken ürün tercihleri
  (örn. hangi özelliğin önce geleceği, monetization modeli)
- Entegrasyon hedefi (hangi sistemle entegre olunacağı)
```

Bu alanlar eksikse üretim durdurulur ve kullanıcıya clarification sorusu yönlendirilir.

---

## Assumption Kaydı Formatı

Her assumption aşağıdaki bilgileri içermelidir:

```text
Assumption ID : ASM-001 (run içinde sıralı)
Alan          : İlgili bilgi alanı (ör. "test_coverage_target")
Yapılan       : Seçilen değer veya karar
Sınıf         : safe | bounded
Gerekçe       : Neden bu değer seçildi?
Kaynak        : paket varsayılanı | proje bağlamı | endüstri standardı
Durum         : pending_review | confirmed | revised
```

Assumption kayıtları run manifest'ine eklenir. Bkz: `RUN_PROTOCOL.md`.

---

## Assumption'ların Geçicilik Durumu

```text
Geçici Assumption
  → Kullanıcı onayı bekleniyor.
  → Validation sırasında görünür olmalı.
  → Bir sonraki run öncesinde kullanıcı onaylamalı.

Kalıcı Assumption
  → Kullanıcı tarafından onaylandı.
  → Approved girdi kapsamına alınır.
  → Sonraki run'larda tekrar sorgulanmaz.
```

---

## Validation Sırasında Assumption Kontrolü

Validation aşamasında:

- Tüm assumption'ların kaydedilip kaydedilmediği kontrol edilir.
- Prohibited alanlarda sessiz varsayım yapılıp yapılmadığı kontrol edilir.
- Pending review assumption'lar CONDITIONAL PASS olarak işaretlenir.

Bkz: `VALIDATION_RULES.md`

---

## Ref Belgelerinden Çıkarım Sınırı

`ref/` belgeleri yapı, kapsam ve kalite referansı olarak kullanılabilir.

Ref belgelerindeki:

- Proje isimleri
- Müşteri bilgileri
- Teknik kararlar
- Ürün tercihleri

yeni projeye assumption olarak taşınamaz (MUST NOT).

Ref belgesi, "bu proje de benzer yapıda olabilir" gibi bir bounded assumption için ilham kaynağı olabilir; ancak bu explicit olarak kaydedilmeli ve bounded assumption olarak işaretlenmelidir.
