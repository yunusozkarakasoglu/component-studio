/**
 * MtTooltipUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1365
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipUsage() {
  return (
    <MtTooltip label="Tooltip content">
      <MtButton>Hover to reveal</MtButton>
    </MtTooltip>
  )
}

export { MtTooltipUsage }
