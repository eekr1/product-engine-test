# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Core Services Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Approved 3 temel hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) endüstriyel görsel ve metinsel hiyerarşi ile sunulmasını sağlamak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_02
Name: Core Services Presentation
Goal: Approved 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) endüstriyel görsel ve metinsel hiyerarşi ile sunulmasını sağlamak.
Why Separate: Hizmet sunumu projenin ana değer önermesidir; DEMO_FRONTEND_PACKAGE kuralı uyarınca iletişim yüzeylerinden ayrı bağımsız bir dalga olarak geliştirilmelidir.
Committed Capabilities:
  - Ana Hizmet 1: Yedek Parça Temini görsel ve metinsel sunumu | SCP-003 | Service 1 presentation | PASS
  - Ana Hizmet 2: Yerinde Teknik Destek görsel ve metinsel sunumu | SCP-004 | Service 2 presentation | PASS
  - Ana Hizmet 3: Makine Bakım ve Onarım görsel ve metinsel sunumu | SCP-005 | Service 3 presentation | PASS
  - Hizmet qualifier'ları yokluğu kuralının uygulanması | SCP-011 | Strict factual service boundary | PASS
In Scope: Services Section Grid yapısı, Her hizmet kartı için ikon, başlık, kısa açıklama ve teknik servis detay paftası, companyService.getServices() ile veri bağlama.
Out of Scope: Hizmet qualifier'ları (stok, orijinal parça, mobil filo, acil müdahale, SLA, periyodik bakım, revizyon), İletişim CTA'ları (WAVE_03).
Primary Deliverables: ServicesSection (src/ui/components/ServicesSection.js), ServiceCard (src/ui/components/ServiceCard.js)
Dependencies: WAVE_01.
Upstream Boundary Consumed: WAVE_01 ana sayfa düzeni ve companyService hizmet verisi.
Downstream Handoff: WAVE_03 için 3 hizmeti eksiksiz sergileyen görsel sunum katmanı.
Exit Boundary: 3 approved hizmet kartının companyService üzerinden okunup WCAG AA standartlarında kusursuz sergilenmesi.
```

## 2. Parent Capability Coverage

| Plan Capability | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Services Section Grid Container | Ana Hizmet 1, 2, 3 sunum temeli (`SCP-003`, `SCP-004`, `SCP-005`) | implementation-of | PASS |
| Service Card 1: Yedek Parça Temini Presentation | Ana Hizmet 1: Yedek Parça Temini görsel ve metinsel sunumu (`SCP-003`) | implementation-of | PASS |
| Service Card 2: Yerinde Teknik Destek Presentation | Ana Hizmet 2: Yerinde Teknik Destek görsel ve metinsel sunumu (`SCP-004`) | implementation-of | PASS |
| Service Card 3: Makine Bakım ve Onarım Presentation | Ana Hizmet 3: Makine Bakım ve Onarım görsel ve metinsel sunumu (`SCP-005`) | implementation-of | PASS |
| Strict Factual Service Copy Sanitizer Guard | Hizmet qualifier'ları yokluğu kuralının uygulanması (`SCP-011`) | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`DEMO_FRONTEND_PACKAGE` Granularity Guard uyarınca Services ve Contact sorumlulukları aynı wave içine birleştirilemez. `WAVE_01` ile marka kimliği kurulduktan sonra, firmanın sunduğu 3 temel teknik hizmet bu dalgada özerk ve güçlü bir görsel grid yapısı ile sunulmalıdır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_01.md`

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_01` (Header & Hero surface layout), `WAVE_00` (`companyService.js` data access boundary).

## 6. Scope

### In Scope
- Services Section Grid Container (`src/ui/components/ServicesSection.js`): Section başlığı, alt açıklama, 3 kolonlu responsive grid.
- Individual Service Card (`src/ui/components/ServiceCard.js`):
  - Kart 1: **Yedek Parça Temini** (Endüstriyel makine parçaları temin desteği).
  - Kart 2: **Yerinde Teknik Destek** (Saha teknik servis ve arıza müdahale sunumu).
  - Kart 3: **Makine Bakım ve Onarım** (Makine performans ve teknik onarım sunumu).
- Dynamic data binding via `companyService.getServices()`.
- Interactive hover effects (Industrial Amber border highlight, 200ms cubic-bezier transition).

### Out of Scope
- Hizmet isimlerine kaynakta olmayan qualifier'lar (`stok`, `orijinal parça`, `mobil filo`, `acil müdahale`, `SLA`, `periyodik bakım`, `revizyon`) eklemek (YASAK).
- E-ticaret / online yedek parça sipariş sepeti (Kapsam dışı).
- İletişim CTA butonları ve iletişim formu (WAVE_03).

## 7. Expected Result / Target Structure

```text
src/ui/components/
├── ServicesSection.js
└── ServiceCard.js
```

## 8. Implementation Checklist

- [ ] **Task 2.1 — Services Section Container Component**
  - **Location / Responsibility**: `src/ui/components/ServicesSection.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-003`, `SCP-004`, `SCP-005`.
  - **Inputs / Dependencies**: `companyService.js`, `styles/main.css`.
  - **Implementation Behavior**: Bölüm başlığı ("Hizmetlerimiz"), mühendislik alt başlığı ve 3 kartlık grid kapsayıcısı DOM'a eklenir. `companyService.getServices()` metodundan dönen veriyi bekler ve skeleton/loading durumunu yönetir.
  - **Applicable States / Responsive**: 1-column layout (mobile), 3-column layout (desktop 1024px+).
  - **Preserve / Must Not**: 3 kart dışında 4. veya sahte bir hizmet kartı üretilemez.
  - **Verification**: Tarayıcıda bölümün 3 kulvarlı grid olarak düzgün belirdiği doğrulanır.
  - **Done Result**: Services Section kapsayıcısı hazır.

- [ ] **Task 2.2 — Service Card Presentation & Factual Copy Guard**
  - **Location / Responsibility**: `src/ui/components/ServiceCard.js`.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-003`, `SCP-004`, `SCP-005`, `SCP-011`.
  - **Inputs / Dependencies**: Service Data Object (`id`, `title`, `description`, `icon`).
  - **Implementation Behavior**: Her hizmet kartı için endüstriyel SVG ikon, başlık ve onaylı açıklama metni render edilir. `SCP-011` kuralı gereği metinlerde yasaklı kelime denetimi (sanitizer) çalıştırılır.
  - **Preserve / Must Not**: Metinlerde "orijinal parça", "stoktan", "mobil filo", "SLA", "7/24 acil" gibi source-backed olmayan kelimelerin yer alması engellenir.
  - **Verification**: Kart başlıklarının tam olarak `Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım` olduğu kontrol edilir.
  - **Done Result**: Service Card bileşeni ve factual copy guard hazır.

