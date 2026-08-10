/**
 * MuiSwitchLabels
 * @id 1943
 * @category Seçim
 * @subcategory MuiSwitch
 * @source mui
 */
import { MuiSwitch } from "@/components/ui/mui-switch"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSwitchLabels() {
  return (
    <MuiStack spacing={2}>
      <div className="flex items-center gap-2"><MuiSwitch defaultChecked /> <span className="text-sm">Bildirimler</span></div>
      <div className="flex items-center gap-2"><MuiSwitch /> <span className="text-sm">Karanlık mod</span></div>
      <div className="flex items-center gap-2"><MuiSwitch disabled /> <span className="text-sm">Devre dışı</span></div>
    </MuiStack>
  )
}

export { MuiSwitchLabels }
