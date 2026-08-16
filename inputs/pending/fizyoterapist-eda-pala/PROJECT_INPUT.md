---
input_id: "INPUT-FIZYOTERAPIST-EDA-PALA-V1"
project_name: "Fizyoterapist Eda Pala Web Sitesi Demo"
project_slug: "fizyoterapist-eda-pala"
input_version: "1"
status: "pending"
project_type: "landing-page"
project_state: "new"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-17T00:34:00+03:00"
updated_at: "2026-08-17T00:34:00+03:00"
approved_at: ""
approved_by: ""
supersedes: ""
source_type: "user-provided"
source_count: 1
---

# Project Input: Fizyoterapist Eda Pala Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Proje kaynak dosyası: project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md

Tekirdağ'daki Fizyoterapist Eda Pala için, mevcut doğrulanmış bilgilerle çalışan; modern, güven veren ve profesyonel bir frontend web sitesi demosu hazırlamak. Müşteri görüşmesinde sunulacak proaktif satış demosu niteliğindedir.

Factual Allowlist:
- İsim: Eda Pala
- Mesleki unvan: Fizyoterapist
- Konum bağlamı: Tekirdağ
- Instagram URL: https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Fizyoterapist Eda Pala Web Sitesi Demo
- **Project Slug:** `fizyoterapist-eda-pala`
- **Project Type:** `landing-page`
- **Project State:** `new`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation:** Fresh capable agent'ın aktif wave'i ikinci bir planning pass olmadan uygulayabilmesi için `standard` implementation planning seçilmiştir. Prototype teslim olgunluğu mimari planlama derinliğini düşürmez.
- **Design:** Sınırlı factual içerik barındıran dijital profil demosu için `light` visual design planning seçilmiştir. Ağır tasarım sistemleri yerine duru kompozisyon, modern tipografi, kontrollü renk paleti ve responsive layout odaklı hafif tasarım planlaması yeterlidir.

> `design_planning` için `none` profile yoktur. UI/UX taşıyan projelerde canonical değerler `light | standard | full` arasından seçilir.

---

## 3. Problem, Purpose & Success

### Project Summary

Tekirdağ'daki Fizyoterapist Eda Pala için, mevcut doğrulanmış sınırlı bilgilerle (isim, unvan, konum ve Instagram linki) çalışan; modern, güven veren ve profesyonel bir frontend web sitesi demosu hazırlamak.

### Problem

Fizyoterapist Eda Pala için potansiyel müşterilere ve satış görüşmelerine sunulabilecek dijital bir web tanıtım yüzeyi bulunmamaktadır. Mevcut kaynaklarda detaylı hizmetler, uzmanlık alanları, adres, telefon, eğitim veya klinik bilgileri doğrulanmamıştır. Bilgi eksikliğine rağmen güvenilir, kaliteli ve gerçek dışı sağlık iddiaları üretmeyen bir demo sunulması gerekmektedir.

### Purpose

Doğrulanmış sınırlı bilgilerle çalışan; Eda Pala adını, `Fizyoterapist` unvanını ve `Tekirdağ` konum bağlamını profesyonel biçimde sergileyen, uydurma sağlık/klinik iddiaları barındırmayan, responsive bir frontend satış demosu oluşturmak.

### Success Criteria

1. Demo ilk bakışta modern, profesyonel ve kişisel marka odaklı görünmeli.
2. Generic sağlık/klinik klişesi (turkuaz gradient, stok doktor fotoğrafı, 3 sahte tedavi kartı) hissi vermemeli.
3. Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamı net biçimde anlaşılmalı.
4. Kullanıcı tarafından sağlanan Instagram profiline outbound erişim sunulmalı.
5. Mobil ve masaüstü görünümler tam uyumlu olmalı.
6. Source-backed olmayan tedavi, uzmanlık, eğitim, deneyim, klinik veya sağlık claim'i uydurulmamalı.
7. Eksik bilgiler açık soru olarak korunmalı; placeholder gerçeklerle doldurulmamalı.
8. Frontend yapısı clean content/data boundary ile gelecekte doğrulanmış içerik eklendiğinde kolayca genişletilebilir olmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Ziyaretçiler:** Tekirdağ bağlamında bir fizyoterapist hakkında temel profesyonel bilgi arayan potansiyel ziyaretçiler ve Fizyoterapist Eda Pala'nın dijital profilini görmek isteyen kişiler.
- **İkincil Ziyaretçiler:** Fizyoterapist Eda Pala ile sosyal medya profili üzerinden iletişim kurmak isteyen kişiler.

