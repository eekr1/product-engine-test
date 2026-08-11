# Trakya Teknik Makine — WAVE_00: Foundation & Mock Service Boundary

- **Status**: Ready for Execution
- **Goal**: Proje bağımlılıklarını kurmak, [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md) uyarınca CSS değişkenlerini tanımlamak ve presentation katmanını mock veriden ayıran `IDataService` / `MockDataService` katmanını yazmak.

---

## 1. Why This Wave / Dependency Rationale

Frontend geliştirmenin sağlam temeller üzerine oturması ve kodun throwaway mimariye dönüşmemesi için tasarım token'ları ve service adapter boundary'si ilk adımda kurulmalıdır.

---

## 2. Canonical Sources to Read

1. [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
2. [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
3. [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

---

## 3. Dependencies

- Approved Project Input (`INPUT-TRAKYA-TEKNIK-MAKINE-V1`)
- No prior wave dependencies (Initial Wave).

---

## 4. Scope

### In Scope

- Modern frontend ortamının kurulması (Vite/React veya modüler JS).
- CSS değişkenlerinin (`:root` renk paleti, tipografi, spacing, border-radius) tanımlanması.
- `IDataService` interface'inin yazılması.
- `MockDataService` adaptörünün ve `companyData.json` / `mockContent.js` mock veri sağlayıcısının oluşturulması.

### Out of Scope

- Kompleks UI bileşenlerinin ve görsel sayfaların inşası (`WAVE_01`).
- Gerçek backend veya sunucu tarafı kodlaması.

---

## 5. Implementation Checklist

- [ ] Proje klasör yapısının (`src/components`, `src/services`, `src/styles`, `src/data`) oluşturulması.
- [ ] `:root` CSS değişkenlerinin (renk rolleri, font aileleri, boşluk değerleri) eklenmesi.
- [ ] `IDataService` arayüzünün (metotlar: `getCompanyInfo()`, `getServices()`, `getContactInfo()`) tanımlanması.
- [ ] `MockDataService` sınıfının yazılması ve doğrulanmış firma bilgilerini döndürmesinin sağlanması.

---

## 6. State / Role / Responsive Coverage

- Mock veri katmanı veri yüklenme (loading) ve hazır olma (ready) durumlarını desteklemelidir.
- Mobil ve masaüstü için CSS breakpoint değişkenleri (`--breakpoint-mobile`, `--breakpoint-desktop`) hazır edilmelidir.

---

## 7. Automated Verification

- `npm run dev` komutunun hatasız başlaması.
- `MockDataService` birim testlerinin / konsol çağrılarının doğru veriyi döndürdüğünün teyit edilmesi.

---

## 8. Manual QA

- Tarayıcı konsolunda JavaScript hatası olmaması.
- CSS değişkenlerinin tarayıcı inceleme (inspect) aracında tanımlı göründüğünün teyidi.

---

## 9. Acceptance / Exit Criteria

1. Proje sorunsuz derlenebilir durumda olmalıdır.
2. `MockDataService` firmaya ait doğrulanmış 3 hizmeti ve yetkilendirme beyanlarını nesne olarak döndürebilmelidir.
3. UI bileşenlerinin doğrudan import edebileceği `DataService` adaptörü dışa aktarılmış (export edilmiş) olmalıdır.

---

## 10. Handoff / Stop Rule

- Altyapı veya mock veri katmanı tamamlandıktan sonra [ai/CURRENT_STATUS.md](../../ai/CURRENT_STATUS.md) güncellenerek `WAVE_01` aşamasına devredilmelidir.

---

## Wave Result

- **Result Status**: Pending Execution
- **Completion Date**: 
- **Notes**: Wave 00 uygulanmaya hazırdır.
