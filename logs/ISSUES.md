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

- **Status:** <Open | Investigating | Planned | In Progress | Blocked | Resolved | Won't Fix | Duplicate | Invalid>
- **Severity:** <Critical | Major | Minor | Low>
- **Category:** <Engine Rules | Packages | Templates | Inputs | Runs | Outputs | Validation>
- **First Seen:** <YYYY-MM-DD>
- **Last Seen:** <YYYY-MM-DD>
- **Related Runs:** <runs/location/run-id/ | None>
- **Resolved in Version:** <PE-CHANGE-XXX | Pending>

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
- **`Resolved`**: Düzeltme uygulandı, doğrulandı ve ilgili `PE-CHANGE-XXX` ile donduruldu.
- **`Won't Fix`**: Düzeltilmemesine karar verilen bilinen durum.
- **`Duplicate`**: Başka bir issue kaydının mükerreri olan dosya.
- **`Invalid`**: Hata olmadığı anlaşılan geçersiz bildirim.

### Önem Seviyeleri (Severity Vocabulary)
- **`Critical`**: Engine'in güvenilir çıktı üretmesini engeller (Örn: Başka projeden içerik sızıntısı, onaylı girdi ihlali).
- **`Major`**: Çıktı kalitesini veya kullanılabilirliğini ciddi biçimde etkiler (Örn: Şablon yer tutucularının çıktıya sızması).
- **`Minor`**: Kullanımı engellemeyen ancak düzeltilmesi gereken tutarsızlık.
- **`Low`**: Küçük biçimlendirme veya açıklama eksikliği.

---

## 5. Yaşam Döngüsü ve Tekilleştirme Kuralları (Deduplication & Retention)

1. **Deduplication (Tekilleştirme):** Yeni bir kusur tespit edildiğinde önce `ISSUES.md` taranır. Aynı kök nedene sahip bir issue zaten varsa yeni ID açılmaz. Mevcut kaydın `Last Seen` tarihi ve `Related Runs` listesi güncellenir.
2. **Kayıt Silme Yasağı:** Çözülen (`Resolved`), reddedilen (`Won't Fix`) veya mükerrer (`Duplicate`) issue kayıtları dosyadan kesinlikle silinemez (`MUST NOT`).
3. **Kapatma Şartı:** Bir issue kaydı `Resolved` durumuna geçirildiğinde:
   - Uygulanan düzeltmenin özeti eklenmelidir.
   - İlgili changelog kaydı (`PE-CHANGE-XXX`) referans gösterilmelidir.
   - Düzeltmenin doğrulandığı sürüm veya run bilgisi kaydedilmelidir.

---

## 6. Güncel Issue Durumu (Initial Neutral State)

```text
Open Issues       : 0
In Progress       : 0
Resolved Issues   : 0
Total Recorded    : 0
```

> [!NOTE]
> Henüz Product Engine çekirdeğinde doğrulanmış ve kaydedilmiş açık bir sistemsel kusur (`engine issue`) bulunmamaktadır.
>
> Gerçek bir çalıştırma veya test sırasında doğrulanmış bir hataya rastlandığında kanonik şemaya uygun olarak `ISSUE-001` kimliği ile ilk kayıt açılacaktır. Sahte veya kanıtsız hata kaydı üretilmemiştir.
