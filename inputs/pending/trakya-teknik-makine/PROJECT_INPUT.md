---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "pending"
project_type: "web-app"
project_state: "new"
delivery_profile: "Prototype"
primary_language: "tr"
created_at: "2026-08-11T20:52:29+03:00"
updated_at: "2026-08-11T20:52:29+03:00"
approved_at: ""
approved_by: ""
supersedes: ""
source_type: "provided-document"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!NOTE]
> Bu belge Product Engine'in canonical proje girdi belgesidir (`pending` statüsündedir).
> Product Engine kuralları gereği `pending` durumundayken doküman üretimi ve çalıştırma (run) başlatılamaz. Üretim yalnızca kullanıcıdan açık onay (`explicit user approval`) alındıktan ve dosya `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` konumuna taşınıp `status: approved` yapıldıktan sonra başlatılabilir.

---

## 1. Original Brief (Ham Anlatım)

```text
Trakya Teknik Makine — Project Start Scenario
- Proje adı: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- Proje slug'ı: trakya-teknik-makine
- Proje türü: Kurumsal web sitesi / satış demosu
- Proje modu: yeni
- Tek cümlelik açıklama: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak.
- Sahip / müşteri: Trakya Teknik Makine; demo Enis tarafından potansiyel satış görüşmesi amacıyla hazırlanacaktır.
- Mevcut web sitesi ana firma bilgi kaynağıdır (https://www.trakyateknikmakine.com/); mevcut tasarım yapısı yeni tasarım için authority değildir.
- Firma Disan Hidrolik Makine'nin Trakya bölgesindeki yetkili servisidir.
- Üç temel hizmet öne çıkarılmaktadır: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.
- İlk hedef tam üretim sistemi değil, görsel ve işlevsel olarak güçlü bir frontend demodur.
```

---

## 2. Proje Kimliği ve Amacı (Project Identity & Purpose)

- **Proje Adı (project_name):** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug (project_slug):** trakya-teknik-makine
- **Proje Türü (project_type):** `web-app` (Canonical Product Engine Türü)
- **Proje Durumu (project_state):** `new` (Yeni frontend kod tabanı)
- **Hedef Delivery Profile:** `Prototype` (Satış demosu odaklı hızlı ve yüksek etkili teslimat)
- **Birincil Dil (primary_language):** `tr` (Türkçe)

### Proje Özeti (Summary)
Trakya Teknik Makine'nin mevcut SITE123 altyapılı kurumsal web sitesini, satış görüşmesinde firmanın kurumsal algısını güçlendirecek, teknik yetkinliğini ve hizmet kalitesini ön plana çıkaracak modern bir frontend web demosu olarak yeniden tasarlama ve hazırlama projesidir.

### Problem ve Temel Amaç (Problem & Goal)
- **Çözülen Problem:** Mevcut web sitesi temel bilgileri sunmakla birlikte, firmanın bölgesel yetkili servis gücünü, bakım/onarım kapasitesini ve modern kurumsal imajını satış görüşmelerinde yeterince güçlü yansıtmamaktadır.
- **Temel Amaç:** Gerçek firma ve hizmet bilgilerini tam koruyarak, modern görsel hiyerarşiye ve yüksek güven hissettiren kurumsal estetiğe sahip, gösterilebilir bir frontend demo sunmaktır.
- **Başarı Kriteri:** Satış görüşmesinde "Mevcut web sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça veren, responsive ve etkileşimli bir frontend deneyimi sunulması.

---

## 3. Hedef Kullanıcılar ve Akışlar (Users & Core Flows)

### Kullanıcı Rolleri (User Roles)
- **Rol 1 (Potansiyel Müşteri / Bölgesel İşletmeler):** Trakya bölgesinde makine bakım, onarım, teknik servis veya yedek parça arayan fabrika/işletme yöneticileri.
- **Rol 2 (Satın Alma / Operasyon Sorumluları):** Firma güvenilirliğini, yetkili servis belgelendirmesini (Disan Hidrolik) ve hizmet detaylarını inceleyen yetkililer.
- **Rol 3 (Satış Temsilcisi / Enis - Sunum Rolü):** Demoyu potansiyel müşteriye sunan ve yenileme teklifini gösteren kullanıcı.

### Temel Kullanıcı Akışları (Core Flows)
1. **Ana Sayfa Keşfi:** Ziyaretçi ilk anda firmanın ne yaptığını, uzmanlığını ve güven unsurlarını kavrar.
2. **Yetkili Servis Doğrulaması:** Disan Hidrolik Makine Trakya Bölge Yetkili Servisi vurgusunu açıkça görür.
3. **Hizmet İnceleme:** 3 ana hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detaylı inceleyebilir.
4. **İletişim & CTA Akışı:** Telefon, e-posta ve hızlı iletişim kanalları üzerinden doğrudan firmaya ulaşabilir.

---

## 4. Kapsam Yönetimi (Scope Boundaries)

### Dahil Olanlar (In Scope)
- [x] Modern, responsive kurumsal frontend demo (Desktop & Mobile).
- [x] Ana sayfa, kurumsal hakkımızda, hizmetler ve iletişim bölümleri/sayfaları.
- [x] Mevcut gerçek firma içeriklerinin (Disan Hidrolik yetkili servisi, 3 ana hizmet) modernize edilerek sunulması.
- [x] Temel iletişim CTA bağlantıları (telefon `tel:`, e-posta `mailto:`).
- [x] Satış görüşmesinde canlı gösterilebilecek eksiksiz görsel ve işlevsel akış.

