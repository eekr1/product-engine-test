# Product Engine — Logs Katmanı Kullanım Rehberi (`logs/`)

## 1. Amaç ve Kapsam

`logs/` katmanı, Product Engine’in zaman içerisindeki mimari değişikliklerini, sistemsel öğrenmelerini, tüm çalıştırmaların (`run`) üst seviye özet indeksini, doğrulanmış engine kusurlarını, gerçek kullanımda gözlenen düşük etkili hardening pattern'lerini ve gelecek geliştirme fikirlerini saklayan **kalıcı motor seviyesi hafıza katmanıdır (persistent engine memory)**.

Bu katman şu temel sorulara deterministik cevaplar verir:
- Product Engine’in kendisinde hangi kalıcı değişiklikler yapıldı ve gerekçesi neydi? (`ENGINE_CHANGELOG.md`)
- Şimdiye kadar hangi Product Engine run'ları gerçekleştirildi ve üst seviye sonuçları neydi? (`RUN_INDEX.md`)
- Engine genelinde tespit edilen, doğrulanmış ve çözülmesi gereken hangi somut problemler var? (`ISSUES.md`)
- Gerçek kullanımlarda hangi MINOR/LOW sapmalar gözleniyor, hangileri tekrar ediyor ve hangileri hardening adayına dönüşüyor? (`ENGINE_HARDENING_LOG.md`)
- Product Engine’i gelecekte daha sade, hızlı, güvenilir ve otomatik hale getirebilecek hangi geliştirme fikirleri bulunuyor? (`IMPROVEMENTS.md`)
- Run seviyesindeki operasyonel izler ile motor seviyesindeki kalıcı hafıza birbirinden nasıl ayrılır?

---

## 2. Katmanlar Arası Mülkiyet ve Sorumluluk Ayrımı

```text
runs/
→ Belirli bir execution sırasında ne oldu?

logs/
→ Bu execution'lardan ve engine değişikliklerinden kalıcı olarak ne öğrendik?
```

### `logs/` Katmanının Sahip Olmadığı Alanlar
`logs/` aşağıdaki içeriklerin ana sahibi değildir ve bunları kopyalayamaz:
- Tek bir run’ın ayrıntılı kronolojik kaydı (`RUN_LOG.md`)
- Input snapshot, package selection, source register, run assumptions/conflicts
- `working-output/` geçici üretim yüzeyi
- Final proje dokümanlarının kendisi (`outputs/`)
- Projeye özel ürün/mimari/teknik kararların tamamı
- Template/ref içeriklerinin kopyaları
- Private chain-of-thought

Hardening kayıtları kanıt için kısa repo-relative örnek ve ilgili run/output referansı taşıyabilir; run logunu yeniden üretmez.

---

## 3. Kanonik Klasör Yapısı

`logs/` katmanı top-level seviyede yalnızca aşağıdaki **6 canonical dosyadan** oluşur:

```text
logs/
├── README.md
├── ENGINE_CHANGELOG.md
├── RUN_INDEX.md
├── ISSUES.md
├── ENGINE_HARDENING_LOG.md
└── IMPROVEMENTS.md
```

### Klasör Yapılandırma Kuralları
1. Yukarıdaki canonical set dışında yeni top-level log dosyaları (`RELEASE_NOTES.md`, `METRICS.md`, `LESSONS.md`, `MEMORY.md`, `DAILY_LOG.md` vb.) oluşturulamaz.
2. Canonical log belgeleri reusable format ve açık ownership boundary taşır.
3. Fake run, fake version, geriye dönük uydurma changelog veya gözlem üretilemez.
4. `ENGINE_HARDENING_LOG.md` normal project run agent'ının zorunlu boot/read order parçası değildir; engine maintenance/review hafızasıdır.

---

## 4. Kanonik Belgelerin Sorumlulukları

### 4.1. `README.md`
- **Soru:** `logs/` katmanı nasıl kullanılır?
- **Görev:** Dosya sahipliklerini, update/protection kurallarını ve katman sınırını tanımlar.

### 4.2. `ENGINE_CHANGELOG.md`
- **Soru:** Product Engine'in kendisinde hangi kalıcı değişiklikler yapıldı?
- **Görev:** Engine/contracts/packages/templates/lifecycle/validation davranışlarında gerçekten uygulanmış kalıcı değişikliklerin geçmişidir.
- Stable Change ID: `PE-CHANGE-<NNN>`.

### 4.3. `RUN_INDEX.md`
- **Soru:** Hangi run'lar gerçekleşti ve sonuçları neydi?
- **Görev:** Tüm run'ların hızlı taranabilir secondary index'idir. Primary authority ilgili run manifestidir.

### 4.4. `ISSUES.md`
- **Soru:** Çözülmesi gereken hangi doğrulanmış sistemsel defect/bug var?
- **Görev:** Tekrar üretilebilir veya teknik olarak doğrulanabilir, sistem kalitesini/tutarlılığını etkileyen kusurların yaşam döngüsünü izler.

