/**
 * MuiSwitchSizes
 * @id 1945
 * @category Seçim
 * @subcategory MuiSwitch
 * @source mui
 */
import { MuiSwitch } from "@/components/ui/mui-switch"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSwitchSizes() {
  return (
    <MuiStack direction="row" spacing={3} className="items-center">
      <MuiSwitch defaultChecked size="small" />
      <MuiSwitch defaultChecked size="medium" />
    </MuiStack>
  )
}

export { MuiSwitchSizes }