> Ziyaretçilerin belirli bir hastalık, tanı veya tedavi ihtiyacı doğrulanmadığından hedef kullanıcılar klinik alt segmentlere ayrılmamıştır.

### Core Flows

1. **Profil Tanıtımı Akışı:** Ziyaretçi landing page'e ulaşır, Fizyoterapist Eda Pala adını, `Fizyoterapist` mesleki unvanını ve `Tekirdağ` konum bağlamını görür.
2. **Sosyal Medya Yönlendirme Akışı:** Ziyaretçi belirgin outbound CTA üzerinden Fizyoterapist Eda Pala'nın onaylı Instagram profiline yönlenir.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive profesyonel frontend landing page demo.
- Fizyoterapist Eda Pala adının, `Fizyoterapist` unvanının ve `Tekirdağ` konum bağlamının güçlü sunumu.
- Onaylı Instagram profiline outbound link / CTA.
- Temiz frontend bileşen yapısı ve statik içerik yapılandırması (content/data boundary).
- Tasarım ve görsel düzenleşimi (tipografi, kompozisyon, whitespace, responsive layout).

### Out of Scope

- Kaynakta bulunmayan tedavi/hizmet alanları, hastalıklar, tanılar veya tedavi yöntemleri.
- Uzman fizyoterapist, doktor veya belirli klinik uzmanlık unvanı genişletmeleri.
- Eğitim, üniversite, sertifika, uzmanlık veya deneyim yılı iddiaları.
- Klinik adı, exact klinik adresi, ilçe/hizmet bölgesi detayı, evde hizmet iddiası, telefon, e-posta, çalışma saatleri veya fiyat bilgisi.
- Hasta yorumları, referanslar, başarı oranları, önce/sonra görselleri.
- Online randevu backend'i, iletişim formu backend'i, WhatsApp entegrasyonu, canlı harita.
- Admin paneli, CMS, veritabanı, auth veya gerçek API.
- Production deployment / domain / hosting kurulumu.
- Tıbbi tavsiye, teşhis veya kişiye özel sağlık yönlendirmesi.

### Future Possibilities

- Müşteri ile yapılacak görüşme sonrası doğrulanmış biyografi, eğitim ve uzmanlık alanlarının eklenmesi.
- Doğrulanmış klinik adresi, çalışma saatleri ve iletişim kanallarının (telefon, WhatsApp vb.) entegrasyonu.
- Gerçek randevu ve iletişim sistemlerinin eklenmesi (ayrı approved scope gerektirir).

---

## 6. Existing Project Context

### Current Reality

`N/A` — Sıfırdan proje (`project_state: new`). Herhangi bir mevcut kod tabanı veya canlı web sitesi bulunmamaktadır.

### Target State

`N/A`

### Transition Scope

`N/A`

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Frontend-only web demosu.
- Kolay çalıştırılabilir, taşınabilir ve gösterilebilir yapı.
- Kesin framework/stack Product Engine package resolution aşamasında belirlenecektir. Unresolved stack durumunda stack-neutral local preview environment tanımı esastır.
- İçeriğin bileşen kodlarına hardcode edilmeyip statik bir konfigürasyon katmanında tutulması (clean content boundary).

### Current Data Source Reality

- Statik lokal konfigürasyon (local configuration / content data). Veritabanı veya API yoktur.

### Service / Data-Access Boundary Expectation

- Gelecekte gerçek veriler veya backend entegrasyonları geldiğinde UI bileşenlerini değiştirmeden veri kaynağının takılabilmesi için veri/içerik soyutlaması.

### Future Backend / Integration Context

- Backend/API onaylı kapsamda değildir. Sahte endpoint, database şeması veya API sözleşmesi uydurulmayacaktır.

