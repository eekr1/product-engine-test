# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki kararlar Product Engine `DECISIONS_TEMPLATE.md` standartlarına uygun olarak tutulur. Durum vocabulary'si: `User Approved` (Kullanıcı Tarafından Onaylı) | `Engine Resolved` (Engine Sözleşmesi Gereği Çözülen) | `Pending Review` | `Superseded`.

---

## 2. Architectural / Technical Decisions

### DEC-001: Clean Service / Data Access Boundary Soyutlaması
- **Tarih**: 2026-08-11
- **Konu**: UI Bileşenleri ile Veri Katmanı Arasındaki İlişki
- **Karar**: UI bileşenleri mock verileri doğrudan kendi içlerinde hardcode etmeyecektir; veriler `companyService` gibi soyut bir arayüz üzerinden talep edilecektir.
- **Kısa Gerekçe**: Gelecekte gerçek REST API veya CMS bağlandığında presentation katmanında yeniden yazım gereksinimini önlemek.
- **Etkiler**: Data provider nesneleri UI bileşenlerinden tamamen ayrıştırılır.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` & `engine/PACKAGE_RULES.md`

### DEC-002: Dynamic UI & Native CSS/JS Kullanımı
- **Tarih**: 2026-08-11
- **Konu**: Styling ve Animasyon Yaklaşımı
- **Karar**: Özgün tipografi, CSS değişkenleri, akıcı hover efektleri ve mikro-animasyonlar Native CSS ve standart modern DOM manipülasyonu ile kurulacaktır.
- **Kısa Gerekçe**: Demo sunumunda yüksek görsel performans, sıfır kütüphane bağımlılık yükü ve tam estetik kontrol.
- **Etkiler**: Tasarım kısıtlanmadan özgün kurumsal görsel kimlik oluşturulur.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` Design Quality Floor

---

## 3. Product / Scope Decisions

### DEC-003: Satış Odaklı Frontend Demo Çıktı Modu
- **Tarih**: 2026-08-11
- **Konu**: Proje Teslim Şekli ve Amacı
- **Karar**: Projenin ilk çıktısı tam üretim sistemi değil, potansiyel müşteriye gösterilecek görsel ve işlevsel olarak güçlü bir frontend demo olacaktır.
- **Kısa Gerekçe**: Satış görüşmesinde "mevcut sitenizi bu kaliteye taşıyabiliriz" mesajını açıkça vermek.
- **Etkiler**: Backend, DB ve Admin paneli ilk aşamada kapsam dışı kalır.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`

### DEC-004: Mevcut SITE123 Bilgilerinin Dondurularak Korunması (`project_state: existing`)
- **Tarih**: 2026-08-11
- **Konu**: Firma Bilgileri ve Unvan Kaynağı
- **Karar**: Mevcut `trakyateknikmakine.com` sitesindeki doğrulanmış firma bilgileri, Disan Hidrolik Trakya yetkili servis unvanı ve 3 ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) dondurularak kaynak olarak işlenecektir.
- **Kısa Gerekçe**: Müşteri tarafından doğrulanmamış sahte iddia veya hayali referans uydurmamak.
- **Etkiler**: İçerik doğruluğu ve kurumsal güven güvence altına alınır.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` (User Correction & Approval)

---

## 4. Design / UX Decisions

### DEC-005: Sektör Klişelerinden Arındırılmış Özgün Kurumsal Tasarım Dil
- **Tarih**: 2026-08-11
- **Konu**: Visual Concept ve Tipografi
- **Karar**: "Endüstri = jenerik lacivert + klasik 3 kart" klişesi reddedilerek, güçlü tipografi, temiz kompozisyon, belirgin yetkili servis rozetleri ve endüstriyel güven uyandıran dinamik renk paleti kullanılacaktır.
- **Kısa Gerekçe**: Demoyu standart jenerik kurumsal şablon görünümünden ayırmak ve satış görüşmesinde wow etkisi yaratmak.
- **Etkiler**: Tasarım `design_planning: light` seviyesinde olmasına rağmen yüksek görsel kalite tabanına sahip olur.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` & `templates/design/DESIGN_RULES_TEMPLATE.md`

---

## 5. Deprecated / Superseded Decisions

- Henüz yürürlükten kaldırılmış veya değiştirilmiş bir karar bulunmamaktadır.
