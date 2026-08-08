/**
 * MtTreeController
 * Kontrollü (saf React, Mantine kaynaklı).
 * @id 1811
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeController() {
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

  return (
    <div className="flex w-64 flex-col gap-2">
      <div className="flex gap-2 text-xs text-muted-foreground">
        <button onClick={() => setExpanded(["src", "components"])} className="cursor-pointer rounded bg-muted px-2 py-0.5 hover:bg-muted/70">Hepsini aç</button>
        <button onClick={() => setExpanded([])} className="cursor-pointer rounded bg-muted px-2 py-0.5 hover:bg-muted/70">Hepsini kapat</button>
      </div>
      <MtTree data={data} expanded={expanded} onExpandedChange={setExpanded} checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}

export { MtTreeController }
