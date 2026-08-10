/**
 * MuiSwitchColors
 * @id 1944
 * @category Seçim
 * @subcategory MuiSwitch
 * @source mui
 */
import { MuiSwitch } from "@/components/ui/mui-switch"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSwitchColors() {
  return (
    <MuiStack direction="row" spacing={3} className="items-center">
      <MuiSwitch defaultChecked color="primary" />
      <MuiSwitch defaultChecked color="secondary" />
      <MuiSwitch defaultChecked color="success" />
      <MuiSwitch defaultChecked color="error" />
      <MuiSwitch defaultChecked color="warning" />
    </MuiStack>
  )
}

export { MuiSwitchColors }
