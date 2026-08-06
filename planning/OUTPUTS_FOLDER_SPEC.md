# OUTPUTS_FOLDER_SPEC

~~~md
# OUTPUTS_FOLDER_SPEC

## 1. Belgenin Amacı

Bu belge, Product Engine içerisindeki `outputs/` klasörünün nasıl inşa edileceğini tanımlayan yapım şartnamesidir.

Bu belge:

- output kavramını,
- `outputs/` klasörünün görevini,
- nihai çıktı ile çalışma kayıtlarının ayrımını,
- çıktı klasör yapısını,
- teslim, sürümleme ve geçersiz kılma kurallarını,
- tamamlanma ve kabul kriterlerini

belirler.

Bu belge gerçek bir proje çıktısı değildir.

Gerçek Product Engine çıktıları `outputs/` klasörü içerisinde tutulacaktır.

---

# 2. Kaynak ve Üst Bağlam

`outputs/` klasörü hazırlanırken aşağıdaki belgeler dikkate alınmalıdır:

1. `PRODUCT_ENGINE_BRAIN.md`
2. İlgili planning spec belgeleri
3. `engine/OUTPUT_STRUCTURE.md`
4. `engine/VALIDATION_RULES.md`
5. `engine/RUN_PROTOCOL.md`
6. Tamamlanmış package belgeleri
7. Tamamlanmış template belgeleri
8. Mevcut kök klasör yapısı

Output sistemi, başarılı bir Product Engine run’ının temiz ve doğrudan kullanılabilir sonucunu taşır.

---

# 3. Output Kavramı

Bir output, Product Engine tarafından belirli bir proje için üretilmiş, validation sürecinden geçmiş ve doğrudan kullanılmaya hazır nihai dokümantasyon paketidir.

Output:

- çalışma taslağı değildir,
- run kaydı değildir,
- template değildir,
- ref belgesi değildir,
- validation bekleyen ara çıktı değildir.

```text
Output
=
Doğrulanmış proje belgeleri
+
Doğru klasör yapısı
+
Temiz teslim paketi
+
Kaynak run bağlantısı
~~~

------

# 4. `outputs/` Klasörünün Görevi

`outputs/` klasörü şu soruların sahibidir:

- Başarılı run sonunda ne teslim edildi?
- Çıktı hangi proje ve sürüme aittir?
- Çıktı hangi run tarafından üretildi?
- Hangi belgeler teslim paketinde bulunur?
- Çıktı doğrudan bir proje klasörüne aktarılabilir mi?
- Daha yeni veya geçerli output hangisidir?
- Eski veya geçersiz output nasıl işaretlenir?
- Proje daha kapsamlı bir seviyeye nasıl yükseltilebilir?

`outputs/` klasörü Product Engine’in temiz teslim katmanıdır.

------

# 5. Kapsam Dışı

`outputs/` klasörü aşağıdaki içeriklerin ana sahibi değildir:

- Input dosyaları
- Input snapshot’ları
- Package seçim raporları
- Assumption ve conflict kayıtları
- Run logları
- Progress dosyaları
- Working output
- Validation çalışma notları
- Template metadata
- Ref belgeleri
- Engine geliştirme kayıtları
- Ajanın çalışma açıklamaları

Bu içerikler ilgili run veya sistem klasörlerinde kalmalıdır.

```text
runs/
→ Çıktının nasıl üretildiğinin kanıtı

outputs/
→ Üretilen temiz sonuç
```

------

# 6. Klasör Yapısı

Başlangıç yapısı:

```text
outputs/
├── README.md
├── demos/
└── products/
```

Ancak `demos/` klasörü yalnızca geçici veya çöpe atılacak çalışmalar anlamına gelmemelidir.

Buradaki ayrım teslim kapsamını ifade eder:

```text
demos/
→ Sunulabilir, test edilebilir veya erken aşama teslimler

