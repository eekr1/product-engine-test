# Product Engine — Deprecated Engine Docs Katmanı (`archive/deprecated-engine-docs/`)

> [!WARNING]
> **Aktif Sistem İzolasyonu Uyarısı**
> 
> Bu klasördeki (`archive/deprecated-engine-docs/`) belgeler artık authoritative (bağlayıcı) olmayan eski engine sözleşmeleridir.
> 
> Bu belgeler:
> - `engine/README.md` içerisindeki **Zorunlu Okuma Sırasına (`read order`) KESİNLİKLE EKLENEMEZ**,
> - Ajanlar tarafından aktif runtime kuralı veya otorite olarak kullanılamaz,
> - Package veya template seçim yetkisi olarak değerlendirilemez.

---

## 1. Amaç ve Kapsam

`archive/deprecated-engine-docs/` klasörünün görevi, Product Engine'in gelişimi sırasında geçerliliğini yitirmiş, başka bir sözleşmeye devredilmiş veya mimari revizyon nedeniyle yürürlükten kaldırılmış eski motor belgelerini tarihsel izlenebilirlik amacıyla saklamaktır.

Bu klasör şu soruların yanıtını verir:
- Hangi engine sözleşmesi ne zaman yürürlükten kaldırıldı?
- Bu belgenin sorumluluğunu güncel engine yapısında hangi yeni sözleşme üstlendi?
- Eski bir çalıştırma (`run`) veya karar hangi engine kuralları altında gerçekleşmişti?

---

## 2. Giriş ve Hariç Tutma Kriterleri (Entry & Exclusion Criteria)

### 2.1. Giriş Kriterleri (Entry Criteria)
Bir motor belgesi yalnızca şu durumlarda buraya aktarılır:
- Görevi ve sorumluluğu başka bir engine sözleşmesine devredilmişse,
- Eski okuma sırası veya yetki mimarisine aitse ve geriye dönük audit değeri taşıyorsa,
- Yeni engine mimarisiyle doğrudan çelişip aktif `engine/` dizininden çıkarılması gerekiyorsa.

### 2.2. Hariç Tutma Kriterleri (Exclusion Criteria)
Aşağıdakiler kesinlikle bu klasöre konulamaz:
- Aktif `engine/` klasöründeki bağlayıcı motor sözleşmeleri,
- Şablonlar (`templates/`), paketler (`packages/`) veya operasyonel run belgeleri (`runs/`),
- Sahipsiz, taslak veya belirsiz çalışma dosyaları.

*Not: V0 build sırasında aktif `engine/` klasöründen hiçbir canlı belge buraya taşınmaz veya kopyalanmaz.*

---

## 3. İzolasyon Kuralları (Strict Read-Path Isolation)

Archived engine belgeleri:
1. `engine/README.md` içindeki active read order listesine eklenmez.
2. Ajanların varsayılan bağlamına (`default context`) dahil edilmez.
3. Bir çelişki durumunda güncel `engine/` belgelerine karşı üstünlük sağlayamaz.
4. Yalnızca geçmiş bir run'ın kararlarını veya eski bir mimari kararın gerekçesini incelerken okunur.

---

## 4. Metadata ve Yerine Geçen İçerik Standardı

Bu klasöre arşivlenen her Markdown belgesi kendi başında aşağıdaki YAML frontmatter metadata bloğunu taşımak zorundadır:

```yaml
---
archive_id: ARC-ENGINE-001
content_type: engine_doc
original_path: engine/OLD_CONTRACT.md
archived_path: archive/deprecated-engine-docs/OLD_CONTRACT.md
original_version: not_assigned
status: deprecated
archive_reason: Sorumluluğu yeni engine/DOCUMENT_CATALOG.md belgesine devredildi.
archived_at: 2026-08-10
archived_by: execution-agent
replacement: engine/DOCUMENT_CATALOG.md
related_runs: []
notes: ""
---
```

### 4.1. Adlandırma ve Format Kuralları
- Orijinal dosya adı mümkün olduğunca korunur.
- Yerine geçen güncel belge (`replacement`) açıkça belirtilmelidir.
- Orijinal motor sürümü biliniyorsa eklenir; bilinmiyorsa `not_assigned` nötr değeri kullanılır (sahte sürüm uydurulmaz).

---

## 5. Referans Koruma ve Restore Yaklaşımı

- **Eski Referanslar:** Arşivlenen belgenin adı veya konumu değiştiğinde eski run manifestleri veya changelog kayıtlarındaki bağlantıların kırılmaması için referans güncellemeleri yapılır.
- **Restore (Geri Alma):** Arşivlenmiş bir engine belgesi doğrudan `engine/` klasörüne kopyalanarak tekrar güncel kural yapılamaz. Restore gerekiyorsa güncel engine ilkelerine uygun yeni bir sözleşme revizyonu hazırlanmalı, validation yapılmalı ve `logs/ENGINE_CHANGELOG.md` kaydı açılmalıdır.

---

## 6. Mevcut Başlangıç Durumu (V0 Initial State)

Bu klasör V0 mimarisi itibarıyla sözleşmeye uygun, izolasyon kuralları tanımlanmış ancak henüz arşivlenmiş canlı engine belgesi bulunmayan nötr başlangıç durumundadır (`Empty Archive Is Valid`). Sahte veya yapay belge üretilmemiştir.
