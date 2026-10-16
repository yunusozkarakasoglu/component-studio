/**
 * ProjeAgaci
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Ağaç biçiminde proje planlama: Roadmap → Sprint → Madde → Görev → Alt Görev → Alt Alt Görev.
 *   • Her satır: aç/kapa oklu, satır içi başlık düzenleme, hover'da "+ <Seviye> Ekle" ve sil.
 *   • Roadmap seçimi (dropdown) + yeni liste ekleme (modal).
 *   • "Tümünü Aç/Kapat" anahtarı, listeyi temizleme (görev varsa kilitli).
 *   • storageKey verilirse localStorage'da kalıcı; verilmezse yalnızca bellekte çalışır.
 *   <ProjeAgaci />                       ⏤ örnek listelerle (bellekte)
 *   <ProjeAgaci storageKey="plan-v1" />  ⏤ tarayıcıda kalıcı
 * @id 2089
 * @category Özel Komponentler
 * @subcategory ProjeAgaci
 * @source ozel
 * @tags proje, ağaç, roadmap, sprint, madde, görev, hiyerarşi, planlama
 */
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight, Plus, Trash2, X } from "@/components/ui/icons"

/* ------------------------------ tipler ------------------------------ */

interface TreeNode {
  id: number
  title: string
  open: boolean
  children: TreeNode[]
}

interface Roadmap {
  id: string
  name: string
  data: TreeNode
}

interface ProjeAgaciProps {
  /** Yeni bileşenin başlangıç listeleri (verilmezse örnek listeler) */
  initialRoadmaps?: Roadmap[]
  /** Verilirse durum bu anahtarla localStorage'da saklanır */
  storageKey?: string
  className?: string
}

/* ----------------------- hiyerarşi seviye adları ----------------------- */

const LEVEL_NAMES = ["Roadmap", "Sprint", "Madde", "Görev", "Alt Görev", "Alt Alt Görev"]
const childLabel = (depth: number) => LEVEL_NAMES[depth + 1] ?? null

/* --------------------------- örnek listeler --------------------------- */

let uidSeed = 1
const nid = () => uidSeed++
const mkNode = (title: string, children: TreeNode[] = []): TreeNode => ({ id: nid(), title, open: true, children })

const seedRoadmaps = (): Roadmap[] => [
  {
    id: "r1",
    name: "Ürün Lansmanı",
    data: mkNode("Proje — Ürün Lansmanı", [
      mkNode("Sprint 1 — Planlama", [
        mkNode("Madde: Tasarım", [
          mkNode("Görev: Logo Çalışması", [mkNode("Alt Görev: Vektör Çizim", [mkNode("Alt Alt Görev: Renk Uygulaması")])]),
        ]),
        mkNode("Madde: Dokümantasyon"),
      ]),
      mkNode("Sprint 2 — Geliştirme", [mkNode("Madde: Backend"), mkNode("Madde: Frontend")]),
    ]),
  },
  {
    id: "r2",
    name: "Pazarlama Kampanyası",
    data: mkNode("Proje — Pazarlama Kampanyası", [
      mkNode("Faz 1 — Strateji", [mkNode("Madde: Hedef Kitle Analizi"), mkNode("Madde: Bütçe Planı")]),
      mkNode("Faz 2 — Yürütme", [mkNode("Madde: Sosyal Medya"), mkNode("Madde: Reklam Kampanyaları")]),
    ]),
  },
]

/* ------------------------------ yardımcılar ------------------------------ */

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v)) as T

const findParent = (root: TreeNode, id: number): TreeNode | null => {
  for (const c of root.children) {
    if (c.id === id) return root
    const found = findParent(c, id)
    if (found) return found
  }
  return null
}

const isAllOpen = (n: TreeNode): boolean => (n.children.length === 0 || n.open) && n.children.every(isAllOpen)

const hasGorev = (n: TreeNode, depth = 0): boolean => {
  if (depth === 3) return true // Görev seviyesi
  return n.children.some((c) => hasGorev(c, depth + 1))
}

/* ------------------------------- bileşen ------------------------------- */

