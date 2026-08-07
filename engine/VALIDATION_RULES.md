# Validation Rules

## Amaç

Bu belge, Product Engine'in ürettiği çıktının geçerli sayılması için gerekli kontrolleri tanımlar.

Validation, working output'un final output olarak kabul edilip edilemeyeceğini belirler.

## Kapsam Dışı

- Çelişkilerin hangi otoriteye göre çözüleceği → `CONFLICT_RESOLUTION.md`
- Varsayım yapma izinlerinin tamamı → `ASSUMPTION_RULES.md`
- Pipeline'ın tam akışı → `GENERATION_PIPELINE.md`
- Template yapılarının içerikleri → `templates/`

---

## Validation Sonuç Kategorileri

```text
PASS
  → Tüm zorunlu kontroller geçildi. Output final yapılabilir.

CONDITIONAL PASS
  → Küçük sorunlar var; ancak bunlar üretimi engellemez.
    Kullanıcıya bildirilir ve onay alındıktan sonra final yapılabilir.

FAIL
  → Kritik sorun var. Output final yapılamaz.
    Repair aşamasına geçilir veya run başarısız sayılır.
```

---

## Validation Katmanları

### 1. Yapı Doğrulaması (Structure Validation)

```text
Kontrol: Output klasörü OUTPUT_STRUCTURE.md'de tanımlanan yapıya uygun mu?
  - latest/ klasörü mevcut mu?
  - versions/ klasörü mevcut mu?
  - Dosya adları DOCUMENT_CATALOG.md ile uyumlu mu?
  - Pakette olmayan dosyalar output'a eklenmiş mi?

Hata Seviyesi:
  - Yanlış klasör yapısı → FAIL
  - Pakette olmayan dosya mevcut → FAIL
```

---

### 2. Zorunlu Doküman Doğrulaması (Required Document Validation)

```text
Kontrol: Seçilen paket tarafından required olan tüm dokümanlar üretildi mi?

Hata Seviyesi:
  - Zorunlu doküman eksik → FAIL
  - Koşullu doküman eksik (uygunluk koşulu karşılanmışsa) → FAIL
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
  - Teknik stack PRD'de mi tutuluyor? (olmamalı)
  - Kullanıcı akışları ARCH'ta mı tanımlanıyor? (olmamalı)
  - Primary owner dışında bilgi sahiplenilmiş mi?

Hata Seviyesi:
  - Sahiplik ihlali çelişkiye yol açıyorsa → FAIL
  - Sahiplik ihlali yalnızca tekrara yol açıyorsa → CONDITIONAL PASS
```

---

### 5. Belgeler Arası Tutarlılık (Cross-Document Consistency)

```text
Kontrol:
  - PRD'deki kapsam ARCH ile tutarlı mı?
  - Teknik stack seçimi tutarlı mı (PRD → ARCH → DEPLOY)?
  - Kullanıcı akışları PRD ve WAVE_MAP arasında uyumlu mu?
  - Veri modeli (DATA) API şemasıyla (API) tutarlı mı?
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

Hata Seviyesi:
  - Kayıt dışı assumption → FAIL
  - Prohibited alanda assumption → FAIL
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

## Hangi Durumda Ne Olur

| Sonuç | Anlamı | Eylem |
|---|---|---|
| PASS | Tüm zorunlu kontroller geçildi | Output final yapılır; latest/ güncellenir |
| CONDITIONAL PASS | Küçük sorunlar var | Kullanıcıya bildirilir; onay alınarak final yapılabilir |
| FAIL | Kritik sorun var | Repair aşamasına geçilir veya run başarısız sayılır |

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
```

Bu rapor run manifest'ine eklenir. Bkz: `RUN_PROTOCOL.md`.
