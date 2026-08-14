# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Services & Technical Capability Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine'nin 3 temel hizmet alanının (Yedek Parça Temini, Yerinde Teknik Destek, Bakım & Onarım) detaylı kartlar, teknik vurgular ve endüstriyel ikonlarla sunulması.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_02
- **Name**: Services & Technical Capability Presentation
- **Parent Goal**: Trakya Teknik Makine'nin 3 temel hizmet alanının (Yedek Parça Temini, Yerinde Teknik Destek, Bakım & Onarım) detaylı kartlar, teknik vurgular ve endüstriyel ikonlarla sunulması.
- **Committed Capabilities**:
  - Yedek Parça Temini Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | PASS
  - Yerinde Teknik Destek Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | PASS
  - Bakım & Onarım Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | PASS

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Services Section Layout & Grid (`js/components/Services.js`) | Yedek Parça Temini Hizmet Sunumu | implementation-of | PASS |
| Yedek Parça Temini Detay Kartı & Teknik İkonlar | Yedek Parça Temini Hizmet Sunumu | detail-of | PASS |
| Yerinde Teknik Destek Detay Kartı & Mobil Ekip Vurgusu | Yerinde Teknik Destek Hizmet Sunumu | detail-of | PASS |
| Bakım & Onarım Detay Kartı & Revizyon Prosedürleri | Bakım & Onarım Hizmet Sunumu | detail-of | PASS |
| Services Data Binding via `CompanyService` | Yedek Parça Temini Hizmet Sunumu | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Firmanın ticari değerinin ve uzmanlığının temeli sunduğu 3 ana hizmettir. `WAVE_02`, `WAVE_01` karşılama alanının hemen ardından müşteriye firmanın teknik yetkinliğini 3 güçlü kart yapısıyla gösterir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_01.md`

## 5. Dependencies

- `WAVE_00` (Data Adapter & Services Data).
- `WAVE_01` (Hero Layout Continuity).

## 6. Scope

### In Scope
- Hizmetler bölüm başlığı ve giriş spotu.
- 3 temel hizmet alanının responsive grid kart yapısında sunulması:
  1. **Yedek Parça Temini**: Orijinal hidrolik ve makine yedek parçaları, hızlı temin, geniş stok gücü.
  2. **Yerinde Teknik Destek**: Trakya bölgesinde 7/24 yerinde müdahale, mobil servis aracı ve uzman teknisyen desteği.
  3. **Bakım & Onarım**: Hidrolik pompa, silindir, valf ve genel makine revizyonu, periyodik bakım ve test prosedürleri.
- Her hizmet kartı için endüstriyel ikon, teknik özet ve avantaj vurguları.
- `CompanyService.getServices()` üzerinden veri entegrasyonu.

### Out of Scope
- E-ticaret alışveriş sepeti veya fiyat teklif ödeme sistemi.
- Gerçek backend veritabanı sorguları.
- Kapsam dışı 4. veya 5. sahte hizmet uydurulması.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html
└── js/
    └── components/
        └── Services.js
```

## 8. Implementation Checklist

- [ ] `js/components/Services.js` bileşenini oluşturarak 3 sütunlu endüstriyel grid container'ını hazırlayarak DOM'a bağla (`SCP-003`).
- [ ] `CompanyService.getServices()` metodundan dönen veriyi kullanarak "Yedek Parça Temini" kartını render et (`FCL-003`, `SCP-003`).
- [ ] "Yerinde Teknik Destek" kartını mobil servis vurgusu ve Trakya bölge servisi detayı ile render et (`FCL-003`, `SCP-003`).
- [ ] "Bakım & Onarım" kartını hidrolik ve makine revizyon detayları ile render et (`FCL-003`, `SCP-003`).
- [ ] Her kart için `DESIGN_RULES.md` uyarınca grafite yüzey (`#1A212D`), amber ikon ve hover yükselme mikro-animasyonu uygula (`PR-UX-02`).
- [ ] Mobil ekranlarda 3 kartın dikey olarak okunabilir sırayla dizildiğini doğrula (`PR-UX-01`).

## 9. State / Role / Responsive Coverage

- **Normal State**: 3 hizmet kartı eşit yükseklikte ve net ikon-metin hiyerarşisiyle görüntülenir.
- **Hover State**: İlgili hizmet kartının çerçevesi amber renge kayar ve 2px hafifçe yukarı kalkar.
- **Mobile Responsive**: Masaüstünde 3 sütun olan düzen, mobilde 1 dikey sütuna dönüşür.

## 10. Automated Verification

- Data Count Check: `Services.js` bileşeninin tam olarak 3 adet hizmet kartı ürettiğini doğrula (`FCL-003`).
- Service Binding Check: Kart verilerinin `ServicesData.js` kaynaklı metinleri doğru içerdiğini denetle.

## 11. Manual QA / Debug Verification

- Hizmet kartlarındaki teknik metinlerin doğrulanmış bilgilerle eşleştiği ve sahte iddia içermediği kontrol edilmelidir.
- Mobilde kartlar arası boşlukların (spacing) dengeli olduğu doğrulanmalıdır.

## 12. Acceptance / Exit Criteria

- [ ] 3 temel hizmet alanı görsel ve teknik olarak eksiksiz sunuluyor.
- [ ] Veri `CompanyService` katmanından dinamik alınıyor.
- [ ] Tasarım jenerik template hissi vermiyor; endüstriyel kart yapısına sahip.

## 13. Handoff / Stop Rule

`WAVE_02` tamamlandığında, `WAVE_03` (Corporate Identity & Direct Contact Conversion) geliştirmesine geçmek için hizmetler bölümü hazır teslim edilir.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state)
