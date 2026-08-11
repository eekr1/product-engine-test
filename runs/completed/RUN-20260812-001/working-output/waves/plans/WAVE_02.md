# Trakya Teknik Makine — WAVE_02: Authorized Partner, Contact CTAs & Demo Verification

- **Status**: Pending Execution (Blocked by WAVE_01)
- **Goal**: Disan Hidrolik Makine Trakya Bölge Yetkili Servis kartını, iletişim bölümünü, doğrudan telefon/e-posta CTA'larını tamamlamak, responsive polishi yapmak ve demo kabul kriterlerini doğrulamak.

## 1. Why This Wave / Dependency Rationale

`WAVE_01` ile kurumsal içerik ve hizmetler tamamlandıktan sonra, firmanın en kritik güven unsuru olan Disan Hidrolik yetkili servis partnerliği ve müşterinin kolayca ulaşmasını sağlayan iletişim kanallarının eklenerek projenin satış demosu hazır hâle getirilmesi gerekmektedir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- **Preceding Waves**: `WAVE_01` (Core Hero & Services Breakdown UI).
- **Required Baseline**: Functional Hero & Services Grid UI.

## 4. Scope

### In Scope

- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi Vurgu Kartı & Güven Rozeti.
- İletişim Bölümü (Adres, Telefon, E-posta, Çalışma Saatleri).
- Doğrudan İletişim CTA Butonları (`tel:` ve `mailto:` bağlantıları).
- Alt Bilgi (Footer) Alanı.
- Mobil cihazlar için Sabit Alt İletişim Çubuğu (Bottom Mobile Sticky Bar).
- Demo Kabul ve Kalite Doğrulaması.

### Out of Scope

- Gerçek veritabanı kayıtlı iletişim formu backend'i.

## 5. Expected Result / Target Structure

```text
index.html              (Yetkili Servis Card, Contact Section & Footer eklendi)
styles/
├── components/
│   ├── partner.css     (Disan Hidrolik kartı & güven rozeti stılleri)
│   ├── contact.css     (İletişim alanı & CTA buton stılleri)
│   └── footer.css      (Alt bilgi & mobil sabit çubuk stılleri)
scripts/
└── main.js             (Etkileşimler & CTA yönlendirmeleri)
```

## 6. Implementation Checklist

### Authorized Partner & Contact UI
- [ ] Disan Hidrolik Makine Trakya Bölge Yetkili Servis kartını `index.html` içinde oluştur; yetkili servis rozeti, açıklama ve teknik kapsam detaylarını yerleştir.
- [ ] `styles/components/partner.css` yaz; Disan mavisini (`#0A84FF`) ikincil vurgu olarak kullan, teknik sertifika/partner görünümü sağla.
- [ ] İletişim bölümünü ve detay kartlarını `index.html` içine ekle (Adres, Telefon, E-posta).
- [ ] `styles/components/contact.css` yaz; tıklanabilir telefon (`tel:`) ve e-posta (`mailto:`) butonlarını belirgin amber (`#FF6B00`) vurgularla tasarla.
- [ ] Mobil ekranlar (<768px) için sayfa altına sabit hızlı arama çubuğu ekle (`styles/components/footer.css`).

### Demo Verification & Polish
- [ ] Tüm cihaz kırılımlarında (360px, 768px, 1024px, 1440px) responsive taşma/kırılma kontrolü yap.
- [ ] Doğrulanmamış bilgi kalmadığını ve metinlerin `INPUT_SNAPSHOT.md` ile tam uyumunu kontrol et.
- [ ] Klavye gezinimi (`:focus-visible`) ve kontras oranlarını (WCAG AA 4.5:1) doğrula.

## 7. State / Role / Responsive Coverage

- **Mobile Specific**: Mobilde sayfa kaydırılırken alt kısımda sabit kalan "Hemen Ara" ikonu ve telefon arama butonu etkinleşir.
- **Click Actions**: Telefon numarasına tıklandığında doğrudan cihaz arama ekranı açılır.

## 8. Automated Verification

- W3C HTML validator ve CSS lint kuralları uyarınca hata olmaması.

## 9. Manual QA / Debug Verification

- Satış görüşmesi senaryosunda sayfanın 3 saniye içinde kullanıcının ilgisini çekip hizmetleri ve yetkili servis durumunu açıkça ilettiği doğrulanmalıdır.

## 10. Acceptance / Exit Criteria

- [ ] Disan Hidrolik yetkili servis alanı görsel olarak yüksek güven hissi veriyor.
- [ ] Telefon ve e-posta CTA'ları doğrudan cihaz bağlantılarını başlatıyor.
- [ ] Tüm responsive ekran genişliklerinde kusursuz çalışıyor.
- [ ] Demo satış görüşmesinde gösterilebilir kaliteye ulaştı.

## 11. Handoff / Stop Rule

`WAVE_02` başarıyla tamamlandığında proje yayına/gösterime hazır kabul edilir ve final output `outputs/demos/trakya-teknik-makine/latest/` dizinine teslim edilir.

---

## Wave Result

> PENDING EXECUTION — Bu bölüm wave çalıştırıldıktan sonra doldurulacaktır.
