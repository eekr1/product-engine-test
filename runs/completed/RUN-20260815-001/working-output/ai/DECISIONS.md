# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki tüm kararlar `ID`, `Tarih`, `Konu`, `Karar`, `Gerekçe`, `Etki`, `Durum` ve `Source` alanlarıyla kaydedilmiştir.

## 2. Architectural / Technical Decisions

### DEC-01: Sales-Ready Frontend Demo Architecture
- **Tarih**: 2026-08-15
- **Konu**: Uygulama Mimari Yapısı
- **Karar**: Kesin backend bağımlılığı olmayan, modüler HTML5, Vanilla CSS3 ve Vanilla JS (ES6 Modules) mimarisinin seçilmesi.
- **Gerekçe**: Satış görüşmesinde hızlı gösterim, kolay taşınabilirlik ve sıfır harici bağımlılık.
- **Etki**: Proje bağımsız çalıştırılabilir frontend demo olarak inşa edilir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Original Brief)

### DEC-02: Decoupled Service / Local Mock Data Adapter
- **Tarih**: 2026-08-15
- **Konu**: Veri Bağlamı ve Entegrasyon Boundary'si
- **Karar**: UI bileşenleri verileri doğrudan taşımayacak; soyutlanmış `CompanyService` ve `ServicesDataService` mock adaptörleri üzerinden erişecektir.
- **Gerekçe**: Sahte backend uydurmadan temiz mimari kurmak ve gelecekteki olası API entegrasyonuna hazır olmak.
- **Etki**: Presentation katmanı veri kaynağından bağımsızlaşır.
- **Durum**: Engine Resolved
- **Source**: `packages/DEMO_FRONTEND_PACKAGE.md` & `tech/TECH_CONTEXT.md`

## 3. Product / Scope Decisions

### DEC-03: Strict 3 Core Approved Services Boundary
- **Tarih**: 2026-08-15
- **Konu**: Hizmet Kapsamı
- **Karar**: Hizmet sunumu yalnız 3 approved hizmetten oluşacaktır: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.
- **Gerekçe**: Kaynakta bulunmayan ek hizmetlerin uydurulmaması kuralı.
- **Etki**: Hizmet vitrini bu 3 yetkinlikle sınırlandırılır.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Approved Scope)

### DEC-04: Direct Contact CTAs Without Backend Submit Form
- **Tarih**: 2026-08-15
- **Konu**: İletişim Kanalları
- **Karar**: İletişim eylemleri direct-contact CTA butonları (`tel:`, `mailto:`) ile sunulacak, backend submit formu, canlı harita veya WhatsApp entegre edilmeyecektir.
- **Gerekçe**: Kapsam dışı karmaşıklıkları ve çalışmayan sahte form simülasyonlarını engellemek.
- **Etki**: Kullanıcı doğrudan arama veya e-posta istemcisine yönlendirilir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Scope Boundaries)

## 4. Design / UX Decisions

### DEC-05: Precision Industrial Reliability Visual Direction
- **Tarih**: 2026-08-15
- **Konu**: Görsel Tasarım Yönü ve Farklılaşma
- **Karar**: Anthracite Slate (`#0F172A`) zeminler, Industrial Steel Blue (`#1E293B`) kartlar ve Disan Amber (`#D97706`) aksan renkleri ile teknik hassasiyet hissi veren özel endüstriyel görsel dil seçilmiştir.
- **Gerekçe**: Sektördeki jenerik lacivert hero + 3 kart klişesinden kaçınmak.
- **Etki**: Satış görüşmelerinde öne çıkan özgün kurumsal görsel kimlik.
- **Durum**: Engine Resolved
- **Source**: `packages/DEMO_FRONTEND_PACKAGE.md` & `design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

- `None` (Yürürlükten kaldırılmış karar bulunmamaktadır).
