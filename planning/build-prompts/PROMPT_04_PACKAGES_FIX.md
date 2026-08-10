~~~md
# PROMPT_04_PACKAGES_FIX

Product Engine `packages/` build sonrası düzeltme turudur.

Amaç package sistemini yeniden tasarlamak değil; mevcut package dosyalarındaki tutarsızlıkları Approved engine ve planning sözleşmeleriyle hizalamaktır.

Bu görevde yalnızca `packages/` klasörü değiştirilebilir.

## Önce Oku

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/PACKAGES_FOLDER_SPEC.md`
3. `engine/PROJECT_INTAKE.md`
4. `engine/DOCUMENT_CATALOG.md`
5. `engine/PACKAGE_RULES.md`
6. `engine/INFORMATION_MAP.md`
7. `engine/VALIDATION_RULES.md`

Ardından `packages/` altındaki 6 mevcut dosyanın tamamını oku.

Planning ve Approved engine sözleşmeleri authoritative kaynaktır.

---

# Ana Görev

Mevcut package yapısını koru.

Yalnızca aşağıdaki drift ve tutarsızlıkları düzelt.

## 1. Delivery Profile / Document Catalog Uyumu

Her package içinde `Required`, `Conditional` ve `Optional` doküman seçimlerini `engine/DOCUMENT_CATALOG.md` içindeki:

- `Applicable Types`
- `Applicable Profiles`
- `Required`

alanlarıyla tam uyumlu hale getir.

Bir doküman Document Catalog tarafından belirli bir delivery profile için applicable değilse, package o profile’da onu Required yapamaz.

Özellikle kontrol et:

### `SAAS_PACKAGE.md`

Şu anda `DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN` bütün profiller için Required gibi davranıyor.

Bunları profile-aware hale getir.

Foundation veya Prototype seviyesinde Document Catalog’un izin vermediği Implementation Ready / Production Ready dokümanlarını zorunlu yapma.

### `API_SERVICE_PACKAGE.md`

`DATA` ve `API` için aynı profile uyumunu kontrol et.

Foundation / Prototype destekleniyorsa o seviyelerde catalog’a aykırı Required doküman bırakma.

### `CORPORATE_WEBSITE_PACKAGE.md`

`DESIGN` ve `TECH-CTX` dahil tüm required dokümanların desteklenen profile’larla catalog uyumunu kontrol et.

Gerekirse tek global Required listesi yerine profile-aware minimum doküman kapsamı tanımla.

Temel ilke:

```text
Foundation
→ catalog tarafından izin verilen minimum çekirdek kapsam

Prototype
→ prototype için applicable minimum kapsam

Implementation Ready
→ implementasyona başlamak için gerekli daha ayrıntılı kapsam

Production Ready
→ implementation kapsamı + production için gerekli conditional belgeler
~~~

Yeni document ID oluşturma.

------

## 2. API Service Information Ownership Düzeltmesi

`packages/API_SERVICE_PACKAGE.md` içinde `PRODUCT-RULES` document’ının excluded olması ve iş kurallarının `TECH_CONTEXT.md` veya `API_CONTRACTS.md` içine taşınması yanlıştır.

`engine/INFORMATION_MAP.md` authoritative ownership kaynağıdır.

Ürün ve davranış kurallarının primary owner’ı `PRODUCT_RULES.md` olarak kalmalıdır.

Ayrıca `engine/DOCUMENT_CATALOG.md` içindeki API-service applicable/required durumuna uy.

Bu nedenle:

- `PRODUCT-RULES` uygun şekilde package kapsamına dahil edilmeli.
- İş kuralları `TECH_CONTEXT.md` veya `API_CONTRACTS.md` owner’ı gibi tanımlanmamalı.
- Teknik bağlam TECH_CONTEXT’ta kalmalı.
- API yüzeyi API_CONTRACTS’ta kalmalı.
- Ürün/davranış kuralları PRODUCT_RULES’ta kalmalı.

Information ownership sınırlarını değiştirme.

------

## 3. Demo Package DESIGN Çelişkisini Düzelt

`packages/DEMO_FRONTEND_PACKAGE.md` içinde `DESIGN` bir yerde Required iken Reduction bölümünde kaldırılabilir ve `PRODUCT_RULES.md` içine özetlenebilir deniyor.

Bu iki kural çelişiyor.

Ayrıca tasarım kurallarının ownership’i `PRODUCT_RULES.md` içine taşınamaz.

Çözüm:

- `DESIGN` gerçekten Required olacaksa Reduction bölümünden kaldırma iznini sil.
- Ya da Document Catalog ve delivery profile kurallarına göre Conditional olması gerekiyorsa bunu açık ve tutarlı biçimde tanımla.

Ancak:

```text
DESIGN_RULES ownership
→ DESIGN_RULES.md
```

olarak kalmalıdır.

