# Task Tracker Demo App — Product Rules

```yaml
project_name: Task Tracker Demo App
project_slug: task-tracker-demo
document_version: 0.1.0
status: active
```

## 1. Task Lifecycle & States

Görevler üç kanonik durumdan birinde bulunabilir:
1. `Yapılacak` (Default)
2. `Devam Ediyor`
3. `Tamamlandı`

## 2. Business Rules

- **[RULE-01]** Boş başlığa sahip görev eklenemez.
- **[RULE-02]** Görev silindiğinde `localStorage` güncellenir ve geri alınamaz.
- **[RULE-03]** Filtreleme seçenekleri (`Tümü`, `Yapılacak`, `Devam Ediyor`, `Tamamlandı`) anında listede güncellenir.
