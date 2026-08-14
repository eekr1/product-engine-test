# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Primary Entry & Authorized Service Trust

- **Status**: Ready for Execution
- **Goal**: Ana sayfa Hero bölümünün, 3 saniyede anlaşılır firma tanımının ve Disan Hidrolik Trakya Bölge Yetkili Servisliği güven vurgusunun geliştirilmesi.

## 1. Why This Wave / Dependency Rationale
Ziyaretçinin ve satış görüşmesi yapılan müşterinin ilk gördüğü alan Hero ve Güven bölümüdür. `WAVE_00` üzerinde inşa edilir.

## 2. Canonical Sources to Read
- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies
- `WAVE_00` (Foundation & Service Boundary)

## 4. Scope
### Scope References
- `SCP-001` (Responsive modern frontend corporate demo)
- `SCP-002` (Disan Hidrolik Trakya Bölge Yetkili Servisliği presentation)
- `SCP-007` (Project-specific visual concept)

### In Scope
- Header / Navigation Shell (Logo, Hızlı İletişim Butonu, Bölüm Bağlantıları).
- Hero Section (Ana Başlık, Alt Tanım, Hızlı İncele ve İletişim CTA'ları).
- Authorized Service Trust Card (Disan Hidrolik yetkili servis rozeti, yetkinlik vurgusu).

### Out of Scope
- Detaylı hizmet kartları (`WAVE_02`).
- İletişim adres/harita detayları (`WAVE_03`).

## 5. Expected Result / Target Structure
`src/components/Header.js`, `src/components/Hero.js`, `src/components/TrustBadge.js` modülleri ve ilgili CSS stilleri.

## 6. Implementation Checklist
- [ ] Header bileşenini ve mobil uyumlu navigasyon kapsayıcısını inşa et. `Scope Ref: SCP-001`
- [ ] Hero bileşenini geliştir; 3 saniye kuralına uygun güçlü başlık ve alt metni ekle (`FCL-001`). `Scope Ref: SCP-001`
- [ ] Disan Hidrolik Trakya Bölge Yetkili Servisliği rozetini ve güven paneli bileşenini ekle (`FCL-002`). `Scope Ref: SCP-002`
- [ ] Bileşenleri `contentService.getCompanyInfo()` verisine bağla. `Scope Ref: SCP-007`

## 7. State / Role / Responsive Coverage
- Mobil menü açık/kapalı durumu.
- Masaüstü ve mobil ekranlarda Hero başlık okunabilirliği.

## 8. Automated Verification
- DOM elementi ve başlık metni varlık testi.

## 9. Manual QA / Debug Verification
- Ekran 320px genişliğe düşürüldüğünde navigasyonun ve yetkili servis rozetinin düzgün hizalandığının kontrolü.

## 10. Acceptance / Exit Criteria
- [ ] 3 saniye kuralı karşılanıyor; firma uzmanlığı ve yetkili servisliği anında anlaşılıyor.
- [ ] Tasarım jenerik hazır şablon hissi vermiyor.

## 11. Handoff / Stop Rule
`WAVE_01` tamamlandığında `WAVE_02` (Services Showcase) geliştirilmeye başlanacaktır.

---
## Wave Result
- **Status**: Ready for Execution
- **Completion Evidence**: Pending execution