`PRODUCT_RULES.md` design rules owner’ı yapılamaz.

------

## 4. Lokal `file:///` Linklerini Temizle

`packages/README.md` ve package dosyalarında:

```text
file:///c:/Users/...
```

gibi lokal Windows yolları bulunmamalıdır.

Bunları repository-relative referanslara dönüştür.

Örnek:

```md
[DEMO_FRONTEND_PACKAGE.md](./DEMO_FRONTEND_PACKAGE.md)
```

veya uygun olduğunda yalnızca:

```text
DEMO_FRONTEND_PACKAGE.md
```

kullan.

Repo dışındaki lokal makine path’lerini tamamen temizle.

------

## 5. Completion Criteria Ekle

`planning/PACKAGES_FOLDER_SPEC.md` package belgeleri için tamamlanma kriterlerinin açık olmasını ister.

Her gerçek package dosyasına kısa ve net bir:

```text
Tamamlanma Kriterleri
```

bölümü ekle.

Bu bölüm package’ın tamamlanmış sayılması için en az şunları kontrol etsin:

- tüm Required dokümanların seçilmiş/üretilmiş olması,
- applicable Conditional dokümanların doğru değerlendirilmiş olması,
- kullanılan document ID’lerin catalog’da mevcut olması,
- delivery profile ile doküman kapsamının uyumlu olması,
- package özel validation kontrollerinin geçilmiş olması,
- output’un temiz ve teslim edilebilir olması.

Genel validation kurallarını tekrar yazma.

------

# Korunması Gerekenler

Şunları değiştirme:

- mevcut 5 package dosyası
- mevcut package ID’leri
- base + extension mantığı
- delivery profile sistemi
- `saas`ın package olup project type olmaması
- Existing Project current vs desired state ayrımı
- API Service’in gereksiz frontend/design dayatmaması
- Corporate Website’in gereksiz SaaS bürokrasisi dayatmaması
- Demo Frontend’in throwaway kabul edilmemesi
- minimum yeterlilik ilkesi
- model bağımsızlığı
- package selection owner’ının `engine/PACKAGE_RULES.md` olması
- document identity owner’ının `engine/DOCUMENT_CATALOG.md` olması
- information ownership owner’ının `engine/INFORMATION_MAP.md` olması
- output structure owner’ının `engine/OUTPUT_STRUCTURE.md` olması

------

# Yasaklar

- `engine/` değiştirme
- `planning/` değiştirme
- `templates/` değiştirme
- `inputs/` değiştirme
- `runs/` değiştirme
- `outputs/` değiştirme
- `logs/` değiştirme
- `examples/` değiştirme
- `archive/` değiştirme
- yeni package oluşturma
- package dosya adlarını değiştirme
- yeni document ID oluşturma
- yeni project type oluşturma
- yeni template klasörü oluşturma
- package sistemini sıfırdan yeniden yazma

Yalnızca gerekli `packages/` dosyalarını değiştir.

------

# Son Kontrol

Düzeltmelerden sonra doğrula:

1. Her Required document, ilgili delivery profile için Document Catalog’da applicable mı?
2. SaaS package Foundation / Prototype seviyelerinde catalog dışı zorunluluk yaratıyor mu?
3. API Service package Foundation / Prototype seviyelerinde catalog dışı zorunluluk yaratıyor mu?
4. Corporate Website profile/document ilişkisi catalog ile uyumlu mu?
5. API Service içinde PRODUCT-RULES ownership doğru mu?
6. TECH_CONTEXT ve API_CONTRACTS business-rule owner’ı gibi davranıyor mu? Davranmamalı.
7. Demo Frontend içinde DESIGN Required/Reduction çelişkisi kaldı mı?
8. DESIGN ownership PRODUCT_RULES’a taşınmış mı? Taşınmamalı.
9. `file:///` lokal path kaldı mı?
10. Her 5 package dosyasında Tamamlanma Kriterleri var mı?
11. Yeni document ID veya project type oluşturuldu mu? Oluşturulmamalı.
12. Yalnızca `packages/` değiştirildi mi?

------

# Çalışma Sonu Raporu

## Düzeltilen Dosyalar

Her dosyada yapılan değişikliği tek cümleyle yaz.

## Kapatılan Driftler

- Delivery Profile / Document Catalog
- API Service Information Ownership
- Demo DESIGN Conflict
- Local Path Cleanup
- Completion Criteria

## Korunan Package Kararları

Değişmeden kalan doğru temel kararları kısa listele.

## Açık Noktalar

Yalnızca gerçekten sonraki klasörlere bırakılması gereken konuları yaz.

## Sonuç

Şunlardan biriyle bitir:

```text
PACKAGES_FIX_COMPLETE
```

veya

```text
PACKAGES_FIX_BLOCKED
```

Blocked ise yalnızca gerçek engeli belirt.