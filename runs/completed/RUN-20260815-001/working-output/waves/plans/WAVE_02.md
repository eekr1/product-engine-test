# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Corporate Identity & Disan Trust

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine'nin kurumsal geçmişini ve Disan Hidrolik Trakya Bölge Yetkili Servisi güven rozetini/panelini sunmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_02
Name: Corporate Identity & Disan Trust
Goal: Trakya Teknik Makine'nin kurumsal geçmişini ve Disan Hidrolik Trakya Bölge Yetkili Servisi güven rozetini/panelini sunmak.
Committed Capabilities:
- Corporate About Section | SCP-003 | PASS
- Disan Authorized Service Trust Badge / Panel | SCP-003 | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Kurumsal Hakkımızda alanı ve metin yerleşimi | Corporate About Section | implementation-of | PASS |
| Disan Hidrolik Trakya Yetkili Servis doğrulama rozeti / paneli | Disan Authorized Service Trust Badge / Panel | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Potansiyel satış görüşmesinde firmanın yetkili servislik gücünü ve uzmanlığını doğrulamak en kritik güven unsurudur.

## 4. Canonical Sources to Read

- `ai/PRODUCT_RULES.md` (PRULE-001 & PRULE-003)
- `design/DESIGN_RULES.md`
- `ai/PROJECT_BRAIN.md`

## 5. Dependencies

- `WAVE_01` (Global Shell & Hero).

## 6. Scope

### In Scope

- Kurumsal Tanıtım / Hakkımızda Bölümü (`#about`).
- Disan Hidrolik Yetkili Servisi Güven Paneli ve Yetki Vurgusu.
- Teknik yetkinlik ve tecrübe özeti metinleri.

### Out of Scope

- Doğrulanmamış yeni müşteri referansları veya sertifikalar.

## 7. Expected Result / Target Structure

- `src/components/AboutSection.js` ve `src/components/TrustBadge.js` modülleri.

## 8. Implementation Checklist

- [ ] `TASK-020`: Hakkımızda alanı düzeninin ve metinlerinin `DESIGN_RULES.md` uyarınca hazırlanması.
- [ ] `TASK-021`: Disan Hidrolik Yetkili Servislik Güven Rozetinin ve açıklama kartının çizilmesi.
- [ ] `TASK-022`: Mobil ve masaüstü uyumunun test edilmesi.

## 9. State / Role / Responsive Coverage

- Rozet ve metinler mobil ekranlarda dikey, masaüstünde yan yana iki kolonlu düzende hizalanır.

## 10. Automated Verification

- Semantik yapıda `aria-label` kontrolleri yapılır.

## 11. Manual QA / Debug Verification

- Disan yetkili servis vurgusunun ilk bakışta kolayca fark edildiği doğrulanmalıdır.

## 12. Acceptance / Exit Criteria

- [ ] Kurumsal alan ve Disan yetkili servislik rozeti tam uyumla görüntüleniyor.
- [ ] Metinler doğrulanmış firma bilgileriyle uyuşuyor.

## 13. Handoff / Stop Rule

- `WAVE_02` tamamlandığında `WAVE_04` öncesi `WAVE_03` ile paralelleşebilir.

---

## Wave Result

- **Result**: Pending / Not Executed
