/**
 * DashboardView
 * Stüdyo ana sayfası — genel istatistikler, kısayollar, favoriler.
 * (Saf React — stüdyo içi görünüm, bileşen değil)
 */
import { useMemo, useState } from "react"
import type { ReactNode } from "react"

interface CompLike {
  id: string
  name: string
  category: string
  subcategory?: string
}

interface DashboardViewProps {
  registry: { components: CompLike[]; categories?: string[] } | null
  onOpenCategory: (category: string) => void
}

const STYLE = {
  card: "rounded-xl border border-border bg-background p-4 shadow-sm",
  title: "text-sm font-semibold text-foreground mb-3",
  btn: "inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700",
}

function Kpi({ label, value, hint }: { label: string; value: ReactNode; hint?: string }) {
  return (
    <div className={STYLE.card}>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
      {hint && <p className="mt-1 text-[10px] text-muted-foreground/70">{hint}</p>}
    </div>
  )
}

function DashboardView({ registry, onOpenCategory }: DashboardViewProps) {
  const comps = registry?.components ?? []
  const cats = registry?.categories ?? []

  const stats = useMemo(() => {
    const subCount = comps.filter((c) => c.subcategory).length
    const byCat = new Map<string, number>()
    for (const c of comps) byCat.set(c.category, (byCat.get(c.category) ?? 0) + 1)
    const son = [...comps].sort((a, b) => Number(b.id) - Number(a.id)).slice(0, 8)
    return { subCount, byCat, son }
  }, [comps])

  // Favoriler (localStorage — id listesi)
  const [favs, setFavs] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("st-favs") || "[]") } catch { return [] }
  })
  const toggleFav = (id: string) => {
    setFavs((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      try { localStorage.setItem("st-favs", JSON.stringify(next)) } catch { /* boş */ }
      return next
    })
  }
  const favComps = comps.filter((c) => favs.includes(c.id))

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-5">
      {/* Başlık + hızlı aksiyon */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Genel Bakış</h1>
          <p className="text-sm text-muted-foreground">Kütüphane istatistikleri ve kısayollar</p>
        </div>
        <span className="text-xs text-muted-foreground">Yeni oluşturma için üstteki <b>+ Yeni</b> butonu</span>
      </div>

      {/* İstatistikler */}
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Kpi label="Toplam Bileşen" value={comps.length} />
        <Kpi label="Kategori" value={cats.length} />
        <Kpi label="Alt Kategori" value={stats.subCount} />
        <Kpi label="Kaynak" value="HeroUI" hint="Mantine / shadcn bekliyor" />
      </div>

      {/* Son eklenenler + favoriler */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className={STYLE.card}>
          <p className={STYLE.title}>Son Eklenenler</p>
          <ul className="space-y-1">
            {stats.son.map((c) => (
              <li key={c.id} className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted/50">
                <button onClick={() => toggleFav(c.id)} title={favs.includes(c.id) ? "Favoriden çıkar" : "Favorilere ekle"}
                  className={`text-sm ${favs.includes(c.id) ? "text-amber-500" : "text-muted-foreground hover:text-amber-500"}`}>
                  {favs.includes(c.id) ? "★" : "☆"}
                </button>
                <button onClick={() => onOpenCategory(c.category)} className="min-w-0 flex-1 text-left">
                  <span className="truncate text-sm text-foreground hover:underline">{c.name}</span>
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground">{c.id}</span>
                </button>
                <span className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground">{c.category}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={STYLE.card}>
          <p className={STYLE.title}>Favoriler ({favComps.length})</p>
          {favComps.length === 0 ? (
            <p className="text-sm text-muted-foreground">Henüz favori yok — Son Eklenenler'deki ☆ işaretine tıklayın.</p>
          ) : (
            <ul className="space-y-1">
              {favComps.map((c) => (
                <li key={c.id} className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted/50">
                  <button onClick={() => toggleFav(c.id)} className="text-sm text-amber-500">★</button>
                  <button onClick={() => onOpenCategory(c.category)} className="min-w-0 flex-1 text-left">
                    <span className="truncate text-sm text-foreground hover:underline">{c.name}</span>
                    <span className="ml-2 font-mono text-[10px] text-muted-foreground">{c.id}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Kategori kısayolları */}
      <div className="mt-4">
        <p className="mb-2 text-sm font-semibold text-foreground">Kategori Kısayolları</p>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => {
            const n = stats.byCat.get(c) ?? 0
            return (
              <button key={c} onClick={() => onOpenCategory(c)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-left transition-colors hover:bg-muted">
                <span className="block text-sm font-medium text-foreground">{c}</span>
                <span className="block text-[10px] text-muted-foreground">{n} bileşen</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { DashboardView }
