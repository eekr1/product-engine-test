# Trakya Teknik Makine — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug:** `trakya-teknik-makine`
- **Tanım:** Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki firma ve hizmet bilgilerini koruyarak, firmanın uzmanlığını daha profesyonel, güven veren ve modern bir görsel/işlevsel frontend demo ile yeniden ele almak.

---

## 2. Problem ve Değer Önermesi

- **Çözülen Problem:** Mevcut SITE123 altyapısındaki web sitesi firma bilgilerini sunmakta yetersiz kalmamakla birlikte, görsel sunum, kurumsal algı, içerik hiyerarşisi ve potansiyel müşterilerle yapılacak satış görüşmelerinde bırakacağı ilk izlenim açısından modernleştirilmeye son derece uygundur.
- **Değer Önermesi:** Satış görüşmesinde doğrudan gösterilebilecek, mobil/masaüstü uyumlu, firmanın Disan Hidrolik Makine Trakya Yetkili Servisi konumunu ve 3 ana hizmetini öne çıkaran son derece prestijli bir kurumsal frontend deneyimi.

---

## 3. Hedef Kullanıcı Kitleleri

1. **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya yerinde teknik destek arayan sanayi kuruluşları ve tesis işletmecileri; yedek parça temini arayan ekipman kullanıcıları.
2. **İkincil Kullanıcılar:** Firma hakkında güvenilirlik ve teknik yetkinlik araştırması yapan satın alma/operasyon sorumluları.

---

## 4. Temel Kapsam Özeti

- **Kapsam İçi:**
  - Modern, responsive, hızlı çalışan kurumsal frontend demo.
  - Ana sayfa, hakkımızda, hizmetlerimiz (Yedek Parça, Yerinde Destek, Bakım-Onarım) ve iletişim bölümleri.
  - Mobil/masaüstü uyumlu doğrudan arama (`tel:`) ve e-posta (`mailto:`) CTA'ları.
  - Temiz presentation ve service/data-access adapter boundary ayrımı.
- **Kapsam Dışı:**
  - Gerçek backend, veritabanı veya authentication.
  - Admin/CMS paneli.
  - E-ticaret / online ödeme.
  - Doğrulanmamış yeni firma beyanları veya kanıtlanmamış müşteri iddiaları.

---

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını:** HTML5, Vanilla CSS3 (Custom Properties & Responsive Layout), Modular JavaScript (ES6+ DataService Mock Adapter).
- **Entegrasyon Mimarisi:** UI presentation katmanı veriyi `DataService` arabirimi üzerinden çeker. Gelecekte gerçek backend/API eklendiğinde UI bileşenleri değiştirilmeden yalnız adapter katmanı güncellenir.

---

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Alan | Karar | Gerekçe |
|---|---|---|---|
| DEC-001 | Delivery | Frontend Prototype | Satış görüşmesinde prestijli ilk izlenim yaratmak. |
| DEC-002 | Tech | Modular Vanilla Stack + DataService Boundary | Hızlı yükleme, bağımlılıksız çalışma ve clean architecture. |
| DEC-003 | Design | Endüstriyel Kurumsal Görsel Dil | Koyu antrasit arka planlar, canlı teknik sarı/turuncu aksanlar ve anti-template hiyerarşi. |

---

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum:** Dokümantasyon Paketi Hazır (`v0.2`). Uygulama dalgası (`WAVE_00`) başlatılmaya hazırdır.

---

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [../design/DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [../project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [../waves/WAVE_MAP.md](../waves/WAVE_MAP.md)
