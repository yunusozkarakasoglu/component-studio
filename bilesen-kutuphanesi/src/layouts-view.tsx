/**
 * LayoutsView
 * Layout (sayfa şablonu) listesi — Tema 1 / Tema 2 iskeleti.
 * (Saf React — stüdyo içi görünüm, bileşen değil)
 */
interface LayoutLike {
  id?: string
  name?: string
  file?: string
  description?: string
}

interface LayoutsViewProps {
  layouts: LayoutLike[]
}

function LayoutsView({ layouts }: LayoutsViewProps) {
  const temas = ["Tema 1", "Tema 2"]

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Layoutlar</h1>
          <p className="text-sm text-muted-foreground">Sayfa şablonları — sol panel + header + içerik yapıları</p>
        </div>
        <span className="text-xs text-muted-foreground">Yeni oluşturma için üstteki <b>+ Yeni</b> butonu</span>
      </div>

      {layouts.length === 0 && (
        <div className="mb-4 rounded-xl border border-dashed border-border bg-muted/20 p-5 text-center">
          <p className="text-sm font-medium text-foreground">Henüz layout yok</p>
          <p className="mt-1 text-xs text-muted-foreground">
            + Yeni Layout ile Tema 1 (sol panel + global header + page header) veya Tema 2 şablonu oluşturun.
            Altında <code className="rounded bg-muted px-1">dashboard</code> ve <code className="rounded bg-muted px-1">pages</code> örnekleri yer alır.
          </p>
        </div>
      )}

      {/* Tema iskeleti */}
      <div className="grid gap-4 lg:grid-cols-2">
        {temas.map((tema, i) => (
          <div key={tema} className="rounded-xl border border-border bg-background p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{tema}</p>
              <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[10px] text-muted-foreground">{i === 0 ? "sol panel + header" : "sadeleştirilmiş"}</span>
            </div>
            <div className="flex h-28 gap-2">
              <div className="flex w-16 flex-col gap-1 rounded-md border border-border bg-muted/30 p-1.5">
                <div className="h-1.5 rounded bg-muted" />
                <div className="h-1.5 rounded bg-muted" />
                <div className="h-1.5 rounded bg-muted" />
                <div className="h-1.5 w-3/4 rounded bg-muted" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="h-4 rounded-md border border-border bg-muted/20" />
                <div className="h-2.5 w-1/3 rounded bg-muted" />
                <div className="flex-1 rounded-md border border-dashed border-border" />
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="rounded bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground">dashboards/</span>
              <span className="rounded bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground">pages/</span>
            </div>
          </div>
        ))}
      </div>

      {layouts.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-foreground">Mevcut Layoutlar ({layouts.length})</p>
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
