# Validation Rules

## Amaç

Bu belge, Product Engine'in ürettiği çıktının geçerli sayılması için gerekli kontrolleri tanımlar.

Validation, working output'un final output olarak kabul edilip edilemeyeceğini belirler.

## Kapsam Dışı

- Çelişkilerin hangi otoriteye göre çözüleceği → `CONFLICT_RESOLUTION.md`
- Varsayım yapma izinlerinin tamamı → `ASSUMPTION_RULES.md`
- Pipeline'ın tam akışı → `GENERATION_PIPELINE.md`
- Template yapılarının içerikleri → `templates/`

## Sorumluluk ve Sınır

`VALIDATION_RULES` working-output'u publication öncesinde doğrular. `OUTPUT_STRUCTURE` ise successful validation sonrasında published output fiziksel yapısını yönetir.

---

## Validation Sonuç Kategorileri

```text
PASS
  → Tüm zorunlu kontroller geçildi. Output final yapılabilir.

CONDITIONAL PASS
  → Engellemeyen (non-blocking) doğrulama bulguları mevcut. Kullanıcı/operatör bilgilendirilir.
    İki geçerli yol mevcuttur:
    A) accepted CONDITIONAL PASS → Publication gate'e devam edilir (final yapılabilir).
    B) repair requested → İsteğe bağlı olarak repair adımı seçilebilir.

FAIL
  → Kritik sorun var. Output final yapılamaz.
    Zorunlu repair aşamasına geçilir; düzeltilemezse run başarısız (Failed) sayılır.
```

---

## Validation Katmanları

### 1. Yapı Doğrulaması (Structure Validation)

```text
Kontrol: Pre-publication working-output doküman seti seçilen package ve DOCUMENT_CATALOG.md ile tanımlanan yapıya uygun mu?
  - working-output doküman seti seçilen package ile uyumlu mu?
  - gerekli/applicable dokümanlar mevcut mu?
  - fazladan veya package dışı doküman var mı?
  - dosya adları DOCUMENT_CATALOG.md / package contract ile uyumlu mu?
  - working-output içinde final output'a sızmaması gereken runtime/temp dosyaları var mı?

Not: `latest/`, `versions/` veya yayınlanmış sürüm klasörlerinin mevcudiyeti pre-publication validation kontrolüne dahil değildir; yayınlama (publication/traceability) sonrasında doğrulanabilecek operasyonel output durumlarıdır.

Hata Seviyesi:
  - Paket/katalog dışı veya geçici dosya mevcut → FAIL
  - Eksik veya yanlış adlandırılmış doküman → FAIL
```

---

### 2. Zorunlu Doküman Doğrulaması (Required Document Validation)

```text
Kontrol: Seçilen paket tarafından required olan ve aktif project_type + delivery_profile kombinasyonu için applicable olan tüm dokümanlar ile onların applicable bağımlılıkları üretildi mi?

Not: Aktif project_type + delivery_profile için DOCUMENT_CATALOG.md tarafından applicable olmadığı için skip edilen bir dependency dokümanının üretilmemiş olması FAIL sebebi değildir.
Ancak aktif project_type + delivery_profile için applicable olan bir dependency dokümanı eksikse bu durum FAIL sebebidir.

Hata Seviyesi:
  - Zorunlu doküman eksik → FAIL
  - Applicable olan zorunlu bağımlılık dokümanı eksik → FAIL
  - Applicable olan koşullu doküman eksik (uygunluk koşulu karşılanmışsa) → FAIL
```

---

### 3. İçerik Tamlığı (Content Completeness)

```text
Kontrol: Üretilen her dokümanda doldurulmamış placeholder var mı?
  - [BURAYA YAZ], TBD, TODO gibi işaretler
  - Boş bırakılmış zorunlu bölümler
  - Template metadata'sı veya üretim notları

Hata Seviyesi:
  - Zorunlu bölümde placeholder → FAIL
  - İsteğe bağlı bölümde açıkça işaretlenmiş "unresolved" alan → CONDITIONAL PASS
```

---

### 4. Bilgi Sahipliği Doğrulaması (Information Ownership)

