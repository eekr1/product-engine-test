# Product Engine — Engine Issues (`logs/ISSUES.md`)

## 1. Amaç ve Kapsam

Bu belge, Product Engine’in çekirdek motor yapısında, paket kurallarında, şablonlarında veya doğrulama süreçlerinde tespit edilen, **doğrulanmış ve çözülmesi gereken sistemsel kusurların (defect/bug) yaşam döngüsü takip merkezidir**.

### Issue Kavramı (Defect / Bug)
Bir durumun `ISSUES.md` içinde yer alabilmesi için:
- Gözlemlenmiş ve kanıtlanmış,
- Tekrar üretilebilir veya teknik olarak doğrulanabilir,
- Sistem kalitesini, tutarlılığını veya kullanılabilirliğini olumsuz etkileyen,
- Mevcut motor sözleşmelerine göre bir kusur (`defect`) niteliğinde olması zorunludur.

---

## 2. Issue ≠ Improvement Ayrımı

`ISSUES.md` ile `IMPROVEMENTS.md` arasındaki mülkiyet sınırı kesin kurallarla korunur:

```text
ISSUE (Kusur / Defect)
→ Mevcut motor davranışında bozukluk, tutarsızlık veya sözleşme ihlali var.
  Örnek: "Şablon talimatları nihai çıktı içerisine sızıyor."

IMPROVEMENT (Geliştirme / Enhancement)
→ Mevcut sistem doğru çalışıyor; ancak gelecekte daha performanslı veya otomatik hale getirilebilir.
  Örnek: "Placeholder doğrulamasını otomatik hale getiren yeni bir CLI modülü eklemek."
```

---

## 3. Kanonik Issue Yapısı ve Şeması (Entry Schema)

Her issue kaydı aşağıdaki dondurulmuş kanonik şemaya göre açılır ve güncellenir:

```markdown
## ISSUE-<NNN> — <Kısa ve Net Başlık>

- **Status:** <Open | Investigating | Planned | In Progress | Blocked | Implemented — Awaiting Validation | Resolved | Won't Fix | Duplicate | Invalid>
- **Severity:** <Critical | Major | Minor | Low>
- **Category:** <Engine Rules | Packages | Templates | Inputs | Runs | Outputs | Validation>
- **Owner:** <unassigned | engine maintainer | review agent>
- **First Seen:** <YYYY-MM-DD>
- **Last Seen:** <YYYY-MM-DD>
- **Related Runs:** <runs/location/run-id/ | None>
- **Resolved in Version:** <not_assigned | vX.Y>
- **Related Change:** <PE-CHANGE-XXX | Pending>
- **Validation Run:** <RUN-YYYYMMDD-XXX | None>

### Description
<Problemin detaylı açıklaması ve gözlemlenen hatalı davranış>

### Impact
<Hatanın motor çıktısına, kalitesine veya güvenilirliğine etkisi>

### Reproduction / Evidence
<Hatayı kanıtlayan kısa gözlem veya bağıl dosya referansı (Log kopyası eklenmez)>

### Proposed Resolution
<Önerilen veya uygulanan çözüm yaklaşımı>
```

---

## 4. Durum ve Önem Seviyeleri (Status & Severity Vocabulary)

### Durumlar (Status Vocabulary)
- **`Open`**: Kusur tespit edildi, henüz incelenmeye alınmadı.
- **`Investigating`**: Hatanın kök nedeni araştırılıyor.
- **`Planned`**: Çözüm planlandı, bir sonraki değişikliğe dahil edilecek.
- **`In Progress`**: Düzeltme aktif olarak uygulanıyor.
- **`Blocked`**: Düzeltme başka bir bağımlılık veya karar nedeniyle durdu.
- **`Implemented — Awaiting Validation`**: Düzeltme uygulandı ve dokümanlar güncellendi; ancak henüz doğrulama çalışması (`validation run`) tamamlanmadı.
- **`Resolved`**: Düzeltme uygulandı, ilgili changelog girdisi (`PE-CHANGE-XXX`) oluşturuldu, doğrulama çalışmasıyla hatanın tekrar etmediği kesinleşti.
- **`Won't Fix`**: Düzeltilmemesine karar verilen bilinen durum.
- **`Duplicate`**: Başka bir issue kaydının mükerreri olan dosya.
- **`Invalid`**: Hata olmadığı anlaşılan geçersiz bildirim.

### Önem Seviyeleri (Severity Vocabulary)
- **`Critical`**: Engine'in güvenilir çıktı üretmesini engeller (Örn: Başka projeden içerik sızıntısı, onaylı girdi ihlali).
- **`Major`**: Çıktı kalitesini veya kullanılabilirliğini ciddi biçimde etkiler (Örn: Şablon yer tutucularının çıktıya sızması).
- **`Minor`**: Kullanımı engellemeyen ancak düzeltilmesi gereken tutarsızlık.
- **`Low`**: Küçük biçimlendirme veya açıklama eksikliği.

