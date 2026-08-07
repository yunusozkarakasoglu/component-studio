/**
 * MtTreeSelectControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1340
 * @category Combobox
 * @subcategory MtTreeSelect
 * @source mantine
 */
import { useState } from "react"
import { MtTreeSelect } from "@/components/ui/mt-tree-select"

function MtTreeSelectControlled() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtTreeSelect
        value={value}
        onChange={setValue}
        label="Controlled tree"
        data={[
          { value: "react", label: "React" },
          { value: "vue", label: "Vue" },
          { value: "svelte", label: "Svelte" },
        ]}
      />
      <p className="text-xs text-muted-foreground">Selected: {value ?? "none"}</p>
    </div>
  )
}

export { MtTreeSelectControlled }
