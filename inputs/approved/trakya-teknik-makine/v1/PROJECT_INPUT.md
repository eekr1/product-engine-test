---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "approved"
project_type: "web-app"
project_state: "existing"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-14T03:31:19+03:00"
updated_at: "2026-08-14T03:32:12+03:00"
approved_at: "2026-08-14T03:32:12+03:00"
approved_by: "user"
supersedes: ""
source_type: "user-provided"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical approved project truth girdisidir.

---

## 1. Original Brief

```text
# Trakya Teknik Makine — Project Start Scenario

## 1. Proje Kimliği
- Proje adı: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- Proje slug'ı: trakya-teknik-makine
- Proje türü: Kurumsal web sitesi / satış demosu
- Proje modu: yeni (mevcut site var, yeni frontend demo geliştirilecek)
- Delivery profile: Prototype
- Implementation planning: standard
- Design planning: light
- Tek cümlelik açıklama: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak.
- Sahip / müşteri: Trakya Teknik Makine; demo Enis tarafından potansiyel satış görüşmesi amacıyla hazırlanacaktır.

## 2. Problem / Amaç
Mevcut web sitesi firmanın temel bilgilerini ve hizmetlerini sunuyor ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye uygundur.
Bu projenin amacı, Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini koruyarak daha güçlü, modern, profesyonel ve satış görüşmesinde gösterilebilir bir kurumsal web sitesi demosu hazırlamaktır.

## 3. Ürün / İş Bağlamı
- Bu çalışma doğrudan müşteri siparişi değildir; potansiyel müşteriye gösterilmek üzere hazırlanacak proaktif bir satış demosudur.
- İlk hedef tam üretim sistemi değil, görsel ve işlevsel olarak güçlü bir frontend demodur.
- Demo/prototype scope'u teslim olgunluğunu sınırlar; tasarım, kod veya mimari kalite tabanını düşürmez.
- Mevcut web sitesi ana firma bilgi kaynağıdır; mevcut tasarım yapısı yeni tasarım için authority değildir.

## 4. Hedef Kullanıcılar
- Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler.
- Yedek parça temini arayan makine ve ekipman kullanıcıları.
- Yerinde teknik destek veya servis hizmeti arayan potansiyel müşteriler.
- Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları.

## 5. Temel Kullanıcı Akışları
- Ziyaretçi ana sayfadan firmanın ne yaptığını hızlıca anlayabilmeli.
- Ziyaretçi hizmetleri açık ve görsel olarak güçlü biçimde inceleyebilmeli.
- Ziyaretçi firmanın Disan Hidrolik Makine'nin Trakya bölgesindeki yetkili servisi olduğunu görebilmeli.
- Ziyaretçi güven unsurlarını ve firma hakkında temel bilgileri inceleyebilmeli.
- Ziyaretçi telefon, e-posta veya uygun iletişim CTA'ları üzerinden kolayca firmaya ulaşabilmeli.

## 6. Kapsam
- Kapsam Dahili: Modern ve responsive kurumsal frontend demo; ana sayfa ve kurumsal/hizmet/iletişim bölümleri; gerçek firma içeriğinin yeniden organize edilmesi; iletişim CTA'ları; integration-ready frontend yapısı.
- Kapsam Dışı: Admin paneli, gerçek backend/veritabanı, auth, e-ticaret, doğrulanmamış firma iddiaları, production deployment/domain taşıma.

## 7. Mevcut Durum
- Mevcut web sitesi: https://www.trakyateknikmakine.com/ (SITE123 altyapısı).
- Yetkili servis: Disan Hidrolik Makine Trakya bölgesi yetkili servisi.
- Temel hizmetler: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.

## 8. Teknik ve Tasarım Tercihleri
- Frontend demo, hızlı ve güvenilir gösterilebilir.
- Clean service/data boundary (throwaway kod yok).
- Modern, temiz, endüstriyel kurumsal visual concept (lacivert klişesine sıkışmayan projeye özgü tasarım).
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `web-app`
- **Project State:** `existing`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (`standard`):** Satış görüşmesinde canlı sunulacak frontend demo için agent-ready minimum planlama düzeyidir. Uygulanabilir dalga (wave) yapısını, mimari sınırları, dynamic wave planlarını ve sonraki ajanın doğrudan kodlamaya başlayabileceği netliği sağlar.
- **Design (`light`):** Kurumsal frontend demo ve sınırlı sayfa hiyerarşisi için uygun hafif doküman derinliğidir. `light` profil, tasarım kalitesinin düşük olması anlamına gelmez; projeye özgü ayırt edilebilir güçlü bir `DESIGN_RULES` visual concept kurulmasını zorunlu kılar.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesini; firmanın kimliğini, yetkili servisliğini ve üç temel hizmetini daha güçlü, modern ve güven veren bir görsel/teknik deneyimle sunan satış amaçlı frontend demo olarak yeniden yapılandırmak.

### Problem

Mevcut web sitesi (SITE123 altyapısında) temel bilgileri sunmakla birlikte, potansiyel müşterilerle yapılacak satış görüşmelerinde firmanın teknik yetkinliğini, servis gücünü ve modern vizyonunu yansıtmakta yetersiz kalmaktadır. Görsel sunum, içerik hiyerarşisi ve mobil uyum modernleştirilmelidir.

### Purpose

Trakya Teknik Makine'nin doğrulanmış gerçek firma ve hizmet verilerini koruyarak; satış görüşmelerinde "mevcut sitenizi bu kaliteye taşıyabiliriz" mesajını açıkça veren, modern visual concept'e sahip, responsive ve mimari açıdan temiz bir frontend demo üretmek.

### Success Criteria

1. Demo, ilk bakışta mevcut siteden belirgin biçimde daha profesyonel, özgün ve modern görünmeli.
2. Tasarım generic kurumsal şablon veya sektör klişesi (ör. varsayılan lacivert kurumsal hero) hissi vermemeli.
3. Firma kimliği ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ile Disan Hidrolik Yetkili Servisliği anında anlaşılmalı.
4. Mobil ve masaüstü görünümleri kusursuz responsive çalışmalı.
5. İletişim noktalarına (telefon, e-posta, adres) erişim hızlı ve doğrudan olmalı.
6. Frontend mimarisi, gelecekte gerçek backend/API bağlandığında presentation katmanının yeniden yazılmasını gerektirmeyecek temiz service/data boundary içermeli.
7. `implementation_planning: standard` çıktısı, bir ajanın koda doğrudan başlayabileceği netlikte wave planları üretmeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Bölge İşletmeleri (Birincil):** Trakya bölgesinde endüstriyel makine bakım, onarım ve yerinde servis desteği arayan fabrika/tesis operasyon sorumluları.
- **Yedek Parça Arayanlar (Birincil):** Hidrolik ve endüstriyel makine ekipman ve yedek parça ihtiyacı olan müşteriler.
- **Satın Alma & İdari Sorumlular (İkincil):** Firma güvenilirliğini ve hizmet kapsamını değerlendiren karar vericiler.

### Core Flows

1. **Keşif Akışı:** Ziyaretçi ana sayfaya girer -> Firmanın ne yaptığını, Disan Hidrolik yetkili servisi olduğunu ve uzmanlık alanlarını anında görür.
2. **Hizmet İnceleme Akışı:** Ziyaretçi hizmetler bölümüne geçer -> 3 ana hizmetin detaylarını, kapsamını ve teknik yetkinliklerini görsel hiyerarşiyle inceler.
3. **Güven & Kurumsal İnceleme Akışı:** Ziyaretçi firmayı araştırır -> Hakkında, yetkili servis belgesi/vurgusu ve güven unsurlarını görür.
4. **İletişim & Aksiyon Akışı:** Ziyaretçi servis/parça talebi için -> İletişim bilgilerine, telefon/e-posta CTA'larına kolayca ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo arayüzü.
- Ana sayfa, Hakkımızda, Hizmetlerimiz (3 ana hizmet detaylandırılmış), Yetkili Servislik vurgusu ve İletişim bölümleri.
- Mevcut gerçek firma verilerinin (iletişim, adres, hizmet tanımları) modern içerik hiyerarşisiyle sunumu.
- Telefon (`tel:`), e-posta (`mailto:`) gibi doğrudan iletişim bağlamları.
- Mimari olarak clean presentation / data-access service boundary (mock adapter yapısı).
- `implementation_planning: standard` ve `design_planning: light` uyarınca canonical Product Engine dokümantasyon paketi.

### Out of Scope

- Yönetim (Admin) paneli veya dinamik içerik yönetim sistemi (CMS).
- Gerçek backend veritabanı veya sunucu tarafı API uygulaması.
- Müşteri girişi, kullanıcı hesapları, yetkilendirme (Auth).
- Online ödeme veya e-ticaret altyapısı.
- Mevcut sitede bulunmayan, doğrulanmamış yeni müşteri referansları, sertifikalar veya abartılı iddialar.
- Canlı ortama production deployment ve mevcut domain (`trakyateknikmakine.com`) DNS/hosting geçişi.

### Future Possibilities

- Satış görüşmesi sonrası gerçek production sitesine dönüştürülmesi.
- Gerçek CMS/Admin paneli entegrasyonu.
- Dinamik teklif alma formu veya WhatsApp canlı destek widget'ı entegrasyonu.
- Gerçek backend API adapter'ının bağlanması.

---

## 6. Existing Project Context

### Current Reality

- Trakya Teknik Makine'nin yayında olan bir web sitesi mevcuttur: `https://www.trakyateknikmakine.com/`
- Mevcut altyapı SITE123 hazır site oluşturucu üzerindedir.
- Mevcut sitede tanımlı doğrulanmış bilgiler:
  - Firma adı: Trakya Teknik Makine
  - Yetkili servislik: Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi
  - 3 Temel Hizmet: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım
  - İletişim/Adres bilgileri
