# ARCHIVE_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `archive/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- archive kavramını,
- `archive/` klasörünün sistemdeki görevini,
- artık aktif kullanılmayan belgelerin nasıl saklanacağını,
- deprecated, superseded, invalidated ve historical içeriklerin nasıl ayrılacağını,
- arşivlenen içeriklerin eski run ve output bağlantılarını nasıl koruyacağını,
- arşivleme ile kalıcı silme arasındaki farkı,
- arşiv klasörünün gereksiz bir dosya deposuna dönüşmesini engelleyecek kuralları,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge gerçek bir arşiv kaydı değildir.

`planning/ARCHIVE_FOLDER_SPEC.md`, `archive/` klasöründeki gerçek yapıyı hazırlayan ajan için bağlayıcı bir inşa rehberidir.

---

# 2. Kaynak ve Üst Bağlam

`archive/` klasörü hazırlanırken aşağıdaki kaynaklar dikkate alınmalıdır:

1. `PRODUCT_ENGINE_BRAIN.md`
2. İlgili planning spec belgeleri
3. Tamamlanmış `engine/` sözleşmeleri
4. Tamamlanmış `templates/`, `packages/`, `runs/`, `outputs/`, `logs/` ve `examples/` yapıları
5. `logs/ENGINE_CHANGELOG.md`
6. Mevcut kök klasör ağacı

Archive sistemi, aktif Product Engine yapısını temiz tutarken geçmiş kararların, eski sürümlerin ve tarihsel bağlantıların kaybolmamasını sağlar.

---

# 3. Archive Kavramı

Archive, artık aktif üretim veya çalışma akışında kullanılmayan ancak tarihsel, teknik veya izlenebilirlik değeri bulunan içeriklerin saklandığı alandır.

Arşivlenen içerik:

- aktif kural olarak kullanılmaz,
- yeni run’larda varsayılan kaynak olarak okunmaz,
- güncel template veya package olarak seçilmez,
- geçmişten tamamen silinmez,
- neden arşivlendiği ve yerine ne geçtiği anlaşılabilir durumda tutulur.

