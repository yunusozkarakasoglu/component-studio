/**
 * MuiToggleButtonSizes
 * @id 1908
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiToggleButton
 * @source mui
 */
import { useState } from "react"
import { MuiToggleButtonGroup } from "@/components/ui/mui-toggle-button-group"
import { MuiToggleButton } from "@/components/ui/mui-toggle-button"
import { AlignLeft, AlignCenter, AlignRight } from "@/components/ui/icons"

function MuiToggleButtonSizes() {
  const [size, setSize] = useState("small")
  return (
    <div className="space-y-4">
      <MuiToggleButtonGroup value={size} exclusive onChange={(v) => setSize(v ?? "small")} ariaLabel="boyut" size={size as "small" | "medium" | "large"}>
        <MuiToggleButton value="small"><AlignLeft className="size-4" /></MuiToggleButton>
        <MuiToggleButton value="medium"><AlignCenter className="size-4" /></MuiToggleButton>
        <MuiToggleButton value="large"><AlignRight className="size-4" /></MuiToggleButton>
      </MuiToggleButtonGroup>
      <p className="text-xs text-gray-500">Seçili boyut: {size}</p>
    </div>
  )
}

export { MuiToggleButtonSizes }
