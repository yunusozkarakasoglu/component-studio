/**
 * CheckboxGroupIndeterminate
 * Indeterminate örneği — Select all (saf React).
 * @id 215
 * @category Checkbox
 */
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"

function CheckboxGroupIndeterminate() {
  const [selected, setSelected] = useState(["coding"])
  const allOptions = ["coding", "design", "writing"]
  const allSelected = selected.length === allOptions.length
  const someSelected = selected.length > 0 && !allSelected
  return (
    <div>
      <Checkbox
        isIndeterminate={someSelected}
        isSelected={allSelected}
        onChange={(sel) => setSelected(sel ? allOptions : [])}
        label="Select all"
      />
      <div className="ms-6 flex flex-col gap-2">
        <CheckboxGroup value={selected} onChange={setSelected}>
          <Checkbox value="coding" label="Coding" />
          <Checkbox value="design" label="Design" />
          <Checkbox value="writing" label="Writing" />
        </CheckboxGroup>
      </div>
    </div>
  )
}

export { CheckboxGroupIndeterminate }
