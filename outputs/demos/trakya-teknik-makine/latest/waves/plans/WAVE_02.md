# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Corporate Identity & Technical Trust

- **Status**: Pending Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine'nin kurumsal geçmişini, Trakya bölgesindeki sanayi/makine uzmanlığını ve Disan Hidrolik ile resmi teknik iş birliği gücünü detaylandıran kurumsal güven alanını geliştirmek.

## 1. Parent Wave Map Entry

- **Goal**: Firma kurumsal tanıtımı, Trakya bölgesi uzmanlığı ve Disan Hidrolik yetkili servis güven alanını geliştirmek.
- **Committed Capabilities**:
  - Corporate Profile & Regional Expertise Presentation (Support: SCP-001, SCP-007)
  - Technical Trust Indicators & Disan Hidrolik Authorization Details (Support: SCP-003, SCP-007)

## 2. Parent Capability Coverage

| Plan Capability Atom | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| About Section Layout & Corporate Narrative | Corporate Profile & Regional Expertise Presentation | implementation-of | PASS |
| Trakya Regional Service Coverage Callout | Corporate Profile & Regional Expertise Presentation | detail-of | PASS |
| Disan Hidrolik Technical Authorization Card | Technical Trust Indicators & Disan Hidrolik Authorization Details | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Satış görüşmesinde potansiyel müşterinin firma yetkinliğini ve teknik arkalanını doğrulaması için gerekli kurumsal güven zeminini kurar.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- WAVE_00 (Foundation & Scaffolding)
- WAVE_01 (Primary Entry & Hero Surface)

## 6. Scope

### In Scope
- Kurumsal tanıtım / Hakkımızda bölümü (Trakya bölgesi makine ve hidrolik servis gücü).
- Disan Hidrolik Bölge Yetkili Servisi teknik yetkinlik ve güven göstergeleri.
- Siteden doğrulanmış firma metinlerinin modern kurumsal sunumu (FCL-001, FCL-002, FCL-006).

### Out of Scope
- Sahte müşteri yorumları, uydurma referans logoları veya kanıtlanmamış sertifika iddiaları.

## 7. Expected Result / Target Structure

```text
/
├── index.html (About & Trust section markup added)
├── styles/main.css (About & Trust styling rules added)
└── components/
    └── About.js
```

## 8. Implementation Checklist

- [ ] Kurumsal tanıtım bileşeni (About) responsive kart yapısıyla geliştirilecek. (Parent Atom: Corporate Profile & Regional Expertise Presentation)
- [ ] Trakya bölgesi hizmet gücü vurgusu metin olarak yerleştirilecek. (FCL-006; Parent Atom: Corporate Profile & Regional Expertise Presentation)
- [ ] Disan Hidrolik Trakya Bölge Yetkili Servisi detay kartı ve teknik güven rozetleri eklenecek. (FCL-002; Parent Atom: Technical Trust Indicators & Disan Hidrolik Authorization Details)

## 9. State / Role / Responsive Coverage

- Masaüstünde 2 sütunlu yan yana düzen (Sol: Kurumsal Tanıtım, Sağ: Yetkili Servis Güvencesi); mobilde dikey tek sütunlu akış.
- Yüksek okunabilirlik ve `DESIGN_RULES.md` renk kontrastı ilkeleri.

## 10. Automated Verification

- Semantik HTML ve accessibility denetimi.

## 11. Manual QA / Debug Verification

- Firma metinlerinin doğrulanmış verilerle (FCL zinciri) tam uyuştuğu kontrol edilecek.

## 12. Acceptance / Exit Criteria

- [ ] Kurumsal tanıtım ve yetkili servis güven bölümü responsive tamamlanmış.
- [ ] Sadece doğrulanmış veriler (Disan Hidrolik Yetkili Servis) sunuluyor.

## 13. Handoff / Stop Rule

WAVE_02 tamamlandığında WAVE_03 (Core Services Presentation) ile paralel/sıralı olarak ilerlenebilir.

---

## Wave Result

- **Status**: Pending Execution
- **Result**: Not executed yet (planning phase complete).
