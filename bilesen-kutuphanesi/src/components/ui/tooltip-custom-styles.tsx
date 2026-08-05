/**
 * TooltipCustomStyles
 * Özelleştirilmiş örnek (saf React).
 * @id 460
 * @category Overlay
 * @subcategory Tooltip
 */
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

function TooltipCustomStyles() {
  return (
    <Tooltip delay={0}>
      <Button variant="secondary">Share link</Button>
      <TooltipContent className="rounded-lg border border-border/80 bg-background px-2.5 py-1 text-xs text-foreground shadow-sm">
        <p>Copied to clipboard</p>
      </TooltipContent>
    </Tooltip>
  )
}

export { TooltipCustomStyles }
