/**
 * MtTooltipWithIcon
 * İkonlu tooltip (saf React, Mantine kaynaklı).
 * @id 1369
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { Info, Settings } from "@/components/ui/icons"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipWithIcon() {
  return (
    <div className="flex gap-4">
      <MtTooltip label="Settings">
        <button type="button" aria-label="Settings" className="inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-border transition-colors hover:bg-muted">
          <Settings className="size-4" />
        </button>
      </MtTooltip>
      <MtTooltip label="More info" position="bottom">
        <button type="button" aria-label="Info" className="inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-border transition-colors hover:bg-muted">
          <Info className="size-4" />
        </button>
      </MtTooltip>
    </div>
  )
}

export { MtTooltipWithIcon }
