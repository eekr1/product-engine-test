# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Tüm mimari, ürün ve tasarım kararları bu belgede izlenebilir metadata ve kaynak (provenance) bilgisiyle saklanır.

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Satış Demosu ve Integration-Ready Mimarisi
- **Tarih**: 2026-08-13
- **Konu**: Uygulama kapsamı ve veri mimarisi yaklaşımı.
- **Karar**: İlk teslimat frontend demo (`Prototype`) olacak, ancak veri katmanı ile sunum katmanı ayrılacak (`Service/Data Boundary`).
- **Kısa Gerekçe**: Öncelikli hedef potansiyel müşteriye yapılacak satış sunumudur. Veri katmanının ayrılması gelecekte gerçek backend/API eklendiğinde UI'ın yeniden yazılmasını önler.
- **Etkiler**: Veriler hardcoded yazılmaz, `data/companyData.js` mock service üzerinden okunur.
- **Durum**: User Approved
- **Source**: Canonical Explicit User Approval ("Onaylıyorum, devam et") & Approved Input v1

### DEC-002: Base Package ve Extension Seçimi
- **Tarih**: 2026-08-13
- **Konu**: Engine dokümantasyon paketi seçimi.
- **Karar**: Base package olarak `demo-frontend`, domain extension olarak `corporate-website` ve transition extension olarak `existing-project` seçilmiştir.
- **Kısa Gerekçe**: Proje hem satış demosu niteliğinde hem de var olan bir firmanın kurumsal sitesinin yenilenmesi bağlamını taşır.
- **Etkiler**: Planning overlay uyarınca `standard` implementation ve `light` design planning belgeleri türetilmiştir.
- **Durum**: Engine Resolved
- **Source**: Engine Contract (`engine/PACKAGE_RULES.md`)

## 3. Product / Scope Decisions

### DEC-003: Mevcut Firma Bilgilerinin Aynen Korunması
- **Tarih**: 2026-08-13
- **Konu**: İçerik doğruluğu ve firma iddiaları.
- **Karar**: Trakya Teknik Makine adı, Disan Hidrolik yetkili servis statüsü ve 3 ana hizmet (Yedek Parça, Yerinde Destek, Bakım/Onarım) aynen korunacak; doğrulanmamış yeni iddialar uydurulmayacaktır.
- **Kısa Gerekçe**: Kurumsal satış görüşmesinde gerçek firma bilgilerinin doğruluğu esastır.
- **Etkiler**: Firma iddiaları doğrulanmış kaynaklarla kısıtlanmıştır.
- **Durum**: User Approved
- **Source**: Approved Input v1 & Mevcut Site (`trakyateknikmakine.com`)

## 4. Design / UX Decisions

### DEC-004: Özgün Mühendislik Estetiği (Anti-Template Design)
- **Tarih**: 2026-08-13
- **Konu**: Görsel tasarım konsepti ve renk paleti.
- **Karar**: Klasik sanayi/lacivert şablon klişesinden kaçınılacak; Deep Slate Gray (`#0F172A`), Engineering Cyan (`#0EA5E9`) ve High-Contrast Accent renkleri ile *Precision Engineering* visual concept'i kurulacaktır.
- **Kısa Gerekçe**: Demoda projeye özel hazırlandığı hissi verilmeli, generic bootstrap şablon algısı yıkılmalıdır.
- **Etkiler**: `DESIGN_RULES.md` belgesinde detaylandırılan visual direction uygulanacaktır.
- **Durum**: User Approved
- **Source**: Approved Input v1 & `DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

*Henüz yürürlükten kaldırılan bir karar bulunmamaktadır.*
