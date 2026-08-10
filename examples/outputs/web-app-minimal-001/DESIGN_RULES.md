# Task Tracker Demo App — Design Rules

```yaml
project_name: Task Tracker Demo App
project_slug: task-tracker-demo
document_version: 0.1.0
status: active
```

## 1. Visual Language & Dark Mode Theme

Task Tracker Demo App, modern ve göz yormayan bir karanlık tema (Dark Mode) renk paleti kullanır:

- **Arka Plan:** Slate Dark (`#0f172a`).
- **Kart/Yüzey Rengi:** Slate Gray (`#1e293b`).
- **Metin Renkleri:** Birincil metin (`#f8fafc`), ikincil metin (`#94a3b8`).
- **Vurgu Rengi:** Indigo/Violet degradeleri (`#6366f1` → `#8b5cf6`).

## 2. Tipografi ve Stil Standartları

- **Font Ailesi:** Sans-serif (`Inter`, `Roboto` veya sistem fontları).
- **Başlık Hiyerarşisi:** H1 (`24px`, bold), H2 (`18px`, semi-bold), Body (`14px`, regular).

## 3. UI Bileşen ve Etkileşim Kuralları

- **[DESIGN-01] Görev Kartları:** Yuvarlatılmış köşeler (`border-radius: 8px`), hover durumunda hafif yükselme ve gölge efekti (`box-shadow`).
- **[DESIGN-02] Durum Rozetleri (Badges):**
  - `Yapılacak`: Amber/Sarı tonu (`#f59e0b`).
  - `Devam Ediyor`: Mavi tonu (`#3b82f6`).
  - `Tamamlandı`: Yeşil tonu (`#10b981`).
- **[DESIGN-03] Filtre Butonları:** Aktif filtre Indigo arka plan ve beyaz metin ile belirginleştirilir; pasif butonlar şeffaf kalır.
