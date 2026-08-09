# PACKAGE SELECTION — RUN-20260101-001

```yaml
run_id: RUN-20260101-001
selected_package_id: demo-frontend
delivery_profile: Prototype
output_category: demos
selected_at: 2026-01-01T00:00:00Z
rule_applied: engine/PACKAGE_RULES.md#Rule-1-Demo-Frontend-Selection
```

---

## 1. Selection Rationale

- **Girdi Özellikleri:** Proje türü `web-app`, durumu `new`, hedef teslim profili `Prototype` ve backend bağımsızlığı açıkça istenmiştir.
- **Kural:** `engine/PACKAGE_RULES.md` uyarınca görsel ağırlıklı, backend gerektirmeyen prototype/demo projeleri için birincil paket `demo-frontend` olarak seçilir.
- **Kategori:** Çıktı kategorisi `demos` olarak belirlenmiştir.

---

## 2. Document Scope Matrix (`Prototype` Profile)

| Document ID | Output Filename | Scope Status | Rationale |
|---|---|---|---|
| `README-DOC` | `README.md` | `Required` | Proje giriş ve tanıtım belgesi |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `Required` | Çekirdek ürün bağlamı ve ajan yönlendirmesi |
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | `Required` | İş kuralları ve durum davranışları |
| `TECH-CTX` | `TECH_CONTEXT.md` | `Excluded` | Prototype seviyesinde ayrı teknoloji belgesi gerekmemektedir |
| `DATA-MODEL` | `DATA_MODEL.md` | `Excluded` | Backend/DB bulunmadığı için hariç tutuldu |
