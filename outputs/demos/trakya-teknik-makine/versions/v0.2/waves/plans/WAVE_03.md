# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Services Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Firmanın 3 ana hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) güçlü görsel kartlar ve teknik detaylarla sergilemek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_03
Name: Services Presentation
Goal: Firmanın 3 ana hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) güçlü görsel kartlar ve teknik detaylarla sergilemek.
Committed Capabilities:
- Spare Parts Service Card | SCP-004 | PASS
- On-Site Support Service Card | SCP-004 | PASS
- Maintenance & Repair Service Card | SCP-004 | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Yedek Parça Temini kartı, SVG ikonu ve teknik açıklama metni | Spare Parts Service Card | implementation-of | PASS |
| Yerinde Teknik Destek kartı, SVG ikonu ve teknik açıklama metni | On-Site Support Service Card | implementation-of | PASS |
| Makine Bakım ve Onarım kartı, SVG ikonu ve teknik açıklama metni | Maintenance & Repair Service Card | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Müşterinin firmanın tam olarak ne iş yaptığını ve hangi konularda hizmet sunduğunu net olarak anlamasını sağlar.

## 4. Canonical Sources to Read

- `ai/PRODUCT_RULES.md` (PRULE-002)
- `design/DESIGN_RULES.md`
- `ai/TECH_CONTEXT.md` (companyData mock adapter)

## 5. Dependencies

- `WAVE_01` (Global Shell & Hero).

## 6. Scope

### In Scope

- Hizmetler Bölümü (`#services`).
- 3 Adet Özel Hizmet Kartı (Yedek Parça, Yerinde Destek, Bakım-Onarım).
- Kart üzeri hover mikro etkileşimleri ve teklif/iletişim yönlendirmeleri.

### Out of Scope

- Hizmet fiyatlandırması veya e-ticaret altyapısı.

## 7. Expected Result / Target Structure

- `src/components/ServicesSection.js` ve `src/components/ServiceCard.js` modülleri.

## 8. Implementation Checklist

- [ ] `TASK-030`: `companyData.js` modülünden hizmet verilerinin çekilmesi.
- [ ] `TASK-031`: Hizmetler bölümünün grid yapısının kurulması.
- [ ] `TASK-032`: 3 ana hizmet kartının SVG ikonlar ve `DESIGN_RULES.md` elevation ilkelerine göre çizilmesi.
- [ ] `TASK-033`: Kart hover ve odak durumlarının eklenmesi.

## 9. State / Role / Responsive Coverage

- Desktop'ta 3 kolonlu grid, Tablette 2/1 kolon, Mobilde tek kolonlu sıralama.

## 10. Automated Verification

- Kart bileşenlerinin DOM render doğrulaması.

## 11. Manual QA / Debug Verification

- 3 hizmetin de eşit görsel ağırlıkta ve sorunsuz görüntülendiği teyit edilmelidir.

## 12. Acceptance / Exit Criteria

- [ ] 3 hizmet kartı eksiksiz ve tasarıma tam uygun olarak sergileniyor.
- [ ] Kart hover efektleri akıcı çalışıyor.

## 13. Handoff / Stop Rule

- `WAVE_03` tamamlandığında `WAVE_04` (Contact) dalgasına geçilir.

---

## Wave Result

- **Result**: Pending / Not Executed