```text
Archive
=
Aktif kullanımdan kaldırılmış içerik
+
Tarihsel bağlam
+
Kaynak bağlantılarının korunması
+
Güncel sistemden izolasyon

Archive bir çöp kutusu değildir.

------

# 4. `archive/` Klasörünün Görevi

`archive/` klasörü şu soruların sahibidir:

- Hangi engine belgeleri artık aktif değil?
- Hangi template sürümleri deprecated oldu?
- Hangi eski run’lar aktif dizinden çıkarıldı?
- Hangi output veya example sürümleri artık kullanılmıyor?
- Arşivlenen içeriğin yerine hangi yeni belge geçti?
- Eski run ve output referansları nasıl korunacak?
- Bir içerik neden arşivlendi?
- Arşivlenen içerik gerektiğinde nasıl bulunacak?
- Hangi içerikler arşivlenmek yerine tamamen silinmeli?
- Aktif ajanların arşiv belgelerini yanlışlıkla authoritative kaynak olarak kullanması nasıl engellenecek?

`archive/` klasörü Product Engine’in tarihsel saklama ve aktif sistemden izolasyon katmanıdır.

------

# 5. Kapsam Dışı

`archive/` klasörü aşağıdaki içeriklerin ana sahibi değildir:

- Aktif engine sözleşmeleri
- Aktif package ve template belgeleri
- Devam eden run’lar
- Güncel output sürümleri
- Açık issue ve improvement kayıtları
- Aktif examples
- Güncel changelog kayıtları
- Yedekleme sistemi
- Secret veya hassas veri saklama alanı
- Gereksiz dosya kopyaları
- Geçici çalışma taslakları
- Belirsiz ve sahipsiz dosyalar

Archive, “nereye koyacağımızı bilemediğimiz dosyaların” alanı olarak kullanılmamalıdır.

------

# 6. Klasör Yapısı

Başlangıç yapısı:

```text
archive/
├── README.md
├── deprecated-engine-docs/
├── deprecated-templates/
└── old-runs/
```

Sistem geliştikçe gerektiğinde şu klasörler önerilebilir:

```text
archive/
├── deprecated-packages/
├── deprecated-examples/
├── superseded-outputs/
├── old-planning-specs/
└── removed-structures/
```

Yeni archive kategorisi yalnızca:

- düzenli biçimde saklanacak bağımsız bir içerik türü varsa,
- mevcut klasörlerden biriyle karşılanamıyorsa,
- aktif sistemde karışıklık yaratıyorsa

eklenmelidir.

Onay alınmadan kök archive yapısı değiştirilmemelidir.

------

# 7. `README.md`

## Sahip Olduğu Soru

Archive sistemi nasıl kullanılır?

## İçermelidir

- `archive/` klasörünün amacı
- Arşivleme ile silme arasındaki fark
- Archive kategorilerinin görevleri
- Arşivleme kriterleri
- Metadata gereksinimleri
- Aktif sistemden izolasyon kuralları
- Yerine geçen belge bağlantıları
- Restore veya inceleme davranışı
- Arşiv temizliği ve saklama politikası
- İlgili changelog ve log bağlantıları

## İçermemelidir

- Bütün arşiv kayıtlarının ayrıntılı listesi
- Aktif engine kuralları
- Arşivlenmiş belgelerin uzun içerik özetleri
- Gerçek müşteri veya hassas bilgiler

------

# 8. Arşivleme ile Silme Arasındaki Fark

## Arşivleme

İçerik aktif kullanılmıyordur ancak aşağıdakilerden en az biri geçerlidir:

- Eski run’lar içeriğe referans veriyordur.
- Tarihsel karar değeri vardır.
- Yerine geçen sistemin neden oluşturulduğunu açıklar.
- Geriye dönük karşılaştırma için gereklidir.
- Önceki output veya engine davranışını anlamaya yardımcı olur.
- Gelecekte audit veya migration için kullanılabilir.

## Kalıcı Silme

İçerik:

- yanlışlıkla oluşturulmuşsa,
- tamamen boşsa,
- birebir gereksiz kopyaysa,
- hiçbir run veya output tarafından referans edilmiyorsa,
- tarihsel değer taşımıyorsa,
- secret veya saklanmaması gereken hassas bilgi içeriyorsa

kalıcı olarak silinebilir.

Emin olunmayan içerik sessizce silinmemelidir.

Önce bağımlılıkları kontrol edilmelidir.

------

# 9. Arşivleme Nedenleri

Bir içerik aşağıdaki nedenlerle arşivlenebilir:

```text
Deprecated
→ Artık önerilmiyor ancak eski sistemlerle bağlantısı var.

Superseded
→ Daha yeni bir sürüm tarafından değiştirilmiş.

Invalidated
→ Kritik hata nedeniyle kullanımdan kaldırılmış.

Historical
→ Geçmiş çalışma veya karar kaydı olarak saklanıyor.

Replaced
→ Başka belge veya yapı tarafından doğrudan değiştirilmiş.

Legacy
→ Eski Product Engine major sürümüne ait.
```

Arşiv nedeni metadata içerisinde açıkça belirtilmelidir.

------

# 10. Arşivlenebilecek İçerikler

## Engine Belgeleri

- Görevi başka sözleşmeye taşınan belgeler
- Eski otorite veya okuma sırasına ait belgeler
- Yeni engine yapısıyla uyumsuz eski sözleşmeler

## Template’ler

- Yeni sürüm tarafından tamamen değiştirilen template’ler
- Kullanımdan kaldırılan belge türleri
- Eski placeholder standardına ait template’ler

## Package Belgeleri

- Artık desteklenmeyen package’lar
- Başka package ile birleştirilen tanımlar
- Yeni mimariyle uyumsuz paket sürümleri

## Run’lar

- Aktif operasyon alanında tutulmasına gerek olmayan eski completed run’lar
- Tarihsel failed veya invalidated run’lar
- Eski Product Engine sürümlerine ait run’lar

## Outputs

- Daha yeni output tarafından değiştirilmiş sürümler
- Invalidated output’lar
- Aktif kullanım dışındaki tarihsel teslimler

## Examples

- Güncel engine sürümüyle uyumsuz örnekler
- Yerine daha iyi bir scenario geçen example’lar

------

# 11. `deprecated-engine-docs/`

Bu klasör artık authoritative olmayan engine belgelerini saklar.

Her arşivlenen engine belgesi:

- orijinal dosya adını mümkün olduğunca korumalı,
- deprecated durumunu açıkça göstermeli,
- arşiv tarihini taşımalı,
- yerine geçen belgeyi belirtmeli,
- aktif ajan okuma sırasına dahil edilmemelidir.

Örnek:

```text
archive/deprecated-engine-docs/
└── v0.1/
    └── OLD_PACKAGE_SELECTOR.md
