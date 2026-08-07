/**
 * MtTreeSelectUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1338
 * @category Combobox
 * @subcategory MtTreeSelect
 * @source mantine
 */
import { MtTreeSelect } from "@/components/ui/mt-tree-select"

function MtTreeSelectUsage() {
  return (
    <MtTreeSelect
      label="Select component"
      className="max-w-sm"
      data={[
        { value: "core", label: "Core", children: [
          { value: "button", label: "Button" },
          { value: "input", label: "Input" },
          { value: "select", label: "Select" },
        ]},
        { value: "dates", label: "Dates", children: [
          { value: "calendar", label: "Calendar" },
          { value: "time", label: "TimeInput" },
        ]},
      ]}
    />
  )
}

export { MtTreeSelectUsage }
