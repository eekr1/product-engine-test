# Trakya Teknik Makine — WAVE_04: Contact Page & Direct Contact Capabilities

- **Status**: Completed
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: İletişim sayfasını (`PAGE-007`) yalnızca doğrudan telefon ve e-posta iletişim bağlantıları (`tel:`, `mailto:`) sunacak şekilde inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_04
Name: Contact Page & Direct Contact Capabilities
Goal: Implement Contact page (PAGE-007) with direct phone & email contact capabilities
Dependencies: WAVE_01
Upstream Consumed: WAVE_01 shell, ILETIM_DESIGN_PACKAGE.md
Downstream Handoff: WAVE_05 QA
Exit Boundary: /iletisim contains zero form/inputs/submit/map/WhatsApp; tel: & mailto: direct links function cleanly
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Contact page presentation & navigation | `CAP-013` (Contact page presentation & navigation) | `implementation-of` | PASS |
| Direct phone (`tel:`) contact trigger | `CAP-014` (Direct phone & email direct-contact capability) | `implementation-of` | PASS |
| Direct email (`mailto:`) contact trigger | `CAP-014` (Direct phone & email direct-contact capability) | `implementation-of` | PASS |

- `NEW_PLAN_CAPABILITIES` = `[]` (empty)

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| `PAGE-007` | `PAGE-007` | İletişim (`/iletisim`) — Direct Contact Surface | PASS |

- `NEW_PLAN_PAGES` = `[]` (empty)

## 4. Why This Wave / Dependency Rationale

- İletişim sayfası strict negative test gereksinimlerine tabidir. Form/submit/harita/WhatsApp ögelerinden arındırılmış direct-contact kabiliyeti olarak yalıtılmalıdır.

## 5. Canonical Sources to Read

- `design/pages/ILETIM_DESIGN_PACKAGE.md`
- `ai/PRODUCT_RULES.md` (BR-001, BR-002)
- `engine/CAPABILITY_SCOPE_RULES.md`
- `ref/waves/WAVE_07_HOME_REFERENCE.md`

## 6. Dependencies

- `WAVE_01` (Global Shell & Navigation Architecture).

## 7. Scope

### In Scope

- `src/pages/ContactPage.tsx`
- `src/components/DirectPhoneContactCard.tsx`
- `src/components/DirectEmailContactCard.tsx`
- `src/components/RegionalServiceContextCard.tsx`

### Out of Scope

- Contact form / demo form.
- Form input alanları (isim, mail, mesaj).
- Submit / send butonu.
- Form success / error state'leri.
- Statik veya canlı harita.
- WhatsApp ikonu / chat entegrasyonu.
- Randevu alma akışı.

## 8. Expected Result / Target Structure

```text
src/
├── pages/
│   └── ContactPage.tsx
└── components/
    ├── DirectPhoneContactCard.tsx
    ├── DirectEmailContactCard.tsx
    └── RegionalServiceContextCard.tsx
```

## 9. Implementation Checklist

- [x] **Task 04.1 — Contact Page Layout & Header**:
  - Location: `src/pages/ContactPage.tsx`.
  - Action: İletişim sayfasının üst başlığını, breadcrumb (`Ana Sayfa > İletişim`) ve direct contact açıklamasını kodlayın.
  - Parent Capability: `CAP-013`. Parent Page: `PAGE-007`.
  - Done Criteria: `/iletisim` rotasında antrasit/amber tema ile sayfa açılır.
- [x] **Task 04.2 — Direct Phone Contact Card**:
  - Location: `src/components/DirectPhoneContactCard.tsx`.
  - Action: Doğrudan telefon ile arama tetikleyen ikonu ve `tel:` bağlantısını barındıran kart bileşenini yazın.
  - Parent Capability: `CAP-014`. Parent Page: `PAGE-007`.
  - Done Criteria: Kart tıklandığında `tel:` bağlantısı tetiklenir.
- [x] **Task 04.3 — Direct Email Contact Card**:
  - Location: `src/components/DirectEmailContactCard.tsx`.
  - Action: Doğrudan e-posta gönderme eylemini tetikleyen ikonu ve `mailto:` bağlantısını barındıran kart bileşenini yazın.
  - Parent Capability: `CAP-014`. Parent Page: `PAGE-007`.
  - Done Criteria: Kart tıklandığında `mailto:` bağlantısı tetiklenir.
- [x] **Task 04.4 — Negative Test Integrity Audit**:
  - Location: `src/pages/ContactPage.tsx`.
  - Action: Sayfada hiçbir `<form>`, `<input>`, `<textarea>`, `<button type="submit">`, iframe (harita) veya WhatsApp linki kalmadığını kod denetimiyle doğrulayın.
  - Parent Capability: `CAP-013`. Parent Page: `PAGE-007`.
  - Done Criteria: Zero unsupported capability (form/map/WhatsApp) doğrulanır.

## 10. State / Role / Responsive Coverage

- Masaüstünde 2 kolonlu kart yapısı (Telefon + E-posta), mobilde dikey akış.

## 11. Automated Verification

```bash
npm run dev
```

## 12. Manual QA / Debug Verification

- `/iletisim` sayfasını açın. Form/input/submit olmadığını gözle doğrulayın.

## 13. Acceptance / Exit Criteria

- [x] Negative test %100 başarılıdır.
- [x] Direct phone/email bağlantıları çalışır.

## 14. Handoff / Stop Rule

- `WAVE_04` tamamlandığında final `WAVE_05` QA ve entegrasyon dalgasına geçilir.

---
## Wave Result

- **Result**: PASSED