- Mevcut sitenin tasarımı ve SITE123 altyapısı yeni demo için bağlayıcı veya yetkili değildir; yalnızca içerik kaynağıdır.

### Target State

- SITE123 bağımlılığından bağımsız, modern, hızlı, yüksek kurumsal algıya sahip özgün bir frontend demo.
- Clean frontend mimarisi ve bileşen yapısı.

### Transition Scope

- Mevcut sitedeki tüm doğrulanmış firma, yetkili servis ve hizmet metinleri dondurularak yeni demoya aktarılacaktır.
- Sitede bulunmayan veya doğrulanmayan hiçbir bilgi eklenmeyecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- **Demo Hedefi:** Hızlı geliştirilebilir, kolay çalıştırılabilir ve satış sunumunda sorunsuz gösterilebilir frontend altyapısı.
- **Stack:** Modern Web Frontend (Vite + React / HTML5 Component Architecture).
- **Throwaway Architecture Yasaktır:** Prototype olması kod kalitesini düşürmez; presentation ile veri erişim sınırı ayrılacaktır.

### Current Data Source Reality

- Demo verileri yerel mock veri nesnelerinden (local mock data provider) beslenecektir.

### Service / Data-Access Boundary Expectation

- UI bileşenleri veriyi doğrudan sabit metin olarak içlerine gömmeyecek (`hardcoded UI component forbidden`), bunun yerine bir `Service / Adapter` arayüzü üzerinden okuyacaktır.