```

------

# 12. `deprecated-templates/`

Bu klasör artık aktif üretimde kullanılmayan template sürümlerini saklar.

Önerilen yapı:

```text
archive/deprecated-templates/
├── ai/
├── project/
├── design/
├── waves/
└── prompts/
```

veya sürüm bazlı:

```text
archive/deprecated-templates/
└── v0.1/
```

Repository genelinde tek yaklaşım seçilmelidir.

Deprecated template:

- aktif package’lar tarafından seçilmemeli,
- status bilgisini taşımalı,
- yerine geçen template’i belirtmeli,
- eski run bağlantıları için korunmalıdır.

------

# 13. `old-runs/`

Bu klasör aktif `runs/completed/` veya `runs/failed/` dizininde tutulmasına gerek kalmayan tarihsel run’ları saklar.

Bir run’ın `old-runs/` altına taşınması için:

- artık aktif inceleme gerektirmemesi,
- bağlı output’un durumunun belli olması,
- run index kaydının bulunması,
- ilgili bağlantıların güncellenmesi

gerekir.

Old run arşive taşındığında:

- Run ID değişmemelidir.
- Manifest korunmalıdır.
- Output bağlantısı korunmalıdır.
- Run Index içindeki yol güncellenmelidir.
- Run durumu değiştirilmemelidir.

Arşive taşımak run’ı invalidated yapmaz.

------

# 14. Archive Metadata

Arşivlenen her Markdown dosyasının başına YAML frontmatter bloğu eklenir.

V0 için authoritative metadata yöntemi YAML frontmatter'dır.

Örnek:

```yaml
---
archive_id: ARC-TEMPLATE-001
content_type: template
original_path: templates/ai/PROJECT_BRAIN_TEMPLATE.md
archived_path: archive/deprecated-templates/ai/v0.1/PROJECT_BRAIN_TEMPLATE.md
original_version: 0.1
status: deprecated
archive_reason: Yeni metadata ve placeholder standardıyla değiştirildi.
archived_at: 2026-08-06
archived_by:
replacement: templates/ai/PROJECT_BRAIN_TEMPLATE.md
related_runs:
related_outputs:
notes:
---
```

Ayrı `ARCHIVE_METADATA.md` dosyası veya klasör seviyesinde merkezi manifest V0'da kullanılmayacaktır.

Binary veya YAML frontmatter desteklemeyen dosyalar için metadata, dosya adı veya yanında bırakılan kısa bir not dosyasıyla sağlanabilir.

Zorunlu alanlar: `archive_id`, `status`, `archive_reason`, `archived_at`, `replacement`.

------

# 15. Örnek Archive Metadata

```yaml
archive_id: ARC-TEMPLATE-001
content_type: template
original_path: templates/ai/PROJECT_BRAIN_TEMPLATE.md
archived_path: archive/deprecated-templates/ai/v0.1/PROJECT_BRAIN_TEMPLATE.md
original_version: 0.1
status: deprecated
archive_reason: Yeni metadata ve placeholder standardıyla değiştirildi.
archived_at: 2026-08-06
replacement: templates/ai/PROJECT_BRAIN_TEMPLATE.md
related_runs:
  - sample-project_2026-08-01_001
