/**
 * ShadcnPopoverDemo
 * Temel örnek — boyut ayarları (saf React, shadcn kaynaklı).
 * @id 790
 * @category Overlay
 * @subcategory ShadcnPopover
 * @source shadcn
 */
import {
  ShadcnPopover,
  ShadcnPopoverContent,
  ShadcnPopoverTrigger,
} from "@/components/ui/shadcn-popover"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnLabel } from "@/components/ui/shadcn-label"

function ShadcnPopoverDemo() {
  return (
    <ShadcnPopover>
      <ShadcnPopoverTrigger>Open popover</ShadcnPopoverTrigger>
      <ShadcnPopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <ShadcnLabel htmlFor="popover-width">Width</ShadcnLabel>
              <ShadcnInput id="popover-width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <ShadcnLabel htmlFor="popover-max-width">Max. width</ShadcnLabel>
              <ShadcnInput id="popover-max-width" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <ShadcnLabel htmlFor="popover-height">Height</ShadcnLabel>
              <ShadcnInput id="popover-height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <ShadcnLabel htmlFor="popover-max-height">Max. height</ShadcnLabel>
              <ShadcnInput id="popover-max-height" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </ShadcnPopoverContent>
    </ShadcnPopover>
  )
}

export { ShadcnPopoverDemo }
