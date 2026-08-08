# DEMO_FRONTEND_PACKAGE

## 1. Package Kimliği

```yaml
package_id: demo-frontend
package_name: Frontend Demo Package
package_type: base
version: 1.3.0
status: active
default_delivery_profile: Prototype
compatible_project_types:
  - web-app
  - landing-page
  - prototype
  - mobile-app
compatible_extensions:
  - existing-project
  - api-service
incompatible_packages: []
```

---

## 2. Amaç

`DEMO_FRONTEND_PACKAGE`, kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) odaklı satış demoları, sunum prototipleri, konsept kanıtlama (PoC) ve hızlı frontend projeleri için dokümantasyon kapsamını tanımlar.

Ana hedefleri:
- Görsel ve işlevsel olarak çalışan, sunulabilir bir frontend deneyimi planlamak.
- Ajanın hızlıca ekranları, kullanıcı akışlarını ve arayüz bileşenlerini kurmasını sağlamak.
- Projeyi otomatik olarak "atıl / kullan-at (throwaway)" kabul etmemek; gelecekte gerçek bir ürüne dönüşmesini engelleyecek kalitesiz veya çıkmaz mimari kararlar vermemek.
- Gerçekte kapsamda olmayan arka uç (backend), veritabanı, yetkilendirme (auth) veya production operasyonları için gereksiz dokümantasyon bürokrasisi üretmemek.

---

## 3. Doküman Seçimi Filtreleme İlkesi ve Deterministik Fallback Algoritması

Desteklenen her `project_type + delivery_profile` kombinasyonunda hangi dokümanların geçerli olduğunu belirlemek için aşağıdaki **Deterministik Doküman Çözümleme Algoritması** uygulanır:

```text
1. Seçilen delivery_profile için paketin aday doküman setini al (Candidate Document Set).
2. engine/DOCUMENT_CATALOG.md "Applicable Profiles" filtresini uygula:
   └─ Dokümanın Applicable Profiles listesi seçilen delivery_profile'ı içeriyor mu? (İçermiyorsa elenir).
3. engine/DOCUMENT_CATALOG.md "Applicable Types" filtresini uygula:
   └─ Dokümanın Applicable Types listesi seçilen project_type'ı içeriyor mu? (İçermiyorsa elenir).
4. İki filtreyi de geçen doküman kümesi, ilgili kombinasyonun geçerli doküman kapsamını oluşturur.
5. Aşağıda açıkça örneklenmemiş kombinasyonlar bu deterministik kural ile yorumsuz çözülür.
```

---

## 4. Desteklenen Project Type + Delivery Profile Doküman Matrisi

### 4.1 `web-app` veya `mobile-app` Bağlamı

- **Foundation Profile:**
  - *Zorunlu:* `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
  - *Elenenler:* `DESIGN` (`DESIGN_RULES.md` - `Foundation` profilinde catalog gereği geçerli değildir).
- **Prototype Profile (Varsayılan):**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `DESIGN`.
  - *Elenenler:* `TECH-CTX` (`Prototype` profilinde catalog gereği geçerli değildir).
- **Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DESIGN`.
  - *Koşullu:* `STATUS` (`CURRENT_STATUS.md`), `TASKS` (`NEXT_TASKS.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`), `PROJ-PLAN` (`PROJECT_PLAN.md`), `DECISIONS` (`DECISIONS.md`).
