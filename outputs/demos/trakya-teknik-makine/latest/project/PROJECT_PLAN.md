# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

Bu projenin teslimat stratejisi; Trakya Teknik Makine'nin mevcut web sitesindeki doğrulanmış bilgileri (FCL-001..FCL-006) koruyan, modern tipografi ve özgün endüstriyel görsel kimlik taşıyan ve 5 kademeli (WAVE_00 .. WAVE_04) dalga mimarisiyle uygulanan bir **Frontend Sales Demo** hazırlamaktır.

## 2. Phases / Milestones

- **Phase 1: Foundation & Alignment (Wave 00)**
  - Milestone 1: Modüler presentation klasör yapısı, CSS design tokens ve `companyMockData.js` adapter katmanının kurulması.
- **Phase 2: Primary Entry & Identity (Wave 01)**
  - Milestone 2: Hero section, kurumsal tanıtım ve Disan Hidrolik Yetkili Servisliği güven bölümünün tamamlanması.
- **Phase 3: Service Portfolio Presentation (Wave 02)**
  - Milestone 3: 3 temel hizmetin (Yedek Parça Temini, Yerinde Destek, Bakım & Onarım) detaylı kart ve sunum bileşenlerinin tamamlanması.
- **Phase 4: Contact & Action Surfaces (Wave 03)**
  - Milestone 4: Telefon, e-posta, iletişim formu/CTA ve bölgesel servis alanı etkileşimlerinin tamamlanması.
- **Phase 5: Cross-Cutting Verification & Handoff (Wave 04)**
  - Milestone 5: Tüm ekranlarda (320px, 768px, 1024px, 1440px) responsive doğrulama, FCL içerik doğrulaması ve demo satış sunumu teslimi.

## 3. Wave Relationship

Planlanan 5 dalga sıralı bağımlılık zincirine sahiptir:

```text
WAVE_00 (Foundation)
  └──> WAVE_01 (Identity & Hero)
        └──> WAVE_02 (Services)
              └──> WAVE_03 (Contact)
                    └──> WAVE_04 (Cross-Cutting QA & Polish)
```

## 4. Dependency Overview

- `WAVE_01`, `WAVE_00` temelinde dondurulan CSS Custom Properties (`tokens.css`) ve `companyMockData.js` adapter'ına bağımlıdır.
- `WAVE_02`, `WAVE_01` kurumsal görsel diline ve modüler layout shell'ine bağımlıdır.
- `WAVE_03`, `WAVE_02` hizmet kartlarının tamamlanmasına bağımlıdır.
- `WAVE_04` tüm önceki yüzeylerin tamamlanmış olmasına ve bağımsız QA doğrulama kuralına tabidir.

## 5. Deliverables

- Çalışır ve satış görüşmesinde gösterilebilir modern kurumsal frontend demo.
- Modüler CSS design token ve stil kütüphanesi (`styles/tokens.css`).
- Temiz data/service boundary taşıyan `companyMockData.js` adapter servisi.
- Tamamlanmış 11 canonical doküman ve 5 wave plan instance'ı.

## 6. Acceptance Conditions

- Demo ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern görünmelidir.
- Jenerik kurumsal şablon hissiyatı vermemelidir.
- Mevcut doğrulanmış firma bilgileri (FCL-001..FCL-006) eksiksiz korunmalı, sahte bilgi uydurulmamalıdır.
- Mobil ve masaüstü breakpoint'lerde sorunsuz dikey ve yatay akış sunmalıdır.
- Presentation katmanı veriyi mock adapter üzerinden tüketmelidir.

## 7. Scope Growth / Upgrade Boundaries

- **Gelecek Backend Geçişi (Future Scope)**: Satış görüşmesi sonrası müşteri onaylarsa mock adapter yerine gerçek REST API adapter bağlanabilir, CMS veya yönetim paneli eklenebilir. Bu gelecek adımlar bugünkü committed scope'un parçası değildir.
