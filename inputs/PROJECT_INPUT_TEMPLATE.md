---
input_id: "INPUT-{{PROJECT_SLUG_UPPER}}-V1"
project_name: "{{PROJECT_NAME}}"
project_slug: "{{PROJECT_SLUG}}"
input_version: "1.0"
status: "pending" # pending | approved | superseded
project_type: "{{PROJECT_TYPE}}" # web-app | api-service | mobile-app | internal-tool | landing-page | content-platform | integration | infrastructure | prototype | other
project_state: "{{PROJECT_STATE}}" # new | existing
delivery_profile: "{{DELIVERY_PROFILE}}" # Foundation | Prototype | Implementation Ready | Production Ready
primary_language: "tr" # tr | en | etc.
created_at: "{{YYYY_MM_DD_THH_MM_SSZ}}"
updated_at: "{{YYYY_MM_DD_THH_MM_SSZ}}"
approved_at: ""
approved_by: "" # user
supersedes: ""
source_type: "user-provided" # user-provided | existing-project | provided-document | repository | explicit-assumption
---

# Project Input: {{PROJECT_NAME}}

> [!NOTE]
> Bu belge Product Engine'in canonical proje girdi belgesidir.
> Pending durumundayken doküman üretimi başlatılamaz. Üretim yalnızca explicit user approval alındıktan ve `status: approved` yapıldıktan sonra başlatılabilir.

---

## 1. Original Brief (Ham Anlatım)

*Kullanıcı veya proje sahibinin sağladığı ilk serbest metin anlatımı, toplantı notu veya mesajlar buraya yorumlanmadan aktarılır.*

```text
{{ORIGINAL_RAW_USER_BRIEF}}
```

---

## 2. Proje Kimliği ve Amacı (Project Identity & Purpose)

- **Proje Adı (project_name):** {{PROJECT_NAME}}
- **Proje Slug (project_slug):** {{PROJECT_SLUG}}
- **Proje Türü (project_type):** {{PROJECT_TYPE}}
- **Proje Durumu (project_state):** {{PROJECT_STATE}}
- **Hedef Delivery Profile:** {{DELIVERY_PROFILE}}
- **Birincil Dil (primary_language):** {{PRIMARY_LANGUAGE}}

### Proje Özeti (Summary)
*1-3 paragrafta projenin ne olduğunu ve ne amaçla yapıldığını açıklayın.*

{{PROJECT_SUMMARY}}

### Problem ve Temel Amaç (Problem & Goal)
- **Çözülen Problem:** {{PROBLEM_DESCRIPTION}}
- **Temel Amaç:** {{PROJECT_PURPOSE}}
- **Başarı Kriteri:** {{SUCCESS_CRITERIA}}

---

## 3. Hedef Kullanıcılar ve Akışlar (Users & Core Flows)

### Kullanıcı Rolleri (User Roles)
- **Role 1 (e.g. Ziyaretçi / Müşteri):** {{ROLE_1_DESCRIPTION}}
- **Role 2 (e.g. Yönetici / Admin):** {{ROLE_2_DESCRIPTION}}

### Temel Kullanıcı Akışları (Core Flows)
1. **Flow 1:** {{FLOW_1_STEPS}}
2. **Flow 2:** {{FLOW_2_STEPS}}

---

## 4. Kapsam Yönetimi (Scope Boundaries)

### Dahil Olanlar (In Scope)
*Bu sürümde/run'da yapılması kesinleşen gözlemlenebilir özellikler ve bileşenler.*
- [ ] {{SCOPE_ITEM_1}}
- [ ] {{SCOPE_ITEM_2}}
- [ ] {{SCOPE_ITEM_3}}

### Kapsam Dışı (Out of Scope)
*Bu sürümde/run'da kesinlikle yapılmayacak ve çıktılarda aktif gösterilmeyecek konular.*
- {{OUT_OF_SCOPE_ITEM_1}}
- {{OUT_OF_SCOPE_ITEM_2}}

### Gelecekte Planlanan (Future Possibilities / Roadmap)
*İlk teslimde yapılmayacak ancak sonraki aşamalarda eklenmesi muhtemel gelişim yolu.*
- {{FUTURE_ITEM_1}}

---