### Future Backend / Integration Context

- Gelecekte gerçek REST API veya Headless CMS eklendiğinde yalnızca mock adapter yerine HTTP API adapter yazılacak, UI katmanı değişmeyecektir.

### Unresolved Technical Decisions

- None. (Kullanıcı explicit approval ile Vite + React component mimarisini onaylamıştır.)

---

## 8. Design Context

### Known Brand / Design Inputs

- **Firma Adı:** Trakya Teknik Makine
- **Uzmanlık:** Endüstriyel Makine Bakım, Onarım, Yedek Parça ve Disan Hidrolik Yetkili Servisliği.

### Desired Character / Perception

- Teknik yetkinlik, yüksek güvenilirlik, kurumsal ciddiyet, hızlı ve profesyonel çözüm sunan endüstriyel uzman algısı.

### Explicit Preferences / Constraints

- **Anti-Template Kuralı:** `Endüstri = varsayılan klasik lacivert kurumsal şablon` klişesine sıkışılmayacaktır.
- Tasarım; tipografi, kompozisyon, yüzey kontrastı, dinamik aralık ve kontrollü mikro-etkileşimler ile özgün bir visual concept oluşturmalıdır.
- Sitede yer alan Disan Hidrolik yetkili servis vurgusu görsel olarak belirgin ancak firma kimliğini gölgelemeyecek dengede sunulmalıdır.

