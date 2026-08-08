/**
 * MtTree + MtTreeItem
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Ağaç görünümü — genişletme, işaretleme, özel render.
 *   <MtTree data={data} checked={checked} onCheckedChange={setChecked} />
 * @id 1770
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "@/components/ui/icons"

interface MtTreeNode {
  label: string
  value: string
  children?: MtTreeNode[]
}

interface MtTreeProps {
  data?: MtTreeNode[]
  checked?: string[]
  onCheckedChange?: (checked: string[]) => void
  expanded?: string[]
  onExpandedChange?: (expanded: string[]) => void
  selectOnClick?: boolean
  renderNode?: (node: MtTreeNode, ctx: { expanded: boolean; checked: boolean; hasChildren: boolean }) => ReactNode
  className?: string
}

function collectValues(nodes: MtTreeNode[]): string[] {
  return nodes.flatMap((n) => [n.value, ...(n.children ? collectValues(n.children) : [])])
}

function MtTree({ data = [], checked, onCheckedChange, expanded: controlledExpanded, onExpandedChange, renderNode, className }: MtTreeProps) {
  const [internalExpanded, setInternalExpanded] = useState<string[]>([])
  const expanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const toggleExpand = (value: string) => {
    const next = expanded.includes(value) ? expanded.filter((v) => v !== value) : [...expanded, value]
    if (controlledExpanded !== undefined) onExpandedChange?.(next)
    else setInternalExpanded(next)
  }

  const toggleCheck = (value: string) => {
    if (!checked || !onCheckedChange) return
    const next = checked.includes(value) ? checked.filter((v) => v !== value) : [...checked, value]
    onCheckedChange(next)
  }

  const renderNodes = (nodes: MtTreeNode[], depth: number): ReactNode =>
    nodes.map((node) => {
      const hasChildren = !!node.children?.length
      const isExpanded = expanded.includes(node.value)
      const isChecked = checked?.includes(node.value) ?? false
      const childValues = hasChildren ? collectValues(node.children!) : []
      const allChecked = childValues.length > 0 && childValues.every((v) => checked?.includes(v))
      const someChecked = childValues.some((v) => checked?.includes(v))

      return (
        <div key={node.value}>
          <div
            data-slot="mt-tree-item"
            className="flex items-center gap-1.5 rounded-md py-1 pr-2 hover:bg-muted/60"
            style={{ paddingLeft: depth * 16 }}
          >
            {hasChildren ? (
              <button
                type="button"
                aria-label="Genişlet"
                onClick={() => toggleExpand(node.value)}
                className="flex size-5 cursor-pointer items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {isExpanded ? <ChevronDown className="size-3.5" /> : <ChevronRight className="size-3.5" />}
              </button>
            ) : (
              <span className="size-5" />
            )}
            {checked && (
              <input
                type="checkbox"
                checked={allChecked ? true : isChecked}
                ref={(el) => {
                  if (el) el.indeterminate = someChecked && !allChecked
                }}
                onChange={() => toggleCheck(node.value)}
                className="size-3.5 cursor-pointer accent-blue-600"
              />
            )}
            {renderNode ? renderNode(node, { expanded: isExpanded, checked: isChecked, hasChildren }) : <span className="text-sm text-foreground">{node.label}</span>}
          </div>
          {hasChildren && isExpanded && <div className="ml-2 border-l border-border pl-1">{renderNodes(node.children!, depth + 1)}</div>}
        </div>
      )
    })

  return <div data-slot="mt-tree" className={cn("w-full", className)}>{renderNodes(data, 0)}</div>
}

export { MtTree }
export type { MtTreeNode, MtTreeProps }
