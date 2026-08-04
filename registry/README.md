# Registry — Kayıt Defteri Üretici

Bileşen + şablon envanterini tarar ve `data/registry.json` + `data/registry.db` üretir.
Her kayıt: id, ad, kategori, açıklama, dosya adı ve **mutlak dosya yolu** (dinamik).

## Kullanım

```bash
cd registry
npm install           # ilk kurulumda bir kez (better-sqlite3 gerekir)
node build-registry.mjs
```

Çıktı ayrıca `bilesen-kutuphanesi/public/registry.json`'a yazılır (stüdyo bunu okur).

## Yol dinamizmi

`build-registry.mjs` yolları `dirname` üzerinden çözer — klasör herhangi bir yere
taşınsa bile `node build-registry.mjs` çalıştırıldığında `path` alanları otomatik
yeni konumu gösterir. Stüdyodaki **Path Kopyala / Prompt Oluştur** bu yolları kullanır.

## Not

`server.mjs` eski MCP sunucusudur — şu an kullanılmıyor. Gerekirse:
`~/.pi/agent/mcp.json`'a ekleyip yeniden başlatın.
