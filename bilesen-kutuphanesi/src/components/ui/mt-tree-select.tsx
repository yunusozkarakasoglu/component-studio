/**
 * MtTreeSelect
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Ağaç seçim — iç içe seçenekler (basit).
 *   <MtTreeSelect data={[{value:"react",label:"React",children:[…]}]} />
 * @id 1304
 * @category Combobox
 * @subcategory MtTreeSelect
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown, ChevronRight } from "@/components/ui/icons"

export interface MtTreeSelectNode {
  value: string
  label: string
  children?: MtTreeSelectNode[]
}

interface MtTreeSelectProps {
  data?: MtTreeSelectNode[]
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  label?: ReactNode
  error?: ReactNode
  placeholder?: string
  disabled?: boolean
  className?: string
}

function MtTreeSelect({
  data = [],
  value,
  defaultValue = null,
  onChange,
  label,
  error,
  placeholder = "Select from tree",
  disabled,
  className,
}: MtTreeSelectProps) {
  const [internal, setInternal] = useState<string | null>(defaultValue)
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const current = value !== undefined ? value : internal

  const set = (v: string | null) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const findLabel = (nodes: MtTreeSelectNode[], target: string): string | null => {
    for (const n of nodes) {
      if (n.value === target) return n.label
      if (n.children) {
        const found = findLabel(n.children, target)
        if (found) return found
      }
    }
    return null
  }

  const renderNodes = (nodes: MtTreeSelectNode[], depth: number) => (
    nodes.map((node) => (
      <li key={node.value}>
        {node.children && node.children.length > 0 ? (
          <>
            <button
              type="button"
              onClick={() => setExpanded((prev) => {
                const next = new Set(prev)
                if (next.has(node.value)) next.delete(node.value)
                else next.add(node.value)
                return next
              })}
              className="flex w-full cursor-pointer items-center gap-1.5 rounded px-2.5 py-1.5 text-left text-sm hover:bg-muted"
              style={{ paddingLeft: `${depth * 16 + 10}px` }}
            >
              {expanded.has(node.value) ? <ChevronDown className="size-3.5 text-muted-foreground" /> : <ChevronRight className="size-3.5 text-muted-foreground" />}
              <span className="font-medium">{node.label}</span>
            </button>
            {expanded.has(node.value) && <ul>{renderNodes(node.children, depth + 1)}</ul>}
          </>
        ) : (
          <button
            type="button"
            onClick={() => { set(node.value); setOpen(false) }}
            className={cn(
              "flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm hover:bg-muted",
              current === node.value && "bg-muted font-medium"
            )}
            style={{ paddingLeft: `${depth * 16 + 10}px` }}
          >
            <span className="flex-1">{node.label}</span>
            {current === node.value && <Check className="size-4 text-blue-600" />}
          </button>
        )}
      </li>
    ))
  )

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <div className="relative">
        <button
          type="button"
          data-slot="mt-tree-select"
          disabled={disabled}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-9 w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-border bg-background px-3 text-sm transition-colors outline-none",
            "focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !current && "text-muted-foreground",
            error && "border-red-500"
          )}
        >
          <span className="truncate">{current ? findLabel(data, current) ?? current : placeholder}</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </button>
        {open && !disabled && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute left-0 top-full z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-md border border-border bg-background p-1 shadow-lg">
              <ul>{renderNodes(data, 0)}</ul>
            </div>
          </>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtTreeSelect }
export type { MtTreeSelectNode as MtTreeSelectNodeItem, MtTreeSelectProps }
