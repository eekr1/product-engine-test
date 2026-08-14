# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Corporate Identity & Direct Contact Conversion

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Firmanın Trakya bölgesi servis gücünü, teknik yetkinliğini ve doğrudan iletişim bilgilerini sunan kurumsal bölüm ile iletişim ve footer alanının inşası.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_03
- **Name**: Corporate Identity & Direct Contact Conversion
- **Parent Goal**: Firmanın Trakya bölgesi servis gücünü, teknik yetkinliğini ve doğrudan iletişim bilgilerini sunan kurumsal bölüm ile iletişim ve footer alanının inşası.
- **Committed Capabilities**:
  - Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | SCP-004 | Kurumsal güven ve bölge odaklı yetkinlik tanıtımı | PASS
  - İletişim Bilgileri ve Doğrudan Erişilebilir Telefon/E-posta CTA'ları | SCP-005 | Doğrudan iletişim CTA'ları erişimi | PASS

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Kurumsal Tanıtım & Hakkımızda Bileşeni (`js/components/About.js`) | Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | implementation-of | PASS |
| Trakya Bölge Servis Gücü & Güven Vurguları | Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | detail-of | PASS |
| Doğrudan İletişim Bilgileri Bileşeni (`js/components/Contact.js`) | İletişim Bilgileri ve Doğrudan Erişilebilir Telefon/E-posta CTA'ları | implementation-of | PASS |
| Doğrudan `tel:` ve `mailto:` Erişilebilirlik Alanları | İletişim Bilgileri ve Doğrudan Erişilebilir Telefon/E-posta CTA'ları | detail-of | PASS |
| Footer Hızlı Bağlantılar ve Telif Bileşeni (`js/components/Footer.js`) | Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Hizmetlerin incelenmesinin ardından potansiyel müşterinin firma güvenilirliğini (Disan Hidrolik yetkili servisi, Trakya bölge hakimiyeti) doğrulaması ve iletişim kurması gerekir. `WAVE_03`, `WAVE_01` ve `WAVE_02` üzerine bu dönüşüm katmanını ekler.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_02.md`

## 5. Dependencies

- `WAVE_01` (Hero & Primary CTA).
- `WAVE_02` (Services Grid).

## 6. Scope

### In Scope
- Kurumsal Tanıtım (Hakkımızda) Alanı: Trakya Teknik Makine'nin uzmanlık geçmişi, Disan Hidrolik Trakya yetkili servisi unvanı, bölge odaklı hizmet yaklaşımı.
- Doğrudan İletişim Bölümü: Telefon numaraları, e-posta adresleri, açık adres/bölge bilgisi, mesai saatleri.
- Tıklanabilir dikey ve yatay `tel:` ve `mailto:` bağlantıları.
- Footer Bileşeni: Kurumsal telif hakkı, hızlı navigasyon bağlantıları, yetkili servis logosu/rozet alanı.

### Out of Scope
- Form submit backend'leri ve AJAX simülasyonları.
- Canlı Google Maps JavaScript API entegrasyonu (Statik bölge/adres bilgisi verilir).
- WhatsApp canlı sohbet widget'ı.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html
└── js/
    └── components/
        ├── About.js
        ├── Contact.js
        └── Footer.js
```

## 8. Implementation Checklist

- [ ] `js/components/About.js` bileşenini kurarak Trakya Teknik Makine kurumsal hikayesini ve bölge servis gücünü render et (`FCL-004`, `SCP-004`).
- [ ] `js/components/Contact.js` bileşenini kurarak doğrudan telefon ve e-posta erişim kartlarını ekle (`SCP-005`).
- [ ] İletişim numaralarını ve e-posta adreslerini `CompanyService` üzerinden dinamik okuyacak şekilde bağla (`SCP-006`).
- [ ] İletişim alanında telefon bağlantılarına `href="tel:..."` ve e-posta bağlantılarına `href="mailto:..."` ataması yap (`PR-BEH-01`).
- [ ] `js/components/Footer.js` bileşenini oluşturarak hızlı sayfa içi navigasyonu ve telif uyarısını tamamla (`SCP-004`).
- [ ] Masaüstü ve mobilde İletişim ve Footer alanlarının yüksek okunabilirlikle sunulduğunu doğrula (`PR-UX-03`).

## 9. State / Role / Responsive Coverage

- **Normal State**: Kurumsal metinler ve iletişim bağlantıları tam okunabilirlikle (`#F1F5F9`) görüntülenir.
- **Interactive State**: Telefon ve e-posta bağlantılarına gelindiğinde amber alt çizgi ve renk vurgusu belirir.
- **Mobile Responsive**: İletişim detayları mobil ekranda tek sütunda büyük dokunma hedefleriyle (`44px+`) hizalanır.

## 10. Automated Verification

- Contact Protocol Check: DOM içindeki tüm telefon bağlantılarının `tel:` ve e-posta bağlantılarının `mailto:` şeması taşıdığını doğrula.
- Unapproved Feature Guard: DOM içinde `<form action="...">`, Google Maps `<iframe>` veya WhatsApp widget komut dosyası bulunmadığını doğrula.

## 11. Manual QA / Debug Verification

- Telefon ve e-posta bağlantılarına tıklandığında ilgili arama veya e-posta uygulamasının tetiklendiği kontrol edilmelidir.
- Sitede uydurma müşteri yorumu veya sahte sertifika bulunmadığı doğrulanmalıdır.

## 12. Acceptance / Exit Criteria

- [ ] Kurumsal tanıtım ve iletişim bölümleri eksiksiz çalışıyor.
- [ ] Doğrudan iletişim CTA'ları sorunsuz işliyor.
- [ ] Scope dışı form backend, harita script'i veya WhatsApp widget'ı barındırmıyor.

## 13. Handoff / Stop Rule

`WAVE_03` tamamlandığında, `WAVE_04` (Cross-Cutting Integration, Responsive & Presentation QA) genel test ve kapanış dalgasına geçilir.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state)
