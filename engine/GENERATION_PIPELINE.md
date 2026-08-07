# Generation Pipeline

## Amaç

Bu belge, Product Engine'in tek bir çalışmada uçtan uca hangi aşamalarla yürüdüğünü tanımlar.

Her aşamanın girdisi, eylemi, beklenen çıktısı ve durma koşulları burada tanımlanır.

Bu belge araç veya model bağımlı değildir.

## Kapsam Dışı

- Her intake alanının ayrıntılı açıklaması → `PROJECT_INTAKE.md`
- Her validation maddesinin tam listesi → `VALIDATION_RULES.md`
- Varsayım sınıflarının tamamı → `ASSUMPTION_RULES.md`
- Output ağacının tüm ayrıntıları → `OUTPUT_STRUCTURE.md`
- Template içerikleri → `templates/`
- Run kayıt detayları → `RUN_PROTOCOL.md`

---

## Pipeline Aşamaları

Aşağıdaki aşamalar zorunlu sırayla uygulanır.

---

### Aşama 1 — Project Intake

```text
Girdi   : Ham proje bilgisi (serbest metin, yapılandırılmış form veya mevcut kaynaklar)
Eylem   : Bilgi kabul kriterlerine göre değerlendirilir. Zorunlu alanlar kontrol edilir.
          Eksik veya belirsiz zorunlu alanlar için kullanıcıya soru sorulur.
          Assumption yapılabilecek alanlar kaydedilir.
Çıktı   : Pending girdi (zorunlu alanlar doldurulmuş, clarification tamamlanmış)
Durma   : Zorunlu alanlar tamamlanamıyorsa veya kritik belirsizlik giderilemiyorsa
          → Kullanıcıya netleştirme sorusu yönlendirilir, pipeline beklemeye alınır.
```

Bkz: `PROJECT_INTAKE.md`

---

### Aşama 2 — Girdi Onayı

```text
Girdi   : Pending girdi
Eylem   : Kullanıcı girdinin içeriğini onaylar.
          Onay açık olmalıdır (sessiz onay kabul edilmez).
          Assumption listesi kullanıcıya gösterilir.
Çıktı   : Approved girdi (onaylı snapshot)
Durma   : Kullanıcı onaylamıyorsa veya düzeltme talep ediyorsa
          → Aşama 1'e geri dönülür.
```

---

### Aşama 3 — Paket Seçimi

```text
Girdi   : Approved girdi (project_type + delivery_profile)
Eylem   : PACKAGE_RULES.md'ye göre temel paket belirlenir.
          Uzantı ve daraltma değerlendirmesi yapılır.
          Seçilen paket ve gerekçesi kaydedilir.
Çıktı   : Seçilen paket kimliği ve doküman listesi
Durma   : Paket belirlenemiyorsa (belirsiz tür/profil)
          → Kullanıcıya soru sorulur. Tahmin yapılmaz.
```

Bkz: `PACKAGE_RULES.md`

---

### Aşama 4 — Doküman Seçimi

```text
Girdi   : Seçilen paket
Eylem   : DOCUMENT_CATALOG.md üzerinden doküman kimlikleri çözümlenir.
          Koşullu dokümanların uygunluğu değerlendirilir.
          Her doküman için template konumu belirlenir.
Çıktı   : Üretilecek doküman listesi (ID + template konumu)
Durma   : Bir doküman için template bulunamazsa
          → Eksiklik rapor edilir, kullanıcıya bildirilir.
```

Bkz: `DOCUMENT_CATALOG.md`

---

### Aşama 5 — Template Çözümlemesi

```text
Girdi   : Doküman listesi
Eylem   : Her doküman için ilgili template okunur.
          Template içindeki yapı ve gerekli bilgi alanları belirlenir.
Çıktı   : Her doküman için doldurulacak içerik alanlarının listesi
Durma   : Template eksik veya bozuksa
          → Eksiklik rapor edilir.
```

---

### Aşama 6 — Bilgi Dağıtımı

```text
Girdi   : Approved girdi + doküman listesi + INFORMATION_MAP.md
Eylem   : Onaylı girdideki her bilgi parçası, INFORMATION_MAP.md'e göre
          doğru dokümana yönlendirilir.
          Birden fazla dokümanı etkileyen bilgiler primary owner'a yazılır;
          diğerleri referans düzeyinde kullanır.
Çıktı   : Her doküman için bilgi içeriği hazırlanmış
Durma   : Bir bilginin sahipliği belirsizse
          → CONFLICT_RESOLUTION.md uygulanır.
```

Bkz: `INFORMATION_MAP.md`

---

### Aşama 7 — Eksik ve Çelişkili Bilgi Yönetimi

