/**
 * TooltipPlacement
 * Konum örneği: top/bottom/left/right (saf React).
 * @id 456
 * @category Overlay
 * @subcategory Tooltip
 */
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipArrow, TooltipContent } from "@/components/ui/tooltip"

function TooltipPlacement() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div />
      <Tooltip delay={0}>
        <Button className="w-full" variant="tertiary">Top</Button>
        <TooltipContent showArrow placement="top">
          <TooltipArrow />
          <p>Top placement</p>
        </TooltipContent>
      </Tooltip>
      <div />

      <Tooltip delay={0}>
        <Button className="w-full" variant="tertiary">Left</Button>
        <TooltipContent showArrow placement="left">
          <TooltipArrow />
          <p>Left placement</p>
        </TooltipContent>
      </Tooltip>

      <div className="flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Hover buttons</span>
      </div>

      <Tooltip delay={0}>
        <Button className="w-full" variant="tertiary">Right</Button>
        <TooltipContent showArrow placement="right">
          <TooltipArrow />
          <p>Right placement</p>
        </TooltipContent>
      </Tooltip>

      <div />
      <Tooltip delay={0}>
        <Button className="w-full" variant="tertiary">Bottom</Button>
        <TooltipContent showArrow placement="bottom">
          <TooltipArrow />
          <p>Bottom placement</p>
        </TooltipContent>
      </Tooltip>
      <div />
    </div>
  )
}

export { TooltipPlacement }