```

Metadata, içeriğin neden arşivde bulunduğunu ek araştırma gerektirmeden açıklamalıdır.

------

# 16. Yerine Geçen İçerik

Bir belge başka bir belge tarafından değiştirildiyse iki yönlü ilişki kurulmalıdır.

Arşivlenen içerik:

```text
Replaced by:
templates/ai/PROJECT_BRAIN_TEMPLATE.md v0.2
```

Yeni içerik veya changelog:

```text
Replaces:
archive/deprecated-templates/ai/v0.1/PROJECT_BRAIN_TEMPLATE.md
```

Yeni belge içerisinde uzun archive açıklaması bulunmak zorunda değildir.

Gerekli bağlantı changelog veya metadata üzerinden kurulabilir.

------

# 17. Aktif Sistemden İzolasyon

Arşivlenmiş içerik:

- varsayılan ajan okuma sırasına dahil edilmemeli,
- package seçiminde kullanılmamalı,
- template olarak seçilmemeli,
- aktif ref gibi değerlendirilmemeli,
- güncel output üretiminde kullanılmamalıdır.

Ajan yalnızca şu durumlarda archive’a başvurmalıdır:

- Eski bir run’ı anlamak
- Migration yapmak
- Geçmiş kararı incelemek
- Eski output’u yeniden değerlendirmek
- Belirli bir değişikliğin tarihini araştırmak
- Kullanıcı açıkça geçmiş sürümü isterse

Archive belgeleri güncel gerçeklik olarak yorumlanmamalıdır.

------

# 18. Okuma Uyarısı

`archive/README.md` ve gerekirse archive alt klasörleri şu uyarıyı taşımalıdır:

```text
Bu klasördeki içerikler aktif Product Engine sözleşmesi değildir.

Güncel üretim çalışmalarında yalnızca açık tarihsel veya migration gereksinimi varsa kullanılmalıdır.
```

Bu uyarı her dosyada tekrar edilmek zorunda değildir.

Klasör seviyesinde açıkça görünmesi yeterlidir.

------

# 19. Eski Referansların Korunması

Bir içerik arşivlenmeden önce aşağıdaki yerlerde referans aranmalıdır:

- Run manifestleri
- Source register kayıtları
- Output manifestleri
- Changelog
- Issues
- Improvements
- Examples
- Planning belgeleri
- Package ve template bağımlılıkları

Arşivleme işlemi referansları kırmamalıdır.

Gerekirse:

- eski yol yerine yeni archive yolu yazılmalı,
- redirect benzeri kısa yönlendirme dosyası bırakılmalı,
- changelog kaydı oluşturulmalıdır.

------

# 20. Yönlendirme Dosyası

Çok sayıda aktif referans eski yolu kullanıyorsa eski konumda kısa bir yönlendirme dosyası bırakılabilir.

Örnek:

```md
# Deprecated

Bu belge artık aktif değildir.

Arşiv konumu:

`archive/deprecated-engine-docs/v0.1/OLD_DOCUMENT.md`

Yerine geçen belge:

