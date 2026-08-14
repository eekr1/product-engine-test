# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgede yer alan tüm kararlar canonical status vocabulary (`User Approved`, `Engine Resolved`, `Pending Review`, `Superseded`) ve explicit provenance kaynaklandırma standartlarına uygundur.

## 2. Architectural / Technical Decisions

### DEC-001: Delivery Profile & Scope Maturity
- **Tarih**: 2026-08-14
- **Konu**: Teslim olgunluğu ve mimari taban.
- **Karar**: `delivery_profile: Prototype` (satış demosu).
- **Kısa Gerekçe**: Ürün öncelikle potansiyel müşteri satış görüşmesinde gösterilecek bir frontend demo olarak planlanmıştır.
- **Etkiler**: Backend ve veritabanı karmaşıklığı demo dışı bırakılmış, presentation katmanına odaklanılmıştır.
- **Durum**: `User Approved`
- **Source**: Approved Input Section 2 (`inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`).

### DEC-002: Exact Frontend Stack & Execution Architecture
- **Tarih**: 2026-08-14
- **Konu**: Frontend altyapısı ve kütüphane seçimi.
- **Karar**: Vanilla HTML5 + CSS Custom Properties + Vanilla JS (ES Modules).
- **Kısa Gerekçe**: Hızlı yüklenen, ek paket bağımlılığı olmayan, lokal sunucuda sorunsuz çalışan ve son derece sürdürülebilir bir altyapı sunmaktadır.
- **Etkiler**: Paket şişkinliği önlenmiş, performans ve kolay önizleme sağlanmıştır.
- **Durum**: `Engine Resolved`
- **Source**: Canonical `engine/PACKAGE_RULES.md` + `TECH_CONTEXT.md` resolution.

### DEC-003: Integration Readiness & Service Boundary Architecture
- **Tarih**: 2026-08-14
- **Konu**: Veri erişim mimarisi ve geleceğe hazır olma (integration-readiness).
- **Karar**: `companyService.js` soyut veri servis adapter'ı kullanılması.
- **Kısa Gerekçe**: Statik verilerin HTML bileşenlerine hardcode edilmesi engellenmiş, gelecekte gerçek backend eklendiğinde presentation katmanının yeniden yazılmasını önleyen temiz mimari sınır kurulmuştur.
- **Etkiler**: UI doğrudan statik nesneye erişmez; `companyService` metodlarını çağırır.
- **Durum**: `Engine Resolved`
- **Source**: Canonical `engine/PLANNING_PROFILES.md` line 243 + `TECH_CONTEXT.md`.

## 3. Product / Scope Decisions

### DEC-004: Preservation of Verified Corporate Facts
- **Tarih**: 2026-08-14
- **Konu**: Firma bilgileri ve iddialar.
- **Karar**: Sadece `trakyateknikmakine.com` ve brief'te açıkça doğrulanan firma bilgileri (Disan Hidrolik yetkili servisliği, 3 ana hizmet) kullanılacaktır.
- **Kısa Gerekçe**: Sahte sertifika veya kanıtlanmamış iddiaların eklenmesi engellenmelidir (`VAL-13`).
- **Etkiler**: İçerik %100 doğrulanmış kaynaklara dayanmaktadır.
- **Durum**: `User Approved`
- **Source**: Approved Input Section 3 & 9 (`inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`).

### DEC-005: Project State Classification
- **Tarih**: 2026-08-14
- **Konu**: Proje modunun belirlenmesi.
- **Karar**: `project_state: existing`
- **Kısa Gerekçe**: Mevcut aktif web sitesi ve firma gerçekleri kaynak alındığı için Engine `PROJECT_INTAKE.md` yetkili kuralı uygulanmıştır (`CON-01`).
- **Etkiler**: Mevcut durum ile hedef durum açıkça belgelenmiştir.
- **Durum**: `Engine Resolved`
- **Source**: Engine `PROJECT_INTAKE.md` line 231 authority.

## 4. Design / UX Decisions

### DEC-006: Visual Concept & Color Palette Selection
- **Tarih**: 2026-08-14
- **Konu**: Görsel konsept ve renk paleti seçimi.
- **Karar**: *Industrial Precision & Technical Trust* konsepti. `#0F172A` (Slate 900) zemin, `#F59E0B` (Amber 500) aksan, `Space Grotesk` ve `Inter` tipografisi.
- **Kısa Gerekçe**: Sektör klişesi "düz lacivert site" kalıbına düşmeden, sahadaki teknik yetkinliği ve makine hassasiyetini yansıtan özgün visual direction seçilmiştir.
- **Etkiler**: `DESIGN_RULES.md` görsel otoriteyi tanımlar.
- **Durum**: `Engine Resolved`
- **Source**: Canonical `engine/PLANNING_PROFILES.md` line 182 + `DESIGN_RULES.md` synthesis.

## 5. Deprecated / Superseded Decisions

- Yok. (Tüm kararlar aktiftir).
