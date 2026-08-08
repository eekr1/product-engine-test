# Pending Inputs (`inputs/pending/`)

## 1. Amacı ve Tanımı

`inputs/pending/` klasörü;
- henüz kullanıcı tarafından açıkça onaylanmamış,
- zorunlu alanlarında eksiklik barındırabilen,
- netleştirme (clarification) veya soru bekleyen,
- kaynaklar arası çelişki (conflict) içeren,
- normalization (yapılandırma) aşamasında olan

proje girdi kayıtlarının çalışma alanıdır.

> [!WARNING]
> **Generation Runs Engeli:**
> `inputs/pending/` altındaki hiçbir dosya Product Engine üretim run'ı (`runs/`) başlatmak için **kullanılamaz**.
> Product Engine run'ları yalnızca `inputs/approved/` altındaki onaylı girdiler üzerinden başlatılabilir.

---

## 2. Tek Canonical Klasör ve Dosya Yapısı

V0 için pending alanında projenin tek ve canonical fiziksel yolu şudur:

```text
inputs/pending/<project-slug>/
├── PROJECT_INPUT.md
├── sources/          [opsiyonel - ham belgeler, referanslar]
└── attachments/      [opsiyonel - ekran görüntüleri, şemalar]
```

*(Not: Alternatif flat dosya veya `history/` gibi ikincil yollar kullanılmaz; tek fiziksel standart yukarıdaki klasör yapısıdır.)*

### Tek Aktif Pending Revision Kuralı
Aynı `project_slug` için V0'da yalnızca **tek bir aktif pending revision** bulunabilir.
- Yeni bir pending revizyonu başlatıldığında (örn: v2 adayı), `inputs/pending/<project-slug>/PROJECT_INPUT.md` üzerindeki aday veriler güncellenir ve metadata'da hedef aday sürüm belirtilir (örn: `input_version: "2"`).
- Terk edilen veya iptal edilen eski pending çalışmaları için karmaşık versiyon geçmişi tutulmaz; bilinçli revizyonda pending dosya güncellenir.

---

## 3. Pending Sürecinde Agent Sorumlulukları

1. **Raw Brief Saklama:** Kullanıcıdan gelen serbest anlatım `PROJECT_INPUT.md` içindeki `## Original Brief` bölümünde aynen korunur.
2. **Normalization:** Serbest anlatım `engine/PROJECT_INTAKE.md` sözleşmesine uygun biçimde kategorize edilir (`project_type`, `delivery_profile`, `scope`, vb.).
3. **Eksik Alan Tespiti:** Zorunlu intake alanları (`MUST`) kontrol edilir. Eksik varsa kullanıcıya netleştirme soruları hazırlanır.
4. **Çelişki Tespiti:** Bilgiler arası çelişki varsa `Conflicts` bölümüne yazılır ve `engine/CONFLICT_RESOLUTION.md` kuralları uyarınca çözülmesi sağlanır.
5. **Varsayım İşaretleme:** `engine/ASSUMPTION_RULES.md` uyarınca yapılan kritik olmayan varsayımlar `Assumptions` bölümünde açıkça listelenir.
6. **Source Tracking:** `source_count` alanına kaydedilen toplam kaynak sayısı yazılır.
7. **Onay Sunumu:** Hazırlanan `PROJECT_INPUT.md` kullanıcıya sunulur ve açık onay (**Explicit User Approval**) talep edilir.

---

## 4. Pending → Approved Geçiş Kuralları

Bir pending girdinin `approved` klasörüne taşınabilmesi için şu iki şart aynı anda sağlanmalıdır:

1. **Teknik ve İçerik Doğrulaması:** Tüm zorunlu alanların dolu olması, `project_type` ve `delivery_profile` canonical değerlerinin geçerli olması, `source_count` metadata'sının doğru olması, kritik çelişki bulunmaması ve secret/path ihlali olmaması.
2. **Explicit User Approval (Açık Kullanıcı Onayı):** Kullanıcının açıkça onay verdiğini belirten eylemi (Örn: *"Onaylıyorum"*, *"Approved"*, *"Devam edebiliriz"*).

Açık onay alınmadan `status: approved` yapılamaz ve dosya `inputs/approved/<project-slug>/v<N>/` klasörüne taşınamaz.
