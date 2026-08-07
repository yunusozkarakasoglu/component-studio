/**
 * MtTooltipOnDisabled
 * Devre dışı butonda tooltip (saf React, Mantine kaynaklı).
 * @id 1370
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipOnDisabled() {
  return (
    <MtTooltip label="This action is unavailable">
      <MtButton disabled>Disabled with tooltip</MtButton>
    </MtTooltip>
  )
}

export { MtTooltipOnDisabled }