- **Production Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DESIGN`, `DEPLOY` (`DEPLOYMENT.md`).

### 4.2 `landing-page` Bağlamı

- **Prototype veya Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `DESIGN`.
  - *Elenenler:* `PRODUCT-RULES`, `TECH-CTX` (`landing-page` türü için catalog'da geçerli değildir).

### 4.3 `prototype` (Proje Türü Olarak) Bağlamı

- **Tüm Desteklenen Profiller:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`.
  - *Elenenler:* `PRODUCT-RULES`, `TECH-CTX`, `DESIGN` (`prototype` proje türü için catalog'da geçerli değildir).

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: Proje adı.
- `project_purpose`: Demo veya prototipin temel amacı.
- `project_type`: `web-app`, `landing-page`, `mobile-app` veya `prototype`.
- `delivery_profile`: `Prototype` (varsayılan) veya seçilen diğer desteklenen profil.
- `primary_language`: Çıktı dili.

---

## 6. Sahiplik (Information Ownership) Kuralları

`engine/INFORMATION_MAP.md` uyarınca:
- **`DESIGN_RULES.md` (`DESIGN`)**: Görsel dil, renk paleti, tipografi, UI bileşen kuralları ve arayüz standartlarının tek birincil sahibidir (primary owner). `PRODUCT_RULES.md` asla tasarım kuralı sahibi yapılamaz.
- **`PRODUCT_RULES.md` (`PRODUCT-RULES`)**: Ekran davranışları, sayfa erişim kuralları ve durum (state) kısıtlamalarının birincil sahibidir.

### Hariç Tutulan Dokümanlar (Default Excluded)
Aksi yönde bir extension eklenmedikçe aşağıdaki belgeler bu pakette varsayılan olarak üretilmez:
- `DATA` (`DATA_MODEL.md`), `API` (`API_CONTRACTS.md`), `DEPLOY` (`DEPLOYMENT.md`), `OPS` (`OPERATIONS.md`), `TEST` (`TEST_STRATEGY.md`), `PROD-STRAT` (`PRODUCT_STRATEGY.md`).

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Gerçek Backend Entegrasyonu:** Projeye mock veriler yerine gerçek API ekleneceği zaman `API_SERVICE_PACKAGE` eklentisi uygulanır ve `API` (`API_CONTRACTS.md`) belgesi dahil edilir.
- **Mevcut Projeden Devam:** Projede önceden yazılmış kodlar varsa `EXISTING_PROJECT_PACKAGE` eklenti ilkeleri uygulanır ve `STATUS` (`CURRENT_STATUS.md`) zorunlu hale gelir.

### Reduction (Daraltma) Kuralları
- `DESIGN` belgesinin geçerli olduğu tür ve profillerde (`web-app`/`mobile-app`/`landing-page` + `Prototype`/`Implementation Ready`), `DESIGN` belgesi zorunlu olup çıkarılamaz. Tasarım kuralları `PRODUCT_RULES.md` içine taşınamaz.
- Deterministik fallback algoritması sonucunda kalan zorunlu belgeler daraltılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Ekran listesi, amaç ve temel görsel tercihler özet düzeydedir.
- **Prototype Level:** Ekran akışları, mock veri yapıları, bileşen hiyerarşisi ve stil kuralları tanımlıdır.
- **Implementation Ready Level:** Her ekranın yerleşimi, state yönetimi (loading, empty, error, success), event kontrolleri ve UI bileşen prop'ları ajanın doğrudan kod yazabileceği seviyede ayrıntılıdır.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Sahte Backend İddiası Yokluğu:** Belgeler, kapsam dışı backend/database işlevlerini sanki gerçekten varmış gibi sunmamalı; verilerin mock/local state olduğunu netleştirmelidir.
2. **Deterministik Fallback Doğrulaması:** `landing-page` veya `prototype` proje türlerinde catalog'da geçerli olmayan belgelerin zorunlu kılınmadığı doğrulanmalıdır.
3. **Arayüz ve Tasarım Tutarlılığı:** `DESIGN_RULES.md` stil kararları ile `PRODUCT_RULES.md` ekran kuralları birbiriyle tutarlı olmalıdır.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/demos/<project-slug>/latest/`
- Teslim edilen klasörde yalnız seçilmiş ve doğrulanmış belgeler yer alır.
- Placeholder (`[TBD]`, `[BURAYA YAZ]`) kesinlikle bulunmaz.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

Bu paket ile başlayan bir proje şu adımlarla tam ürüne dönüştürülebilir:
1. `Prototype` → `Implementation Ready` seviyesine yükseltilir.
2. `API_SERVICE_PACKAGE` veya `SAAS_PACKAGE` extension olarak eklenir.
3. Eksik `DATA`, `API` ve `DEPLOY` belgeleri üretilerek `outputs/products/` klasörüne aktarılır.

---

## 12. Tamamlanma Kriterleri

Bu paket çalışması tamamlandığında aşağıdaki kriterlerin karşılandığı doğrulanmalıdır:

1. **Deterministik Çözümleme Uyumluğu:** Desteklenen tüm `project_type + delivery_profile` kombinasyonlarının deterministik fallback algoritmasıyla yorum gerektirmeden çözülebilir olması.
2. **Catalog Sınırlarının Korunması:** `landing-page` için `PRODUCT-RULES`/`TECH-CTX` veya `Prototype` profili için `TECH-CTX` zorlamasının yapılmamış olması.
3. **Information Ownership Uyumluğu:** Tasarım kurallarının yalnızca `DESIGN_RULES.md` bünyesinde kalması.
4. **Temiz Output:** Çıktının `outputs/demos/<project-slug>/latest/` altında placeholder barındırmayan, doğrulanmış ve teslim edilebilir durumda olması.
