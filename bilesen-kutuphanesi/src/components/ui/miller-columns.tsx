/**
 * MillerColumns
 * Component Studio — özel bileşen (React + Tailwind Miller Columns navigatörü)
 * Hiyerarşik veriyi sütunlar halinde gezinme (dosya yöneticisi tarzı).
 * @id 089
 * @category Özel Komponentler
 * @tags 
 */
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react"

/* ---------- Tipler ---------- */
export interface TreeNode {
  id: string
  label?: string
  title?: string
  children?: TreeNode[]
}

export interface MillerColumnsProps {
  /** Ağaç verisi (id + çocuklar; label/title görüntülenir) */
  data: TreeNode[]
  /** Başlangıç yolu, örn. ["eng","fe","react"] */
  initialPath?: string[]
  /** Her gezinmede çağrılır: (path, son node) */
  onChange?: (path: string[], node: TreeNode | null) => void
  /** Kök için ekstra sınıflar */
  className?: string
}

/* ---------- Yardımcılar ---------- */
function getLabel(node: TreeNode | null | undefined): string {
  return node?.label ?? node?.title ?? node?.id ?? ""
}

function findById(nodes: TreeNode[], id: string): TreeNode | null {
  for (const n of nodes) {
    if (n.id === id) return n
    const found = findById(n.children || [], id)
    if (found) return found
  }
  return null
}

function getNodesByPath(roots: TreeNode[], path: string[]): (TreeNode | null)[] {
  const out: (TreeNode | null)[] = []
  let cur = roots
  for (const id of path) {
    const node = cur.find((n) => n.id === id) || null
    out.push(node)
    if (node) cur = node.children || []
    else break
  }
  return out
}

