/**
 * MtTooltipMultiline
 * Çok satırlı tooltip (saf React, Mantine kaynaklı).
 * @id 1371
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipMultiline() {
  return (
    <MtTooltip label={<>First line<br />Second line of tooltip</>}>
      <MtButton variant="light">Multiline</MtButton>
    </MtTooltip>
  )
}

export { MtTooltipMultiline }