```text
Kontrol: INFORMATION_MAP.md'e göre bilgiler doğru dokümanlarda mı?
  - Teknik stack PRODUCT_RULES'de mi tutuluyor? (olmamalı)
  - Kullanıcı akışları TECH_CONTEXT'te mi tanımlanıyor? (olmamalı)
  - Primary owner dışında bilgi sahiplenilmiş mi?

Hata Seviyesi:
  - Sahiplik ihlali çelişkiye yol açıyorsa → FAIL
  - Sahiplik ihlali yalnızca tekrara yol açıyorsa → CONDITIONAL PASS
```

---

### 5. Belgeler Arası Tutarlılık (Cross-Document Consistency)

```text
Kontrol:
  - PROJECT_BRAIN'deki kapsam PRODUCT_RULES ile tutarlı mı?
  - Teknik stack seçimi tutarlı mı (PROJECT_BRAIN → TECH_CONTEXT → DEPLOYMENT)?
  - Kullanıcı akışları PRODUCT_RULES ve WAVE_MAP arasında uyumlu mu?
  - Veri modeli (DATA_MODEL) API sözleşmesiyle (API_CONTRACTS) tutarlı mı?
  - CURRENT_STATUS ile NEXT_TASKS birbirine uyumlu mu?

Hata Seviyesi:
  - Kapsam çelişkisi → FAIL
  - Teknik stack çelişkisi → FAIL
  - Küçük terminoloji farkı → CONDITIONAL PASS
```

---

### 6. Paket Uyumluluğu (Package Compliance)

```text
Kontrol: Üretilen doküman seti seçilen paketle uyumlu mu?
  - Fazladan doküman üretilmiş mi?
  - Paket genişletme/daraltma kararları kaydedilmiş mi?

Hata Seviyesi:
  - Gerekçesiz fazla doküman → CONDITIONAL PASS
  - Paket seçim kararı kayıt dışı → CONDITIONAL PASS
```

---

### 7. Template Uyumluluğu (Template Compliance)

```text
Kontrol: Üretilen dokümanlar ilgili template yapısına uygun mu?
  - Zorunlu bölümler mevcut mu?
  - Bölüm isimleri template ile uyumlu mu?

Hata Seviyesi:
  - Zorunlu bölüm eksik → FAIL
  - Bölüm sırası farklı → CONDITIONAL PASS
```

---

### 8. Assumption Uyumluluğu (Assumption Compliance)

```text
Kontrol:
  - Yapılan tüm assumption'lar kaydedilmiş mi?
  - Assumption yapılamayacak alanlarda sessiz varsayım yapılmış mı?
  - ASSUMPTION_RULES.md'de prohibited olan alanlarda assumption yok mu?
  - `confirmed` durumundaki her assumption için kullanıcı explicit approval veya authoritative approved-input kanıtı var mı?
  - Birden fazla makul teknik tercih arasından seçilen kararlar yanlışlıkla `safe` sınıfına sokulmuş mu?

Hata Seviyesi:
  - Kayıt dışı assumption → FAIL
  - Prohibited alanda assumption → FAIL
  - Kanıtsız `confirmed` assumption → FAIL
  - Teknik/ürün etkili çok-seçenekli assumption yanlışlıkla `safe` sınıfında → CONDITIONAL PASS; kritik etki yaratıyorsa FAIL
  - Kaydedilmiş assumption, onay bekliyorsa → CONDITIONAL PASS
```

---

### 9. Çelişki Çözüm Uyumluluğu (Conflict Resolution Compliance)

```text
Kontrol:
  - CONFLICT_RESOLUTION.md'ye göre çözülen çelişkiler kayıt altında mı?
  - Çözülemeyen çelişkiler kullanıcıya taşınmış mı?
  - Sessiz çelişki çözümü (overwrite) yapılmış mı?

Hata Seviyesi:
  - Çözülmemiş kritik çelişki → FAIL
  - Kayıt dışı çelişki çözümü → CONDITIONAL PASS
```

---

### 10. Proje Sızıntısı Kontrolü (Project Leakage Detection)

