# Product Engine — Logs Katmanı Kullanım Rehberi (`logs/`)

## 1. Amaç ve Kapsam

`logs/` katmanı, Product Engine’in zaman içerisindeki mimari değişikliklerini, sistemsel öğrenmelerini, tüm çalıştırmaların (`run`) üst seviye özet indeksini, doğrulanmış engine kusurlarını ve gelecek geliştirme fikirlerini saklayan **kalıcı motor seviyesi hafıza katmanıdır (persistent engine memory)**.

Bu katman şu temel sorulara deterministik cevaplar verir:
- Product Engine’in kendisinde hangi kalıcı değişiklikler yapıldı ve bu değişikliklerin gerekçesi neydi? (`ENGINE_CHANGELOG.md`)
- Şimdiye kadar hangi Product Engine run'ları gerçekleştirildi ve üst seviye sonuçları neydi? (`RUN_INDEX.md`)
- Engine genelinde tespit edilen, doğrulanmış ve çözülmesi gereken hangi somut problemler var? (`ISSUES.md`)
- Product Engine’i gelecekte daha sade, hızlı, güvenilir ve otomatik hale getirebilecek hangi geliştirme fikirleri bulunuyor? (`IMPROVEMENTS.md`)
- Run seviyesindeki operasyonel izler ile motor seviyesindeki kalıcı hafıza birbirinden nasıl ayrılır?

---

## 2. Katmanlar Arası Mülkiyet ve Sorumluluk Ayrımı (Ownership Boundaries)

Product Engine mimarisinde operasyonel run kayıtları ile kalıcı motor hafızası arasındaki sınır kesin kurallarla çizilmiştir:

```text
runs/
→ Belirli bir execution sırasında ne oldu? (Tek bir çalıştırmanın anlık operasyonel geçmişi)

logs/
→ Bu execution'lardan ve engine değişikliklerinden kalıcı olarak ne öğrendik? (Persistent engine-level memory)
```

### `logs/` Katmanının Sahip Olmadığı Kapsam Dışı Alanlar
`logs/` katmanı aşağıdaki operasyonel ve proje bazlı içeriklerin **ana sahibi değildir** ve bu içerikleri kopyalayamaz (`MUST NOT`):
- Tek bir run’ın kronolojik ayrıntılı olay kaydı (`RUN_LOG.md`)
- Onaylı girdi anlık görüntüleri (`INPUT_SNAPSHOT.md`)
- Paket ve profil seçim kararları (`PACKAGE_SELECTION.md`)
- Kullanılan kaynak kayıtları (`SOURCE_REGISTER.md`)
- Run bazlı varsayım (`ASSUMPTIONS.md`) ve çelişki (`CONFLICTS.md`) kayıtları
- Çalışma sırasındaki geçici çıktılar (`working-output/`)
- Müşteriye/kullanıcıya teslim edilen nihai proje dokümanları (`outputs/`)
- Projeye özel ürün, mimari veya teknik kararlar
- Şablon (`templates/`) içerikleri ve ref belgeleri
- Ajanın özel düşünce zinciri (private Chain-of-Thought)

---

## 3. Kanonik Klasör Yapısı (Canonical Structure)

`logs/` katmanı V0 mimarisinde strictly **yalnızca 5 kanonik dosyadan** oluşur:

```text
logs/
├── README.md              (Bu kullanım ve yönetim rehberi)
├── ENGINE_CHANGELOG.md    (Motor seviyesi kalıcı değişiklik geçmişi)
├── RUN_INDEX.md           (Tüm çalıştırmaların üst seviye ikincil indeksi)
├── ISSUES.md              (Doğrulanmış ve çözülecek sistemsel problemler)
└── IMPROVEMENTS.md        (Gelecek geliştirme fikirleri backlog'u)
```

