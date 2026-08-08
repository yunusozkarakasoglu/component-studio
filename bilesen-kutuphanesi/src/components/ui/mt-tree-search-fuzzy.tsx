/**
 * MtTreeSearchFuzzy
 * Bulanık arama (saf React, Mantine kaynaklı).
 * @id 1821
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree, type MtTreeNode } from "@/components/ui/mt-tree"

function MtTreeSearchFuzzy() {
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

  const fuzzy = (text: string) => {
    const q = query.toLowerCase()
    if (!q) return true
    let qi = 0
    for (const ch of text.toLowerCase()) {
      if (ch === q[qi]) qi++
      if (qi === q.length) return true
    }
    return false
  }

  const filterData = (nodes: MtTreeNode[]): MtTreeNode[] =>
    nodes
      .map((n: MtTreeNode) => ({...n, children: n.children ? filterData(n.children) : undefined}))
      .filter((n: MtTreeNode) => fuzzy(n.label) || (n.children && n.children.length > 0))

  return (
    <div className="flex w-64 flex-col gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Bulanık ara (örn. btn)…"
        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-blue-500"
      />
      <MtTree data={filterData(data)} expanded={expanded} onExpandedChange={setExpanded} />
    </div>
  )
}

export { MtTreeSearchFuzzy }
