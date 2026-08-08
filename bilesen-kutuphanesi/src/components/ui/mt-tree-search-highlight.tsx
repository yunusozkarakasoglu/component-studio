/**
 * MtTreeSearchHighlight
 * Arama vurgusu (saf React, Mantine kaynaklı).
 * @id 1822
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeSearchHighlight() {
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

  const highlight = (label: string) => {
    if (!query) return label
    const idx = label.toLowerCase().indexOf(query.toLowerCase())
    if (idx === -1) return label
    return (
      <>
        {label.slice(0, idx)}
        <mark className="rounded bg-yellow-200">{label.slice(idx, idx + query.length)}</mark>
        {label.slice(idx + query.length)}
      </>
    )
  }

  return (
    <div className="flex w-64 flex-col gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ara ve vurgula…"
        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-blue-500"
      />
      <MtTree data={data} expanded={expanded} onExpandedChange={setExpanded} renderNode={(n) => <span className="text-sm text-foreground">{highlight(n.label)}</span>} />
    </div>
  )
}

export { MtTreeSearchHighlight }
