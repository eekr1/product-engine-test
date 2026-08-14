# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Tüm kararlar ID, Tarih, Konu, Karar, Gerekçe, Etkiler, Durum ve Source alanlarıyla izlenebilir formatta tutulur.

## 2. Architectural / Technical Decisions

- **ID**: DEC-001
  - **Tarih**: 2026-08-14
  - **Konu**: Frontend Mimari Stack Seçimi
  - **Karar**: Vite + React + Modular CSS Custom Properties kullanılması.
  - **Gerekçe**: Hızlı yerel önizleme, zengin bileşen ekosistemi ve temiz bileşen mimarisi sunması.
  - **Etkiler**: Sunucu tarafı bağımlılığı olmadan static SPA bundle üretilebilir.
  - **Durum**: User Approved
  - **Source**: Explicit user approval prompt ("Onaylıyorum, approved snapshot oluşturup generation run'ını başlat.")

- **ID**: DEC-002
  - **Tarih**: 2026-08-14
  - **Konu**: Data-Access Service Boundary (Mock Adapter)
  - **Karar**: UI bileşenlerine hardcoded veri gömülmeyecek; `src/data/mockData.js` verisini sunan `src/services/` adapter yapısı kurulacaktır.
  - **Gerekçe**: Demo sonrasında gerçek REST API veya Headless CMS bağlandığında UI katmanının yeniden yazılmasını önlemek.
  - **Etkiler**: Clean presentation / service ayrımı sağlanır.
  - **Durum**: Engine Resolved
  - **Source**: Engine `PLANNING_PROFILES.md` & `TECH_CONTEXT_TEMPLATE.md` integration-readiness kuralı.

## 3. Product / Scope Decisions

- **ID**: DEC-003
  - **Tarih**: 2026-08-14
  - **Konu**: Delivery & Planning Profile Seçimi
  - **Karar**: `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light`.
  - **Gerekçe**: Satış görüşmesi odaklı frontend demo için agent-ready minimum dokümantasyon ve uygulanabilir wave planları.
  - **Etkiler**: Gerekli tüm mimari/wave belgeleri üretilir; gereksiz backend/ops belgeleri elenir.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` section 2.

- **ID**: DEC-004
  - **Tarih**: 2026-08-14
  - **Konu**: Doğrulanmış Firma Bilgisi İlkesi
  - **Karar**: Mevcut sitedeki (`trakyateknikmakine.com`) gerçek veriler dondurularak aynen aktarılacak; kanıtlanmamış yeni iddia eklenmeyecektir.
  - **Gerekçe**: Potansiyel müşteriye dürüst, gerçekçi ve doğrudan güven veren kurumsal kimlik sunulması.
  - **Etkiler**: İçerik doğruluğu %100 garanti edilir.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` section 6 & 9.

## 4. Design / UX Decisions

- **ID**: DEC-005
  - **Tarih**: 2026-08-14
  - **Konu**: Projeye Özgü Endüstriyel Visual Concept (Anti-Template Rule)
  - **Karar**: Sektör klişesi lacivert kurumsal hero şablonları reddedilmiş; koyu antresit/çelik tonları (`#0F172A`), sıcak endüstriyel kehribar vurgusu (`#D97706` / `#F59E0B`), yüksek kontrastlı tipografi ve mikro-etkileşimlerle özgün bir visual direction seçilmiştir.
  - **Gerekçe**: Satış görüşmesinde rakiplerden ve hazır site şablonlarından (SITE123 vb.) belirgin biçimde ayrışmak.
  - **Etkiler**: Premium, teknik güven veren endüstriyel görünüm elde edilir.
  - **Durum**: Engine Resolved
  - **Source**: Engine `PLANNING_PROFILES.md` anti-template kuralı & `design/DESIGN_RULES.md`.

## 5. Deprecated / Superseded Decisions

- *Henüz yürürlükten kalkan karar bulunmamaktadır.*
