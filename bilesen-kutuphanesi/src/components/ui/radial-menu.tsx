/**
 * RadialMenu
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Plasticity tarzı imleç merkezli radyal bağlam menüsü:
 * sağ tık (veya Space) ile açılır, öğeye tıkla ya da sürükle-bırak ile komut çalışır.
 *   • Öğeler halkaya dizilir (ilk öğe üstte, saat yönü) — CustomEvent yok, saf React.
 *   • `view:radial:<command>` öğeleri alt menü açar (nested); Esc/×/boş alan bir üst menüye
 *     döner, kökte kapatır.
 *   • İkon bilinmiyorsa etiketin ilk 2 harfi gösterilir (Plasticity kuralı).
 *   • Çalıştırılan komut kısa süre bildirim (toast) ile geri bildirilir.
 *   <RadialMenu onExecute={(item) => console.log(item.command)} />
 * @id 2087
 * @category Özel Komponentler
 * @subcategory RadialMenu
 * @source ozel
 * @tags radial, menü, context, plasticity, nested, sağ tık, halka
 */
import { useCallback, useEffect, useRef, useState, type ReactElement, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import {
  Box, CheckCheck, Circle, CircleMinus, Combine, Copy, Cylinder, Dot, Droplet, Eye,
  Focus, Frame, Grid, Layers, LineSquiggle, Link, Magnet, MoveUp, Radius, RotateCw,
  Route, Spline, Square, Trash2,
} from "@/components/ui/icons"

/* ------------------------------ tipler ------------------------------ */

interface RadialMenuItem {
  /** Benzersiz komut; `view:radial:<command>` ise alt menü açar */
  command: string
  label: string
  /** İkon anahtarı (bkz. ICON_MAP) — yoksa etiketin ilk 2 harfi gösterilir */
  icon?: string
  description?: string
}

interface RadialMenuConfig {
  name: string
  command: string
  items: RadialMenuItem[]
}

interface RadialMenuProps {
  /** Menü listesi (ilk menü kök olarak açılır). Verilmezse CAD preset'leri kullanılır. */
  menus?: RadialMenuConfig[]
  /** Halka yarıçapı (px) */
  radius?: number
  className?: string
  /** Komut çalıştığında çağrılır (verilmezse yalnızca toast gösterilir) */
  onExecute?: (item: RadialMenuItem, ctx: { config: RadialMenuConfig; nested: boolean }) => void
  /** Kapsayıcı içeriği (verilmezse varsayılan demo alanı gösterilir) */
  children?: ReactNode
}

/* ------------------- varsayılan menüler (Plasticity şeması) ------------------- */

const RADIAL_LINK_PREFIX = "view:radial:"

const PRESET_MENUS: RadialMenuConfig[] = [
  {
    name: "Object Actions",
    command: "demo:default",
    items: [
      { command: "command:select-all", label: "Select All", icon: "select-all", description: "Selects every object in the scene" },
      { command: "command:deselect-all", label: "Deselect", icon: "deselect", description: "Clears the current selection" },
      { command: "command:duplicate", label: "Duplicate", icon: "duplicate", description: "Duplicates the selected object(s)" },
      { command: "command:delete", label: "Delete", icon: "trash", description: "Deletes the selected object(s)" },
      { command: "command:set-material", label: "Material", icon: "material", description: "Assigns a random material color" },
    ],
  },
  {
    name: "Modeling",
    command: "demo:modeling",
    items: [
      { command: "command:center-box", label: "Center Box", icon: "box", description: "Would create a box" },
      { command: "command:cylinder", label: "Cylinder", icon: "cylinder", description: "Would create a cylinder" },
      { command: "command:sphere", label: "Sphere", icon: "sphere", description: "Would create a sphere" },
      { command: "command:extrude", label: "Extrude", icon: "extrude", description: "Would push a face" },
      { command: "command:boolean", label: "Boolean", icon: "boolean", description: "Would combine two solids" },
      { command: "command:fillet", label: "Fillet", icon: "fillet", description: "Would round an edge" },
      { command: "command:sweep", label: "Sweep", icon: "sweep", description: "Would sweep a profile" },
      { command: "command:join", label: "Join", icon: "join", description: "Would join objects" },
    ],
  },
  {
    name: "Selection Mode",
    command: "demo:selection",
    items: [
      { command: "selection:mode:set:solid", label: "Solid", icon: "solid", description: "Selects solid objects" },
      { command: "selection:mode:set:surface", label: "Surface", icon: "surface", description: "Selects surface objects" },
      { command: "selection:mode:set:curve", label: "Curve", icon: "curve", description: "Selects curve objects" },
      { command: "view:radial:demo:primitives", label: "Primitives", description: "Opens the primitives menu (nested)" },
    ],
  },
  {
    name: "Viewport",
    command: "demo:viewport",
    items: [
      { command: "command:viewport:focus", label: "Focus", icon: "focus", description: "Would focus the viewport" },
      { command: "command:viewport:orthographic", label: "Orthographic", icon: "ortho", description: "Would toggle orthographic view" },
      { command: "command:viewport:edges", label: "Edges", icon: "edge", description: "Would toggle edge display" },
      { command: "command:viewport:xray", label: "X-Ray", icon: "xray", description: "Would toggle X-Ray mode" },
      { command: "command:viewport:grid", label: "Grid", icon: "grid", description: "Would toggle the grid" },
      { command: "command:viewport:snap", label: "Snap", icon: "snap", description: "Would toggle snapping" },
      { command: "command:viewport:overlays", label: "Overlays", icon: "overlay", description: "Would toggle overlays" },
    ],
  },
  {
    name: "Primitives",
    command: "demo:primitives",
    items: [
      { command: "command:center-box", label: "Center Box", icon: "box", description: "Would create a box" },
      { command: "command:cylinder", label: "Cylinder", icon: "cylinder", description: "Would create a cylinder" },
      { command: "command:sphere", label: "Sphere", icon: "sphere", description: "Would create a sphere" },
    ],
  },
]

/* --------------------- ikon eşleme (kendi setimizden) --------------------- */
/* Kaynak ikon anahtarları → @/components/ui/icons karşılıkları */
const ICON_MAP: Record<string, (p: { className?: string }) => ReactElement> = {
  "select-all": CheckCheck,
  deselect: CircleMinus,
  duplicate: Copy,
  trash: Trash2,
  material: Droplet,
  box: Box,
  solid: Box,
  ortho: Frame,
  wireframe: Frame,
  cylinder: Cylinder,
  sphere: Circle,
  extrude: MoveUp,
  boolean: Combine,
  fillet: Radius,
  sweep: Route,
  rotate: RotateCw,
  join: Link,
  surface: Square,
  curve: Spline,
  edge: LineSquiggle,
  face: Frame,
  "control-point": Dot,
  focus: Focus,
  xray: Eye,
  grid: Grid,
  snap: Magnet,
  overlay: Layers,
}

const initials = (label: string) => (label || "?").slice(0, 2).toUpperCase()

const findMenu = (command: string, menus: RadialMenuConfig[]) =>
  menus.find((m) => m.command === command) ?? null

/* ------------------------------- bileşen ------------------------------- */

function RadialMenu({ menus, radius = 140, className, onExecute, children }: RadialMenuProps) {
  const allMenus = menus && menus.length > 0 ? menus : PRESET_MENUS
  const [open, setOpen] = useState(false)
  const [stack, setStack] = useState<RadialMenuConfig[]>([])
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState<{ i: number; text: string } | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const toastTimer = useRef<number | null>(null)

  const current = stack.length > 0 ? stack[stack.length - 1] : null
  const nested = stack.length > 1
  const pad = radius + 42

  /* ---- konum: halkayı kapsayıcı içinde tut ---- */
  const clampPos = useCallback(
    (x: number, y: number) => {
      const el = rootRef.current
      if (!el) return { x, y }
      const w = el.clientWidth
      const h = el.clientHeight
      const range = (v: number, lo: number, hi: number) =>
        lo <= hi ? Math.min(Math.max(v, lo), hi) : (lo + hi) / 2
      return {
        x: Math.max(0, Math.min(range(x, pad, w - pad), w)),
        y: Math.max(0, Math.min(range(y, pad, h - pad), h)),
      }
    },
    [pad],
  )

  const showToast = useCallback((text: string) => {
    setToast(text)
    if (toastTimer.current) window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 1600)
  }, [])

  useEffect(
    () => () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current)
    },
    [],
  )

  /* ---- aç / kapat / geri ---- */
  const openRoot = useCallback(
    (clientX?: number, clientY?: number) => {
      const el = rootRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const p =
        clientX === undefined || clientY === undefined
          ? { x: el.clientWidth / 2, y: el.clientHeight / 2 }
          : { x: clientX - r.left, y: clientY - r.top }
      setPos(clampPos(p.x, p.y))
      setStack([allMenus[0]])
      setHover(null)
      setOpen(true)
    },
    [allMenus, clampPos],
  )

  const close = useCallback(() => {
    setOpen(false)
    setStack([])
    setHover(null)
  }, [])

  const cancel = useCallback(() => {
    setStack((s) => {
      if (s.length > 1) return s.slice(0, -1)
      setOpen(false)
      setHover(null)
      return []
    })
  }, [])

  /* ---- komut çalıştır ---- */
  const execItem = useCallback(
    (item: RadialMenuItem) => {
      const config = current
      if (!config) return
      if (item.command.startsWith(RADIAL_LINK_PREFIX)) {
        const child = findMenu(item.command.slice(RADIAL_LINK_PREFIX.length), allMenus)
        if (child) {
          setStack((s) => [...s, child])
          setHover(null)
          return
        }
      }
      onExecute?.(item, { config, nested })
      showToast(item.label)
      close()
    },
    [allMenus, close, current, nested, onExecute, showToast],
  )

  /* ---- klavye: Space aç / bırakınca çalıştır, Esc geri-kapat ---- */
  useEffect(() => {
    const isTyping = (t: EventTarget | null) => {
      const el = t as HTMLElement | null
      const tag = el?.tagName
      return tag === "INPUT" || tag === "TEXTAREA" || el?.isContentEditable === true
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTyping(e.target)) return
      if (e.code === "Space" && !e.repeat) {
        if (!open) {
          e.preventDefault()
          openRoot()
        }
        return
      }
      if (e.key === "Escape" && open) {
        e.preventDefault()
        cancel()
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code !== "Space" || !open) return
      // Space bırakıldı: imleç bir öğedeyse çalıştır, değilse menü açık kalır
      if (hover && current) {
        const item = current.items[hover.i]
        if (item) execItem(item)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
    }
  }, [cancel, current, execItem, hover, open, openRoot])

  /* ---- geometri ---- */
  const itemAngle = (i: number, total: number) => -90 + (i * 360) / total

  const itemTransform = (i: number, total: number, active: boolean) => {
    const a = itemAngle(i, total)
    const d = active ? radius + 4 : radius
    const s = active ? " scale(1.08)" : ""
    return `translate(-50%, -50%) rotate(${a}deg) translateY(${-d}px) rotate(${-a}deg)${s}`
  }

  const total = current?.items.length ?? 0

  return (
    <div
      ref={rootRef}
      onContextMenu={(e) => {
        e.preventDefault()
        openRoot(e.clientX, e.clientY)
      }}
      className={cn(
        "relative min-h-[240px] select-none overflow-hidden rounded-lg border border-border bg-muted/20",
        className,
      )}
    >
      {/* İçerik (verilmezse varsayılan demo alanı) */}
      {children ?? (
        <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 p-6 text-center">
          <p className="text-sm font-medium text-foreground">
            Sağ tıkla veya <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[11px]">Space</kbd> tuşuna bas
          </p>
          <p className="text-xs text-muted-foreground">Radyal menü bu alanda açılır</p>
          <div className="mt-2 flex gap-2">
            {["Solid", "Surface", "Curve"].map((t) => (
              <span key={t} className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 z-20 transition-opacity duration-150",
          open ? "opacity-100" : "pointer-events-none invisible opacity-0",
        )}
        role="menu"
        aria-label="Radyal menü"
        aria-hidden={!open}
      >
        {/* Arka plan — boş alana sol tık geri/kapat */}
        <div
          className={cn("absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity duration-150", open ? "opacity-100" : "opacity-0")}
          onClick={cancel}
        />

        {/* Merkez düğme */}
        <button
          type="button"
          onClick={cancel}
          aria-label={nested ? "Üst menüye dön" : "Menüyü kapat"}
          className={cn(
            "absolute z-30 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-background text-lg font-light text-muted-foreground shadow-xl transition-transform duration-300",
            open ? "scale-100" : "scale-75",
          )}
          style={{ left: pos.x, top: pos.y }}
        >
          {nested ? "‹" : "×"}
        </button>

        {/* Öğe halkası */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: pos.x, top: pos.y, width: radius * 2, height: radius * 2 }}
        >
          {current?.items.map((item, i) => {
            const Icon = item.icon ? ICON_MAP[item.icon] : undefined
            const active = hover?.i === i
            return (
              <button
                key={item.command}
                type="button"
                role="menuitem"
                aria-label={item.description ? `${item.label} — ${item.description}` : item.label}
                onMouseEnter={() =>
                  setHover({
                    i,
                    text: item.description ? `${item.label} — ${item.description}` : item.label,
                  })
                }
                onMouseLeave={() => setHover((h) => (h?.i === i ? null : h))}
                onClick={() => execItem(item)}
                onPointerUp={(e) => {
                  // Sağ tuş bırakma (sürükle-bırak jesti) — sol tık onClick ile çalışır
                  if (e.button === 2) execItem(item)
                }}
                className={cn(
                  "absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-full border-2 border-border bg-card text-foreground shadow-md transition-[transform,background,border-color,box-shadow] duration-300",
                  active && "z-10 border-blue-500 bg-muted shadow-lg",
                  open ? "opacity-100" : "opacity-0",
                )}
                style={{
                  transform: itemTransform(i, total, active),
                  transitionDelay: open ? "0ms" : `${i * 22}ms`,
                }}
              >
                {Icon ? (
                  <Icon className="size-5 shrink-0" />
                ) : (
                  <span className="text-[10px] font-bold tracking-wide text-muted-foreground" aria-hidden="true">
                    {initials(item.label)}
                  </span>
                )}
                <span className="max-w-[46px] truncate text-[9px] leading-none font-medium">{item.label}</span>
                {item.command.startsWith(RADIAL_LINK_PREFIX) && (
                  <span className="absolute top-1/2 -right-2 -translate-y-1/2 text-xs text-muted-foreground" aria-hidden="true">
                    ›
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Alt bilgi / önizleme */}
        <div
          aria-live="polite"
          className={cn(
            "absolute z-30 max-w-[min(70%,460px)] -translate-x-1/2 truncate rounded-lg border border-border bg-card px-3 py-1.5 text-[11px] text-muted-foreground shadow-lg transition-all duration-150",
            open ? "opacity-100" : "translate-y-2 opacity-0",
          )}
          style={{ left: pos.x, top: Math.min(pos.y + radius + 58, (rootRef.current?.clientHeight ?? 240) - 34) }}
        >
          {hover?.text ?? (current ? `${current.name} — Esc veya dışına tıkla` : "")}
        </div>
      </div>

      {/* Komut bildirimi */}
      {toast && (
        <div
          aria-live="polite"
          className="absolute bottom-2 left-1/2 z-40 -translate-x-1/2 rounded-md border border-border bg-card px-3 py-1 text-[11px] font-medium text-foreground shadow-lg"
        >
          ✓ {toast}
        </div>
      )}
    </div>
  )
}

export { RadialMenu }
