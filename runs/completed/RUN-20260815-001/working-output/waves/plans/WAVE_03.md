# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Core Services Presentation

- **Status**: Pending Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Firmanın sunduğu 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) teknik derinlik, net hiyerarşi ve endüstriyel görsel kart kompozisyonu ile sunmak.

## 1. Parent Wave Map Entry

- **Goal**: 3 temel hizmeti görsel kart hiyerarşisiyle detaylandırmak.
- **Committed Capabilities**:
  - Core Service 1: Yedek Parça Temini Presentation Card (Support: SCP-004)
  - Core Service 2: Yerinde Teknik Destek Presentation Card (Support: SCP-004)
  - Core Service 3: Makine Bakım ve Onarım Presentation Card (Support: SCP-004)
  - Service Data Consumption via `companyService` Adapter (Support: SCP-006)

## 2. Parent Capability Coverage

| Plan Capability Atom | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Yedek Parça Temini Service Card Component | Core Service 1: Yedek Parça Temini Presentation Card | implementation-of | PASS |
| Yerinde Teknik Destek Service Card Component | Core Service 2: Yerinde Teknik Destek Presentation Card | implementation-of | PASS |
| Makine Bakım ve Onarım Service Card Component | Core Service 3: Makine Bakım ve Onarım Presentation Card | implementation-of | PASS |
| Async/Sync Service Data Fetching from `companyService` | Service Data Consumption via `companyService` Adapter | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Firmanın iş modelinin ve müşteriye sunduğu ana değerlerin sergilendiği temel ürün/hizmet sunumu katmanıdır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- WAVE_00 (Foundation & Scaffolding)
- WAVE_01 (Primary Entry & Hero Surface)

## 6. Scope

### In Scope
- 3 temel hizmetin (Yedek Parça Temini [FCL-003], Yerinde Teknik Destek [FCL-004], Makine Bakım ve Onarım [FCL-005]) kart kompozisyonu ile sunumu.
- Hizmet verilerinin `companyService.getServices()` üzerinden çekilmesi.
- Teknik ikonlar ve endüstriyel görsel kart detayları.

### Out of Scope
- Online e-ticaret yedek parça kataloğu, teklif alma sepeti veya fiyat modülü.

## 7. Expected Result / Target Structure

```text
/
├── index.html (Services section markup added)
├── styles/main.css (Services grid styling added)
└── components/
    ├── ServicesSection.js
    └── ServiceCard.js
```

## 8. Implementation Checklist

- [ ] ServicesSection bileşeni oluşturulacak. (Parent Atom: Core Services Presentation)
- [ ] `companyService.getServices()` fonksiyonu çağrılarak 3 hizmet kartı render edilecek. (Parent Atom: Service Data Consumption)
- [ ] ServiceCard bileşeni 1: Yedek Parça Temini kartı (FCL-003) oluşturulacak. (Parent Atom: Core Service 1 Card)
- [ ] ServiceCard bileşeni 2: Yerinde Teknik Destek kartı (FCL-004) oluşturulacak. (Parent Atom: Core Service 2 Card)
- [ ] ServiceCard bileşeni 3: Makine Bakım ve Onarım kartı (FCL-005) oluşturulacak. (Parent Atom: Core Service 3 Card)

## 9. State / Role / Responsive Coverage

- Masaüstünde 3 sütunlu yan yana kart dizilimi; tablette 2 sütun; mobilde tek dikey sütun.
- Kart hover etkileşimlerinde `200ms ease-out` CSS geçişi.

## 10. Automated Verification

- Hizmet kart sayısı denetimi (Tam 3 hizmet kartının oluştuğu ve veri uyuşmazlığı olmadığı doğrulanacak).

## 11. Manual QA / Debug Verification

- Hizmet başlıklarının doğrulanmış FCL kayıtları ile eşleştiği kontrol edilecek.

## 12. Acceptance / Exit Criteria

- [ ] 3 temel hizmet kartı responsive biçimde render ediliyor.
- [ ] Veri doğrudan `companyService` üzerinden çekiliyor.

## 13. Handoff / Stop Rule

WAVE_03 tamamlandığında WAVE_04 (Direct Contact & Communication Access) başlayabilir.

---

## Wave Result

- **Status**: Pending Execution
- **Result**: Not executed yet (planning phase complete).
