# Fizyoterapist Eda Pala Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Fizyoterapist Eda Pala Web Sitesi Demo
- **Proje Slug**: `fizyoterapist-eda-pala`
- **Tanım**: Tekirdağ'da hizmet veren Fizyoterapist Eda Pala için doğrulanmış bilgilerle sınırlı kalarak hazırlanan, modern, güven veren ve proaktif satış görüşmelerinde sergilenebilecek profesyonel kişisel web sitesi demosudur.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Fizyoterapist Eda Pala'nın potansiyel danışanlara veya satış görüşmelerine sunabileceği, mesleki unvanını ve dijital varlığını modern, açık ve güven verici bir biçimde aktaran profesyonel bir dijital tanıtım yüzeyinin bulunmaması.
- **Değer Önermesi**: Eda Pala'nın `Fizyoterapist` unvanını, `Tekirdağ` konum bağlamını ve onaylı Instagram profili bağlantısını vurgulayan; sağlık klişelerinden ve uydurma iddialardan uzak, görsel kalitesi yüksek ve responsive bir kişisel dijital sunum.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Tekirdağ bağlamında bir fizyoterapist hakkında temel profesyonel bilgi arayan potansiyel ziyaretçiler ve Fizyoterapist Eda Pala'nın dijital profilini incelemek isteyen kişiler.
- **İkincil Kullanıcılar**: Fizyoterapist Eda Pala ile iletişim kurmak veya mevcut sosyal medya profiline ulaşmak isteyen ziyaretçiler.

> Source tarafından klinik alt segmentler doğrulanmadığından kullanıcı kitleleri belirli rahatsızlık veya hastalık gruplarına ayrılamaz.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Responsive masaüstü ve mobil frontend presentation demo.
  - Fizyoterapist Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamının sunumu.
  - Onaylı Instagram profiline outbound CTA/link yönlendirmesi (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`).
  - Gelecekte biyografi/hizmet eklenebilmesini destekleyen modüler statik konfigürasyon ve bileşen mimarisi.
- **Kapsam Dışı**:
  - Doğrulanmamış uzmanlık alanları, tedavi yöntemleri ve rahatsızlık/hastalık listeleri.
  - Eğitim, üniversite, sertifika, deneyim yılı veya mesleki başarı iddiaları.
  - Klinik adı, fiziksel adres, telefon, e-posta, çalışma saatleri, fiyat bilgileri.
  - Hasta yorumları, referanslar, başarı oranları.
  - Online randevu, iletişim formu backend, WhatsApp veya canlı harita entegrasyonu.
  - Auth, admin paneli, CMS, DB veya gerçek API.
  - Tıbbi teşhis veya tedavi tavsiyesi içeren metinler.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5, Vanilla CSS (Custom Design System tokens), Modüler Vanilla JavaScript (Local Content Config Adapter).
- **Veri Mimari Sınırı**: Sıfır dış API, sıfır veritabanı. Tüm onaylı factual veriler local static configuration (`content.config.js` / JSON) üzerinden okunur.

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Karar | Gerekçe | Durum |
|---|---|---|---|
| `DEC-001` | Modüler Statik Frontend Demo Architecture | Sıfır backend gereksinimi ve hızlı satış demosu sunumu | Approved |
| `DEC-002` | Outbound Instagram CTA Integration | Tek onaylı dış iletişim/profil bağlantısı olması | Approved |
| `DEC-003` | Anti-Clinic-Cliché Design Language | Sağlık klişelerinden (turkuaz gradient, stok doktor fotosu) kaçınarak özgün ve dingin kişisel marka hissi oluşturmak | Approved |
| `DEC-004` | Local Content Adapter Pattern | Gelecekte gerçek içerik veya randevu altyapısı eklendiğinde presentation katmanını değiştirmeden veri katmanını güncelleyebilmek | Approved |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: `project_state: new` (Sıfırdan başlanan demo projesi).
- **Aktif Faz**: Phase 1 — Technical Architecture, Design System & Wave Execution Map.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Kapsam kısıtları ve sağlık alanı guardrail'leri
- [TECH_CONTEXT.md](./TECH_CONTEXT.md) — Teknik mimari ve statik adapter sınırları
- [DECISIONS.md](./DECISIONS.md) — Detaylı mimari ve tasarım kararları günlüğü