products/
→ Implementation Ready veya Production Ready kapsamındaki teslimler
```

Gelecekte daha genel bir ayrım tercih edilirse şu yapı değerlendirilebilir:

```text
outputs/
├── prototypes/
├── implementation-ready/
└── production-ready/
```

Mevcut ağaç onay alınmadan değiştirilmemelidir.

------

# 7. Proje Output Yapısı

Her proje output’u kendi klasöründe tutulmalıdır:

```text
outputs/<category>/<project-slug>/
```

Birden fazla output sürümü varsa:

```text
outputs/<category>/<project-slug>/
├── latest/
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── v1.0/
```

Daha hafif V0 yaklaşımı:

```text
outputs/<category>/<project-slug>_<version>/
```

Repository genelinde tek bir yöntem seçilmeli ve tutarlı uygulanmalıdır.

------

# 8. Output Paketinin İçeriği

Bir output package’a göre değişebilir ancak genel olarak şu kategorileri destekleyebilir:

```text
<project-output>/
├── README.md
├── OUTPUT_MANIFEST.md
│
├── ai/
├── docs/
├── design/
├── waves/
├── prompts/
└── config/
```

Her projede bütün klasörler zorunlu değildir.

Yalnızca seçilen package ve delivery profile’ın gerektirdiği klasörler oluşturulmalıdır.

Boş klasörler ve boş belgeler nihai output’a taşınmamalıdır.

------

# 9. `README.md`

Her output içerisinde projeye özel bir `README.md` bulunmalıdır.

Bu belge en az şunları açıklamalıdır:

- Projenin adı
- Kısa proje tanımı
- Output’un amacı
- Delivery profile
- Belgelerin okuma sırası
- Projeyi başlatmak için ilk adım
- Aktif veya başlangıç görevi
- Kapsam dışı alanlar
- İlgili başlangıç promptu

README, engine veya run sisteminin genel açıklamasına dönüşmemelidir.

Doğrudan proje paketinin giriş noktası olmalıdır.

------

# 10. `OUTPUT_MANIFEST.md`

Her output paketinin kısa bir manifest taşıması önerilir.

Manifest en az şunları içermelidir:

```text
output_id
project_name
project_slug
output_version
delivery_profile
created_at
source_run_id
source_input_version
package_id
status
document_list
```

Örnek:

```yaml
output_id: io-makina-v0.1
project_name: IO Makina
project_slug: io-makina
output_version: 0.1
delivery_profile: prototype
source_run_id: io-makina_2026-08-06_001
source_input_version: 1.0
package_id: corporate-website
status: active
```

Manifest run ayrıntılarını tekrar etmemelidir.

Yalnızca output kimliği ve kaynak bağlantısını göstermelidir.

------

# 11. Output Durumları

Output en az aşağıdaki durumları desteklemelidir:

## Active

Şu anda geçerli ve kullanılabilir output.

## Superseded

Daha yeni bir output tarafından değiştirilmiş eski sürüm.

## Invalidated

Sonradan kritik hata bulunduğu için kullanılmaması gereken output.

## Archived

Aktif kullanım dışına alınmış ancak geçmiş için korunan output.

Bir output’un durumu yalnızca klasör konumundan anlaşılmamalıdır.

Manifest içerisinde açıkça belirtilmelidir.

------

# 12. Nihai Output ile Working Output Ayrımı

```text
runs/active/<run-id>/working-output/
→ Eksik veya validation bekleyen çalışma alanı

