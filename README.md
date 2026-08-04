# Component Studio — Offline React Bileşen Kütüphanesi

Kategorilere ayrılmış, aranabilir, düzenlenebilir, özelleştirilebilir, genişletilebilir
**offline React bileşen kütüphanesi** (shadcn + React Aria Components).

> 📍 **Dinamik yapı:** Bu klasör herhangi bir bilgisayara kopyalanabilir.
> Tüm yollar bu klasöre göre çözülür. Gerçek yollar: `node yollar.mjs`

## 🚀 İlk kurulum (bir kez)

```bash
cd bilesen-kutuphanesi && npm install
cd ../registry && npm install
cd ../registry && node build-registry.mjs   # kayıt defterini üretir
```

## 🖥️ Çalıştırma

```bash
cd bilesen-kutuphanesi && npm run dev   # → http://localhost:5800
```

## 📂 Yapı

```
Component-studio/
├── component-kutuphane.md   ← LLM kılavuzu (agent'a "oku" deyince çalışır)
├── yollar.mjs               ← dinamik yol çözümleyici
├── Bileşen Listesi .txt     ← envanter kaynağı
├── bilesen-kutuphanesi/     ← 89+ bileşen + stüdyo (port 5800)
└── registry/                ← kayıt defteri üretici (build-registry.mjs)
```

## 🔄 İş akışı

1. LLM'e: **"component-kutuphane.md oku"** → kılavuzu okur, `npm run dev` ile 5800'ü açar
2. Stüdyoda kategoriler/arama/önizleme/düzenleme yapılır
3. Bir bileşeni projeye entegre etmek için: **📂 Path Kopyala** veya **✨ Prompt Oluştur**
4. Prompt'u LLM'e yapıştır → dosyayı okur, projeye uyarlar

## 📌 Notlar

- Port **5800** sabittir (vite.config.ts)
- MCP gerekmez — bileşenler dosya yoluyla LLM'e verilir, LLM native `read` ile okur
- `registry/server.mjs` eski MCP sunucusudur; kullanılmıyor (gerekirse tekrar etkinleştirilebilir)
