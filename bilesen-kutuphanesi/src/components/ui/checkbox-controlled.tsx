/**
 * CheckboxControlled
 * Controlled örneği (saf React).
 * @id 206
 * @category Checkbox
 */
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxControlled() {
  const [isSelected, setIsSelected] = useState(true)
  return (
    <div className="flex flex-col gap-3">
      <Checkbox isSelected={isSelected} onChange={setIsSelected} label="Email notifications" />
      <p className="text-sm text-muted-foreground">Status: <span className="font-medium">{isSelected ? "Enabled" : "Disabled"}</span></p>
    </div>
  )
}

export { CheckboxControlled }