`engine/NEW_DOCUMENT.md`
```

Ancak her arşivleme işleminde yönlendirme dosyası bırakmak zorunlu değildir.

Gereksiz boş wrapper dosyaları oluşturulmamalıdır.

------

# 21. Arşivleme Süreci

Bir içerik arşivlenirken şu süreç uygulanmalıdır:

1. İçeriğin aktif bağımlılıkları kontrol edilir.
2. Arşivleme nedeni belirlenir.
3. Yerine geçen içerik varsa doğrulanır.
4. Archive hedef konumu seçilir.
5. Metadata hazırlanır.
6. İçerik archive’a taşınır.
7. Aktif referanslar güncellenir.
8. Changelog kaydı gerekiyorsa oluşturulur.
9. Run veya output indeksleri güncellenir.
10. Aktif okuma akışından çıkarıldığı doğrulanır.
11. Arşiv bağlantıları test edilir.

Bu adımlar tamamlanmadan içerik aktif konumdan kaldırılmamalıdır.

------

# 22. Arşivden Geri Alma

Arşivlenmiş içerik doğrudan aktif konumuna kopyalanarak yeniden kullanılmamalıdır.

Restore gerekiyorsa:

1. Neden geri alınacağı belirlenmelidir.
2. Güncel engine sözleşmeleriyle uyumu kontrol edilmelidir.
3. Gerekirse yeni sürüm oluşturulmalıdır.
4. Validation yapılmalıdır.
5. Changelog kaydı oluşturulmalıdır.
6. Package ve template bağlantıları güncellenmelidir.

Restore, eski belgenin tekrar güncel olduğu anlamına gelmez.

Çoğunlukla eski içerikten yeni aktif sürüm türetilmelidir.

------

# 23. Arşivde Sürümleme

Archive içerikleri orijinal sürümlerini korumalıdır.

Örnek:

```text
archive/deprecated-templates/
├── v0.1/
└── v0.2/
```

veya:

```text
PROJECT_BRAIN_TEMPLATE_v0.1.md
PROJECT_BRAIN_TEMPLATE_v0.2.md
```

Repository genelinde tek yöntem seçilmelidir.

Dosya adı, yol veya metadata’dan sürüm kolayca anlaşılmalıdır.

------

# 24. Eski Output Davranışı

Superseded output’lar:

- aktif output olarak kullanılmamalı,
- geçmiş karşılaştırma için korunabilmeli,
- kaynak run bağlantısını taşımalı,
- yerine geçen output’u göstermelidir.

Invalidated output’lar:

- açık uyarı taşımalı,
- neden geçersiz olduğu belirtilmeli,
- yanlışlıkla `latest` olarak seçilememelidir.

Output archive yapısı gerekiyorsa `outputs/` veya `archive/` altında tek bir authoritative konum seçilmelidir.

Aynı output iki yerde tam kopya olarak tutulmamalıdır.

------

# 25. Eski Planning Belgeleri

Planning spec belgeleri önemli ölçüde değişirse eski sürümler arşivlenebilir.

Önerilen konum:

```text
archive/old-planning-specs/
```

Ancak her küçük düzenlemede yeni archive kopyası oluşturulmamalıdır.

Arşivleme yalnızca:

- ana sorumluluk değiştiğinde,
- klasör mimarisi değiştiğinde,
- önceki spec artık uygulanamaz olduğunda,
- major engine sürümü değiştiğinde

yapılmalıdır.

------

# 26. Arşiv Temizliği

Archive sınırsız biçimde büyümemelidir.

Belirli aralıklarla şu kontroller yapılmalıdır:

- Aynı içeriğin birden fazla kopyası var mı?
- Metadata’sız içerik var mı?
- Yerine geçen belge bağlantısı kırık mı?
- Hiçbir tarihsel değeri olmayan dosya var mı?
- Secret veya hassas bilgi yanlışlıkla saklanmış mı?
- Active belgeler yanlışlıkla archive’da mı?
- Arşivlenmiş içerik hâlâ aktif package tarafından seçiliyor mu?
- Old run referansları çalışıyor mu?

Temizlik, değerli geçmişi silmek anlamına gelmemelidir.

------

# 27. Kalıcı Silme Süreci

Bir archive içeriği kalıcı olarak silinmeden önce:

1. Run ve output referansları kontrol edilmelidir.
2. Changelog bağlantıları kontrol edilmelidir.
3. Tarihsel veya audit değeri değerlendirilmelidir.
4. Yerine geçen içerik doğrulanmalıdır.
5. Silme gerekçesi kaydedilmelidir.
6. Geri dönüş ihtiyacı bulunmadığı doğrulanmalıdır.

Secret veya saklanması yasak bilgi içeriyorsa güvenlik nedeniyle doğrudan silme önceliklidir.

------

# 28. Güvenlik ve Gizlilik

Archive, eski içeriği sakladığı için güvenlik riski oluşturabilir.

Aşağıdakiler archive’da tutulmamalıdır:

- API key’leri
- Şifreler
- Private key’ler
- Production token’ları
- Veritabanı parolaları
- Gereksiz müşteri kişisel verileri
- Gerçek kullanıcı verileri
- Silinmesi istenmiş bilgiler
- Ajanın özel chain-of-thought metni

Bir dosya arşivlenmeden önce secret taraması yapılmalıdır.

“Artık kullanılmıyor” olması güvenli saklanabileceği anlamına gelmez.

------

# 29. Archive ile Backup Ayrımı

Archive bir backup sistemi değildir.

```text
Archive
→ Aktif kullanımdan kaldırılmış seçili tarihsel içerik

