/**
 * MtTooltipPositions
 * Konumlar (saf React, Mantine kaynaklı).
 * @id 1366
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipPositions() {
  return (
    <div className="flex flex-wrap gap-6">
      <MtTooltip label="Top" position="top"><MtButton variant="outline">Top</MtButton></MtTooltip>
      <MtTooltip label="Right" position="right"><MtButton variant="outline">Right</MtButton></MtTooltip>
      <MtTooltip label="Bottom" position="bottom"><MtButton variant="outline">Bottom</MtButton></MtTooltip>
      <MtTooltip label="Left" position="left"><MtButton variant="outline">Left</MtButton></MtTooltip>
    </div>
  )
}

export { MtTooltipPositions }
