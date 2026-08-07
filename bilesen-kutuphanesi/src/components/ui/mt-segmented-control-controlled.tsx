/**
 * MtSegmentedControlControlled
 * Kontrollü durum (saf React, Mantine kaynaklı).
 * @id 1254
 * @category Seçim
 * @subcategory MtSegmentedControl
 * @source mantine
 */
import { useState } from "react"
import { MtSegmentedControl } from "@/components/ui/mt-segmented-control"

function MtSegmentedControlControlled() {
  const [value, setValue] = useState("center")

  return (
    <div className="flex flex-col items-start gap-2">
      <MtSegmentedControl value={value} onChange={setValue} data={["Left", "Center", "Right"]} />
      <p className="text-xs text-muted-foreground">Selected: {value}</p>
    </div>
  )
}

export { MtSegmentedControlControlled }
