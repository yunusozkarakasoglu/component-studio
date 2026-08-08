/**
 * MtTreeDragDropAllow
 * Sürükle bırak (izin) (saf React, Mantine kaynaklı).
 * @id 1813
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeDragDropAllow() {
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
    <div className="w-64">
      <MtTree data={data} expanded={expanded} onExpandedChange={setExpanded} />
    </div>
  )
}

export { MtTreeDragDropAllow }
