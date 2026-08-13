# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Ajan Çalışma İlkeleri

- **Kanonik Sözleşmelere Uyum**: Ajan projede çalışırken `Root README.md`, `ai/PROJECT_BRAIN.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md` ve `design/DESIGN_RULES.md` belgelerini authoritative kaynak olarak kabul eder.
- **Wave-Based Execution**: Ajan tek seferde tüm projeyi yazmaya çalışmaz; `waves/WAVE_MAP.md` tarafından belirlenen aktif `WAVE_<NN>.md` planındaki görevleri sırayla uygular.
- **Data Boundary Korunumu**: Ajan UI bileşenlerine hardcoded veri yazmaz; verileri `src/services/dataService.js` üzerinden çeker.
- **Visual Character**: Ajan jenerik hazır tema kodlayamaz; `DESIGN_RULES.md` içindeki **Precision Industrial Modernism** görsel diline uyar.

## 2. Okuma ve Başlangıç Sırası

Yeni bir ajan göreve başladığında şu sırayla okuma yapar:

1. [README.md](../README.md)
2. [PROJECT_BRAIN.md](./PROJECT_BRAIN.md)
3. [PRODUCT_RULES.md](./PRODUCT_RULES.md)
4. [TECH_CONTEXT.md](./TECH_CONTEXT.md)
5. [DESIGN_RULES.md](../design/DESIGN_RULES.md)
6. [WAVE_MAP.md](../waves/WAVE_MAP.md)
7. [CURRENT_STATUS.md](./CURRENT_STATUS.md)
8. Aktif [WAVE_00.md](../waves/plans/WAVE_00.md)
9. [NEXT_TASKS.md](./NEXT_TASKS.md)

## 3. Kodlama ve Dokümantasyon Güncelleme Kuralları

- Bir wave tamamlandığında ajan `CURRENT_STATUS.md` belgesindeki aktif wave durumunu günceller.
- Kod eklemeleri yapılırken presentation katmanı ile mock data provider ayrımı korunur.
- Yeni bir iş kuralları değişikliği gerektiğinde önce `PRODUCT_RULES.md` güncellenir.
