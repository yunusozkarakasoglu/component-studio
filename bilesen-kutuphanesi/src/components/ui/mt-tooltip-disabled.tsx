/**
 * MtTooltipDisabled
 * Devre dışı tooltip (saf React, Mantine kaynaklı).
 * @id 1368
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipDisabled() {
  return (
    <MtTooltip label="Not shown" disabled>
      <MtButton variant="outline">No tooltip</MtButton>
    </MtTooltip>
  )
}

export { MtTooltipDisabled }
