/**
 * MtTreeSelectDeep
 * Derin ağaç (saf React, Mantine kaynaklı).
 * @id 1339
 * @category Combobox
 * @subcategory MtTreeSelect
 * @source mantine
 */
import { MtTreeSelect } from "@/components/ui/mt-tree-select"

function MtTreeSelectDeep() {
  return (
    <MtTreeSelect
      label="File tree"
      className="max-w-sm"
      data={[
        { value: "src", label: "src", children: [
          { value: "components", label: "components", children: [
            { value: "button", label: "button.tsx" },
            { value: "card", label: "card.tsx" },
          ]},
          { value: "app", label: "app.tsx" },
        ]},
        { value: "package", label: "package.json" },
      ]}
    />
  )
}

export { MtTreeSelectDeep }
