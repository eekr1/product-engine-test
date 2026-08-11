# Trakya Teknik Makine — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki firma ve hizmet bilgilerini koruyarak, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo projesi.

---

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut web sitesi (SITE123 altyapısı) firmanın temel bilgilerini sunmakta ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve potansiyel müşterilerle yapılacak satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye gereksinim duymaktadır.
- **Değer Önermesi**: Firmanın mevcut web sitesindeki Disan Hidrolik Makine Trakya Yetkili Servisi tanımı ile 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) öne çıkaran, satış görüşmesinde gösterilebilir, görsel olarak güçlü, responsive ve güven veren bir kurumsal frontend deneyimi sunmak.

---

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım veya yerinde teknik destek arayan işletmeler; yedek parça temini arayan makine ve ekipman kullanıcıları.
- **İkincil Kullanıcılar**: Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları; iletişim kurmak isteyen mevcut müşteriler.

---

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Modern ve responsive kurumsal frontend demo.
  - Ana sayfa ve gerekli görülen kurumsal/hizmet/iletişim bölümleri.
  - Mevcut firma ve hizmet içeriklerinin yeniden organize edilmesi.
  - Telefon ve e-posta hızlı iletişim CTA'ları.
  - Gelecekte gerçek data/backend bağlanmasını kolaylaştıracak temiz frontend service/data boundaries.
- **Kapsam Dışı**:
  - İlk demo aşamasında gerçek admin / CMS paneli.
  - Backend servisleri ve veritabanı uygulaması.
  - Gerçek kullanıcı hesabı veya authentication.
  - E-ticaret / online ödeme.
  - Müşteri tarafından doğrulanmamış yeni firma iddiaları, müşteri referansları veya teknik yetkinlik beyanları.
  - Production deployment, domain ve hosting taşıma işlemleri.

---

## 5. Sistem Mimari Özeti

- **Frontend Yaklaşımı**: Temiz presentation bileşenleri + mock data adapter boundary.
- **Teknoloji Yığını Özeti**: Modern frontend araç seti (Vite / React veya modüler bileşen mimarisi); UI bileşenleri veriye doğrudan erişmek yerine service/adapter katmanı üzerinden erişir.
- **Integration Readiness**: Backend henüz bulunmamaktadır. Veri erişimi `MockDataService` interface'i üzerinden yapılır; gelecekte gerçek backend geldiğinde UI katmanı değişmeden `ApiDataService` adaptörü eklenebilir.

---

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Karar | Gerekçe |
|---|---|---|---|
| DEC-001 | Proje Kapsamı | Frontend satış demosu | İlk öncelik potansiyel müşteri görüşmesinde güçlü görsel sunum yapmaktır |
| DEC-002 | Tasarım Yönü | Özgün modern kurumsal görsel dil | Mevcut SITE123 tasarımı otorite değildir; firma bilgileri korunarak yeni konsept kurulur |
| DEC-003 | Veri Mimarisi | Service Adapter Boundary | Frontend bileşenleri mock veriye doğrudan bağımlı kılınmaz |
| DEC-004 | Beyan Ayrımı | Mevcut Site Beyanı | Disan Hidrolik Yetkili Servisi bilgisi firma beyanı olarak korunur, uydurma iddia eklenmez |

---

## 7. Aktif Faz ve Durum Özeti

- **Teslimat Profili**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Mevcut Durum**: Dokümantasyon tamamlanmış ve Wave 00 (Foundation & Mock Service Boundary) kurulmaya hazırdır.

---

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün davranış sınırları ve kapsam kuralları
- [TECH_CONTEXT.md](./TECH_CONTEXT.md) — Mimari detaylar ve service boundary tanımı
- [DESIGN_RULES.md](../design/DESIGN_RULES.md) — Görsel tasarım ve anti-template kuralları
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Proje planı ve kilometre taşları
- [WAVE_MAP.md](../waves/WAVE_MAP.md) — Dalga haritası
- [DECISIONS.md](./DECISIONS.md) — Karar kayıtları
