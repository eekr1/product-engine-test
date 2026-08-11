# Package Selection — RUN-20260811-001

## 1. Seçim Özeti

- **Seçilen Paket**: `DEMO_FRONTEND_PACKAGE` (`packages/DEMO_FRONTEND_PACKAGE.md`)
- **Package ID**: `demo-frontend`
- **Delivery Profile**: `Prototype`
- **Project Type**: `web-app`

## 2. Seçim Gerekçesi

1. **Amaç Uyumu**: Projenin birincil hedefi potansiyel müşteri satış görüşmesinde gösterilmek üzere yüksek etkili, görsel ve işlevsel bir kurumsal frontend demosu sunmaktır.
2. **Gereksiz Bürokrasiyi Önleme**: Gerçekte kapsamda olmayan admin paneli, backend API, veritabanı veya üretim operasyon belgeleri dayatılmamıştır.
3. **Kapsam Derinliği**: `Prototype` profili altında `web-app` türü için deterministik doküman matrisi uygulanmış; `README.md`, `PROJECT_BRAIN.md`, `PRODUCT_RULES.md` ve `DESIGN_RULES.md` seçilmiştir.

## 3. Doküman Kapsamı ve Filtreleme Sonucu

| Document ID | Dosya Adı | Durum | Gerekçe |
|---|---|---|---|
| `README-DOC` | `README.md` | Required | Başlangıç ve çalıştırma rehberi |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | Required | Ana proje bağlamı ve vizyonu |
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | Required | Sayfa akışları ve içerik kuralları |
| `DESIGN` | `DESIGN_RULES.md` | Required | Görsel dil, renk paleti ve UI standartları |
| `TECH-CTX` | `TECH_CONTEXT.md` | Filtered Out | `Prototype` profilinde catalog gereği elenmiştir |
| `DATA` | `DATA_MODEL.md` | Filtered Out | Backend/DB kapsam dışıdır |
| `API` | `API_CONTRACTS.md` | Filtered Out | API servisi kapsam dışıdır |
| `DEPLOY` | `DEPLOYMENT.md` | Filtered Out | Production deployment ilk demo kapsamı dışındadır |
