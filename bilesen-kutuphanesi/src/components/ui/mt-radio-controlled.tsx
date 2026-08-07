/**
 * MtRadioControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1233
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { useState } from "react"
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioControlled() {
  const [value, setValue] = useState("a")

  return (
    <div className="flex flex-col gap-2">
      <MtRadioGroup value={value} onChange={setValue}>
        <MtRadio value="a" label="Option A" />
        <MtRadio value="b" label="Option B" />
      </MtRadioGroup>
      <p className="text-xs text-muted-foreground">Selected: {value}</p>
    </div>
  )
}

export { MtRadioControlled }
