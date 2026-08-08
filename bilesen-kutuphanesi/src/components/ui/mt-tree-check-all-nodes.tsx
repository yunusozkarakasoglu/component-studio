/**
 * MtTreeCheckAllNodes
 * Tümünü işaretle (saf React, Mantine kaynaklı).
 * @id 1808
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeCheckAllNodes() {
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

  const toggleAll = () => {
    const all = ["src", "components", "Button.tsx", "Card.tsx", "App.tsx", "package.json"]
    setChecked(checked.length === all.length ? [] : all)
  }

  return (
    <div className="flex w-64 flex-col gap-2">
      <button onClick={toggleAll} className="w-fit cursor-pointer rounded-md bg-muted px-3 py-1.5 text-xs font-medium hover:bg-muted/70">
        Tümünü işaretle / temizle
      </button>
      <MtTree data={data} checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}

export { MtTreeCheckAllNodes }
