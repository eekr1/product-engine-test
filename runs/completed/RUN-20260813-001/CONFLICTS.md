# Conflicts Register — RUN-20260813-001

## 1. Çözülen Çelişkiler Listesi

| Conflict ID | Kaynak A | Kaynak B | Çatışan Bilgi | Uygulanan Otorite | Seçilen Çözüm (Resolution) | Durum |
|---|---|---|---|---|---|---|
| `CNF-001` | `SRC-002` (Mevcut SITE123 Tasarımı) | `SRC-001` (Project Brief & Target Design) | Mevcut sitenin görsel düzeni vs Yeni modern kurumsal demo hedefi | `CONFLICT_RESOLUTION.md` Hiyerarşisi: Brief & Engine Target Rules > Mevcut Görsel Şablon | Mevcut sitenin görsel kararları yetkili kabul edilmedi. Mevcut siteden sadece doğrulanmış metin/hizmet verileri aktarıldı, visual direction sıfırdan kuruldu. | Resolved |
| `CNF-002` | `SRC-001` (Delivery Profile: Prototype) | `PLANNING_PROFILE_OVERLAY` (`implementation: standard`) | Prototype delivery ile implementation planlama derinliği ilişkisi | `PLANNING_PROFILES.md` Invariant: Profile depth != Quality / Delivery Profile != Implementation Planning | Prototype teslim olgunluğuna rağmen implementation planlama seviyesi düşürülmedi; agent-ready `standard` seti uygulandı. | Resolved |

## 2. Bekleyen ve Çözülemeyen Çelişkiler

- Şu an için run'ı engelleyen (blocking) veya kullanıcı müdahalesi gerektiren açık çelişki bulunmamaktadır.
