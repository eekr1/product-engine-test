# Product Engine — Archive Katmanı Kullanım ve Yönetim Rehberi (`archive/`)

> [!WARNING]
> **Aktif Sistem İzolasyonu Uyarısı**
> 
> Bu klasördeki (`archive/`) hiçbir içerik aktif Product Engine sözleşmesi, geçerli şablonu, paket kuralı veya güncel proje gerçeği değildir.
> 
> Ajanlar ve geliştiriciler, güncel üretim çalışmalarında `archive/` altındaki belgeleri varsayılan okuma sırasına (`read order`) dahil edemez, aktif kural olarak uygulayamaz ve paket/şablon seçiminde otorite sayamaz.
> 
> Bu klasör yalnızca açık tarihsel araştırma, geriye dönük denetim (`audit`), migration veya eski run bağlamını anlama gereksinimi varsa salt-okunur (`read-only`) referans olarak kullanılabilir.

---

## 1. Amaç ve Kapsam

`archive/` katmanı, Product Engine'in aktif üretim ve çalışma akışından kaldırılmış ancak tarihsel, teknik veya izlenebilirlik değeri taşıyan içeriklerinin saklandığı **tarihsel saklama ve aktif sistemden izolasyon katmanıdır**.

Bu katman şu temel sorulara deterministik cevaplar verir:
- Hangi engine sözleşmeleri ve belgeleri artık aktif değildir?
- Hangi şablon (`template`) sürümleri kullanımdan kaldırılmıştır (`deprecated`)?
- Hangi eski çalışmalara (`run`) ait operasyonel kayıtlar aktif dizinlerden tarihsel saklama alanına aktarılmıştır?
- Arşivlenmiş bir içeriğin yerine hangi güncel belge, şablon veya sözleşme geçmiştir?
- Eski run ve output referanslarının kırılması nasıl engellenir?
- Bir içerik hangi gerekçelerle arşivlenir, hangi durumlarda kalıcı olarak silinir?
- Arşivdeki içeriklerin aktif ajanlar tarafından yanlışlıkla güncel kural olarak kullanılması nasıl önlenir?

---

## 2. Kanonik Sınırlar ve Mülkiyet (Ownership Boundaries)

Product Engine mimarisinde aktif sistem ile tarihsel saklama katmanı arasındaki sınır kesin çizgilerle ayrılmıştır:

```text
Active System Folders (engine/, packages/, templates/, inputs/, runs/, outputs/, logs/, examples/)
→ Aktif, otoriter, güncel çalışma ve runtime sistemi (Current Authoritative / Runtime System)

archive/
→ Aktif kullanımdan kaldırılmış, izlenebilirlik için saklanan tarihsel materyal (Inactive Historical Material)
```

### 2.1. Archive Authoritative Değildir
`archive/` altındaki bir içerik:
- Aktif engine kuralı **değildir** (`engine/` yetkilidir),
- Aktif şablon **değildir** (`templates/` yetkilidir),
- Aktif paket tanımı **değildir** (`packages/` yetkilidir),
- Güncel proje gerçeği **değildir** (`inputs/` yetkilidir),
- Aktif çalıştırma kaynağı **değildir** (`runs/` yetkilidir),
- Güncel nihai çıktı **değildir** (`outputs/` yetkilidir),
- Aktif gösterim veya fixture **değildir** (`examples/` yetkilidir).

---

## 3. Ayrım İlkeleri: Archive ≠ Backup ≠ Trash ≠ Git History

`archive/` klasörünün doğru yönetilmesi için aşağıdaki 4 kavramsal ayrım zorunludur:

| Kavram | Tanım ve Sorumluluk Ayrımı |
| :--- | :--- |
| **Archive** | Aktif kullanımdan kaldırılmış, belirli bir tarihsel/audit değeri olan seçili içeriktir. Neden arşivlendiği, yerine ne geçtiği ve eski referansları açıkça belgelenir. |
| **Backup** | Sistem arızası veya veri kaybına karşı tüm repository/sistemin teknik yedeğidir. Archive bir backup sistemi değildir; yedekleme politikası altyapı/operasyon konusudur. |
| **Trash (Çöp Kutusu)** | Sahipsiz, ne olduğu bilinmeyen veya "nereye koyacağımızı bilemediğimiz" rastgele dosyaların atıldığı yer değildir. Belirsiz dosyalar archive'a koyulamaz. |
| **Git History** | Dosyaların eski versiyon revizyonlarını gösterir. Archive ise yalnızca revizyondan öte; tarihsel statü, yerine geçen belge bağlantısı, eski run bağımlılığı ve audit bağlamı gerektiğinde anlam kazanır. Her typo veya ufak düzenleme için archive dosyası oluşturulmaz. |

