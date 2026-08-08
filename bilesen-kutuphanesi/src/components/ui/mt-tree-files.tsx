/**
 * MtTreeFiles
 * Dosyalar (saf React, Mantine kaynaklı).
 * @id 1817
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeFiles() {
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
  const [checked, setChecked] = useState<string[]>([])

  return <MtTree data={data} expanded={expanded} onExpandedChange={setExpanded} checked={checked} onCheckedChange={setChecked} />
}

export { MtTreeFiles }
