# Assumptions Register — RUN-20260815-001

## 1. Aktif Varsayımlar Listesi

| Assumption ID | Context / Domain | Yapılan Varsayım | Sınıf | Gerekçe | Etki | Validation Needed | Status |
|---|---|---|---|---|---|---|---|
| ASM-001 | Content Language | Proje ana dili Türkçe (tr) olarak sunulacaktır. | safe | Trakya bölgesindeki endüstriyel makine kullanıcılarına hitap etmektedir. | Tüm kurumsal metinler Türkçe üretilecektir. | No | Approved |
| ASM-002 | Frontend Tech Stack | HTML/CSS/JS (Vanilla CSS + ES Module local data adapter architecture) kullanılacaktır. | bounded | Satış demosu için ek karmaşıklık olmaksızın hızlı ve güvenilir frontend deneyimi sunar. | Mimaride Presentation-Data Access Boundary temiz tutulacaktır. | No | Approved |
| ASM-003 | Direct Contact CTA Format | Telefon için `tel:`, e-posta için `mailto:` bağlantı şemaları placeholder direct CTA olarak sunulacaktır. | bounded | Gerçek telefon/e-posta tedariği açık soru (Q-002) durumundadır. | Statik CTA tıklandığında cihazın varsayılan iletişim uygulamasını tetikler. | Yes | Active |

## 2. Onaylanan veya Doğrulanan Varsayımlar

- ASM-001 ve ASM-002 approved intake snapshot'ta onaylanmıştır.

## 3. Yüksek Riskli Varsayımlar ve Kullanıcı Onay Beklentisi

- Kritik yüksek riskli varsayım bulunmamaktadır.
