/**
 * MuiToggleButtonColor
 * @id 2077
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiToggleButton
 * @source mui
 */
import { useState } from "react"
import { MuiToggleButtonGroup } from "@/components/ui/mui-toggle-button-group"
import { MuiToggleButton } from "@/components/ui/mui-toggle-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiToggleButtonColor() {
  const [standard, setStandard] = useState<string | null>("one")
  const [primary, setPrimary] = useState<string | null>("one")
  const [secondary, setSecondary] = useState<string | null>("one")
  return (
    <MuiStack direction="row" spacing={3} className="flex-wrap">
      <MuiToggleButtonGroup value={standard} exclusive onChange={setStandard} color="standard" ariaLabel="standart">
        <MuiToggleButton value="one">Bir</MuiToggleButton>
        <MuiToggleButton value="two">İki</MuiToggleButton>
      </MuiToggleButtonGroup>
      <MuiToggleButtonGroup value={primary} exclusive onChange={setPrimary} color="primary" ariaLabel="birincil">
        <MuiToggleButton value="one">Bir</MuiToggleButton>
        <MuiToggleButton value="two">İki</MuiToggleButton>
      </MuiToggleButtonGroup>
      <MuiToggleButtonGroup value={secondary} exclusive onChange={setSecondary} color="secondary" ariaLabel="ikincil">
        <MuiToggleButton value="one">Bir</MuiToggleButton>
        <MuiToggleButton value="two">İki</MuiToggleButton>
      </MuiToggleButtonGroup>
    </MuiStack>
  )
}

export { MuiToggleButtonColor }
