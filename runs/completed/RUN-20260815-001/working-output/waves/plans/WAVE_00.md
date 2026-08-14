# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Technical Environment Setup

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Projenin modüler klasör mimarisini, Vanilla CSS Design Tokens altyapısını ve static mock data adapter katmanını kurmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_00
Name: Foundation & Technical Environment Setup
Goal: Projenin modüler klasör mimarisini, Vanilla CSS Design Tokens altyapısını ve static mock data adapter katmanını kurmak.
Committed Capabilities:
- Modular directory structure | SCP-001 | PASS
- Vanilla CSS design tokens | SCP-001 | PASS
- Static local mock data adapter | SCP-006 | PASS
- HTML5 app shell | SCP-001 | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Modüler klasör yapısının kurulumu (`src/`, `src/components/`, `src/data/`, `src/styles/`) | Modular directory structure | implementation-of | PASS |
| `variables.css` renk, tipografi ve spacing CSS değişkenleri | Vanilla CSS design tokens | implementation-of | PASS |
| `companyData.js` static mock adapter servisi | Static local mock data adapter | implementation-of | PASS |
| `index.html` temel uygulama kabuğu | HTML5 app shell | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Arayüz bileşenlerinin geliştirilmesine başlanmadan önce CSS değişkenlerinin, modüler klasör yapısının ve veri erişim arayüzünün (mock adapter) hazır olması sonraki tüm wave'lerin temiz ve bağımlılıksız ilerlemesini sağlar.

## 4. Canonical Sources to Read

- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `ai/PRODUCT_RULES.md`

## 5. Dependencies

- None (İlk başlangıç dalgası).

## 6. Scope

### In Scope

- Klasör yapısı kurulumu.
- `index.html` ana HTML kabuğu.
- `index.css` ve `variables.css` stil başlangıcı.
- `companyData.js` yerel veri modülü (`getCompanyInfo()`, `getServices()`).

### Out of Scope

- Kullanıcı arayüzü görsel çizimi.
- Sunucu taraflı backend ve veritabanı.

## 7. Expected Result / Target Structure

```text
trakya-teknik-makine/
├── index.html
├── src/
│   ├── data/
│   │   └── companyData.js
│   ├── styles/
│   │   ├── variables.css
│   │   └── index.css
│   └── main.js
```

## 8. Implementation Checklist

- [ ] `TASK-001`: Modüler klasör yapısının oluşturulması.
- [ ] `TASK-002`: `variables.css` dosyasında `DESIGN_RULES.md` renk (`--color-bg-primary: #12151B`, `--color-accent: #E67E22` vb.) ve tipografi değişkenlerinin tanımlanması.
- [ ] `TASK-003`: `companyData.js` mock veri modülünün yazılması.
- [ ] `TASK-004`: `index.html` temel HTML5 yapısının kurulması.

## 9. State / Role / Responsive Coverage

- Dev server ortamı tüm çözünürlüklerde çalışabilir statik başlangıcı sunar.

## 10. Automated Verification

- `npm run build` veya statik dosya doğrulama komutu sıfır hatayla tamamlanır.

## 11. Manual QA / Debug Verification

- Tarayıcı geliştirici araçları konsolunda hiçbir hata veya eksik modül uyarısı görünmemelidir.

## 12. Acceptance / Exit Criteria

- [ ] Dev server sorunsuz açılıyor.
- [ ] `variables.css` değişkenleri aktif.
- [ ] `companyData.js` verileri doğru nesne yapısıyla döndürüyor.

## 13. Handoff / Stop Rule

- `WAVE_00` tamamlandıktan sonra `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenerek `WAVE_01` aşamasına geçilir.

---

## Wave Result

- **Result**: Pending / Not Executed