```text
Girdi   : Dağıtım sonucu + eksik veya çelişkili alanlar listesi
Eylem   : ASSUMPTION_RULES.md uygulanır (eksik bilgi için).
          CONFLICT_RESOLUTION.md uygulanır (çelişkili bilgi için).
          Assumption yapılan alanlar kaydedilir.
          Güvenli çözülemeyen çelişkiler kullanıcıya taşınır.
Çıktı   : Tüm alanlar ya doldurulmuş, ya assumption yapılmış, ya da açık olarak işaretlenmiş
Durma   : Kritik bilgi eksik ve assumption yapılamıyorsa
          → Kullanıcıya soru sorulur, üretim beklemeye alınır.
          Kritik çelişki çözülemiyorsa
          → Pipeline blocked durumuna alınır, kullanıcıya bildirilir.
```

Bkz: `ASSUMPTION_RULES.md`, `CONFLICT_RESOLUTION.md`

---

### Aşama 8 — Doküman Üretimi

```text
Girdi   : Doldurulmuş içerik + template yapısı
Eylem   : Her doküman template'i, onaylı bilgiyle doldurularak üretilir.
          Dokümanlar bağımlılık sırasına göre üretilir (PROJECT_BRAIN önce, türevler sonra).
          Üretim sırasında oluşan çalışma dosyaları working output olarak tutulur.
Çıktı   : Working output (henüz doğrulanmamış doküman seti)
Durma   : Bir doküman üretimi başarısız olursa
          → Hata kaydedilir, etkilenen doküman atlanır ve sonraki işlenir.
          Tüm zorunlu dokümanlar üretilemiyorsa → pipeline fail durumuna geçer.
```

Doküman üretim bağımlılık sırası (genel):

```text
PROJECT_BRAIN → PRODUCT_RULES, TECH_CONTEXT
PROJECT_BRAIN → WAVE_MAP → WAVE_PLAN
PROJECT_BRAIN → DESIGN_RULES (koşullu)
PROJECT_BRAIN, TECH_CONTEXT → DATA_MODEL
TECH_CONTEXT, DATA_MODEL → API_CONTRACTS
TECH_CONTEXT → DEPLOYMENT
PROJECT_BRAIN, TECH_CONTEXT → TEST_STRATEGY
PROJECT_BRAIN → README
CURRENT_STATUS → NEXT_TASKS
```

---

### Aşama 9 — Doğrulama (Validation)

```text
Girdi   : Working output
Eylem   : VALIDATION_RULES.md'deki tüm kontroller uygulanır.
          Her doküman hem kendi içinde hem de diğer dokümanlarla tutarlılık açısından kontrol edilir.
Çıktı   : Validation raporu (PASS / CONDITIONAL PASS / FAIL)
Durma   : FAIL durumunda repair aşamasına geçilir.
          CONDITIONAL PASS durumunda kullanıcı bilgilendirilir; onay alınarak devam edilebilir.
```

Bkz: `VALIDATION_RULES.md`

---

### Aşama 10 — Onarım (Repair)

```text
Girdi   : Validation raporu + working output
Eylem   : FAIL veya CONDITIONAL PASS durumunda, validation bulgularına göre
          ilgili dokümanlar düzeltilir.
          Onarım sonrası validation tekrar çalıştırılır.
Çıktı   : Onarılmış working output
Durma   : İkinci validation'da da FAIL alınırsa
          → Run başarısız kabul edilir. Kullanıcıya rapor verilir.
```

---

### Aşama 11 — Final Output Hazırlığı

```text
Girdi   : PASS veya kabul edilmiş CONDITIONAL PASS working output
Eylem   : Çalışma dosyaları ve run kayıtları temizlenir.
          Final output, OUTPUT_STRUCTURE.md'de tanımlanan klasör yapısına yerleştirilir.
          Sürüm numarası atanır, latest/ güncellenir.
Çıktı   : Final output klasörü (temiz, teslime hazır)
Durma   : Output yapısı hatalıysa → düzeltilir ve tekrar kontrol edilir.
```

Bkz: `OUTPUT_STRUCTURE.md`

---

### Aşama 12 — Run Tamamlama

```text
Girdi   : Final output
Eylem   : Run kaydı tamamlanır. Run durumu "Completed" olarak güncellenir.
          Üretilen dokümanlar, kullanılan paket, yapılan assumption'lar ve
          validation sonucu RUN_MANIFEST.md'ye yazılır.
          Run klasörü runs/completed/<run-id>/ konumuna taşınır.
Çıktı   : Kapalı run kaydı
Durma   : — (bu son aşamadır)
```

Bkz: `RUN_PROTOCOL.md`

---

## Pipeline Geri Dönüş Noktaları

```text
Aşama 1'e geri dönülür:
  → Girdi onaylanmamışsa veya düzeltme gerekiyorsa.

Aşama 3'e geri dönülür:
  → Paket seçimi belirsizleştiyse (proje kapsamı değiştiyse).

Aşama 9'a geri dönülür:
  → Repair sonrası validation yeniden çalıştırılır.
```

---

## Pipeline ve Run Protocol Ayrımı

Bu belge üretim sürecinin mantığını tanımlar.

`RUN_PROTOCOL.md` ise bir run'ın nasıl başlatıldığını, durum geçişlerini, kayıt yapısını ve kapanış sürecini tanımlar.

İki belgenin sorumlulukları birbirine karıştırılmamalıdır.
