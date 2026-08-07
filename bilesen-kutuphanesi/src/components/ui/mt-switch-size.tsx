/**
 * MtSwitchSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1237
 * @category Seçim
 * @subcategory MtSwitch
 * @source mantine
 */
import { MtSwitch } from "@/components/ui/mt-switch"

function MtSwitchSize() {
  return (
    <div className="flex flex-col gap-3">
      <MtSwitch size="xs" label="Extra small" />
      <MtSwitch size="sm" label="Small" />
      <MtSwitch size="md" label="Medium" defaultChecked />
      <MtSwitch size="lg" label="Large" />
      <MtSwitch size="xl" label="Extra large" />
    </div>
  )
}

export { MtSwitchSize }
