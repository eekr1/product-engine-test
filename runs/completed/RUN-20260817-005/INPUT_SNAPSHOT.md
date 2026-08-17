# Input Snapshot — RUN-20260817-005

- **Input ID**: INPUT-TRAKYA-TEKNIK-MAKINE-V1
- **Input Version**: 1
- **Approval Date**: 2026-08-17T04:57:35+03:00
- **Approved By**: user

## 1. Onaylı Proje Özeti (Snapshot)

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Proje Türü**: `corporate-website`
- **Proje Modu**: `new`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `standard`
- **Primary Language**: `tr`

## 2. Başlangıç Kapsamı ve Teslimat Hedefi

Trakya Teknik Makine'nin firma ve hizmet bilgilerini profesyonel, modern ve güven veren 7 sayfalı kurumsal web sitesi satış demosu (`corporate-website`) olarak sunmak. Same-codebase continuation yapısında, package-managed frontend altyapısı ile backend/CMS büyümesine hazır mimari kurulacaktır.

## 3. Approved Scope Registry

| Scope ID | Item / Capability | Status | Source | Executable |
|---|---|---|---|---|
| `SCP-001` | Multi-page corporate website frontend demo architecture | `IN_SCOPE` | Section 1, 6 | YES |
| `SCP-002` | Ana Sayfa (`PAGE-001`, `/`) presentation & navigation | `IN_SCOPE` | Section 6, 7 | YES |
| `SCP-003` | Kurumsal (`PAGE-002`, `/kurumsal`) presentation & navigation | `IN_SCOPE` | Section 6, 7 | YES |
| `SCP-004` | Hizmetler Overview (`PAGE-003`, `/hizmetler`) presentation & navigation | `IN_SCOPE` | Section 6, 7 | YES |
| `SCP-005` | Yedek Parça Temini — Hizmet Detayı (`PAGE-004`, `/hizmetler/yedek-parca-temini`) presentation & navigation | `IN_SCOPE` | Section 6, 7 | YES |
| `SCP-006` | Yerinde Teknik Destek — Hizmet Detayı (`PAGE-005`, `/hizmetler/yerinde-teknik-destek`) presentation & navigation | `IN_SCOPE` | Section 6, 7 | YES |
| `SCP-007` | Makine Bakım ve Onarım — Hizmet Detayı (`PAGE-006`, `/hizmetler/makine-bakim-onarim`) presentation & navigation | `IN_SCOPE` | Section 6, 7 | YES |
| `SCP-008` | İletişim (`PAGE-007`, `/iletisim`) presentation & navigation | `IN_SCOPE` | Section 6, 7 | YES |
| `SCP-009` | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi status presentation | `IN_SCOPE` | Section 6, 10 | YES |
| `SCP-010` | Direct phone & email direct-contact capability (when exact values available) | `IN_SCOPE` | Section 6, 8 | YES |
| `SCP-011` | Clean frontend service / data-access boundary for mock/local data | `IN_SCOPE` | Section 6, 8, 11 | YES |
| `SCP-012` | Same-codebase continuation architecture for future growth | `IN_SCOPE` | Section 6, 8, 11 | YES |
| `SCP-013` | Sales-demo presentation quality & cross-page responsive consistency | `IN_SCOPE` | Section 6, 8, 9 | YES |
| `SCP-014` | Company facts / FCL allowlist (Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi, 3 approved services, Trakya region context) | `VERIFIED_CURRENT_TRUTH` | Section 10 | NO |
| `SCP-015` | Contact form / input fields / submit / send behavior / form success state / map / WhatsApp / booking / request flow | `OUT_OF_SCOPE` | Section 6 | NO |
| `SCP-016` | Backend database / CMS admin panel / authentication / online payment | `OUT_OF_SCOPE` | Section 6 | NO |
| `SCP-017` | Unbacked company claims (history, references, employee count, certificates, stock guarantees, SLA, mobile fleet, periodic maintenance schedule, press expertise) | `OUT_OF_SCOPE` | Section 6 | NO |
