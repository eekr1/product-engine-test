# PROJECT INPUT — Realtime Sync App Demo

```yaml
input_id: INPUT-REALTIME-SYNC-APP-V1
project_name: Realtime Sync App Demo
project_slug: realtime-sync-app
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

> "Kullanıcıların canlı olarak mesajlaşabildiği, verilerin sunucu tarafındaki merkezi veritabanıyla anlık eşleştiği bir uygulama demosu istiyoruz. Aynı zamanda proje kesinlikle sunucusuz statik frontend prototipi olarak çalışmalı ve backend/API sunucusu barındırmamalıdır."

---

## 2. Project Identity

| Parametre | Değer |
|---|---|
| **Proje Adı** | Realtime Sync App Demo |
| **Proje Slug** | `realtime-sync-app` |
| **Proje Türü (`project_type`)** | `web-app` |
| **Proje Durumu (`project_state`)** | `new` |
| **Teslimat Profili (`delivery_profile`)** | `Prototype` |
| **Ana Dili** | Türkçe |

---

## 3. Problem & Purpose

- **Çözülen Problem:** Anlık veri senkronizasyonunun prototip düzeyinde görselleştirilmesi.
- **Ana Amaç:** Mesajlaşma arayüzü sunmak.

---

## 4. Target Audience

- Prototipi inceleyecek test kullanıcıları.

---

## 5. Scope Boundaries

### In Scope
- Mesajlaşma arayüzü kurgusu.
- İstemci taraflı prototip sunumu.

### Out of Scope
- Kalıcı prod veritabanı.

---

## 6. Technical Context & Preferences

- **Stack:** HTML/CSS/JS.
- **Gereksinim Çelişkisi:** İstemci tarafı sunucusuz mimari kısıtı ile canlı sunucu veritabanı senkronizasyon talebi bir arada yer almaktadır.

---

## 7. Known Decisions

- **[DEC-01]** Kullanıcı brief'i onaylanmış ve `status: approved` olarak dondurulmuştur.

---

## 8. Open Questions

*Intake anında açık soru bırakılmamış; çelişki run aşamasında tespit edilmiştir.*

---

## 9. Approval & Verification

- **Status:** `approved`
- **Approved By:** `user`
- **Approved At:** `2026-01-01T00:00:00Z`
- **Verification Checklist:**
  - [x] Canonical format ve `PROJECT_INPUT.md` yapısına uygun.
  - [x] Kullanıcı açık onayı mevcut (`status: approved`).
  - [x] `input_id: INPUT-REALTIME-SYNC-APP-V1` kanonik.
