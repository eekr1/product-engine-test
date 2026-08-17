# Project Start Scenario Template

Bu tek şablonu, Product Engine projeyi canonical intake/input yaşam döngüsüne normalize etmeden önce her yapılandırılmış proje başlangıç kaynak dosyası için kullan.

Projeye özel şema varyantları oluşturma. Her proje instance'ı bu başlık sırasını korumalıdır. Bir bölüm uygulanabilir değilse veya henüz bilinmiyorsa `N/A`, `Yok` veya `Tanımlanmadı` kullan.

## Source-Truth Contract

Bu dosya normal Product Engine akışında projenin **self-contained project truth universe** kaynağıdır.

```text
PROJECT_START_SCENARIO
→ pending PROJECT_INPUT
→ explicit user approval
→ approved PROJECT_INPUT
→ INPUT_SNAPSHOT / FCL
→ WAVE_MAP / WAVE_PLAN
```

Normal run sırasında agent'ın proje gerçeğini öğrenmek için dış web sitesi, arama motoru, sosyal medya veya başka external source araştırması yapması gerekmez ve buna dayanarak yeni factual claim üretmesi yasaktır.

Bu nedenle bu dosya, Engine'in proje planı üretmek için ihtiyaç duyduğu gerçek dünya bilgisini mümkün olduğunca kendi içinde taşımalıdır:

- firma / ürün / proje kimliği,
- gerçek hizmetler veya capability'ler,
- approved iletişim bilgileri,
- kullanıcılar ve akışlar,
- scope / out-of-scope,
- corporate website ise bilinen/istenen page-surface architecture,
- mevcut durumun yalnız planlamayı etkileyen kısmı,
- teknik ve tasarım bağlamı,
- bilinen kısıtlar,
- açık sorular,
- future possibilities,
- başarı kriterleri.

External URL veya web sitesi bilgisi normal project truth için gerekli değildir. Ancak kullanıcı açıkça ayrı bir research/source-enrichment işi isterse external source ayrı bir source olarak eklenebilir; bu opt-in enrichment normal intake/run davranışının parçası değildir.

## 1. Proje Kimliği

- Proje adı:
- Proje slug'ı:
- Proje türü: `web-app | corporate-website | api-service | mobile-app | internal-tool | content-platform | integration | infrastructure | prototype | other | Tanımlanmadı`
- Proje modu: yeni / mevcut
- Delivery profile: Foundation / Prototype / Implementation Ready / Production Ready / Tanımlanmadı
- Implementation planning: standard / full / Tanımlanmadı
- Design planning (UI/UX applicable ise): light / standard / full / Tanımlanmadı
- Tek cümlelik açıklama:
- Sahip / müşteri:

> Planning profile değerleri kaynak dosyada belirtilmiş olsa bile canonical approved input gerçeği hâline gelmeleri için Product Engine intake/approval sürecinden geçmelidir.
> `demo` / `sales demo` delivery context'tir; kurumsal web sitesi intent'i `corporate-website` project type olarak modellenir.

## 2. Problem / Amaç

Proje hangi problemi çözüyor, hangi ihtiyaca hizmet ediyor ve neden var olmalı?

## 3. Ürün / İş Bağlamı

Projeyi maddi olarak etkileyen ürün, müşteri, iş, ticari, iç kullanım, demo, doğrulama veya operasyonel bağlamı açıkla.

## 4. Hedef Kullanıcılar

### Birincil Kullanıcılar
- 

### İkincil Kullanıcılar
- 

## 5. Temel Kullanıcı Akışları

- 

## 6. Kapsam

### Kapsam Dahili
- 

### Kapsam Dışı
- 

## 7. Site / Surface Architecture

Corporate website veya page/screen based UI için bilinen structure'ı açıkla.

### Known / Desired Pages

- 

### Page Relationships

- overview/detail ilişkileri:
- navigation beklentisi:
- kesin sayfalar:
- öneriye açık sayfalar:
- future pages:

Kurallar:

- `corporate-website` intent'i tek bir hero/services/contact sayfasına indirgenmemelidir.
- Exact page listesi source'ta kesin değilse boşluğu factual invention ile doldurma; intake agent pending aşamada Proposed Site Architecture sunabilir.
- Source'ta yazılan page intent'i approval gate'i atlamaz; canonical site architecture approved PROJECT_INPUT içinde kesinleşir.

## 8. Fonksiyonel Gereksinimler

- 

## 9. Mevcut Durum / Current Reality

Yalnız yeni planı etkileyen mevcut proje gerçekliğini açıkla. Bir web sitesi veya dış sistem varsa URL vermek zorunlu değildir; Engine'in bilmesi gereken şey sistemin planlama açısından taşıdığı gerçekliktir.

## 10. Approved Project Facts / Content Truth

Engine'in factual content üretirken kullanmasına izin verilen gerçek dünya bilgilerini açık ve yeterli ayrıntıyla burada topla.

Örnek kategoriler:

- firma/ürün adı,
- resmi rol/statü/partnerlik,
- gerçek hizmetler,
- gerçek ürün özellikleri,
- approved telefon/e-posta/adres,
- doğrulanmış faaliyet alanı,
- doğrulanmış içerik metinleri veya mesajlar.

Kural:

```text
Bu bölümde veya source dosyanın başka açık factual bölümünde bulunmayan
firma/domain gerçeği Engine tarafından uydurulamaz.
```

## 11. Teknik Bağlam / Tercihler

Bilinen veya tercih edilen stack, mimari, frontend/backend/database ayrımı, entegrasyonlar, hosting, repository, platform, environment veya implementasyon kısıtlarını belirt.

Bilinmeyen teknik kararları uydurma; `Tanımlanmadı` kullan.

## 12. Veri / Entegrasyonlar

Bilinen data source, depolama, API, üçüncü taraf servis ve entegrasyon sınırlarını belirt.

## 13. Tasarım Yönü

Bilinen görsel yön, marka kuralları, tasarım dili, responsive ve erişilebilirlik beklentilerini belirt. Spesifik kullanıcı kararı yoksa sektör klişesi veya renk/tema uydurma.

Multi-page corporate website için `design_planning: standard` önerisi normaldir; source hint olsa bile final profile approval intake'te kesinleşir.

## 14. Deployment / Operasyonlar

Bilinen ortamlar, deployment beklentileri, monitoring, backup veya operasyonel sahipliği belirt.

## 15. Daha Önce Alınmış Önemli Kararlar

- 

## 16. Bilinen Kısıtlar

- 

## 17. Bilinmeyenler / Açık Sorular

- 

## 18. Başarı Kriterleri

- 

## 19. Özel Talimatlar

- Normal runtime external web research yapmaz.
- Project truth bu source dosyanın açık içeriğinden türetilir.
- Missing factual detail gerekiyorsa uydurulmaz; open question / missing input olarak kalır.
- Teknik implementation kararları Engine tarafından çözülebilir; firma/domain gerçekleri source-backed olmak zorundadır.
- Corporate website page proposal'ı pending intake'te üretilebilir; explicit approval olmadan executable truth değildir.

## 20. Referanslar

Yalnız Engine workflow'unda gerçekten gereken local repo path/doküman referanslarını listele. External URL normal project truth için eklenmek zorunda değildir.

- 

---

## Handoff Kuralı

Bu dosya proje kaynak materyalidir; canonical Product Engine contract'ı veya final Engine input'u değildir.

Ajan bu dosyayı Product Engine'in authority/read-order, intake, site architecture, planning profile, package/document selection, lifecycle, validation ve approval contract'ları üzerinden işlemelidir. Source dosyanın dışından factual enrichment yapamaz; eksik bilgiler Engine'in missing-input / open-question davranışıyla ele alınır.