/* ---------- Alt bileşenler ---------- */
function ChevronRight() {
  return (
    <svg
      width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function Breadcrumb({
  path, nodes, onCrumbClick,
}: { path: string[]; nodes: (TreeNode | null)[]; onCrumbClick: (i: number) => void }) {
  if (path.length === 0) {
    return (
      <div className="flex h-8 items-center gap-1 border-b border-slate-200 bg-slate-50 px-4" aria-label="Breadcrumb">
        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
          / root
        </span>
      </div>
    )
  }
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex h-8 items-center gap-1 overflow-x-auto border-b border-slate-200 bg-slate-50 px-4"
    >
      <button
        type="button"
        onClick={() => onCrumbClick(-1)}
        className="flex-shrink-0 font-mono text-[11px] uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-300"
      >
        root
      </button>
      {nodes.map((node, i) =>
        node ? (
          <Fragment key={node.id}>
            <span className="flex-shrink-0 text-[11px] text-slate-400">/</span>
            <button
              type="button"
              onClick={() => onCrumbClick(i)}
              aria-current={i === nodes.length - 1 ? "page" : undefined}
              className={`flex-shrink-0 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                i === nodes.length - 1 ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {getLabel(node)}
            </button>
          </Fragment>
        ) : null
      )}
    </nav>
  )
}

function ColumnItem({
  node, depth, isSelected, onClick,
}: { node: TreeNode; depth: number; isSelected: boolean; onClick: () => void }) {
  const hasChildren = (node.children || []).length > 0
  return (
    <button
      type="button"
      role="treeitem"
      aria-level={depth + 1}
      aria-selected={isSelected}
      aria-expanded={hasChildren ? true : undefined}
      onClick={onClick}
      className={`group relative flex w-full items-center justify-between px-3 py-2 text-left font-mono transition-colors ${
        isSelected ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {isSelected && <span className="absolute left-0 top-0 h-full w-0.5 bg-blue-500" />}
      <span className="truncate pr-2 text-[13px]">{getLabel(node)}</span>
      {hasChildren && (
        <span className={`flex-shrink-0 transition-colors ${isSelected ? "text-white" : "text-slate-400 group-hover:text-slate-400"}`}>
          <ChevronRight />
        </span>
      )}
    </button>
  )
}

function ColumnPanel({
  nodes, selectedId, headerLabel, depth, isLeaf, onSelect,
}: {
  nodes: TreeNode[]; selectedId: string | null; headerLabel: string
  depth: number; isLeaf: boolean; onSelect: (node: TreeNode) => void
}) {
  return (
    <section
      aria-label={headerLabel}
      className="miller-col-enter flex w-72 flex-shrink-0 flex-col border-r border-slate-200"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="flex-shrink-0 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
          {headerLabel}
        </div>
        <div className="mt-0.5 font-mono text-[10px] text-slate-400">depth/{depth}</div>
      </div>
      {isLeaf ? (
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-1 text-[11px] uppercase tracking-wider text-slate-500">Terminal node</div>
            <div className="font-mono text-[12px] text-slate-400">no children</div>
          </div>
        </div>
      ) : nodes.length === 0 ? (
        <div className="flex flex-1 items-center justify-center font-mono text-[12px] text-slate-400">empty</div>
      ) : (
        <div className="miller-vscroll flex-1 overflow-y-auto py-1" role="group">
          {nodes.map((node) => (
            <ColumnItem
              key={node.id}
              node={node}
              depth={depth}
              isSelected={node.id === selectedId}
              onClick={() => onSelect(node)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

/* ---------- Ana bileşen ---------- */
export function MillerColumns({
  data, initialPath = [], onChange, className = "",
}: MillerColumnsProps) {
  const [path, setPath] = useState<string[]>(() => initialPath)

  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    if (!onChangeRef.current) return
    const last = path.length > 0 ? findById(data, path[path.length - 1]) : null
    onChangeRef.current(path, last)
  }, [path, data])

  const pathNodes = useMemo(() => getNodesByPath(data, path), [data, path])

  const columns = useMemo(() => {
    const cols: { nodes: TreeNode[]; headerLabel: string; depth: number; selectedId: string | null; isLeaf: boolean }[] = [
      { nodes: data, headerLabel: "All", depth: 0, selectedId: path[0] ?? null, isLeaf: false },
    ]
    let cur = data
    for (let i = 0; i < path.length; i++) {
      const node = cur.find((n) => n.id === path[i])
      if (!node) break
      const kids = node.children || []
      if (kids.length === 0) {
        cols.push({ nodes: [], headerLabel: getLabel(node), depth: i + 1, selectedId: null, isLeaf: true })
        break
      }
      cols.push({ nodes: kids, headerLabel: getLabel(node), depth: i + 1, selectedId: path[i + 1] ?? null, isLeaf: false })
      cur = kids
    }
    return cols
  }, [data, path])

  const columnKey = (col: { depth: number }) =>
    col.depth === 0 ? "__root__" : path.slice(0, col.depth).join("/")

  const scrollRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const c = scrollRef.current
    if (!c) return
    const raf = requestAnimationFrame(() => {
      c.scrollTo({ left: c.scrollWidth, behavior: "smooth" })
    })
    return () => cancelAnimationFrame(raf)
  }, [path])

  const handleSelect = useCallback((depth: number, node: TreeNode) => {
    setPath((prev) => [...prev.slice(0, depth), node.id])
  }, [])

  const handleCrumb = useCallback((idx: number) => {
    setPath((prev) => (idx < 0 ? [] : prev.slice(0, idx + 1)))
  }, [])

  return (
    <div className={`flex h-full w-full flex-col bg-white text-slate-800 ${className}`}>
      <Breadcrumb path={path} nodes={pathNodes} onCrumbClick={handleCrumb} />
      <div
        ref={scrollRef}
        className="miller-hscroll flex flex-1 flex-row overflow-x-auto overflow-y-hidden"
        role="tree"
        aria-label="Miller columns navigator"
      >
        {columns.map((col) => (
          <ColumnPanel
            key={columnKey(col)}
            nodes={col.nodes}
            selectedId={col.selectedId}
            headerLabel={col.headerLabel}
            depth={col.depth}
            isLeaf={col.isLeaf}
            onSelect={(node) => handleSelect(col.depth, node)}
          />
        ))}
        <div className="w-px flex-shrink-0" />
      </div>

      <style>{`
        .miller-hscroll { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
        .miller-hscroll::-webkit-scrollbar { height: 4px; }
        .miller-hscroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 2px; }
        .miller-vscroll { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
        .miller-vscroll::-webkit-scrollbar { width: 4px; }
        .miller-vscroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 2px; }
        @keyframes miller-slide-in {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .miller-col-enter { animation: miller-slide-in 120ms ease-out forwards; }
      `}</style>
    </div>
  )
}

/* ---------- Örnek veri (önizleme/demo için) ---------- */
export const SAMPLE_DATA: TreeNode[] = [
  {
    id: "eng", label: "Engineering",
    children: [
      {
        id: "fe", label: "Frontend",
        children: [
          {
            id: "react", label: "React",
            children: [
              { id: "hooks", label: "Hooks", children: [
                { id: "useState", label: "useState" },
                { id: "useEffect", label: "useEffect" },
                { id: "useMemo", label: "useMemo" },
              ] },
              { id: "router", label: "Router" },
              { id: "ssr", label: "SSR" },
            ],
          },
          { id: "vue", label: "Vue" },
          { id: "svelte", label: "Svelte" },
        ],
      },
      {
        id: "be", label: "Backend",
        children: [
          { id: "node", label: "Node.js" },
          { id: "py", label: "Python" },
          { id: "go", label: "Go" },
        ],
      },
    ],
  },
  {
    id: "design", label: "Design",
    children: [
      { id: "ux", label: "UX Research" },
      { id: "ui", label: "UI Design" },
      { id: "brand", label: "Brand" },
    ],
  },
  {
    id: "ops", label: "Operations",
    children: [
      { id: "ci", label: "CI/CD" },
      { id: "mon", label: "Monitoring" },
      { id: "sec", label: "Security" },
    ],
  },
]