### Differentiation Notes

- Standart hazır kurumsal temalardan farklı olarak, endüstriyel makine hizmetlerini görsel hiyerarşi ve teknik netlikle öne çıkaran premium hisse sahip visual direction.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Proje Kaynak Dosyası | Yüksek | Ham proje brief'i, amaç ve kısıtlar |
| SRC-02 | `https://www.trakyateknikmakine.com/` | Mevcut Web Sitesi | Yüksek | Doğrulanmış firma bilgileri, hizmet tanımları ve iletişim verileri |

- `source_count`: 2
- Secret/token/password saklanmamıştır.
- Machine-dependent absolute path kullanılmamıştır.

---

## 10. Known Decisions

- **DEC-01:** Proje birinci öncelikle satış görüşmesi için kullanılacak bir frontend demo olarak üretilecektir.
- **DEC-02:** Mevcut sitedeki doğrulanmış firma bilgileri korunacak; tasarım kararları tamamen yenilenecektir.
- **DEC-03:** Delivery profile `Prototype`, implementation planning `standard`, design planning `light` olarak dondurulmuştur.
- **DEC-04:** Sahte backend/database/API endpoint üretilmeyecek; clean integration-ready mock adapter sınırı kurulacaktır.
- **DEC-05:** Explicit user approval ile frontend stack Vite + React olarak onaylanmıştır.

---

## 11. Assumptions

| Assumption ID | Alan | Yapılan Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-01 | `primary_language` | Türkçe (tr) | Safe | Firma Trakya bölgesinde yerel hizmet vermektedir ve mevcut site Türkçe'dir. | Proje Bağlamı | confirmed |
| ASM-02 | `project_type` | `web-app` | Safe | Çok bölümlü/sayfalı kurumsal frontend demo yapısı web-app kategorisine girmektedir. | Engine Standardı | confirmed |
| ASM-03 | `project_state` | `existing` | Safe | Yayında mevcut bir web sitesi ve doğrulanmış firma bilgileri mevcuttur. | Proje Bağlamı | confirmed |
| ASM-04 | `technical_stack` | Vite + React | Bounded | Kullanıcı explicit user approval mesajı ile onaylamıştır. | User Decision | confirmed |

---

## 12. Conflicts

- **CON-01 (Source Hint vs Engine Rules):** Proje kaynak dosyasında `proje modu: yeni` yazarken, mevcut bir site ve korunacak firma gerçekleri bulunduğu için Engine `PROJECT_INTAKE.md` kuralları gereği `project_state: existing` olarak düzenlenmiştir. (Çözüldü: Engine kuralı uygulandı.)
- **CON-02 (Prototype vs Architecture Quality):** Demo/Prototype tanımı teslim olgunluğunu sınırlar; kod ve mimari kaliteyi düşürmez. Direct component-hardcoding yasaklanmış, clean service-boundary ilkesi korunmıştır. (Çözüldü: Engine kuralı uygulandı.)

---

## 13. Open Questions / Unresolved Items

- None. All open questions resolved at explicit user approval gate.

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-14T03:32:12+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable olduğu için `design_planning` `light` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict çözüldü / açıklandı.
- [x] Assumption'lar kayıtlı ve status'ları `confirmed`.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [x] Canonical explicit user approval alındı ("Onaylıyorum, approved snapshot oluşturup generation run'ını başlat.").
- [x] `approved_by: user` için doğrudan approval kanıtı mevcut.
