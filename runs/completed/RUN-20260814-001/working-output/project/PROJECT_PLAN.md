# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

- **Yaklaşım**: Proje, potansiyel müşteri satış görüşmesinde doğrudan gösterilebilir yüksek kaliteli bir frontend demo olarak geliştirilecektir (`delivery_profile: Prototype`).
- **Mimari Strateji**: Hızlı geliştirilebilir, bağımsız çalışabilir ve sonradan gerçek backend entegrasyonuna imkan tanıyan `service/data-access boundary` mimarisi esas alınmıştır.
- **Planlama Derinliği**: `implementation_planning: standard` seviyesinde agent-ready planlama adımları uygulanmaktadır.

## 2. Phases / Milestones

1. **Milestone 1 — Altyapı ve Veri Soyutlama (`WAVE_00`)**: Proje dosya yapısının, CSS jetonlarının ve `companyService` veri katmanının kurulması.
2. **Milestone 2 — Ana Giriş ve Güven Yüzeyi (`WAVE_01`)**: Header, Hero alanı, Disan Hidrolik yetkili servislik rozeti ve kurumsal hakkında panelinin geliştirilmesi.
3. **Milestone 3 — Hizmet Sunum Yüzeyi (`WAVE_02`)**: 3 temel hizmetin (Yedek Parça, Yerinde Destek, Bakım-Onarım) dinamik kartlar halinde sunulması.
4. **Milestone 4 — İletişim ve Dönüşüm Yüzeyi (`WAVE_03`)**: Doğrulanmış iletişim bilgilerinin, dikey arama/e-posta CTA butonlarının ve Footer yapısının tamamlanması.
5. **Milestone 5 — Bütünleşik QA ve Satış Demosu Paketleme (`WAVE_04`)**: Çapraz cihaz/responsive kontroller, akış doğrulaması ve nihai paket teslimi.

## 3. Wave Relationship

- `PROJECT_PLAN.md` üst seviye milestone roadmap'ini tanımlar.
- Ayrıntılı adımlar, task checklist'leri ve exit kriterleri [WAVE_MAP.md](../waves/WAVE_MAP.md) ve `waves/plans/WAVE_<NN>.md` belgeleri tarafından yönetilir.
- Sıralama kesinlikle lineerdir: `WAVE_00` ➔ `WAVE_01` ➔ `WAVE_02` ➔ `WAVE_03` ➔ `WAVE_04`.

## 4. Dependency Overview

- `WAVE_01`, `WAVE_00` ile kurulan CSS jetonlarına ve `companyService` veri nesnesine bağımlıdır.
- `WAVE_02`, `WAVE_01` ile kurulan ana düzen ve header yapısına bağımlıdır.
- `WAVE_03`, `WAVE_02` ile tamamlanan hizmet sunum akışına bağımlıdır.
- `WAVE_04`, tüm önceki dalgaların tamamlanmış olmasına bağımlıdır.

## 5. Deliverables

- Modern, responsive kurumsal frontend demo web uygulaması.
- Agent-ready proje dokümantasyon paketi (`PROJECT_BRAIN`, `PRODUCT_RULES`, `TECH_CONTEXT`, `DESIGN_RULES`, `WAVE_MAP`, Wave plans).
- Yerel mock data katmanı (`companyService.js` ve `companyData.js`).

## 6. Acceptance Conditions

1. Demo, mevcut SITE123 web sitesinden belirgin şekilde daha modern, endüstriyel ve güven veren bir görsel kimliğe sahiptir.
2. Disan Hidrolik yetkili servisliği ve 3 ana hizmet ilk bakışta anlaşılmaktadır.
3. Mobil ve masaüstü cihazlarda telefon ve e-posta eylemleri sorunsuz tetiklenmektedir.
4. Sahte veya doğrulanmamış bilgi üretilmemiş, yalnızca gerçek veriler kullanılmıştır (`VAL-13`).

## 7. Scope Growth / Upgrade Boundaries

- **Mevcut Kapsam Sınırı**: Demo sadece frontend presentation katmanını kapsar.
- **Gelecek Genişleme Sınırı (Future Upgrade)**: Satış görüşmesi sonrasında anlaşma sağlandığı takdirde; gerçek CMS/backend entegrasyonu, canlı harita entegrasyonu, WhatsApp hattı ve interaktif teklif alma formu ayrı bir proje sürümü (`v1.0` Production Ready) olarak planlanabilir. Bugünden uydurma backend geliştirilmeyecektir.
