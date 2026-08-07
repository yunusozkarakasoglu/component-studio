/**
 * MtPillsInputControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1298
 * @category Seçim
 * @subcategory MtPillsInput
 * @source mantine
 */
import { useState } from "react"
import { MtPillsInput } from "@/components/ui/mt-pills-input"

function MtPillsInputControlled() {
  const [values, setValues] = useState<string[]>(["One"])

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <MtPillsInput value={values} onChange={setValues} label="Controlled pills" />
      <p className="text-xs text-muted-foreground">{values.length} pill(s)</p>
    </div>
  )
}

export { MtPillsInputControlled }
