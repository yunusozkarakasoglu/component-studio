/**
 * LayoutsView
 * Layout (sayfa şablonu) listesi — Tema seçim kutuları (minyatür önizleme).
 * Kutuya bas → tema tam sayfa açılır → geri ile Layoutlar sayfasına dönülür.
 * (Saf React — stüdyo içi görünüm, bileşen değil)
 */
import { useEffect, useRef, useState, type ReactNode } from "react"
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
  node?: ReactNode
  ready: boolean
}

/** Minyatür önizleme kutusu — tema sabit 1200px tuvalde render, kutuya scale edilir */
function TemaThumb({ node }: { node: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.35)

  useEffect(() => {
    const update = () => {
      const w = ref.current?.offsetWidth ?? 640
      setScale(w / 1200)
    }
    update()
    const ro = new ResizeObserver(update)
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} className="tema-thumb relative h-72 w-full overflow-hidden rounded-lg border border-border bg-muted/20">
      <div
        className="pointer-events-none absolute left-0 top-0"
        style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: 1200, height: 700 }}
      >
        {node}
      </div>
    </div>
  )
}

function LayoutsView({ layouts }: LayoutsViewProps) {
  const [fullscreen, setFullscreen] = useState<{ title: string; node: ReactNode } | null>(null)

  const temas: TemaPreview[] = [
    { id: "tema1", title: "Tema 1", desc: "NovaPanel — header + açılır/kapanır panel + filtreli tablo", node: <Tema1 />, ready: true },
    { id: "tema2", title: "Tema 2", desc: "Yeni tasarım — hazırlanıyor", ready: false },
    { id: "tema3", title: "Tema 3", desc: "Yeni tasarım — hazırlanıyor", ready: false },
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
          <p className="text-sm text-muted-foreground">Tema seç — kutuya basınca tam sayfa açılır</p>
        </div>
        <span className="text-xs text-muted-foreground">Tema 1 hazır · yeni temalar eklendikçe kutular dolar</span>
      </div>

      {layouts.length === 0 && (
        <div className="mb-4 rounded-xl border border-dashed border-border bg-muted/20 p-4 text-center">
          <p className="text-xs text-muted-foreground">
            Aşağıdaki kutular canlı tema önizlemeleridir. Bir kutuya tıklayın → tam ekran · geri ile dönün.
          </p>
        </div>
      )}

      {/* Tema seçim kutuları */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {temas.map((tema) => (
          <div key={tema.id} className="flex flex-col rounded-xl border border-border bg-background p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{tema.title}</p>
              <span className={`rounded-full px-2 py-0.5 text-[10px] ${tema.ready ? "bg-green-100 text-green-700" : "bg-muted/60 text-muted-foreground"}`}>
                {tema.ready ? "hazır" : "yakında"}
              </span>
            </div>
            {tema.ready && tema.node ? (
              <button
                type="button"
                onClick={() => setFullscreen({ title: tema.title, node: tema.node })}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-lg text-left transition-all hover:ring-2 hover:ring-blue-500/40"
                title={`${tema.title} — tam ekran aç`}
              >
                <TemaThumb node={tema.node} />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent py-2.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  ⛶ Tam ekran aç
                </span>
              </button>
            ) : (
              <div className="flex h-72 w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/10">
                <span className="text-xs text-muted-foreground">Tasarım bekleniyor…</span>
              </div>
            )}
            <p className="mt-2 text-xs text-muted-foreground">{tema.desc}</p>
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
