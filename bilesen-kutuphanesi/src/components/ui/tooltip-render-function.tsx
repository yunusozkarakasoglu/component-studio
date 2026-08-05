/**
 * TooltipRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 459
 * @category Overlay
 * @subcategory Tooltip
 */
import { Button } from "@/components/ui/button"
import { Info } from "@/components/ui/icons"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

function TooltipRenderFunction() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip delay={0}>
        <Button variant="secondary">Hover me</Button>
        <TooltipContent render={(props) => <div {...props} data-custom="foo" />}>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delay={0}>
        <Button isIconOnly variant="tertiary" aria-label="Info">
          <Info className="size-4" />
        </Button>
        <TooltipContent render={(props) => <div {...props} data-custom="foo" />}>
          <p>More information</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { TooltipRenderFunction }
