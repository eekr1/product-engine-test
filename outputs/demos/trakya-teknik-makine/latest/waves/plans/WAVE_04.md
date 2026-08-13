# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_04: Cross-Cutting QA & Polish

- **Status**: Pending Execution
- **Goal**: Tüm yüzeylerin responsive davranışlarını (320px..1440px), FCL metin doğruluğunu ve satış görüşmesi sunum kalitesini test edip son dokunuşları yapmak.

## 1. Why This Wave / Dependency Rationale

`DEMO_FRONTEND_PACKAGE` kuralı uyarınca tüm projeyi kapsayan cross-cutting responsive sweep, FCL denetimi ve genel QA ayrı bir final dalga olarak tanımlanmak zorundadır.

## 2. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies

- `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03` (Tüm önceki dalgalar)

## 4. Scope

### In Scope
- Tüm ekran genişliklerinde (320px Mobil, 768px Tablet, 1024px Masaüstü, 1440px Geniş Ekran) dikey ve yatay responsive denetimi.
- Metin içeriklerinin FCL kayıtlarıyla (FCL-001..FCL-006) tam uyum denetimi.
- Lighthouse performans, erişilebilirlik ve SEO kontrolleri.
- Satış sunumuna hazırlık cilalaması (visual polish, mikro-etkileşim ayarları).

### Out of Scope
- Yeni ürün özelliği veya kapsam dışı modül eklenmesi.

## 5. Expected Result / Target Structure

- Satış görüşmesinde sunulmaya hazır, hatasız, yüksek performanslı kurumsal frontend demo.

## 6. Implementation Checklist

- [ ] TASK-040: 320px, 768px, 1024px ve 1440px ekran çözünürlüklerinde yatay kayma veya taşma denetimi yap.
- [ ] TASK-041: Metinlerde geçen firma adı, yetkili servis unvanı ve 3 ana hizmet adının FCL kayıtlarıyla %100 örtüştüğünü doğrula.
- [ ] TASK-042: Görsel performans (FCP < 1.0s) ve buton etkileşim sürelerini doğrulayarak son stüdyo dokunuşlarını yap.
- [ ] TASK-043: `CURRENT_STATUS.md` ve `NEXT_TASKS.md` belgelerini tamamlandı olarak güncelle.

## 7. State / Role / Responsive Coverage

- Cross-device & cross-browser verification.

## 8. Automated Verification

- Static HTML/CSS validator & link integrity checks.

## 9. Manual QA / Debug Verification

- Müşteri satış görüşmesi simülasyonu (baştan sona demo sunum akışı).

## 10. Acceptance / Exit Criteria

- Sıfır görünüm hatası.
- Metin doğruluğu %100 FCL uyumlu.
- Demo satış sunumuna hazır.

## 11. Handoff / Stop Rule

- WAVE_04 tamamlandığında proje yayına/sunuma hazır hâle gelir.

---

## Wave Result

- Status: Pending Execution (Henüz çalıştırılmadı).
