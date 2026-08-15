# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Architectural & Product Decisions

## 1. Architectural Decisions

- **DEC-ARCH-01 (Pure Frontend Prototype Stack)**:
  - **Decision**: HTML5, Vanilla JavaScript, Vanilla CSS3.
  - **Rationale**: Satış demosu için bağımsız, hızlı çalışan ve zero-dependency preview sağlayan temiz mimari.
  - **Status**: Approved.
- **DEC-ARCH-02 (Clean Data Access Boundary)**:
  - **Decision**: UI bileşenleri ile veri arasında `CompanyDataService` ve `MockCompanyAdapter` katmanı kullanılması.
  - **Rationale**: İleride gerçek backend veya CMS eklendiğinde UI katmanının yeniden yazılmasını önler.
  - **Status**: Approved.

## 2. Product & Scope Decisions

- **DEC-PROD-01 (Approved Services Only)**:
  - **Decision**: Yalnızca 3 approved hizmet sunulacaktır: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.
  - **Rationale**: Kaynak metinde doğrulanmamış ek hizmet veya yetkinlik iddialarını engellemek.
  - **Status**: Approved.
- **DEC-PROD-02 (Direct Contact Action Pattern)**:
  - **Decision**: İletişim eylemleri için clean `tel:` ve `mailto:` bağlantıları kullanılacaktır.
  - **Rationale**: Sunucu taraflı form backend'i gerektirmeden istemci tarafında doğrudan iletişim başlatmak.
  - **Status**: Approved.

## 3. Design Decisions

- **DEC-DES-01 (Endüstriyel Hassasiyet & Yetkili Servis Güveni Visual Concept)**:
  - **Decision**: Dark Industrial surface (`hsl(215, 28%, 12%)`) ve Hydraulic Gold (`hsl(38, 92%, 50%)`) accent paleti.
  - **Rationale**: Sektör klişesi lacivert şablonlardan farklılaşan ciddi, modern endüstriyel karakter.
  - **Status**: Approved.