### Unresolved Technical Decisions

- Kesin build/runtime framework'ü (Engine package/technical resolution adımında netleşecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- Kaynakta verilmiş spesifik bir logo, renk kodu veya kurumsal kimlik bulunmamaktadır.

### Desired Character / Perception

- Modern, temiz, sakin, insani, güven veren ve profesyonel bir dijital profil hissi.

### Explicit Preferences / Constraints

- Generic sağlık sitesi klişelerinden (turkuaz/mavi gradient, stok doktor fotoğrafları, 3 sahte tedavi kartı) kaçınılmalıdır.
- Anatomi, hasta, tedavi uygulaması veya klinik ekipman görselleri uydurma claim yaratacak şekilde kullanılmamalıdır.
- Sınırlı factual içerik; güçlü tipografi, whitespace, kontrollü renk paleti ve mizanpaj ile sunulmalıdır.

### Differentiation Notes

- Abartılı klinik iddiaları yerine duru, güvenilir ve kişisel marka odaklı modern görünüm.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md` | project-brief | high | Self-contained project source material & factual allowlist |

- **Source Count:** 1

---

## 10. Known Decisions

- Proje türü `landing-page` / kişisel profesyonel web sitesi demosu.
- Planning profiles: `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light`.
- Factual Allowlist:
  - İsim: **Eda Pala**
  - Mesleki unvan: **Fizyoterapist**
  - Konum bağlamı: **Tekirdağ**
  - Instagram URL: `https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`
- Allowlist dışındaki hiçbir sağlık, klinik, uzmanlık, eğitim veya adres bilgisi uydurulmayacaktır.
- Instagram URL'si yalnız outbound link olarak kullanılacaktır; profil içeriği araştırılmayacaktır.

---

## 11. Assumptions

- `ASM-01` | `[TECHNICAL]` | Frontend demo local preview environment ortamında sorunsuz çalıştırılabilir statik veya modüler yapıda inşa edilecektir. | status: `accepted` | rationale: Engine default execution model.
- `ASM-02` | `[DESIGN]` | Marka renk ve tipografisi Engine design synthesis tarafından modern, profesyonel ve sakin bir palet olarak belirlenecektir. | status: `accepted` | rationale: Source dosyasında spesifik brand kit tanımlanmamıştır.
- `ASM-03` | `[CONTENT]` | Doğrulanmamış içerik alanları için uydurma metinler eklenmeyecek, minimalist ve doğrulanmış bilgiler merkezde tutulacaktır. | status: `accepted` | rationale: Source boundary constraint.

---

## 12. Conflicts

- Critical conflict bulunmamaktadır.

---

## 13. Open Questions / Unresolved Items

- `OQ-01` | Fizyoterapist Eda Pala'nın doğrulanmış uzmanlık ve tedavi alanları nelerdir? | Müşteri tarafından doğrulandığında eklenecektir.
- `OQ-02` | Biyografide yer alacak eğitim, sertifika ve deneyim bilgileri mevcut mudur? | Müşteri tarafından doğrulandığında eklenecektir.
- `OQ-03` | Exact klinik adresi, telefon numarası, e-posta ve çalışma saatleri nedir? | Müşteri tarafından doğrulandığında eklenecektir.
- `OQ-04` | Özel logo, profesyonel portre fotoğrafı veya marka materyalleri mevcut mudur? | Müşteri sağladığında eklenecektir.

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** ""
- **Approved By:** ""

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable olduğu için `design_planning` `light` olarak belirlendi.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing proje durumu değerlendirildi (`project_state: new`, N/A).
- [x] Critical conflict bulunmuyor.
- [x] Assumption'lar kayıtlı ve status'ları geçerli.
- [x] Secret/credential barındırmıyor.
- [x] Machine-dependent absolute path barındırmıyor.
- [x] `source_count` doğru (1).
- [ ] Canonical explicit user approval bekleniyor (IDE/tool/plan auto-approval geçersizdir).
- [ ] `approved_by: user` için henüz doğrudan kullanıcı onayı alınmadı.