## 5. Mevcut Proje Bağlamı (Existing Project Context)
*Yalnızca `project_state: existing` durumunda doldurulur. `project_state: new` ise "Uygulanmıyor" yazınız.*

### Current Reality (Şu Anki Gerçeklik)
- **Mevcut Repository / Kod:** {{CURRENT_REPO_INFO}}
- **Mevcut Stack:** {{CURRENT_STACK_INFO}}
- **Çalışan Özellikler:** {{WORKING_FEATURES}}
- **Bilinen Sorunlar / Borçlar:** {{KNOWN_ISSUES}}

### Target State (Hedeflenen Durum)
- **Arzulanan Durum:** {{TARGET_STATE_DESCRIPTION}}

### Transition Scope (Bu Run'ın Geçiş Kapsamı)
- **Mevcuttan Hedeften Bu Run'da Yapılacak Kısım:** {{TRANSITION_SCOPE_DESCRIPTION}}

---

## 6. Teknik ve Tasarım Bağlamı (Technical & Design Context)

### Teknik Tercihler ve Kısıtlar (Technical Preferences & Constraints)
- **Tercih Edilen Stack:** {{TECHNICAL_STACK_PREFERENCES}}
- **Yasaklı / Kullanılmayacak Teknolojiler:** {{FORBIDDEN_TECHNOLOGIES}}
- **Entegrasyonlar:** {{INTEGRATIONS_LIST}} *(Not: API Key / Şifre içermez, sadece servis adı!)*
- **Bilinen Teknik Kısıtlar:** {{TECHNICAL_CONSTRAINTS}}

### Tasarım ve UX Bağlamı (Design & UX Context)
- **Marka / Görsel Yön:** {{DESIGN_DIRECTION}}
- **Renk / Tipografi Tercihleri:** {{COLOR_TYPOGRAPHY_NOTES}}
- **Mobil Uyumluluk Beklentisi:** {{RESPONSIVE_EXPECTATION}}

---

## 7. İçerik ve Kaynak Listesi (Sources & Provenance)

| Source ID | Kaynak Adı / Bağlantı | Kaynak Türü | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | {{SOURCE_NAME_1}} | user-provided | Authoritative | Proje ana brief ve gereksinimleri |
| SRC-02 | {{SOURCE_NAME_2}} | repository | Trusted | Mevcut sistem kod incelemesi |

*Güven Seviyeleri: Authoritative | Trusted | Reference Only | Unverified*

---

## 8. Bilinen Kararlar, Varsayımlar ve Çelişkiler

### Bilinen Kararlar (Known Decisions)
- [DEC-01] {{KNOWN_DECISION_1}}

### Varsayımlar (Assumptions)
*Açık bilgilerin olmadığı ve Assumption Rules uyarınca kabul edilen varsayımlar.*
- **[ASM-01]** {{ASSUMPTION_1_DESCRIPTION}} (Reason: {{ASSUMPTION_1_REASON}}, Impact: {{ASSUMPTION_1_IMPACT}}, Approved: {{ASSUMPTION_1_APPROVED_STATUS}})

### Çelişkiler (Conflicts)
*Kaynaklar veya istekler arasında tespit edilen çelişkiler ve durumları.*
- **[CNF-01]** {{CONFLICT_1_DESCRIPTION}} (Status: Resolved / Unresolved, Resolution: {{CONFLICT_1_RESOLUTION}})

---

## 9. Onay Durumu ve Geçiş Kontrolü (Approval Status & Gate)

- **Onay Durumu (status):** {{STATUS}} # pending | approved
- **Onay Tarihi (approved_at):** {{APPROVED_AT}}
- **Onaylayan (approved_by):** {{APPROVED_BY}}

### Approval Verification Checklist
- [ ] All MUST intake fields filled (`project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `primary_language`)
- [ ] `project_type` is valid canonical value (Not `saas`)
- [ ] `delivery_profile` is valid canonical value (`Foundation`, `Prototype`, `Implementation Ready`, `Production Ready`)
- [ ] Existing project has clear Current Reality vs Target State separation
- [ ] No unresolved critical conflicts remaining
- [ ] No secrets, tokens, passwords or credentials stored
- [ ] No machine-dependent absolute paths (`file:///C:/...`)
- [ ] Explicit approval received from user
