# Fizyoterapist Eda Pala Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Fizyoterapist Eda Pala Web Sitesi Demo
- **Proje Slug**: `fizyoterapist-eda-pala`
- **Tanım**: Tekirdağ'daki Fizyoterapist Eda Pala için, mevcut doğrulanmış verilerle çalışan; modern, güven veren ve profesyonel bir frontend web sitesi demosu (landing page) hazırlamak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Fizyoterapist Eda Pala için proaktif satış görüşmelerinde gösterilebilecek, kişisel dijital markasını ve unvanını temsil eden modern bir web varlığının bulunmaması.
- **Değer Önermesi**: Eda Pala adını, `Fizyoterapist` unvanını ve `Tekirdağ` konum bağlamını sektör klişelerinden uzak, modern tipografi, kompozisyon ritmi ve sakin visual direction ile profesyonel bir dijital sunuma dönüştürmek.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Ziyaretçiler**: Tekirdağ bağlamında bir fizyoterapist hakkında temel profesyonel bilgi arayan potansiyel ziyaretçiler ve Fizyoterapist Eda Pala'nın dijital profilini incelemek isteyen kişiler.
- **İkincil Ziyaretçiler**: Fizyoterapist Eda Pala ile iletişim kurmak veya Instagram profilini incelemek isteyen kişiler.

> Ziyaretçilerin spesifik hastalık/tedavi ihtiyacı doğrulanmadığından hedef kitle klinik alt kategorilere bölünmez.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Modern responsive frontend demo, Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamının sunumu, Instagram profiline outbound CTA/link, modüler local content configuration katmanı.
- **Kapsam Dışı**: Uzmanlık/tedavi alanları, hastalıklar, tanı/tedavi yöntemleri, sağlık sonucu iddiaları, eğitim/sertifika/deneyim iddiaları, klinik adı/adresi/telefon/e-posta/çalışma saati/fiyat bilgisi, hasta yorumları/başarı oranları, online randevu backend'i, iletişim formu backend'i, WhatsApp entegrasyonu, canlı harita, veritabanı, CMS, admin paneli, hosting/domain.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5, Vanilla CSS3 (Custom Properties, Flexbox, Grid), Vanilla JavaScript (ES6+ Modules, local content configuration adapter). Build bağımlılığı olmadan doğrudan static server üzerinde çalışabilir yapı.
- **İçerik Mimarisi**: Presentation bileşenleri hardcode metin barındırmaz; `src/config/content.config.js` adaptör katmanı üzerinden presentation data alır.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Karar | Gerekçe | Durum |
|---|---|---|---|---|
| DEC-001 | Scope Boundary | Sadece doğrulanmış factual veriler (`SRC-01`) kullanılacak; uydurma sağlık/klinik/tedavi iddiası üretilmeyecektir. | Health-domain guard & source integrity | User Approved |
| DEC-002 | Outbound Link | Instagram URL'si yalnız outbound profile CTA'i olarak eklenecektir. | Dış araştırma veya scraping yapılmaması kuralı | User Approved |
| DEC-003 | Tech Architecture | Plain HTML/CSS/JS + Local Content Configuration Adapter seçilmiştir. | Demo sadeliği, hızlı sunum kabiliyeti ve gelecekte kolay veri entegrasyonu | Engine Resolved |
| DEC-004 | Design Planning | `design_planning: light` seviyesinde `DESIGN_RULES.md` ile sakin, insani ve profesyonel visual direction tanımlanmıştır. | Kişisel marka odaklı modern görünüm | User Approved |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Prototype geliştirme aşaması (`WAVE_00`..`WAVE_03` planları hazırlanmış ve doğrulamaya hazır durumdadır).

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün ve kapsam kuralları
- [TECH_CONTEXT.md](./TECH_CONTEXT.md) — Mimari ve teknik bağlam
- [DESIGN_RULES.md](../design/DESIGN_RULES.md) — Tasarım sistemi ve görsel kurallar
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Proje ve dalga yürütme planı
- [DECISIONS.md](./DECISIONS.md) — Kanonik kararlar kaydı
