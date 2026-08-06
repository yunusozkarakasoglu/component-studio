/**
 * ShadcnCheckboxExample
 * Kontrollü durum — checked/onCheckedChange (saf React, shadcn kaynaklı).
 * @id 701
 * @category Checkbox
 * @subcategory ShadcnCheckbox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCheckbox } from "@/components/ui/shadcn-checkbox"

function ShadcnCheckboxExample() {
  const [checked, setChecked] = useState(false)

  return <ShadcnCheckbox checked={checked} onCheckedChange={setChecked} />
}

export { ShadcnCheckboxExample }
