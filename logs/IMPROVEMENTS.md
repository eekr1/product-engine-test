# Product Engine — Engine Improvements (`logs/IMPROVEMENTS.md`)

## 1. Amaç ve Kapsam

Bu belge, Product Engine’in gelecekte daha sade, daha hızlı, daha otomatik, daha güvenilir ve daha ölçeklenebilir hale getirilmesini sağlayacak **iyileştirme fikirlerinin ve geliştirme taleplerinin backlog merkezidir**.

### Improvement Kavramı (Enhancement Candidate)
Bir fikir veya önerinin `IMPROVEMENTS.md` içinde yer alabilmesi için:
- Mevcut sistemdeki bir hatanın kaydı olmak zorunda değildir.
- Ergonomi, otomasyon, netlik, performans veya geliştirici deneyimini (DX) artırmayı hedeflemelidir.
- Motor seviyesinde kalıcı değere sahip olmalıdır.

*Not: Improvement kaydı açılması o fikrin kesinlikle uygulanacağı (`commitment`) anlamına gelmez; bir aday değerlendirme listesidir.*

---

## 2. Kanonik Improvement Yapısı ve Şeması (Entry Schema)

Her iyileştirme kaydı aşağıdaki dondurulmuş kanonik şemaya göre eklenir ve güncellenir:

```markdown
## IMPROVEMENT-<NNN> — <Kısa ve Net Başlık>

- **Status:** <Idea | Backlog | Evaluating | Planned | In Progress | Implemented | Rejected | Deferred>
- **Priority:** <Critical | High | Medium | Low | Someday>
- **Category:** <Automation | Ergonomics | Validation | Packaging | DX | Performance>
- **Cost / Complexity:** <High | Medium | Low>
- **Dependencies:** <Gerekli önkoşullar veya None>
- **Related Issue:** <ISSUE-XXX | None>
- **Implemented in Version:** <PE-CHANGE-XXX | Pending>

### Summary
<Geliştirme fikrinin açık ve net tanımı>

### Expected Benefit
<Uygulandığında sisteme sağlayacağı somut fayda ve katma değer>

### Risks / Considerations
<Uygulama sırasında dikkat edilmesi gereken olası riskler veya yan etkiler>

### Suggested Next Step
<Fikrin ilerletilmesi için yapılması gereken sıradaki ilk somut adım>
```

---

## 3. Durum ve Öncelik Seviyeleri (Status & Priority Vocabulary)

### Durumlar (Status Vocabulary)
- **`Idea`**: Ham fikir aşamasında, detaylandırılmamış öneri.
- **`Backlog`**: Kabul edilmiş, önceliklendirilmeyi bekleyen backlog maddesi.
- **`Evaluating`**: Fizibilite ve etki analizi yapılıyor.
- **`Planned`**: Uygulama kararı alındı ve planlandı.
- **`In Progress`**: Aktif olarak geliştiriliyor.
- **`Implemented`**: Geliştirme tamamlandı, doğrulandı ve `PE-CHANGE-XXX` ile donduruldu.
- **`Rejected`**: Değerlendirme sonucu uygulanmamasına karar verilen fikir.
- **`Deferred`**: İleride tekrar değerlendirilmek üzere ertelenmiş fikir.

### Öncelik Seviyeleri (Priority Vocabulary)
- **`Critical`**: Motorun temel çalışma verimliliğini doğrudan katlayan hayati geliştirmeler.
- **`High`**: Manuel iş yükünü veya hata riskini ciddi oranda azaltan öncelikli maddeler.
- **`Medium`**: Kullanılabilirliği ve hızı artıran standart iyileştirmeler.
- **`Low`**: Küçük kolaylıklar veya biçimsel geliştirmeler.
- **`Someday`**: Uzun vadeli veya olası gelecekte bakılabilecek fikirler.

---

## 4. Yaşam Döngüsü ve Saklama Kuralları (Retention Policy)

1. **Uygulanan Fikirlerin Koruması:** Uygulanan bir iyileştirme (`Implemented IMPROVEMENTS`) aktif dosyadan kesinlikle silinemez (`MUST NOT`).
2. **Değişiklik Bağlantısı:** Bir iyileştirme tamamlandığında durumu `Implemented` yapılır; `Implemented in Version` alanına ilgili `PE-CHANGE-XXX` kimliği yazılır.
3. **Reddedilen Fikirlerin Koruması:** Reddedilen bir öneri (`Rejected`) neden reddedildiği gerekçesiyle birlikte saklanır. Böylece aynı fikrin ileride tekrar tekrar tartışılması engellenir.
4. **Not Çöplüğü Önleme İlkesi:** Kalıcı engine değeri taşımayan veya tek bir projeye özgü olan fikirler bu dosyaya eklenmez.

---

## 5. Güncel Improvement Durumu (Initial Neutral State)

```text
Open Backlog       : 0
In Progress        : 0
Implemented        : 0
Total Recorded     : 0
```

> [!NOTE]
> Henüz Product Engine backlog'una resmen kaydedilmiş ve dondurulmuş bir iyileştirme talebi (`engine improvement`) bulunmamaktadır.
>
> Sistem kullanımı sırasında onaylanan kalıcı bir geliştirme fikri doğduğunda kanonik şemaya uygun olarak `IMPROVEMENT-001` kimliği ile ilk kayıt açılacaktır. Rastgele veya uygulanabilirliği doğrulanmamış sahte backlog maddesi üretilmemiştir.
