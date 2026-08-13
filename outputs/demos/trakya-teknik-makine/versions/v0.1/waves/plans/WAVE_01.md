# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Core Shell, Hero & Trust Surface

- **Status**: Ready for Execution
- **Goal**: Ana navigasyon başlığını (Navbar), etkileyici Hero kompozisyonunu ve Disan Hidrolik Yetkili Servis kimliği güven bloğunu inşa etmek.

## 1. Why This Wave / Dependency Rationale

`WAVE_00` foundation altyapısı üzerine inşa edilir. Satış görüşmesindeki en kritik 3 saniyelik ilk izlenim ve yetkili servis güven vurgusu bu wave'de kurulur.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)
- [WAVE_00.md](./WAVE_00.md)

## 3. Dependencies

- `WAVE_00` (Foundation & Design Rules Setup)

## 4. Scope

### Scope References

- `SCP-001` — Modern ve responsive kurumsal frontend demo tasarımı (IN_SCOPE)
- `SCP-002` — Disan Hidrolik Makine Trakya Bölge Yetkili Servis kimliği vurgusu (IN_SCOPE)
- `SCP-008` — Mevcut SITE123 sitesindeki doğrulanmış firma bilgilerinin dondurularak kullanılması (VERIFIED_CURRENT_TRUTH)

### In Scope

- Header & Responsive Navbar (Logo mark, Nav bağlantıları, Hızlı İletişim CTA butonu).
- Hero Section (Asimetrik endüstriyel kompozisyon, güçlü slogan, yetkili servis kimlik kartı, ikincil aksiyonlar).
- Trust & Authority Badge (Disan Hidrolik Trakya Bölge Yetkili Servisi özel vurgu alanı ve kalite garantisi ifadesi).
- `DataService` üzerinden verinin çekilerek Hero ve Trust alanlarına dinamik render edilmesi.

### Out of Scope

- Hizmetler detay kartları (WAVE_02'de).
- Footer ve detaylı iletişim formları (WAVE_02'de).

## 5. Expected Result / Target Structure

```text
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   └── TrustBadge.js
└── styles/
    ├── navbar.css
    ├── hero.css
    └── trust.css
```

## 6. Implementation Checklist

- [ ] **TASK-010 (Navbar Component)**: Responsive navbar bileşenini kodla. Tipografik endüstriyel logo mark, Ana Sayfa / Hizmetlerimiz / Kurumsal / İletişim linkleri ve hızlı "Servis Çağır" butonu yerleştir. `Scope Ref: SCP-001`
- [ ] **TASK-011 (Hero Layout & Typography)**: Hero bölümü HTML/CSS yapısını kur. "Trakya Bölgesi Makine Bakım, Onarım ve Hidrolik Servis Çözümleri" vurucu başlığını ve açıklama paragrafını ekle. `Scope Ref: SCP-001`
- [ ] **TASK-012 (Authorized Service Trust Surface)**: Hero yanına/altına Disan Hidrolik Yetkili Servis vurgu kartını kodla. Yetkili servis rozeti, teknik yetkinlik etiketleri ve endüstriyel görsel aksanları yerleştir. `Scope Ref: SCP-002, SCP-008`
- [ ] **TASK-013 (Data Integration for Hero & Trust)**: `DataService.getCompanyInfo()` çağrısı yaparak firma adı, servis unvanı ve sloganı bileşenlere bağla. `Scope Ref: SCP-001`
- [ ] **TASK-014 (Mobile Navigation & Responsive Styling)**: Mobilde hamburgermenu/dokunmatik uyumlu navigasyon davranışını ve Hero alanının responsive dikey dizilimini tamamla. `Scope Ref: SCP-001`

## 7. State / Role / Responsive Coverage

- Responsive: Desktop (1200px+), Tablet (768px - 1024px), Mobile (<768px).
- Navigation State: Mobile menu toggle state (open/close).

## 8. Automated Verification

- Component render check in browser DOM.

## 9. Manual QA / Debug Verification

- Mobil görünümde navigasyon menüsünün pürüzsüz açılıp kapandığı doğrulanmalı.
- Hero alanında Disan Hidrolik Yetkili Servis vurgusunun açıkça göründüğü teyit edilmeli.

## 10. Acceptance / Exit Criteria

- Navbar ve Hero alanı `DESIGN_RULES.md` uyarınca yüksek kalite ve kontrastla render ediliyor.
- Disan Yetkili Servis kimliği ilk bakışta net olarak anlaşılıyor.
- Mobil görünüm kusursuz responsive.

## 11. Handoff / Stop Rule

- WAVE_01 tamamlandıktan sonra `WAVE_02` (Services Section & Direct Contact CTAs) uygulamasına geç.

---

## Wave Result

> Status: Pending Execution. WAVE_01 is ready for execution by an agent.