### 4.5. `ENGINE_HARDENING_LOG.md`
- **Soru:** Gerçek kullanımlarda hangi düşük etkili sapmalar görülüyor ve hangileri tekrar eden pattern'e dönüşüyor?
- **Görev:** Proje üretimini tek başına durdurmayan `Minor | Low` gözlemleri tarih, occurrence, evidence ve status ile izler.
- **Runtime Boundary:** Project generation agent'ı bu dosyayı her run'da okumak veya güncellemek zorunda değildir. Engine maintainer/review agent gerçek run/output incelemesi sonrasında günceller.
- **Promotion:** BLOCKER/MAJOR etkisi, sistemik contract violation veya tekrar eden gerçek defect görüldüğünde konu `ISSUES.md`'ye taşınır. Enhancement niteliğine dönüşürse `IMPROVEMENTS.md`'ye taşınır.

Canonical hardening status vocabulary:

```text
WATCH → REPEATED → FIX CANDIDATE → PROMOTED | CLOSED
```

Tekil minor gözlem otomatik fix zorunluluğu doğurmaz.

### 4.6. `IMPROVEMENTS.md`
- **Soru:** Engine gelecekte nasıl daha iyi, sade veya otomatik hale getirilebilir?
- **Görev:** Mevcut sistem doğru çalışırken değerlendirilebilecek enhancement backlog'udur.

---

## 5. Hardening / Issue / Improvement Ayrımı

```text
HARDENING OBSERVATION
→ Düşük etkili gerçek kullanım sapması.
→ Proje üretimini durdurmaz.
→ Tekrar sayısı ve pattern izlenir.

ISSUE
→ Mevcut engine behavior sözleşmeyi karşılamıyor.
→ Doğrulanmış defect/bug ve çözüm yaşam döngüsü gerekir.

IMPROVEMENT
→ Sistem doğru çalışıyor; yeni ergonomi/otomasyon/performans fırsatı var.
```

Promotion kuralı:

```text
Minor/Low ilk gözlem → ENGINE_HARDENING_LOG (WATCH)
Aynı pattern tekrar → occurrence + REPEATED
Tekrar + anlamlı etki → FIX CANDIDATE
Doğrulanmış sistemsel defect → ISSUES.md
Yeni enhancement fikri → IMPROVEMENTS.md
Uygulanmış kalıcı değişiklik → ENGINE_CHANGELOG.md
```

Aynı kök neden farklı dosyalarda duplicate kayıt olarak çoğaltılmaz; gerektiğinde ID/reference üzerinden bağlanır.

---

## 6. Tarihsel Kayıt Koruması

1. **Sessiz silme yoktur.** Resolved issues, implemented improvements veya closed/promoted hardening kayıtları geçmişten kaldırılmaz.
2. Hardening kaydında aynı pattern tekrar ettiğinde yeni kayıt açmak yerine mevcut kaydın `Last Seen`, `Occurrence` ve evidence alanları güncellenir.
3. Bir hardening gözlemi `ISSUES.md` veya `IMPROVEMENTS.md`'ye promote edilirse `Promoted To` alanı doldurulur ve hardening kaydı tarihsel iz olarak korunur.
4. Bir issue yalnız kendi resolved gate şartları karşılandığında `Resolved` olabilir.

---

## 7. Güncelleme Prosedürü

```text
Kalıcı engine değişikliği yapıldı
→ changelog-worthiness değerlendir
→ gerekliyse ENGINE_CHANGELOG.md

Run durumu değişti/sonlandı
→ RUN_INDEX.md

Doğrulanmış sistemsel defect bulundu
→ ISSUES.md

Gerçek kullanımda düşük etkili sapma bulundu
→ ENGINE_HARDENING_LOG.md içinde mevcut pattern'i ara
→ varsa occurrence/evidence güncelle
→ yoksa WATCH kaydı aç
→ proje üretimini yalnız Minor/Low olduğu için durdurma

Kalıcı enhancement fikri netleşti
→ IMPROVEMENTS.md
```

Hardening log update'i project runtime'ın zorunlu adımı değildir; review/maintenance aşamasında yapılır.

---

## 8. Güvenlik, Taşınabilirlik ve Non-Functional Kurallar

1. Private chain-of-thought loglanamaz.
2. Secret, credential, token veya private key yazılamaz.
3. Referanslar repo-relative olmalıdır; `file:///`, `C:\\Users\\...`, `/home/...` gibi machine-specific path kullanılmaz.
4. Şema örneklerinde gerçek müşteri/proje isimleri kullanılmaz; ancak gerçek hardening evidence kaydı, gözlemin hangi gerçek run/output'ta görüldüğünü izlenebilirlik için repo-relative referansla belirtebilir.
5. Log mimarisi model bağımsızdır; belirli bir LLM sağlayıcısına özel davranış sözleşmesi oluşturmaz.
6. Hardening log, normal generation agent'ına ek runtime yük veya yeni mandatory checkpoint üretmez.
