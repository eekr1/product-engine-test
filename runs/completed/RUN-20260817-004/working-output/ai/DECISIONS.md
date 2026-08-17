# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki tüm kararlar `User Approved` (onaylı projeden exact kanıtlı) veya `Engine Resolved` (onaylı kapsamı aşmadan Engine teknik/tasarım sentezi ile kararlaştırılmış) olarak sınıflandırılmıştır.

## 2. Architectural / Technical Decisions

### DEC-001: Component-Oriented Vite + React + TypeScript Baseline Selection
- **Tarih**: 2026-08-17
- **Konu**: Frontend framework ve build tooling seçimi.
- **Karar**: Vite + React + TypeScript baseline kullanılması.
- **Gerekçe**: Continuation Expected = YES ve Approved Zero-Build Constraint = NONE olması nedeniyle, satış demosu sonrası aynı codebase üzerinde devam edebilmek için package-managed, modüler ve güvenli bir altyapı gereklidir.
- **Etkiler**: Proje `package.json`, Vite ve TypeScript yapılandırması taşır.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` & `TECH_CONTEXT.md`

### DEC-002: Service / Data-Access Adapter Pattern
- **Tarih**: 2026-08-17
- **Konu**: Mock veri ile UI bileşenleri arasındaki veri erişim katmanı.
- **Karar**: UI bileşenlerinin doğrudan mock veri import etmek yerine `services/dataAdapter.ts` interface katmanı üzerinden veri tüketmesi.
- **Gerekçe**: İleride gerçek backend/CMS geldiğinde UI kodunda refactoring gerekmeden sadece adapter katmanının değiştirilmesini sağlamak.
- **Etkiler**: UI presentation katmanı veri kaynağı değişimine karşı izole kalır.
- **Durum**: Engine Resolved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` Section 8

### DEC-003: Component-Based Client Router for 7 Approved Surfaces
- **Tarih**: 2026-08-17
- **Konu**: Çok sayfalı navigasyon ve routing mekanizması.
- **Karar**: Client-side router kullanarak 7 ayrı routable URL path (`/`, `/kurumsal`, `/hizmetler`, `/hizmetler/yedek-parca-temini`, `/hizmetler/yerinde-teknik-destek`, `/hizmetler/makine-bakim-onarim`, `/iletisim`) tanımlanması.
- **Gerekçe**: `corporate-website` project type gereği her onaylı sayfa distinct surface olarak kalmalıdır; anchor collapse yasaktır.
- **Etkiler**: Doğrudan URL erişimi ve temiz sayfa geçişleri desteklenir.
- **Durum**: Engine Resolved
- **Source**: `engine/SITE_ARCHITECTURE_RULES.md`

## 3. Product / Scope Decisions

### DEC-004: Base Package Determination as Corporate Website
- **Tarih**: 2026-08-17
- **Konu**: Domain base package seçimi.
- **Karar**: Base package'ın `corporate-website` olarak dondurulması (`demo-frontend` override edilmemesi).
- **Gerekçe**: Delivery profile `Prototype` veya satış demosu wording'i domain package'ını override edemez.
- **Etkiler**: Multi-page corporate site kuralları ve validasyonu eksiksiz uygulanır.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` Section 7

### DEC-005: Strict Factual Claim Allowlist Enforcement
- **Tarih**: 2026-08-17
- **Konu**: Kaynakta yer almayan firma/hizmet iddialarının engellenmesi.
- **Karar**: Yalnızca `SRC-001` içindeki doğrulanmış gerçeklerin (firma adı, yetkili servis statüsü, 3 hizmet adı, Trakya bölgesi) kullanılması; stok, garanti, SLA vb. iddiaların yasaklanması.
- **Gerekçe**: Factual claim expansion kaynağa bağlı kalmayı zorunlu kılar.
- **Etkiler**: İçerik metinlerinde uydurma veri yer almaz, unknown değerler placeholder olarak yönetilir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` Section 10

## 4. Design / UX Decisions

### DEC-006: Anthracite Technical Surfaces & Amber Accent Visual Direction
- **Tarih**: 2026-08-17
- **Konu**: Görsel tema ve renk paleti seçimi.
- **Karar**: Koyu antrasit zeminler (`#0F141C`, `#161D2A`), amber/turuncu accent vurguları (`#FF9500`) ve kontrollü endüstriyel grid/teknik detay dilinin uygulanması.
- **Gerekçe**: Source materyalinde tercih edilen ve güven veren endüstriyel hassasiyet yönü olarak belirtilmiştir.
- **Etkiler**: Generic lacivert hero klişesinden uzak durularak özgün teknik kurumsal dil oluşturulur.
- **Durum**: User Approved (Concept) / Engine Resolved (Exact Tokens)
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` Section 9 & `DESIGN_SYSTEM.md`

## 5. Deprecated / Superseded Decisions

Henüz yürürlükten kaldırılan karar bulunmamaktadır.
