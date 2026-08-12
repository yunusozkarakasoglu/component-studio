/**
 * WidgetsView — Widgets sekmesi görünümü.
 * Kayıtlı widget bileşenlerini (kategori: Widgets) kart olarak listeler.
 * Bileşenler ile aynı akış: registry + samples önizleme.
 */
import { useState } from "react"
import { SAMPLES } from "./samples"
import { Search } from "@/components/ui/icons"

interface WidgetRecord {
  id: string
  name: string
  category: string
  subcategory?: string
  description: string
  source?: string
}

function WidgetsView({
  registry,
  onOpen,
}: {
  registry: { components: WidgetRecord[] } | null
  onOpen: (rec: WidgetRecord) => void
}) {
  const [term, setTerm] = useState("")

  if (!registry) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">Widgetlar yükleniyor…</p>
      </div>
    )
  }

  const widgets = registry.components
    .filter((c) => c.category === "Widgets")
    .filter(
      (c) =>
        !term ||
        c.id.includes(term) ||
        c.name.toLowerCase().includes(term.toLowerCase()) ||
        (c.description || "").toLowerCase().includes(term.toLowerCase())
    )
    .sort((a, b) => Number(a.id) - Number(b.id))

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-4">
      {/* Başlık + arama */}
      <div className="mb-4 flex items-center gap-3">
        <div>
          <h2 className="text-base font-bold text-foreground">🧰 Widgets</h2>
          <p className="text-[11px] text-muted-foreground">{widgets.length} widget · tıklayınca düzenle</p>
        </div>
        <div className="relative ml-auto w-56">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Widget ara…"
            className="h-8 w-full rounded border border-black/40 bg-background pl-8 pr-2 text-xs outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Widget kartları */}
      {widgets.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          {term ? "Sonuç yok" : "Henüz widget eklenmedi — '+' Yeni → Bileşen ile 'Widgets' kategorisinde ekleyebilirsiniz."}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {widgets.map((w) => {
            const sample = SAMPLES[w.id]
            return (
              <div
                key={w.id}
                onClick={() => onOpen(w)}
                title={`${w.id} ${w.name} — düzenlemek için tıkla`}
                className="group relative cursor-pointer overflow-hidden rounded-lg border-thin-black bg-background transition-all duration-150 hover:border-black hover:shadow-xl hover:scale-[1.03]"
              >
                <div className="flex items-center justify-between gap-1 bg-blue-600 px-2 py-1 text-white">
                  <span className="truncate text-[11px] font-semibold">{w.name}</span>
                  <span className="shrink-0 font-mono text-[9px] text-blue-200">{w.id}</span>
                </div>
                <div className="relative flex h-28 items-start justify-center overflow-hidden bg-muted/20 p-3">
                  {sample ? sample : <span className="text-xs text-muted-foreground">önizleme yok</span>}
                </div>
                <div className="border-t border-black/20 px-2 py-1 text-[9px] text-muted-foreground">
                  {w.subcategory || "Widgets"}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export { WidgetsView }
export type { WidgetRecord }
