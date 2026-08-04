#!/bin/bash
# Component Studio — kütüphane sunucusunu durdurur (port 5800)
# Kullanım: ./kutuphane-durdur.sh
PORT=5800
PID=$(ss -tlnp 2>/dev/null | grep ":$PORT " | grep -oE 'pid=[0-9]+' | head -1 | cut -d= -f2)
if [ -n "$PID" ]; then
  kill "$PID" 2>/dev/null
  echo "✓ Kütüphane durduruldu (pid $PID)"
else
  echo "Çalışan kütüphane yok (5800 boş)"
fi
