# PROJECT INPUT — Task Tracker Minimal Web App

```yaml
input_id: INPUT-WEB-APP-MINIMAL-001-V1
project_name: Task Tracker Demo App
project_slug: task-tracker-demo
input_version: "1"
status: approved
project_type: web-app
project_state: new
delivery_profile: Prototype
primary_language: tr
created_at: 2026-01-01T00:00:00Z
updated_at: 2026-01-01T00:00:00Z
approved_at: 2026-01-01T00:00:00Z
approved_by: user
supersedes: ""
source_type: user-provided
source_count: 1
```

---

## 1. Original Brief

> "Geliştiricilerin ve küçük ekiplerin günlük görevlerini hızlıca ekleyebileceği, durumunu (Yapılacak, Devam Ediyor, Tamamlandı) güncelleyebileceği ve filtreleyebileceği minimal, modern bir web uygulaması prototipi yapmak istiyoruz. Tasarım koyu temalı ve dinamik olsun. Backend henüz istemiyoruz, veriler şimdilik tarayıcıda saklansın."

---

## 2. Project Identity

| Parametre | Değer |
|---|---|
| **Proje Adı** | Task Tracker Demo App |
| **Proje Slug** | `task-tracker-demo` |
| **Proje Türü (`project_type`)** | `web-app` |
| **Proje Durumu (`project_state`)** | `new` |
| **Teslimat Profili (`delivery_profile`)** | `Prototype` |
| **Ana Dili** | Türkçe |

---

## 3. Problem & Purpose

- **Çözülen Problem:** Ekiplerin günlük görevlerini takip etmek için karmaşık araçlar yerine anında kullanılabilir, hafif bir arayüze ihtiyaç duyması.
- **Ana Amaç:** Kullanıcıların görev ekleme, silme, durum değiştirme ve filtreleme işlemlerini kolayca yapabileceği frontend ağırlıklı bir prototip sunmak.

---

## 4. Target Audience

- **Bireysel Geliştiriciler:** Günlük kişisel görevlerini izlemek isteyen kullanıcılar.
- **Küçük Proje Ekipleri:** Prototip üzerinden hızlı görev yönetimi demosu yapmak isteyen ekipler.

---

## 5. Scope Boundaries

### In Scope
- Görev oluşturma, başlık ve açıklama girme.
- Görev durumlarını değiştirme (`Yapılacak`, `Devam Ediyor`, `Tamamlandı`).
- Görevleri duruma göre filtreleme ve arama.
- Verilerin tarayıcı `localStorage` üzerinde saklanması.
- Koyu tema (Dark Mode) destekli responsive arayüz.

### Out of Scope
- Kullanıcı kaydı ve giriş sistemi (Auth).
- Sunucu tarafı veri tabanı (Backend API).
- Birden fazla kullanıcı arasında canlı veri eşitlemesi (WebSocket / Multi-tenant).

### Future Expansion
- REST API ve veritabanı entegrasyonu.
- Etiket (Tag) ve son teslim tarihi (Due Date) desteği.

---

## 6. Delivery Target

- **Delivery Profile:** `Prototype`
- **Hedef:** Kullanılabilir frontend prototipi ve ajanın doğrudan geliştirmeye başlayabileceği temel AI doküman paketi (`PROJECT_BRAIN.md`, `PRODUCT_RULES.md`, `README.md`).

---

## 7. Technical Context & Preferences

- **Frontend Stack:** HTML5, CSS3 (Vanilla CSS ile koyu tema modern tasarım), JavaScript (ES6+ Vanilla/Vite).
- **Veri Saklama:** `localStorage` (Client-side persistence).
- **Kısıtlamalar:** Dış sunucu bağımlılığı olmamalı, prototip tamamen istemci tarafında çalışmalı.

---

## 8. Design Context

- **Görsel Tema:** Modern Dark Mode, koyu gri arka planlar (`#0f172a`), vurgu renkleri (Indigo / Violet gradients).
- **Tipografi:** Sans-serif (Inter / Roboto font ailesi).
- **Etkileşim:** Hover efektleri, akıcı kart geçişleri ve mikro-animasyonlar.

---

## 9. Existing Project Context

*Bu proje sıfırdan başlanan (`project_state: new`) bir projedir. Mevcut kod veya dokümantasyon bulunmamaktadır.*

---

## 10. Content & Data Sources

| Kaynak ID | Türü | Tanım | Güven Seviyesi |
|---|---|---|---|
| `SRC-01` | `user-provided` | Kullanıcı brief'i ve doğrudan talimatlar | `Authoritative` |

---

## 11. Known Decisions

- **[DEC-01]** İlk sürüm backend gerektirmeyen istemci taraflı prototip olacaktır.
- **[DEC-02]** Arayüz tasarımı varsayılan olarak Dark Mode odaklı hazırlanacaktır.

---

## 12. Open Questions

*Kritik açık soru bulunmamaktadır. Tüm zorunlu alanlar netleştirilmiştir.*

---

## 13. Assumptions

- **[ASM-01]** İstemci taraflı `localStorage` veri saklama, prototip doğrulaması için yeterlidir.

---

## 14. Conflicts

*Çözülmemiş çelişki bulunmamaktadır.*

---

## 15. Approval & Verification

- **Status:** `approved`
- **Approved By:** `user`
- **Approved At:** `2026-01-01T00:00:00Z`
- **Verification Checklist:**
  - [x] Canonical format ve `PROJECT_INPUT.md` yapısına uygun.
  - [x] Zorunlu alanlar tam ve tutarlı.
  - [x] `project_type: web-app` ve `delivery_profile: Prototype` kanonik.
  - [x] Çözülmemiş kritik soru veya çelişki yok.
  - [x] Secret veya makineye özel yol içermiyor.
