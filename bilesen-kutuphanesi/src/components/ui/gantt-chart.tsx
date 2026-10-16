/**
 * GanttChart
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Görev planlama aracı: iki sekme — "Görevler" (görev + alt görev listesi, satır içi
 * düzenleme, takvimden tarih aralığı seçimi) ve "Gantt Chart" (gün cetveli + çubuklar).
 *   • Çubuğu sürükle = taşı; kenar tutamaçları = başlangıç/bitiş değiştir.
 *   • Alt görev tarihleri ana görevin aralığına kenetlenir (clamp).
 *   • Bağımlılık yok: tarih hesabı yerel Date, stil Tailwind, ikonlar kendi setimizden.
 *   <GanttChart />            ⏤ varsayılan örnek görevlerle
 *   <GanttChart initialTasks={gorevler} onChange={(t) => ...} />
 * @id 2088
 * @category Özel Komponentler
 * @subcategory GanttChart
 * @source ozel
 * @tags gantt, görev, planlama, takvim, çubuk, sürükle, proje
 */
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { CalendarDays, ChevronLeft, ChevronRight, Plus, X } from "@/components/ui/icons"

/* ------------------------------ tipler ------------------------------ */

interface GanttItem {
  id: number
  name: string
  start: string | null
  end: string | null
}

interface GanttTask extends GanttItem {
  color: string
  alt: GanttItem[]
}

interface GanttChartProps {
  /** Başlangıç görevleri (verilmezse örnek plan) */
  initialTasks?: GanttTask[]
  /** Görevler her değiştiğinde çağrılır */
  onChange?: (tasks: GanttTask[]) => void
  className?: string
}

/* --------------------------- tarih yardımcıları --------------------------- */

const PALETTE = ["#1e3a5f", "#2c6b4f", "#8a3b1f", "#6a3d8a", "#2c5f8a", "#a15b1f"]
const DOW = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"]
const MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

const isoOf = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
const d2t = (s: string) => new Date(`${s}T00:00:00`).getTime()
const todayIso = () => isoOf(new Date())
const addDaysIso = (iso: string, n: number) => {
  const d = new Date(`${iso}T00:00:00`)
  d.setDate(d.getDate() + n)
  return isoOf(d)
}
const fmtShort = (s: string | null) => {
  if (!s) return "Tarih seç"
  const d = new Date(`${s}T00:00:00`)
  return `${d.getDate()}/${d.getMonth() + 1}`
}
const clampIso = (v: string, min: string | null, max: string | null) => {
  if (min && v < min) return min
  if (max && v > max) return max
  return v
}

/* --------------------------- örnek veri --------------------------- */

const SAMPLE_TASKS: GanttTask[] = [
  {
    id: 1,
    name: "Gereksinim analizi",
    start: null,
    end: null,
    color: PALETTE[0],
    alt: [
      { id: 2, name: "Kullanıcı görüşmeleri", start: null, end: null },
      { id: 3, name: "Kapsam dokümanı", start: null, end: null },
    ],
  },
  {
    id: 4,
    name: "Tasarım",
    start: null,
    end: null,
    color: PALETTE[1],
    alt: [
      { id: 5, name: "Wireframe", start: null, end: null },
      { id: 6, name: "UI tasarım", start: null, end: null },
    ],
  },
]

/* ------------------------------- bileşen ------------------------------- */

