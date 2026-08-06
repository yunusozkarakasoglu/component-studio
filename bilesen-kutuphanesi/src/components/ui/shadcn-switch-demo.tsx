/**
 * ShadcnSwitchDemo
 * Temel örnek — uçak modu (saf React, shadcn kaynaklı).
 * @id 710
 * @category Switch
 * @subcategory ShadcnSwitch
 * @source shadcn
 */
import { ShadcnLabel } from "@/components/ui/shadcn-label"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"

function ShadcnSwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <ShadcnSwitch id="shadcn-airplane-mode" />
      <ShadcnLabel htmlFor="shadcn-airplane-mode">Airplane Mode</ShadcnLabel>
    </div>
  )
}

export { ShadcnSwitchDemo }
