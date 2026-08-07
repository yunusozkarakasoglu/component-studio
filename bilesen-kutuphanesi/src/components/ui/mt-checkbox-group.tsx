/**
 * MtCheckboxGroup
 * Onay kutusu grubu (saf React, Mantine kaynaklı).
 * @id 1222
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { useState } from "react"
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxGroup() {
  const [values, setValues] = useState<string[]>(["react"])

  const toggle = (v: string) => {
    setValues((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))
  }

  return (
    <div className="flex flex-col gap-3">
      <MtCheckbox label="React" checked={values.includes("react")} onChange={() => toggle("react")} />
      <MtCheckbox label="Vue" checked={values.includes("vue")} onChange={() => toggle("vue")} />
      <MtCheckbox label="Angular" checked={values.includes("angular")} onChange={() => toggle("angular")} />
      <p className="text-xs text-muted-foreground">Selected: {values.join(", ") || "none"}</p>
    </div>
  )
}

export { MtCheckboxGroup }
