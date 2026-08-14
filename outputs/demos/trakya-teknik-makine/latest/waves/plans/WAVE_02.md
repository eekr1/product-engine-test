# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Corporate Trust & 3 Primary Services

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine'nin 3 temel hizmetini ve kurumsal güven unsurlarını görsel hiyerarşiyle sunmak.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_02
- **Name**: Corporate Trust & 3 Primary Services
- **Goal**: Kurumsal hakkımızda özeti, Disan Yetkili Servisliği ve 3 temel hizmet kartı.
- **Primary Deliverables**: 3 Hizmet Kartı, Hakkımızda Bölümü, Güven Blokları.
- **Dependencies**: WAVE_01.

## 2. Why This Wave / Dependency Rationale

Hero alanı tamamlandıktan sonra firmanın ana işini oluşturan 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Bakım ve Onarım) detaylı ama anlaşılır biçimde sunulması gerekir. Bu wave firmanın teknik yetkinliğini kanıtlayan birincil içerik alanıdır.

## 3. Canonical Sources to Read

- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 4. Dependencies

WAVE_01 (Primary Entry & Brand Hero) tamamlanmış olmalıdır.

## 5. Scope

### In Scope

- Kurumsal Hakkımızda / Tanıtım bölümü (`About.js`).
- 3 Temel Hizmet Kartı bileşeni (`Services.js`):
  1. Yedek Parça Temini
  2. Yerinde Teknik Destek
  3. Makine Bakım ve Onarım
- Servis özellik listeleri ve teknik ikon vurguları.
- Hizmet kartları için hover ve odaklanma etkileşimleri.

### Out of Scope

- E-ticaret sepeti veya canlı stok sorgulama.
- Randevu / servis takvim backend entegrasyonu.

## 6. Expected Result / Target Structure

```text
src/
├── components/
│   ├── About.js
│   └── Services.js
└── styles/
    ├── about.css
    └── services.css
```

## 7. Implementation Checklist

- [ ] `mockDataService.getServices()` metodundan hizmet verilerinin çekilmesi.
- [ ] Hakkımızda bölümü HTML yapısının ve stilinin kurulması.
- [ ] 3 Hizmet kartının 3 sütunlu (mobilde 1 sütunlu) grid yapısında render edilmesi.
- [ ] Her hizmet kartı için ikon, başlık, kısa açıklama ve kapsanan teknik detayların eklenmesi.
- [ ] Hover durumunda kartlarda mikro yukarı yükselme (`translateY(-4px)`) ve turuncu kenarlık vurgusunun uygulanması.

## 8. State / Role / Responsive Coverage

- **Desktop (1024px+)**: Yan yana 3 eşit genişlikte hizmet kartı.
- **Mobile (< 768px)**: Dikey hizalanmış kartlar, dokunmatik kolaylığı sağlayan padding alanları.

## 9. Automated Verification

- DOM doğrulama: 3 adet hizmet kartının render edildiğinin ve başlıklarının doğru döküldüğünün doğrulanması.

## 10. Manual QA / Debug Verification

- Hizmet kartlarının üzerinde fare ile gezinildiğinde hover efektinin akıcılığının ve mobil görünümde kartların çakışmadığının kontrolü.

## 11. Acceptance / Exit Criteria

- [ ] 3 temel hizmet (Yedek Parça, Teknik Destek, Bakım-Onarım) eksiksiz ve açık biçimde görünmeli.
- [ ] Kartlar mock service verilerini doğru kullanmalı.
- [ ] Sektör klişesi zemin görsellerinden kaçınılmalı, temiz mühendislik görünümü korunmalı.

## 12. Handoff / Stop Rule

WAVE_02 tamamlandığında WAVE_03 (Contact & Conversion Touchpoints) uygulamasına geçilebilir.

---

## Wave Result

Status: Pending Execution
