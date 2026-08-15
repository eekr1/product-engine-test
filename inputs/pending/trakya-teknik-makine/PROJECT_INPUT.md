---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "approved"
project_type: "landing-page"
project_state: "new"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-15T04:01:14+03:00"
updated_at: "2026-08-15T04:01:51+03:00"
approved_at: "2026-08-15T04:01:51+03:00"
approved_by: "user"
supersedes: ""
source_type: "user-provided"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Trakya Teknik Makine projesi için Product Engine self-contained project source material'i (TRAKYA_TEKNIK_MAKINE_PROJECT.md).
Proje Amacı: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamak.
Çalışma potansiyel satış görüşmesi amacıyla proaktif satış demosu olarak gerçekleştirilecektir.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page`
- **Project State:** `new`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation:** `standard` — Proje bir frontend demo olmasına rağmen, Wave Map ve Wave Plan execution detaylarının temiz kalmasını sağlar. Fresh capable agent'ın ikinci planning pass olmadan uygulaması amaçlanır. Prototype teslim olgunluğu mimari ve planlama kalitesini düşürmez.
- **Design:** `light` — UI/UX tasarımı standart/klasik şablon klişelerine düşmeden modern, temiz ve profesyonel endüstriyel/teknik kurumsal dili yakalar. Gereksiz tasarım dokümantasyonu yükü oluşturmadan non-generic kalite tabanını garanti eder.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin kurumsal kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved ana hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) satış görüşmesinde sergilemeye uygun biçimde sunan modern kurumsal frontend demo.

### Problem

Trakya Teknik Makine'nin potansiyel müşterilere ve satış görüşmelerinde hizmet yetkinliklerini, bölge yetkili servis statüsünü hızlı ve profesyonel bir görsel/işlevsel yüzeyde sunabileceği modern bir kurumsal web varlığının/demosunun olmaması.

### Purpose

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamak ve potansiyel satış görüşmesinde ikna edici bir kurumsal sunum yüzeyi sağlamak.

### Success Criteria

- Demo ilk bakışta modern, temiz ve profesyonel görünmeli; generic lacivert hero + 3 kart sektör klişesi hissi vermemeli.
- Firma adı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ve 3 approved hizmet hızlıca anlaşılmalı.
- Ziyaretçi approved iletişim kanallarına (telefon/e-posta CTA) kolayca ulaşabilmeli.
- Mobil ve masaüstü görünümler responsive ve satış görüşmesinde gösterilecek kalitede olmalı.
- Source-backed olmayan firma/domain gerçeği (stok, mobil filo, SLA, periyodik bakım, sertifika, referans, adres, çalışma saatleri vb.) uydurulmamalı.
- Clean frontend service/data-access boundary korunmalı.
- `implementation_planning: standard` planlaması fresh agent'ın aktif wave'i ekstra planning olmadan uygulayabileceği açıklıkta olmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler; yedek parça temini arayan makine ve ekipman kullanıcıları; yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar:** Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları; Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

### Core Flows

1. Ziyaretçi firmanın kimliğini (Trakya Teknik Makine) ve ne yaptığını hızlıca anlar.
2. Ziyaretçi firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğunu açıkça görür.
3. Ziyaretçi 3 temel hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel hiyerarşi içinde inceler.
4. Ziyaretçi firma hakkında temel kurumsal bilgiyi inceler.
5. Ziyaretçi approved direct-contact CTA'larına (telefon/e-posta) kolayca ulaşır ve tetikler.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo.
- Ana kurumsal tanıtım ve sunum yüzeyi (landing page).
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
- Üç approved ana hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel ve metinsel sunumu.
- Telefon ve e-posta direct-contact CTA alanları.
- Mock/local içerik için temiz frontend service/data-access boundary.
- Masaüstü ve mobil responsive uyumluluk.

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API uygulaması.
- Authentication / Yetkilendirme.
- E-ticaret / online ödeme.
- Canlı harita entegrasyonu (Google Maps vb.).
- WhatsApp entegrasyonu veya widget'ı.
- Gerçek form submit backend'i / sunucu taraflı form işleme.
- Production deployment, domain kaydı, DNS veya hosting kurulumu.
- Source dosyada bulunmayan yeni firma iddiaları, hizmet alt kapsamları, sertifikalar, referanslar, adres veya teknik yetkinlikler.

### Future Possibilities

- Satış görüşmesi başarılı olursa: Gerçek backend, veritabanı ve CMS entegrasyonu.
- İletişim formu backend'i ve e-posta bildirim servisi.
- WhatsApp hızlı iletişim widget'ı ve etkileşimli harita.
- Müşteri referansları, proje galerisi ve sertifikasyon modülleri (source data sağlandığında).
- Production deployment, domain ve SSL kurulumu.

---

## 6. Existing Project Context

### Current Reality

Trakya Teknik Makine gerçek bir firmadır ve Disan Hidrolik Makine'nin Trakya Bölge Yetkili Servisi'dir. Ancak bu Product Engine çalışması için yeni frontend demo kod tabanı henüz oluşturulmamıştır.

### Target State

Modern, responsive, satış görüşmesinde gösterilebilir kurumsal frontend demo.

### Transition Scope

N/A (Sıfırdan frontend demo kod tabanı inşa edilecektir, mevcut codebase/site migrasyonu yoktur).

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama pure frontend demo olacaktır.
- Kesin frontend stack Engine technical resolution aşamasında belirlenecektir (stack-neutral pending kuralına uygun).
- Kolay çalıştırılabilir, bağımsız local preview/dev ortamı.
- Mock/local data kullanımı.
- UI bileşenleri ile veriye erişim arasında katmanlı service/data-access boundary.

### Current Data Source Reality

Static local/mock JS/TS data modules. Dış veritabanı veya API bağlantısı yoktur.

### Service / Data-Access Boundary Expectation

Frontend presentation bileşenleri veriyi doğrudan component içine hardcode etmek yerine, izole edilmiş bir service/repository interface'i üzerinden (mock adapter) alır.

### Future Backend / Integration Context

İleride gerçek bir backend veya CMS eklendiğinde, presentation katmanı değiştirilmeden yalnızca data adapter katmanı güncellenebilecektir.

### Unresolved Technical Decisions

- Kesin UI/frontend kütüphanesi veya framework seçimi (Engine resolution aşamasında kesinleşecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- **Firma Adı:** Trakya Teknik Makine
- **Statü:** Disan Hidrolik Makine Trakya Bölge Yetkili Servisi

### Desired Character / Perception

Modern, profesyonel, güven veren endüstriyel/teknik uzmanlık dili. Hızlı çözüm ve teknik yetkinlik algısı.

### Explicit Preferences / Constraints

- Generic "lacivert hero + 3 kart + standart footer" sektör klişesinden kaçınılmalıdır.
- `light` design planning kaliteden ödün verme izni değildir; tipografi, kompozisyon, renk paleti ve spacing tutarlılığı yüksek olmalıdır.
- Masaüstü ve mobil ekranlarda yüksek okunabilirlik ve görsel hiyerarşi sağlanmalıdır.

### Differentiation Notes

Sektörün standart, hantal web sitelerinden farklı olarak modern tipografi, temiz endüstriyel yüzey düzeni ve yüksek kaliteli mikro etkileşimlerle ayrışan, dinamik ancak ciddi bir kurumsal karakter.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-source | high | Tekil factual project source truth ve intake materyali |

- `source_count`: 1

---

## 10. Known Decisions

- Çıktı bir proaktif satış görüşmesi frontend demosudur.
- `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light`.
- Source dosyada bulunmayan hiçbir firma gerçeği uydurulmayacaktır.
- Backend, CMS, DB, WhatsApp, canlı harita ve form submit backend'i mevcut kapsam dışındadır.
- Frontend'de clean service/data-access boundary uygulanacaktır.

---

## 11. Assumptions

- `ASM-01`: *Primary Language Assumption* — Projenin hedef kitlesi Trakya bölgesindeki yerel müşteriler ve Türk işletmeleri olduğundan birincil dil Türkçe (`tr`) olacaktır. Class: Business/Localization, Status: Approved Candidate (Pending Intake).
- `ASM-02`: *Contact Surface Action Assumption* — approved exact contact telefon/e-posta değerleri henüz source material'da verilmediği için, CTA'lar approved project truth veya generic action contract (tel:/mailto: scheme placeholder-free pattern) olarak sunulacaktır. Class: Technical/UI, Status: Approved Candidate (Pending Intake).
- `ASM-03`: *Stack Neutrality Assumption* — Frontend geliştirme ortamı Engine package resolution aşamasında belirlenecek olup, pending aşamasında herhangi bir framework zorlaması yapılmamıştır. Class: Technical/Architecture, Status: Approved Candidate (Pending Intake).

---

## 12. Conflicts

- *Çelişki Yok:* Source dosya ile Engine kuralları arasında herhangi bir unresolved critical conflict saptanmamıştır.

---

## 13. Open Questions / Unresolved Items

- `OQ-01`: Resmi Trakya Teknik Makine ve Disan Hidrolik logo asset'leri ve renk kodları temin edilecek mi?
- `OQ-02`: Telefon, e-posta ve fiziksel adres gibi exact iletişim bilgileri final demo öncesinde sağlanan source material'e eklenecek mi?
- `OQ-03`: Üç ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) için firma tarafında detaylandırılmış alt metin veya saha fotoğrafları verilecek mi?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-15T04:01:51+03:00
- **Approved By:** `user`

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru.
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` için doğrudan approval kanıtı var.
