/**
 * MuiCheckboxControlled
 * @id 2056
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { useState } from "react"
import { MuiCheckbox } from "@/components/ui/mui-checkbox"
import { MuiButton } from "@/components/ui/mui-button"

function MuiCheckboxControlled() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex items-center gap-3">
      <MuiCheckbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
        Kontrollü onay kutusu
      </MuiCheckbox>
      <MuiButton variant="outlined" size="small" onClick={() => setChecked((c) => !c)}>
        {checked ? "Kaldır" : "İşaretle"}
      </MuiButton>
    </div>
  )
}

export { MuiCheckboxControlled }
