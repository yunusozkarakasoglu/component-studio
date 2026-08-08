/**
 * MtTreeRenderNode
 * Düğüm render (saf React, Mantine kaynaklı).
 * @id 1819
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeRenderNode() {
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
  const [expanded, setExpanded] = useState<string[]>(["src"])

  return (
    <MtTree
      data={data}
      expanded={expanded}
      onExpandedChange={setExpanded}
      renderNode={(node) => (
        <span className={`text-sm ${node.children ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
          {node.children ? "📁 " : "📄 "}{node.label}
        </span>
      )}
    />
  )
}

export { MtTreeRenderNode }
