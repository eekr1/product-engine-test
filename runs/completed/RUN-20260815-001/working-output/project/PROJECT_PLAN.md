# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Proje, Trakya Teknik Makine'nin potansiyel satış görüşmelerinde hizmet yetkinliklerini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü sergilemek üzere tasarlanmış proaktif bir kurumsal frontend satış demosudur (`delivery_profile: Prototype`). Delivery stratejisi pure frontend mimarisi ve clean service/data-access boundary ilkesine dayanmaktadır.

## 2. Phases / Milestones

- **Phase 1: Foundation & Core Setup (Milestone 1)**: HTML5/CSS3 yapısının, design token'larının ve mock data-access katmanının tamamlanması (`WAVE_00`).
- **Phase 2: Brand Identity & Hero Presentation (Milestone 2)**: Trakya Teknik Makine adının ve Disan Trakya Bölge Yetkili Servisi statüsünün sunulması (`WAVE_01`).
- **Phase 3: Service Capabilities Showcase (Milestone 3)**: 3 approved hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) modül olarak sunulması (`WAVE_02`).
- **Phase 4: Direct Conversion & Contact (Milestone 4)**: Telefon ve E-posta direct-contact CTA butonlarının işler hale getirilmesi (`WAVE_03`).
- **Phase 5: Quality Assurance & Demo Release (Milestone 5)**: Bütüncül responsive, performans ve satış demosu sunum kontrolü (`WAVE_04`).

## 3. Wave Relationship

Execution roadmap tam olarak `WAVE_MAP.md` ile hizalıdır:

```text
WAVE_00 (Foundation) → WAVE_01 (Hero & Status) → WAVE_02 (3 Services) → WAVE_03 (Contact CTA) → WAVE_04 (Whole QA)
```

## 4. Dependency Overview

- Projenin UI bileşenleri `CompanyDataService` arayüzüne bağımlıdır.
- `WAVE_02` ve `WAVE_03` presentation katmanları `WAVE_01` kurumsal marka çerçevesine bağımlıdır.
- Satış demosu kabulü (`WAVE_04`) önceki tüm dalgaların eksiksiz tamamlanmasına bağımlıdır.

## 5. Deliverables

- Clean, responsive, self-contained kurumsal frontend demo web sitesi (HTML5, Vanilla CSS, JS).
- Clean `CompanyDataService` mock data adapter katmanı.
- Product Engine agent-ready dokümantasyon paketi.

## 6. Acceptance Conditions

- [ ] Demo ilk bakışta modern endüstriyel kimlik ve Disan yetkili servis güvencesini hissettirmelidir.
- [ ] 3 approved hizmet ve direct-contact CTA'ları kusursuz çalışmalıdır.
- [ ] Mobil ve masaüstü responsive görünümler hatasız olmalıdır.
- [ ] Kaynakta bulunmayan hiçbir firma iddiası veya uydurma backend/map/form bulunmamalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Satış Görüşmesi Sonrası Olası Büyüme (Future Scope)**:
  - Gerçek backend, veritabanı ve CMS entegrasyonu (mimarideki service boundary korunarak adaptör katmanı değiştirilecektir).
  - Canlı iletişim formu backend'i ve e-posta bildirim servisi.
  - Interactive Google Maps konumu ve WhatsApp hızlı sohbet widget'ı.
  - Firma tarafınca sağlandığında detaylı müşteri referansları, projeler ve sertifikasyon modülleri.