outputs/<category>/<project-slug>/
→ Doğrulanmış temiz teslim
```

Working output:

- eksik olabilir,
- placeholder içerebilir,
- template notları taşıyabilir,
- nihai teslim olarak kullanılamaz.

Nihai output yalnızca başarılı aktarım süreci sonrasında oluşturulmalıdır.

------

# 13. Output Aktarım Koşulları

Working output’un `outputs/` klasörüne aktarılabilmesi için:

1. Zorunlu belgeler üretilmiş olmalıdır.
2. Validation sonucu `PASS` veya kabul edilmiş `CONDITIONAL PASS` olmalıdır.
3. Kritik hata bulunmamalıdır.
4. Çözülmemiş zorunlu placeholder kalmamalıdır.
5. Template metadata ve generation rule’lar kaldırılmalıdır.
6. Başka projeden içerik sızıntısı bulunmamalıdır.
7. Dosya ve klasör adları doğrulanmalıdır.
8. Boş veya gereksiz belgeler kaldırılmalıdır.
9. Output manifest hazırlanmalıdır.
10. Kaynak run ID kaydedilmelidir.

Bu koşullar sağlanmadan output aktif ilan edilmemelidir.

------

# 14. Temiz Output İlkesi

Nihai output içerisinde aşağıdakiler bulunmamalıdır:

- `{{PLACEHOLDER}}`
- Generation rule yorumları
- Template metadata
- Ajan çalışma notları
- Run logları
- Assumption çalışma kayıtları
- Conflict raporları
- Validation taslakları
- Başka proje isimleri
- Kullanılmayan boş başlıklar
- “Daha sonra doldurulacak” gibi kontrolsüz notlar
- Secret veya özel erişim değerleri

Gerçekten gelecekte belirlenecek bir bilgi varsa, açık ve kontrollü bir unresolved item olarak proje belgesinde bulunabilir.

------

# 15. Output Belgelerinin Gruplanması

## `ai/`

Ajanların projeyi anlaması ve devam ettirmesi için gereken çekirdek belgeler.

Örnek:

- `PROJECT_BRAIN.md`
- `PRODUCT_RULES.md`
- `TECH_CONTEXT.md`
- `CURRENT_STATUS.md`
- `NEXT_TASKS.md`
- `DECISIONS.md`
- `AGENT_INSTRUCTIONS.md`

## `docs/`

Genel proje ve teknik planlama belgeleri.

Örnek:

- `PROJECT_PLAN.md`
- `DATA_MODEL.md`
- `API_CONTRACTS.md`
- `TEST_STRATEGY.md`
- `DEPLOYMENT.md`

## `design/`

Tasarım ve kullanıcı deneyimi belgeleri.

## `waves/`

Wave Map, Wave Plan ve ilgili uygulama planları.

## `prompts/`

Projeyi veya aktif Wave’i başlatacak hazır ajan promptları.

## `config/`

`.env.example`, deployment örnekleri veya yapılandırma belgeleri.

Bu klasörler package ihtiyacına göre oluşturulmalıdır.

------

# 16. Başlangıç Promptları

Implementation veya prototype çalışmasına yönelik output, en az bir başlangıç promptu içerebilir.

Örnek:

```text
prompts/START_PROJECT_PROMPT.md
prompts/START_WAVE_PROMPT.md
```

Başlangıç promptu:

- authoritative okuma sırasını,
- aktif işi,
- kapsam sınırını,
- tamamlanma beklentisini,
- belge güncelleme sorumluluğunu

açıkça belirtmelidir.

Prompt belirli bir modele özel olmamalıdır.

------

# 17. Output Sürümleme

Output sürümü şu durumlarda artırılmalıdır:

- Ana kapsam değiştiğinde
- Package genişletildiğinde
- Delivery profile yükseltildiğinde
- Önemli doküman yapıları değiştiğinde
- Yeni teknik veya tasarım kapsamı eklendiğinde
- Önceki output’un önemli bir hatası düzeltildiğinde

Önerilen sürüm sistemi:

```text
0.1
0.2
0.3
1.0
```

## Minor Sürüm

- Metin netleştirmesi
- Küçük kapsam iyileştirmesi
- Yeni koşullu belge
- Kritik olmayan düzeltme

## Major Sürüm

- Package değişimi
- Ana kapsam değişimi
- Delivery profile yükseltmesi
- Temel mimari değişim
- Output yapısının değişmesi

Eski sürümler sessizce üzerine yazılmamalıdır.

------

# 18. `latest` Davranışı

`latest/` kullanılıyorsa bu klasör:

- en son oluşturulan output’u değil,
- en son geçerli ve aktif output’u

göstermelidir.

Yeni output validation’dan geçmeden `latest` güncellenmemelidir.

Invalidated bir output `latest` olarak kalmamalıdır.

------

# 19. Output Güncelleme

Mevcut output doğrudan kontrolsüz biçimde düzenlenmemelidir.

Değişiklik gerekiyorsa:

```text
Yeni veya güncellenmiş input
→ Update / Expansion / Repair Run
→ Validation
→ Yeni output sürümü
```

Küçük yazım düzeltmeleri istisna olabilir ancak kaynak run ve değişiklik kaydı korunmalıdır.

Ana kapsam veya belge davranışı değişiyorsa mutlaka yeni run kullanılmalıdır.

------

# 20. Prototype’tan Tam Ürüne Geçiş

Erken aşama output, gelecekteki daha kapsamlı output’un temeli olabilmelidir.

Örnek:

```text
Prototype Output
→ Implementation Ready Output
→ Production Ready Output
```

Geçiş sırasında:

- mevcut proje kimliği korunmalı,
- geçerli kararlar taşınmalı,
- yalnızca gerekli yeni belgeler eklenmeli,
- eski kapsam geçmişi kaybolmamalı,
- proje sıfırdan yeniden tanımlanmamalıdır.

Hızlı hazırlanmış output gelişime kapalı olmamalıdır.

------

# 21. Output Invalidasyonu

Bir output sonradan geçersiz hâle gelirse:

- silinmemelidir,
- `status: invalidated` olarak işaretlenmelidir,
- invalidasyon nedeni yazılmalıdır,
- ilgili run’a referans verilmelidir,
- aktif output olmaktan çıkarılmalıdır.

Örnek nedenler:

- Yanlış input kullanılması
- Başka projeden içerik sızıntısı
- Kritik belge çelişkisi
- Yanlış package seçimi
- Eksik validation

------

# 22. Output ile Run Bağlantısı

Her output yalnızca bir kaynak run’a açık biçimde bağlanmalıdır.

Output manifest en az şunları göstermelidir:

```text
source_run_id
source_input_version
package_id
delivery_profile
```

Run ise oluşturduğu output yolunu göstermelidir.

İki taraflı bağlantı bulunmalıdır:

```text
Run
→ Output path