---

## 5. Çözüm Kapısı ve Yaşam Döngüsü Kuralları (Resolved Gate & Deduplication)

### Resolved Kapısı Şartları (Resolved Gate)
Bir issue kaydı doğrudan `Resolved` durumuna geçirilemez. `Resolved` yapılabilmesi için aşağıdaki şartların **tamamı** sağlanmış olmalıdır:
1. Düzeltme uygulanmış olmalıdır (`fix implemented`).
2. İlgili motor belgeleri ve sözleşmeleri güncellenmiş olmalıdır (`relevant docs/contracts updated`).
3. Kalıcı changelog kaydı oluşturulmuş olmalıdır (`related changelog entry created — PE-CHANGE-XXX`).
4. Gerekli durumlarda doğrulama çalışması yürütülmüş olmalıdır (`validation run performed`).
5. Kusurun tekrar etmediği kanıtlanmış olmalıdır.

*Not: Düzeltme uygulandığı halde doğrulama çalışması henüz gerçekleştirilmediyse durum `Implemented — Awaiting Validation` olarak tutulur.*

### Tekilleştirme ve Saklama (Deduplication & Retention)
1. **Deduplication (Tekilleştirme):** Yeni bir kusur tespit edildiğinde önce `ISSUES.md` taranır. Aynı kök nedene sahip bir issue zaten varsa yeni ID açılmaz. Mevcut kaydın `Last Seen` tarihi ve `Related Runs` listesi güncellenir.
2. **Kayıt Silme Yasağı:** Çözülen (`Resolved`), reddedilen (`Won't Fix`) veya mükerrer (`Duplicate`) issue kayıtları dosyadan kesinlikle silinemez (`MUST NOT`).

---

## 6. Güncel Issue Durumu

```text
Open Issues                           : 0
Implemented — Awaiting Validation     : 1
Resolved Issues                       : 0
Total Recorded                        : 1
```

---

## ISSUE-001 — Demo frontend stack continuation readiness not enforced

- **Status:** Implemented — Awaiting Validation
- **Severity:** Major
- **Category:** Engine Rules | Packages | Templates | Validation
- **Owner:** engine maintainer
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Related Runs:** `runs/completed/RUN-20260815-001/`
- **Resolved in Version:** not_assigned
- **Related Change:** PE-CHANGE-007
- **Validation Run:** None

### Description
Engine, demo/prototype projelerde service/data-access boundary ve future API adapter ayrımını doğru kurmasına rağmen frontend stack/tooling kararının aynı codebase üzerinde gerçek ürüne devam etmeyi destekleyip desteklemediğini blocking biçimde değerlendirmiyordu. Trakya Teknik Makine satış demosunda bu boşluk dependency-free Vanilla HTML/CSS/JS baseline seçilmesine izin verdi.

### Impact
Çıktı çalışan ve backend adapter açısından integration-ready olmasına rağmen müşteri kabulü sonrası daha fazla page/component/state, CMS/API/auth veya build/deployment ihtiyacı geldiğinde gereksiz frontend migration/refactor maliyeti doğurabilecek bir foundation üretildi. Bu durum `Temporary scope ≠ throwaway architecture` amacının yalnız data-boundary tarafında uygulanıp stack/tooling evolution tarafında eksik kalmasına neden oldu.

### Reproduction / Evidence
- `outputs/demos/trakya-teknik-makine/latest/ai/TECH_CONTEXT.md` dependency-free Vanilla frontend seçti.
- `outputs/demos/trakya-teknik-makine/latest/waves/plans/WAVE_00.md` target structure'ı package manifest/dev-build tooling olmadan `index.html + src/` olarak dondurdu.
- Approved/demo context gerçek satış demosu olup kabul sonrası aynı proje üzerinde devam etme çalışma modeline uygundur.

### Proposed Resolution
`engine/PLANNING_PROFILES.md` içinde continuation-ready frontend stack selection invariant'ı authoritative hale getirildi; `packages/DEMO_FRONTEND_PACKAGE.md` satış demolarında package-managed/component-ready modern baseline preference ve zero-build justification gate'i ekledi; `templates/ai/TECH_CONTEXT_TEMPLATE.md` stack continuation rationale ile repeatable dev/build/preview workflow evidence'ını zorunlu hale getirdi. Bir sonraki gerçek generation run'ında bu davranış doğrulanana kadar issue `Implemented — Awaiting Validation` kalır.