### Klasör Yapılandırma Kuralları
1. V0 mimarisinde top-level seviyede yeni log dosyaları (`RELEASE_NOTES.md`, `METRICS.md`, `LESSONS.md`, `MEMORY.md`, `DAILY_LOG.md` vb.) **oluşturulamaz**.
2. Tüm dosyalar başlık seviyesinde bırakılmayacak; reusable format şablonları ve nötr başlangıç durumları (`neutral initial state`) içerecektir.
3. Gerçekleştirilmemiş sahte çalıştırma (`fake run`), sahte engine sürümü (`fake version`) veya geriye dönük uydurma changelog verisi **üretilemez**.

---

## 4. Kanonik Belgelerin Sorumlulukları ve Şemaları

### 4.1. `README.md`
- **Sahip Olduğu Soru:** `logs/` katmanı nasıl kullanılır ve yönetilir?
- **Görevi:** İlgili katmanın otorite ve kullanım rehberidir. Dosya sorumluluklarını, güncelleme prosedürlerini ve güvenlik/taşınabilirlik kurallarını tanımlar.

### 4.2. `ENGINE_CHANGELOG.md`
- **Sahip Olduğu Soru:** Product Engine'in kendisinde hangi kalıcı değişiklikler yapıldı?
- **Görevi:** Engine sözleşmeleri (`engine/`), paket kuralları (`packages/`), şablon standartları (`templates/`), girdi/run/çıktı yaşam döngüleri ve validation davranışlarında yapılan kalıcı değişikliklerin kaydıdır.
- **Kimlik ve Sürüm:** Stable Change ID: `PE-CHANGE-<NNN>`. Motor sürüm geçmişi otoritesidir. Kök `README.md` güncel aktif sürümü (`v0.1.0`) açıklar.

### 4.3. `RUN_INDEX.md`
- **Sahip Olduğu Soru:** Hangi Product Engine run'ları gerçekleştirildi ve genel sonuçları neydi?
- **Görevi:** Gerçekleştirilen tüm çalıştırmaların hızlı taranabilir ikincil indeksidir (`secondary index`). `runs/<location>/<run-id>/RUN_MANIFEST.md` birincil otoritedir.
- **Vocabulary:**
  - `Status`: `Created`, `Initialized`, `Running`, `Validation`, `Completed`, `Blocked`, `Paused`, `Resumed`, `Failed`, `Cancelled`, `Invalidated`.
  - `Validation`: `PASS`, `CONDITIONAL PASS`, `FAIL`, `N/A` (N/A = doğrulama henüz sonuçlanmamış nötr durum).
  - `Package`: Canonical package ID'leri (`corporate-website`, `demo-frontend`, `saas`, `existing-project`, `api-service`).

### 4.4. `ISSUES.md`
- **Sahip Olduğu Soru:** Product Engine'de çözülmesi gereken hangi somut ve doğrulanabilir problemler bulunuyor?
- **Görevi:** Gözlemlenmiş, tekrar üretilebilir ve doğrulanmış kusurların (`defect/bug`) yaşam döngüsünü takip eder.
- **Şema Ayrımı:** `Owner` (`unassigned` | `engine maintainer` | `review agent`), `Resolved in Version` (motor sürümü), `Related Change` (`PE-CHANGE-XXX`), `Validation Run` (`RUN-YYYYMMDD-XXX`).
- **Durumlar:** `Open`, `Investigating`, `Planned`, `In Progress`, `Blocked`, `Implemented — Awaiting Validation`, `Resolved`, `Won't Fix`, `Duplicate`, `Invalid`.

### 4.5. `IMPROVEMENTS.md`
- **Sahip Olduğu Soru:** Product Engine gelecekte nasıl daha iyi, sade ve otomatik hale getirilebilir?
- **Görevi:** Ergonomi, otomasyon, performans ve geliştirici deneyimini artıracak gelecek fikirleri backlog'udur (`backlog candidate`).
- **Şema Ayrımı:** `Related Issues` (çoğul), `Implemented in Version` (motor sürümü), `Related Change` (`PE-CHANGE-XXX`), `Validation Run` (`RUN-YYYYMMDD-XXX`).

---

## 5. Issue ile Improvement Ayrımı

`logs/` katmanında hatayla geliştirme fikrinin birbirine karışmaması için şu ayrım kesinlikle uygulanır:

```text
ISSUE (Kusur / Defect)
→ Mevcut motor davranışında bozukluk, tutarsızlık veya sözleşme ihlali var. Sistem beklenen sözleşmeyi karşılamıyor.

IMPROVEMENT (Geliştirme / Enhancement Candidate)
→ Sistem mevcut haliyle doğru çalışıyor; ancak gelecekte daha hızlı, daha otomatik veya daha sade hale getirilebilir.
```

Bir sorunun çözümü yeni bir iyileştirme fikri doğurabilir. Bu durumda iki dosyadaki kayıtlar tam metin tekrarı yapılmaksızın kimlikleri üzerinden birbirine referans verir (`ISSUE-001 ↔ IMPROVEMENT-002`).

---

## 6. Tarihsel Kayıt Koruması ve Ekleme Kuralları (Append-Oriented Policy)

1. **Sessiz Silme Yasağı:** Çözülen sorunlar (`Resolved ISSUES`) veya uygulanan iyileştirmeler (`Implemented IMPROVEMENTS`) aktif dosyalardan kesinlikle silinemez (`MUST NOT`).
2. **Geçmiş İzlenebilirliği:** Çözülen bir issue veya uygulanan bir improvement kaydının durumu güncellenir; ilgili motor sürümü, `PE-CHANGE-<NNN>` kimliği ve `Validation Run` referans gösterilerek dondurulur.
3. **Resolved Kapısı:** Bir issue yalnızca düzeltme uygulandığında + dokümanlar güncellendiğinde + changelog kaydı oluşturulduğunda + doğrulama run'ı tamamlandığında `Resolved` yapılır. Doğrulama bekleniyorsa `Implemented — Awaiting Validation` status'ü kullanılır.
4. **Deduplication (Tekilleştirme):** Yeni bir issue veya improvement eklenmeden önce mevcut kayıtlar taranmalıdır. Aynı kök nedene sahip bir konu zaten varsa yeni ID oluşturulmaz; mevcut kayıt yeni kanıt ve çalışma referansıyla güncellenir.

---

## 7. Güncelleme Prosedürü (Update Procedure)

`logs/` katmanı aşağıdaki olaylarda sade ve kontrollü biçimde güncellenir:

```text
Engine seviyesinde kalıcı değişiklik yapıldı
→ Değişikliğin changelog-worthiness durumu değerlendirilir
→ Gerekliyse ENGINE_CHANGELOG.md güncellenir

Runtime çalışması durumu değişti veya sonlandı
→ RUN_INDEX.md üzerindeki özet satırı güncellenir

Doğrulanmış sistemsel engine hatası bulundu
→ ISSUES.md içinde yeni kayıt açılır veya mevcut kayıt güncellenir

Kalıcı geliştirme fikri netleşti veya onaylandı
→ IMPROVEMENTS.md backlog'una eklenir
```

---

## 8. Güvenlik, Taşınabilirlik ve Non-Functional Kurallar

1. **Private CoT Yasaktır:** Hiçbir log belgesinde ajanın gizli akıl yürütme (chain-of-thought) metinleri veya içsel düşünce süreçleri saklanamaz.
2. **Secret ve Credential Yasaktır:** Şifreler, API key'leri, token'lar, private key'ler veya özel kullanıcı verileri log dosyalarına yazılamaz.
3. **Makine Bağımsız Yollar (Repo-Relative Paths):** `file:///`, `C:\Users\...`, `/home/...` gibi ortama bağımlı yerel sistem yolları KESİNLİKLE YASAKTIR. Tüm referanslar repository köküne göre bağıl olmalıdır (Örn: `runs/completed/RUN-20260808-001/`).
4. **Gerçek Proje / Şirket Sızıntısı Yasaktır:** Log standartlarında gerçek şirket, müşteri veya proje isimleri kullanılamaz; generic örnekler (`example-project`, `RUN-20260101-001`) tercih edilir.
5. **Agent Tarafsızlığı (Model Independence):** Belirli bir LLM veya model ismi (`Gemini`, `Claude`, `GPT`, `Codex`) hardcode edilemez. Model bağımsız generic roller (`execution agent`, `review agent`) kullanılır.
