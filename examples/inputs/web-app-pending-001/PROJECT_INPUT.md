# PROJECT INPUT — Analytics Dashboard Pending Draft

```yaml
input_id: INPUT-WEB-APP-PENDING-001-V1
project_name: Analytics Dashboard Demo
project_slug: analytics-dashboard-demo
input_version: "1"
status: pending
project_type: web-app
project_state: new
delivery_profile: Prototype
primary_language: tr
created_at: 2026-01-01T00:00:00Z
updated_at: 2026-01-01T00:00:00Z
approved_at: null
approved_by: null
supersedes: ""
source_type: user-provided
source_count: 1
```

---

## 1. Original Brief

> "Bir analitik paneli yapmak istiyoruz. Grafikler ve istatistikler olsun. Kullanıcılar verileri süzebilsin. Detaylara sonra bakarız, şimdilik bi şeyler üretin."

---

## 2. Project Identity

| Parametre | Değer |
|---|---|
| **Proje Adı** | Analytics Dashboard Demo |
| **Proje Slug** | `analytics-dashboard-demo` |
| **Proje Türü (`project_type`)** | `web-app` |
| **Proje Durumu (`project_state`)** | `new` |
| **Teslimat Profili (`delivery_profile`)** | `Prototype` |
| **Ana Dili** | Türkçe |

---

## 3. Problem & Purpose

- **Çözülen Problem:** *[EKSİK: Hangi veri türlerinin görselleştirileceği ve hangi problemin çözüleceği net tanımlanmamıştır]*
- **Ana Amaç:** Analitik gösterge paneli prototipi oluşturmak.

---

## 4. Target Audience

- *[EKSİK: Hedef kullanıcı rolleri, yetki seviyeleri ve ihtiyaçları belirtilmemiştir]*

---

## 5. Scope Boundaries

### In Scope
- Grafik ve istatistik gösterimi.
- Veri filtreleme arayüzü.

### Out of Scope
- *[BELİRSİZ: Kapsam dışı sınırlar belirlenmemiştir]*

---

## 6. Technical Context & Preferences

- **Frontend Stack:** *[EKSİK: Vanilla JS mi, React mi, chart kütüphanesi tercihi nedir belirtilmemiştir]*
- **Veri Kaynağı:** Mock veri kullanılacak ancak veri yapısı tanımlanmamıştır.

---

## 7. Known Decisions

*Onaylanmış mimari karar bulunmamaktadır.*

---

## 8. Open Questions (Kritik Engeller)

- **[Q-01]** Hangi spesifik metrikler (satış, ziyaretçi, sistem performansı vb.) panellerde gösterilecek?
- **[Q-02]** Grafikler için tercih edilen bir kütüphane var mı yoksa Vanilla SVG/Canvas mı kullanılacak?
- **[Q-03]** Kullanıcı rolleri ve yetkilendirme kapsamda mı?

---

## 9. Approval & Verification

- **Status:** `pending`
- **Approved By:** `null` (Kullanıcı henüz onay vermemiştir)
- **Verification Checklist:**
  - [x] Canonical format uygulandı.
  - [ ] **FAIL:** Zorunlu hedef kitle ve detaylı problem tanımı eksik.
  - [ ] **FAIL:** Kritik açık sorular yanıtlanmadı.
  - [ ] **FAIL:** Kullanıcı açık onayı bulunmuyor (`status: pending`).
