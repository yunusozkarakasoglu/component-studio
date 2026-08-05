/**
 * TooltipBasic
 * Temel örnek (saf React).
 * @id 455
 * @category Overlay
 * @subcategory Tooltip
 */
import { Button } from "@/components/ui/button"
import { Info } from "@/components/ui/icons"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

function TooltipBasic() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip delay={0}>
        <Button variant="secondary">Hover me</Button>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delay={0}>
        <Button isIconOnly variant="tertiary" aria-label="Info">
          <Info className="size-4" />
        </Button>
        <TooltipContent>
          <p>More information</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { TooltipBasic }