```text
Kontrol: Başka projeye ait içerik bu projenin output'una sızmış mı?
  - Farklı proje adı, şirket adı, müşteri bilgisi var mı?
  - Ref belgelerinden proje içeriği kopyalanmış mı?

Hata Seviyesi:
  - Farklı proje içeriği bulundu → FAIL
```

---

### 11. Output Temizliği (Output Cleanliness)

```text
Kontrol:
  - Run log, working output veya geçici dosyalar final output'a taşınmış mı?
  - Template metadata veya üretim talimatları kalmış mı?

Hata Seviyesi:
  - Run kayıtları output içinde → FAIL
  - Template metadata kalmış → FAIL
```

---

### 12. İzlenebilirlik (Traceability)

```text
Kontrol:
  - Run ID, input sürümü, paket ve delivery profile izlenebilir mi?
  - Validation sonucu run manifest'inde kayıtlı mı?

Hata Seviyesi:
  - İzlenebilirlik bilgisi eksik → CONDITIONAL PASS
```

---

### 13. Approval Integrity (Canonical User Approval)

```text
Kontrol:
  - Run'ın kullandığı input gerçekten `status: approved` mı?
  - Approved input için PROJECT_INTAKE.md'de tanımlanan canonical explicit user approval kanıtı var mı?
  - `approved_by: user` kaydı gerçek doğrudan kullanıcı onayıyla destekleniyor mu?
  - IDE/tool/plan/auto-approval yanlışlıkla canonical Product Engine approval olarak yorumlanmış mı?

Hata Seviyesi:
  - Canonical explicit user approval kanıtı olmadan approved input oluşturulmuş → FAIL
  - IDE/tool/plan/auto-approval `approved_by: user` olarak kaydedilmiş → FAIL
  - Pending input ile generation run başlatılmış → FAIL
```

Bu kontrol publication öncesi zorunludur. Approval integrity FAIL ise output yayınlanamaz.

---

### 14. Run Lifecycle Location Integrity

```text
Kontrol:
  - Aynı run-id aynı anda `runs/active/`, `runs/completed/` veya `runs/failed/` altında birden fazla yerde bulunuyor mu?
  - `status: Completed` olan run yalnızca `runs/completed/<run-id>/` altında mı?
  - `status: Failed` veya `Cancelled` olan kapanmış run `runs/active/` altında kopya bırakmış mı?

Hata Seviyesi:
  - Aynı run-id hem active hem completed/failed altında → FAIL
  - Manifest status ile fiziksel lifecycle konumu uyuşmuyor → FAIL
```

Bu kontrol final completion sırasında zorunludur. Run location exclusivity sağlanmadan run kapanmış sayılmaz.

---

## Hangi Durumda Ne Olur

| Sonuç | Anlamı | Eylem |
|---|---|---|
| PASS | Tüm zorunlu kontroller geçildi | Publication gate'e geçilir; output yayınlanır ve latest/ güncellenir |
| CONDITIONAL PASS | Engellemeyen bulgular var | Kullanıcı/operatör bilgilendirilir; kabul edilerek publication gate'e geçilebilir veya repair talep edilebilir |
| FAIL | Kritik sorun var | Zorunlu repair aşamasına geçilir; ikinci denemede de çözülemezse run Failed kapatılır |

İkinci validation'dan sonra da FAIL alınırsa run başarısız kapatılır. Bkz: `RUN_PROTOCOL.md`.

---

## Validation Raporu Gereksinimleri

Her validation sonrasında aşağıdaki bilgileri içeren bir rapor üretilir:

```text
- Validation Tarihi
- Run ID
- Sonuç: PASS / CONDITIONAL PASS / FAIL
- Geçilen kontrol sayısı
- Başarısız olan kontroller ve hata seviyeleri
- Uyarı listesi (varsa)
- Önerilen repair adımları (FAIL durumunda)
- Approval Integrity sonucu
- Run Lifecycle Location Integrity sonucu (completion aşamasında)
```

Bu rapor `VALIDATION_REPORT.md` olarak run klasörüne eklenir. Bkz: `RUN_PROTOCOL.md`.
