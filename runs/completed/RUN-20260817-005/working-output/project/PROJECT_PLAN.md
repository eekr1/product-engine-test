# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Trakya Teknik Makine projesi, 7 onaylı bağımsız sayfadan oluşan kurumsal web sitesi satış demosu (`corporate-website`, `delivery_profile: Prototype`) olarak planlanmıştır. Teslimat stratejisi, mühendislik tabanının kurulması (`WAVE_00`), global gezinti ve kabuk mimarisinin oluşturulması (`WAVE_01`), ana sayfa ve kurumsal sayfaların yapımı (`WAVE_02`), hizmetler overview ve 3 detay sayfasının yapımı (`WAVE_03`), doğrudan iletişim sayfasının yapımı (`WAVE_04`) ve sayfa çapı responsive entegrasyon ile kalite kontrolü (`WAVE_05`) adımlarından oluşur.

## 2. Approved Site / Surface Delivery Scope

Onaylı site mimarisi 7 bağımsız routable sayfadan oluşur ve hiçbir sayfa anchor section'a collapse edilemez:

- `PAGE-001`: Ana Sayfa (`/`) — Root Surface
- `PAGE-002`: Kurumsal (`/kurumsal`) — Corporate Surface
- `PAGE-003`: Hizmetler (`/hizmetler`) — Services Overview Surface
- `PAGE-004`: Yedek Parça Temini — Hizmet Detayı (`/hizmetler/yedek-parca-temini`) — Service Detail
- `PAGE-005`: Yerinde Teknik Destek — Hizmet Detayı (`/hizmetler/yerinde-teknik-destek`) — Service Detail
- `PAGE-006`: Makine Bakım ve Onarım — Hizmet Detayı (`/hizmetler/makine-bakim-onarim`) — Service Detail
- `PAGE-007`: İletişim (`/iletisim`) — Direct Contact Surface

`PROJECT_PLAN_PAGE_SET == APPROVED_PAGE_SET` (7/7 pages covered).

## 3. Phases / Milestones

- **Milestone 1 — Engineering & Design Baseline**: Vite + React + TypeScript projesinin oluşturulması, CSS Variables tasarım token'larının tanımlanması, mock data service adapter katmanının kurulması ve React Router DOM rotalama tabanının hazırlanması.
- **Milestone 2 — Global Shell & Navigation**: Header (logo, 7 sayfalık nav menüsü, mobil drawer), Footer (kurumsal özet, direct contact bilgileri, alt linkler) ve Layout Shell'in tüm sayfalarda ortak çalışır hale getirilmesi.
- **Milestone 3 — Core Corporate Surfaces**: `PAGE-001` Ana Sayfa ve `PAGE-002` Kurumsal sayfasının zengin içerik düzeni ve görsel hiyerarşiyle tamamlanması.
- **Milestone 4 — Services Overview & Details**: `PAGE-003` Hizmetler overview ve 3 ayrı detay sayfasının (`PAGE-004`, `PAGE-005`, `PAGE-006`) odaklı sunum kartları ve rotalama ile tamamlanması.
- **Milestone 5 — Direct Contact & Quality Assurance**: `PAGE-007` İletişim sayfasının direct phone/email bağlantıları ile tamamlanması, sayfa çapı responsive testler, erişilebilirlik denetimi ve production build doğrulaması.

## 4. Wave Relationship

- `WAVE_00` -> `WAVE_01` -> `WAVE_02` -> `WAVE_03` -> `WAVE_04` -> `WAVE_05` sıralı ve bağımlılıklı dalga dizilimi uygulanır.

## 5. Dependency Overview

- `WAVE_01` (Global Shell), `WAVE_00` (Foundation) tamamlanmadan başlayamaz.
- `WAVE_02`, `WAVE_03`, `WAVE_04` sayfa dalgaları `WAVE_01` (Global Shell) menü ve rotalama tabanını tüketir.
- `WAVE_05` (QA & Polish) tüm sayfa dalgaları tamamlandıktan sonra yatay entegrasyon testi olarak çalışır.

## 6. Deliverables

- Çalışan Vite + React + TypeScript + React Router DOM frontend kod tabanı.
- 7 onaylı sayfa için tamamlanmış UI bileşenleri ve rotalama.
- Local mock fixture'ları içeren soyutlanmış service adapter katmanı.
- Tasarım sistemi CSS değişkenleri ve responsive global shell.
- Production build çıktısı (`dist/`).

## 7. Acceptance Conditions

- 7 onaylı sayfanın tamamı gerçek rotalama ile erişilebilir olmalıdır.
- İletişim sayfasında veya modal'larda form, submit, harita veya WhatsApp bulunmamalıdır.
- Source material dışında uydurulmuş şirket iddiası yer almamalıdır.
- `npm run build` komutu derleme hatası vermeden tamamlanmalıdır.

## 8. Scope Growth / Upgrade Boundaries

- Gelecekte müşteri onayı ile eklenebilecek CMS/Admin paneli, backend API entegrasyonu, iletişim formu backend'i, canlı harita ve WhatsApp kanalları aynı frontend foundation üzerinde mimari yeniden yazım gerektirmeden eklenebilecektir.