function GanttChart({ initialTasks, onChange, className }: GanttChartProps) {
  const [tasks, setTasks] = useState<GanttTask[]>(initialTasks ?? SAMPLE_TASKS)
  const [tab, setTab] = useState<"tasks" | "gantt">("tasks")
  const [newTask, setNewTask] = useState("")
  const [altDraft, setAltDraft] = useState<Record<number, string>>({})
  const [cal, setCal] = useState<{
    target: GanttItem
    boundMin: string | null
    boundMax: string | null
    viewY: number
    viewM: number
    pickStart: string | null
  } | null>(null)
  const [calPos, setCalPos] = useState({ top: 0, left: 0 })
  const [drag, setDrag] = useState<{ id: number; isSub: boolean } | null>(null)
  const dragRef = useRef<{
    id: number
    isSub: boolean
    mode: "move" | "left" | "right"
    startX: number
    origStart: string
    origEnd: string
    minD: string
    dayCount: number
  } | null>(null)
  const nextId = useRef(Math.max(0, ...(initialTasks ?? SAMPLE_TASKS).flatMap((t) => [t.id, ...t.alt.map((a) => a.id)])) + 1)
  const calRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onChange?.(tasks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks])

  /* ---- görev işlemleri ---- */
  const addTask = () => {
    const name = newTask.trim()
    if (!name) return
    setTasks((ts) => [
      ...ts,
      { id: nextId.current++, name, start: null, end: null, color: PALETTE[ts.length % PALETTE.length], alt: [] },
    ])
    setNewTask("")
  }

  const updateTask = (id: number, patch: Partial<GanttTask>) =>
    setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, ...patch } : t)))

  const removeTask = (id: number) => setTasks((ts) => ts.filter((t) => t.id !== id))

  const addSub = (taskId: number) => {
    const name = (altDraft[taskId] ?? "").trim()
    if (!name) return
    setTasks((ts) =>
      ts.map((t) => (t.id === taskId ? { ...t, alt: [...t.alt, { id: nextId.current++, name, start: null, end: null }] } : t)),
    )
    setAltDraft((d) => ({ ...d, [taskId]: "" }))
  }

  const updateSub = (taskId: number, subId: number, patch: Partial<GanttItem>) =>
    setTasks((ts) =>
      ts.map((t) => (t.id === taskId ? { ...t, alt: t.alt.map((a) => (a.id === subId ? { ...a, ...patch } : a)) } : t)),
    )

  const removeSub = (taskId: number, subId: number) =>
    setTasks((ts) => ts.map((t) => (t.id === taskId ? { ...t, alt: t.alt.filter((a) => a.id !== subId) } : t)))

  /** Alt görev tarihlerini ana görevin aralığına kenetle */
  const clampAllChildren = useCallback(() => {
    setTasks((ts) =>
      ts.map((t) => {
        if (!t.start || !t.end) return t
        return {
          ...t,
          alt: t.alt.map((a) => {
            if (!a.start || !a.end) return a
            const s = clampIso(a.start, t.start, t.end)
            const e = clampIso(a.end, t.start, t.end)
            return { ...a, start: s, end: e > s ? e : s }
          }),
        }
      }),
    )
  }, [])

  /* ---- takvim popup ---- */
  const openCalendar = (el: HTMLElement, target: GanttItem, boundMin: string | null, boundMax: string | null) => {
    const base = target.start ?? boundMin ?? todayIso()
    const d = new Date(`${base}T00:00:00`)
    setCal({ target, boundMin, boundMax, viewY: d.getFullYear(), viewM: d.getMonth(), pickStart: null })
    const r = el.getBoundingClientRect()
    setCalPos({ top: r.bottom + 6, left: Math.min(r.left, window.innerWidth - 280) })
  }

  useEffect(() => {
    if (!cal) return
    const onDoc = (e: MouseEvent) => {
      if (calRef.current && !calRef.current.contains(e.target as Node)) setCal(null)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [cal])

  const pickDay = (iso: string) => {
    setCal((c) => {
      if (!c) return c
      if (!c.pickStart) return { ...c, pickStart: iso }
      let s = c.pickStart
      let e = iso
      if (e < s) [s, e] = [iso, c.pickStart]
      setTasks((ts) =>
        ts.map((t) => {
          if (t.id === c.target.id) return { ...t, start: s, end: e }
          return {
            ...t,
            alt: t.alt.map((a) => (a.id === c.target.id ? { ...a, start: s, end: e } : a)),
          }
        }),
      )
      window.setTimeout(clampAllChildren, 0)
      return null
    })
  }

  /* ---- Gantt geometrisi ---- */
  const dated = tasks.flatMap((t) => [
    ...(t.start && t.end ? [t.start, t.end] : []),
    ...t.alt.flatMap((a) => (a.start && a.end ? [a.start, a.end] : [])),
  ])
  const minD = dated.length ? dated.reduce((a, b) => (d2t(b) < d2t(a) ? b : a)) : null
  const maxD = dated.length ? dated.reduce((a, b) => (d2t(b) > d2t(a) ? b : a)) : null
  const dayCount = minD && maxD ? Math.round((d2t(maxD) - d2t(minD)) / 86400000) + 1 : 1
  const pct = (iso: string) => (minD ? ((d2t(iso) - d2t(minD)) / 86400000 / dayCount) * 100 : 0)
  const wpct = (s: string, e: string) => ((d2t(e) - d2t(s)) / 86400000 + 1) / dayCount * 100

  /* ---- çubuk sürükleme (taşı / boyutlandır) ---- */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const d = dragRef.current
      if (!d || !minD) return
      const track = document.querySelector<HTMLElement>(`[data-track="${d.id}"]`)
      if (!track) return
      const w = track.getBoundingClientRect().width
      const dd = Math.round(((e.clientX - d.startX) / w) * d.dayCount)
      let ns = d.origStart
      let ne = d.origEnd
      if (d.mode === "move") {
        ns = addDaysIso(d.origStart, dd)
        ne = addDaysIso(d.origEnd, dd)
      } else if (d.mode === "left") ns = addDaysIso(d.origStart, dd)
      else ne = addDaysIso(d.origEnd, dd)
      const lo = d.minD
      const hi = minD ? addDaysIso(d.minD, d.dayCount - 1) : null
      if (lo && ns < lo) {
        const shift = (d2t(lo) - d2t(ns)) / 86400000
        if (d.mode === "move") { ns = lo; ne = addDaysIso(ne, shift) } else ns = lo
      }
      if (hi && ne > hi) {
        const shift = (d2t(ne) - d2t(hi)) / 86400000
        if (d.mode === "move") { ne = hi; ns = addDaysIso(ns, -shift) } else ne = hi
      }
      if (ns > ne) { if (d.mode === "left") ns = ne; else ne = ns }
      setTasks((ts) =>
        ts.map((t) =>
          t.id === d.id && !d.isSub
            ? { ...t, start: ns, end: ne }
            : { ...t, alt: t.alt.map((a) => (a.id === d.id ? { ...a, start: ns, end: ne } : a)) },
        ),
      )
    }
    const onUp = () => {
      if (!dragRef.current) return
      dragRef.current = null
      setDrag(null)
      clampAllChildren()
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [clampAllChildren, minD, dayCount])

  const startDrag = (e: React.MouseEvent, item: GanttItem, isSub: boolean, mode: "move" | "left" | "right") => {
    if (!item.start || !item.end || !minD) return
    e.preventDefault()
    e.stopPropagation()
    dragRef.current = {
      id: item.id,
      isSub,
      mode,
      startX: e.clientX,
      origStart: item.start,
      origEnd: item.end,
      minD,
      dayCount,
    }
    setDrag({ id: item.id, isSub })
  }

  /* ---- takvim hücreleri ---- */
  const calCells = () => {
    if (!cal) return []
    const first = new Date(cal.viewY, cal.viewM, 1)
    const startWeekday = (first.getDay() + 6) % 7
    const gridStart = new Date(cal.viewY, cal.viewM, 1 - startWeekday)
    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(gridStart.getTime() + i * 86400000)
      const iso = isoOf(d)
      return {
        iso,
        day: d.getDate(),
        other: d.getMonth() !== cal.viewM,
        disabled: (cal.boundMin != null && iso < cal.boundMin) || (cal.boundMax != null && iso > cal.boundMax),
        inRange:
          !!cal.target.start &&
          !!cal.target.end &&
          iso > cal.target.start &&
          iso < cal.target.end &&
          !cal.pickStart,
        isStart: (cal.pickStart ?? cal.target.start) === iso,
        isEnd: !cal.pickStart && cal.target.end === iso,
      }
    })
  }

  const step = Math.max(1, Math.ceil(dayCount / 22))
  const days: string[] = []
  if (minD) for (let i = 0; i < dayCount; i += step) days.push(addDaysIso(minD, i))

  return (
    <div className={cn("w-full rounded-lg border border-border bg-card p-3 text-foreground", className)}>
      {/* Sekmeler */}
      <div className="mb-3 flex w-fit gap-1 rounded-lg bg-muted p-1" role="tablist">
        {([["tasks", "Görevler"], ["gantt", "Gantt Chart"]] as const).map(([v, label]) => (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={tab === v}
            onClick={() => setTab(v)}
            className={cn(
              "rounded-md px-4 py-1.5 text-[13px] font-bold transition-colors",
              tab === v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "tasks" ? (
        <div className="flex flex-col gap-2.5">
          {tasks.map((task) => (
            <div key={task.id} className="overflow-hidden rounded-lg border border-border">
              {/* Görev satırı */}
              <div className="flex items-center gap-2 bg-muted/40 px-3 py-2.5">
                <span className="size-2.5 shrink-0 rounded-full" style={{ background: task.color }} aria-hidden="true" />
                <input
                  value={task.name}
                  onChange={(e) => updateTask(task.id, { name: e.target.value })}
                  aria-label="Görev adı"
                  className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none"
                />
                <button
                  type="button"
                  onClick={(e) => openCalendar(e.currentTarget, task, null, null)}
                  className={cn(
                    "shrink-0 rounded-md border border-border bg-background px-2.5 py-1 text-[11.5px] whitespace-nowrap hover:bg-muted",
                    task.start && task.end ? "" : "text-muted-foreground italic",
                  )}
                >
                  {task.start && task.end ? `${fmtShort(task.start)} – ${fmtShort(task.end)}` : "Tarih seç"}
                </button>
                <button
                  type="button"
                  onClick={() => removeTask(task.id)}
                  aria-label="Görevi sil"
                  title="Görevi sil"
                  className="shrink-0 rounded-md px-1.5 py-0.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="size-3.5" />
                </button>
              </div>

              {/* Alt görevler */}
              <div className="px-3 pt-1 pb-2.5 pl-8">
                {task.alt.map((a) => (
                  <div key={a.id} className="flex items-center gap-2 py-1">
                    <span className="size-1.5 shrink-0 rounded-full border border-current" style={{ color: task.color }} aria-hidden="true" />
                    <input
                      value={a.name}
                      onChange={(e) => updateSub(task.id, a.id, { name: e.target.value })}
                      aria-label="Alt görev adı"
                      className="min-w-0 flex-1 bg-transparent text-[13px] outline-none"
                    />
                    <button
                      type="button"
                      onClick={(e) => openCalendar(e.currentTarget, a, task.start, task.end)}
                      className={cn(
                        "shrink-0 rounded-md border border-border bg-background px-2.5 py-1 text-[11.5px] whitespace-nowrap hover:bg-muted",
                        a.start && a.end ? "" : "text-muted-foreground italic",
                      )}
                    >
                      {a.start && a.end ? `${fmtShort(a.start)} – ${fmtShort(a.end)}` : "Tarih seç"}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeSub(task.id, a.id)}
                      aria-label="Alt görevi sil"
                      title="Alt görevi sil"
                      className="shrink-0 rounded-md px-1.5 py-0.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}

                <div className="flex gap-1.5 pt-1">
                  <input
                    value={altDraft[task.id] ?? ""}
                    onChange={(e) => setAltDraft((d) => ({ ...d, [task.id]: e.target.value }))}
                    onKeyDown={(e) => e.key === "Enter" && addSub(task.id)}
                    placeholder="Yeni alt görev adı..."
                    className="min-w-0 flex-1 rounded-md border border-border bg-background px-2 py-1 text-xs outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => addSub(task.id)}
                    className="shrink-0 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium hover:bg-muted"
                  >
                    + Alt görev
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-2 border-t border-border pt-2.5">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="Yeni görev adı..."
              className="min-w-0 flex-1 rounded-md border border-border bg-background px-2.5 py-1.5 text-[13px] outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={addTask}
              className="flex shrink-0 items-center gap-1 rounded-md bg-blue-600 px-3 py-1.5 text-[13px] font-medium text-white hover:bg-blue-700"
            >
              <Plus className="size-3.5" /> Görev ekle
            </button>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-border">
          {tasks.length === 0 ? (
            <div className="p-8 text-center text-[13px] text-muted-foreground">
              Henüz görev yok. &quot;Görevler&quot; sekmesinden ekleyin.
            </div>
          ) : (
            <>
              {/* Gün cetveli */}
              <div className="flex border-b border-border">
                <div className="w-[220px] shrink-0 border-r border-border px-3 py-2 text-[11.5px] font-bold text-muted-foreground">
                  GÖREV / ALT GÖREV
                </div>
                <div className="flex flex-1">
                  {minD ? (
                    days.map((iso) => (
                      <div
                        key={iso}
                        className="flex-1 border-r border-border/50 px-0.5 py-2 text-center text-[9.5px] whitespace-nowrap text-muted-foreground last:border-r-0"
                        style={{ flexGrow: step }}
                      >
                        {fmtShort(iso)}
                      </div>
                    ))
                  ) : (
                    <div className="flex-1 px-3 py-2 text-[10.5px] text-muted-foreground">
                      Tarih seçilmedi — çubuklar için görevlere tarih atayın
                    </div>
                  )}
                </div>
              </div>

              {/* Satırlar */}
              {tasks.map((task) => (
                <div key={task.id}>
                  <div className="flex items-center border-b border-border bg-muted/40">
                    <div className="flex w-[220px] shrink-0 items-center gap-1.5 px-3 py-2 text-[13px] font-bold">
                      <span className="size-2 shrink-0 rounded-full" style={{ background: task.color }} aria-hidden="true" />
                      <span className="truncate">{task.name}</span>
                      <span className="shrink-0 text-[10.5px] font-normal text-muted-foreground">· {task.alt.length} alt görev</span>
                    </div>
                    <div className="relative h-[30px] flex-1" data-track={task.id}>
                      {task.start && task.end && minD ? (
                        <div
                          onMouseDown={(e) => startDrag(e, task, false, "move")}
                          role="presentation"
                          className={cn(
                            "absolute top-[7px] h-3.5 cursor-grab rounded-[5px] active:cursor-grabbing",
                            drag?.id === task.id && !drag.isSub && "ring-2 ring-blue-500",
                          )}
                          style={{ left: `${pct(task.start)}%`, width: `${wpct(task.start, task.end)}%`, background: task.color }}
                        >
                          <span
                            onMouseDown={(e) => startDrag(e, task, false, "left")}
                            className="absolute top-0 left-0 h-full w-2 cursor-ew-resize rounded-l-[5px] hover:bg-white/35"
                            role="presentation"
                          />
                          <span
                            onMouseDown={(e) => startDrag(e, task, false, "right")}
                            className="absolute top-0 right-0 h-full w-2 cursor-ew-resize rounded-r-[5px] hover:bg-white/35"
                            role="presentation"
                          />
                        </div>
                      ) : (
                        <span className="absolute top-[7px] left-2 text-[11px] italic text-muted-foreground/60">Tarih seçilmedi</span>
                      )}
                    </div>
                  </div>

                  {task.alt.map((a) => (
                    <div key={a.id} className="flex items-center border-b border-border last:border-b-0">
                      <div className="flex w-[220px] shrink-0 items-center gap-1.5 py-2 pr-3 pl-8 text-xs text-foreground">
                        <span className="size-1.5 shrink-0 rounded-full border border-current" style={{ color: task.color }} aria-hidden="true" />
                        <span className="truncate">{a.name}</span>
                      </div>
                      <div className="relative h-[30px] flex-1" data-track={a.id}>
                        {a.start && a.end && minD ? (
                          <div
                            onMouseDown={(e) => startDrag(e, a, true, "move")}
                            role="presentation"
                            className={cn(
                              "absolute top-[7px] h-3.5 cursor-grab rounded-[5px] active:cursor-grabbing",
                              drag?.id === a.id && drag.isSub && "ring-2 ring-blue-500",
                            )}
                            style={{ left: `${pct(a.start)}%`, width: `${wpct(a.start, a.end)}%`, background: `${task.color}aa` }}
                          >
                            <span
                              onMouseDown={(e) => startDrag(e, a, true, "left")}
                              className="absolute top-0 left-0 h-full w-2 cursor-ew-resize rounded-l-[5px] hover:bg-white/35"
                              role="presentation"
                            />
                            <span
                              onMouseDown={(e) => startDrag(e, a, true, "right")}
                              className="absolute top-0 right-0 h-full w-2 cursor-ew-resize rounded-r-[5px] hover:bg-white/35"
                              role="presentation"
                            />
                          </div>
                        ) : (
                          <span className="absolute top-[7px] left-2 text-[11px] italic text-muted-foreground/60">Tarih seçilmedi</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Takvim popup */}
      {cal && (
        <div
          ref={calRef}
          role="dialog"
          aria-label="Tarih aralığı seç"
          className="fixed z-50 w-[264px] rounded-lg border border-border bg-card p-3 shadow-xl"
          style={{ top: calPos.top, left: calPos.left }}
        >
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              aria-label="Önceki ay"
              onClick={() =>
                setCal((c) => (c ? { ...c, viewM: c.viewM === 0 ? 11 : c.viewM - 1, viewY: c.viewM === 0 ? c.viewY - 1 : c.viewY } : c))
              }
              className="flex size-6 items-center justify-center rounded-md bg-muted hover:bg-muted/70"
            >
              <ChevronLeft className="size-3.5" />
            </button>
            <span className="text-[13px] font-bold">
              {MONTHS[cal.viewM]} {cal.viewY}
            </span>
            <button
              type="button"
              aria-label="Sonraki ay"
              onClick={() =>
                setCal((c) => (c ? { ...c, viewM: c.viewM === 11 ? 0 : c.viewM + 1, viewY: c.viewM === 11 ? c.viewY + 1 : c.viewY } : c))
              }
              className="flex size-6 items-center justify-center rounded-md bg-muted hover:bg-muted/70"
            >
              <ChevronRight className="size-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {DOW.map((d) => (
              <div key={d} className="py-1 text-center text-[10px] font-semibold text-muted-foreground">
                {d}
              </div>
            ))}
            {calCells().map((c) => (
              <button
                key={c.iso}
                type="button"
                disabled={c.disabled}
                onClick={() => pickDay(c.iso)}
                className={cn(
                  "rounded-md py-1.5 text-center text-xs",
                  c.disabled
                    ? "cursor-not-allowed text-muted-foreground/40"
                    : "hover:bg-muted",
                  (c.other || (c.disabled && !c.isStart && !c.isEnd)) && "text-muted-foreground/50",
                  c.inRange && "rounded-none bg-blue-500/15 hover:bg-blue-500/20",
                  c.isStart && "rounded-l-md bg-blue-600 font-semibold text-white hover:bg-blue-600",
                  c.isEnd && "rounded-r-md bg-blue-600 font-semibold text-white hover:bg-blue-600",
                  c.isStart && c.isEnd && "rounded-md",
                )}
              >
                {c.day}
              </button>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-1 text-[10.5px] text-muted-foreground">
            <CalendarDays className="size-3" />
            {cal.pickStart ? "Bitiş tarihini seçin" : "Başlangıç tarihini seçin"}
          </div>
        </div>
      )}
    </div>
  )
}

export { GanttChart }
