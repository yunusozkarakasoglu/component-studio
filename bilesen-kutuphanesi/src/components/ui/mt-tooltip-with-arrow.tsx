/**
 * MtTooltipWithArrow
 * Oklu tooltip (saf React, Mantine kaynaklı).
 * @id 1367
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipWithArrow() {
  return (
    <MtTooltip label="With arrow" withArrow>
      <MtButton variant="light">Hover me</MtButton>
    </MtTooltip>
  )
}

export { MtTooltipWithArrow }