Output
→ Source run
```

------

# 23. Output Güvenlik Kuralları

Output içerisinde aşağıdakiler bulunmamalıdır:

- Gerçek secret değerleri
- API anahtarları
- Şifreler
- Private key’ler
- Production token’ları
- Gereksiz kişisel veriler
- Gizli müşteri belgelerinin kontrolsüz kopyaları

Gerekli secret’lar yalnızca değişken adıyla gösterilmelidir.

Örnek:

```text
DATABASE_URL
BREVO_API_KEY
OPENAI_API_KEY
```

------

# 24. Output Kalite İlkeleri

## Doğrudan Kullanılabilirlik

Output bir ajan tarafından ek sohbet bağlamı olmadan okunabilmelidir.

## Temizlik

Run ve template çalışma izleri output’a sızmamalıdır.

## Tutarlılık

Belgeler aynı proje, kapsam ve teknik gerçekliği anlatmalıdır.

## Minimum Yeterlilik

Gereksiz doküman ve boş klasör bulunmamalıdır.

## Genişletilebilirlik

Erken aşama output sonraki profile yükseltilebilmelidir.

## İzlenebilirlik

Output’un hangi run ve input’tan üretildiği belli olmalıdır.

## Model Bağımsızlığı

Belgeler belirli bir ajan gerektirmemelidir.

------

# 25. Output Hazırlama Ajanının Görevi

`outputs/` sistemini hazırlayan ajan:

1. İlgili Product Engine ve planning belgelerini okumalıdır.
2. `engine/OUTPUT_STRUCTURE.md` ile uyum sağlamalıdır.
3. Run ve output sorumluluklarını ayırmalıdır.
4. Output README ve manifest standardını tanımlamalıdır.
5. Aktarım ve validation koşullarını netleştirmelidir.
6. Sürümleme ve invalidasyon davranışını tanımlamalıdır.
7. Küçük ve büyük project output’larını desteklemelidir.
8. Başka klasörleri değiştirmemelidir.
9. Yeni klasör ihtiyacını sessizce uygulamak yerine raporlamalıdır.

Ajan yalnızca `outputs/` klasöründe çalışmalıdır.

------

# 26. Üretim Sonu Raporu

Output sistemini hazırlayan ajan çalışma sonunda şunları raporlamalıdır:

## Doldurulan Dosyalar

## Output Klasör Yapısı

## Minimum Output Paketi

## Run–Output Ayrımı

## Sürümleme Yaklaşımı

## Aktif, Superseded ve Invalidated Davranışı

## Prototype’tan Daha Yüksek Profile Geçiş

## Yapılan Varsayımlar

## Açık Kararlar

## Önerilen Yapı Değişiklikleri

Bu rapor output dosyalarının içerisine eklenmemelidir.

------

# 27. Audit Gereksinimi

`outputs/` sistemi hazırlandıktan sonra ayrı bir ajan tarafından şu konular denetlenmelidir:

- Run kayıtlarının output’a sızması
- Working ve final output ayrımı
- Output manifest yeterliliği
- Sürümleme ve `latest` davranışı
- Invalidated output kullanımı
- Boş veya gereksiz dosyalar
- Template talimatı veya placeholder sızıntısı
- Başka proje içeriği
- Secret veya kişisel veri riski
- Küçük output’larda gereksiz bürokrasi
- Prototype’tan implementasyona geçiş yeteneği
- Output’un ajan tarafından doğrudan kullanılabilirliği

Audit ilk aşamada dosyaları değiştirmemeli, yalnızca bulguları raporlamalıdır.

------

# 28. Tamamlanma Kriterleri

`outputs/` klasörü aşağıdaki koşullarda tamamlanmış kabul edilir:

1. Output kavramı açıkça tanımlanmıştır.
2. Working output ile final output ayrılmıştır.
3. Output klasör yapısı tanımlıdır.
4. Package’a göre koşullu klasörler desteklenmektedir.
5. README ve manifest sorumlulukları nettir.
6. Kaynak run ve input sürümü izlenmektedir.
7. Output aktarım koşulları ölçülebilirdir.
8. Çözülmemiş zorunlu placeholder nihai output’a geçmemektedir.
9. Template ve run çalışma notları temizlenmektedir.
10. Sürümleme sistemi tanımlıdır.
11. Active, superseded ve invalidated durumları desteklenmektedir.
12. Eski output’lar sessizce üzerine yazılmamaktadır.
13. Küçük ve büyük proje kapsamları desteklenmektedir.
14. Erken aşama output sonraki profile yükseltilebilmektedir.
15. Output doğrudan ajan kullanımına hazırdır.
16. Secret ve kişisel veri kuralları tanımlıdır.
17. Audit sonucunda kritik sorun bulunmamaktadır.
18. Manuel bir completed run temiz output üretebilmektedir.

------

# 29. Başarısızlık Kriterleri

Aşağıdaki durumlardan biri varsa `outputs/` klasörü tamamlanmış kabul edilmemelidir:

- Working output doğrudan final output sayılıyorsa
- Validation olmadan output aktif yapılabiliyorsa
- Run kayıtları teslim paketine taşınıyorsa
- Placeholder veya template talimatları kalıyorsa
- Output’un hangi run’dan geldiği belli değilse
- Eski sürümler kontrolsüz biçimde üzerine yazılıyorsa
- Invalidated output aktif olarak kullanılabiliyorsa
- Küçük projelerde gereksiz klasör ve belgeler üretiliyorsa
- Erken aşama output gelişime kapalıysa
- Başka proje içerikleri bulunuyorsa
- Secret veya özel veriler output’a yazılıyorsa
- Bir ajan output’u okuyarak projeyi başlatamıyorsa

------

# 30. Değişiklik İlkesi

Bu spec onaylandıktan sonra `outputs/` klasörü hazırlanmalıdır.

Yeni klasör veya belge ihtiyacı ortaya çıkarsa ajan:

1. İhtiyacı raporlamalıdır.
2. Tekil sorumluluğunu açıklamalıdır.
3. Mevcut yapı ile çözülemeyeceğini göstermelidir.
4. Onay almadan kök ağacı değiştirmemelidir.

Kalıcı output sistemi değişiklikleri `logs/ENGINE_CHANGELOG.md` içerisinde kaydedilmelidir.

------

# 31. Nihai Hedef

`outputs/` klasörü tamamlandığında Product Engine:

- başarılı run sonucunu temiz bir paket hâline getirebilmeli,
- run kayıtlarını teslimden ayırabilmeli,
- output’u proje ve sürüm bazında saklayabilmeli,
- hangi run ve input’tan üretildiğini gösterebilmeli,
- geçerli, eski ve geçersiz output’ları ayırabilmeli,
- erken aşama bir çıktıyı daha kapsamlı bir ürüne yükseltebilmelidir.

Çalışma modeli:

```text
Validated Working Output
+
Output cleanup
+
Package structure
+
Output manifest
+
Version assignment
=
Active Product Output
```

Output sisteminin başarısı çok fazla teslim dosyası üretmesiyle değil; ortaya çıkan paketin temiz, izlenebilir, genişletilebilir ve ajan tarafından doğrudan kullanılabilir olmasıyla ölçülmelidir.
