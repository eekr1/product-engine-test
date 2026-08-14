# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut SITE123 web sitesindeki doğrulanmış firma ve hizmet verilerini temel alarak; potansiyel müşteri satış görüşmesinde firmanın yetkinliğini, gücünü ve modern vizyonunu en üst düzeyde yansıtacak yüksek kaliteli bir frontend kurumsal web demosu üretmek.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 altyapısındaki web sitesinin görsel sunum, kurumsal algı, modern tipografi, içerik hiyerarşisi ve ilk izlenim açısından günümüz standartlarının gerisinde kalması ve satış görüşmelerinde firmanın gerçek yetkinliğini tam yansıtamaması.
- **Değer Önermesi**: Sitede doğrulanmış firma kimliğini (Disan Hidrolik Trakya Bölge Yetkili Servisi) ve 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) modern, responsive, özgün görsel dilli ve güven veren bir kurumsal frontend demosu ile sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde ağır makine, hidrolik aksam, bakım/onarım, yerinde teknik destek ve yedek parça arayan işletmeler ve tesis sorumluları.
- **İkincil Kullanıcılar**: Firma güvenilirliğini ve yetkili servis durumunu araştıran satın alma yetkilileri ve iletişim arayan mevcut müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Modern, responsive frontend kurumsal demo uygulaması.
  - Ana sayfa, kurumsal tanıtım, Disan Hidrolik Bölge Yetkili Servisi vurgusu, 3 temel hizmet sunumu ve iletişim erişim alanları.
  - Telefon (`tel:`) ve e-posta (`mailto:`) doğrudan erişim CTA noktaları.
  - Temiz mock/local data adapter (`companyService` / `contentAdapter`) mimarisi.
- **Kapsam Dışı**:
  - Gerçek backend, veritabanı veya API sunucu geliştirmesi.
  - Admin paneli veya CMS entegrasyonu.
  - Kullanıcı girişi / authentication.
  - E-ticaret / ödeme altyapısı.
  - Form backend'i, harita veya WhatsApp entegrasyonu (açık soru / gelecek aşama).
  - Doğrulanmamış firma iddiaları veya uydurma referanslar.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Frontend odaklı temiz HTML/JS/CSS mimarisi, modüler UI component yapısı, responsive düzen, `companyService` / `contentAdapter` arabirimi üzerinden beslenen yerel mock/static data modülü.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar Konusu | Alınan Karar | Karar Statüsü | Provenance |
|---|---|---|---|---|
| DEC-001 | Proje Niteliği | Satış sunumu odaklı kurumsal frontend demosu (`delivery_profile: Prototype`) olarak yürütülecektir. | Approved | Approved `PROJECT_INPUT.md` |
| DEC-002 | Proje Durumu | Proje durumu `existing` olarak dondurulmuştur (mevcut SITE123 sitesi kaynak alındığı için). | Approved | Approved `PROJECT_INPUT.md` |
| DEC-003 | Planning Profiles | `implementation_planning: standard`, `design_planning: light` olarak seçilmiştir. | Approved | Approved `PROJECT_INPUT.md` |
| DEC-004 | Veri Doğruluğu | Sitedeki doğrulanmış veriler korunacak, kanıtlanmamış yeni iddia eklenmeyecektir. | Approved | Approved `PROJECT_INPUT.md` |
| DEC-005 | Mimari Sınır | Sahte backend/API uydurulmayacak; veriler `companyService` local mock adapter üzerinden okunacaktır. | Approved | Approved `PROJECT_INPUT.md` & `engine/PLANNING_PROFILES.md` |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine `RUN-20260815-001` aktif durumdadır. Dokümantasyon ve execution planlama paketleri üretilmektedir.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
