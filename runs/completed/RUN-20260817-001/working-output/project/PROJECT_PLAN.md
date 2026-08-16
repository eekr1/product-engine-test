# Fizyoterapist Eda Pala Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Bu proje `demo-frontend` base package ve `Prototype` delivery profile altında yürütülen, müşteri görüşmesinde sunulacak proaktif bir satış demosu teslimat stratejisine sahiptir.

- **Frontend-First Execution**: Gerçek backend onaylı kapsamda olmadığı için statik lokal konfigürasyon veri adaptörü (`siteConfig`) ile veri/içerik sınırları temiz ayrıştırılır.
- **Wave-Based Execution**: Uygulama adımları `WAVE_00`'dan `WAVE_03`'e kadar bağımsız doğrulanabilir dalgalar halinde sırayla yürütülür.
- **Strict Factual Guard**: Doğrulanmamış hiçbir sağlık, klinik, uzmanlık veya iletişim verisi projeye dahil edilmez.

## 2. Phases / Milestones

- **Phase 1: Foundation & Setup (`WAVE_00`)** — Statik veri modülü, semantik HTML5 iskeleti ve CSS Custom Properties token altyapısının kurulması.
- **Phase 2: Profile Hero Presentation (`WAVE_01`)** — Fizyoterapist Eda Pala adı, unvanı ve Tekirdağ konum bağlamının görsel tanıtım yüzeyi olarak inşa edilmesi.
- **Phase 3: Digital Contact Surface (`WAVE_02`)** — Onaylı Instagram profiline yönlendiren outbound CTA butonu ve bağlantı kartının oluşturulması.
- **Phase 4: Cross-Cutting QA & Publication (`WAVE_03`)** — Responsive layout, WCAG AA erişilebilirlik ve sunum doğrulama QA süreci ile yayına hazır hale getirilmesi.

## 3. Wave Relationship

```text
Phase 1: WAVE_00 (Foundation: siteConfig & CSS Tokens)
  └─► Phase 2: WAVE_01 (Profile Hero Component)
        └─► Phase 3: WAVE_02 (Instagram Outbound CTA)
              └─► Phase 4: WAVE_03 (Cross-Cutting QA & Publication)
```

## 4. Dependency Overview

- `WAVE_01` ve `WAVE_02`, `WAVE_00` tarafından sağlanan `siteConfig` modülü ve CSS token altyapısına bağımlıdır.
- `WAVE_03`, önceki tüm wave'lerin (`WAVE_00` .. `WAVE_02`) tamamlanmış bileşenlerini doğrular.

## 5. Deliverables

1. Statik Lokal Konfigürasyon Veri Modülü (`siteConfig.js`).
2. Semantik HTML5 Ana Şablon (`index.html`) ve CSS Custom Properties Teması (`styles.css`).
3. Profile Hero & Tanıtım Bileşeni.
4. Outbound Instagram CTA Butonu ve Sosyal Medya Temas Kartı.
5. Responsive, Erişilebilir ve Doğrulanmış Prototip Teslimat Paketi (`outputs/demos/fizyoterapist-eda-pala/latest/`).

## 6. Acceptance Conditions

- Prototip ilk bakışta modern, profesyonel ve insani bir kişisel marka hissi vermelidir.
- Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konumu net anlaşılmalıdır.
- Onaylı Instagram profiline outbound link güvenli biçimde çalışmalıdır.
- Sıfır uydurma sağlık iddiası, sahte form veya adres bulunmalıdır.
- Mobil, tablet ve masaüstü görünümleri tam uyumlu olmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Future Phase 1**: Müşteri görüşmesi sonrası doğrulanmış biyografi, eğitim ve uzmanlık alanlarının eklenmesi.
- **Future Phase 2**: Doğrulanmış klinik adresi, telefon numarası ve doğrudan iletişim kanallarının (WhatsApp vb.) entegrasyonu.
- **Future Phase 3**: Gerçek online randevu backend ve API entegrasyonu (Ayrı approved scope ve version gerektirir).
