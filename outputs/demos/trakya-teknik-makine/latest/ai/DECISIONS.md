# Trakya Teknik Makine — Decisions

## 1. Decision Record Standard

Bu belgedeki kararlar; Karar ID, Tarih, Konu, Karar, Kısa Gerekçe ve Durum bilgisi ile denetlenebilir biçimde saklanır.

---

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Sales Pitch Demo Scope
- **Tarih**: 2026-08-11
- **Konu**: İlk teslimatın teknik kapsamı
- **Karar**: İlk aşamada backend veya veritabanı uygulanmayacak, sunum odaklı frontend demo geliştirilecektir.
- **Kısa Gerekçe**: Müşteri görüşmesinde görsel sunum ve hızlı çalışan arayüz önceliklidir.
- **Durum**: Approved (Canonical Approved Input: `INPUT-TRAKYA-TEKNIK-MAKINE-V1`)

### DEC-002: Service Adapter Boundary Mimarisi
- **Tarih**: 2026-08-11
- **Konu**: Veri erişim katmanı soyutlaması
- **Karar**: UI presentation katmanı mock veriye doğrudan erişmeyecek, `IDataService` adaptör arayüzü üzerinden erişecektir.
- **Kısa Gerekçe**: Gelecekte gerçek backend/API eklendiğinde UI bileşenlerinin yeniden yazılması önlenecektir.
- **Durum**: Approved (`TECH_CONTEXT.md` architecture contract)

---

## 3. Product / Scope Decisions

### DEC-003: Doğrulanmış Firma Bilgileri vs. Beyan Ayrımı
- **Tarih**: 2026-08-11
- **Konu**: İçerik ve firma beyanlarının kullanımı
- **Karar**: Mevcut web sitesinde yer alan firma metinleri ve beyanları (Disan Hidrolik Yetkili Servisi tanımı, 3 temel hizmet) korunacak; kanıtlanmamış yeni iddia uydurulmayacaktır.
- **Kısa Gerekçe**: Gerçek firma beyanlarını korurken doğrulanmamış bilgi riskini önlemek.
- **Durum**: Approved (`inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`)

---

## 4. Design / UX Decisions

### DEC-004: Anti-Template Görsel Konsept
- **Tarih**: 2026-08-11
- **Konu**: Görsel yönelim ve tema seçimi
- **Karar**: Mevcut SITE123 tasarımı otorite kabul edilmeyecek; sektör klişesi (klasik lacivert + 3 kart) yerine özgün endüstriyel netlik ve soğuk gri/kehribar vurgulu modern görsel dil uygulanacaktır.
- **Kısa Gerekçe**: Satış görüşmesinde rakiplerden ve jenerik şablonlardan belirgin biçimde ayrışmak.
- **Durum**: Approved (`design/DESIGN_RULES.md`)

---

## 5. Deprecated / Superseded Decisions

- Henüz yürürlükten kaldırılan veya değiştirilen karar bulunmamaktadır.
