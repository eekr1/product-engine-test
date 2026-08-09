# Task Tracker Demo App — Product Rules

```yaml
project_name: Task Tracker Demo App
project_slug: task-tracker-demo
document_version: 0.1.0
status: active
```

## 1. Task Lifecycle & State Transitions

Her görev aşağıdaki yaşam döngüsüne uyar:

```text
[Yapılacak] ───► [Devam Ediyor] ───► [Tamamlandı]
```

- **Varsayılan Durum:** Yeni oluşturulan her görev `Yapılacak` durumunda başlar.
- **Geçiş Esnekliği:** Kullanıcı herhangi bir görevin durumunu doğrudan `Devam Ediyor` veya `Tamamlandı` olarak değiştirebilir.

## 2. Business Validation Rules

- **[RULE-01] Başlık Doğrulaması:** Boş veya yalnızca boşluk karakterlerinden oluşan görev başlıkları kabul edilmez.
- **[RULE-02] Veri Kaydı:** Her durum değişikliğinde `localStorage` anında güncellenir.
- **[RULE-03] Filtreleme Mantığı:** Filtre seçeneği değiştiğinde liste yalnızca seçilen duruma ait görevleri gösterir (`Tümü` seçeneği tüm görevleri listeler).
- **[RULE-04] Kalıcı Temizleme:** Görev silme işlemi onaylandıktan sonra veritabanından/storage'dan kalıcı olarak kaldırılır.
