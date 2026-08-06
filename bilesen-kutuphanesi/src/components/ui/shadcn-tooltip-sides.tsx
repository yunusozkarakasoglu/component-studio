/**
 * ShadcnTooltipSides
 * Yönler — top, right, bottom, left (saf React, shadcn kaynaklı).
 * @id 797
 * @category Overlay
 * @subcategory ShadcnTooltip
 * @source shadcn
 */
import {
  ShadcnTooltip,
  ShadcnTooltipContent,
  ShadcnTooltipTrigger,
} from "@/components/ui/shadcn-tooltip"

function ShadcnTooltipSides() {
  return (
    <div className="flex gap-6">
      <ShadcnTooltip>
        <ShadcnTooltipTrigger>Top</ShadcnTooltipTrigger>
        <ShadcnTooltipContent side="top">Tooltip on top</ShadcnTooltipContent>
      </ShadcnTooltip>
      <ShadcnTooltip>
        <ShadcnTooltipTrigger>Right</ShadcnTooltipTrigger>
        <ShadcnTooltipContent side="right">Tooltip on right</ShadcnTooltipContent>
      </ShadcnTooltip>
      <ShadcnTooltip>
        <ShadcnTooltipTrigger>Bottom</ShadcnTooltipTrigger>
        <ShadcnTooltipContent side="bottom">Tooltip on bottom</ShadcnTooltipContent>
      </ShadcnTooltip>
      <ShadcnTooltip>
        <ShadcnTooltipTrigger>Left</ShadcnTooltipTrigger>
        <ShadcnTooltipContent side="left">Tooltip on left</ShadcnTooltipContent>
      </ShadcnTooltip>
    </div>
  )
}

export { ShadcnTooltipSides }
