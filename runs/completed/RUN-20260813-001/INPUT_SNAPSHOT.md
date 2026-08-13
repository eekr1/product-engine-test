# Input Snapshot — RUN-20260813-001

- **Input ID**: INPUT-TRAKYA-TEKNIK-MAKINE-V1
- **Input Version**: 1
- **Approval Date**: 2026-08-13T04:43:23+03:00

## 1. Onaylı Proje Özeti (Snapshot)

- **Proje Adı:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug:** `trakya-teknik-makine`
- **Proje Türü:** `landing-page`
- **Proje State:** `existing`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Birincil Dil:** `tr`
- **Amac:** Trakya Teknik Makine'nin mevcut web sitesindeki gerçek firma bilgilerini ve Disan Hidrolik Yetkili Servisi kimliğini koruyarak, satış görüşmelerinde müşteriye sunulacak modern, profesyonel, yüksek etkili kurumsal frontend demo üretmek.

## 2. Başlangıç Kapsamı ve Teslimat Hedefi

- **Proje Türü**: landing-page
- **Hedef Delivery Profile**: Prototype

## 3. Approved Scope Registry (SCP)

| Scope ID | Item Description | Status | Source Section | Executable |
|---|---|---|---|---|
| SCP-001 | Modern ve responsive kurumsal frontend demo tasarımı | IN_SCOPE | Section 5 (In Scope) | YES |
| SCP-002 | Disan Hidrolik Makine Trakya Bölge Yetkili Servis kimliği vurgusu | IN_SCOPE | Section 3 & 5 | YES |
| SCP-003 | 3 Ana Hizmet sunumu (Yedek Parça, Yerinde Destek, Bakım & Onarım) | IN_SCOPE | Section 3 & 5 | YES |
| SCP-004 | İletişim noktaları ve CTA'lar (Telefon `tel:`, E-posta `mailto:`) | IN_SCOPE | Section 5 (In Scope) | YES |
| SCP-005 | Presentation / Service katmanı ayrımı (`UI -> Service Interface -> Local Mock Adapter`) | KNOWN_DECISION | Section 7 (Technical Context) | YES |
| SCP-006 | Statik mock/local data module kullanımı | KNOWN_DECISION | Section 7 (Technical Context) | YES |
| SCP-007 | Sektör klişelerinden uzak projeye özgü endüstriyel görsel dil (`DESIGN_RULES`) | KNOWN_DECISION | Section 8 (Design Context) | YES |
| SCP-008 | Mevcut SITE123 sitesindeki doğrulanmış firma bilgilerinin dondurularak kullanılması | VERIFIED_CURRENT_TRUTH | Section 6 (Current Reality) | NO |
| SCP-009 | Gerçek Admin Paneli / CMS uygulaması | OUT_OF_SCOPE | Section 5 (Out of Scope) | NO |
| SCP-010 | Real Backend / Database / API endpoint uygulaması | OUT_OF_SCOPE | Section 5 (Out of Scope) | NO |
| SCP-011 | Authentication / Kullanıcı hesap yönetimi | OUT_OF_SCOPE | Section 5 (Out of Scope) | NO |
| SCP-012 | Online ödeme / E-ticaret altyapısı | OUT_OF_SCOPE | Section 5 (Out of Scope) | NO |
| SCP-013 | Production deployment / DNS / domain yönlendirme | OUT_OF_SCOPE | Section 5 (Out of Scope) | NO |
| SCP-014 | Müşteri doğrulaması olmayan sahte referans/sertifika/başarı iddiaları türetmek | OUT_OF_SCOPE | Section 5 (Out of Scope) | NO |
| SCP-015 | Teklif Talep formu / İletişim formu API entegrasyonu | FUTURE | Section 5 (Future) | NO |
| SCP-016 | WhatsApp hızlı destek entegrasyonu | OPEN_QUESTION | Section 13 (Open Questions) | NO |
