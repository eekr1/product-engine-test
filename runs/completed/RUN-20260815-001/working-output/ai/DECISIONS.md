# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki kararlar Product Engine canonical decision formatı ve `User Approved` / `Engine Resolved` / `Pending Review` / `Superseded` status vocabulary'sine uygun olarak yönetilir.

## 2. Architectural / Technical Decisions

- **DEC-001**: `delivery_profile: Prototype` seçimi.
  - **Karar**: Satış görüşmesi odaklı kurumsal frontend demo olarak başlama kararı.
  - **Gerekçe**: Potansiyel müşteriye mevcut SITE123 sitesine kıyasla modern görsel ve işlevsel kaliteyi göstermek.
  - **Durum**: User Approved
  - **Source**: `PROJECT_INPUT.md` Section 2

- **DEC-002**: `implementation_planning: standard` seçimi.
  - **Karar**: 5 execution wave'lik standart agent-ready planlama derinliği.
  - **Gerekçe**: Gereksiz aşırı dokümantasyon üretmeden ajanın koda geçişini kolaylaştırmak.
  - **Durum**: User Approved
  - **Source**: `PROJECT_INPUT.md` Section 2

- **DEC-003**: Clean Data-Access Boundary (`CompanyService` & `LocalCompanyAdapter`).
  - **Karar**: UI bileşenlerini mock veriden ayıran servis katmanı mimarisi.
  - **Gerekçe**: Sahte backend endpoint'i uydurmadan gelecekteki API entegrasyonuna hazır mimari kurmak.
  - **Durum**: Engine Resolved
  - **Source**: `engine/PLANNING_PROFILES.md` Integration Readiness Baseline & `packages/DEMO_FRONTEND_PACKAGE.md`

- **DEC-004**: Stack Resolution (Client-side HTML5/CSS3/Vanilla JS).
  - **Karar**: Ağır harici framework bağımlılığı olmadan hızlı çalışan modüler client-side stack.
  - **Gerekçe**: Kolay taşınabilirlik, yüksek performans ve basit demo önizleme olanağı.
  - **Durum**: Engine Resolved
  - **Source**: `packages/DEMO_FRONTEND_PACKAGE.md` & `TECH_CONTEXT.md`

## 3. Product / Scope Decisions

- **DEC-005**: Kapsam Dışı Entegrasyonlar (Form Backend, Live Maps, WhatsApp Widget).
  - **Karar**: İlk demodaki iletişim alanlarının statik / doğrudan `tel:` & `mailto:` CTA seviyesinde tutulması.
  - **Gerekçe**: Satış demosunda uydurma backend entegrasyonlarına yer vermemek.
  - **Durum**: User Approved
  - **Source**: `PROJECT_INPUT.md` Section 5

- **DEC-006**: Gerçek Firma Bilgilerinin Korunması.
  - **Karar**: Sitedeki metin ve unvanların strictly doğrulanmış bilgilere ve Disan Hidrolik yetkili servis unvanına dayanması.
  - **Gerekçe**: Müşteri güveni ve doğrulanabilir içerik disiplini.
  - **Durum**: User Approved
  - **Source**: `PROJECT_INPUT.md` Section 3 & 6

## 4. Design / UX Decisions

- **DEC-007**: `design_planning: light` seviyesi ve Özel Visual Concept.
  - **Karar**: Sektör lacivert hero şablon klişelerinden kaçınan endüstriyel koyu antrasit (`#0F141C`) ve mühendislik amber (`#FFB800`) renk paleti ve kart sistemi.
  - **Gerekçe**: Şablon hissi vermeyen özgün endüstriyel görsel prestij kurmak.
  - **Durum**: Engine Resolved
  - **Source**: `engine/PLANNING_PROFILES.md` Design Diversity Rule & `DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

Henüz yürürlükten kaldırılmış karar bulunmamaktadır.
