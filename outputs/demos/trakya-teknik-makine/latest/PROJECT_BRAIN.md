# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini; firmanın vizyonunu, teknik yetkinliğini ve Disan Hidrolik Trakya Bölge Yetkili Servisi gücünü öne çıkaran modern, responsive ve yüksek etkili bir frontend satış demosu ile yeniden ele alma projesidir.

---

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Firmanın mevcut SITE123 tabanlı web sitesi, temel bilgileri sunmakla birlikte firmanın teknik gücünü, bölgesel yetkili servis niteliğini ve hizmet kalitesini potansiyel müşterilere ve satış görüşmelerine yansıtmakta yetersiz ve demode kalmaktadır.
- **Değer Önermesi**: Gerçek firma ve hizmet verilerini (Disan Hidrolik Yetkili Servisi, Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) %100 koruyarak, modern endüstriyel estetik ve etkileşimli kullanıcı deneyimi ile güçlendirilmiş, potansiyel müşterilerde anında güven inşa eden kurumsal web deneyimi.

---

## 3. Hedef Kullanıcı Kitleleri

1. **Bölgesel Fabrika ve İşletme Yöneticileri (Birincil Müşteri Kitlesi)**: Trakya bölgesinde hidrolik makine, ekipman bakımı, acil onarım ve yedek parça ihtiyacı olan imalat/sanayi kuruluşları.
2. **Satın Alma ve Operasyon Yetkilileri (İkinci Kitle)**: Çalışacakları servis firmasının resmi yetkili servis belgelerini, güvenilirliğini ve referans hizmet alanlarını araştıran karar vericiler.
3. **Satış Temsilcisi / Sunum Kullanıcısı (Enis)**: Potansiyel müşteri görüşmelerinde firmanın dijital yüzünü "Mevcut web sitenizi bu seviyeye taşıyabiliriz" mesajıyla sunan kullanıcı.

---

## 4. Temel Kapsam Özeti

- **Dahil Olanlar (In-Scope)**:
  - Modern, responsive kurumsal frontend demo (Desktop & Mobile tam uyum).
  - Kurumsal ana sayfa, hakkımızda, hizmetler ve iletişim bölümleri/sayfaları.
  - Disan Hidrolik Trakya Bölge Yetkili Servis vurgusu ve özel yetki rozet alanı.
  - 3 ana hizmetin detaylı görsel sunumu (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım-Onarım).
  - Doğrudan iletişim CTA bağlantıları (`tel:`, `mailto:`, hızlı iletişim formu).
- **Kapsam Dışı (Out-of-Scope)**:
  - Admin paneli / CMS yönetimi.
  - Backend veritabanı veya API sunucusu.
  - Kullanıcı girişi / Üyelik sistemi.
  - Online satış veya e-ticaret altyapısı.
  - Doğrulanmamış firma iddiaları veya sahte müşteri yorumları.

---

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Standart Vanilla HTML5, CSS3 (Modern Visual System / CSS Custom Properties) ve Vanilla JavaScript ES6+. Framework bağımlılığı gerektirmeyen, lokal veya herhangi bir statik hosting ortamında anında çalıştırılabilir hafif ve hızlı istemci mimarisi.
- **Teslimat Modu**: Frontend Sales Demo (`demo-frontend` paketi, `Prototype` teslimat profili).

---

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Karar | Gerekçe | Durum |
|---|---|---|---|
| **DEC-01** | Frontend Demo Odaklı İlk Teslimat | Satış görüşmesinde anında etki yaratmak ve gereksiz backend karmaşıklığı eklememek için | Approved |
| **DEC-02** | Gerçek Firma Verilerinin Korunması | Sadece SITE123 mevcut sitesindeki doğrulanmış bilgiler kullanılacak, sahte bilgi uydurulmayacaktır | Approved |
| **DEC-03** | Yeni Görsel Tasarım Sistemi | SITE123 şablonu kopyalanmayacak; endüstriyel güven ve modern kurumsal dil sıfırdan inşa edilecektir | Approved |
| **DEC-04** | Package & Engine Lifecycle Uyumluğu | Product Engine `demo-frontend` paketi ve canonical approval gate kuralları birebir uygulanmıştır | Approved |

---

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Published output latest view ready.
- **Aktif Faz**: Prototype Demo Deliverable Active.

---

## 8. Doküman Referansları

- [README.md](./README.md) — Başlangıç ve çalıştırma rehberi.
- [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün ve sayfa davranış kuralları.
- [DESIGN_RULES.md](./DESIGN_RULES.md) — Görsel dil, renk paleti ve UI standartları.
