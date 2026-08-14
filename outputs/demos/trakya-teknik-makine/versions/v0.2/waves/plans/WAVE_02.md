# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Interactive Demo Sections, Services & Contact Flows

- **Status**: Pending Execution
- **Goal**: Hakkımızda, 3 Ana Hizmet (Yedek Parça, Yerinde Destek, Bakım/Onarım), Disan Hidrolik Yetkili Servisliği ve İletişim Formu etkileşimini tamamlayıp proaktif satış sunumu için hazır hale getirmek.

## 1. Why This Wave / Dependency Rationale

- `WAVE_00` ve `WAVE_01` ile kurulan altyapı ve layout üzerinde müşteriye sunulacak tüm içerik bölümlerini ve etkileşimleri tamamlar.

## 2. Canonical Sources to Read

1. `ai/PRODUCT_RULES.md`
2. `design/DESIGN_RULES.md`
3. `ai/TECH_CONTEXT.md`
4. `waves/plans/WAVE_01.md`

## 3. Dependencies

- `WAVE_01` (Layout Shell, Design System Primitives ve Hero).

## 4. Scope

### Scope References
- `SCP-020`: Corporate & Authorized Service Sections
- `SCP-021`: 3 Core Services Breakdown Cards & Details
- `SCP-022`: Interactive Contact Form & Client-Side Handler
- `SCP-023`: Final Whole-Project QA & Presentation Readiness

### In Scope
- `src/components/sections/About.jsx` ve `DealerBadge.jsx` (Disan Hidrolik yetkili servisliği).
- `src/components/sections/Services.jsx` (Yedek Parça Temini, Yerinde Destek, Bakım ve Onarım kartları).
- `src/components/sections/ContactForm.jsx` (Client-side form handler ve doğrulama).
- Tam proje duyarlılık (responsive) ve satış demosu sunum kontrolü (Final QA).

### Out of Scope
- Sunucu tarafı veritabanı veya gerçek e-posta gönderimi.

## 5. Expected Result / Target Structure

```text
src/components/sections/
├── Hero.jsx
├── About.jsx
├── Services.jsx
├── DealerBadge.jsx
└── ContactForm.jsx
```

## 6. Implementation Checklist

- [ ] `TASK-020` (Scope Ref: SCP-020): Kurumsal Hakkımızda ve Disan Hidrolik Yetkili Servislik bölümünü dondurulmuş verilerle kodla.
- [ ] `TASK-021` (Scope Ref: SCP-021): 3 ana hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detaylı kart yapısıyla kodla.
- [ ] `TASK-022` (Scope Ref: SCP-022): İletişim bölümünü, telefon/e-posta CTA'larını ve client-side form gönderim bildirimi (toast/modal) ile `ContactForm.jsx` olarak geliştir.
- [ ] `TASK-023` (Scope Ref: SCP-023): Final Whole-Project QA: Tüm sayfayı responsive, cross-browser, renk kontrastı ve build açısından doğrula.

## 7. State / Role / Responsive Coverage

- Form girdilerinde doldurulmamış alanlar uyarı vermeli; gönderildiğinde başarı modalı/toastu çıkıp alanlar sıfırlanmalıdır.

## 8. Automated Verification

- `npm run build` static bundle komutu 0 uyarısız ve 0 hatasız tamamlanmalıdır.

## 9. Manual QA / Debug Verification

- Satış görüşmesi simülasyonu: Ziyaretçinin sitede gezinmesi, hizmetleri incelemesi ve iletişim CTA'larına tıklaması doğrulanmalı.

## 10. Acceptance / Exit Criteria

- [ ] 3 ana hizmet ve yetkili servislik net şekilde vurgulanmış olmalı.
- [ ] Tasarım generic kurumsal şablon hissi vermemeli.
- [ ] İletişim formu client-side başarı bildirimi sunmalı.
- [ ] Build hatasız alınmalı.

## 11. Handoff / Stop Rule

- Proje demo paketi `outputs/demos/trakya-teknik-makine/latest/` ve `versions/v0.2/` altında yayınlanır.

---
## Wave Result
- **Status**: Pending Execution
