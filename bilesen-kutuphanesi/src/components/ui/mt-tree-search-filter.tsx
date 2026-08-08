/**
 * MtTreeSearchFilter
 * Arama filtresi (saf React, Mantine kaynaklı).
 * @id 1820
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree, type MtTreeNode } from "@/components/ui/mt-tree"

function MtTreeSearchFilter() {
const data = [
  { label: "src", value: "src", children: [
    { label: "components", value: "components", children: [
      { label: "Button.tsx", value: "Button.tsx" },
      { label: "Card.tsx", value: "Card.tsx" },
    ]},
    { label: "App.tsx", value: "App.tsx" },
  ]},
  { label: "package.json", value: "package.json" },
]
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState<string[]>(["src", "components"])

  const filterData = (nodes: MtTreeNode[]): MtTreeNode[] => {
    if (!query) return nodes
    return nodes
      .map((n: MtTreeNode) => ({...n, children: n.children ? filterData(n.children) : undefined}))
      .filter((n: MtTreeNode) => n.label.toLowerCase().includes(query.toLowerCase()) || (n.children && n.children.length > 0))
  }

  return (
    <div className="flex w-64 flex-col gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ara…"
        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-blue-500"
      />
      <MtTree data={filterData(data)} expanded={expanded} onExpandedChange={setExpanded} />
    </div>
  )
}

export { MtTreeSearchFilter }
