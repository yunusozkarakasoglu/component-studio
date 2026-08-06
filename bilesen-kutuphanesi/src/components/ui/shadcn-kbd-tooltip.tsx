/**
 * ShadcnKbdTooltip
 * Tooltip içinde tuş (saf React, shadcn kaynaklı).
 * Tooltip/Button: kütüphanenin mevcut bileşenleri (Heroui — saf React).
 * @id 647
 * @category Genel
 * @subcategory ShadcnKbd
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { ShadcnKbd, ShadcnKbdGroup } from "@/components/ui/shadcn-kbd"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

function ShadcnKbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip delay={0}>
        <Button variant="outline">Save</Button>
        <TooltipContent>
          Save Changes <ShadcnKbd>S</ShadcnKbd>
        </TooltipContent>
      </Tooltip>
      <Tooltip delay={0}>
        <Button variant="outline">Print</Button>
        <TooltipContent>
          Print Document{" "}
          <ShadcnKbdGroup>
            <ShadcnKbd>Ctrl</ShadcnKbd>
            <ShadcnKbd>P</ShadcnKbd>
          </ShadcnKbdGroup>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { ShadcnKbdTooltip }
