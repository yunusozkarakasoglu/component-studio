/**
 * MuiSwitchBasic
 * @id 1942
 * @category Seçim
 * @subcategory MuiSwitch
 * @source mui
 */
import { MuiSwitch } from "@/components/ui/mui-switch"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSwitchBasic() {
  return (
    <MuiStack direction="row" spacing={3} className="items-center">
      <MuiSwitch defaultChecked />
      <MuiSwitch />
      <MuiSwitch disabled />
      <MuiSwitch defaultChecked disabled />
    </MuiStack>
  )
}

export { MuiSwitchBasic }
