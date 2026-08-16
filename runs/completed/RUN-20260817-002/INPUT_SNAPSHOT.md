# Input Snapshot — RUN-20260817-002

- **Input ID**: INPUT-TRAKYA-TEKNIK-MAKINE-V1
- **Input Version**: 1
- **Approval Date**: 2026-08-17T02:17:37+03:00

## 1. Onaylı Proje Özeti (Snapshot)

Trakya Teknik Makine için satış görüşmelerinde kullanılmak üzere modern, güven veren ve profesyonel bir kurumsal frontend web sitesi demosu (landing page) hazırlanması. Proje kaynağı `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` self-contained project truth olarak esas alınmıştır. Doğrulanmış factual bilgiler: Firma adı (Trakya Teknik Makine), Statü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi), Hizmet 1 (Yedek Parça Temini), Hizmet 2 (Yerinde Teknik Destek), Hizmet 3 (Makine Bakım ve Onarım), Bölge bağlamı (Trakya bölgesi, endüstriyel/makine teknik servis bağlamı).

## 2. Başlangıç Kapsamı ve Teslimat Hedefi

- **Proje Türü**: `landing-page`
- **Hedef Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Primary Language**: `tr`

## 3. Approved Scope Registry

| Scope ID | Item | Status | Source | Executable |
|---|---|---|---|---|
| SCP-001 | Modern ve responsive kurumsal frontend demo (landing page) | IN_SCOPE | PROJECT_INPUT Section 5 | YES |
| SCP-002 | Trakya Teknik Makine firma kimliği ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünün sunumu | IN_SCOPE | PROJECT_INPUT Section 5 | YES |
| SCP-003 | Üç onaylı hizmetin görsel sunumu (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) | IN_SCOPE | PROJECT_INPUT Section 5 | YES |
| SCP-004 | Direct-contact telefon/e-posta CTA yüzeyleri (code/config fallback values) | IN_SCOPE | PROJECT_INPUT Section 5 | YES |
| SCP-005 | Clean frontend service/data-access boundary (mock/local content configuration) | IN_SCOPE | PROJECT_INPUT Section 5 & 7 | YES |
| SCP-006 | Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim | IN_SCOPE | PROJECT_INPUT Section 3 & 5 | YES |
| SCP-007 | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi resmi statüsü | VERIFIED_CURRENT_TRUTH | PROJECT_INPUT Section 8 & 9 | NO |
| SCP-008 | Trakya bölgesi endüstriyel/makine teknik servis bağlamı | VERIFIED_CURRENT_TRUTH | PROJECT_INPUT Section 8 & 9 | NO |
| SCP-009 | Orijinal/stok parça, acil müdahale/SLA, periyodik bakım/revizyon iddiaları eklemek | OUT_OF_SCOPE | PROJECT_INPUT Section 5 | NO |
| SCP-010 | Adres, telefon, e-posta, çalışma saati, sertifika, referans uydurmak | OUT_OF_SCOPE | PROJECT_INPUT Section 5 | NO |
| SCP-011 | Gerçek admin paneli / CMS / veritabanı / backend API | OUT_OF_SCOPE | PROJECT_INPUT Section 5 | NO |
| SCP-012 | Authentication / e-ticaret / online ödeme | OUT_OF_SCOPE | PROJECT_INPUT Section 5 | NO |
| SCP-013 | Canlı harita / WhatsApp / form submit backend | OUT_OF_SCOPE | PROJECT_INPUT Section 5 | NO |
| SCP-014 | Production deployment / domain / hosting geçişi | OUT_OF_SCOPE | PROJECT_INPUT Section 5 | NO |
| SCP-015 | Müşteri tarafından verilecek exact iletişim bilgileri ve ek teknik detaylar | OPEN_QUESTION | PROJECT_INPUT Section 13 | NO |
| SCP-016 | Gelecekte CMS, canlı harita veya WhatsApp entegrasyonu eklenmesi | FUTURE | PROJECT_INPUT Section 5 | NO |
