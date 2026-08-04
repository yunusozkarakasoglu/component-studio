#!/bin/bash
# Component Studio — kütüphaneyi arka planda başlatır (port 5800)
# Kullanım: ./kutuphane-baslat.sh   |   LLM: bash ile çağırır
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
PORT=5800

if curl -s -o /dev/null --max-time 2 "http://localhost:$PORT/"; then
  echo "✓ Kütüphane zaten çalışıyor: http://localhost:$PORT"
  exit 0
fi

cd "$ROOT/bilesen-kutuphanesi"

# node_modules yoksa kur
if [ ! -d node_modules ]; then
  echo "→ node_modules kuruluyor (ilk çalıştırma)…"
  npm install --no-audit --no-fund >/dev/null 2>&1
fi

# Kayıt defteri: registry bağımlılıkları + yolları yeni konuma göre tazele
if [ ! -d "$ROOT/registry/node_modules" ]; then
  echo "→ registry bağımlılıkları kuruluyor…"
  (cd "$ROOT/registry" && npm install --no-audit --no-fund >/dev/null 2>&1)
fi
(cd "$ROOT/registry" && node build-registry.mjs >/dev/null 2>&1 || echo "  (uyarı: build-registry çalışamadı)")
echo "→ kayıt defteri güncellendi"

nohup npm run dev > /tmp/component-studio.log 2>&1 &
echo "→ Kütüphane başlatılıyor…"

# Hazır olana kadar bekle
for i in $(seq 1 20); do
  if curl -s -o /dev/null --max-time 2 "http://localhost:$PORT/"; then
    echo "✓ HAZIR: http://localhost:$PORT"
    echo "  (log: /tmp/component-studio.log — durdurmak için: ./kutuphane-durdur.sh)"
    exit 0
  fi
  sleep 1
done
echo "✗ Zaman aşımı — log: /tmp/component-studio.log"
exit 1