### Kapsam Dışı (Out of Scope)
- Admin paneli / CMS yönetimi (ilk demo aşamasında).
- Veritabanı ve backend API zorunluluğu.
- Kullanıcı girişi / Authentication / Üyelik.
- Online ödeme veya e-ticaret altyapısı.
- Doğrulanmamış yeni müşteri referansları, sertifikalar veya sahte firma iddiaları.
- Production hosting, DNS ve domain taşıma operasyonları.

### Gelecekte Planlanan (Future Roadmap)
- Satış sonrası müşteri onayıyla gerçek içerik ve görsel varlıkların doğrulanması.
- Opsiyonel yönetim paneli (CMS) entegrasyonu.
- Production deployment ve mevcut domain geçişi.

---

## 5. Mevcut Proje Bağlamı (Existing Project Context)

> [!IMPORTANT]
> Kod deposu açısından proje `project_state: new` (greenfield) olarak başlatılacaktır. Ancak firmanın yayındaki mevcut web sitesi içerik doğruluğu için ana kaynak (`SRC-02`) kabul edilmektedir.

### Current Reality (Mevcut Gerçeklik)
- **Mevcut Web Sitesi:** https://www.trakyateknikmakine.com/
- **Mevcut Altyapı:** SITE123 hazır site şablonu.
- **Doğrulanmış Firma Bilgileri:**
  - Unvan: Trakya Teknik Makine
  - Ana Yetkinlik: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
  - Hizmetler: 1) Yedek Parça Temini, 2) Yerinde Teknik Destek, 3) Makine Bakım ve Onarım

### Target State (Target Demo State)
- SITE123 bağımlılığından bağımsız, modern, hızlı ve kurumsal kimliği güçlü bir frontend web uygulaması.

---

## 6. Tasarım ve Teknik Ayrım (Fact vs. Design Separation)

Product Engine Kuralı 9 uyarınca doğrulanmış gerçekler ile yeni tasarım kararları kesin olarak ayrılmıştır:

| Kategori | Doğrulanmış Firma Gerçekleri (Değiştirilemez) | Yeni Demo Tasarım/Teknik Kararları (Geliştirilebilir) |
|---|---|---|
| **Firma Bilgisi** | Trakya Teknik Makine adı, mevcut iletişim kanalları | Yeni modern tipografi ve kurumsal renk paleti |
| **Yetkinlik** | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | Görsel rozet, endüstriyel hero kart yapısı |
| **Hizmetler** | Yedek Parça Temini, Yerinde Teknik Destek, Bakım-Onarım | İntaktif hizmet kartları, mikro-animasyonlar, modern layout |
| **Altyapı** | Mevcut site SITE123 kullanmaktadır | Demo için modern web stack (HTML/CSS/JS veya Vite React) |

---

## 7. İçerik ve Kaynak Listesi (Sources & Provenance)

| Source ID | Kaynak Adı / Bağlantı | Kaynak Türü | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | provided-document | Authoritative | Proje başlangıç senaryosu ve kısıtlar |
| SRC-02 | https://www.trakyateknikmakine.com/ | user-provided | Authoritative | Mevcut site doğrulanmış firma & hizmet içerikleri |

---

## 8. Bilinen Kararlar, Varsayımlar ve Çelişkiler

### Bilinen Kararlar (Known Decisions)
- **[DEC-01]** İlk teslimat satış görüşmesinde gösterilmek üzere frontend demo odaklı olacaktır.
- **[DEC-02]** Mevcut sitedeki doğrulanmış firma bilgileri korunacak; uydurma yetkinlik veya referans eklenmeyecektir.
- **[DEC-03]** Mevcut SITE123 tasarımı yeni demo için bağlayıcı değildir; yeni kurumsal tasarım dili oluşturulacaktır.
- **[DEC-04]** Product Engine canonical lifecycle, package rules ve approval gate aynen uygulanacaktır.

### Varsayımlar (Assumptions)
- **[ASM-01]** Proje `project_type: web-app` ve `delivery_profile: Prototype` olarak teklif edilmiştir. (Reason: Satış görüşmesi demosu için gereksiz bürokrasi eklemeden en uygun doküman paketi kapsamını sağlamak).
- **[ASM-02]** Birincil dil Türkçe (`tr`) olarak belirlenmiştir.

### Çelişkiler (Conflicts)
- **[CNF-01]** Kaynak metinde "Proje modu: yeni" denirken, yayında firma sitesinin bulunması.
  - *Status:* Resolved (Kod depomuz `new` greenfield frontend projesidir; yayındaki site ise içerik doğrulama kaynağı `SRC-02` olarak kaydedilmiştir).

---

## 9. Onay Durumu ve Geçiş Kontrolü (Approval Status & Gate)

- **Onay Durumu (status):** `pending`
- **Onay Tarihi (approved_at):** *(Onay beklendiği için henüz boş)*
- **Onaylayan (approved_by):** *(Onay beklendiği için henüz boş)*

### Approval Verification Checklist (Onay Öncesi Kontrol)
- [x] Tüm zorunlu intake alanları dolduruldu (`project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `primary_language`)
- [x] `project_type` geçerli canonical değer (`web-app`)
- [x] `delivery_profile` geçerli canonical değer (`Prototype`)
- [x] Firma gerçekleri ile tasarım/teknik kararları ayrıldı
- [x] Çözülmemiş kritik çelişki yok
- [x] Hassas şifre, token veya kişisel sırlar içermiyor
- [x] Makineye özel mutlak yol (`file:///C:/...`) içermiyor
- [x] `source_count` (2) tablo kaynak sayısı ile uyumlu
- [ ] Kullanıcıdan explicit approval alındı *(ONAY BEKLENİYOR)*
