# Trakya Teknik Makine — WAVE_02: Polish, Contact & Sales Demo Readiness

- **Status**: Scheduled
- **Goal**: İletişim kanallarını, Footer bileşenini eklemek; responsive/erişilebilirlik cilalarını tamamlamak ve demoyu satış görüşmesinde sorunsuz sunulacak olgunluğa getirmek.

---

## 1. Why This Wave / Dependency Rationale

`WAVE_01` ile tamamlanan ana sayfa ve hizmet görsellerini tamamlayıcı iletişim kanalları, responsive optimizasyon ve nihai kalite kontrolleri ile canlı satış sunumu seviyesine taşımak gerekir.

---

## 2. Canonical Sources to Read

1. [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)
2. [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
3. [waves/plans/WAVE_01.md](./WAVE_01.md)

---

## 3. Dependencies

- `WAVE_01` (Core UI & Service Showcase) tamamlanmış olmalıdır.

---

## 4. Scope

### In Scope

- İletişim bölümü ve CTA bağlantıları (`tel:`, `mailto:`).
- Kurumsal Footer (Alt bilgi) bileşeni.
- Tüm ekran boyutları için dikey/yatay responsive cilalama (mobile, tablet, desktop).
- W3C AA kontrast ve klavye erişilebilirlik kontrolleri.
- Nihai satış görüşmesi performans ve görünüm doğrulaması.

### Out of Scope

- Gerçek backend sunucusu ve veritabanı.

---

## 5. Implementation Checklist

- [ ] İletişim Bölümü ve Hızlı Erişim CTA kartlarının inşası.
- [ ] Kurumsal Footer bileşeninin eklenmesi.
- [ ] Mobil ve tablet breakpoint optimizasyonlarının yapılması.
- [ ] Erişilebilirlik (AA kontrast, focus ring) kontrollerinin tamamlanması.
- [ ] Demo sunum akışının baştan sona test edilmesi.

---

## 6. State / Role / Responsive Coverage

- İletişim butonları mobilde tam genişlikli (`width: 100%`) kolay dokunulabilir butonlar olmalıdır.
- Tüm cihaz çözünürlüklerinde dikey/yatay taşma (overflow) olmamalıdır.

---

## 7. Automated Verification

- `npm run build` komutunun hatasız üretim paketini oluşturması.
- Linter ve tip kontrollerinin temiz geçmesi.

---

## 8. Manual QA

- Mobil cihaz simülatöründe veya gerçek cihazda sayfa düzeninin ve butonların dokunulabilirliğinin kontrolü.
- Telefon ve e-posta bağlantılarının doğru uygulamaları tetiklediğinin doğrulanması.

---

## 9. Acceptance / Exit Criteria

1. Demo mobil ve masaüstü cihazlarda satış görüşmesinde sunulacak kusursuzlukta çalışmalıdır.
2. Tüm iletişim noktaları kolay erişilebilir ve işlevsel olmalıdır.
3. Tasarım kalitesi generic şablon hissi vermemeli, kurumsal güven aşamalıdır.

---

## 10. Handoff / Stop Rule

- Wave 02 tamamlandığında demo kabul edilir, [ai/CURRENT_STATUS.md](../../ai/CURRENT_STATUS.md) `Completed` durumuna güncellenir ve çıktı paketi yayınlanır.

---

## Wave Result

- **Result Status**: Scheduled
- **Completion Date**: 
- **Notes**: Wave 02 planlanmıştır.
