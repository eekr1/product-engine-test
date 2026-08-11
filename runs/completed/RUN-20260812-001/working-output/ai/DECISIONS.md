# Trakya Teknik Makine — Decisions

## 1. Decision Record Standard

Bu belgede yer alan kararlar `User Approved` (Kullanıcı tarafından onaylanmış) veya `Engine Resolved` (Engine sözleşmeleri uyarınca çözülmüş) statüleriyle izlenebilir biçimde saklanır.

## 2. Architectural / Technical Decisions

- **ID**: DEC-001
  - **Tarih**: 2026-08-12
  - **Konu**: Frontend Teknoloji Yığını Seçimi
  - **Karar**: Vanilla HTML5 + CSS3 + Modular JavaScript (ES6+) kullanılması.
  - **Kısa Gerekçe**: Satış demosu gösteriminde sıfır dış bağımlılık ile yerel dev/preview ortamında sorunsuz ve bağımlılık riski olmadan çalışabilirlik sağlamak.
  - **Durum**: Engine Resolved
  - **Source**: `engine/PACKAGE_RULES.md` & `TECH_CONTEXT.md`

- **ID**: DEC-002
  - **Tarih**: 2026-08-12
  - **Konu**: Data Access & Service Boundary Katmanı
  - **Karar**: UI bileşenlerinin `CompanyDataService` modülü üzerinden veriye erişmesi.
  - **Kısa Gerekçe**: Presentation katmanı ile veri katmanını ayrıştırarak gelecekte gerçek backend API entegrasyonunu kolaylaştırmak.
  - **Durum**: Engine Resolved
  - **Source**: `TECH_CONTEXT.md` (Integration Readiness Requirement)

## 3. Product / Scope Decisions

- **ID**: DEC-003
  - **Tarih**: 2026-08-12
  - **Konu**: Delivery Profile & Scope Boundary
  - **Karar**: Projenin `delivery_profile: Prototype` olarak frontend satış demosu odaklı yürütülmesi.
  - **Kısa Gerekçe**: Ürünün birincil hedefi müşteri satış görüşmesinde etkileyici bir kurumsal demo sunmaktır.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/INPUT_TRAKYA_TEKNIK_MAKINE_V1.md`

- **ID**: DEC-004
  - **Tarih**: 2026-08-12
  - **Konu**: Mevcut Firma Bilgilerinin Korunması
  - **Karar**: Mevcut sitedeki doğrulanmış firma, adres, telefon ve 3 hizmet metninin korunması, uydurma iddia eklenmemesi.
  - **Kısa Gerekçe**: Müşteri güveni ve gerçeklik ilkesinin korunması.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/INPUT_TRAKYA_TEKNIK_MAKINE_V1.md`

## 4. Design / UX Decisions

- **ID**: DEC-005
  - **Tarih**: 2026-08-12
  - **Konu**: Görsel Konsept ve Tasarım Karakteri
  - **Karar**: *Precision Industrial & Regional Technical Excellence* özgün tasarım konseptinin uygulanması.
  - **Kısa Gerekçe**: Sektör klişelerinden (varsayılan lacivert şablon) kaçınarak impresif, koyu antrasit zeminli modern teknik stüdyo görünümü kurmak.
  - **Durum**: Engine Resolved
  - **Source**: `DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

*Henüz yürürlükten kaldırılmış karar bulunmamaktadır.*