Backup
→ Veri kaybına karşı sistemin teknik yedeği
```

Archive klasörü:

- disk arızasına karşı koruma sağlamaz,
- repository backup’ının yerine geçmez,
- bütün aktif dosyaların kopyasını taşımamalıdır.

Backup politikası Product Engine dokümantasyon yapısının dışında ayrı bir operasyon konusu olarak ele alınmalıdır.

------

# 30. Archive ile Version Control Ayrımı

Git geçmişi mevcut olsa bile archive klasörü bazı içerikler için gerekli olabilir.

Git geçmişi:

- dosyanın eski hâlini gösterebilir.

Archive:

- neden aktif kullanımdan kaldırıldığını,
- hangi run’ların ona bağlı olduğunu,
- yerine ne geçtiğini,
- tarihsel statüsünü

açık biçimde gösterebilir.

Ancak Git geçmişinde zaten yeterli olan her küçük değişiklik için archive kopyası oluşturulmamalıdır.

------

# 31. Archive Kayıt İndeksi

Archive büyürse merkezi bir indeks kullanılabilir:

```text
archive/ARCHIVE_INDEX.md
```

İndeks en az şu alanları taşıyabilir:

```md
| Archive ID | İçerik | Tür | Durum | Orijinal Yol | Arşiv Yolu | Tarih | Yerine Geçen |
|---|---|---|---|---|---|---|---|
```

V0’da az sayıda arşiv kaydı varsa ayrı indeks zorunlu değildir.

İndeks yalnızca gerçek gezinme ihtiyacı oluştuğunda eklenmelidir.

------

# 32. Archive Kalite İlkeleri

## İzolasyon

Arşivlenmiş içerik aktif üretime karışmamalıdır.

## İzlenebilirlik

Neden arşivlendiği ve yerine ne geçtiği anlaşılmalıdır.

## Referans Bütünlüğü

Eski run ve output bağlantıları kırılmamalıdır.

## Minimum Yeterlilik

Her küçük değişiklik için archive kopyası oluşturulmamalıdır.

## Tek Kopya

Aynı tarihsel içerik gereksiz yere birden fazla yerde tutulmamalıdır.

## Güvenlik

Secret ve gereksiz kişisel veri saklanmamalıdır.

## Geriye Dönük Anlaşılabilirlik

Eski bir run incelendiğinde kullanılan belge bulunabilmelidir.

## Güncel Sistem Temizliği

Aktif klasörlerde deprecated içerikler birikmemelidir.

------

# 33. Archive Hazırlama Ajanının Görevi

`archive/` sistemini hazırlayan ajan:

1. Product Engine Brain’i okumalıdır.
2. İlgili planning spec belgelerini okumalıdır.
3. Tamamlanmış engine, run, output ve log yapılarını incelemelidir.
4. Arşivleme ile silme arasındaki farkı açık biçimde tanımlamalıdır.
5. Archive README’yi hazırlamalıdır.
6. Mevcut archive alt klasörlerinin sorumluluklarını tanımlamalıdır.
7. Metadata standardını belirlemelidir.
8. Aktif sistemden izolasyon kurallarını oluşturmalıdır.
9. Referans kırılmasını önleyecek davranışı tanımlamalıdır.
10. Archive’ı backup veya çöp kutusu hâline getirmemelidir.
11. Başka klasörleri değiştirmemelidir.
12. Yeni archive kategorisi ihtiyacını raporlamalıdır.

Ajan yalnızca `archive/` klasöründe çalışmalıdır.

------

# 34. Üretim Sonu Raporu

Archive sistemini hazırlayan ajan çalışma sonunda şunları raporlamalıdır:

## Doldurulan Dosyalar

## Archive Kategorileri

## Arşivleme ve Silme Ayrımı

## Metadata Standardı

## Aktif Sistemden İzolasyon

## Eski Referansların Korunması

## Restore Yaklaşımı

## Güvenlik Önlemleri

## Yapılan Varsayımlar

## Açık Kararlar

## Önerilen Yeni Archive Kategorileri

Bu rapor archive belgelerinin içerisine rastgele eklenmemelidir.

------

# 35. Audit Gereksinimi

`archive/` sistemi hazırlandıktan sonra ayrı bir ajan tarafından şu konular denetlenmelidir:

- Aktif belgelerin yanlışlıkla archive’a alınması
- Deprecated belgelerin aktif okuma sırasında kullanılması
- Metadata’sız arşiv kayıtları
- Yerine geçen belge bağlantılarının eksikliği
- Kırılmış run veya output referansları
- Aynı içeriğin gereksiz kopyaları
- Archive’ın backup gibi kullanılması
- Archive’ın çöp klasörüne dönüşmesi
- Secret veya kişisel veri riski
- Invalidated output’un aktif olarak görünmesi
- Eski template’in package tarafından hâlâ seçilmesi
- Restore sürecinin kontrolsüz olması
- Kalıcı silme kriterlerinin belirsizliği
- Arşivlenen içeriklerin sürüm bilgisinin kaybolması

Audit ilk aşamada dosyaları değiştirmemeli, yalnızca bulguları raporlamalıdır.

------

# 36. Tamamlanma Kriterleri

`archive/` klasörü aşağıdaki koşullarda tamamlanmış kabul edilir:

1. Archive kavramı açıkça tanımlanmıştır.
2. Archive’ın aktif sistemden farkı nettir.
3. Arşivleme ve kalıcı silme ayrılmıştır.
4. Mevcut archive alt klasörlerinin görevleri tanımlıdır.
5. Arşivleme nedenleri standartlaştırılmıştır.
6. Archive metadata standardı belirlenmiştir.
7. Yerine geçen içerik bağlantısı desteklenmektedir.
8. Eski run ve output referansları korunmaktadır.
9. Arşivlenmiş içerik aktif okuma sırasına girmemektedir.
10. Deprecated template’ler aktif package’lar tarafından seçilmemektedir.
11. Old run kimlikleri ve durumları korunmaktadır.
12. Invalidated output’lar aktif olarak kullanılamamaktadır.
13. Restore süreci kontrollüdür.
14. Kalıcı silme koşulları tanımlıdır.
15. Archive ile backup ayrılmıştır.
16. Gereksiz kopyalar önlenmektedir.
17. Secret ve kişisel veri kuralları tanımlıdır.
18. Audit sonucunda kritik sorun bulunmamaktadır.
19. Eski bir run’ın kaynakları archive üzerinden bulunabilmektedir.
20. Aktif Product Engine klasörleri deprecated içerikten temiz kalmaktadır.

------

# 37. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `archive/` klasörü tamamlanmış kabul edilmemelidir:

- Archive belirsiz dosyaların atıldığı çöp klasörü olarak kullanılıyorsa
- Arşivlenen içerik neden arşivlendiğini göstermiyorsa
- Yerine geçen belge belirtilmiyorsa
- Eski run referansları kırılıyorsa
- Deprecated template aktif package tarafından kullanılabiliyorsa
- Invalidated output aktif olarak seçilebiliyorsa
- Arşivlenen dosyaların sürümü bilinmiyorsa
- Aynı içerik birden fazla archive konumunda tutuluyorsa
- Archive, backup sisteminin yerine kullanılıyorsa
- Her küçük düzenlemede archive kopyası oluşturuluyorsa
- Restore edilen içerik validation olmadan aktif yapılıyorsa
- Secret veya gereksiz kişisel veri saklanıyorsa
- Aktif ajanların archive belgelerini güncel gerçeklik olarak okuması engellenmiyorsa
- Kalıcı silme davranışı kontrolsüzse

------

# 38. Değişiklik İlkesi

Bu spec onaylandıktan sonra `archive/` klasörü hazırlanmalıdır.

Yeni archive klasörü veya belge ihtiyacı ortaya çıkarsa ajan:

1. Saklanacak içerik türünü açıklamalıdır.
2. Mevcut archive kategorilerinden biriyle karşılanıp karşılanmadığını değerlendirmelidir.
3. Yeni kategorinin tekil sorumluluğunu belirtmelidir.
4. Gereksiz klasör parçalanmasına yol açmamalıdır.
5. Onay almadan kök klasör ağacını değiştirmemelidir.

Archive politikasındaki kalıcı değişiklikler `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

------

# 39. Nihai Hedef

`archive/` klasörü tamamlandığında Product Engine:

- deprecated belgeleri aktif sistemden ayırabilmeli,
- eski template ve run sürümlerini tarihsel bağlamlarıyla koruyabilmeli,
- eski referansları kırmadan içerikleri taşıyabilmeli,
- yerine geçen yeni içerikleri gösterebilmeli,
- invalidated ve superseded çıktıları aktif kullanımdan kaldırabilmeli,
- değerli geçmişi korurken gereksiz dosya birikmesini engelleyebilmelidir.

Çalışma modeli:

```text
Aktif Kullanımdan Kaldırılan İçerik
+
Arşivleme Nedeni
+
Metadata
+
Yerine Geçen İçerik
+
Referans Güncellemeleri
+
Aktif Sistemden İzolasyon
=
İzlenebilir Archive Kaydı
```

Archive sisteminin başarısı çok fazla eski dosya saklamasıyla değil; aktif Product Engine yapısını temiz tutarken geçmiş run, karar ve sürümlerin gerektiğinde güvenilir biçimde anlaşılabilmesini sağlamasıyla ölçülmelidir.
