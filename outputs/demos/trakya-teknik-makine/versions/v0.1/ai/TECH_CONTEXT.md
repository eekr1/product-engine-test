# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: HTML5 & JavaScript (ES Module architecture).
- **Styling**: Vanilla CSS (CSS Custom Properties, Flexbox, Grid, CSS Transitions, Responsive Breakpoints).
- **Icons & Typography**: Standard Web-safe & Google Fonts (Inter / Outfit typography import), SVG inline icons.
- **Data Access Layer**: Client-side Static Local Adapter Pattern (ES Modules).
- **Backend / Database / API**: Unresolved / Out of Scope (Sahte backend veya database şeması uydurulmaz).

## 2. Mimari Kararlar ve Yaklaşım

- **Clean Presentation-Data Boundary**: UI bileşenleri presentation işlevi taşır. Veriler (firma kimliği, yetkili servis statüsü, 3 approved hizmet, iletişim noktaları) doğrudan component'lerde hardcode edilmez; local mock service adapter'ından asynchronous/promise interface ile çekilir.
- **No Throwaway Code Base**: Kod mimarisi demo kalitesindedir ancak throwaway kod değildir; sürdürülebilir, okunabilir ve modüler ES modül yapısına sahiptir.
- **Zero Heavy Build Dependency**: Demo satış görüşmesinde sıfır bağımlılıkla (veya minimal dev server ile) doğrudan ve anında çalıştırılabilir hafifliktedir.

## 3. Sistem Bileşenleri ve Boundary'ler

- **Shell & Navigation Module**: Header, logo/brand container, navigasyon linkleri ve primary contact CTA container.
- **Hero Module**: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ve birincil direct-contact CTA sunumu.
- **Corporate Context Module**: Trakya bölgesi endüstriyel makine servis bağlamı ve kurumsal güven sunumu.
- **Services Showcase Module**: 3 approved hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) veri odaklı dinamik rendering sunumu.
- **Contact Surface Module**: Direct contact CTA'ları (`tel:`, `mailto:`) ve kurumsal footer yapısı.
- **Local Data Adapter Service (`companyService.js`)**: Mock verileri tutan, sunum bileşenlerine mock data sağlayan veri erişim arayüzü.

## 4. Data / Service / Integration Readiness

### Current Data Source Reality

Mevcut durumda gerçek veritabanı veya dış API yoktur. Veriler local static mock data yapısında tutulur.

### Service Boundary Pattern

```text
UI / Presentation Components (Hero, Services, Contact, Header)
            ↓ (async fetch / promise request)
companyService Interface (companyService.js)
            ↓ (today)
Local Mock Data Adapter (mockCompanyData.js)
            ↓ (replaceable in future if approved)
Real API / CMS Adapter (Future API Client)
```

### Integration Readiness Guarantee

Gelecekte müşteri gerçek backend veya CMS talep ederse, presentation component'leri değiştirilmeden yalnız `companyService.js` adapter'ı gerçek API endpoint'lerine bağlanarak entegre edilebilecektir.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-001 (No Unapproved Backend)**: Approved scope dışında backend, veritabanı, auth veya API route icat edilemez.
- **TC-002 (No Third-Party Runtime Heavy Script)**: Satış demosu hızını ve performansını olumsuz etkileyecek ağır harici kütüphaneler eklenemez.
- **TC-003 (Strict Source-Closed Copy Boundary)**: Mock static data strictly `SRC-001` içindeki onaylı bilgileri taşır; uydurma veri içeremez.