---

## 4. Kanonik V0 Klasör Yapısı (Canonical V0 Structure)

Product Engine V0 mimarisinde `archive/` katmanı strictly **yalnızca 4 kanonik dosyadan/dizinden** oluşur:

```text
archive/
├── README.md                     (Bu kullanım ve izolasyon rehberi)
├── deprecated-engine-docs/       (Authoritative olmayan eski engine belgeleri)
│   └── README.md
├── deprecated-templates/         (Aktif üretilmeyen eski şablonlar)
│   └── README.md
└── old-runs/                     (Tarihsel saklama alanına aktarılmış eski run'lar)
    └── README.md
```

### 4.1. V0 Yasaklı Kategori ve Dosya Listesi
V0 aşamasında aşağıdaki ek kategoriler ve merkezi indeks dosyaları **kesinlikle oluşturulamaz**:
- `deprecated-packages/` (V0'da oluşturulamaz)
- `deprecated-examples/` (V0'da oluşturulamaz)
- `superseded-outputs/` (V0'da KESİNLİKLE oluşturulamaz; tarihsel output sürümleri kendi `outputs/<category>/<project-slug>/versions/` dizininde kalır)
- `old-planning-specs/` (V0'da oluşturulamaz)
- `removed-structures/` (V0'da oluşturulamaz)
- `ARCHIVE_INDEX.md` (V0'da oluşturulamaz; kayıt sayısı büyüdüğünde gelecekte değerlendirilir)

---

## 5. Diğer Katmanlarla Uyumluluk Sözleşmeleri

### 5.1. Output Katmanı Uyumluluğu (`outputs/` Compatibility)
- Approved V0 output contract uyarınca historical version otoritesi `outputs/<category>/<project-slug>/versions/` dizinidir.
- Geçersiz kılınan veya eski sürüm çıktılar fiziksel olarak kendi `outputs/.../versions/` yapısında kalır.
- `archive/superseded-outputs/` adıyla klasör açılması veya çıktıların archive'a kopyalanması kesinlikle yasaktır.
- Aynı çıktı materyali hem `outputs/` hem `archive/` içinde mükerrer kopya olarak tutulamaz (`Single Physical Location`).

### 5.2. Runs Katmanı Uyumluluğu (`runs/` Compatibility)
- Current approved `runs/` sözleşmesinde operational locations: `runs/active/`, `runs/completed/`, `runs/failed/` alanlarıdır.
- V0 build sırasında aktif veya tamamlanmış mevcut run'lar archive'a kopyalanamaz veya taşınamaz.
- `old-runs/` klasörü yalnızca gelecekte açık bir arşivleme kararı alındığında kullanılır.

### 5.3. Examples Katmanı Uyumluluğu (`examples/` Compatibility)
- Deprecated veya invalid hale gelen örnek fixture'lar kendi `examples/` yapısı içerisinde `status: deprecated` veya `status: invalid` metadata'sı alarak kalır.
- Active example fixture'ları archive'a taşınamaz.

### 5.4. Logs Katmanı Uyumluluğu (`logs/` Compatibility)
- Archive, `logs/ENGINE_CHANGELOG.md` belgesinin yerine geçmez. Engine değişiklik tarihi log'larda tutulur.
- Bir belgenin arşivlenmesi motor seviyesinde bir davranış değişikliği doğuruyorsa changelog kaydı açılır; ancak sırf archive dosyası eklendi diye otomatik changelog yazılmaz.

### 5.5. Prompt Dosyaları (`PROMPT_XX_*.md`)
- Kök dizindeki `PROMPT_XX_*.md` dosyaları build orchestration artifact'larıdır. Sırf tamamlanmış prompt oldukları için archive'a taşınamaz.

---

## 6. Arşivleme Kriterleri vs Kalıcı Silme Kriterleri

### 6.1. Arşivleme Kriterleri (Archiving Criteria)
Bir içeriğin archive'a alınması için aşağıdaki gerekçelerden **en az birinin** doğrulanmış olması gerekir:
- Eski bir run (`RUN_MANIFEST` / `SOURCE_REGISTER`) bu içeriğe referans veriyorsa,
- Önemli bir tarihsel karar veya mimari değişim bağlamı taşıyorsa,
- Geçiş (`migration`) veya geriye dönük karşılaştırma için gerekliyse,
- Geriye dönük denetim (`audit`) değeri varsa,
- Değiştirilme gerekçesini ve yerine geçen sistemi belgeliyorsa.

### 6.2. Kalıcı Silme Kriterleri (Permanent Deletion Criteria)
Bir dosya yalnızca aşağıdaki şartlardan birini sağlıyorsa kalıcı olarak silinebilir (`permanent delete`):
- Yanlışlıkla oluşturulmuş ve hiçbir içerik taşımıyorsa,
- Tamamen boşsa,
- Birebir gereksiz kopya (`exact duplicate`) ise,
- Hiçbir run, output veya changelog tarafından referans edilmiyorsa ve tarihsel değeri yoksa,
- Güvenlik politikalarınca saklanması yasaklanmış secret veya hassas veri içeriyorsa.

*Sessiz Silme Yasağı: Şüpheli veya emin olunmayan içerik sessizce silinemez.*

---

## 7. Standart Arşiv Nedenleri (Archive Reasons Vocabulary)

Metadata içinde kullanılabilecek kanonik arşiv nedenleri:
- **`Deprecated`**: Artık kullanımı önerilmiyor ancak geriye dönük referansı var.
- **`Superseded`**: Daha yeni bir sözleşme, şablon veya belge tarafından değiştirildi.
- **`Invalidated`**: Hata veya çelişki nedeniyle kullanımı durduruldu.
- **`Historical`**: Geçmiş çalışma veya karar kaydı olarak donduruldu.
- **`Replaced`**: Başka bir yapı tarafından doğrudan ikame edildi.
- **`Legacy`**: Eski bir Product Engine major sürümüne ait.

---

## 8. Archive Metadata Standardı (YAML Frontmatter)

V0 mimarisinde arşivlenen her Markdown belgesi kendi dosyasının en üstünde **YAML frontmatter** metadata bloğu taşır.

> [!NOTE]
> Ayrı bir `ARCHIVE_METADATA.md` dosyası veya klasör seviyesinde merkezi manifest V0'da kullanılmaz.

### 8.1. Zorunlu Metadata Alanları (Required Fields)
```yaml
---
archive_id: ARC-ENGINE-001
status: deprecated
archive_reason: Yeni sözleşmeyle değiştirildi.
archived_at: 2026-08-10
replacement: engine/NEW_CONTRACT.md
---
```

### 8.2. Kapsamlı Metadata Bloğu Format Şablonu (Örnek Format)
```yaml
---
archive_id: ARC-TEMPLATE-001
content_type: template
original_path: templates/ai/OLD_TEMPLATE.md
archived_path: archive/deprecated-templates/OLD_TEMPLATE.md
original_version: not_assigned
status: deprecated
archive_reason: Yeni metadata ve placeholder standardı nedeniyle arşivlendi.
archived_at: 2026-08-10
archived_by: execution-agent
replacement: templates/ai/NEW_TEMPLATE.md
related_runs: []
related_outputs: []
notes: "Eski run uyumluluğu için tutuluyor."
---
```

*(Not: Yukarıdaki metadata örnekleri yalnızca biçim gösterimidir. Yapı kurulumu sırasında sahte arşiv kaydı üretilmemiştir).*

### 8.3. Archive ID Standardı
- Format: `ARC-<TYPE>-<NNN>` (Örn: `ARC-ENGINE-001`, `ARC-TEMPLATE-001`, `ARC-RUN-001`).
- Değişmezlik: Atanan Archive ID kararlıdır ve değiştirilemez.

### 8.4. Status vs Archive Reason Ayrımı
- `status`: Arşivlenmiş içeriğin mevcut durumudur (Örn: `deprecated`, `superseded`, `invalidated`).
- `archive_reason`: İçeriğin neden arşive alındığının açıklayıcı gerekçesidir.

---

## 9. Arşivleme Süreci Prosedürü (Archive Move Procedure)

Gelecekte bir içerik arşivlenirken aşağıdaki 11 adımlı kanonik süreç sırasıyla uygulanır:

```text
1. Bağımlılık ve Referans Kontrolü (Run manifest, source register, outputs, changelog taranır)
2. Arşivleme Nedeni Belirleme (Canonical archive_reason seçilir)
3. Yerine Geçen İçerik Doğrulaması (Replacement path teyit edilir)
4. Archive Hedef Konumu Seçimi (deprecated-engine-docs, deprecated-templates veya old-runs)
5. Metadata Hazırlığı (YAML frontmatter eksiksiz yazılır)
6. Dosya Taşıma (İçerik archive klasörüne aktarılır)
7. Referans Güncellemeleri (Kırık link oluşmaması için bağımlılıklar güncellenir)
8. Changelog Kaydı (Gerekiyorsa logs/ENGINE_CHANGELOG.md yazılır)
9. İndeks Güncellemeleri (İlgili run/output indeksleri güncellenir)
10. Aktif Okuma Akışından Çıkarma (Engine read order ve package seçiminden kaldırılır)
11. Referans ve İzolasyon Doğrulaması (Kırık link veya aktif sızıntı olmadığı doğrulanır)
```

---

## 10. Yerine Geçen İçerik ve Yönlendirme Dosyaları (Redirect Files)

- Bir içerik başka bir belge ile değiştirildiyse arşivlenen belgedeki `replacement` alanı yeni yola işaret eder.
- Eski yola çok sayıda harici/aktif referans varsa, eski konumda kısa bir yönlendirme/tombstone dosyası bırakılabilir:
  ```markdown
  # Deprecated Document

  Bu belge `archive/deprecated-engine-docs/OLD_DOC.md` konumuna arşivlenmiştir.
  Yerine geçen güncel belge: `engine/NEW_DOC.md`.
  ```
- Her arşivlemede yönlendirme dosyası bırakmak zorunlu değildir; gereksiz wrapper dosyalar oluşturulmaz.

---

## 11. Arşivden Geri Alma Semantiği (Restore Semantics)

Archived content **doğrudan aktif konuma kopyalanarak güncel kural/şablon yapılamaz**.

Restore Akışı:
1. Geri alma gerekçesi tanımlanır.
2. Güncel engine sözleşmeleriyle uyumu incelenir.
3. Gerekliyse yeni bir aktif sürüm türetilir.
4. Validation süreçleri çalıştırılır.
5. `logs/ENGINE_CHANGELOG.md` kaydı açılır.
6. Bağlı package ve template tanımları güncellenir.

*Restore işlemi eski dosyanın olduğu gibi tekrar aktif truth olması anlamına gelmez; eski dosyadan yeni aktif sürüm türetilmelidir.*

---

## 12. Güvenlik, Gizlilik ve İnsan Hakları Kuralları

1. **Secret ve Credential Yasaktır:** Archive kesinlikle API key'leri, şifreler, private key'ler, token'lar veya DB parolaları saklayamaz. Neden arşivlendiğine bakılmaksızın secret içeren dosyalar silinmeli veya redact edilmelidir.
2. **Kullanıcı Verisi / PII Yasaktır:** Gerçek müşteri, kullanıcı veya kişisel veriler "tarihsel saklama" bahanesiyle archive'da tutulamaz.
3. **Private CoT Yasaktır:** Ajanların gizli akıl yürütme (chain-of-thought), taslak düşünce notları veya scratchpad metinleri archive'a koyulamaz. Yalnızca kararlar, gerekçeler ve audit kanıtları saklanabilir.
4. **Yerel Yol Yasaktır (Machine-Local Path Ban):** `file:///`, `C:\Users\...`, `/home/...` gibi makineye özel yollar kullanılamaz. Repo-relative yollar zorunludur.

---

## 13. Arşiv Temizliği ve Saklama Politikası (Retention & Cleanup)

Archive sınırsız büyüyen bir klasör olmamalıdır. Belirli aralıklarda şu kontroller yapılır:
- Birebir mükerrer kopya var mı?
- Metadata'sız dosya var mı?
- `replacement` bağlantısı kırık mı?
- Hiçbir tarihsel/audit değeri kalmamış dosya var mı?
- Yanlışlıkla saklanmış secret veya PII var mı?
- Hâlâ aktif bir package tarafından seçilen deprecated şablon var mı?

---

## 14. Model Bağımsızlığı İlkesi (Model Neutrality)

Bu rehber ve archive kuralları belirli bir AI modeline (`Claude`, `Gemini`, `GPT`) veya ortama bağımlı değildir. Model-bağımsız jenerik ifadeler ve standart Markdown sözleşmeleri kullanılır.
