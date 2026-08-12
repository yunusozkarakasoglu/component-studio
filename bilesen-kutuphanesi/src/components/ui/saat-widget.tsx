/**
 * SaatWidget
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Canlı saat + tarih — her saniye güncellenir (tr-TR).
 *   <SaatWidget />
 * @id 2082
 * @category Widgets
 * @subcategory SaatWidget
 * @source ozel
 * @tags saat, clock, zaman, widget, tarih, canlı
 */
import { useEffect, useState } from "react"

function SaatWidget({ className }: { className?: string }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const time = now.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const date = now.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        borderRadius: "12px",
        background: "#fff",
        color: "#000",
        fontFamily: "monospace",
        width: "fit-content",
        border: "1px solid #ddd",
      }}
    >
      <div style={{ fontSize: "2.5rem", fontWeight: 600, letterSpacing: "2px" }}>
        {time}
      </div>
      <div style={{ fontSize: "1rem", color: "#555", marginTop: "4px" }}>
        {date}
      </div>
    </div>
  )
}

export { SaatWidget }
