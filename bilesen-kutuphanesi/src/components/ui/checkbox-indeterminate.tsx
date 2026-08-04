/**
 * CheckboxIndeterminate
 * Indeterminate örneği (saf React).
 * @id 207
 * @category Checkbox
 */
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxIndeterminate() {
  const [isIndeterminate, setIsIndeterminate] = useState(true)
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Checkbox
      isIndeterminate={isIndeterminate}
      isSelected={isSelected}
      onChange={(selected) => { setIsSelected(selected); setIsIndeterminate(false) }}
      label="Select all"
      description="Shows indeterminate state (dash icon)"
    />
  )
}

export { CheckboxIndeterminate }