function ProjeAgaci({ initialRoadmaps, storageKey, className }: ProjeAgaciProps) {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>(() => {
    if (storageKey && typeof localStorage !== "undefined") {
      try {
        const raw = localStorage.getItem(storageKey)
        if (raw) return JSON.parse(raw) as Roadmap[]
      } catch {
        /* bozuk kayıt → örnek veri */
      }
    }
    if (initialRoadmaps) return clone(initialRoadmaps)
    return clone(seedRoadmaps())
  })
  const [activeId, setActiveId] = useState(() => "r1")
  const [modal, setModal] = useState(false)
  const [newListName, setNewListName] = useState("")
  const modalInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!storageKey || typeof localStorage === "undefined") return
    try {
      localStorage.setItem(storageKey, JSON.stringify(roadmaps))
    } catch {
      /* kota/hata → sessiz geç */
    }
  }, [roadmaps, storageKey])

  useEffect(() => {
    if (modal) modalInputRef.current?.focus()
  }, [modal])

  const current = roadmaps.find((r) => r.id === activeId) ?? roadmaps[0]
  const locked = current ? hasGorev(current.data) : false
  const allOpen = current ? isAllOpen(current.data) : true

  const updateTree = (fn: (root: TreeNode) => void) =>
    setRoadmaps((rms) =>
      rms.map((r) => {
        if (r.id !== current.id) return r
        const d = clone(r.data)
        fn(d)
        return { ...r, data: d }
      }),
    )

  const toggleNode = (id: number) =>
    updateTree((root) => {
      const walk = (n: TreeNode): boolean => {
        if (n.id === id) {
          n.open = !n.open
          return true
        }
        return n.children.some(walk)
      }
      walk(root)
    })

  const renameNode = (id: number, title: string) =>
    updateTree((root) => {
      const walk = (n: TreeNode): boolean => {
        if (n.id === id) {
          n.title = title
          return true
        }
        return n.children.some(walk)
      }
      walk(root)
    })

  const addChild = (parentId: number, label: string) =>
    updateTree((root) => {
      const walk = (n: TreeNode): boolean => {
        if (n.id === parentId) {
          n.children.push(mkNode(`Yeni ${label}`))
          n.open = true
          return true
        }
        return n.children.some(walk)
      }
      walk(root)
    })

  const removeNode = (id: number) =>
    updateTree((root) => {
      const p = findParent(root, id)
      if (p) p.children = p.children.filter((c) => c.id !== id)
    })

  const toggleAll = () => {
    const next = !allOpen
    updateTree((root) => {
      const walk = (n: TreeNode) => {
        n.open = next
        n.children.forEach(walk)
      }
      walk(root)
    })
  }

  const clearList = () => {
    if (locked) return
    updateTree((root) => {
      root.children = []
      root.open = true
    })
  }

  const addList = () => {
    const name = newListName.trim()
    if (!name) {
      modalInputRef.current?.focus()
      return
    }
    const id = `r${nid()}`
    setRoadmaps((rms) => [
      ...rms,
      {
        id,
        name,
        data: mkNode(`Proje — ${name}`, [mkNode("Yeni Sprint", [mkNode("Yeni Madde", [mkNode("Yeni Görev")])])]),
      },
    ])
    setActiveId(id)
    setModal(false)
    setNewListName("")
  }

  /* ---- ağaç satırı (özyinelemeli) ---- */
  const renderNode = (n: TreeNode, depth: number, isRoot: boolean) => {
    const label = childLabel(depth)
    return (
      <div key={n.id} className="border-b border-border last:border-b-0">
        <div className="group flex min-h-9 items-center hover:bg-muted/30">
          <div className="flex min-w-0 flex-1 items-center gap-1" style={{ paddingLeft: 10 + depth * 20 }}>
            <button
              type="button"
              aria-label={n.open ? "Daralt" : "Genişlet"}
              onClick={() => toggleNode(n.id)}
              className={cn(
                "flex size-3.5 shrink-0 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted",
                n.children.length === 0 && "invisible",
              )}
            >
              {n.open ? <ChevronDown className="size-3" /> : <ChevronRight className="size-3" />}
            </button>

            <input
              value={n.title}
              onChange={(e) => renameNode(n.id, e.target.value)}
              placeholder="Başlık"
              aria-label={`${LEVEL_NAMES[depth] ?? "Öğe"} başlığı`}
              className="min-w-0 flex-1 rounded-sm bg-transparent px-1 py-1 text-[13px] font-medium outline-none focus:bg-accent/60"
            />

            {label && (
              <button
                type="button"
                onClick={() => addChild(n.id, label)}
                className="shrink-0 rounded-full border border-border bg-background px-2 py-0.5 text-[11.5px] font-medium whitespace-nowrap text-blue-600 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-blue-50 focus:opacity-100"
              >
                <span className="inline-flex items-center gap-0.5">
                  <Plus className="size-3" /> {label} Ekle
                </span>
              </button>
            )}
          </div>

          {!isRoot && (
            <button
              type="button"
              onClick={() => removeNode(n.id)}
              aria-label={`${LEVEL_NAMES[depth] ?? "Öğe"} sil`}
              title={`${LEVEL_NAMES[depth] ?? "Öğe"} — Sil`}
              className="mr-1.5 flex size-5.5 shrink-0 items-center justify-center rounded text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive focus:opacity-100"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {n.children.length > 0 && n.open && <div>{n.children.map((c) => renderNode(c, depth + 1, false))}</div>}
      </div>
    )
  }

  if (!current) return null

  return (
    <div className={cn("w-full rounded-lg border border-border bg-card p-3.5 text-foreground", className)}>
      {/* Üst bar */}
      <div className="mb-3 flex flex-wrap items-center gap-2.5">
        <div className="flex items-center gap-1.5">
          <select
            value={current.id}
            onChange={(e) => setActiveId(e.target.value)}
            disabled={locked}
            aria-label="Roadmap listesi"
            className="min-w-[200px] rounded-md border border-border bg-background px-2.5 py-1.5 text-[13px] font-medium outline-none disabled:cursor-not-allowed disabled:opacity-55"
          >
            {roadmaps.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setModal(true)}
            aria-label="Yeni liste ekle"
            title="Yeni liste ekle"
            className="rounded-md border border-border bg-background px-2 py-1.5 text-sm hover:bg-muted"
          >
            <Plus className="size-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[12.5px] text-muted-foreground">{allOpen ? "Tümünü Kapat" : "Tümünü Aç"}</span>
          <button
            type="button"
            role="switch"
            aria-checked={allOpen}
            aria-label="Tümünü aç/kapat"
            onClick={toggleAll}
            className={cn("relative h-5.5 w-9.5 shrink-0 rounded-full transition-colors", allOpen ? "bg-blue-600" : "bg-border")}
          >
            <span
              className={cn(
                "absolute top-0.5 left-0.5 size-4.5 rounded-full bg-white transition-transform",
                allOpen && "translate-x-4",
              )}
            />
          </button>
        </div>

        <button
          type="button"
          onClick={clearList}
          disabled={locked}
          title={locked ? "Görev eklenen listeler temizlenemez" : "Listeyi temizle"}
          className="ml-auto flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-[12.5px] text-destructive hover:bg-destructive/10 disabled:cursor-not-allowed disabled:text-muted-foreground disabled:hover:bg-transparent"
        >
          <Trash2 className="size-3.5" /> Temizle
        </button>
      </div>

      {locked && <p className="mb-2 text-[11px] font-medium text-destructive">Görev eklenen listeler değiştirilemez</p>}

      {/* Ağaç */}
      <div className="overflow-hidden rounded-md border border-border bg-background">{renderNode(current.data, 0, true)}</div>

      {/* Yeni liste modalı */}
      {modal && (
        <div
          role="dialog"
          aria-label="Yeni roadmap listesi"
          onClick={(e) => e.target === e.currentTarget && setModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4"
        >
          <div className="w-[320px] max-w-[90vw] rounded-lg border border-border bg-card p-4 shadow-xl">
            <div className="mb-2.5 text-sm font-semibold">Yeni Roadmap Listesi</div>
            <input
              ref={modalInputRef}
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addList()
                if (e.key === "Escape") setModal(false)
              }}
              placeholder="Liste adı girin..."
              className="w-full rounded-md border border-border bg-background px-2.5 py-2 text-[13px] outline-none focus:border-blue-500"
            />
            <div className="mt-3.5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setModal(false)}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-[12.5px] hover:bg-muted"
              >
                İptal
              </button>
              <button
                type="button"
                onClick={addList}
                className="rounded-md bg-blue-600 px-3 py-1.5 text-[12.5px] font-medium text-white hover:bg-blue-700"
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { ProjeAgaci }
