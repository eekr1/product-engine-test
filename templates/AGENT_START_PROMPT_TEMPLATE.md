# Product Engine — Agent Start Prompt Template

Repository kökünde bulunan Product Engine v0.1.0 sistemini kullanarak:

```text
{{SCENARIO_FILE}}
```

dosyasındaki proje başlatma senaryosunu uygula.

Önce root `README.md` içindeki canonical Agent Boot / Read Order'ı takip et ve görev için gerekli authoritative Product Engine belgelerini oku.

Scenario dosyasındaki scope ve durma noktasına kesinlikle sadık kal.

Bu aşamada yalnızca:

```text
Raw Brief
→ Project Intake
→ Pending Input
→ Approval Gate
```

akışını tamamla.

Explicit kullanıcı onayı almadan:

- approved input oluşturma,
- generation run başlatma,
- working-output üretme,
- validation çalıştırma,
- output publish etme.

Product Engine mimarisini, engine contract'larını, package sistemini veya template sistemini değiştirme.

İş bittiğinde pending input dosyasını ve approval özetini göster; ardından explicit kullanıcı onayı iste.
