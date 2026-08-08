/**
 * MtTreeDocsEditor
 * Doküman editörü (saf React, Mantine kaynaklı).
 * @id 1812
 * @category Özel Komponentler
 * @subcategory MtTree
 * @source mantine
 */
import { useState } from "react"
import { MtTree } from "@/components/ui/mt-tree"

const data = [
  { label: "docs", value: "docs", children: [
    { label: "kurulum.md", value: "kurulum.md" },
    { label: "bileşenler.md", value: "bileşenler.md" },
    { label: "tema.md", value: "tema.md" },
  ]},
]

function MtTreeDocsEditor() {
  const [expanded, setExpanded] = useState<string[]>(["docs"])

  return (
    <div className="flex w-72 gap-3">
      <MtTree data={data} expanded={expanded} onExpandedChange={setExpanded} />
    </div>
  )
}

export { MtTreeDocsEditor }