## 9. State / Role / Responsive Coverage

- **Hover & Focus State**: Kartlar üzerinde gezinirken Industrial Amber renkli teknik çerçeve belirir; klavye tab odağında belirgin focus indicator gösterilir.
- **Responsive Layout**: Mobilde dikey 3 kart dökümü, masaüstünde 3 eşit kolon.

## 10. Automated Verification

- `companyService.getServices()` verisinin 3 kart olarak DOM'a doğru bind edildiği denetlenir.

## 11. Manual QA / Debug Verification

- Hizmet kartlarının metinleri incelenir. `Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım` dışında 4. bir kart veya unapproved qualifier bulunmadığı teyit edilir.

## 12. Acceptance / Exit Criteria

- [ ] Sitede tam olarak 3 approved hizmet kartı sergileniyor.
- [ ] Hizmet isimleri: `Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`.
- [ ] Kart metinlerinde hiçbir yasaklı qualifier (`stok`, `orijinal parça`, `SLA` vb.) yok.
- [ ] Veri doğrudan `companyService.js` üzerinden çekiliyor.

## 13. Handoff / Stop Rule

`WAVE_02` tamamlandığında `WAVE_03` (Direct Contact CTA & Regional Context) başlayabilir.

---
## Wave Result

- **Status**: Pending Execution (Generation Phase Completed).
