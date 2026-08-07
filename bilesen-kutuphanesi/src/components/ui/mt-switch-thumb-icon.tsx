/**
 * MtSwitchThumbIcon
 * Tutamak ikonu (saf React, Mantine kaynaklı).
 * @id 1241
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { Check, X } from "@/components/ui/icons"
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchThumbIcon() {
  return (
    <div className="flex flex-col gap-3">
      <MtSwitch size="md" thumbIcon={<Check className="size-2.5 text-blue-600" />} defaultChecked />
      <MtSwitch size="md" thumbIcon={<X className="size-2.5 text-gray-500" />} />
    </div>
  )
}

export { MtSwitchThumbIcon }
