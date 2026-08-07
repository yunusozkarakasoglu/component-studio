/**
 * MtTooltipGroup
 * Tooltip grupları (saf React, Mantine kaynaklı).
 * @id 1372
 * @category Overlay
 * @subcategory MtTooltip
 * @source mantine
 */
import { Bold, Italic, Underline } from "@/components/ui/icons"
import { MtTooltip } from "@/components/ui/mt-tooltip"

function MtTooltipGroup() {
  const icons = [Bold, Italic, Underline]
  const labels = ["Bold", "Italic", "Underline"]

  return (
    <div className="flex gap-1">
      {icons.map((Icon, i) => (
        <MtTooltip key={i} label={labels[i]} position="bottom">
          <button type="button" aria-label={labels[i]} className="inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-border transition-colors hover:bg-muted">
            <Icon className="size-4" />
          </button>
        </MtTooltip>
      ))}
    </div>
  )
}

export { MtTooltipGroup }
