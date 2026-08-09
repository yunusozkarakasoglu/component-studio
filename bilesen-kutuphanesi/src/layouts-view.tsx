/**
 * LayoutsView
 * Layout (sayfa şablonu) listesi — Tema 1 / Tema 2 canlı önizlemeleri.
 * (Saf React — stüdyo içi görünüm, bileşen değil)
 */
import { useState, type ReactNode } from "react"
import { Tema1 } from "./layouts/tema1"

interface LayoutLike {
  id?: string
  name?: string
  file?: string
  description?: string
}

interface LayoutsViewProps {
  layouts: LayoutLike[]
}

interface TemaPreview {
  id: string
  title: string
  desc: string
  node: ReactNode
}

function LayoutsView({ layouts }: LayoutsViewProps) {
  const [fullscreen, setFullscreen] = useState<{ title: string; node: ReactNode } | null>(null)
  const temas: TemaPreview[] = [
    { id: "tema1", title: "Tema 1", desc: "NovaPanel — header + açılır/kapanır panel + filtreli tablo + footer", node: <Tema1 /> },
  ]

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-background">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
          <p className="text-sm font-semibold text-foreground">⛶ {fullscreen.title}</p>
          <button
            type="button"
            onClick={() => setFullscreen(null)}
            className="flex cursor-pointer items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted/70"
          >
            ← Layoutlara Dön
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto">{fullscreen.node}</div>
      </div>
    )
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Layoutlar</h1>
          <p className="text-sm text-muted-foreground">Sayfa şablonları — Tema 1/2 canlı önizlemeleri</p>
        </div>
        <span className="text-xs text-muted-foreground">Tıkla → tam ekran incele · yeni temalar eklenebilir</span>
      </div>

      {layouts.length === 0 && (
        <div className="mb-4 rounded-xl border border-dashed border-border bg-muted/20 p-5 text-center">
          <p className="text-sm font-medium text-foreground">Sayfa şablonları (kayıtlar)</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Aşağıdaki temalar canlı çalışır — her biri farklı bir sayfa layout'u. Tıkla → tam ekran.
          </p>
        </div>
      )}

      {/* Tema kartları — canlı önizleme */}
      <div className="grid gap-4 lg:grid-cols-2">
        {temas.map((tema) => (
          <div key={tema.id} className="rounded-xl border border-border bg-background p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{tema.title}</p>
                <p className="text-xs text-muted-foreground">{tema.desc}</p>
              </div>
              <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[10px] text-muted-foreground">{tema.id}</span>
            </div>
            <button
              type="button"
              onClick={() => setFullscreen({ title: tema.title, node: tema.node })}
              className="relative block h-96 w-full cursor-pointer overflow-hidden rounded-lg border border-border text-left transition-all hover:ring-2 hover:ring-blue-500/40"
            >
              <div className="pointer-events-none h-full w-full">{tema.node}</div>
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent py-2 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 hover:opacity-100">
                ⛶ Tam ekran aç
              </span>
            </button>
          </div>
        ))}
      </div>

      {layouts.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-foreground">Kayıtlı Layoutlar ({layouts.length})</p>
          <ul className="space-y-1">
            {layouts.map((l, i) => (
              <li key={i} className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground">
                {l.name ?? l.file ?? `layout-${i}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { LayoutsView }
export type { LayoutsViewProps }
