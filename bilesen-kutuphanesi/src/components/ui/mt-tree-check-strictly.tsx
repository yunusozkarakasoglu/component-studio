/**
 * MtTreeCheckStrictly
 * Sıkı işaretleme (saf React, Mantine kaynaklı).
 * @id 1810
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeCheckStrictly() {
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
  const [checked, setChecked] = useState<string[]>([])

  return <MtTree data={data} checked={checked} onCheckedChange={setChecked} />
}

export { MtTreeCheckStrictly }
