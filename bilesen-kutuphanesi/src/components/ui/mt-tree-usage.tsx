/**
 * MtTreeUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1823
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { MtTree } from "@/components/ui/mt-tree"

function MtTreeUsage() {
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
  return <MtTree data={data} />
}

export { MtTreeUsage }
