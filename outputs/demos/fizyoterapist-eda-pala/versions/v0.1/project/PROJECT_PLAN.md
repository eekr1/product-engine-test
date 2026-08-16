# Fizyoterapist Eda Pala Web Sitesi Demo — Project Plan

## 1. Delivery Strategy

Projenin temel teslimat stratejisi, Fizyoterapist Eda Pala için doğrulanmış bilgilerle sınırlı kalarak modern, güven veren ve proaktif satış görüşmelerinde sergilenmeye hazır bağımsız bir frontend presentation demo üretmektir (`delivery_profile: Prototype`).

Teslimat yaklaşımı:
- Modüler statik konfigürasyon mimarisi (`content.config.js`).
- Sıfır uydurma veri ve strictly dondurulmuş FCL (`FCL-01` .. `FCL-04`).
- Anti-clinic-cliché görsel tasarım dili (`DESIGN_RULES.md`).
- Sıralı ve bağımsız doğrulanabilir 5 dalga (`WAVE_00` .. `WAVE_04`).

## 2. Phases / Milestones

- **Phase 1 — Foundation & Specifications**: Proje mimarisi, tasarım dili, dondurulmuş veri adapter yapısı ve dalga haritasının oluşturulması (Milestone 1).
- **Phase 2 — Presentation Core Implementation**: Hero tanıtım bölümü, kişisel kimlik ve Tekirdağ konum bağlamı ile outbound Instagram yönlendirmesinin inşası (Milestone 2).
- **Phase 3 — Quality Verification & Packaging**: Cross-device responsive doğrulama, erişilebilirlik kontrolleri, anti-cliché denetimi ve final agent-ready paket çıktısı (Milestone 3).

## 3. Wave Relationship

| Wave ID | Wave Title | Deliverable / Responsibility | Preceding Dependency |
|---|---|---|---|
| `WAVE_00` | Foundation & Setup | Statik proje yapısı, Design System tokens (`tokens.css`), Local content provider (`content.config.js`) | Approved Project Input |
| `WAVE_01` | Hero & Visual Presentation | Hero presentation surface, Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamı gösterimi | `WAVE_00` |
| `WAVE_02` | Professional Identity & Location Context | Kişisel tanıtım ve Tekirdağ konum bağlamı bileşeni, verified facts sunumu | `WAVE_01` |
| `WAVE_03` | Outbound Instagram Contact & CTA | Onaylı Instagram profili yönlendirme butonu ve sosyal ağ alanları | `WAVE_02` |
| `WAVE_04` | Final Cross-Cutting QA & Verification | Tüm yüzeylerin responsive/cross-device denetimi, erişilebilirlik ve fail-closed validation | `WAVE_03` |

## 4. Dependency Overview

- `WAVE_00` tüm sonraki UI dalgalarının bağımlı olduğu altyapı katmanıdır (`tokens.css` ve `contentAdapter.js`).
- `WAVE_01` kullanıcı giriş yüzeyini oluşturur.
- `WAVE_02` kişisel kimlik ve konum bağlamını sunar.
- `WAVE_03` dış iletişim kanalını ekler.
- `WAVE_04` tüm önceki dalgaların bağımsız olarak tamamlanmış olmasını şart koşar.

## 5. Deliverables

- **Dokümantasyon Paketi**: 11 canonical doküman ve 5 detaylı wave planı (`outputs/demos/fizyoterapist-eda-pala/versions/v0.1/`).
- **Frontend Presentation Demo**: `index.html`, `styles/`, `js/` bağımsız statik kod tabanı.

## 6. Acceptance Conditions

- Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamı tereddütsüz görünür olmalıdır.
- Instagram yönlendirmesi çalışır ve güvenli özniteliklerle açılır olmalıdır.
- Doğrulanmamış hiçbir tedavi, hastalık, adres veya hasta yorumu bulunmamalıdır.
- Mobil ve masaüstünde eksiksiz responsive performans sunulmalıdır.

## 7. Scope Growth / Upgrade Boundaries

- **Future Possibility 1**: Müşteri tarafından doğrulandığında eklenecek resmi klinik adresi, telefon ve çalışma saatleri.
- **Future Possibility 2**: Müşteri onaylı detaylı eğitim, üniversite ve biyografi metinleri.
- **Future Possibility 3**: Online randevu sistemi veya iletişim formu backend entegrasyonu.
