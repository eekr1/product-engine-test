# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

Trakya Teknik Makine kurumsal web sitesi yenileme projesi, potansiyel müşteri satış görüşmesinde gösterilmek üzere hazırlanan **Prototype delivery profile** seviyesinde bir frontend demo çalışmasıdır.

Teslimat stratejisi 3 temel ilkeye dayanmaktadır:
1. **Veri Doğruluğu**: Mevcut sitedeki (`https://www.trakyateknikmakine.com/`) doğrulanmış firma bilgileri ve 3 ana hizmet kapsamı aynen korunur.
2. **Clean Architecture**: Demo olmasına karşın presentation katmanı mock data adapter katmanından ayrılır (Future integration readiness).
3. **Wave-Based Execution**: Uygulama 3 sıralı dalgada (`WAVE_00`, `WAVE_01`, `WAVE_02`) aşamalı olarak inşa edilir.

## 2. Phases / Milestones

- **Milestone 1: Foundation & Data Boundary (WAVE_00)**
  - HTML5/CSS3 modüler yapısı, Design Tokens (`main.css`), tipografi ve `CompanyDataService` mock adapter katmanının tamamlanması.
- **Milestone 2: Corporate Identity & Trust Shell (WAVE_01)**
  - Sticky Header, Hero Banner, Disan Hidrolik Yetkili Servisi rozeti (Precision Badge) ve Kurumsal Tanıtım alanının tamamlanması.
- **Milestone 3: Services Showcase & Sales Demo Readiness (WAVE_02)**
  - 3 Ana Hizmet kartının (Yedek Parça, Yerinde Destek, Bakım-Onarım) eklenmesi, telefon/e-posta CTA'larının bağlanması, responsive QA ve satış görüşmesine hazır teslimat.

## 3. Wave Relationship

```text
Phase 1: Foundation         ---> WAVE_00 (Foundation & Data Boundary)
Phase 2: Corporate Shell    ---> WAVE_01 (Corporate Shell & Trust Showcase)
Phase 3: Services Showcase  ---> WAVE_02 (Services Showcase & Demo Verification)
```

## 4. Dependency Overview

- `WAVE_01`, `WAVE_00` çıktısı olan Design Tokens, CSS Reset ve Data Service katmanına bağımlıdır.
- `WAVE_02`, `WAVE_01` çıktısı olan Header, Hero ve Kurumsal tanıtım kabuğuna bağımlıdır.

## 5. Deliverables

1. **Frontend Demo Uygulaması**: `index.html`, `main.css` ve modüler JS bileşenleri.
2. **Design Rules Belgesi**: [DESIGN_RULES.md](../design/DESIGN_RULES.md).
3. **Execution Wave Planları**: [WAVE_MAP.md](../waves/WAVE_MAP.md), `WAVE_00.md`, `WAVE_01.md`, `WAVE_02.md`.
4. **Integration Readiness Mimarisi**: Clean Service Boundary & Mock Data Adapter.

## 6. Acceptance Conditions

- Demo, 320px-1920px arası tüm ekranlarda sorunsuz ve responsive çalışmalıdır.
- Sektör klişelerinden uzak, projeye özgü visual concept sergilenmelidir.
- Sitede sahte veritabanı, uydurma backend veya doğrulanmamış firma iddiaları yer almamalıdır.
- Telefon ve e-posta hızlı iletişim aksiyonları mobilde ve masaüstünde aktif çalışmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Gelecek Fazlar (Sales Demo Sonrası Onaylanırsa)**:
  - Gerçek CMS / Backend entegrasyonu.
  - İletişim formu veritabanı kaydı & e-posta bildirimi.
  - WhatsApp hızlı destek butonu & Canlı harita widget'ı.
  - Production hosting & domain taşıma.
