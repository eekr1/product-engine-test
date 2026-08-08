# CONFLICTS_TEMPLATE

## Template Metadata

```yaml
template_id: conflicts-template
template_name: Conflicts Operational Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: operational
category: operational
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - conflict_resolution_rules
conditional_inputs: []
dependencies: []
output_filename: CONFLICTS.md
```

## Amaç

Girdiler, belgeler veya kurallar arasında tespit edilen çelişkileri, kaynakları, uygulanan çözüm otoritesini (`engine/CONFLICT_RESOLUTION.md`) ve sonuçlarını kaydetmek.

## Kullanım Koşulları

Çelişkili bilgi tespit edildiğinde kaydetmek zorunludur.

## Girdi Kaynakları

- `engine/CONFLICT_RESOLUTION.md`

## Zorunlu Bölümler

- Çelişki Kayıt Formatı (Conflict Entry Format)
- Çözülen Çelişkiler (Resolved Conflicts)
- Bekleyen / Engel Çelişkiler (Unresolved Conflicts)

## Koşullu Bölümler

- `[CONDITIONAL: include only if conflicts block the run]` Engellemeye Neden Olan Çelişkiler

## İçerik Üretim Kuralları

- Her kayıt: ID, Kaynak A, Kaynak B, Çatışan Bilgi, Uygulanan Otorite Seviyesi (Authority Level), Seçilen Çözüm (Resolution) ve Etkilenen Dokümanlar.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{CONFLICTS_ENTRIES_TABLE}}`: Çelişki kayıtları tablosu.

## Kapsam Dışı

- Varsayım kayıtları (bkz: `ASSUMPTIONS_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Run çatışma çözümü kayıt tescili.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Bilgi tutarsızlıklarını şeffaf bir hiyerarşi ile çözer.

## Validation Beklentileri

- `engine/CONFLICT_RESOLUTION.md` otorite sırasına uyulmalıdır.

---

# OUTPUT DOCUMENT START

# Conflicts Register — {{RUN_ID}}

## 1. Çözülen Çelişkiler Listesi

{{CONFLICTS_ENTRIES_TABLE}}

## 2. Bekleyen ve Çözülemeyen Çelişkiler

- Kullanıcı müdahalesi gerektiren açık çelişkiler.

[CONDITIONAL: include only if conflicts block the run]
## 3. Engellemeye Neden Olan Çelişkiler (Run Blocked)

- Run'ın durdurulmasına (`Status: Blocked`) neden olan kritik çelişkiler.

# OUTPUT DOCUMENT END
