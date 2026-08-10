/**
 * MuiToggleButtonAlignment
 * @id 1906
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiToggleButton
 * @source mui
 */
import { useState } from "react"
import { MuiToggleButtonGroup } from "@/components/ui/mui-toggle-button-group"
import { MuiToggleButton } from "@/components/ui/mui-toggle-button"
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "@/components/ui/icons"

function MuiToggleButtonAlignment() {
  const [alignment, setAlignment] = useState<string | null>("left")
  return (
    <MuiToggleButtonGroup
      value={alignment}
      exclusive
      onChange={(v) => setAlignment(v)}
      ariaLabel="metin hizalama"
    >
      <MuiToggleButton value="left" aria-label="sola hizala"><AlignLeft className="size-4" /></MuiToggleButton>
      <MuiToggleButton value="center" aria-label="ortala"><AlignCenter className="size-4" /></MuiToggleButton>
      <MuiToggleButton value="right" aria-label="sağa hizala"><AlignRight className="size-4" /></MuiToggleButton>
      <MuiToggleButton value="justify" aria-label="yasla"><AlignJustify className="size-4" /></MuiToggleButton>
    </MuiToggleButtonGroup>
  )
}

export { MuiToggleButtonAlignment }
