# Task Tracker Demo App — Project Brain

```yaml
project_name: Task Tracker Demo App
project_slug: task-tracker-demo
delivery_profile: Prototype
document_version: 0.1.0
status: active
```

## 1. Product Identity & Purpose

Task Tracker Demo App, günlük görev yönetimini en sade ve akıcı şekilde sunmayı hedefleyen bir frontend web uygulaması prototipidir.

- **Ana Amaç:** Kullanıcıların herhangi bir sunucu kurulumu veya oturum açma zorunluluğu olmadan görevlerini tarayıcı üzerinde organize etmelerini sağlamak.
- **Hedef Kitle:** Bireysel geliştiriciler ve hızlı görev takibi prototipine ihtiyaç duyan küçük ekipler.

## 2. Technical Scope & Stack

- **Arayüz:** Vanilla HTML5, Vanilla CSS3 (Custom Properties & Flexbox/Grid).
- **Mantık:** ES6+ Vanilla JavaScript.
- **Kalıcılık:** `localStorage` (Client-side JSON serialization).
- **Bağımlılıklar:** Dış kütüphane veya backend sunucusu bağımlılığı bulunmamaktadır.

## 3. Core Boundaries

- **Dahil Olanlar (In Scope):** Görev CRUD (Create, Read, Update, Delete) operasyonları, durum bazlı filtreleme, tarayıcıda veri kalıcılığı, responsive dark theme.
- **Kapsam Dışı (Out of Scope):** Kullanıcı kimlik doğrulaması (Auth), uzak sunucu veritabanı eşitlemesi, çoklu kullanıcı desteği.
