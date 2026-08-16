/**
 * IconsView — İkon seti galerisi (sekme: 🧩 İkonlar).
 * 1756 ikon · 23 kategori: kategori chip'leri (Tümü + gruplar) → ikon grid.
 * Arama (isim), sanal grid (ilk `limit` kadar, "Daha fazla" ile genişler), tıkla → adı kopyala.
 * İkonlar zaten bundle'da (bileşenler import ediyor) → ekstra yük yok.
 */
import { useMemo, useState, type ReactElement } from "react"
import { cn } from "@/lib/utils"
import { ICON_NAMES } from "./lib/iconNames"
import { ICON_CATEGORY_ORDER, ICON_CATEGORIES } from "./lib/iconCategories"
import * as Icons from "@/components/ui/icons"
import { Search, Copy, Check } from "@/components/ui/icons"

interface IconsViewProps {
  onIconClick?: (name: string) => void
}

export function IconsView({ onIconClick }: IconsViewProps) {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("Tümü")
  const [copied, setCopied] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [limit, setLimit] = useState(200)

  const cats = useMemo(() => ["Tümü", ...ICON_CATEGORY_ORDER], [])

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    const pool = cat === "Tümü" ? ICON_NAMES : ICON_CATEGORIES[cat] ?? []
    if (!needle) return pool
    return pool.filter((n) => n.toLowerCase().includes(needle))
  }, [q, cat])

  const visible = filtered.slice(0, limit)

  const copy = (name: string) => {
    navigator.clipboard?.writeText(name).catch(() => {})
    setCopied(null) // kart flash'ı yeniden tetikle
    setToast(null)
    window.requestAnimationFrame(() => {
      setCopied(name)
      setToast(name)
    })
    window.setTimeout(() => setToast((t) => (t === name ? null : t)), 1700)
    window.setTimeout(() => setCopied((c) => (c === name ? null : c)), 1000)
    onIconClick?.(name)
  }

  const pickCat = (c: string) => {
    setCat(c)
    setLimit(200)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Kopyalama bildirimi — yanıp sönen toast */}
      {toast && (
        <div className="pointer-events-none fixed left-1/2 top-14 z-50">
          <div className="ikon-toast flex items-center gap-1.5 rounded-lg border border-green-300 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800 shadow-lg">
            <Check className="size-3.5 text-green-600" />
            <span className="font-mono">{toast}</span>
            <span className="text-green-600">kopyalandı</span>
          </div>
        </div>
      )}

      {/* Üst: arama + sayaç (sabit) */}
      <div className="sticky top-0 z-30 -mx-4 mb-2 bg-background px-4 pb-2 pt-3">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-bold text-foreground">🧩 İkonlar</span>
          <div className="relative ml-2 flex-1 max-w-sm">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setLimit(200) }}
              placeholder="İkon ara… (örn. Arrow, Bell, Chevron)"
              className="w-full rounded-md border border-border bg-muted/30 py-1 pl-8 pr-3 text-xs outline-none focus:border-blue-500"
            />
          </div>
          <span className="text-[11px] text-muted-foreground">
            {filtered.length} ikon{cat !== "Tümü" ? ` · ${cat}` : ""}
          </span>
        </div>

        {/* Kategori chip'leri */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => pickCat(c)}
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[11px] transition-colors",
                cat === c
                  ? "border-blue-500 bg-blue-600 text-white"
                  : "border-border bg-muted/20 text-foreground hover:bg-muted/50",
              )}
            >
              {c}
              <span className={cn("ml-1", cat === c ? "text-blue-100" : "text-muted-foreground")}>
                {c === "Tümü" ? ICON_NAMES.length : ICON_CATEGORIES[c]?.length ?? 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid — sanal (ilk `limit` kadar) */}
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
          {visible.map((name) => {
            const isFlash = copied === name
            const Icon = (Icons as Record<string, (p: { className?: string }) => ReactElement | null>)[name]
            return (
              <button
                key={name}
                onClick={() => copy(name)}
                title={`${name} — tıkla kopyala`}
                className={`flex flex-col items-center gap-1.5 rounded-lg border px-2 py-3 text-[10px] text-foreground transition-colors hover:border-blue-400 hover:bg-blue-50/50 ${isFlash ? "ikon-kart-flash" : "border-border bg-muted/20"}`}
              >
                {Icon ? (
                  <Icon className="size-5 text-foreground" />
                ) : isFlash ? (
                  <Check className="size-5 text-green-600" />
                ) : (
                  <Copy className="size-5 text-muted-foreground" />
                )}
                <span className="w-full truncate text-center font-mono">{name}</span>
              </button>
            )
          })}
        </div>

        {visible.length < filtered.length && (
          <div className="flex justify-center py-4">
            <button
              onClick={() => setLimit((l) => l + 400)}
              className="rounded-md border border-border bg-muted/30 px-4 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
            >
              Daha fazla göster ({filtered.length - visible.length} kaldı)
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm text-muted-foreground">
            {q ? `"${q}" için` : "Bu kategoride"} ikon bulunamadı
          </div>
        )}
      </div>
    </div>
  )
}
