/**
 * TooltipWithArrow
 * Ok + offset örneği (saf React).
 * @id 457
 * @category Overlay
 * @subcategory Tooltip
 */
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipArrow, TooltipContent } from "@/components/ui/tooltip"

function TooltipWithArrow() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip delay={0}>
        <Button variant="secondary">With Arrow</Button>
        <TooltipContent showArrow>
          <TooltipArrow />
          <p>Tooltip with arrow indicator</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delay={0}>
        <Button variant="primary">Custom Offset</Button>
        <TooltipContent showArrow offset={12}>
          <TooltipArrow />
          <p>Custom offset from trigger</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { TooltipWithArrow }
